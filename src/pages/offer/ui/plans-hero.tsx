import Cancel01Icon from '@hugeicons/core-free-icons/Cancel01Icon';
import { HugeiconsIcon } from '@hugeicons/react-native';
import * as Haptics from 'expo-haptics';
import { useEffect, useRef, useState, type ReactNode } from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import Animated, {
  Easing,
  cancelAnimation,
  runOnJS,
  useAnimatedStyle,
  useReducedMotion,
  useSharedValue,
  withDelay,
  withRepeat,
  withSequence,
  withTiming,
  type SharedValue,
} from 'react-native-reanimated';
import Svg, { Circle, Defs, RadialGradient, Stop } from 'react-native-svg';

import { useT } from '@/shared/lib/i18n';
import { FluentIcon } from '@/shared/ui/fluent-icon';
import { Mascot, handsUpRig, preloadMascotSounds, type MascotHandle, type MascotRig } from '@/shared/ui/mascot';

import { CLOUD_PEAK, CloudEdge, Puff, cloudEdgeHeight } from './cloud-edge';
import { PLUS, SHEET } from './plans-theme';

/**
 * The sky over the plans, after BitePal's paywall: the mascot as a sticker
 * standing in a cloud, lightning round it, its eyes lit.
 *
 * It plays once, in order. He flies up from behind the clouds, overshoots a
 * little and settles; cheers as he lands, eyes lighting up and the bolts
 * round him flickering on; then a handful of sparkles and bolts falls from the
 * top of the sky into the clouds, once. After that he hovers, bobbing and
 * leaning, the clouds drift and faint streaks of light run past, which is all
 * that loops, and only while `live`: the step on screen and nothing (the
 * store's sheet, the celebration) over it. Reduce Motion gets the picture
 * standing still: him in place, eyes lit, the bolts on, nothing moving.
 *
 * The white edge round him is a second drawing of the same pose, its outline
 * drawn thick and white, under the first. Both are held still (`paused`: no
 * idle loop, whose fidgets are random and would part the two) and every move
 * is played on both at once, so the sticker's edge follows him exactly. His
 * own life comes from the container they share instead: the rise, the bob,
 * the lean.
 */

/** The pose: both hands up, beaming. */
const RIG = handsUpRig;

/** How far the sticker's white edge reaches past his body, in the rig's
 * units (2048 to his box): about 10pt past his own outline at the size he is
 * drawn. */
const HALO_UNITS = 110;

/** The same pose drawn as a white silhouette a little bigger all round: its
 * outline widened by the edge on both sides, and its own name, so its clip
 * paths never share an id with his. */
const HALO_RIG: MascotRig = { ...RIG, name: `${RIG.name}Sticker`, outline: RIG.outline + 2 * HALO_UNITS };

/** How far down his box the cloud's crown cuts him: mid-shin, so he stands in
 * the cloud rather than on it, as the reference's raccoon does. */
const SINK = 0.74;
/** The top of his head, as a fraction of his box. */
const HEAD = 0.05;

const WHITE = '#FFFFFF';
const SINE = Easing.inOut(Easing.sin);

/** The rise: up from behind the cloud past his place, then back down onto it. */
const RISE_MS = 720;
const LAND_MS = 340;
/** How far past his place he goes before settling. */
const OVERSHOOT = 12;
/** The hover: how far he bobs and how far he leans. */
const BOB = 5;
const TILT = 2.2;

/** Rig units to the box he is drawn in. */
function toBox(rig: MascotRig, size: number, [x, y]: readonly [number, number]) {
  const k = size / rig.box.size;
  return { x: (x - rig.box.x) * k, y: (y - rig.box.y) * k };
}

/** Where everything goes, from the size of the sky. */
export function heroGeometry(width: number, height: number, topInset: number) {
  const edge = cloudEdgeHeight(width);
  /** The crown of the cloud he stands in, from the top of the sky. */
  const crown = height - edge + CLOUD_PEAK.crown * edge;
  // Under the step bar and the close button, and never wider than half the phone.
  const room = crown - (topInset + 64);
  const size = Math.round(Math.min(Math.max(Math.min(width * 0.54, room / (SINK - HEAD)), 140), 240));
  const body = toBox(RIG, size, RIG.bodyCentre);
  return {
    edge,
    crown,
    size,
    left: Math.round(CLOUD_PEAK.x * width - body.x),
    top: Math.round(crown - SINK * size),
  };
}

