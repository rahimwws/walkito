import { ENTITLEMENT, PASS_ACCESS_DAYS, isPassProduct } from './purchase';

/**
 * Who has access, as arithmetic on plain data.
 *
 * Split out of `revenuecat.ts` so it can be tested. That file imports the
 * native SDK and cannot load under bun, which left the one calculation in this
 * app that decides whether somebody paid as the only untested thing in it.
 *
 * The types below are structural on purpose — the fields these functions
 * actually read, and nothing else. `CustomerInfo` from the SDK satisfies them,
 * so the adapter passes its object straight through with no mapping layer to
 * drift, while a test can hand over an object literal.
 *
 * What is sold is auto-renewing subscriptions, which RevenueCat expires
 * itself, and a lifetime purchase, which never expires: an active
 * subscription, or an active `premium` entitlement (the lifetime products grant
 * it with no expiry, which is what lifetime means), is access. A lifetime
 * purchase counts only through that entitlement — RevenueCat revokes it on a
 * refund, while the purchase stays in the transaction list. The only
 * arithmetic left is for the 3-month pass, which Apple never expires and which
 * grants no entitlement: its 90 days are dated here from the store's record,
 * so access arrives the moment a purchase completes. The server's grant
 * (`pass.ts`), which can queue the days behind a subscription, is the other
 * half, joined in `store.ts`.
 */

/** The fields of `PurchasesEntitlementInfo` this calculation reads. */
export type EntitlementFacts = {
  readonly productIdentifier: string;
  readonly latestPurchaseDateMillis: number;
};

/** The fields of `PurchasesStoreTransaction` this calculation reads. */
export type TransactionFacts = {
  readonly productIdentifier: string;
  /** ISO 8601, as the SDK reports it. */
  readonly purchaseDate: string;
};

/** The fields of `CustomerInfo` this calculation reads. */
export type CustomerFacts = {
  /** Auto-renewing subscriptions that are live right now, grace period
   * included. RevenueCat drops a product from here when it expires. */
  readonly activeSubscriptions: readonly string[];
  /** Everything this customer has ever bought, active or not. */
  readonly allPurchasedProductIdentifiers: readonly string[];
  readonly nonSubscriptionTransactions: readonly TransactionFacts[];
  readonly entitlements: {
    readonly active: { readonly [key: string]: EntitlementFacts };
    /** Every entitlement this customer has ever held, active or not. */
    readonly all: { readonly [key: string]: EntitlementFacts };
  };
};

function isPass(productId: string): boolean {
  return isPassProduct(productId);
}

/**
 * Whether an auto-renewing subscription is live.
 *
 * Any product, not a list of them: everything this app sells as a subscription
 * unlocks the same single tier, and Apple only reports this app's own products
 * here. Matching on identifiers would lock out a paying subscriber the day a
 * product is renamed in App Store Connect. A pass id is excluded in case a
 * store ever reports a non-renewing purchase as a subscription.
 */
export function subscriptionActive(info: CustomerFacts): boolean {
  return info.activeSubscriptions.some((id) => !isPass(id));
}

/**
 * When a pass runs out, from the latest purchase of one, by the store's own
 * record.
 *
 * RevenueCat cannot expire a non-renewing product: a non-renewing purchase
 * attached to an entitlement unlocks it "forever", with `expirationDate` null,
 * and one attached to none (the 3-month pass) grants nothing at all. So the
 * end is computed here, from the most recent pass purchase. Latest, not first,
 * because a second purchase extended access rather than being ignored. The
 * server counts a second pass on from the end of the first, which this does
 * not: `passEndsAt` in `store.ts` takes whichever of the two ends later.
 *
 * Two sources, deliberately. `nonSubscriptionTransactions` is the documented
 * home for these purchases and is the usual answer (Google Play's consumable
 * passes are there too, consumed or not). The active entitlement is the belt
 * to that brace, for the old 12-week pass, which did grant one: if the
 * transaction list is ever empty while the entitlement is present — a restore
 * whose receipts have not finished syncing, say — reading only the list would
 * return null, and a permanently granted entitlement would be left undated.
 * That is the precise shape of "an expired pass unlocks the app for ever".
 *
 * Always `PASS_ACCESS_DAYS`, and nothing lengthens it: invite days once did,
 * and no code or invite may unlock or extend access (AGENTS.md, "Codes: only
 * Apple's").
 */
