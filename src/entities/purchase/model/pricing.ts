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
