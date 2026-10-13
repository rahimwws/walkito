import type { Plan, StorePeriod } from './purchase';

/**
 * The arithmetic behind every figure the paywall derives from a store price.
 *
 * Pure and in its own file so a test can reach it: the screens that use it load
 * React Native, and the claims made with these numbers — a saving, a discount —
 * are the ones a reviewer and a customer can both check.
 *
 * None of these is a price anybody is charged. They compare two store prices,
 * and each returns null (or zero) the moment the comparison stops holding, so a
 * badge disappears instead of turning into a claim that is no longer true.
 */

/** Weeks in a year, for comparing a yearly price with a weekly one. */
export const WEEKS_PER_YEAR = 52;

/**
 * An annual price as a weekly equivalent, for display under the billed amount.
 *
 * Always secondary on screen: Apple rejects a paywall whose computed per-period
 * figure is more prominent than the amount actually billed.
 */
export function perWeek(annualPrice: number): number {
  return annualPrice / WEEKS_PER_YEAR;
}

/**
 * How much cheaper a year is on the annual plan than on the weekly one, as a
 * whole percentage, or null when it is not cheaper.
 *
 * The same year bought two ways: one annual payment against fifty-two weekly
 * ones, both from the store. Null rather than zero or a negative number, so the
 * caller cannot print "Save 0%".
 */
export function annualSavingPercent(annualPrice: number, weeklyPrice: number): number | null {
  const yearOfWeeks = weeklyPrice * WEEKS_PER_YEAR;
  if (!(yearOfWeeks > 0) || !Number.isFinite(annualPrice) || annualPrice < 0) return null;
  const percent = Math.round((1 - annualPrice / yearOfWeeks) * 100);
  return percent > 0 ? percent : null;
}

/**
 * The discount one price gives against another, as a whole percentage, or null
 * when there is none.
 *
 * Used for the invite and comeback price against the standard annual one. Both
 * must be store prices: measuring a store price against a constant is how a
 * sheet ends up claiming a saving off a figure nobody charges.
 */
export function discountPercent(offerPrice: number, fullPrice: number): number | null {
  if (!(fullPrice > 0) || !Number.isFinite(offerPrice) || offerPrice < 0) return null;
  const percent = Math.round((1 - offerPrice / fullPrice) * 100);
  return percent > 0 ? percent : null;
}

/** Whether two store periods are the same length: 12 months is a year. */
export function samePeriod(a: StorePeriod, b: StorePeriod): boolean {
  const inMonths = (p: StorePeriod) => (p.unit === 'year' ? p.count * 12 : p.unit === 'month' ? p.count : null);
  const inDays = (p: StorePeriod) => (p.unit === 'week' ? p.count * 7 : p.unit === 'day' ? p.count : null);
  const ma = inMonths(a);
  const mb = inMonths(b);
  if (ma != null || mb != null) return ma === mb;
  return inDays(a) === inDays(b);
}

/**
 * The first payment for a plan, as the store will charge it.
 *
 * A pay-up-front introductory offer that covers exactly one billing period
 * replaces the first charge: the comeback annual is its intro price for the
 * first year, then the regular price. Everything else is charged at the
 * regular price — after a free trial ends, for a plan that has one. The
 * display string is always the store's own.
 */
export function firstCharge(plan: Plan): { price: number; display: string } {
  const intro = plan.intro;
  if (intro?.kind === 'pay-up-front' && plan.billingPeriod != null && samePeriod(intro.period, plan.billingPeriod)) {
    return { price: intro.price, display: intro.priceString };
  }
  return { price: plan.product.price, display: plan.priceString };
}

/**
 * What a plan's first payment saves against the same kind of plan at the
 * standard price, as a whole percentage, or null when it saves nothing.
 *
 * The comeback offers are measured this way: the annual's first year paid up
 * front against the standard annual, the cheaper lifetime against the standard
 * lifetime. Both prices are the store's; null when either is missing, when the
 * two plans are not the same kind, or when the store quotes them in different
 * currencies — so no badge can claim a saving off a figure nobody charges.
 */
export function firstChargeSavingPercent(plan: Plan | null, standard: Plan | null): number | null {
  if (plan == null || standard == null) return null;
  if (plan.period !== standard.period) return null;
  if (plan.product.currencyCode !== standard.product.currencyCode) return null;
  return discountPercent(firstCharge(plan).price, standard.product.price);
}
