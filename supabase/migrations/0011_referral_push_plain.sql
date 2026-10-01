-- The owner's push, without the free weeks.
--
-- 0006 told the owner of a redeemed code "Your free weeks are in." Nobody can
-- receive them any more: the days only ever lengthened the one-time pass, and
-- the pass is no longer sold. An App Store subscription cannot be lengthened
-- from the device, so a subscriber was told about a reward that never arrived.
-- The push now says only what happened. The friend's discount is theirs to
-- mention; the app's gift sheet, Profile and the Terms say the same.
--
-- It also speaks the owner's language now, from the address the app saved
-- (`email_contacts.locale`, kept by `save_email_contact`). English when there
-- is none.
--
-- The body is otherwise unchanged from 0006: failures are swallowed, because a
-- push that does not go out must never roll back the redemption behind it.

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
