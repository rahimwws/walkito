/**
 * Every exercise the program can prescribe.
 *
 * A closed catalogue, deliberately. The block tables in `catalogue.ts` compose
 * days out of these ids and nothing else, so an exercise can never reach a user
 * without a rationale and a cue written for it — which is the difference
 * between a program and a list of movements.
 *
 * Two fields carry logic rather than copy:
 *
 * - `loadsFascia` is what a high-pain day removes. It is true on exactly the
 *   two heel-raise variants, and that is the whole mechanism behind Rule 1 of
 *   the adaptation engine.
 * - `track` splits loaded work (A) from work that can be done in a flare (B).
 *   Internal only — it is never shown, because "track B" means nothing to
 *   someone whose foot hurts.
 *
 * **The copy is not here.** Titles, rationales and cues live in the i18n
 * catalogue and this table holds their keys. What a row carries is therefore a
 * *name for* a sentence rather than the sentence, and the difference matters:
 * this module is evaluated once, at import, while the language can change at
 * any point afterwards. Baking `t()` into the literals below would freeze the
 * whole catalogue in whatever language the app launched in, and the switcher in
 * Settings would appear to do nothing to any screen that lists an exercise.
 *
 * `title`, `rationale` and `cue` survive as **getters** over those keys, so
 * every reader — including the ones that are plain functions with no hook to
 * call — resolves at the moment it reads rather than at the moment this file
 * loaded. See `exerciseText` below.
 */

import { LANGUAGES, getLanguage, translatorFor, type Key } from '@/shared/lib/i18n';

/** How the catalogue is grouped where the UI shows a category. */
export type ExerciseCategory = 'Fitness' | 'Mobility' | 'Habit' | 'Recovery';

/**
 * Loaded work versus work that survives a flare.
 *
 * Never rendered. A high-pain day keeps track B and drops track A, so the user
 * still has a session on the morning they most want to skip one.
 */
export type ExerciseTrack = 'A' | 'B';

/**
 * Where the exercise is performed.
 *
 * `none` is the habit: being barefoot at home is not done in a position, and
 * the table it comes from writes it as a dash rather than a place.
 *
 * Never rendered either — no surface prints it, which is why there are no
 * position labels in the catalogue. A screen that starts showing one needs to
 * add `exercises.position.*` keys before it can.
 */
export type ExercisePosition = 'standing' | 'seated' | 'wall' | 'none';

/** Seconds per phase of one rep. Only the heel raises carry it. */
export type Tempo = {
  up: number;
  hold: number;
  down: number;
};

/**
 * The three copy keys an exercise carries, narrowed off the catalogue itself.
 *
 * Derived rather than declared, so a key written here that the catalogue does
 * not define is a compile error at the row that writes it — the same guarantee
 * `CatalogueFor<L>` gives the translations, pointed the other way.
 */
export type ExerciseTitleKey = Extract<Key, `exercises.${string}.title`>;
export type ExerciseRationaleKey = Extract<Key, `exercises.${string}.rationale`>;
export type ExerciseCueKey = Extract<Key, `exercises.${string}.cue`>;

type ExerciseCopyKey = ExerciseTitleKey | ExerciseRationaleKey | ExerciseCueKey;

/**
 * One line of exercise copy, in the language that is current *now*.
 *
 * Deliberately not a hook. Most of the readers below are plain functions —
 * `movesFor`, the offload filter, the clip prefetcher — and a hook is not
 * available to any of them. A component that wants its titles to repaint the
 * instant the language changes should hold a `useT()` of its own; this is what
 * makes the text correct rather than what makes it reactive.
 */
export function exerciseText(key: ExerciseCopyKey): string {
  return translatorFor(getLanguage())(key);
}

export type Exercise = {
  id: string;
  titleKey: ExerciseTitleKey;
  rationaleKey: ExerciseRationaleKey;
  cueKey: ExerciseCueKey;
  /** Shown in the UI. Resolved on read — see the note at the top of the file. */
  readonly title: string;
  category: ExerciseCategory;
  /** Internal only, never shown. */
  track: ExerciseTrack;
  position: ExercisePosition;
  /** If true, removed on high-pain days. */
  loadsFascia: boolean;
  tempo?: Tempo;
  defaultSets?: number;
  defaultReps?: number;
  defaultHoldSec?: number;
  perSide: boolean;
  /** One line, shown on arrival in the player. Resolved on read. */
  readonly rationale: string;
  /** The single most-missed technique point. Resolved on read. */
  readonly cue: string;
};

