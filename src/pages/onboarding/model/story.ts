/**
 * The rules behind the onboarding's story screens (the web funnel's v4/v5):
 * how the first move felt and what is said back, which of her first week's
 * moves the plan peek shows, and the line under the plan's name.
 *
 * Pure, and kept out of the screens for the reason `journey.ts` gives.
 */

/** "How did that feel?", in words: no scale, no number. The values are the
 * web funnel's, kept on the phone and never sent anywhere. */
export const FELT = ['lighter', 'better', 'same', 'unsure'] as const;
export type Felt = (typeof FELT)[number];

/**
 * What is said back: the feet waking up, with her own goal, for lighter or a
 * little better; that it is normal on day 1 for the same or hard to tell.
 * Never a dead end, never a promise.
 */
export function feltAnswer(felt: string | null): 'waking' | 'normal' {
  return felt === 'lighter' || felt === 'better' ? 'waking' : 'normal';
}

/** She did the first move (the one-minute Day 1 move), rather than skipping it. */
export function moved(answers: Readonly<Record<string, unknown>>): boolean {
  const value = answers.firstMove;
  return value === 'done' || (Array.isArray(value) && value[0] === 'done');
}

export type PeekTiles = {
  /** Week 1, today: the first move of her first week. */
  week1: string;
  /** Week 2, locked: the next move of hers, or the first again. */
  week2: string;
  /** Weeks 3 to the end, locked. */
  later: string;
  /** How many different moves her first week has. */
  count: number;
};

/**
 * The tiles of the plan peek, from her own first week (`firstWeekDeck`): the
 * first move as week 1's photo, the next two behind the locked weeks, each
 * one a move she will really do. Repeats are dropped; with fewer than three
 * different moves the last one fills the gap, as the web funnel's does.
 * Null with no moves at all.
 */
export function peekTiles(moves: readonly string[]): PeekTiles | null {
  const unique = moves.filter((id, i) => moves.indexOf(id) === i);
  if (unique.length === 0) return null;
  const week1 = unique[0];
  const week2 = unique[1] ?? week1;
  const later = unique[2] ?? week2;
  return { week1, week2, later, count: unique.length };
}

/**
 * Which line goes under the plan's name: a runner's sessions go before or
 * after the runs; a seated start says so; anyone else gets the weeks and
 * minutes alone. "Seated" only when the plan really starts seated.
 */
export function planLineKind(kind: 'desk' | 'runner' | 'feet', seatedStart: boolean): 'runner' | 'seated' | 'plain' {
  if (kind === 'runner') return 'runner';
  return seatedStart ? 'seated' : 'plain';
}

/** The wake time asked in the onboarding, minutes past midnight: 7:00 until she picks. */
export const WAKE_DEFAULT_MINUTES = 7 * 60;

export function wakeOf(answers: Readonly<Record<string, unknown>>): number {
  const raw = Array.isArray(answers.wake) ? answers.wake[0] : answers.wake;
  const value = typeof raw === 'string' ? Number(raw) : NaN;
  return Number.isInteger(value) && value >= 0 && value < 24 * 60 ? value : WAKE_DEFAULT_MINUTES;
}

/** The first-step routine is her hero only when mornings are what she dreads. */
export function routineIsHero(answers: Readonly<Record<string, unknown>>): boolean {
  return Array.isArray(answers.life) && answers.life.includes('mornings');
}
