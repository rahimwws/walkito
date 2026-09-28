import { BlurView } from 'expo-blur';
import { GlassView, isLiquidGlassAvailable } from 'expo-glass-effect';
import { useEffect, useState, type ReactNode } from 'react';
import { AccessibilityInfo, Pressable, StyleSheet, Text, View } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';

import { fonts, meterColors, palette } from '@/shared/config';
import { useColorScheme } from '@/shared/lib/theme';

import { DARKEN, SHEEN, chipSurface, selectedLabel, solidFill } from './chip-colour';

export type GlassChipProps = {
  label: string;
  icon?: ReactNode;
  selected?: boolean;
  onPress?: () => void;
  /** `onColor` sits on a tinted day card; `onDark` on the app background. */
  tone?: 'onColor' | 'onDark';
  /** The card's day-type colour. Sets the selected label and the solid fallback. */
  accent?: string;
  accessibilityRole?: 'button' | 'radio';
  /** Read instead of the label, e.g. "Heel raises, preview". */
  accessibilityLabel?: string;
};

const HEIGHT = 36;

/** Reduce Transparency, read once and followed. */
function useReduceTransparency(): boolean {
  const [on, setOn] = useState(false);
  useEffect(() => {
    let alive = true;
    void AccessibilityInfo.isReduceTransparencyEnabled().then((value) => {
      if (alive) setOn(value);
    });
    const sub = AccessibilityInfo.addEventListener('reduceTransparencyChanged', setOn);
    return () => {
      alive = false;
      sub.remove();
    };
  }, []);
  return on;
}

/**
 * A pill of glass, for every chip on the plan screen.
 *
 * iOS 26 draws the system's Liquid Glass; older iOS draws a blur with a thin
 * white sheen; Reduce Transparency draws neither — a solid fill in the card's
 * own colour, darkened until its text reads. The glass is tinted darker than
 * the spec's plain white: white text over a white-tinted chip on these cards
 * measured 3.3–3.9:1, under the 4.5 the same spec requires, and contrast was
 * the requirement that could not give. See `chip-colour.ts`.
 *
 * Selected (the minutes choice) is near-white with the label in the card's
 * colour, darkened to read. Pressed shrinks to 0.97 for 100 ms.
 */
export function GlassChip({
  label,
  icon,
  selected = false,
  onPress,
  tone = 'onColor',
  accent,
  accessibilityRole = 'button',
  accessibilityLabel,
}: GlassChipProps) {
  const scheme = useColorScheme();
  const colors = palette[scheme];
  const meter = meterColors[scheme];
  const reduce = useReduceTransparency();
  const surface = chipSurface(isLiquidGlassAvailable(), reduce);
  const press = useSharedValue(1);
  const pressed = useAnimatedStyle(() => ({ transform: [{ scale: press.value }] }));

  const page = colors.background;
  const tint = accent ?? meter.track;
  const onDark = tone === 'onDark';
  const text = selected && accent != null ? selectedLabel(accent, page) : 'rgba(255,255,255,0.95)';

  const face = (() => {
    if (selected) return <View style={[StyleSheet.absoluteFill, styles.pill, { backgroundColor: 'rgba(255,255,255,0.9)' }]} />;
    if (surface === 'solid') {
      const fill = onDark || accent == null ? meter.track : solidFill(accent);
      return <View style={[StyleSheet.absoluteFill, styles.pill, styles.border, { backgroundColor: fill }]} />;
    }
    if (surface === 'liquid-glass') {
      return (
        <GlassView
          glassEffectStyle="regular"
          tintColor={`rgba(0,0,0,${DARKEN})`}
          style={[StyleSheet.absoluteFill, styles.pill]}
        />
      );
    }
    return (
      <>
        <BlurView intensity={30} tint={onDark ? 'dark' : 'light'} style={[StyleSheet.absoluteFill, styles.pill]} />
        <View
          style={[
            StyleSheet.absoluteFill,
            styles.pill,
            styles.border,
            { backgroundColor: `rgba(255,255,255,${SHEEN})` },
          ]}
        />
        <View style={[StyleSheet.absoluteFill, styles.pill, { backgroundColor: `rgba(0,0,0,${DARKEN})` }]} />
        <View style={styles.highlight} />
      </>
    );
  })();

  return (
    <Pressable
      accessibilityRole={accessibilityRole}
      accessibilityLabel={accessibilityLabel ?? label}
      accessibilityState={accessibilityRole === 'radio' ? { selected } : undefined}
      onPress={onPress}
      disabled={onPress == null}
      hitSlop={4}
      onPressIn={() => {
        press.value = withTiming(0.97, { duration: 100 });
      }}
      onPressOut={() => {
        press.value = withTiming(1, { duration: 100 });
      }}>
      <Animated.View style={[styles.chip, { borderColor: tint }, pressed]}>
        {face}
        {icon != null && <View style={styles.icon}>{icon}</View>}
        <Text style={[styles.label, { color: text }]} numberOfLines={1}>
          {label}
        </Text>
      </Animated.View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  chip: {
    height: HEIGHT,
    paddingHorizontal: 14,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    borderRadius: HEIGHT / 2,
    overflow: 'hidden',
  },
  pill: {
    borderRadius: HEIGHT / 2,
  },
  border: {
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.25)',
  },
  /** The glass's top edge catching the light. */
  highlight: {
    position: 'absolute',
    top: 0,
    left: HEIGHT / 2,
    right: HEIGHT / 2,
    height: 1,
    backgroundColor: 'rgba(255,255,255,0.4)',
  },
  icon: {
    width: 14,
    height: 14,
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    fontSize: 14,
    fontFamily: fonts.semibold,
    letterSpacing: -0.1,
  },
});
