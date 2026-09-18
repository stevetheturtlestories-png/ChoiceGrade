// Document contents remain in memory for this request; only approved fields enter the saved project.
let pendingScan = null;
let pendingReply = null;
const allowedAnswers = ['Yes', 'Partly', 'Not Clear', 'No', 'N/A'];

async function analyze(kind, body) {
  if (!window.supabase || !window.CHOICEGRADE_CONFIG?.supabaseUrl) throw new Error('Sign-in is unavailable.');
  const session = await window.supabase.createClient(window.CHOICEGRADE_CONFIG.supabaseUrl,
    window.CHOICEGRADE_CONFIG.supabaseAnonKey).auth.getSession();
  const token = session?.data?.session?.access_token;
  if (!token) throw new Error('Sign in first to analyze a document.');
  const response = await fetch('/api/analyze', { method: 'POST', headers: {
    'Content-Type': 'application/json', Authorization: `Bearer ${token}`
  }, body: JSON.stringify({ kind, ...body }) });
  const responseText = await response.text();
  let result;
  try { result = JSON.parse(responseText); } catch {
    throw new Error(`The scan server returned an unexpected response (HTTP ${response.status}). Please share this status number so we can investigate.`);
  }
  if (!response.ok) throw new Error(result.error || `Analysis failed (HTTP ${response.status}).`);
  return result;
}
function questionList(items) { return items.map(q => ({ id: q.id, text: q.text })); }
function fileData(file) { return new Promise((resolve, reject) => {
  const reader = new FileReader(); reader.onload = () => resolve(reader.result);
  reader.onerror = () => reject(new Error('Could not read the file.')); reader.readAsDataURL(file);
}); }
function reviewRows(answers, prefix) {
  return answers.map((x, i) => {
    const q = allQuestions().find(q => q.id === x.id);
    if (!q) return '';
    return `<div class="scanRow"><strong>${esc(named(q.text, currentContractor()))}</strong>
      <div class="muted">Evidence: ${esc(x.evidence || 'No specific excerpt found')}</div>
      <label>Use this answer <select id="${prefix}-${i}">${allowedAnswers.map(a =>
        `<option ${a === x.answer ? 'selected' : ''}>${a}</option>`).join('')}</select></label></div>`;
  }).join('');
}
async function scanQuote() {
  const file = $('quoteFile').files[0];
  const status = $('scanStatus');
  pendingScan = null; $('scanPreview').innerHTML = '';
  if (!file || !['application/pdf', 'image/jpeg', 'image/png', 'image/webp'].includes(file.type) || file.size > 2_500_000) {
    status.textContent = 'Choose a PDF, JPG, PNG or WebP under 2.5 MB.'; return;
  }
  status.textContent = 'Reading the quote…';
  try {
    const data = await fileData(file);
    const result = await analyze('quote', { file: { type: file.type, data }, questions: questionList(allQuestions()) });
    pendingScan = { contractorIndex: state.contractorIndex, result };
    const fields = [['name', 'Contractor name'], ['price', 'Quoted price'], ['deposit', 'Deposit'],
      ['priceType', 'Price type'], ['availability', 'Availability'], ['duration', 'Duration']];
    const eq = state.project.category === 'HVAC' ? ['brand', 'model', 'efficiency', 'partsWarranty', 'labourWarranty'] : [];
    $('scanPreview').innerHTML = `<h3>Review the suggested details</h3><p class="muted">Edit the fields below. “Not Clear” means the document did not establish the answer. Confirm any details discussed outside this quote in the next step.</p>`+
      fields.map(([key, label]) => `<label>${label}<input id="scan-${key}" value="${esc(result[key] ?? '')}"></label>`).join('')+
      eq.map(key => `<label>Equipment ${esc(key)}<input id="scan-eq-${key}" value="${esc(result.equipment?.[key] ?? '')}"></label>`).join('')+
      reviewRows(result.answers, 'scan-answer')+
      '<button type="button" onclick="applyScan()">Use reviewed details</button>';
    status.textContent = 'Review each suggested answer before applying it.';
    $('quoteFile').value = '';
  } catch (e) { status.textContent = e.message; }
}
function applyScan() {
  if (!pendingScan || pendingScan.contractorIndex !== state.contractorIndex) return;
  const c = currentContractor(), r = pendingScan.result;
  const val = key => $(`scan-${key}`).value.trim();
  c.name = val('name') || c.name;
  for (const key of ['price', 'deposit']) if (val(key) && Number.isFinite(+val(key)) && +val(key) >= 0) c[key] = +val(key);
  c.priceType = ['Fixed Price', 'Estimate', 'Time & Materials', 'Not Sure'].includes(val('priceType')) ? val('priceType') : 'Not Sure';
  c.availability = val('availability'); c.duration = val('duration');
  if (state.project.category === 'HVAC') for (const key of ['brand', 'model', 'efficiency', 'partsWarranty', 'labourWarranty'])
    c.equipment[key] = $(`scan-eq-${key}`).value.trim();
  r.answers.forEach((x, i) => {
    const answer = $(`scan-answer-${i}`)?.value;
    if (!allowedAnswers.includes(answer)) return;
    c.answers[x.id] = answer; c.originalAnswers[x.id] = answer;
  });
  // The form reflects the approved extraction; homeowner can correct it before continuing.
  pendingScan = null; renderContractor(); saveNow(false);
  $('scanStatus').textContent = 'Reviewed details applied. Confirm the form, then continue the question review.';
}
async function checkReply() {
  const i = Number($('replyContractor').value), c = state.contractors[i];
  const status = $('replyStatus'); pendingReply = null; $('replyPreview').innerHTML = '';
  if (!c || !$('replyText').value.trim()) { status.textContent = 'Choose a contractor and paste their reply.'; return; }
  const questions = clarificationItems(c);
  if (!questions.length) { status.textContent = 'No unanswered clarification questions remain for this contractor.'; return; }
  status.textContent = 'Checking the reply…';
  try {
    const result = await analyze('reply', { reply: $('replyText').value.trim(), questions: questionList(questions) });
    pendingReply = { contractorIndex: i, answers: result.answers.filter(x => questions.some(q => q.id === x.id)) };
    $('replyPreview').innerHTML = '<h3>Review suggested updates</h3><p class="muted">Unanswered questions stay open. You decide which suggestions to save.</p>'+
      pendingReply.answers.map((x, n) => {
        const q = questions.find(q => q.id === x.id);
        return `<div class="scanRow"><label><input type="checkbox" id="reply-use-${n}" ${x.answer === 'Not Clear' ? '' : 'checked'}> ${esc(named(q.text, c))}</label>
          <div class="muted">Evidence: ${esc(x.evidence || 'No supporting excerpt')}</div>
          <select id="reply-answer-${n}">${allowedAnswers.filter(a => a !== 'N/A').map(a => `<option ${x.answer === a ? 'selected' : ''}>${a}</option>`).join('')}</select></div>`;
      }).join('')+'<button type="button" onclick="applyReply()">Save selected updates</button>';
    status.textContent = 'Confirm the suggested updates below.';
  } catch (e) { status.textContent = e.message; }
}
function applyReply() {
  if (!pendingReply) return;
  const { contractorIndex, answers } = pendingReply;
  const c = state.contractors[contractorIndex];
  answers.forEach((x, n) => {
    if (!$(`reply-use-${n}`)?.checked) return;
    const answer = $(`reply-answer-${n}`)?.value;
    if (!allowedAnswers.includes(answer) || answer === 'N/A') return;
    ensureClarifications(c).clarifications[x.id] = {
      answer, notes: x.evidence, updatedAt: new Date().toISOString()
    };
  });
  pendingReply = null; saveNow(false); renderResults();
  $('replyStatus').textContent = 'Selected updates saved. Check the revised report above.';
  $('replyPreview').innerHTML = '';
}
