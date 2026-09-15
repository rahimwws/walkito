/**
 * What the program remembers, and how it works out what day it is.
 *
 * One rule governs this whole file: **`currentDay` is derived, never counted.**
 * A counter looks simpler right up until someone flies east, reinstalls the
 * app, or leaves it closed for a fortnight — then it is silently wrong and
 * every screen downstream inherits the error. Two dates subtracted cannot
 * drift, so the day number is recomputed from the start date every time it is
 * asked for.
 *
 * Everything here works offline. There is no server in the read path.
 */

import { useSyncExternalStore } from 'react';

import { kv } from '@/shared/lib/storage';

import { lastDayOf, type PlanLength } from './blocks';

/** The program's own phase. Maintenance is not the end; it is the second half. */
export type ProgramPhase = 'program' | 'maintenance';

export type ProgramState = {
  planLength: PlanLength;
  /** Calendar date the plan began, as `YYYY-MM-DD` in the user's local time. */
  startDate: string;
  /**
   * How far back the plan has been walked, if at all.
   *
   * Never positive: the plan does not accelerate. See `adapt.ts`.
   */
  progressionOffset: number;
  phase: ProgramPhase;
};

export type DayLog = {
  dayNumber: number;
  /** `YYYY-MM-DD`, the day the entry belongs to. */
  date: string;
  /** Morning check-in, 0–10, or null if they have not logged one. */
  painMorning: number | null;
  morningStretchDone: boolean;
  sessionCompleted: boolean;
  /** Ended on a mid-session pain report. Still counts as completed. */
  sessionEndedEarly: boolean;
  hoursOnFeet: number | null;
  /** Exercise ids actually done. */
  exercisesDone: string[];
};

const DAY_MS = 86_400_000;

const STATE_KEY = 'program/state';
const LOGS_KEY = 'program/logs';
const VERSION_KEY = 'program/schema';

/**
 * The shape of what is on disk.
 *
 * Bumped when a stored record would be read wrongly by this build rather than
 * merely incompletely. Version 2 drops the backdated start and the sample
 * fortnight that shipped with version 1: a device carrying those would keep
 * opening on day 17 with completions nobody performed, and no amount of correct
 * code downstream can tell that apart from a real history.
 */
const SCHEMA_VERSION = 2;

/**
 * Whether the record on disk was written by this build.
 *
 * Read once. A mismatch discards the program's own keys and nothing else —
 * the profile, the appearance override and the onboarding flag are not ours to
 * throw away.
 */
function schemaCurrent(): boolean {
  return Number(kv.getString(VERSION_KEY)) === SCHEMA_VERSION;
}

function markSchemaCurrent(): void {
  kv.set(VERSION_KEY, String(SCHEMA_VERSION));
}

/**
 * A fresh install starts on day 1.
 *
 * This used to backdate the start by sixteen days so the screens opened on the
 * sample fortnight they were designed against. That is exactly the wrong
 * default for a real user: they installed the app today, so today is day 1 of
 * Settle, and every completed day on the path from here is one they did.
 */
const SEED_DAYS_ELAPSED = 0;

/** A `Date` as `YYYY-MM-DD` in local time. */
export function toDateKey(date: Date): string {
  const year = date.getFullYear();
  const month = `${date.getMonth() + 1}`.padStart(2, '0');
  const day = `${date.getDate()}`.padStart(2, '0');
  return `${year}-${month}-${day}`;
}

/** A `YYYY-MM-DD` key back to local midnight. */
export function fromDateKey(key: string): Date {
  const [year, month, day] = key.split('-').map(Number);
  return new Date(year, (month ?? 1) - 1, day ?? 1);
}

/**
 * Whole calendar days between two date keys.
 *
 * Both sides are pinned to local midnight before subtracting, so a daylight
 * saving change — which makes one day 23 or 25 hours long — cannot round a day
 * away. Subtracting raw timestamps is what produces the classic "the app
 * skipped a day in March" bug.
 */
export function daysBetween(fromKey: string, toKey: string): number {
  const from = fromDateKey(fromKey).getTime();
  const to = fromDateKey(toKey).getTime();
  return Math.round((to - from) / DAY_MS);
}

/**
 * The day number for a date, 1-based.
 *
 * Day 1 is the start date itself. Days before it come back as zero or negative,
 * which callers treat as "the plan has not started" rather than clamping — a
 * clamp would show day 1's session to someone whose plan begins next week.
 */
export function dayNumberFor(state: ProgramState, dateKey: string): number {
  return daysBetween(state.startDate, dateKey) + 1;
}

