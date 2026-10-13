import { readFileSync } from 'node:fs';

import { describe, expect, test } from 'bun:test';

import {
  WEEKS_PER_YEAR,
  annualSavingPercent,
  discountPercent,
  firstCharge,
  firstChargeSavingPercent,
  perWeek,
  samePeriod,
} from '../src/entities/purchase/model/pricing';
import {
  ENTITLEMENT,
  FIRST_PRODUCTS,
  LEGACY_PASS_IDS,
  LEGACY_PRODUCTS,
  LIFETIME_PRODUCT_IDS,
  OFFERINGS,
  PACKAGES,
  PASS_ACCESS_DAYS,
  PRINTED_PRICES,
  PRODUCTS,
  type IntroOffer,
  type Plan,
  type PlanPeriod,
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

/** A store plan, as `offering()` hands one out. */
function plan(period: PlanPeriod, price: number, intro: IntroOffer | null = null): Plan {
  const display = `$${price.toFixed(2)}`;
  return {
    token: `test:${period}`,
    period,
    product: { id: period, price, currencyCode: 'USD', display },
    priceString: display,
    pricePerMonthString: null,
    pricePerWeekString: null,
    billingPeriod: period === 'lifetime' ? null : { unit: period === 'annual' ? 'year' : period === 'monthly' ? 'month' : 'week', count: 1 },
    isLifetime: period === 'lifetime',
    intro,
  };
}

/**
 * The comeback prices: the annual's first year paid up front, and a cheaper
 * lifetime. What a badge may claim off the standard price.
 */
describe('the first charge', () => {
  const upFront: IntroOffer = { kind: 'pay-up-front', price: 29.99, priceString: '$29.99', period: { unit: 'year', count: 1 } };

  test('is the up-front price for a first year paid up front', () => {
    expect(firstCharge(plan('annual', 59.99, upFront))).toEqual({ price: 29.99, display: '$29.99' });
    expect(firstChargeSavingPercent(plan('annual', 59.99, upFront), plan('annual', 59.99))).toBe(50);
  });

  test('is the regular price after a free trial', () => {
    const trial = plan('annual', 59.99, { kind: 'free-trial', period: { unit: 'week', count: 1 } });
    expect(firstCharge(trial).price).toBe(59.99);
    expect(firstChargeSavingPercent(trial, plan('annual', 59.99))).toBeNull();
  });

  test('is the regular price when the up-front offer is not one billing period', () => {
    const quarter: IntroOffer = { kind: 'pay-up-front', price: 9.99, priceString: '$9.99', period: { unit: 'month', count: 3 } };
    expect(firstCharge(plan('annual', 59.99, quarter)).price).toBe(59.99);
  });

  test('measures the cheaper lifetime against the standard one', () => {
    expect(firstChargeSavingPercent(plan('lifetime', 59.99), plan('lifetime', 99.99))).toBe(40);
  });

  test('never compares two kinds of plan', () => {
    expect(firstChargeSavingPercent(plan('lifetime', 59.99), plan('annual', 99.99))).toBeNull();
    expect(firstChargeSavingPercent(null, plan('annual', 59.99))).toBeNull();
  });

  test('reads twelve months as a year', () => {
    expect(samePeriod({ unit: 'month', count: 12 }, { unit: 'year', count: 1 })).toBe(true);
    expect(samePeriod({ unit: 'day', count: 7 }, { unit: 'week', count: 1 })).toBe(true);
    expect(samePeriod({ unit: 'week', count: 4 }, { unit: 'month', count: 1 })).toBe(false);
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
    expect(OFFERINGS.trial).toBe('trial');
    // Fixed: email links and older builds ask for it by this name.
    expect(OFFERINGS.offer).toBe('offer');
    // RevenueCat's predefined packages, read through `offering.annual`,
    // `offering.monthly`, `offering.weekly` and `offering.lifetime`.
    expect(PACKAGES.annual).toBe('$rc_annual');
    expect(PACKAGES.monthly).toBe('$rc_monthly');
    expect(PACKAGES.weekly).toBe('$rc_weekly');
    expect(PACKAGES.lifetime).toBe('$rc_lifetime');
  });

  test('the products are the ones in App Store Connect', () => {
    expect(PRODUCTS).toEqual({
      annual: 'walkito_annual',
      monthly: 'walkito_monthly',
      lifetime: 'walkito_lifetime',
      annualTrial: 'walkito_annual_trial',
      annualOffer: 'walkito_annual_offer',
      lifetimeOffer: 'walkito_lifetime_offer',
    });
    expect([...LIFETIME_PRODUCT_IDS].sort()).toEqual([PRODUCTS.lifetime, PRODUCTS.lifetimeOffer].sort());
  });

  test('the entitlement is the one every product is attached to', () => {
    expect(ENTITLEMENT).toBe('premium');
  });

  test('every product on sale is distinct, and none of them a legacy one', () => {
    const sold = [...Object.values(PRODUCTS), ...Object.values(FIRST_PRODUCTS)];
    expect(new Set(sold).size).toBe(sold.length);
    for (const id of sold) {
      expect(Object.values(LEGACY_PRODUCTS)).not.toContain(id);
      expect(LEGACY_PASS_IDS).not.toContain(id);
    }
  });

  test('the printed fallbacks match the first line-up', () => {
    // Only ever shown by the old screens when there is no store at all.
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
  const plansStep = read('../src/pages/offer/ui/plans-step.tsx');
  const plansCopy = read('../src/pages/offer/model/plans.ts');
  const expired = read('../src/pages/expired/ui/expired-page.tsx');
  const option = read('../src/shared/ui/plan-option/plan-option.tsx');

  test('both carry the subscription disclosure, the legal links and restore', () => {
    for (const page of [plansStep, expired]) {
      expect(page).toContain('<LegalLinks');
      expect(page).toMatch(/onRestore=/);
    }
    expect(offer).toMatch(/onRestore=/);
    // The expiry screen keeps the paragraph. The paywall's plans step says the
    // same facts under its button: the billed price, its period, that it renews
    // and where to cancel, for whichever plan is selected.
    expect(expired).toContain('<SubscriptionTerms');
    expect(plansCopy).toContain("t('offer.plans.renewsYearly'");
    expect(plansCopy).toContain("t('offer.plans.renewsMonthly'");
    expect(plansCopy).toContain("t('offer.plans.renewsWeekly'");
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
