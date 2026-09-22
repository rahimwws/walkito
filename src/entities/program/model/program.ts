/**
 * The program the user is walking through, as the screens see it.
 *
 * The plan itself now lives in the files beside this one — `blocks.ts` shapes
 * it, `day-templates.ts` fills the week, `catalogue.ts` says what each day
 * runs, and `adapt.ts` decides what today actually is once the user's own
 * history is taken into account. This file is the view onto all of that: the
 * flat day list the path renders, and the retest record.
 *
 * Three things are deliberate:
 *
 * - A day's status is *derived* rather than stored per day, so the path can
 *   never disagree with itself about where the user stands.
 * - Levels are not on `ProgramDay` at all. They only move at a retest
 *   (`RETESTS`), which is what stops them creeping upward just because days
 *   went by. Days measure attendance; levels measure ability, and the screen
 *   must never let one impersonate the other.
 * - `ProgramDay` deliberately carries no dose. Sets and reps depend on the
 *   block *and* on how far back the plan has been walked, so they are resolved
 *   per session rather than baked into the day — which also keeps the spread in
 *   `pain-check.tsx` from inheriting a strength day's prescription.
 */

import { useSyncExternalStore } from 'react';

import { kv } from '@/shared/lib/storage';

import { blocksFor, lastDayOf, BLOCK_LENGTH } from './blocks';
import { planFor } from './catalogue';
import { kindFor, templateFor, RETEST_MINUTES, RETEST_TESTS, type DayKind } from './day-templates';
import { exerciseById, type ExerciseCategory } from './exercises';
import { prescriptionFor } from './prescription';
import {
  MAX_LEVEL,
  ZONES,
  levelFor,
  measureLabel,
  symmetryPct,
  type ZoneKey,
} from './levels';
import {
  currentDay,
  logFor,
  painOn,
  programState,
  toDateKey,
} from './state';

export type SessionKind = DayKind;

export { BLOCK_LENGTH, MAX_LEVEL, RETEST_MINUTES, RETEST_TESTS, levelFor, measureLabel };
export type { ZoneKey };

export type DayStatus =
  /** Trained. */
  | 'done'
  /** An unload day, taken as prescribed. Reads as completed, never as a miss. */
  | 'rest'
  /** Elapsed without a session. Gray, never red. */
  | 'missed'
  /** Where the user stands right now. */
  | 'today'
  | 'upcoming';

export type ProgramDay = {
  /** 0-based position in the program. */
  index: number;
  /** 1-based, as the user counts days. */
  day: number;
  kind: SessionKind;
  minutes: number;
  /** Closes a block: a retest rather than a session. */
  checkpoint: boolean;
  /** 1-based block number. */
  block: number;
};

/** The blocks of the plan the user is actually on. */
export const PLAN_BLOCKS = blocksFor(programState().planLength);

/** Block names, in order. Six on the twelve-week plan, three on the six-week. */
export const BLOCKS = PLAN_BLOCKS.map((block) => block.name);

export const PROGRAM_LENGTH = lastDayOf(programState().planLength);

/**
 * Where the user stands, 0-based.
 *
 * Derived from the start date rather than counted, so it survives time-zone
 * changes and reinstalls — see `state.ts`. Read once at module scope, like the
 * retest record below, so the first paint already has the right day instead of
 * rendering day one and correcting itself.
 */
export const TODAY_INDEX = Math.max(0, Math.min(currentDay() - 1, PROGRAM_LENGTH - 1));

function buildProgram(): ProgramDay[] {
  return Array.from({ length: PROGRAM_LENGTH }, (_, index): ProgramDay => {
    const day = index + 1;
    const block = PLAN_BLOCKS.find((b) => day >= b.startDay && day <= b.endDay);
    const checkpoint = block?.retestDay === day;
    const template = templateFor(day);
    return {
      index,
      day,
      // A retest replaces whatever slot it lands on. The kind is kept from the
      // template rather than overwritten, so a checkpoint that is later
      // resolved into an offload day still knows what it would have been.
      kind: template.kind,
      minutes: checkpoint ? RETEST_MINUTES : template.minutes,
      checkpoint,
      block: block?.index ?? PLAN_BLOCKS.length,
    };
  });
}

export const PROGRAM = buildProgram();

export function blockName(block: number): string {
  return BLOCKS[(block - 1) % BLOCKS.length];
}

