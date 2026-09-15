/**
 * Prices, in the currency the store will actually charge.
 *
 * The paywall wrote `$` as a literal in four places. That is correct for one
 * storefront and wrong for every other — a euro-zone user seeing `$6.75` is
 * being quoted a price they will not be charged, which is both a trust problem
 * and a review problem.
 *
 * `Intl.NumberFormat` is in Hermes with full ICU on both platforms, so the
 * symbol, its position, the decimal mark and the digit grouping all come from
 * the locale rather than from a table maintained here — `1 234,56 €` in France
 * and `€1,234.56` in Ireland are the same call.
 */

/**
 * What to format with until a store says otherwise.
 *
 * Explicitly named rather than defaulted silently: every price on the paywall
 * is a hard-coded figure with no product behind it, and this constant is the
 * marker for that. When `purchases` is configured, the currency comes from the
 * product and this is never read.
 */
export const PLACEHOLDER_CURRENCY = 'USD';

/**
 * A price, formatted for the device.
 *
 * Falls back to the plain number if the runtime rejects the currency code —
 * a malformed code from a store response should cost a symbol, not the screen.
 */
export function formatPrice(amount: number, currencyCode = PLACEHOLDER_CURRENCY): string {
  try {
    return new Intl.NumberFormat(undefined, {
      style: 'currency',
      currency: currencyCode,
    }).format(amount);
  } catch {
    return amount.toFixed(2);
  }
}
