import { HugeiconsIcon, type IconSvgElement } from '@hugeicons/react-native';
import * as Haptics from 'expo-haptics';
import type { ReactNode } from 'react';
import { Image, Pressable, StyleSheet, Text, View, type StyleProp, type ViewStyle } from 'react-native';

import { EXERCISES_BY_ID, exerciseById, moveLook } from '@/entities/program';
import { accents, colors, fonts, target, type AccentName } from '@/shared/config';
import { FluentIcon } from '@/shared/ui/fluent-icon';

import { illustrationFor, posterFor } from '../../config/exercise-posters';

/** The player's page is white, like Bend's; the screens around it (the
 * session detail, Done, the Foot Check) sit on the grouped grey with white
 * cards on it. */
export const ink = {
  page: colors.surface,
  canvas: colors.bg,
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

/** A white card a few points off the grey page, as Bend's routine tiles. */
export const cardStyle = {
  backgroundColor: colors.surface,
  borderRadius: 20,
  borderCurve: 'continuous',
  shadowColor: '#000000',
  shadowOpacity: 0.06,
  shadowRadius: 14,
  shadowOffset: { width: 0, height: 4 },
  elevation: 2,
} as const satisfies ViewStyle;

/**
 * An accent mixed into white, opaque: the pastel behind a move's picture.
 * Opaque so the drawing's white multiplies into it rather than through it.
 */
export function tint(name: AccentName, amount = 0.26): string {
  const hex = accents.light[name].fill.replace('#', '');
  const mix = (at: number) => {
    const channel = parseInt(hex.slice(at, at + 2), 16);
    return Math.round(255 - (255 - channel) * amount)
      .toString(16)
      .padStart(2, '0');
  };
  return '#' + mix(0) + mix(2) + mix(4);
}

/** Which accent a move wears: its kind of work, never how it went. */
export function moveAccent(exerciseId: string | null | undefined): AccentName {
  if (exerciseId == null || EXERCISES_BY_ID[exerciseId] == null) return 'violet';
  return moveLook(exerciseId, exerciseById(exerciseId).category).accent;
}

type ButtonProps = {
  label: string;
  onPress: () => void;
  accessibilityLabel?: string;
  accessibilityHint?: string;
  disabled?: boolean;
  style?: StyleProp<ViewStyle>;
};

/** The one primary action on a screen: the brand violet, full width, 56pt. */
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
      <Text style={styles.capsuleText} maxFontSizeMultiplier={TITLE_SCALE}>
        {label}
      </Text>
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

/**
 * A round icon button, Bend's close, more and transport: white with a soft
 * shadow, or the plain grey of a header control.
 */
export function RoundButton({
  icon,
  label,
  onPress,
  size = 44,
  iconSize,
  tone = 'raised',
  disabled,
  style,
}: {
  icon: IconSvgElement;
  /** Read by VoiceOver: the button has no words. */
  label: string;
  onPress: () => void;
  size?: number;
  iconSize?: number;
  tone?: 'raised' | 'grey';
  disabled?: boolean;
  style?: StyleProp<ViewStyle>;
}) {
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={label}
      accessibilityState={{ disabled: disabled === true }}
      disabled={disabled}
      hitSlop={Math.max(0, (target.min - size) / 2)}
      onPress={() => {
        void Haptics.selectionAsync();
        onPress();
      }}
      style={({ pressed }) => [
        styles.round,
        tone === 'raised' ? styles.raised : styles.grey,
        { width: size, height: size, borderRadius: size / 2 },
        disabled && styles.off,
        pressed && styles.pressed,
        style,
      ]}>
      <HugeiconsIcon icon={icon} size={iconSize ?? Math.round(size * 0.42)} color={ink.text} strokeWidth={2} />
    </Pressable>
  );
}

/**
 * A move's picture as Bend draws its stretches: the figure on a pastel disc
 * in the move's accent. The drawing is multiplied into the disc, so its white
 * ground takes the colour and the figure keeps its own. Falls back to the
 * still from the clip, cropped round, and then to the kind's emoji.
 */
export function MoveCircle({
  exerciseId,
  size,
  children,
  style,
}: {
  exerciseId: string | null | undefined;
  size: number;
  children?: ReactNode;
  style?: StyleProp<ViewStyle>;
}) {
  const accent = moveAccent(exerciseId);
  const drawing = exerciseId == null ? null : illustrationFor(exerciseId);
  const still = drawing == null && exerciseId != null ? posterFor(exerciseId) : null;
  const known = exerciseId != null && EXERCISES_BY_ID[exerciseId] != null;
  return (
    <View
      style={[styles.disc, { width: size, height: size, borderRadius: size / 2, backgroundColor: tint(accent) }, style]}
      accessibilityElementsHidden
      importantForAccessibility="no-hide-descendants">
      {drawing != null ? (
        <Image
          source={drawing}
          resizeMode="contain"
          style={[styles.drawing, { width: size * 1.6, height: size * 0.9 }]}
          accessibilityIgnoresInvertColors
        />
      ) : still != null ? (
        <Image source={still} resizeMode="cover" style={StyleSheet.absoluteFill} accessibilityIgnoresInvertColors />
      ) : known ? (
        <FluentIcon name={moveLook(exerciseId, exerciseById(exerciseId).category).art} size={size * 0.5} />
      ) : null}
      {children}
    </View>
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
    backgroundColor: colors.accent,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
    paddingVertical: 12,
  },
  capsuleText: { ...fonts.semibold(19), color: colors.onInk, textAlign: 'center' },
  text: { minHeight: target.min, justifyContent: 'center', paddingHorizontal: 4 },
  textLabel: { ...fonts.semibold(19), color: ink.text, textAlign: 'center' },
  textQuiet: { ...fonts.medium(19), color: ink.grey },
  round: { alignItems: 'center', justifyContent: 'center' },
  raised: {
    backgroundColor: colors.surface,
    shadowColor: '#000000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 3 },
    elevation: 3,
  },
  grey: { backgroundColor: colors.surface2 },
  disc: { overflow: 'hidden', alignItems: 'center', justifyContent: 'center' },
  drawing: { mixBlendMode: 'multiply' },
  hairline: { height: StyleSheet.hairlineWidth, backgroundColor: ink.rule, alignSelf: 'stretch' },
  pressed: { opacity: 0.55 },
  off: { opacity: 0.35 },
});
