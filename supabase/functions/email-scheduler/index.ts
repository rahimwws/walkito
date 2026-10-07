/**
 * The hourly email run.
 *
 * Called by pg_cron at five past every hour (see 0009_email.sql) with the
 * shared secret as a bearer token. For every reachable contact it loads the
 * user's data, lets `rules.ts` pick at most one email, and sends it through
 * Resend. Before that it does two pieces of bookkeeping: attributing finished
 * actions to clicked emails, and reading back what Resend saw happen to recent
 * sends, so a bounce or a spam complaint stops the next one.
 *
 * EMAIL_POSTAL_ADDRESS is optional: without it the footer has no address line.
 *
 * EMAIL_MODE decides how far a run goes:
 *   off   nothing is decided or sent (the default until configured)
 *   dry   everything is decided and returned, nothing is sent or logged
 *   test  only EMAIL_TEST_RECIPIENTS (addresses or user ids) are sent to
 *   live  everyone
 *
 * A POST body can ask for a dry run of one user, at a given instant, with the
 * rendered HTML — how a template is checked against real data before it ships:
 *   { "dryRun": true, "userId": "…", "now": "2026-10-01T08:10:00Z", "html": true }
 *
 * The welcome does not wait for the hour. A trigger on `email_contacts` posts
 * `{ "welcomeFor": "<user id>" }` the moment an address first arrives, and the
 * welcome goes 15 seconds later — see `welcomeNow`.
 *
 * Or for every email, with sample numbers, sent to one inbox — how the real
 * thing is looked at in a real mail app before anybody else gets it. Nothing
 * is logged and no user is touched; it works in any EMAIL_MODE:
 *   { "sampleTo": "you@example.com", "locale": "ru", "keys": ["welcome"] }
 */

import { createClient } from 'npm:@supabase/supabase-js@2';

import { composeMessage, type MailConfig } from '../_shared/email/compose.ts';
import { loadSnapshots } from '../_shared/email/load.ts';
import { evaluate, welcomeNow } from '../_shared/email/rules.ts';
import { sampleEmails } from '../_shared/email/samples.ts';
import { siteLeadEmail } from '../_shared/email/site-leads.ts';
import { unsubscribeToken } from '../_shared/email/links.ts';
import { renderEmail } from '../_shared/email/template.ts';

const env = (name: string): string => Deno.env.get(name) ?? '';

const SUPABASE_URL = env('SUPABASE_URL');
const SERVICE_KEY = env('SUPABASE_SERVICE_ROLE_KEY');
const CRON_SECRET = env('EMAIL_CRON_SECRET');
const RESEND_KEY = env('RESEND_API_KEY');
const MODE = (env('EMAIL_MODE') || 'off') as 'off' | 'dry' | 'test' | 'live';
const TEST_RECIPIENTS = new Set(
  env('EMAIL_TEST_RECIPIENTS')
    .split(',')
    .map((x) => x.trim().toLowerCase())
    .filter(Boolean),
);

const config: MailConfig = {
  from: env('EMAIL_FROM') || 'walkito <hello@walkito.site>',
  replyTo: env('EMAIL_REPLY_TO') || 'hello@walkito.site',
  postalAddress: env('EMAIL_POSTAL_ADDRESS'),
  linkBase: env('EMAIL_LINK_BASE') || 'https://walkito.site',
  functionsBase: `${SUPABASE_URL}/functions/v1`,
  unsubscribeSecret: env('EMAIL_UNSUBSCRIBE_SECRET'),
};

const BATCH = 200;
/** How long after the sign-up the welcome lands: long enough to feel written, short enough to surprise. */
const WELCOME_DELAY_MS = 15_000;
/** Resend's default limit is a few requests a second; this stays under it. */
const SEND_GAP_MS = 550;

const db = createClient(SUPABASE_URL, SERVICE_KEY, { auth: { persistSession: false } });

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

function json(body: unknown, status = 200): Response {
  return new Response(JSON.stringify(body, null, 2), { status, headers: { 'Content-Type': 'application/json' } });
}

/** What is missing before anything may be sent, in plain words. */
function notReadyToSend(): string[] {
  const missing: string[] = [];
  if (!RESEND_KEY) missing.push('RESEND_API_KEY');
  if (!config.unsubscribeSecret) missing.push('EMAIL_UNSUBSCRIBE_SECRET');
  return missing;
}

