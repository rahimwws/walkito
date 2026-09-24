import MinusSignIcon from '@hugeicons/core-free-icons/MinusSignIcon';
import PlusSignIcon from '@hugeicons/core-free-icons/PlusSignIcon';
import { HugeiconsIcon } from '@hugeicons/react-native';
import * as Haptics from 'expo-haptics';
import { useMemo, useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { useIntake } from '@/entities/profile';
import {
  recordRetest,
  retestResults,
  writeLog,
  type Retest,
} from '@/entities/program';
import { fonts, meterColors, palette } from '@/shared/config';
import { useT, type Key } from '@/shared/lib/i18n';
import { useColorScheme } from '@/shared/lib/theme';
import { PrimaryButton } from '@/shared/ui/primary-button';

import { RetestResult } from './retest-result';

export type RetestEntrySheetProps = {
  visible: boolean;
  /** The checkpoint day being measured. */
  dayNumber: number;
  onDone: () => void;
};

type Field = 'calf' | 'otherCalf' | 'arch' | 'balance';

/** Where a first-ever retest starts the counters: a plausible middle, so most
 * people move a few taps rather than thirty. */
const FIRST_GUESS: Record<Field, number> = { calf: 10, otherCalf: 12, arch: 20, balance: 20 };
/** Reps move one at a time; held seconds in fives, which is as fine as anyone
 * times a hold by eye. */
const STEP: Record<Field, number> = { calf: 1, otherCalf: 1, arch: 5, balance: 5 };

/**
 * What they came for, said back to them on the result screen.
 *
 * The one moment the numbers mean most, and the moment to connect them to the
 * reason the person started — in their words from onboarding, not ours. A
 * reminder of the goal, never a verdict on whether they are on track for it.
 */
const GOAL_KEY: Readonly<Record<string, Key>> = {
  painfree: 'widgets.retestGoal.painfree',
  race: 'widgets.retestGoal.race',
  consistent: 'widgets.retestGoal.consistent',
  stronger: 'widgets.retestGoal.stronger',
  injuryfree: 'widgets.retestGoal.injuryfree',
};


/**
 * The numbers from a retest, written down.
 *
 * The player timed the three tests and then threw the result away:
 * `recordRetest` had no caller, so levels never filled in, the score's level
 * share stayed empty, and the expiry screen had no "before and after" to show.
 * This is the one place those numbers enter the app.
 *
 * Counters rather than a keyboard, for the same reason the pain sheet uses big
 * numbers: the person entering these has just done calf raises to failure.
 *
 * An overlay rather than a `Modal` — the player already runs inside a
 * presented sheet. See `CelebrationSheet`.
 */
export function RetestEntrySheet({ visible, dayNumber, onDone }: RetestEntrySheetProps) {
  const scheme = useColorScheme();
  const colors = palette[scheme];
  const meter = meterColors[scheme];
  const insets = useSafeAreaInsets();
  const t = useT();
  const intake = useIntake();

  /** Last time's numbers, so the counters open near where this person is. */
  const start = useMemo<Record<Field, number>>(() => {
    const last = retestResults().filter((row) => row.dayNumber < dayNumber).pop();
    if (last == null) return FIRST_GUESS;
    return {
      calf: last.calf.left,
      otherCalf: last.calf.right,
      arch: last.arch.left,
      balance: last.balance.left,
    };
  }, [dayNumber]);

  const [values, setValues] = useState<Record<Field, number>>(start);
  const [result, setResult] = useState<Retest | null>(null);

  if (!visible) return null;

  // The sore side is the one being rehabilitated — the first column of every
  // stored result. With both sides sore, or no answer, it is simply left/right.
  const sore = intake?.side === 'right' ? 'right' : 'left';
  const soreLabel =
    intake?.side === 'both' || intake?.side == null
      ? t(sore === 'left' ? 'widgets.retestLeft' : 'widgets.retestRight')
      : t(sore === 'left' ? 'widgets.retestLeftSore' : 'widgets.retestRightSore');
  const otherLabel = t(sore === 'left' ? 'widgets.retestRight' : 'widgets.retestLeft');

  const rows: { field: Field; title: string; caption: string }[] = [
    { field: 'calf', title: t('widgets.retestCalfRaises'), caption: soreLabel },
    { field: 'otherCalf', title: t('widgets.retestCalfRaises'), caption: otherLabel },
    { field: 'arch', title: t('widgets.retestArchHold'), caption: t('widgets.retestSeconds') },
    { field: 'balance', title: t('widgets.retestBalance'), caption: t('widgets.retestSeconds') },
  ];

  const bump = (field: Field, direction: 1 | -1) => {
    Haptics.selectionAsync();
    setValues((current) => ({
      ...current,
      [field]: Math.max(0, Math.min(300, current[field] + direction * STEP[field])),
    }));
  };

  const save = () => {
    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
    const retest = recordRetest(dayNumber, {
      calf: values.calf,
      otherCalf: values.otherCalf,
      arch: values.arch,
      balance: values.balance,
    });
    // Taking the tests is the day's work. Counted like a session so the streak
    // and the path agree that the user turned up, and stamped so the rest
    // before the next loaded session runs from now — calf raises to failure
    // are the heaviest thing in the plan.
    writeLog(dayNumber, { sessionCompleted: true, completedAt: Date.now() });
    setResult(retest);
  };

  return (
    <View style={[StyleSheet.absoluteFill, { backgroundColor: colors.background }]}>
      <ScrollView
        contentContainerStyle={[
          styles.content,
          { paddingTop: insets.top + 24, paddingBottom: insets.bottom + 120 },
        ]}>
        <Text style={[styles.title, { color: colors.foreground }]}>
          {result == null ? t('widgets.retestEntryTitle') : t('widgets.retestResultTitle')}
        </Text>
        <Text style={[styles.blurb, { color: meter.caption }]}>
          {result == null ? t('widgets.retestEntryBlurb') : t('widgets.retestResultBlurb')}
        </Text>

        {result == null
          ? rows.map((row) => (
              <View key={row.field} style={[styles.row, { backgroundColor: colors.card }]}>
                <View style={styles.rowCopy}>
                  <Text style={[styles.rowTitle, { color: colors.foreground }]}>{row.title}</Text>
                  <Text style={[styles.rowCaption, { color: meter.caption }]}>{row.caption}</Text>
                </View>
                <Stepper
                  value={values[row.field]}
                  onMinus={() => bump(row.field, -1)}
                  onPlus={() => bump(row.field, 1)}
                  minusLabel={t('widgets.retestLess')}
                  plusLabel={t('widgets.retestMore')}
                  ink={colors.foreground}
                  track={meter.track}
                />
              </View>
            ))
          : (
              <RetestResult
                retest={result}
                goalLine={
                  intake?.goal != null && GOAL_KEY[intake.goal] != null
                    ? t(GOAL_KEY[intake.goal])
                    : null
                }
              />
            )}
      </ScrollView>

      <View style={[styles.dock, { paddingBottom: Math.max(insets.bottom, 16) }]}>
        <PrimaryButton
          label={result == null ? t('widgets.retestSave') : t('widgets.retestDone')}
          onPress={result == null ? save : onDone}
        />
      </View>
    </View>
  );
}

function Stepper({
  value,
  onMinus,
  onPlus,
  minusLabel,
  plusLabel,
  ink,
  track,
}: {
  value: number;
  onMinus: () => void;
  onPlus: () => void;
  minusLabel: string;
  plusLabel: string;
  ink: string;
  track: string;
}) {
  return (
    <View style={styles.stepper}>
      <Pressable
        accessibilityRole="button"
        accessibilityLabel={minusLabel}
        onPress={onMinus}
        style={({ pressed }) => [styles.stepButton, { backgroundColor: track }, pressed && { opacity: 0.6 }]}>
        <HugeiconsIcon icon={MinusSignIcon} size={20} color={ink} strokeWidth={2} />
      </Pressable>
      <Text style={[styles.value, { color: ink }]}>{value}</Text>
      <Pressable
        accessibilityRole="button"
        accessibilityLabel={plusLabel}
        onPress={onPlus}
        style={({ pressed }) => [styles.stepButton, { backgroundColor: track }, pressed && { opacity: 0.6 }]}>
        <HugeiconsIcon icon={PlusSignIcon} size={20} color={ink} strokeWidth={2} />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    paddingHorizontal: 20,
    gap: 12,
  },
  title: {
    fontSize: 28,
    fontFamily: fonts.bold,
  },
  blurb: {
    fontSize: 15,
    fontFamily: fonts.regular,
    marginBottom: 8,
  },

  row: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 20,
    padding: 16,
    gap: 12,
  },
  rowCopy: {
    flex: 1,
    gap: 2,
  },
  rowTitle: {
    fontSize: 16,
    fontFamily: fonts.semibold,
  },
  rowCaption: {
    fontSize: 14,
    fontFamily: fonts.regular,
  },
  stepper: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  stepButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    alignItems: 'center',
    justifyContent: 'center',
  },
  value: {
    minWidth: 40,
    textAlign: 'center',
    fontSize: 22,
    fontFamily: fonts.bold,
  },

  dock: {
    position: 'absolute',
    left: 20,
    right: 20,
    bottom: 0,
  },
});
