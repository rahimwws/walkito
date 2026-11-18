import { describe, expect, test } from 'bun:test';

import type { IntroOffer, Offering, Plan } from '@/entities/purchase';

import { GIFT_PRODUCT, giftOpens, giftPlan } from './gift';

function plan(id: string, intro: IntroOffer | null): Plan {
  return {
    token: `test:offer:annual`,
    period: 'annual',
    product: { id, price: 49.99, currencyCode: 'USD', display: '$49.99' },
    priceString: '$49.99',
    pricePerMonthString: '$4.16',
    pricePerWeekString: '$0.96',
    billingPeriod: { unit: 'year', count: 1 },
    isLifetime: false,
    isPass: false,
    intro,
  };
}

const FIRST_YEAR: IntroOffer = { kind: 'pay-up-front', price: 29.99, priceString: '$29.99', period: { unit: 'year', count: 1 } };

function offering(annual: Plan | null): Offering {
  return { identifier: 'offer', annual, monthly: null, weekly: null, lifetime: null, pass: null };
}

describe('giftPlan', () => {
  test('the first-year price on walkito_annual_offer, when she is eligible', () => {
    const gift = plan(GIFT_PRODUCT, FIRST_YEAR);
    expect(giftPlan(offering(gift))).toBe(gift);
  });
  test('no offering, no annual, or another product: no gift', () => {
    expect(giftPlan(null)).toBeNull();
    expect(giftPlan(offering(null))).toBeNull();
    expect(giftPlan(offering(plan('walkito_annual', FIRST_YEAR)))).toBeNull();
  });
  test('not eligible (the adapter leaves no intro): no gift', () => {
    expect(giftPlan(offering(plan(GIFT_PRODUCT, null)))).toBeNull();
  });
  test('a free trial or a shorter intro is not the gift', () => {
    expect(giftPlan(offering(plan(GIFT_PRODUCT, { kind: 'free-trial', period: { unit: 'week', count: 1 } })))).toBeNull();
    expect(
      giftPlan(offering(plan(GIFT_PRODUCT, { ...FIRST_YEAR, period: { unit: 'month', count: 1 } }))),
    ).toBeNull();
  });
});

describe('giftOpens', () => {
  const gift = plan(GIFT_PRODUCT, FIRST_YEAR);
  test('after a closed payment sheet, once, with the plan loaded', () => {
    expect(giftOpens({ cancelled: true, seen: false, plan: gift, comeback: false })).toBe(true);
  });
  test('never after "Not now" (no closed sheet)', () => {
    expect(giftOpens({ cancelled: false, seen: false, plan: gift, comeback: false })).toBe(false);
  });
  test('never twice', () => {
    expect(giftOpens({ cancelled: true, seen: true, plan: gift, comeback: false })).toBe(false);
  });
  test('never without the plan, and never on the comeback view', () => {
    expect(giftOpens({ cancelled: true, seen: false, plan: null, comeback: false })).toBe(false);
    expect(giftOpens({ cancelled: true, seen: false, plan: gift, comeback: true })).toBe(false);
  });
});
