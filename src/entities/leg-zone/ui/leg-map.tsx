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
  Circle,
  ClipPath,
  Defs,
  Ellipse,
  G,
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
import {
  MALLEOLUS,
  NAIL,
  PARTS,
  SILHOUETTE,
  TENDON,
  fibresOf,
  type Tissue,
} from './leg-anatomy';

/**
 * Where it hurts, as a leg you can point at.
 *
 * A number says how bad; it cannot say where, and "where" is the thing that
 * separates a heel problem from an achilles one. Asking for it in words means a
 * list of anatomy nobody outside a clinic uses — "plantar fascia insertion" is
 * not a thing a runner picks off a menu — so the question is asked by letting
 * them touch the place.
 *
 * Drawn as an anatomical plate rather than as flat shapes: each muscle has its
 * own volume, its fibres, and a sheen along the belly; the tendon and the bone
 * read as the harder tissues they are. The first version was eleven flat
 * slabs, and a slab does not look like the thing that hurts — people hesitated
 * over which shape was their achilles because none of them looked like one.
 *
 * No background of its own. Every other screen in the app lets the navigation
 * theme paint behind it — see the note in AGENTS.md — and a panel carrying its
 * own near-black would show its edges against the sheet it sits on. The top of
 * the leg fades out through a mask for the same reason: a fade to a colour
 * would need to know what that colour is.
 */

/**
 * The drawing's own tones, and why they are not theme tokens.
 *
 * An anatomical figure needs material tones — light falling on different
 * tissue — which is a different job from the semantic tokens, and no amount of
 * picking among those produces a legible ramp. Each tissue is three stops of a
 * radial gradient, lit from the upper left, so every part has a lit face and a
 * shadowed edge. Neutral on purpose: red is what marking means here, and
 * muscle drawn anywhere near red would blur the one signal the map gives.
 */
const TONES = {
  dark: {
    skin: ['#2A2B31', '#3E3F48'],
    rim: 'rgba(255,255,255,0.10)',
    muscle: ['#6A6B78', '#474854', '#34353E'],
    bone: ['#8A8B98', '#6A6B77', '#50515B'],
    tendon: ['#9A9BA8', '#7A7B88', '#5D5E6A'],
    fibre: 'rgba(0,0,0,0.28)',
    fibreLit: 'rgba(255,255,255,0.07)',
    gap: '#1E1F24',
    shadow: 'rgba(0,0,0,0.45)',
    nail: '#8A8B98',
  },
  light: {
    skin: ['#D7D7DF', '#EEEEF3'],
    rim: 'rgba(0,0,0,0.06)',
    muscle: ['#D2D2DC', '#B4B4C2', '#9C9CAB'],
    bone: ['#E4E4EC', '#C4C4D0', '#AAAAB8'],
    tendon: ['#C9C9D4', '#ABABBA', '#9293A3'],
    fibre: 'rgba(40,40,60,0.18)',
    fibreLit: 'rgba(255,255,255,0.35)',
    gap: '#E9E9EF',
    shadow: 'rgba(40,40,60,0.18)',
    nail: '#F2F2F6',
  },
} as const;

/** How strongly a marked zone takes the colour. Short of opaque so the
 * gradient underneath still gives the zone its volume. */
const MARK_OPACITY = 0.88;

/** Fibres are computed once — they are geometry, not state. */
const FIBRES: Readonly<Partial<Record<LegZone, readonly string[]>>> = Object.fromEntries(
  PARTS.filter((part) => part.fibre != null).map((part) => [part.zone, fibresOf(part.fibre!)]),
);

const AnimatedPath = Animated.createAnimatedComponent(Path);
const AnimatedCircle = Animated.createAnimatedComponent(Circle);

const FADE_MS = 220;

/** How a marked zone recovers, for the one screen that shows it doing so. */
type Heal = { progress: Readonly<SharedValue<number>>; color: string };

