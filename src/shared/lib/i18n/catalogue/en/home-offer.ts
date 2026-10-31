/**
 * Home offer — what the offer screen offers somebody who skipped the paywall
 * with "Not now" (`features/home-offer`; the domain is named for where it
 * first stood, over Home): the one-time trial, the comeback against its
 * deadline, the ordinary plans after it, and the pushes around them. It is a
 * hard paywall, so nothing here may say or imply the app can be used without
 * Walkito Plus.
 *
 * **No price is written here.** Every figure arrives as `{price}` or
 * `{introPrice}`, the store's own string for this storefront; `{percent}`
 * compares two store prices; `{count}` is the trial length the product
 * really has. A claim here is only ever shown where the store backs it: the
 * trial lines only on a product with a free trial for this customer, the
 * comeback lines only while its deadline is ahead.
 *
 * **`**…**` marks the words set heavier** inside a sentence (the reference
 * sets "one-time offer" that way). Keep the markers around whichever words
 * carry the weight in your language; they never show.
 *
 * **"Walkito Plus" is the product's name** and stays as it is in every
 * language.
 */

import type { SourceEntry } from '../entry';

export const HOME_OFFER_EN = {
  // ── The one-time trial ───────────────────────────────────────────────────
  'homeOffer.trial.title': 'Hold up, this is a one-time offer',
  /** A one-week trial, the one sold today. */
  'homeOffer.trial.bodyWeek': '**Walkito Plus for a year**, and **the first week is free**.',
  /** Any other trial length, by its own unit. */
  'homeOffer.trial.bodyWeeks': {
    one: '**Walkito Plus for a year**, and **the first {count} week is free**.',
    other: '**Walkito Plus for a year**, and **the first {count} weeks are free**.',
  },
  'homeOffer.trial.bodyDays': {
    one: '**Walkito Plus for a year**, and **the first {count} day is free**.',
    other: '**Walkito Plus for a year**, and **the first {count} days are free**.',
  },
  'homeOffer.trial.bodyMonths': {
    one: '**Walkito Plus for a year**, and **the first {count} month is free**.',
    other: '**Walkito Plus for a year**, and **the first {count} months are free**.',
  },
  /** The button. A trial in weeks is counted in days: "Try free for 7 days". */
  'homeOffer.trial.ctaDays': { one: 'Try free for {count} day', other: 'Try free for {count} days' },
  'homeOffer.trial.ctaMonths': { one: 'Try free for {count} month', other: 'Try free for {count} months' },
  /** Under the button. A promise the app keeps with a local notification. */
  'homeOffer.trial.reminder': {
    one: 'We’ll remind you {count} day before your trial ends.',
    other: 'We’ll remind you {count} days before your trial ends.',
  },

  // ── The comeback ─────────────────────────────────────────────────────────
  'homeOffer.comeback.title': 'Limited offer',
  /** `{time}` counts down as hh:mm:ss to a real deadline. */
  'homeOffer.comeback.endsIn': 'Ends in {time}',
  /** Both deals, a lower first year and lifetime. */
  'homeOffer.comeback.bodyBoth': 'Keep **Walkito Plus** your way: **a year for less**, or **yours for good**.',
  'homeOffer.comeback.bodyYear': '**A year of Walkito Plus** at a lower price, for a short time only.',
  'homeOffer.comeback.bodyLifetime': '**Walkito Plus for good** with a single payment, for a short time only.',
  'homeOffer.comeback.cta': 'Claim my offer',

  // ── The comeback's card ──────────────────────────────────────────────────
  // The big figure, the billed price in a pill, a promise, then the standard
  // price struck through beside the one paid. Everything but the price is
  // shown only over a real discount between two store prices.
  /** The big figure. As short as your language allows: it is set very large on one line. */
  'homeOffer.card.off': '{percent}% off',
  /** Beside the discount, with a tick. True: the comeback is offered once, against its deadline. */
  'homeOffer.card.onlyOnce': 'Only this once',
  /** Read aloud for the struck price and the one paid (a strikethrough is silent). */
  'homeOffer.card.wasNow': 'Was {was}, now {now}',
  /** The smallest line under the year: its first-year price over twelve months. */
  'homeOffer.card.perMonthFirstYear': 'That’s {price} a month in your first year',
  /** The same for a year with no first-year price. */
  'homeOffer.card.perMonth': 'That’s {price} a month',
  'homeOffer.card.lifetime': 'One payment, yours for good',

  // ── The ordinary plans, once the comeback is over ───────────────────────
  // No "limited" and no "one-time" here: nothing on this screen ends.
  'homeOffer.standard.title': 'Keep going with Walkito Plus',
  'homeOffer.standard.body': 'Your plan, every session and every retest. **Pick the way that suits you.**',
  'homeOffer.standard.cta': 'Continue',

  // ── Plans ────────────────────────────────────────────────────────────────
  /** The plan card's name. */
  'homeOffer.plan.yearly': 'Yearly',
  'homeOffer.plan.monthly': 'Monthly',
  'homeOffer.plan.weekly': 'Weekly',
  'homeOffer.plan.lifetime': 'Lifetime',
  /** The switch between plans: short, two or three share a phone's width. */
  'homeOffer.tab.year': 'Year',
  'homeOffer.tab.month': 'Month',
  'homeOffer.tab.week': 'Week',
  'homeOffer.tab.lifetime': 'Lifetime',

  // ── Prices ───────────────────────────────────────────────────────────────
  // The billed price with its period, short enough for a card and a switch.
  'homeOffer.price.perYear': '{price}/yr',
  'homeOffer.price.perMonth': '{price}/mo',
  'homeOffer.price.perWeek': '{price}/wk',
  'homeOffer.price.once': '{price} once',
  /** The comeback year: its pay-up-front introductory price. */
  'homeOffer.price.firstYear': '{price} first year',
  'homeOffer.price.lifetimeNote': 'Pay once and keep it for good. Nothing renews.',

  // ── Badges ───────────────────────────────────────────────────────────────
  // The trial's own length; a percentage only from two store prices.
  'homeOffer.badge.freeDays': { one: '{count} day free', other: '{count} days free' },
  'homeOffer.badge.freeWeeks': { one: '{count} week free', other: '{count} weeks free' },
  'homeOffer.badge.freeMonths': { one: '{count} month free', other: '{count} months free' },
  /** The year against twelve months (or fifty-two weeks) of the shorter plan. */
  'homeOffer.badge.save': 'Save {percent}%',

  // ── The disclosure under the button ──────────────────────────────────────
  // What App Review asks for beside a purchase: what it includes, its length
  // and price, how renewal and cancelling work. Store-wide renewal lines are
  // the paywall's own (`offer.termsRenewal*`).
  'homeOffer.terms.trialDays': {
    one: 'Free for {count} day, then {price} a year. Nothing is charged today.',
    other: 'Free for {count} days, then {price} a year. Nothing is charged today.',
  },
  'homeOffer.terms.trialMonths': {
    one: 'Free for {count} month, then {price} a year. Nothing is charged today.',
    other: 'Free for {count} months, then {price} a year. Nothing is charged today.',
  },
  'homeOffer.terms.trialCancel': 'Cancel in Settings before the trial ends and you pay nothing.',
  'homeOffer.terms.trialCancelAndroid': 'Cancel in Google Play before the trial ends and you pay nothing.',
  'homeOffer.terms.introYear': 'Annual subscription: {introPrice} for the first year, then {price} per year.',
  'homeOffer.terms.monthly': 'Monthly subscription: {price} per month.',
  'homeOffer.terms.lifetime': 'One payment of {price}. Nothing renews.',

  // ── Pushes ───────────────────────────────────────────────────────────────
  // Sent as somebody leaves the trial offer, and before the comeback's
  // deadline. No figure: the store's price is on the screen the tap opens.
  'homeOffer.push.lastChanceTitle': 'Don’t worry, here’s one last chance',
  'homeOffer.push.lastChanceBoth': 'A year of Walkito Plus at a lower price, or keep it for good.',
  'homeOffer.push.lastChanceYear': 'A year of Walkito Plus at a lower price, for a short time.',
  'homeOffer.push.lastChanceLifetime': 'Keep Walkito Plus for good with a single payment, for a short time.',
  'homeOffer.push.endsSoonTitle': 'Your offer ends soon',
  'homeOffer.push.endsSoonBody': 'Your lower price on Walkito Plus is gone in a few hours.',
  /** The reminder the trial offer promises, before the trial ends. */
  'homeOffer.push.trialEndsTitle': {
    one: 'Your free trial ends in {count} day',
    other: 'Your free trial ends in {count} days',
  },
  'homeOffer.push.trialEndsBody':
    'After that, Walkito Plus renews at {price} a year. If it isn’t for you, cancel before then in your subscription settings.',
} as const satisfies Record<string, SourceEntry>;
