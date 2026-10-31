/**
 * The app's side of the 3-month pass: grants any pass this account bought that
 * has not been granted yet, and answers with the account's pass window.
 *
 * Called after a pass purchase (the app polls it until the days are there),
 * after Restore Purchases, and after signing in on another phone. The webhook
 * grants a pass at the purchase; this covers the cases it cannot: a buyer not
 * yet linked to an account when the webhook arrived, a delivery that never
 * came, a restore. Both grant through `grant_pass`, keyed by the store's
 * transaction id, so whichever runs second changes nothing.
 *
 * Only RevenueCat ids linked to the caller's account are looked up, and every
 * grant is for a purchase found in RevenueCat's own record of that customer.
 * A RevenueCat id sent in the body is linked to the caller first, exactly as
 * the app's `link_revenuecat` call does.
 */

import { createClient } from 'npm:@supabase/supabase-js@2';

import { reconcilePasses } from '../_shared/pass.ts';

const SUPABASE_URL = Deno.env.get('SUPABASE_URL') ?? '';
const SERVICE_KEY = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? '';
const RC_KEY = Deno.env.get('REVENUECAT_API_KEY') ?? '';

const db = createClient(SUPABASE_URL, SERVICE_KEY, { auth: { persistSession: false } });

const CORS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

function json(body: unknown, status = 200): Response {
  return new Response(JSON.stringify(body), { status, headers: { ...CORS, 'Content-Type': 'application/json' } });
}

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') return new Response('ok', { headers: CORS });
  if (req.method !== 'POST') return json({ error: 'POST only' }, 405);
  if (!RC_KEY) return json({ error: 'REVENUECAT_API_KEY not set' }, 503);

  const token = (req.headers.get('Authorization') ?? '').replace(/^Bearer\s+/i, '');
  const { data: auth, error: authError } = await db.auth.getUser(token);
  const user = auth?.user;
  if (authError != null || user == null) return json({ error: 'unauthorized' }, 401);

  const body = (await req.json().catch(() => ({}))) as { rcAppUserId?: string };
  const sent = typeof body.rcAppUserId === 'string' ? body.rcAppUserId.trim().slice(0, 200) : '';
  if (sent !== '') {
    await db
      .from('revenuecat_links')
      .upsert({ rc_app_user_id: sent, user_id: user.id, updated_at: new Date().toISOString() });
  }

  const { data: links } = await db.from('revenuecat_links').select('rc_app_user_id').eq('user_id', user.id);
  const rcIds = new Set<string>((links ?? []).map((l: { rc_app_user_id: string }) => l.rc_app_user_id));
  if (sent !== '') rcIds.add(sent);

  let granted = 0;
  for (const rcId of rcIds) {
    const count = await reconcilePasses(db, RC_KEY, user.id, rcId);
    if (count != null) granted += count;
  }

  const { data: profile } = await db
    .from('profiles')
    .select('pass_starts_at, pass_expires_at, pass_bought_at, retention_offer_used_at, review_mode')
    .eq('user_id', user.id)
    .maybeSingle();

  return json({
    ok: true,
    granted,
    passStartsAt: profile?.pass_starts_at ?? null,
    passExpiresAt: profile?.pass_expires_at ?? null,
    passBoughtAt: profile?.pass_bought_at ?? null,
    retentionOfferUsedAt: profile?.retention_offer_used_at ?? null,
    reviewMode: profile?.review_mode === true,
  });
});
