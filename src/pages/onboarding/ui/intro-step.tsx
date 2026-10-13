import { useEffect, useRef, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import type { SharedValue } from 'react-native-reanimated';
import Animated, {
  Easing,
  ReduceMotion,
  interpolate,
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
  withSequence,
  withTiming,
} from 'react-native-reanimated';

import { fonts, meterColors, palette } from '@/shared/config';
import { useT } from '@/shared/lib/i18n';
import { useColorScheme } from '@/shared/lib/theme';
import { Mascot, waveRig, type MascotHandle } from '@/shared/ui/mascot';
import { useSplashRevealed } from '@/shared/ui/splash';
import { TypedText } from '@/shared/ui/typed-text';

/** Beat after the greeting lands, before it steps back. */
const SETTLE_MS = 300;
const DEMOTE_MS = 320;

/** The character, the screen's whole lower half. */
const HERO = 220;

/**
 * When the feet touch down in the mascot's `hop`, from its start: two hops,
 * up 150 ms and down 140, a 60 ms pause between them
 * (`shared/ui/mascot/mascot.tsx`). The button dips on each.
 */
const HOP_LANDINGS_MS = [290, 640] as const;
/** How long the dip takes to reach the landing, and to come back out of it.
 * Down fast, back slow — the way weight settles out of a surface. */
const DIP_MS = 70;
const RISE_MS = 150;

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
  /** Something covers the screen (the sign-in sheet): he stops breathing
   * under it rather than redrawing at 30 fps where nobody can see. */
  paused?: boolean;
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
export function IntroStep({ greeting, headline, signInFailed, onReady, squash, paused = false }: IntroStepProps) {
  const revealed = useSplashRevealed();
  const scheme = useColorScheme();
  const colors = palette[scheme];
  const meter = meterColors[scheme];
  const t = useT();

  /** 0 greeting typing · 1 greeting demotes · 2 headline typing · 3 done */
  const [phase, setPhase] = useState(0);
  const demote = useSharedValue(0);

  const ready = useRef(onReady);
  ready.current = onReady;

  // He waves as the button arrives, then hops twice and the button dips under
  // each landing, as if he had stepped onto it. Once: a loop would keep
  // pointing at a button that has already been seen.
  const mascot = useRef<MascotHandle>(null);
  const next = useRef<'hop' | null>(null);
  const dips = useRef<ReturnType<typeof setTimeout>[]>([]);
  const dip = () => {
    squash.value = withSequence(
      withTiming(1, { duration: DIP_MS, easing: Easing.out(Easing.quad), reduceMotion: ReduceMotion.System }),
      withTiming(0, { duration: RISE_MS, easing: Easing.inOut(Easing.quad), reduceMotion: ReduceMotion.System }),
    );
  };
  // The wave's end, then the hop's. Only the first of them leads anywhere.
  const onShotEnd = () => {
    if (next.current !== 'hop') return;
    next.current = null;
    mascot.current?.play('hop');
    // Started a dip's length early, so it bottoms out on the landing itself
    // rather than always reading late.
    for (const at of HOP_LANDINGS_MS) dips.current.push(setTimeout(dip, at - DIP_MS));
  };
  useEffect(() => () => dips.current.forEach(clearTimeout), []);

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
    // Here and not at the splash: the button only exists from this phase on,
    // and a wave played while the lines were still typing had finished, and
    // taken its dips with it, before there was anything to dip.
    next.current = 'hop';
    mascot.current?.play('wave');
  }, [phase]);

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
        {/* Typed only once the launch splash has opened onto this screen. The
            greeting is the first thing the app says, and typing it under the
            splash's zoom meant most of it had already been said by the time
            anyone could see it. The ghost holds the line's size meanwhile, so
            nothing moves when the typing starts. */}
        <Animated.View style={[styles.greetingBox, greetingStyle]}>
          <Text style={[styles.greeting, styles.ghost]}>{greeting}</Text>
          {revealed && (
            <View style={styles.headlineFill}>
              <TypedText
                text={greeting}
                style={[styles.greeting, greetingColor]}
                onDone={() => setPhase(1)}
              />
            </View>
          )}
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
            {t('onboarding.intro.signInFailed')}
          </Text>
        )}
      </View>

      {/* Sits below the copy and stands on the button, his hand up in a
          hello from the first frame. Silent: the first sound in the flow
          should not be one nobody asked for. */}
      <View style={styles.stage}>
        <Mascot
          ref={mascot}
          rig={waveRig}
          size={HERO}
          surface={colors.background}
          paused={paused}
          onAnimationEnd={onShotEnd}
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
    // middle. Full width rather than hugging the text: the box's left edge is
    // the margin either way, and a box sized to the invisible copy left the
    // typed line on Android a hair wider than its box, so the name wrapped.
    alignSelf: 'stretch',
    transformOrigin: 'left center',
  },
  greeting: {
    ...fonts.semibold(26, -0.4),
    lineHeight: 32,
  },
  headline: {
    ...fonts.bold(30, -0.7),
    lineHeight: 37,
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
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
});
