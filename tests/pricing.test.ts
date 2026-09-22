import { describe, expect, test } from 'bun:test';

import { PROGRAM_ACCESS_DAYS, PROGRAM_IDS, PRODUCTS } from '../src/entities/purchase/model/purchase';

/** The two figures every other number on the paywall is derived from. */
const MONTHLY = 24.99;
const PROGRAM = 49.99;
const OFFER = 14.99;

const perWeekMonthly = (m: number) => (m * 12) / 52;
const perWeekProgram = (p: number) => p / 12;
const discountPct = (offer: number, full: number) => Math.round((1 - offer / full) * 100);

describe('per-week display', () => {
  test('matches the spec to the cent', () => {
    expect(perWeekMonthly(MONTHLY)).toBeCloseTo(5.77, 2);
    expect(perWeekProgram(PROGRAM)).toBeCloseTo(4.17, 2);
    expect(perWeekProgram(OFFER)).toBeCloseTo(1.25, 2);
  });
});

describe('the ladder', () => {
  test('the larger commitment is cheaper per week', () => {
    expect(perWeekProgram(PROGRAM)).toBeLessThan(perWeekMonthly(MONTHLY));
  });

  /**
   * The spec's own warning, as a test.
   *
   * Below $18.06 a month, paying monthly becomes cheaper per week than the
   * twelve-week programme and the whole offer structure inverts — the "best
   * value" badge would sit on the worse deal. Apple's price tiers do not divide
   * evenly across territories, so this is not hypothetical.
   */
  test('inverts below $18.06 monthly, which is the figure to watch', () => {
    expect(perWeekMonthly(18.06)).toBeGreaterThan(perWeekProgram(PROGRAM));
    expect(perWeekMonthly(18.0)).toBeLessThan(perWeekProgram(PROGRAM));
  });
});

describe('the discount', () => {
  test('is 70% and is computed, not asserted', () => {
    expect(discountPct(OFFER, PROGRAM)).toBe(70);
  });

  test('moves when the programme price does', () => {
    // The point of computing it: a price change in App Store Connect must not
    // leave a stale badge behind.
    expect(discountPct(OFFER, 29.99)).toBe(50);
    expect(discountPct(OFFER, 99.99)).toBe(85);
  });

  test('is zero when the two prices are the same, so no badge shows', () => {
    expect(discountPct(PROGRAM, PROGRAM)).toBe(0);
  });
});

describe('programme access', () => {
  test('runs 90 days, not the 84 the plan does', () => {
    expect(PROGRAM_ACCESS_DAYS).toBe(90);
  });

  test('covers both programme products', () => {
    expect(PROGRAM_IDS).toContain(PRODUCTS.program);
    expect(PROGRAM_IDS).toContain(PRODUCTS.programOffer);
    // The subscription is not one of them — RevenueCat expires that itself, and
    // treating it as a 90-day pass would cut off a paying subscriber.
    expect(PROGRAM_IDS).not.toContain(PRODUCTS.monthly);
  });
});
