import { samePeriod, type Plan, type PlanPeriod, type StorePeriod } from '@/entities/purchase';
import type { Translate } from '@/shared/lib/i18n';

/**
 * What the plans step says about each plan, from the store's own figures.
 *
 * Pure, and kept out of the screen, because these are the claims a reviewer
 * and a customer can both check: every amount is a string the store formatted
 * (`priceString`, `pricePerMonthString`, an introductory offer's own price),
 * and trial or "first year" wording appears only on a plan whose store entry
 * actually carries that offer for this customer (`plan.intro`).
 *
 * The billed amount is always the figure on the right, the largest one on the
 * card: App Review Guideline 3.1.2 wants the amount charged to be the most
 * prominent price on a subscription screen, so a per-month figure only ever
 * appears in the smaller line under the title.
 */

/** The extra plans "Show all plans" opens, in this order, under the lead one.
 * Weekly is only in Android's offerings, until its new products exist. */
export const EXTRA_PLANS: readonly PlanPeriod[] = ['monthly', 'weekly', 'lifetime'];

/** A plan as one card says it. */
export type PlanCopy = {
  title: string;
  /** The line under the title: what the price means. */
  note: string | null;
  /** The amount billed, the store's string. Null until the store answers. */
  price: string | null;
  /** Under the price: what it is for ("per year", "first year", "one time"). */
  caption: string;
};

/** The button and the line under it, for the plan that is chosen. */
export type CtaCopy = {
  label: string;
  /** Under the button: what is charged, when it renews and where to cancel;
   * or that a lifetime plan is one payment. */
  terms: string | null;
};

/** A period in words, with its count: "1 week", "7 days". */
export function periodText(period: StorePeriod, t: Translate): string {
  const { count } = period;
  switch (period.unit) {
    case 'day':
      return t('offer.plans.days', { count });
    case 'week':
      return t('offer.plans.weeks', { count });
    case 'month':
      return t('offer.plans.months', { count });
    case 'year':
      return t('offer.plans.years', { count });
  }
}

/**
 * The introductory offer the card and the button speak of, if it is one they
 * have words for: a free trial, or the first year paid up front, on the
 * annual plan. "First year" only when the offer covers exactly one billing
 * period, the same test `firstCharge` uses to charge it.
 */
function offerOn(kind: PlanPeriod, plan: Plan | null) {
  const intro = plan?.intro ?? null;
  if (kind !== 'annual' || plan == null || intro == null) return null;
  if (intro.kind === 'free-trial') return intro;
  if (intro.kind === 'pay-up-front' && plan.billingPeriod != null && samePeriod(intro.period, plan.billingPeriod)) {
    return intro;
  }
  return null;
}

export function describePlan(kind: PlanPeriod, plan: Plan | null, t: Translate): PlanCopy {
  const price = plan?.priceString ?? null;
  switch (kind) {
    case 'annual': {
      const title = t('offer.plans.yearly');
      const offer = offerOn(kind, plan);
      if (plan != null && offer?.kind === 'pay-up-front') {
        return {
          title,
          note: t('offer.plans.upfrontNote', { price: plan.priceString }),
          price: offer.priceString,
          caption: t('offer.plans.firstYear'),
        };
      }
      if (plan != null && offer?.kind === 'free-trial') {
        return {
          title,
          note: t('offer.plans.trialNote', { period: periodText(offer.period, t), price: plan.priceString }),
          price,
          caption: t('offer.plans.perYear'),
        };
      }
      const perMonth = plan?.pricePerMonthString ?? null;
      return {
        title,
        note: perMonth != null ? t('offer.plans.yearlyNote', { perMonth }) : null,
        price,
        caption: t('offer.plans.perYear'),
      };
    }
    case 'monthly':
      return { title: t('offer.plans.monthly'), note: t('offer.plans.monthlyNote'), price, caption: t('offer.plans.perMonth') };
    case 'weekly':
      return { title: t('offer.weeklyTitle'), note: t('offer.plans.weeklyNote'), price, caption: t('offer.plans.perWeek') };
    case 'lifetime':
      return { title: t('offer.plans.lifetime'), note: t('offer.plans.lifetimeNote'), price, caption: t('offer.plans.once') };
  }
}

/**
 * The button's words and the line under it.
 *
 * "Free" and "no payment now" only when the chosen plan carries a free trial
 * this customer can have. A subscription's line names the amount it renews
 * at and where to cancel (two whole sentences, side by side); a lifetime
 * plan's says it is one payment.
 */
export function describeCta(kind: PlanPeriod, plan: Plan | null, t: Translate, android: boolean): CtaCopy {
  if (kind === 'lifetime') return { label: t('offer.plans.ctaLifetime'), terms: t('offer.plans.oneTime') };
  const cancel = android ? t('offer.plans.cancelAndroid') : t('offer.plans.cancel');
  if (plan == null) return { label: t('offer.continue'), terms: null };
  const price = plan.priceString;
  const offer = offerOn(kind, plan);
  if (offer?.kind === 'free-trial') {
    return {
      label: t('offer.plans.ctaTrial'),
      terms: `${t('offer.plans.renewsTrial', { period: periodText(offer.period, t), price })} ${cancel}`,
    };
  }
  if (offer?.kind === 'pay-up-front') {
    return {
      label: t('offer.continue'),
      terms: `${t('offer.plans.renewsUpfront', { intro: offer.priceString, price })} ${cancel}`,
    };
  }
  const renews =
    kind === 'annual'
      ? t('offer.plans.renewsYearly', { price })
      : kind === 'monthly'
        ? t('offer.plans.renewsMonthly', { price })
        : t('offer.plans.renewsWeekly', { price });
  return { label: t('offer.continue'), terms: `${renews} ${cancel}` };
}

/** A run of the headline: the catalogue marks the one word drawn in the
 * brand colour with square brackets, "Your feet, [stronger] every day", so
 * each language puts it round whichever word carries the sentence there. */
export type HeadlineRun = { text: string; lit: boolean };

export function splitHighlight(text: string): HeadlineRun[] {
  const runs: HeadlineRun[] = [];
  const marked = /\[([^\]]+)\]/g;
  let last = 0;
  for (let match = marked.exec(text); match != null; match = marked.exec(text)) {
    if (match.index > last) runs.push({ text: text.slice(last, match.index), lit: false });
    runs.push({ text: match[1] ?? '', lit: true });
    last = match.index + match[0].length;
  }
  if (last < text.length) runs.push({ text: text.slice(last), lit: false });
  return runs;
}
