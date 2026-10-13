import { firstCharge, firstChargeSavingPercent, type Offering, type Plan } from '@/entities/purchase';
import { formatPrice } from '@/shared/lib/money';

/**
 * What the offer over Home reads off a store plan, in one place.
 *
 * **The only file in this slice that touches `Plan`'s fields.** The store
 * contract (`entities/purchase`) gained the price strings and the
 * introductory offer for these screens; if a name there moves, this is the one
 * file to follow it. Everything else in the slice works on the shapes below.
 *
 * Nothing here invents a figure. A price is the store's own string; a
 * percentage compares two store amounts and is null the moment the comparison
 * stops holding; a free trial is only ever the product's own introductory
 * offer. The store is expected to report no intro for somebody who is not
 * eligible for it (a trial already used in the subscription group), so a
 * screen that reads one here may say "free".
 */

/** Which slot of an offering a plan was taken from. */
export type Slot = 'annual' | 'monthly' | 'weekly' | 'lifetime';

export type SlottedPlan = { readonly slot: Slot; readonly plan: Plan };

/** A free trial's length, in the unit the store sells it in. */
export type FreeTrial = { readonly unit: 'day' | 'week' | 'month'; readonly count: number };

/** A pay-up-front price for the first year, as the store reports it. */
export type FirstYearPrice = { readonly display: string; readonly amount: number };

type Unit = 'day' | 'week' | 'month' | 'year';

/** `day`, `DAY`, `days`: the store's unit, whatever case it arrives in. */
function unitOf(raw: unknown): Unit | null {
  const word = String(raw).toLowerCase().replace(/s$/, '');
  return word === 'day' || word === 'week' || word === 'month' || word === 'year' ? word : null;
}

/** The store's own billed price for one period: "$59.99". */
export function priceOf(plan: Plan): string {
  return plan.priceString;
}

/** The annual price as a monthly equivalent, as the store formats it, or null. */
export function perMonthOf(plan: Plan): string | null {
  return plan.pricePerMonthString ?? null;
}

/** The billed amount as a number, for a comparison between two store prices. */
export function amountOf(plan: Plan): number {
  return plan.product.price;
}

/** The product's free trial, or null when it has none (or this customer
 * cannot have it). A year-long "trial" is read as twelve months. */
export function freeTrialOf(plan: Plan): FreeTrial | null {
  const intro = plan.intro;
  if (intro == null || intro.kind !== 'free-trial') return null;
  const unit = unitOf(intro.period.unit);
  const count = Math.floor(Number(intro.period.count));
  if (unit == null || !(count > 0)) return null;
  return unit === 'year' ? { unit: 'month', count: count * 12 } : { unit, count };
}

/**
 * The first year's price, when the product has a pay-up-front introductory
 * offer for exactly one year. Anything else is not "the first year", and
 * null keeps a screen from saying so.
 */
export function firstYearPriceOf(plan: Plan): FirstYearPrice | null {
  const intro = plan.intro;
  if (intro == null || intro.kind !== 'pay-up-front') return null;
  const unit = unitOf(intro.period.unit);
  const count = Number(intro.period.count);
  const oneYear = (unit === 'year' && count === 1) || (unit === 'month' && count === 12);
  if (!oneYear) return null;
  return { display: intro.priceString, amount: intro.price };
}

/** What the first payment for a plan is, as the store will charge it: the
 * first year's pay-up-front price where it has one, else its own price. */
export function firstChargeOf(plan: Plan): string {
  return firstCharge(plan).display;
}

/**
 * How much the first payment for `plan` saves against `standard`, the same
 * kind of plan at the standard price, as a whole percentage; null when either
 * is missing, they are not the same kind, the store quotes them in different
 * currencies, or nothing is saved. The paywall's own rule
 * (`firstChargeSavingPercent`), so this screen and the paywall cannot claim
 * two different discounts for one price.
 */
export function savingAgainst(plan: Plan, standard: Plan | null): number | null {
  return firstChargeSavingPercent(plan, standard);
}

