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

import { track } from '@/shared/lib/analytics';
import { kv } from '@/shared/lib/storage';

import { blockFor, lastDayOf, type PlanLength } from './blocks';
import { kindFor } from './day-templates';

/** The program's own phase. Maintenance is not the end; it is the second half. */
export type ProgramPhase = 'program' | 'maintenance';

/**
 * Where the plan leans, from what the user said hurts.
 *
 * - `foot`: heel, arch, plantar fascia — the plan as written.
 * - `calf`: achilles and shin. The same plan with the calf and soleus given
 *   more room, because that is where those complaints are loaded from.
 * - `hip`: knee and hip. The foot-and-calf plan is still the base — it is what
 *   this app is — with the hip work brought forward from Control.
 */
export type ProgramFocus = 'foot' | 'calf' | 'hip';

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
  focus: ProgramFocus;
};

/** One check-in: what they said, when, and where it hurt. */
export type PainEntry = {
  /** 0–10. */
  score: number;
  /** Epoch milliseconds — the day says which day, this says when inside it. */
  at: number;
  /** Zone ids from the leg map. Absent when nobody pointed at anything. */
  zones?: string[];
};

export type DayLog = {
  dayNumber: number;
  /** `YYYY-MM-DD`, the day the entry belongs to. */
  date: string;
  /**
   * The day's *first* reading, 0–10, or null if nobody logged one.
   *
   * The morning one, as the name says. It used to be whatever was written last,
   * which quietly made the name a lie the moment a second check-in was allowed:
   * somebody who woke at seven and felt fine by evening would have had their
   * seven overwritten by a two, and the engine would have adapted tomorrow off
   * a reading taken twelve hours after the moment it cares about.
   *
   * Every reading, including this one, is also in `painEntries`.
   */
  painMorning: number | null;
  morningStretchDone: boolean;
  sessionCompleted: boolean;
  /** Ended on a mid-session pain report. Still counts as completed. */
  sessionEndedEarly: boolean;
  hoursOnFeet: number | null;
  /** Exercise ids actually done. */
  exercisesDone: string[];
  /**
   * Where it hurt at the most recent check-in, as zone ids from the leg map.
   *
   * Optional, because every entry written before the map existed has none and a
   * required field would make those unreadable. Empty and absent mean the same
   * thing — nobody pointed at anything — which is why nothing distinguishes
   * them.
   */
  painZones?: string[];
  /**
   * Every check-in made on this day, oldest first.
   *
   * A day is not one answer. A foot can hurt in the morning, settle by midday
   * and hurt again after a walk, and a model with one slot per day makes the
   * user choose which of those was true — or silently keeps the last one, which
   * is the same thing with the choice hidden. Asking twice is normal; this is
   * where both answers go.
   *
   * Optional for the same reason as `painZones`: entries written before it
   * existed have none, and `painMorning` still carries their single reading.
   */
  painEntries?: PainEntry[];
  /**
   * When the session was finished, as epoch milliseconds.
   *
   * The date on the entry says which day it belongs to; this says when inside
   * it. The programme needs both — a plan that runs on dates alone would offer
   * tomorrow's session at one minute past midnight to somebody who trained at
   * eleven, and the rest between sessions is the part that does the work.
   */
  completedAt?: number;
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
    focus: 'foot',
  };
}

/**
 * A default that is written down.
 *
 * `readState` used to hand back a fresh default whenever nothing was stored,
 * and nothing ever stored one — `setProgramState` had no callers. So every
 * launch began a new plan dated today, and every user was on day 1 every day:
 * the path never moved, no block ever closed, and no retest ever came round.
 * Persisting the first default is what makes "the day you installed" a fact
 * rather than something recomputed each morning.
 */
function seeded(now: number): ProgramState {
  const fresh = defaultState(now);
  kv.set(STATE_KEY, JSON.stringify(fresh));
  return fresh;
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
    return seeded(now);
  }
  const raw = kv.getString(STATE_KEY);
  if (raw == null) return seeded(now);
  try {
    const parsed = JSON.parse(raw) as Partial<ProgramState>;
    const planLength: PlanLength = parsed.planLength === 42 ? 42 : 84;
    if (typeof parsed.startDate !== 'string' || !/^\d{4}-\d{2}-\d{2}$/.test(parsed.startDate)) {
      return seeded(now);
    }
    return {
      planLength,
      startDate: parsed.startDate,
      // Clamped on read as well as on write: a positive offset stored by an
      // older build would otherwise accelerate the plan.
      progressionOffset: Math.min(Number(parsed.progressionOffset) || 0, 0),
      phase: parsed.phase === 'maintenance' ? 'maintenance' : 'program',
      focus: parsed.focus === 'calf' || parsed.focus === 'hip' ? parsed.focus : 'foot',
    };
  } catch (error) {
    console.warn('[program] stored state unreadable, starting fresh', error);
    return seeded(now);
  }
}

