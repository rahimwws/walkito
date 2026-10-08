import { useSyncExternalStore } from 'react';

// The manifest module itself rather than the `@/shared/config` barrel: the
// barrel also loads the font files, which the unit tests cannot evaluate.
import { CLIPS } from '@/shared/config/clip-manifest';
import { track } from '@/shared/lib/analytics';
import { kv } from '@/shared/lib/storage';

import { retestResults, type RetestResult } from '../program';
import { dayNumberFor, firstStepOn, fromDateKey, logFor, painLatestOn, programState, toDateKey, writeLog } from '../state';
import { CHAINS, PLAN_META, planMeta, type Equipment } from './catalogue-meta';
import { allowed, atOrBelow, type EligibilityContext } from './eligibility';
import {
  advanceGoals,
  MAX_ACTIVE_GOALS,
  measuredGoalReached,
  painGoalReached,
  startingGoals,
  type Goal,
  type GoalType,
  type StartingFacts,
} from './goals';
import { goalsForOutcome, outcomeFor, withAreas, withKind, type Outcome, type OutcomeFacts, type OutcomeKind } from './outcome';
import { requestPlanPush } from './push-request';
import { adjustToday, IN_SESSION_STOP, STEP_DOWN_SESSIONS, type AdjustedDay, type TodaySignals } from './today';
import {
  addDays,
  buildWeek,
  DEFAULT_LEVELS,
  TEST_EVERY_DAYS,
  TEST_EVERY_DAYS_AFTER_GOAL,
  weekIndexFor,
  weekStartOf,
  type ChainLevels,
  type DaysPerWeek,
  type SessionFeedback,
  type PlanDay,
  type SessionMinutes,
  type WeekPlan,
} from './week';

/**
 * The weekly plan's memory: settings, goals, weeks, sessions and what the user
 * said about each exercise.
 *
 * Local-first. Every write lands in MMKV before anything else, so no screen
 * waits on a network; syncing these to Supabase is the migrations' job and
 * happens behind this (see `supabase/migrations/0007_plan.sql`). Apple Health
 * never enters this store — the day's health facts are passed in by whoever
 * reads Health, and are used, not kept.
 *
 * Check-ins and test results stay where Progress reads them — `DayLog` and the
 * retest results — so the plan and the Progress tab agree without either
 * owning a copy.
 */

// ── Settings ─────────────────────────────────────────────────────────────────

export type FootType = 'flexible' | 'rigid' | 'unknown';

export type PlanSettings = {
  daysPerWeek: DaysPerWeek;
  defaultMinutes: SessionMinutes;
  equipmentMissing: Equipment[];
  footType: FootType;
  /** The reminder time set by hand, minutes past midnight. Null follows the habit. */
  reminderMinutes: number | null;
  /**
   * Week one sitting down: an injury from a fall, or a foot that cannot take
   * weight yet. Only seated exercises while the plan is settling. Optional so
   * settings saved before it, and the server's copy, read as false.
   */
  seatedStart?: boolean;
};

const SETTINGS_KEY = 'plan/settings';
const GOALS_KEY = 'plan/goals';
const OUTCOME_KEY = 'plan/outcome';
const WEEKS_KEY = 'plan/weeks';
const SESSIONS_KEY = 'plan/sessions';
const PREFS_KEY = 'plan/prefs';
const STEP_DOWN_KEY = 'plan/step-down';
const FAVOURITES_KEY = 'plan/library-favourites';

export const DEFAULT_SETTINGS: PlanSettings = {
  daysPerWeek: 5,
  defaultMinutes: 5,
  equipmentMissing: [],
  footType: 'unknown',
  reminderMinutes: null,
};

function read<T>(key: string, fallback: T): T {
  const raw = kv.getString(key);
  if (raw == null) return fallback;
  try {
    return JSON.parse(raw) as T;
  } catch {
    return fallback;
  }
}

function write(key: string, value: unknown): void {
  kv.set(key, JSON.stringify(value));
  version += 1;
  // Told after the current task rather than inside it. The week is built the
  // first time a screen asks for it, which can be mid-render, and notifying
  // subscribers synchronously there would update other components during it.
  if (!notifyQueued) {
    notifyQueued = true;
    queueMicrotask(() => {
      notifyQueued = false;
      for (const listener of listeners) listener();
    });
  }
}

let notifyQueued = false;

let version = 0;
const listeners = new Set<() => void>();

function subscribe(listener: () => void): () => void {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}

/** Re-renders on any plan write. The value is a counter, not the data. */
export function usePlanVersion(): number {
  return useSyncExternalStore(subscribe, () => version, () => version);
}

export function planSettings(): PlanSettings {
  return { ...DEFAULT_SETTINGS, ...read<Partial<PlanSettings>>(SETTINGS_KEY, {}) };
}

/**
 * Change a setting, and rebuild the rest of this week from it.
 *
 * Days already gone keep what they were — a session done on Tuesday was done —
 * and everything from today on is re-planned with the new answer.
 */