// ── Bookkeeping ─────────────────────────────────────────────────────────────

/** Reads Resend's last event for sends from the last three days, and acts on bounces and complaints. */
async function checkDeliveries(): Promise<{ checked: number; bounced: number; complained: number }> {
  const out = { checked: 0, bounced: 0, complained: 0 };
  if (!RESEND_KEY) return out;
  const since = new Date(Date.now() - 3 * 86_400_000).toISOString();
  const { data, error } = await db
    .from('email_log')
    .select('id, user_id, resend_id, delivery')
    .eq('status', 'sent')
    .not('resend_id', 'is', null)
    .gte('sent_at', since)
    .or('delivery.is.null,delivery.in.(sent,queued,scheduled,delivery_delayed)')
    .limit(60);
  if (error != null) {
    console.warn('[email] delivery check skipped', error.message);
    return out;
  }
  for (const row of data ?? []) {
    const res = await fetch(`https://api.resend.com/emails/${row.resend_id}`, { headers: { Authorization: `Bearer ${RESEND_KEY}` } });
    await sleep(SEND_GAP_MS);
    if (!res.ok) continue;
    const body = (await res.json()) as { last_event?: string };
    const event = body.last_event ?? null;
    out.checked++;
    if (event == null || event === row.delivery) continue;
    await db.from('email_log').update({ delivery: event }).eq('id', row.id);
    if (event === 'bounced') {
      out.bounced++;
      await db.from('email_contacts').update({ bounced: true, updated_at: new Date().toISOString() }).eq('user_id', row.user_id);
    } else if (event === 'complained') {
      out.complained++;
      await db
        .from('email_contacts')
        .update({ unsubscribed_at: new Date().toISOString(), lifecycle_opt_in: false, weekly_opt_in: false, updated_at: new Date().toISOString() })
        .eq('user_id', row.user_id);
    }
  }
  return out;
}

// ── Sending ─────────────────────────────────────────────────────────────────

type Outcome = { userId: string; key: string; subject: string; result: string; html?: string };

