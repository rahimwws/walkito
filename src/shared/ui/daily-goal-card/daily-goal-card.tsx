import { HugeiconsIcon, type IconSvgElement } from '@hugeicons/react-native';
import { GlassView, isLiquidGlassAvailable } from 'expo-glass-effect';
import * as Haptics from 'expo-haptics';
import { useEffect } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Easing, useSharedValue, withTiming } from 'react-native-reanimated';

import { fonts, palette } from '@/shared/config';
import { useColorScheme } from '@/shared/lib/theme';
import { AnimatedNumber } from '@/shared/ui/animated-number';
import { TickGauge } from '@/shared/ui/tick-gauge';

/** Radial tick gauge: exactly the BOTTOM half of a ring whose centre sits at
 * the top of the card, so the ticks fan downward around the text, which sits
 * in the hollow. Angles are screen-space degrees (0° = right, 90° = down);
 * the fill runs from the horizontal middle-left tick (180° = 0%) down across
 * the bottom to the horizontal middle-right tick (0° = 100%). */
const TICK_COUNT = 15;
const START_ANGLE = 180;
const SWEEP = -180;
const OUTER_RADIUS = 128;
const TICK_LENGTH = 34;
const TICK_WIDTH = 10;
const GAUGE_CENTER = (OUTER_RADIUS * 2 + TICK_WIDTH) / 2;
// Ring centre (≈ the "Daily Goal" caption) measured from the card's top edge —
// close enough that the gauge sits just below the container's top.
const CENTER_Y = 20;
const WINDOW_HEIGHT = 156;

const THEME = {
  light: {
    tick: '#111114',
    track: 'rgba(17,17,20,0.14)',
    glassTint: 'rgba(255,255,255,0.45)',
    solidFallback: 'rgba(244,244,246,0.96)',
    secondary: '#77777E',
    buttonTint: '#1C1C21',
    buttonSolid: '#1C1C21',
    buttonLabel: '#FFFFFF',
  },
  dark: {
    tick: '#FFFFFF',
    track: 'rgba(255,255,255,0.16)',
    glassTint: 'rgba(10,10,12,0.55)',
    solidFallback: 'rgba(26,26,30,0.96)',
    secondary: '#9E9EA6',
    buttonTint: '#F2F2F5',
    buttonSolid: '#F2F2F5',
    buttonLabel: '#111114',
  },
} as const;

export type DailyGoalCardProps = {
  /** Goal completion, 0–100. */
  percent: number;
  /** Caption sitting on the ring's centre line, above the percentage. */
  caption?: string;
  actionLabel?: string;
  /** Leading glyph in the action button. Omit for a label-only button. */
  actionIcon?: IconSvgElement;
  onAction: () => void;
};

export function DailyGoalCard({
  percent,
  caption = 'Daily Goal',
  actionLabel = 'Get Started',
  actionIcon,
  onAction,
}: DailyGoalCardProps) {
  const scheme = useColorScheme() === 'dark' ? 'dark' : 'light';
  const theme = THEME[scheme];
  const colors = palette[scheme];
  const hasGlass = isLiquidGlassAvailable();

  const clamped = Math.max(0, Math.min(percent, 100));
  const progress = useSharedValue(0);
  useEffect(() => {
    progress.value = withTiming(clamped / 100, {
      duration: 900,
      easing: Easing.out(Easing.cubic),
    });
  }, [clamped, progress]);

  const handlePress = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    onAction();
  };

  const buttonContent = (
    <>
      {actionIcon ? (
        <HugeiconsIcon icon={actionIcon} size={22} color={theme.buttonLabel} />
      ) : null}
      <Text style={[styles.buttonLabel, { color: theme.buttonLabel }]}>{actionLabel}</Text>
    </>
  );

  return (
    <View style={styles.card}>
      {/* The card's glass sits as an absolute sibling under the content, so the
          button's own GlassView below is never nested inside another glass
          effect (nested glass doesn't render on iOS 26). */}
      {hasGlass ? (
        <GlassView
          glassEffectStyle="regular"
          style={[StyleSheet.absoluteFill, styles.cardShape, { backgroundColor: theme.glassTint }]}
        />
      ) : (
        <View
          style={[
            StyleSheet.absoluteFill,
            styles.cardShape,
            { backgroundColor: theme.solidFallback },
          ]}
        />
      )}

      <View style={styles.gaugeWindow}>
        <TickGauge
          tickCount={TICK_COUNT}
          startAngle={START_ANGLE}
          sweep={SWEEP}
          outerRadius={OUTER_RADIUS}
          tickLength={TICK_LENGTH}
          tickWidth={TICK_WIDTH}
          progress={progress}
          fill={theme.tick}
          track={theme.track}
          style={{ position: 'absolute', top: CENTER_Y - GAUGE_CENTER, alignSelf: 'center' }}
        />
        <View style={styles.gaugeCenter} pointerEvents="none">
          <Text style={[styles.caption, { color: theme.secondary }]}>{caption}</Text>
          <AnimatedNumber
            text={`${clamped}%`}
            value={clamped}
            color={colors.foreground}
            fontSize={38}
            fontFamily={fonts.bold}
            weight="bold"
            duration={0.6}
          />
        </View>
      </View>

      <Pressable onPress={handlePress} style={({ pressed }) => pressed && { opacity: 0.85 }}>
        {hasGlass ? (
          <GlassView
            glassEffectStyle="regular"
            isInteractive
            tintColor={theme.buttonTint}
            style={styles.button}>
            {buttonContent}
          </GlassView>
        ) : (
          <View style={[styles.button, { backgroundColor: theme.buttonSolid }]}>
            {buttonContent}
          </View>
        )}
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 20,
    // The gauge window sits flush with the top edge; the card's rounded clip
    // is what cuts the ring's top arc — part of the design.
    paddingTop: 0,
    borderRadius: 42,
    borderCurve: 'continuous',
    overflow: 'hidden',
  },
  cardShape: {
    borderRadius: 42,
    borderCurve: 'continuous',
  },
  gaugeWindow: {
    height: WINDOW_HEIGHT,
  },
  gaugeCenter: {
    position: 'absolute',
    // Anchors the caption on the ring's centre; the percent hangs below it,
    // inside the ring's hollow.
    top: CENTER_Y -4,
    left: 0,
    right: 0,
    alignItems: 'center',
    gap: 2,
  },
  caption: {
    fontSize: 15,
    fontFamily: fonts.medium,
  },
  button: {
    height: 60,
    borderRadius: 30,
    borderCurve: 'continuous',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    marginTop: 16,
  },
  buttonLabel: {
    fontSize: 18,
    fontFamily: fonts.semibold,
  },
});
