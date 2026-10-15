-- How many other people moved their feet today, and the size of the club.
--
-- The end of a session says "{count} others moved with you today". The count
-- is people, not sessions: distinct accounts with a session finished in the
-- last 24 hours, leaving out the caller and the test accounts that the
-- insights already leave out (0012). Nothing about anybody is returned, only
-- the number; no pain, no zone, no routine.
--
-- The club's size is kept by hand in `community_club`, one row per place
-- (Telegram for Russian speakers, WhatsApp for everyone else): neither chat
-- has a count the server can read without a bot. Update it as the groups
-- grow; a place with no row shows no count in the app.
--   insert into public.community_club (platform, members) values ('telegram', 120)
--   on conflict (platform) do update set members = excluded.members, updated_at = now();

create table if not exists public.community_club (
  platform    text primary key check (platform in ('telegram', 'whatsapp')),
  members     integer not null check (members >= 0),
  updated_at  timestamptz not null default now()
);

alter table public.community_club enable row level security;
revoke all on public.community_club from public, anon, authenticated;

-- Fast enough for a count over a day: sessions are filed by time already
-- in most queries, and this one reads only the last 24 hours.
create index if not exists sessions_completed_at_idx on public.sessions (completed_at);

create or replace function public.community_pulse()
returns table (others_today integer, telegram_members integer, whatsapp_members integer)
language sql
stable
security definer
set search_path = public
as $$
  select
    (
      select count(distinct s.user_id)::integer
      from public.sessions s
      where s.completed_at >= now() - interval '24 hours'
        and s.user_id is distinct from auth.uid()
        and not exists (select 1 from insights.test_accounts t where t.user_id = s.user_id)
    ),
    (select members from public.community_club where platform = 'telegram'),
    (select members from public.community_club where platform = 'whatsapp');
$$;

revoke all on function public.community_pulse() from public, anon;
grant execute on function public.community_pulse() to authenticated;
