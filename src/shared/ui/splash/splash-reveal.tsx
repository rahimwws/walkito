import { requireOptionalNativeModule } from 'expo';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import Animated, {
  Easing,
  ReduceMotion,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import { scheduleOnRN } from 'react-native-worklets';

import { colors, fonts } from '@/shared/config';
import { useT } from '@/shared/lib/i18n';

import { REVEAL_BY_MS, REVEAL_MS, SPLASH_BACKGROUND, UNMOUNT_GRACE_MS } from './reveal-math';
import { markSplashRevealed } from './revealed';

/**
 * The native splash leaves in one frame, onto this overlay's identical white.
 * Through the optional native lookup expo-router itself uses, so a binary
 * without the module just keeps its default.
 */
try {
  requireOptionalNativeModule<{
    setOptions?: (options: { duration: number; fade: boolean }) => void;
  }>('ExpoSplashScreen')?.setOptions?.({ duration: 0, fade: false });
} catch {
  // An older module that rejects the options: its default exit stands.
}

/**
 * Once per JavaScript runtime. A cold start and the relaunch after an
 * over-the-air update each start a new runtime, and play it; a remount of the
 * root layout within the same runtime finds this set and draws nothing.
 */
let played = false;

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
 * The launch: the wordmark on white, then a short fade onto the app, which
 * renders underneath from the start. Mount it once, at the root, above
 * everything.
 */
export function SplashReveal({ ready, holdMs = 0 }: SplashRevealProps) {
  const [done, setDone] = useState(() => played);
  useEffect(() => {
    played = true;
  }, []);
  useEffect(() => {
    if (done) markSplashRevealed();
  }, [done]);
  const finish = useCallback(() => setDone(true), []);
  if (done) return null;
  return <Reveal ready={ready} holdMs={holdMs} onDone={finish} />;
}

type RevealProps = { ready: boolean; holdMs: number; onDone: () => void };

function Reveal({ ready, holdMs, onDone }: RevealProps) {
  const t = useT();
  const [appLaidOut, setAppLaidOut] = useState(false);
  const [held, setHeld] = useState(() => !(holdMs > 0));
  const holdFor = useRef(holdMs).current;
  const cover = useSharedValue(1);
  const started = useRef(false);
  const ended = useRef(false);
  const unmountTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const end = useCallback(() => {
    if (ended.current) return;
    ended.current = true;
    onDone();
  }, [onDone]);

  const start = useCallback(() => {
    if (started.current) return;
    started.current = true;
    const complete = () => {
      'worklet';
      scheduleOnRN(end);
    };
    cover.value = withTiming(
      0,
      { duration: REVEAL_MS, easing: Easing.out(Easing.quad), reduceMotion: ReduceMotion.Never },
      complete,
    );
    unmountTimer.current = setTimeout(end, REVEAL_MS + UNMOUNT_GRACE_MS);
  }, [cover, end]);

  // Two frames after the fonts resolve: one for the commit that mounts the
  // navigator, one for its first screen to lay out.
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

  useEffect(() => {
    if (appLaidOut && held) start();
  }, [appLaidOut, held, start]);

  useEffect(() => {
    const timer = setTimeout(start, REVEAL_BY_MS);
    return () => clearTimeout(timer);
  }, [start]);

  useEffect(
    () => () => {
      if (unmountTimer.current != null) clearTimeout(unmountTimer.current);
      markSplashRevealed();
    },
    [],
  );

  // A gesture of its own, which never activates, so gesture-handler's Android
  // hit-test stops here instead of passing taps to the app underneath.
  const blockGestures = useMemo(() => Gesture.Manual(), []);
  const coverStyle = useAnimatedStyle(() => ({ opacity: cover.value }));

  return (
    <GestureDetector gesture={blockGestures}>
      <View
        collapsable={false}
        pointerEvents="auto"
        onStartShouldSetResponder={() => true}
        accessible={false}
        accessibilityElementsHidden
        importantForAccessibility="no-hide-descendants"
        style={StyleSheet.absoluteFill}>
        <Animated.View pointerEvents="none" style={[StyleSheet.absoluteFill, styles.cover, coverStyle]}>
          <Text style={styles.wordmark} allowFontScaling={false}>
            {t('splash.wordmark')}
          </Text>
        </Animated.View>
      </View>
    </GestureDetector>
  );
}

const styles = StyleSheet.create({
  cover: {
    backgroundColor: SPLASH_BACKGROUND,
    alignItems: 'center',
    justifyContent: 'center',
  },
  wordmark: { ...fonts.bold(34, -0.4), color: colors.text },
});
