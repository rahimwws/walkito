/**
 * The shape of the plan: fourteen-day blocks, each closed by a retest.
 *
 * Two lengths are offered. The twelve-week plan runs six blocks; the six-week
 * plan is its first three, unchanged — not a compressed version of the same
 * material. Shortening a plan by shortening its blocks would move the retests
 * off the fourteen-day rhythm the measurements are calibrated against, so the
 * short plan simply stops after Load.
 */

/** The two plan lengths, in days. */
export type PlanLength = 42 | 84;

export type Block = {
  /** 1-based. Block 0 is reserved for the day-one baseline retest. */
  index: number;
  name: string;
  /** 1-based inclusive day the block opens on. */
  startDay: number;
  /** 1-based inclusive day it closes on. */
  endDay: number;
  /** The day inside it that is a retest rather than a session. */
  retestDay: number;
};

/**
 * The day-one baseline: the three tests, before any training.
 *
 * Without it the first block's retest had nothing to be read against, so the
 * first "before and after" the user ever saw arrived on day 28. With it, the
 * day-14 result is already a change.
 */
export const BASELINE_DAY = 1;

/** Every block is this long. The retest lands on its last day. */
export const BLOCK_LENGTH = 14;

/** Block names, in order. The six-week plan uses the first three. */
const BLOCK_NAMES = ['Settle', 'Strengthen', 'Load', 'Build', 'Control', 'Sustain'] as const;

function buildBlocks(count: number): readonly Block[] {
  return Array.from({ length: count }, (_, i): Block => {
    const startDay = i * BLOCK_LENGTH + 1;
    const endDay = startDay + BLOCK_LENGTH - 1;
    return {
      index: i + 1,
      name: BLOCK_NAMES[i],
      startDay,
      endDay,
      // The block closes on a measurement, which is why `endDay` and
      // `retestDay` are the same day rather than the retest sitting after it.
      retestDay: endDay,
    };
  });
}

/** Six blocks, days 1–84. */
export const BLOCKS_12_WEEK: readonly Block[] = buildBlocks(6);

/** Three blocks, days 1–42. */
export const BLOCKS_6_WEEK: readonly Block[] = buildBlocks(3);

/** The blocks a plan of this length runs. */
export function blocksFor(planLength: PlanLength): readonly Block[] {
  return planLength === 42 ? BLOCKS_6_WEEK : BLOCKS_12_WEEK;
}

/** The last day of the plan — its final block's last day. */
export function lastDayOf(planLength: PlanLength): number {
  const blocks = blocksFor(planLength);
  return blocks[blocks.length - 1].endDay;
}

/**
 * The block a day falls in, or null past the end of the plan.
 *
 * Null is the maintenance signal: a day beyond the final block has no block,
 * and the caller is expected to switch schedules rather than clamp to the last
 * one. Clamping would keep prescribing Sustain forever.
 */
export function blockFor(dayNumber: number, planLength: PlanLength): Block | null {
  const blocks = blocksFor(planLength);
  return blocks.find((block) => dayNumber >= block.startDay && dayNumber <= block.endDay) ?? null;
}

/** Whether a day is one of the plan's retest days. */
export function isRetestDay(dayNumber: number, planLength: PlanLength): boolean {
  if (dayNumber === BASELINE_DAY) return true;
  return blocksFor(planLength).some((block) => block.retestDay === dayNumber);
}

/** Every retest day in the plan, in order. */
export function retestDays(planLength: PlanLength): readonly number[] {
  return blocksFor(planLength).map((block) => block.retestDay);
}
