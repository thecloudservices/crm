CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path TO 'public', 'extensions'
AS $function$
DECLARE
  new_key TEXT;
  safe_display_name TEXT;
BEGIN
  safe_display_name := COALESCE(NULLIF(trim(NEW.raw_user_meta_data->>'display_name'), ''), split_part(NEW.email, '@', 1), 'New user');

  INSERT INTO public.profiles (id, display_name)
  VALUES (NEW.id, safe_display_name)
  ON CONFLICT (id) DO UPDATE
    SET display_name = COALESCE(NULLIF(public.profiles.display_name, ''), EXCLUDED.display_name),
        updated_at = now();

  INSERT INTO public.user_roles (user_id, role)
  VALUES (NEW.id, 'user')
  ON CONFLICT (user_id, role) DO NOTHING;

  IF NOT EXISTS (SELECT 1 FROM public.api_keys WHERE user_id = NEW.id) THEN
    new_key := 'oxp_' || encode(extensions.gen_random_bytes(24), 'hex');
    INSERT INTO public.api_keys (user_id, key, label)
    VALUES (NEW.id, new_key, 'Default');
  END IF;

  IF NOT EXISTS (SELECT 1 FROM public.pipeline_stages WHERE user_id = NEW.id) THEN
    INSERT INTO public.pipeline_stages (user_id, name, position, color, is_won, is_lost) VALUES
      (NEW.id, 'New', 0, '#64748b', false, false),
      (NEW.id, 'Contacted', 1, '#3b82f6', false, false),
      (NEW.id, 'Qualified', 2, '#8b5cf6', false, false),
      (NEW.id, 'Proposal', 3, '#f59e0b', false, false),
      (NEW.id, 'Won', 4, '#10b981', true, false),
      (NEW.id, 'Lost', 5, '#ef4444', false, true);
  END IF;

  INSERT INTO public.integrations (user_id)
  VALUES (NEW.id)
  ON CONFLICT (user_id) DO NOTHING;

  RETURN NEW;
END
$function$;

DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

UPDATE public.profiles p
SET display_name = split_part(u.email, '@', 1), updated_at = now()
FROM auth.users u
WHERE p.id = u.id
  AND (p.display_name IS NULL OR trim(p.display_name) = '');