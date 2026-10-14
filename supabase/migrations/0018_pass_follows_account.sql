-- The 3-month pass follows its buyer from an anonymous account.
--
-- A pass is bought before any sign-in: the store's sheet first, then the
-- screens after a first purchase, which ask for an account as they do after a
-- subscription. So its days are first granted to the anonymous account of
-- first launch. When the same store customer then turns up on another account
-- (signing in to an account that already existed, or Restore Purchases after
-- a reinstall, which starts a new anonymous account), `grant_pass` used to
-- answer "already granted" and the days stayed behind on an account nobody
-- can open again.
--
-- Now a grant held by an anonymous account moves to the account claiming it.
-- Only from an anonymous one: a pass on a real account stays where it is. The
-- claim is made only by `pass-sync` and the webhook, for a purchase found in
-- RevenueCat's own record of a store customer linked to the claiming account,
-- as before. The days keep their dates (the purchase's), so moving them gains
-- nothing.

create or replace function public.grant_pass(
  p_user_id        uuid,
  p_transaction_id text,
  p_product_id     text,
  p_rc_app_user_id text,
  p_purchased_at   timestamptz,
  p_premium_until  timestamptz,
  p_retention      boolean,
  p_days           integer default 90
)
returns table (granted boolean, starts_at timestamptz, expires_at timestamptz)
language plpgsql
security definer
set search_path = public
as $$
declare
  prof        profiles%rowtype;
  v_owner     uuid;
  v_start     timestamptz;
  v_expiry    timestamptz;
  v_starts_at timestamptz;
begin
  -- A profile row may not exist yet (bought before the plan first synced).
  insert into profiles (user_id) values (p_user_id) on conflict (user_id) do nothing;
  select * into prof from profiles where user_id = p_user_id for update;

  select g.user_id into v_owner from pass_grants g where g.transaction_id = p_transaction_id for update;
  if found then
    -- This account's already, or a real account's: nothing changes.
    if v_owner = p_user_id
       or not exists (select 1 from auth.users u where u.id = v_owner and u.is_anonymous) then
      return query select false, prof.pass_starts_at, prof.pass_expires_at;
      return;
    end if;
    -- Paid for on an anonymous account: the days leave it, and its window is
    -- what its other passes (usually none) still make.
    delete from pass_grants g where g.transaction_id = p_transaction_id;
    update profiles o
    set pass_starts_at = (select min(g.starts_at) from pass_grants g where g.user_id = v_owner),
        pass_expires_at = (select max(g.expires_at) from pass_grants g where g.user_id = v_owner),
        pass_bought_at = (select max(g.purchased_at) from pass_grants g where g.user_id = v_owner),
        updated_at = now()
    where o.user_id = v_owner;
  end if;

  -- From here as in 0017: the latest of the purchase, the subscription's end
  -- and the running pass's end.
  v_start := greatest(coalesce(p_purchased_at, now()), p_premium_until, prof.pass_expires_at);
  v_expiry := v_start + make_interval(days => p_days);
  v_starts_at := case
    when prof.pass_expires_at is not null
         and prof.pass_expires_at > coalesce(p_purchased_at, now())
         and prof.pass_starts_at is not null
      then prof.pass_starts_at
    else v_start
  end;

  insert into pass_grants (transaction_id, user_id, product_id, rc_app_user_id, purchased_at, starts_at, expires_at)
  values (p_transaction_id, p_user_id, p_product_id, p_rc_app_user_id, coalesce(p_purchased_at, now()), v_start, v_expiry);

  update profiles
  set pass_starts_at = v_starts_at,
      pass_expires_at = v_expiry,
      pass_bought_at = greatest(coalesce(p_purchased_at, now()), coalesce(pass_bought_at, '-infinity'::timestamptz)),
      retention_offer_used_at = case when p_retention then now() else retention_offer_used_at end,
      updated_at = now()
  where user_id = p_user_id;

  return query select true, v_starts_at, v_expiry;
end;
$$;

revoke all on function public.grant_pass(uuid, text, text, text, timestamptz, timestamptz, boolean, integer) from public, anon, authenticated;
grant execute on function public.grant_pass(uuid, text, text, text, timestamptz, timestamptz, boolean, integer) to service_role;
