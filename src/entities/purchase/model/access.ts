import { ENTITLEMENT, LEGACY_PASS_IDS, PASS_ACCESS_DAYS } from './purchase';

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
 * What is sold is two auto-renewing subscriptions, and RevenueCat expires those
 * itself: an active subscription, or an active `premium` entitlement it grants,
 * is access. The only arithmetic left is for the legacy one-time pass, which
 * Apple never expires and which is no longer sold.
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
  return LEGACY_PASS_IDS.includes(productId);
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
 * When a legacy pass runs out, from the latest purchase of one.
 *
 * RevenueCat cannot expire a non-renewing product: a non-renewing purchase
 * attached to an entitlement unlocks it "forever", with `expirationDate` null.
 * So the end is computed here, from the most recent pass purchase. Latest, not
 * first, because a second purchase extended access rather than being ignored.
 *
 * Two sources, deliberately. `nonSubscriptionTransactions` is the documented
 * home for these purchases and is the usual answer. The active entitlement is
 * the belt to that brace: if the transaction list is ever empty while the
 * entitlement is present — a restore whose receipts have not finished syncing,
 * say — reading only the list would return null, and a permanently granted
 * entitlement would be left undated. That is the precise shape of "an expired
 * pass unlocks the app for ever".
 */
export function passEnd(info: CustomerFacts, bonusDays = 0): Date | null {
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
  // Bonus days — free days from invites — extend a pass and never create one:
  // with no purchase above, this has already returned null.
  const days = PASS_ACCESS_DAYS + Math.max(0, bonusDays);
  return new Date(Math.max(...stamps) + days * 86_400_000);
}

/**
 * Whether an active entitlement was granted by a legacy pass.
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
 * 2. An active entitlement granted by anything other than a pass: a
 *    subscription the store reported only through the entitlement, or access
 *    granted from the RevenueCat dashboard. This app sells one level of access,
 *    so an active entitlement under any name means somebody paid; the name is
 *    only checked to tell a drifted dashboard apart in the diagnostics.
 * 3. A legacy pass, against the clock — the entitlement it grants never
 *    lapses, so trusting it would turn a one-time purchase into the app for
 *    ever.
 * 4. A pass entitlement nothing dates is refused rather than honoured.
 */
export function decideAccess(info: CustomerFacts, now: number, bonusDays = 0): AccessVerdict {
  if (subscriptionActive(info)) return { entitled: true, reason: 'subscription' };

  const granting = Object.entries(info.entitlements.active).filter(
    ([, ent]) => !isPass(ent.productIdentifier),
  );
  if (granting.length > 0) {
    const named = granting.some(([key]) => key === ENTITLEMENT);
    return { entitled: true, reason: named ? 'entitlement' : 'other-entitlement' };
  }

  const ends = passEnd(info, bonusDays);
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
export function hadAccess(info: CustomerFacts, bonusDays = 0): boolean {
  if (Object.keys(info.entitlements.all).length > 0) return true;
  if (info.allPurchasedProductIdentifiers.length > 0) return true;
  return passEnd(info, bonusDays) != null;
}

/** The entitlement identifier the dashboard is expected to use, re-exported so
 * the adapter's diagnostics and this calculation cannot disagree about it. */
export const EXPECTED_ENTITLEMENT = ENTITLEMENT;
