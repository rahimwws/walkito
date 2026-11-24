import PlayIcon from '@hugeicons/core-free-icons/PlayIcon';
import SquareLock02Icon from '@hugeicons/core-free-icons/SquareLock02Icon';
import { useRouter } from 'expo-router';
import { Pressable, StyleSheet, Text, View, useWindowDimensions } from 'react-native';

import { wakeLabel, wakeMinutes } from '@/entities/notifications';
import type { PlanKind } from '@/entities/profile';
import { protocolById } from '@/entities/protocols';
import { colors, fonts, target } from '@/shared/config';
import { useLanguage, useT } from '@/shared/lib/i18n';
import { FluentIcon, type FluentName } from '@/shared/ui/fluent-icon';

import { useOpenRoutine, useRoutineLocked } from '../model/use-open-routine';
import { RoundAction } from './round-action';
import { TodayCard } from './today-card';

/**
 * The plan's own short routine as a BitePal card (#99, #28): before the first
 * step for a desk plan (the time as the big number, "Change time" under it),
 * the at-work reset for the feet plan, the after-run routine for a runner.
 */
export function RoutineCard({ kind, ranToday }: { kind: PlanKind; ranToday: boolean }) {
  const t = useT();
  const language = useLanguage();
  const router = useRouter();
  const openRoutine = useOpenRoutine();
  const routineLocked = useRoutineLocked();
  const large = useWindowDimensions().fontScale >= 1.35;

  const card =
    kind === 'runner'
      ? {
          id: 'post_run' as const,
          icon: 'shoe' as FluentName,
          label: ranToday ? t('home.today.run.doneTitle') : t('home.today.run.title'),
          big: t('quick.minutes', { count: protocolById('post_run').minutes }),
          meta: t('home.today.run.body', { minutes: t('quick.minutes', { count: protocolById('post_run').minutes }) }),
        }
      : kind === 'feet'
        ? {
            id: 'at_work' as const,
            icon: 'briefcase' as FluentName,
            label: t('home.today.work.title', { count: protocolById('at_work').minutes }),
            big: t('quick.minutes', { count: protocolById('at_work').minutes }),
            meta: t('home.today.work.body'),
          }
        : {
            id: 'first_steps' as const,
            icon: 'bed' as FluentName,
            label: t('home.today.firstStep.title'),
            big: wakeLabel(wakeMinutes(), language),
            meta: t('home.today.firstStep.inBed', { minutes: t('quick.minutes', { count: protocolById('first_steps').minutes }) }),
          };

  return (
    <TodayCard style={styles.card}>
      <View style={[styles.head, large && styles.headLarge]}>
        <View style={styles.headText}>
          <View style={styles.labelRow}>
            <FluentIcon name={card.icon} size={24} />
            <Text style={styles.label}>{card.label}</Text>
          </View>
          <Text style={styles.big} maxFontSizeMultiplier={1.7}>
            {card.big}
          </Text>
        </View>
        <RoundAction
          icon={routineLocked(card.id) ? SquareLock02Icon : PlayIcon}
          label={
            routineLocked(card.id)
              ? `${t(protocolById(card.id).titleKey)}, ${t('quick.locked')}`
              : t(protocolById(card.id).titleKey)
          }
          onPress={() => openRoutine(card.id)}
        />
      </View>
      <Text style={styles.meta}>{card.meta}</Text>
      {kind === 'desk' && (
        <Pressable
          accessibilityRole="button"
          onPress={() => router.push('/first-step-time')}
          style={({ pressed }) => [styles.link, pressed && styles.pressed]}>
          <Text style={styles.linkText}>{t('home.today.firstStep.change')}</Text>
        </Pressable>
      )}
    </TodayCard>
  );
}

const styles = StyleSheet.create({
  card: { gap: 4 },
  head: { flexDirection: 'row', alignItems: 'flex-start', gap: 12 },
  headLarge: { flexDirection: 'column-reverse' },
  headText: { flexShrink: 1, flexGrow: 1, gap: 2 },
  labelRow: { flexDirection: 'row', alignItems: 'center', gap: 8 },
  label: { ...fonts.medium(17), color: colors.text3, flexShrink: 1 },
  big: { ...fonts.heavy(44, -1), color: colors.text, fontVariant: ['tabular-nums'] },
  meta: { ...fonts.medium(17), color: colors.text2 },
  link: { alignSelf: 'flex-start', minHeight: target.min, justifyContent: 'center' },
  linkText: { ...fonts.semibold(17), color: colors.accent },
  pressed: { opacity: 0.6 },
});
