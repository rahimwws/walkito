import type { Offering, Plan, useOfferStage } from '@/entities/purchase';

import { freeTrialOf, plansOf, type FreeTrial, type SlottedPlan } from './plan-terms';

/** The stage `entities/purchase` reports: trial, comeback or standard. */
export type OfferStage = ReturnType<typeof useOfferStage>;

/** The three offerings Home can sell from, as the store answered. */
export type OfferShelf = {
  readonly trial: Offering | null;
  readonly offer: Offering | null;
  readonly standard: Offering | null;
};

/**
 * What the overlay shows, decided from the stage and what the store holds.
 *
 * - `trial`: the one-time offer. Only for a plan whose product really has a
 *   free trial for this customer; otherwise nothing on screen may say "free".
 * - `comeback`: the lower prices, against a real deadline.
 * - `standard`: the ordinary plans, with no "limited" or "one-time" wording.
 *   What every stage falls back to when its own offering is missing: Android
 *   holds the first line-up until its own versions of the new products exist,
 *   and a screen promising a deal the store will not honour is worse than the
 *   ordinary price.
 */
export type OfferContent =
  | { readonly kind: 'trial'; readonly plan: Plan; readonly trial: FreeTrial }
  | {
      readonly kind: 'comeback';
      readonly plans: readonly SlottedPlan[];
      /** The standard prices, for each comeback plan's discount. */
      readonly standardAnnual: Plan | null;
      readonly standardLifetime: Plan | null;
      readonly endsAt: number;
    }
  | { readonly kind: 'standard'; readonly plans: readonly SlottedPlan[] };

/**
 * The ordinary plans in the order the switch shows them. The weekly plan only
 * where there are fewer than three others (Android's first line-up is annual
 * and weekly), so the switch never holds more than three.
 */
function standardPlans(standard: Offering | null): SlottedPlan[] {
  const main = plansOf(standard, ['annual', 'monthly', 'lifetime']);
  if (main.length >= 3) return main;
  return [...main, ...plansOf(standard, ['weekly'])].slice(0, 3);
}

export function contentFor(
  stage: OfferStage,
  shelf: OfferShelf,
  comebackEndsAt: number | null,
  now: number = Date.now(),
): OfferContent | null {
  if (stage === 'trial') {
    const plan = shelf.trial?.annual ?? null;
    const trial = plan != null ? freeTrialOf(plan) : null;
    if (plan != null && trial != null) return { kind: 'trial', plan, trial };
  }
  if (stage === 'comeback' && comebackEndsAt != null && comebackEndsAt > now) {
    const plans = plansOf(shelf.offer, ['annual', 'lifetime']);
    if (plans.length > 0) {
      return {
        kind: 'comeback',
        plans,
        standardAnnual: shelf.standard?.annual ?? null,
        standardLifetime: shelf.standard?.lifetime ?? null,
        endsAt: comebackEndsAt,
      };
    }
  }
  const plans = standardPlans(shelf.standard);
  return plans.length > 0 ? { kind: 'standard', plans } : null;
}
