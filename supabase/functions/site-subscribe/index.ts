/**
 * Website email signup: printable exercise sheets + 7-day starter plan.
 *
 * Two routes:
 *
 *   POST  { email, locale, source, page, website }
 *         Validates the email, checks the honeypot, rate-limits, upserts a
 *         site lead, and sends a double opt-in confirmation email via Resend.
 *
 *   GET   ?confirm=TOKEN
 *         Verifies the token, marks the lead confirmed, sends day 0 (the PDFs),
 *         and redirects to https://walkito.site/subscribed/?l=<locale>.
 *
 * CORS is locked to https://walkito.site. JWT verification is disabled in
 * config.toml so the form works without an anon key.
 */

import { createClient } from 'npm:@supabase/supabase-js@2';

import { unsubscribeToken } from '../_shared/email/links.ts';
import { confirmEmail, day0Welcome } from '../_shared/email/site-leads.ts';
import { renderEmail } from '../_shared/email/template.ts';

const env = (name: string): string => Deno.env.get(name) ?? '';

const SUPABASE_URL = env('SUPABASE_URL');
const SERVICE_KEY = env('SUPABASE_SERVICE_ROLE_KEY');
const RESEND_KEY = env('RESEND_API_KEY');
const UNSUBSCRIBE_SECRET = env('EMAIL_UNSUBSCRIBE_SECRET');

const SITE = 'https://walkito.site';
const FROM = env('EMAIL_FROM') || 'walkito <hello@walkito.site>';
const REPLY_TO = env('EMAIL_REPLY_TO') || 'hello@walkito.site';
const POSTAL = env('EMAIL_POSTAL_ADDRESS');

const db = createClient(SUPABASE_URL, SERVICE_KEY, { auth: { persistSession: false } });

const CORS: Record<string, string> = {
  'Access-Control-Allow-Origin': SITE,
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'content-type',
};

function json(body: unknown, status = 200): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { ...CORS, 'Content-Type': 'application/json' },
  });
}

// ── Validation ──────────────────────────────────────────────────────────────

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const MAX_ATTEMPTS_PER_EMAIL_PER_DAY = 5;

function validEmail(raw: string): string | null {
  const trimmed = raw.trim().toLowerCase();
  if (trimmed.length > 254) return null;
  return EMAIL_RE.test(trimmed) ? trimmed : null;
}

function validLocale(raw: unknown): 'en' | 'ru' | 'es' {
  if (raw === 'ru' || raw === 'es') return raw;
  return 'en';
}

function validSource(raw: unknown): 'printables' | 'guide' {
  return raw === 'guide' ? 'guide' : 'printables';
}

// ── Confirm token ───────────────────────────────────────────────────────────
// A random token hashed with SHA-256. The hash is stored; the raw token is
// sent in the confirmation email. On confirm, hash the incoming token and
// compare.

async function hashToken(token: string): Promise<string> {
  const data = new TextEncoder().encode(token);
  const hash = await crypto.subtle.digest('SHA-256', data);
  return Array.from(new Uint8Array(hash))
    .map((b) => b.toString(16).padStart(2, '0'))
    .join('');
}

function randomToken(): string {
  const bytes = new Uint8Array(32);
  crypto.getRandomValues(bytes);
  return Array.from(bytes)
    .map((b) => b.toString(16).padStart(2, '0'))
    .join('');
}

// ── Email rendering ─────────────────────────────────────────────────────────
// Site lead emails use the same template as app emails, but with a plain link
// in the button slot (or no button) and simpler footer copy.

