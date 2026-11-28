import type { Translate } from '@/shared/lib/i18n';

import type { NextDay } from './next-day';

/**
 * The title of the offer over Home after Day 1, under "Day 1 done": what
 * comes next, and when. Tomorrow at her reminder time when the next day is
 * tomorrow and the time is known; otherwise the day alone.
 */
export function afterDayOneTitle(next: NextDay | null, time: string | null, t: Translate): string {
  const day = next?.day ?? 2;
  if (next?.ahead === 1 && time != null) return t('offer.afterDay1.titleTomorrow', { day, time });
  return t('offer.afterDay1.title', { day });
}
