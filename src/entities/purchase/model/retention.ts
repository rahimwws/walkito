import { kv } from '@/shared/lib/storage';

import { samePeriod } from './pricing';
import { OFFER_PRODUCT_IDS, type RetentionOffer, type StorePeriod, type Subscription } from './purchase';

/**
 * What a subscriber who is about to cancel may be offered to stay, decided on
 * plain data so it can be tested (`tests/retention.test.ts`).
 *
 * Two retention offers, and the rules that keep them honest:
 *
 * - **the 3-month pass at the retention price**, for "It doesn't fit my
 *   budget" (`budgetPassAllowed`): one payment, nothing renews, the days
 *   queued after the period already paid for. Decided by the server's record
 *   of the account, since a pass belongs to the account;
 * - **a free month**, an App Store promotional offer for "I'm taking a break".
 *   Google Play's answer to a break is its own pause, which is not ours to
 *   give or limit: it is offered to anyone Play bills at the full price.
 *
 * The free month at most once a year on this phone (`RETENTION_GAP_DAYS`),
 * and none on top of another discount: not during a free trial or an
 * introductory price, not on a product already sold at the comeback price
 * (`OFFER_PRODUCT_IDS`), not to somebody whose access is granted by account.
 * Never to a family member, who did not buy it, and never across stores: an
 * App Store subscription viewed on an Android phone can only be changed in the
 * App Store.
 *
 * The free month's "per person" is this phone, as the purchase itself is:
 * RevenueCat's customer is the device (AGENTS.md, Access by account). The
 * pass's is the account.
 */

const TAKEN_KEY = 'purchase/retention-taken-at';

/** How long after one retention offer is taken before another may be made. */
export const RETENTION_GAP_DAYS = 365;
const DAY_MS = 24 * 60 * 60 * 1000;

export type RetentionFacts = {
  /** Access granted by account (`comp.ts`): never offered a discount. */
  readonly comp: boolean;
  /** When a retention offer was last taken, epoch ms, or null. */
  readonly takenAt: number | null;
  readonly now: number;
  /** `Platform.OS`. */
  readonly os: string;
};

function sameProduct(a: string, b: string): boolean {
  return a.split(':')[0] === b.split(':')[0];
}

/** Whether the free month may be offered to this subscriber. */
export function retentionAllowed(held: Subscription, facts: RetentionFacts): boolean {
  if (held.kind !== 'subscription') return false;
  if (facts.comp || held.familyShared) return false;
  if (held.periodType !== 'normal') return false;
  if (OFFER_PRODUCT_IDS.some((id) => sameProduct(id, held.productId))) return false;
  const here = facts.os === 'ios' ? 'app_store' : facts.os === 'android' ? 'play_store' : null;
  if (held.store !== here) return false;
  if (facts.takenAt != null && facts.now - facts.takenAt < RETENTION_GAP_DAYS * DAY_MS) return false;
  return true;
}

/** What the server knows about the account's passes, for the budget offer. */
export type PassHistory = {
  /** When the retention price was last used (`retention_offer_used_at`). */
  readonly retentionOfferUsedAt: number | null;
  /** When a pass was last bought, at either price (`pass_bought_at`). */
  readonly boughtAt: number | null;
};

/**
 * Whether "It doesn't fit my budget" may offer the 3-month pass at the
 * retention price, in the place of cancelling.
 *
 * Only to somebody with a subscription that still renews (there is a
 * cancellation to stand in for), who has not used the retention price in the
 * last year, and has not bought a pass at all in the last year: the cheaper
 * pass is not a way to keep buying 90 days at a discount. Never to a family
 * member, as with the free month: they did not buy the subscription and
 * cannot cancel it. Anybody else picking that answer goes straight to the
 * store's own page.
 *
 * In review mode (the App Review account, whose access is granted by account
 * and who holds no store subscription) it is always offered, so the screen can
 * be found.
 */
export function budgetPassAllowed(
  held: Subscription | null,
  history: PassHistory,
  now: number,
  reviewMode: boolean,
): boolean {
  if (reviewMode) return true;
  if (held == null || held.kind !== 'subscription' || !held.willRenew) return false;
  if (held.familyShared) return false;
  const lately = (at: number | null) => at != null && now - at < RETENTION_GAP_DAYS * DAY_MS;
  return !lately(history.retentionOfferUsedAt) && !lately(history.boughtAt);
}

/**
 * What "I'm taking a break" may offer: on Android, Google Play's pause (up to
 * three months, in the Play Store) for a subscription Play bills at the full
 * price; on the App Store, a free month, as a retention offer.
 */
export function breakOffer(held: Subscription, allowed: boolean, os: string): 'free_month' | 'play_pause' | null {
  if (held.kind !== 'subscription' || held.periodType !== 'normal') return null;
  if (os === 'android') return held.store === 'play_store' ? 'play_pause' : null;
  if (os === 'ios') return allowed ? 'free_month' : null;
  return null;
}

/** How long an offer lasts in all: one of its periods times how many. */
function lengthOf(offer: RetentionOffer): StorePeriod {
  return { unit: offer.period.unit, count: offer.period.count * offer.cycles };
}

/** Whether an offer is a free month: nothing to pay, for one month. */
export function isFreeMonth(offer: RetentionOffer): boolean {
  return offer.price === 0 && samePeriod(lengthOf(offer), { unit: 'month', count: 1 });
}

/** When a retention offer was last taken on this phone, or null. */
export function retentionTakenAt(): number | null {
  const at = kv.getNumber(TAKEN_KEY);
  return typeof at === 'number' && Number.isFinite(at) ? at : null;
}

/** A retention offer was taken (or is waiting on the store's confirmation):
 * no free month for `RETENTION_GAP_DAYS`. */
export function markRetentionTaken(now: number = Date.now()): void {
  kv.set(TAKEN_KEY, now);
}
