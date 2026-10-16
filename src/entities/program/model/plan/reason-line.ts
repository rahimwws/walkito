import type { Translate } from '@/shared/lib/i18n';

import type { TodayReason } from './today';

/**
 * Why today is not the day as planned, in one line, or null when it is.
 *
 * Said rather than done silently, on Home and on the plan, from one place so
 * the two cannot word the same change two ways. A flare and a pain spike say
 * their own thing where they happen (the check-in), so they have no line here.
 */
export function planReasonLine(t: Translate, reason: TodayReason): string | null {
  switch (reason) {
    case 'heavy-day':
      return t('pages.plan.reasonHeavyDay');
    case 'on-feet':
      return t('pages.plan.reasonOnFeet');
    case 'big-workout':
      return t('pages.plan.reasonBigWorkout');
    case 'short-sleep':
      return t('pages.plan.reasonShortSleep');
    case 'resting-hr':
      return t('pages.plan.reasonRestingHr');
    default:
      return null;
  }
}