let state: ProgramState = readState(Date.now());

const stateSubscribers = new Set<() => void>();

function emitState(): void {
  for (const listener of stateSubscribers) listener();
}

export function subscribeState(listener: () => void): () => void {
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

/**
 * Begins the plan the user just chose, today.
 *
 * Called once, when onboarding finishes. The start date is today rather than
 * the install date: the plan the user was shown began when they agreed to it,
 * and a fortnight spent browsing before signing up must not arrive as two weeks
 * of missed days.
 */
export function startProgram(
  plan: Pick<ProgramState, 'planLength' | 'progressionOffset' | 'focus'>,
  now: number = Date.now(),
): ProgramState {
  return setProgramState({
    ...plan,
    startDate: toDateKey(new Date(now)),
    phase: 'program',
  });
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
  // On the transition only. Both the player and Today's ticks write the day
  // repeatedly, and a completion counted once per write would inflate every
  // retention chart built on it.
  if (next.sessionCompleted && !existing.sessionCompleted) {
    const block = blockFor(dayNumber, state.planLength);
    track('session_completed', {
      day: dayNumber,
      block: block?.index ?? 0,
      kind: kindFor(dayNumber),
      checkpoint: block?.retestDay === dayNumber,
    });
  }
  if (next.morningStretchDone && !existing.morningStretchDone) {
    track('morning_stretch_done', { day: dayNumber });
  }
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
/**
 * Record a check-in, without discarding the last one.
 *
 * Appends rather than overwrites, which is the whole point: a foot that hurt at
 * seven, settled by noon and hurt again after a walk has given three true
 * answers, and a model with one slot per day makes the user pick which of them
 * counts. It also keeps `painMorning` honest — that field is the day's *first*
 * reading, so it is written once and then left alone however many times
 * somebody checks in after it.
 *
 * `painZones` tracks the newest entry, because it answers "where does it hurt"
 * in the present tense and the session offered next is built from it.
 */
export function logPain(
  dayNumber: number,
  score: number,
  zones: readonly string[] = [],
  now: number = Date.now(),
): DayLog {
  const existing = logs[dayNumber];
  const entry: PainEntry = { score, at: now, ...(zones.length > 0 ? { zones: [...zones] } : {}) };
  const entries = [...(existing?.painEntries ?? []), entry];
  // That a check-in happened, and how many there have been today. Never the
  // score or the zones — see the note at the top of `shared/lib/analytics`.
  track('checkin_logged', { day: dayNumber, entries_today: entries.length });

  return writeLog(
    dayNumber,
    {
      painEntries: entries,
      // First wins. An entry already on file means the morning reading has been
      // taken, whatever the clock says now.
      painMorning: existing?.painMorning ?? score,
      painZones: [...zones],
    },
    now,
  );
}

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
 * The most recent reading for a day, or null.
 *
 * Distinct from `painOn`, which is the morning. This is the one to show when
 * saying how the foot is *now* — after an evening check-in the morning figure
 * is history, and quoting it back would tell somebody their foot hurts when
 * they have just said it stopped.
 */
export function painLatestOn(dayNumber: number): number | null {
  const entries = logs[dayNumber]?.painEntries;
  if (entries != null && entries.length > 0) return entries[entries.length - 1].score;
  // Written before check-ins were a list. Its single reading is both the first
  // and the last one there is.
  return logs[dayNumber]?.painMorning ?? null;
}

/** Every check-in made on a day, oldest first. */
export function painEntriesOn(dayNumber: number): readonly PainEntry[] {
  const log = logs[dayNumber];
  if (log?.painEntries != null) return log.painEntries;
  // Back-fill the shape for an entry written before the list existed, so
  // callers never need to know which era a log came from.
  if (log?.painMorning != null) return [{ score: log.painMorning, at: 0 }];
  return [];
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

/**
 * When this person usually finishes a session, minutes past midnight.
 *
 * A median over the completion stamps of the last three weeks, so one late
 * night does not move it. Null until there are enough to be a habit — five
 * sessions is the floor, below which "usually" would be a guess.
 *
 * What it is for: the session reminder used to land a quarter of an hour
 * after waking for everyone, including the people who always train at lunch.
 */
export function usualSessionMinute(dayNumber: number, window = 21, minimum = 5): number | null {
  const minutes: number[] = [];
  for (let day = Math.max(1, dayNumber - window); day < dayNumber; day += 1) {
    const at = logs[day]?.completedAt;
    if (at == null) continue;
    const d = new Date(at);
    minutes.push(d.getHours() * 60 + d.getMinutes());
  }
  if (minutes.length < minimum) return null;
  minutes.sort((a, b) => a - b);
  const middle = Math.floor(minutes.length / 2);
  return minutes.length % 2 === 0
    ? Math.round((minutes[middle - 1] + minutes[middle]) / 2)
    : minutes[middle];
}
