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
 */

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
 */
export type ExercisePosition = 'standing' | 'seated' | 'wall' | 'none';

/** Seconds per phase of one rep. Only the heel raises carry it. */
export type Tempo = {
  up: number;
  hold: number;
  down: number;
};

export type Exercise = {
  id: string;
  /** Shown in the UI. */
  title: string;
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
  /** One line, shown on arrival in the player. */
  rationale: string;
  /** The single most-missed technique point. */
  cue: string;
};

/** The tempo both heel-raise variants run at: three up, two held, three down. */
export const HEEL_RAISE_TEMPO: Tempo = { up: 3, hold: 2, down: 3 };

/**
 * The catalogue.
 *
 * Ordered roughly as the program meets them — stretches, the loaded work, the
 * intrinsic and balance work, then the two things that close a session.
 */
export const EXERCISE_LIST: readonly Exercise[] = [
  {
    id: 'fascia_stretch',
    title: 'Plantar stretch',
    category: 'Mobility',
    track: 'A',
    position: 'seated',
    loadsFascia: false,
    defaultSets: 10,
    defaultHoldSec: 10,
    perSide: true,
    rationale: 'Do the first one before your foot touches the floor.',
    cue: 'Pull the toes back until you feel the arch, not the calf.',
  },
  {
    id: 'calf_stretch_straight',
    title: 'Calf stretch',
    category: 'Mobility',
    track: 'A',
    position: 'wall',
    loadsFascia: false,
    defaultSets: 3,
    defaultHoldSec: 30,
    perSide: true,
    rationale: 'A tight calf pulls on the heel all day.',
    cue: 'Back leg straight, heel down, hips forward.',
  },
  {
    id: 'calf_stretch_bent',
    title: 'Soleus stretch',
    category: 'Mobility',
    track: 'A',
    position: 'wall',
    loadsFascia: false,
    defaultSets: 3,
    defaultHoldSec: 30,
    perSide: true,
    rationale: 'The deeper calf muscle only lets go with the knee bent.',
    cue: 'Bend the back knee until you feel it lower, near the heel.',
  },
  {
    id: 'heel_raise_towel',
    title: 'Heel raises',
    category: 'Fitness',
    track: 'A',
    position: 'standing',
    loadsFascia: true,
    tempo: HEEL_RAISE_TEMPO,
    defaultSets: 3,
    defaultReps: 12,
    perSide: true,
    rationale: 'This is the one that moves pain fastest.',
    cue: 'Towel under the toes. Without it you’re just training calves.',
  },
  {
    id: 'heel_raise_plain',
    title: 'Single-leg raises',
    category: 'Fitness',
    track: 'A',
    position: 'standing',
    loadsFascia: true,
    tempo: HEEL_RAISE_TEMPO,
    defaultSets: 3,
    defaultReps: 15,
    perSide: true,
    rationale: 'The version you keep after the program ends.',
    cue: 'Three seconds up, three down. Speed is what makes it useless.',
  },
  {
    id: 'short_foot_seated',
    title: 'Short foot',
    category: 'Fitness',
    track: 'B',
    position: 'seated',
    loadsFascia: false,
    defaultSets: 3,
    defaultReps: 10,
    defaultHoldSec: 5,
    perSide: true,
    rationale: 'The muscle that holds your arch sits inside your foot.',
    cue: 'Don’t curl the toes. Pull the ball of the foot toward the heel.',
  },
  {
    id: 'short_foot_double',
    title: 'Short foot, standing',
    category: 'Fitness',
    track: 'B',
    position: 'standing',
    loadsFascia: false,
    defaultSets: 3,
    defaultReps: 10,
    defaultHoldSec: 5,
    perSide: false,
    rationale: 'Same muscle, now holding your weight.',
    cue: 'Toes stay flat and long. Only the arch lifts.',
  },
  {
    id: 'short_foot_single',
    title: 'Short foot, one leg',
    category: 'Fitness',
    track: 'B',
    position: 'standing',
    loadsFascia: false,
    defaultSets: 3,
    defaultReps: 10,
    defaultHoldSec: 5,
    perSide: true,
    rationale: 'One foot at a time is where the weak side shows.',
    cue: 'Keep the big toe down. If it lifts, the arch is cheating.',
  },
  {
    id: 'toe_spread',
    title: 'Toe spread',
    category: 'Fitness',
    track: 'B',
    position: 'seated',
    loadsFascia: false,
    defaultSets: 3,
    defaultReps: 10,
    defaultHoldSec: 5,
    perSide: false,
    rationale: 'Toes that can spread share the load with the arch.',
    cue: 'Spread wide, then hold. The lift is not the point.',
  },
  {
    id: 'band_inversion',
    title: 'Band turn-in',
    category: 'Fitness',
    track: 'B',
    position: 'seated',
    loadsFascia: false,
    defaultSets: 3,
    defaultReps: 15,
    perSide: true,
    rationale: 'Turning the foot in trains the muscle that runs under the arch.',
    cue: 'Move the foot, not the leg. The knee stays still.',
  },
  {
    id: 'hip_abduction',
    title: 'Hip abduction',
    category: 'Fitness',
    track: 'B',
    position: 'standing',
    loadsFascia: false,
    defaultSets: 3,
    defaultReps: 15,
    perSide: true,
    rationale: 'A hip that gives way lands the load on the arch.',
    cue: 'Push through the heel, not the toes.',
  },
  {
    id: 'single_leg_hold',
    title: 'Single-leg hold',
    category: 'Fitness',
    track: 'B',
    position: 'standing',
    loadsFascia: false,
    defaultSets: 3,
    defaultHoldSec: 30,
    perSide: true,
    rationale: 'Standing on one leg is the test your foot fails first.',
    cue: 'Look at one spot. Let the foot wobble — it’s meant to.',
  },
  {
    id: 'eyes_closed_stand',
    title: 'Eyes-closed stand',
    category: 'Fitness',
    track: 'B',
    position: 'standing',
    loadsFascia: false,
    defaultSets: 3,
    defaultHoldSec: 20,
    perSide: false,
    rationale: 'With the eyes shut, the foot has to do the balancing.',
    cue: 'Stand near a wall. Reaching for it is fine.',
  },
  {
    id: 'heel_toe_walk',
    title: 'Heel-to-toe walk',
    category: 'Fitness',
    track: 'B',
    position: 'standing',
    loadsFascia: false,
    defaultSets: 3,
    defaultReps: 10,
    perSide: false,
    rationale: 'Walking heel to toe is the arch loading and unloading in order.',
    cue: 'Heel lands first, then roll. Slow enough to stop mid-step.',
  },
  {
    id: 'ankle_rocks',
    title: 'Ankle rocks',
    category: 'Mobility',
    track: 'B',
    position: 'standing',
    loadsFascia: false,
    defaultSets: 2,
    defaultReps: 15,
    perSide: true,
    rationale: 'An ankle that bends lets the heel stay down.',
    cue: 'Knee travels over the toes, heel stays on the floor.',
  },
  {
    id: 'foot_roll',
    title: 'Foot roll',
    category: 'Recovery',
    track: 'A',
    position: 'seated',
    loadsFascia: false,
    defaultHoldSec: 120,
    perSide: false,
    rationale: 'Rolling settles the tissue after it has worked.',
    cue: 'Slow and firm. If you’re wincing, ease off.',
  },
  {
    id: 'barefoot_home',
    title: 'Barefoot at home',
    category: 'Habit',
    track: 'B',
    position: 'none',
    loadsFascia: false,
    perSide: false,
    rationale: 'Hours barefoot are hours the foot spends working.',
    cue: 'Indoors only, on flat floors, and build it up slowly.',
  },
  {
    id: 'breathing_reset',
    title: 'Breathing reset',
    category: 'Recovery',
    track: 'A',
    position: 'seated',
    loadsFascia: false,
    defaultHoldSec: 60,
    perSide: false,
    rationale: 'A minute of slow breathing ends the session properly.',
    cue: 'Out for longer than in. That’s the whole thing.',
  },
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

/** The two heel-raise variants, which are the only exercises a flare removes. */
export function loadsFascia(id: string): boolean {
  return EXERCISES_BY_ID[id]?.loadsFascia === true;
}
