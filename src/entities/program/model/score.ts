/**
 * The one number on the Progress page, and where it comes from.
 *
 * Three weighted parts, all of them things the user was actually asked for: how
 * far the four levels have moved, whether morning pain has come down, and how
 * often they have checked in. An unexplained score loses trust inside a
 * fortnight, so nothing enters it that cannot be pointed at on another screen.
 *
 * Recomputed on a retest, on a change in the pain trend, and on a check-in —
 * not on every render. These functions are pure and take their inputs as
 * arguments precisely so the caller owns that decision; nothing here subscribes
 * to anything, and calling it in a render loop would be a caller's bug rather
 * than a reason to memoise inside.
 *
 * Every function is total. Each part is normalised to 0–1 and clamped before it
 * is weighted, because the raw inputs include two divisions — by a level range
 * and by a baseline pain figure — and either of them can be handed a zero or a
 * null by a user with no history. A score that renders as `NaN` is worse than
 * no score at all.
 */

import { MAX_LEVEL, ZONES, type ZoneKey } from './levels';

/** The three parts, and what each is worth. They sum to 100. */
export const SCORE_WEIGHTS = { levels: 50, painTrend: 30, consistency: 20 } as const;

/** How many days of check-ins the consistency part looks at. */
export const CONSISTENCY_WINDOW = 14;

/** 0–1, and never NaN — an unrepresentable figure comes back as the floor. */
function clamp01(value: number): number {
  if (!Number.isFinite(value)) return 0;
  return Math.max(0, Math.min(1, value));
}

/**
 * The four levels as a single 0–1 figure.
 *
 * Level 1 across the board is 0, not 0.2: the scale starts at 1 because there
 * is no zeroth level, and a user who has measured themselves and found the
 * floor should see the floor. Handing them a fifth of the levels weight for
 * turning up would make the score's largest component impossible to move.
 *
 * With no levels at all — nobody has retested yet — the answer is also 0. An
 * unmeasured user scores the floor rather than a flattering default, because
 * the alternative is a score that falls the first time they measure themselves,
 * which is the one event this app must never punish.
 */
export function levelsAvgNormalised(levels: Readonly<Record<ZoneKey, number>> | null): number {
  if (levels == null) return 0;
  let sum = 0;
  for (const zone of ZONES) {
    const level = levels[zone];
    // A missing or unreadable zone counts as level 1 rather than dropping out
    // of the average, so a corrupt field cannot raise the score by shrinking
    // the denominator.
    sum += Number.isFinite(level) ? level : 1;
  }
  const average = sum / ZONES.length;
  // `MAX_LEVEL - 1` is the span, written as an expression so a change to the
  // scale carries here. `clamp01` covers the degenerate case where that span is
  // zero and the division blows up.
  return clamp01((average - 1) / (MAX_LEVEL - 1));
}

/**
 * Improvement in morning pain, as a fraction of where it started.
 *
 * Improvement is pain going down, so the drop is measured against the earlier
 * figure — halving a 6 and halving a 2 are the same achievement in different
 * units, and dividing by the starting point is what makes them score the same.
 *
 * Two floors. Either side missing scores 0, because a trend needs both ends.
 * An earlier figure of zero or less also scores 0: there is no drop available
 * from no pain, and the honest alternatives were to divide by zero or to award
 * the full thirty points to someone who has never logged anything.
 */
export function painTrendNormalised(earlier: number | null, recent: number | null): number {
  if (earlier == null || recent == null) return 0;
  if (!Number.isFinite(earlier) || !Number.isFinite(recent)) return 0;
  if (earlier <= 0) return 0;
  return clamp01((earlier - recent) / earlier);
}

/** Check-ins in the last fortnight, out of fourteen. */
export function consistencyNormalised(checkInsLast14: number): number {
  if (!Number.isFinite(checkInsLast14)) return 0;
  return clamp01(checkInsLast14 / CONSISTENCY_WINDOW);
}

export type ScoreInput = {
  /** Null until the first retest. */
  levels: Readonly<Record<ZoneKey, number>> | null;
  /** Mean morning pain at the far end of the 90-day window. */
  painEarlier: number | null;
  /** Mean morning pain at the near end of it. */
  painRecent: number | null;
  checkInsLast14: number;
};

/** The score, 0–100. */
export function computeScore(input: ScoreInput): number {
  const levels = levelsAvgNormalised(input.levels);
  const pain = painTrendNormalised(input.painEarlier, input.painRecent);
  const consistency = consistencyNormalised(input.checkInsLast14);
  const total =
    levels * SCORE_WEIGHTS.levels +
    pain * SCORE_WEIGHTS.painTrend +
    consistency * SCORE_WEIGHTS.consistency;
  // Each part is already 0–1 and the weights already sum to 100, so this clamp
  // only ever bites if a weight is edited. It stays because the number is
  // rendered into a gauge that draws whatever it is given.
  return Math.round(Math.max(0, Math.min(100, total)));
}
