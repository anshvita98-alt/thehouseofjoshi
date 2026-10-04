# Gem concierge setup

The `/api/gem` Vercel Function calls Gemini with a server-only API key.

1. Create a key at https://aistudio.google.com/apikey.
2. In the Vercel project's Settings → Environment Variables, add `GEMINI_API_KEY` for Production (and Preview if desired). Do not use a `VITE_` prefix.
3. Redeploy after saving the key.

Optional: set `GEMINI_MODEL` to change the default `gemini-3.5-flash-lite` model.
For local chat testing, use `vercel dev`; `vite dev` alone does not run the API function.
Messages are sent to Google to generate answers. The app keeps history only in memory.
Configure provider quotas and deployment rate limits appropriate for a public chat endpoint.
