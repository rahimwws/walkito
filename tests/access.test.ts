import { describe, expect, test } from 'bun:test';

import {
  decideAccess,
  hadAccess,
  passEnd,
  subscriptionActive,
  type CustomerFacts,
  type EntitlementFacts,
} from '../src/entities/purchase/model/access';
import {
  LEGACY_PRODUCTS,
  PASS_ACCESS_DAYS,
  PRODUCTS,
} from '../src/entities/purchase/model/purchase';

/**
 * Who gets in, and — more to the point — who does not.
 *
 * This is the only arithmetic in the app that decides whether somebody paid,
 * and until it was split out of the RevenueCat adapter it could not be tested
 * at all: that file imports the native module and will not load here.
 *
 * What is sold now is two auto-renewing subscriptions, which RevenueCat
 * expires itself, so most of the cases below are about trusting its answer and
 * not second-guessing a paying subscriber. The rest are about the legacy pass:
 * Apple puts no expiry on a non-renewing purchase, RevenueCat therefore reports
 * its entitlement as active for ever, and every guard on it is about making
 * sure "for ever" never reaches the user.
 */

const DAY = 86_400_000;
const NOW = Date.parse('2026-06-01T12:00:00.000Z');

function customer(over: Partial<CustomerFacts> = {}): CustomerFacts {
  return {
    activeSubscriptions: [],
    allPurchasedProductIdentifiers: [],
    nonSubscriptionTransactions: [],
    entitlements: { active: {}, all: {} },
    ...over,
  };
}

/** An entitlement map with one entry, active or ever-held. */
function premium(productIdentifier: string, latestPurchaseDateMillis = NOW): {
  [key: string]: EntitlementFacts;
} {
  return { premium: { productIdentifier, latestPurchaseDateMillis } };
}

/** A pass purchase as it arrives in the transaction list. */
function pass(daysAgo: number, id: string = LEGACY_PRODUCTS.pass) {
  return { productIdentifier: id, purchaseDate: new Date(NOW - daysAgo * DAY).toISOString() };
}

/** The entitlement a pass grants: active, and with no expiry RevenueCat will
 * ever apply. */
function lifetimePremium(daysAgo: number, id: string = LEGACY_PRODUCTS.pass) {
  return premium(id, NOW - daysAgo * DAY);
}

describe('a subscription', () => {
  test('the annual one is enough on its own', () => {
    const info = customer({ activeSubscriptions: [PRODUCTS.annual] });
    expect(decideAccess(info, NOW)).toEqual({ entitled: true, reason: 'subscription' });
  });

  test('the weekly one is enough on its own', () => {
    const info = customer({ activeSubscriptions: [PRODUCTS.weekly] });
    expect(decideAccess(info, NOW)).toEqual({ entitled: true, reason: 'subscription' });
  });

  test('the discounted annual grants exactly the same access', () => {
    const info = customer({ activeSubscriptions: [PRODUCTS.annualOffer] });
    expect(decideAccess(info, NOW).entitled).toBe(true);
  });

  test('does not depend on the product identifier being one the app knows', () => {
    // Renaming a product in App Store Connect must not lock out the people
    // already paying for it. Everything this app sells is one tier.
    const info = customer({ activeSubscriptions: ['sub_annual_renamed'] });
    expect(decideAccess(info, NOW)).toEqual({ entitled: true, reason: 'subscription' });
  });

  test('a subscriber who started on the old monthly plan keeps access', () => {
    const info = customer({ activeSubscriptions: [LEGACY_PRODUCTS.monthly] });
    expect(decideAccess(info, NOW).entitled).toBe(true);
  });

  test('is trusted through the entitlement when the store reports only that', () => {
    const info = customer({ entitlements: { active: premium(PRODUCTS.annual), all: premium(PRODUCTS.annual) } });
    expect(decideAccess(info, NOW)).toEqual({ entitled: true, reason: 'entitlement' });
  });

  test('ends when RevenueCat says it does, not on a clock of ours', () => {
    // Lapsed: no longer active, entitlement only in `all`.
    const info = customer({
      allPurchasedProductIdentifiers: [PRODUCTS.weekly],
      entitlements: { active: {}, all: premium(PRODUCTS.weekly) },
    });
    expect(decideAccess(info, NOW)).toEqual({ entitled: false, reason: 'nothing' });
  });

  test('is not hidden by an expired pass that still holds the entitlement', () => {
    // RevenueCat names one product per entitlement. A lifetime pass grant can
    // be the one it names while a subscription bought later is what is live.
    const info = customer({
      activeSubscriptions: [PRODUCTS.annual],
      nonSubscriptionTransactions: [pass(365)],
      entitlements: { active: lifetimePremium(365), all: lifetimePremium(365) },
    });
    expect(decideAccess(info, NOW)).toEqual({ entitled: true, reason: 'subscription' });
  });

  test('a pass id reported as a subscription is not taken for one', () => {
    expect(subscriptionActive(customer({ activeSubscriptions: [LEGACY_PRODUCTS.pass] }))).toBe(
      false,
    );
  });
});

