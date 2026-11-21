import type { Key } from '@/shared/lib/i18n';

export type Answer = 'fine' | 'stiff' | 'sore' | 'hurt';

export const ANSWERS: readonly Answer[] = ['fine', 'stiff', 'sore', 'hurt'];

/**
 * The four words, as the 0–10 the check-in has always stored, so the plan
 * reads them exactly as it read the old dial: "fine" is no pain, "it hurt"
 * is the dial's "Hurts" band (7, where the plan eases the day off).
 */
export const ANSWER_SCORE: Readonly<Record<Answer, number>> = { fine: 0, stiff: 2, sore: 5, hurt: 7 };

/** The word a stored score reads as, a score logged on the old dial too. */
export function answerFor(score: number): Answer {
  if (score <= 0) return 'fine';
  if (score <= 3) return 'stiff';
  if (score <= 6) return 'sore';
  return 'hurt';
}

/** Before noon the question is about the first steps, so "it hurt"; after it, "it hurts". */
export function answerLabel(answer: Answer, morning: boolean): Key {
  if (answer === 'hurt') return morning ? 'home.today.check.hurtMorning' : 'home.today.check.hurtDay';
  return `home.today.check.${answer}`;
}
