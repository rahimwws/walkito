import { Platform } from 'react-native';

import type { Plan } from '@/entities/purchase';
import type { Translate } from '@/shared/lib/i18n';

import type { OfferContent } from './content';
import {
  amountOf,
  firstChargeOf,
  firstYearPerMonthOf,
  firstYearPriceOf,
  percentOff,
  perMonthOf,
  priceOf,
  savingAgainst,
  trialDays,
  type FreeTrial,
  type Slot,
  type SlottedPlan,
} from './plan-terms';

/**
 * Passed as `{price}` to a template the card draws with the figure set larger
 * (`PriceLine`). Private-use characters, so no language's words contain it.
 */
export const PRICE_SLOT = '\uE000price\uE000';

/** The card, in words: see `PlanCard`. */
export type CardWords = {
  kind: 'plan';
  title: string;
  priceTemplate: string;
  price: string;
  aside: string | null;
  note: string | null;
  badge: string | null;
};

/**
 * The comeback's card, in words: see `DealCard`. Every figure is the store's;
 * every claim stands on two store prices.
 *
 * The billed price is the pill, the most prominent price on the card; the
 * monthly figure worked out from it is only ever the small line at the
 * bottom (App Review Guideline 3.1.2 rejects the other way round).
 */
export type DealWords = {
  kind: 'deal';
  /** "50% off": the first payment against the same plan at the standard
   * price. Null when the store's figures give no discount, and with it every
   * line below that only a discount makes true. */
  off: string | null;
  /** The billed price with what it buys: "$29.99 first year", "$59.99 once". */
  pill: string;
  /** "Only this once", beside a real discount only. */
  promise: string | null;
  /** The standard price struck through, then the price paid, with a
   * discount only. `label` is the pair read out as a sentence, since a
   * strikethrough is not read aloud. */
  was: { from: string; to: string; label: string } | null;
  /** The smallest line: a month's share of the first year, or what lifetime
   * means. */
  caption: string | null;
};

export type TabWords = { key: Slot; title: string; caption: string };

/** Everything the overlay says for one content and one chosen plan. */
export type OfferView = {
  title: string;
  /** With `**…**` around the words set heavier. */
  body: string;
  /** The surprised one peeking over the trial's card, the one gripping the
   * comeback's card, or the crown and key beside the plans' title. */
  mascot: 'peek' | 'deal' | 'premium';
  /** The real deadline, for the comeback only. */
  endsAt: number | null;
  /** Null with a single plan: nothing to switch between. */
  tabs: TabWords[] | null;
  card: CardWords | DealWords;
  cta: string;
  /** What the button buys, and the trial it starts if any. */
  plan: Plan;
  trial: FreeTrial | null;
  /** The disclosure under the button, one whole sentence (or two) a line. */
  terms: string[];
};

/** The plan a screen opens on: the first it offers (the year, where there is one). */
export function firstSlot(content: OfferContent): Slot {
  if (content.kind === 'trial') return 'annual';
  return content.plans[0]?.slot ?? 'annual';
}

const CARD_TITLE = {
  annual: 'homeOffer.plan.yearly',
  monthly: 'homeOffer.plan.monthly',
  weekly: 'homeOffer.plan.weekly',
  lifetime: 'homeOffer.plan.lifetime',
} as const;

const TAB_TITLE = {
  annual: 'homeOffer.tab.year',
  monthly: 'homeOffer.tab.month',
  weekly: 'homeOffer.tab.week',
  lifetime: 'homeOffer.tab.lifetime',
} as const;

/** The billed price inside its period: "{price}/yr", "{price} once". */
function perPeriod(slot: Slot, price: string, t: Translate): string {
  switch (slot) {
    case 'annual':
      return t('homeOffer.price.perYear', { price });
    case 'monthly':
      return t('homeOffer.price.perMonth', { price });
    case 'weekly':
      return t('homeOffer.price.perWeek', { price });
    case 'lifetime':
      return t('homeOffer.price.once', { price });
  }
}

/** Where payment is charged and how renewal and cancelling work, per store. */
function renewal(t: Translate): string {
  return Platform.OS === 'android' ? t('offer.termsRenewalAndroid') : t('offer.termsRenewal');
}

