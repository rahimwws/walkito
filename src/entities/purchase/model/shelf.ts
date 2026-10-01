import { OFFERINGS, type Offering, type Plan, type PlanPeriod } from './purchase';
import { purchases } from './store';

/**
 * What a selling screen has on offer: the offering it sells from, and the
 * standard one it measures a discount against.
 *
 * Shared by the two screens that sell — the paywall and the expiry screen — so
 * both fetch, fall back and pick a plan the same way.
 */
export type Shelf = {
  /** The offering being sold. The standard one when the named offering is
   * missing, so a dashboard without `offer` sells at the ordinary price rather
   * than advertising a discount the store will refuse. */
  readonly offering: Offering | null;
  /** The standard offering, for the struck-through price. */
  readonly standard: Offering | null;
};

/**
 * Both offerings, from the store.
 *
 * Rejects when the store could not be asked (see `offering` on the contract),
 * so the caller can tell "try again" from "the dashboard has no such package".
 * Resolves to two nulls when there is no store at all.
 */
export async function fetchShelf(identifier: string): Promise<Shelf> {
  const [earned, full] = await Promise.all([
    purchases.offering(identifier),
    identifier === OFFERINGS.standard ? null : purchases.offering(OFFERINGS.standard),
  ]);
  return { offering: earned ?? full, standard: full ?? earned };
}

/**
 * One plan off the shelf.
 *
 * The weekly plan is always sold at its ordinary price. The `offer` offering
 * may carry one too; when it does not, the standard offering's is the same
 * product.
 */
export function planOn(shelf: Shelf, period: PlanPeriod): Plan | null {
  if (period === 'annual') return shelf.offering?.annual ?? null;
  return shelf.offering?.weekly ?? shelf.standard?.weekly ?? null;
}
