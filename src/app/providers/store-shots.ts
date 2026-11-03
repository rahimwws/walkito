import * as Updates from 'expo-updates';
import { useEffect } from 'react';
import { DevSettings, Linking } from 'react-native';

import { saveIntake, setProfileName } from '@/entities/profile';
import {
  addDays,
  dayNumberFor,
  ensureGoals,
  fromDateKey,
  markMilestoneSeen,
  programState,
  recordRetest,
  recordSession,
  refreshGoals,
  setProgramState,
  STREAK_MILESTONES,
  toDateKey,
  writeLog,
} from '@/entities/program';
import { grantDevAccess } from '@/entities/purchase';
import { armSetup, completeOnboarding, finishHomeTour, finishSetup } from '@/entities/session';
import { kv } from '@/shared/lib/storage';

/**
 * Seeded users, for pictures of the app.
 *
 * App Store screenshots: Maria in week two, on Friday 23 October 2026 at 7:12
 * (the clock is shifted by `store-clock.js`). Development builds only, with
 * `EXPO_PUBLIC_STORE_SHOTS=1` in Metro's environment; a release bundle folds it
 * away.
 *
 * TikTok recordings: the `demo` build profile (`EXPO_PUBLIC_DEMO_BUILD=1`), a
 * TestFlight build that is never sent to review. It sends nothing anywhere
 * (no PostHog, AppsFlyer or Supabase) and starts as a fresh install;
 * `walkito://?demo=<id>` swaps a user in:
 * - `jess`: three weeks in, on her feet at work, mornings from 7 down to 3,
 *   today's check-in and session still open.
 * - `test`: two weeks in, mornings 6 to 4, and today the first test since the
 *   one on day one, so a recording shows the test and the before and after.
 * - `day1`: just bought: Home opens on the "Day 1" card, its two minutes and
 *   the tour.
 * - `new`: everything wiped, the onboarding from its first screen.
 * Dates are counted back from today, so the same seed works on any day.
 *
 * Two launches: the first wipes the keys the seed owns and reloads, so no store
 * still holds the old data in memory; the second writes the user through the
 * same entity functions the app uses. Nothing is synced: the seed never signs in.
 */
export const STORE_SHOTS = __DEV__ && process.env.EXPO_PUBLIC_STORE_SHOTS === '1';
const DEMO_BUILD = process.env.EXPO_PUBLIC_DEMO_BUILD === '1';

const PHASE_KEY = 'store-shots/phase-v2';
const PERSONA_KEY = 'store-shots/persona';
const RESEED_AT_KEY = 'store-shots/reseed-at';
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
  'plan/test-not-before',
  'streak/rest-cutover',
  'streak/milestones-seen',
  'session/home-tour',
  'session/home-tour-step',
  'session/home-tour-stage',
  'session/setup-pending',
  'session/setup-finished-at',
];

type Retest = { calf: number; otherCalf: number; balance: number; arch: number };

/** Days are counted back from today: 0 is today, 21 three weeks ago. */
type Persona = {
  name: string;
  start: number;
  intake: { pain: 'heel' | 'arch'; side: 'left' | 'right'; painDuration: 'weeks' | 'months'; morningPain: number };
  checkins: [number, number][];
  sessions: number[];
  retests: [number, Retest][];
  /** Bought, but Home still to open on the "Day 1" card and the tour. */
  firstRun?: boolean;
};

const EXERCISES = ['fascia_stretch', 'short_foot_seated', 'heel_raise_hold'];

/** Friday 23 October 2026 under the shifted clock: the 14th to the 23rd. */
const MARIA: Persona = {
  name: 'Maria',
  start: 9,
  intake: { pain: 'heel', side: 'right', painDuration: 'months', morningPain: 6 },
  checkins: [[9, 6], [8, 6], [7, 5], [5, 5], [4, 5], [3, 4], [2, 5], [1, 4], [0, 4]],
  sessions: [9, 8, 7, 5, 4, 3, 2, 1],
  retests: [[7, { calf: 12, otherCalf: 13, balance: 14, arch: 20 }]],
};

/** Every day of the last three weeks, mornings easing from 7 to 3 with the
 * odd worse one; today is left for the recording. */
const JESS_MORNINGS = [7, 7, 6, 7, 6, 6, 5, 6, 5, 5, 5, 4, 5, 4, 4, 4, 3, 4, 3, 3, 3];
const JESS: Persona = {
  name: 'Jess',
  start: 21,
  intake: { pain: 'heel', side: 'left', painDuration: 'months', morningPain: 7 },
  checkins: JESS_MORNINGS.map((score, i) => [21 - i, score]),
  sessions: JESS_MORNINGS.map((_, i) => 21 - i).filter((ago) => ago !== 19),
  retests: [
    [19, { calf: 9, otherCalf: 13, balance: 8, arch: 15 }],
    [5, { calf: 15, otherCalf: 16, balance: 19, arch: 24 }],
  ],
};

/** The first test on day one, fourteen days ago: the next is due today. */
const TEST_MORNINGS = [6, 6, 6, 5, 6, 5, 5, 5, 4, 5, 4, 4, 4, 4];
const TEST: Persona = {
  name: 'Jess',
  start: 14,
  intake: { pain: 'heel', side: 'left', painDuration: 'months', morningPain: 6 },
  checkins: TEST_MORNINGS.map((score, i) => [14 - i, score]),
  sessions: TEST_MORNINGS.map((_, i) => 14 - i).filter((ago) => ago !== 10),
  retests: [[14, { calf: 9, otherCalf: 13, balance: 8, arch: 15 }]],
};