/** A row as the table below writes it: everything but the three resolved lines. */
type ExerciseSpec = Omit<Exercise, 'title' | 'rationale' | 'cue'>;

/**
 * A row, with its copy attached as getters rather than as strings.
 *
 * One helper so the eighteen entries stay readable as data. The getters close
 * over `spec` rather than over `this`, so a row survives being destructured or
 * spread into the `{ exercise, prescription }` shapes `adapt.ts` builds.
 */
function withCopy(spec: ExerciseSpec): Exercise {
  return {
    ...spec,
    get title() {
      return exerciseText(spec.titleKey);
    },
    get rationale() {
      return exerciseText(spec.rationaleKey);
    },
    get cue() {
      return exerciseText(spec.cueKey);
    },
  };
}

/** The tempo both heel-raise variants run at: three up, two held, three down. */
export const HEEL_RAISE_TEMPO: Tempo = { up: 3, hold: 2, down: 3 };

/**
 * The catalogue.
 *
 * Ordered roughly as the program meets them — stretches, the loaded work, the
 * intrinsic and balance work, then the two things that close a session.
 */
export const EXERCISE_LIST: readonly Exercise[] = [
  withCopy({
    id: 'fascia_stretch',
    titleKey: 'exercises.fasciaStretch.title',
    rationaleKey: 'exercises.fasciaStretch.rationale',
    cueKey: 'exercises.fasciaStretch.cue',
    category: 'Mobility',
    track: 'A',
    position: 'seated',
    loadsFascia: false,
    defaultSets: 10,
    defaultHoldSec: 10,
    perSide: true,
  }),
  withCopy({
    id: 'calf_stretch_straight',
    titleKey: 'exercises.calfStretchStraight.title',
    rationaleKey: 'exercises.calfStretchStraight.rationale',
    cueKey: 'exercises.calfStretchStraight.cue',
    category: 'Mobility',
    track: 'A',
    position: 'wall',
    loadsFascia: false,
    defaultSets: 3,
    defaultHoldSec: 30,
    perSide: true,
  }),
  withCopy({
    id: 'calf_stretch_bent',
    titleKey: 'exercises.calfStretchBent.title',
    rationaleKey: 'exercises.calfStretchBent.rationale',
    cueKey: 'exercises.calfStretchBent.cue',
    category: 'Mobility',
    track: 'A',
    position: 'wall',
    loadsFascia: false,
    defaultSets: 3,
    defaultHoldSec: 30,
    perSide: true,
  }),
  withCopy({
    id: 'heel_raise_towel',
    titleKey: 'exercises.heelRaiseTowel.title',
    rationaleKey: 'exercises.heelRaiseTowel.rationale',
    cueKey: 'exercises.heelRaiseTowel.cue',
    category: 'Fitness',
    track: 'A',
    position: 'standing',
    loadsFascia: true,
    tempo: HEEL_RAISE_TEMPO,
    defaultSets: 3,
    defaultReps: 12,
    perSide: true,
  }),
  withCopy({
    id: 'heel_raise_plain',
    titleKey: 'exercises.heelRaisePlain.title',
    rationaleKey: 'exercises.heelRaisePlain.rationale',
    cueKey: 'exercises.heelRaisePlain.cue',
    category: 'Fitness',
    track: 'A',
    position: 'standing',
    loadsFascia: true,
    tempo: HEEL_RAISE_TEMPO,
    defaultSets: 3,
    defaultReps: 15,
    perSide: true,
  }),
  withCopy({
    id: 'short_foot_seated',
    titleKey: 'exercises.shortFootSeated.title',
    rationaleKey: 'exercises.shortFootSeated.rationale',
    cueKey: 'exercises.shortFootSeated.cue',
    category: 'Fitness',
    track: 'B',
    position: 'seated',
    loadsFascia: false,
    defaultSets: 3,
    defaultReps: 10,
    defaultHoldSec: 5,
    perSide: true,
  }),
  withCopy({
    id: 'short_foot_double',
    titleKey: 'exercises.shortFootDouble.title',
    rationaleKey: 'exercises.shortFootDouble.rationale',
    cueKey: 'exercises.shortFootDouble.cue',
    category: 'Fitness',
    track: 'B',
    position: 'standing',
    loadsFascia: false,
    defaultSets: 3,
    defaultReps: 10,
    defaultHoldSec: 5,
    perSide: false,
  }),
  withCopy({
    id: 'short_foot_single',
    titleKey: 'exercises.shortFootSingle.title',
    rationaleKey: 'exercises.shortFootSingle.rationale',
    cueKey: 'exercises.shortFootSingle.cue',
    category: 'Fitness',
    track: 'B',
    position: 'standing',
    loadsFascia: false,
    defaultSets: 3,
    defaultReps: 10,
    defaultHoldSec: 5,
    perSide: true,
  }),
  withCopy({
    id: 'toe_spread',
    titleKey: 'exercises.toeSpread.title',
    rationaleKey: 'exercises.toeSpread.rationale',
    cueKey: 'exercises.toeSpread.cue',
    category: 'Fitness',
    track: 'B',
    position: 'seated',
    loadsFascia: false,
    defaultSets: 3,
    defaultReps: 10,
    defaultHoldSec: 5,
    perSide: false,
  }),
  withCopy({
    id: 'band_inversion',
    titleKey: 'exercises.bandInversion.title',
    rationaleKey: 'exercises.bandInversion.rationale',
    cueKey: 'exercises.bandInversion.cue',
    category: 'Fitness',
    track: 'B',
    position: 'seated',
    loadsFascia: false,
    defaultSets: 3,
    defaultReps: 15,
    perSide: true,
  }),
  withCopy({
    id: 'hip_abduction',
    titleKey: 'exercises.hipAbduction.title',
    rationaleKey: 'exercises.hipAbduction.rationale',
    cueKey: 'exercises.hipAbduction.cue',
    category: 'Fitness',
    track: 'B',
    position: 'standing',
    loadsFascia: false,
    defaultSets: 3,
    defaultReps: 15,
    perSide: true,
  }),
  withCopy({
    id: 'single_leg_hold',
    titleKey: 'exercises.singleLegHold.title',
    rationaleKey: 'exercises.singleLegHold.rationale',
    cueKey: 'exercises.singleLegHold.cue',
    category: 'Fitness',
    track: 'B',
    position: 'standing',
    loadsFascia: false,
    defaultSets: 3,
    defaultHoldSec: 30,
    perSide: true,
  }),
  withCopy({
    id: 'eyes_closed_stand',
    titleKey: 'exercises.eyesClosedStand.title',
    rationaleKey: 'exercises.eyesClosedStand.rationale',
    cueKey: 'exercises.eyesClosedStand.cue',
    category: 'Fitness',
    track: 'B',
    position: 'standing',
    loadsFascia: false,
    defaultSets: 3,
    defaultHoldSec: 20,
    perSide: false,
  }),
  withCopy({
    id: 'heel_toe_walk',
    titleKey: 'exercises.heelToeWalk.title',
    rationaleKey: 'exercises.heelToeWalk.rationale',
    cueKey: 'exercises.heelToeWalk.cue',
    category: 'Fitness',
    track: 'B',
    position: 'standing',
    loadsFascia: false,
    defaultSets: 3,
    defaultReps: 10,
    perSide: false,
  }),
  withCopy({
    id: 'ankle_rocks',
    titleKey: 'exercises.ankleRocks.title',
    rationaleKey: 'exercises.ankleRocks.rationale',
    cueKey: 'exercises.ankleRocks.cue',
    category: 'Mobility',
    track: 'B',
    position: 'standing',
    loadsFascia: false,
    defaultSets: 2,
    defaultReps: 15,
    perSide: true,
  }),
  withCopy({
    id: 'foot_roll',
    titleKey: 'exercises.footRoll.title',
    rationaleKey: 'exercises.footRoll.rationale',
    cueKey: 'exercises.footRoll.cue',
    category: 'Recovery',
    track: 'A',
    position: 'seated',
    loadsFascia: false,
    defaultHoldSec: 120,
    perSide: false,
  }),
  withCopy({
    id: 'barefoot_home',
    titleKey: 'exercises.barefootHome.title',
    rationaleKey: 'exercises.barefootHome.rationale',
    cueKey: 'exercises.barefootHome.cue',
    category: 'Habit',
    track: 'B',
    position: 'none',
    loadsFascia: false,
    perSide: false,
  }),
  withCopy({
    id: 'breathing_reset',
    titleKey: 'exercises.breathingReset.title',
    rationaleKey: 'exercises.breathingReset.rationale',
    cueKey: 'exercises.breathingReset.cue',
    category: 'Recovery',
    track: 'A',
    position: 'seated',
    loadsFascia: false,
    defaultHoldSec: 60,
    perSide: false,
  }),
];