async function renderSiteEmail(
  content: { subject: string; preheader: string; paragraphs: string[]; button: { label: string; url: string } | null; ps: string | null },
  locale: 'en' | 'ru' | 'es',
  leadId: string,
): Promise<{ subject: string; html: string; text: string; headers: Record<string, string> }> {
  const token = await unsubscribeToken(leadId, UNSUBSCRIBE_SECRET);
  const unsubscribeUrl = `${SITE}/unsubscribe/?t=${encodeURIComponent(token)}&l=${locale}`;
  const oneClickUrl = `${SUPABASE_URL}/functions/v1/email-unsubscribe?t=${encodeURIComponent(token)}`;

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
    locale,
    buttonUrl: content.button?.url ?? '',
    unsubscribeUrl,
    settingsUrl: unsubscribeUrl,
    postalAddress: POSTAL ? POSTAL.toLowerCase() : '',
    assetBase: SITE,
    footerWhy: "you're getting this because you asked for the free exercise sheets on walkito.site.",
    hideSettings: true,
  });

  return {
    subject: content.subject,
    html,
    text,
    headers: {
      'List-Unsubscribe': `<${oneClickUrl}>`,
      'List-Unsubscribe-Post': 'List-Unsubscribe=One-Click',
    },
  };
}

async function sendEmail(
  to: string,
  rendered: { subject: string; html: string; text: string; headers: Record<string, string> },
  tags: { name: string; value: string }[],
  idempotencyKey?: string,
): Promise<{ ok: boolean; id?: string; error?: string }> {
  const payload: Record<string, unknown> = {
    from: FROM,
    to: [to],
    reply_to: REPLY_TO,
    subject: rendered.subject,
    html: rendered.html,
    text: rendered.text,
    headers: rendered.headers,
    tags,
  };
  const fetchHeaders: Record<string, string> = {
    Authorization: `Bearer ${RESEND_KEY}`,
    'Content-Type': 'application/json',
  };
  if (idempotencyKey) fetchHeaders['Idempotency-Key'] = idempotencyKey;

  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: fetchHeaders,
    body: JSON.stringify(payload),
  });
  const body = (await res.json().catch(() => ({}))) as { id?: string; message?: string };
  if (res.ok && body.id) return { ok: true, id: body.id };
  return { ok: false, error: body.message ?? `status ${res.status}` };
}

// ── POST handler ────────────────────────────────────────────────────────────

async function handlePost(req: Request): Promise<Response> {
  if (!RESEND_KEY) return json({ ok: false, error: 'not configured' }, 503);

  const body = (await req.json().catch(() => ({}))) as {
    email?: string;
    locale?: string;
    source?: string;
    page?: string;
    website?: string;
  };

  // Honeypot: the hidden field must be empty.
  if (body.website && body.website.trim() !== '') {
    // Pretend success so bots do not retry.
    return json({ ok: true });
  }

  const email = body.email ? validEmail(body.email) : null;
  if (email == null) return json({ ok: false, error: 'invalid email' }, 400);

  const locale = validLocale(body.locale);
  const source = validSource(body.source);
  const page = typeof body.page === 'string' ? body.page.slice(0, 200) : '/';

  // Rate limit: max N signups per email per day.
  const today = new Date().toISOString().slice(0, 10);
  const { count } = await db
    .from('site_leads')
    .select('id', { count: 'exact', head: true })
    .eq('email', email)
    .gte('created_at', `${today}T00:00:00Z`);
  // count is null on error; treat as 0.
  if ((count ?? 0) >= MAX_ATTEMPTS_PER_EMAIL_PER_DAY) {
    return json({ ok: false, error: 'too many attempts' }, 429);
  }

  // Generate confirm token.
  const token = randomToken();
  const tokenHash = await hashToken(token);

  // Upsert: if the email already exists, update locale/source/page and
  // regenerate the confirm token (so the latest link always works), but keep
  // confirmed_at if already confirmed.
  const { data: lead, error } = await db
    .from('site_leads')
    .upsert(
      {
        email,
        locale,
        source,
        page,
        confirm_token_hash: tokenHash,
      },
      { onConflict: 'email', ignoreDuplicates: false },
    )
    .select('id, confirmed_at')
    .single();

  if (error != null) {
    console.error('[site-subscribe] upsert failed', error.message);
    return json({ ok: false, error: 'server error' }, 500);
  }

  // Already confirmed: no need to send the confirm email again.
  if (lead.confirmed_at != null) {
    return json({ ok: true, already: true });
  }

  // Send the confirmation email.
  const confirmUrl = `${SUPABASE_URL}/functions/v1/site-subscribe?confirm=${token}`;
  const content = confirmEmail(locale);
  // Replace the placeholder with the real confirm URL.
  const paragraphs = content.paragraphs;
  const rendered = await renderSiteEmail(
    { ...content, paragraphs, button: content.button ? { ...content.button, url: confirmUrl } : null },
    locale,
    lead.id,
  );
  const result = await sendEmail(email, rendered, [
    { name: 'email_key', value: 'site_confirm' },
    { name: 'locale', value: locale },
  ]);

  if (!result.ok) {
    console.error('[site-subscribe] confirm email failed', result.error);
    return json({ ok: false, error: 'could not send email' }, 500);
  }

  return json({ ok: true });
}