/**
 * The settings onboarding asked for, written once as the plan's starting
 * point. Not a change the user made, so no `plan_settings_changed` — the
 * onboarding answers are their own record.
 */
export function seedPlanSettings(patch: Partial<PlanSettings>, now: number = Date.now()): PlanSettings {
  const next = { ...planSettings(), ...patch };
  write(SETTINGS_KEY, next);
  rebuildRestOfWeek(now);
  return next;
}

export function setPlanSettings(patch: Partial<PlanSettings>, now: number = Date.now()): PlanSettings {
  const next = { ...planSettings(), ...patch };
  write(SETTINGS_KEY, next);
  for (const field of Object.keys(patch) as (keyof PlanSettings)[]) {
    // Set once by onboarding, never from Settings; nothing to chart.
    if (field !== 'seatedStart') track('plan_settings_changed', { field });
  }
  // A rigid foot drops the arch step; a flexible one gets it back.
  const set = outcome();
  if (patch.footType != null && set != null) {
    const today = toDateKey(new Date(now));
    const steps = withKind(set, set.kind, next.footType === 'rigid', today);
    write(OUTCOME_KEY, { ...steps, since: set.since });
    write(GOALS_KEY, goalsForOutcome(steps, goals(), today, MAX_ACTIVE_GOALS));
  }
  rebuildRestOfWeek(now);
  return next;
}

// ── Sessions and exercise preferences ────────────────────────────────────────

export type SessionSource = 'plan' | 'library' | 'quick' | 'test';

export type ExerciseOutcome = { id: string; status: 'done' | 'skipped' | 'swapped'; swappedTo?: string };

export type SessionRecord = {
  id: string;
  /** `YYYY-MM-DD`. */
  date: string;
  source: SessionSource;
  minutes: number;
  exercises: ExerciseOutcome[];
  feedback: 'easy' | 'ok' | 'hard' | null;
  /** The highest pain reported mid-session, if any. Health data: never sent to analytics. */
  inSessionPain: number | null;
  completedAt: number;
  /** When it started, epoch ms — what the reminder time is learned from. */
  startedAt?: number;
  /** For a Library routine, which one. */
  routineId?: string;
};

/**
 * What the player learned during the session that is ending: how it felt and
 * the highest pain reported mid-way. Held here until the host records the
 * session, because the player asks both before the host hears it finished.
 *
 * `token` says which session it belongs to, so the one that began it — and
 * only that one — can throw it away again. See `abandonSession`.
 */
type Pending = {
  feedback: SessionRecord['feedback'];
  inSessionPain: number | null;
  startedAt: number | null;
  token: number;
};

const NOTHING_PENDING: Pending = { feedback: null, inSessionPain: null, startedAt: null, token: 0 };

let pending: Pending = NOTHING_PENDING;
let lastToken = 0;

/**
 * Called as a session starts, so nothing from the last one leaks in. Returns
 * the session's token, for `abandonSession`.
 */
export function beginSession(now: number = Date.now()): number {
  lastToken += 1;
  pending = { feedback: null, inSessionPain: null, startedAt: now, token: lastToken };
  return lastToken;
}

/**
 * A session that ended without being recorded — left by the back arrow, a
 * single task off Home's list that did not finish the day, the pain check's
 * relief moves. What it noted is dropped here, or the next record written
 * would pick it up: a test day saved with a pain score from a player closed an
 * hour earlier, a start time the reminder then learned from, and a step back
 * nobody asked for.
 *
 * Only while it is still that session's: a newer one may already have begun —
 * a player remounted for the next start renders, and so begins, before the old
 * one is torn down.
 */
export function abandonSession(token: number): void {
  if (pending.token === token) pending = NOTHING_PENDING;
}

export function noteSessionFeedback(feedback: 'easy' | 'ok' | 'hard'): void {
  pending = { ...pending, feedback };
  track('session_feedback', { feedback });
}

export function noteInSessionPain(score: number): void {
  pending = { ...pending, inSessionPain: Math.max(score, pending.inSessionPain ?? 0) };
}

export function sessions(): SessionRecord[] {
  return read<SessionRecord[]>(SESSIONS_KEY, []);
}

/**
 * Record a finished session.
 *
 * A plan session also completes the day's `DayLog` — what Progress and the
 * streak read. A Library routine marks the day as attended without completing
 * the plan's session, which stays open. In-session pain at 6 or more steps the
 * next two sessions back a level.
 */