/** The disclosure Apple asks for beside a plan, kept to the minimum: its
 * length and price, then one renewal line for a subscription (a lifetime
 * purchase renews nothing). What Plus includes is the screen above it. */
function termsFor({ slot, plan }: SlottedPlan, t: Translate): string[] {
  const price = priceOf(plan);
  switch (slot) {
    case 'annual': {
      const first = firstYearPriceOf(plan);
      return [
        first != null
          ? t('homeOffer.terms.introYear', { introPrice: first.display, price })
          : t('offer.termsAnnual', { price }),
        renewal(t),
      ];
    }
    case 'monthly':
      return [t('homeOffer.terms.monthly', { price }), renewal(t)];
    case 'weekly':
      return [t('offer.termsWeekly', { price }), renewal(t)];
    case 'lifetime':
      return [t('homeOffer.terms.lifetime', { price })];
  }
}

function trialBody(trial: FreeTrial, t: Translate): string {
  if (trial.unit === 'week' && trial.count === 1) return t('homeOffer.trial.bodyWeek');
  if (trial.unit === 'week') return t('homeOffer.trial.bodyWeeks', { count: trial.count });
  if (trial.unit === 'day') return t('homeOffer.trial.bodyDays', { count: trial.count });
  return t('homeOffer.trial.bodyMonths', { count: trial.count });
}

function trialBadge(trial: FreeTrial, t: Translate): string {
  if (trial.unit === 'week') return t('homeOffer.badge.freeWeeks', { count: trial.count });
  if (trial.unit === 'day') return t('homeOffer.badge.freeDays', { count: trial.count });
  return t('homeOffer.badge.freeMonths', { count: trial.count });
}

/** The one-time offer: the year, its first stretch free. */
function trialView(plan: Plan, trial: FreeTrial, t: Translate): OfferView {
  const price = priceOf(plan);
  const perMonth = perMonthOf(plan);
  const days = trialDays(trial);
  return {
    title: t('homeOffer.trial.title'),
    body: trialBody(trial, t),
    mascot: 'peek',
    endsAt: null,
    tabs: null,
    card: {
      kind: 'plan',
      title: t(CARD_TITLE.annual),
      priceTemplate: perPeriod('annual', PRICE_SLOT, t),
      price,
      aside: perMonth != null ? t('homeOffer.price.perMonth', { price: perMonth }) : null,
      note: null,
      badge: trialBadge(trial, t),
    },
    cta:
      days != null
        ? t('homeOffer.trial.ctaDays', { count: days })
        : t('homeOffer.trial.ctaMonths', { count: trial.count }),
    plan,
    trial,
    terms: [
      days != null
        ? t('homeOffer.terms.trialDays', { count: days, price })
        : t('homeOffer.terms.trialMonths', { count: trial.count, price }),
      Platform.OS === 'android' ? t('homeOffer.terms.trialCancelAndroid') : t('homeOffer.terms.trialCancel'),
    ],
  };
}

/**
 * The comeback card for one plan.
 *
 * Its discount is the first payment against the standard offering's own price
 * for the same thing: the year's first-year price against the standard year,
 * the cheaper lifetime against the standard lifetime (`savingAgainst`, the
 * paywall's rule). Without one, nothing on the card claims a deal: no
 * percentage, no struck price, no "only this once", only the price.
 */
function dealCard(
  { slot, plan }: SlottedPlan,
  standard: { annual: Plan | null; lifetime: Plan | null },
  t: Translate,
): DealWords {
  const lifetime = slot === 'lifetime';
  const regular = lifetime ? standard.lifetime : standard.annual;
  const percent = regular != null ? savingAgainst(plan, regular) : null;
  const paid = firstChargeOf(plan);
  const shared: Pick<DealWords, 'kind' | 'off' | 'promise' | 'was'> =
    percent != null && regular != null
      ? {
          kind: 'deal',
          off: t('homeOffer.card.off', { percent }),
          promise: t('homeOffer.card.onlyOnce'),
          was: {
            from: priceOf(regular),
            to: paid,
            label: t('homeOffer.card.wasNow', { was: priceOf(regular), now: paid }),
          },
        }
      : { kind: 'deal', off: null, promise: null, was: null };
  if (lifetime) {
    return { ...shared, pill: perPeriod('lifetime', paid, t), caption: t('homeOffer.card.lifetime') };
  }
  const first = firstYearPriceOf(plan);
  if (first != null) {
    const perMonth = firstYearPerMonthOf(plan);
    return {
      ...shared,
      pill: t('homeOffer.price.firstYear', { price: first.display }),
      caption: perMonth != null ? t('homeOffer.card.perMonthFirstYear', { price: perMonth }) : null,
    };
  }
  // A year with no first-year price: Android's first line-up sells the
  // comeback year as its own cheaper product, and a customer the store will
  // not give the intro to pays the plan's own price. Either way the price it
  // renews at is the price shown, every year.
  const perMonth = perMonthOf(plan);
  return {
    ...shared,
    pill: perPeriod('annual', paid, t),
    caption: perMonth != null ? t('homeOffer.card.perMonth', { price: perMonth }) : null,
  };
}

