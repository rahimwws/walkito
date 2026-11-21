import ChartLineData02Icon from '@hugeicons/core-free-icons/ChartLineData02Icon';
import { StyleSheet, Text, View } from 'react-native';

import { colors, fonts } from '@/shared/config';
import { useT } from '@/shared/lib/i18n';
import { Button } from '@/shared/ui/button';
import { Card } from '@/shared/ui/card';
import { FluentIcon } from '@/shared/ui/fluent-icon';

export type TodayEarned = {
  /** Today's minutes, at the plan's dose: see `earnedToday`. */
  minutes: number;
  /** Moves done today, or tests on a test day. */
  count: number;
  /** Today was a test day: the work is counted in tests. */
  test: boolean;
  /** The streak as it stands, today included. Not shown below one. */
  streak: number;
};

export type TodayDoneCardProps = {
  /** Today's title as it read before the session: "Test day", "Mobility · mornings". */
  title: string;
  earned: TodayEarned;
  /** A finished test day: its results again, read-only. */
  onResults?: () => void;
};

/**
 * A finished day, leading the plan: "Today" over the day's title with a tick,
 * "See results" on a test day, and what the day earned as plain figures: the
 * minutes, the moves or tests, the run of days.
 *
 * Showing up and effort only: never a pain figure, never a test result (the
 * tests figure counts tests taken, not what they measured).
 */
export function TodayDoneCard({ title, earned, onResults }: TodayDoneCardProps) {
  const t = useT();
  const { minutes, count, test, streak } = earned;

  return (
    <Card style={styles.content}>
      <View style={styles.heading}>
        <Text style={styles.eyebrow}>{t('pages.plan.todayEyebrow')}</Text>
        {/* The tick is drawn; a screen reader hears it as "Done for today". */}
        <View
          style={styles.titleRow}
          accessible
          accessibilityRole="header"
          accessibilityLabel={title}
          accessibilityValue={{ text: t('pages.plan.doneToday') }}>
          <Text style={styles.title}>{title}</Text>
          <FluentIcon name="check" size={20} />
        </View>
      </View>

      <View style={styles.stats}>
        <Stat
          value={minutes}
          label={t('pages.plan.earnedMinutes')}
          a11y={t('pages.plan.earnedMinutesA11y', { count: minutes })}
        />
        <Stat
          value={count}
          label={test ? t('pages.plan.earnedTests') : t('pages.plan.earnedMoves')}
          a11y={test ? t('pages.plan.earnedTestsA11y', { count }) : t('pages.plan.earnedMovesA11y', { count })}
        />
        {streak > 0 && (
          <Stat value={streak} label={t('pages.plan.earnedStreak')} a11y={t('streakSheet.inARow', { count: streak })} />
        )}
      </View>

      {onResults != null && (
        <Button
          label={t('pages.plan.seeResults')}
          variant="secondary"
          size="sm"
          icon={ChartLineData02Icon}
          iconPosition="leading"
          align="start"
          onPress={onResults}
        />
      )}
    </Card>
  );
}

function Stat({ value, label, a11y }: { value: number; label: string; a11y: string }) {
  return (
    <View style={styles.stat} accessible accessibilityLabel={a11y}>
      <Text style={styles.value}>{String(value)}</Text>
      <Text style={styles.label} numberOfLines={2}>
        {label}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    gap: 16,
  },
  heading: {
    gap: 2,
  },
  eyebrow: { ...fonts.semibold(15), color: colors.text2 },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  title: {
    flexShrink: 1,
    ...fonts.bold(22, -0.3),
    lineHeight: 27,
    color: colors.text,
  },
  stats: {
    flexDirection: 'row',
    gap: 12,
  },
  stat: {
    flex: 1,
    gap: 2,
  },
  value: { ...fonts.bold(28, -0.4), color: colors.text },
  label: { ...fonts.regular(15), color: colors.text2 },
});
