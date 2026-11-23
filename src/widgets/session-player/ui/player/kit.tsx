import { HugeiconsIcon, type IconSvgElement } from '@hugeicons/react-native';
import * as Haptics from 'expo-haptics';
import { useIsFocused } from 'expo-router';
import { useEffect, useRef, type ReactNode } from 'react';
import { Image, Pressable, StyleSheet, Text, View, type StyleProp, type TextStyle, type ViewStyle } from 'react-native';
import { useReducedMotion } from 'react-native-reanimated';
import Svg, { Circle } from 'react-native-svg';

import { EXERCISES_BY_ID, exerciseById, moveLook, planMeta } from '@/entities/program';
import { bitepal, bodyColors, colors, fonts, target, type BodyPart } from '@/shared/config';
import { FluentIcon } from '@/shared/ui/fluent-icon';
import { Mascot, MascotStill, type MascotHandle, type MascotRig, type MascotShot } from '@/shared/ui/mascot';

import { illustrationFor, posterFor } from '../../config/exercise-posters';

/** BitePal's page: every screen of the session sits on the cool grey with
 * white cards on it. */
export const ink = {
  page: bitepal.page,
  canvas: bitepal.page,
  card: bitepal.card,
  text: colors.text,
  grey: colors.text2,
  label: colors.text3,
  rule: colors.separator,
  studio: '#ECF0F1',
} as const;

export const SIDE = 20;

/** Dynamic Type ceilings for display type only: titles and big numerals
 * still grow, body text is never capped. */
export const TITLE_SCALE = 2;
export const NUMERAL_SCALE = 1.2;

/** BitePal's white card: a 24pt corner, flat on the grey. */
export const cardStyle = {
  backgroundColor: bitepal.card,
  borderRadius: bitepal.cardRadius,
  borderCurve: 'continuous',
} as const satisfies ViewStyle;

/** A colour mixed into white, opaque: the pastel behind a move's picture.
 * Opaque so the drawing's white multiplies into it rather than through it. */
export function soft(hex: string, amount = 0.24): string {
  const value = hex.replace('#', '');
  const mix = (at: number) => {
    const channel = parseInt(value.slice(at, at + 2), 16);
    return Math.round(255 - (255 - channel) * amount)
      .toString(16)
      .padStart(2, '0');
  };
  return '#' + mix(0) + mix(2) + mix(4);
}

/** BitePal's header scene (#108): the warm card the character stands in. */
export const sceneStyle = {
  ...cardStyle,
  backgroundColor: soft(bodyColors.toes, 0.2),
} as const satisfies ViewStyle;

/**
 * Which part of the foot or leg a move works, read from what the plan says it
 * trains: toes by name, then calf, arch, and the balance and hip work that
 * steadies the ankle; the stretches and rolling left over are for the heel
 * and the sole under it.
 */
export function bodyPartOf(exerciseId: string | null | undefined): BodyPart | null {
  if (exerciseId == null || EXERCISES_BY_ID[exerciseId] == null) return null;
  if (exerciseId.includes('toe')) return 'toes';
  const meta = planMeta(exerciseId);
  if (meta == null) return 'heel';
  if (meta.tags.includes('calf')) return 'calf';
  if (meta.tags.includes('arch') || meta.chain === 'arch') return 'arch';
  if (meta.kind === 'balance' || meta.chain === 'hip' || meta.tags.includes('balance')) return 'ankle';
  return 'heel';
}

/** A move's colour: the part it works, or the brand violet for no move. */
export function moveColor(exerciseId: string | null | undefined): string {
  const part = bodyPartOf(exerciseId);
  return part == null ? colors.accent : bodyColors[part];
}

type ButtonProps = {
  label: string;
  onPress: () => void;
  accessibilityLabel?: string;
  accessibilityHint?: string;
  disabled?: boolean;
  style?: StyleProp<ViewStyle>;
};

/** The one primary action on a screen: BitePal's black pill, full width, 56pt. */
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
  maxScale = TITLE_SCALE,
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
 * A round icon button. `raised` is white, for the grey page (back, close,
 * transport); `well` is BitePal's grey circle inside a white card (its +);
 * `ink` is the black one, for the screen's main control.
 */
export function RoundButton({
  icon,
  label,
  onPress,
  size = 48,
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
  tone?: 'raised' | 'well' | 'ink';
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
        tone === 'raised' ? styles.raised : tone === 'well' ? styles.well : styles.inkButton,
        { width: size, height: size, borderRadius: size / 2 },
        disabled && styles.off,
        pressed && styles.pressed,
        style,
      ]}>
      <HugeiconsIcon
        icon={icon}
        size={iconSize ?? Math.round(size * 0.42)}
        color={tone === 'ink' ? bitepal.onPrimary : ink.text}
        strokeWidth={2}
      />
    </Pressable>
  );
}

/** BitePal's small grey label at a card's top-left ("Calories eaten"). */
export function CardLabel({ children, style }: { children: ReactNode; style?: StyleProp<TextStyle> }) {
  return (
    <Text maxFontSizeMultiplier={TITLE_SCALE} style={[styles.cardLabel, style]}>
      {children}
    </Text>
  );
}

