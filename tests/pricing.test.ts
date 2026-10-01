import { readFileSync } from 'node:fs';

import { describe, expect, test } from 'bun:test';

import {
  WEEKS_PER_YEAR,
  annualSavingPercent,
  discountPercent,
  perWeek,
} from '../src/entities/purchase/model/pricing';
import {
  ENTITLEMENT,
  LEGACY_PASS_IDS,
  LEGACY_PRODUCTS,
  OFFERINGS,
  PACKAGES,
  PASS_ACCESS_DAYS,
  PRINTED_PRICES,
  PRODUCTS,
} from '../src/entities/purchase/model/purchase';

/** The two prices everything else on the paywall is derived from. */
const ANNUAL = 44.99;
const WEEKLY = 7.99;

describe('per-week display', () => {
  test('is the annual price over 52 weeks', () => {
    expect(perWeek(ANNUAL)).toBeCloseTo(0.87, 2);
    expect(WEEKS_PER_YEAR).toBe(52);
  });
});

/**
 * The "Best value" badge and the saving line.
 *
 * The same year bought two ways: one annual payment against fifty-two weekly
 * ones. Computed from store prices every time, so a price changed in App Store
 * Connect moves the claim with it — or takes it away.
 */
describe('the saving against paying weekly', () => {
  test('is 89% at the configured prices', () => {
    // $44.99 once against 52 × $7.99 = $415.48.
    expect(annualSavingPercent(ANNUAL, WEEKLY)).toBe(89);
  });

  test('disappears when the annual plan stops being cheaper', () => {
    // Null rather than zero or negative, so nothing can print "Save 0%" or put
    // "Best value" on the worse deal.
    expect(annualSavingPercent(52 * WEEKLY, WEEKLY)).toBeNull();
    expect(annualSavingPercent(500, WEEKLY)).toBeNull();
  });

  test('refuses a weekly price it cannot divide by', () => {
    expect(annualSavingPercent(ANNUAL, 0)).toBeNull();
    expect(annualSavingPercent(ANNUAL, Number.NaN)).toBeNull();
  });
});

describe('the invite and comeback discount', () => {
  test('is computed, not asserted', () => {
    expect(discountPercent(13.49, ANNUAL)).toBe(70);
    expect(discountPercent(22.49, ANNUAL)).toBe(50);
  });

  test('is null when the two prices are the same, so no badge shows', () => {
    // The `offer` offering missing, with the standard one standing in.
    expect(discountPercent(ANNUAL, ANNUAL)).toBeNull();
  });

  test('is null when the "offer" costs more', () => {
    expect(discountPercent(59.99, ANNUAL)).toBeNull();
  });
});

/**
 * The contract with App Store Connect and RevenueCat, written down.
 *
 * Every string here was typed into two places: a dashboard and this repo. There
 * is no mechanism that keeps them in step, and the failure mode is silent — a
 * mistyped package identifier does not throw, it just returns no plan.
 */
describe('the store contract', () => {
  test('offerings and packages match the dashboard', () => {
    expect(OFFERINGS.standard).toBe('default');
    expect(OFFERINGS.offer).toBe('offer');
    // RevenueCat's predefined packages, read through `offering.annual` and
    // `offering.weekly`.
    expect(PACKAGES.annual).toBe('$rc_annual');
    expect(PACKAGES.weekly).toBe('$rc_weekly');
  });

  test('the entitlement is the one every product is attached to', () => {
    expect(ENTITLEMENT).toBe('premium');
  });

  test('three subscription products, none of them a legacy one', () => {
    const sold = Object.values(PRODUCTS);
    expect(new Set(sold).size).toBe(3);
    for (const id of sold) {
      expect(Object.values(LEGACY_PRODUCTS)).not.toContain(id);
      expect(LEGACY_PASS_IDS).not.toContain(id);
    }
  });

  test('the printed fallbacks match the configured prices', () => {
    // Only ever shown when the store cannot be reached. If one of these is
    // stale it advertises a price Apple will not charge.
    expect(PRINTED_PRICES.annual).toBe(ANNUAL);
    expect(PRINTED_PRICES.weekly).toBe(WEEKLY);
    // No printed discount: a discount is only ever two store prices.
    expect(Object.keys(PRINTED_PRICES).sort()).toEqual(['annual', 'weekly']);
  });

  test('the legacy pass is still dated, for the people who hold one', () => {
    expect([...LEGACY_PASS_IDS].sort()).toEqual(
      [LEGACY_PRODUCTS.pass, LEGACY_PRODUCTS.passOffer].sort(),
    );
    expect(PASS_ACCESS_DAYS).toBe(90);
    // The old monthly plan is a subscription, which RevenueCat expires itself.
    expect(LEGACY_PASS_IDS).not.toContain(LEGACY_PRODUCTS.monthly);
  });
});

/**
 * The screens that sell, read as source.
 *
 * These assert shape rather than arithmetic — the alternative is mounting
 * expo-router under bun, and what breaks here is a disclosure left out or a
 * per-week figure promoted over the billed one, not a number.
 */
describe('the paywall and the expiry screen', () => {
  const read = (path: string) => readFileSync(new URL(path, import.meta.url), 'utf8');
  const offer = read('../src/pages/offer/ui/offer-page.tsx');
  const expired = read('../src/pages/expired/ui/expired-page.tsx');
  const option = read('../src/shared/ui/plan-option/plan-option.tsx');

  test('both carry the subscription disclosure, the legal links and restore', () => {
    for (const page of [offer, expired]) {
      expect(page).toContain('<SubscriptionTerms');
      expect(page).toContain('<LegalLinks');
      expect(page).toMatch(/onRestore=/);
    }
  });

  test('both sell the annual plan selected first', () => {
    for (const page of [offer, expired]) {
      expect(page).toContain("useState<PlanPeriod>('annual')");
    }
  });

  test('the billed price is drawn larger than the per-week line', () => {
    const size = (name: string) => {
      const match = option.match(new RegExp(`\\b${name}: (?:\\{[^}]*?)?fonts\\.\\w+\\((\\d+)`));
      return match == null ? Number.NaN : Number(match[1]);
    };
    expect(size('price')).toBeGreaterThan(size('note') * 1.5);
  });

  test('nothing sells or mentions the one-time pass', () => {
    for (const page of [offer, expired]) {
      expect(page).not.toMatch(/program(Plan|Title|Price|Note)|monthlyPlan|PROGRAM_/);
      expect(page).not.toMatch(/12[- ]week|twelve weeks/i);
    }
  });
});