export function recordSession(record: Omit<SessionRecord, 'id'>): SessionRecord {
  const saved: SessionRecord = {
    ...record,
    feedback: record.feedback ?? pending.feedback,
    inSessionPain: record.inSessionPain ?? pending.inSessionPain,
    startedAt: record.startedAt ?? pending.startedAt ?? record.completedAt - record.minutes * 60_000,
    id: `${record.date}-${record.source}-${record.completedAt}`,
  };
  pending = NOTHING_PENDING;
  record = saved;
  write(SESSIONS_KEY, [...sessions(), saved].slice(-400));

  const day = dayNumberFor(programState(), record.date);
  // The day's own midnight, so an entry this creates is dated the day the
  // session belongs to — not the day it was saved on, which differs for a
  // session started before midnight and finished after it.
  const dayAt = fromDateKey(record.date).getTime();
  if (day >= 1) {
    if (record.source === 'library' || record.source === 'quick') {
      writeLog(day, { libraryDone: true }, dayAt);
      track('library_routine_completed', { routine: record.routineId ?? 'unknown' });
    } else {
      writeLog(
        day,
        {
          sessionCompleted: true,
          completedAt: record.completedAt,
          exercisesDone: record.exercises.filter((e) => e.status === 'done').map((e) => e.id),
          ...(record.inSessionPain != null && record.inSessionPain >= IN_SESSION_STOP ? { sessionEndedEarly: true } : {}),
        },
        dayAt,
      );
    }
  }
  if (record.inSessionPain != null && record.inSessionPain >= IN_SESSION_STOP) {
    kv.set(STEP_DOWN_KEY, String(STEP_DOWN_SESSIONS));
  } else if (record.source === 'plan') {
    const owed = stepDownOwed();
    if (owed > 0) kv.set(STEP_DOWN_KEY, String(owed - 1));
  }
  for (const outcome of record.exercises) {
    if (outcome.status === 'skipped') recordSkip(outcome.id);
  }
  return saved;
}

/** Sets the feedback on the most recent session — asked for after it ends. */
export function setLastSessionFeedback(feedback: 'easy' | 'ok' | 'hard'): void {
  const all = sessions();
  const last = all[all.length - 1];
  if (last == null) return;
  write(SESSIONS_KEY, [...all.slice(0, -1), { ...last, feedback }]);
}

export function stepDownOwed(): number {
  const n = Number(kv.getString(STEP_DOWN_KEY) ?? 0);
  return Number.isFinite(n) ? n : 0;
}

export type CantDoReason = 'no_step' | 'no_band' | 'no_towel' | 'no_pillow' | 'no_ball' | 'hurts';

export type ExercisePref = { cantDo?: CantDoReason; skipCount: number };

/** Skips before an exercise is swapped out for its nearest neighbour. */
export const SKIPS_BEFORE_SWAP = 3;

export function exercisePrefs(): Record<string, ExercisePref> {
  return read<Record<string, ExercisePref>>(PREFS_KEY, {});
}

/**
 * "Can't do this." A missing-equipment reason also removes that equipment
 * everywhere, until it is changed back in Settings.
 */
export function markCantDo(id: string, reason: CantDoReason, now: number = Date.now()): void {
  const prefs = exercisePrefs();
  write(PREFS_KEY, { ...prefs, [id]: { skipCount: prefs[id]?.skipCount ?? 0, cantDo: reason } });
  const item = ({ no_step: 'step', no_band: 'band', no_towel: 'towel', no_pillow: 'pillow', no_ball: 'ball' } as const)[
    reason as Exclude<CantDoReason, 'hurts'>
  ];
  if (item != null) {
    const settings = planSettings();
    if (!settings.equipmentMissing.includes(item)) {
      setPlanSettings({ equipmentMissing: [...settings.equipmentMissing, item] }, now);
      return;
    }
  }
  rebuildRestOfWeek(now);
}

/**
 * What runs instead of `id`, right now, once it has been marked "can't do".
 *
 * The nearest step on its own chain at the same level or lower, then any other
 * step on that chain, then the easiest exercise of the same kind. Read after
 * `markCantDo`, so the equipment it just took away is already out. Null when
 * nothing fits, which the player answers by moving on.
 */
export function swapFor(id: string, now: number = Date.now()): string | null {
  const meta = planMeta(id);
  if (meta == null) return null;
  const ctx: EligibilityContext = { ...withSkips(eligibilityFor(toDateKey(new Date(now)))), settling: false };
  const ok = (candidate: string) => candidate !== id && allowed(candidate, ctx);
  if (meta.chain !== 'accessory') {
    const steps = CHAINS[meta.chain];
    const below = atOrBelow(meta.chain, Math.max(0, steps.indexOf(id) - 1), ctx);
    if (below != null && below.id !== id) return below.id;
    const other = steps.find(ok);
    if (other != null) return other;
  }
  const kin = PLAN_META.filter((candidate) => candidate.kind === meta.kind && ok(candidate.id)).sort(
    (a, b) => Math.abs(a.level - meta.level) - Math.abs(b.level - meta.level),
  );
  return kin[0]?.id ?? null;
}

function recordSkip(id: string): void {
  const prefs = exercisePrefs();
  const count = (prefs[id]?.skipCount ?? 0) + 1;
  write(PREFS_KEY, { ...prefs, [id]: { ...prefs[id], skipCount: count } });
}

export function libraryFavourites(): string[] {
  return read<string[]>(FAVOURITES_KEY, []);
}

