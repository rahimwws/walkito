import { useEffect } from 'react';
import { DevSettings, Linking } from 'react-native';

import {
  addDays,
  dayNumberFor,
  ensureGoals,
  fromDateKey,
  goals,
  programState,
  recordRetest,
  refreshGoals,
  setProgramState,
  todayKey,
  writeLog,
} from '@/entities/program';

/**
 * Demo data for the Progress screen, development builds only.
 *
 * Writes through the same entity functions the app does, so what it draws is
 * what a real three weeks would draw:
 *
 * - the plan's start is moved back to 20 days ago if it is later than that;
 * - 21 mornings of first-step pain trending 7 → 3 with some noise, two of them
 *   left blank, and two days missed outright (no log at all) so the current and
 *   longest streaks differ;
 * - a session done on every other logged day;
 * - three tests on plan days 1, 8 and 21 (today, so the results screen opens): calf raises 8 → 12 → 16,
 *   balance 9 → 14 → 20 s, arch hold 15 → 25 → 34 s;
 * - goals created if there are none, then refreshed from the above.
 *
 * Idempotent: running it again overwrites the same days and the same tests.
 * It does overwrite those days' logs, so never point it at data you care about.
 */
export function seedDemoProgress(now: number = Date.now()): void {
  if (!__DEV__) return;

  const today = todayKey(now);
  const first = addDays(today, -20);
  if (programState().startDate > first) setProgramState({ startDate: first });
  const state = programState();

  const morningOf = (date: string, hour: number) => {
    const at = fromDateKey(date);
    at.setHours(hour, 0, 0, 0);
    return at.getTime();
  };

  // The tests first: the log writes below bump the version the screen listens
  // to, so it redraws once with everything in place.
  const tests: [number, { calf: number; otherCalf: number; balance: number; arch: number }][] = [
    [0, { calf: 8, otherCalf: 11, balance: 9, arch: 15 }],
    [7, { calf: 12, otherCalf: 14, balance: 14, arch: 25 }],
    [20, { calf: 16, otherCalf: 17, balance: 20, arch: 34 }],
  ];
  for (const [offset, measured] of tests) {
    const date = addDays(first, offset);
    recordRetest(dayNumberFor(state, date), measured, morningOf(date, 9));
  }

  const NOISE = [0, 1, -1, 0, 1, 0, -1, 1, 0, 0, -1, 1, 0, -1, 0, 1, 0, -1, 0, 1, 0];
  const MISSED = new Set([5, 10]);
  const UNLOGGED = new Set([3, 16]);
  for (let i = 0; i <= 20; i += 1) {
    if (MISSED.has(i)) continue;
    const date = addDays(first, i);
    const day = dayNumberFor(state, date);
    if (day < 1) continue;
    const at = morningOf(date, 8);
    const score = Math.max(0, Math.min(10, Math.round(7 - (4 * i) / 20 + NOISE[i])));
    const logged = !UNLOGGED.has(i);
    writeLog(
      day,
      {
        painMorning: logged ? score : null,
        painEntries: logged ? [{ score, at }] : [],
        sessionCompleted: i % 2 === 0 || !logged,
      },
      at,
    );
  }

  if (goals().length === 0) {
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
  }
  refreshGoals(now);
}

const MENU_TITLE = 'Seed demo progress';
/** `walkito://progress?seedDemo` runs it too, for `xcrun simctl openurl`. */
const SEED_PARAM = /[?&]seedDemo\b/;

/**
 * Wires `seedDemoProgress` to the React Native dev menu, to a deep link, and
 * to `globalThis.seedDemoProgress` for the JS console. Development only; the
 * whole body folds away in a release bundle.
 *
 * Not `registerDevMenuItems` from expo-dev-client: that replaces the custom
 * list outright and would take "Preview update sheet" off it.
 */
export function useSeedDemoTrigger(): void {
  useEffect(() => {
    if (__DEV__) {
      const run = () => seedDemoProgress();
      (globalThis as { seedDemoProgress?: () => void }).seedDemoProgress = run;
      try {
        DevSettings.addMenuItem(MENU_TITLE, run);
      } catch {
        // Not in this runtime.
      }
      const onUrl = (url: string | null) => {
        if (url != null && SEED_PARAM.test(url)) run();
      };
      void Linking.getInitialURL()
        .then(onUrl)
        .catch(() => undefined);
      const subscription = Linking.addEventListener('url', ({ url }) => onUrl(url));
      return () => subscription.remove();
    }
    return undefined;
  }, []);
}
