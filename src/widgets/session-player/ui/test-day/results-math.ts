import type { MeasuredGoal, ResultRow } from '../../model/test-day';

/**
 * The arithmetic behind the results screen's pictures and its one-line
 * verdict, kept out of the component so a test can pin it down.
 *
 * Types only, so this stays loadable in a plain `bun test`.
 */

/** The three tests, in the order they were taken. The gap between legs is not
 * a test of its own: it is read off the calf raises and drawn on their card. */
export const CARD_ORDER = ['calf_raises', 'arch_hold', 'balance'] as const satisfies readonly MeasuredGoal[];
export type CardGoal = (typeof CARD_ORDER)[number];

/** Where the largest of the three marks (today, last time, goal) sits on the
 * track: short of the end, so the goal's flag and a bar that passed it both
 * have room. */
export const TRACK_HEADROOM = 0.84;

/**
 * The value the full width of a comparison track stands for.
 *
 * One scale per card, shared by today's bar, last time's dot, the goal's flag
 * and the two leg bars under it, so every mark on the card can be read against
 * every other.
 */
export function trackScale(value: number, previous: number | null, target: number): number {
  const top = Math.max(value, previous ?? 0, target, 1);
  return top / TRACK_HEADROOM;
}

/** A value's place on a track, 0–1. */
export function trackAt(value: number, scale: number): number {
  if (!(scale > 0)) return 0;
  return Math.max(0, Math.min(1, value / scale));
}

export type Verdict =
  | { kind: 'first' }
  | { kind: 'steady' }
  | { kind: 'one'; type: CardGoal }
  | { kind: 'two' }
  | { kind: 'all' };

/**
 * What the headline says. It names what went up and never what went down: a
 * dip is on its card, in grey, as information. With nothing up it says only
 * that the tests are done.
 */
export function verdictOf(rows: readonly Pick<ResultRow, 'type' | 'change'>[]): Verdict {
  const cards = rows.filter((row): row is typeof row & { type: CardGoal } =>
    (CARD_ORDER as readonly MeasuredGoal[]).includes(row.type),
  );
  if (cards.length === 0 || cards.every((row) => row.change == null)) return { kind: 'first' };
  const up = CARD_ORDER.filter((type) => cards.some((row) => row.type === type && row.change != null && row.change > 0));
  if (up.length === 0) return { kind: 'steady' };
  if (up.length === 1) return { kind: 'one', type: up[0] };
  if (up.length === CARD_ORDER.length) return { kind: 'all' };
  return { kind: 'two' };
}

/** Whole days between two `YYYY-MM-DD` keys, never less than one: a retest
 * taken the same day as the last one is still "a day ago" rather than "0". */
export function daysBetween(from: string, to: string): number {
  const a = Date.UTC(...parts(from));
  const b = Date.UTC(...parts(to));
  return Math.max(1, Math.round((b - a) / 86_400_000));
}

function parts(key: string): [number, number, number] {
  const [y, m, d] = key.split('-').map(Number);
  return [y ?? 1970, (m ?? 1) - 1, d ?? 1];
}

/** "+4", "−2" (a true minus sign), "0". */
export function signed(n: number): string {
  if (n > 0) return `+${n}`;
  if (n < 0) return `−${Math.abs(n)}`;
  return '0';
}
