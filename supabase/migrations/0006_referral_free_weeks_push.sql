-- The owner's push, reworded for what an invite now earns them.
--
-- An owner used to get the same discount as the friend they invited, which was
-- worth nothing to anyone who had already paid. They now get free weeks on the
-- programme they hold (see `referralBonusDays` in the app), so the push says
-- that instead of promising a discount.
--
-- Still no figures. The number of weeks and the cap live in the app as
-- constants, and a second copy here, in another language, is the one nobody
-- would think to update — the push says the reward is in, and the app, which
-- knows the numbers, says what it is.
--
-- The body is otherwise unchanged from 0002: failures are swallowed, because a
-- push that does not go out must never roll back the redemption behind it.

create or replace function public.notify_referral_owner()
returns trigger
language plpgsql
security definer
set search_path = public, extensions
as $$
declare
  owner_token text;
begin
  select token into owner_token from push_tokens where user_id = new.owner_id;
  if owner_token is null then
    return new;
  end if;

  perform net.http_post(
    url := 'https://exp.host/--/api/v2/push/send',
    headers := jsonb_build_object(
      'Content-Type', 'application/json',
      'Accept', 'application/json'
    ),
    body := jsonb_build_object(
      'to', owner_token,
      'title', 'Your code worked',
      'body', 'Someone joined with your code. Your free weeks are in.',
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
