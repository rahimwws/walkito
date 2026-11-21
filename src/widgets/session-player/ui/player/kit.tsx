import * as Haptics from 'expo-haptics';
import { Pressable, StyleSheet, Text, View, type StyleProp, type ViewStyle } from 'react-native';

import { colors, fonts, target } from '@/shared/config';

/** The player's page: white, black type, grey for what is secondary. */
export const ink = {
  page: colors.surface,
  text: colors.text,
  grey: colors.text2,
  rule: colors.separator,
  studio: '#ECF0F1',
} as const;

export const SIDE = 24;

/** Dynamic Type ceilings for display type only: titles and big numerals
 * still grow, body text is never capped. */
export const TITLE_SCALE = 2;
export const NUMERAL_SCALE = 1.2;

type ButtonProps = {
  label: string;
  onPress: () => void;
  accessibilityLabel?: string;
  accessibilityHint?: string;
  disabled?: boolean;
  style?: StyleProp<ViewStyle>;
};

/** The one primary action on a screen: a black capsule, full width, 56pt. */
export function Capsule({ label, onPress, accessibilityLabel, accessibilityHint, disabled, style }: ButtonProps) {
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={accessibilityLabel ?? label}
      accessibilityHint={accessibilityHint}
      accessibilityState={{ disabled: disabled === true }}
      disabled={disabled}
      onPress={() => {
        void Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
        onPress();
      }}
      style={({ pressed }) => [styles.capsule, disabled && styles.off, pressed && styles.pressed, style]}>
      <Text style={styles.capsuleText}>{label}</Text>
    </Pressable>
  );
}

/** Everything secondary: words only, 48pt tall. */
export function TextButton({
  label,
  onPress,
  accessibilityLabel,
  accessibilityHint,
  disabled,
  style,
  quiet = false,
  maxScale,
}: ButtonProps & { quiet?: boolean; maxScale?: number }) {
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={accessibilityLabel ?? label}
      accessibilityHint={accessibilityHint}
      accessibilityState={{ disabled: disabled === true }}
      disabled={disabled}
      hitSlop={4}
      onPress={() => {
        void Haptics.selectionAsync();
        onPress();
      }}
      style={({ pressed }) => [styles.text, disabled && styles.off, pressed && styles.pressed, style]}>
      <Text style={[styles.textLabel, quiet && styles.textQuiet]} maxFontSizeMultiplier={maxScale}>
        {label}
      </Text>
    </Pressable>
  );
}

export function Hairline() {
  return <View style={styles.hairline} />;
}

const styles = StyleSheet.create({
  capsule: {
    alignSelf: 'stretch',
    minHeight: target.primary,
    borderRadius: 999,
    backgroundColor: colors.ink,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
    paddingVertical: 12,
  },
  capsuleText: { ...fonts.semibold(19), color: colors.onInk, textAlign: 'center' },
  text: { minHeight: target.min, justifyContent: 'center', paddingHorizontal: 4 },
  textLabel: { ...fonts.semibold(19), color: ink.text, textAlign: 'center' },
  textQuiet: { ...fonts.medium(19), color: ink.grey },
  hairline: { height: StyleSheet.hairlineWidth, backgroundColor: ink.rule, alignSelf: 'stretch' },
  pressed: { opacity: 0.55 },
  off: { opacity: 0.35 },
});
