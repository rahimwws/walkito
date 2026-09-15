import { useEffect, useRef, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LottieView from 'lottie-react-native';
import type { SharedValue } from 'react-native-reanimated';
import Animated, {
  Easing,
  ReduceMotion,
  useAnimatedProps,
  useDerivedValue,
  withRepeat,
  interpolate,
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

import { fonts, meterColors, palette } from '@/shared/config';
import { useColorScheme } from '@/shared/lib/theme';

import { MASCOT, MASCOT_HEIGHT } from '../config/mascot';
import { TypedText } from './typed-text';

/** Beat after the greeting lands, before it steps back. */
const SETTLE_MS = 300;
const DEMOTE_MS = 320;

/**
 * The mascot's loop, measured off the file frame by frame rather than guessed.
 *
 * 121 frames at 24fps — 5.042s — and he does not jump once. He hops four times
 * in quick succession at the end of the loop, leaving the ground on frames 81,
 * 90, 99 and 110 and landing on 87, 96, 105 and 112. An earlier pass sampled
 * every sixth frame, found two of them, and put the second in the wrong place;
 * the button dipped out of time because it was answering a beat that was not
 * there.
 */
const FPS = 24;
const FRAMES = 121;
const LOOP_MS = (FRAMES / FPS) * 1000;
const LANDING_FRAMES = [10, 96, 105] as const;
/** How long the dip takes to reach the landing, and to come back out of it.
 * Down fast, back slow — the way weight settles out of a surface. */
const DIP_MS = 70;
const RISE_MS = 150;

const AnimatedLottie = Animated.createAnimatedComponent(LottieView);

export type IntroStepProps = {
  greeting: string;
  headline: string;
  /** The last Apple sign-in came back a genuine failure — not a cancel, which
   * needs no comment. The page holds the step; this is where it is said. */
  signInFailed?: boolean;
  /** Fires once the sequence has played out and the CTA may appear. */
  onReady: () => void;
  /** 0…1, peaking each time the character lands. The button below reads this
   * and squashes; it lives in the page because the button is the page's. */
  squash: SharedValue<number>;
};

/**
 * The welcome screen: a character, and a two-beat introduction that types
 * itself in.
 *
 * The sequence is the point. The greeting arrives first at full size and full
 * contrast, because it is the app speaking; then it demotes itself — smaller,
 * grey — and hands the emphasis to what the app is actually *for*. Showing
 * both lines at once would say the same words and land as a paragraph.
 *
 * Nothing here is decorative: the CTA is deliberately absent until the last
 * beat, so the first thing on screen is an introduction rather than a demand.
 */
export function IntroStep({ greeting, headline, signInFailed, onReady, squash }: IntroStepProps) {
  const scheme = useColorScheme();
  const colors = palette[scheme];
  const meter = meterColors[scheme];

  /** 0 greeting typing · 1 greeting demotes · 2 headline typing · 3 done */
  const [phase, setPhase] = useState(0);
  const demote = useSharedValue(0);

  const ready = useRef(onReady);
  ready.current = onReady;

  /** 0…1 across the mascot's loop. Drives the character and the button alike. */
  const progress = useSharedValue(0);

  const mascotProps = useAnimatedProps(() => ({ progress: progress.value }));

  // The dip peaks exactly on the landing frame — ramping in just before it and
  // decaying after, rather than starting there and so always reading late.
  useDerivedValue(() => {
    const p = progress.value;
    const inW = DIP_MS / LOOP_MS;
    const outW = RISE_MS / LOOP_MS;
    let v = 0;
    for (const frame of LANDING_FRAMES) {
      const at = frame / FRAMES;
      if (p >= at - inW && p <= at) {
        v = Math.max(v, (p - (at - inW)) / inW);
      } else if (p > at && p <= at + outW) {
        v = Math.max(v, 1 - (p - at) / outW);
      }
    }
    squash.value = v;
  });

  useEffect(() => {
    if (phase !== 1) return;
    demote.value = withTiming(1, {
      duration: DEMOTE_MS,
      easing: Easing.bezier(0.23, 1, 0.32, 1),
      reduceMotion: ReduceMotion.System,
    });
    const id = setTimeout(() => setPhase(2), DEMOTE_MS);
    return () => clearTimeout(id);
  }, [phase, demote]);

  useEffect(() => {
    if (phase !== 3) return;
    ready.current();

    // A timer of the same period rather than a hook into Lottie's frames.
    // `LottieView` reports nothing per frame, and driving it from a shared
    // `progress` instead of `autoPlay` would mean rebuilding a working
    // animation. Both start on this same line, so they stay together for the
    // handful of seconds anyone spends here.
    // One clock for both. The character is no longer left to play itself on a
    // timer of its own — its frame and the button's dip are now two readings of
    // this single value, so they cannot drift apart whatever the device is
    // doing. Chasing it with a start offset only ever approximated it: the lag
    // was Lottie decoding 121 PNGs before frame one, which is not a constant.
    progress.value = withRepeat(
      withTiming(1, { duration: LOOP_MS, easing: Easing.linear }),
      -1,
      false,
    );
  }, [phase, squash]);

  // Scale rather than fontSize: animating a font size relayouts the text every
  // frame, and the line below it would jitter as it reflows.
  const greetingStyle = useAnimatedStyle(() => ({
    transform: [{ scale: interpolate(demote.value, [0, 1], [1, 0.72]) }],
  }));
  // `transformOrigin` has to sit on the view that carries the transform. It
  // was on the character text style instead, so the wrapper scaled about its
  // own centre and pulled the line's left edge inward as it shrank — the
  // greeting visibly slid right while demoting.

  const greetingColor = useAnimatedStyle(() => ({
    color: interpolateColor(demote.value, [0, 1], [colors.foreground, meter.caption]),
  }));

  return (
    <View style={styles.wrap}>
      <View style={styles.copy}>
        <Animated.View style={[styles.greetingBox, greetingStyle]}>
          <TypedText
            text={greeting}
            style={[styles.greeting, greetingColor]}
            onDone={() => setPhase(1)}
          />
        </Animated.View>

        {/* The headline's full height is reserved from the first frame by an
            invisible copy of it, and the typed version is laid over the top.
            Mounting the real one only at phase 2 grew the copy block mid-
            sequence, which pushed the character down the screen — it appeared,
            then hopped. The ghost is the layout authority so nothing moves. */}
        <View>
          <Text style={[styles.headline, styles.ghost]}>{headline}</Text>
          {phase >= 2 && (
            <View style={styles.headlineFill}>
              <TypedText
                text={headline}
                style={[styles.headline, { color: colors.foreground }]}
                onDone={() => setPhase(3)}
              />
            </View>
          )}
        </View>

        {/* Under the two lines the app has just spoken, in the same voice and
            the quieter colour: the sign-in did not go through, and the button
            below is still the way forward. No blame and no error code — there
            is nothing here the user did wrong, and nothing to do but try. */}
        {signInFailed === true && (
          <Text
            accessibilityLiveRegion="polite"
            style={[styles.greeting, { color: meter.caption }]}>
            Sign-in didn’t complete. Try again.
          </Text>
        )}
      </View>

      {/* Sits below the copy and above the button. `Contain` rather than
          `Cover`: the character has to stay whole — a crop of it is just a
          purple shape. */}
      <View style={styles.stage}>
        <AnimatedLottie
          source={MASCOT}
          style={styles.mascot}
          resizeMode="contain"
          // Neither autoplay nor loop: the frame is whatever `progress` says.
          // It sits on frame one until the introduction has finished speaking,
          // because the value only starts moving then.
          autoPlay
          loop={false}
          animatedProps={mascotProps}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
  },
  copy: {
    paddingTop: 40,
    gap: 14,
  },
  greetingBox: {
    // Shrink towards the margin the line is aligned to, not towards its own
    // middle. Also hug the content so the origin is the text's left edge
    // rather than the container's.
    alignSelf: 'flex-start',
    transformOrigin: 'left center',
  },
  greeting: {
    fontSize: 26,
    lineHeight: 32,
    fontFamily: fonts.semibold,
    letterSpacing: -0.4,
  },
  headline: {
    fontSize: 30,
    lineHeight: 37,
    fontFamily: fonts.bold,
    letterSpacing: -0.7,
  },
  /** Holds the headline's height without drawing it. */
  ghost: {
    opacity: 0,
  },
  headlineFill: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
  },
  stage: {
    flex: 1,
    height: MASCOT_HEIGHT,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  mascot: {
    width: '120%',
    height: MASCOT_HEIGHT,
    backgroundColor: 'transparent',
    // The stage already bottom-aligns this box; the gap under the character is
    // empty canvas inside the animation itself, which `contain` preserves.
    // Pulling the box down by that much stands him on the button instead of
    // leaving him floating above it.
    marginBottom: -67,
  },
});