export function passEnd(info: CustomerFacts): Date | null {
  const stamps: number[] = [];

  for (const t of info.nonSubscriptionTransactions) {
    if (!isPass(t.productIdentifier)) continue;
    const ms = new Date(t.purchaseDate).getTime();
    if (Number.isFinite(ms)) stamps.push(ms);
  }

  for (const ent of Object.values(info.entitlements.active)) {
    if (!isPass(ent.productIdentifier)) continue;
    if (Number.isFinite(ent.latestPurchaseDateMillis)) {
      stamps.push(ent.latestPurchaseDateMillis);
    }
  }

  if (stamps.length === 0) return null;
  return new Date(Math.max(...stamps) + PASS_ACCESS_DAYS * 86_400_000);
}

/**
 * Whether an active entitlement was granted by a pass (the old 12-week one
 * did grant one; the 3-month pass grants none).
 *
 * Those products grant `premium` with no expiry, so "some entitlement is
 * active" stops being evidence of current access the moment one of them is
 * involved — it only says a pass was bought once.
 */
export function grantedByPass(info: CustomerFacts): boolean {
  return Object.values(info.entitlements.active).some((ent) => isPass(ent.productIdentifier));
}

/** What `entitled` decided, and why — the reason is for diagnostics only. */
export type AccessVerdict = {
  readonly entitled: boolean;
  readonly reason:
    | 'subscription'
    | 'entitlement'
    | 'other-entitlement'
    | 'pass-active'
    | 'pass-expired'
    | 'pass-undated'
    | 'nothing';
};

/**
 * Whether this customer has access, in the order the answers can be trusted.
 *
 * 1. A live subscription. RevenueCat expires these itself, so its word is
 *    final, and it wins over everything below — a pass that ran out must not
 *    hide a subscription bought after it.
 * 2. An active entitlement granted by anything other than a pass: a lifetime
 *    purchase, a subscription the store reported only through the
 *    entitlement, or access granted from the RevenueCat dashboard. This app sells one level of access,
 *    so an active entitlement under any name means somebody paid; the name is
 *    only checked to tell a drifted dashboard apart in the diagnostics.
 * 3. A pass, against the clock — nothing in the store ever ends it, so
 *    trusting the store's "bought" would turn a one-time purchase into the
 *    app for ever.
 * 4. A pass entitlement nothing dates is refused rather than honoured.
 */
export function decideAccess(info: CustomerFacts, now: number): AccessVerdict {
  if (subscriptionActive(info)) return { entitled: true, reason: 'subscription' };

  const granting = Object.entries(info.entitlements.active).filter(
    ([, ent]) => !isPass(ent.productIdentifier),
  );
  if (granting.length > 0) {
    const named = granting.some(([key]) => key === ENTITLEMENT);
    return { entitled: true, reason: named ? 'entitlement' : 'other-entitlement' };
  }

  const ends = passEnd(info);
  if (ends != null) {
    return now < ends.getTime()
      ? { entitled: true, reason: 'pass-active' }
      : { entitled: false, reason: 'pass-expired' };
  }

  if (Object.keys(info.entitlements.active).length === 0) {
    return { entitled: false, reason: 'nothing' };
  }

  // A pass granted it, but nothing dated the purchase. Denying is the safe
  // reading: a customer genuinely inside their access gets in through the check
  // above as soon as the receipt syncs, whereas honouring it would hand over the
  // app permanently on one purchase.
  return grantedByPass(info)
    ? { entitled: false, reason: 'pass-undated' }
    : { entitled: false, reason: 'nothing' };
}

/**
 * Whether this customer has ever held paid access, whatever its state now.
 *
 * Read with `decideAccess` to tell a lapsed subscriber from somebody who never
 * paid. Any of three traces is enough: an entitlement held at some point (the
 * usual one, and it survives expiry), any purchase on the account, or a pass the
 * app can date. A refund leaves the trace too, which is right — the expiry
 * screen is about the history they have in the app, not about the money.
 */
export function hadAccess(info: CustomerFacts): boolean {
  if (Object.keys(info.entitlements.all).length > 0) return true;
  if (info.allPurchasedProductIdentifiers.length > 0) return true;
  return passEnd(info) != null;
}

/** The entitlement identifier the dashboard is expected to use, re-exported so
 * the adapter's diagnostics and this calculation cannot disagree about it. */
export const EXPECTED_ENTITLEMENT = ENTITLEMENT;