/** The big bold figure under the label, its unit smaller and grey ("300 ml"). */
export function BigNumber({
  value,
  unit,
  size = 44,
  maxScale = TITLE_SCALE,
  style,
}: {
  value: string | number;
  unit?: string | null;
  size?: number;
  maxScale?: number;
  style?: StyleProp<TextStyle>;
}) {
  return (
    <Text maxFontSizeMultiplier={maxScale} style={[fonts.heavy(size, -1), styles.big, style]}>
      {value}
      {unit != null && <Text style={[fonts.bold(Math.max(19, Math.round(size * 0.42))), styles.bigUnit]}>{' ' + unit}</Text>}
    </Text>
  );
}

/** A ring that fills to `value` (0-1) from twelve o'clock, on the light track. */
export function Ring({
  size,
  stroke = 6,
  value,
  color,
  children,
}: {
  size: number;
  stroke?: number;
  value: number;
  color: string;
  children?: ReactNode;
}) {
  const r = (size - stroke) / 2;
  const around = 2 * Math.PI * r;
  const share = Math.max(0, Math.min(1, value));
  return (
    <View style={{ width: size, height: size }} accessibilityElementsHidden importantForAccessibility="no-hide-descendants">
      <Svg width={size} height={size} style={styles.turn}>
        <Circle cx={size / 2} cy={size / 2} r={r} stroke={bitepal.track} strokeWidth={stroke} fill="none" />
        {share > 0 && (
          <Circle
            cx={size / 2}
            cy={size / 2}
            r={r}
            stroke={color}
            strokeWidth={stroke}
            strokeLinecap="round"
            strokeDasharray={`${around} ${around}`}
            strokeDashoffset={around * (1 - share)}
            fill="none"
          />
        )}
      </Svg>
      <View style={styles.ringMiddle}>{children}</View>
    </View>
  );
}

/** BitePal's thin coloured bar on its light track. */
export function Bar({ value, color, style }: { value: number; color: string; style?: StyleProp<ViewStyle> }) {
  const share = Math.max(0, Math.min(1, value));
  return (
    <View style={[styles.bar, style]} accessibilityElementsHidden importantForAccessibility="no-hide-descendants">
      {share > 0 && <View style={[styles.barFill, { width: `${share * 100}%`, backgroundColor: color }]} />}
    </View>
  );
}

/**
 * A move's picture: the figure on a pastel disc in the colour of the part it
 * works. The drawing is multiplied into the disc, so its white ground takes
 * the colour and the figure keeps its own. Falls back to the still from the
 * clip, cropped round, and then to the kind's emoji.
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
  const drawing = exerciseId == null ? null : illustrationFor(exerciseId);
  const still = drawing == null && exerciseId != null ? posterFor(exerciseId) : null;
  const known = exerciseId != null && EXERCISES_BY_ID[exerciseId] != null;
  return (
    <View
      style={[styles.disc, { width: size, height: size, borderRadius: size / 2, backgroundColor: soft(moveColor(exerciseId)) }, style]}
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

/**
 * The mascot as BitePal stands its character in a screen's header: alive
 * while its screen is in front, still behind another one, and the still art
 * with Reduce Motion. `shot` plays once after it lands. Silent: the screen's
 * own haptic is the sound of the moment.
 */
export function SessionMascot({
  rig,
  size,
  shot,
  surface = bitepal.card,
  style,
}: {
  rig: MascotRig;
  size: number;
  shot?: MascotShot;
  surface?: string;
  style?: StyleProp<ViewStyle>;
}) {
  const focused = useIsFocused();
  const reduceMotion = useReducedMotion();
  const mascot = useRef<MascotHandle>(null);
  useEffect(() => {
    if (shot == null || reduceMotion) return;
    const timer = setTimeout(() => mascot.current?.play(shot), 450);
    return () => clearTimeout(timer);
    // Once per mount: the screen mounts it fresh each time it opens.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <View accessibilityElementsHidden importantForAccessibility="no-hide-descendants" style={style}>
      {reduceMotion ? (
        <MascotStill rig={rig} size={size} surface={surface} />
      ) : (
        <Mascot ref={mascot} rig={rig} size={size} surface={surface} paused={!focused} />
      )}
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
    backgroundColor: bitepal.primary,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
    paddingVertical: 12,
  },
  capsuleText: { ...fonts.bold(19), color: bitepal.onPrimary, textAlign: 'center' },
  text: { minHeight: target.min, justifyContent: 'center', paddingHorizontal: 4 },
  textLabel: { ...fonts.semibold(19), color: ink.text, textAlign: 'center' },
  textQuiet: { ...fonts.medium(19), color: ink.grey },
  round: { alignItems: 'center', justifyContent: 'center' },
  raised: { backgroundColor: bitepal.card },
  well: { backgroundColor: bitepal.well },
  inkButton: { backgroundColor: bitepal.primary },
  cardLabel: { ...fonts.semibold(17), color: ink.label },
  big: { color: ink.text, fontVariant: ['tabular-nums'] },
  bigUnit: { color: ink.label },
  turn: { transform: [{ rotate: '-90deg' }, { scaleY: -1 }] },
  ringMiddle: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bar: { height: 6, borderRadius: 3, backgroundColor: bitepal.track, overflow: 'hidden' },
  barFill: { height: 6, borderRadius: 3 },
  disc: { overflow: 'hidden', alignItems: 'center', justifyContent: 'center' },
  drawing: { mixBlendMode: 'multiply' },
  hairline: { height: StyleSheet.hairlineWidth, backgroundColor: ink.rule, alignSelf: 'stretch' },
  pressed: { opacity: 0.55 },
  off: { opacity: 0.35 },
});