/**
 * The exercise titles a day runs.
 *
 * Block-aware, which is why it is a function and no longer a lookup by kind: a
 * Strength day in Settle and a Strength day in Sustain share a name and share
 * nothing else. Titles rather than ids, because every surface that consumes
 * this renders them directly.
 */
export function movesFor(day: ProgramDay): readonly string[] {
  return planFor(day.block, day.kind).map((id) => exerciseById(id).title);
}

/**
 * The day's exercises as the card lists them: what it is, and how much of it.
 *
 * The dose is the part that makes the list a program rather than a set of
 * names — "Heel raises" is a movement, "Heel raises 3 × 12" is a prescription,
 * and it is the second one that changes block to block. Resolved through the
 * stored progression offset so a card showing a stepped-back plan shows the
 * dose the user will actually be asked for.
 */
export type MovePlan = {
  id: string;
  title: string;
  dose: string | null;
  /** What kind of effort it asks for, which is what colours it on screen. */
  category: ExerciseCategory;
};

export function movePlanFor(day: ProgramDay): readonly MovePlan[] {
  const offset = programState().progressionOffset;
  return planFor(day.block, day.kind).map((id) => {
    const exercise = exerciseById(id);
    return {
      id: exercise.id,
      title: exercise.title,
      category: exercise.category,
      dose: prescriptionFor(exercise, day.block, offset)?.label ?? null,
    };
  });
}

/**
 * Whether a day was one the program itself called a rest.
 *
 * A recovery day is assigned by the plan, not chosen by the user, so it can
 * never count against them — this is what keeps rule 2 ("never punish a miss")
 * true for the streak as well as for the copy.
 */
export function isSystemRest(day: ProgramDay): boolean {
  return day.kind === 'recovery';
}

/**
 * A day's state, given where the user stands and whether today's session is
 * already behind them.
 *
 * Reads the real log now rather than a fixed set of missed days. `doneToday`
 * deliberately does not advance the cursor: finishing today does not unlock
 * tomorrow. The path is linear by date, not by progress, so the next node stays
 * upcoming until the date turns over.
 */
export function statusFor(day: ProgramDay, cursor: number, doneToday = false): DayStatus {
  if (day.index > cursor) return 'upcoming';
  if (day.index === cursor) {
    if (!doneToday) return 'today';
    return isSystemRest(day) ? 'rest' : 'done';
  }
  if (isSystemRest(day)) return 'rest';
  // Elapsed with nothing logged. Gray, never red, and never queued for
  // make-up — the program runs on dates.
  return logFor(day.day)?.sessionCompleted === true ? 'done' : 'missed';
}

/** Days actually trained, which is not the same as days elapsed. */
export function completedThrough(cursor: number, doneToday = false): number {
  let total = doneToday ? 1 : 0;
  for (let index = 0; index < cursor; index += 1) {
    const day = PROGRAM[index];
    if (day == null) continue;
    if (isSystemRest(day) || logFor(day.day)?.sessionCompleted === true) total += 1;
  }
  return total;
}

const DAY_MS = 86_400_000;

/** The calendar date a program day falls on, anchored to today. */
export function dateFor(index: number, now: number): number {
  return now + (index - TODAY_INDEX) * DAY_MS;
}

export type RetestRow = {
  zone: ZoneKey;
  /** Measurement at the previous retest. */
  from: string;
  /** Measurement at this one. */
  to: string;
  /** Level before this retest, and after. Equal when the level held — which
   * is a normal outcome, not a failure. */
  wasLevel: number;
  level: number;
};

export type Retest = {
  rows: readonly RetestRow[];
  /** Headline improvement, shown inside the completed checkpoint node. */
  delta: number;
};

/**
 * What the three tests hand back.
 *
 * Three tests but four zones, and that is not an oversight: symmetry is not a
 * fourth thing to do, it is the same calf raise counted on the other side.
 * Deriving it keeps the retest to the three things the user is actually asked
 * to perform, and keeps the app from ever quoting a symmetry figure nobody
 * measured.
 */
export type RetestMeasurements = {
  /** Single-leg calf raises to failure, on the side being rehabilitated. */
  calf: number;
  /** The same test on the other side. */
  otherCalf: number;
  /** Arch hold, in seconds. */
  arch: number;
  /** Single-leg balance, in seconds. */
  balance: number;
};

