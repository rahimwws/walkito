/**
 * Offer — the paywall, plus what is left of `src/widgets`.
 *
 * Two domains in one file because the widgets layer is one session player and a
 * handful of labels, which is not enough to carry a file of its own. They are
 * kept apart by prefix: `offer.*` is the paywall, `widgets.*` is the player.
 *
 * **No price, currency amount or product identifier appears here.** Every
 * figure on the paywall comes from the store at runtime and arrives as a
 * `{price}` or `{perWeek}` placeholder already formatted by `formatPrice` —
 * which is the only thing that knows where the symbol goes and which separator
 * the locale uses. A price written into a catalogue is wrong in every
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
  'offer.limited': 'LIMITED — ONE TIME ONLY',
  'offer.headlineComeback': 'Your comeback price on the 12-week program',
  /** Plural on the months rather than a bare `{months}`: Russian inflects the
   * noun at 1, at 2–4 and at 5+, and the programme's length is a constant only
   * until somebody changes it. */
  'offer.headlineSave': {
    one: 'Pay once for {count} month and save {percent}%',
    other: 'Pay once for {count} months and save {percent}%',
  },
  'offer.headlinePlain': {
    one: 'Pay once for {count} month, or month to month',
    other: 'Pay once for {count} months, or month to month',
  },
  'offer.subWeeks': {
    one: 'Your {count}-week plan, and everything around it.',
    other: 'Your {count}-week plan, and everything around it.',
  },
  'offer.sub': 'Your plan, and everything around it.',

  // ── Paywall: the two rows ────────────────────────────────────────────────
  // `{price}` and `{perWeek}` are store figures, already formatted. The middots
  // are written as text here — unlike the session header, where they are views
  // between separate labels — so each note is one template and a language may
  // reorder the parts inside it.
  'offer.programTitle': '12-Week Program',
  'offer.programPrice': '{price} one-time',
  'offer.programNote': {
    one: '{count} month of access · {perWeek}/week · No subscription',
    other: '{count} months of access · {perWeek}/week · No subscription',
  },
  /** What somebody who already holds the programme sees instead of a price. */
  'offer.programActive': 'Active',
  'offer.programActiveUntil': 'Until {date}',
  'offer.badgeOff': '{percent}% OFF',
  'offer.badgeSave': 'SAVE {percent}%',
  'offer.monthlyTitle': 'Monthly',
  'offer.monthlyPrice': '{price}/month',
  'offer.monthlyNote': '{perWeek}/week · Cancel anytime',

  // ── Paywall: billing terms ───────────────────────────────────────────────
  // Apple requires the renewal disclosure on the subscription, and the
  // programme line has to say it will *not* charge again — that distinction is
  // the whole thing the user is being asked to understand. The amount is
  // interpolated so a discounted sheet discloses the discounted figure.
  'offer.termsProgram':
    '12-Week Program: one-time payment of {price} for 12 weeks of access. Does not renew and will not charge you again.',
  'offer.termsMonthly':
    'Monthly: {price} per month. Renews automatically unless cancelled at least 24 hours before the end of the current period. Manage or cancel in your App Store account settings.',
  'offer.linkTerms': 'Terms',
  'offer.linkPrivacy': 'Privacy',
  'offer.restore': 'Restore Purchases',

  // ── Paywall: what the store said ─────────────────────────────────────────
  // Two faults that used to share one sentence. A store that never answered is
  // unreachable and worth retrying; a store that answered without the package
  // is misconfigured, and "try again in a moment" sends somebody to retry
  // something that will never succeed.
  'offer.planUnavailable': 'That plan isn’t available right now. Try the other one.',
  'offer.storeUnreachable': 'The App Store isn’t reachable right now. Try again in a moment.',
  'offer.nothingRestored': 'No previous purchase found on this Apple ID.',
  'offer.restoreFailed': 'That didn’t go through. No charge was made.',
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

  // ── Session player: the locked state ─────────────────────────────────────
  // Only ever seen by somebody whose twelve weeks ran out and who answered the
  // expiry screen with "Not now".
  'widgets.sessionLockedTitle': 'Your program has ended',
  'widgets.sessionLockedBody':
    'Everything you logged is still here to read. To run sessions again, pick up where you left off.',
  'widgets.sessionLockedCta': 'See your options',

  // ── Session player: the retest ───────────────────────────────────────────
  // The three measurements a checkpoint day plays instead of a session. They
  // are tests rather than exercises, so the program's catalogue has no entry
  // for them and they are named here.
  'widgets.retestCalfRaises': 'Calf raises to failure',
  'widgets.retestArchHold': 'Arch hold',
  'widgets.retestBalance': 'Single-leg balance',

  // ── Retest: entering the numbers ─────────────────────────────────────────
  'widgets.retestEntryTitle': 'Your numbers',
  'widgets.retestEntryBlurb': 'Count what you just did. Honest numbers make the next retest mean something.',
  'widgets.retestLeft': 'Left leg',
  'widgets.retestRight': 'Right leg',
  'widgets.retestLeftSore': 'Left leg — the sore one',
  'widgets.retestRightSore': 'Right leg — the sore one',
  'widgets.retestSeconds': 'Seconds',
  'widgets.retestLess': 'Less',
  'widgets.retestMore': 'More',
  'widgets.retestSave': 'Save results',
  'widgets.retestResultTitle': 'Where you are now',
  'widgets.retestResultBlurb': 'Measured against your last retest, never against anyone else.',
  'widgets.retestChange': '{from} → {to}',
  'widgets.retestLevel': 'Lv {level}',
  'widgets.retestDone': 'Done',
  'widgets.retestUnitReps': 'reps',
  'widgets.retestUnitSeconds': 'sec',
  'widgets.retestUnitPercent': '%',
  'widgets.retestGapNote': 'between legs',
  'widgets.retestYourGoal': 'Your goal',
  'widgets.retestFirstCaption': 'This is your starting point. In two weeks you’ll see what changed.',
  /** The goal they picked in onboarding, said back on the result screen. */
  'widgets.retestGoal.painfree': 'You came here for mornings that don’t start with heel pain. These numbers are the foot getting there.',
  'widgets.retestGoal.race': 'You’re working towards a race. A stronger calf and a steadier foot are what carry you to the start line.',
  'widgets.retestGoal.consistent': 'You said consistency was the goal. This is what showing up adds up to.',
  'widgets.retestGoal.stronger': 'You wanted to get stronger. This is where it shows first.',
  'widgets.retestGoal.injuryfree': 'You wanted to stay injury-free. A foot that tests stronger is harder to hurt.',

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
  'widgets.lockScreenHint': 'Lock your phone — the timer keeps going',
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
  /** Stopped on a pain report at or above five. It counts, and it says so. */
  'widgets.sessionStoppedTitle': 'Stopping here.',
  'widgets.sessionStoppedBlurb': 'It still counts as today’s session. Tomorrow starts one step back.',

  // ── Session player: "it hurts" ───────────────────────────────────────────
  'widgets.painButton': 'It hurts',
  'widgets.painTitle': 'How much, right now?',
  'widgets.painBlurb': 'Under 5 is fine to work through. From 5 up, we stop and ease tomorrow.',
  'widgets.painCarryOn': 'Carry on gently. Stop if it climbs.',
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
