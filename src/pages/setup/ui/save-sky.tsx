import { useEffect, useRef, useState } from 'react';
import { Image, StyleSheet, View, type ImageSourcePropType } from 'react-native';
import Animated, {
  Easing,
  ReduceMotion,
  useAnimatedStyle,
  useReducedMotion,
  useSharedValue,
  withDelay,
  withRepeat,
  withSpring,
  withTiming,
} from 'react-native-reanimated';

import { palette } from '@/shared/config';
import { Mascot, waveRig, type MascotHandle } from '@/shared/ui/mascot';
import { useSplashRevealed } from '@/shared/ui/splash';

/**
 * The save screen's night: the welcome page's sky (its starfield and the glow
 * on the horizon) and the stickers that page throws, held still in a ring and
 * drifting, with the mascot in the middle waving hello. It closes the loop
 * with the first screen someone saw, at the moment the plan becomes theirs.
 *
 * Night in either appearance, as the welcome page is; the screen sets its
 * words in white over it. Everything here unmounts with the save step, so the
 * drift never runs hidden; under Reduce Motion the ring simply appears.
 */

const STARS = require('@assets/liquid-glass/astro/stars.png');
/** The horizon light the welcome page adds as the sphere rises, drawn here as
 * a gradient: its picture is opaque and is meant to be added as light, which
 * laid over the stars hid them. */
const HORIZON =
  'radial-gradient(ellipse 120% 60% at 50% 100%, rgba(38,190,255,0.55) 0%, rgba(20,110,220,0.28) 38%, rgba(0,0,0,0) 72%)';
const ART = {
  star: require('@assets/liquid-glass/astro/stickers/star.webp'),
  sparkle: require('@assets/liquid-glass/astro/stickers/sparkle.png'),
  planet: require('@assets/liquid-glass/astro/stickers/planet.png'),
  rocket: require('@assets/liquid-glass/astro/stickers/rocket.png'),
  sneaker: require('@assets/liquid-glass/astro/stickers/sneaker.png'),
  heartbeat: require('@assets/liquid-glass/astro/stickers/heartbeat.png'),
  fire: require('@assets/liquid-glass/astro/stickers/fire.png'),
  medal: require('@assets/liquid-glass/astro/stickers/medal.png'),
} as const;

/** The starfield's black, behind the ring. The mascot is drawn on it as the
 * dark appearance draws him, in either appearance: white, his outline in the
 * colour of what he stands on, cut out of the sky. */
const NIGHT = '#000000';

/** Where the mascot stands in the ring's square (fractions), and how big: the
 * middle, in the slot the welcome page's ball sticker had. */
const CENTRE = { x: 0.5, y: 0.5, size: 0.44 } as const;
/** The wave, once: after the ring has come in round him and the title is up. */
const WAVE_MS = 700;

/** Where each sticker sits in the ring's square (fractions), how big, how
 * tipped, and how long one drift takes. Counted from 1: the mascot is 0. */
const RING: readonly {
  art: ImageSourcePropType;
  x: number;
  y: number;
  size: number;
  tilt: number;
  ms: number;
}[] = [
  { art: ART.star, x: 0.17, y: 0.2, size: 0.25, tilt: -12, ms: 3600 },
  { art: ART.sparkle, x: 0.83, y: 0.15, size: 0.17, tilt: 8, ms: 2800 },
  { art: ART.planet, x: 0.86, y: 0.58, size: 0.27, tilt: 10, ms: 4000 },
  { art: ART.rocket, x: 0.12, y: 0.63, size: 0.22, tilt: -20, ms: 3400 },
  { art: ART.sneaker, x: 0.3, y: 0.92, size: 0.15, tilt: -8, ms: 3000 },
  { art: ART.heartbeat, x: 0.71, y: 0.92, size: 0.13, tilt: 6, ms: 2600 },
  { art: ART.fire, x: 0.55, y: 0.07, size: 0.1, tilt: 10, ms: 2400 },
  { art: ART.medal, x: 0.95, y: 0.86, size: 0.11, tilt: -6, ms: 3800 },
];

/** The sky, full screen behind everything on the step. */
export function SaveSky() {
  return (
    <View pointerEvents="none" style={StyleSheet.absoluteFill}>
      <Image source={STARS} style={StyleSheet.absoluteFill} resizeMode="cover" />
      <View style={[StyleSheet.absoluteFill, { experimental_backgroundImage: HORIZON }]} />
    </View>
  );
}

