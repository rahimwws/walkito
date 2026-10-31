import { mergeDays, recomputeSignals } from './cache';
import type { DailyMetric } from './metrics';
import { dayKey } from './sleep';

/**
 * Thirty days of believable Health, development builds only, for looking at
 * the screens that read it on a simulator (whose Health is empty).
 *
 * A working week of 7-10k steps, a long day on foot yesterday, a short-ish
 * week of sleep, tennis on Saturdays, two runs, and a step that shortened
 * this week. Written through the same cache the pipeline writes, so every
 * signal is computed from it the real way. Overwrites those days.
 */
export function devSeedHealth(now: Date = new Date(), painNextMorning?: (date: string) => number | null): void {
  if (!__DEV__) return;
  const days: DailyMetric[] = [];
  for (let ago = 29; ago >= 0; ago -= 1) {
    const date = new Date(now);
    date.setHours(12, 0, 0, 0);
    date.setDate(date.getDate() - ago);
    const weekday = date.getDay();
    const wave = Math.sin(ago * 1.7) * 0.5 + 0.5;
    const yesterday = ago === 1;
    const weekend = weekday === 0 || weekday === 6;
    // Tied to the seeded mornings, so the patterns card has something real
    // to find: long days on foot before the sorer mornings, short nights on
    // them.
    const before = new Date(date);
    before.setDate(before.getDate() - 1);
    const painThisMorning = painNextMorning?.(dayKey(before)) ?? null;
    const painNext = painNextMorning?.(dayKey(date)) ?? null;
    const sore = painNext != null && painNext >= 5;
    const steps = Math.round((yesterday ? 14200 : sore ? 12500 : weekend ? 6200 : 8200) + wave * 2200);
    const hours = yesterday ? 9 : sore ? 10 : weekend ? 4 : 6 + Math.round(wave * 2);
    days.push({
      date: dayKey(date),
      steps: ago === 0 ? 3100 : steps,
      asymmetryPct: 4 + wave * 2,
      walkingSpeed: 1.25 + wave * 0.08,
      sleepMin: Math.round((painThisMorning != null && painThisMorning >= 5 ? 350 : ago <= 6 ? 375 : 450) + wave * 30),
      wakeMin: 7 * 60 + Math.round(wave * 30),
      restingHR: 58 + Math.round(wave * 3),
      flights: 6 + Math.round(wave * 6),
      hoursOnFeet: ago === 0 ? 2 : hours,
      standHours: ago === 0 ? null : hours + (weekend ? 0 : 1),
      longestRunKm: ago === 9 || ago === 16 ? 6.5 : null,
      lastRunEndAt: null,
      stepLengthCm: ago <= 6 ? 63 + wave : 70 + wave * 2,
      doubleSupportPct: ago <= 6 ? 31 + wave : 28 + wave,
      distanceKm: Math.round((steps * 0.7) / 100) / 10,
      sportMin: weekday === 6 ? 70 : null,
      runContactMs: ago === 9 || ago === 16 ? 248 : null,
      runStrideM: ago === 9 || ago === 16 ? 1.12 : null,
    });
  }
  mergeDays(days);
  recomputeSignals(dayKey(now), painNextMorning);
}
