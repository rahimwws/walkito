import * as Haptics from 'expo-haptics';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { Image, StyleSheet, View } from 'react-native';
import Animated, {
  Easing,
  FadeIn,
  FadeOut,
  ReduceMotion,
  SlideInDown,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

import { fonts } from '@/shared/config';
import { useT } from '@/shared/lib/i18n';
import { TypedText } from '@/shared/ui/typed-text';
import { PrimaryButton } from '@/shared/ui/primary-button';

import { PLAN_PHOTOS } from '../config/plan-photos';
import { defaultBuildingLines, type BuildingLines } from '../model/reflection';

/**
 * What the screen says while it works, in order.
 *
 * Three lines, not a running commentary. This is a held breath between the
 * last question and the app itself, and a caption that changed eight times
 * would turn a pause into a performance.
 *
 * The words are handed in by the page, assembled from the user's own answers —
 * see `model/reflection`, which also holds the fallback for a run with nothing
 * to reflect. The count is fixed by `BuildingLines` itself and is what the
 * timings below are built on, so it is a constant here rather than a `.length`
 * read off a list that now needs a translator to exist.
 */
const PHASE_COUNT = 3;

/** How long each line holds the screen, its typing included. */
const PHASE_MS = 1900;
/** Each line leaves slightly before its time is up, so the fade out and the
 * next fade in overlap instead of leaving a dead frame between them. */
const CROSSFADE_MS = 260;
/** Ceiling on a line's typing, comfortably inside its phase. */
const LINE_MS = 700;

const RUN_MS = PHASE_COUNT * PHASE_MS - CROSSFADE_MS;

export type BuildingStepProps = {
  /** Picks whose photograph fills the screen. */
  sex: string | null;
  /** The three lines, in order. Omitted, the screen says the generic ones —
   * which is what a run with no usable answers gets. */
  lines?: BuildingLines;
  /** Fires when the user takes the button at the end. */
  onDone: () => void;
  /** Safe-area room, measured by the page. Passed rather than read here: the
   * page is what this is positioned against, and the two must not disagree. */
  insets: { top: number; bottom: number };
};

/**
 * The moment the plan gets built.
 *
 * A photograph, one line of text, and a rule filling underneath it. There is
 * no percentage and no list of the user's answers: both were legible, and both
 * turned a beat of anticipation into a status report. What is left is the only
 * thing the pause is for — the app saying, in its own voice, that it is doing
 * something with what it was told.
 *
 * Nothing here is bold. The type is the lightest face in the set, centred, the
 * rule short and hairline beneath it, because the photograph is carrying the
 * screen and the words only have to stay legible over it.
 *
 * The button is the ending. It does not exist until the rule runs out, and it
 * rises from the bottom rather than fading in on the spot — the screen resolves
 * into an action instead of revealing that one had been sitting there.
 */
export function BuildingStep({ sex, lines, onDone, insets }: BuildingStepProps) {
  const t = useT();
  const phrases = lines ?? defaultBuildingLines(t);
  const [phase, setPhase] = useState(0);
  /** The button exists only once the rule has reached the end. */
  const [ready, setReady] = useState(false);
  const progress = useSharedValue(0);

  useEffect(() => {
    const timers: ReturnType<typeof setTimeout>[] = [];

    // One continuous fill across the whole sequence rather than a step per
    // phase: the rule is the clock, and a clock that stops and restarts reads
    // as something stalling rather than as something progressing.
    progress.value = withTiming(1, {
      duration: RUN_MS,
      easing: Easing.inOut(Easing.quad),
      reduceMotion: ReduceMotion.System,
    });

    for (let i = 1; i < PHASE_COUNT; i += 1) {
      timers.push(
        setTimeout(() => {
          setPhase(i);
          Haptics.selectionAsync();
        }, i * PHASE_MS - CROSSFADE_MS),
      );
    }

    timers.push(
      setTimeout(() => {
        setReady(true);
        Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
      }, RUN_MS),
    );

    return () => timers.forEach(clearTimeout);
  }, [progress]);

  const fillStyle = useAnimatedStyle(() => ({ transform: [{ scaleX: progress.value }] }));

  // The sex step cannot be skipped, so the fallback only exists to keep the
  // lookup total.
  const photo = PLAN_PHOTOS[sex ?? 'female'] ?? PLAN_PHOTOS.female;

  return (
    <Animated.View
      entering={FadeIn.duration(420).reduceMotion(ReduceMotion.System)}
      style={styles.fill}>
      {/* Sized by the wrapper rather than by `StyleSheet.absoluteFill` on the
          image itself: given only absolute insets the image laid itself out at
          its own pixel size and pinned its top-left corner, so the screen
          showed a 4× enlargement of the empty bleachers above the runner.
          Percentage sizing inside a filled parent is what the sex cards use,
          and it crops the way `cover` is supposed to. */}
      <View style={styles.photoWrap}>
        <Image source={photo} style={styles.photo} resizeMode="cover" />
      </View>
      {/* Deepest through the middle, where the line sits, and again at the
          bottom behind the button. The photograph keeps its top third, which
          is the part with the runner in it. */}
      <View
        style={[
          StyleSheet.absoluteFill,
          {
            experimental_backgroundImage:
              'linear-gradient(180deg, rgba(0,0,0,0.40) 0%, rgba(0,0,0,0.28) 24%, rgba(0,0,0,0.56) 50%, rgba(0,0,0,0.72) 74%, rgba(0,0,0,0.90) 100%)',
          },
        ]}
      />
      {/* The scrim is dark in both schemes, so the status bar must be light in
          both — `auto` would paint dark glyphs on it in light mode. */}
      <StatusBar style="light" animated />

      <View
        style={[
          styles.content,
          { paddingTop: insets.top + 18, paddingBottom: Math.max(insets.bottom, 20) + 8 },
        ]}>
        <View style={styles.middle}>
          {/* Keyed on the phase, so each line is a fresh mount that types
              itself in while the outgoing one fades out underneath it. The box
              is a fixed height and the line is absolute inside it, so three
              sentences of different lengths never shift the rule below. */}
          <View style={styles.phraseBox}>
            <Animated.View
              key={`${phase}-${phrases[phase]}`}
              entering={FadeIn.duration(CROSSFADE_MS).reduceMotion(ReduceMotion.System)}
              exiting={FadeOut.duration(CROSSFADE_MS).reduceMotion(ReduceMotion.System)}
              style={styles.phrasePos}>
              <TypedText text={phrases[phase]} style={styles.phrase} maxDuration={LINE_MS} />
            </Animated.View>
          </View>

          <View style={styles.track}>
            <Animated.View style={[styles.trackFill, fillStyle]} />
          </View>
        </View>

        {ready && (
          <Animated.View
            entering={SlideInDown.duration(460)
              .easing(Easing.bezier(0.23, 1, 0.32, 1).factory())
              .reduceMotion(ReduceMotion.System)}>
            <PrimaryButton label={t('onboarding.building.cta')} onPress={onDone} />
          </Animated.View>
        )}
      </View>
    </Animated.View>
  );
}

// Fixed white throughout rather than the theme foreground: all of this sits on
// a photograph, not on the page, so none of it may flip with the colour scheme.
const styles = StyleSheet.create({
  // Pinned to all four edges of the page and nothing else. An absolutely
  // positioned child is laid out against its parent's border box, so the
  // page's 24pt side padding and its safe-area top do not apply here and must
  // not be cancelled out — subtracting them, as this first did, pushed the
  // whole screen up under the status bar by exactly the top inset.
  fill: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    overflow: 'hidden',
  },
  photoWrap: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  photo: {
    width: '100%',
    height: '100%',
  },
  content: {
    flex: 1,
    paddingHorizontal: 24,
  },
  middle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 22,
  },
  phraseBox: {
    height: 34,
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
  },
  phrasePos: {
    position: 'absolute',
    alignItems: 'center',
  },
  phrase: {
    fontSize: 25,
    lineHeight: 32,
    // The lightest face the app has. A bold line over a photograph would shout
    // through a screen whose whole job is to be a pause.
    fontFamily: fonts.regular,
    letterSpacing: -0.2,
    color: '#FFFFFF',
    textAlign: 'center',
  },
  // Short and hairline. A full-width bar reads as a loading screen; a rule
  // about as wide as the sentence above it reads as an underline filling in.
  track: {
    width: 150,
    height: 2,
    borderRadius: 1,
    backgroundColor: 'rgba(255,255,255,0.24)',
    overflow: 'hidden',
  },
  trackFill: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    borderRadius: 1,
    backgroundColor: '#FFFFFF',
    transformOrigin: 'left center',
  },
});
