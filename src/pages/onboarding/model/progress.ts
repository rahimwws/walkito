import { kv } from '@/shared/lib/storage';

/**
 * The onboarding as far as it has been answered, kept on the phone.
 *
 * The flow used to live in the screen's own state, so leaving the app and
 * coming back after iOS had dropped the process started it again at the
 * welcome screen with every answer gone. On the first day of paid installs
 * 7 of the 16 people who did not finish came back, up to seven times each, and
 * were asked their name again each time. Now a return lands on the question
 * they left, with what they had said.
 *
 * The step is kept by its key, not its place in the table: an update that adds
 * or removes a step must not land somebody on a different question. Kept for
 * two weeks; after that the answers describe another fortnight's feet.
 */

const KEY = 'onboarding/progress';
const KEEP_MS = 14 * 86_400_000;

export type SavedAnswers = Record<string, string | string[]>;

export type SavedProgress = {
  /** The step on screen, by its stable key from `STEPS`. */
  step: string;
  answers: SavedAnswers;
  /** The daily reminder, minutes past midnight, once it was set by hand. */
  reminder: number | null;
};

export function saveProgress(progress: SavedProgress, now: number = Date.now()): void {
  kv.set(KEY, JSON.stringify({ ...progress, at: now }));
}

/** What was kept, or null: nothing kept, too old, or not something this
 * version wrote. */
export function loadProgress(now: number = Date.now()): SavedProgress | null {
  const raw = kv.getString(KEY);
  if (raw == null) return null;
  try {
    const parsed = JSON.parse(raw) as Partial<SavedProgress> & { at?: unknown };
    if (typeof parsed.at !== 'number' || now - parsed.at > KEEP_MS) return null;
    if (typeof parsed.step !== 'string' || parsed.answers == null || typeof parsed.answers !== 'object') return null;
    const answers: SavedAnswers = {};
    for (const [key, value] of Object.entries(parsed.answers)) {
      if (typeof value === 'string') answers[key] = value;
      else if (Array.isArray(value) && value.every((item) => typeof item === 'string')) answers[key] = value;
    }
    return { step: parsed.step, answers, reminder: typeof parsed.reminder === 'number' ? parsed.reminder : null };
  } catch {
    return null;
  }
}

export function clearProgress(): void {
  kv.remove(KEY);
}
