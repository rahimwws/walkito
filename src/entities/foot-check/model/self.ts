import { kv } from '@/shared/lib/storage';

/**
 * Which heel lifted first when she slid both feet back, sitting, in the
 * onboarding's Foot Check: her own answer, by eye. Kept so Progress's "Ankle
 * bend" can say where she started before any degrees exist.
 *
 * On this phone only, as the degrees are: an observation about a body, never
 * sent to analytics or to the server, and never mixed into the degrees' chart.
 */
export type HeelLift = 'left' | 'right' | 'both' | 'unsure';

export type SelfCheck = {
  /** When it was answered, epoch ms. */
  at: number;
  heel: HeelLift;
};

const KEY = 'foot-check/self';

function isHeel(value: unknown): value is HeelLift {
  return value === 'left' || value === 'right' || value === 'both' || value === 'unsure';
}

export function selfCheck(): SelfCheck | null {
  const raw = kv.getString(KEY);
  if (raw == null) return null;
  try {
    const parsed = JSON.parse(raw) as Partial<SelfCheck>;
    return typeof parsed.at === 'number' && isHeel(parsed.heel) ? { at: parsed.at, heel: parsed.heel } : null;
  } catch {
    return null;
  }
}

export function saveSelfCheck(heel: HeelLift, at: number = Date.now()): void {
  kv.set(KEY, JSON.stringify({ at, heel }));
}

/** Development only: an answer to show on Progress, or none (`off`). */
export function devSeedSelfCheck(heel: HeelLift | 'off'): void {
  if (!__DEV__) return;
  if (heel === 'off') kv.remove(KEY);
  else saveSelfCheck(heel);
}
