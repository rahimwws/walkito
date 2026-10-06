-- Access granted by account, not by purchase.
--
-- A subscription lives with RevenueCat's customer, and that customer is the
-- phone: the app never logs RevenueCat in as the account, so a promotional
-- grant there reaches one device. A store reviewer signs in to the demo
-- account on a phone of their own and met the paywall, and Google rejected the
-- build for it ("Login credentials are incorrect": they did not get the access
-- the demo account promised). A row here unlocks the app for that account on
-- any phone it signs in on (`entities/purchase/model/comp.ts`).
--
-- To grant: insert into public.comp_access (user_id, reason) values ('…', 'founder');
-- `until` null is no end. To take it away, delete the row.

create table if not exists public.comp_access (
  user_id   uuid primary key references auth.users (id) on delete cascade,
  reason    text not null,
  until     timestamptz,
  added_at  timestamptz not null default now()
);

alter table public.comp_access enable row level security;

-- Each account reads its own row and nothing else. No writes from the app.
drop policy if exists "read own comp access" on public.comp_access;
create policy "read own comp access" on public.comp_access
  for select to authenticated
  using (user_id = auth.uid());

revoke insert, update, delete on public.comp_access from anon, authenticated;

-- The store review demo account, and the founders' own accounts.
insert into public.comp_access (user_id, reason)
select id, 'store review' from auth.users where email = 'review@walkito.app'
on conflict (user_id) do nothing;

insert into public.comp_access (user_id, reason)
select id, 'founder' from auth.users
where email in ('umudyan2014@gmail.com', 'rahimwws.me@gmail.com', 'rahimwwsdesign@gmail.com', 'rahim@nemy.agency')
on conflict (user_id) do nothing;
