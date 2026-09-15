import * as Haptics from 'expo-haptics';
import { memo, useCallback, useMemo, useRef, useState } from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
  type LayoutChangeEvent,
  type NativeScrollEvent,
  type NativeSyntheticEvent,
} from 'react-native';

import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { fonts, meterColors, palette } from '@/shared/config';
import { useColorScheme } from '@/shared/lib/theme';
import { PRIMARY_BUTTON_HEIGHT } from '@/shared/ui/primary-button';
import { SegmentedControl } from '@/shared/ui/segmented-control';

import { LEGS_ASPECT, LEGS_PHOTOS } from '../config/legs-photos';

/** Distance between two adjacent ticks — one half-size apart. */
const TICK_GAP = 16;
const TICK_W = 2;

/** Every tick is the same height and the same colour. An earlier version gave
 * whole sizes a taller tick and a printed number; it read as a chart axis
 * rather than a ruler, and the numbers fought the readout for attention. The
 * scale is texture — the value above it is the thing being read. */
const TICK_H = 32;
const RULER_H = 52;

const NEEDLE_W = 4;
const NEEDLE_H = 50;

/** Mirrors `styles.bar.paddingTop` on the page, which is the only part of the
 * CTA bar's height this component cannot read from a constant. */
const BAR_PAD = -80;

/** Tilt on the figure, straight off the Figma frame. Swings the raised leg up
 * towards the ruler instead of letting it hang horizontally out of frame. */
const TILT = '-43.64deg';

export type SizeUnit = 'eu' | 'us';

/** EU runs 35–48, US 4–15. Both in half steps, which is how shoes are sold. */
const RANGES: Record<SizeUnit, { min: number; max: number; label: string }> = {
  eu: { min: 35, max: 48, label: 'EU' },
  us: { min: 4, max: 15, label: 'US' },
};

const UNITS: readonly SizeUnit[] = ['eu', 'us'];
const SEGMENTS = UNITS.map((u) => RANGES[u].label);

export type SizeStepProps = {
  unit: SizeUnit;
  value: number;
  /** Which body the photograph shows. Falls back to female only because
   * something has to be first; the sex step runs before this one. */
  sex: string | null;
  onChangeUnit: (next: SizeUnit) => void;
  onChangeValue: (next: number) => void;
};

/**
 * Shoe size, on a ruler you drag.
 *
 * A ruler rather than a wheel or a text field. Shoe size is a number people
 * know but do not think of as a number — they recognise it when they see it —
 * and a scale you push past neighbouring sizes lets you recognise it. A
 * keyboard would ask them to recall it instead.
 *
 * The scroller is the input: no thumb to drag, no separate hit target. The
 * value under the fixed needle is the answer, which is why the reading above
 * it can be pinned and enormous — it never has to move out of a finger's way.
 *
 * The readout is plain text. It used to be `AnimatedNumber`, which hosts a
 * SwiftUI view per digit; re-driving that on every size crossed during a drag
 * stuttered the scroll badly enough to make the ruler feel broken.
 */
