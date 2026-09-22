import { useEffect, useState } from 'react';
import { Pressable, StyleSheet, type LayoutChangeEvent } from 'react-native';
import Animated, {
  interpolateColor,
  useAnimatedProps,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import Svg, { Circle, Path } from 'react-native-svg';

import { accents, meterColors, palette } from '@/shared/config';

import {
  PAIN_ZONES,
  zoneAt,
  type LegZone,
} from '../model/leg-zones';
import { useColorScheme } from '@/shared/lib/theme';

/**
 * Where it hurts, as a leg you can point at.
 *
 * A number says how bad; it cannot say where, and "where" is the thing that
 * separates a heel problem from an achilles one. Asking for it in words means a
 * list of anatomy nobody outside a clinic uses — "plantar fascia insertion" is
 * not a thing a runner picks off a menu — so the question is asked by letting
 * them touch the place.
 *
 * Inner view of the lower leg and foot. Six zones are tappable, and they are
 * the six that plantar heel pain actually presents in; the calf and shin are
 * drawn because a foot floating on its own is not readable as a foot, not
 * because they are answers.
 *
 * No background of its own. Every other screen in the app lets the navigation
 * theme paint behind it — see the note in AGENTS.md — and a panel carrying its
 * own near-black would show its edges against the sheet it sits on.
 */

const OUTLINE =
  'M120 0C90 34 68 92 70 154C72 214 104 286 132 350C140 372 142 396 134 420' +
  'C128 432 108 446 104 474C100 500 108 516 128 520C160 524 196 508 232 504' +
  'C266 502 292 520 318 522C344 524 370 520 386 510C392 502 386 490 372 488' +
  'C350 484 322 470 296 456C266 440 240 422 230 398C224 380 224 350 226 320' +
  'C230 240 236 140 236 70C236 40 234 18 230 0Z';

/** Draw order matters: later shapes sit on top. */
const SHAPES: readonly { zone: LegZone; d: string; tone: 'muscle' | 'bone' | 'tendon' }[] = [
  {
    zone: 'soleus',
    tone: 'muscle',
    d: 'M158 100C164 170 164 250 158 310C154 336 150 354 146 368C132 342 118 312 106 282C134 266 154 222 158 100Z',
  },
  {
    zone: 'calf',
    tone: 'muscle',
    d: 'M118 8C92 38 76 94 77 152C79 210 104 252 130 270C145 236 152 168 152 108C152 58 140 26 118 8Z',
  },
  {
    zone: 'tibia',
    tone: 'bone',
    d: 'M164 8C168 110 174 220 184 306C188 334 194 356 200 372C208 372 214 366 216 356C212 280 210 150 214 8Z',
  },
  {
    zone: 'tib_ant',
    tone: 'muscle',
    d: 'M219 8C219 120 220 250 220 346C224 350 228 344 229 336C229 262 233 150 233 60C233 32 231 16 229 8Z',
  },
  {
    zone: 'ankle',
    tone: 'muscle',
    d: 'M150 384C172 392 200 392 222 386C226 406 240 424 262 436C232 450 200 458 172 460C166 444 158 430 152 418C150 406 150 396 150 384Z',
  },
  {
    zone: 'achilles',
    tone: 'tendon',
    d: 'M138 348C150 370 156 398 150 424C146 432 138 438 130 442C138 418 142 390 136 358Z',
  },
  {
    zone: 'heel',
    tone: 'muscle',
    d: 'M128 442C110 454 104 480 108 500C112 514 124 516 138 516C158 516 172 506 178 490C182 470 166 450 146 442C140 440 134 440 128 442Z',
  },
  {
    zone: 'dorsum',
    tone: 'muscle',
    d: 'M240 442C266 448 294 460 320 472C338 479 354 484 364 490C344 496 316 494 292 490C268 486 246 478 234 470C232 460 234 450 240 442Z',
  },
  {
    zone: 'arch',
    tone: 'muscle',
    d: 'M182 466C216 472 262 482 298 494C304 500 304 508 298 513C282 507 260 497 232 496C208 496 192 505 180 508C176 494 176 478 182 466Z',
  },
  {
    zone: 'ball',
    tone: 'muscle',
    d: 'M306 501C320 499 336 504 344 512C334 519 316 521 306 519C302 513 302 507 306 501Z',
  },
  {
    zone: 'toes',
    tone: 'muscle',
    d: 'M350 491C367 489 386 495 386 506C384 515 366 517 352 513C346 506 346 497 350 491Z',
  },
];

const AnimatedPath = Animated.createAnimatedComponent(Path);
const AnimatedCircle = Animated.createAnimatedComponent(Circle);

const FADE_MS = 220;

/**
 * The fill, crossfading between resting and marked.
 *
 * `useAnimatedProps` rather than state, so the colour is interpolated on the UI
 * thread — a `setState` per frame would re-render eleven paths to animate one.
 */
function useFill(on: boolean, base: string, marked: string) {
  const t = useSharedValue(on ? 1 : 0);
  useEffect(() => {
    t.value = withTiming(on ? 1 : 0, { duration: FADE_MS });
  }, [on, t]);
  return useAnimatedProps(() => ({
    fill: interpolateColor(t.value, [0, 1], [base, marked]),
  }));
}

function Zone({
  d,
  base,
  marked,
  on,
  gap,
}: {
  d: string;
  base: string;
  marked: string;
  on: boolean;
  gap: string;
}) {
  const animatedProps = useFill(on, base, marked);
  return (
    <AnimatedPath
      d={d}
      animatedProps={animatedProps}
      stroke={gap}
      strokeWidth={5}
      strokeLinejoin="round"
    />
  );
}

type Props = {
  selected: readonly LegZone[];
  onToggle: (zone: LegZone) => void;
};

export function LegMap({ selected, onToggle }: Props) {
  const scheme = useColorScheme();
  const colors = palette[scheme];
  const meter = meterColors[scheme];

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

  // The silhouette and the gaps between muscles. Built from the theme so the
  // drawing sits on the sheet rather than on a slab of its own near-black.
  const silhouette = colors.card;
  const muscle = meter.iconTile;
  const bone = meter.divider;
  const tendon = meter.track;

  const toneOf = (tone: 'muscle' | 'bone' | 'tendon') =>
    tone === 'bone' ? bone : tone === 'tendon' ? tendon : muscle;

  const innerAnkle = useFill(selected.includes('inner_ankle'), tendon, marked);

  /** Measured so a tap in view coordinates can be put back into viewBox ones. */
  const [size, setSize] = useState({ width: 0, height: 0 });
  const measure = (event: LayoutChangeEvent) => {
    const { width, height } = event.nativeEvent.layout;
    setSize({ width, height });
  };

  return (
    <Pressable
      style={styles.box}
      onLayout={measure}
      accessibilityRole="button"
      accessibilityLabel="Where it hurts"
      onPress={(event) => {
        const zone = zoneAt(event.nativeEvent.locationX, event.nativeEvent.locationY, size);
        if (zone != null) onToggle(zone);
      }}>
      <Svg viewBox="44 -2 356 532" width="100%" height="100%" pointerEvents="none">
        <Path d={OUTLINE} fill={silhouette} />

        {SHAPES.map((shape) => (
          <Zone
            key={shape.zone}
            d={shape.d}
            base={toneOf(shape.tone)}
            marked={marked}
            gap={silhouette}
            on={selected.includes(shape.zone)}
          />
        ))}

        <AnimatedCircle
          cx={190}
          cy={412}
          r={14}
          animatedProps={innerAnkle}
          stroke={silhouette}
          strokeWidth={4}
        />

      </Svg>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  // No `backgroundColor`: the sheet behind paints it. Aspect ratio from the
  // viewBox, so the drawing never stretches.
  box: { flex: 1, aspectRatio: 356 / 532 },
});
