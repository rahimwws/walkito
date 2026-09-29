import { track } from '@/shared/lib/analytics';
import { currentUserId, supabase } from '@/shared/lib/supabase';
import { usageDays } from '@/shared/lib/usage';
import { kv } from '@/shared/lib/storage';

import { importRetestResults, retestResults, type RetestResult } from '../program';
import { allLogs, dateKeyForDay, programState, setProgramState, writeLog, type DayLog } from '../state';
import type { Goal } from './goals';
import type { Outcome } from './outcome';
import {
  exercisePrefs,
  goals,
  importPlan,
  outcome,
  planSettings,
  sessions,
  storedWeeks,
  type ExercisePref,
  type PlanSettings,
  type SessionRecord,
} from './store';
import type { WeekPlan } from './week';

/**
 * The plan, copied to Supabase — the tables in `0007_plan.sql`.
 *
 * Local-first all the way down. Every write has already landed in MMKV before
 * anything here runs; this only copies it up, in the background, and nothing
 * on screen ever waits for it. A failure is not an error the user can do
 * anything about — no network, or the migration not applied yet — so it is
 * swallowed, remembered, and retried later.
 *
 * Apple Health never passes through here. The check-ins are the user's own
 * reports, and they are what the plan is built from; steps, sleep and runs stay
 * on the phone.
 *
 * Called from the app layer only: the profile facts (which foot, where it
 * hurts) belong to another entity and are handed in.
 */

export type ProfileFacts = {
  painSide: 'left' | 'right' | 'both' | null;
  painZones: readonly string[];
  /** Onboarding's goal answer and sport — for slicing the backend's insights. */
  goalAnswer: string | null;
  sport: string | null;
};

const LAST_PUSH_KEY = 'plan/sync-last-push';
const FAILED_AT_KEY = 'plan/sync-failed-at';
/**
 * After the network failed, ordinary writes wait this long before trying again.
 *
 * A minute, not the half hour it was. Half an hour meant a session finished on
 * a train, one tunnel after a dropped request, did not go up until long after
 * the phone had signal again. The wait only has to stop a dead connection being
 * hit on every tick of a session; a push that matters — a finish, a check-in,
 * the app going away or coming back — does not wait at all.
 */
const BACKOFF_MS = 60 * 1000;
/** The same table failing with the same code is reported at most this often. */
const REPORT_EVERY_MS = 10 * 60 * 1000;
/** Rows per request: well under PostgREST's body limit, even for week plans. */
const CHUNK = 500;
/** Rows per page when reading back — PostgREST's default cap is 1000. */
const PAGE = 1000;

export type SyncOutcome = 'pushed' | 'skipped' | 'failed';

async function client(): Promise<{ db: NonNullable<typeof supabase>; uid: string } | null> {
  if (supabase == null) return null;
  const uid = await currentUserId();
  return uid == null ? null : { db: supabase, uid };
}

/** When the plan last reached the server in full, or null if it never has. */
export function lastSyncAt(): number | null {
  const at = Number(kv.getString(LAST_PUSH_KEY) ?? 0);
  return at > 0 ? at : null;
}

// ── What has already been sent ───────────────────────────────────────────────
//
// Every row that went up is remembered as a short hash, per user and table. A
// push sends only rows whose hash is new or changed, so there is no window to
// cap: the whole history goes up once, and after that a day's push is a handful
// of rows. Keyed by user because signing in can change who the rows belong to,
// and the new account has been sent nothing.

type Row = Record<string, unknown>;

function hash(row: Row): string {
  // `updated_at` changes on every push and says nothing about the row.
  const { updated_at: _ignored, ...rest } = row;
  const text = JSON.stringify(rest);
  let h = 5381;
  for (let i = 0; i < text.length; i++) h = ((h << 5) + h + text.charCodeAt(i)) | 0;
  return (h >>> 0).toString(36);
}

function sentKey(uid: string, table: string): string {
  return `plan/sync-sent/${uid}/${table}`;
}

function sentHashes(uid: string, table: string): Record<string, string> {
  try {
    return JSON.parse(kv.getString(sentKey(uid, table)) ?? '{}') as Record<string, string>;
  } catch {
    return {};
  }
}

type Failure = { table: string; code: string };

/**
 * A failure as it is reported and handled.
 *
 * supabase-js does not throw when the request never arrives: the fetch error
 * comes back as a value like any database error, with an empty code and the
 * fetch's own message. Read as a table error it would be reported as `''` and
 * retried on every write while the phone is offline, so it is named `network`
 * here and backs off like a thrown one.
 */