/**
 * The mascot and his ring, in a square as wide as `size`. `paused` holds him
 * still while a sign-in sheet is over the screen.
 */
export function SaveRing({ size, paused = false }: { size: number; paused?: boolean }) {
  return (
    <View
      accessibilityElementsHidden
      importantForAccessibility="no-hide-descendants"
      style={{ width: size, height: size }}>
      <RingMascot box={size} paused={paused} />
      {RING.map((item, i) => (
        <Sticker key={i} index={i + 1} box={size} {...item} />
      ))}
    </View>
  );
}

/**
 * The mascot in the middle of the ring. He comes in first, as the sticker in
 * his place did, and waves once; then he only breathes, his own idle in place
 * of the drift. Reduce Motion gets the still drawing, already there.
 *
 * The save screen can be the first one at launch (an account still owed), so
 * he holds still and keeps his wave until the splash has gone, and never
 * waves under a sheet.
 */
function RingMascot({ box, paused }: { box: number; paused: boolean }) {
  const reduced = useReducedMotion();
  const arrive = useSharedValue(reduced ? 1 : 0);
  const mascot = useRef<MascotHandle>(null);
  const seen = useSplashRevealed() && !paused;
  const waved = useRef(false);

  useEffect(() => {
    if (reduced) return;
    arrive.value = withSpring(1, { damping: 11, stiffness: 140, reduceMotion: ReduceMotion.System });
  }, [reduced, arrive]);

  useEffect(() => {
    if (waved.current || !seen) return undefined;
    const timer = setTimeout(() => {
      waved.current = true;
      mascot.current?.play('wave');
    }, WAVE_MS);
    return () => clearTimeout(timer);
  }, [seen]);

  const motion = useAnimatedStyle(() => ({
    opacity: Math.min(1, arrive.value * 1.5),
    transform: [{ translateY: (1 - arrive.value) * 18 }, { scale: 0.6 + arrive.value * 0.4 }],
  }));

  const px = box * CENTRE.size;
  return (
    <Animated.View
      style={[
        styles.sticker,
        { width: px, height: px, left: box * CENTRE.x - px / 2, top: box * CENTRE.y - px / 2, zIndex: 2 },
        motion,
      ]}>
      <Mascot
        ref={mascot}
        rig={waveRig}
        size={px}
        surface={NIGHT}
        paper={palette.dark.foreground}
        ink={NIGHT}
        paused={!seen}
      />
    </Animated.View>
  );
}

function Sticker({
  index,
  box,
  art,
  x,
  y,
  size,
  tilt,
  ms,
}: (typeof RING)[number] & { index: number; box: number }) {
  const reduced = useReducedMotion();
  const arrive = useSharedValue(reduced ? 1 : 0);
  const drift = useSharedValue(0);
  const [side] = useState(() => (index % 2 === 0 ? 1 : -1));

  useEffect(() => {
    if (reduced) return;
    // In one after another from the middle out, then each on its own clock.
    arrive.value = withDelay(index * 70, withSpring(1, { damping: 11, stiffness: 140, reduceMotion: ReduceMotion.System }));
    drift.value = withDelay(
      index * 70 + 400,
      withRepeat(withTiming(1, { duration: ms, easing: Easing.inOut(Easing.sin), reduceMotion: ReduceMotion.System }), -1, true),
    );
  }, [reduced, arrive, drift, index, ms]);

  const motion = useAnimatedStyle(() => ({
    opacity: Math.min(1, arrive.value * 1.5),
    transform: [
      { translateY: (1 - arrive.value) * 18 + (drift.value - 0.5) * 12 },
      { rotate: `${tilt + side * (drift.value - 0.5) * 6}deg` },
      { scale: 0.6 + arrive.value * 0.4 },
    ],
  }));

  const px = box * size;
  return (
    <Animated.Image
      source={art}
      resizeMode="contain"
      style={[
        styles.sticker,
        { width: px, height: px, left: box * x - px / 2, top: box * y - px / 2, zIndex: 1 },
        motion,
      ]}
    />
  );
}

const styles = StyleSheet.create({
  sticker: { position: 'absolute' },
});
