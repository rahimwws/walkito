import * as Haptics from 'expo-haptics';
import { useEffect, useRef, useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import Animated, { FadeIn, LinearTransition, ReduceMotion } from 'react-native-reanimated';

import { PRIMARY, fonts, meterColors, palette } from '@/shared/config';
import { useLanguage, useT } from '@/shared/lib/i18n';
import { useColorScheme } from '@/shared/lib/theme';
import { TimePicker } from '@/shared/ui/time-picker';

import { habitReaction, type Habit } from '../model/journey';
import type { ResolvedOption } from '../model/steps';
import { ChoiceStep } from './choice-step';
import { CoachBubble } from './coach-bubble';

export type HabitStepProps = {
  options: readonly ResolvedOption[];
  habit: Habit | null;
  onHabit: (next: Habit) => void;
  /** The reminder, minutes past midnight, set from the habit until changed by hand. */
  minutes: number;
  onMinutes: (next: number) => void;
  /** The time wheel opened or closed: the coach stops breathing under it. */
  onPickingChange?: (open: boolean) => void;
};

/**
 * When the session happens, tied to something they already do.
 *
 * An implementation intention rather than a time on a wheel: "with my morning
 * coffee" is a plan, "8:00" is a number. The reminder follows the moment they
 * pick, and "Change" opens the wheel for anybody whose coffee is at nine.
 */
export function HabitStep({ options, habit, onHabit, minutes, onMinutes, onPickingChange }: HabitStepProps) {
  const scheme = useColorScheme();
  const colors = palette[scheme];
  const meter = meterColors[scheme];
  const t = useT();
  const language = useLanguage();
  const [picking, setPicking] = useState(false);

  // Told on every change, and closed on the way out: leaving with the wheel
  // open must not leave the coach paused on the next screen.
  const pickingChanged = useRef(onPickingChange);
  pickingChanged.current = onPickingChange;
  useEffect(() => {
    pickingChanged.current?.(picking);
  }, [picking]);
  useEffect(() => () => pickingChanged.current?.(false), []);

  const at = new Date();
  at.setHours(Math.floor(minutes / 60), minutes % 60, 0, 0);
  const time = new Intl.DateTimeFormat(language, { hour: 'numeric', minute: '2-digit' }).format(at);
  const reaction = habitReaction(habit);

  return (
    <ScrollView style={styles.fill} contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
      {/* Said back above the answers, where it is read, by the coach in the
          corner above. Counted by the page, which decides what may be. */}
      {reaction != null && (
        <CoachBubble id={reaction.key} text={t(reaction.text)} tail="top-right" style={styles.reaction} />
      )}
      <Animated.View layout={LinearTransition.duration(260).reduceMotion(ReduceMotion.System)}>
      <ChoiceStep
        options={options}
        selected={habit != null ? [habit] : []}
        multi={false}
        onChange={(next) => onHabit(next[0] as Habit)}
      />

      {habit != null && (
        <Animated.View entering={FadeIn.duration(260).reduceMotion(ReduceMotion.System)} style={styles.reminder}>
          <Text style={[styles.reminderText, { color: meter.label }]}>{t('onboarding.habit.reminder', { time })}</Text>
          <Pressable
            accessibilityRole="button"
            hitSlop={10}
            onPress={() => {
              Haptics.selectionAsync();
              setPicking((open) => !open);
            }}>
            <Text style={[styles.change, { color: PRIMARY }]}>{t('onboarding.habit.change')}</Text>
          </Pressable>
        </Animated.View>
      )}

      {picking && (
        <View style={[styles.picker, { backgroundColor: colors.card }]}>
          <TimePicker minutes={minutes} onChange={onMinutes} variant="wheel" />
        </View>
      )}
      </Animated.View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  fill: { flex: 1, marginTop: 26 },
  content: { paddingBottom: 8 },
  /** Room above for the tail, which the scroll view would otherwise clip. */
  reaction: { marginTop: 8, marginBottom: 16 },
  reminder: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 10, marginTop: 14 },
  reminderText: fonts.semibold(15),
  change: fonts.bold(15),
  picker: { marginTop: 10, borderRadius: 20, borderCurve: 'continuous', alignItems: 'center', paddingVertical: 4 },
});
