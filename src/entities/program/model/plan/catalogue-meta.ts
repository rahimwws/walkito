/**
 * What the weekly plan needs to know about each exercise, beyond what the
 * player shows.
 *
 * `exercises.ts` is the catalogue as the player sees it — copy, tempo, default
 * dose. This is the catalogue as the plan sees it: which goal an exercise
 * serves, what it needs to be done at all, how hard it is, and which chain it
 * climbs. Kept apart so the player never has to care about progression, and so
 * the planning rules can be read in one table.
 *
 * Ids follow `exercises.ts`. The one naming difference from the plan spec is
 * `short_foot_double`, which is the spec's `short_foot_standing` — renaming it
 * would orphan every `exercisesDone` entry already logged under the old id.
 */

export type PlanKind = 'strength' | 'mobility' | 'balance' | 'recovery';

/** What an exercise is *for*. A goal's exercises are the ones carrying its tag. */
export type GoalTag = 'pain' | 'calf' | 'arch' | 'balance' | 'symmetry';

/** Everything the user can say they don't have. A wall is assumed. */
export type Equipment = 'step' | 'band' | 'towel' | 'pillow' | 'ball';
export const EQUIPMENT: readonly Equipment[] = ['step', 'band', 'towel', 'pillow', 'ball'];

export type ChainName = 'calf' | 'arch' | 'balance' | 'hip' | 'mobility' | 'recovery';

/** Which dose table a row reads — see `dose.ts`. */
export type DoseClass = 'calf' | 'calfHold' | 'arch' | 'reps' | 'balance' | 'stretch' | 'recovery';

export type PlanMeta = {
  id: string;
  kind: PlanKind;
  tags: readonly GoalTag[];
  position: 'seated' | 'standing';
  equipment: readonly Equipment[];
  /** Loads the plantar fascia: dropped on high-pain days and in week one. */
  fascia: boolean;
  /** 1–5. Progression moves along a chain one level at a time. */
  level: 1 | 2 | 3 | 4 | 5;
  /** The chain it sits on, or an accessory slot that rotates without one. */
  chain: ChainName | 'accessory';
  dose: DoseClass;
};

const m = (row: PlanMeta): PlanMeta => row;

export const PLAN_META: readonly PlanMeta[] = [
  m({ id: 'fascia_stretch', kind: 'mobility', tags: ['pain'], position: 'seated', equipment: [], fascia: false, level: 1, chain: 'mobility', dose: 'stretch' }),
  m({ id: 'calf_stretch_straight', kind: 'mobility', tags: ['pain', 'calf'], position: 'standing', equipment: [], fascia: false, level: 1, chain: 'mobility', dose: 'stretch' }),
  m({ id: 'calf_stretch_bent', kind: 'mobility', tags: ['pain', 'calf'], position: 'standing', equipment: [], fascia: false, level: 1, chain: 'mobility', dose: 'stretch' }),
  m({ id: 'toe_spread', kind: 'strength', tags: ['arch'], position: 'seated', equipment: [], fascia: false, level: 1, chain: 'accessory', dose: 'reps' }),
  m({ id: 'ankle_rocks', kind: 'mobility', tags: ['balance'], position: 'standing', equipment: [], fascia: false, level: 1, chain: 'mobility', dose: 'stretch' }),
  m({ id: 'eyes_closed_stand', kind: 'balance', tags: ['balance'], position: 'standing', equipment: [], fascia: false, level: 3, chain: 'balance', dose: 'balance' }),
  m({ id: 'foot_roll', kind: 'recovery', tags: ['pain'], position: 'seated', equipment: ['ball'], fascia: false, level: 1, chain: 'recovery', dose: 'recovery' }),
  m({ id: 'heel_raise_towel', kind: 'strength', tags: ['pain', 'calf'], position: 'standing', equipment: ['step', 'towel'], fascia: true, level: 4, chain: 'calf', dose: 'calf' }),
  m({ id: 'short_foot_seated', kind: 'strength', tags: ['arch'], position: 'seated', equipment: [], fascia: false, level: 1, chain: 'arch', dose: 'arch' }),
  m({ id: 'single_leg_hold', kind: 'balance', tags: ['balance', 'symmetry'], position: 'standing', equipment: [], fascia: false, level: 2, chain: 'balance', dose: 'balance' }),
  m({ id: 'short_foot_double', kind: 'strength', tags: ['arch'], position: 'standing', equipment: [], fascia: false, level: 2, chain: 'arch', dose: 'arch' }),
  m({ id: 'short_foot_single', kind: 'strength', tags: ['arch'], position: 'standing', equipment: [], fascia: false, level: 3, chain: 'arch', dose: 'arch' }),
  m({ id: 'band_inversion', kind: 'strength', tags: ['arch'], position: 'seated', equipment: ['band'], fascia: false, level: 3, chain: 'accessory', dose: 'reps' }),
  m({ id: 'hip_abduction', kind: 'strength', tags: ['symmetry', 'balance'], position: 'standing', equipment: ['band'], fascia: false, level: 2, chain: 'hip', dose: 'reps' }),
  m({ id: 'heel_raise_double', kind: 'strength', tags: ['calf'], position: 'standing', equipment: [], fascia: true, level: 2, chain: 'calf', dose: 'calf' }),
  m({ id: 'heel_raise_seated', kind: 'strength', tags: ['calf'], position: 'seated', equipment: [], fascia: false, level: 1, chain: 'calf', dose: 'calf' }),
  m({ id: 'heel_raise_hold', kind: 'strength', tags: ['calf', 'pain'], position: 'standing', equipment: [], fascia: true, level: 2, chain: 'calf', dose: 'calfHold' }),
  m({ id: 'big_toe_lift', kind: 'strength', tags: ['arch'], position: 'seated', equipment: [], fascia: false, level: 1, chain: 'arch', dose: 'arch' }),
  m({ id: 'towel_scrunch', kind: 'strength', tags: ['arch'], position: 'seated', equipment: ['towel'], fascia: false, level: 1, chain: 'arch', dose: 'arch' }),
  m({ id: 'knee_to_wall', kind: 'mobility', tags: ['calf'], position: 'standing', equipment: [], fascia: false, level: 1, chain: 'mobility', dose: 'stretch' }),
  m({ id: 'balance_pillow', kind: 'balance', tags: ['balance', 'symmetry'], position: 'standing', equipment: ['pillow'], fascia: false, level: 4, chain: 'balance', dose: 'balance' }),
  m({ id: 'heel_drop_straight', kind: 'strength', tags: ['calf'], position: 'standing', equipment: ['step'], fascia: true, level: 4, chain: 'calf', dose: 'calf' }),
  m({ id: 'tibialis_raise', kind: 'strength', tags: ['balance'], position: 'standing', equipment: [], fascia: false, level: 2, chain: 'accessory', dose: 'reps' }),
  m({ id: 'step_down', kind: 'strength', tags: ['symmetry'], position: 'standing', equipment: ['step'], fascia: false, level: 3, chain: 'hip', dose: 'reps' }),
  m({ id: 'sole_massage', kind: 'recovery', tags: ['pain'], position: 'seated', equipment: [], fascia: false, level: 1, chain: 'recovery', dose: 'recovery' }),
  m({ id: 'pogo_hops', kind: 'strength', tags: ['calf'], position: 'standing', equipment: [], fascia: true, level: 5, chain: 'calf', dose: 'calf' }),
];