function failureOf(table: string, error: { code?: string | null; message?: string | null }): Failure {
  if (error.code) return { table, code: error.code };
  const offline = /network|fetch|timed? ?out|offline|abort/i.test(error.message ?? '');
  return { table, code: offline ? 'network' : 'unknown' };
}

/**
 * Upserts the rows of `table` that changed since they were last sent, in
 * chunks, and remembers them once the server has them. A failed chunk stops the
 * table; its rows stay unsent and go on the next push.
 */
async function sendChanged(
  db: NonNullable<typeof supabase>,
  uid: string,
  table: string,
  rows: readonly Row[],
  keyOf: (row: Row) => string,
): Promise<Failure | null> {
  const sent = sentHashes(uid, table);
  const changed = rows.filter((row) => sent[keyOf(row)] !== hash(row));
  for (let i = 0; i < changed.length; i += CHUNK) {
    const chunk = changed.slice(i, i + CHUNK);
    const { error } = await db.from(table).upsert(chunk);
    if (error != null) return failureOf(table, error);
    for (const row of chunk) sent[keyOf(row)] = hash(row);
    kv.set(sentKey(uid, table), JSON.stringify(sent));
  }
  return null;
}

export type PushOptions = {
  /**
   * Skip the network backoff. For the pushes that must not wait: a finished
   * session or test, a check-in, and the app going away or coming back.
   */
  urgent?: boolean;
};

/** The push under way, if one is. */
let running: Promise<SyncOutcome> | null = null;
/** The one push queued behind it, and what it will be run with. */
let queued: Promise<SyncOutcome> | null = null;
let queuedWith: { facts: ProfileFacts; urgent: boolean } | null = null;

/**
 * Sends what changed since the last push. Idempotent: every row is an upsert on
 * its key, so a push repeated after a failure simply finishes the job.
 *
 * One at a time. A finish, the debounce and the app going to the background
 * can all ask within the same second, and two pushes racing would read the
 * same unsent rows and send them twice. A push asked for while one is running
 * runs once more after it — only once, however many ask — because the writes
 * that prompted it may have landed after the running one read its rows.
 *
 * Failures never reach the user — there is nothing they could do about a
 * server — but they do reach us: each is tracked with the table and the error
 * code, so a sync that has quietly stopped working shows up in PostHog the same
 * day rather than weeks later.
 */
export function pushPlan(facts: ProfileFacts, options: PushOptions = {}): Promise<SyncOutcome> {
  const urgent = options.urgent === true;
  if (running == null) {
    running = pushOnce(facts, urgent).finally(() => {
      running = null;
    });
    return running;
  }
  queuedWith = { facts, urgent: urgent || (queuedWith?.urgent ?? false) };
  if (queued == null) {
    queued = running
      .catch((): SyncOutcome => 'failed')
      .then(() => {
        const next = queuedWith ?? { facts, urgent };
        queuedWith = null;
        queued = null;
        return pushPlan(next.facts, { urgent: next.urgent });
      });
  }
  return queued;
}

/** When each table-and-code failure was last reported. In memory: a relaunch may say it again. */
const reportedAt = new Map<string, number>();

function report(failure: Failure, now: number): void {
  const key = `${failure.table}/${failure.code}`;
  const last = reportedAt.get(key);
  if (last != null && now - last < REPORT_EVERY_MS) return;
  reportedAt.set(key, now);
  track('plan_sync_failed', failure);
}

async function pushOnce(facts: ProfileFacts, urgent: boolean): Promise<SyncOutcome> {
  const failedAt = Number(kv.getString(FAILED_AT_KEY) ?? 0);
  if (!urgent && Date.now() - failedAt < BACKOFF_MS) return 'skipped';
  const c = await client();
  if (c == null) return 'skipped';
  const { db, uid } = c;
  // Read after the await, so the rows are the ones on disk now rather than
  // when the push was asked for.
  const now = Date.now();

  let failure: Failure | null = null;
  try {
    failure = await pushRows(db, uid, facts, now);
  } catch (error) {
    // A thrown error is the network, not the database: PostgREST errors come
    // back as values. Only this backs off — there is no point asking a dead
    // connection again on the next write.
    const thrown: Failure = {
      table: 'all',
      code: error instanceof Error && /network/i.test(error.message) ? 'network' : 'thrown',
    };
    kv.set(FAILED_AT_KEY, String(Date.now()));
    report(thrown, now);
    return 'failed';
  }
  if (failure?.code === 'network') {
    kv.set(FAILED_AT_KEY, String(Date.now()));
    report(failure, now);
    return 'failed';
  }
  kv.remove(FAILED_AT_KEY);
  if (failure != null) {
    // A table refusing its rows — a missing migration, a constraint — is not
    // made better by waiting. Its rows stay unsent (see `sendChanged`) and go
    // with the next write; the report is throttled so that is not a flood.
    report(failure, now);
    return 'failed';
  }
  kv.set(LAST_PUSH_KEY, String(now));
  return 'pushed';
}