function zoneValues(measured: RetestMeasurements): Record<ZoneKey, number> {
  return {
    calf: measured.calf,
    arch: measured.arch,
    balance: measured.balance,
    // How far the weaker side sits behind the stronger one. Derived rather than
    // measured, so the app can never quote a symmetry figure nobody performed.
    symmetry: symmetryPct(measured.calf, measured.otherCalf),
  };
}

/** The number written on a measurement, whatever suffix it carries. */
function figure(measure: string): number {
  const value = Number.parseFloat(measure);
  return Number.isFinite(value) ? value : 0;
}

/**
 * The figure a completed checkpoint carries on the path.
 *
 * Calf raises, and only those. It is the test the header already quotes (see
 * `headlineLevels`), so the node and the strip are reading off the same thing
 * rather than summarising the same block two different ways. The seeded retest
 * below went 11 → 19, which is the +8 that node has always shown.
 */
function headlineDelta(rows: readonly RetestRow[]): number {
  const calf = rows.find((row) => row.zone === 'calf');
  return calf == null ? 0 : Math.round(figure(calf.to) - figure(calf.from));
}

/**
 * One retest read against the one before it.
 *
 * Extracted so the seed below and `recordRetest` build a result exactly the
 * same way. A level is always derived from the measurement beside it — there is
 * no path through this file that can record a Lv4 the number does not earn.
 */
function buildRetest(measured: RetestMeasurements, previous: Retest | undefined): Retest {
  const values = zoneValues(measured);
  const rows = ZONES.map((zone): RetestRow => {
    const to = measureLabel(zone, values[zone]);
    const level = levelFor(zone, values[zone]);
    const prior = previous?.rows.find((row) => row.zone === zone);
    return {
      zone,
      // Nothing before it means nothing to have moved from, so the row reads as
      // the level holding rather than as a jump out of a zero.
      from: prior?.to ?? to,
      to,
      wasLevel: prior?.level ?? level,
      level,
    };
  });
  return { rows, delta: headlineDelta(rows) };
}

/**
 * No retest ships with the app.
 *
 * There used to be a seeded baseline and a day-14 result here, and they were
 * the app claiming to have measured a foot it had never seen. Levels are the
 * one number in this product that cannot be gamed, and a level handed to
 * someone on install is a level they did not earn — so the table starts empty
 * and fills only from `recordRetest`.
 */
const SEEDED_RETESTS: Record<number, Retest> = {};

const RETEST_KEY = 'program/retests';

/**
 * Retests the user has actually taken, off disk.
 *
 * Anything unreadable is dropped rather than thrown: a levels table is worth
 * having, but not at the price of a program that will not start.
 */
function storedRetests(): Record<number, Retest> {
  const raw = kv.getString(RETEST_KEY);
  if (raw == null) return {};
  try {
    const parsed = JSON.parse(raw) as Record<string, Retest>;
    const valid: Record<number, Retest> = {};
    for (const [key, value] of Object.entries(parsed)) {
      const day = Number(key);
      if (Number.isFinite(day) && Array.isArray(value?.rows) && value.rows.length > 0) {
        valid[day] = value;
      }
    }
    return valid;
  } catch (error) {
    console.warn('[program] stored retests unreadable, ignoring', error);
    return {};
  }
}

/**
 * Results, keyed by the day the retest was taken. Only checkpoints behind the
 * user appear — a checkpoint with no entry has either not happened yet or went
 * by without being taken, which is also how a node knows to render as
 * unmeasured rather than as a zero.
 *
 * Read at module scope, like the profile name, so the first paint already has
 * the real levels rather than showing the sample and correcting itself.
 */
export const RETESTS: Record<number, Retest> = { ...SEEDED_RETESTS, ...storedRetests() };

const retestSubscribers = new Set<() => void>();

function subscribeRetests(listener: () => void): () => void {
  retestSubscribers.add(listener);
  return () => {
    retestSubscribers.delete(listener);
  };
}

/** Only what the user took. The seed is part of the build, not of their data,
 * so writing it back would bake a sample into a real record. */
function persistRetests(): void {
  const taken: Record<number, Retest> = {};
  for (const key of Object.keys(RETESTS).map(Number)) {
    if (RETESTS[key] !== SEEDED_RETESTS[key]) taken[key] = RETESTS[key];
  }
  kv.set(RETEST_KEY, JSON.stringify(taken));
}

/** The last result before a given day, which is what this one is measured
 * against. */
