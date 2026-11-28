import { Platform } from 'react-native';

import { RETENTION_OFFERS } from '@/shared/config';
import { kv } from '@/shared/lib/storage';

import {
  OFFERINGS,
  PASS_PRODUCTS,
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
 * The figures are the US prices of the products being set up (see `PRODUCTS`
 * and `PASS_PRODUCTS`), in dollars. They are samples, not prices: a release
 * build only ever shows the store's own.
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

const LINEUP_KEY = 'dev/sampleLineupNext';

/** Development only (`?samplePrices=next`, or `=nextcancel`): the line-up
 * being set up rather than today's (yearly $49.99 with its free week,
 * monthly $9.99 with a $4.99 first month, lifetime $99.99), so the paywall
 * can be seen with both. Kept on disk, as the switch itself is, so it holds
 * through the relaunch that refetches the plans. */
export function setSampleLineup(next: boolean): void {
  if (!__DEV__) return;
  if (next) kv.set(LINEUP_KEY, true);
  else kv.remove(LINEUP_KEY);
}

function nextLineup(): boolean {
  return __DEV__ && kv.getBoolean(LINEUP_KEY) === true;
}

const MONTHLY_TRIAL_KEY = 'dev/sampleMonthlyTrial';

/** Development only (`?sampleMonthlyTrial`, `=off`): the `trial` offering
 * holds the monthly with a free week (walkito_monthly_trial, not in App
 * Store Connect yet), so the paywall can be seen as it will be once it is. */
export function setSampleMonthlyTrial(on: boolean): void {
  if (!__DEV__) return;
  if (on) kv.set(MONTHLY_TRIAL_KEY, true);
  else kv.remove(MONTHLY_TRIAL_KEY);
}

const CURRENCY_KEY = 'dev/sampleCurrency';

type SampleCurrency = 'USD' | 'EUR' | 'INR';

/** Development only (`?sampleCurrency=eur|inr|usd`): sample prices in another
 * storefront's currency, written the way that store writes them, at the
 * prices App Store Connect has for Germany and India (Nov 28, 2026). */
export function setSampleCurrency(code: string): void {
  if (!__DEV__) return;
  const upper = code.toUpperCase();
  if (upper === 'EUR' || upper === 'INR') kv.set(CURRENCY_KEY, upper);
  else kv.remove(CURRENCY_KEY);
}

function currency(): SampleCurrency {
  const code = __DEV__ ? kv.getString(CURRENCY_KEY) : undefined;
  return code === 'EUR' || code === 'INR' ? code : 'USD';
}

/** The US price's counterpart in the sample currency: App Store Connect's own
 * figure where there is one, else a rough conversion. */
const LOCAL: Readonly<Record<'EUR' | 'INR', Readonly<Record<string, number>>>> = {
  EUR: { '49.99': 59.99, '59.99': 59.99, '9.99': 9.99, '14.99': 14.99, '4.99': 5.99, '29.99': 34.99, '99.99': 109.99, '39.99': 44.99, '24.99': 27.99 },
  INR: { '49.99': 4999, '59.99': 4999, '9.99': 999, '14.99': 1499, '4.99': 499, '29.99': 2999, '99.99': 9999, '39.99': 3999, '24.99': 2499 },
};

function local(usdAmount: number): number {
  const code = currency();
  if (code === 'USD') return usdAmount;
  return LOCAL[code][usdAmount.toFixed(2)] ?? (code === 'EUR' ? usdAmount : Math.round(usdAmount * 100) - 1);
}

let sheetCloses = false;

/** Development only (`?samplePrices=cancel`): a sample purchase answers as
 * the store's sheet closed without buying, so what follows that can be seen
 * on a simulator. Until the app restarts or the link is sent again. */
export function setSampleSheetCloses(on: boolean): void {
  sheetCloses = __DEV__ && on;
}

export function sampleSheetCloses(): boolean {
  return sheetCloses;
}

/** Whether a plan came from here rather than from a store. */
export function isSamplePlan(plan: Plan): boolean {
  return plan.token.startsWith(TOKEN);
}

/** An amount as that storefront writes it: "$9.99", "9,99 €", "₹999.00". */
function usd(amount: number): string {
  const code = currency();
  if (code === 'EUR') return `${amount.toFixed(2).replace('.', ',')}\u00a0€`;
  if (code === 'INR') return `₹${amount.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`;
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
  pass: null,
};

/** How many months and weeks one billing period holds. Nothing for a
 * one-time purchase: the store divides no price it bills once. */
const PARTS: Readonly<Record<PlanPeriod, { months: number; weeks: number } | null>> = {
  annual: { months: 12, weeks: 52 },
  monthly: { months: 1, weeks: 52 / 12 },
  weekly: { months: 12 / 52, weeks: 1 },
  lifetime: null,
  pass: null,
};

/** The pass products of this platform: the store's own ids, as the samples
 * stand in for them. */
const PASS_IDS =
  Platform.OS === 'android'
    ? { full: PASS_PRODUCTS.android, offer: PASS_PRODUCTS.androidOffer }
    : { full: PASS_PRODUCTS.ios, offer: PASS_PRODUCTS.iosOffer };

function plan(offering: string, period: PlanPeriod, id: string, usdPrice: number, intro: IntroOffer | null = null): Plan {
  const price = local(usdPrice);
  const display = usd(price);
  const parts = PARTS[period];
  return {
    token: `${TOKEN}${offering}:${period}`,
    period,
    product: { id, price, currencyCode: currency(), display },
    priceString: display,
    pricePerMonthString: parts == null ? null : per(price, parts.months),
    pricePerWeekString: parts == null ? null : per(price, parts.weeks),
    billingPeriod: BILLING[period],
    isLifetime: period === 'lifetime',
    isPass: period === 'pass',
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
        annual: plan(identifier, 'annual', PRODUCTS.annual, nextLineup() ? 49.99 : 59.99),
        monthly: nextLineup()
          ? plan(identifier, 'monthly', PRODUCTS.monthly, 9.99, {
              kind: 'pay-up-front',
              price: local(4.99),
              priceString: usd(local(4.99)),
              period: { unit: 'month', count: 1 },
            })
          : plan(identifier, 'monthly', PRODUCTS.monthly, 14.99),
        weekly: null,
        lifetime: plan(identifier, 'lifetime', PRODUCTS.lifetime, 99.99),
        pass: null,
      };
    case OFFERINGS.trial:
      return {
        identifier,
        annual: plan(identifier, 'annual', PRODUCTS.annualTrial, nextLineup() ? 49.99 : 59.99, {
          kind: 'free-trial',
          period: { unit: 'week', count: 1 },
        }),
        monthly:
          __DEV__ && kv.getBoolean(MONTHLY_TRIAL_KEY) === true
            ? plan(identifier, 'monthly', PRODUCTS.monthlyTrial, 9.99, { kind: 'free-trial', period: { unit: 'week', count: 1 } })
            : null,
        weekly: null,
        lifetime: null,
        pass: null,
      };
    case OFFERINGS.offer:
      return {
        identifier,
        annual: plan(identifier, 'annual', PRODUCTS.annualOffer, nextLineup() ? 49.99 : 59.99, {
          kind: 'pay-up-front',
          price: local(29.99),
          priceString: usd(local(29.99)),
          period: { unit: 'year', count: 1 },
        }),
        monthly: null,
        weekly: null,
        lifetime: plan(identifier, 'lifetime', PRODUCTS.lifetimeOffer, 59.99),
        pass: plan(identifier, 'pass', PASS_IDS.full, 39.99),
      };
    case OFFERINGS.retentionBudget:
      return {
        identifier,
        annual: null,
        monthly: null,
        weekly: null,
        lifetime: null,
        pass: plan(identifier, 'pass', PASS_IDS.offer, 24.99),
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
  freeMonth: RetentionOffer | null;
  /** The budget answer's 3-month pass, at the retention price. */
  pass: Plan | null;
};

/**
 * Development only: a pretend subscription and the store's answers for it,
 * for the cancel flow's preview on a simulator, which holds no subscription
 * and can sign no promotional offer (`walkito.dev://?previewCancel`, and
 * `=monthly`, `=budget`). Shaped as the store's answers will be, with the
 * products' US prices: the 3-month pass at its retention price for the
 * budget, and a free month for a break. On Android, as there, no promotional
 * offers: the break is Play's pause.
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
  return {
    subscription,
    freeMonth: ios ? sampleOffer(RETENTION_OFFERS.freeMonth, held.product.id, price, 0, { unit: 'month', count: 1 }) : null,
    pass: sampleOffering(OFFERINGS.retentionBudget)?.pass ?? null,
  };
}