async function pushRows(
  db: NonNullable<typeof supabase>,
  uid: string,
  facts: ProfileFacts,
  now: number,
): Promise<Failure | null> {
  const settings = planSettings();
  const start = programState().startDate;
  const all = sessions();

  const profile = {
    user_id: uid,
    days_per_week: settings.daysPerWeek,
    default_minutes: settings.defaultMinutes,
    pain_side: facts.painSide,
    pain_zones: [...facts.painZones],
    foot_type: settings.footType,
    equipment_missing: settings.equipmentMissing,
    wake_minutes: settings.reminderMinutes,
    weeks_started_on: start,
    outcome: outcome(),
    goal_answer: facts.goalAnswer,
    sport: facts.sport,
    updated_at: new Date(now).toISOString(),
  };
  const goalRows = goals().map((goal) => goalRow(uid, goal, now));

  const parents: [string, Row[], (row: Row) => string][] = [
    ['profiles', [profile], () => uid],
    ['goals', goalRows, (row) => String(row.type)],
    [
      'tests',
      retestResults().map((r) => ({
        user_id: uid,
        day_number: r.dayNumber,
        taken_on: r.date,
        calf_left: r.calf.left,
        calf_right: r.calf.right,
        balance_left: r.balance.left,
        balance_right: r.balance.right,
        arch_left: r.arch.left,
        arch_right: r.arch.right,
        symmetry_pct: r.symmetryPct,
        levels: r.levels,
      })),
      (row) => String(row.day_number),
    ],
    [
      'checkins',
      Object.values(allLogs())
        .filter((log) => log.dayNumber >= 1 && (log.painMorning != null || log.morningStretchDone))
        .map((log) => checkinRow(uid, log)),
      (row) => String(row.date),
    ],
    ['week_plans', Object.values(storedWeeks()).map((week) => weekRow(uid, week)), (row) => String(row.week_start)],
    ['sessions', all.map((s) => sessionRow(uid, s)), (row) => String(row.id)],
    [
      'app_usage',
      Object.entries(usageDays()).map(([date, day]) => ({ user_id: uid, date, seconds: day.seconds, opens: day.opens })),
      (row) => String(row.date),
    ],
    [
      'exercise_prefs',
      Object.entries(exercisePrefs()).map(([id, pref]) => ({
        user_id: uid,
        exercise_id: id,
        cant_do: pref.cantDo ?? null,
        skip_count: pref.skipCount,
      })),
      (row) => String(row.exercise_id),
    ],
  ];
  const results = await Promise.all(parents.map(([table, rows, keyOf]) => sendChanged(db, uid, table, rows, keyOf)));
  const failed = results.find((r) => r != null);
  if (failed != null) return failed;

  // Goals a changed big goal dropped go from the server too, or a restore would bring them back.
  const kept = goalRows.map((row) => String(row.type));
  if (kept.length > 0) {
    const { error } = await db.from('goals').delete().eq('user_id', uid).not('type', 'in', `(${kept.join(',')})`);
    if (error != null) return failureOf('goals', error);
  }

  // Exercises after their sessions: the foreign key needs the parent first.
  const exercises = all.flatMap((s) =>
    s.exercises.map((e) => ({ user_id: uid, session_id: s.id, exercise_id: e.id, status: e.status, swapped_to: e.swappedTo ?? null })),
  );
  return sendChanged(db, uid, 'session_exercises', exercises, (row) => `${String(row.session_id)}/${String(row.exercise_id)}`);
}