// ── GET handler: confirm ────────────────────────────────────────────────────

async function handleConfirm(url: URL): Promise<Response> {
  const token = url.searchParams.get('confirm');
  if (!token) return json({ ok: false, error: 'missing token' }, 400);

  const tokenHash = await hashToken(token);

  // Find the lead with this token hash.
  const { data: lead, error } = await db
    .from('site_leads')
    .select('id, email, locale, confirmed_at')
    .eq('confirm_token_hash', tokenHash)
    .maybeSingle();

  if (error != null || lead == null) {
    return Response.redirect(`${SITE}/subscribed/?l=en&error=invalid`, 302);
  }

  const locale = lead.locale === 'ru' || lead.locale === 'es' ? lead.locale : 'en';

  // Already confirmed: just redirect.
  if (lead.confirmed_at != null) {
    return Response.redirect(`${SITE}/subscribed/?l=${locale}`, 302);
  }

  // Mark confirmed and set plan_day to 0.
  const now = new Date().toISOString();
  await db
    .from('site_leads')
    .update({
      confirmed_at: now,
      plan_day: 0,
      last_sent_at: now,
      confirm_token_hash: null,
    })
    .eq('id', lead.id);

  // Send day 0 immediately (the PDFs).
  if (RESEND_KEY && UNSUBSCRIBE_SECRET) {
    const content = day0Welcome(locale as 'en' | 'ru' | 'es');
    const rendered = await renderSiteEmail(content, locale as 'en' | 'ru' | 'es', lead.id);

    // Claim in the log first (dedupe).
    const claim = await db
      .from('site_lead_email_log')
      .insert({
        lead_id: lead.id,
        email_key: 'site_day0',
        dedupe_key: 'site_day0',
        locale,
        status: 'sending',
      })
      .select('id')
      .single();

    if (claim.error == null) {
      const result = await sendEmail(
        lead.email,
        rendered,
        [
          { name: 'email_key', value: 'site_day0' },
          { name: 'locale', value: locale },
        ],
        `${lead.id}:site_day0`,
      );

      if (result.ok) {
        await db
          .from('site_lead_email_log')
          .update({ status: 'sent', resend_id: result.id, sent_at: now })
          .eq('id', claim.data.id);
      } else {
        await db
          .from('site_lead_email_log')
          .update({ status: 'failed', error: result.error })
          .eq('id', claim.data.id);
      }
    }
  }

  return Response.redirect(`${SITE}/subscribed/?l=${locale}`, 302);
}

// ── Server ──────────────────────────────────────────────────────────────────

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { status: 204, headers: CORS });
  }

  const url = new URL(req.url);

  if (req.method === 'GET' && url.searchParams.has('confirm')) {
    return handleConfirm(url);
  }

  if (req.method === 'POST') {
    return handlePost(req);
  }

  return json({ error: 'method not allowed' }, 405);
});
