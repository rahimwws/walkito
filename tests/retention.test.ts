import { describe, expect, test } from 'bun:test';

import {
  RETENTION_GAP_DAYS,
  breakOffer,
  budgetOffer,
  isFreeMonth,
  markRetentionTaken,
  nextYearPercent,
  retentionAllowed,
  retentionTakenAt,
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

describe('budgetOffer', () => {
  test('the next year on the yearly plan, on the App Store only', () => {
    expect(budgetOffer(yearly, true, 'ios')).toBe('next_year');
    expect(budgetOffer({ ...yearly, store: 'play_store' }, true, 'android')).toBeNull();
  });

  test('the yearly plan for somebody paying by the month or the week', () => {
    expect(budgetOffer({ ...yearly, period: 'monthly' }, true, 'ios')).toBe('yearly');
    expect(budgetOffer({ ...yearly, period: 'weekly', store: 'play_store' }, true, 'android')).toBe('yearly');
  });

  test('nothing when nothing may be offered', () => {
    expect(budgetOffer(yearly, false, 'ios')).toBeNull();
    expect(budgetOffer({ ...yearly, period: 'monthly' }, false, 'ios')).toBeNull();
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
  test('the percentage off the next year is the store prices’ own', () => {
    expect(nextYearPercent(offer({}))).toBe(40);
    expect(nextYearPercent(offer({ price: 29.99 }))).toBe(50);
  });

  test('an offer set up as anything but one paid year is not "off your next year"', () => {
    expect(nextYearPercent(offer({ period: { unit: 'month', count: 1 }, cycles: 12 }))).toBe(40);
    expect(nextYearPercent(offer({ period: { unit: 'month', count: 6 } }))).toBeNull();
    expect(nextYearPercent(offer({ price: 0 }))).toBeNull();
    expect(nextYearPercent(offer({ price: 59.99 }))).toBeNull();
  });

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