async function send(decision: NonNullable<ReturnType<typeof evaluate>['decision']>, userId: string, email: string, locale: 'en' | 'ru' | 'es'): Promise<string> {
  // Claim first. The unique (user_id, dedupe_key) index is what keeps two
  // overlapping runs from sending the same email twice.
  const claim = await db
    .from('email_log')
    .insert({ user_id: userId, email_key: decision.key, dedupe_key: decision.dedupeKey, locale, status: 'sending' })
    .select('id')
    .single();
  if (claim.error != null) return claim.error.code === '23505' ? 'already claimed' : `claim failed: ${claim.error.message}`;
  const logId = claim.data.id as string;

  try {
    const message = await composeMessage(decision, { userId, email, locale }, config);
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${RESEND_KEY}`,
        'Content-Type': 'application/json',
        'Idempotency-Key': `${userId}:${decision.dedupeKey}`,
      },
      body: JSON.stringify(message),
    });
    const body = (await res.json().catch(() => ({}))) as { id?: string; message?: string; name?: string };
    if (res.ok && body.id) {
      await db.from('email_log').update({ status: 'sent', resend_id: body.id, sent_at: new Date().toISOString() }).eq('id', logId);
      return 'sent';
    }
    // An address Resend rejects outright will be rejected every hour; mark it
    // like a bounce. Anything else (rate limit, outage) is released to retry.
    if (res.status === 422 && /to|address|email/i.test(body.message ?? '')) {
      await db.from('email_log').update({ status: 'failed', error: body.message ?? 'rejected' }).eq('id', logId);
      await db.from('email_contacts').update({ bounced: true }).eq('user_id', userId);
      return `rejected: ${body.message}`;
    }
    await db.from('email_log').delete().eq('id', logId);
    return `failed ${res.status}: ${body.message ?? body.name ?? 'unknown'}`;
  } catch (error) {
    await db.from('email_log').delete().eq('id', logId);
    return `failed: ${error instanceof Error ? error.message : String(error)}`;
  }
}

/** The welcome for one user who has just given an address. */
async function welcome(userId: string): Promise<void> {
  await sleep(WELCOME_DELAY_MS);
  const { data: rows, error } = await db
    .from('email_contacts')
    .select('user_id, email, locale, timezone, first_name, lifecycle_opt_in, weekly_opt_in, unsubscribed_at, bounced, created_at')
    .eq('user_id', userId)
    .limit(1);
  if (error != null || rows == null || rows.length === 0) return;
  const [snapshot] = await loadSnapshots(db, rows, new Date().toISOString().slice(0, 10));
  const { decision, reason } = welcomeNow(snapshot, new Date());
  if (decision == null) {
    console.log(`[email] welcome skipped for ${userId}: ${reason}`);
    return;
  }
  const email = snapshot.contact.email;
  if (MODE === 'off' || MODE === 'dry') {
    console.log(`[email] welcome decided for ${userId} (${MODE}, not sent): ${decision.content.subject}`);
    return;
  }
  if (MODE === 'test' && !TEST_RECIPIENTS.has(email.toLowerCase()) && !TEST_RECIPIENTS.has(userId)) return;
  if (notReadyToSend().length > 0) return;
  const result = await send(decision, userId, email, snapshot.contact.locale);
  console.log(`[email] welcome for ${userId}: ${result}`);
}

/** Every email (or the ones named) with sample numbers, to one address. Not logged. */
async function sendSamples(to: string, locale: string | undefined, keys: string[] | undefined) {
  if (!RESEND_KEY) return { error: 'RESEND_API_KEY not set' };
  const l = locale === 'ru' || locale === 'es' ? locale : 'en';
  const picked = sampleEmails(l).filter((x) => keys == null || keys.length === 0 || keys.includes(x.key));
  const results: { key: string; result: string }[] = [];
  const sampleConfig = config;
  for (const sample of picked) {
    const message = await composeMessage(
      { key: sample.key, dedupeKey: `sample:${sample.key}`, content: sample.content },
      { userId: '00000000-0000-4000-8000-000000000000', email: to, locale: l },
      sampleConfig,
    );
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { Authorization: `Bearer ${RESEND_KEY}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...message, tags: [...message.tags, { name: 'sample', value: 'true' }] }),
    });
    const out = (await res.json().catch(() => ({}))) as { id?: string; message?: string };
    results.push({ key: sample.key, result: res.ok ? `sent ${out.id}` : `failed ${res.status}: ${out.message ?? ''}` });
    await sleep(SEND_GAP_MS);
  }
  return { samples: results.length, locale: l, to, results };
}

// ── The run ─────────────────────────────────────────────────────────────────

