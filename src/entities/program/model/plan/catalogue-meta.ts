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
  m({ id: 'ankle_rocks', kind: 'mobility', tags: ['balance'], position: 'standing', equipment: [], fascia: false, level: 1, chain: 'mobility', dose: 'stretch' }),
  m({ id: 'eyes_closed_stand', kind: 'balance', tags: ['balance'], position: 'standing', equipment: [], fascia: false, level: 3, chain: 'balance', dose: 'balance' }),
  m({ id: 'foot_roll', kind: 'recovery', tags: ['pain'], position: 'seated', equipment: ['ball'], fascia: false, level: 1, chain: 'recovery', dose: 'recovery' }),
  m({ id: 'heel_raise_towel', kind: 'strength', tags: ['pain', 'calf'], position: 'standing', equipment: ['step', 'towel'], fascia: true, level: 4, chain: 'calf', dose: 'calf' }),
  m({ id: 'short_foot_seated', kind: 'strength', tags: ['arch'], position: 'seated', equipment: [], fascia: false, level: 1, chain: 'arch', dose: 'arch' }),
  m({ id: 'single_leg_hold', kind: 'balance', tags: ['balance', 'symmetry'], position: 'standing', equipment: [], fascia: false, level: 2, chain: 'balance', dose: 'balance' }),
  m({ id: 'short_foot_double', kind: 'strength', tags: ['arch'], position: 'standing', equipment: [], fascia: false, level: 2, chain: 'arch', dose: 'arch' }),
  m({ id: 'short_foot_single', kind: 'strength', tags: ['arch'], position: 'standing', equipment: [], fascia: false, level: 3, chain: 'arch', dose: 'arch' }),
  m({ id: 'band_inversion', kind: 'strength', tags: ['arch'], position: 'seated', equipment: ['band'], fascia: false, level: 3, chain: 'accessory', dose: 'reps' }),
  m({ id: 'hip_abduction', kind: 'strength', tags: ['symmetry', 'balance'], position: 'seated', equipment: [], fascia: false, level: 2, chain: 'hip', dose: 'reps' }),
  m({ id: 'heel_raise_double', kind: 'strength', tags: ['calf'], position: 'standing', equipment: [], fascia: true, level: 2, chain: 'calf', dose: 'calf' }),
  m({ id: 'heel_raise_hold', kind: 'strength', tags: ['calf', 'pain'], position: 'standing', equipment: [], fascia: true, level: 2, chain: 'calf', dose: 'calfHold' }),
  m({ id: 'heel_raise_plain', kind: 'strength', tags: ['calf'], position: 'standing', equipment: [], fascia: true, level: 3, chain: 'calf', dose: 'calf' }),
  m({ id: 'big_toe_lift', kind: 'strength', tags: ['arch'], position: 'seated', equipment: [], fascia: false, level: 1, chain: 'arch', dose: 'arch' }),
  m({ id: 'knee_to_wall', kind: 'mobility', tags: ['calf'], position: 'standing', equipment: [], fascia: false, level: 1, chain: 'mobility', dose: 'stretch' }),
  m({ id: 'balance_pillow', kind: 'balance', tags: ['balance', 'symmetry'], position: 'standing', equipment: ['pillow'], fascia: false, level: 4, chain: 'balance', dose: 'balance' }),
  m({ id: 'heel_drop_straight', kind: 'strength', tags: ['calf'], position: 'standing', equipment: ['step'], fascia: true, level: 4, chain: 'calf', dose: 'calf' }),
  m({ id: 'step_down', kind: 'strength', tags: ['symmetry'], position: 'standing', equipment: ['step'], fascia: false, level: 3, chain: 'hip', dose: 'reps' }),
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
 * step at a time and never more than one level up (`nextAbove`).
 *
 * The single-leg raise on the floor sits between the two-foot hold and the
 * towel raise on a step. Without it the calf work went from both feet on the
 * floor to one foot on a step with a backpack in one move, and with no step it
 * went from the hold straight to pogo hops. Adding it moved the steps above it
 * up by one: `CHAINS_VERSION` and `currentLevels` carry stored levels across.
 *
 * The arch chain starts at the big toe lift. The towel scrunch used to come
 * first, but it mostly works the long toe flexors in the shin, not the small
 * muscles under the arch; the short foot (doming the arch with the toes long)
 * is the arch's own work, so the chain gets there sooner. Taking it out moved
 * the arch steps down by one, which `CHAINS_VERSION` 3 carries across.
 *
 * The calf work starts standing on both feet. The seated raise that came
 * first barely loads the calf, so everybody spent their first week on a move
 * that did nothing, and the evidence for heel pain is about heavy single-leg
 * raises. It left the catalogue with the toe spread, the towel scrunch, the
 * shin raise and the sole massage, which the plan had no good reason to
 * spend time on; `CHAINS_VERSION` 4 moves stored calf levels down by one.
 *
 * Mobility and recovery are not progressions — their order is the rotation.
 */
