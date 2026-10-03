const CORE_QUESTIONS=[{"id":"price_total","category":"Price","text":"Is {contractor}'s total price clearly shown?","weight":5,"why":"You should be able to tell what the contractor expects the job to cost without having to calculate it yourself or guess what's included."},{"id":"price_extras","category":"Price","text":"Does {contractor}'s quote clearly identify anything that could cost extra?","weight":5,"why":"A low quote can become expensive if important items aren't included. Look for possible extra charges, estimated amounts, or work that may be billed separately."},{"id":"taxes","category":"Price","text":"Is it clear whether applicable taxes are included in {contractor}'s price?","weight":3,"why":"Two quotes that look similar can actually cost different amounts if one includes applicable taxes and another doesn't."},{"id":"scope","category":"What You're Getting","text":"Does {contractor}'s quote clearly explain the work they will do?","weight":5,"why":"You should be able to understand exactly what you're paying {contractor} to accomplish."},{"id":"equipment","category":"What You're Getting","text":"Does {contractor}'s quote clearly identify the main equipment or materials you're getting?","weight":3,"why":"Brand, model, size, quality and type can make a significant difference in price. Two contractors may appear to be quoting the same project while actually providing different products."},{"id":"exclusions","category":"What You're Getting","text":"Does {contractor}'s quote clearly explain what is NOT included?","weight":5,"why":"Work that isn't included could become your responsibility or result in additional costs later."},{"id":"cleanup","category":"What You're Getting","text":"Does {contractor}'s quote clearly say who is responsible for removing old materials or equipment, cleanup, and disposal when the job is finished?","weight":3,"why":"Removing old equipment or materials, hauling debris and disposal can add significant costs. Make sure you understand whether these services are included in the quoted price."},{"id":"subs","category":"The Contractor","text":"Will any of {contractor}'s work be done by subcontractors or another company?","weight":3,"why":"This is asked so you aren't surprised to discover that some or all of the work has been subcontracted. Subcontracting isn't necessarily a problem, but you should know who will actually be doing the work and who is responsible for it."},{"id":"license_insurance","category":"The Contractor","text":"Have you checked whether {contractor} has the licences and insurance required for this type of work where you live?","weight":5,"why":"Requirements vary depending on where you live and the type of work being performed. ChoiceGrade isn't asking you to know the rules yourself—only to confirm that the contractor meets any requirements that apply to your project."},{"id":"start","category":"Schedule","text":"Does {contractor} give you an approximate start date or tell you how soon they can begin?","weight":3,"why":"You don't necessarily need an exact start date before accepting the quote, but you should have a reasonable idea of when the contractor expects to be available."},{"id":"duration","category":"Schedule","text":"Does {contractor} give you an estimate of how long the work should take once it begins?","weight":3,"why":"Knowing whether the project is expected to take two days, two weeks or two months can affect which contractor is right for you. The exact timeline may change, but you should have a reasonable expectation before agreeing to the work."},{"id":"upfront","category":"Payment","text":"Does {contractor}'s quote clearly show how much you need to pay upfront before work begins?","weight":5,"why":"You should know exactly how much money you're being asked to pay before work starts. ChoiceGrade will also compare the upfront payment with the total quote and with the other contractors you're considering."},{"id":"payments","category":"Payment","text":"Does {contractor}'s quote clearly explain when and how much you will need to pay throughout the project?","weight":5,"why":"Some projects require payments at different stages. You should understand the complete payment schedule before agreeing to the work so there are no surprises later."},{"id":"final_payment","category":"Payment","text":"Is {contractor}'s final payment due only after the agreed work is completed?","weight":5,"why":"Knowing when the final payment is due helps you understand whether you'll have an opportunity to confirm the agreed work has been completed before the contractor is fully paid."},{"id":"extra_approval","category":"Changes & Extra Costs","text":"Does {contractor} need your approval before doing any additional work that will cost you more?","weight":5,"why":"Unexpected problems can come up during a project. You should know that the contractor will discuss additional work and its cost with you before doing it rather than surprising you with a larger bill afterward."},{"id":"change_pricing","category":"Changes & Extra Costs","text":"Does {contractor}'s quote explain how the price will be handled if you request changes or additional work?","weight":3,"why":"You may decide to change something after the project starts. Knowing how those changes will be priced and approved helps prevent misunderstandings and unexpected costs."},{"id":"warranty","category":"Warranty & Completion","text":"Does {contractor} clearly explain what warranties are included and what each warranty covers?","weight":5,"why":"There may be separate warranties for equipment or materials and for workmanship. Make sure you understand what is covered, for how long, and who you contact if there's a problem."},{"id":"testing","category":"Warranty & Completion","text":"Will {contractor} test the completed work and make sure everything is working properly before the job is considered finished?","weight":3,"why":"A project isn't complete simply because the installation is finished. The contractor should check that the completed work or equipment operates properly before considering the job done."},{"id":"permits","category":"Warranty & Completion","text":"Does {contractor} explain who is responsible for any permits or inspections that may be required for your project?","weight":3,"why":"Some projects require permits or inspections, and the requirements vary depending on the type of work and where you live. You should understand whether the contractor will handle these requirements or whether you are expected to."},{"id":"promises","category":"Warranty & Completion","text":"Are any important promises or agreements you've discussed with {contractor} included in writing?","weight":5,"why":"If a contractor promised something important—such as extra work, a specific product, a deadline, or something at no extra charge—make sure it's included in the written quote or agreement."}];
const MODULES={"HVAC":[{"id":"hvac_model","text":"Does {contractor}'s quote identify the exact brand and model of the major HVAC equipment being installed?","weight":3,"why":"Exact model information makes it easier to compare equipment quality, features, efficiency, and warranty."},{"id":"hvac_sizing","text":"Has {contractor} explained why the proposed HVAC equipment is appropriately sized for your home?","weight":5,"why":"Proper sizing matters to comfort, efficiency and equipment life. Bigger is not automatically better."},{"id":"hvac_eff","text":"Does {contractor}'s quote clearly state the applicable efficiency rating for the equipment?","weight":3,"why":"Efficiency ratings can affect operating cost and help you compare equipment more fairly."},{"id":"hvac_warranties","text":"Does {contractor} clearly identify equipment/material warranty and labour/workmanship warranty separately?","weight":5,"why":"A long equipment warranty does not necessarily mean labour is covered for the same length of time."},{"id":"hvac_service","text":"Does {contractor} explain who you contact for warranty service if something goes wrong?","weight":3,"why":"A warranty is most useful when you know who actually handles service and how to get help."}],"Electrical":[{"id":"elec_products","text":"Does {contractor}'s quote clearly identify the main electrical equipment or products being installed?","weight":3,"why":"Panels, breakers, EV chargers, generators and other equipment can vary significantly in price and features."},{"id":"elec_upgrades","text":"Has {contractor} explained whether your existing electrical system needs any upgrades or changes to support the new work?","weight":5,"why":"A project may require panel, service, breaker, wiring or other upgrades that materially change the total cost."},{"id":"elec_repairs","text":"If walls, ceilings, or other finished surfaces need to be opened, does {contractor} explain who is responsible for repairing them afterward?","weight":3,"why":"Electrical work may require access behind finished surfaces, and repair work is not always included."}],"Plumbing":[{"id":"plumb_products","text":"Does {contractor}'s quote clearly identify the main plumbing fixtures, equipment, or materials being installed?","weight":3,"why":"Fixtures, water heaters, pumps, valves and piping materials can vary considerably in price and quality."},{"id":"plumb_changes","text":"Has {contractor} explained whether any existing plumbing needs to be repaired, replaced, or modified to complete the new work?","weight":5,"why":"Existing piping, valves, drains or other components can create additional work and cost."},{"id":"plumb_repairs","text":"If walls, ceilings, floors, cabinets, or other finished surfaces need to be opened, does {contractor} explain who is responsible for repairing them afterward?","weight":3,"why":"Plumbing work can require access behind finishes, and restoration may be separate from the plumbing quote."}],"Roofing":[{"id":"roof_product","text":"Does {contractor}'s quote clearly identify the roofing materials being installed, including brand and product where applicable?","weight":3,"why":"Roofing products can vary significantly in quality, expected life, warranty and price."},{"id":"roof_hidden","text":"Does {contractor} explain what will happen if damaged roof decking or other hidden damage is discovered after the old roofing is removed?","weight":5,"why":"Some roof problems are only visible after tear-off. You should understand how extra repairs will be approved and priced."},{"id":"roof_system","text":"Does {contractor}'s quote explain which parts of the complete roofing system are included—not just the visible roofing material?","weight":5,"why":"Underlayment, flashing, vents, drip edge and water protection can materially change what you're buying."},{"id":"roof_protect","text":"Does {contractor} explain how your home and property will be protected while the roofing work is being done?","weight":3,"why":"Roofing creates debris and work above your home, so protection of landscaping, siding, windows and driveways matters."}],"Renovation / Remodeling":[{"id":"reno_finishes","text":"Does {contractor}'s quote clearly explain which finishes, fixtures, and materials are included in the price?","weight":5,"why":"Flooring, cabinets, countertops, tile, fixtures and finishes can vary enormously in price."},{"id":"reno_allowances","text":"Are any estimated or placeholder amounts for materials clearly identified in {contractor}'s quote?","weight":5,"why":"Contractors sometimes include placeholder amounts—often called allowances. If your final selection costs more, you may owe the difference."},{"id":"reno_hidden","text":"Does {contractor} explain what will happen if hidden problems are discovered after demolition begins?","weight":5,"why":"Renovations can uncover water damage, rot, unsafe wiring, plumbing issues and other hidden conditions."},{"id":"reno_protect","text":"Does {contractor}'s quote explain what areas of your home will be affected and how they will be protected during the renovation?","weight":3,"why":"Dust, debris, tools and construction traffic can affect areas beyond the immediate work zone."}],"Windows & Doors":[{"id":"win_product","text":"Does {contractor}'s quote clearly identify the windows or doors being installed, including manufacturer, product line, and important features where applicable?","weight":3,"why":"Windows and doors that look similar can differ significantly in construction, efficiency, glass, hardware and price."},{"id":"win_install","text":"Does {contractor}'s quote explain what installation work is included around the new windows or doors?","weight":5,"why":"Trim, insulation, sealing, flashing, caulking and finishing may be required beyond installing the visible unit."},{"id":"win_finish","text":"Does {contractor} explain who is responsible for repairing or finishing any surfaces affected by the installation?","weight":3,"why":"Drywall, paint, siding, stucco or trim can be disturbed during replacement."}],"Landscaping / Outdoor":[{"id":"land_materials","text":"Does {contractor}'s quote clearly identify the main materials, products, or finishes being used?","weight":3,"why":"Outdoor materials can make a large difference in price, appearance and lifespan."},{"id":"land_prep","text":"Does {contractor}'s quote explain what site preparation is included before the new work begins?","weight":5,"why":"Excavation, grading, removal and base preparation can strongly affect long-term performance."},{"id":"land_drain","text":"Does {contractor} explain how drainage or water movement will be handled if it could be affected by the project?","weight":5,"why":"Outdoor work can change where water flows. Poor drainage can cause standing water, erosion or problems around your home."},{"id":"land_restore","text":"Does {contractor}'s quote explain what restoration of the surrounding property is included when the work is finished?","weight":3,"why":"Construction equipment and excavation can disturb grass, gardens, driveways and other nearby areas."}],"Pools, Spas & Hot Tubs":[{"id":"spa_product","text":"Does {contractor}'s quote clearly identify the exact pool, spa, hot tub, or major equipment being supplied?","weight":3,"why":"Brand, model, capacity and included equipment can materially change the value of the proposal."},{"id":"spa_ready","text":"Does {contractor}'s quote clearly explain everything required to make the installation ready to use?","weight":5,"why":"Electrical work, pads, delivery, crane service, hookups, startup and accessories may be separate costs."},{"id":"spa_trades","text":"Does {contractor} explain whether any additional contractors or trades will be required?","weight":5,"why":"A quote may cover the equipment but leave electrical, concrete, plumbing or other work to you."},{"id":"spa_service","text":"Does {contractor}'s quote explain what equipment warranty and ongoing service support you'll receive?","weight":3,"why":"Knowing who handles service matters when equipment needs repair after installation."}],"General Repair / Other":[{"id":"general_products","text":"Does {contractor}'s quote clearly identify the materials, equipment, or replacement parts that will be used, where applicable?","weight":3,"why":"Products being supplied can affect price, quality and how long the repair lasts."},{"id":"general_unknown","text":"Has {contractor} explained whether completing the repair could uncover or require additional work?","weight":5,"why":"Sometimes the full extent of a problem isn't visible until work begins."}]};
const HEAT_PUMP_QUESTIONS=[{"id":"hp_capacity","text":"Does {contractor}'s quote show how much heat the proposed heat pump delivers at your area's cold-weather design temperature, compared with your home's heating needs?","weight":5,"why":"A low advertised operating temperature does not tell you whether the system can heat your home at that temperature. Ask for the proposed unit's heating output and the home's calculated heating load at a relevant local outdoor temperature."},{"id":"hp_backup","text":"Does {contractor} explain what backup heat is included, if any, and when it would operate?","weight":5,"why":"A gas furnace, electric backup heat, and no backup are different proposals. The quote should explain the plan for cold weather and what happens if the heat pump is unavailable."},{"id":"hp_match","text":"Does {contractor}'s quote identify the exact outdoor unit and indoor unit or coil, including the rated combination used for the stated performance?","weight":5,"why":"Ratings and rebate eligibility can depend on the exact combination installed. Ask for model numbers and a matching AHRI reference or equivalent documentation where available."},{"id":"hp_duct_electrical","text":"Does {contractor} explain whether your existing ductwork (if applicable) and electrical system can support the proposed heat pump, and what changes are included?","weight":5,"why":"Airflow, panel capacity, new circuits, and related work can change installation cost. For ductless systems, ductwork may not apply, but electrical requirements still need to be confirmed."},{"id":"hp_controls","text":"Does {contractor} explain whether your thermostat and any existing zoning will work with the proposed heat pump, and whether any features would be lost?","weight":3,"why":"Some systems need particular controls to use all their features. Ask what is included and how heating, cooling, and backup heat will be controlled."},{"id":"hp_rebate","text":"If rebates are part of the price, does {contractor} explain the conditions for eligibility and who pays if a rebate is denied?","weight":5,"why":"A quoted price after incentives can change if the installed equipment combination or other requirements do not qualify. If no rebate is involved, select N/A."}];
const SUBTYPES={"HVAC":["Furnace replacement / upgrade","Air conditioner replacement / upgrade","Heat pump","Garage / unit heater","HRV / ERV","Boiler / hydronic heating","Mini-split / ductless system","Combination system","Other HVAC"],"Electrical":["EV charger","Panel / service upgrade","Generator","Lighting","Wiring / renovation","Other electrical"],"Plumbing":["Water heater","Fixtures","Repiping","Drain / sewer","Water treatment","Other plumbing"],"Roofing":["Roof replacement","Asphalt shingle roof replacement","Metal roof replacement","Flat / low-slope roof replacement","Roof repair","Other roofing"],"Renovation / Remodeling":["Kitchen","Bathroom","Basement","Whole-home renovation","Addition","Other renovation"],"Windows & Doors":["Windows","Exterior doors","Patio / sliding doors","Multiple windows & doors","Other"],"Landscaping / Outdoor":["Deck","Fence","Patio / pavers","Retaining wall","Grading / drainage","Sod / landscaping","Other outdoor"],"Pools, Spas & Hot Tubs":["Hot tub","Swimming pool","Spa equipment","Pool / spa renovation","Other"],"General Repair / Other":["General repair","Handyman project","Other"]};