/** The catalogue by id, built once. */
export const EXERCISES_BY_ID: Readonly<Record<string, Exercise>> = Object.fromEntries(
  EXERCISE_LIST.map((exercise) => [exercise.id, exercise]),
);

/** Every id in the catalogue, as a type. */
export type ExerciseId = (typeof EXERCISE_LIST)[number]['id'];

/**
 * One exercise, by id.
 *
 * Throws on an unknown id rather than returning undefined: every id in the app
 * comes from a table in this folder, so a miss is a typo in a block definition
 * and should fail where it is written, not render as a blank row.
 */
export function exerciseById(id: string): Exercise {
  const exercise = EXERCISES_BY_ID[id];
  if (exercise == null) throw new Error(`[program] unknown exercise id: ${id}`);
  return exercise;
}

/**
 * The catalogue keyed by title, in every language at once.
 *
 * The player and the clip prefetcher are handed *titles* rather than ids — see
 * `movesFor` — and have to get back to the entry behind one to read its dose,
 * its cue and its demonstration. That reverse lookup used to be a map built at
 * module scope from `exercise.title`, which the moment titles became
 * translatable meant a map of English titles being searched with a Russian one.
 *
 * Indexing all three languages rather than the current one is what makes it
 * total. A title can arrive from a `useMemo` that was computed before the user
 * switched language, or from a component that has not re-rendered yet, and
 * neither of those should cost the user their video and their dose. Fifty-four
 * entries, built once, and no way for it to go stale.
 */
