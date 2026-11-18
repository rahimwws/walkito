import type { ReactNode } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { GoalChips } from '@/entities/profile';
import { fonts } from '@/shared/config';
import { useT } from '@/shared/lib/i18n';
import { FluentIcon } from '@/shared/ui/fluent-icon';

import { usePlansTheme } from './plans-theme';

export type PlansStory = {
  /** Her plan's name: "Desk Feet Reset", "Runner's Feet", "On-Your-Feet Reset". */
  planName: string;
  goals: readonly string[];
  /** "Your first-step routine starts tomorrow at 7:00", or "… is ready"
   * that morning; null when there is none to speak of. */
  firstStep: string | null;
};

/**
 * The top of the plans after the onboarding's story: her plan's name as the
 * title, her goals as chips, her first-step routine, and how the plan runs
 * (today, then day 14, when her first move comes back to compare). No result
 * promised and no date for one: day 14 is a move, not an outcome.
 */
export function StoryHead({ story, headline }: { story: PlansStory; headline: ReactNode }) {
  const t = useT();
  const { PLUS, SHEET } = usePlansTheme();
  const rows = [
    { title: t('story.timeline.today'), text: t('story.timeline.todayText') },
    { title: null, text: t('story.timeline.day14') },
  ];
  return (
    <View style={styles.wrap}>
      <Text accessibilityRole="header" style={[styles.title, { color: SHEET.ink }]} numberOfLines={2} adjustsFontSizeToFit minimumFontScale={0.75} maxFontSizeMultiplier={1.25}>
        {story.planName}
      </Text>
      <GoalChips goals={story.goals} ink={SHEET.ink} surface={SHEET.card} />
      {story.firstStep != null && (
        <View style={[styles.firstStep, { backgroundColor: SHEET.card }]}>
          <FluentIcon name="sunrise" size={22} />
          <Text style={[styles.firstStepText, { color: SHEET.ink }]} maxFontSizeMultiplier={1.3}>
            {story.firstStep}
          </Text>
        </View>
      )}
      <View style={styles.timeline}>
        {rows.map((row, i) => (
          <View key={row.text} style={styles.row}>
            <View style={styles.rail}>
              <View style={[styles.dot, { backgroundColor: i === 0 ? PLUS.accent : PLUS.washEdge }]} />
              {i < rows.length - 1 && <View style={[styles.line, { backgroundColor: PLUS.washEdge }]} />}
            </View>
            <Text style={[styles.rowText, { color: SHEET.label }]} maxFontSizeMultiplier={1.3}>
              {row.title != null && <Text style={[styles.rowTitle, { color: SHEET.ink }]}>{row.title}: </Text>}
              {row.text}
            </Text>
          </View>
        ))}
      </View>
      <Text style={[styles.headline, { color: SHEET.ink }]} numberOfLines={2} adjustsFontSizeToFit minimumFontScale={0.75} maxFontSizeMultiplier={1.25}>
        {headline}
      </Text>
    </View>
  );
}

/** "Dr. Carla Shayman, PT, DPT, reviewed our heel pain and flat feet guides":
 * what she did, and nothing more. No quote, no claim about the exercises. */
export function CarlaLine() {
  const t = useT();
  const { SHEET } = usePlansTheme();
  return (
    <Text style={[styles.carla, { color: SHEET.label }]} maxFontSizeMultiplier={1.3}>
      {t('story.trust.carla')}
    </Text>
  );
}

const styles = StyleSheet.create({
  wrap: { gap: 12 },
  title: { ...fonts.heavy(30, -0.9), lineHeight: 34, textAlign: 'center' },
  firstStep: { flexDirection: 'row', alignItems: 'center', gap: 10, borderRadius: 16, borderCurve: 'continuous', paddingHorizontal: 14, paddingVertical: 11 },
  firstStepText: { ...fonts.semibold(15, -0.1), lineHeight: 20, flexShrink: 1 },
  timeline: { paddingHorizontal: 4 },
  row: { flexDirection: 'row', gap: 10 },
  rail: { width: 12, alignItems: 'center' },
  dot: { width: 12, height: 12, borderRadius: 6, marginTop: 3 },
  line: { width: 2, flex: 1, minHeight: 10, marginVertical: 2 },
  rowText: { ...fonts.medium(14), lineHeight: 19, flex: 1, paddingBottom: 8 },
  rowTitle: fonts.bold(14),
  headline: { ...fonts.bold(20, -0.4), lineHeight: 25, textAlign: 'center', marginTop: 2 },
  carla: { ...fonts.medium(12), lineHeight: 16, textAlign: 'center' },
});