describe('the legacy pass', () => {
  test('unlocks inside its access window', () => {
    const info = customer({ nonSubscriptionTransactions: [pass(10)] });
    expect(decideAccess(info, NOW)).toEqual({ entitled: true, reason: 'pass-active' });
  });

  test('stops on the day access runs out, not when RevenueCat says so', () => {
    const info = customer({ nonSubscriptionTransactions: [pass(PASS_ACCESS_DAYS + 1)] });
    expect(decideAccess(info, NOW)).toEqual({ entitled: false, reason: 'pass-expired' });
  });

  test('the discounted pass grants exactly the same access', () => {
    const info = customer({
      nonSubscriptionTransactions: [pass(10, LEGACY_PRODUCTS.passOffer)],
    });
    expect(decideAccess(info, NOW).entitled).toBe(true);
  });

  test('a second one extended rather than being ignored', () => {
    const info = customer({ nonSubscriptionTransactions: [pass(200), pass(3)] });
    expect(decideAccess(info, NOW)).toEqual({ entitled: true, reason: 'pass-active' });
  });
});

/**
 * The hole a pass opens.
 *
 * A pass grants `premium` permanently. If the calculation ever reaches "some
 * entitlement is active, so let them in" while holding one of those, an expired
 * one-time purchase becomes a lifetime licence.
 */
describe('a permanently-granted entitlement', () => {
  test('does not outlive the access it paid for', () => {
    const info = customer({
      nonSubscriptionTransactions: [pass(365)],
      entitlements: { active: lifetimePremium(365), all: lifetimePremium(365) },
    });
    expect(decideAccess(info, NOW)).toEqual({ entitled: false, reason: 'pass-expired' });
  });

  test('expires on the entitlement date alone when the list is empty', () => {
    const info = customer({ entitlements: { active: lifetimePremium(365), all: {} } });
    expect(decideAccess(info, NOW)).toEqual({ entitled: false, reason: 'pass-expired' });
  });

  test('is refused outright when nothing dates the purchase at all', () => {
    const info = customer({
      entitlements: { active: premium(LEGACY_PRODUCTS.pass, NaN), all: {} },
    });
    expect(decideAccess(info, NOW)).toEqual({ entitled: false, reason: 'pass-undated' });
  });

  test('still dates the purchase from the entitlement when the list is empty', () => {
    const info = customer({ entitlements: { active: lifetimePremium(10), all: {} } });
    expect(decideAccess(info, NOW)).toEqual({ entitled: true, reason: 'pass-active' });
  });
});

describe('the entitlement-name fallback', () => {
  test('lets a paying customer in when the dashboard name has drifted', () => {
    const info = customer({
      entitlements: {
        active: { pro: { productIdentifier: 'sub_unknown', latestPurchaseDateMillis: NOW } },
        all: {},
      },
    });
    expect(decideAccess(info, NOW)).toEqual({ entitled: true, reason: 'other-entitlement' });
  });

  test('grants nothing when the store returned nothing', () => {
    expect(decideAccess(customer(), NOW)).toEqual({ entitled: false, reason: 'nothing' });
  });
});

