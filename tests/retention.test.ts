import { describe, expect, test } from 'bun:test';

import {
  RETENTION_GAP_DAYS,
  breakOffer,
  budgetPassAllowed,
  isFreeMonth,
  markRetentionTaken,
  retentionAllowed,
  retentionTakenAt,
  type PassHistory,
  type RetentionFacts,
} from '../src/entities/purchase/model/retention';
import { FIRST_PRODUCTS, PRODUCTS, type RetentionOffer, type Subscription } from '../src/entities/purchase/model/purchase';

/**
 * Who the cancel flow may offer something to stay, and which offers it shows.
 * The claims these rules guard are ones App Review and a customer can both
 * check: an offer only to a current subscriber at the full price, none on top
 * of another discount, one a year, and a percentage the store's prices give.
 */

const DAY = 24 * 60 * 60 * 1000;
const NOW = Date.UTC(2026, 9, 14, 12);

const yearly: Subscription = {
  kind: 'subscription',
  productId: PRODUCTS.annual,
  period: 'annual',
  willRenew: true,
  expiresAt: NOW + 200 * DAY,
  periodType: 'normal',
  store: 'app_store',
  familyShared: false,
  managementUrl: null,
};

const ios: RetentionFacts = { comp: false, takenAt: null, now: NOW, os: 'ios' };

function offer(patch: Partial<RetentionOffer>): RetentionOffer {
  return {
    token: 'retention:test',
    offerId: 'test',
    productId: PRODUCTS.annual,
    price: 35.99,
    priceString: '$35.99',
    period: { unit: 'year', count: 1 },
    cycles: 1,
    regularPrice: 59.99,
    regularPriceString: '$59.99',
    currencyCode: 'USD',
    ...patch,
  };
}

describe('retentionAllowed', () => {
  test('a yearly App Store subscriber at the full price may be offered something', () => {
    expect(retentionAllowed(yearly, ios)).toBe(true);
  });

  test('nothing during a free trial, an introductory price or a prepaid plan', () => {
    expect(retentionAllowed({ ...yearly, periodType: 'trial' }, ios)).toBe(false);
    expect(retentionAllowed({ ...yearly, periodType: 'intro' }, ios)).toBe(false);
    expect(retentionAllowed({ ...yearly, periodType: 'prepaid' }, ios)).toBe(false);
  });

  test('nothing on a product already sold at the comeback price', () => {
    expect(retentionAllowed({ ...yearly, productId: PRODUCTS.annualOffer }, ios)).toBe(false);
    expect(retentionAllowed({ ...yearly, productId: FIRST_PRODUCTS.annualOffer }, ios)).toBe(false);
    // Google Play names a product with its base plan.
    expect(
      retentionAllowed({ ...yearly, productId: `${FIRST_PRODUCTS.annualOffer}:annual`, store: 'play_store' }, { ...ios, os: 'android' }),
    ).toBe(false);
  });

  test('nothing for access by account, a family member or a lifetime purchase', () => {
    expect(retentionAllowed(yearly, { ...ios, comp: true })).toBe(false);
    expect(retentionAllowed({ ...yearly, familyShared: true }, ios)).toBe(false);
    expect(retentionAllowed({ ...yearly, kind: 'lifetime', period: 'lifetime' }, ios)).toBe(false);
  });

  test('nothing across stores: only the store that bills it can change it', () => {
    expect(retentionAllowed(yearly, { ...ios, os: 'android' })).toBe(false);
    expect(retentionAllowed({ ...yearly, store: 'play_store' }, ios)).toBe(false);
    expect(retentionAllowed({ ...yearly, store: 'play_store' }, { ...ios, os: 'android' })).toBe(true);
  });

  test('one a year', () => {
    const lastYear = NOW - (RETENTION_GAP_DAYS - 1) * DAY;
    expect(retentionAllowed(yearly, { ...ios, takenAt: lastYear })).toBe(false);
    expect(retentionAllowed(yearly, { ...ios, takenAt: NOW - RETENTION_GAP_DAYS * DAY })).toBe(true);
  });
});

describe('budgetPassAllowed', () => {
  const fresh: PassHistory = { retentionOfferUsedAt: null, boughtAt: null };

  test('the 3-month pass for a subscription that still renews', () => {
    expect(budgetPassAllowed(yearly, fresh, NOW, false)).toBe(true);
    expect(budgetPassAllowed({ ...yearly, period: 'monthly' }, fresh, NOW, false)).toBe(true);
  });

  test('nothing to stand in for when nothing renews', () => {
    expect(budgetPassAllowed(null, fresh, NOW, false)).toBe(false);
    expect(budgetPassAllowed({ ...yearly, willRenew: false }, fresh, NOW, false)).toBe(false);
    expect(budgetPassAllowed({ ...yearly, kind: 'lifetime', willRenew: false }, fresh, NOW, false)).toBe(false);
  });

  test('nothing for a family member, who did not buy the subscription', () => {
    expect(budgetPassAllowed({ ...yearly, familyShared: true }, fresh, NOW, false)).toBe(false);
  });

  test('not twice in a year: the retention price used, or any pass bought', () => {
    const lately = NOW - 200 * DAY;
    expect(budgetPassAllowed(yearly, { ...fresh, retentionOfferUsedAt: lately }, NOW, false)).toBe(false);
    expect(budgetPassAllowed(yearly, { ...fresh, boughtAt: lately }, NOW, false)).toBe(false);
    const longAgo = NOW - RETENTION_GAP_DAYS * DAY;
    expect(budgetPassAllowed(yearly, { retentionOfferUsedAt: longAgo, boughtAt: longAgo }, NOW, false)).toBe(true);
  });

  test('always in review mode, which holds no subscription', () => {
    expect(budgetPassAllowed(null, { retentionOfferUsedAt: NOW, boughtAt: NOW }, NOW, true)).toBe(true);
  });
});

describe('breakOffer', () => {
  test('a free month on the App Store, as a retention offer', () => {
    expect(breakOffer(yearly, true, 'ios')).toBe('free_month');
    expect(breakOffer(yearly, false, 'ios')).toBeNull();
  });

  test('Google Play pause on Android, which is the store’s own and not limited by the year', () => {
    const play = { ...yearly, store: 'play_store' as const };
    expect(breakOffer(play, false, 'android')).toBe('play_pause');
    expect(breakOffer({ ...play, periodType: 'trial' }, true, 'android')).toBeNull();
    expect(breakOffer(yearly, true, 'android')).toBeNull();
  });
});

describe('offers as the store returns them', () => {
  test('a free month is free and one month long', () => {
    expect(isFreeMonth(offer({ price: 0, period: { unit: 'month', count: 1 } }))).toBe(true);
    expect(isFreeMonth(offer({ price: 0, period: { unit: 'week', count: 1 } }))).toBe(false);
    expect(isFreeMonth(offer({ price: 0.99, period: { unit: 'month', count: 1 } }))).toBe(false);
  });
});

describe('the year between offers', () => {
  test('is remembered', () => {
    markRetentionTaken(NOW);
    expect(retentionTakenAt()).toBe(NOW);
  });
});
