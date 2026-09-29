import type { ReactNode } from 'react';
import { StyleSheet, View } from 'react-native';
import Animated, { useAnimatedProps, type SharedValue } from 'react-native-reanimated';
import Svg, { Circle } from 'react-native-svg';

/** The arc is the only part that moves, so it is the only part that pays for
 * an animated component. */
const AnimatedCircle = Animated.createAnimatedComponent(Circle);

export type CountdownRingProps = {
  /** Outside diameter. */
  size: number;
  stroke: number;
  /** What is left of the window, 1 → 0. Driven on the UI thread by the owner. */
  left: SharedValue<number>;
  /** The test's accent: which test this is, never how it is going. */
  tone: { fill: string; track: string };
  children: ReactNode;
};

/**
 * The countdown, as a ring that empties.
 *
 * The number inside it is read on the JS thread off the wall clock; the ring
 * runs on the UI thread as one linear timing to zero over whatever is left.
 * Both start from the same instant, so they arrive together — and the ring
 * stays smooth on a frame the JS thread spends elsewhere.
 *
 * Starts at twelve o'clock and gives ground clockwise, like the face of every
 * kitchen timer.
 */
export function CountdownRing({ size, stroke, left, tone, children }: CountdownRingProps) {
  const r = (size - stroke) / 2;
  const circumference = 2 * Math.PI * r;
  const arc = useAnimatedProps(() => ({
    strokeDashoffset: circumference * (1 - Math.max(0, Math.min(1, left.value))),
  }));

  return (
    <View style={{ width: size, height: size }}>
      <Svg width={size} height={size} style={styles.turn}>
        <Circle cx={size / 2} cy={size / 2} r={r} stroke={tone.track} strokeWidth={stroke} fill="none" />
        <AnimatedCircle
          cx={size / 2}
          cy={size / 2}
          r={r}
          stroke={tone.fill}
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={`${circumference} ${circumference}`}
          fill="none"
          animatedProps={arc}
        />
      </Svg>
      <View style={styles.middle} pointerEvents="none">
        {children}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  /** Mirrored across the vertical so the arc starts at the top and gives way
   * clockwise; a plain -90° turn would have it give way anticlockwise. */
  turn: {
    transform: [{ rotate: '-90deg' }, { scaleY: -1 }],
  },
  middle: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
