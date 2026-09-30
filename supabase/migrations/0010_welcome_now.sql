-- The welcome, fifteen seconds after the address arrives.
--
-- Not on the hour: somebody who signs in with Apple at the start of onboarding
-- should find the welcome in their inbox while they are still answering
-- questions. An address arriving is an insert into `email_contacts`, so this
-- trigger posts the user id to the scheduler, which waits fifteen seconds and
-- sends it (see `welcomeNow` in supabase/functions/_shared/email/rules.ts).
--
-- The request goes through pg_net, which queues it and sends it after the
-- transaction commits; a failed or rolled-back insert posts nothing. Any error
-- here is swallowed: saving somebody's address must never fail because the
-- email side could not be reached. The project URL and the shared secret are
-- the same Vault entries the hourly job reads.

create or replace function public.email_welcome_on_contact()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  begin
    perform net.http_post(
      url := (select decrypted_secret from vault.decrypted_secrets where name = 'project_url') || '/functions/v1/email-scheduler',
      headers := jsonb_build_object(
        'Content-Type', 'application/json',
        'Authorization', 'Bearer ' || (select decrypted_secret from vault.decrypted_secrets where name = 'email_cron_secret')
      ),
      body := jsonb_build_object('welcomeFor', new.user_id),
      timeout_milliseconds := 5000
    );
  exception when others then
    raise warning 'email welcome not queued: %', sqlerrm;
  end;
  return new;
end;
$$;

revoke all on function public.email_welcome_on_contact() from public, anon, authenticated;

drop trigger if exists email_welcome on public.email_contacts;
create trigger email_welcome
  after insert on public.email_contacts
  for each row execute function public.email_welcome_on_contact();
