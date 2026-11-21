import { StyleSheet, View } from 'react-native';

import { useT } from '@/shared/lib/i18n';

import type { SegmentState } from '../../model/test-day';
import { SIDE, TextButton, ink } from '../player/kit';

export const TEST_DAY_HEADER_HEIGHT = 52;

export type TestDayHeaderProps = {
  /** One per test: done, the one under way, or still to come. */
  segments: readonly SegmentState[];
  onClose: () => void;
};

/**
 * The test day's top row: Close in words, and where the three tests stand
 * as a plain bar, black for done, half-tone for the one under way.
 */
export function TestDayHeader({ segments, onClose }: TestDayHeaderProps) {
  const t = useT();
  const done = segments.filter((state) => state === 'done').length;
  return (
    <View style={styles.header}>
      <TextButton label={t('common.close')} accessibilityLabel={t('testday.close')} onPress={onClose} />
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
    paddingHorizontal: SIDE - 4,
    gap: 16,
  },
  bar: { flex: 1, flexDirection: 'row', gap: 4 },
  segment: { flex: 1, height: 3, backgroundColor: ink.rule },
  done: { backgroundColor: ink.text },
  active: { backgroundColor: ink.grey },
});