/** Every row of a table for this user, a page at a time. */
async function readAll(db: NonNullable<typeof supabase>, uid: string, table: string, order?: string): Promise<Row[] | null> {
  const out: Row[] = [];
  for (let from = 0; ; from += PAGE) {
    let query = db.from(table).select('*').eq('user_id', uid);
    if (order != null) query = query.order(order);
    const { data, error } = await query.range(from, from + PAGE - 1);
    if (error != null) {
      track('plan_sync_failed', { table, code: error.code ?? 'unknown' });
      return null;
    }
    out.push(...((data ?? []) as Row[]));
    if ((data ?? []).length < PAGE) return out;
  }
}

/**
 * A new install getting its plan back.
 *
 * Only when this device has done nothing of its own — no session and no
 * logged day — so a restore can never overwrite anything the user did here.
 * The starting goals onboarding just wrote do not count; the restored ones
 * replace them.
 *
 * Test results come back too, with the dates they were taken on (see
 * `importRetestResults`). They used to stay on the server, which left a
 * reinstalled phone with no tests at all: `testDue` fell back to the plan's
 * first day and somebody weeks in was asked for a new baseline.
 */
export async function restorePlan(): Promise<boolean> {
  const active = Object.values(allLogs()).some((log) => log.painMorning != null || log.sessionCompleted);
  if (active || sessions().length > 0) return false;
  const c = await client();
  if (c == null) return false;
  const { db, uid } = c;
  const profile = await db.from('profiles').select('*').eq('user_id', uid).maybeSingle();
  if (profile.error != null) {
    track('plan_sync_failed', { table: 'profiles', code: profile.error.code ?? 'unknown' });
    return false;
  }
  if (profile.data == null) return false;
  const [goalData, weekData, sessionData, exerciseData, prefData, checkinData, testData] = await Promise.all([
    readAll(db, uid, 'goals'),
    readAll(db, uid, 'week_plans'),
    readAll(db, uid, 'sessions', 'completed_at'),
    readAll(db, uid, 'session_exercises'),
    readAll(db, uid, 'exercise_prefs'),
    readAll(db, uid, 'checkins', 'date'),
    readAll(db, uid, 'tests', 'day_number'),
  ]);
  // All or nothing: half a history restored is worse than none, because the
  // device would then push that half back up as the whole.
  if (
    goalData == null ||
    weekData == null ||
    sessionData == null ||
    exerciseData == null ||
    prefData == null ||
    checkinData == null ||
    testData == null
  ) {
    return false;
  }
  const p = profile.data as Record<string, unknown>;

  if (typeof p.weeks_started_on === 'string') setProgramState({ startDate: p.weeks_started_on });

  const settings: PlanSettings = {
    daysPerWeek: (p.days_per_week as PlanSettings['daysPerWeek']) ?? 5,
    defaultMinutes: (p.default_minutes as PlanSettings['defaultMinutes']) ?? 5,
    equipmentMissing: (p.equipment_missing as PlanSettings['equipmentMissing']) ?? [],
    footType: (p.foot_type as PlanSettings['footType']) ?? 'unknown',
    reminderMinutes: (p.wake_minutes as number | null) ?? null,
  };
  const byId = new Map<string, SessionRecord['exercises']>();
  for (const row of exerciseData as Record<string, string>[]) {
    const list = byId.get(row.session_id) ?? [];
    list.push({ id: row.exercise_id, status: row.status as 'done', ...(row.swapped_to ? { swappedTo: row.swapped_to } : {}) });
    byId.set(row.session_id, list);
  }
  importPlan({
    settings,
    outcome: (p.outcome as Outcome | null) ?? null,
    goals: (goalData as Record<string, unknown>[]).map((row) => ({
      type: row.type as Goal['type'],
      status: row.status as Goal['status'],
      baseline: row.baseline == null ? null : Number(row.baseline),
      current: row.current == null ? null : Number(row.current),
      since: row.since as string,
      ...(row.achieved_on != null ? { achievedOn: row.achieved_on as string } : {}),
    })),
    weeks: Object.fromEntries(
      (weekData as Record<string, unknown>[]).map((row) => [
        row.week_start as string,
        {
          weekStart: row.week_start,
          weekIndex: row.week_index,
          focus: row.focus,
          days: row.days,
          rationale: row.rationale,
          newThisWeek: row.new_this_week,
          levels: row.levels,
        } as WeekPlan,
      ]),
    ),
    sessions: (sessionData as Record<string, unknown>[]).map((row) => ({
      id: row.id as string,
      date: row.date as string,
      source: row.source as SessionRecord['source'],
      minutes: Number(row.minutes),
      exercises: byId.get(row.id as string) ?? [],
      feedback: (row.feedback as SessionRecord['feedback']) ?? null,
      inSessionPain: row.in_session_pain == null ? null : Number(row.in_session_pain),
      completedAt: new Date(row.completed_at as string).getTime(),
      ...(row.routine_id != null ? { routineId: row.routine_id as string } : {}),
    })),
    prefs: Object.fromEntries(
      (prefData as Record<string, unknown>[]).map((row) => [
        row.exercise_id as string,
        { skipCount: Number(row.skip_count ?? 0), ...(row.cant_do != null ? { cantDo: row.cant_do } : {}) } as ExercisePref,
      ]),
    ),
  });

  // Check-ins go back into the day logs, which is where Progress and the
  // streak read them. The sessions' own completions are already in `sessions`,
  // and each writes its day through as it would have when it happened.
  const startDate = programState().startDate;
  for (const row of checkinData as Record<string, unknown>[]) {
    const day = dayFromDate(startDate, row.date as string);
    if (day < 1) continue;
    writeLog(day, {
      painMorning: row.pain_morning == null ? null : Number(row.pain_morning),
      painEntries: (row.entries as DayLog['painEntries']) ?? [],
      painZones: (row.zones as string[]) ?? [],
      morningStretchDone: row.morning_stretch === true,
    });
  }
  for (const s of sessions()) {
    const day = dayFromDate(startDate, s.date);
    if (day < 1) continue;
    if (s.source === 'library' || s.source === 'quick') writeLog(day, { libraryDone: true });
    else writeLog(day, { sessionCompleted: true, completedAt: s.completedAt, exercisesDone: s.exercises.filter((e) => e.status === 'done').map((e) => e.id) });
  }

  // Day numbers on the server count from the start date restored above, so
  // they land on the same dates here. Only onto an empty record — a test taken
  // on this phone is never replaced by the server's copy.
  if (retestResults().length === 0 && testData.length > 0) {
    importRetestResults((testData as Record<string, unknown>[]).map(testFromRow));
  }
  return true;
}

