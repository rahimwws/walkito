import { memo, useState } from 'react';
import { StyleSheet, Text, View, type StyleProp, type ViewStyle } from 'react-native';
import Animated, { useAnimatedStyle, type SharedValue } from 'react-native-reanimated';

import { accents, fonts, meterColors, palette } from '@/shared/config';
import { useT } from '@/shared/lib/i18n';
import { useColorScheme } from '@/shared/lib/theme';
import { DeltaLabel } from '@/shared/ui/meter';

import { useCountUp } from '../model/use-count-up';

const RADIUS = 28;

/** The ruler. Enough ticks to read as a scale rather than as a row of bars. */
const TICKS = 48;
const TICK_WIDTH = 2;
/** Tick heights at the ends of the ruler and at its swell. */
const TICK_MIN = 7;
const TICK_MAX = 17;

/** The marker standing on the ruler, and the bubble above it. */
const MARKER_WIDTH = 4;
const MARKER_HEIGHT = 24;
const BUBBLE_SLOT = 64;
const BUBBLE_GAP = 6;

/**
 * How far the swell reaches, as a share of the ruler.
 *
 * Emphasis, not distribution — the ruler rises around wherever the marker is
 * standing, so the eye lands on the value. Worth saying plainly because a
 * curve on a scale usually means "here is where everyone else falls", and this
 * one does not: it carries no population data and moves with the value.
 */
const SWELL = 0.3;

export type PerformanceCardProps = {
  /** Names the card. Defaults to the translated "Performance" — a default
   * parameter cannot, because the value comes from a hook. */
  label?: string;
  /** Where the marker stands. */
  value: number;
  /** Top of the scale. `value / max` is the marker's position. */
  max: number;
  /** Signed change since the last measurement, as a percentage. */
  delta?: number;
  /** Names for the ruler, left to right. Each sits under its own share of it. */
  bands: readonly string[];
  /** Decimals on the number in the bubble. */
  precision?: number;
  style?: StyleProp<ViewStyle>;
};

/**
 * A value on a named scale, with the change since it was last measured.
 *
 * The marker keeps its accent at every position. A scale that ran from red at
 * "Very Low" to green at "High" would be the app telling a user their body is
 * failing, which is the one thing the colour rule exists to prevent — the band
 * words already say where the number falls, and they say it without shouting.
 *
 * Everything that moves when the value changes moves off one shared clock: the
 * marker slides, the swell travels with it, and the bubble counts. Animating
 * the marker alone would drag it out from under its own hill.
 */
export function PerformanceCard({
  label,
  value,
  max,
  delta,
  bands,
  precision = 1,
  style,
}: PerformanceCardProps) {
  const scheme = useColorScheme();
  const colors = palette[scheme];
  const meter = meterColors[scheme];
  const accent = accents[scheme].teal;
  const t = useT();

  const title = label ?? t('progress.performance');

  /** Ruler width, measured — the marker has to land on a tick centre, and tick
   * centres are only knowable once `space-between` has done its work. */
  const [rulerWidth, setRulerWidth] = useState(0);

  const target = max > 0 ? Math.max(0, Math.min(value / max, 1)) : 0;
  const fraction = useCountUp(target, 4).value;
  const bubble = useCountUp(value, precision).display;
  const shownDelta = useCountUp(delta ?? 0).display;

  // Tick centres run from half a tick in on the left to half a tick in on the
  // right, which is the span `space-between` actually distributes across.
  const span = Math.max(rulerWidth - TICK_WIDTH, 0);
  const slide = useAnimatedStyle(() => ({
    transform: [{ translateX: TICK_WIDTH / 2 + span * fraction.value }],
  }));

  /**
   * Which band the marker is standing over.
   *
   * Read off the same geometry the words are laid out with — each band is a
   * `flex: 1` share of the ruler — rather than from a second table that could
   * drift out of step with them. It names what is already on screen; it does
   * not add a judgement the card was not already making.
   */
  const band =
    bands.length > 0
      ? bands[Math.min(Math.floor(target * bands.length), bands.length - 1)]
      : null;

  /** The reading, said the way the card is laid out: the figure, the top of
   * the scale, and the word the marker is standing under. Two whole sentences
   * rather than one with the band appended, so a language that puts the word
   * in front of the figures can write it that way. */
  const spoken =
    band != null
      ? t('progress.performanceA11yBand', { value: value.toFixed(precision), max, band })
      : t('progress.performanceA11y', { value: value.toFixed(precision), max });

  return (
    <View style={[styles.card, { backgroundColor: colors.card }, style]}>
      <View style={styles.header}>
        <Text style={[styles.label, { color: colors.foreground }]}>{title}</Text>
        {delta != null && <DeltaLabel delta={shownDelta} suffix="%" fontSize={14} />}
      </View>

      {/* Forty-eight ticks, a bubble and a marker are one reading of one
          number, so they answer as one element. The value is the target rather
          than the counting copy, for the same reason the ring's is. */}
      <View
        accessible
        accessibilityRole="progressbar"
        accessibilityLabel={title}
        accessibilityValue={{
          min: 0,
          max,
          now: value,
          text: spoken,
        }}
        style={styles.gauge}>
        {/* A fixed-width slot centred on the marker, so the bubble centres
            itself inside it however wide its number happens to be — no second
            measurement pass just to offset by half a label. Translated rather
            than positioned: `left` cannot animate on the UI thread. */}
        {rulerWidth > 0 && (
          <Animated.View style={[styles.bubbleSlot, slide]}>
            <View style={[styles.bubble, { backgroundColor: meter.track }]}>
              <Text style={[styles.bubbleText, { color: meter.ink }]}>
                {bubble.toFixed(precision)}
              </Text>
            </View>
            {/* `track`, not `iconTile`: iconTile is #F2F2F5 on a #FFFFFF card,
                which is a chip you cannot see on the one scheme that needs it
                most. `track` is defined as contrast against the surface, so it
                holds up both ways.
                A stub of a tail. Without it the number floats above the ruler
                and has to be inferred onto the marker; with it the pair reads
                as one object pointing at one tick. */}
            <View style={[styles.tail, { backgroundColor: meter.track }]} />
          </Animated.View>
        )}

        <View style={styles.ruler} onLayout={(e) => setRulerWidth(e.nativeEvent.layout.width)}>
          {Array.from({ length: TICKS }, (_, i) => (
            <Tick key={i} at={i / (TICKS - 1)} fraction={fraction} color={meter.track} />
          ))}

          {rulerWidth > 0 && (
            <Animated.View
              pointerEvents="none"
              style={[styles.marker, { backgroundColor: accent.fill }, slide]}
            />
          )}
        </View>

        <View style={styles.bands}>
          {bands.map((band) => (
            <Text key={band} style={[styles.band, { color: meter.label }]}>
              {band}
            </Text>
          ))}
        </View>
      </View>
    </View>
  );
}

