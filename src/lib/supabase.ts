import { createClient } from "@supabase/supabase-js";

const url = import.meta.env.VITE_SUPABASE_URL as string;
const anon = import.meta.env.VITE_SUPABASE_ANON_KEY as string;

if (!url || !anon) {
  console.warn("[OneExpand CRM] Missing VITE_SUPABASE_URL / VITE_SUPABASE_ANON_KEY env vars.");
}

export const supabase = createClient(url ?? "", anon ?? "", {
  auth: { persistSession: true, autoRefreshToken: true, detectSessionInUrl: true },
});

export type Lead = {
  id: string;
  user_id: string;
  name: string;
  phone: string | null;
  emails: string[] | null;
  website: string | null;
  social: Record<string, string> | null;
  address: string | null;
  city: string | null;
  country: string | null;
  rating: number | null;
  reviews_count: number | null;
  category: string | null;
  notes: string | null;
  tags: string[] | null;
  stage_id: string | null;
  source: string | null;
  external_id: string | null;
  value: number | null;
  created_at: string;
  updated_at: string;
};

export type Stage = {
  id: string;
  user_id: string;
  name: string;
  position: number;
  color: string;
  is_won: boolean;
  is_lost: boolean;
};

export type Template = {
  id: string;
  user_id: string;
  name: string;
  channel: string;
  subject: string | null;
  body: string;
  created_at: string;
};

export type ApiKey = { id: string; key: string; label: string; created_at: string; last_used_at: string | null };
export type Integration = { id: string; user_id: string; sheet_webhook_url: string | null };
export type Profile = { id: string; display_name: string | null; avatar_url: string | null };
