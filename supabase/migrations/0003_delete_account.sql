-- Account deletion, on the server, for the caller only.
--
-- Apple requires an in-app way to delete an account for any app that creates
-- one, and this app creates an anonymous identity on first launch. Clearing
-- local storage is not deletion: the referral code, the redemption and the push
-- token all live on the server, and a reinstall would find them waiting.
--
-- `security definer` because a client cannot touch `auth.users`. The caller is
-- read from `auth.uid()` and never taken as an argument, so there is no id to
-- forge — the same shape as every other function in this schema. `search_path`
-- is pinned for the same reason they pin it: an unqualified name would
-- otherwise resolve against whatever the caller put on their path.

create or replace function public.delete_account()
returns void
language plpgsql
security definer
set search_path = public, auth
as $$
declare
  uid uuid := auth.uid();
begin
  if uid is null then
    raise exception 'not authenticated';
  end if;

  -- One statement, because every table that references a user already declares
  -- `on delete cascade` against `auth.users`:
  --
  --   referral_codes.owner_id           -> cascade
  --   referral_redemptions.redeemer_id  -> cascade
  --   referral_redemptions.owner_id     -> cascade
  --   push_tokens.user_id               -> cascade
  --   contact_emails.user_id            -> cascade  (0004)
  --
  -- Deleting each by hand first would duplicate that rule in a second place,
  -- and the copy is what goes stale when a table is added. If a future table
  -- references a user *without* a cascade, the right fix is the cascade, not a
  -- line here.
  delete from auth.users where id = uid;
end;
$$;

revoke all on function public.delete_account() from public;
grant execute on function public.delete_account() to authenticated;
