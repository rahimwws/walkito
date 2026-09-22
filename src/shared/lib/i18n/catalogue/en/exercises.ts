/**
 * The exercise catalogue — every name, reason and cue the program can say.
 *
 * The copy that used to live inside `entities/program/model/exercises.ts`. That
 * file now holds the *keys*, and the text is resolved where it is rendered, so
 * the catalogue is the only place any of it is written.
 *
 * Three fields per exercise, and they do different jobs:
 *
 * - **`title`** is a label on a row and in the player. Short enough to survive
 *   one line at 24pt.
 * - **`rationale`** is why this is in the session. Shown on arrival and read
 *   aloud by VoiceOver with the title.
 * - **`cue`** is an instruction the user follows *with their body, while their
 *   foot hurts*. It is the one string in this app where ambiguity is a safety
 *   problem rather than a style problem, so a translation may restructure the
 *   sentence freely as long as the physical instruction survives intact.
 *
 * Anatomy is written with the standard clinical term in each language —
 * plantar fascia, soleus, tibialis posterior — never transliterated and never
 * paraphrased into something a physiotherapist would not recognise.
 *
 * The dose templates at the bottom are whole labels rather than the pieces
 * `prescription.ts` used to concatenate. "3 × 30s" plus " · both feet" is fine
 * in English and falls apart the moment a language wants the qualifier
 * somewhere else in the phrase.
 */

import type { SourceEntry } from '../entry';

