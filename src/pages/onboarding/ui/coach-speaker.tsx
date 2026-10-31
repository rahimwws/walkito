import { useIsFocused } from 'expo-router';
import { useEffect, useRef, useState } from 'react';
import { AppState, StyleSheet } from 'react-native';
import Animated, {
  Easing,
  ReduceMotion,
  useAnimatedStyle,
  useReducedMotion,
  useSharedValue,
  withDelay,
  withSequence,
  withTiming,
} from 'react-native-reanimated';

import { Mascot, playMascotSound, type MascotHandle, type MascotShot, type MascotSound } from '@/shared/ui/mascot';

import type { CoachMoment, CoachPose } from '../model/coach';
import { rigFor } from './coach-rigs';

/** 56, or 44 on the name question (the keyboard is up) and on a short phone. */
export type SpeakerSize = 44 | 56;

/**
 * One move for him to play. `key` only grows, so the same move twice in a row
 * still plays twice; `delay` holds it back from the moment it is asked for (an
 * arrival's move waits for the question to slide in). A `sound` goes off with
 * the move, never before it.
 */
export type SpeakerShot = { move: MascotShot; key: number; delay?: number; sound?: MascotSound };

/** The room a heading leaves him on its right: his square and a little air. */
export function speakerInset(size: SpeakerSize): number {
  return size + 8;
}

/** The pose change: down, the new pose swapped in at the bottom, up past
 * level and back. The squash hides the swap, and the remount under it hides
 * that two poses have different petals. */
const SQUASH_MS = 90;
const UP_MS = 100;
const LAND_MS = 80;
const SWAP_MS = SQUASH_MS + UP_MS + LAND_MS;
/** A move asked for with a swap plays once he is standing again. */
const AFTER_SWAP_MS = 60;
/** Arriving from nowhere waits out the page's exit (`EXIT_MS`), so he comes
 * in with the question rather than over the one leaving. */
const SHOW_DELAY_MS = 130;
const SHOW_MS = 220;
const HIDE_MS = 120;
/** Reduce Motion: every change is this crossfade, and nothing scales. */
const FADE_MS = 150;

const EASE = Easing.bezier(0.23, 1, 0.32, 1);

type Drawn = { pose: CoachPose; mirrored: boolean; size: SpeakerSize };

export type CoachSpeakerProps = {
  /** Where the coach is for the step arriving, and how he stands. He shows
   * only when it is `speaker`; a hero step draws its own. */
  moment: CoachMoment | null;
  shot: SpeakerShot | null;
  size: SpeakerSize;
  /** Something covers him: the sign-in sheet, the habit's time wheel, a clip
   * open full screen. His idle loop stops under it. */
  paused: boolean;
  /** The page he stands on, for the outline in the dark. */
  surface: string;
};

/**
 * Walkito as the coach, in the top-right corner of every question.
 *
 * Mounted once, beside the sliding body rather than in it, so he stays put
 * while the questions slide past and never remounts between them. What he
 * holds and does is the page's (`model/coach.ts` decides); this only draws it:
 * a squash between poses, a pop in from nothing, a fade out to nothing, and
 * the moves when they are asked for. When he hides he unmounts, so no frame
 * callback is left running behind a hero step.
 *
 * Silent but for a tap: poking him boings, the one sound a tap makes. Every
 * other sound is chosen by the page and rides on a move.
 */
