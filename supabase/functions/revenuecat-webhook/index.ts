/**
 * RevenueCat → `subscriptions`, so offer emails stop the moment someone pays,
 * on any device.
 *
 * The event is treated as a nudge, never as the truth. Whatever it says, the
 * function asks RevenueCat's own API for that customer's entitlements and
 * writes what the API answers. That is why the webhook needs no shared secret:
 * a forged request can only make us look up a real customer's real status.
 * (If REVENUECAT_WEBHOOK_AUTH is set, the Authorization header must match it
 * as well.)
 *
 * RevenueCat knows the buyer by its own anonymous id; `revenuecat_links` maps
 * that to our user, written by the app through `link_revenuecat`.
 */

import { createClient } from 'npm:@supabase/supabase-js@2';

const SUPABASE_URL = Deno.env.get('SUPABASE_URL') ?? '';
const SERVICE_KEY = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? '';
const RC_KEY = Deno.env.get('REVENUECAT_API_KEY') ?? '';
const AUTH = Deno.env.get('REVENUECAT_WEBHOOK_AUTH') ?? '';

const db = createClient(SUPABASE_URL, SERVICE_KEY, { auth: { persistSession: false } });

type RcEvent = {
  type?: string;
  app_user_id?: string;
  original_app_user_id?: string;
  aliases?: string[];
  transferred_to?: string[];
  transferred_from?: string[];
  product_id?: string;
};

type Entitlement = { expires_date: string | null; product_identifier?: string };

const UUID = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

function json(body: unknown, status = 200): Response {
  return new Response(JSON.stringify(body), { status, headers: { 'Content-Type': 'application/json' } });
}

/** What RevenueCat itself says about this customer right now. */
async function statusOf(appUserId: string): Promise<{ status: 'active' | 'expired' | 'none'; productId: string | null } | null> {
  const res = await fetch(`https://api.revenuecat.com/v1/subscribers/${encodeURIComponent(appUserId)}`, {
    headers: { Authorization: `Bearer ${RC_KEY}`, 'Content-Type': 'application/json' },
  });
  if (!res.ok) {
    console.warn('[revenuecat] lookup failed', res.status);
    return null;
  }
  const body = (await res.json()) as {
    subscriber?: {
      entitlements?: Record<string, Entitlement>;
      subscriptions?: Record<string, unknown>;
      non_subscriptions?: Record<string, unknown[]>;
    };
  };
  const sub = body.subscriber ?? {};
  const now = Date.now();
  const entitlements = Object.values(sub.entitlements ?? {});
  const active = entitlements.find((e) => e.expires_date == null || Date.parse(e.expires_date) > now);
  if (active != null) return { status: 'active', productId: active.product_identifier ?? null };
  const bought = entitlements.length > 0 || Object.keys(sub.subscriptions ?? {}).length > 0 || Object.keys(sub.non_subscriptions ?? {}).length > 0;
  return { status: bought ? 'expired' : 'none', productId: entitlements[0]?.product_identifier ?? null };
}

Deno.serve(async (req) => {
  if (req.method !== 'POST') return json({ error: 'POST only' }, 405);
  if (AUTH && req.headers.get('Authorization') !== AUTH) return json({ error: 'unauthorized' }, 401);
  if (!RC_KEY) return json({ error: 'REVENUECAT_API_KEY not set' }, 503);

  const payload = (await req.json().catch(() => ({}))) as { event?: RcEvent };
  const event = payload.event ?? {};
  if (event.type === 'TEST') return json({ ok: true, test: true });

  const rcIds = [
    event.app_user_id,
    event.original_app_user_id,
    ...(event.aliases ?? []),
    ...(event.transferred_to ?? []),
    ...(event.transferred_from ?? []),
  ].filter((x): x is string => typeof x === 'string' && x.length > 0);
  if (rcIds.length === 0) return json({ ok: true, note: 'no app user id' });

  const { data: links, error } = await db.from('revenuecat_links').select('rc_app_user_id, user_id').in('rc_app_user_id', rcIds);
  if (error != null) return json({ error: error.message }, 500);
  const users = new Map<string, string>();
  for (const l of links ?? []) users.set(String(l.user_id), String(l.rc_app_user_id));
  // A RevenueCat id that is already one of ours (if the SDK ever logs in with it).
  for (const id of rcIds) if (UUID.test(id) && !users.has(id)) users.set(id, id);
  if (users.size === 0) return json({ ok: true, note: 'no linked user yet' });

  const written: string[] = [];
  for (const [userId, rcId] of users) {
    const status = await statusOf(rcId);
    if (status == null) continue;
    const { error: upsertError } = await db
      .from('subscriptions')
      .upsert({ user_id: userId, status: status.status, product_id: status.productId ?? event.product_id ?? null, updated_at: new Date().toISOString() });
    // A UUID-shaped RevenueCat id that is not one of our users fails the foreign key; that is fine.
    if (upsertError == null) written.push(`${userId}:${status.status}`);
  }
  return json({ ok: true, type: event.type ?? null, written });
});
