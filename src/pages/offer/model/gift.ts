import type { Offering, Plan } from '@/entities/purchase';

/**
 * The exit gift (the web funnel's L): once, when she closes the store's own
 * payment sheet without buying, the first year of the annual for less, then
 * the usual "What stopped you?".
 *
 * Pure, so the gate can be tested: what is kept on the phone is
 * `gift-store.ts`, the screen is `ui/exit-gift.tsx`.
 */

/** The product the gift sells: the annual with its first year paid up front
 * ($29.99, then $49.99 a year, in App Store Connect). */
export const GIFT_PRODUCT = 'walkito_annual_offer';

/**
 * The gift's plan in the `offer` offering, or null: the store has no such
 * product there, or this customer cannot have its introductory price (the
 * adapter sets `intro` only where StoreKit says she is eligible, so a null
 * intro is "not eligible" or "unknown", and neither is offered).
 */
export function giftPlan(offering: Offering | null): Plan | null {
  const plan = offering?.annual ?? null;
  if (plan == null || plan.product.id !== GIFT_PRODUCT) return null;
  const intro = plan.intro;
  return intro?.kind === 'pay-up-front' && intro.period.unit === 'year' && intro.period.count === 1 ? plan : null;
}

/**
 * Whether the gift opens now. Only after the payment sheet was closed
 * (`userCancelled`), never after "Not now" (nothing new or cheaper follows
 * it, guideline 5.6); only once on this phone; only with the plan loaded and
 * the intro eligible; never on the comeback view, which sells that price
 * already.
 */
export function giftOpens(input: { cancelled: boolean; seen: boolean; plan: Plan | null; comeback: boolean }): boolean {
  return input.cancelled && !input.seen && !input.comeback && input.plan != null;
}