export const EXERCISES_EN = {
  // ── Mobility ─────────────────────────────────────────────────────────────
  'exercises.fasciaStretch.title': 'Plantar stretch',
  'exercises.fasciaStretch.rationale': 'Do the first one before your foot touches the floor.',
  'exercises.fasciaStretch.cue': 'Pull the toes back until you feel the arch, not the calf.',

  'exercises.calfStretchStraight.title': 'Calf stretch',
  'exercises.calfStretchStraight.rationale': 'A tight calf pulls on the heel all day.',
  'exercises.calfStretchStraight.cue': 'Back leg straight, heel down, hips forward.',

  'exercises.calfStretchBent.title': 'Soleus stretch',
  'exercises.calfStretchBent.rationale': 'The deeper calf muscle only lets go with the knee bent.',
  'exercises.calfStretchBent.cue': 'Bend the back knee until you feel it lower, near the heel.',

  'exercises.ankleRocks.title': 'Ankle rocks',
  'exercises.ankleRocks.rationale': 'An ankle that bends lets the heel stay down.',
  'exercises.ankleRocks.cue': 'Knee travels over the toes, heel stays on the floor.',

  // ── The loaded work ──────────────────────────────────────────────────────
  'exercises.heelRaiseTowel.title': 'Heel raises',
  'exercises.heelRaiseTowel.rationale': 'This is the one that moves pain fastest.',
  'exercises.heelRaiseTowel.cue': 'Towel under the toes. Without it you’re just training calves.',

  'exercises.heelRaisePlain.title': 'Single-leg raises',
  'exercises.heelRaisePlain.rationale': 'The version you keep after the program ends.',
  'exercises.heelRaisePlain.cue': 'Three seconds up, three down. Speed is what makes it useless.',

  // ── Intrinsic foot work ──────────────────────────────────────────────────
  'exercises.shortFootSeated.title': 'Short foot',
  'exercises.shortFootSeated.rationale': 'The muscle that holds your arch sits inside your foot.',
  'exercises.shortFootSeated.cue': 'Don’t curl the toes. Pull the ball of the foot toward the heel.',

  'exercises.shortFootDouble.title': 'Short foot, standing',
  'exercises.shortFootDouble.rationale': 'Same muscle, now holding your weight.',
  'exercises.shortFootDouble.cue': 'Toes stay flat and long. Only the arch lifts.',

  'exercises.shortFootSingle.title': 'Short foot, one leg',
  'exercises.shortFootSingle.rationale': 'One foot at a time is where the weak side shows.',
  'exercises.shortFootSingle.cue': 'Keep the big toe down. If it lifts, the arch is cheating.',

  'exercises.toeSpread.title': 'Toe spread',
  'exercises.toeSpread.rationale': 'Toes that can spread share the load with the arch.',
  'exercises.toeSpread.cue': 'Spread wide, then hold. The lift is not the point.',

  'exercises.bandInversion.title': 'Band turn-in',
  'exercises.bandInversion.rationale':
    'Turning the foot in trains the muscle that runs under the arch.',
  'exercises.bandInversion.cue': 'Move the foot, not the leg. The knee stays still.',

  'exercises.hipAbduction.title': 'Hip abduction',
  'exercises.hipAbduction.rationale': 'A hip that gives way lands the load on the arch.',
  'exercises.hipAbduction.cue': 'Push through the heel, not the toes.',

  // ── Balance ──────────────────────────────────────────────────────────────
  'exercises.singleLegHold.title': 'Single-leg hold',
  'exercises.singleLegHold.rationale': 'Standing on one leg is the test your foot fails first.',
  'exercises.singleLegHold.cue': 'Look at one spot. Let the foot wobble — it’s meant to.',

  'exercises.eyesClosedStand.title': 'Eyes-closed stand',
  'exercises.eyesClosedStand.rationale': 'With the eyes shut, the foot has to do the balancing.',
  'exercises.eyesClosedStand.cue': 'Stand near a wall. Reaching for it is fine.',

  'exercises.heelToeWalk.title': 'Heel-to-toe walk',
  'exercises.heelToeWalk.rationale':
    'Walking heel to toe is the arch loading and unloading in order.',
  'exercises.heelToeWalk.cue': 'Heel lands first, then roll. Slow enough to stop mid-step.',

  // ── What closes a session ────────────────────────────────────────────────
  'exercises.footRoll.title': 'Foot roll',
  'exercises.footRoll.rationale': 'Rolling settles the tissue after it has worked.',
  'exercises.footRoll.cue': 'Slow and firm. If you’re wincing, ease off.',

  'exercises.barefootHome.title': 'Barefoot at home',
  'exercises.barefootHome.rationale': 'Hours barefoot are hours the foot spends working.',
  'exercises.barefootHome.cue': 'Indoors only, on flat floors, and build it up slowly.',

  'exercises.breathingReset.title': 'Breathing reset',
  'exercises.breathingReset.rationale': 'A minute of slow breathing ends the session properly.',
  'exercises.breathingReset.cue': 'Out for longer than in. That’s the whole thing.',

  // ── The morning stretch ──────────────────────────────────────────────────
  // Said twice — in the check-in and in the notification that fires at wake
  // time — and it has to be the same sentence in both, or the user has to work
  // out which version is right.
  'exercises.morningStretch.copy':
    'Before you stand up: pull your toes back, 10 seconds, 10 times.',

  // ── Load notes ───────────────────────────────────────────────────────────
  // Said once, on the first Strength day of a block whose heel-raise load
  // actually changed. Named for what they ask rather than for the block, so
  // renumbering the plan cannot leave a key pointing at the wrong instruction.
  'exercises.loadNote.backpack': 'Add a backpack. Heavy enough that the last rep is the last rep.',
  'exercises.loadNote.heavier': 'Add more. Eight reps should be all you have.',
  'exercises.loadNote.towelOff': 'Towel off. Bodyweight. This is the version you keep doing.',

  // ── Categories ───────────────────────────────────────────────────────────
  // What kind of effort a row asks for. A label, never a rating — Recovery is
  // not a lesser Fitness.
  'exercises.category.fitness': 'Fitness',
  'exercises.category.mobility': 'Mobility',
  'exercises.category.recovery': 'Recovery',
  'exercises.category.habit': 'Habit',

  // ── Dose ─────────────────────────────────────────────────────────────────
  // Whole labels, because the pieces do not travel. `bothFeet` takes the dose
  // it qualifies as a placeholder rather than being appended to it: English
  // puts the qualifier last, and a language that puts it first has nowhere to
  // put it if all it receives is a suffix.
  'exercises.dose.setsReps': '{sets} × {reps}',
  'exercises.dose.setsHold': '{sets} × {seconds}s',
  'exercises.dose.hold': '{seconds}s',
  'exercises.dose.holdMinutes': '{minutes} min',
  'exercises.dose.sets': { one: '{count} set', other: '{count} sets' },
  'exercises.dose.bothFeet': '{dose} · both feet',
} as const satisfies Record<string, SourceEntry>;
