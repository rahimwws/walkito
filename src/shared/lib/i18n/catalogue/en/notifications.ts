/**
 * Notifications — every line the app is allowed to put on a lock screen.
 *
 * Two constraints run through this file and neither is stylistic; both are
 * restated here because a translator reads this file and not `copy.ts`.
 *
 * **Nothing cheerful after pain.** A user who logged an eight yesterday and is
 * greeted with encouragement has been told, politely, that the app does not
 * believe them about their own body. The `flare.*` lines carry no exclamation
 * mark, no praise and no emoji in any language.
 *
 * **No streak number outside `streak.*`.** The permission screen promised "no
 * streaks to guilt you back", so the count may appear in exactly two entries and
 * both state what one tap *keeps*, never what is about to be lost.
 *
 * **Rotation.** Keys ending in a name rather than a number still belong to a
 * set — `session*`, `flare*`, `load*` and so on — and `copy.ts` picks one per
 * day by hashing the date. The choice is `hash % set.length` against the array
 * in `copy.ts`, so nothing here depends on how many variants a set has.
 *
 * **Counts are plural entries, not interpolated numbers.** `{count}` selects the
 * form; a second placeholder renders the same number when it needs formatting —
 * `load.steps` passes `{steps}` grouped for the locale *and* `count` raw, which
 * is what lets Russian say "14 201 шаг" and "14 205 шагов".
 *
 * `{block}` interpolates a block name from `@/entities/program`, which is not
 * translated anywhere yet; it arrives in English in all three catalogues.
 */

import type { SourceEntry } from '../entry';

