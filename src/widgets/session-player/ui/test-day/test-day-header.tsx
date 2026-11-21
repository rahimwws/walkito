import Cancel01Icon from '@hugeicons/core-free-icons/Cancel01Icon';
import { StyleSheet, View } from 'react-native';

import { colors } from '@/shared/config';
import { useT } from '@/shared/lib/i18n';

import type { SegmentState } from '../../model/test-day';
import { RoundButton, SIDE, tint } from '../player/kit';

export const TEST_DAY_HEADER_HEIGHT = 60;

export type TestDayHeaderProps = {
  /** One per test: done, the one under way, or still to come. */
  segments: readonly SegmentState[];
  onClose: () => void;
};

/**
 * The test day's top row, in the player's Bend style: a round close, and
 * where the three tests stand as rounded segments, violet for done, soft
 * violet for the one under way. A fixed-size icon rather than a word, so the
 * row keeps its height at every text size and nothing under it can slide
 * beneath it.
 */
export function TestDayHeader({ segments, onClose }: TestDayHeaderProps) {
  const t = useT();
  const done = segments.filter((state) => state === 'done').length;
  return (
    <View style={styles.header}>
      <RoundButton icon={Cancel01Icon} tone="grey" size={40} label={t('testday.close')} onPress={onClose} />
      <View
        style={styles.bar}
        accessible
        accessibilityRole="progressbar"
        accessibilityValue={{ min: 0, max: segments.length, now: done }}>
        {segments.map((state, index) => (
          <View key={index} style={[styles.segment, state === 'done' && styles.done, state === 'active' && styles.active]} />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: TEST_DAY_HEADER_HEIGHT,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: SIDE - 8,
    gap: 16,
  },
  bar: { flex: 1, flexDirection: 'row', gap: 6 },
  segment: { flex: 1, height: 6, borderRadius: 3, backgroundColor: colors.surface2 },
  done: { backgroundColor: colors.accent },
  active: { backgroundColor: tint('violet', 0.45) },
});
