/**
 * What kind of day each slot of the week is.
 *
 * Three strength days a week — Monday, Wednesday, Friday — is the "every second
 * day" of the loading protocol this program is built on, spaced so the tissue
 * has a day between loads. A fourth would not make it work faster; it would
 * remove the recovery the effect depends on.
 *
 * The week is fixed to the plan, not to the calendar: day 1 is Monday of week 1
 * whatever weekday the user actually started on. Anchoring to real weekdays
 * would mean someone starting on a Saturday gets a rest day second, and their
 * first loaded day three days later than someone who started on a Monday.
 */

/**
 * The four kinds of day.
 *
 * Lower case because it is what the app already stores and renders; the tables
 * in the spec capitalise them for reading.
 */
export type DayKind = 'strength' | 'mobility' | 'balance' | 'recovery';

export type DayTemplate = {
  /** 1–7, Monday first. */
  slot: number;
  kind: DayKind;
  minutes: number;
};

/** The week, Monday to Sunday. */
export const WEEK: readonly DayTemplate[] = [
  { slot: 1, kind: 'strength', minutes: 7 },
  { slot: 2, kind: 'mobility', minutes: 5 },
  { slot: 3, kind: 'strength', minutes: 7 },
  { slot: 4, kind: 'balance', minutes: 5 },
  { slot: 5, kind: 'strength', minutes: 7 },
  { slot: 6, kind: 'mobility', minutes: 5 },
  { slot: 7, kind: 'recovery', minutes: 3 },
];

/** How long each kind runs, for callers that have a kind but no day. */
export const MINUTES_BY_KIND: Readonly<Record<DayKind, number>> = {
  strength: 7,
  mobility: 5,
  balance: 5,
  recovery: 3,
};

/** A retest is three tests, and about this long. */
export const RETEST_TESTS = 3;
export const RETEST_MINUTES = 4;

/** Which slot of the week a program day lands on. Day 1 is slot 1. */
export function slotFor(dayNumber: number): number {
  // `% 7` maps day 7 to 0, which is the seventh slot rather than a zeroth one.
  const remainder = dayNumber % 7;
  return remainder === 0 ? 7 : remainder;
}

/**
 * The template for a day, before any adaptation.
 *
 * Does not know about retests: a retest replaces whatever slot it lands on, and
 * that substitution belongs to the engine that also knows the plan length.
 */
export function templateFor(dayNumber: number): DayTemplate {
  return WEEK[slotFor(dayNumber) - 1];
}

/** The kind a day would be if nothing adapted it. */
export function kindFor(dayNumber: number): DayKind {
  return templateFor(dayNumber).kind;
}

/**
 * The first day of a block that is a given kind.
 *
 * Used to find the block's Mobility day, which is what a long absence falls
 * back to, and its first Strength day, which is where a load change is
 * announced.
 */
export function firstDayOfKind(
  startDay: number,
  endDay: number,
  kind: DayKind,
): number | null {
  for (let day = startDay; day <= endDay; day += 1) {
    if (kindFor(day) === kind) return day;
  }
  return null;
}