/**
 * One tick, which knows only where it sits and where the value is.
 *
 * Its own component because a hook cannot be called from inside a `map`, and
 * its own animated style because the alternative — recomputing 48 heights in
 * React on every frame of the travel — is 48 re-renders a frame for what is
 * ultimately one number per tick.
 */
const Tick = memo(function Tick({
  at,
  fraction,
  color,
}: {
  /** Where this tick sits along the ruler, 0–1. */
  at: number;
  fraction: SharedValue<number>;
  color: string;
}) {
  const grow = useAnimatedStyle(() => {
    const offset = (at - fraction.value) / SWELL;
    return { height: TICK_MIN + (TICK_MAX - TICK_MIN) * Math.exp(-offset * offset) };
  });

  return <Animated.View style={[styles.tick, { backgroundColor: color }, grow]} />;
});

const styles = StyleSheet.create({
  card: {
    borderRadius: RADIUS,
    borderCurve: 'continuous',
    padding: 18,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  label: {
    fontSize: 17,
    fontFamily: fonts.semibold,
    letterSpacing: -0.2,
  },
  gauge: {
    marginTop: 10,
  },
  bubbleSlot: {
    position: 'absolute',
    top: 0,
    // Anchored at the ruler's origin and carried right by the transform, with
    // half its own width taken off so the slot centres on the tick.
    left: -BUBBLE_SLOT / 2,
    width: BUBBLE_SLOT,
    alignItems: 'center',
  },
  bubble: {
    borderRadius: 9,
    borderCurve: 'continuous',
    paddingHorizontal: 9,
    paddingVertical: 3,
  },
  bubbleText: {
    fontSize: 14,
    fontFamily: fonts.semibold,
  },
  tail: {
    width: 9,
    height: 7,
    marginTop: -1,
    borderBottomLeftRadius: 3,
    borderBottomRightRadius: 3,
  },
  ruler: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: MARKER_HEIGHT,
    // Clears the bubble sitting above it.
    marginTop: 26 + BUBBLE_GAP,
  },
  tick: {
    width: TICK_WIDTH,
    borderRadius: TICK_WIDTH / 2,
  },
  marker: {
    position: 'absolute',
    left: -MARKER_WIDTH / 2,
    width: MARKER_WIDTH,
    height: MARKER_HEIGHT,
    borderRadius: MARKER_WIDTH / 2,
  },
  bands: {
    flexDirection: 'row',
    marginTop: 10,
  },
  band: {
    flex: 1,
    fontSize: 13,
    fontFamily: fonts.semibold,
    textAlign: 'center',
  },
});
