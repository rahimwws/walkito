import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Easing, useSharedValue, withDelay, withTiming } from 'react-native-reanimated';

import { fonts, meterColors, palette } from '@/shared/config';
import { useColorScheme } from '@/shared/lib/theme';
import { AnimatedNumber } from '@/shared/ui/animated-number';
import { DeltaLabel } from '@/shared/ui/meter';
import { TickGauge } from '@/shared/ui/tick-gauge';

/** 270° segmented gauge: opening at the bottom, filling clockwise from the
 * bottom-left tick, inked fill over a 22%-alpha track. */
const TICK_COUNT = 20;
const START_ANGLE = 135;
const SWEEP = 270;
const OUTER_RADIUS = 120;
const TICK_LENGTH = 30;
const TICK_WIDTH = 9;

const FILL_DELAY_MS = 350;
const FILL_DURATION_MS = 1100;

const TRACK = {
  light: 'rgba(17,17,20,0.22)',
  dark: 'rgba(255,255,255,0.22)',
} as const;

export type ScoreGaugeProps = {
  /** 0–100. */
  score: number;
  /** Change vs a comparison basis; omit when there is nothing to compare to. */
  delta?: number;
  /** Wording after the delta number, e.g. "vs avg". Keep it short — the
   * gauge's hollow is only ~150px wide, and a longer phrase overflows onto
   * the ticks once the delta reaches two digits. */
  deltaSuffix?: string;
  /** Line under the number. Typically a band word for the score. */
  caption?: string;
};

/**
 * A score in a radial tick gauge, reading `NN /100`.
 *
 * The ticks fill and the digits roll together: the fill is a Reanimated
 * timing, and the number is handed its final value on the same delay so
 * iOS's `numericText` transition rolls the digits over the same window.
 */
export function ScoreGauge({ score, delta, deltaSuffix = 'vs avg', caption }: ScoreGaugeProps) {
  const scheme = useColorScheme() === 'dark' ? 'dark' : 'light';
  const foreground = palette[scheme].foreground;
  const theme = meterColors[scheme];

  const clamped = Math.max(0, Math.min(score, 100));
  const progress = useSharedValue(0);
  // The number counts up in sync with the tick fill (numericText rolls the
  // digits natively).
  const [displayScore, setDisplayScore] = useState(0);

  useEffect(() => {
    progress.value = withDelay(
      FILL_DELAY_MS,
      withTiming(clamped / 100, {
        duration: FILL_DURATION_MS,
        easing: Easing.out(Easing.cubic),
      }),
    );
    const timeout = setTimeout(() => setDisplayScore(clamped), FILL_DELAY_MS);
    return () => clearTimeout(timeout);
  }, [clamped, progress]);

  return (
    <TickGauge
      tickCount={TICK_COUNT}
      startAngle={START_ANGLE}
      sweep={SWEEP}
      outerRadius={OUTER_RADIUS}
      tickLength={TICK_LENGTH}
      tickWidth={TICK_WIDTH}
      progress={progress}
      fill={foreground}
      track={TRACK[scheme]}
      style={styles.gauge}>
      {/* Fixed-height boxes: SwiftUI Hosts don't self-size reliably in flex, and
          `alignItems: 'baseline'` can't reach the text inside one — so both
          columns are the same height and bottom-aligned instead, with the unit
          padded up onto the digits' baseline. The rolling number carries the
          value; "/100" is a static sibling so it doesn't animate with the
          digits. */}
      <View style={styles.scoreRow}>
        <View style={styles.scoreBox}>
          <AnimatedNumber
            text={`${displayScore}`}
            value={displayScore}
            color={foreground}
            fontSize={56}
            fontFamily={fonts.heavy}
            weight="heavy"
            duration={0.9}
          />
        </View>
        <View style={styles.maxBox}>
          <Text style={[styles.max, { color: theme.unit }]}>/100</Text>
        </View>
      </View>
      {caption != null && <Text style={[styles.band, { color: theme.label }]}>{caption}</Text>}
      {delta != null && delta !== 0 && (
        <View
          style={[
            styles.deltaPill,
            { backgroundColor: delta > 0 ? theme.positiveBg : 'transparent' },
          ]}>
          <DeltaLabel delta={delta} suffix={deltaSuffix} />
        </View>
      )}
    </TickGauge>
  );
}

const styles = StyleSheet.create({
  gauge: {
    alignSelf: 'center',
  },
  scoreRow: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    gap: 3,
  },
  scoreBox: {
    height: 64,
    justifyContent: 'center',
  },
  maxBox: {
    height: 64,
    justifyContent: 'flex-end',
    // Lifts "/100" off the box floor onto the 56px digits' baseline.
    paddingBottom: 11,
  },
  max: {
    fontSize: 20,
    fontFamily: fonts.semibold,
  },
  band: {
    fontSize: 15,
    fontFamily: fonts.semibold,
    marginTop: 2,
  },
  deltaPill: {
    marginTop: 6,
    paddingVertical: 5,
    paddingHorizontal: 11,
    borderRadius: 50,
    borderCurve: 'continuous',
  },
});
