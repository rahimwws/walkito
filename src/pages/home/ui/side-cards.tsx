import { useIsFocused, useRouter } from 'expo-router';

import { wakeLabel, wakeMinutes } from '@/entities/notifications';
import type { PlanKind } from '@/entities/profile';
import { protocolById } from '@/entities/protocols';
import { useLanguage, useT } from '@/shared/lib/i18n';

import { useOpenRoutine } from '../model/use-open-routine';
import { SideCard } from './side-card';

/** "Before your first step": tomorrow at her wake time, two minutes in bed,
 * with the time changeable in a sheet. */
export function FirstStepCard() {
  const t = useT();
  const language = useLanguage();
  const router = useRouter();
  const open = useOpenRoutine();
  // Read again when the time sheet closes and Home is focused once more.
  useIsFocused();
  const minutes = protocolById('first_steps').minutes;
  return (
    <SideCard
      title={t('home.today.firstStep.title')}
      body={t('home.today.firstStep.when', {
        time: wakeLabel(wakeMinutes(), language),
        minutes: t('quick.minutes', { count: minutes }),
      })}
      action={{ label: t('quick.start'), onPress: () => open('first_steps') }}
      secondary={{ label: t('home.today.firstStep.change'), onPress: () => router.push('/first-step-time') }}
    />
  );
}

/**
 * The card that belongs to the plan's kind (spec §8, §9): a runner's run or
 * rest day, the two-minute reset at work for somebody on their feet. A desk
 * plan has none.
 */
export function PlanKindCard({ kind, ranToday, restDay }: { kind: PlanKind; ranToday: boolean; restDay: boolean }) {
  const t = useT();
  const open = useOpenRoutine();
  if (kind === 'runner') {
    if (restDay && !ranToday) {
      return <SideCard title={t('home.today.rest.title')} body={t('home.today.rest.body')} />;
    }
    const minutes = t('quick.minutes', { count: protocolById('post_run').minutes });
    return (
      <SideCard
        title={ranToday ? t('home.today.run.doneTitle') : t('home.today.run.title')}
        body={ranToday ? t('home.today.run.doneBody', { minutes }) : t('home.today.run.body', { minutes })}
        action={{ label: t('home.today.run.cta'), onPress: () => open('post_run') }}
      />
    );
  }
  if (kind === 'feet') {
    return (
      <SideCard
        title={t('home.today.work.title', { count: protocolById('at_work').minutes })}
        body={t('home.today.work.body')}
        action={{ label: t('home.today.work.cta'), onPress: () => open('at_work') }}
      />
    );
  }
  return null;
}