function retestBefore(day: number): Retest | undefined {
  let found: Retest | undefined;
  for (const key of Object.keys(RETESTS)
    .map(Number)
    .sort((a, b) => a - b)) {
    if (key < day) found = RETESTS[key];
  }
  return found;
}

/**
 * Writes a retest, and with it the only levels the app will show until the
 * next one.
 *
 * The previous result supplies both `from` and `wasLevel`, so a row is always
 * this retest read against the one before it rather than against a figure
 * carried separately — the two can never drift apart. A level is derived from
 * the measurement, never passed in: there is no way to record a Lv4 that the
 * number beside it does not earn.
 */
export function recordRetest(day: number, measured: RetestMeasurements): Retest {
  const retest = buildRetest(measured, retestBefore(day));
  RETESTS[day] = retest;
  recordRetestResult(day, measured, retest);
  persistRetests();
  for (const listener of retestSubscribers) listener();
  return retest;
}

/**
 * The measurement record, as opposed to the rows the sheet renders.
 *
 * `Retest` above is a display shape — it holds formatted strings because that
 * is what a row prints. This is the underlying record: raw numbers per side,
 * kept so a later change to the level table can re-derive every level the user
 * has ever been given. Storing only the formatted rows would make the
 * thresholds unrevisable without throwing the history away.
 */
export type RetestResult = {
  /** 0 is the day-one baseline; 1–6 are the blocks. */
  blockIndex: number;
  dayNumber: number;
  /** `YYYY-MM-DD`. */
  date: string;
  calf: { left: number; right: number };
  balance: { left: number; right: number };
  arch: { left: number; right: number };
  symmetryPct: number;
  levels: { calf: number; balance: number; arch: number; symmetry: number };
};

const RESULTS_KEY = 'program/retest-results';

function readResults(): RetestResult[] {
  const raw = kv.getString(RESULTS_KEY);
  if (raw == null) return [];
  try {
    const parsed = JSON.parse(raw) as RetestResult[];
    return Array.isArray(parsed) ? parsed.filter((row) => Number.isFinite(row?.dayNumber)) : [];
  } catch (error) {
    console.warn('[program] stored retest results unreadable, ignoring', error);
    return [];
  }
}

const RETEST_RESULTS: RetestResult[] = readResults();

/** Every measurement on record, oldest first. */
export function retestResults(): readonly RetestResult[] {
  return [...RETEST_RESULTS].sort((a, b) => a.dayNumber - b.dayNumber);
}

/** The block a retest day closes, or 0 for the day-one baseline. */
export function blockIndexForRetest(day: number): number {
  if (day <= 1) return 0;
  return PLAN_BLOCKS.find((block) => block.retestDay === day)?.index ?? 0;
}

function recordRetestResult(day: number, measured: RetestMeasurements, retest: Retest): void {
  const level = (zone: ZoneKey) => retest.rows.find((row) => row.zone === zone)?.level ?? 1;
  const result: RetestResult = {
    blockIndex: blockIndexForRetest(day),
    dayNumber: day,
    date: toDateKey(new Date()),
    // The rehabilitated side is recorded as the left column throughout. Which
    // foot that is belongs to the profile, not to the measurement.
    calf: { left: measured.calf, right: measured.otherCalf },
    balance: { left: measured.balance, right: measured.balance },
    arch: { left: measured.arch, right: measured.arch },
    symmetryPct: symmetryPct(measured.calf, measured.otherCalf),
    levels: {
      calf: level('calf'),
      balance: level('balance'),
      arch: level('arch'),
      symmetry: level('symmetry'),
    },
  };
  const at = RETEST_RESULTS.findIndex((row) => row.dayNumber === day);
  if (at >= 0) RETEST_RESULTS[at] = result;
  else RETEST_RESULTS.push(result);
  kv.set(RESULTS_KEY, JSON.stringify(RETEST_RESULTS));
}

/**
 * Which of the four things the Day sheet says about a retest.
 *
 * Pulled out of the sheet's JSX because the ordering is the part that can be
 * wrong, and it is only checkable on its own. The case that matters is the
 * third: a retest day the user walked past without taking. It has no result and
 * it is not in the future, and the sheet must say so rather than falling
 * through to "opens on…", which would promise a measurement that already came
 * and went.
 */
export type RetestBranch = 'result' | 'today' | 'not-completed' | 'future';