/** Onboarding finished this morning, the plan bought a minute ago. */
const DAY1: Persona = {
  name: 'Jess',
  start: 0,
  intake: { pain: 'heel', side: 'left', painDuration: 'months', morningPain: 6 },
  checkins: [[0, 6]],
  sessions: [],
  retests: [],
  firstRun: true,
};

const PERSONAS = { maria: MARIA, jess: JESS, test: TEST, day1: DAY1 } as const;
type PersonaId = keyof typeof PERSONAS | 'new';

function dateAgo(days: number): string {
  return addDays(toDateKey(new Date()), -days);
}

function at(date: string, hour: number, minute = 0): number {
  const d = fromDateKey(date);
  d.setHours(hour, minute, 0, 0);
  return d.getTime();
}

function seed(persona: Persona): void {
  const start = dateAgo(persona.start);
  setProfileName(persona.name);
  saveIntake({
    pain: [persona.intake.pain],
    side: persona.intake.side,
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
    painDuration: persona.intake.painDuration,
    morningPain: persona.intake.morningPain,
    safety: ['none'],
    tried: [],
    habit: 'shift',
    miniTest: null,
    completedAt: at(start, 6, 30),
  });
  setProgramState({ startDate: start, phase: 'program' });
  const state = programState();

  for (const [ago, score] of persona.checkins) {
    const date = dateAgo(ago);
    const time = at(date, 6, 45);
    writeLog(dayNumberFor(state, date), { painMorning: score, painEntries: [{ score, at: time }] }, time);
  }
  for (const ago of persona.sessions) {
    const date = dateAgo(ago);
    recordSession({
      date,
      source: 'plan',
      minutes: 5,
      exercises: EXERCISES.map((id) => ({ id, status: 'done' as const })),
      feedback: null,
      inSessionPain: null,
      completedAt: at(date, 7, 5),
    });
  }
  for (const [ago, measured] of persona.retests) {
    const date = dateAgo(ago);
    recordRetest(dayNumberFor(state, date), measured, at(date, 7, 30));
  }

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
  completeOnboarding();
  if (persona.firstRun) {
    // The setup's end arms the "Day 1" card and the tour after it.
    armSetup();
    finishSetup();
  } else {
    finishSetup();
    finishHomeTour();
  }
  // The streak the seed already has is old news: no celebration on opening.
  for (const days of STREAK_MILESTONES) if (days <= persona.start) markMilestoneSeen(days);
  kv.set('review/third-open-asked', true);
  kv.set('review/last-asked', String(now));
}

function reload(): void {
  setTimeout(() => {
    if (__DEV__) DevSettings.reload();
    else void Updates.reloadAsync().catch(() => {});
  }, 0);
}

/** Runs at module load of the root layout, before the first screen. */
export function runStoreShots(): void {
  if (!STORE_SHOTS && !DEMO_BUILD) return;
  const persona = kv.getString(PERSONA_KEY) ?? (STORE_SHOTS ? 'maria' : null);
  // The demo build starts as a fresh install, until a link picks somebody.
  if (persona == null || persona === 'new') return;
  const phase = kv.getString(PHASE_KEY);
  if (phase === 'seeded') return;
  if (phase !== 'wiped') {
    for (const key of OWNED_KEYS) kv.remove(key);
    kv.set(PHASE_KEY, 'wiped');
    reload();
    return;
  }
  seed(PERSONAS[persona in PERSONAS ? (persona as keyof typeof PERSONAS) : 'maria']);
  kv.set(PHASE_KEY, 'seeded');
}

/** `?seedPersona=<id>` (development) or `walkito://?demo=<id>` (the demo
 * build): wipe and seed again as that user, on the next two launches, as the
 * first run of the switch does. `new` wipes everything and seeds nothing. */
export function reseedStoreShots(persona: string): void {
  if (!STORE_SHOTS && !DEMO_BUILD) return;
  if (persona !== 'new' && !(persona in PERSONAS)) return;
  if (persona === 'new') kv.clearAll();
  kv.set(PERSONA_KEY, persona as PersonaId);
  kv.set(RESEED_AT_KEY, Date.now());
  kv.remove(PHASE_KEY);
  reload();
}

const DEMO_PARAM = /[?&]demo=(\w+)/;
/** A reload keeps the launch's link, so the link that asked for the switch
 * comes back as the initial URL of both reloads after it. */
const RELOAD_GRACE_MS = 30_000;

/** The demo build's links, at launch and while running. */
export function useDemoLinks(): void {
  useEffect(() => {
    if (!DEMO_BUILD) return;
    const onUrl = (url: string | null) => {
      const match = url == null ? null : DEMO_PARAM.exec(url);
      if (match != null) reseedStoreShots(match[1]);
    };
    void Linking.getInitialURL().then((url) => {
      const reseedAt = kv.getNumber(RESEED_AT_KEY);
      if (reseedAt != null && Date.now() - reseedAt < RELOAD_GRACE_MS) return;
      onUrl(url);
    });
    const sub = Linking.addEventListener('url', ({ url }) => onUrl(url));
    return () => sub.remove();
  }, []);
}
