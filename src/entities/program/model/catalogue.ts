/**
 * The program itself: which exercises each kind of day runs, block by block.
 *
 * Everything else in this folder is scheduling or arithmetic around this table.
 * The order inside a cell is not cosmetic — intrinsic foot work has to precede
 * `band_inversion`, which is why that exercise does not appear before Block 4,
 * and why a cell is a list rather than a set.
 *
 * `fascia_stretch` appears in Block 1's Strength day and nowhere else. From
 * Block 2 it leaves the session entirely and attaches to the morning check-in,
 * because its first repetition has to happen before the foot takes weight —
 * see `morning-stretch.ts`.
 */

import type { DayKind } from './day-templates';

/** One block's four days, as ordered exercise ids. */
export type BlockPlan = Readonly<Record<DayKind, readonly string[]>>;

/** Block index (1-based) to its four day plans. */
export const BLOCK_PLANS: Readonly<Record<number, BlockPlan>> = {
  // Settle — nothing loaded yet. The foot is being asked to move, not to work.
  1: {
    strength: ['fascia_stretch', 'calf_stretch_straight', 'toe_spread'],
    mobility: ['calf_stretch_straight', 'calf_stretch_bent', 'ankle_rocks'],
    balance: ['eyes_closed_stand', 'ankle_rocks'],
    recovery: ['foot_roll', 'breathing_reset'],
  },
  // Strengthen — the loaded heel raise and the short foot both start here.
  2: {
    strength: ['heel_raise_towel', 'short_foot_seated'],
    mobility: ['calf_stretch_straight', 'short_foot_seated'],
    balance: ['short_foot_seated', 'single_leg_hold'],
    recovery: ['foot_roll', 'toe_spread'],
  },
  // Load — short foot comes off the chair and takes bodyweight.
  3: {
    strength: ['heel_raise_towel', 'short_foot_double'],
    mobility: ['calf_stretch_bent', 'short_foot_double'],
    balance: ['short_foot_double', 'single_leg_hold'],
    recovery: ['foot_roll', 'toe_spread'],
  },
  // Build — one leg at a time, and the first band work.
  4: {
    strength: ['heel_raise_towel', 'band_inversion'],
    mobility: ['calf_stretch_straight', 'short_foot_single'],
    balance: ['short_foot_single', 'heel_toe_walk'],
    recovery: ['foot_roll', 'ankle_rocks'],
  },
  // Control — the hip joins in, because a hip that gives way lands the load
  // back on the arch.
  5: {
    strength: ['heel_raise_towel', 'hip_abduction'],
    mobility: ['calf_stretch_bent', 'ankle_rocks'],
    balance: ['eyes_closed_stand', 'heel_toe_walk'],
    recovery: ['foot_roll', 'breathing_reset'],
  },
  // Sustain — the towel comes off and the habit goes in, which is what the
  // user is left holding when the program ends.
  6: {
    strength: ['heel_raise_plain', 'band_inversion', 'hip_abduction'],
    mobility: ['calf_stretch_straight', 'barefoot_home'],
    balance: ['single_leg_hold', 'barefoot_home'],
    recovery: ['foot_roll', 'barefoot_home'],
  },
};

/**
 * The exercises a block's day of this kind runs, before adaptation.
 *
 * Falls back to the last defined block rather than throwing: a day past the end
 * of the plan is maintenance, and maintenance supplies its own list — but a
 * caller that has not switched over yet should get the closest real plan rather
 * than an empty session.
 */
export function planFor(blockIndex: number, kind: DayKind): readonly string[] {
  const plan = BLOCK_PLANS[blockIndex] ?? BLOCK_PLANS[6];
  return plan[kind];
}

/** Every exercise a block runs, across all four of its days. */
function idsIn(blockIndex: number): readonly string[] {
  const plan = BLOCK_PLANS[blockIndex];
  if (plan == null) return [];
  return [...plan.strength, ...plan.mobility, ...plan.balance, ...plan.recovery];
}

/**
 * The first exercise a block introduces, by id.
 *
 * What is actually new in it, read off the tables rather than written out
 * beside them — a hand-kept list of "what changes in block 3" is a second
 * source of truth, and the one that goes stale. Null for the first block and
 * for a block that only rearranges what the user already knows.
 *
 * The order of the cells is what makes the answer useful: Strength comes first,
 * so the id this returns is the heaviest new thing rather than whichever one
 * happens to sort first.
 */
export function firstNewExercise(blockIndex: number): string | null {
  if (blockIndex <= 1) return null;
  const before = new Set(idsIn(blockIndex - 1));
  return idsIn(blockIndex).find((id) => !before.has(id)) ?? null;
}
