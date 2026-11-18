import { StyleSheet, Text, View } from 'react-native';

import { accents, fonts } from '@/shared/config';
import { useT, type Key } from '@/shared/lib/i18n';
import { useColorScheme } from '@/shared/lib/theme';
import { FluentIcon } from '@/shared/ui/fluent-icon';

import { goalsInOrder } from '../model/story';

/** Each goal's words: the web funnel's "What do you want back?". */
export const GOAL_LABEL: Readonly<Record<string, Key>> = {
  mornings: 'story.goals.mornings',
  walk: 'story.goals.walk',
  shift: 'story.goals.shift',
  runs: 'story.goals.runs',
  shoes: 'story.goals.shoes',
  evenings: 'story.goals.evenings',
};

/**
 * Her goals as chips, each edged in its own accent with its emoji: the plan
 * peek and the paywall show what she said she wants back, in her words. The
 * accent says which goal, never how she is doing.
 */
export function GoalChips({
  goals,
  ink,
  surface,
}: {
  goals: readonly string[];
  /** The text colour: the page's, or the dark paywall's. */
  ink: string;
  /** Behind each chip. */
  surface: string;
}) {
  const scheme = useColorScheme();
  const t = useT();
  const listed = goalsInOrder(goals);
  if (listed.length === 0) return null;
  return (
    <View style={styles.wrap}>
      {listed.map((goal) => (
        <View
          key={goal.goal}
          style={[styles.chip, { borderColor: accents[scheme][goal.accent].fill, backgroundColor: surface }]}>
          <FluentIcon name={goal.emoji} size={18} />
          <Text style={[styles.label, { color: ink }]} maxFontSizeMultiplier={1.3}>
            {t(GOAL_LABEL[goal.goal])}
          </Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: { flexDirection: 'row', flexWrap: 'wrap', gap: 8 },
  chip: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    paddingHorizontal: 12,
    paddingVertical: 7,
    borderRadius: 999,
    borderWidth: 1.5,
  },
  label: fonts.semibold(14, -0.1),
});
