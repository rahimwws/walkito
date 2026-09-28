import { useEffect, useState } from 'react';
import { Pressable, StyleSheet, View, type LayoutChangeEvent } from 'react-native';
import Animated, {
  interpolateColor,
  useAnimatedProps,
  useSharedValue,
  withTiming,
  type SharedValue,
} from 'react-native-reanimated';
import Svg, {
  Defs,
  Ellipse,
  G,
  Image as SvgImage,
  LinearGradient,
  Mask,
  Path,
  RadialGradient,
  Rect,
  Stop,
} from 'react-native-svg';

import { accents } from '@/shared/config';
import { useT } from '@/shared/lib/i18n';
import { useColorScheme } from '@/shared/lib/theme';

import { LEG_VIEW, zoneAt, type LegZone } from '../model/leg-zones';
import { LEG_IMAGE, ZONE_ORDER, ZONE_PATHS } from './leg-anatomy';

/**
 * Where it hurts, as a leg you can point at.
 *
 * A number says how bad; it cannot say where, and "where" is the thing that
 * separates a heel problem from an achilles one. Asking for it in words means a
 * list of anatomy nobody outside a clinic uses — "plantar fascia insertion" is
 * not a thing a runner picks off a menu — so the question is asked by letting
 * them touch the place.
 *
 * The leg is a render in the style of the exercise clips — white, sculpted,
 * every muscle readable — so the body the user points at here is the same body
 * they watch stretching later. The zones are outlines over it that only show
 * once marked; see `leg-anatomy.ts` for why the drawing stopped being vector.
 *
 * No background of its own. Every other screen in the app lets the navigation
 * theme paint behind it — see the note in AGENTS.md — and the render is cut out
 * on transparency for the same reason. The top of the leg fades out through a
 * mask rather than to a colour, since a fade to a colour would need to know
 * what that colour is.
 */

const LEG = require('@assets/leg-map/leg.webp');

/**
 * How strongly a marked zone takes the colour.
 *
 * Well short of opaque: the render's shading has to come through the tint, or a
 * marked calf turns into a flat red sticker on a sculpted leg.
 */
const MARK_OPACITY = 0.6;

/** The contact shadow under the foot, per scheme — a white leg on a dark
 * sheet needs a deeper shadow to look like it is standing on anything. */
const SHADOW = { light: 'rgba(40,40,60,0.22)', dark: 'rgba(0,0,0,0.55)' } as const;

const AnimatedPath = Animated.createAnimatedComponent(Path);

const FADE_MS = 220;

/** How a marked zone recovers, for the one screen that shows it doing so. */
type Heal = { progress: Readonly<SharedValue<number>>; color: string };

/**
 * A zone's tint, fading in over the render when it is marked.
 *
 * `useAnimatedProps` rather than state, so it runs on the UI thread: a
 * `setState` per frame would re-render the whole drawing to animate one zone.
 *
 * With `heal`, the tint's colour is itself a blend: red at 0, the healed tone
 * at 1. Read on the UI thread like the rest, so a caller can scrub it with the
 * same shared value that drives the rest of its screen.
 */
function useTint(on: boolean, marked: string, heal?: Heal) {
  const t = useSharedValue(on ? 1 : 0);
  useEffect(() => {
    t.value = withTiming(on ? 1 : 0, { duration: FADE_MS });
  }, [on, t]);
  return useAnimatedProps(() => ({
    fill:
      heal == null
        ? marked
        : interpolateColor(heal.progress.value, [0, 1], [marked, heal.color]),
    fillOpacity: t.value * MARK_OPACITY,
  }));
}

function Zone({ zone, on, marked, heal }: { zone: LegZone; on: boolean; marked: string; heal?: Heal }) {
  const tint = useTint(on, marked, heal);
  return <AnimatedPath d={ZONE_PATHS[zone]} animatedProps={tint} />;
}

