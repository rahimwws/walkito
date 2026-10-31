import { OFFERINGS, type Offering, type Plan, type PlanPeriod } from './purchase';
import { purchases } from './store';

/**
 * What a selling screen has on offer: the offering it sells from, and the
 * standard one it measures a discount against.
 *
 * Shared by the screens that sell — the paywall, the Home offer and the expiry
 * screen — so all of them fetch, fall back and pick a plan the same way.
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
 * The annual plan only ever comes from the offering being sold: its price is
 * what the offering is for (standard, trial or comeback). The others fall back
 * to the standard offering's, which is the same product at its ordinary price:
 * the trial offering carries only the annual, and a comeback offering without
 * a lifetime still sells the standard one.
 */
export function planOn(shelf: Shelf, period: PlanPeriod): Plan | null {
  if (period === 'annual') return shelf.offering?.annual ?? null;
  return shelf.offering?.[period] ?? shelf.standard?.[period] ?? null;
}