/** A start date that puts the user `elapsed` days in as of now. */
function backdated(elapsed: number, now: number): string {
  return toDateKey(new Date(now - elapsed * DAY_MS));
}

function defaultState(now: number): ProgramState {
  return {
    planLength: 84,
    startDate: backdated(SEED_DAYS_ELAPSED, now),
    progressionOffset: 0,
    phase: 'program',
  };
}

/**
 * State off disk, or a seeded default.
 *
 * Anything unreadable is replaced rather than thrown. A corrupt preferences
 * blob should cost the user their history, not their ability to open the app.
 */
function readState(now: number): ProgramState {
  if (!schemaCurrent()) {
    // Stale or absent. Clear both program keys together so the day number and
    // the history can never come from different schema versions.
    kv.remove(STATE_KEY);
    kv.remove(LOGS_KEY);
    markSchemaCurrent();
    return defaultState(now);
  }
  const raw = kv.getString(STATE_KEY);
  if (raw == null) return defaultState(now);
  try {
    const parsed = JSON.parse(raw) as Partial<ProgramState>;
    const planLength: PlanLength = parsed.planLength === 42 ? 42 : 84;
    if (typeof parsed.startDate !== 'string' || !/^\d{4}-\d{2}-\d{2}$/.test(parsed.startDate)) {
      return defaultState(now);
    }
    return {
      planLength,
      startDate: parsed.startDate,
      // Clamped on read as well as on write: a positive offset stored by an
      // older build would otherwise accelerate the plan.
      progressionOffset: Math.min(Number(parsed.progressionOffset) || 0, 0),
      phase: parsed.phase === 'maintenance' ? 'maintenance' : 'program',
    };
  } catch (error) {
    console.warn('[program] stored state unreadable, starting fresh', error);
    return defaultState(now);
  }
}

let state: ProgramState = readState(Date.now());

const stateSubscribers = new Set<() => void>();

function emitState(): void {
  for (const listener of stateSubscribers) listener();
}

function subscribeState(listener: () => void): () => void {
  stateSubscribers.add(listener);
  return () => {
    stateSubscribers.delete(listener);
  };
}

function snapshotState(): ProgramState {
  return state;
}

export function programState(): ProgramState {
  return state;
}

/** Merge a change into the stored state and tell everyone watching. */
export function setProgramState(patch: Partial<ProgramState>): ProgramState {
  const next: ProgramState = {
    ...state,
    ...patch,
    progressionOffset: Math.min(patch.progressionOffset ?? state.progressionOffset, 0),
  };
  state = next;
  kv.set(STATE_KEY, JSON.stringify(next));
  emitState();
  return next;
}

export function useProgramState(): ProgramState {
  return useSyncExternalStore(subscribeState, snapshotState, snapshotState);
}

/**
 * Which day of the plan a moment falls on.
 *
 * `now` is a parameter rather than read inside, so the whole engine stays
 * testable without mocking the clock.
 */
export function currentDay(now: number = Date.now(), from: ProgramState = state): number {
  return dayNumberFor(from, toDateKey(new Date(now)));
}

/** Whether the plan has run past its last block, whatever the stored phase says. */
export function pastPlanEnd(dayNumber: number, from: ProgramState = state): boolean {
  return dayNumber > lastDayOf(from.planLength);
}

/**
 * The phase a day belongs to.
 *
 * Derived from the day rather than trusted from storage, so a plan that ran
 * past its end while the app was closed is already in maintenance the next time
 * it opens instead of waiting for something to flip the flag.
 */
export function phaseFor(dayNumber: number, from: ProgramState = state): ProgramPhase {
  return from.phase === 'maintenance' || pastPlanEnd(dayNumber, from) ? 'maintenance' : 'program';
}

// ---------------------------------------------------------------------------
// Day logs
// ---------------------------------------------------------------------------

function readLogs(): Record<number, DayLog> {
  const raw = kv.getString(LOGS_KEY);
  if (raw == null) return {};
  try {
    const parsed = JSON.parse(raw) as Record<string, DayLog>;
    const valid: Record<number, DayLog> = {};
    for (const [key, value] of Object.entries(parsed)) {
      const day = Number(key);
      if (Number.isFinite(day) && value != null) valid[day] = value;
    }
    return valid;
  } catch (error) {
    console.warn('[program] stored day logs unreadable, ignoring', error);
    return {};
  }
}

const logs: Record<number, DayLog> = readLogs();

const logSubscribers = new Set<() => void>();

