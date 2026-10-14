import { kv } from '@/shared/lib/storage';

import { discountPercent, samePeriod } from './pricing';
import { OFFER_PRODUCT_IDS, type RetentionOffer, type StorePeriod, type Subscription } from './purchase';

/**
 * What a subscriber who is about to cancel may be offered to stay, decided on
 * plain data so it can be tested (`tests/retention.test.ts`).
 *
 * Three retention offers, and the rules that keep them honest:
 *
 * - **the next year at a lower price**, an App Store promotional offer on the
 *   yearly plan (`RETENTION_OFFERS.nextYear40`);
 * - **the yearly plan**, for somebody paying by the month or the week: the
 *   standard price, not a discount, but still a change made to keep them;
 * - **a free month**, an App Store promotional offer for "I'm taking a break".
 *   Google Play's answer to a break is its own pause, which is not ours to
 *   give or limit: it is offered to anyone Play bills at the full price.
 *
 * At most one of the three a year (`RETENTION_GAP_DAYS`), and none on top of
 * another discount: not during a free trial or an introductory price, not on
 * a product already sold at the comeback price (`OFFER_PRODUCT_IDS`), not to
 * somebody whose access is granted by account. Never to a family member, who
 * did not buy it, and never across stores: an App Store subscription viewed on
 * an Android phone can only be changed in the App Store.
 *
 * The "per person" is this phone, as the purchase itself is: RevenueCat's
 * customer is the device (AGENTS.md, Access by account).
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

/** Whether any of the three retention offers may be made to this subscriber. */
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

/**
 * What "It doesn't fit my budget" may offer: the next year at a lower price on
 * the yearly plan (the App Store only: promotional offers are Apple's), or the
 * yearly plan to somebody paying by the month or the week. Null when nothing
 * may be offered; the screen then says something kind and nothing else.
 */
export function budgetOffer(held: Subscription, allowed: boolean, os: string): 'next_year' | 'yearly' | null {
  if (!allowed) return null;
  if (held.period === 'annual') return os === 'ios' ? 'next_year' : null;
  if (held.period === 'monthly' || held.period === 'weekly') return 'yearly';
  return null;
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

/**
 * The percentage off the next year an offer gives, as two store prices put
 * it, when it is that offer: one year, paid for, under the regular price.
 * Null otherwise, so an offer set up differently in App Store Connect is never
 * shown as "off your next year".
 */
export function nextYearPercent(offer: RetentionOffer): number | null {
  if (!samePeriod(lengthOf(offer), { unit: 'year', count: 1 })) return null;
  if (!(offer.price > 0)) return null;
  return discountPercent(offer.price, offer.regularPrice);
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
 * no other for `RETENTION_GAP_DAYS`. */
export function markRetentionTaken(now: number = Date.now()): void {
  kv.set(TAKEN_KEY, now);
}
