import Tap01Icon from '@hugeicons/core-free-icons/Tap01Icon';
import { HugeiconsIcon } from '@hugeicons/react-native';
import * as Haptics from 'expo-haptics';
import { useEffect, useRef } from 'react';
import { Pressable, StyleSheet, Text, View, useWindowDimensions } from 'react-native';
import Animated, {
  Easing,
  FadeIn,
  FadeInDown,
  ReduceMotion,
  cancelAnimation,
  useAnimatedStyle,
  useReducedMotion,
  useSharedValue,
  withRepeat,
  withSequence,
  withTiming,
} from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Svg, { Defs, Pattern, Rect } from 'react-native-svg';

import { PRIMARY, fonts, meterColors, palette, raised } from '@/shared/config';
import { useT } from '@/shared/lib/i18n';
import { useColorScheme } from '@/shared/lib/theme';
import { Mascot, type MascotHandle, type MascotRig, type MascotShot } from '@/shared/ui/mascot';
import { TypedText, typingDuration } from '@/shared/ui/typed-text';

const EASE = Easing.bezier(0.23, 1, 0.32, 1).factory();

/** How long he takes to rise into place. */
const RISE_MS = 420;
/** When his move plays. The rise's ease-out has covered nine tenths of the
 * distance by here, so he acts as he lands rather than while still sliding. */
const SHOT_DELAY_MS = 300;
/** Below this window height the hero gives way to the copy. */
const SHORT_WINDOW = 700;

/** The heading starts typing as he lands; the line under it once the heading
 * is done; the hint once both are there to read. */
const TITLE_DELAY_MS = 380;
const TITLE_MAX_MS = 820;
const BODY_GAP_MS = 140;
const BODY_MAX_MS = 950;
const HINT_GAP_MS = 220;

/** The hint's pill: tall enough to read as the screen's one control. */
const HINT_HEIGHT = 58;
const HINT_LIP = 4;
/** One stripe and its gap, across the diagonal. */
const STRIPE = 14;
/** How far the pattern repeats along the pill: the stripes run at 45°, so one
 * period measured flat is the diagonal period times √2. */
const STRIPE_RUN = STRIPE * 2 * Math.SQRT2;
const STRIPE_MS = 1100;

export type ReactionStepProps = {
  title: string;
  body: string;
  onNext: () => void;
  /** The pose, which the page picks from the answer (`coachEnter`). */
  rig: MascotRig;
  /** What he does once he is up. Null: he just stands there breathing. */
  shot?: MascotShot | null;
};

/**
 * The flow answering back: the mascot, moving, then the heading and the line
 * under it typing themselves in, one after the other.
 *
 * The whole screen is the button, the way the references do it — a reaction
 * is something you read and move past, and a primary button under it would
 * make it look like another question. The pill at the foot says so: it fades
 * in once the copy has finished, with slow diagonal stripes running through
 * it, the one moving thing left on the screen once he has landed.
 *
 * Silent: the move is the answer, and a sound on every reaction would be the
 * flow cheering at someone who has just said how long it has hurt.
 */
export function ReactionStep({ title, body, onNext, rig, shot = null }: ReactionStepProps) {
  const scheme = useColorScheme();
  const colors = palette[scheme];
  const meter = meterColors[scheme];
  const t = useT();
  const insets = useSafeAreaInsets();
  const { height } = useWindowDimensions();
  const size = height < SHORT_WINDOW ? 160 : 200;

  const mascot = useRef<MascotHandle>(null);
  useEffect(() => {
    if (shot == null) return undefined;
    const timer = setTimeout(() => mascot.current?.play(shot), SHOT_DELAY_MS);
    return () => clearTimeout(timer);
  }, [rig, shot]);

  const bodyDelay = TITLE_DELAY_MS + typingDuration(title, TITLE_MAX_MS) + BODY_GAP_MS;
  const hintDelay = bodyDelay + typingDuration(body, BODY_MAX_MS) + HINT_GAP_MS;

  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={`${title} ${body}`}
      accessibilityHint={t('onboarding.react.tap')}
      onPress={() => {
        Haptics.selectionAsync();
        onNext();
      }}
      // The page has no bottom padding of its own: only its shared button bar
      // clears the home indicator, and this screen has no bar.
      style={[styles.fill, { paddingBottom: Math.max(insets.bottom, 16) + 12 }]}>
      <View style={styles.middle}>
        <Animated.View entering={FadeInDown.duration(RISE_MS).easing(EASE).reduceMotion(ReduceMotion.System)}>
          {/* Keyed on the pose, so a different one is a fresh character
              rather than one rig's motion state driving another's parts. */}
          <Mascot key={rig.name} ref={mascot} rig={rig} size={size} surface={colors.background} />
        </Animated.View>
        {/* Keyed on the copy, so a new reaction types from the start. */}
        <View style={styles.title}>
          <TypedText
            key={`t-${title}`}
            text={title}
            align="center"
            delay={TITLE_DELAY_MS}
            maxDuration={TITLE_MAX_MS}
            style={[styles.titleText, { color: colors.foreground }]}
          />
        </View>
        <TypedText
          key={`b-${body}`}
          text={body}
          align="center"
          delay={bodyDelay}
          maxDuration={BODY_MAX_MS}
          style={[styles.body, { color: meter.caption }]}
        />
      </View>
      <Animated.View
        entering={FadeIn.delay(hintDelay).duration(360).reduceMotion(ReduceMotion.System)}
        style={styles.hintWrap}>
        <TapHint label={t('onboarding.react.tap')} />
      </Animated.View>
    </Pressable>
  );
}

