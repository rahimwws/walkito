/**
 * Unsubscribe, in one click.
 *
 * Three ways in, one token (see `_shared/email/links.ts`):
 *
 *   POST ?t=…            RFC 8058 one-click, sent by Gmail and Apple Mail from
 *                        their own unsubscribe button (`List-Unsubscribe-Post`).
 *   POST { t, action }   the site's /unsubscribe/ page, which the footer link
 *                        opens; `action` is "unsubscribe" or "resubscribe".
 *   GET  ?t=…            a link opened directly: sent on to that same page,
 *                        because this domain serves HTML as plain text.
 *
 * Unsubscribing stops every email the scheduler sends. The token is enough —
 * nobody has to sign in to leave.
 */

import { createClient } from 'npm:@supabase/supabase-js@2';

import { verifyUnsubscribeToken } from '../_shared/email/links.ts';

const SUPABASE_URL = Deno.env.get('SUPABASE_URL') ?? '';
const SERVICE_KEY = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? '';
const SECRET = Deno.env.get('EMAIL_UNSUBSCRIBE_SECRET') ?? '';
const SITE = (Deno.env.get('EMAIL_LINK_BASE') ?? 'https://walkito.site').replace(/\/+$/, '');

const db = createClient(SUPABASE_URL, SERVICE_KEY, { auth: { persistSession: false } });

const CORS = {
  'Access-Control-Allow-Origin': SITE,
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'content-type',
};

function json(body: unknown, status = 200): Response {
  return new Response(JSON.stringify(body), { status, headers: { ...CORS, 'Content-Type': 'application/json' } });
}

async function apply(userId: string, action: 'unsubscribe' | 'resubscribe'): Promise<string | null> {
  const now = new Date().toISOString();
  const patch =
    action === 'unsubscribe'
      ? { unsubscribed_at: now, lifecycle_opt_in: false, weekly_opt_in: false, updated_at: now }
      : { unsubscribed_at: null, lifecycle_opt_in: true, updated_at: now };
  const { data, error } = await db.from('email_contacts').update(patch).eq('user_id', userId).select('locale').maybeSingle();
  if (error != null) throw new Error(error.message);
  return data == null ? null : String(data.locale ?? 'en');
}

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') return new Response(null, { status: 204, headers: CORS });
  const url = new URL(req.url);

  if (req.method === 'GET') {
    const t = url.searchParams.get('t') ?? '';
    return Response.redirect(`${SITE}/unsubscribe/?t=${encodeURIComponent(t)}`, 302);
  }
  if (req.method !== 'POST') return json({ ok: false, error: 'method' }, 405);
  if (!SECRET) return json({ ok: false, error: 'not configured' }, 503);

  // One-click from a mail app: the token is in the query, the body is a form.
  let token = url.searchParams.get('t');
  let action: 'unsubscribe' | 'resubscribe' = 'unsubscribe';
  if (token == null) {
    const body = (await req.json().catch(() => ({}))) as { t?: string; action?: string };
    token = body.t ?? null;
    if (body.action === 'resubscribe') action = 'resubscribe';
  }

  const userId = token ? await verifyUnsubscribeToken(token, SECRET) : null;
  if (userId == null) return json({ ok: false, error: 'invalid' }, 400);

  try {
    const locale = await apply(userId, action);
    if (locale == null) return json({ ok: false, error: 'invalid' }, 404);
    return json({ ok: true, action, locale });
  } catch (error) {
    console.error('[unsubscribe]', error);
    return json({ ok: false, error: 'server' }, 500);
  }
});
