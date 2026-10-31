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
 * - `comeback`: the lower prices, against a real deadline, and the 3-month
 *   pass beside them where a pass checkout is mounted (`sellsPass`): the
 *   limited offer. The review account's "Special offers" sheet shows the same
 *   cards with no deadline (`limitedContent`).
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
      /** The real deadline, or null where the cards are shown with none (the
       * review account's sheet): then there is no countdown. */
      readonly endsAt: number | null;
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

/**
 * The comeback's cards in the order the switch shows them: the year (chosen
 * first), lifetime, then the pass, where it is sold. Null when the offering
 * holds none of them.
 */
function comeback(
  shelf: Pick<OfferShelf, 'offer' | 'standard'>,
  endsAt: number | null,
  sellsPass: boolean,
): OfferContent | null {
  const plans = plansOf(shelf.offer, sellsPass ? ['annual', 'lifetime', 'pass'] : ['annual', 'lifetime']);
  // A pass on its own is no limited offer: the year or lifetime has to be there.
  if (!plans.some((p) => p.slot !== 'pass')) return null;
  return {
    kind: 'comeback',
    plans,
    standardAnnual: shelf.standard?.annual ?? null,
    standardLifetime: shelf.standard?.lifetime ?? null,
    endsAt,
  };
}

/**
 * What the offer screen shows for this stage. `sellsPass`: a pass checkout is
 * mounted beside the screen, so the comeback may carry the 3-month pass as
 * its third card; without one there is no way to buy it and it is left out.
 */
export function contentFor(
  stage: OfferStage,
  shelf: OfferShelf,
  comebackEndsAt: number | null,
  now: number = Date.now(),
  sellsPass: boolean = false,
): OfferContent | null {
  if (stage === 'trial') {
    const plan = shelf.trial?.annual ?? null;
    const trial = plan != null ? freeTrialOf(plan) : null;
    if (plan != null && trial != null) return { kind: 'trial', plan, trial };
  }
  if (stage === 'comeback' && comebackEndsAt != null && comebackEndsAt > now) {
    const limited = comeback(shelf, comebackEndsAt, sellsPass);
    if (limited != null) return limited;
  }
  return standardContent(shelf.standard);
}

/**
 * The limited offer's cards with no deadline: the review account's "Special
 * offers" sheet in Settings, outside the offer screen's stages. The standard
 * plans when the comeback's offering is missing.
 */
export function limitedContent(shelf: Pick<OfferShelf, 'offer' | 'standard'>, sellsPass: boolean): OfferContent | null {
  return comeback(shelf, null, sellsPass) ?? standardContent(shelf.standard);
}

/** The ordinary plans: the offer screen once the comeback is over, and the
 * plans Home offers somebody whose pass is ending. */
export function standardContent(standard: Offering | null): OfferContent | null {
  const plans = standardPlans(standard);
  return plans.length > 0 ? { kind: 'standard', plans } : null;
}