export function toggleLibraryFavourite(routineId: string): void {
  const now = libraryFavourites();
  write(FAVOURITES_KEY, now.includes(routineId) ? now.filter((id) => id !== routineId) : [...now, routineId]);
}

// ── Reminder time ────────────────────────────────────────────────────────────

/** Sessions the habit is read from, and how many it takes to call it one. */
export const REMINDER_SESSIONS = 10;
const REMINDER_MIN_SESSIONS = 3;

/**
 * When this person usually starts: the median start time of their last ten
 * sessions, minutes past midnight. Null until three exist — a habit read off
 * one session is a coincidence.
 */
export function usualStartMinute(): number | null {
  const starts = sessions()
    .slice(-REMINDER_SESSIONS)
    .map((s) => s.startedAt)
    .filter((at): at is number => at != null)
    .map((at) => {
      const d = new Date(at);
      return d.getHours() * 60 + d.getMinutes();
    })
    .sort((a, b) => a - b);
  if (starts.length < REMINDER_MIN_SESSIONS) return null;
  const mid = Math.floor(starts.length / 2);
  return starts.length % 2 === 0 ? Math.round((starts[mid - 1] + starts[mid]) / 2) : starts[mid];
}

/** The time set by hand in Settings, which beats the habit. */
export function reminderOverride(): number | null {
  return planSettings().reminderMinutes;
}

// ── Goals ────────────────────────────────────────────────────────────────────

export function goals(): Goal[] {
  return read<Goal[]>(GOALS_KEY, []);
}

/** The big goal, once it has been set. */
export function outcome(): Outcome | null {
  return read<Outcome | null>(OUTCOME_KEY, null);
}

/**
 * The outcome and its starting goals, written once. Called from the app layer
 * with what onboarding learned — the profile is another slice, so it is handed
 * in rather than read from here.
 *
 * Someone who had goals before outcomes existed gets an outcome too, and their
 * goals are brought in line with its steps: reached goals stay, the rest follow
 * the new order.
 */
export function ensureGoals(facts: StartingFacts & Omit<OutcomeFacts, 'rigidFoot'>, now: number = Date.now()): Goal[] {
  const today = toDateKey(new Date(now));
  const existing = goals();
  const footType = planSettings().footType;
  if (outcome() == null) {
    const set = outcomeFor({ ...facts, rigidFoot: footType === 'rigid' }, today);
    write(OUTCOME_KEY, set);
    const next = goalsForOutcome(set, existing, today, MAX_ACTIVE_GOALS);
    write(GOALS_KEY, next);
    return next;
  }
  if (existing.length > 0) return existing;
  const withFoot = footType === 'unknown' ? facts : { ...facts, footType };
  const set = outcome();
  const fresh = set != null ? goalsForOutcome(set, [], today, MAX_ACTIVE_GOALS) : startingGoals(withFoot, today);
  write(GOALS_KEY, fresh);
  return fresh;
}

/**
 * Where it hurts changed in Settings. `areas` are complaints ("heel", "foot"),
 * already grouped by the caller. When the first one moves, the order of the
 * steps moves with it — heel to Achilles puts the calf ahead of the arch — and
 * the rest of this week is planned again.
 */
export function setOutcomeAreas(areas: readonly string[], now: number = Date.now()): void {
  const current = outcome();
  if (current == null) return;
  const next = withAreas(current, areas, planSettings().footType === 'rigid');
  if (next.area === current.area && next.steps.join() === current.steps.join()) return;
  const today = toDateKey(new Date(now));
  write(OUTCOME_KEY, next);
  write(GOALS_KEY, goalsForOutcome(next, goals(), today, MAX_ACTIVE_GOALS));
  refreshGoals(now);
  rebuildRestOfWeek(now);
}

/**
 * A different big goal, chosen in Settings. Its steps replace the unfinished
 * goals and the rest of this week is planned again around the new focus.
 */
export function setOutcomeKind(kind: OutcomeKind, now: number = Date.now()): void {
  const current = outcome();
  if (current == null || current.kind === kind) return;
  const today = toDateKey(new Date(now));
  const next = withKind(current, kind, planSettings().footType === 'rigid', today);
  write(OUTCOME_KEY, next);
  write(GOALS_KEY, goalsForOutcome(next, goals(), today, MAX_ACTIVE_GOALS));
  track('plan_settings_changed', { field: 'outcome' });
  refreshGoals(now);
  rebuildRestOfWeek(now);
}

/** The latest test, read as goal measurements. */
export function measurementsFrom(result: RetestResult | undefined): Partial<Record<GoalType, number>> {
  if (result == null) return {};
  return {
    arch_hold: result.arch.left,
    calf_raises: Math.min(result.calf.left, result.calf.right),
    balance: result.balance.left,
    symmetry: result.symmetryPct,
  };
}

/**
 * Brings every goal's numbers up to date — pain from the check-ins, the rest
 * from the latest test — and moves reached goals on.
 *
 * Returns the goals reached by this call, so the caller can celebrate them.
 */