/** The bolts round him: where (fractions of his box, past it on purpose),
 * how big (of his box) and when each first flickers. */
const BOLTS: readonly { x: number; y: number; size: number; delay: number }[] = [
  { x: -0.14, y: 0.1, size: 0.12, delay: 0 },
  { x: 1.06, y: 0.02, size: 0.11, delay: 420 },
  { x: -0.2, y: 0.48, size: 0.09, delay: 900 },
  { x: 1.12, y: 0.44, size: 0.1, delay: 250 },
  { x: 0.8, y: -0.1, size: 0.075, delay: 650 },
];

type FallKind = 'bolt' | 'sparkles' | 'white' | 'gold';

/** What falls once he has landed: across the sky (fraction of its width),
 * size in points, when it starts and how long it takes, how far it sways and
 * how far it turns. */
const FALL: readonly {
  x: number;
  kind: FallKind;
  size: number;
  delay: number;
  dur: number;
  drift: number;
  spin: number;
}[] = [
  { x: 0.1, kind: 'sparkles', size: 18, delay: 0, dur: 1900, drift: 10, spin: 90 },
  { x: 0.26, kind: 'white', size: 7, delay: 140, dur: 1700, drift: 8, spin: 0 },
  { x: 0.38, kind: 'bolt', size: 16, delay: 320, dur: 2000, drift: 12, spin: -140 },
  { x: 0.62, kind: 'gold', size: 6, delay: 60, dur: 1800, drift: 9, spin: 0 },
  { x: 0.74, kind: 'sparkles', size: 15, delay: 260, dur: 2100, drift: 11, spin: -100 },
  { x: 0.9, kind: 'white', size: 6, delay: 420, dur: 1600, drift: 7, spin: 0 },
  { x: 0.18, kind: 'gold', size: 5, delay: 560, dur: 1900, drift: 8, spin: 0 },
  { x: 0.5, kind: 'sparkles', size: 13, delay: 700, dur: 1800, drift: 10, spin: 120 },
  { x: 0.84, kind: 'bolt', size: 14, delay: 620, dur: 2100, drift: 12, spin: 150 },
  { x: 0.04, kind: 'white', size: 5, delay: 820, dur: 1700, drift: 6, spin: 0 },
  { x: 0.56, kind: 'white', size: 6, delay: 940, dur: 1800, drift: 9, spin: 0 },
  { x: 0.68, kind: 'gold', size: 7, delay: 1000, dur: 1900, drift: 8, spin: 0 },
];
const FALL_MS = Math.max(...FALL.map((item) => item.delay + item.dur));

/** Faint light running down the sky: across (of the width), length (of the
 * height), one pass, how far through its first pass it starts, and how bright. */
const STREAKS: readonly { x: number; length: number; period: number; phase: number; opacity: number }[] = [
  { x: 0.08, length: 0.34, period: 3600, phase: 0.1, opacity: 0.22 },
  { x: 0.17, length: 0.2, period: 2800, phase: 0.55, opacity: 0.14 },
  { x: 0.93, length: 0.28, period: 3200, phase: 0.3, opacity: 0.18 },
];

const STREAK = 'linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 50%, rgba(255,255,255,0) 100%)';
const HALO_LIGHT = 'radial-gradient(circle closest-side, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0.08) 55%, rgba(255,255,255,0) 100%)';

export type PlansHeroProps = {
  width: number;
  height: number;
  topInset: number;
  /** Whether anything may loop: the step on screen and nothing over it. */
  live: boolean;
  /** Laid over the top of the sky: the step bar, on the first view. */
  top?: ReactNode;
  /** The way out, once it is allowed. Fades in. */
  closable: boolean;
  onClose: () => void;
};

