-- Telling the owner their code was used.
--
-- The notification is sent by the database, not by either app. The person who
-- needs to hear about it is the one who is not there: they handed a code to a
-- friend days ago and have no reason to open anything. A client-side send would
-- have to run on the redeemer's phone and address someone else's device, which
-- is both a strange thing to ask a client to do and impossible to do safely
-- with a public key.
--
-- `pg_net` posts asynchronously, so the redemption commits at its own speed and
-- a slow push service cannot make redeeming a code feel slow.

create extension if not exists pg_net with schema extensions;

-- ---------------------------------------------------------------------------
-- Tokens
-- ---------------------------------------------------------------------------

/**
 * One push token per user, replaced rather than accumulated.
 *
 * A device that reinstalls gets a new token and the old one stops working, so
 * keeping a history would mean sending every notification to a growing pile of
 * dead addresses. The latest is the only one worth holding.
 */
create table if not exists public.push_tokens (
  user_id     uuid primary key references auth.users (id) on delete cascade,
  token       text not null,
  updated_at  timestamptz not null default now()
);

alter table public.push_tokens enable row level security;

-- Read your own, write nothing directly — same rule as the referral tables.
drop policy if exists "read own token" on public.push_tokens;
create policy "read own token" on public.push_tokens
  for select using (user_id = auth.uid());

/**
 * Stores the caller's push token.
 *
 * Idempotent, and called on every launch: tokens rotate without warning, and
 * the cheapest way to hold a current one is to overwrite it whenever the app
 * happens to know it.
 */
create or replace function public.save_push_token(p_token text)
returns void
language plpgsql
security definer
set search_path = public
as $$
declare
  uid uuid := auth.uid();
begin
  if uid is null then
    raise exception 'not signed in';
  end if;
  if p_token is null or p_token = '' then
    return;
  end if;

  insert into push_tokens (user_id, token, updated_at)
  values (uid, p_token, now())
  on conflict (user_id) do update
    set token = excluded.token, updated_at = now();
end;
$$;

grant execute on function public.save_push_token(text) to anon, authenticated;

-- ---------------------------------------------------------------------------
-- The send
-- ---------------------------------------------------------------------------

/**
 * Tells the owner of a code that someone used it.
 *
 * Deliberately carries no percentage. The figure lives in the app as one
 * constant, and repeating it here would be a second copy in a different
 * language that nobody would think to update — the push says the discount is
 * ready and the app, which knows the number, says what it is.
 *
 * Failures are swallowed. A push that does not go out must never roll back the
 * redemption behind it: the discount is earned by the redemption, not by the
 * notification, and losing the first because the second failed would be the
 * worst possible trade.
 */
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
      'body', 'Someone joined with your code. Your discount is ready.',
      'sound', 'default',
      -- Read by the app when the notification is opened, so tapping it lands on
      -- the discount rather than on whatever screen was last up.
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

drop trigger if exists referral_redeemed on public.referral_redemptions;
create trigger referral_redeemed
  after insert on public.referral_redemptions
  for each row
  execute function public.notify_referral_owner();
