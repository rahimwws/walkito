import { HugeiconsIcon, type IconSvgElement } from '@hugeicons/react-native';
import { StyleSheet, Text, View, type StyleProp, type ViewStyle } from 'react-native';

import { CHROME_MAX_FONT_SCALE, bitepal, colors, fonts } from '@/shared/config';

export type MetaChipProps = {
  /** What the figure is: a clock for a duration, a repeat for sets and reps. */
  icon: IconSvgElement;
  /** The figure itself, short: "2 min", "3 × 10". */
  label: string;
  style?: StyleProp<ViewStyle>;
};

/**
 * A figure about a row or a tile as a small grey capsule with its icon, in
 * place of a grey line of words under it: how long, how many. Read as part of
 * whatever it sits in, so it carries no label of its own.
 */
export function MetaChip({ icon, label, style }: MetaChipProps) {
  return (
    <View style={[styles.chip, style]}>
      <HugeiconsIcon icon={icon} size={16} color={colors.text2} strokeWidth={2} />
      <Text style={styles.label} numberOfLines={1} maxFontSizeMultiplier={CHROME_MAX_FONT_SCALE}>
        {label}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  chip: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    gap: 6,
    minHeight: 30,
    paddingHorizontal: 10,
    borderRadius: 999,
    backgroundColor: bitepal.well,
  },
  label: { ...fonts.medium(17), color: colors.text2, fontVariant: ['tabular-nums'] },
});
