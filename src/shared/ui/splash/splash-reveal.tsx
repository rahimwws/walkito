import { requireOptionalNativeModule } from 'expo';
import { useCallback, useEffect, useMemo, useRef, useState, type ComponentType } from 'react';
import { Image, PixelRatio, StyleSheet, View } from 'react-native';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import Animated, {
  Easing,
  ReduceMotion,
  useAnimatedStyle,
  useReducedMotion,
  useSharedValue,
  withDelay,
  withTiming,
} from 'react-native-reanimated';
import { useSafeAreaFrame } from 'react-native-safe-area-context';
import { scheduleOnRN } from 'react-native-worklets';

import { palette } from '@/shared/config';

import {
  CROUCH_MS,
  MASK_GRACE_MS,
  REDUCED_FADE_MS,
  REVEAL_BY_MS,
  REVEAL_MS,
  UNMOUNT_GRACE_MS,
  ZOOM_MS,
  mascotBox,
} from './reveal-math';
import { markSplashRevealed } from './revealed';
import type { SplashMaskProps } from './splash-mask';

/** The same still the native splash and the update reload screen show. */
const MASCOT = require('@assets/update/mascot-handoff.png');

/**
 * The native splash leaves in one frame, onto this overlay's identical first
 * frame. Android's default exit is a 400 ms fade, which would sit over the
 * crouch and the opening hole as a double exposure: expo-router hides the
 * native splash a frame after the navigator is ready, the same moment the
 * reveal starts. iOS already hides it at once; saying so pins it.
 *
 * Through the optional native lookup expo-router itself uses, never the
 * `expo-splash-screen` JS package, so a binary without the module (a dev
 * client built before it was added) just keeps its default.
 */
try {
  requireOptionalNativeModule<{
    setOptions?: (options: { duration: number; fade: boolean }) => void;
  }>('ExpoSplashScreen')?.setOptions?.({ duration: 0, fade: false });
} catch {
  // An older module that rejects the options: its default exit stands.
}

/**
 * The native splash's colour, not `palette[scheme]`: app.json pins the native
 * splash (and the whole app) dark, and this frame has to be the one it
 * replaces whatever the JS theme ever says.
 */
const BACKGROUND = palette.dark.background;

/**
 * Once per JavaScript runtime. A cold start and the relaunch after an
 * over-the-air update each start a new runtime, and play it; returning from
 * the background does not remount anything, and a remount of the root layout
 * within the same runtime finds this set and draws nothing.
 */
let played = false;

type MaskComponent = ComponentType<SplashMaskProps>;
let maskComponent: MaskComponent | null | undefined;

/**
 * Skia, required on first use rather than imported. Evaluating its module is
 * not free, and the first frame (this overlay's plain cover) must not wait on
 * it; by the time it is required the cover is up and the fonts are loading. A
 * binary that cannot load it gets the Reduce Motion fade instead.
 */
function loadMask(): MaskComponent | null {
  if (maskComponent === undefined) {
    try {
      maskComponent = (require('./splash-mask') as typeof import('./splash-mask')).SplashMask;
    } catch {
      maskComponent = null;
    }
  }
  return maskComponent;
}

export type SplashRevealProps = {
  /** The app underneath can be shown: fonts loaded, or failed to. */
  ready: boolean;
  /**
   * The reveal does not start until this long after the overlay mounts, even
   * if the app is ready sooner. For something native still fading out over
   * the first frame: after an update's restart, expo-updates' reload screen.
   */
  holdMs?: number;
};

/**
 * The launch reveal: the mascot on the splash colour, then the app opens
 * through him as he leaps at the screen.
 *
 * Mount it once, at the root, above everything. It is part of the very first
 * frame, before the fonts load, so the native splash (the same colour, the
 * same still in the same 200 pt square) hides onto an identical picture and
 * nothing blinks. The app renders underneath it from the start; this only
 * covers it, and plays once the first screen has laid out. See the note in
 * `root-layout.tsx` for why that is not the old splash's delay again.
 *
 * No haptic. It plays on every cold start, before the person has touched
 * anything, and a buzz they did not cause reads as a notification, not as the
 * app opening. No text either, so nothing to translate, and it is hidden from
 * VoiceOver and TalkBack: there is nothing on it to read.
 */
