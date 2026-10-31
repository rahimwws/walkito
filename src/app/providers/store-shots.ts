import { DevSettings } from 'react-native';

import { saveIntake, setProfileName } from '@/entities/profile';
import {
  dayNumberFor,
  ensureGoals,
  fromDateKey,
  programState,
  recordRetest,
  recordSession,
  refreshGoals,
  setProgramState,
  writeLog,
} from '@/entities/program';
import { grantDevAccess } from '@/entities/purchase';
import { finishHomeTour, finishSetup } from '@/entities/session';
import { kv } from '@/shared/lib/storage';

/**
 * App Store screenshots: one user, Maria, in week two, on Friday 23 October
 * 2026 at 7:12 (the clock is shifted by `store-clock.js`). Development builds
 * only, with `EXPO_PUBLIC_STORE_SHOTS=1` in Metro's environment; a release
 * bundle folds it away, so it cannot reach a store build.
 *
 * Two launches: the first wipes the keys the seed owns and reloads, so no store
 * still holds the old data in memory; the second writes Maria through the same
 * entity functions the app uses. Nothing is synced: the seed never signs in.
 */
export const STORE_SHOTS = __DEV__ && process.env.EXPO_PUBLIC_STORE_SHOTS === '1';

const PHASE_KEY = 'store-shots/phase-v2';
const OWNED_KEYS = [
  'program/logs',
  'program/retests',
  'program/retest-results',
  'program/freezes',
  'plan/sessions',
  'plan/weeks',
  'plan/weeks-doses',
  'plan/goals',
  'plan/outcome',
  'plan/step-down',
  'plan/goal-met-weeks',
  'streak/rest-cutover',
  'streak/milestones-seen',
];

const START = '2026-10-14';
const CHECKINS: [string, number][] = [
  ['2026-10-14', 6], ['2026-10-15', 6], ['2026-10-16', 5], ['2026-10-18', 5],
  ['2026-10-19', 5], ['2026-10-20', 4], ['2026-10-21', 5], ['2026-10-22', 4], ['2026-10-23', 4],
];
const SESSIONS = ['2026-10-14', '2026-10-15', '2026-10-16', '2026-10-18', '2026-10-19', '2026-10-20', '2026-10-21', '2026-10-22'];
const EXERCISES = ['fascia_stretch', 'short_foot_seated', 'heel_raise_hold'];

function at(date: string, hour: number, minute = 0): number {
  const d = fromDateKey(date);
  d.setHours(hour, minute, 0, 0);
  return d.getTime();
}

function seed(): void {
  setProfileName('Maria');
  saveIntake({
    pain: ['heel'],
    side: 'right',
    sport: null,
    runner: null,
    goal: 'walk_without_thinking',
    challenge: null,
    load: null,
    sessionsPerWeek: null,
    sex: null,
    age: null,
    weightKg: null,
    shoe: null,
    watch: null,
    role: 'feet',
    painDuration: 'months',
    morningPain: 6,
    safety: ['none'],
    tried: [],
    habit: 'shift',
    miniTest: null,
    completedAt: at(START, 6, 30),
  });
  setProgramState({ startDate: START, phase: 'program' });
  const state = programState();

  for (const [date, score] of CHECKINS) {
    const time = at(date, 6, 45);
    writeLog(dayNumberFor(state, date), { painMorning: score, painEntries: [{ score, at: time }] }, time);
  }
  for (const date of SESSIONS) {
    const completedAt = at(date, 7, 5);
    recordSession({
      date,
      source: 'plan',
      minutes: 5,
      exercises: EXERCISES.map((id) => ({ id, status: 'done' as const })),
      feedback: null,
      inSessionPain: null,
      completedAt,
    });
  }
  recordRetest(dayNumberFor(state, '2026-10-16'), { calf: 12, otherCalf: 13, balance: 14, arch: 20 }, at('2026-10-16', 7, 30));

  const now = Date.now();
  ensureGoals(
    {
      painReported: true,
      footType: 'unknown',
      plantarPain: true,
      loadsFeet: true,
      firstGapPct: null,
      goal: null,
      sport: null,
      areas: ['heel'],
    },
    now,
  );
  refreshGoals(now);

  grantDevAccess();
  finishSetup();
  finishHomeTour();
  kv.set('review/third-open-asked', true);
  kv.set('review/last-asked', now);
}

/** Runs at module load of the root layout, before the first screen. */
export function runStoreShots(): void {
  if (!STORE_SHOTS) return;
  const phase = kv.getString(PHASE_KEY);
  if (phase === 'seeded') return;
  if (phase !== 'wiped') {
    for (const key of OWNED_KEYS) kv.remove(key);
    kv.set(PHASE_KEY, 'wiped');
    setTimeout(() => DevSettings.reload(), 0);
    return;
  }
  seed();
  kv.set(PHASE_KEY, 'seeded');
}