export function retestBranch(input: {
  hasResult: boolean;
  status: DayStatus;
}): RetestBranch {
  if (input.hasResult) return 'result';
  if (input.status === 'today') return 'today';
  return input.status === 'upcoming' ? 'future' : 'not-completed';
}

/** The levels standing after the most recent retest, or null before any. */
export function currentLevels(cursor: number): Readonly<Record<ZoneKey, number>> | null {
  const latest = latestRetest(cursor);
  if (latest == null) return null;
  const level = (zone: ZoneKey) => latest.retest.rows.find((row) => row.zone === zone)?.level ?? 1;
  return {
    calf: level('calf'),
    arch: level('arch'),
    balance: level('balance'),
    symmetry: level('symmetry'),
  };
}

/** The result for a checkpoint day, if it has one. Subscribed rather than read
 * off `RETESTS`, so a sheet left open while a retest is taken updates instead
 * of showing the day as unmeasured. */
export function useRetest(day: number): Retest | undefined {
  return useSyncExternalStore(
    subscribeRetests,
    () => RETESTS[day],
    () => RETESTS[day],
  );
}

/**
 * A retest the user has asked to start, by day.
 *
 * The sheet that offers it cannot run it: the sheet is sized to its contents
 * and the player is a whole screen. So the ask is left here and the program
 * behind picks it up as the sheet gets out of the way. One number, cleared on
 * read — a request is a thing that happens once, and a stale one would start a
 * session nobody asked for the next time the program opened.
 */
let retestRequest: number | null = null;
const requestSubscribers = new Set<() => void>();

/** Hoisted rather than written inline at the call: a subscribe function that
 * changes identity every render makes `useSyncExternalStore` tear the
 * subscription down and rebuild it on each one. */
function subscribeRequest(listener: () => void): () => void {
  requestSubscribers.add(listener);
  return () => {
    requestSubscribers.delete(listener);
  };
}

function requestSnapshot(): number | null {
  return retestRequest;
}

export function requestRetest(day: number): void {
  if (retestRequest === day) return;
  retestRequest = day;
  for (const listener of requestSubscribers) listener();
}

export function clearRetestRequest(): void {
  if (retestRequest == null) return;
  retestRequest = null;
  for (const listener of requestSubscribers) listener();
}

export function useRetestRequest(): number | null {
  return useSyncExternalStore(subscribeRequest, requestSnapshot, requestSnapshot);
}

/** Every checkpoint in the program, in order. */
export function checkpoints(): ProgramDay[] {
  return PROGRAM.filter((day) => day.checkpoint);
}

/**
 * The most recent retest behind the user, or null before the first one.
 *
 * Today counts. A retest is taken on its own checkpoint day, so a cursor
 * sitting exactly on it means the result just landed — excluding it would have
 * the header still quoting last block's levels for the rest of the day.
 */
export function latestRetest(cursor: number): { day: number; retest: Retest } | null {
  let found: { day: number; retest: Retest } | null = null;
  for (const day of Object.keys(RETESTS)
    .map(Number)
    .sort((a, b) => a - b)) {
    if (day - 1 <= cursor) found = { day, retest: RETESTS[day] };
  }
  return found;
}

/** "Lv2 → Lv3", or a bare "Lv2" when the level held. */
export function levelLabel(row: RetestRow): string {
  return row.level === row.wasLevel ? `Lv${row.level}` : `Lv${row.wasLevel} → Lv${row.level}`;
}

/**
 * The two figures the path screen carries in its header, derived from the last
 * retest rather than stored separately — so the strip and the retest sheet can
 * never disagree about what the user's level is.
 */
export function headlineLevels(cursor: number): { zone: string; asymmetry: string } | null {
  const latest = latestRetest(cursor);
  if (latest == null) return null;
  const calf = latest.retest.rows.find((row) => row.zone === 'calf');
  const symmetry = latest.retest.rows.find((row) => row.zone === 'symmetry');
  return {
    zone: calf != null ? `Lv${calf.level} calf` : '—',
    asymmetry: symmetry != null ? `${symmetry.to} asymmetry` : '—',
  };
}

/**
 * Pain logged on a day, 0–10, by 0-based index.
 *
 * Carries the last reading forward across days with nothing on them, rather
 * than answering zero. Zero is not "unknown" — it is the strongest claim the
 * scale can make, and defaulting to it had the morning line telling a user who
 * had not checked in yet that their pain was 0 out of 10. Reporting the last
 * thing they actually said is at worst stale; reporting zero is invented.
 *
 * Callers that need to distinguish "no pain" from "no answer" must use
 * `painOn`, which returns null and is what the engine itself reads.
 */
