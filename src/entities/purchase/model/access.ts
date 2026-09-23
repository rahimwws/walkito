import { ENTITLEMENT, PRODUCTS, PROGRAM_ACCESS_DAYS, PROGRAM_IDS } from './purchase';

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
  readonly activeSubscriptions: readonly string[];
  readonly nonSubscriptionTransactions: readonly TransactionFacts[];
  readonly entitlements: {
    readonly active: { readonly [key: string]: EntitlementFacts };
  };
};

/**
 * When the twelve-week programme runs out, from the latest purchase of one.
 *
 * RevenueCat cannot expire a non-renewing product. Confirmed against the
 * dashboard — the entitlement page has no duration field for this product type
 * — and against RevenueCat's documentation, which says a non-renewing purchase
 * attached to an entitlement unlocks it "forever", with `expirationDate` null.
 * So the end is computed here, ninety days from the most recent programme
 * purchase. Latest, not first, because buying a second twelve weeks has to
 * extend access rather than be ignored.
 *
 * Two sources, deliberately. `nonSubscriptionTransactions` is the documented
 * home for these purchases and is the usual answer. The active entitlement is
 * the belt to that brace: both `pass_12wk_*` products are attached to
 * `premium`, so if the transaction list is ever empty while the entitlement is
 * present — a restore whose receipts have not finished syncing, say — reading
 * only the list would return null, and the caller would be left treating a
 * permanently-granted entitlement as undated access. That is the precise shape
 * of "an expired pass unlocks the app for ever".
 */
export function programEnd(info: CustomerFacts, bonusDays = 0): Date | null {
  const stamps: number[] = [];

  for (const t of info.nonSubscriptionTransactions) {
    if (!PROGRAM_IDS.includes(t.productIdentifier)) continue;
    const ms = new Date(t.purchaseDate).getTime();
    if (Number.isFinite(ms)) stamps.push(ms);
  }

  for (const ent of Object.values(info.entitlements.active)) {
    if (!PROGRAM_IDS.includes(ent.productIdentifier)) continue;
    if (Number.isFinite(ent.latestPurchaseDateMillis)) {
      stamps.push(ent.latestPurchaseDateMillis);
    }
  }

  if (stamps.length === 0) return null;
  // Bonus days — free weeks from invites — extend the latest programme and
  // never create one: with no purchase above, this has already returned null.
  const days = PROGRAM_ACCESS_DAYS + Math.max(0, bonusDays);
  return new Date(Math.max(...stamps) + days * 86_400_000);
}

/** The monthly subscription, which RevenueCat does expire on its own. */
export function monthlyActive(info: CustomerFacts): boolean {
  return info.activeSubscriptions.includes(PRODUCTS.monthly);
}

/**
 * Whether an active entitlement was granted by a programme purchase.
 *
 * Disarms the catch-all at the bottom of `entitledIn`. Those products grant
 * `premium` with no expiry, so "some entitlement is active" stops being
 * evidence of current access the moment one of them is involved — it only says
 * twelve weeks were bought once.
 */
export function grantedByProgram(info: CustomerFacts): boolean {
  return Object.values(info.entitlements.active).some((ent) =>
    PROGRAM_IDS.includes(ent.productIdentifier),
  );
}

/** What `entitled` decided, and why — the reason is for diagnostics only. */
export type AccessVerdict = {
  readonly entitled: boolean;
  readonly reason:
    | 'monthly'
    | 'program-active'
    | 'program-expired'
    | 'program-undated'
    | 'other-entitlement'
    | 'nothing';
};

/**
 * Whether this customer has access, in the order the answers can be trusted.
 *
 * The monthly subscription first, because RevenueCat expires it on its own. The
 * programme second, against the clock — the entitlement a non-renewing purchase
 * grants never lapses, so trusting it would sell twelve weeks and hand over the
 * app for ever. Any other active entitlement last.
 *
 * That last fallback is not laxity: this app sells one level of access, so an
 * active entitlement under any name means somebody paid. It exists because a
 * constant in the bundle and a string typed into a dashboard will drift, and
 * when they do the failure should be a line in a log rather than a locked-out
 * paying customer. It sits below the programme check so an expired pass cannot
 * be resurrected by the entitlement it created, and it is skipped entirely when
 * a programme product is what granted the entitlement.
 */
export function decideAccess(info: CustomerFacts, now: number, bonusDays = 0): AccessVerdict {
  if (monthlyActive(info)) return { entitled: true, reason: 'monthly' };

  const ends = programEnd(info, bonusDays);
  if (ends != null) {
    return now < ends.getTime()
      ? { entitled: true, reason: 'program-active' }
      : { entitled: false, reason: 'program-expired' };
  }

  if (Object.keys(info.entitlements.active).length === 0) {
    return { entitled: false, reason: 'nothing' };
  }

  // A programme granted it, but nothing dated the purchase. Denying is the safe
  // reading: a customer genuinely inside their ninety days gets in through the
  // check above as soon as the receipt syncs, whereas honouring it would hand
  // over the app permanently on one twelve-week purchase.
  if (grantedByProgram(info)) return { entitled: false, reason: 'program-undated' };

  return { entitled: true, reason: 'other-entitlement' };
}

/** The entitlement identifier the dashboard is expected to use, re-exported so
 * the adapter's diagnostics and this calculation cannot disagree about it. */
export const EXPECTED_ENTITLEMENT = ENTITLEMENT;