/** Digits after the decimal mark in a currency: 2 for dollars, 0 for yen. */
function minorDigitsOf(currencyCode: string): number {
  try {
    const digits = new Intl.NumberFormat(undefined, { style: 'currency', currency: currencyCode }).resolvedOptions()
      .maximumFractionDigits;
    return typeof digits === 'number' && digits >= 0 && digits <= 4 ? digits : 2;
  } catch {
    return 2;
  }
}

/**
 * The first year's pay-up-front price over twelve months, in the store's
 * currency, or null when the plan has no such price. Cut down to the
 * currency's smallest unit rather than rounded, the way the store divides a
 * price over a month (`pricePerMonthString`): "$2.49" for $29.99.
 *
 * Formatted here because the store gives no monthly figure for an intro
 * price. Always shown smaller than the billed amount it is worked out from
 * (App Review Guideline 3.1.2).
 */
export function firstYearPerMonthOf(plan: Plan): string | null {
  const first = firstYearPriceOf(plan);
  if (first == null || !(first.amount > 0)) return null;
  const unit = 10 ** minorDigitsOf(plan.product.currencyCode);
  // The nudge keeps a division that lands exactly on a cent from being cut a
  // cent short by floating point (0.36 / 12 * 100 is 2.9999…).
  const monthly = Math.floor((first.amount / 12) * unit + 1e-6) / unit;
  if (!(monthly > 0)) return null;
  // Written the way the store writes this plan's own price ("$29.99" gives
  // "$2.49"), not the phone's locale, which put "US$2,49" beside "$29.99".
  return (
    formatLike(first.display, monthly, minorDigitsOf(plan.product.currencyCode)) ??
    formatPrice(monthly, plan.product.currencyCode)
  );
}

/**
 * `amount` set in `template`'s own format: its symbol, its place for the
 * symbol, its decimal mark and its grouping, from a price the store already
 * formatted for this storefront. Null when `template` holds no number.
 */
export function formatLike(template: string, amount: number, digits: number): string | null {
  const match = template.match(/\d[\d\s.,\u00a0\u202f']*\d|\d/);
  if (match == null || match.index == null) return null;
  const number = match[0];
  const mark = digits > 0 ? number.charAt(number.length - digits - 1) : '';
  const decimal = mark === ',' || mark === '.' ? mark : '.';
  const whole = digits > 0 && (mark === ',' || mark === '.') ? number.slice(0, -(digits + 1)) : number;
  const group = whole.match(/[^\d]/)?.[0] ?? '';
  const [int, frac] = amount.toFixed(digits).split('.');
  const grouped = group !== '' ? int.replace(/\B(?=(\d{3})+(?!\d))/g, group) : int;
  const written = frac != null ? `${grouped}${decimal}${frac}` : grouped;
  return template.slice(0, match.index) + written + template.slice(match.index + number.length);
}

/** A trial measured in days, for "Try free for 7 days"; null for months, which
 * have no fixed number of days. */
export function trialDays(trial: FreeTrial): number | null {
  if (trial.unit === 'day') return trial.count;
  if (trial.unit === 'week') return trial.count * 7;
  return null;
}

/** When a trial started at `from` ends, by the calendar. */
export function trialEndsAt(trial: FreeTrial, from: number): number {
  const end = new Date(from);
  if (trial.unit === 'month') end.setMonth(end.getMonth() + trial.count);
  else end.setDate(end.getDate() + (trial.unit === 'week' ? trial.count * 7 : trial.count));
  return end.getTime();
}

/** The plans an offering holds, in the order a screen offers them. `slots`
 * picks and orders them; a missing package is simply not there. */
export function plansOf(offering: Offering | null, slots: readonly Slot[]): SlottedPlan[] {
  if (offering == null) return [];
  const out: SlottedPlan[] = [];
  for (const slot of slots) {
    const plan = offering[slot];
    if (plan != null) out.push({ slot, plan });
  }
  return out;
}

/**
 * How much cheaper one store amount is than another, as a whole percentage,
 * or null when it is not cheaper. The same rule as the paywall's
 * `discountPercent`, kept here so the badge on this screen and its comparison
 * cannot drift apart.
 */
export function percentOff(offer: number, full: number): number | null {
  if (!(full > 0) || !Number.isFinite(offer) || offer < 0) return null;
  const percent = Math.round((1 - offer / full) * 100);
  return percent > 0 ? percent : null;
}