export function SizeStep({ unit, value, sex, onChangeUnit, onChangeValue }: SizeStepProps) {
  const scheme = useColorScheme();
  const colors = palette[scheme];
  const meter = meterColors[scheme];
  const { width } = useWindowDimensions();
  const insets = useSafeAreaInsets();

  const range = RANGES[unit];
  const lastValue = useRef(value);

  const offsetFor = useCallback((v: number) => (v - range.min) * 2 * TICK_GAP, [range.min]);

  const onScroll = useCallback(
    (e: NativeSyntheticEvent<NativeScrollEvent>) => {
      const raw = e.nativeEvent.contentOffset.x / (TICK_GAP * 2) + range.min;
      const snapped = Math.min(Math.max(Math.round(raw * 2) / 2, range.min), range.max);
      // Guarded so a drag re-renders once per size crossed rather than once
      // per frame — the ticks themselves are memoized, so this is the only
      // work the gesture does on the JS thread.
      if (snapped === lastValue.current) return;
      lastValue.current = snapped;
      // A tick per size crossed — the same feedback a physical dial gives, and
      // the reason this reads as a scale rather than a scroll view.
      Haptics.selectionAsync();
      onChangeValue(snapped);
    },
    [range, onChangeValue],
  );

  const photo = LEGS_PHOTOS[sex ?? 'female'] ?? LEGS_PHOTOS.female;

  // Measured rather than expressed as a percentage: an absolutely positioned
  // image sized by `height: '104%'` + `aspectRatio` collapses to nothing in
  // Yoga, so the figure has to be given real numbers.
  const [stage, setStage] = useState({ width: 0, height: 0 });
  const onStage = useCallback((e: LayoutChangeEvent) => {
    const { width: w, height: h } = e.nativeEvent.layout;
    setStage((prev) => (prev.width === w && prev.height === h ? prev : { width: w, height: h }));
  }, []);

  // The gap between the bottom of the stage and the bottom of the screen —
  // the CTA bar the page draws as a sibling. She hangs down through it so her
  // foot meets the edge of the display; stopping at the stage boundary left a
  // band of empty background under her and read as a badly cropped photo
  // rather than as someone standing at the bottom of the screen.
  const drop = BAR_PAD + PRIMARY_BUTTON_HEIGHT + Math.max(insets.bottom, BAR_PAD);

  const figure = useMemo(() => {
    if (stage.height <= 0) return null;
    const height = stage.height + drop;
    const width = height * LEGS_ASPECT;
    // Height-driven so she fills whatever the ruler leaves, but never wider
    // than the screen: overflowing sideways would cut the sneaker, which is
    // the one part of the photograph this screen is actually about.
    return width <= stage.width
      ? { width, height, bottom: -drop }
      : { width: stage.width, height: stage.width / LEGS_ASPECT, bottom: -drop };
  }, [stage, drop]);

  return (
    <View style={styles.wrap}>
      <View style={styles.readout}>
        <Text style={[styles.value, { color: colors.foreground }]}>{formatSize(value)}</Text>
        <Text style={[styles.unit, { color: meter.label }]}>{range.label}</Text>
      </View>

      <View style={styles.rulerWrap}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          decelerationRate="fast"
          snapToInterval={TICK_GAP}
          contentOffset={{ x: offsetFor(value), y: 0 }}
          onScroll={onScroll}
          scrollEventThrottle={16}
          // Half the viewport of padding at each end, so the first and last
          // tick can still reach the needle.
          contentContainerStyle={{ paddingHorizontal: width / 2 - TICK_W / 2 }}>
          <Ticks min={range.min} max={range.max} color={meter.track} />
        </ScrollView>

        {/* The needle never moves; the scale moves under it. */}
        <View
          pointerEvents="none"
          style={[styles.needle, { backgroundColor: colors.foreground }]}
        />
      </View>

      <SegmentedControl
        style={styles.units}
        segments={SEGMENTS}
        selectedIndex={UNITS.indexOf(unit)}
        onChange={(index) => {
          const next = UNITS[index];
          if (next == null || next === unit) return;
          Haptics.selectionAsync();
          onChangeUnit(next);
        }}
      />

      {/* Runs past its own bounds and behind the CTA rather than sitting in a
          box — she is scenery, and a framed photograph would read as content
          the user is meant to do something with. Pinned right so her raised
          leg reaches back under the scale, which is what ties the photograph
          to the control. */}
      <View style={styles.stage} onLayout={onStage} pointerEvents="none">
        {figure != null && (
          <Image
            source={photo}
            style={[styles.legs, figure]}
            resizeMode="contain"
          />
        )}
      </View>
    </View>
  );
}

/** "42" or "42.5" — never "42.0". */
function formatSize(v: number): string {
  return Number.isInteger(v) ? String(v) : v.toFixed(1);
}

/**
 * The scale itself.
 *
 * Memoized on the range rather than the value: the ticks are identical at
 * every size, so re-rendering thirty of them each time the reading changes is
 * pure waste — and it is waste that lands mid-gesture.
 */
const Ticks = memo(function Ticks({
  min,
  max,
  color,
}: {
  min: number;
  max: number;
  color: string;
}) {
  const ticks = useMemo(() => {
    const out: number[] = [];
    for (let v = min; v <= max; v += 0.5) out.push(v);
    return out;
  }, [min, max]);

  return (
    <View style={styles.scale}>
      {ticks.map((tick) => (
        <View key={tick} style={styles.tickSlot}>
          <View style={[styles.tick, { backgroundColor: color }]} />
        </View>
      ))}
    </View>
  );
});

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
    alignItems: 'center',
    // Nothing above it on this screen, so the reading needs its own air.
    paddingTop: 36,
  },
  readout: {
    flexDirection: 'row',
    alignItems: 'baseline',
    gap: 7,
  },
  value: {
    fontSize: 54,
    lineHeight: 60,
    fontFamily: fonts.heavy,
    letterSpacing: -1.2,
  },
  unit: {
    fontSize: 18,
    fontFamily: fonts.semibold,
  },
  rulerWrap: {
    height: RULER_H,
    marginTop: 10,
    alignSelf: 'stretch',
    // Out to the screen edges: a ruler that stops short of them reads as a
    // widget on the page rather than a scale the page is sitting on.
    marginHorizontal: -24,
    justifyContent: 'center',
  },
  scale: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  tickSlot: {
    width: TICK_GAP,
    alignItems: 'center',
  },
  tick: {
    width: TICK_W,
    height: TICK_H,
    borderRadius: TICK_W,
  },
  needle: {
    position: 'absolute',
    alignSelf: 'center',
    width: NEEDLE_W,
    height: NEEDLE_H,
    borderRadius: NEEDLE_W,
  },
  units: {
    marginTop: 22,
    width: 190,
  },
  stage: {
    flex: 1,
    alignSelf: 'stretch',
    marginHorizontal: -24,
    marginTop: 8,
    // Deliberately unclipped: the figure hangs below this box, through the
    // CTA bar, to the bottom of the display.
    overflow: 'visible',
  },
  legs: {
    position: 'absolute',
    right: 0,
    transform: [{ rotate: TILT }],
  },
});
