import { HugeiconsIcon, type IconSvgElement } from '@hugeicons/react-native';
import { StyleSheet, Text, View, type StyleProp, type ViewStyle } from 'react-native';

import { CHROME_MAX_FONT_SCALE, colors, fonts } from '@/shared/config';

export type ChipProps = {
  label: string;
  icon?: IconSvgElement;
  selected?: boolean;
  accessibilityLabel?: string;
  style?: StyleProp<ViewStyle>;
};

/** A grey capsule label; a selected one is violet on soft violet. */
export function Chip({ label, icon, selected = false, accessibilityLabel, style }: ChipProps) {
  const ink = selected ? colors.accent : colors.text;
  return (
    <View
      accessible
      accessibilityLabel={accessibilityLabel ?? label}
      style={[styles.chip, { backgroundColor: selected ? colors.accentSoft : colors.surface2 }, style]}>
      {icon != null && <HugeiconsIcon icon={icon} size={16} color={ink} strokeWidth={2} />}
      <Text style={[styles.label, { color: ink }]} numberOfLines={1} maxFontSizeMultiplier={CHROME_MAX_FONT_SCALE}>
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
    minHeight: 32,
    paddingHorizontal: 12,
    borderRadius: 999,
  },
  label: fonts.medium(15),
});
