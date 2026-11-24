import Clock01Icon from '@hugeicons/core-free-icons/Clock01Icon';
import PencilEdit02Icon from '@hugeicons/core-free-icons/PencilEdit02Icon';
import PlayIcon from '@hugeicons/core-free-icons/PlayIcon';
import SquareLock02Icon from '@hugeicons/core-free-icons/SquareLock02Icon';
import { HugeiconsIcon } from '@hugeicons/react-native';
import * as Haptics from 'expo-haptics';
import { useRouter } from 'expo-router';
import { Pressable, StyleSheet, Text, View, useWindowDimensions } from 'react-native';

import { wakeLabel, wakeMinutes } from '@/entities/notifications';
import type { PlanKind } from '@/entities/profile';
import { protocolById } from '@/entities/protocols';
import { colors, fonts, target } from '@/shared/config';
import { useLanguage, useT } from '@/shared/lib/i18n';
import { FactChip } from '@/shared/ui/fact-chip';
import { FluentIcon, type FluentName } from '@/shared/ui/fluent-icon';

import { useOpenRoutine, useRoutineLocked } from '../model/use-open-routine';
import { RoundAction } from './round-action';
import { TodayCard } from './today-card';

const EDIT = 40;

/**
 * The plan's own short routine as a BitePal card (#99, #28): its name beside
 * where it is done, and one big figure. Before the first step for a desk plan
 * is the wake time, with a pencil beside it to change it and the routine's
 * minutes as a chip; the at-work reset for the feet plan and the after-run
 * routine for a runner are their minutes.
 */
export function RoutineCard({ kind, ranToday }: { kind: PlanKind; ranToday: boolean }) {
  const t = useT();
  const language = useLanguage();
  const router = useRouter();
  const openRoutine = useOpenRoutine();
  const routineLocked = useRoutineLocked();
  const large = useWindowDimensions().fontScale >= 1.35;

  const id = kind === 'runner' ? 'post_run' : kind === 'feet' ? 'at_work' : 'first_steps';
  const protocol = protocolById(id);
  const minutes = t('quick.minutes', { count: protocol.minutes });
  const icon: FluentName = kind === 'runner' ? 'shoe' : kind === 'feet' ? 'briefcase' : 'bed';
  const label =
    kind === 'runner' && ranToday
      ? t('home.today.run.doneTitle')
      : kind === 'desk'
        ? t('home.today.firstStep.title')
        : t(protocol.titleKey);
  const locked = routineLocked(id);

  return (
    <TodayCard style={styles.card}>
      <View style={[styles.head, large && styles.headLarge]}>
        <View style={styles.headText}>
          <View style={styles.labelRow}>
            <FluentIcon name={icon} size={24} />
            <Text style={styles.label}>{label}</Text>
          </View>
          <View style={styles.bigRow}>
            <Text style={styles.big} maxFontSizeMultiplier={1.7}>
              {kind === 'desk' ? wakeLabel(wakeMinutes(), language) : minutes}
            </Text>
            {kind === 'desk' && (
              <Pressable
                accessibilityRole="button"
                accessibilityLabel={t('home.today.firstStep.change')}
                hitSlop={(target.min - EDIT) / 2}
                onPress={() => {
                  void Haptics.selectionAsync();
                  router.push('/first-step-time');
                }}
                style={({ pressed }) => [styles.edit, pressed && styles.pressed]}>
                <HugeiconsIcon icon={PencilEdit02Icon} size={20} color={colors.text} strokeWidth={2} />
              </Pressable>
            )}
          </View>
        </View>
        <RoundAction
          icon={locked ? SquareLock02Icon : PlayIcon}
          label={locked ? `${t(protocol.titleKey)}, ${t('quick.locked')}` : t(protocol.titleKey)}
          onPress={() => openRoutine(id)}
        />
      </View>
      {kind === 'desk' && <FactChip icon={Clock01Icon} label={minutes} />}
    </TodayCard>
  );
}

const styles = StyleSheet.create({
  card: { gap: 10 },
  head: { flexDirection: 'row', alignItems: 'flex-start', gap: 12 },
  headLarge: { flexDirection: 'column-reverse' },
  headText: { flexShrink: 1, flexGrow: 1, gap: 2 },
  labelRow: { flexDirection: 'row', alignItems: 'center', gap: 8 },
  label: { ...fonts.medium(17), color: colors.text3, flexShrink: 1 },
  bigRow: { flexDirection: 'row', alignItems: 'center', flexWrap: 'wrap', gap: 10 },
  big: { ...fonts.heavy(44, -1), color: colors.text, fontVariant: ['tabular-nums'] },
  edit: {
    width: EDIT,
    height: EDIT,
    borderRadius: EDIT / 2,
    backgroundColor: colors.surface2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  pressed: { opacity: 0.6 },
});