export function refreshGoals(now: number = Date.now()): GoalType[] {
  const today = toDateKey(new Date(now));
  const results = retestResults();
  const first = results[0];
  const latest = results[results.length - 1];
  const firstM = measurementsFrom(first);
  const latestM = measurementsFrom(latest);
  const pain14 = painSeries(today, 14);
  const pain7 = mean(painSeries(today, 7));
  const painFirstWeek = mean(painSeries(addDays(programState().startDate, 6), 7));

  const updated = goals().map((goal): Goal => {
    if (goal.type === 'pain_free_mornings') {
      return { ...goal, baseline: goal.baseline ?? painFirstWeek, current: pain7 ?? goal.current };
    }
    const value = latestM[goal.type];
    if (value == null) return goal;
    return { ...goal, baseline: goal.baseline ?? firstM[goal.type] ?? value, current: value };
  });
  const reachedTypes = updated
    .filter((g) => g.status === 'active')
    .filter((g) => (g.type === 'pain_free_mornings' ? painGoalReached(pain14) : measuredGoalReached(g)))
    .map((g) => g.type);
  const excluded: GoalType[] = planSettings().footType === 'rigid' ? ['arch_hold'] : [];
  const { goals: next, reached } = advanceGoals(updated, reachedTypes, today, excluded, outcome()?.steps ?? []);
  write(GOALS_KEY, next);
  for (const goal of reached) track('goal_reached', { goal });
  return reached;
}

// ── Pain and tests ───────────────────────────────────────────────────────────

/**
 * First-step pain for the `days` days ending on `endDate`, oldest first. Only
 * check-ins made before noon: an afternoon answer is the day's, and never
 * enters a goal or a weekly mean.
 */
export function painSeries(endDate: string, days: number): (number | null)[] {
  const state = programState();
  return Array.from({ length: days }, (_, i) => {
    const date = addDays(endDate, i - days + 1);
    const n = dayNumberFor(state, date);
    return n >= 1 ? firstStepOn(n) : null;
  });
}

/** Today's pain for adapting today: the worse of the first steps and the
 * latest check-in, so an afternoon flare still shortens the day. */
function painForToday(dateKey: string): number | null {
  const n = dayNumberFor(programState(), dateKey);
  if (n < 1) return null;
  const readings = [firstStepOn(n), painLatestOn(n)].filter((p): p is number => p != null);
  return readings.length === 0 ? null : Math.max(...readings);
}

function mean(values: readonly (number | null)[]): number | null {
  const logged = values.filter((v): v is number => v != null);
  return logged.length === 0 ? null : logged.reduce((a, b) => a + b, 0) / logged.length;
}

/**
 * When the next test is due: the first day of the plan, then every 14 days
 * after the last one — every 28 once any goal has been reached.
 */
export function testDue(): string {
  const results = retestResults();
  const start = programState().startDate;
  if (results.length === 0) return start;
  const lastDay = results[results.length - 1].dayNumber;
  const lastDate = addDays(start, lastDay - 1);
  const anyReached = goals().some((g) => g.status !== 'active');
  return addDays(lastDate, anyReached ? TEST_EVERY_DAYS_AFTER_GOAL : TEST_EVERY_DAYS);
}

/** The day a test was put off to — "Test tomorrow" on the test's intro. */
const TEST_NOT_BEFORE_KEY = 'plan/test-not-before';

/**
 * The first day a due test may go on, seen from `today`.
 *
 * Today, unless its session is done — a finished day is history, and a test
 * planned onto it would never be offered — or unless the test was put off past
 * it. Only a lower bound: once the day it names has come, it says nothing, so
 * it is never cleared.
 */
function testFromOn(today: string): string {
  const from = planSessionDone(today) ? addDays(today, 1) : today;
  const putOff = kv.getString(TEST_NOT_BEFORE_KEY);
  return putOff != null && putOff > from ? putOff : from;
}

/**
 * "Test tomorrow": today's test moves to tomorrow, and today becomes the day
 * the week's shape had there — adjusted, as every day is, to the morning's
 * check-in.
 *
 * The button used to only close the test. The stored week kept the test on
 * today, so tomorrow opened on tomorrow's own session and the test came back
 * whenever the week next happened to be rebuilt — for the first test, a week
 * with no starting numbers. Recorded as a day rather than a flag, so every
 * rebuild after it, this week's or next week's, places the test the same way.
 */
export function postponeTest(now: number = Date.now()): string {
  const today = toDateKey(new Date(now));
  const tomorrow = addDays(today, 1);
  kv.set(TEST_NOT_BEFORE_KEY, tomorrow);
  track('retest_postponed', { day: dayNumberFor(programState(), today) });
  rebuildRestOfWeek(now);
  requestPlanPush();
  return tomorrow;
}

// ── Weeks ────────────────────────────────────────────────────────────────────

type WeekStore = Record<string, WeekPlan>;