Deno.serve(async (req) => {
  if (req.method !== 'POST') return json({ error: 'POST only' }, 405);
  if (!CRON_SECRET || req.headers.get('Authorization') !== `Bearer ${CRON_SECRET}`) return json({ error: 'unauthorized' }, 401);

  const body = (await req.json().catch(() => ({}))) as {
    dryRun?: boolean;
    userId?: string;
    now?: string;
    html?: boolean;
    sampleTo?: string;
    locale?: string;
    keys?: string[];
    welcomeFor?: string;
  };
  if (body.sampleTo) return json(await sendSamples(body.sampleTo, body.locale, body.keys));
  if (body.welcomeFor) {
    // Answered at once so the database trigger is never held; the work goes on
    // in the background for the fifteen seconds and the send.
    const job = welcome(body.welcomeFor).catch((error) => console.error('[email] welcome failed', error));
    // deno-lint-ignore no-explicit-any
    const runtime = (globalThis as any).EdgeRuntime;
    if (runtime?.waitUntil) runtime.waitUntil(job);
    else await job;
    return json({ accepted: true }, 202);
  }
  const dry = body.dryRun === true || MODE === 'dry';
  if (MODE === 'off' && !dry) return json({ mode: MODE, note: 'EMAIL_MODE is off; nothing decided or sent' });
  const now = dry && body.now ? new Date(body.now) : new Date();

  const missing = notReadyToSend();
  if (!dry && missing.length > 0) return json({ mode: MODE, error: `not configured: ${missing.join(', ')}` }, 503);

  const attributed = dry ? 0 : ((await db.rpc('attribute_email_actions')).data ?? 0);
  const deliveries = dry ? null : await checkDeliveries();

  const outcomes: Outcome[] = [];
  const skippedByReason: Record<string, number> = {};
  let contacts = 0;
  const today = now.toISOString().slice(0, 10);

  for (let from = 0; ; from += BATCH) {
    let query = db
      .from('email_contacts')
      .select('user_id, email, locale, timezone, first_name, lifecycle_opt_in, weekly_opt_in, unsubscribed_at, bounced, created_at')
      .is('unsubscribed_at', null)
      .eq('bounced', false)
      .order('user_id')
      .range(from, from + BATCH - 1);
    if (body.userId) query = query.eq('user_id', body.userId);
    const { data: rows, error } = await query;
    if (error != null) return json({ error: error.message }, 500);
    if (rows == null || rows.length === 0) break;
    contacts += rows.length;

    const snapshots = await loadSnapshots(db, rows, today);
    for (const snapshot of snapshots) {
      const evaluation = evaluate(snapshot, now);
      if (evaluation.decision == null) {
        const reason = evaluation.blocked ?? 'nothing due';
        skippedByReason[reason] = (skippedByReason[reason] ?? 0) + 1;
        // One user asked for by id: say why each email was passed over.
        if (body.userId) {
          outcomes.push({
            userId: snapshot.userId,
            key: 'none',
            subject: '',
            result: `${reason} at ${evaluation.local.date} ${evaluation.local.hour}:xx local; ${evaluation.skipped.map((x) => `${x.key}: ${x.reason}`).join('; ')}`,
          });
        }
        continue;
      }
      const { decision } = evaluation;
      const email = snapshot.contact.email;
      const outcome: Outcome = { userId: snapshot.userId, key: decision.key, subject: decision.content.subject, result: '' };

      if (dry) {
        outcome.result = 'dry run';
        if (body.html && body.userId) {
          outcome.html = (await composeMessage(decision, { userId: snapshot.userId, email, locale: snapshot.contact.locale }, config)).html;
        }
      } else if (MODE === 'test' && !TEST_RECIPIENTS.has(email.toLowerCase()) && !TEST_RECIPIENTS.has(snapshot.userId)) {
        outcome.result = 'held: not a test recipient';
      } else {
        outcome.result = await send(decision, snapshot.userId, email, snapshot.contact.locale);
        await sleep(SEND_GAP_MS);
      }
      outcomes.push(outcome);
    }
    if (rows.length < BATCH || body.userId) break;
  }

  // ── Site leads: 7-day sequence ─────────────────────────────────────────
  // Confirmed, opted-in, not-unsubscribed leads with days left to send.
  const siteLeadResults: { leadId: string; day: number; result: string }[] = [];
  if (!dry) {
    const SITE_BATCH = 100;
    const HOURS_BETWEEN = 23; // send next day's email after ~24h (with 1h margin)
    for (let from = 0; ; from += SITE_BATCH) {
      const { data: leads, error: leadsError } = await db
        .from('site_leads')
        .select('id, email, locale, plan_day, last_sent_at')
        .not('confirmed_at', 'is', null)
        .is('unsubscribed_at', null)
        .eq('bounced', false)
        .eq('lifecycle_opt_in', true)
        .lt('plan_day', 7)
        .order('id')
        .range(from, from + SITE_BATCH - 1);
      if (leadsError != null || leads == null || leads.length === 0) break;

      for (const lead of leads) {
        const lastSent = lead.last_sent_at ? new Date(lead.last_sent_at).getTime() : 0;
        const hoursSince = (Date.now() - lastSent) / 3_600_000;
        if (hoursSince < HOURS_BETWEEN) continue;

        const nextDay = (lead.plan_day ?? 0) + 1;
        if (nextDay > 7) continue;

        const locale = lead.locale === 'ru' || lead.locale === 'es' ? lead.locale : 'en';
        const content = siteLeadEmail(nextDay, locale as 'en' | 'ru' | 'es');
        if (content == null) continue;

        const emailKey = `site_day${nextDay}`;
        const dedupeKey = emailKey;

        // Claim in the log (dedupe).
        const claim = await db
          .from('site_lead_email_log')
          .insert({ lead_id: lead.id, email_key: emailKey, dedupe_key: dedupeKey, locale, status: 'sending' })
          .select('id')
          .single();
        if (claim.error != null) {
          siteLeadResults.push({ leadId: lead.id, day: nextDay, result: claim.error.code === '23505' ? 'already claimed' : `claim: ${claim.error.message}` });
          continue;
        }

        try {
          const token = await unsubscribeToken(lead.id, config.unsubscribeSecret);
          const unsubscribeUrl = `${config.linkBase}/unsubscribe/?t=${encodeURIComponent(token)}&l=${locale}`;
          const oneClickUrl = `${config.functionsBase}/email-unsubscribe?t=${encodeURIComponent(token)}`;

          const emailContent = {
            subject: content.subject,
            preheader: content.preheader,
            greeting: null,
            paragraphs: content.paragraphs,
            button: content.button != null
              ? { label: content.button.label, path: '__external__' }
              : { label: '', path: '' },
            ps: content.ps,
          };

          const { html, text } = await renderEmail({
            content: emailContent,
            locale: locale as 'en' | 'ru' | 'es',
            buttonUrl: content.button?.url ?? '',
            unsubscribeUrl,
            settingsUrl: unsubscribeUrl,
            postalAddress: config.postalAddress ? config.postalAddress.toLowerCase() : '',
            assetBase: config.linkBase,
            footerWhy: "you're getting this because you asked for the free exercise sheets on walkito.site.",
            hideSettings: true,
          });

          const res = await fetch('https://api.resend.com/emails', {
            method: 'POST',
            headers: {
              Authorization: `Bearer ${RESEND_KEY}`,
              'Content-Type': 'application/json',
              'Idempotency-Key': `${lead.id}:${dedupeKey}`,
            },
            body: JSON.stringify({
              from: config.from,
              to: [lead.email],
              reply_to: config.replyTo,
              subject: content.subject,
              html,
              text,
              headers: {
                'List-Unsubscribe': `<${oneClickUrl}>`,
                'List-Unsubscribe-Post': 'List-Unsubscribe=One-Click',
              },
              tags: [
                { name: 'email_key', value: emailKey },
                { name: 'locale', value: locale },
              ],
            }),
          });
          const resBody = (await res.json().catch(() => ({}))) as { id?: string; message?: string };

          if (res.ok && resBody.id) {
            const sentAt = new Date().toISOString();
            await db.from('site_lead_email_log').update({ status: 'sent', resend_id: resBody.id, sent_at: sentAt }).eq('id', claim.data.id);
            await db.from('site_leads').update({ plan_day: nextDay, last_sent_at: sentAt }).eq('id', lead.id);
            siteLeadResults.push({ leadId: lead.id, day: nextDay, result: 'sent' });
          } else {
            // Rejected address: mark bounced.
            if (res.status === 422 && /to|address|email/i.test(resBody.message ?? '')) {
              await db.from('site_lead_email_log').update({ status: 'failed', error: resBody.message }).eq('id', claim.data.id);
              await db.from('site_leads').update({ bounced: true }).eq('id', lead.id);
            } else {
              await db.from('site_lead_email_log').delete().eq('id', claim.data.id);
            }
            siteLeadResults.push({ leadId: lead.id, day: nextDay, result: `failed ${res.status}: ${resBody.message ?? ''}` });
          }
          await sleep(SEND_GAP_MS);
        } catch (error) {
          await db.from('site_lead_email_log').delete().eq('id', claim.data.id);
          siteLeadResults.push({ leadId: lead.id, day: nextDay, result: `error: ${error instanceof Error ? error.message : String(error)}` });
        }
      }
      if (leads.length < SITE_BATCH) break;
    }
  }
  const siteLeadsSent = siteLeadResults.filter((r) => r.result === 'sent').length;

  const sent = outcomes.filter((o) => o.result === 'sent').length;
  console.log(`[email] mode=${MODE}${dry ? ' (dry)' : ''} contacts=${contacts} decided=${outcomes.length} sent=${sent} attributed=${attributed} siteLeads=${siteLeadsSent}`);
  return json({ mode: MODE, dry, now: now.toISOString(), contacts, attributed, deliveries, sent, outcomes, skippedByReason, siteLeads: { sent: siteLeadsSent, results: siteLeadResults } });
});
