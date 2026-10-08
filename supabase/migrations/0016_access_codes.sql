-- Access codes: one code, one person, the app unlocked.
--
-- Typed into the same "Have a code?" field as an invite, so nothing new has to
-- ship on the paywall. Where an invite code earns a discount, an access code
-- writes a `comp_access` row for whoever uses it: the app is open on that
-- account, nothing is charged and nothing is recorded as a purchase
-- (`entities/purchase/model/comp.ts`).
--
-- Each code works once. The person who used it can type it again and get the
-- same answer; anyone else is told the code is unknown, so a used code tells a
-- stranger nothing.
--
-- The codes themselves are not in this file: a migration is committed, and a
-- code in git is a code anyone with the repo can use. Add them with
--
--   insert into public.access_codes (code, note) values ('ABCD', 'who it is for');
--
-- in the SQL editor. `days` null is no end; a number is that many days from
-- the moment it is used. A code is four characters from the invite alphabet
-- (no 0, O, 1, I), because the field takes exactly that.

create table if not exists public.access_codes (
  code         text primary key check (code ~ '^[A-HJ-NP-Z2-9]{4}$'),
  note         text,
  days         int check (days is null or days > 0),
  redeemed_by  uuid unique references auth.users (id) on delete set null,
  redeemed_at  timestamptz,
  created_at   timestamptz not null default now()
);

-- Nobody reads or writes it from the app; only the function below does.
alter table public.access_codes enable row level security;
revoke all on public.access_codes from anon, authenticated;

/**
 * Redeem a code: an access code first, then an invite.
 *
 * An access code answers `ok`, the same word an invite's success uses, so a
 * build from before access codes says something sensible instead of meeting a
 * result it has no message for. Builds that know about them re-read the
 * account's access after any `ok` and say which kind it was.
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
  access access_codes%rowtype;
begin
  if uid is null then
    raise exception 'not signed in';
  end if;

  select * into access from access_codes where code = normalised for update;
  if found then
    if access.redeemed_by is not null and access.redeemed_by <> uid then
      return 'unknown';
    end if;
    if access.redeemed_by is null then
      update access_codes set redeemed_by = uid, redeemed_at = now() where code = normalised;
    end if;
    insert into comp_access (user_id, reason, until)
    values (
      uid,
      'access code ' || normalised,
      case when access.days is null then null else coalesce(access.redeemed_at, now()) + make_interval(days => access.days) end
    )
    -- A founder's or reviewer's own grant is never shortened by a code.
    on conflict (user_id) do nothing;
    return 'ok';
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
    -- Two taps on the same button, or one account trying a second access
    -- code. Not an error to report.
    return 'already';
end;
$$;

grant execute on function public.redeem_referral_code(text) to anon, authenticated;
