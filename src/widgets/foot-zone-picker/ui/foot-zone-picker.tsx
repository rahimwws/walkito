import * as Haptics from 'expo-haptics';
import { memo, useEffect } from 'react';
import { Image, Pressable, StyleSheet, View, type DimensionValue } from 'react-native';
import Animated, {
  ReduceMotion,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withSequence,
  withTiming,
} from 'react-native-reanimated';

import { ZONE_LABEL, type FootZone } from '@/entities/pain-map';

const BASE = require('@assets/foot-zones/base.png');

/**
 * One transparent glow per zone, stacked over the base.
 *
 * Overlays rather than drawn shapes: the zones follow the anatomy of the
 * photograph, and an SVG path good enough to look right here would be a second
 * drawing to keep in step with the first.
 */
const GLOW: Readonly<Record<FootZone, number>> = {
  heel: require('@assets/foot-zones/overlays/heel.png'),
  achilles: require('@assets/foot-zones/overlays/achilles.png'),
  inner_ankle: require('@assets/foot-zones/overlays/inner_ankle.png'),
  arch: require('@assets/foot-zones/overlays/arch.png'),
  ball: require('@assets/foot-zones/overlays/ball.png'),
  toes: require('@assets/foot-zones/overlays/toes.png'),
};

type Rect = {
  left: DimensionValue;
  top: DimensionValue;
  width: DimensionValue;
  height: DimensionValue;
};

/**
 * Tap areas, as a share of the image.
 *
 * Deliberately larger than the glows they select, so a zone as narrow as the
 * Achilles is still a comfortable target. Percentages rather than points, so a
 * higher-resolution base image needs no change here.
 *
 * Order matters: later entries sit on top where the areas overlap.
 */
const HIT: readonly [FootZone, Rect][] = [
  ['arch', { left: '30%', top: '66%', width: '21%', height: '18%' }],
  ['ball', { left: '51%', top: '66%', width: '11%', height: '18%' }],
  ['toes', { left: '62%', top: '64%', width: '14%', height: '18%' }],
  ['heel', { left: '13%', top: '62%', width: '17%', height: '24%' }],
  ['inner_ankle', { left: '28%', top: '41%', width: '13%', height: '18%' }],
  ['achilles', { left: '14%', top: '28%', width: '12%', height: '34%' }],
];

export type FootZonePickerProps = {
  selected: readonly FootZone[];
  /** Omit for a display-only diagram — a retest summary, say. */
  onToggle?: (zone: FootZone) => void;
  /** True draws the left foot. Mirrored in code; there are no left-foot assets. */
  mirror?: boolean;
  pulse?: boolean;
};

/**
 * The foot, and where it hurts.
 *
 * Tapping an area fades its glow in. Multi-select, because feet rarely hurt in
 * exactly one place and forcing a single answer would make the user pick which
 * of their symptoms to lie about.
 *
 * Every hit area is a labelled checkbox to VoiceOver. Regions of an image are
 * invisible to a screen reader otherwise, which would leave this screen as a
 * picture with no controls on it at all.
 */
export function FootZonePicker({
  selected,
  onToggle,
  mirror = false,
  pulse = true,
}: FootZonePickerProps) {
  return (
    <View
      accessible={false}
      accessibilityLabel="Foot diagram. Tap the areas that hurt."
      style={[styles.box, mirror && styles.mirrored]}>
      <Image source={BASE} style={StyleSheet.absoluteFill} resizeMode="contain" />

      {(Object.keys(GLOW) as FootZone[]).map((zone) => (
        <Glow key={zone} source={GLOW[zone]} on={selected.includes(zone)} pulse={pulse} />
      ))}

      {onToggle != null &&
        HIT.map(([zone, rect]) => (
          <Pressable
            key={zone}
            accessibilityRole="checkbox"
            accessibilityLabel={ZONE_LABEL[zone]}
            accessibilityState={{ checked: selected.includes(zone) }}
            onPress={() => {
              Haptics.selectionAsync();
              onToggle(zone);
            }}
            hitSlop={4}
            style={[styles.hit, rect]}
          />
        ))}
    </View>
  );
}

/**
 * One zone's glow.
 *
 * Its own component because a hook cannot be called from inside a `map`, and
 * its own loop because the pulse has to belong to the zone rather than to the
 * picker — four selected zones breathe together only if each one is told to.
 */
const Glow = memo(function Glow({
  source,
  on,
  pulse,
}: {
  source: number;
  on: boolean;
  pulse: boolean;
}) {
  const opacity = useSharedValue(0);

  useEffect(() => {
    if (!on) {
      opacity.value = withTiming(0, { duration: 200, reduceMotion: ReduceMotion.System });
      return;
    }
    opacity.value = pulse
      ? withSequence(
          withTiming(1, { duration: 250, reduceMotion: ReduceMotion.System }),
          withRepeat(
            withTiming(0.65, { duration: 900, reduceMotion: ReduceMotion.System }),
            -1,
            true,
          ),
        )
      : withTiming(1, { duration: 250, reduceMotion: ReduceMotion.System });
  }, [on, pulse, opacity]);

  const style = useAnimatedStyle(() => ({ opacity: opacity.value }));

  return (
    <Animated.Image
      source={source}
      // Nothing keeps this from intercepting taps, and nothing needs to: the
      // hit areas are rendered after the glows and therefore sit above them.
      resizeMode="contain"
      style={[StyleSheet.absoluteFill, style]}
    />
  );
});

const styles = StyleSheet.create({
  box: { width: '100%', aspectRatio: 704 / 527 },
  mirrored: { transform: [{ scaleX: -1 }] },
  hit: { position: 'absolute' },
});