/**
 * The shape of a stored week. Bumped when the engine changes what a week
 * contains, so a week built by an older engine is rebuilt rather than read as
 * if it were current. Only the weeks go — goals, sessions and preferences are
 * the user's and survive.
 */
const WEEKS_SCHEMA = 2;
const WEEKS_SCHEMA_KEY = 'plan/weeks-schema';

function weeks(): WeekStore {
  if (Number(kv.getString(WEEKS_SCHEMA_KEY) ?? 0) !== WEEKS_SCHEMA) {
    kv.remove(WEEKS_KEY);
    kv.set(WEEKS_SCHEMA_KEY, String(WEEKS_SCHEMA));
  }
  return read<WeekStore>(WEEKS_KEY, {});
}

/** The eligibility inputs that come from stored data, for a given day. */
export function eligibilityFor(dateKey: string): Omit<EligibilityContext, 'settling'> {
  const settings = planSettings();
  const prefs = exercisePrefs();
  const cantDo = new Set(Object.entries(prefs).filter(([, p]) => p.cantDo != null).map(([id]) => id));
  const standing = sessions().filter((s) => s.exercises.some((e) => e.id === 'short_foot_double' && e.status === 'done')).length;
  return {
    clips: new Set(Object.keys(CLIPS)),
    equipmentMissing: settings.equipmentMissing,
    cantDo,
    painLast14: painSeries(dateKey, 14),
    shortFootStandingSessions: standing,
    ...(settings.seatedStart === true ? { seatedOnly: true } : {}),
  };
}

/** Swapped out after three skips: treated like "can't do" for planning. */
function withSkips(ctx: Omit<EligibilityContext, 'settling'>): Omit<EligibilityContext, 'settling'> {
  const prefs = exercisePrefs();
  const skipped = Object.entries(prefs).filter(([, p]) => p.skipCount >= SKIPS_BEFORE_SWAP).map(([id]) => id);
  return skipped.length === 0 ? ctx : { ...ctx, cantDo: new Set([...ctx.cantDo, ...skipped]) };
}

function feedbackBetween(from: string, to: string): SessionFeedback[] {
  return sessions()
    .filter((s) => s.source === 'plan' && s.date >= from && s.date <= to)
    .map((s) => ({ date: s.date, feedback: s.feedback, exerciseIds: s.exercises.filter((e) => e.status === 'done').map((e) => e.id) }));
}

function build(weekStart: string, now: number, keepBefore?: string): WeekPlan {
  const settings = planSettings();
  const planStart = programState().startDate;
  const store = weeks();
  const previousStart = addDays(weekStart, -7);
  const previous = store[previousStart];
  const today = toDateKey(new Date(now));
  const earlier = Object.entries(store).filter(([start]) => start < weekStart);
  const seen = earlier.length === 0 ? null : new Set<string>();
  for (const [, plan] of earlier) for (const day of plan.days) for (const e of day.exercises) seen?.add(e.id);
  const lastDay = addDays(weekStart, -1);
  const plan = buildWeek({
    weekStart,
    weekIndex: Math.max(1, weekIndexFor(planStart, weekStart)),
    today,
    planStart,
    goals: goals(),
    steps: outcome()?.steps ?? [],
    daysPerWeek: settings.daysPerWeek,
    defaultMinutes: settings.defaultMinutes,
    eligibility: withSkips(eligibilityFor(today)),
    levels: previous?.levels ?? store[weekStart]?.levels ?? { ...DEFAULT_LEVELS },
    lastWeekFeedback: feedbackBetween(previousStart, lastDay),
    painLastWeek: painSeries(lastDay, 7),
    painWeekBefore: painSeries(addDays(lastDay, -7), 7),
    painStart: mean(painSeries(addDays(planStart, 6), 7)),
    previousFocus: previous?.focus ?? null,
    seenBefore: seen,
    testDue: testDue(),
    testFrom: testFromOn(today),
  });
  if (keepBefore != null && store[weekStart] != null) {
    // A rebuild mid-week keeps the days already lived — and the day it starts
    // on too, once that day's session is done.
    //
    // The second half is the retest bug. Finishing a test moves `testDue` a
    // fortnight on, so a rebuild straight after it found no test due today and
    // planned today's slot as a strength day; the adjusted view then read it as
    // recovery, and Plan said "Recovery · Done" while Home, looking for a test,
    // found none. A finished day is history like any other, and every rebuild —
    // settings, "can't do this", a new big goal — goes through here.
    const old = store[weekStart];
    plan.days = plan.days.map((day) => {
      const was = old.days.find((candidate) => candidate.date === day.date);
      if (was == null) return day;
      const lived = day.date < keepBefore;
      const finished = day.date === keepBefore && planSessionDone(day.date);
      return lived || finished ? was : day;
    });
    plan.levels = old.levels;
  }
  return plan;
}

/**
 * This week's plan, building it on first sight.
 *
 * The spec builds the week on Sunday evening; building it the first time the
 * week is looked at gives the same result from the same inputs, without a
 * background job that iOS may never run.
 */
