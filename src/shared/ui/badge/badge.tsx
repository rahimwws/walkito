import { StyleSheet, Text, View, type StyleProp, type ViewStyle } from 'react-native';

import { CHROME_MAX_FONT_SCALE, colors, fonts } from '@/shared/config';

export type BadgeProps = {
  label: string;
  style?: StyleProp<ViewStyle>;
};

/** A small capsule of words: "New", "Best value". Never a verdict on a value. */
export function Badge({ label, style }: BadgeProps) {
  return (
    <View style={[styles.badge, style]}>
      <Text style={styles.label} numberOfLines={1} maxFontSizeMultiplier={CHROME_MAX_FONT_SCALE}>
        {label}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  badge: {
    alignSelf: 'flex-start',
    minHeight: 24,
    paddingHorizontal: 10,
    borderRadius: 999,
    backgroundColor: colors.accentSoft,
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: { ...fonts.semibold(13), color: colors.accent },
});
