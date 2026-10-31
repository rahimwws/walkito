import type { TodayReason } from '@/entities/program';
import type { Language, Translate } from '@/shared/lib/i18n';

import { grouped } from '../model/brief';
import type { DayStory } from '../model/day-story';

/** A figure to one decimal place where it has one, in the language's own
 * decimal mark: "9", "6,5", "12.4". */
export function decimal(value: number, language: Language): string {
  const rounded = Math.round(value * 10) / 10;
  const text = Number.isInteger(rounded) ? String(rounded) : rounded.toFixed(1);
  return language === 'en' ? text : text.replace('.', ',');
}

/**
 * What Walkito says about yesterday, worded, and then what the plan did about
 * it, read from the plan's own decision rather than assumed: a big day before
 * a day that is light anyway changes nothing, and he must not say it does.
 */
export function storyLine(t: Translate, story: DayStory, language: Language, reason: TodayReason = null): string {
  const fact = storyFact(t, story, language);
  const then =
    reason === 'heavy-day' || reason === 'on-feet' || reason === 'big-workout'
      ? t('home.story.thenRecovery')
      : reason === 'short-sleep' || reason === 'resting-hr'
        ? t('home.story.thenEasier')
        : null;
  return then == null ? fact : `${fact} ${then}`;
}

function storyFact(t: Translate, story: DayStory, language: Language): string {
  switch (story.id) {
    case 'big-run':
      return t('home.story.bigRun', { km: decimal(story.km, language) });
    case 'big-sport':
      return t('home.story.bigSport', { minutes: Math.round(story.minutes) });
    case 'on-feet':
      return t('home.story.onFeet', { hours: decimal(story.hours, language), limit: decimal(story.limit, language) });
    case 'big-day':
      return t('home.story.bigDay', {
        steps: grouped(story.steps, language),
        usual: grouped(Math.round(story.usual / 100) * 100, language),
      });
    case 'sleep-week':
      return t('home.story.sleepWeek', { hours: decimal(story.hours, language) });
    case 'resting-hr':
      return t('home.story.restingHr', { bpm: Math.round(story.bpm) });
    case 'stride-shorter':
      return t('home.story.strideShorter');
    case 'stride-back':
      return t('home.story.strideBack');
    case 'yesterday':
      return story.hours != null && story.hours > 0
        ? t('home.story.yesterday', { steps: grouped(story.steps, language), hours: decimal(story.hours, language) })
        : t('home.story.yesterdayNoHours', { steps: grouped(story.steps, language) });
  }
}
