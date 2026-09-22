import { StyleSheet, Text, View } from 'react-native';
import Animated, { useAnimatedProps } from 'react-native-reanimated';
import Svg, { Circle } from 'react-native-svg';

import { accents, fonts, meterColors, palette } from '@/shared/config';
import { useT } from '@/shared/lib/i18n';
import { useColorScheme } from '@/shared/lib/theme';

import { useCountUp } from '../model/use-count-up';

/** The arc is the only part of the ring that moves, so it is the only part
 * that pays for an animated component. */
const AnimatedCircle = Animated.createAnimatedComponent(Circle);

const RADIUS = 28;

/** The ring: outside diameter and how heavy the stroke is. */
const RING = 88;
const RING_WIDTH = 8;

/**
 * The wash across the card, in the app's own light.
 *
 * The same three hues `Glow` uses — violet, indigo — so the card reads as lit
 * by the thing already behind the screen rather than as a differently-coloured
 * panel. Scoped to the card instead of the window: the blooms are positioned in
 * percentages of whatever box they are painted on, so the same strings that
 * wash a whole screen wash a 100pt card just as well.
 *
 * Light mode runs at roughly two thirds. The alphas that read as light on a
 * near-black page turn into a stain on a white card.
 */
const WASH = {
  light: [
    'radial-gradient(125% 150% at 6% -12%, rgba(139,92,246,0.20) 0%, rgba(139,92,246,0) 70%)',
    'radial-gradient(95% 130% at 92% 115%, rgba(99,102,241,0.13) 0%, rgba(99,102,241,0) 72%)',
  ],
  dark: [
    'radial-gradient(125% 150% at 6% -12%, rgba(139,92,246,0.30) 0%, rgba(139,92,246,0) 70%)',
    'radial-gradient(95% 130% at 92% 115%, rgba(99,102,241,0.20) 0%, rgba(99,102,241,0) 72%)',
  ],
} as const;

export type ScoreCardProps = {
  /** 0–100. Drives the number and how far the ring closes. */
  score: number;
  /** Word under the number. Defaults to the translated "Score" — a default
   * parameter cannot, because the value comes from a hook. */
  scoreLabel?: string;
  title: string;
  /** The line that states the streak. */
  headline: string;
  /** The quieter line under it. */
  note: string;
};

/**
 * The summary card at the top of the path: a score, and what it means.
 *
 * The ring is violet at every value. That is the rule the rest of the app runs
 * on — an accent says *which* metric a meter belongs to, never how good the
 * number is — and it is why this card cannot congratulate you in green and
 * scold you in red. The number itself is ink for the same reason.
 */
export function ScoreCard({ score, scoreLabel, title, headline, note }: ScoreCardProps) {
  const scheme = useColorScheme();
  const colors = palette[scheme];
  const meter = meterColors[scheme];
  const accent = accents[scheme].violet;
  const t = useT();

  const label = scoreLabel ?? t('progress.score');

  const r = (RING - RING_WIDTH) / 2;
  const circumference = 2 * Math.PI * r;

  // The arc and the digits run off one clock, so they arrive together. Reading
  // "88" while the ring is still three quarters round is the tell that a card
  // is animating two things instead of showing one.
  const settled = Math.max(0, Math.min(score, 100));
  const { value, display } = useCountUp(settled);
  const arc = useAnimatedProps(() => ({
    strokeDashoffset: circumference * (1 - value.value / 100),
  }));

  return (
    <View style={[styles.card, { backgroundColor: colors.card }]}>
      {/* An absolute layer rather than the card's own background, so the wash
          is clipped by the same smoothed corner the card is cut with. */}
      <View
        pointerEvents="none"
        style={[
          StyleSheet.absoluteFill,
          styles.shape,
          { experimental_backgroundImage: WASH[scheme].join(', ') },
        ]}
      />

      <View style={styles.body}>
        {/* The ring and the digits inside it are one reading, so they are one
            element. The value is the target rather than the counting copy: a
            figure that is still travelling is the wrong number to say out
            loud, and it would be re-announced on every step of the count. */}
        <View
          accessible
          accessibilityRole="progressbar"
          accessibilityLabel={label}
          accessibilityValue={{
            min: 0,
            max: 100,
            now: Math.round(settled),
            text: t('progress.scoreA11y', { score: Math.round(settled) }),
          }}
          style={{ width: RING, height: RING }}>
          <Svg width={RING} height={RING}>
            <Circle
              cx={RING / 2}
              cy={RING / 2}
              r={r}
              stroke={meter.track}
              strokeWidth={RING_WIDTH}
              fill="none"
            />
            <AnimatedCircle
              cx={RING / 2}
              cy={RING / 2}
              r={r}
              stroke={accent.fill}
              strokeWidth={RING_WIDTH}
              strokeLinecap="round"
              strokeDasharray={circumference}
              animatedProps={arc}
              fill="none"
              // Start at twelve o'clock. SVG angles run from three, so the
              // whole circle is turned back a quarter.
              originX={RING / 2}
              originY={RING / 2}
              rotation={-90}
            />
          </Svg>

          <View style={styles.hollow} pointerEvents="none">
            <Text style={[styles.score, { color: meter.ink }]}>{display}</Text>
            <Text style={[styles.scoreLabel, { color: meter.label }]}>{label}</Text>
          </View>
        </View>

        <View style={styles.copy}>
          <Text accessibilityRole="header" style={[styles.title, { color: colors.foreground }]}>
            {title}
          </Text>
          <Text style={[styles.headline, { color: colors.foreground }]}>{headline}</Text>
          <Text style={[styles.note, { color: meter.caption }]}>{note}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: RADIUS,
    // Corner smoothing — the squircle iOS cuts its own panels with. A plain
    // circular radius at this size reads as visibly rounder at the tangent.
    borderCurve: 'continuous',
    overflow: 'hidden',
  },
  /** The wash layer's own shape, matching the card's. */
  shape: {
    borderRadius: RADIUS,
    borderCurve: 'continuous',
  },
  body: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 18,
    padding: 18,
  },
  hollow: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  score: {
    fontSize: 26,
    fontFamily: fonts.bold,
    letterSpacing: -0.6,
  },
  scoreLabel: {
    fontSize: 12,
    fontFamily: fonts.medium,
    marginTop: -2,
  },
  copy: {
    flex: 1,
    gap: 2,
  },
  title: {
    fontSize: 19,
    fontFamily: fonts.bold,
    letterSpacing: -0.4,
    marginBottom: 4,
  },
  headline: {
    fontSize: 15,
    fontFamily: fonts.semibold,
  },
  note: {
    fontSize: 15,
    fontFamily: fonts.regular,
    lineHeight: 20,
  },
});