export function weekPlan(now: number = Date.now()): WeekPlan {
  const start = weekStartOf(toDateKey(new Date(now)));
  const store = weeks();
  const existing = store[start];
  if (existing != null) return withDueTest(existing, now);
  refreshGoals(now);
  const plan = build(start, now);
  write(WEEKS_KEY, { ...weeks(), [start]: plan });
  return plan;
}

/** The last day-and-due-date a re-plan was tried for. See `withDueTest`. */
let replanTried: string | null = null;

/**
 * This week as stored — unless a test is due and the stored week has lost it.
 *
 * A stored week is not rebuilt when a day passes, so a test day that went by
 * untaken (or was put off with "Test tomorrow") left the week with no test in
 * it: tomorrow opened on its own session and the test came back only when
 * something else rebuilt the week, or next Monday. For the first test that was
 * a week planned from no numbers at all. So when a test is due by the end of
 * this week and no day from today on holds one, the rest of the week is planned
 * again, which puts the test on the first day it may go (`testFromOn`) — the
 * same place a week built today would put it. The days already lived keep what
 * they were, the missed test among them.
 *
 * Cheap on the common path, which is every call: most weeks either hold a test
 * ahead or have none due, and both are answered before any rebuild. A rebuild
 * that still found no day for the test is not tried again for the same inputs;
 * it cannot happen as the builder stands, but a rebuild on every read would be
 * a render loop.
 */
function withDueTest(stored: WeekPlan, now: number): WeekPlan {
  const today = toDateKey(new Date(now));
  if (stored.days.some((day) => day.type === 'test' && day.date >= today)) return stored;
  const due = testDue();
  const weekEnd = addDays(stored.weekStart, 6);
  if (due > weekEnd) return stored;
  const from = testFromOn(today);
  if (from > weekEnd) return stored;
  const attempt = `${stored.weekStart}|${today}|${due}|${from}`;
  if (replanTried === attempt) return stored;
  replanTried = attempt;
  const plan = build(stored.weekStart, now, today);
  write(WEEKS_KEY, { ...weeks(), [stored.weekStart]: plan });
  return plan;
}

/** Sunday, from this hour, next week is built and kept. */
export const WEEK_BUILD_HOUR = 18;

/**
 * Builds next week on Sunday evening — section 4.3's schedule — and stores it,
 * so Monday opens on a week that is already decided.
 *
 * Called from wherever the app gets to run: a foreground, and HealthKit's
 * background wakes, which is as close to "Sunday evening" as iOS lets a
 * JavaScript app reliably get. A week not built by Sunday night is built the
 * first time Monday asks for it, from the same inputs — see `weekPlan`.
 * Returns whether it built one.
 */
export function buildUpcomingWeek(now: number = Date.now()): boolean {
  const date = new Date(now);
  if (date.getDay() !== 0 || date.getHours() < WEEK_BUILD_HOUR) return false;
  const next = addDays(weekStartOf(toDateKey(date)), 7);
  if (weeks()[next] != null) return false;
  refreshGoals(now);
  write(WEEKS_KEY, { ...weeks(), [next]: build(next, now) });
  return true;
}

/** Next week, as it would be built today — for the teaser card. Not stored. */
export function nextWeekPreview(now: number = Date.now()): WeekPlan {
  const start = addDays(weekStartOf(toDateKey(new Date(now))), 7);
  return build(start, now);
}

/**
 * The plan for any date: from the stored week when it has been built, from a
 * preview of it otherwise. The preview is never stored — a week is only kept
 * once its Monday (or its Sunday-evening build) arrives, so reading ahead, as
 * the notification window does, cannot fix next week before its inputs exist.
 */
export function planWeekOf(dateKey: string, now: number = Date.now()): WeekPlan {
  const start = weekStartOf(dateKey);
  // This week through `weekPlan`, stored or not, so a due test it had lost is
  // put back before anything reads a day of it.
  if (start === weekStartOf(toDateKey(new Date(now)))) return weekPlan(now);
  const stored = weeks()[start];
  if (stored != null) return stored;
  return build(start, now);
}

export function planDayOn(dateKey: string, now: number = Date.now()): PlanDay | undefined {
  return planWeekOf(dateKey, now).days.find((day) => day.date === dateKey);
}

/**
 * Re-plans this week from today on, keeping the days already lived — today
 * among them once its session is done. See `build`.
 *
 * And every week after it that is already stored, from scratch: none of their
 * days has been lived. From Sunday evening next week is stored
 * (`buildUpcomingWeek`), and it was built from that evening's inputs — a test
 * due that Sunday and not yet taken put one on Monday. Finishing the test,
 * changing a setting or a goal after that re-planned this week only, and
 * Monday still asked for a second test while Plan, the reminders and the
 * server all read the stale week. In order, so each week is built on the one
 * before it.
 */