export function PlansHero({ width, height, topInset, live, top, closable, onClose }: PlansHeroProps) {
  const t = useT();
  const reduce = useReducedMotion();
  const motion = !reduce;
  const running = live && motion;
  const g = heroGeometry(width, height, topInset);

  const mascot = useRef<MascotHandle>(null);
  const halo = useRef<MascotHandle>(null);
  /** Plays a move on him and on his white edge in the same frame. */
  const play = (shot: 'cheer' | 'hop') => {
    mascot.current?.play(shot);
    halo.current?.play(shot);
  };
  useEffect(() => {
    preloadMascotSounds(['cheer', 'step']);
  }, []);

  // ── the rise ─────────────────────────────────────────────────────────────
  const rise = useSharedValue(motion ? g.size * 0.95 : 0);
  const [arrived, setArrived] = useState(!motion);
  const started = useRef(false);
  useEffect(() => {
    // Waits for the step to be seen: under the launch splash, or behind
    // another screen, he stays down behind the cloud.
    if (!motion || !live || started.current) return;
    started.current = true;
    rise.value = withSequence(
      withTiming(-OVERSHOOT, { duration: RISE_MS, easing: Easing.out(Easing.cubic) }),
      withTiming(0, { duration: LAND_MS, easing: Easing.inOut(Easing.quad) }, (finished) => {
        if (finished) runOnJS(setArrived)(true);
      }),
    );
  }, [motion, live, rise]);

  // ── landing: a cheer, the eyes, the bolts, then what falls ──────────────
  const lit = useSharedValue(motion ? 0 : 1);
  const cheered = useRef(false);
  useEffect(() => {
    if (!arrived) return undefined;
    lit.value = withTiming(1, { duration: 420, easing: Easing.out(Easing.quad) });
    if (!motion || cheered.current) return undefined;
    const timer = setTimeout(() => {
      cheered.current = true;
      play('cheer');
    }, 90);
    return () => clearTimeout(timer);
    // `play` reads refs only.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [arrived, motion, lit]);

  const fall = useSharedValue(0);
  const [falling, setFalling] = useState(false);
  const [fallen, setFallen] = useState(!motion);
  useEffect(() => {
    if (!arrived || !motion || fallen || falling) return undefined;
    const timer = setTimeout(() => {
      setFalling(true);
      fall.value = withTiming(FALL_MS, { duration: FALL_MS, easing: Easing.linear }, (finished) => {
        if (finished) runOnJS(setFallen)(true);
      });
    }, 380);
    return () => clearTimeout(timer);
  }, [arrived, motion, fallen, falling, fall]);

  // ── the hover ────────────────────────────────────────────────────────────
  const bob = useSharedValue(0);
  const tilt = useSharedValue(0);
  useEffect(() => {
    if (!arrived || !running) {
      cancelAnimation(bob);
      cancelAnimation(tilt);
      bob.value = withTiming(0, { duration: 300 });
      tilt.value = withTiming(0, { duration: 300 });
      return;
    }
    bob.value = withRepeat(
      withSequence(withTiming(1, { duration: 1500, easing: SINE }), withTiming(-1, { duration: 1500, easing: SINE })),
      -1,
    );
    tilt.value = withDelay(
      500,
      withRepeat(
        withSequence(withTiming(1, { duration: 2300, easing: SINE }), withTiming(-1, { duration: 2300, easing: SINE })),
        -1,
      ),
    );
  }, [arrived, running, bob, tilt]);

  const fly = useAnimatedStyle(() => ({
    transform: [{ translateY: rise.value - bob.value * BOB }, { rotate: `${tilt.value * TILT}deg` }],
  }));

  // ── the close button ─────────────────────────────────────────────────────
  const shown = useSharedValue(closable ? 1 : 0);
  useEffect(() => {
    shown.value = withTiming(closable ? 1 : 0, { duration: 420, easing: Easing.out(Easing.quad) });
  }, [closable, shown]);
  const closeFade = useAnimatedStyle(() => ({ opacity: shown.value }));

  const eyes = RIG.eyeCentres.map((eye) => toBox(RIG, g.size, eye));
  const glowR = Math.round(g.size * 0.07);
  const crownY = g.crown;

  return (
    <View
      style={[
        styles.sky,
        { width, height, experimental_backgroundImage: `linear-gradient(180deg, ${PLUS.skyTop} 0%, ${PLUS.skyBottom} 100%)` },
      ]}>
      <View pointerEvents="none" accessibilityElementsHidden importantForAccessibility="no-hide-descendants" style={StyleSheet.absoluteFill}>
        {/* Light behind him, so the sticker stands off the sky. */}
        <View
          style={[
            styles.abs,
            {
              left: g.left - g.size * 0.35,
              top: g.top - g.size * 0.3,
              width: g.size * 1.7,
              height: g.size * 1.5,
              experimental_backgroundImage: HALO_LIGHT,
            },
          ]}
        />
        {STREAKS.map((streak) => (
          <Streak key={streak.x} {...streak} skyWidth={width} skyHeight={height} running={running} />
        ))}
        <Drift x={width * 0.04} y={topInset + height * 0.16} width={width * 0.24} opacity={0.14} amp={10} period={11000} running={running} />
        <Drift x={width * 0.66} y={crownY - width * 0.34} width={width * 0.36} opacity={0.22} amp={16} period={8600} running={running} />
        <Drift x={-width * 0.08} y={crownY - width * 0.2} width={width * 0.44} opacity={0.38} amp={12} period={7000} running={running} />
        {BOLTS.map((bolt) => (
          <Bolt
            key={bolt.x}
            x={g.left + bolt.x * g.size}
            y={g.top + bolt.y * g.size}
            size={Math.round(bolt.size * g.size)}
            delay={bolt.delay}
            mirrored={bolt.x > 0.5}
            lit={lit}
            running={running && arrived}
          />
        ))}
      </View>

      {/* The sticker: his white edge, him, his eyes. A tap gets a hop. */}
      <Animated.View style={[styles.abs, { left: g.left, top: g.top, width: g.size, height: g.size }, fly]}>
        <Pressable
          accessible={false}
          importantForAccessibility="no-hide-descendants"
          disabled={!arrived || !motion}
          onPress={() => {
            void Haptics.selectionAsync();
            play('hop');
          }}
          style={StyleSheet.absoluteFill}>
          <View style={StyleSheet.absoluteFill}>
            <Mascot ref={halo} rig={HALO_RIG} size={g.size} paper={WHITE} ink={WHITE} paused easterEgg={false} />
          </View>
          <View style={StyleSheet.absoluteFill}>
            <Mascot ref={mascot} rig={RIG} size={g.size} paper={WHITE} ink={SHEET.ink} sounds paused easterEgg={false} />
          </View>
          {eyes.map((eye, i) => (
            <EyeGlow key={i} id={`plusEye${i}`} x={eye.x} y={eye.y} r={glowR} delay={i * 160} lit={lit} running={running && arrived} />
          ))}
        </Pressable>
      </Animated.View>

      {falling && !fallen && (
        <View pointerEvents="none" accessibilityElementsHidden importantForAccessibility="no-hide-descendants" style={StyleSheet.absoluteFill}>
          {FALL.map((item, i) => (
            <Falling key={i} item={item} left={item.x * width} floor={crownY + 16} clock={fall} />
          ))}
        </View>
      )}

      {/* The sheet's top edge, over his legs. */}
      <CloudEdge width={width} color={SHEET.surface} style={[styles.abs, { left: 0, bottom: 0 }]} />

      {top != null && <View style={[styles.top, { top: topInset + 10 }]}>{top}</View>}

      <Animated.View pointerEvents={closable ? 'auto' : 'none'} style={[styles.close, { top: topInset + 34 }, closeFade]}>
        <Pressable
          accessibilityRole="button"
          accessibilityLabel={t('common.close')}
          accessibilityElementsHidden={!closable}
          importantForAccessibility={closable ? 'auto' : 'no-hide-descendants'}
          disabled={!closable}
          hitSlop={10}
          onPress={() => {
            void Haptics.selectionAsync();
            onClose();
          }}
          style={({ pressed }) => [styles.closeFace, pressed && { opacity: 0.6 }]}>
          <HugeiconsIcon icon={Cancel01Icon} size={18} color={WHITE} strokeWidth={2.4} />
        </Pressable>
      </Animated.View>
    </View>
  );
}

/** One eye, lit: a soft yellow-white light over it that breathes. */
function EyeGlow({
  id,
  x,
  y,
  r,
  delay,
  lit,
  running,
}: {
  id: string;
  x: number;
  y: number;
  r: number;
  delay: number;
  lit: SharedValue<number>;
  running: boolean;
}) {
  const pulse = useSharedValue(0.7);
  useEffect(() => {
    if (!running) {
      cancelAnimation(pulse);
      pulse.value = withTiming(0.7, { duration: 300 });
      return;
    }
    pulse.value = withDelay(
      delay,
      withRepeat(
        withSequence(withTiming(1, { duration: 700, easing: SINE }), withTiming(0.35, { duration: 700, easing: SINE })),
        -1,
      ),
    );
  }, [running, delay, pulse]);
  const glow = useAnimatedStyle(() => ({
    opacity: lit.value * (0.5 + 0.5 * pulse.value),
    transform: [{ scale: 0.8 + 0.35 * pulse.value }],
  }));
  const d = r * 2;
  return (
    <Animated.View pointerEvents="none" style={[styles.abs, { left: x - r, top: y - r, width: d, height: d }, glow]}>
      <Svg width={d} height={d}>
        <Defs>
          <RadialGradient id={id} cx="50%" cy="50%" r="50%">
            {/* Not opaque at the middle: the eye itself still shows through, lit. */}
            <Stop offset="0" stopColor="#FFF3B0" stopOpacity={0.75} />
            <Stop offset="0.35" stopColor="#FFE15A" stopOpacity={0.55} />
            <Stop offset="0.7" stopColor="#FFC93C" stopOpacity={0.22} />
            <Stop offset="1" stopColor="#FFC93C" stopOpacity={0} />
          </RadialGradient>
        </Defs>
        <Circle cx={r} cy={r} r={r} fill={`url(#${id})`} />
      </Svg>
    </Animated.View>
  );
}

/** A bolt by him: it comes on as he lands, then flickers like lightning now
 * and then, each on its own beat. */
function Bolt({
  x,
  y,
  size,
  delay,
  mirrored,
  lit,
  running,
}: {
  x: number;
  y: number;
  size: number;
  delay: number;
  mirrored: boolean;
  lit: SharedValue<number>;
  running: boolean;
}) {
  const flash = useSharedValue(0.75);
  useEffect(() => {
    if (!running) {
      cancelAnimation(flash);
      flash.value = withTiming(0.75, { duration: 200 });
      return;
    }
    flash.value = withDelay(
      delay,
      withRepeat(
        withSequence(
          withTiming(1, { duration: 70 }),
          withTiming(0.2, { duration: 90 }),
          withTiming(1, { duration: 70 }),
          withTiming(0.55, { duration: 420, easing: Easing.out(Easing.quad) }),
          // A hold: a timing to where it already is.
          withTiming(0.55, { duration: 900 + (delay % 500) }),
          withTiming(0.85, { duration: 520, easing: SINE }),
          withTiming(0.55, { duration: 520, easing: SINE }),
        ),
        -1,
      ),
    );
  }, [running, delay, flash]);
  const turn = mirrored ? -1 : 1;
  const style = useAnimatedStyle(() => ({
    opacity: lit.value * flash.value,
    transform: [{ scale: 0.82 + 0.28 * flash.value }, { rotate: `${turn * (12 + (flash.value - 0.55) * 16)}deg` }],
  }));
  return (
    <Animated.View style={[styles.abs, { left: x - size / 2, top: y - size / 2 }, style]}>
      <FluentIcon name="bolt" size={size} style={mirrored ? styles.mirror : undefined} />
    </Animated.View>
  );
}

/** A puff of cloud in the sky, drifting left and right. */
function Drift({
  x,
  y,
  width,
  opacity,
  amp,
  period,
  running,
}: {
  x: number;
  y: number;
  width: number;
  opacity: number;
  amp: number;
  period: number;
  running: boolean;
}) {
  const drift = useSharedValue(0);
  useEffect(() => {
    // Stopped where it is, and carried on from there.
    if (!running) {
      cancelAnimation(drift);
      return;
    }
    drift.value = withRepeat(
      withSequence(withTiming(1, { duration: period, easing: SINE }), withTiming(-1, { duration: period, easing: SINE })),
      -1,
    );
  }, [running, period, drift]);
  const style = useAnimatedStyle(() => ({ transform: [{ translateX: drift.value * amp }] }));
  return (
    <Animated.View style={[styles.abs, { left: x, top: y, opacity }, style]}>
      <Puff width={width} color={WHITE} />
    </Animated.View>
  );
}

/** A faint streak of light running down the sky, as if he were still rising. */
function Streak({
  x,
  length,
  period,
  phase,
  opacity,
  skyWidth,
  skyHeight,
  running,
}: {
  x: number;
  length: number;
  period: number;
  phase: number;
  opacity: number;
  skyWidth: number;
  skyHeight: number;
  running: boolean;
}) {
  const run = useSharedValue(phase);
  useEffect(() => {
    if (!running) {
      cancelAnimation(run);
      return;
    }
    // Finish the pass it is on, then go round from the top.
    run.value = withSequence(
      withTiming(1, { duration: (1 - run.value) * period, easing: Easing.linear }),
      withRepeat(withSequence(withTiming(0, { duration: 0 }), withTiming(1, { duration: period, easing: Easing.linear })), -1),
    );
  }, [running, period, run]);
  const len = length * skyHeight;
  const style = useAnimatedStyle(() => ({ transform: [{ translateY: -len + run.value * (skyHeight + len) }] }));
  return (
    <Animated.View
      style={[styles.abs, { left: x * skyWidth, top: 0, width: 2, height: len, opacity, experimental_backgroundImage: STREAK }, style]}
    />
  );
}

/** One thing falling from the top of the sky into the clouds. */
function Falling({
  item,
  left,
  floor,
  clock,
}: {
  item: (typeof FALL)[number];
  left: number;
  floor: number;
  clock: SharedValue<number>;
}) {
  const { delay, dur, drift, spin, size } = item;
  const style = useAnimatedStyle(() => {
    const p = Math.min(Math.max((clock.value - delay) / dur, 0), 1);
    // Let go with a little speed, then gravity.
    const fallen = 0.3 * p + 0.7 * p * p;
    const fade = p <= 0 ? 0 : p < 0.1 ? p / 0.1 : p > 0.75 ? Math.max(0, (1 - p) / 0.25) : 1;
    return {
      opacity: fade,
      transform: [
        { translateX: Math.sin(p * Math.PI * 2) * drift },
        { translateY: -size - 20 + fallen * (floor + size + 20) },
        { rotate: `${p * spin}deg` },
      ],
    };
  });
  const art =
    item.kind === 'bolt' || item.kind === 'sparkles' ? (
      <FluentIcon name={item.kind} size={size} />
    ) : (
      <View
        style={{
          width: size,
          height: size,
          borderRadius: size / 2,
          backgroundColor: item.kind === 'gold' ? '#FFD54A' : 'rgba(255,255,255,0.92)',
        }}
      />
    );
  return <Animated.View style={[styles.abs, { left: left - size / 2, top: 0 }, style]}>{art}</Animated.View>;
}

const styles = StyleSheet.create({
  sky: { overflow: 'hidden' },
  abs: { position: 'absolute' },
  top: { position: 'absolute', left: 22, right: 22 },
  close: { position: 'absolute', left: 16 },
  closeFace: {
    width: 36,
    height: 36,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255,255,255,0.2)',
  },
  mirror: { transform: [{ scaleX: -1 }] },
});
