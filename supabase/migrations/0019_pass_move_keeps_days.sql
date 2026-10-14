-- A pass that follows its buyer keeps its own days.
--
-- 0018 moved a grant off an anonymous account by granting it afresh: from the
-- purchase date, with 90 new days. Two things went wrong with that:
--
--   * A pass queued behind a subscription (the cancel flow's budget pass) was
--     pulled back to its purchase date, into months the subscription had
--     already paid for, and was worth nothing once renewal was off.
--   * A pass that had run out came back as 90 new days behind the claimer's
--     own pass.
--
-- Now a move carries only the days the pass has left, from where it stood in
-- its queue (or behind the claimer's own pass, whichever is later); a pass
-- with none left moves as history and changes no window. Also:
--
--   * Only `pass-sync` moves (`p_allow_move`): it is the phone that holds the
--     store customer asking. The webhook grants and never moves, so two
--     accounts sharing a store customer cannot pull a pass back and forth.
--   * Claims of one transaction are serialized (an advisory lock), so the
--     webhook and `pass-sync` cannot deadlock on the two profile rows.
--   * The claiming account always gets the purchase in its history
--     (`pass_bought_at`, `retention_offer_used_at`, dated by the purchase),
--     even when the days stay elsewhere, so the cancel flow's once-a-year rule
--     follows the store customer.

drop function if exists public.grant_pass(uuid, text, text, text, timestamptz, timestamptz, boolean, integer);

-- A profile's window from the grants it holds: the running and queued ones
-- when there are any, else the last that ended (the expiry screen reads it).
create or replace function public.pass_window_from_grants(p_user_id uuid)
returns void
language plpgsql
security definer
set search_path = public
as $$
begin
  if exists (select 1 from pass_grants where user_id = p_user_id and expires_at > now()) then
    update profiles
    set pass_starts_at = (select min(starts_at) from pass_grants where user_id = p_user_id and expires_at > now()),
        pass_expires_at = (select max(expires_at) from pass_grants where user_id = p_user_id),
        updated_at = now()
    where user_id = p_user_id;
  else
    update profiles p
    set pass_starts_at = last.starts_at,
        pass_expires_at = last.expires_at,
        updated_at = now()
    from (
      select starts_at, expires_at from pass_grants where user_id = p_user_id order by expires_at desc limit 1
    ) last
    where p.user_id = p_user_id;
    if not found then
      update profiles set pass_starts_at = null, pass_expires_at = null, updated_at = now() where user_id = p_user_id;
    end if;
  end if;
  update profiles
  set pass_bought_at = (select max(purchased_at) from pass_grants where user_id = p_user_id)
  where user_id = p_user_id;
end;
$$;

revoke all on function public.pass_window_from_grants(uuid) from public, anon, authenticated;
grant execute on function public.pass_window_from_grants(uuid) to service_role;

create or replace function public.grant_pass(
  p_user_id        uuid,
  p_transaction_id text,
  p_product_id     text,
  p_rc_app_user_id text,
  p_purchased_at   timestamptz,
  p_premium_until  timestamptz,
  p_retention      boolean,
  p_days           integer default 90,
  p_allow_move     boolean default false
)
returns table (granted boolean, starts_at timestamptz, expires_at timestamptz)
language plpgsql
security definer
set search_path = public
as $$
declare
  prof        profiles%rowtype;
  v_old       pass_grants%rowtype;
  v_bought    timestamptz := coalesce(p_purchased_at, now());
  v_left      interval;
  v_start     timestamptz;
  v_expiry    timestamptz;
  v_starts_at timestamptz;
begin
  -- One claim of a transaction at a time, before any row lock.
  perform pg_advisory_xact_lock(hashtext('grant_pass:' || p_transaction_id));

  -- A profile row may not exist yet (bought before the plan first synced).
  insert into profiles (user_id) values (p_user_id) on conflict (user_id) do nothing;
  select * into prof from profiles where user_id = p_user_id for update;

  -- The purchase is in this account's history whatever happens to its days.
  update profiles
  set pass_bought_at = greatest(v_bought, coalesce(pass_bought_at, '-infinity'::timestamptz)),
      retention_offer_used_at = case
        when p_retention then greatest(v_bought, coalesce(retention_offer_used_at, '-infinity'::timestamptz))
        else retention_offer_used_at
      end
  where user_id = p_user_id;

  select * into v_old from pass_grants g where g.transaction_id = p_transaction_id for update;

  if found then
    -- Already this account's, or a real account's, or not a move this caller
    -- may make: the days stay where they are.
    if v_old.user_id = p_user_id
       or not p_allow_move
       or not exists (select 1 from auth.users u where u.id = v_old.user_id and u.is_anonymous) then
      return query select false, p.pass_starts_at, p.pass_expires_at from profiles p where p.user_id = p_user_id;
      return;
    end if;

    -- Off the anonymous account, with what it had left.
    v_left := greatest(v_old.expires_at - greatest(now(), v_old.starts_at), interval '0');
    delete from pass_grants g where g.transaction_id = p_transaction_id;
    perform pass_window_from_grants(v_old.user_id);

    if v_left = interval '0' then
      -- Used up: history only, no days.
      insert into pass_grants (transaction_id, user_id, product_id, rc_app_user_id, purchased_at, starts_at, expires_at)
      values (p_transaction_id, p_user_id, v_old.product_id, p_rc_app_user_id, v_old.purchased_at, v_old.starts_at, v_old.expires_at);
      return query select false, p.pass_starts_at, p.pass_expires_at from profiles p where p.user_id = p_user_id;
      return;
    end if;

    -- Where it stood in its queue, or behind the claimer's own pass.
    v_start := greatest(v_old.starts_at, now(), coalesce(prof.pass_expires_at, '-infinity'::timestamptz));
    v_expiry := v_start + v_left;
    insert into pass_grants (transaction_id, user_id, product_id, rc_app_user_id, purchased_at, starts_at, expires_at)
    values (p_transaction_id, p_user_id, v_old.product_id, p_rc_app_user_id, v_old.purchased_at, v_start, v_expiry);
    perform pass_window_from_grants(p_user_id);
    return query select true, p.pass_starts_at, p.pass_expires_at from profiles p where p.user_id = p_user_id;
    return;
  end if;

  -- A purchase seen for the first time, as in 0017: from the latest of the
  -- purchase, the subscription's end and the running pass's end.
  v_start := greatest(v_bought, p_premium_until, prof.pass_expires_at);
  v_expiry := v_start + make_interval(days => p_days);
  v_starts_at := case
    when prof.pass_expires_at is not null
         and prof.pass_expires_at > v_bought
         and prof.pass_starts_at is not null
      then prof.pass_starts_at
    else v_start
  end;

  insert into pass_grants (transaction_id, user_id, product_id, rc_app_user_id, purchased_at, starts_at, expires_at)
  values (p_transaction_id, p_user_id, p_product_id, p_rc_app_user_id, v_bought, v_start, v_expiry);

  update profiles
  set pass_starts_at = v_starts_at,
      pass_expires_at = v_expiry,
      updated_at = now()
  where user_id = p_user_id;

  return query select true, v_starts_at, v_expiry;
end;
$$;

revoke all on function public.grant_pass(uuid, text, text, text, timestamptz, timestamptz, boolean, integer, boolean) from public, anon, authenticated;
grant execute on function public.grant_pass(uuid, text, text, text, timestamptz, timestamptz, boolean, integer, boolean) to service_role;
