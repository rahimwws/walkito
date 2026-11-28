import { samePeriod, type PaywallPeriod, type Plan, type StorePeriod } from '@/entities/purchase';
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
 * card: Apple's subscription rules want "the amount that will be billed" to be
 * the most prominent pricing element, with a calculated figure (the year over
 * a month) in a subordinate position and size. So the yearly card's "about
 * $4.16 a month" is the line under the title, never the big figure.
 */

/** A plan as one card says it. */
export type PlanCopy = {
  title: string;
  /** The line under the title: what the price means. */
  note: string | null;
  /** The amount billed, the store's string. Null until the store answers. */
  price: string | null;
  /** Under the price: what it is for ("per year", "first year", "one time"). */
  caption: string;
  /** The year over a month, "About $4.16 a month": the annual only, smaller
   * than the billed price. */
  perMonth?: string | null;
  /** The pill on the card: the free days, or what the year saves against
   * the monthly. */
  badge?: string | null;
};

/** The button and the line under it, for the plan that is chosen. */
export type CtaCopy = {
  label: string;
  /** Under the button: what is charged, when it renews and where to cancel;
   * or that a lifetime plan is one payment. */
  terms: string | null;
  /** The chosen plan starts with a free trial: nothing is charged today, and
   * the step says so over the button. */
  free?: boolean;
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
 * have words for: on the annual, a free trial or the first year paid up
 * front; on the monthly, the first month at a lower price ("pay up front" or
 * "pay as you go" for one month, which the store reports the same way). A
 * paid one only when it covers exactly one billing period, the same test
 * `firstCharge` uses to charge it. `plan.intro` is set only when the store
 * says this customer is eligible (RevenueCat's
 * `checkTrialOrIntroductoryPriceEligibility`), so nothing here offers what
 * Apple's sheet would not give.
 */
function offerOn(kind: PaywallPeriod, plan: Plan | null) {
  const intro = plan?.intro ?? null;
  if (plan == null || intro == null) return null;
  const onePeriod =
    intro.kind === 'pay-up-front' && plan.billingPeriod != null && samePeriod(intro.period, plan.billingPeriod);
  if (kind === 'annual') {
    if (intro.kind === 'free-trial') return intro;
    return onePeriod ? intro : null;
  }
  if (kind === 'monthly') {
    if (intro.kind === 'free-trial') return intro;
    return onePeriod ? intro : null;
  }
  return null;
}

/**
 * Another amount, written the way the store wrote a price: the same symbol in
 * the same place, the same decimal mark and grouping, the same number of
 * decimals, cut down rather than rounded. "$59.99" gives "$4.99" and "$0.00";
 * "1 299,00 ₽" gives "108,25 ₽"; "¥7,900" gives "¥658".
 *
 * From the store's own string rather than `Intl` with the device's locale:
 * the storefront and the phone's language often differ (a US App Store on a
 * phone set to Portuguese), and a figure under a store price must read like
 * it, not like "US$4,99" beside "$59.99".
 */
export function formatLike(storeString: string, storePrice: number, amount: number): string {
  const number = /\d(?:[\d.,'\s\u00a0\u202f]*\d)?/.exec(storeString);
  if (number == null) return amount.toFixed(2);
  const text = number[0];
  const last = Math.max(text.lastIndexOf('.'), text.lastIndexOf(','));
  const tail = last < 0 ? 0 : text.length - last - 1;
  // Three digits after the last mark are grouping on a whole price
  // ("7,900"), decimals otherwise ("1.234" dinars).
  const decimals = last >= 0 && (tail !== 3 || !Number.isInteger(storePrice)) ? tail : 0;
  const mark = decimals > 0 ? text[last] : '';
  const grouping = /[^\d]/.exec(decimals > 0 ? text.slice(0, last) : text)?.[0] ?? '';
  const scale = 10 ** decimals;
  // A hair of tolerance, so 49.99 / 12 * 100 landing at 416.58333 is not
  // taken for 416.57999 by the float under it.
  const cut = Math.floor(amount * scale + 1e-6);
  const whole = Math.floor(cut / scale).toString();
  const grouped = grouping === '' ? whole : whole.replace(/\B(?=(\d{3})+(?!\d))/g, grouping);
  const fraction = decimals > 0 ? mark + (cut % scale).toString().padStart(decimals, '0') : '';
  return storeString.slice(0, number.index) + grouped + fraction + storeString.slice(number.index + text.length);
}

/**
 * The year over twelve, cut down to the currency's smallest unit rather than
 * rounded: "about $4.16" for $49.99 a year ($4.1658), never a figure that
 * would add up to more than the year costs. Written like the store's price.
 */
export function perMonthOf(plan: Plan): string {
  return formatLike(plan.priceString, plan.product.price, plan.product.price / 12);
}

/** Whether the monthly plan opens with a lower first month for this customer. */
export function hasIntroMonth(plan: Plan | null): boolean {
  return offerOn('monthly', plan)?.kind === 'pay-up-front';
}

const DAY_MS = 86_400_000;

/** A store period after `from`, on the calendar: a month is the same day
 * next month, as the store bills it, not thirty days. */
export function afterPeriod(from: number, period: StorePeriod): number {
  if (period.unit === 'day') return from + period.count * DAY_MS;
  if (period.unit === 'week') return from + period.count * 7 * DAY_MS;
  const date = new Date(from);
  if (period.unit === 'month') date.setMonth(date.getMonth() + period.count);
  else date.setFullYear(date.getFullYear() + period.count);
  return date.getTime();
}

/** One stop on the chosen plan's timeline: when, and what happens. */
export type ChargeStop = { at: number; text: string };

/**
 * The chosen plan's first charges with their dates, for the rail under the
 * cards: a free trial's today, reminder and first payment (the reminder only
 * when the trial is longer than it, `reminderDays` before the end, which is
 * when `remindBeforeTrialEnds` lays it); a lower first period's today and
 * the regular price after it. Null for a plain price or a one-time payment,
 * which have nothing to lay out. The first stop is always today.
 */
export function chargeTimeline(
  kind: PaywallPeriod,
  plan: Plan | null,
  now: number,
  reminderDays: number,
  t: Translate,
): ChargeStop[] | null {
  if (plan == null) return null;
  const offer = offerOn(kind, plan);
  if (offer?.kind === 'free-trial') {
    const days = freeDaysOf(kind, plan);
    if (days == null || days <= reminderDays) return null;
    return [
      { at: now, text: t('offer.timeline.todayFree') },
      { at: now + (days - reminderDays) * DAY_MS, text: t('offer.timeline.reminder') },
      { at: now + days * DAY_MS, text: t('offer.timeline.charge', { price: plan.priceString }) },
    ];
  }
  if (offer?.kind === 'pay-up-front') {
    const yearly = kind === 'annual';
    return [
      {
        at: now,
        text: t(yearly ? 'offer.timeline.todayIntroYear' : 'offer.timeline.todayIntroMonth', { intro: offer.priceString }),
      },
      {
        at: afterPeriod(now, offer.period),
        text: t(yearly ? 'offer.timeline.renewYear' : 'offer.timeline.renewMonth', { price: plan.priceString }),
      },
    ];
  }
  return null;
}

/**
 * The line over the button: what the store's own sheet is about to show, in
 * the same terms. The price it will ask for, whether it renews and how
 * often, and the day of the first charge when that is not today. Apple's
 * sheet leads with the renewing price; ours says it first, so nothing on the
 * sheet is a surprise. Null until the store has answered.
 */
export function sheetLine(
  kind: PaywallPeriod,
  plan: Plan | null,
  now: number,
  t: Translate,
  store: string,
  date: (at: number) => string,
): string | null {
  if (plan == null) return null;
  const price = plan.priceString;
  if (kind === 'lifetime') return t('offer.sheet.once', { store, price });
  const offer = offerOn(kind, plan);
  if (offer?.kind === 'free-trial') {
    const period = periodText(offer.period, t);
    const first = date(afterPeriod(now, offer.period));
    return t(kind === 'monthly' ? 'offer.sheet.trialMonth' : 'offer.sheet.trialYear', { store, period, price, date: first });
  }
  if (offer?.kind === 'pay-up-front') {
    const first = date(afterPeriod(now, offer.period));
    return t(kind === 'monthly' ? 'offer.sheet.introMonth' : 'offer.sheet.introYear', {
      store,
      intro: offer.priceString,
      price,
      date: first,
    });
  }
  if (kind === 'monthly') return t('offer.sheet.month', { store, price });
  if (kind === 'weekly') return t('offer.sheet.week', { store, price });
  return t('offer.sheet.year', { store, price });
}

/**
 * What the yearly plan's first payment saves against twelve months of the
 * monthly at its regular price, as a whole percentage cut down, or null when
 * it saves nothing or the two are not in the same currency. Both figures are
 * the store's.
 */
export function yearSavingPercent(annual: Plan | null, monthly: Plan | null): number | null {
  if (annual == null || monthly == null) return null;
  if (annual.product.currencyCode !== monthly.product.currencyCode) return null;
  const year = monthly.product.price * 12;
  if (!(year > 0)) return null;
  const percent = Math.floor((1 - firstChargeOf('annual', annual) / year) * 100);
  return percent > 0 ? percent : null;
}

/** What the first payment of a plan is, in the store's currency: nothing
 * counts for a free trial here, since the plan bills its price once it ends. */
function firstChargeOf(kind: PaywallPeriod, plan: Plan): number {
  const offer = offerOn(kind, plan);
  return offer?.kind === 'pay-up-front' ? offer.price : plan.product.price;
}

/** The free days of a plan's trial, when it is counted in days or weeks. */
function freeDaysOf(kind: PaywallPeriod, plan: Plan | null): number | null {
  const offer = offerOn(kind, plan);
  if (offer?.kind !== 'free-trial') return null;
  if (offer.period.unit === 'day') return offer.period.count;
  if (offer.period.unit === 'week') return offer.period.count * 7;
  return null;
}

/**
 * One card's words. `monthly` is the monthly plan beside the yearly, for the
 * saving on the yearly's pill; without it there is no pill on the yearly.
 */
export function describePlan(kind: PaywallPeriod, plan: Plan | null, t: Translate, monthly: Plan | null = null): PlanCopy {
  const price = plan?.priceString ?? null;
  switch (kind) {
    case 'annual': {
      const title = t('offer.plans.yearly');
      const offer = offerOn(kind, plan);
      const saving = yearSavingPercent(plan, monthly);
      if (plan != null && offer?.kind === 'pay-up-front') {
        return {
          title,
          note: t('offer.plans.upfrontNote', { price: plan.priceString }),
          price: offer.priceString,
          caption: t('offer.plans.firstYear'),
          perMonth: t('offer.plans.aboutPerMonthFirstYear', {
            perMonth: formatLike(offer.priceString, offer.price, offer.price / 12),
          }),
          badge: saving != null ? t('offer.plans.save', { percent: saving }) : null,
        };
      }
      const badge = saving != null ? t('offer.plans.save', { percent: saving }) : null;
      if (plan != null && offer?.kind === 'free-trial') {
        return {
          title,
          note: t('offer.plans.trialNote', { period: periodText(offer.period, t), price: plan.priceString }),
          price,
          caption: t('offer.plans.perYear'),
          perMonth: t('offer.plans.aboutPerMonth', { perMonth: perMonthOf(plan) }),
          badge,
        };
      }
      return {
        title,
        note: null,
        price,
        caption: t('offer.plans.perYear'),
        perMonth: plan != null ? t('offer.plans.aboutPerMonth', { perMonth: perMonthOf(plan) }) : null,
        badge,
      };
    }
    case 'monthly': {
      const offer = offerOn(kind, plan);
      const free = freeDaysOf(kind, plan);
      if (plan != null && offer?.kind === 'free-trial') {
        return {
          title: t('offer.plans.monthly'),
          note: t('offer.plans.trialNoteMonthly', { period: periodText(offer.period, t), price: plan.priceString }),
          price,
          caption: t('offer.plans.perMonth'),
          badge: free != null ? t('offer.plans.freeDays', { count: free }) : null,
        };
      }
      if (plan != null && offer?.kind === 'pay-up-front') {
        return {
          title: t('offer.plans.monthly'),
          note: t('offer.plans.introMonthNote', { intro: offer.priceString, price: plan.priceString }),
          price: offer.priceString,
          caption: t('offer.plans.firstMonth'),
        };
      }
      return { title: t('offer.plans.monthly'), note: t('offer.plans.monthlyNote'), price, caption: t('offer.plans.perMonth') };
    }
    case 'weekly':
      return { title: t('offer.weeklyTitle'), note: t('offer.plans.weeklyNote'), price, caption: t('offer.plans.perWeek') };
    case 'lifetime':
      return { title: t('offer.plans.lifetime'), note: t('offer.plans.payOnce'), price, caption: t('offer.plans.once') };
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
export function describeCta(kind: PaywallPeriod, plan: Plan | null, t: Translate, android: boolean): CtaCopy {
  if (kind === 'lifetime') return { label: t('offer.continue'), terms: t('offer.plans.oneTime') };
  const cancel = android ? t('offer.plans.cancelAndroid') : t('offer.plans.cancel');
  if (plan == null) return { label: t('offer.continue'), terms: null };
  const price = plan.priceString;
  const offer = offerOn(kind, plan);
  if (offer?.kind === 'free-trial') {
    const week = (offer.period.unit === 'week' && offer.period.count === 1) || (offer.period.unit === 'day' && offer.period.count === 7);
    const renews = kind === 'monthly' ? 'offer.plans.renewsTrialMonthly' : 'offer.plans.renewsTrial';
    return {
      label: t(week ? 'offer.plans.ctaTrialWeek' : 'offer.plans.ctaTrial'),
      terms: `${t(renews, { period: periodText(offer.period, t), price })} ${cancel}`,
      free: true,
    };
  }
  if (offer?.kind === 'pay-up-front') {
    const renews = kind === 'monthly' ? 'offer.plans.renewsIntroMonth' : 'offer.plans.renewsUpfront';
    return {
      label: t('offer.continue'),
      terms: `${t(renews, { intro: offer.priceString, price })} ${cancel}`,
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