export const PLAN_META_BY_ID: Readonly<Record<string, PlanMeta>> = Object.fromEntries(
  PLAN_META.map((row) => [row.id, row]),
);

export function planMeta(id: string): PlanMeta | undefined {
  return PLAN_META_BY_ID[id];
}

/**
 * The progression chains, easiest first. The engine moves along a chain one
 * step at a time and never jumps.
 *
 * Mobility and recovery are not progressions — their order is the rotation.
 */
export const CHAINS: Readonly<Record<ChainName, readonly string[]>> = {
  calf: ['heel_raise_seated', 'heel_raise_double', 'heel_raise_hold', 'heel_raise_towel', 'heel_drop_straight', 'pogo_hops'],
  arch: ['towel_scrunch', 'big_toe_lift', 'short_foot_seated', 'short_foot_double', 'short_foot_single'],
  balance: ['single_leg_hold', 'eyes_closed_stand', 'balance_pillow'],
  hip: ['hip_abduction', 'step_down'],
  mobility: ['fascia_stretch', 'calf_stretch_straight', 'calf_stretch_bent', 'knee_to_wall', 'ankle_rocks'],
  recovery: ['foot_roll', 'sole_massage'],
};

/** Chains that progress. The other two rotate. */
export const PROGRESSING: readonly ChainName[] = ['calf', 'arch', 'balance', 'hip'];

/**
 * Exercises the spec names whose clips have not been made yet, and what stands
 * in for each until they are. A clip landing in the manifest retires the
 * fallback on its own — `playableId` checks the manifest first.
 *
 * `single_leg_mini_squat` depends on equipment: the step-down when there is a
 * step, the hip abduction otherwise. That choice is made in `playableId`.
 */
export const FALLBACKS: Readonly<Record<string, string>> = {
  heel_toe_walk: 'single_leg_hold',
  heel_raise_plain: 'heel_raise_double',
  heel_drop_bent: 'heel_drop_straight',
  heel_raise_bent_knee: 'heel_raise_seated',
  band_eversion: 'band_inversion',
  band_dorsiflexion: 'tibialis_raise',
  single_leg_mini_squat: 'step_down',
  band_side_steps: 'hip_abduction',
  ankle_circles: 'ankle_rocks',
};
