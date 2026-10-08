-- Portuguese, French, German and Italian.
--
-- The app ships in seven languages now. Three places on the server knew only
-- three of them, and each fell back to English or dropped the language:
--
-- - `email_contacts.locale` refused anything but en, ru and es.
-- - `save_email_contact` turned any other language into null, so a German
--   phone kept whatever locale the row already had (English, for a new one).
-- - The referral push spoke en, ru and es.
--
-- The email copy itself lives in `supabase/functions/_shared/email/copy*.ts`.

alter table public.email_contacts drop constraint if exists email_contacts_locale_check;
alter table public.email_contacts
  add constraint email_contacts_locale_check
  check (locale in ('en', 'ru', 'es', 'pt', 'fr', 'de', 'it'));

create or replace function public.save_email_contact(
  p_email       text,
  p_source      text,
  p_locale      text,
  p_timezone    text,
  p_first_name  text
)
returns void
language plpgsql
security definer
set search_path = public
as $$
declare
  uid     uuid := auth.uid();
  address text := lower(btrim(coalesce(p_email, '')));
  loc     text := case when p_locale in ('en', 'ru', 'es', 'pt', 'fr', 'de', 'it') then p_locale else null end;
  tz      text := nullif(btrim(coalesce(p_timezone, '')), '');
  fname   text := nullif(btrim(coalesce(p_first_name, '')), '');
  src     text;
begin
  if uid is null then
    raise exception 'not signed in';
  end if;
  -- A zone Postgres does not know would break every local-hour check later.
  if tz is not null and not exists (select 1 from pg_timezone_names where name = tz) then
    tz := null;
  end if;

  if address = '' then
    update email_contacts
      set locale = coalesce(loc, locale),
          timezone = coalesce(tz, timezone),
          first_name = coalesce(fname, first_name),
          updated_at = now()
      where user_id = uid;
    return;
  end if;

  src := case
    when address like '%@privaterelay.appleid.com' then 'apple_relay'
    when p_source in ('apple', 'google', 'onboarding', 'site_quiz') then p_source
    else 'onboarding'
  end;

  insert into email_contacts (user_id, email, source, locale, timezone, first_name)
  values (uid, address, src, coalesce(loc, 'en'), coalesce(tz, 'UTC'), fname)
  on conflict (user_id) do update
    set bounced = case when email_contacts.email = excluded.email then email_contacts.bounced else false end,
        source = case when email_contacts.email = excluded.email then email_contacts.source else excluded.source end,
        email = excluded.email,
        locale = coalesce(loc, email_contacts.locale),
        timezone = coalesce(tz, email_contacts.timezone),
        first_name = coalesce(fname, email_contacts.first_name),
        updated_at = now();

  -- The older table support reads, kept in step.
  insert into contact_emails (user_id, email, updated_at)
  values (uid, address, now())
  on conflict (user_id) do update set email = excluded.email, updated_at = now();
end;
$$;

create or replace function public.notify_referral_owner()
returns trigger
language plpgsql
security definer
set search_path = public, extensions
as $$
declare
  owner_token text;
  owner_locale text;
  push_title text;
  push_body text;
begin
  select token into owner_token from push_tokens where user_id = new.owner_id;
  if owner_token is null then
    return new;
  end if;

  select locale into owner_locale from email_contacts where user_id = new.owner_id;

  case coalesce(owner_locale, 'en')
    when 'ru' then
      push_title := 'Ваш код сработал';
      push_body := 'Кто-то присоединился по вашему коду. Спасибо, что делитесь Walkito.';
    when 'es' then
      push_title := 'Tu código funcionó';
      push_body := 'Alguien se unió con tu código. Gracias por compartir Walkito.';
    when 'pt' then
      push_title := 'Seu código funcionou';
      push_body := 'Alguém entrou com o seu código. Obrigado por compartilhar o Walkito.';
    when 'fr' then
      push_title := 'Ton code a marché';
      push_body := 'Quelqu''un a rejoint Walkito avec ton code. Merci de l''avoir partagé.';
    when 'de' then
      push_title := 'Dein Code hat funktioniert';
      push_body := 'Jemand ist mit deinem Code dabei. Danke, dass du Walkito teilst.';
    when 'it' then
      push_title := 'Il tuo codice ha funzionato';
      push_body := 'Qualcuno si è unito con il tuo codice. Grazie per aver condiviso Walkito.';
    else
      push_title := 'Your code worked';
      push_body := 'Someone joined with your code. Thanks for sharing Walkito.';
  end case;

  perform net.http_post(
    url := 'https://exp.host/--/api/v2/push/send',
    headers := jsonb_build_object(
      'Content-Type', 'application/json',
      'Accept', 'application/json'
    ),
    body := jsonb_build_object(
      'to', owner_token,
      'title', push_title,
      'body', push_body,
      'sound', 'default',
      'data', jsonb_build_object('kind', 'referral-redeemed')
    )
  );

  return new;
exception
  when others then
    raise warning 'referral push failed: %', sqlerrm;
    return new;
end;
$$;
