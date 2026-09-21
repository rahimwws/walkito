-- The user's email address, and nothing more.
--
-- Not an account. There is no password, no sign-in and no session behind this:
-- the app's identity is still the anonymous one it mints on first launch, and
-- everything a person does — the programme, the pain log, the streak — stays on
-- their device. This is an address to answer on, stored beside the id we
-- already have.
--
-- Built as `push_tokens` is built, deliberately. Same shape of fact, same
-- lifetime, same rules: one row per user, replaced rather than accumulated,
-- readable only by its owner, writable only through a function.

create table if not exists public.contact_emails (
  user_id     uuid primary key references auth.users (id) on delete cascade,
  email       text not null,
  updated_at  timestamptz not null default now()
);

alter table public.contact_emails enable row level security;

-- Read your own, write nothing directly — the same rule the referral and push
-- tables follow. A client that could write this column directly could write
-- somebody else's, whatever the policy said about reading it.
drop policy if exists "read own email" on public.contact_emails;
create policy "read own email" on public.contact_emails
  for select using (user_id = auth.uid());

/**
 * Stores the caller's email.
 *
 * Idempotent, and safe to call whenever the app happens to learn one. Apple
 * hands the address back **only on the very first authorisation** for an Apple
 * ID — every sign-in after that returns null — so the app writes it the moment
 * it arrives rather than asking again later.
 *
 * Blank input returns rather than storing, for the same reason the client
 * guards it: a null from Apple must not erase an address already captured.
 */
create or replace function public.save_contact_email(p_email text)
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
  if p_email is null or btrim(p_email) = '' then
    return;
  end if;

  insert into contact_emails (user_id, email, updated_at)
  values (uid, lower(btrim(p_email)), now())
  on conflict (user_id) do update
    set email = excluded.email, updated_at = now();
end;
$$;

grant execute on function public.save_contact_email(text) to anon, authenticated;