export type LegMapProps = {
  selected: readonly LegZone[];
  /** Omitted, the map is a picture: nothing to tap, and nothing announced as a
   * button to a screen reader. */
  onToggle?: (zone: LegZone) => void;
  /**
   * 0 to 1, how far the marked zones have come back from red to `healedColor`.
   *
   * For showing where a plan leads rather than asking where it hurts. Red is
   * still the starting point, so the recovery reads as the same places
   * changing rather than as different places being marked.
   */
  healProgress?: Readonly<SharedValue<number>>;
  healedColor?: string;
};

/** Width over height, for anyone laying the map out or laying things over it. */
export const LEG_ASPECT = LEG_VIEW.width / LEG_VIEW.height;

export function LegMap({ selected, onToggle, healProgress, healedColor }: LegMapProps) {
  const scheme = useColorScheme();
  const t = useT();

  /**
   * Red, and this is the one place in the app allowed to use it.
   *
   * The colour rule in AGENTS.md is that colour never judges a value — there is
   * no "bad" in `meterColors`, so no meter can render red. This is not a meter.
   * Red here marks a location, not a verdict: the zone is the same red whether
   * the score is two or nine, exactly as an accent keeps its colour at 3% and
   * at 99%. Taken from `accents` for that reason rather than hardcoded.
   */
  const marked = accents[scheme].red.fill;

  const heal =
    healProgress != null && healedColor != null
      ? { progress: healProgress, color: healedColor }
      : undefined;

  /** Measured so a tap in view coordinates can be put back into viewBox ones. */
  const [size, setSize] = useState({ width: 0, height: 0 });
  const measure = (event: LayoutChangeEvent) => {
    const { width, height } = event.nativeEvent.layout;
    setSize({ width, height });
  };

  const { x, y, width, height } = LEG_VIEW;

  const drawing = (
    <Svg
      viewBox={`${x} ${y} ${width} ${height}`}
      width="100%"
      height="100%"
      pointerEvents="none">
      <Defs>
        <RadialGradient id="shadow" cx="0.5" cy="0.5" r="0.5">
          <Stop offset="0" stopColor={SHADOW[scheme]} />
          <Stop offset="1" stopColor={SHADOW[scheme]} stopOpacity={0} />
        </RadialGradient>
        <LinearGradient id="fade" x1="0" y1="0" x2="0" y2="1">
          <Stop offset="0" stopColor="#FFFFFF" stopOpacity={0} />
          <Stop offset="0.12" stopColor="#FFFFFF" stopOpacity={1} />
        </LinearGradient>
        <Mask id="top-fade" maskUnits="userSpaceOnUse" x={x} y={y} width={width} height={height}>
          <Rect x={x} y={y} width={width} height={height} fill="url(#fade)" />
        </Mask>
      </Defs>

      {/* Contact shadow, so the foot stands on something. */}
      <Ellipse cx={520} cy={1622} rx={330} ry={26} fill="url(#shadow)" />

      <G mask="url(#top-fade)">
        <SvgImage
          href={LEG}
          x={LEG_IMAGE.x}
          y={LEG_IMAGE.y}
          width={LEG_IMAGE.width}
          height={LEG_IMAGE.height}
        />
        {ZONE_ORDER.map((zone) => (
          <Zone
            key={zone}
            zone={zone}
            on={selected.includes(zone)}
            marked={marked}
            heal={heal}
          />
        ))}
      </G>
    </Svg>
  );

  if (onToggle == null) {
    return (
      <View style={styles.box} accessibilityRole="image" accessibilityLabel={t('home.whereItHurts')}>
        {drawing}
      </View>
    );
  }

  return (
    <Pressable
      style={styles.box}
      onLayout={measure}
      accessibilityRole="button"
      accessibilityLabel={t('home.whereItHurts')}
      onPress={(event) => {
        const zone = zoneAt(event.nativeEvent.locationX, event.nativeEvent.locationY, size);
        if (zone != null) onToggle(zone);
      }}>
      {drawing}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  // Aspect ratio from the viewBox, so the drawing never stretches.
  box: { flex: 1, aspectRatio: LEG_ASPECT },
});
