import { HugeiconsIcon, type IconSvgElement } from '@hugeicons/react-native';
import { GlassView, isLiquidGlassAvailable } from 'expo-glass-effect';
import * as Haptics from 'expo-haptics';
import { Pressable, StyleSheet, Text, View, type StyleProp, type ViewStyle } from 'react-native';

import { fonts } from '@/shared/config';
import { useColorScheme } from '@/shared/lib/theme';

const HEIGHT = 60;

/** The same inverted pair the segmented control's thumb uses, so every
 * committing surface in the app reads as one material. */
const THEME = {
  light: { tint: '#1C1C21', solid: '#1C1C21', label: '#FFFFFF' },
  dark: { tint: '#F2F2F5', solid: '#F2F2F5', label: '#111114' },
} as const;

export type ActionButtonProps = {
  label: string;
  onPress: () => void;
  /** Leading glyph. Omit for a label-only button. */
  icon?: IconSvgElement;
  style?: StyleProp<ViewStyle>;
};

/**
 * The screen's one commitment, in liquid glass.
 *
 * `isInteractive` hands the press response to the system — the material itself
 * flexes and settles under the finger. That is why nothing is animated here: a
 * JS travel-and-spring on top would fight the native response and land as a
 * bounce the glass never asked for.
 *
 * Do not render this inside another `GlassView`: nested glass effects don't
 * render on iOS 26. Give the surrounding card its glass as an absolute sibling
 * beneath the content instead — see `TodayCard`.
 */
export function ActionButton({ label, onPress, icon, style }: ActionButtonProps) {
  const scheme = useColorScheme();
  const theme = THEME[scheme];

  const content = (
    <>
      {icon != null && (
        <HugeiconsIcon icon={icon} size={22} color={theme.label} strokeWidth={2} />
      )}
      <Text style={[styles.label, { color: theme.label }]}>{label}</Text>
    </>
  );

  return (
    <Pressable
      onPress={() => {
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
        onPress();
      }}
      style={({ pressed }) => [style, pressed && { opacity: 0.85 }]}>
      {isLiquidGlassAvailable() ? (
        <GlassView
          glassEffectStyle="regular"
          isInteractive
          tintColor={theme.tint}
          style={styles.button}>
          {content}
        </GlassView>
      ) : (
        <View style={[styles.button, { backgroundColor: theme.solid }]}>{content}</View>
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    height: HEIGHT,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    borderRadius: HEIGHT / 2,
    borderCurve: 'continuous',
  },
  label: {
    fontSize: 18,
    fontFamily: fonts.semibold,
  },
});