export function SplashReveal({ ready, holdMs = 0 }: SplashRevealProps) {
  const [done, setDone] = useState(() => played);
  useEffect(() => {
    played = true;
  }, []);
  // Also on a remount that finds it already played: see `useSplashRevealed`.
  useEffect(() => {
    if (done) markSplashRevealed();
  }, [done]);
  const finish = useCallback(() => setDone(true), []);
  if (done) return null;
  return <Reveal ready={ready} holdMs={holdMs} onDone={finish} />;
}

type Phase = 'hold' | 'zoom' | 'fade';

type RevealProps = { ready: boolean; holdMs: number; onDone: () => void };

function Reveal({ ready, holdMs, onDone }: RevealProps) {
  // The root view's own frame, which this overlay fills, rather than the
  // window metrics: on Android those leave out the navigation bar while the
  // edge-to-edge root, the native splash and this overlay all span it, so the
  // mascot would sit half a bar above the native one and the zoom would stop
  // short of the bottom corners. Known on the first render: the safe-area
  // provider expo-router mounts renders nothing until it has measured.
  const { width, height } = useSafeAreaFrame();
  // Memoised so the Skia mask, which is memoised on its props, is not
  // re-recorded by the overlay's own state changes.
  const box = useMemo(() => mascotBox(width, height, PixelRatio.get()), [width, height]);
  const reduceMotion = useReducedMotion();

  const [phase, setPhase] = useState<Phase>('hold');
  // Mounted a frame after the cover, never in the first commit — see `loadMask`.
  const [Mask, setMask] = useState<MaskComponent | null>(null);
  const [maskPainted, setMaskPainted] = useState(false);
  const [maskFailed, setMaskFailed] = useState(false);
  const [appLaidOut, setAppLaidOut] = useState(false);
  // Fixed at mount: the hold is counted from the first frame.
  const [held, setHeld] = useState(() => !(holdMs > 0));
  const holdFor = useRef(holdMs).current;

  const cover = useSharedValue(1);
  const crouch = useSharedValue(0);
  const zoom = useSharedValue(0);

  const started = useRef(false);
  const ended = useRef(false);
  const unmountTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const end = useCallback(() => {
    if (ended.current) return;
    ended.current = true;
    onDone();
  }, [onDone]);

  const start = useCallback(
    (mode: 'zoom' | 'fade') => {
      if (started.current) return;
      started.current = true;
      setPhase(mode);
      const complete = () => {
        'worklet';
        scheduleOnRN(end);
      };
      if (mode === 'zoom') {
        // Skia has drawn the identical picture under the cover, so dropping
        // the cover changes no pixel; the next frame is the crouch.
        cover.value = 0;
        crouch.value = withTiming(1, {
          duration: CROUCH_MS,
          easing: Easing.out(Easing.quad),
          reduceMotion: ReduceMotion.Never,
        });
        zoom.value = withDelay(
          CROUCH_MS,
          withTiming(
            1,
            { duration: ZOOM_MS, easing: Easing.linear, reduceMotion: ReduceMotion.Never },
            complete,
          ),
          ReduceMotion.Never,
        );
      } else {
        cover.value = withTiming(
          0,
          { duration: REDUCED_FADE_MS, easing: Easing.out(Easing.quad), reduceMotion: ReduceMotion.Never },
          complete,
        );
      }
      unmountTimer.current = setTimeout(
        end,
        (mode === 'zoom' ? REVEAL_MS : REDUCED_FADE_MS) + UNMOUNT_GRACE_MS,
      );
    },
    [cover, crouch, zoom, end],
  );

  // After the first frame: bring in Skia, unless it will not be used.
  useEffect(() => {
    if (reduceMotion) return;
    const frame = requestAnimationFrame(() => {
      const component = loadMask();
      if (component == null) setMaskFailed(true);
      else setMask(() => component);
    });
    return () => cancelAnimationFrame(frame);
  }, [reduceMotion]);

  // The app is ready to be seen two frames after the fonts resolve: one for the
  // commit that mounts the navigator, one for its first screen to lay out.
  useEffect(() => {
    if (!ready) return;
    let second = 0;
    const first = requestAnimationFrame(() => {
      second = requestAnimationFrame(() => setAppLaidOut(true));
    });
    return () => {
      cancelAnimationFrame(first);
      cancelAnimationFrame(second);
    };
  }, [ready]);

  useEffect(() => {
    if (held) return;
    const timer = setTimeout(() => setHeld(true), holdFor);
    return () => clearTimeout(timer);
  }, [held, holdFor]);

  const paintedRef = useRef(false);
  paintedRef.current = maskPainted;

  useEffect(() => {
    if (!appLaidOut || !held) return;
    if (!reduceMotion && maskPainted) {
      start('zoom');
      return;
    }
    if (reduceMotion || maskFailed) {
      start('fade');
      return;
    }
    // Skia is not on screen yet: a short grace, then whichever is ready.
    const timer = setTimeout(
      () => start(paintedRef.current ? 'zoom' : 'fade'),
      MASK_GRACE_MS,
    );
    return () => clearTimeout(timer);
  }, [appLaidOut, held, reduceMotion, maskPainted, maskFailed, start]);

  // The hard stop: revealed by now, with the zoom if Skia is ready for it.
  useEffect(() => {
    const timer = setTimeout(
      () => start(!reduceMotion && paintedRef.current ? 'zoom' : 'fade'),
      REVEAL_BY_MS,
    );
    return () => clearTimeout(timer);
  }, [reduceMotion, start]);

  useEffect(
    () => () => {
      if (unmountTimer.current != null) clearTimeout(unmountTimer.current);
      // However it goes (finished, or the root remounted mid-reveal), once
      // the overlay is gone the app is showing.
      markSplashRevealed();
    },
    [],
  );

  // A gesture of its own, which never activates, so gesture-handler's Android
  // hit-test stops here. It walks the view tree itself, and passes over a view
  // with no handler and no background (this one) to the app's gestures below:
  // a tap on the tab bar under the mascot would switch tabs. The responder
  // below only stops React Native's own touchables, and UIKit stops at this
  // view anyway.
  const blockGestures = useMemo(() => Gesture.Manual(), []);

  const onPainted = useCallback(() => setMaskPainted(true), []);
  const onFailed = useCallback(() => setMaskFailed(true), []);

  const coverStyle = useAnimatedStyle(() => ({ opacity: cover.value }));

  return (
    <GestureDetector gesture={blockGestures}>
      <View
        // Never flattened away by Fabric, so it is there to take every touch
        // while the app underneath is covered.
        collapsable={false}
        pointerEvents="auto"
        onStartShouldSetResponder={() => true}
        accessible={false}
        accessibilityElementsHidden
        importantForAccessibility="no-hide-descendants"
        style={StyleSheet.absoluteFill}>
        {Mask != null && phase !== 'fade' ? (
          <Mask
            width={width}
            height={height}
            box={box}
            background={BACKGROUND}
            crouch={crouch}
            zoom={zoom}
            onPainted={onPainted}
            onFailed={onFailed}
          />
        ) : null}
        {/* The cover: the first frames, in plain views rather than Skia.

            A view's background is mounted in the same commit as the view, so
            the colour is on screen in the very first frame whatever else is
            slow. A Skia canvas is not: it draws its first picture on a later
            frame, and `useImage` decodes asynchronously, so a canvas alone
            would let the app show through before the splash appeared. The
            Image decodes while the native splash is still up (expo-router
            hides that only once the navigator is ready, after the fonts'
            async load), so by the time this is uncovered the still is there.
            Skia is mounted underneath once it is loaded, draws the same
            picture, and only when that has been on screen does the cover go. */}
        <Animated.View
          pointerEvents="none"
          style={[StyleSheet.absoluteFill, { backgroundColor: BACKGROUND }, coverStyle]}>
          <Image
            source={MASCOT}
            // Android fades a newly decoded image in over 300 ms by default; the
            // native splash it replaces shows him at once.
            fadeDuration={0}
            resizeMode="contain"
            style={{
              position: 'absolute',
              left: box.x,
              top: box.y,
              width: box.size,
              height: box.size,
            }}
          />
        </Animated.View>
      </View>
    </GestureDetector>
  );
}
