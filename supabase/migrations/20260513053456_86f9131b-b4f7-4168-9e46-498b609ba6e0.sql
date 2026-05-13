CREATE EXTENSION IF NOT EXISTS pgcrypto WITH SCHEMA extensions;

CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path TO 'public', 'extensions'
AS $function$
DECLARE
  new_key TEXT;
BEGIN
  INSERT INTO public.profiles (id, display_name)
  VALUES (NEW.id, COALESCE(NEW.raw_user_meta_data->>'display_name', split_part(NEW.email,'@',1)));

  INSERT INTO public.user_roles (user_id, role) VALUES (NEW.id, 'user');

  new_key := 'oxp_' || encode(extensions.gen_random_bytes(24), 'hex');
  INSERT INTO public.api_keys (user_id, key, label) VALUES (NEW.id, new_key, 'Default');

  INSERT INTO public.pipeline_stages (user_id, name, position, color, is_won, is_lost) VALUES
    (NEW.id, 'New', 0, '#64748b', false, false),
    (NEW.id, 'Contacted', 1, '#3b82f6', false, false),
    (NEW.id, 'Qualified', 2, '#8b5cf6', false, false),
    (NEW.id, 'Proposal', 3, '#f59e0b', false, false),
    (NEW.id, 'Won', 4, '#10b981', true, false),
    (NEW.id, 'Lost', 5, '#ef4444', false, true);

  INSERT INTO public.integrations (user_id) VALUES (NEW.id);
  RETURN NEW;
END $function$;

DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();