/** A `tests` row as the device's retest record. The levels are re-derived on import. */
function testFromRow(row: Record<string, unknown>): Pick<RetestResult, 'dayNumber' | 'date' | 'calf' | 'balance' | 'arch'> {
  return {
    dayNumber: Number(row.day_number),
    date: String(row.taken_on),
    calf: { left: Number(row.calf_left), right: Number(row.calf_right) },
    balance: { left: Number(row.balance_left), right: Number(row.balance_right) },
    arch: { left: Number(row.arch_left), right: Number(row.arch_right) },
  };
}

function dayFromDate(startDate: string, date: string): number {
  const [y1, m1, d1] = startDate.split('-').map(Number);
  const [y2, m2, d2] = date.split('-').map(Number);
  return Math.round((new Date(y2, m2 - 1, d2).getTime() - new Date(y1, m1 - 1, d1).getTime()) / 86_400_000) + 1;
}

function goalRow(uid: string, goal: Goal, now: number) {
  return {
    user_id: uid,
    type: goal.type,
    status: goal.status,
    baseline: goal.baseline,
    current: goal.current,
    since: goal.since,
    achieved_on: goal.achievedOn ?? null,
    updated_at: new Date(now).toISOString(),
  };
}

function checkinRow(uid: string, log: DayLog) {
  return {
    user_id: uid,
    date: log.date ?? dateKeyForDay(log.dayNumber),
    pain_morning: log.painMorning,
    entries: log.painEntries ?? [],
    zones: log.painZones ?? [],
    morning_stretch: log.morningStretchDone,
  };
}

function weekRow(uid: string, week: WeekPlan) {
  return {
    user_id: uid,
    week_start: week.weekStart,
    week_index: week.weekIndex,
    focus: week.focus,
    days: week.days,
    rationale: week.rationale,
    new_this_week: week.newThisWeek,
    levels: week.levels,
  };
}

function sessionRow(uid: string, s: SessionRecord) {
  return {
    id: s.id,
    user_id: uid,
    date: s.date,
    source: s.source,
    routine_id: s.routineId ?? null,
    minutes: s.minutes,
    feedback: s.feedback,
    in_session_pain: s.inSessionPain,
    completed_at: new Date(s.completedAt).toISOString(),
  };
}
