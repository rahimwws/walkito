/**
 * Offer — the paywall, plus what is left of `src/widgets`.
 *
 * Two domains in one file because the widgets layer is one session player and a
 * handful of labels, which is not enough to carry a file of its own. They are
 * kept apart by prefix: `offer.*` is the paywall, `widgets.*` is the player.
 *
 * **No price, currency amount or product identifier appears here.** Every
 * figure on the paywall comes from the store at runtime and arrives as a
 * `{price}` placeholder in the store's own formatting, or as `{perWeek}`
 * formatted by `formatPrice` — which is the only thing that knows where the
 * symbol goes and which separator the locale uses. A price written into a catalogue is wrong in every
 * storefront but one, and it is wrong in a legally interesting way the moment
 * App Store Connect disagrees with it.
 *
 * Sections below appear in the same order in `../ru/offer.ts` and
 * `../es/offer.ts`, so the three files diff cleanly against each other.
 */

import type { SourceEntry } from '../entry';

export const OFFER_EN = {
  // ── Paywall: what the app is ─────────────────────────────────────────────
  // The screen opens on this rather than on a percentage, so these three pairs
  // carry the argument. Title and blurb are separate keys because they are
  // separate elements at different sizes, not a sentence split in two.
  'offer.featurePlanTitle': 'Your plan, not a template',
  'offer.featurePlanBlurb': 'Built from the answers you just gave, and rebuilt as they change.',
  'offer.featureAdaptiveTitle': 'Adaptive sessions',
  'offer.featureAdaptiveBlurb': 'Every workout adjusts to how the last one actually went.',
  'offer.featureProgressTitle': 'Progress you can see',
  'offer.featureProgressBlurb': 'Watch your readiness climb week by week.',

  // ── Paywall: headline ────────────────────────────────────────────────────
  /** Over the comeback price. Says what the price is rather than how scarce:
   * the win-back can come round again, so "one time only" would not be true. */
  'offer.comebackBadge': 'Comeback price',
  /** The same badge, for the price an invite earned. */
  'offer.inviteBadge': 'Your invite price',
  /** The standard sheet. The product's name, said once at the top. */
  'offer.headline': 'Unlock Walkito Premium',
  /** The invite and comeback price is on the annual plan only, so the headline
   * names the year rather than promising a cheaper app. */
  'offer.headlineInvite': 'Your invite price on a year of Walkito Premium',
  'offer.headlineComeback': 'Your comeback price on a year of Walkito Premium',
  'offer.sub': 'Your plan, and everything around it.',

  // ── Paywall: the two plans ───────────────────────────────────────────────
  // `{price}` is the store's own billed amount and is always the most
  // prominent figure on a row (App Review Guideline 3.1.2). `{perWeek}` is the
  // annual price divided by 52, secondary and smaller. The middots are written
  // as text here so each note is one template and a language may reorder the
  // parts inside it.
  'offer.annualTitle': 'Annual',
  'offer.annualPrice': '{price} per year',
  'offer.annualNote': '{perWeek} a week, billed yearly',
  /** `{percent}` compares one annual payment with 52 weekly ones, both store
   * prices. Shown only when the annual plan really is cheaper. */
  'offer.annualNoteSave': '{perWeek} a week · Save {percent}% vs weekly',
  'offer.weeklyTitle': 'Weekly',
  'offer.weeklyPrice': '{price} per week',
  /** The plans the standard offering sells beside the year, on the expiry screen. */
  'offer.monthlyPrice': '{price} per month',
  'offer.lifetimePrice': '{price} one time',
  'offer.weeklyNote': 'Billed weekly · Cancel anytime',
  /** On the annual row, only while it is cheaper over a year than weekly. */
  'offer.badgeBest': 'Best value',
  'offer.badgeRecommended': 'Recommended',
  /** On the discounted annual row: the invite or comeback price against the
   * standard annual price, both from the store. */
  'offer.badgeOff': '{percent}% off',

  // ── Paywall: billing terms ───────────────────────────────────────────────
  // The disclosure Apple requires next to an auto-renewable subscription: what
  // is included, each plan's length and price, auto-renewal, where payment is
  // charged and how to cancel. Amounts are interpolated so a discounted sheet
  // discloses the discounted figure.
  /** One line directly above the button, for the plan that is selected. */
  'offer.ctaAnnual': '{price} per year, renews automatically. Cancel anytime.',
  'offer.ctaWeekly': '{price} per week, renews automatically. Cancel anytime.',
  'offer.ctaMonthly': '{price} per month, renews automatically. Cancel anytime.',
  /** A one-time purchase: one payment, and nothing renews. */
  'offer.ctaLifetime': '{price} once. No subscription, nothing renews.',
  'offer.termsAnnual': 'Annual subscription: {price} per year.',
  'offer.termsWeekly': 'Weekly subscription: {price} per week.',
  'offer.termsMonthly': 'Monthly subscription: {price} per month.',
  'offer.termsLifetime':
    'Lifetime access: one payment of {price}, charged at confirmation of purchase. Nothing renews.',
  'offer.termsRenewal': 'Renews automatically. Cancel anytime in Settings.',
  /** The same disclosure for Google Play, which bills and cancels elsewhere. */
  'offer.termsRenewalAndroid': 'Renews automatically. Cancel anytime in Google Play.',
  'offer.linkTerms': 'Terms of use',
  'offer.linkPrivacy': 'Privacy policy',
  'offer.restore': 'Restore purchases',

  // ── Paywall: what the store said ─────────────────────────────────────────
  // Two faults that used to share one sentence. A store that never answered is
  // unreachable and worth retrying; a store that answered without the package
  // is misconfigured, and "try again in a moment" sends somebody to retry
  // something that will never succeed. "The store" rather than a name: the
  // same paywall sells through the App Store and through Google Play.
  'offer.planUnavailable': 'That plan isn’t available right now. Try the other one.',
  'offer.storeUnreachable': 'The store isn’t reachable right now. Try again in a moment.',
  'offer.nothingRestored': 'No previous purchase found.',
  'offer.restoreFailed': 'That didn’t go through. No charge was made.',
  /** Any purchase error without a sentence of its own. The SDK's message is
   * never shown: it is English whatever the app is set to. */
  'offer.purchaseFailed': 'That didn’t go through. No charge was made.',
  /** Screen Time, a parental control, or a device policy blocks buying. */
  'offer.purchaseNotAllowed': 'Purchases are turned off on this device.',
  'offer.alreadyOwned': 'You already have this. Tap Restore purchases.',
  /** Ask to Buy, or a bank confirming the payment. Not an error: access
   * arrives on its own if it goes through. */
  'offer.pending': 'Waiting for approval. You’ll get access once it goes through.',
  /** Paid, but the store granted no access. Almost always a dashboard fault;
   * restoring is what fixes it from the user's side. */
  'offer.notUnlocked': 'The purchase went through but didn’t unlock. Tap Restore purchases.',
  'offer.continue': 'Continue',
  'offer.processing': 'Processing…',

  // ── Paywall: the celebration ─────────────────────────────────────────────
  'offer.purchasedTitle': 'You’re in.',
  /** The product's name, not a store identifier. Left as-is in every language
   * — it is the brand with a tier after it. */
  'offer.premium': 'Walkito Premium',
  'offer.purchasedBlurb': 'Your plan is unlocked, and it starts adapting from your next session.',
  'offer.restoredTitle': 'Welcome back.',
  'offer.restoredBlurb': 'Your subscription is active again. Everything is where you left it.',
  'offer.start': 'Start',

  // ── Paywall: the two steps before it, after onboarding ──────────────────
  // How the open-ended plan starts and how a day works, then the paywall. The
  // dates and counts are the person's own (`offer-intro.tsx`).
  'offer.stepA11y': 'Step {step} of {total}',
  'offer.next': 'Next',
  'offer.introTitle': 'This is how your plan starts',
  'offer.introTitleNamed': '{name}, this is how your plan starts',
  // Under the title: the goal they picked in onboarding, quoted back as theirs.
  'offer.introWhy': '“{why}.”',
  'offer.introTodayWhen': 'Today',
  'offer.introTodayTitle': { one: 'A {count}-minute test', other: 'A {count}-minute test' },
  'offer.introTodayBody': 'Calves, arch and balance. Your plan starts from these numbers.',
  'offer.introWeekWhen': 'This week',
  'offer.introWeekTitle': 'Settle things down',
  'offer.introWeekBody': {
    one: '{minutes} min a day, {count} day a week. Strength work starts next week.',
    other: '{minutes} min a day, {count} days a week. Strength work starts next week.',
  },
  'offer.introSundayWhen': 'Every Sunday',
  'offer.introSundayTitle': 'A new week, built from the last',
  'offer.introSundayBody': 'Easier if it felt hard, a little more if it felt easy.',
  'offer.introCheckTitle': 'Your first progress check',
  'offer.introCheckBody': 'The same test again. See what changed, then the next step.',
  'offer.howTitle': 'A few minutes a day. Here is how it works.',
  'offer.howCheckinTitle': 'Check in each morning',
  'offer.howCheckinBody': 'Ten seconds on how your feet feel. The day is set from it.',
  'offer.howSessionTitle': 'Do today’s session',
  'offer.howSessionBody': '3 to 10 minutes. It only gets harder when the last one felt easy.',
  'offer.howTestTitle': 'Retest every two weeks',
  'offer.howTestBody': 'Calves, arch and balance, measured. Watch the numbers move.',
  /** From the founders' note (`onboarding.note.body1`), word for word. */
  'offer.howQuote': '“The exercises that help are well known. Nobody tells you which ones, or how many. So that is what we made.”',
  'offer.howQuoteBy': 'Rahim, who makes Walkito with his friend Rahman',
  'offer.startTitle': 'Start your plan today',
  'offer.startSub': 'Your first week is ready. It starts with a short test.',
  'offer.chipWeekly': 'Your weekly plan',
  'offer.chipSessions': 'Short sessions',
  'offer.chipTests': 'A test every two weeks',
  'offer.chipRoutines': 'Flare-up and run routines',
  'offer.chipReminders': 'Reminders',

  // ── Paywall: the plans (Walkito Plus) ───────────────────────────────────
  // The third step (`plans-step.tsx`), after BitePal's paywall. Every amount
  // is the store's own string: `{price}` the billed amount, `{perMonth}` the
  // store's own division of a year, `{intro}` an introductory offer's price,
  // `{period}` a free trial's length (`offer.plans.days` and the rest). Trial
  // wording is only ever shown on a plan the store says carries a free trial.
  /** The product, left as-is in every language: the brand and its tier. */
  'offer.plans.brand': 'Walkito',
  'offer.plans.badge': 'Plus',
  'offer.plans.name': 'Walkito Plus',
  /** The headline. The word in square brackets is drawn in the Plus colour;
   * the brackets go round whichever word carries the sentence. Said of the
   * training, never a figure or a multiple. */
  'offer.plans.headline': 'Your feet, [stronger] every day',
  /** A comeback view, only once the store’s prices make it cheaper. */
  'offer.plans.headlineComeback': 'Walkito Plus, now for [less]',
  'offer.plans.mostPopular': 'Most popular',
  'offer.plans.yearly': 'Yearly',
  'offer.plans.monthly': 'Monthly',
  'offer.plans.lifetime': 'Lifetime',
  /** Under the price on a card: what the amount is for. */
  'offer.plans.perYear': 'per year',
  'offer.plans.perMonth': 'per month',
  'offer.plans.perWeek': 'per week',
  'offer.plans.once': 'one time',
  'offer.plans.firstYear': 'first year',
  /** Under a plan’s title. */
  'offer.plans.yearlyNote': '{perMonth} per month, billed yearly',
  'offer.plans.monthlyNote': 'Billed monthly',
  'offer.plans.weeklyNote': 'Billed weekly',
  'offer.plans.lifetimeNote': 'One-time payment, yours for good',
  'offer.plans.upfrontNote': 'Then {price} per year',
  'offer.plans.trialNote': '{period} free, then {price} per year',
  /** A free trial’s length, as the store states it. */
  'offer.plans.days': { one: '{count} day', other: '{count} days' },
  'offer.plans.weeks': { one: '{count} week', other: '{count} weeks' },
  'offer.plans.months': { one: '{count} month', other: '{count} months' },
  'offer.plans.years': { one: '{count} year', other: '{count} years' },
  'offer.plans.showAll': 'Show all plans',
  /** "What you get": what Walkito Plus includes. Only what the app does, and
   * never a "free" column: there is no way into the app without Plus. */
  'offer.plans.tableTitle': 'What you get',
  'offer.plans.rowPlan': 'A daily plan that adapts to you',
  'offer.plans.rowSessions': 'Every guided session, with video',
  'offer.plans.rowTests': 'A progress test every two weeks',
  'offer.plans.rowStreaks': 'Streaks and stickers',
  'offer.plans.rowMorning': 'The morning stretch',
  /** What a screen reader says for one row of the table. */
  'offer.plans.rowA11y': '{feature}. Included with Plus.',
  /** The button, and the line under it: what is charged, when it renews,
   * where to cancel. The two sentences are separate keys, side by side. */
  'offer.plans.ctaLifetime': 'Get Walkito Plus',
  'offer.plans.ctaTrial': 'Start my free trial',
  'offer.plans.renewsYearly': 'Renews at {price} per year.',
  'offer.plans.renewsMonthly': 'Renews at {price} per month.',
  'offer.plans.renewsWeekly': 'Renews at {price} per week.',
  'offer.plans.renewsUpfront': '{intro} for the first year, then {price} per year.',
  'offer.plans.renewsTrial': 'No payment now. {period} free, then {price} per year.',
  'offer.plans.cancel': 'Cancel anytime in Settings.',
  'offer.plans.cancelAndroid': 'Cancel anytime in Google Play.',
  'offer.plans.oneTime': 'One payment, no subscription.',
  /** At the very bottom, three seconds after "Show all plans". It leads to
   * the one-time trial offer, never into the app: say nothing that implies
   * the app can be used without Plus. */
  'offer.plans.skip': 'Not now',

  // ── Session player: the locked state ─────────────────────────────────────
  // Only ever seen by somebody whose subscription ended and who answered the
  // expiry screen with "Not now".
  'widgets.sessionLockedTitle': 'Your subscription has ended',
  'widgets.sessionLockedBody':
    'Everything you logged is still here to read. To run sessions again, pick up where you left off.',
  'widgets.sessionLockedCta': 'See your options',

  // ── Test day: the results ────────────────────────────────────────────────
  // The rest of the test day's copy is in `testday.ts`. These stay here because
  // the results screen took them over from the retest sheet it replaced.
  'widgets.retestYourGoal': 'Your goal',
  /** The goal they picked in onboarding, said back on the result screen. */
  'widgets.retestGoal.painfree': 'You came here for mornings with less heel pain. These numbers show your foot on the way there.',
  'widgets.retestGoal.race': 'You’re working towards a race. A stronger calf and a steadier foot are what carry you to the start line.',
  'widgets.retestGoal.consistent': 'You said consistency was the goal. This is what showing up adds up to.',
  'widgets.retestGoal.stronger': 'You wanted to get stronger. This is where it shows first.',
  'widgets.retestGoal.injuryfree': 'You wanted to stay injury-free. A foot that tests stronger is harder to hurt.',

  'widgets.retestGoal.flatfeet': 'You came here for your flat feet. The arch hold and steadier balance are where the training shows.',
  'widgets.retestGoal.ankles': 'You wanted steadier ankles. Balance is where that shows first.',
  'widgets.retestGoal.jump': 'You wanted to jump higher. A stronger calf is the spring behind it.',
  'widgets.retestGoal.allday': 'You wanted to get through the day on your feet. The muscles that support your arch are what this trains.',
  'widgets.retestGoal.comeback': 'You came back from an injury. The gap between your legs is the number to watch.',
  'widgets.retestGoal.steady': 'You wanted to walk with confidence. Balance and a strong foot are how that feels.',
  // ── Session player: the counter line ─────────────────────────────────────
  // One word each, because this is read at two metres by somebody already
  // moving and it changes every three seconds.
  'widgets.phaseUp': 'Up',
  'widgets.phaseHold': 'Hold',
  'widgets.phaseDown': 'Down',
  /** Which foot, said the way you would say it out loud while balancing. */
  'widgets.sideRight': 'Right foot',
  'widgets.sideLeft': 'Left foot',

  // The line under the move's name, in each of the shapes it takes. The foot
  // leads where there is one: it is an instruction, where the rep counter is
  // only context. Written as whole templates rather than joined from pieces at
  // the call site, so a language may put the foot last if that is where it
  // belongs.
  'widgets.sessionRepLine': '{phase} · Rep {rep} of {reps}',
  'widgets.sessionRepLineSided': '{side} · {phase} · Rep {rep} of {reps}',
  /** Spoken as a sentence: a middot is read out as nothing at all, which leaves
   * "up rep four of twelve". */
  'widgets.sessionRepSpoken': '{phase}, rep {rep} of {reps}',
  'widgets.sessionRepSpokenSided': '{side}. {phase}, rep {rep} of {reps}',
  'widgets.sessionPositionShort': 'Exercise {index}/{total}',
  'widgets.sessionPositionShortSided': '{side} · Exercise {index}/{total}',
  /** The written-out form. Spoken by VoiceOver, and — resolved on the JS side
   * and handed over as a prop — printed on the Lock Screen, which cannot
   * translate anything itself. */
  'widgets.sessionPositionLong': 'Exercise {index} of {total}',
  'widgets.sessionPositionLongSided': '{side}. Exercise {index} of {total}',
  'widgets.sessionDone': 'Done.',
  'widgets.sessionDoneSpoken': 'Done',

  // ── Session player: the card and the transport ───────────────────────────
  'widgets.clipFailed': 'Video didn’t load. The instructions still apply.',
  'widgets.lockScreenHint': 'Lock your phone - the timer keeps going',
  'widgets.expandDemo': 'Expand demonstration',
  'widgets.collapseDemo': 'Collapse demonstration',
  'widgets.sessionContinue': 'Continue',
  /** The last one. Pressing Continue for the final time and having the session
   * simply stop is the moment this screen most needs to not feel like a bug. */
  'widgets.sessionFinish': 'Finish',
  'widgets.scrubberPrevious': 'Previous exercise',
  'widgets.scrubberNext': 'Next exercise',
  'widgets.scrubberPlay': 'Play',
  'widgets.scrubberPause': 'Pause',

  // ── Session player: the end of a session ─────────────────────────────────
  'widgets.sessionDoneTitle': 'Nice work.',
  /** Stopped on a pain report at or above six. It counts, and it says so. */
  'widgets.sessionStoppedTitle': 'Stopping here.',
  'widgets.sessionStoppedBlurb': 'It still counts as today’s session. Tomorrow starts one step back.',

  // ── Session player: "it hurts" ───────────────────────────────────────────
  'widgets.painButton': 'It hurts',
  'widgets.painTitle': 'How much, right now?',
  'widgets.painCarryOn': 'Carry on gently. Stop if it climbs.',
  'widgets.painPick': 'Tap a number to see what happens next.',
  'widgets.painLowHint': 'Mild discomfort is fine in this work. The session carries on from where you paused - just go gently, and tap the plaster again if it climbs.',
  'widgets.painHighHint': 'That’s too much to train through. We’ll end the session here - it still counts for today - and tomorrow’s plan will be one step lighter.',
  'widgets.painResume': 'Carry on gently',
  'widgets.painEnd': 'End the session',
  'widgets.painCancel': 'Never mind',
  'widgets.painClose': 'Close',
  'widgets.sessionDoneStreak': { one: '{count} day in a row', other: '{count} days in a row' },
  /** `{count}` is in both forms deliberately. The singular reads better as "One
   * move done", but every form of every language has to carry every placeholder
   * English uses — see `parity.test.ts` — and a Russian `one` form without the
   * number would fail it. */
  'widgets.sessionDoneBlurb': {
    one: '{count} move done. Small and often is what moves this.',
    other: 'All {count} moves done. Small and often is what moves this.',
  },
} as const satisfies Record<string, SourceEntry>;