export const NOTIFICATIONS_EN = {
  // ── What kind of day it is ───────────────────────────────────────────────
  // Dropped into `notifications.sessionDay` as a whole noun phrase rather than
  // a bare adjective, because "{kind} work" only parses in English — Russian
  // needs the noun to carry the case and Spanish needs "de" in front of it.
  'notifications.kindStrength': 'Strength work',
  'notifications.kindMobility': 'Mobility work',
  'notifications.kindBalance': 'Balance work',
  'notifications.kindRecovery': 'Recovery work',
  /** The fallback when the day resolved without a kind. */
  'notifications.kindFoot': 'Foot work',

  // ── The morning nudge ────────────────────────────────────────────────────
  'notifications.sessionStrength': {
    one: 'Foot strength today. {count} minute.',
    other: 'Foot strength today. {count} minutes.',
  },
  'notifications.sessionDay': {
    one: 'Day {day}. {kind}. {count} minute.',
    other: 'Day {day}. {kind}. {count} minutes.',
  },
  'notifications.sessionShort': {
    one: 'Short session today — {count} minute, sitting down.',
    other: 'Short session today — {count} minutes, sitting down.',
  },
  'notifications.sessionHeelRaises': 'Heel raises today. The one that actually moves things.',
  /** Their sport, named as the way back — never as a promise of getting there. */
  'notifications.sessionBackTo': {
    one: '{count} minute today. One more step back {backTo}.',
    other: '{count} minutes today. One more step back {backTo}.',
  },
  'notifications.sessionCalves': {
    one: '{count} minute. Your calves are the appointment.',
    other: '{count} minutes. Your calves are the appointment.',
  },
  'notifications.sessionMobility': 'Mobility today. Nothing heavy.',

  // ── Maintenance ──────────────────────────────────────────────────────────
  // What the morning nudge becomes once the program is over and the job is
  // holding the ground rather than taking more of it.
  'notifications.maintenanceDay': {
    one: 'Maintenance day. {count} minute.',
    other: 'Maintenance day. {count} minutes.',
  },
  'notifications.maintenanceCheckpoint': 'Monthly checkpoint. Let’s make sure nothing slipped.',
  'notifications.maintenanceFourWeeks': 'Four weeks even. That’s the whole point.',

  // ── The morning after a bad day ──────────────────────────────────────────
  // Never cheerful, no emoji, no encouragement. Just the smaller ask.
  'notifications.flareRough': {
    one: 'Rough one yesterday. Today is {count} minute, sitting down.',
    other: 'Rough one yesterday. Today is {count} minutes, sitting down.',
  },
  'notifications.flarePain': {
    one: 'Pain was {pain}. Today the plan gets out of your way — {count} minute.',
    other: 'Pain was {pain}. Today the plan gets out of your way — {count} minutes.',
  },
  'notifications.flareNothingHeavy': 'Bad day yesterday. Today asks nothing heavy.',

  // ── A big day on their feet ──────────────────────────────────────────────
  // `loadSteps` is first in the set on purpose: it is the only one that names a
  // figure, so it is the one `copy.ts` drops when HealthKit gave us nothing.
  'notifications.loadSteps': {
    one: '{steps} step yesterday — {percent}% over your usual. Today is recovery.',
    other: '{steps} steps yesterday — {percent}% over your usual. Today is recovery.',
  },
  'notifications.loadBigDay': 'That was a big day on your feet. The plan adjusted.',
  'notifications.loadBackOff': 'Long one yesterday. Today the plan backs off.',

  // ── The step check-in ────────────────────────────────────────────────────
  // Sent the moment a day crosses the step mark, at most once a day. A
  // question about the foot, never a congratulation: time on foot is the load
  // this condition is sensitive to, and praising it would be the app cheering
  // the thing that makes tomorrow morning hurt.
  'notifications.stepsCheck': {
    one: '{steps} step today — a long day on your feet. How’s the heel?',
    other: '{steps} steps today — a long day on your feet. How’s the heel?',
  },

  // ── Something changed in how they walk ───────────────────────────────────
  // Change against the person's own baseline, and nothing more. Forbidden here
  // in every language: "you're limping", "you're compensating", any claim about
  // injury risk, any population norm. Walking asymmetry does not predict injury,
  // so the only defensible sentence is that something changed relative to how
  // this person usually walks.
  'notifications.gaitUneven': {
    one: 'Your steps have been uneven for {count} day now.',
    other: 'Your steps have been uneven for {count} days now.',
  },
  'notifications.gaitChanged': 'Something changed in how you walk this week.',

  // ── Retest ───────────────────────────────────────────────────────────────
  'notifications.retestTwoWeeks': 'Two weeks. Time to see what moved. 3 tests, 4 minutes.',
  'notifications.retestCheckpoint': 'Checkpoint today. No training — just three measurements.',
  'notifications.retestDay': 'Day {day}. Let’s find out if it’s working.',
  /** The tail six hours later, and the only second message of a day the app
   * ever sends. Dropped the moment the tests are opened. */
  'notifications.retestFollowUp': 'The tests are still open. Four minutes.',

  // ── A new block opens ────────────────────────────────────────────────────
  'notifications.blockNew': 'New block today: {block}. Heel raises start now.',
  'notifications.blockLoadUp': 'Block {block}. The load goes up from here.',
  'notifications.blockOpens': '{block} opens today.',

  // ── The plan changed, and why ────────────────────────────────────────────
  // One line per reason, because the whole value of this row is that it explains
  // a specific change rather than announcing that something changed.
  'notifications.planFlare': 'Pain went up this week, so today steps back one level.',
  'notifications.planSpike': 'Yesterday was a big one. Today picks up lighter.',
  'notifications.planHeavyDay': 'Long day on your feet yesterday. Today swaps to recovery.',
  'notifications.planReturn': 'Five days off. Today picks up one step easier.',
  'notifications.planBackUp': 'You’re not sore anymore — today the load goes back up.',

  // ── Evening check-in ─────────────────────────────────────────────────────
  'notifications.checkinHow': 'How was the foot today?',
  'notifications.checkinOneTap': 'One tap before bed — how did it feel?',
  'notifications.checkinLog': 'Log today and the plan knows what to do tomorrow.',

  // ── Streak ───────────────────────────────────────────────────────────────
  // The only place a streak number may appear. Both lines are a statement of
  // what one tap keeps, never of what is about to be lost.
  'notifications.streakKeep': {
    one: 'One tap keeps {count} day going.',
    other: 'One tap keeps {count} days going.',
  },
  'notifications.streakTap': { one: '{count} day. One tap.', other: '{count} days. One tap.' },

  // ── Win-back ─────────────────────────────────────────────────────────────
  // Three, then silence for good. Keyed by how long they have been away.
  'notifications.winbackDay3': 'Day {day} is still there when you want it.',
  'notifications.winbackDay10': 'The plan runs on dates, not attendance. Day {day} is today.',
  'notifications.winbackDay30': 'Still here if the foot starts talking again.',

  // ── Leaving the offer ────────────────────────────────────────────────────
  // Two messages a second apart, sent as the app goes to the background. The
  // first only has to stop the thumb and asks for nothing; the second is the
  // reason to turn around. The stretched vowels are deliberate in every
  // language — this is a person calling after you, not a mail-merge.
  'notifications.offerPleaNamed': '{name}, stoppp',
  'notifications.offerPlea': 'Stoppp',
  'notifications.offerPleaBody': 'Pleeease.',
  /** Names the product: "Take 70% off" alone does not say off what. */
  'notifications.offerDiscountTitle': 'Take {percent}% off the 12-week program',
  'notifications.offerDiscountBody': 'Tap to grab it.',

  // ── Programme expiry ─────────────────────────────────────────────────────
  // The body is the part that matters. Somebody who reads "your access ends"
  // and nothing else has to assume the twelve weeks of logs go with it, and
  // they do not — so the reassurance travels in the same breath.
  'notifications.expiryTitle': 'Your program access ends in a week',
  'notifications.expiryBody': 'Your progress stays either way.',
} as const satisfies Record<string, SourceEntry>;
