# OneExpand CRM

A premium dark-themed CRM for Google Maps lead generation, connected to the OneExpand Prospects Chrome extension.

## Features
- 🔐 Email/password auth (Supabase)
- 📊 Dashboard with KPIs, leads-over-time, pipeline funnel
- 👥 Leads table with search, CSV export, full CRUD drawer
- 📌 Drag-and-drop kanban Pipeline (`@dnd-kit`)
- ✉️ Outreach: Email + WhatsApp templates with `{{variable}}` substitution and one-tap send
- 🔌 Integrations: API key for extension + Google Sheets webhook (Apps Script)
- ⚙️ Settings (profile)
- Chrome extension (.zip) downloadable from the Integrations page

## Tech
Vite • React 18 • TypeScript • Tailwind v4 • Supabase JS • React Router v6 • @dnd-kit • Recharts • Framer Motion • Sonner

## Setup

1. **Supabase**
   - Create a Supabase project.
   - Run the SQL files in `supabase/migrations/` (in order) via SQL Editor, or `supabase db push`.
   - These create: `profiles`, `user_roles`, `api_keys`, `pipeline_stages`, `leads`, `activities`, `outreach_templates`, `integrations`, plus RLS policies and a `handle_new_user` trigger that auto-seeds default stages and an API key on signup.

2. **Env**
   ```
   cp .env.example .env
   ```
   Fill:
   ```
   VITE_SUPABASE_URL=https://xxxx.supabase.co
   VITE_SUPABASE_ANON_KEY=eyJhbGc...
   ```

3. **Local dev**
   ```
   npm install
   npm run dev
   ```

## Deploy on Vercel

1. Push this repo to GitHub.
2. Vercel → New Project → import the repo.
3. Framework: **Vite** (auto-detected).
4. Add Environment Variables:
   - `VITE_SUPABASE_URL`
   - `VITE_SUPABASE_ANON_KEY`
5. Deploy. `vercel.json` already handles SPA routing.

## Extension

`public/oneexpand-prospects.zip` is served from the Integrations page so users can download and load it as an unpacked Chrome extension. Source lives in `extension-build/` for reference.