const FACTOR={"Yes":1,"Partly":0.5,"Not Clear":0.25,"No":0,"N/A":null};
const STORAGE_KEY="choicegrade-v5-project";
const ANSWERS=[["Yes","Clearly addressed"],["Partly","Some information provided"],["Not Clear","I can't tell"],["No","Not addressed"],["N/A","Doesn't apply"]];
let state={version:6.2,project:{count:3,country:"US",category:"HVAC",subtype:"Furnace replacement / upgrade",currency:"USD"},contractors:[],contractorIndex:0,qIndex:0,phase:"core",screen:"welcome"};
const $=id=>document.getElementById(id);
function esc(s){return String(s??"").replace(/[&<>"']/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[m]));}
function money(n){return new Intl.NumberFormat(state.project.country==="CA"?"en-CA":"en-US",{style:"currency",currency:state.project.currency||"USD",maximumFractionDigits:0}).format(Number(n)||0);}
function moduleQuestions(){return (MODULES[state.project.category]||[]).concat(state.project.category==="HVAC"&&state.project.subtype==="Heat pump"?HEAT_PUMP_QUESTIONS:[]);}
function allQuestions(){return CORE_QUESTIONS.concat(moduleQuestions());}
function named(t,c){return t.replaceAll("{contractor}",c.name||`Contractor ${state.contractorIndex+1}`);}
function currentContractor(){return state.contractors[state.contractorIndex];}
function ensureClarifications(c){if(!c.clarifications)c.clarifications={};if(!c.originalAnswers)c.originalAnswers={};return c;}
function clarificationAnswer(c,id){const x=ensureClarifications(c).clarifications[id];return x&&x.answer?x.answer:null;}
function effectiveAnswer(c,id){return clarificationAnswer(c,id)||c.answers[id];}
function originalAnswer(c,id){return c.originalAnswers?.[id]??c.answers[id];}
function isOriginalClarificationItem(c,q){return ["No","Not Clear"].includes(originalAnswer(c,q.id));}
function isResolvedClarification(c,q){const x=ensureClarifications(c).clarifications[q.id];return !!(x&&x.answer&&x.answer!=="Not Clear");}
function isUnresolvedClarification(c,q){return isOriginalClarificationItem(c,q)&&!isResolvedClarification(c,q);}
function go(id){document.querySelectorAll(".screen").forEach(x=>x.classList.remove("active"));$(id)?.classList.add("active");state.screen=id;saveNow(false);window.scrollTo(0,0);}
function saveNow(show=false){if(state.contractors.length)localStorage.setItem(STORAGE_KEY,JSON.stringify(state));refreshResume();if(show&&state.contractors.length)alert("Comparison saved on this device.");}
function refreshResume(){if($("resumeBtn"))$("resumeBtn").classList.toggle("hidden",!localStorage.getItem(STORAGE_KEY));}
function resumeSaved(){try{state=JSON.parse(localStorage.getItem(STORAGE_KEY));state.contractors?.forEach(ensureClarifications);hydrateSetup();routeToState();}catch(e){alert("Saved comparison could not be loaded.");}}
function routeToState(){if(state.screen==="contractor")renderContractor();if(state.screen==="questions")renderQuestion();if(state.screen==="moduleIntro")renderModuleIntro();if(state.screen==="reputation")renderReputation();if(state.screen==="results")renderResults();go(state.screen||"contractor");}
const CATEGORY_LABELS={"HVAC":"Heating & cooling (HVAC)","Electrical":"Electrical","Plumbing":"Plumbing","Roofing":"Roof replacement / roofing","Renovation / Remodeling":"Renovation / remodeling","Windows & Doors":"Windows & doors","Landscaping / Outdoor":"Landscaping / outdoor","Pools, Spas & Hot Tubs":"Pools, spas & hot tubs","General Repair / Other":"General repair / other"};
function renderSetup(){const cat=$("category");const moduleCats=Object.keys(MODULES),setupCats=Object.keys(SUBTYPES);const missing=moduleCats.filter(x=>!setupCats.includes(x)),unwired=setupCats.filter(x=>!moduleCats.includes(x));if(missing.length||unwired.length)console.error("ChoiceGrade category/module mismatch",{missing,unwired});cat.innerHTML=setupCats.map(x=>`<option value="${esc(x)}">${esc(CATEGORY_LABELS[x]||x)}</option>`).join("");cat.value=state.project.category&&SUBTYPES[state.project.category]?state.project.category:"HVAC";renderSubtypeOptions();selectedCount(state.project.count||3);}
function renderSubtypeOptions(){const cat=$("category").value;$("subtype").innerHTML=(SUBTYPES[cat]||["Other"]).map(x=>`<option>${esc(x)}</option>`).join("");}
function selectedCount(n){state.project.count=Number(n);document.querySelectorAll(".choicePill").forEach(b=>b.classList.toggle("selected",Number(b.dataset.n)===Number(n)));}
function hydrateSetup(){if($("projectName"))$("projectName").value=state.project.name||"";if($("country"))$("country").value=state.project.country||"US";if($("region"))$("region").value=state.project.region||"";if($("category")){$("category").value=state.project.category||"HVAC";renderSubtypeOptions();$("subtype").value=state.project.subtype||SUBTYPES[$("category").value][0];}selectedCount(state.project.count||3);}
function startProject(){state.project={name:$("projectName").value||"Home project",country:$("country").value,region:$("region").value.trim(),category:$("category").value,subtype:$("subtype").value,count:Number(state.project.count||3),currency:$("country").value==="CA"?"CAD":"USD"};state.contractors=Array.from({length:state.project.count},()=>({name:"",email:"",price:0,deposit:0,tax:0,knownExtras:[],priceType:"Fixed Price",availability:"",duration:"",equipment:{brand:"",model:"",efficiency:"",partsWarranty:"",labourWarranty:""},answers:{},originalAnswers:{},clarifications:{},reputation:{skipped:false,rating:"",count:"",recent:"Not Sure",recurring:"Not Sure",similar:"Not Sure"}}));state.contractorIndex=0;renderContractor();go("contractor");}
function ordinalWord(n){return ["first","second","third","fourth","fifth"][n-1]||`${n}th`;}
function renderContractor(){const c=currentContractor();renderQuoteScanState();const position=ordinalWord(state.contractorIndex+1);$("contractorProgress").textContent=`Contractor ${state.contractorIndex+1} of ${state.contractors.length}`;const scanTitle=$("quoteScanTitle");if(scanTitle)scanTitle.textContent=`Add your ${position} contractor quote`;const hvac=state.project.category==="HVAC";$("contractorForm").innerHTML=`<div class="eyebrow">STEP 2 · CONTRACTOR ${state.contractorIndex+1} OF ${state.contractors.length}</div><h2>${position.charAt(0).toUpperCase()+position.slice(1)} contractor details</h2><label>Contractor / company name<input id="cName" value="${esc(c.name)}" placeholder="e.g. Joe's Heating"></label><label>Email (optional)<input id="cEmail" type="email" value="${esc(c.email)}"></label><div class="grid"><label>Quoted price<input id="cPrice" type="number" value="${c.price||""}"></label><label>Upfront payment / deposit<input id="cDeposit" type="number" value="${c.deposit||""}"></label></div><div class="grid"><label>Price type<select id="cPriceType">${["Fixed Price","Estimate","Time & Materials","Not Sure"].map(x=>`<option ${x===c.priceType?"selected":""}>${x}</option>`).join("")}</select></label><label>Additional tax amount (if not included)<input id="cTax" type="number" value="${c.tax||""}"></label></div><div class="grid"><label>Approximate start / availability<input id="cAvailability" value="${esc(c.availability)}" placeholder="e.g. 2–3 weeks"></label><label>Expected duration<input id="cDuration" value="${esc(c.duration)}" placeholder="e.g. 2 days"></label></div>${hvac?`<div class="whyBox"><strong>HVAC equipment details (optional)</strong><div>These appear in the side-by-side comparison.</div></div><div class="grid"><label>Brand<input id="eqBrand" value="${esc(c.equipment.brand)}"></label><label>Model<input id="eqModel" value="${esc(c.equipment.model)}"></label></div><div class="grid"><label>Efficiency rating<input id="eqEff" value="${esc(c.equipment.efficiency)}"></label><label>Parts / equipment warranty<input id="eqParts" value="${esc(c.equipment.partsWarranty)}"></label></div><label>Labour / workmanship warranty<input id="eqLabour" value="${esc(c.equipment.labourWarranty)}"></label>`:""}<button onclick="saveContractor()">${state.contractorIndex===state.contractors.length-1?"Start quote review":"Save & next contractor"}</button>`;}
let pendingQuotePages=[];
function renderQuotePageList(){
 const list=$("quotePageList"),add=$("addQuotePageButton"),analyze=$("analyzeQuoteButton");
 if(!list)return;
 list.innerHTML=pendingQuotePages.map((file,i)=>`<div class="whyBox" style="margin-top:8px"><strong>Page ${i+1}</strong><div>${esc(file.name)}</div><button type="button" class="ghost" onclick="removeQuotePage(${i})">Remove</button></div>`).join("");
 if(add)add.textContent=pendingQuotePages.length?"+ Add another page to this quote":"+ Add first page";
 if(analyze)analyze.disabled=!pendingQuotePages.length;
}
function addQuotePages(fileList){
 const files=[...(fileList||[])];if(!files.length)return;
 const hasPdf=files.some(f=>f.type==="application/pdf"||f.name.toLowerCase().endsWith(".pdf"));
 if(hasPdf){
  if(files.length>1||pendingQuotePages.length){alert("A PDF is already a complete quote file. Remove the current pages before adding a PDF.");return;}
  pendingQuotePages=[files[0]];
 }else{
  if(pendingQuotePages.some(f=>f.type==="application/pdf"||f.name.toLowerCase().endsWith(".pdf"))){alert("Remove the PDF before adding image pages.");return;}
  pendingQuotePages.push(...files.filter(f=>f.type.startsWith("image/")));
 }
 const input=$("quoteFile");if(input)input.value="";
 renderQuotePageList();
}
function chooseAnotherQuotePage(){const input=$("quoteFile");if(input)input.click();}
function removeQuotePage(i){pendingQuotePages.splice(i,1);renderQuotePageList();}
function renderQuoteScanState(){
 const card=$("quoteScanCard"),status=$("quoteScanStatus"),details=$("quoteTextDetails"),txt=$("quoteText");
 if(!card)return;const c=currentContractor();
 renderQuotePageList();
 if(c?.quoteScan&&(c.quoteScan.text||c.quoteScan.aiAnalyzed)){
  status?.classList.remove("hidden");
  if(c.quoteScan.text){details?.classList.remove("hidden");if(txt)txt.value=c.quoteScan.text;}else details?.classList.add("hidden");
  if(status)status.innerHTML=`<strong>Quote scanned.</strong> ${c.quoteScan.fileName?esc(c.quoteScan.fileName):""} — review the pre-filled details below, then continue.`;
 }else{status?.classList.add("hidden");details?.classList.add("hidden");if(txt)txt.value="";}
}
function skipQuoteScan(){pendingQuotePages=[];renderQuotePageList();const card=$("quoteScanCard");if(card)card.classList.add("scanSkipped");}
async function fileToDataUrl(file){return await new Promise((resolve,reject)=>{const r=new FileReader();r.onload=()=>resolve(r.result);r.onerror=()=>reject(new Error("Could not read image."));r.readAsDataURL(file);});}
async function scanQuoteFile(){
 const files=[...pendingQuotePages],status=$("quoteScanStatus"),details=$("quoteTextDetails");
 if(!files.length){alert("Add at least one quote page first.");return;}
 const pdfs=files.filter(f=>f.type==="application/pdf"||f.name.toLowerCase().endsWith(".pdf")),images=files.filter(f=>f.type.startsWith("image/"));
 if(pdfs.length&&files.length>1){alert("Use either one PDF or image pages for a quote, not both.");return;}
 status.classList.remove("hidden");status.textContent=`Reading ${files.length>1?files.length+" quote pages":"quote"}…`;
 try{
  const c=currentContractor();c.name="";c.price=0;c.deposit=0;c.availability="";c.duration="";c.priceType="Not Sure";c.answers={};c.originalAnswers={};
  if(c.equipment)c.equipment={brand:"",model:"",efficiency:"",partsWarranty:"",labourWarranty:""};
  if(images.length){
   status.textContent=`Reading ${images.length} original quote image${images.length===1?"":"s"} with smart vision…`;
   const imageDataUrls=[];for(const file of images)imageDataUrls.push(await fileToDataUrl(file));
   c.quoteScan={fileName:images.map((f,i)=>`Page ${i+1}: ${f.name}`).join(", "),pageCount:images.length,text:"",imageDataUrls,scannedAt:new Date().toISOString(),suggestedAnswers:{}};
   try{
    await analyzeQuoteWithAI();c.quoteScan.imageDataUrls=null;if(!c.name)c.name="Company name not identified";
    pendingQuotePages=[];renderContractor();saveNow(false);
    const s=$("quoteScanStatus");if(s)s.innerHTML=`<strong>Smart vision scan complete.</strong> ChoiceGrade read ${images.length} page${images.length===1?"":"s"} together as one quote. Review the pre-filled details below, then tap ${state.contractorIndex===state.contractors.length-1?"Start quote review":"Save & next contractor"}.`;
    return;
   }catch(visionError){
    console.warn("Direct vision unavailable, falling back to OCR:",visionError);status.textContent="Smart vision was unavailable. Trying text recognition…";
    let combined="";for(let i=0;i<images.length;i++){status.textContent=`Reading page ${i+1} of ${images.length}…`;combined+=`\n--- PAGE ${i+1} ---\n`+await extractImageText(images[i],status);}
    c.quoteScan.text=combined;c.quoteScan.imageDataUrls=null;
   }
  }else{
   const file=pdfs[0];c.quoteScan={fileName:file.name,pageCount:null,text:await extractPdfText(file),scannedAt:new Date().toISOString(),suggestedAnswers:{}};
  }
  c.quoteScan.text=(c.quoteScan.text||"").replace(/\u0000/g," ").replace(/[ \t]+/g," ").replace(/\n{3,}/g,"\n\n").trim();
  if(c.quoteScan.text.length<20)throw new Error("I couldn't read enough text from this quote. Try clearer images, or enter the details manually.");
  details.classList.remove("hidden");$("quoteText").value=c.quoteScan.text;analyzeQuoteText();
  status.innerHTML="<strong>Quote text read.</strong> ChoiceGrade is now checking the wording and context…";
  try{await analyzeQuoteWithAI();}catch(aiError){console.warn("AI quote analysis unavailable:",aiError);}
  if(!c.name)c.name="Company name not identified";pendingQuotePages=[];renderContractor();saveNow(false);
  const s=$("quoteScanStatus");if(s)s.innerHTML=`<strong>Scan complete.</strong> Review the pre-filled details below, then tap ${state.contractorIndex===state.contractors.length-1?"Start quote review":"Save & next contractor"}.`;
 }catch(e){status.textContent=e?.message||"This quote could not be read. You can enter the details manually.";}
}
async function extractPdfText(file){
 const pdfjs=await import("https://cdn.jsdelivr.net/npm/pdfjs-dist@4.8.69/build/pdf.min.mjs");
 pdfjs.GlobalWorkerOptions.workerSrc="https://cdn.jsdelivr.net/npm/pdfjs-dist@4.8.69/build/pdf.worker.min.mjs";
 const pdf=await pdfjs.getDocument({data:new Uint8Array(await file.arrayBuffer())}).promise;
 let out="";
 for(let p=1;p<=pdf.numPages;p++){const page=await pdf.getPage(p),content=await page.getTextContent();out+=content.items.map(x=>x.str).join(" ")+"\n";}
 return out;
}
async function extractImageText(file,status){
 if(!window.Tesseract)throw new Error("Image reader did not load. Try again or enter the details manually.");
 status.textContent="Reading text from image…";
 const r=await Tesseract.recognize(file,"eng",{logger:m=>{if(m.status==="recognizing text"&&status)status.textContent=`Reading image… ${Math.round((m.progress||0)*100)}%`;}});
 return r?.data?.text||"";
}
function analyzeQuoteText(){
 const c=currentContractor(),raw=$("quoteText")?.value||c.quoteScan?.text||"";
 if(!raw.trim())return;
 if(!c.quoteScan)c.quoteScan={};c.quoteScan.text=raw;
 const t=raw.replace(/\r/g,"\n"),low=t.toLowerCase();
 const moneyVals=[...t.matchAll(/(?:\$|cad\s*\$?|usd\s*\$?)\s*([0-9]{1,3}(?:[, ][0-9]{3})*(?:\.\d{2})?)/gi)].map(m=>Number(m[1].replace(/[ ,]/g,""))).filter(n=>n>=100);
 const totalMatch=t.match(/(?:grand\s+total|total\s+(?:price|quote|estimate)?|proposal\s+total|amount\s+due)\s*[:\-]?\s*(?:cad|usd)?\s*\$?\s*([0-9][0-9, ]*(?:\.\d{2})?)/i);
 if(totalMatch)c.price=Number(totalMatch[1].replace(/[ ,]/g,""))||c.price; else if(!c.price&&moneyVals.length)c.price=Math.max(...moneyVals);
 const companyLines=t.split("\n").map(x=>x.trim()).filter(Boolean).slice(0,12);
 if(!c.name){const candidate=companyLines.find(x=>x.length>=3&&x.length<=70&&!/quote|estimate|proposal|invoice|date|phone|email|address|customer/i.test(x));if(candidate)c.name=candidate;}
 const dep=t.match(/(?:deposit|down\s*payment|due\s+(?:on|upon)\s+(?:acceptance|signing))[^\n$]{0,40}\$?\s*([0-9][0-9,]*(?:\.\d{2})?)/i);
 if(dep)c.deposit=Number(dep[1].replace(/,/g,""))||c.deposit;
 const avail=t.match(/(?:start|availability|schedule)[^\n]{0,35}(\d+\s*(?:business\s*)?(?:day|days|week|weeks|month|months))/i);if(avail)c.availability=avail[1];
 const dur=t.match(/(?:duration|complete|completion|work\s+will\s+take)[^\n]{0,35}(\d+\s*(?:business\s*)?(?:day|days|week|weeks|month|months))/i);if(dur)c.duration=dur[1];
 if(/time\s*(?:and|&)\s*materials|t\s*&\s*m/i.test(t))c.priceType="Time & Materials";else if(/\bestimate\b/i.test(t)&&!/fixed\s+price/i.test(t))c.priceType="Estimate";else if(/fixed\s+(?:price|cost)|lump\s+sum/i.test(t))c.priceType="Fixed Price";
 if(state.project.category==="HVAC"){
   const model=t.match(/(?:model|model\s*#|model\s*no\.?)[\s:#-]*([A-Z0-9][A-Z0-9._\/-]{3,})/i);if(model)c.equipment.model=model[1];
   const eff=t.match(/\b(\d{1,2}(?:\.\d+)?)\s*(SEER2?|AFUE|HSPF2?|EER2?)\b/i);if(eff)c.equipment.efficiency=`${eff[1]} ${eff[2].toUpperCase()}`;
   const brands=["Carrier","Trane","Lennox","Daikin","Goodman","Amana","Rheem","Ruud","York","Bryant","Mitsubishi","Fujitsu","Bosch","Napoleon"];
   const brand=brands.find(b=>new RegExp("\\b"+b+"\\b","i").test(t));if(brand)c.equipment.brand=brand;
   const warr=t.match(/(\d{1,2})\s*(?:year|yr)s?[^\n]{0,30}(?:parts|equipment)\s+warranty/i);if(warr)c.equipment.partsWarranty=warr[0].trim();
   const labour=t.match(/(\d{1,2})\s*(?:year|yr)s?[^\n]{0,30}(?:labou?r|workmanship)\s+warranty/i);if(labour)c.equipment.labourWarranty=labour[0].trim();
 }
 const evidence=(yes,no)=>yes.test(low)?"Yes":no?.test(low)?"No":null;
 const suggestions={
  price_total:c.price>0?"Yes":null,
  scope:evidence(/scope of work|work includes|included work|we will (?:provide|install|replace)|installation includes/),
  exclusions:evidence(/exclusions?|not included|excluded/),
  cleanup:evidence(/clean\s*up|cleanup|debris|disposal|haul away|remove (?:old|existing)/),
  warranty:evidence(/warrant(?:y|ies)|workmanship guarantee/),
  permits:evidence(/permits?|inspection/),
  payments:evidence(/payment schedule|progress payment|payment terms|due upon|due on completion/),
  upfront:c.deposit>0?"Yes":evidence(/deposit|down payment/),
  extra_approval:evidence(/change order|written approval|prior approval|authorization before/),
  taxes:evidence(/tax(?:es)? included|includes? (?:gst|hst|pst|sales tax)/,/tax(?:es)? (?:extra|additional|not included)|plus (?:gst|hst|pst|tax)/),
  equipment:state.project.category==="HVAC"&&(c.equipment.brand||c.equipment.model)?"Yes":null,
  start:c.availability?"Yes":null,
  duration:c.duration?"Yes":null
 };
 c.quoteScan.suggestedAnswers=Object.fromEntries(Object.entries(suggestions).filter(([,v])=>v));
 renderContractor();
 const status=$("quoteScanStatus");if(status)status.innerHTML=`<strong>Quote analyzed.</strong> ${Object.keys(c.quoteScan.suggestedAnswers).length} likely answer${Object.keys(c.quoteScan.suggestedAnswers).length===1?"":"s"} found. You'll review every suggested answer.`;
 saveNow(false);
}
async function analyzeQuoteWithAI(){
 const c=currentContractor(),text=c?.quoteScan?.text||"",imageDataUrls=c?.quoteScan?.imageDataUrls||[];
 if(!text.trim()&&!imageDataUrls.length)return;
 const status=$("quoteScanStatus");
 const questions=allQuestions().map(q=>({id:q.id,question:named(q.text,c)}));
 const res=await fetch("/api/analyze-quote",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({
  quoteText:text.slice(0,45000),
  imageDataUrls,
  category:state.project.category,
  subtype:state.project.subtype,
  country:state.project.country,
  questions
 })});
 const data=await res.json().catch(()=>({}));
 if(!res.ok)throw new Error(data.error||"Smart quote analysis failed.");
 if(data.fields){
  if(data.fields.contractor_name&&!c.name)c.name=data.fields.contractor_name;
  if(data.fields.total_price&&!c.price)c.price=Number(data.fields.total_price)||c.price;
  if(data.fields.deposit&&!c.deposit)c.deposit=Number(data.fields.deposit)||c.deposit;
  if(data.fields.price_type&&["Fixed Price","Estimate","Time & Materials","Not Sure"].includes(data.fields.price_type))c.priceType=data.fields.price_type;
  if(data.fields.availability&&!c.availability)c.availability=data.fields.availability;
  if(data.fields.duration&&!c.duration)c.duration=data.fields.duration;
  if(state.project.category==="HVAC"&&data.fields.equipment){
   const e=data.fields.equipment;c.equipment=c.equipment||{};
   if(e.brand&&!c.equipment.brand)c.equipment.brand=e.brand;
   if(e.model&&!c.equipment.model)c.equipment.model=e.model;
   if(e.efficiency&&!c.equipment.efficiency)c.equipment.efficiency=e.efficiency;
   if(e.parts_warranty&&!c.equipment.partsWarranty)c.equipment.partsWarranty=e.parts_warranty;
   if(e.labour_warranty&&!c.equipment.labourWarranty)c.equipment.labourWarranty=e.labour_warranty;
  }
 }
 c.quoteScan.aiAnswers={};
 for(const item of data.answers||[]){
  if(!item?.id||!["Yes","Partly","Not Clear","No"].includes(item.answer))continue;
  c.quoteScan.aiAnswers[item.id]={answer:item.answer,confidence:Number(item.confidence)||0,evidence:item.evidence||"",reason:item.reason||""};
  if((Number(item.confidence)||0)>=0.86)c.quoteScan.suggestedAnswers[item.id]=item.answer;
 }
 c.quoteScan.aiAnalyzed=true;
 c.quoteScan.aiModel=data.model||"smart-analysis";
 renderContractor();
 const strong=Object.values(c.quoteScan.aiAnswers).filter(x=>x.confidence>=0.86).length;
 if(status)status.innerHTML=`<strong>Smart scan complete.</strong> ChoiceGrade found ${strong} high-confidence answer${strong===1?"":"s"} from the quote. High-confidence items can be pre-filled; anything uncertain will still be asked.`;
 saveNow(false);
}
function saveContractor(){const c=currentContractor();c.name=$("cName").value.trim()||`Contractor ${state.contractorIndex+1}`;c.email=$("cEmail").value.trim();c.price=+$("cPrice").value||0;c.deposit=+$("cDeposit").value||0;c.tax=+$("cTax").value||0;c.priceType=$("cPriceType").value;c.availability=$("cAvailability").value.trim();c.duration=$("cDuration").value.trim();if(state.project.category==="HVAC")c.equipment={brand:$("eqBrand").value.trim(),model:$("eqModel").value.trim(),efficiency:$("eqEff").value.trim(),partsWarranty:$("eqParts").value.trim(),labourWarranty:$("eqLabour").value.trim()};const filled=autoApplyScanAnswers(c);if(filled)c.quoteScan.autoAppliedCount=filled;state.qIndex=0;state.phase="core";renderQuestion();go("questions");}
function previousContractor(){if(state.contractorIndex>0){state.contractorIndex--;renderContractor();}else go("setup");}
function phaseQuestions(){return state.phase==="core"?CORE_QUESTIONS:moduleQuestions();}
function scanSuggestion(c,id){return c?.quoteScan?.suggestedAnswers?.[id]||null;}
function scanEvidence(c,id){return c?.quoteScan?.aiAnswers?.[id]||null;}
function autoApplyScanAnswers(c){
 if(!c?.quoteScan?.suggestedAnswers)return 0;
 let n=0;
 for(const q of allQuestions()){
  const a=scanSuggestion(c,q.id);
  if(a&&!c.answers[q.id]){
   c.answers[q.id]=a;
   if(!(q.id in c.originalAnswers))c.originalAnswers[q.id]=a;
   n++;
  }
 }
 c.quoteScan.autoApplied=true;
 return n;
}
function remainingPhaseQuestions(){
 const c=currentContractor(),qs=phaseQuestions();
 // Always return only unanswered questions. This keeps the index stable after
 // either AI-prefilled answers or homeowner answers are added.
 return qs.filter(q=>!c.answers[q.id]);
}
function renderQuestion(){
 const c=currentContractor(),qs=remainingPhaseQuestions(),q=qs[state.qIndex];
 if(!q){finishQuestionPhase();return;}
 const answered=allQuestions().filter(x=>c.answers[x.id]).length,totalAll=allQuestions().length;
 $("questionProgress").textContent=`${c.name} · ${state.qIndex+1}/${qs.length} remaining${state.phase==="module"?" project-specific":""}`;
 $("progressBar").style.width=`${Math.round(100*answered/Math.max(totalAll,1))}%`;
 $("qCategory").textContent=state.phase==="core"?q.category:`${state.project.category} CHECK`;
 $("qText").textContent=named(q.text,c);$("qWhy").textContent=named(q.why,c);const ev=scanEvidence(c,q.id);if(ev?.evidence&&ev.confidence>=0.55)$("qWhy").textContent+=` Quote evidence: “${ev.evidence.slice(0,180)}”`;
 const current=c.answers[q.id]||"";
 $("answerButtons").innerHTML=ANSWERS.map(([a,s])=>`<button onclick="answerQuestion('${a}')"><span class="answerTitle">${a}${current===a?" ✓":""}</span><span class="answerSub">${s}</span></button>`).join("");
}
function answerQuestion(a){
 const qs=remainingPhaseQuestions(),q=qs[state.qIndex],c=currentContractor();
 if(!q){finishQuestionPhase();return;}
 if(!(q.id in c.originalAnswers))c.originalAnswers[q.id]=a;
 c.answers[q.id]=a;saveNow(false);
 // remainingPhaseQuestions() shrinks immediately after answering because scanned/answered
 // questions are filtered out. Keep the same index so it now points at the next
 // unanswered question. If no question remains at that index, this phase is done.
 const next=remainingPhaseQuestions();
 if(state.qIndex<next.length){renderQuestion();}else{state.qIndex=0;finishQuestionPhase();}
}
function finishQuestionPhase(){if(state.phase==="core"&&moduleQuestions().some(q=>!currentContractor().answers[q.id])){renderModuleIntro();go("moduleIntro");return;}finishContractorQuestions();}
function renderModuleIntro(){const c=currentContractor(),count=moduleQuestions().filter(q=>!c.answers[q.id]).length;$("moduleIntroTitle").textContent=`A few questions specific to ${state.project.subtype}.`;$("moduleIntroText").textContent=`ChoiceGrade already filled what it could from ${c.name}'s quote. There ${count===1?"is":"are"} ${count} project-specific question${count===1?"":"s"} still needing your input.`;}
function beginModule(){state.phase="module";state.qIndex=0;renderQuestion();go("questions");}
function finishContractorQuestions(){renderReputation();go("reputation");}
function previousQuestion(){if(state.qIndex>0){state.qIndex--;renderQuestion();return;}if(state.phase==="module"){state.phase="core";state.qIndex=Math.max(remainingPhaseQuestions().length-1,0);renderQuestion();return;}go("contractor");}
function renderReputation(){const c=currentContractor(),r=c.reputation||{};$("reputationProgress").textContent=`${c.name} · ${state.contractorIndex+1}/${state.contractors.length}`;$("repTitle").textContent=`What did you find about ${c.name}?`;$("repRating").value=r.rating||"";$("repCount").value=r.count||"";$("repRecent").value=r.recent||"Not Sure";$("repRecurring").value=r.recurring||"Not Sure";$("repSimilar").value=r.similar||"Not Sure";}
function searchReviews(){const c=currentContractor();window.open(`https://www.google.com/search?q=${encodeURIComponent(`${c.name} ${state.project.region||""} reviews`)}`,"_blank");}
function saveReputation(){const c=currentContractor();c.reputation={skipped:false,rating:$("repRating").value,count:$("repCount").value,recent:$("repRecent").value,recurring:$("repRecurring").value,similar:$("repSimilar").value};nextAfterReputation();}
function skipReputation(){currentContractor().reputation={skipped:true,rating:"",count:"",recent:"Not Sure",recurring:"Not Sure",similar:"Not Sure"};nextAfterReputation();}
function nextAfterReputation(){if(state.contractorIndex<state.contractors.length-1){state.contractorIndex++;state.qIndex=0;state.phase="core";pendingQuotePages=[];renderContractor();saveNow(false);go("contractor");window.scrollTo(0,0);}else{renderResults();go("results");}}
function metrics(c,mode="current"){
 let earned=0,total=0,criticalNo=0,clarify=0;
 for(const q of allQuestions()){
  const a=mode==="original"?originalAnswer(c,q.id):effectiveAnswer(c,q.id);
  if(!a||a==="N/A")continue;
  total+=q.weight;earned+=q.weight*(FACTOR[a]??0);
  if(a==="No"||a==="Not Clear"){clarify++;if(q.weight===5)criticalNo++;}
 }
 const score=total?Math.round(earned/total*100):0;
 const knownExtras=(c.knownExtras||[]).filter(x=>x.status!=="Unknown").reduce((s,x)=>s+(+x.amount||0),0);
 const unknownExtras=(c.knownExtras||[]).filter(x=>x.status==="Unknown").length;
 const adjusted=(c.price||0)+(c.tax||0)+knownExtras;
 const depPct=c.price?Math.round(c.deposit/c.price*100):0;
 const candidates=allQuestions().filter(q=>isOriginalClarificationItem(c,q));
 const resolved=candidates.filter(q=>isResolvedClarification(c,q)).length;
 const unresolved=candidates.length-resolved;
 return{score,criticalNo,clarify,knownExtras,unknownExtras,adjusted,depPct,clarificationTotal:candidates.length,resolved,unresolved};
}
function band(s){return s>=90?"Very Complete":s>=80?"Strong":s>=70?"Generally Clear":s>=60?"Needs Clarification":"Significant Information Missing";}
function reviewBand(c){const r=c.reputation||{};if(r.skipped||(!r.rating&&!r.count&&r.recent==="Not Sure"&&r.recurring==="Not Sure"&&r.similar==="Not Sure"))return"Not Enough Information";const cnt=+r.count||0,rat=+r.rating||0;if(r.recurring==="Yes"||r.recent==="No")return"Potential Concerns";if(r.recent==="Mixed"||r.recurring==="A Few")return"Mixed Review History";if(r.recent==="Yes"&&rat>=4.4&&cnt>=50)return"Strong Review History";if(r.recent==="Yes"&&rat>=4.2)return cnt<50?"Positive but Limited History":"Strong Review History";return"Not Enough Information";}
function criticalFlags(c,m){
 const A=new Proxy({}, {get:(_,id)=>effectiveAnswer(c,id)}),out=[];
 if(A.extra_approval==="No")out.push({type:"high",priority:100,title:"Extra-cost approval isn't established",text:`${c.name}'s information does not establish that additional cost work requires your approval before it is performed.`});
 else if(["Not Clear","Partly"].includes(A.extra_approval))out.push({type:"info",priority:58,title:"Extra-cost approval needs clarification",text:`Clarify how ${c.name} will obtain your approval before additional billable work.`});
 if(A.license_insurance==="No")out.push({type:"high",priority:100,title:"Licensing or insurance hasn't been confirmed",text:`Check what requirements apply where you live and confirm that ${c.name} meets them before hiring.`});
 else if(A.license_insurance==="Not Clear")out.push({type:"info",priority:60,title:"Licensing or insurance needs confirmation",text:`You have not yet confirmed the licensing or insurance requirements that may apply to ${c.name}.`});
 if(A.promises==="No")out.push({type:"high",priority:96,title:"An important agreement isn't documented",text:`Consider having important promises made by ${c.name} added to the written quote or agreement before signing.`});
 if(A.final_payment==="No")out.push({type:"high",priority:96,title:"Final-payment timing needs attention",text:`${c.name}'s final payment may be due before all agreed work is completed.`});
 if(A.permits==="No"||A.permits==="Not Clear")out.push({type:"info",priority:56,title:"Permit or inspection responsibility isn't clear",text:"Confirm whether permits or inspections apply and who is responsible for arranging and paying for them."});
 if(A.warranty==="No"||A.warranty==="Not Clear")out.push({type:"info",priority:55,title:"Warranty coverage needs clarification",text:`Confirm what ${c.name}'s warranties cover, for how long, and who provides service.`});
 if(["No","Not Clear"].includes(A.price_extras)&&["No","Not Clear"].includes(A.exclusions)&&["No","Not Clear"].includes(A.scope))out.push({type:"high",priority:98,title:"Final cost may be difficult to determine",text:`Several important cost and scope items in ${c.name}'s proposal are not clearly documented.`});
 return out;
}
function generateFindings(rows){let f=[];rows.forEach(([c,m])=>f.push(...criticalFlags(c,m)));const byAdj=[...rows].filter(x=>x[1].adjusted>0).sort((a,b)=>a[1].adjusted-b[1].adjusted),byQuote=[...rows].filter(x=>x[0].price>0).sort((a,b)=>a[0].price-b[0].price);if(byQuote.length>1&&byAdj.length>1&&byQuote[0][0].name!==byAdj[0][0].name)f.push({type:"cost",priority:92,title:"Lowest quote may not be lowest known cost",text:`${byQuote[0][0].name} has the lowest initial quote, but ${byAdj[0][0].name} currently has the lowest Adjusted Comparison Cost based on the costs you've entered.`});rows.forEach(([c,m])=>{if(m.unknownExtras)f.push({type:"cost",priority:75,title:`${c.name} still has unknown costs`,text:`${m.unknownExtras} additional cost item${m.unknownExtras===1?" is":"s are"} still unknown.`});if(["Estimate","Time & Materials","Not Sure"].includes(c.priceType))f.push({type:"cost",priority:72,title:`${c.name}'s price may change`,text:`The proposal is listed as ${c.priceType}. Clarify what could change the final cost and how increases are approved.`});if(m.score>=90)f.push({type:"good",priority:38,title:`Very complete written proposal from ${c.name}`,text:`${c.name} currently has a Quote Clarity score of ${m.score}/100.`});});if(rows.length>1){const deps=rows.map(([c,m])=>[c,m.depPct]).filter(x=>x[1]>0).sort((a,b)=>a[1]-b[1]);if(deps.length>1&&deps.at(-1)[1]-deps[0][1]>=20)f.push({type:"cost",priority:74,title:"Upfront payments differ significantly",text:`${deps.at(-1)[0].name} requests about ${deps.at(-1)[1]}% upfront, substantially higher than at least one other quote.`});const scores=[...rows].sort((a,b)=>b[1].score-a[1].score);if(scores[0][1].score-scores.at(-1)[1].score>=12)f.push({type:"info",priority:68,title:"Quote clarity differs meaningfully",text:`${scores[0][0].name} currently has the clearest documented proposal (${scores[0][1].score}/100), while ${scores.at(-1)[0].name} has more information left to clarify (${scores.at(-1)[1].score}/100).`});}if(state.project.category==="HVAC"){const sig=new Set(rows.map(([c])=>`${c.equipment.brand}|${c.equipment.model}`).filter(x=>x!=="|"));if(sig.size>1)f.push({type:"info",priority:71,title:"Different HVAC equipment is being proposed",text:"The contractors are not all quoting the same brand/model, so price alone may not be an apples-to-apples comparison."});}const d=new Map();for(const x of f){if(!d.has(x.title)||d.get(x.title).priority<x.priority)d.set(x.title,x);}return[...d.values()].sort((a,b)=>b.priority-a.priority).slice(0,6);}
function clarificationCandidates(c){return allQuestions().filter(q=>isOriginalClarificationItem(c,q)).sort((a,b)=>b.weight-a.weight);}
function clarificationItems(c){return clarificationCandidates(c).filter(q=>isUnresolvedClarification(c,q));}
const CLARIFICATION_PROMPTS={
 price_total:"Can you confirm the total quoted price for the project?",
 price_extras:"Can you identify any items, conditions, or circumstances that could result in additional charges beyond the quoted price?",
 taxes:"Can you confirm whether applicable taxes are included in the quoted price?",
 scope:"Can you confirm the complete scope of work included in your quote?",
 equipment:"Can you confirm the main equipment and materials included in your quote, including brand and model where applicable?",
 exclusions:"Can you identify anything specifically excluded from your quote or not included in the quoted price?",
 cleanup:"Can you confirm whether removal of old materials or equipment, cleanup, and disposal are included?",
 subs:"Will any part of the work be completed by subcontractors or another company? If so, which portions?",
 license_insurance:"Can you confirm that you hold the licences and insurance required for this work in our area?",
 start:"Can you provide an approximate start date or expected availability for the project?",
 duration:"Can you provide an estimate of how long the work should take once it begins?",
 upfront:"Can you confirm the amount required upfront before work begins?",
 payments:"Can you confirm the payment schedule, including when each payment will be due?",
 final_payment:"Can you confirm that final payment is due only after the agreed work has been completed?",
 extra_approval:"Can you confirm that you will obtain my approval before performing additional work that would increase the project cost?",
 change_pricing:"Can you explain how requested changes or additional work will be priced and approved?",
 warranty:"Can you confirm the warranties included with the project, what each covers, and how long each warranty lasts?",
 testing:"Can you confirm that the completed work will be tested and verified as operating properly before the project is considered finished?",
 permits:"Can you confirm whether permits or inspections are required and who is responsible for arranging and paying for them?",
 promises:"Can you confirm that any important promises or agreements we have discussed will be included in the written agreement?",
 hvac_model:"Can you confirm the exact brand and model of the major HVAC equipment being installed?",
 hvac_sizing:"Can you explain how you determined that the proposed HVAC equipment is appropriately sized for the home?",
 hvac_eff:"Can you confirm the applicable efficiency rating of the proposed HVAC equipment?",
 hvac_warranties:"Can you confirm the equipment/material warranty and the labour/workmanship warranty separately, including the length of each?",
 hvac_service:"If warranty service is needed, who should I contact and who will perform the service?",
 hp_capacity:"Can you provide the proposed heat pump's heating output at our local cold-weather design temperature and compare it with the home's calculated heating load?",
 hp_backup:"Can you confirm what backup heat is included, if any, and explain when and how it would operate?",
 hp_match:"Can you list the exact outdoor unit and indoor unit or coil model numbers and the matching AHRI reference or equivalent rating documentation, if available?",
 hp_duct_electrical:"Can you confirm whether the existing ductwork and electrical system are suitable for this heat pump, and list any duct or electrical changes included in the price?",
 hp_controls:"Can you confirm whether my thermostat and existing zoning, if any, will work with the proposed system, and whether using them would limit any features?",
 hp_rebate:"Can you confirm the rebate requirements for the exact equipment combination quoted, who applies for the rebate, and who pays if it is denied?",
 elec_products:"Can you confirm the main electrical equipment or products being installed?",
 elec_upgrades:"Can you confirm whether any upgrades or changes to the existing electrical system will be required to support this work?",
 elec_repairs:"If finished surfaces need to be opened, can you confirm who is responsible for repairs afterward?",
 plumb_products:"Can you confirm the main plumbing fixtures, equipment, and materials being installed?",
 plumb_changes:"Can you confirm whether any existing plumbing must be repaired, replaced, or modified to complete the work?",
 plumb_repairs:"If finished surfaces need to be opened, can you confirm who is responsible for repairs afterward?",
 roof_product:"Can you confirm the roofing materials being installed, including brand and product where applicable?",
 roof_hidden:"If hidden roof damage is discovered after tear-off, can you explain how repairs will be approved and priced?",
 roof_system:"Can you confirm which parts of the complete roofing system are included in the quote?",
 roof_protect:"Can you explain how the home and property will be protected while the roofing work is being completed?",
 reno_finishes:"Can you confirm which finishes, fixtures, and materials are included in the quoted price?",
 reno_allowances:"Can you identify any allowances or placeholder amounts and the dollar limit for each?",
 reno_hidden:"If hidden conditions are discovered after demolition begins, can you explain how additional work will be approved and priced?",
 reno_protect:"Can you explain what areas of the home may be affected and how they will be protected during the renovation?",
 win_product:"Can you confirm the manufacturer, product line, and important features of the windows or doors being installed?",
 win_install:"Can you confirm what installation work around the new windows or doors is included?",
 win_finish:"Can you confirm who is responsible for repairing or finishing surfaces affected by the installation?",
 land_materials:"Can you confirm the main materials, products, and finishes being used?",
 land_prep:"Can you confirm what site preparation is included before the new work begins?",
 land_drain:"Can you explain how drainage or water movement will be handled if the project affects it?",
 land_restore:"Can you confirm what restoration of the surrounding property is included after the work is complete?",
 spa_product:"Can you confirm the exact pool, spa, hot tub, or major equipment being supplied?",
 spa_ready:"Can you confirm everything included to make the installation fully ready to use?",
 spa_trades:"Can you confirm whether any additional contractors or trades will be required, and which ones?",
 spa_service:"Can you confirm the equipment warranty and ongoing service support provided?",
 general_products:"Can you confirm the main materials, equipment, or replacement parts that will be used?",
 general_unknown:"Can you explain whether completing the repair could uncover or require additional work?"
};
function requestText(q,c){
 const polished=CLARIFICATION_PROMPTS[q.id];
 if(polished)return polished;
 return `Can you please clarify the following item from your quote: ${named(q.text,c)}`;
}
function clarificationEmail(c){
 const items=clarificationItems(c);if(!items.length)return"";
 const bullets=items.map(q=>`• ${requestText(q,c)}`).join("\n");
 const project=(state.project.subtype||"project").toLowerCase();
 return`Subject: Questions about your ${state.project.subtype} quote

Hello,

Thank you for providing your quote for our ${project}. I'm comparing the written details of the proposals I've received and would appreciate clarification on a few items before making a decision.

Could you please confirm the following:

${bullets}

A reply by email is perfect. Having these details in writing will help me make sure I'm comparing the proposals accurately.

Thank you for your time.`;
}
function toggleEmail(i){const e=$(`email-${i}`);e.style.display=e.style.display==="block"?"none":"block";}
async function copyEmail(i){try{await navigator.clipboard.writeText(clarificationEmail(state.contractors[i]));alert("Email copied.");}catch(e){alert("Copy failed. Open the email text and copy it manually.");}}
function openEmail(i){const c=state.contractors[i],full=clarificationEmail(c),body=full.replace(/^Subject:.*\n\n/,"");window.location.href=`mailto:${encodeURIComponent(c.email||"")}?subject=${encodeURIComponent(`Questions about your ${state.project.subtype} quote`)}&body=${encodeURIComponent(body)}`;}
function saveClarification(i,qid){
 const c=ensureClarifications(state.contractors[i]);
 const sel=$(`clarify-answer-${i}-${qid}`),notes=$(`clarify-notes-${i}-${qid}`);
 if(!sel||!sel.value){alert("Choose the contractor's clarification result first.");return;}
 c.clarifications[qid]={answer:sel.value,notes:(notes?.value||"").trim(),updatedAt:new Date().toISOString()};
 saveNow(false);renderResults();
}
function clearClarification(i,qid){
 const c=ensureClarifications(state.contractors[i]);
 delete c.clarifications[qid];saveNow(false);renderResults();
}
function clarificationCard(c,i,q){
 const x=ensureClarifications(c).clarifications[q.id]||{};
 const original=originalAnswer(c,q.id)||"—";
 const opts=[["","Choose result…"],["Yes","Confirmed Yes"],["Partly","Partial information"],["Not Clear","Still unclear"],["No","Confirmed No"]];
 return `<div class="resolveCard ${isResolvedClarification(c,q)?"resolved":""}">
   <div class="resolveTop"><div><strong>${esc(named(q.text,c))}</strong><div class="muted">Original quote answer: ${esc(original)}</div></div><span class="badge ${isResolvedClarification(c,q)?"green":"amber"}">${isResolvedClarification(c,q)?"Resolved":"Needs response"}</span></div>
   <label>Contractor clarification
    <select id="clarify-answer-${i}-${q.id}">${opts.map(([v,l])=>`<option value="${v}" ${x.answer===v?"selected":""}>${l}</option>`).join("")}</select>
   </label>
   <label>Response notes (optional)
    <textarea id="clarify-notes-${i}-${q.id}" rows="2" placeholder="e.g. Confirmed 2-year labour warranty by email.">${esc(x.notes||"")}</textarea>
   </label>
   <div class="actions"><button class="secondary" onclick="saveClarification(${i},'${q.id}')">${x.answer?"Update clarification":"Save clarification"}</button>${x.answer?`<button class="ghost" onclick="clearClarification(${i},'${q.id}')">Clear</button>`:""}</div>
  </div>`;
}
function addExtra(i){const c=state.contractors[i],label=prompt("What additional cost did you identify?");if(!label)return;const status=(prompt("Type Confirmed, Estimated, or Unknown","Confirmed")||"Confirmed").trim();let amount=0;if(status.toLowerCase()!=="unknown")amount=+(prompt("Amount","0")||0);c.knownExtras.push({label,status:status[0].toUpperCase()+status.slice(1).toLowerCase(),amount});saveNow(false);renderResults();}
function renderResults(){
 state.contractors.forEach(ensureClarifications);
 const cgPaid=(window.ChoiceGradeAccess?.hasPaidAccess?.()||false);
 const rows=state.contractors.map(c=>[c,metrics(c)]),ranked=[...rows].sort((a,b)=>b[1].score-a[1].score),best=ranked[0],low=[...rows].filter(x=>x[0].price>0).sort((a,b)=>a[0].price-b[0].price)[0];
 $("resultSummary").textContent=`${best[0].name} currently has the most complete written proposal based on the information you provided${low?`, while ${low[0].name} has the lowest quoted price`:""}. ChoiceGrade does not choose the contractor for you.`;
 const fs=generateFindings(rows);
 $("findings").innerHTML=fs.length?`<h2>What ChoiceGrade noticed</h2>${fs.map(x=>`<div class="finding ${x.type}"><strong>${x.type==="high"?"🛑":x.type==="cost"?"$":x.type==="good"?"✓":"?"} ${esc(x.title)}</strong>${esc(x.text)}</div>`).join("")}`:"";
 $("contractorCards").innerHTML=ranked.map(([c,m],rank)=>{
  const idx=state.contractors.indexOf(c),orig=metrics(c,"original"),changed=orig.score!==m.score;
  return `<div class="card">
   <div class="scoreRow"><div><div class="eyebrow">${rank===0?"MOST COMPLETE WRITTEN PROPOSAL":"CONTRACTOR"}</div><h2>${esc(c.name)}</h2></div><div><div class="scoreBig">${m.score}</div><div class="muted">${band(m.score)}</div></div></div>
   ${m.clarificationTotal?`<div class="clarificationProgress"><strong>${m.resolved} of ${m.clarificationTotal} clarification question${m.clarificationTotal===1?"":"s"} resolved</strong><div class="miniProgress"><span style="width:${Math.round(100*m.resolved/Math.max(m.clarificationTotal,1))}%"></span></div>${changed?`<div class="scoreHistory">Original Quote Clarity: <b>${orig.score}/100</b> → Current: <b>${m.score}/100</b></div>`:""}</div>`:""}
   <div class="detailGrid"><div class="detailBox"><b>Quoted price</b><span>${money(c.price)}</span></div><div class="detailBox"><b>Adjusted comparison cost</b><span>${money(m.adjusted)}${m.unknownExtras?" + unknown":""}</span></div><div class="detailBox"><b>Review history</b><span>${reviewBand(c)}</span></div><div class="detailBox"><b>Items still to clarify</b><span>${m.unresolved}</span></div></div>
   <span class="badge ${m.criticalNo?"red":"green"}">${m.criticalNo} critical-weight issue${m.criticalNo===1?"":"s"}</span><span class="badge ${m.unresolved?"amber":"green"}">${m.unresolved} unresolved</span><span class="badge">${m.depPct}% upfront</span>
   <div class="actions"><button class="secondary" onclick="addExtra(${idx})">Add known cost</button></div>
  </div>`;
 }).join("");
 const headers=rows.map(([c])=>`<th>${esc(c.name)}</th>`).join(""),row=(label,fn)=>`<tr><td>${label}</td>${rows.map(([c,m])=>`<td>${fn(c,m)}</td>`).join("")}</tr>`;
 let table=`<table><tr><th>Comparison</th>${headers}</tr>`+row("Quoted price",c=>money(c.price))+row("Adjusted comparison cost",(c,m)=>money(m.adjusted)+(m.unknownExtras?"+":""))+row("Current quote clarity",(c,m)=>`${m.score}/100`)+row("Original quote clarity",c=>`${metrics(c,"original").score}/100`)+row("Review history",c=>reviewBand(c))+row("Upfront payment",(c,m)=>`${m.depPct}%`)+row("Start / availability",c=>esc(c.availability||"Not provided"))+row("Expected duration",c=>esc(c.duration||"Not provided"))+row("Unresolved clarifications",(c,m)=>m.unresolved);
 if(state.project.category==="HVAC")table+=row("HVAC brand",c=>esc(c.equipment.brand||"—"))+row("HVAC model",c=>esc(c.equipment.model||"—"))+row("Efficiency",c=>esc(c.equipment.efficiency||"—"))+row("Parts/equipment warranty",c=>esc(c.equipment.partsWarranty||"—"))+row("Labour warranty",c=>esc(c.equipment.labourWarranty||"—"));
 $("compareTable").innerHTML=table+"</table>";
 $("clarifications").innerHTML=state.contractors.map((c,i)=>{
  const candidates=clarificationCandidates(c),items=clarificationItems(c),resolved=candidates.filter(q=>isResolvedClarification(c,q)).length;
  if(!candidates.length)return`<div class="clarifyBlock"><strong>${esc(c.name)}</strong><div class="muted">No No/Not Clear items were identified in the original quote review.</div></div>`;
  return `<div class="clarifyBlock">
    <div class="clarifyHeader"><div><strong>${esc(c.name)}</strong><div class="muted">${resolved} of ${candidates.length} resolved · ${items.length} still need clarification</div></div></div>
    ${items.length?`<div class="actions"><button class="secondary" onclick="toggleEmail(${i})">Create clarification email</button><button class="secondary" onclick="copyEmail(${i})">Copy email</button><button class="secondary" onclick="openEmail(${i})">Open email app</button></div><div id="email-${i}" class="emailBox">${esc(clarificationEmail(c))}</div>`:`<div class="finding good"><strong>✓ All clarification questions have a recorded response</strong>You can still update any response below.</div>`}
    <div class="resolveList">${candidates.map(q=>clarificationCard(c,i,q)).join("")}</div>
  </div>`;
 }).join("");
 const totalClar=rows.reduce((s,[c,m])=>s+m.unresolved,0),resolvedTotal=rows.reduce((s,[c,m])=>s+m.resolved,0),extraTotal=rows.reduce((s,[c,m])=>s+m.knownExtras,0),important=fs.filter(x=>x.type==="high"||x.type==="cost"||x.priority>=70).length;
 $("uncovered").innerHTML=`<div class="metric"><strong>${totalClar}</strong><span>questions still worth clarifying</span></div><div class="metric"><strong>${resolvedTotal}</strong><span>contractor questions resolved</span></div><div class="metric"><strong>${money(extraTotal)}</strong><span>known added costs entered</span></div><div class="metric"><strong>${important}</strong><span>important differences found</span></div>`;
 $("beforeSign").innerHTML=["Final price understood","Scope of work understood","Known additional costs identified","Payment schedule understood","Warranty understood","Permits / inspections clarified","Important promises are in writing","Outstanding questions resolved"].map(x=>`<label><input type="checkbox"> <span>${x}</span></label>`).join("");
 saveNow(false);
 if(!cgPaid)window.ChoiceGradeAccess?.gateResults?.();
}
function exportProject(){if(!state.contractors.length){alert("Start a comparison first.");return;}const blob=new Blob([JSON.stringify(state,null,2)],{type:"application/json"}),a=document.createElement("a");a.href=URL.createObjectURL(blob);a.download=`ChoiceGrade-${(state.project.name||"project").replace(/[^a-z0-9]+/gi,"-")}.json`;a.click();setTimeout(()=>URL.revokeObjectURL(a.href),500);}
function newProject(){if(confirm("Start a new comparison? Your current saved comparison will be replaced.")){localStorage.removeItem(STORAGE_KEY);location.reload();}}
document.addEventListener("DOMContentLoaded",()=>{$("countButtons").innerHTML=[2,3,4,5].map(n=>`<button type="button" class="choicePill ${n===3?"selected":""}" data-n="${n}" onclick="selectedCount(${n})">${n}</button>`).join("");renderSetup();refreshResume();});
if("serviceWorker" in navigator)navigator.serviceWorker.register("sw.js").catch(()=>{});
