import { kv } from '@/shared/lib/storage';

import { OFFERINGS, PRODUCTS, type IntroOffer, type Offering, type Plan, type PlanPeriod, type StorePeriod } from './purchase';

/**
 * Development only: every offering with sample prices, so a simulator can draw
 * every selling screen as it will look, before the products exist in App Store
 * Connect and on a simulator that cannot fetch them at all.
 *
 * Switched on by `walkito.dev://?samplePrices` and off by `?samplePrices=off`
 * (`app/providers/dev-links.ts`), kept on disk so a reload keeps it. While it
 * is on, `purchases.offering()` answers from here and buying a sample plan
 * grants the simulator's pretend purchase (`grantDevAccess`) instead of
 * reaching a store. Never read in a release build: `__DEV__` is false there and
 * every branch below folds away.
 *
 * The figures are the US prices of the products being set up (see `PRODUCTS`),
 * in dollars. They are samples, not prices: a release build only ever shows
 * the store's own.
 */

const KEY = 'dev/samplePrices';
const TOKEN = 'sample:';

export function samplePricesOn(): boolean {
  return __DEV__ && kv.getBoolean(KEY) === true;
}

/** Development only: sample prices on or off. A no-op in a release build. */
export function setSamplePrices(on: boolean): void {
  if (!__DEV__) return;
  if (on) kv.set(KEY, true);
  else kv.remove(KEY);
}

/** Whether a plan came from here rather than from a store. */
export function isSamplePlan(plan: Plan): boolean {
  return plan.token.startsWith(TOKEN);
}

function usd(amount: number): string {
  return `$${amount.toFixed(2)}`;
}

/** Down to the cent, the way the store divides a price over a shorter period. */
function per(price: number, parts: number): string {
  return usd(Math.floor((price / parts) * 100) / 100);
}

const BILLING: Readonly<Record<PlanPeriod, StorePeriod | null>> = {
  annual: { unit: 'year', count: 1 },
  monthly: { unit: 'month', count: 1 },
  weekly: { unit: 'week', count: 1 },
  lifetime: null,
};

/** How many months and weeks one billing period holds. */
const PARTS: Readonly<Record<PlanPeriod, { months: number; weeks: number } | null>> = {
  annual: { months: 12, weeks: 52 },
  monthly: { months: 1, weeks: 52 / 12 },
  weekly: { months: 12 / 52, weeks: 1 },
  lifetime: null,
};

function plan(offering: string, period: PlanPeriod, id: string, price: number, intro: IntroOffer | null = null): Plan {
  const display = usd(price);
  const parts = PARTS[period];
  return {
    token: `${TOKEN}${offering}:${period}`,
    period,
    product: { id, price, currencyCode: 'USD', display },
    priceString: display,
    pricePerMonthString: parts == null ? null : per(price, parts.months),
    pricePerWeekString: parts == null ? null : per(price, parts.weeks),
    billingPeriod: BILLING[period],
    isLifetime: period === 'lifetime',
    intro,
  };
}

/** The sample offering by name, shaped exactly as the store's will be. */
export function sampleOffering(identifier: string): Offering | null {
  if (!__DEV__) return null;
  switch (identifier) {
    case OFFERINGS.standard:
      return {
        identifier,
        annual: plan(identifier, 'annual', PRODUCTS.annual, 59.99),
        monthly: plan(identifier, 'monthly', PRODUCTS.monthly, 14.99),
        weekly: null,
        lifetime: plan(identifier, 'lifetime', PRODUCTS.lifetime, 99.99),
      };
    case OFFERINGS.trial:
      return {
        identifier,
        annual: plan(identifier, 'annual', PRODUCTS.annualTrial, 59.99, {
          kind: 'free-trial',
          period: { unit: 'week', count: 1 },
        }),
        monthly: null,
        weekly: null,
        lifetime: null,
      };
    case OFFERINGS.offer:
      return {
        identifier,
        annual: plan(identifier, 'annual', PRODUCTS.annualOffer, 59.99, {
          kind: 'pay-up-front',
          price: 29.99,
          priceString: usd(29.99),
          period: { unit: 'year', count: 1 },
        }),
        monthly: null,
        weekly: null,
        lifetime: plan(identifier, 'lifetime', PRODUCTS.lifetimeOffer, 59.99),
      };
    default:
      return null;
  }
}