function subscribeLogs(listener: () => void): () => void {
  logSubscribers.add(listener);
  return () => {
    logSubscribers.delete(listener);
  };
}

/**
 * Bumped on every write so `useSyncExternalStore` sees a new snapshot.
 *
 * The log map is mutated in place rather than replaced, because half the engine
 * reads it synchronously; a version number is what makes that mutation visible
 * to React without handing every reader a fresh object each render.
 */
let logsVersion = 0;

function logsSnapshot(): number {
  return logsVersion;
}

/** A blank entry, so callers never have to null-check a day that exists. */
export function emptyLog(dayNumber: number, date: string): DayLog {
  return {
    dayNumber,
    date,
    painMorning: null,
    morningStretchDone: false,
    sessionCompleted: false,
    sessionEndedEarly: false,
    hoursOnFeet: null,
    exercisesDone: [],
  };
}

export function logFor(dayNumber: number): DayLog | undefined {
  return logs[dayNumber];
}

export function allLogs(): Readonly<Record<number, DayLog>> {
  return logs;
}

/** Write part of a day's entry, creating it if this is the first thing logged. */
export function writeLog(
  dayNumber: number,
  patch: Partial<Omit<DayLog, 'dayNumber' | 'date'>>,
  now: number = Date.now(),
): DayLog {
  const existing = logs[dayNumber] ?? emptyLog(dayNumber, toDateKey(new Date(now)));
  const next: DayLog = { ...existing, ...patch };
  logs[dayNumber] = next;
  logsVersion += 1;
  kv.set(LOGS_KEY, JSON.stringify(logs));
  for (const listener of logSubscribers) listener();
  return next;
}

/** Re-renders on any log write. The value is a version, not the data. */
export function useLogsVersion(): number {
  return useSyncExternalStore(subscribeLogs, logsSnapshot, logsSnapshot);
}

/** The calendar date a program day falls on, from the start date. */
export function dateKeyForDay(dayNumber: number, from: ProgramState = state): string {
  return toDateKey(new Date(fromDateKey(from.startDate).getTime() + (dayNumber - 1) * DAY_MS));
}

// ---------------------------------------------------------------------------
// Derived history
// ---------------------------------------------------------------------------

/**
 * Logged morning pain for a day, or null.
 *
 * Only what the user actually entered. The engine treats null as "unknown" and
 * never as zero — assuming no pain because nobody logged any is how an app ends
 * up congratulating someone on a morning they could not walk.
 */
export function painOn(dayNumber: number): number | null {
  return logs[dayNumber]?.painMorning ?? null;
}

/**
 * Mean logged pain over the days before `dayNumber`, or null.
 *
 * Skips days with no entry rather than treating them as zero, and returns null
 * when fewer than `minimum` real readings fall in the window — an average of one
 * day is not an average.
 */
export function painAverage(dayNumber: number, window: number, minimum = 3): number | null {
  let sum = 0;
  let count = 0;
  for (let day = Math.max(1, dayNumber - window); day < dayNumber; day += 1) {
    const pain = painOn(day);
    if (pain != null) {
      sum += pain;
      count += 1;
    }
  }
  return count >= minimum ? sum / count : null;
}

/** How many days back the last completed session was, from `dayNumber`. */
export function daysSinceLastSession(dayNumber: number): number {
  for (let day = dayNumber - 1; day >= 1; day -= 1) {
    if (logs[day]?.sessionCompleted === true) return dayNumber - day;
  }
  // Nothing logged at all: the distance is however far into the plan they are,
  // which on day 1 is zero rather than infinity.
  return dayNumber - 1;
}

/** Hours on feet logged for a day, or null. */
export function hoursOnFeetOn(dayNumber: number): number | null {
  return logs[dayNumber]?.hoursOnFeet ?? null;
}

/**
 * The user's ordinary day, in hours on their feet.
 *
 * A median over what has been logged, so one airport day does not raise the
 * baseline it is supposed to be measured against. Null until there is enough to
 * be a baseline at all.
 */
export function hoursBaseline(dayNumber: number, window = 28, minimum = 5): number | null {
  const values: number[] = [];
  for (let day = Math.max(1, dayNumber - window); day < dayNumber; day += 1) {
    const hours = hoursOnFeetOn(day);
    if (hours != null) values.push(hours);
  }
  if (values.length < minimum) return null;
  values.sort((a, b) => a - b);
  const middle = Math.floor(values.length / 2);
  return values.length % 2 === 0 ? (values[middle - 1] + values[middle]) / 2 : values[middle];
}