/** The ordinary card for one plan. The year's badge is its saving against
 * paying monthly (or weekly) for a year, both store prices. */
function standardCard({ slot, plan }: SlottedPlan, plans: readonly SlottedPlan[], t: Translate): CardWords {
  const price = priceOf(plan);
  let badge: string | null = null;
  let aside: string | null = null;
  let note: string | null = null;
  if (slot === 'annual') {
    const monthly = plans.find((p) => p.slot === 'monthly')?.plan;
    const weekly = plans.find((p) => p.slot === 'weekly')?.plan;
    const save =
      monthly != null
        ? percentOff(amountOf(plan), amountOf(monthly) * 12)
        : weekly != null
          ? percentOff(amountOf(plan), amountOf(weekly) * 52)
          : null;
    badge = save != null ? t('homeOffer.badge.save', { percent: save }) : null;
    const perMonth = perMonthOf(plan);
    aside = perMonth != null ? t('homeOffer.price.perMonth', { price: perMonth }) : null;
  }
  if (slot === 'lifetime') note = t('homeOffer.price.lifetimeNote');
  return {
    kind: 'plan',
    title: t(CARD_TITLE[slot]),
    priceTemplate: perPeriod(slot, PRICE_SLOT, t),
    price,
    aside,
    note,
    badge,
  };
}

/** What the overlay says, for this content with `selected` chosen. */
export function viewFor(content: OfferContent, selected: Slot, t: Translate): OfferView {
  if (content.kind === 'trial') return trialView(content.plan, content.trial, t);

  const chosen = content.plans.find((p) => p.slot === selected) ?? content.plans[0];

  if (content.kind === 'comeback') {
    const year = content.plans.some((p) => p.slot === 'annual');
    const lifetime = content.plans.some((p) => p.slot === 'lifetime');
    const standard = { annual: content.standardAnnual, lifetime: content.standardLifetime };
    return {
      title: t('homeOffer.comeback.title'),
      body:
        year && lifetime
          ? t('homeOffer.comeback.bodyBoth')
          : year
            ? t('homeOffer.comeback.bodyYear')
            : t('homeOffer.comeback.bodyLifetime'),
      mascot: 'deal',
      endsAt: content.endsAt,
      tabs:
        content.plans.length > 1
          ? content.plans.map((p) => {
              const first = p.slot === 'annual' ? firstYearPriceOf(p.plan) : null;
              return {
                key: p.slot,
                title: t(TAB_TITLE[p.slot]),
                caption:
                  first != null
                    ? t('homeOffer.price.firstYear', { price: first.display })
                    : perPeriod(p.slot, priceOf(p.plan), t),
              };
            })
          : null,
      card: dealCard(chosen, standard, t),
      cta: t('homeOffer.comeback.cta'),
      plan: chosen.plan,
      trial: null,
      terms: termsFor(chosen, t),
    };
  }

  return {
    title: t('homeOffer.standard.title'),
    body: t('homeOffer.standard.body'),
    mascot: 'premium',
    endsAt: null,
    tabs:
      content.plans.length > 1
        ? content.plans.map((p) => ({
            key: p.slot,
            title: t(TAB_TITLE[p.slot]),
            caption: perPeriod(p.slot, priceOf(p.plan), t),
          }))
        : null,
    card: standardCard(chosen, content.plans, t),
    cta: t('homeOffer.standard.cta'),
    plan: chosen.plan,
    trial: null,
    terms: termsFor(chosen, t),
  };
}
