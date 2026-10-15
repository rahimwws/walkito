import { StyleSheet, Text, View } from 'react-native';

import type { WeeklyGoal } from '@/entities/program';
import { fonts, meterColors, palette } from '@/shared/config';
import { useT } from '@/shared/lib/i18n';
import { useColorScheme } from '@/shared/lib/theme';
import { FluentIcon } from '@/shared/ui/fluent-icon';

/**
 * Under the week on Home: this week's plan sessions against the plan's days,
 * and, once there is one, the run of weeks fully met.
 *
 * A count, never a verdict. A week short of its goal shows the count and
 * nothing more: no colour, no "missed", no figure for what is left. The target
 * becomes a tick once the week is met, which says it is done, not that the
 * other weeks were worse. Nothing moves here, so nothing runs while Home is
 * hidden.
 */
export function WeekGoalLine({ goal }: { goal: WeeklyGoal }) {
  const t = useT();
  const scheme = useColorScheme();
  const colors = palette[scheme];
  const ink = meterColors[scheme];
  // A week that asked for nothing (the plan began on its last rest days) has
  // nothing to count.
  if (goal.goal <= 0) return null;
  return (
    <View style={styles.row}>
      <View style={[styles.pill, { backgroundColor: colors.card }]} accessible accessibilityRole="text">
        <FluentIcon name={goal.met ? 'check' : 'target'} size={18} />
        <Text style={[styles.label, { color: ink.ink }]} numberOfLines={1} maxFontSizeMultiplier={1.3}>
          {t('weekGoal.progress', { done: goal.done, count: goal.goal })}
        </Text>
      </View>
      {goal.weeksInARow >= 1 && (
        <View style={[styles.pill, { backgroundColor: colors.card }]} accessible accessibilityRole="text">
          <FluentIcon name="calendar" size={18} />
          <Text style={[styles.label, { color: ink.ink }]} numberOfLines={1} maxFontSizeMultiplier={1.3}>
            {t('weekGoal.inARow', { count: goal.weeksInARow })}
          </Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 8,
  },
  pill: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    paddingHorizontal: 12,
    height: 34,
    borderRadius: 17,
    borderCurve: 'continuous',
    flexShrink: 1,
  },
  label: { ...fonts.semibold(14, -0.1), flexShrink: 1 },
});