export function CoachSpeaker({ moment, shot, size, paused, surface }: CoachSpeakerProps) {
  const reduceMotion = useReducedMotion();
  const focused = useIsFocused();
  const active = useAppActive();

  const wanted = moment?.where === 'speaker';
  const pose = moment?.pose ?? 'idle';
  const mirrored = moment?.mirrored ?? false;

  const [mounted, setMounted] = useState(wanted);
  const [drawn, setDrawn] = useState<Drawn | null>(wanted ? { pose, mirrored, size } : null);
  const drawnRef = useRef(drawn);
  /** On screen or on the way in; false while fading out and once gone. */
  const shown = useRef(wanted);
  /** When the swap in flight stands up again, for a move asked for with it. */
  const swapEnds = useRef(0);

  const opacity = useSharedValue(wanted ? 1 : 0);
  const scale = useSharedValue(1);
  const squash = useSharedValue(1);
  const mascot = useRef<MascotHandle>(null);

  const hideTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const swapTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const shotTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const clear = (timer: { current: ReturnType<typeof setTimeout> | null }) => {
    if (timer.current != null) clearTimeout(timer.current);
    timer.current = null;
  };
  const draw = (next: Drawn) => {
    drawnRef.current = next;
    setDrawn(next);
  };

  // Where he is and how he stands. Declared before the move's effect: a pose
  // change drops a move still waiting from the step before, and a move asked
  // for in the same render as the change is scheduled after it.
  useEffect(() => {
    clear(swapTimer);
    clear(shotTimer);
    if (!wanted) {
      if (!shown.current) return;
      shown.current = false;
      opacity.value = withTiming(0, { duration: HIDE_MS, reduceMotion: ReduceMotion.Never });
      hideTimer.current = setTimeout(() => setMounted(false), HIDE_MS);
      return;
    }
    const next: Drawn = { pose, mirrored, size };
    if (!shown.current) {
      // From nothing: in with the question, growing into place.
      shown.current = true;
      clear(hideTimer);
      draw(next);
      setMounted(true);
      squash.value = 1;
      opacity.value = 0;
      opacity.value = withDelay(
        SHOW_DELAY_MS,
        withTiming(1, { duration: reduceMotion ? FADE_MS : SHOW_MS, easing: EASE, reduceMotion: ReduceMotion.Never }),
      );
      scale.value = reduceMotion ? 1 : 0.6;
      if (!reduceMotion) scale.value = withDelay(SHOW_DELAY_MS, withTiming(1, { duration: SHOW_MS, easing: EASE }));
      swapEnds.current = Date.now() + SHOW_DELAY_MS + SHOW_MS;
      return;
    }
    const was = drawnRef.current;
    if (was != null && was.pose === next.pose && was.mirrored === next.mirrored && was.size === next.size) return;
    if (reduceMotion) {
      const half = FADE_MS / 2;
      opacity.value = withSequence(
        withTiming(0, { duration: half, reduceMotion: ReduceMotion.Never }),
        withTiming(1, { duration: half, reduceMotion: ReduceMotion.Never }),
      );
      swapTimer.current = setTimeout(() => draw(next), half);
      swapEnds.current = Date.now() + FADE_MS;
      return;
    }
    squash.value = withSequence(
      withTiming(0.82, { duration: SQUASH_MS, easing: Easing.in(Easing.quad) }),
      withTiming(1.06, { duration: UP_MS, easing: EASE }),
      withTiming(1, { duration: LAND_MS, easing: EASE }),
    );
    swapTimer.current = setTimeout(() => draw(next), SQUASH_MS);
    swapEnds.current = Date.now() + SWAP_MS;
    // The shared values and the setters are stable; these are the triggers.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [wanted, pose, mirrored, size, reduceMotion]);

  // A move: after its own delay, and never before a swap asked for with it
  // has stood back up.
  useEffect(() => {
    if (shot == null || !shown.current) return;
    clear(shotTimer);
    const wait = Math.max(shot.delay ?? 0, swapEnds.current + AFTER_SWAP_MS - Date.now(), 0);
    shotTimer.current = setTimeout(() => {
      shotTimer.current = null;
      mascot.current?.play(shot.move);
      if (shot.sound != null) playMascotSound(shot.sound);
    }, wait);
    // Keyed on the shot alone: a new key is a new move.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [shot?.key]);

  useEffect(
    () => () => {
      clear(hideTimer);
      clear(swapTimer);
      clear(shotTimer);
    },
    [],
  );

  const showStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
    transform: [{ scale: scale.value }],
  }));
  const squashStyle = useAnimatedStyle(() => ({
    transform: [{ scaleY: squash.value }],
  }));

  if (!mounted || drawn == null) return null;
  return (
    <Animated.View
      accessibilityElementsHidden
      importantForAccessibility="no-hide-descendants"
      style={[styles.root, { width: drawn.size, height: drawn.size }, showStyle]}>
      <Animated.View style={[styles.stand, squashStyle]}>
        {/* Keyed on the pose: a new pose is a fresh character, not one rig's
            motion state driving another's parts. */}
        <Mascot
          key={drawn.pose}
          ref={mascot}
          rig={rigFor(drawn.pose)}
          state={drawn.pose === 'thinking' ? 'thinking' : 'idle'}
          size={drawn.size}
          surface={surface}
          mirrored={drawn.mirrored}
          paused={paused || !focused || !active}
          // `Mascot` pokes itself; the boing is the only sound a tap makes.
          onPress={() => playMascotSound('boing')}
        />
      </Animated.View>
    </Animated.View>
  );
}

/** Whether the app is in front: he stops breathing behind it. */
function useAppActive(): boolean {
  const [active, setActive] = useState(AppState.currentState === 'active');
  useEffect(() => {
    const subscription = AppState.addEventListener('change', (next) => setActive(next === 'active'));
    return () => subscription.remove();
  }, []);
  return active;
}

const styles = StyleSheet.create({
  root: {
    position: 'absolute',
    top: 0,
    right: 0,
  },
  /** Squashes into the ground he stands on, not about his middle. */
  stand: {
    flex: 1,
    transformOrigin: 'center bottom',
  },
});
