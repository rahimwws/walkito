import FireIcon from '@hugeicons/core-free-icons/FireIcon';
import { HugeiconsIcon, type IconSvgElement } from '@hugeicons/react-native';
import { GlassView } from 'expo-glass-effect';
import * as Haptics from 'expo-haptics';
import { useEffect, useRef } from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import Animated, {
  ReduceMotion,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

import { accents, meterColors, palette, type AccentName } from '@/shared/config';
import { AnimatedNumber } from '@/shared/ui/animated-number';
import { useGlassSurface, useRaisedScheme } from '@/shared/ui/raised';

const HEIGHT = 36;
/** The icon taking its colour as the day counts. */
const LIGHT_MS = 200;
const ROLL_S = 0.35;

export type CounterPillProps = {
  icon: IconSvgElement;
  value: number;
  /** The metric's accent: orange for the streak, violet for care days. */
  accent: AccentName;
  /** Counted today: the icon and the number take the accent. */
  lit?: boolean;
  onPress?: () => void;
  /** Spells the noun out: a bare "7" means nothing read aloud. */
  accessibilityLabel: string;
  accessibilityHint?: string;
};

/**
 * A count in the header: an icon and a number in a glass capsule.
 *
 * Lit once today has counted, in the metric's accent; until then the icon is
 * grey and the number ink. There is no lost state and no red: a streak that
 * reset shows its new number, with nothing animating the loss.
 *
 * When the number goes up while it is on screen, it rolls, the icon takes its
 * colour, and a light tap confirms it. No pop: the number changing is the
 * event, and a capsule that jumps reads as a notification.
 *
 * The touchable is outside the glass, as on the streak capsule it replaces: a
 * touchable inside an interactive glass loses its first tap to the material.
 */
export function CounterPill({
  icon,
  value,
  accent,
  lit = false,
  onPress,
  accessibilityLabel,
  accessibilityHint,
}: CounterPillProps) {
  const scheme = useRaisedScheme();
  const surface = useGlassSurface();
  const meter = meterColors[scheme];
  const fill = accents[scheme][accent].fill;

  const on = useSharedValue(lit ? 1 : 0);
  useEffect(() => {
    on.value = withTiming(lit ? 1 : 0, { duration: LIGHT_MS, reduceMotion: ReduceMotion.System });
  }, [lit, on]);
  const litGlyph = useAnimatedStyle(() => ({ opacity: on.value }));
  const dimGlyph = useAnimatedStyle(() => ({ opacity: 1 - on.value }));

  const previous = useRef(value);
  useEffect(() => {
    if (value > previous.current) void Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    previous.current = value;
  }, [value]);

  const content = (
    <>
      <View style={styles.icon}>
        <Animated.View style={[StyleSheet.absoluteFill, styles.center, dimGlyph]}>
          <HugeiconsIcon icon={icon} size={18} color={meter.unit} strokeWidth={2.2} />
        </Animated.View>
        <Animated.View style={[StyleSheet.absoluteFill, styles.center, litGlyph]}>
          <HugeiconsIcon icon={icon} size={18} color={fill} strokeWidth={2.2} />
        </Animated.View>
      </View>
      <AnimatedNumber
        text={String(value)}
        value={value}
        color={lit ? fill : palette[scheme].foreground}
        fontSize={17}
        weight="heavy"
        duration={ROLL_S}
      />
    </>
  );

  const glass = surface === 'liquid-glass';
  const capsule = glass ? (
    <GlassView
      isInteractive={onPress != null}
      colorScheme={scheme}
      glassEffectStyle="regular"
      style={styles.pill}>
      {content}
    </GlassView>
  ) : (
    <View style={[styles.pill, { backgroundColor: meter.track }]}>{content}</View>
  );

  // A count you cannot tap is a plain View: a disabled Pressable adds
  // `disabled` to the accessibility state, and VoiceOver would read the
  // streak as "dimmed".
  if (onPress == null) {
    return (
      <View accessible accessibilityRole="text" accessibilityLabel={accessibilityLabel}>
        {capsule}
      </View>
    );
  }

  return (
    <Pressable
      accessible
      accessibilityRole="button"
      accessibilityLabel={accessibilityLabel}
      accessibilityHint={accessibilityHint}
      onPress={onPress}
      hitSlop={4}
      // The glass flexes under a finger by itself; the solid capsule dims.
      style={({ pressed }) => !glass && pressed && styles.pressed}>
      {capsule}
    </Pressable>
  );
}

export type StreakPillProps = Omit<CounterPillProps, 'icon' | 'accent'>;

/** The streak: a flame in orange. Hugeicons' flame is stroke only, so it is an
 * outline that takes the colour, never a filled one. */
export function StreakPill(props: StreakPillProps) {
  return <CounterPill icon={FireIcon} accent="orange" {...props} />;
}

const styles = StyleSheet.create({
  pill: {
    height: HEIGHT,
    borderRadius: HEIGHT / 2,
    paddingHorizontal: 12,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  icon: {
    width: 18,
    height: 18,
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  pressed: {
    opacity: 0.6,
  },
});
