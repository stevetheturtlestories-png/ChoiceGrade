# Quote analysis deployment

Set `OPENAI_API_KEY` in the Vercel project's server environment for Production (and Preview if testing there). Redeploy after adding it. `OPENAI_ANALYSIS_MODEL` is optional; the default is `gpt-4o-mini`. The existing `SUPABASE_URL` and `SUPABASE_ANON_KEY` server variables must also be present.

The PDF/photo scan and reply checker require a signed-in user with an active Project Pass or Lifetime entitlement. They send the selected document or pasted reply to the server endpoint and OpenAI for analysis; the endpoint requests `store: false`. Raw files and reply text are not saved in the project. Only homeowner-approved extracted fields and evidence excerpts are saved locally and included in project backups. Users should remove personal details they do not want processed before uploading.

Supported quote files: PDF, JPG, PNG and WebP, at most 2.5 MB each. Scan one contractor's quote at a time. The model suggests answers, which the homeowner reviews and can edit during the question flow. The one-quote report measures documentation clarity; it cannot validate a market price or verify contractor licensing, insurance, or quality.

No database migration is needed. Set a usage budget or rate controls on the API account before promoting analysis widely; authenticated paid users can make multiple requests.