export const CHAINS: Readonly<Record<ChainName, readonly string[]>> = {
  calf: ['heel_raise_double', 'heel_raise_hold', 'heel_raise_plain', 'heel_raise_towel', 'heel_drop_straight', 'pogo_hops'],
  arch: ['big_toe_lift', 'short_foot_seated', 'short_foot_double', 'short_foot_single'],
  balance: ['single_leg_hold', 'eyes_closed_stand', 'balance_pillow'],
  hip: ['hip_abduction', 'step_down'],
  mobility: ['fascia_stretch', 'calf_stretch_straight', 'calf_stretch_bent', 'knee_to_wall', 'ankle_rocks'],
  recovery: ['foot_roll'],
};

/**
 * The layout of `CHAINS` that stored levels are indices into. A week stored
 * before version 2 has no `_chains` on its levels, and its calf index counts
 * the old calf chain, which had no `heel_raise_plain`. Before version 3 the
 * arch index counted a chain that began with `towel_scrunch`, and before
 * version 4 the calf index counted one that began with `heel_raise_seated`.
 */
export const CHAINS_VERSION = 4;

const CALF_V1 = ['heel_raise_seated', 'heel_raise_double', 'heel_raise_hold', 'heel_raise_towel', 'heel_drop_straight', 'pogo_hops'];
const CALF_V3 = ['heel_raise_seated', 'heel_raise_double', 'heel_raise_hold', 'heel_raise_plain', 'heel_raise_towel', 'heel_drop_straight', 'pogo_hops'];
const ARCH_V2 = ['towel_scrunch', 'big_toe_lift', 'short_foot_seated', 'short_foot_double', 'short_foot_single'];

/** The index in `chain` of the exercise that sat at `index` in `old`; a step no longer on the chain maps to its first. */
function remap(old: readonly string[], chain: readonly string[], index: number | undefined): number {
  const id = old[Math.max(0, Math.min(old.length - 1, index ?? 0))];
  return Math.max(0, chain.indexOf(id));
}

/**
 * Stored chain levels in the current layout: the same exercise on every chain,
 * whatever layout they were saved in. Idempotent, so a week can be passed
 * through it on every read, including weeks restored from the server.
 */
export function currentLevels<T extends Record<ChainName, number> & { _chains?: number }>(levels: T): T {
  if (levels._chains === CHAINS_VERSION) return levels;
  const version = levels._chains ?? 1;
  const calf = version === 1 ? remap(CALF_V1, CHAINS.calf, levels.calf) : version < 4 ? remap(CALF_V3, CHAINS.calf, levels.calf) : levels.calf;
  const arch = version < 3 ? remap(ARCH_V2, CHAINS.arch, levels.arch) : levels.arch;
  return { ...levels, calf, arch, _chains: CHAINS_VERSION };
}

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
  heel_raise_bent_knee: 'heel_raise_double',
  band_eversion: 'band_inversion',
  single_leg_mini_squat: 'step_down',
  band_side_steps: 'hip_abduction',
  ankle_circles: 'ankle_rocks',
};
