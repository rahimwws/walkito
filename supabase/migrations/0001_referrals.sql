-- Invite codes.
--
-- Two tables and three functions. The tables are never written to by the client
-- directly: every policy below is read-only, and the three `security definer`
-- functions are the only way a row is created. That is the whole security model
-- of this file, and it matters because the app ships an anon key — with plain
-- insert policies, anyone holding that key could write themselves a redemption
-- and take the discount without ever knowing a code.
--
-- Identity is `auth.uid()`, which means the app must sign in. It uses anonymous
-- sign-in, so there is no account to create; enable it under
-- Authentication → Providers → Anonymous.

create extension if not exists pgcrypto;

-- ---------------------------------------------------------------------------
-- Tables
-- ---------------------------------------------------------------------------

/**
 * One code per user, forever.
 *
 * `owner_id` is unique rather than merely indexed: a user with two codes has
 * two ways to be credited for the same invite, and reconciling that later is a
 * migration nobody wants to write.
 */
create table if not exists public.referral_codes (
  code        text primary key check (code ~ '^[A-Z0-9]{4}$'),
  owner_id    uuid not null unique references auth.users (id) on delete cascade,
  created_at  timestamptz not null default now()
);

/**
 * One redemption per user, ever.
 *
 * `redeemer_id` is the primary key, which is what enforces that: a person may
 * be invited once, and no amount of reinstalling changes it as long as the
 * account behind it survives. `owner_id` is denormalised so the owner's side of
 * the reward can be counted without a join back through a code that may have
 * been deleted.
 */
create table if not exists public.referral_redemptions (
  redeemer_id uuid primary key references auth.users (id) on delete cascade,
  code        text not null references public.referral_codes (code) on delete cascade,
  owner_id    uuid not null references auth.users (id) on delete cascade,
  created_at  timestamptz not null default now()
);

create index if not exists referral_redemptions_owner_idx
  on public.referral_redemptions (owner_id);

-- ---------------------------------------------------------------------------
-- Policies: read your own row, write nothing
-- ---------------------------------------------------------------------------

alter table public.referral_codes enable row level security;
alter table public.referral_redemptions enable row level security;

drop policy if exists "read own code" on public.referral_codes;
create policy "read own code" on public.referral_codes
  for select using (owner_id = auth.uid());

drop policy if exists "read own redemptions" on public.referral_redemptions;
create policy "read own redemptions" on public.referral_redemptions
  for select using (redeemer_id = auth.uid() or owner_id = auth.uid());

-- No insert, update or delete policy anywhere, deliberately. Writes go through
-- the functions below, which run as the definer and validate first.

-- ---------------------------------------------------------------------------
-- Functions
-- ---------------------------------------------------------------------------

/**
 * A four-character code, from an alphabet with no look-alikes.
 *
 * O/0 and I/1 are out, because this code is read off one screen and typed into
 * another — usually from a photo of the first. 32^4 is about a million, which
 * is thin for a large user base and ample for an invite scheme; the caller
 * retries on collision rather than pretending it cannot happen.
 */
create or replace function public.new_referral_code()
returns text
language plpgsql
as $$
declare
  alphabet constant text := 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  result text := '';
begin
  for _ in 1..4 loop
    result := result || substr(alphabet, 1 + floor(random() * length(alphabet))::int, 1);
  end loop;
  return result;
end;
$$;

/**
 * The caller's own code, made on first ask.
 *
 * Idempotent: asking twice returns the same code. The retry loop exists for the
 * primary-key collision, which at four characters is rare but not negligible.
 */
create or replace function public.claim_referral_code()
returns text
language plpgsql
security definer
set search_path = public
as $$
declare
  uid uuid := auth.uid();
  existing text;
  candidate text;
begin
  if uid is null then
    raise exception 'not signed in';
  end if;

  select code into existing from referral_codes where owner_id = uid;
  if existing is not null then
    return existing;
  end if;

  for _ in 1..10 loop
    candidate := new_referral_code();
    begin
      insert into referral_codes (code, owner_id) values (candidate, uid);
      return candidate;
    exception
      when unique_violation then
        -- The owner already had one, inserted by a concurrent call: take it.
        select code into existing from referral_codes where owner_id = uid;
        if existing is not null then
          return existing;
        end if;
        -- Otherwise the code collided. Go round again.
    end;
  end loop;

  raise exception 'could not allocate a referral code';
end;
$$;

/**
 * Redeem someone else's code.
 *
 * Returns a status string rather than raising, because every one of these is an
 * ordinary thing a person can do and the screen has to say which happened:
 * `ok`, `unknown` (no such code), `own` (their own code), `already` (they have
 * redeemed before).
 *
 * Case and whitespace are forgiven — the code is typed by hand, and rejecting
 * "  7kq2 " for a reason the user cannot see is the app being pedantic about
 * its own formatting.
 */
create or replace function public.redeem_referral_code(p_code text)
returns text
language plpgsql
security definer
set search_path = public
as $$
declare
  uid uuid := auth.uid();
  normalised text := upper(trim(p_code));
  owner uuid;
begin
  if uid is null then
    raise exception 'not signed in';
  end if;

  select owner_id into owner from referral_codes where code = normalised;
  if owner is null then
    return 'unknown';
  end if;
  if owner = uid then
    return 'own';
  end if;
  if exists (select 1 from referral_redemptions where redeemer_id = uid) then
    return 'already';
  end if;

  insert into referral_redemptions (redeemer_id, code, owner_id)
  values (uid, normalised, owner);
  return 'ok';
exception
  when unique_violation then
    -- Two taps on the same button. Not an error to report.
    return 'already';
end;
$$;

/**
 * Everything the app needs to draw the referral screens, in one round trip.
 *
 * `discounted` is the entitlement, and it is computed here rather than in the
 * client for the obvious reason: a client that decides whether it is entitled
 * will always decide yes. Both sides of an invite earn it — the person who was
 * invited, and the person whose code they used.
 */
create or replace function public.referral_status()
returns json
language plpgsql
security definer
set search_path = public
as $$
declare
  uid uuid := auth.uid();
  my_code text;
  used text;
  invites int;
begin
  if uid is null then
    raise exception 'not signed in';
  end if;

  select code into my_code from referral_codes where owner_id = uid;
  select code into used from referral_redemptions where redeemer_id = uid;
  select count(*) into invites from referral_redemptions where owner_id = uid;

  return json_build_object(
    'code', my_code,
    'redeemed_code', used,
    'invites', invites,
    'discounted', (used is not null) or (invites > 0)
  );
end;
$$;

grant execute on function public.claim_referral_code() to anon, authenticated;
grant execute on function public.redeem_referral_code(text) to anon, authenticated;
grant execute on function public.referral_status() to anon, authenticated;