export function painFor(index: number): number {
  for (let day = index + 1; day >= 1; day -= 1) {
    const logged = painOn(day);
    if (logged != null) return logged;
  }
  return 0;
}

/**
 * The shortest gap the plan will put between two sessions.
 *
 * Twelve hours, and it is the rest that does the work: loaded tendon tissue
 * needs the interval as much as the load. Without it somebody who trained at
 * eight in the evening would be offered the next session four hours later, at
 * midnight, which is the calendar talking rather than the programme.
 */
export const REST_HOURS = 12;

/**
 * When the next session becomes available, in epoch milliseconds.
 *
 * The later of two things, because both are real constraints:
 *
 * - **Tomorrow.** The plan is a calendar of days and a day is a day; finishing
 *   early does not buy an extra one.
 * - **Twelve hours after the last session ended.** Finishing at eleven at night
 *   must not open the next one an hour later.
 *
 * Null when today has not been finished — there is nothing to wait for, because
 * the thing to do is today's session.
 *
 * The countdown this feeds used to be "hours until midnight", which after an
 * evening session read "unlocks in 5h" and then let the day through at
 * midnight anyway. Both halves were wrong: the number was not the rest the body
 * needs, and it was not what the app was going to do either.
 */
export function nextSessionAt(dayNumber: number, now = Date.now()): number | null {
  const log = logFor(dayNumber);
  if (log?.sessionCompleted !== true) return null;

  const tomorrow = new Date(now);
  tomorrow.setHours(24, 0, 0, 0);

  // Missing on entries written before the stamp existed. Falling back to
  // midnight keeps those days behaving as they did rather than pinning them
  // twelve hours past a time nobody recorded.
  const rested = log.completedAt == null ? 0 : log.completedAt + REST_HOURS * 3_600_000;
  return Math.max(tomorrow.getTime(), rested);
}

/**
 * What the twelve weeks actually changed, in the user's own numbers.
 *
 * Shown when programme access runs out, and the reason it is worth showing at
 * all: somebody who has just been asked to pay again should be looking at what
 * the last twelve weeks bought, not at a marketing claim. Every figure is
 * measured — the first retest against the latest, and the first logged morning
 * pain against the most recent. Nothing here is a placeholder; a field with no
 * real pair of readings behind it resolves to null and is not rendered.
 */
export type ProgramSummary = {
  /** Single-leg calf raises to failure, first measurement against latest.
   * The stronger side, because that is the one the user counts. */
  calf: { from: number; to: number } | null;
  /** Morning first-step pain, 0–10. */
  pain: { from: number; to: number } | null;
  /** Sessions actually completed across the whole plan. */
  sessions: number;
};


export function programSummary(cursor: number = TODAY_INDEX): ProgramSummary {
  // The raw measurements, not `RETESTS`. A `RetestRow` carries `from`/`to` as
  // display strings against the *previous* checkpoint, which is the wrong span
  // for this screen — twelve weeks means the first reading against the last.
  const results = [...retestResults()].sort((a, b) => a.dayNumber - b.dayNumber);
  const first = results[0];
  const last = results[results.length - 1];

  // Both ends, and they must be different checkpoints. One retest is a starting
  // point, not a change, and comparing a reading with itself would print
  // "11 → 11" — which reads as the plan having done nothing rather than as
  // there being nothing yet to compare.
  const calf =
    first != null && last != null && first !== last
      ? {
          from: Math.max(first.calf.left, first.calf.right),
          to: Math.max(last.calf.left, last.calf.right),
        }
      : null;

  // The first morning they logged, against the most recent. Scanned rather than
  // stored: the log is sparse — people miss days — so the first and last real
  // readings are the only honest pair.
  let painFrom: number | null = null;
  let painTo: number | null = null;
  for (let day = 1; day <= cursor + 1; day += 1) {
    const value = painOn(day);
    if (value == null) continue;
    if (painFrom == null) painFrom = value;
    painTo = value;
  }
  const pain = painFrom != null && painTo != null && painFrom !== painTo
    ? { from: painFrom, to: painTo }
    : null;

  let sessions = 0;
  for (let day = 1; day <= cursor + 1; day += 1) {
    if (logFor(day)?.sessionCompleted === true) sessions += 1;
  }

  return { calf, pain, sessions };
}
