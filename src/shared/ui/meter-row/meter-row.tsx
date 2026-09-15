import { HugeiconsIcon, type IconSvgElement } from '@hugeicons/react-native';
import { StyleSheet, Text, View } from 'react-native';

import { fonts, meterColors } from '@/shared/config';
import { useColorScheme } from '@/shared/lib/theme';
import { DeltaLabel, ScoreValue, TickBar } from '@/shared/ui/meter';

/** Caption line height, held even when a row has no caption, so every row is
 * the same height and the tick bars below them stay on one grid. */
const CAPTION_HEIGHT = 16;

/**
 * One labelled metric: icon, name, optional raw-measure caption, score out of
 * 100, change, and a tick meter.
 *
 * `score: null` means the metric wasn't measured. That renders a dash and an
 * empty track rather than a zero, so "no data" never reads as "you scored 0".
 */
export type MeterRowProps = {
  icon: IconSvgElement;
  label: string;
  score: number | null;
  /** Raw measure under the name, e.g. "183 wpm · target 179". */
  caption?: string;
  /** Change vs a comparison basis. Omit when there's nothing to compare. */
  delta?: number;
  /** Small pill beside the name, e.g. "FOCUS". Set it on at most one row. */
  badge?: string;
};

export function MeterRow({ icon, label, score, caption, delta, badge }: MeterRowProps) {
  const scheme = useColorScheme() === 'dark' ? 'dark' : 'light';
  const theme = meterColors[scheme];

  return (
    <View style={styles.row}>
      <View style={styles.header}>
        {/* Fixed-width slot keeps names in one vertical lane across all rows. */}
        <View style={styles.iconSlot}>
          <HugeiconsIcon icon={icon} size={18} color={theme.caption} strokeWidth={1.8} />
        </View>

        <View style={styles.text}>
          <View style={styles.nameRow}>
            <Text style={[styles.name, { color: theme.ink }]}>{label}</Text>
            {badge != null && (
              <View style={[styles.badgePill, { backgroundColor: theme.focusBg }]}>
                <Text style={[styles.badgeLabel, { color: theme.focus }]}>{badge}</Text>
              </View>
            )}
          </View>
          <View style={styles.captionSlot}>
            {caption != null && (
              <Text style={[styles.caption, { color: theme.caption }]} numberOfLines={1}>
                {caption}
              </Text>
            )}
          </View>
        </View>

        <View style={styles.trailing}>
          <ScoreValue value={score} size={22} maxSize={12} />
          {score != null && delta != null && <DeltaLabel delta={delta} hideZero />}
        </View>
      </View>

      <TickBar fill={score != null ? score / 100 : 0} />
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    gap: 11,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 9,
  },
  iconSlot: {
    width: 18,
    height: 20,
    flexShrink: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    flex: 1,
    gap: 2,
  },
  nameRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 7,
  },
  name: {
    fontSize: 16,
    fontFamily: fonts.semibold,
    lineHeight: 20,
  },
  badgePill: {
    paddingVertical: 2,
    paddingHorizontal: 7,
    borderRadius: 7,
    borderCurve: 'continuous',
  },
  badgeLabel: {
    fontSize: 10,
    fontFamily: fonts.bold,
    letterSpacing: 0.6,
  },
  captionSlot: {
    height: CAPTION_HEIGHT,
    justifyContent: 'center',
  },
  caption: {
    fontSize: 13,
    fontFamily: fonts.regular,
    lineHeight: CAPTION_HEIGHT,
  },
  trailing: {
    flexShrink: 0,
    alignItems: 'flex-end',
    gap: 2,
  },
});
