import { StyleSheet, Text, View } from 'react-native';
import Animated, { FadeInDown, ReduceMotion } from 'react-native-reanimated';

import { accents, fonts, meterColors, palette } from '@/shared/config';
import { useColorScheme } from '@/shared/lib/theme';

import type { PlanSummary } from '../model/plan-summary';

/** The rows arrive one after another, so the plan reads as being laid out
 * rather than as having been there all along. */
const STAGGER_MS = 70;

export type PlanStepProps = {
  summary: PlanSummary;
};

/**
 * The plan, decided.
 *
 * No choice, and that is the point. The flow has just spent fifteen screens
 * learning enough to make a recommendation; asking "which of these two?" at the
 * end hands that work straight back to someone with no way to answer it, and
 * invites the suspicion that the question was really about price.
 *
 * Everything on the screen is derived. The name and the length come from the
 * answer about how much they run, the three rows from the programme's own
 * blocks, and the sentence from what they said about their pain and their
 * week — which is what earns the line under the title.
 */
export function PlanStep({ summary }: PlanStepProps) {
  const scheme = useColorScheme();
  const colors = palette[scheme];
  const meter = meterColors[scheme];
  const accent = accents[scheme].violet;

  return (
    <View style={styles.wrap}>
      <Animated.Text
        entering={FadeInDown.duration(380).reduceMotion(ReduceMotion.System)}
        style={[styles.wordmark, { color: accent.fill }]}>
        {summary.wordmark}
      </Animated.Text>

      <Animated.Text
        entering={FadeInDown.delay(STAGGER_MS)
          .duration(380)
          .reduceMotion(ReduceMotion.System)}
        style={[styles.meta, { color: colors.foreground }]}>
        {summary.weeks} weeks · {summary.strengthDays} sessions a week
      </Animated.Text>

      {summary.reflection != null && (
        <Animated.Text
          entering={FadeInDown.delay(STAGGER_MS * 2)
            .duration(380)
            .reduceMotion(ReduceMotion.System)}
          style={[styles.reflection, { color: meter.caption }]}>
          {summary.reflection}
        </Animated.Text>
      )}

      <View style={styles.phases}>
        {summary.phases.map((phase, i) => (
          <Animated.View
            key={phase.weeks}
            entering={FadeInDown.delay(STAGGER_MS * (3 + i))
              .duration(380)
              .reduceMotion(ReduceMotion.System)}
            style={styles.phase}>
            {/* A fixed column for the range, so the three labels start on one
                line and the block reads as a table rather than as prose that
                happens to be broken up. */}
            <Text style={[styles.weeks, { color: colors.foreground }]}>{phase.weeks}</Text>
            <Text style={[styles.label, { color: meter.caption }]}>{phase.label}</Text>
          </Animated.View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
    justifyContent: 'center',
    gap: 8,
  },
  wordmark: {
    fontSize: 15,
    fontFamily: fonts.heavy,
    letterSpacing: 2.2,
  },
  meta: {
    fontSize: 26,
    fontFamily: fonts.heavy,
    letterSpacing: -0.7,
  },
  reflection: {
    fontSize: 16,
    lineHeight: 23,
    fontFamily: fonts.regular,
    marginTop: 10,
  },
  phases: {
    marginTop: 26,
    gap: 12,
  },
  phase: {
    flexDirection: 'row',
    alignItems: 'baseline',
    gap: 14,
  },
  weeks: {
    width: 96,
    fontSize: 15,
    fontFamily: fonts.bold,
    letterSpacing: -0.2,
  },
  label: {
    flex: 1,
    fontSize: 15,
    fontFamily: fonts.regular,
  },
});
