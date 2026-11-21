import { useEffect, useRef, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Animated, {
  Easing,
  ReduceMotion,
  interpolate,
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

import { fonts, meterColors, palette } from '@/shared/config';
import { useT } from '@/shared/lib/i18n';
import { useColorScheme } from '@/shared/lib/theme';
import { useSplashRevealed } from '@/shared/ui/splash';
import { TypedText } from '@/shared/ui/typed-text';

/** Beat after the greeting lands, before it steps back. */
const SETTLE_MS = 300;
const DEMOTE_MS = 320;


export type IntroStepProps = {
  greeting: string;
  headline: string;
  /** The last Apple sign-in came back a genuine failure — not a cancel, which
   * needs no comment. The page holds the step; this is where it is said. */
  signInFailed?: boolean;
  /** Fires once the sequence has played out and the CTA may appear. */
  onReady: () => void;
};

/**
 * The welcome screen: a two-beat introduction that types itself in.
 *
 * The sequence is the point. The greeting arrives first at full size and full
 * contrast, because it is the app speaking; then it demotes itself — smaller,
 * grey — and hands the emphasis to what the app is actually *for*. Showing
 * both lines at once would say the same words and land as a paragraph.
 *
 * Nothing here is decorative: the CTA is deliberately absent until the last
 * beat, so the first thing on screen is an introduction rather than a demand.
 */
export function IntroStep({ greeting, headline, signInFailed, onReady }: IntroStepProps) {
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
            sequence, which pushed everything under it down the screen. The ghost is the layout authority so nothing moves. */}
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
});