let titlesToExercises: Map<string, Exercise> | null = null;

function titleIndex(): Map<string, Exercise> {
  if (titlesToExercises != null) return titlesToExercises;
  const index = new Map<string, Exercise>();
  for (const language of LANGUAGES) {
    const t = translatorFor(language);
    for (const exercise of EXERCISE_LIST) index.set(t(exercise.titleKey), exercise);
  }
  titlesToExercises = index;
  return index;
}

/**
 * The exercise a title names, in any language the app ships.
 *
 * Null rather than a throw: the three retest measurements travel through the
 * player as titles too, and they are tests rather than exercises. A miss is a
 * normal answer here, and every reader is written to survive it.
 */
export function exerciseByTitle(title: string): Exercise | null {
  return titleIndex().get(title) ?? null;
}

/** The two heel-raise variants, which are the only exercises a flare removes. */
export function loadsFascia(id: string): boolean {
  return EXERCISES_BY_ID[id]?.loadsFascia === true;
}

/** The catalogue's four categories, in this list's own key. */
const CATEGORY_KEYS = {
  Fitness: 'exercises.category.fitness',
  Mobility: 'exercises.category.mobility',
  Recovery: 'exercises.category.recovery',
  Habit: 'exercises.category.habit',
} as const satisfies Record<ExerciseCategory, Key>;

/**
 * What kind of effort a row asks for, as a word.
 *
 * The `ExerciseCategory` union is written in English because it is data — the
 * tables above are keyed by it and the two screens that colour a row switch on
 * it. This is the only thing that turns one into something to read.
 */
export function exerciseCategoryLabel(category: ExerciseCategory): string {
  return translatorFor(getLanguage())(CATEGORY_KEYS[category]);
}
