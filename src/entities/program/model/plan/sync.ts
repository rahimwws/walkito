import { track } from '@/shared/lib/analytics';
import { currentUserId, supabase } from '@/shared/lib/supabase';
import { usageDays } from '@/shared/lib/usage';
import { kv } from '@/shared/lib/storage';

import { retestResults } from '../program';
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
/** After a failure, wait this long before trying again. */
const BACKOFF_MS = 30 * 60 * 1000;
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
    if (error != null) return { table, code: error.code ?? 'unknown' };
    for (const row of chunk) sent[keyOf(row)] = hash(row);
    kv.set(sentKey(uid, table), JSON.stringify(sent));
  }
  return null;
}

/**
 * Sends what changed since the last push. Idempotent: every row is an upsert on
 * its key, so a push repeated after a failure simply finishes the job.
 *
 * Failures never reach the user — there is nothing they could do about a
 * server — but they do reach us: each is tracked with the table and the error
 * code, so a sync that has quietly stopped working shows up in PostHog the same
 * day rather than weeks later.
 */
export async function pushPlan(facts: ProfileFacts, now: number = Date.now()): Promise<SyncOutcome> {
  const failedAt = Number(kv.getString(FAILED_AT_KEY) ?? 0);
  if (now - failedAt < BACKOFF_MS) return 'skipped';
  const c = await client();
  if (c == null) return 'skipped';
  const { db, uid } = c;

  let failure: Failure | null = null;
  try {
    failure = await pushRows(db, uid, facts, now);
  } catch (error) {
    // A thrown error is the network, not the database: PostgREST errors come back as values.
    failure = { table: 'all', code: error instanceof Error && /network/i.test(error.message) ? 'network' : 'thrown' };
  }
  if (failure != null) {
    kv.set(FAILED_AT_KEY, String(now));
    track('plan_sync_failed', failure);
    return 'failed';
  }
  kv.remove(FAILED_AT_KEY);
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
    if (error != null) return { table: 'goals', code: error.code ?? 'unknown' };
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
 * replace them. Test results
 * are not restored: the levels table on the device is rebuilt from them by the
 * retest flow, and replaying that here would stamp every old test with today's
 * date. They stay on the server for Progress to read back later.
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
  const [goalData, weekData, sessionData, exerciseData, prefData, checkinData] = await Promise.all([
    readAll(db, uid, 'goals'),
    readAll(db, uid, 'week_plans'),
    readAll(db, uid, 'sessions', 'completed_at'),
    readAll(db, uid, 'session_exercises'),
    readAll(db, uid, 'exercise_prefs'),
    readAll(db, uid, 'checkins', 'date'),
  ]);
  // All or nothing: half a history restored is worse than none, because the
  // device would then push that half back up as the whole.
  if (goalData == null || weekData == null || sessionData == null || exerciseData == null || prefData == null || checkinData == null) {
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
  return true;
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
