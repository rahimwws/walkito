import { Platform } from 'react-native';

import { RETENTION_OFFERS } from '@/shared/config';
import { kv } from '@/shared/lib/storage';

import {
  OFFERINGS,
  PRODUCTS,
  type IntroOffer,
  type Offering,
  type Plan,
  type PlanPeriod,
  type RetentionOffer,
  type StorePeriod,
  type Subscription,
} from './purchase';

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

// ── The cancel flow's preview ────────────────────────────────────────────────

/** Whether a retention offer came from here rather than from a store. */
export function isSampleOffer(offer: RetentionOffer): boolean {
  return offer.token.startsWith(TOKEN);
}

function sampleOffer(offerId: string, productId: string, regular: number, price: number, period: StorePeriod): RetentionOffer {
  return {
    token: `${TOKEN}retention:${offerId}`,
    offerId,
    productId,
    price,
    priceString: usd(price),
    period,
    cycles: 1,
    regularPrice: regular,
    regularPriceString: usd(regular),
    currencyCode: 'USD',
  };
}

/** What `sampleRetention` hands the cancel flow: the subscription it
 * pretends is held, and what the store would offer on it. */
export type SampleRetention = {
  subscription: Subscription;
  nextYear: RetentionOffer | null;
  freeMonth: RetentionOffer | null;
  yearly: Plan | null;
  current: Plan | null;
};

/**
 * Development only: a pretend subscription and the store's answers for it,
 * for the cancel flow's preview on a simulator, which holds no subscription
 * and can sign no promotional offer (`walkito.dev://?previewCancel`, and
 * `=monthly`). Shaped as the store's answers will be, with the products' US
 * prices: the yearly plan with its next year at 40% off and a free month, or
 * the monthly plan with the yearly one to switch to. On Android, as there, no
 * promotional offers: the yearly plan has nothing for the budget, and the
 * break is Play's pause.
 */
export function sampleRetention(period: 'annual' | 'monthly', now: number = Date.now()): SampleRetention | null {
  if (!__DEV__) return null;
  const ios = Platform.OS === 'ios';
  const standard = sampleOffering(OFFERINGS.standard);
  const held = period === 'annual' ? standard?.annual : standard?.monthly;
  if (standard == null || held == null) return null;
  const days = period === 'annual' ? 214 : 19;
  const subscription: Subscription = {
    kind: 'subscription',
    productId: held.product.id,
    period,
    willRenew: true,
    expiresAt: now + days * 24 * 60 * 60 * 1000,
    periodType: 'normal',
    store: ios ? 'app_store' : 'play_store',
    familyShared: false,
    managementUrl: null,
  };
  const price = held.product.price;
  // The next year as the offer is set up in App Store Connect: 40% under the
  // year's price, down to the cent as the store rounds.
  const nextYearPrice = Math.floor(price * 0.6 * 100) / 100;
  return {
    subscription,
    nextYear:
      ios && period === 'annual'
        ? sampleOffer(RETENTION_OFFERS.nextYear40, held.product.id, price, nextYearPrice, { unit: 'year', count: 1 })
        : null,
    freeMonth: ios ? sampleOffer(RETENTION_OFFERS.freeMonth, held.product.id, price, 0, { unit: 'month', count: 1 }) : null,
    yearly: period === 'monthly' ? standard.annual : null,
    current: period === 'monthly' ? held : null,
  };
}