/**
 * A zone's tint, fading in over the drawn tissue when it is marked.
 *
 * The tint is a layer over the tissue rather than a change to its fill, so the
 * gradient and the fibres stay visible through it — a marked calf still looks
 * like a calf, only red. `useAnimatedProps` rather than state, so it runs on the
 * UI thread: a `setState` per frame would re-render the whole drawing to animate
 * one zone.
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

function Part({
  zone,
  d,
  tissue,
  on,
  marked,
  heal,
  scheme,
}: {
  zone: LegZone;
  d: string;
  tissue: Tissue;
  on: boolean;
  marked: string;
  heal?: Heal;
  scheme: 'light' | 'dark';
}) {
  const tones = TONES[scheme];
  const tint = useTint(on, marked, heal);
  const fibres = FIBRES[zone] ?? [];
  return (
    <G>
      <Path
        d={d}
        fill={`url(#${tissue})`}
        stroke={tones.gap}
        strokeWidth={2.2}
        strokeLinejoin="round"
      />
      <AnimatedPath d={d} animatedProps={tint} />
      {/* Texture over the tint, so marking a muscle keeps its grain. */}
      <G clipPath={`url(#clip-${zone})`}>
        {fibres.map((fibre) => (
          <G key={fibre}>
            <Path d={fibre} fill="none" stroke={tones.fibre} strokeWidth={1.6} strokeLinecap="round" />
            <Path
              d={fibre}
              translateX={2.2}
              fill="none"
              stroke={tones.fibreLit}
              strokeWidth={1}
              strokeLinecap="round"
            />
          </G>
        ))}
        <Path d={d} fill="url(#gloss)" />
      </G>
    </G>
  );
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
  const tones = TONES[scheme];

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

  const innerAnkle = useTint(selected.includes('inner_ankle'), marked, heal);

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
        <LinearGradient id="skin" x1="0" y1="0" x2="1" y2="0">
          <Stop offset="0" stopColor={tones.skin[0]} />
          <Stop offset="0.55" stopColor={tones.skin[1]} />
          <Stop offset="1" stopColor={tones.skin[0]} />
        </LinearGradient>
        {(['muscle', 'bone', 'tendon'] as const).map((tissue) => (
          <RadialGradient key={tissue} id={tissue} cx="0.38" cy="0.35" r="0.75">
            <Stop offset="0" stopColor={tones[tissue][0]} />
            <Stop offset="0.55" stopColor={tones[tissue][1]} />
            <Stop offset="1" stopColor={tones[tissue][2]} />
          </RadialGradient>
        ))}
        {/* The sheen along each belly: a narrow band of light across the
            shape, which is most of what makes it read as rounded. */}
        <LinearGradient id="gloss" x1="0" y1="0" x2="1" y2="0.3">
          <Stop offset="0" stopColor="#FFFFFF" stopOpacity={0} />
          <Stop offset="0.35" stopColor="#FFFFFF" stopOpacity={0.16} />
          <Stop offset="0.6" stopColor="#FFFFFF" stopOpacity={0} />
        </LinearGradient>
        <RadialGradient id="shadow" cx="0.5" cy="0.5" r="0.5">
          <Stop offset="0" stopColor={tones.shadow} />
          <Stop offset="1" stopColor={tones.shadow} stopOpacity={0} />
        </RadialGradient>
        <LinearGradient id="fade" x1="0" y1="0" x2="0" y2="1">
          <Stop offset="0" stopColor="#FFFFFF" stopOpacity={0} />
          <Stop offset="0.12" stopColor="#FFFFFF" stopOpacity={1} />
        </LinearGradient>
        <Mask id="top-fade" maskUnits="userSpaceOnUse" x={x} y={y} width={width} height={height}>
          <Rect x={x} y={y} width={width} height={height} fill="url(#fade)" />
        </Mask>
        {PARTS.map((part) => (
          <ClipPath key={part.zone} id={`clip-${part.zone}`}>
            <Path d={part.d} />
          </ClipPath>
        ))}
      </Defs>

      {/* Contact shadow, so the foot stands on something. */}
      <Ellipse cx={228} cy={520} rx={150} ry={12} fill="url(#shadow)" />

      <G mask="url(#top-fade)">
        <Path d={SILHOUETTE} fill="url(#skin)" />

        {PARTS.map((part) => (
          <Part
            key={part.zone}
            zone={part.zone}
            d={part.d}
            tissue={part.tissue}
            on={selected.includes(part.zone)}
            marked={marked}
            heal={heal}
            scheme={scheme}
          />
        ))}

        <Circle
          cx={MALLEOLUS.cx}
          cy={MALLEOLUS.cy}
          r={MALLEOLUS.r}
          fill="url(#bone)"
          stroke={tones.gap}
          strokeWidth={2.2}
        />
        <AnimatedCircle
          cx={MALLEOLUS.cx}
          cy={MALLEOLUS.cy}
          r={MALLEOLUS.r}
          animatedProps={innerAnkle}
        />
        <Ellipse
          cx={MALLEOLUS.cx - 4}
          cy={MALLEOLUS.cy - 5}
          rx={6}
          ry={4}
          fill="#FFFFFF"
          opacity={0.18}
        />

        <Path d={TENDON} fill="none" stroke="url(#tendon)" strokeWidth={5} strokeLinecap="round" />
        <Path d={NAIL} fill={tones.nail} opacity={0.9} />

        <Path d={SILHOUETTE} fill="none" stroke={tones.rim} strokeWidth={1.5} />
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
