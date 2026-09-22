import { describe, expect, test } from 'bun:test';

import {
  ENTITLEMENT,
  OFFERINGS,
  PRINTED_PRICES,
  PROGRAM_ACCESS_DAYS,
  PROGRAM_IDS,
  PROGRAM_MONTHS,
  PROGRAM_PACKAGE,
  PRODUCTS,
} from '../src/entities/purchase/model/purchase';

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

/**
 * The contract with App Store Connect and RevenueCat, written down.
 *
 * Every string here was typed into two places: a dashboard and this repo. There
 * is no mechanism that keeps them in step, and the failure mode is silent — a
 * mistyped product identifier does not throw, it just returns no offering, and
 * the paywall falls back to printed prices and sells nothing. These assertions
 * are the closest thing to a compiler for that.
 *
 * Apple IDs are recorded in the comments rather than asserted: the app never
 * sends them, so they are here to make the row identifiable in App Store
 * Connect when one of these needs checking.
 */
describe('the store contract', () => {
  test('product identifiers match what is configured', () => {
    // Auto-Renewable, 1 month, $24.99, group "Walkito Premium". Apple ID 6814688029.
    expect(PRODUCTS.monthly).toBe('sub_monthly_2499');
    // Non-Renewing, $49.99. Apple ID 6814689374.
    expect(PRODUCTS.program).toBe('pass_12wk_4999');
    // Non-Renewing, $14.99 — the same twelve weeks at the comeback price.
    // Apple ID 6814690309.
    expect(PRODUCTS.programOffer).toBe('pass_12wk_1499');
  });

  test('both programme products are treated as the programme', () => {
    // Access is dated off these two. A product missing from the list would be
    // sold and then never unlock anything.
    expect([...PROGRAM_IDS].sort()).toEqual(
      [PRODUCTS.program, PRODUCTS.programOffer].sort(),
    );
  });

  test('offerings and packages match the dashboard', () => {
    // `default` is the current offering; `offer` carries the discounted pass.
    expect(OFFERINGS.standard).toBe('default');
    expect(OFFERINGS.offer).toBe('offer');
    // The monthly plan sits in RevenueCat's own `$rc_monthly` slot, which the
    // adapter reads through `found.monthly`. The pass has no built-in slot —
    // a non-renewing product is not one of RevenueCat's package types — so it
    // is a custom package looked up by this identifier.
    expect(PROGRAM_PACKAGE).toBe('program');
  });

  test('the entitlement is the one both passes are attached to', () => {
    expect(ENTITLEMENT).toBe('premium');
  });

  test('the printed fallbacks match the configured prices', () => {
    // Only ever shown when the store cannot be reached. If one of these is
    // stale it advertises a price Apple will not charge.
    expect(PRINTED_PRICES.monthly).toBe(24.99);
    expect(PRINTED_PRICES.program).toBe(49.99);
    expect(PRINTED_PRICES.programOffer).toBe(14.99);
  });
});

/**
 * The saving on the paywall.
 *
 * Twelve weeks is three months, so the comparison is one payment of the
 * programme price against three of the monthly one — the same access, bought
 * two ways. The figure this replaced compared per-week rates, which is a
 * comparison of two numbers nobody is ever charged, and it collapsed to zero
 * the moment the store returned a real monthly price.
 */
describe('the saving against paying monthly', () => {
  const saving = (program: number, monthly: number) =>
    monthly > 0 ? Math.round((1 - program / (monthly * PROGRAM_MONTHS)) * 100) : 0;

  test('is 33% at the configured prices', () => {
    // $49.99 once against 3 × $24.99 = $74.97.
    expect(saving(PROGRAM, MONTHLY)).toBe(33);
  });

  test('twelve weeks is three months', () => {
    // The badge, the headline and the row's note all say three. If the plan
    // ever becomes sixteen weeks, this is what forces the arithmetic to follow.
    expect(PROGRAM_MONTHS).toBe(3);
  });

  test('goes negative when the programme is the dearer option', () => {
    // Not hypothetical: the store was returning $9.99/month while the paywall
    // was configured for $24.99, which makes three months $29.97 against a
    // $49.99 programme. The paywall must show no badge here rather than a
    // saving that does not exist.
    expect(saving(PROGRAM, 9.99)).toBeLessThan(0);
  });

  test('is zero when the two cost the same over three months', () => {
    expect(saving(74.97, 24.99)).toBe(0);
  });
});