export function rebuildRestOfWeek(now: number = Date.now()): void {
  const today = toDateKey(new Date(now));
  const start = weekStartOf(today);
  if (weeks()[start] != null) write(WEEKS_KEY, { ...weeks(), [start]: build(start, now, today) });
  const later = Object.keys(weeks())
    .filter((weekStart) => weekStart > start)
    .sort();
  for (const weekStart of later) write(WEEKS_KEY, { ...weeks(), [weekStart]: build(weekStart, now) });
}

/** Every exercise id a stored week ever scheduled — for the tests and the prefetch. */
export function scheduledIds(): string[] {
  return [...new Set(Object.values(weeks()).flatMap((w) => w.days.flatMap((d) => d.exercises.map((e) => e.id))))];
}

// ── Today ────────────────────────────────────────────────────────────────────

export type TodayHealth = Pick<TodaySignals, 'stepsYesterday' | 'steps28Avg' | 'sleepHours'>;

/** Today's day from this week's plan, adjusted to this morning. */
export function todayPlan(
  health: TodayHealth,
  minutesChoice: SessionMinutes | null,
  now: number = Date.now(),
): AdjustedDay {
  const plan = weekPlan(now);
  const today = toDateKey(new Date(now));
  const day = plan.days.find((d) => d.date === today) ?? plan.days[0];
  const pains = painSeries(today, 8);
  const settings = planSettings();
  return adjustToday(
    day,
    {
      painToday: painForToday(today),
      pain7Avg: mean(pains.slice(0, 7)),
      stepsYesterday: health.stepsYesterday,
      steps28Avg: health.steps28Avg,
      sleepHours: health.sleepHours,
      stepDownOwed: stepDownOwed(),
      minutesChoice,
      defaultMinutes: settings.defaultMinutes,
    },
    { ...withSkips(eligibilityFor(today)), settling: plan.weekIndex === 1 },
  );
}

/**
 * Whether a day of the plan has a finished plan session — the one answer every
 * screen asks.
 *
 * Either record says yes. A plan or test session in the session list is a
 * session that happened, whatever the day log says since: Home's ticks rewrite
 * the log's `sessionCompleted` from their own count, and a test day ticks
 * nothing, so the log alone once let Home call a finished retest day
 * unfinished. The log is still read, for the days finished before the session
 * list existed. A Library routine counts for neither: it keeps the streak and
 * leaves the plan's session open.
 */
export function planSessionDone(dateKey: string): boolean {
  const n = dayNumberFor(programState(), dateKey);
  if (n >= 1 && logFor(n)?.sessionCompleted === true) return true;
  return sessions().some((s) => s.date === dateKey && (s.source === 'plan' || s.source === 'test'));
}

/**
 * Whether the plan scheduled rest on a date (it counts for the streak). Null
 * for a week the weekly plan never built — the days before it existed.
 */
export function plannedRest(dateKey: string): boolean | null {
  const plan = weeks()[weekStartOf(dateKey)];
  if (plan == null) return null;
  const day = plan.days.find((d) => d.date === dateKey);
  return day?.type === 'rest' && dateKey >= programState().startDate;
}

export { CHAINS };
export type { ChainLevels, Goal, GoalType, WeekPlan };

/** Local date key helper re-exported for callers building dates. */
export function todayKey(now: number = Date.now()): string {
  return toDateKey(new Date(now));
}

export function dateOf(key: string): Date {
  return fromDateKey(key);
}

// ── Sync support ─────────────────────────────────────────────────────────────

/** Every stored week, for the sync to copy up. */
export function storedWeeks(): Readonly<Record<string, WeekPlan>> {
  return weeks();
}

export type PlanSnapshot = {
  settings: PlanSettings;
  goals: Goal[];
  outcome: Outcome | null;
  sessions: SessionRecord[];
  weeks: Record<string, WeekPlan>;
  prefs: Record<string, ExercisePref>;
};

/**
 * Writes a restored plan straight into storage — a new install getting its
 * history back. No rebuilds and no analytics: this is the record as it was,
 * not a change being made.
 */
export function importPlan(snapshot: Partial<PlanSnapshot>): void {
  if (snapshot.settings != null) kv.set(SETTINGS_KEY, JSON.stringify(snapshot.settings));
  if (snapshot.goals != null) kv.set(GOALS_KEY, JSON.stringify(snapshot.goals));
  if (snapshot.outcome != null) kv.set(OUTCOME_KEY, JSON.stringify(snapshot.outcome));
  if (snapshot.sessions != null) kv.set(SESSIONS_KEY, JSON.stringify(snapshot.sessions));
  if (snapshot.prefs != null) kv.set(PREFS_KEY, JSON.stringify(snapshot.prefs));
  if (snapshot.weeks != null) {
    kv.set(WEEKS_SCHEMA_KEY, String(WEEKS_SCHEMA));
    kv.set(WEEKS_KEY, JSON.stringify(snapshot.weeks));
  }
  write(SETTINGS_KEY, planSettings());
}