describe('passEnd', () => {
  test('is the access window past the purchase', () => {
    const info = customer({ nonSubscriptionTransactions: [pass(0)] });
    expect(passEnd(info)?.getTime()).toBe(NOW + PASS_ACCESS_DAYS * DAY);
  });

  test('is null for every subscriber', () => {
    // A subscription renews; there is no end to warn about or count down to.
    const info = customer({
      activeSubscriptions: [PRODUCTS.annual],
      entitlements: { active: premium(PRODUCTS.annual), all: premium(PRODUCTS.annual) },
    });
    expect(passEnd(info)).toBeNull();
  });

  test('ignores a purchase that is not a pass', () => {
    const info = customer({
      nonSubscriptionTransactions: [
        { productIdentifier: 'tip_jar_199', purchaseDate: new Date(NOW).toISOString() },
      ],
    });
    expect(passEnd(info)).toBeNull();
  });

  test('survives a transaction with an unparseable date', () => {
    const info = customer({
      nonSubscriptionTransactions: [
        { productIdentifier: LEGACY_PRODUCTS.pass, purchaseDate: 'not a date' },
      ],
    });
    // Null, not an Invalid Date — which would compare false against everything
    // and silently read as "expired" for somebody who just paid.
    expect(passEnd(info)).toBeNull();
  });
});

describe('free days from invites', () => {
  test('carry a pass past its access window', () => {
    const info = customer({ nonSubscriptionTransactions: [pass(PASS_ACCESS_DAYS + 10)] });
    expect(decideAccess(info, NOW).entitled).toBe(false);
    expect(decideAccess(info, NOW, 28)).toEqual({ entitled: true, reason: 'pass-active' });
  });

  test('move the end date by exactly the days earned', () => {
    const info = customer({ nonSubscriptionTransactions: [pass(0)] });
    const plain = passEnd(info)!.getTime();
    expect(passEnd(info, 28)!.getTime() - plain).toBe(28 * DAY);
  });

  test('never create access where nothing was bought', () => {
    expect(decideAccess(customer(), NOW, 84)).toEqual({ entitled: false, reason: 'nothing' });
    expect(passEnd(customer(), 84)).toBeNull();
  });

  test('do nothing for a subscriber whose subscription ended', () => {
    // An App Store subscription cannot be extended from the device. The days
    // must not quietly turn a lapsed subscription back on.
    const info = customer({
      allPurchasedProductIdentifiers: [PRODUCTS.annual],
      entitlements: { active: {}, all: premium(PRODUCTS.annual) },
    });
    expect(decideAccess(info, NOW, 84).entitled).toBe(false);
  });

  test('cannot take time away', () => {
    const info = customer({ nonSubscriptionTransactions: [pass(10)] });
    expect(passEnd(info, -500)!.getTime()).toBe(passEnd(info)!.getTime());
  });
});

/**
 * The difference between the paywall and the expiry screen.
 *
 * Not entitled is not enough to pick a door: somebody who never paid gets the
 * pitch, somebody whose subscription ended gets their own results.
 */
describe('hadAccess', () => {
  test('is false for somebody who never bought anything', () => {
    expect(hadAccess(customer())).toBe(false);
  });

  test('is true for a subscription that has ended', () => {
    const info = customer({ entitlements: { active: {}, all: premium(PRODUCTS.weekly) } });
    expect(hadAccess(info)).toBe(true);
    expect(decideAccess(info, NOW).entitled).toBe(false);
  });

  test('is true on a purchase alone, before entitlements have synced', () => {
    expect(hadAccess(customer({ allPurchasedProductIdentifiers: [PRODUCTS.annual] }))).toBe(true);
  });

  test('is true for a legacy pass that ran out', () => {
    const info = customer({ nonSubscriptionTransactions: [pass(PASS_ACCESS_DAYS + 1)] });
    expect(hadAccess(info)).toBe(true);
  });

  test('is true while access is live, so a lapse is only ever entitled → not', () => {
    const info = customer({
      activeSubscriptions: [PRODUCTS.annual],
      allPurchasedProductIdentifiers: [PRODUCTS.annual],
      entitlements: { active: premium(PRODUCTS.annual), all: premium(PRODUCTS.annual) },
    });
    expect(hadAccess(info)).toBe(true);
  });
});
