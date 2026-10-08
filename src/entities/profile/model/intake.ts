import { useSyncExternalStore } from 'react';

import { kv } from '@/shared/lib/storage';

/**
 * What the user told us about themselves in onboarding.
 *
 * Fifteen screens of questions, and until this existed every answer but the
 * name was held in the flow's local state and dropped when it unmounted. The
 * plan could not lean towards the calf for an Achilles, the retest could not
 * know which leg was the sore one, and nothing downstream could speak in the
 * user's sport. Written down once, when the flow finishes, and read by whatever
 * needs it.
 *
 * Every field is optional: the flow can be skipped from any screen, and a
 * missing answer is a real state — "we were not told" — not a default.
 */
export type Intake = {
  /** Where it hurts, as picked. `none` when nothing does. */
  pain: readonly string[];
  /** Which leg is being worked on. */
  side: 'left' | 'right' | 'both' | null;
  sport: string | null;
  runner: string | null;
  goal: string | null;
  challenge: string | null;
  /** The load answer, phrased for the sport; kept as the option value. */
  load: string | null;
  sessionsPerWeek: string | null;
  sex: string | null;
  age: number | null;
  weightKg: number | null;
  shoe: { size: number; unit: 'eu' | 'us' } | null;
  watch: string | null;
  /** What keeps them on their feet: `running`, `feet` (a standing job),
   * `both` or `walking`. Optional: intakes written before it was asked. */
  role?: string | null;
  /** How long it has been like this: `weeks`, `months`, `year` or `longer`. */
  painDuration?: string | null;
  /** The first steps out of bed this morning, 0–10. Also logged as day one's
   * check-in, so the progress chart starts from it. */
  morningPain?: number | null;
  /** The safety answers that change the plan, `none` when none applied. */
  safety?: readonly string[];
  /** What they have already tried for it. */
  tried?: readonly string[];
  /** The everyday moment the session is tied to (`wake`, `coffee`, `shift`, `bed`). */
  habit?: string | null;
  /** The 30-second check, when it ran: arch on the big toe lift, and seconds
   * on one leg per side. */
  miniTest?: {
    arch: 'yes' | 'no' | 'unsure' | null;
    balanceLeft: number | null;
    balanceRight: number | null;
  } | null;
  /** When the flow finished, epoch ms. */
  completedAt: number;
};

const KEY = 'profile/intake';

function read(): Intake | null {
  const raw = kv.getString(KEY);
  if (raw == null) return null;
  try {
    const parsed = JSON.parse(raw) as Intake;
    return parsed != null && Array.isArray(parsed.pain) ? parsed : null;
  } catch {
    // Unreadable answers cost personalisation, never the app.
    return null;
  }
}

let intake: Intake | null = read();
const subscribers = new Set<() => void>();

export function saveIntake(next: Intake): void {
  intake = next;
  kv.set(KEY, JSON.stringify(next));
  for (const listener of subscribers) listener();
}

/** The answers, or null for someone who installed before they were kept. */
export function getIntake(): Intake | null {
  return intake;
}

export function useIntake(): Intake | null {
  return useSyncExternalStore(
    (listener) => {
      subscribers.add(listener);
      return () => subscribers.delete(listener);
    },
    () => intake,
    () => intake,
  );
}

export function resetIntake(): void {
  intake = null;
  kv.remove(KEY);
  for (const listener of subscribers) listener();
}