/**
 * "Tap to continue" as a raised pill with violet stripes drifting through it
 * and a finger tapping beside the words. Decoration only: the screen around it
 * is the button, so it carries no role of its own. Under Reduce Motion the
 * stripes and the finger hold still.
 */
function TapHint({ label }: { label: string }) {
  const scheme = useColorScheme();
  const colors = palette[scheme];
  const tokens = raised[scheme];
  const reduced = useReducedMotion();

  const run = useSharedValue(0);
  const tap = useSharedValue(0);
  useEffect(() => {
    if (reduced) return undefined;
    run.value = withRepeat(withTiming(1, { duration: STRIPE_MS, easing: Easing.linear }), -1, false);
    tap.value = withRepeat(
      withSequence(
        withTiming(1, { duration: 160, easing: Easing.out(Easing.quad) }),
        withTiming(0, { duration: 260, easing: Easing.inOut(Easing.quad) }),
        withTiming(0, { duration: 700 }),
      ),
      -1,
      false,
    );
    return () => {
      cancelAnimation(run);
      cancelAnimation(tap);
    };
  }, [reduced, run, tap]);

  const stripes = useAnimatedStyle(() => ({ transform: [{ translateX: -run.value * STRIPE_RUN }] }));
  const finger = useAnimatedStyle(() => ({
    transform: [{ translateY: tap.value * 3 }, { scale: 1 - tap.value * 0.12 }],
  }));

  return (
    <View
      accessible={false}
      importantForAccessibility="no-hide-descendants"
      style={[styles.hintLip, { backgroundColor: tokens.lip }]}>
      <View style={[styles.hintFace, { backgroundColor: tokens.surface, borderColor: tokens.edge }]}>
        <Animated.View style={[styles.stripes, stripes]} pointerEvents="none">
          <Svg width="100%" height={HINT_HEIGHT}>
            <Defs>
              <Pattern
                id="reaction-stripes"
                patternUnits="userSpaceOnUse"
                width={STRIPE * 2}
                height={STRIPE * 2}
                patternTransform="rotate(45)">
                <Rect width={STRIPE} height={STRIPE * 2} fill={PRIMARY} opacity={0.16} />
              </Pattern>
            </Defs>
            <Rect width="100%" height={HINT_HEIGHT} fill="url(#reaction-stripes)" />
          </Svg>
        </Animated.View>
        <Animated.View style={finger}>
          <HugeiconsIcon icon={Tap01Icon} size={22} color={colors.foreground} strokeWidth={1.9} />
        </Animated.View>
        <Text style={[styles.hint, { color: colors.foreground }]} maxFontSizeMultiplier={1.3}>
          {label}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  fill: {
    flex: 1,
  },
  middle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 14,
    paddingHorizontal: 8,
  },
  title: { marginTop: 10 },
  titleText: {
    ...fonts.heavy(28, -0.7),
    lineHeight: 33,
  },
  body: {
    ...fonts.regular(17),
    lineHeight: 24,
  },
  hintWrap: { paddingHorizontal: 8 },
  hintLip: {
    borderRadius: HINT_HEIGHT / 2,
    paddingBottom: HINT_LIP,
  },
  hintFace: {
    height: HINT_HEIGHT,
    borderRadius: HINT_HEIGHT / 2,
    borderWidth: 2,
    overflow: 'hidden',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },
  /** Wider than the pill by one period, so sliding left never shows an edge. */
  stripes: {
    ...StyleSheet.absoluteFill,
    right: -STRIPE_RUN,
  },
  hint: fonts.bold(17, -0.2),
});
