/**
 * The 3-month pass, on the server: which products are passes, what RevenueCat
 * says was bought, and the grant (`grant_pass` in 0017_three_month_pass.sql).
 *
 * Shared by the `revenuecat-webhook` function (RevenueCat calls it at the
 * purchase) and `pass-sync` (the app calls it after a purchase or a restore),
 * so a pass is granted by whichever arrives first and only once: the grant is
 * keyed by the store's transaction id.
 *
 * Nothing here trusts a request body. Every grant is for a purchase found in
 * RevenueCat's own record of that customer, fetched with our key.
 */

// deno-lint-ignore no-explicit-any
type Db = any;

/** Every pass product, both stores. */
export const PASS_PRODUCTS = ['pass_12wk_4999', 'pass_12wk_1499', 'pass_3mo', 'pass_3mo_offer'] as const;

/** The retention offer's two products: buying one uses the yearly offer up. */
export const RETENTION_PASS_PRODUCTS = ['pass_12wk_1499', 'pass_3mo_offer'] as const;

export const PASS_DAYS = 90;

/** The entitlement a subscription grants. A pass grants none. */
const PREMIUM = 'premium';

export function isPassProduct(id: string | null | undefined): boolean {
  if (id == null) return false;
  // Play reports a one-time product's id as is; strip a ":purchase option"
  // suffix in case a store ever adds one.
  const base = id.split(':')[0];
  return (PASS_PRODUCTS as readonly string[]).includes(base);
}

function isRetention(id: string): boolean {
  return (RETENTION_PASS_PRODUCTS as readonly string[]).includes(id.split(':')[0]);
}

/** One pass purchase, as RevenueCat records it. */
export type PassPurchase = {
  productId: string;
  /** The store's own transaction id (Play's order id), the grant's key. */
  transactionId: string;
  purchasedAt: string;
};

export type Subscriber = {
  passes: PassPurchase[];
  /** When the premium entitlement ends; null when none is running, or it has
   * no end (a lifetime purchase, a promotional grant without one). */
  premiumUntil: string | null;
};

type RcNonSubscription = {
  id?: string;
  store_transaction_id?: string;
  purchase_date?: string;
};

type RcEntitlement = { expires_date: string | null };

/** What RevenueCat itself records for this customer: their passes and how
 * long their subscription runs. Null when the lookup fails. */
export async function subscriberOf(rcKey: string, appUserId: string): Promise<Subscriber | null> {
  const res = await fetch(`https://api.revenuecat.com/v1/subscribers/${encodeURIComponent(appUserId)}`, {
    headers: { Authorization: `Bearer ${rcKey}`, 'Content-Type': 'application/json' },
  });
  if (!res.ok) {
    console.warn('[pass] lookup failed', res.status);
    return null;
  }
  const body = (await res.json()) as {
    subscriber?: {
      entitlements?: Record<string, RcEntitlement>;
      non_subscriptions?: Record<string, RcNonSubscription[]>;
    };
  };
  const sub = body.subscriber ?? {};
  const passes: PassPurchase[] = [];
  for (const [productId, list] of Object.entries(sub.non_subscriptions ?? {})) {
    if (!isPassProduct(productId)) continue;
    for (const entry of list ?? []) {
      const transactionId = entry.store_transaction_id ?? entry.id;
      if (transactionId == null || entry.purchase_date == null) continue;
      passes.push({ productId, transactionId, purchasedAt: entry.purchase_date });
    }
  }
  passes.sort((a, b) => Date.parse(a.purchasedAt) - Date.parse(b.purchasedAt));
  const premium = sub.entitlements?.[PREMIUM];
  const premiumUntil =
    premium?.expires_date != null && Date.parse(premium.expires_date) > Date.now() ? premium.expires_date : null;
  return { passes, premiumUntil };
}

/** How recent a purchase must be for the running subscription to push its
 * start back. */
const FRESH_MS = 2 * 24 * 60 * 60 * 1000;

/**
 * The subscription end a purchase queues behind: the one running now, but
 * only for a purchase made now.
 *
 * RevenueCat says when the subscription ends today, not when it ended at the
 * time of an old purchase. Queued behind today's end, a pass bought last
 * spring (the old 12-week pass shares the product ids) would become 90 free
 * days after this year's renewal. An older purchase is counted from its own
 * date instead, and by now has usually run out.
 */
export function premiumUntilFor(purchase: PassPurchase, subscriber: Subscriber, now: number = Date.now()): string | null {
  return now - Date.parse(purchase.purchasedAt) < FRESH_MS ? subscriber.premiumUntil : null;
}

export type PassWindow = { startsAt: string | null; expiresAt: string | null; granted: boolean };

/** Grants one purchase to one user, once. */
export async function grantPass(
  db: Db,
  userId: string,
  rcAppUserId: string,
  purchase: PassPurchase,
  premiumUntil: string | null,
): Promise<PassWindow | null> {
  const { data, error } = await db.rpc('grant_pass', {
    p_user_id: userId,
    p_transaction_id: purchase.transactionId,
    p_product_id: purchase.productId,
    p_rc_app_user_id: rcAppUserId,
    p_purchased_at: purchase.purchasedAt,
    p_premium_until: premiumUntil,
    p_retention: isRetention(purchase.productId),
    p_days: PASS_DAYS,
  });
  if (error != null) {
    console.warn('[pass] grant failed', error.message);
    return null;
  }
  const row = Array.isArray(data) ? data[0] : data;
  return { startsAt: row?.starts_at ?? null, expiresAt: row?.expires_at ?? null, granted: row?.granted === true };
}

/**
 * Every pass this RevenueCat customer bought, granted to this user where it
 * has not been yet, oldest first, so stacked passes queue in the order they
 * were bought.
 */
export async function reconcilePasses(db: Db, rcKey: string, userId: string, rcAppUserId: string): Promise<number | null> {
  const subscriber = await subscriberOf(rcKey, rcAppUserId);
  if (subscriber == null) return null;
  let granted = 0;
  for (const purchase of subscriber.passes) {
    const window = await grantPass(db, userId, rcAppUserId, purchase, premiumUntilFor(purchase, subscriber));
    if (window?.granted) granted += 1;
  }
  return granted;
}
