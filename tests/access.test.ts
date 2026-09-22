import { describe, expect, test } from 'bun:test';

import {
  decideAccess,
  programEnd,
  type CustomerFacts,
} from '../src/entities/purchase/model/access';
import { PRODUCTS, PROGRAM_ACCESS_DAYS } from '../src/entities/purchase/model/purchase';

/**
 * Who gets in, and — more to the point — who does not.
 *
 * This is the only arithmetic in the app that decides whether somebody paid,
 * and until it was split out of the RevenueCat adapter it could not be tested
 * at all: that file imports the native module and will not load here.
 *
 * The case these exist for is the one the store configuration created. Both
 * `pass_12wk_*` products are attached to the `premium` entitlement, and Apple
 * puts no expiry on a non-renewing purchase — RevenueCat therefore reports the
 * entitlement as active with no end date, for ever. Every guard below is about
 * making sure "for ever" never reaches the user.
 */

const DAY = 86_400_000;
const NOW = Date.parse('2026-06-01T12:00:00.000Z');

function customer(over: Partial<CustomerFacts> = {}): CustomerFacts {
  return {
    activeSubscriptions: [],
    nonSubscriptionTransactions: [],
    entitlements: { active: {} },
    ...over,
  };
}

/** A pass purchase as it arrives in the transaction list. */
function pass(daysAgo: number, id: string = PRODUCTS.program) {
  return { productIdentifier: id, purchaseDate: new Date(NOW - daysAgo * DAY).toISOString() };
}

/** The entitlement a pass grants: active, and with no expiry RevenueCat will
 * ever apply. */
function lifetimePremium(daysAgo: number, id: string = PRODUCTS.program) {
  return { premium: { productIdentifier: id, latestPurchaseDateMillis: NOW - daysAgo * DAY } };
}

describe('the monthly subscription', () => {
  test('is enough on its own', () => {
    const info = customer({ activeSubscriptions: [PRODUCTS.monthly] });
    expect(decideAccess(info, NOW)).toEqual({ entitled: true, reason: 'monthly' });
  });

  test('is not confused with some other active subscription', () => {
    const info = customer({ activeSubscriptions: ['sub_something_else'] });
    expect(decideAccess(info, NOW).entitled).toBe(false);
  });
});

describe('the twelve-week pass', () => {
  test('unlocks inside its ninety days', () => {
    const info = customer({ nonSubscriptionTransactions: [pass(10)] });
    expect(decideAccess(info, NOW)).toEqual({ entitled: true, reason: 'program-active' });
  });

  test('stops on the day access runs out, not when RevenueCat says so', () => {
    const info = customer({ nonSubscriptionTransactions: [pass(PROGRAM_ACCESS_DAYS + 1)] });
    expect(decideAccess(info, NOW)).toEqual({ entitled: false, reason: 'program-expired' });
  });

  test('the discounted pass grants exactly the same access', () => {
    const info = customer({
      nonSubscriptionTransactions: [pass(10, PRODUCTS.programOffer)],
    });
    expect(decideAccess(info, NOW).entitled).toBe(true);
  });

  test('buying a second one extends rather than being ignored', () => {
    // An old pass that has lapsed, plus a fresh one. Reading the earliest — or
    // the first in the array — would leave a paying customer locked out.
    const info = customer({
      nonSubscriptionTransactions: [pass(200), pass(3)],
    });
    expect(decideAccess(info, NOW)).toEqual({ entitled: true, reason: 'program-active' });
  });
});

/**
 * The hole the dashboard configuration opens.
 *
 * A pass grants `premium` permanently. If the calculation ever reaches "some
 * entitlement is active, so let them in" while holding one of those, an expired
 * twelve-week purchase becomes a lifetime licence.
 */
describe('a permanently-granted entitlement', () => {
  test('does not outlive the ninety days it paid for', () => {
    const info = customer({
      // Exactly what RevenueCat returns for a long-expired pass: entitlement
      // active, no expiry, and the transaction still on file.
      nonSubscriptionTransactions: [pass(365)],
      entitlements: { active: lifetimePremium(365) },
    });
    expect(decideAccess(info, NOW)).toEqual({ entitled: false, reason: 'program-expired' });
  });

  test('expires on the entitlement date alone when the list is empty', () => {
    // A restore whose receipts have not synced: no transactions, entitlement
    // present. The entitlement carries its own purchase date, so this is still
    // datable — and dating it is strictly better than the blanket refusal
    // below, because it is the correct answer rather than the safe one.
    const info = customer({ entitlements: { active: lifetimePremium(365) } });
    expect(decideAccess(info, NOW)).toEqual({ entitled: false, reason: 'program-expired' });
  });

  test('is refused outright when nothing dates the purchase at all', () => {
    // No transactions, and an entitlement whose purchase date did not come
    // through. Falling through to "something is active" here is what would
    // hand over the app for good on one twelve-week purchase.
    const info = customer({
      entitlements: {
        active: { premium: { productIdentifier: PRODUCTS.program, latestPurchaseDateMillis: NaN } },
      },
    });
    expect(decideAccess(info, NOW)).toEqual({ entitled: false, reason: 'program-undated' });
  });

  test('still dates the purchase from the entitlement when the list is empty', () => {
    const info = customer({ entitlements: { active: lifetimePremium(10) } });
    expect(decideAccess(info, NOW)).toEqual({ entitled: true, reason: 'program-active' });
  });
});

describe('the entitlement-name fallback', () => {
  test('lets a paying customer in when the dashboard name has drifted', () => {
    const info = customer({
      entitlements: {
        active: { pro: { productIdentifier: 'sub_unknown', latestPurchaseDateMillis: NOW } },
      },
    });
    expect(decideAccess(info, NOW)).toEqual({ entitled: true, reason: 'other-entitlement' });
  });

  test('grants nothing when the store returned nothing', () => {
    expect(decideAccess(customer(), NOW)).toEqual({ entitled: false, reason: 'nothing' });
  });
});

describe('programEnd', () => {
  test('is ninety days past the purchase, not the eighty-four the plan runs', () => {
    const info = customer({ nonSubscriptionTransactions: [pass(0)] });
    expect(programEnd(info)?.getTime()).toBe(NOW + PROGRAM_ACCESS_DAYS * DAY);
  });

  test('ignores a purchase that is not a programme', () => {
    const info = customer({
      nonSubscriptionTransactions: [
        { productIdentifier: 'tip_jar_199', purchaseDate: new Date(NOW).toISOString() },
      ],
    });
    expect(programEnd(info)).toBeNull();
  });

  test('survives a transaction with an unparseable date', () => {
    const info = customer({
      nonSubscriptionTransactions: [
        { productIdentifier: PRODUCTS.program, purchaseDate: 'not a date' },
      ],
    });
    // Null, not an Invalid Date — which would compare false against everything
    // and silently read as "expired" for somebody who just paid.
    expect(programEnd(info)).toBeNull();
  });
});
