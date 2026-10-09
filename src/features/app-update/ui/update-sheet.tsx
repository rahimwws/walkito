import { BlurView } from 'expo-blur';
import * as Haptics from 'expo-haptics';
import LottieView from 'lottie-react-native';
import { memo, useCallback, useEffect, useRef, useState, type ReactNode } from 'react';
import {
  Image,
  Modal,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
  type LayoutChangeEvent,
} from 'react-native';
import Animated, {
  Easing,
  Extrapolation,
  ReduceMotion,
  interpolate,
  interpolateColor,
  useAnimatedStyle,
  useReducedMotion,
  useSharedValue,
  withDelay,
  withSequence,
  withTiming,
  type SharedValue,
} from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { scheduleOnRN } from 'react-native-worklets';

import { fonts, meterColors, palette } from '@/shared/config';
import { useT } from '@/shared/lib/i18n';
import { useColorScheme } from '@/shared/lib/theme';
import { settle } from '@/shared/lib/motion';

import {
  HANDOFF_SIZE,
  HOP_FROM_FRAME,
  HOP_PEAK_MS,
  HOP_TO_FRAME,
  MASCOT_FEET,
  MASCOT_LOTTIE,
  MASCOT_STILL,
  SHEET_MASCOT_SIZE,
} from '../config/mascot';
import type { AppUpdates, UpdateOffer } from '../model/use-app-updates';

import { UpdateButton } from './update-button';

/** The streak sheet's metrics, so every aside is one shape. */
const MARGIN = 14;
const RADIUS = 36;
const BLUR = 28;
/** How far below the screen the card starts, past its own height. */
const BELOW = 24;
/** How far his feet stand inside the card's top edge. The card's top padding
 * clears it. */
const SINK = 18;
/** His box on the sheet as a fraction of the handoff box he is drawn at. */
const REST_SCALE = SHEET_MASCOT_SIZE / HANDOFF_SIZE;
/** The happy jump, in points. */
const HOP = 26;

/** The whole restart choreography runs on the UI thread, off one clock. The
 * offsets are from the tap; the expansion ends at `EXPAND_AT + EXPAND_MS`,
 * which is the moment the native reload screen takes over. */
const FADE_AT = 360;
const EXPAND_AT = 440;
const EXPAND_MS = 420;
/** Fast out of the gate, a long soft landing — the card blooms rather than
 * slams, and the last frames barely move, which is what makes the native
 * screen replacing them invisible. */
const EXPAND_EASING = Easing.bezier(0.32, 0.72, 0, 1);

/** Longest the sheet waits for the Lottie before rising anyway. */
const WARM_MAX_MS = 700;

const motion = ReduceMotion.System;

type UpdateSheetProps = Pick<
  AppUpdates,
  'offer' | 'phase' | 'downloadProgress' | 'accept' | 'dismiss' | 'handoff'
>;

/**
 * "There is a newer version", with the mascot standing on it.
 *
 * Tapping away is "Later": nothing here has to be answered, and an update
 * prompt that traps the person is how an app gets deleted instead of updated.
 * That holds while a retried download is still running, too. Only once the
 * restart itself has started does the sheet stay put. The card and the mascot
 * are solid, though: a tap on them is not a tap outside, and must not quietly
 * snooze the update for a day.
 *
 * **The restart is the part that has to feel like nothing.** An over-the-air
 * update ends in `Updates.reloadAsync()`, which tears the JavaScript down and
 * boots it again; left alone that is a hard cut to a blank screen and back. So
 * the sheet does not stop at the button. After the tap the mascot hops, the
 * card blooms out to cover the screen in the app's own background, and he
 * glides to its centre at exactly the size the native reload screen draws its
 * image. That screen is configured with the same colour and a still of the same
 * frame (see `config/mascot.ts`), so when it appears over the top it is the
 * frame already showing — and when the new bundle has drawn, it fades out onto
 * the relaunched app.
 *
 * Nothing loops once the sheet is gone: the Lottie is only mounted while the
 * sheet is, and it is swapped for the still as soon as the choreography starts.
 * With Reduce Motion it is never mounted at all; he stands still, as he does on
 * the welcome screen for those users.
 */
export const UpdateSheet = memo(function UpdateSheet({
  offer,
  phase,
  downloadProgress,
  accept,
  dismiss,
  handoff,
}: UpdateSheetProps) {
  const scheme = useColorScheme();
  const colors = palette[scheme];
  const meter = meterColors[scheme];
  const insets = useSafeAreaInsets();
  const viewport = useWindowDimensions();
  const reduceMotion = useReducedMotion();
  const t = useT();

  const bottom = Math.max(insets.bottom, 16);

  /** Held after `offer` clears, so the exit has something to play on. */
  const [shown, setShown] = useState<UpdateOffer | null>(null);
  const [mounted, setMounted] = useState(false);
  /** The Lottie is mounted: until the handoff swaps it for the still. */
  const [lottieOn, setLottieOn] = useState(true);
  /** The Lottie has had time to decode its frames, so rising now will not
   * stutter on it. */
  const [warm, setWarm] = useState(false);
  /**
   * The sheet has started to rise. Before that the Modal is up but nothing on
   * it is visible (the Lottie is still decoding), so a tap there must not count
   * as "Later" — it would snooze, for a day, an offer nobody saw.
   */
  const [open, setOpen] = useState(false);
  const [screen, setScreen] = useState({ width: viewport.width, height: viewport.height });
  const [cardHeight, setCardHeight] = useState(0);

  const lottie = useRef<LottieView>(null);
  const latestOffer = useRef(offer);
  latestOffer.current = offer;
  const mountedRef = useRef(false);
  const entered = useRef(false);
  const exiting = useRef(false);
  /** The screen is covered and the restart handed off. */
  const covered = useRef(false);
  /** The handoff has started for the current yes. */
  const choreographed = useRef(false);
  const live = useRef(true);
  useEffect(() => {
    live.current = true;
    return () => {
      live.current = false;
    };
  }, []);

  // ── Shared values ─────────────────────────────────────────────────────────
  const dims = useSharedValue({ h: screen.height, w: screen.width, bottom });
  const cardH = useSharedValue(0);
  const rm = useSharedValue(reduceMotion);
  /** Backdrop; also every opacity, when reduce motion turns the moves off. */
  const veil = useSharedValue(0);
  /** The card coming up from below. */
  const rise = useSharedValue(0);
  /** The mascot popping up out of it. */
  const enter = useSharedValue(0);
  /** Title, blurb, button and "Later", staggered. */
  const reveal = useSharedValue(0);
  /** The copy leaving before the card blooms. */
  const dim = useSharedValue(0);
  const hop = useSharedValue(0);
  const squash = useSharedValue(0);
  /** Lottie → still crossfade. */
  const still = useSharedValue(0);
  /** Card → whole screen, mascot → centre. */
  const expand = useSharedValue(0);
  /** The final frame as one opaque layer: the reduce-motion path fades it in,
   * the full path lays it over an identical expanded state. */
  const curtain = useSharedValue(0);
  const bar = useSharedValue(0);
  /** "Later" stepping back once they have said yes. */
  const away = useSharedValue(0);

  useEffect(() => {
    dims.value = { h: screen.height, w: screen.width, bottom };
  }, [screen, bottom, dims]);
  useEffect(() => {
    rm.value = reduceMotion;
  }, [reduceMotion, rm]);

  // ── Mount, rise, leave ────────────────────────────────────────────────────
  const unmount = useCallback(() => {
    if (!live.current || latestOffer.current != null) return;
    exiting.current = false;
    mountedRef.current = false;
    setMounted(false);
    setShown(null);
  }, []);

  const enterNow = useCallback(() => {
    exiting.current = false;
    setOpen(true);
    void Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light).catch(() => undefined);
    if (reduceMotion) {
      // No travel: everything is where it belongs and simply fades in.
      rise.value = 1;
      enter.value = 1;
      reveal.value = 1;
      veil.value = withTiming(1, { duration: 240, reduceMotion: ReduceMotion.Never });
      return;
    }
    veil.value = withTiming(1, {
      duration: 300,
      easing: Easing.out(Easing.quad),
      reduceMotion: motion,
    });
    // The card rises and comes to rest; no overshoot (`shared/lib/motion`).
    rise.value = settle(1, 420, motion);
    // A beat after the card, he rises out of it.
    enter.value = withDelay(170, settle(1, 460, motion));
    reveal.value = withDelay(
      220,
      withTiming(1, { duration: 640, easing: Easing.out(Easing.cubic), reduceMotion: motion }),
    );
  }, [reduceMotion, rise, enter, reveal, veil]);

  const exit = useCallback(() => {
    exiting.current = true;
    const done = (finished?: boolean) => {
      'worklet';
      if (finished) scheduleOnRN(unmount);
    };
    if (reduceMotion) {
      veil.value = withTiming(0, { duration: 200, reduceMotion: ReduceMotion.Never }, done);
      return;
    }
    enter.value = withTiming(0, {
      duration: 160,
      easing: Easing.in(Easing.quad),
      reduceMotion: motion,
    });
    reveal.value = withTiming(0, { duration: 160, reduceMotion: motion });
    rise.value = withDelay(
      40,
      withTiming(0, { duration: 260, easing: Easing.in(Easing.cubic), reduceMotion: motion }),
    );
    veil.value = withTiming(
      0,
      { duration: 300, easing: Easing.in(Easing.quad), reduceMotion: motion },
      done,
    );
  }, [reduceMotion, enter, reveal, rise, veil, unmount]);

  useEffect(() => {
    if (offer != null) {
      setShown(offer);
      if (!mountedRef.current) {
        // A fresh sheet: every value from zero, and the Lottie back.
        entered.current = false;
        covered.current = false;
        choreographed.current = false;
        for (const value of [
          cardH,
          veil,
          rise,
          enter,
          reveal,
          dim,
          hop,
          squash,
          still,
          expand,
          curtain,
          bar,
          away,
        ]) {
          value.value = 0;
        }
        // Reduce Motion: the still from the first frame, and no Lottie to wait
        // for.
        if (reduceMotion) still.value = 1;
        setLottieOn(!reduceMotion);
        setWarm(reduceMotion);
        setOpen(false);
        setCardHeight(0);
        mountedRef.current = true;
        setMounted(true);
      } else if (exiting.current) {
        // Came back while leaving: turn round.
        enterNow();
      }
      return;
    }
    if (!mountedRef.current) return;
    if (covered.current) {
      // The development preview, reset under the native reload screen: there
      // is nothing to see, so nothing to animate.
      unmount();
      return;
    }
    exit();
    // Only the offer drives this; everything else it touches is stable.
  }, [offer]);

  // Rise once the card has a height and the Lottie has decoded, never before:
  // mounting 121 frames of WebP blocks the main thread for a moment, and a
  // spring that starts during it stutters.
  useEffect(() => {
    if (!mounted || entered.current || !warm || cardHeight === 0) return;
    entered.current = true;
    enterNow();
  }, [mounted, warm, cardHeight, enterNow]);

  useEffect(() => {
    if (!mounted || warm) return undefined;
    const id = setTimeout(() => setWarm(true), WARM_MAX_MS);
    return () => clearTimeout(id);
  }, [mounted, warm]);

  const markWarm = useCallback(() => {
    if (live.current) setWarm(true);
  }, []);

  // Reduce Motion switched on with the sheet up: he stops, the same as if it
  // had been on when it appeared. (Switched off, he stays still — remounting
  // the Lottie would stall whatever the sheet is animating.)
  useEffect(() => {
    if (!mounted || !reduceMotion) return;
    still.value = 1;
    setLottieOn(false);
    setWarm(true);
  }, [mounted, reduceMotion, still]);

  /**
   * iOS decodes the animation while mounting it, on the main thread, and
   * `onAnimationLoaded` does not fire for an inline JSON source there. Frames
   * are the signal instead: the display link that drives `requestAnimationFrame`
   * cannot tick while the main thread is busy, so three of them after layout
   * means the decode is over. Android loads off the main thread and reports
   * `onAnimationLoaded` itself.
   */
  const onLottieLayout = useCallback(() => {
    if (Platform.OS !== 'ios') return;
    let frames = 0;
    const tick = () => {
      frames += 1;
      if (frames >= 3) markWarm();
      else requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [markWarm]);

  const onScreenLayout = useCallback((event: LayoutChangeEvent) => {
    const { width, height } = event.nativeEvent.layout;
    setScreen((current) =>
      current.width === width && current.height === height ? current : { width, height },
    );
  }, []);

  const onCardLayout = useCallback(
    (event: LayoutChangeEvent) => {
      const height = Math.round(event.nativeEvent.layout.height);
      if (height <= 0) return;
      // The first height is taken as it is; later ones ease. The ready and
      // failed copy share one box (see `Blurb`), so this is only an offer
      // swapped for another with different copy, or the text size changing.
      cardH.value =
        cardH.value === 0
          ? height
          : withTiming(height, {
              duration: 200,
              easing: Easing.out(Easing.cubic),
              reduceMotion: motion,
            });
      setCardHeight(height);
    },
    [cardH],
  );

  // ── The restart ───────────────────────────────────────────────────────────
  const dropLottie = useCallback(() => {
    if (live.current) setLottieOn(false);
  }, []);

  const onCovered = useCallback(() => {
    covered.current = true;
    // Identical to what is on screen; it only makes the last frame one layer.
    curtain.value = 1;
    // One frame for that to reach the glass, then the native side takes over.
    requestAnimationFrame(() => handoff(colors.background));
  }, [curtain, handoff, colors.background]);

  const playHandoff = useCallback(() => {
    void Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success).catch(() => undefined);
    // Already downloaded, so the bar has nothing to wait for. It fills anyway,
    // briefly: a restart that answers with no visible progress reads as a tap
    // that did not register.
    bar.value = withTiming(1, {
      duration: bar.value > 0.8 ? 220 : 440,
      easing: Easing.inOut(Easing.cubic),
      reduceMotion: motion,
    });
    const handedOff = (finished?: boolean) => {
      'worklet';
      if (finished) scheduleOnRN(onCovered);
    };
    const swapped = (finished?: boolean) => {
      'worklet';
      if (finished) scheduleOnRN(dropLottie);
    };

    if (reduceMotion) {
      // Fades only: the still replaces the Lottie, the copy goes, and the final
      // frame dissolves in over the sheet. The restart is the same.
      still.value = withTiming(1, { duration: 140, reduceMotion: ReduceMotion.Never }, swapped);
      dim.value = withDelay(
        300,
        withTiming(1, { duration: 160, reduceMotion: ReduceMotion.Never }),
      );
      curtain.value = withDelay(
        360,
        withTiming(
          1,
          { duration: 280, easing: Easing.inOut(Easing.quad), reduceMotion: ReduceMotion.Never },
          handedOff,
        ),
      );
      return;
    }

    // Settle anything still springing, so the last frame is exact.
    enter.value = withTiming(1, { duration: 140, reduceMotion: motion });
    rise.value = withTiming(1, { duration: 140, reduceMotion: motion });

    // His own hop, take-off to landing, under our jump — and the still fades
    // in over it as the Lottie passes the frame the still was cut from.
    lottie.current?.play(HOP_FROM_FRAME, HOP_TO_FRAME);
    still.value = withDelay(
      Math.max(0, HOP_PEAK_MS - 50),
      withTiming(1, { duration: 100, easing: Easing.linear, reduceMotion: motion }, swapped),
    );
    hop.value = withSequence(
      withTiming(-HOP, { duration: 170, easing: Easing.out(Easing.quad), reduceMotion: motion }),
      withTiming(0, { duration: 160, easing: Easing.in(Easing.quad), reduceMotion: motion }),
    );
    // The landing: squash, then back with a little rebound. Timed, not a
    // spring, so it is fully at rest long before the handoff frame.
    squash.value = withDelay(
      320,
      withSequence(
        withTiming(1, { duration: 70, easing: Easing.out(Easing.quad), reduceMotion: motion }),
        withTiming(0, {
          duration: 220,
          easing: Easing.out(Easing.cubic),
          reduceMotion: motion,
        }),
      ),
    );
    dim.value = withDelay(
      FADE_AT,
      withTiming(1, { duration: 170, easing: Easing.out(Easing.quad), reduceMotion: motion }),
    );
    expand.value = withDelay(
      EXPAND_AT,
      withTiming(
        1,
        { duration: EXPAND_MS, easing: EXPAND_EASING, reduceMotion: motion },
        handedOff,
      ),
    );
  }, [
    reduceMotion,
    bar,
    still,
    dim,
    curtain,
    enter,
    rise,
    hop,
    squash,
    expand,
    onCovered,
    dropLottie,
  ]);

  /** The restart failed after the screen was covered: back to the sheet, with
   * the failure said on it. The still stays — remounting the Lottie now would
   * stall the frames this is trying to animate. */
  const collapse = useCallback(() => {
    covered.current = false;
    if (reduceMotion) {
      curtain.value = withTiming(0, { duration: 240, reduceMotion: ReduceMotion.Never });
      dim.value = withTiming(0, { duration: 200, reduceMotion: ReduceMotion.Never });
      return;
    }
    curtain.value = 0;
    expand.value = withTiming(0, { duration: 380, easing: EXPAND_EASING, reduceMotion: motion });
    dim.value = withDelay(220, withTiming(0, { duration: 220, reduceMotion: motion }));
  }, [reduceMotion, curtain, dim, expand]);

  useEffect(() => {
    if (!mounted) return;
    if (phase === 'applying') {
      if (!choreographed.current) {
        choreographed.current = true;
        playHandoff();
      }
      return;
    }
    if (phase === 'downloading') {
      // Acknowledged now; the success tap waits for the restart itself.
      void Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light).catch(() => undefined);
      bar.value = 0;
      return;
    }
    const wasPlaying = choreographed.current;
    choreographed.current = false;
    if (phase === 'failed') {
      bar.value = withTiming(0, { duration: 200, reduceMotion: motion });
      if (wasPlaying) collapse();
    }
    // Only the phase drives this; the callbacks it calls are stable per sheet.
  }, [phase, mounted]);

  useEffect(() => {
    away.value = withTiming(phase === 'applying' ? 1 : 0, {
      duration: 180,
      easing: Easing.out(Easing.quad),
      reduceMotion: motion,
    });
  }, [phase, away]);

  useEffect(() => {
    if (phase !== 'downloading' || downloadProgress == null) return;
    // Held short of full: the fill to the end belongs to the restart.
    bar.value = withTiming(Math.min(0.92, downloadProgress), {
      duration: 240,
      easing: Easing.out(Easing.quad),
      reduceMotion: motion,
    });
  }, [phase, downloadProgress, bar]);

  // ── Styles ────────────────────────────────────────────────────────────────
  const cardColor = colors.card;
  const background = colors.background;

  const backdropStyle = useAnimatedStyle(() => ({ opacity: veil.value }));

  const surfaceStyle = useAnimatedStyle(() => {
    const { h, w, bottom: gap } = dims.value;
    const height = cardH.value;
    const e = expand.value;
    const top = h - gap - height;
    const lift = (1 - rise.value) * (height + gap + BELOW);
    return {
      top: top * (1 - e),
      left: MARGIN * (1 - e),
      width: w - 2 * MARGIN * (1 - e),
      height: height + (h - height) * e,
      borderRadius: RADIUS * (1 - e),
      backgroundColor: interpolateColor(e, [0, 1], [cardColor, background]),
      opacity: rm.value ? veil.value : 1,
      transform: [{ translateY: lift }],
    };
  });

  const dockStyle = useAnimatedStyle(() => {
    const lift = (1 - rise.value) * (cardH.value + dims.value.bottom + BELOW);
    return {
      opacity: (rm.value ? veil.value : 1) * (1 - dim.value),
      transform: [{ translateY: lift }],
    };
  });

  const stageStyle = useAnimatedStyle(() => {
    const { h, bottom: gap } = dims.value;
    const height = cardH.value;
    const e = expand.value;
    const pop = enter.value;
    const cardTop = h - gap - height;
    const lift = (1 - rise.value) * (height + gap + BELOW);
    // The centre of his box with his feet `SINK` points inside the card.
    const restCentre = cardTop + SINK - (MASCOT_FEET - 0.5) * SHEET_MASCOT_SIZE;
    const restOffset = restCentre - h / 2;
    const scale = interpolate(e, [0, 1], [REST_SCALE, 1]) * (0.6 + 0.4 * pop);
    const sx = 1 + 0.07 * squash.value;
    const sy = 1 - 0.1 * squash.value;
    // Squash about his feet, not his middle, or the landing lifts him.
    const plant = (MASCOT_FEET - 0.5) * HANDOFF_SIZE * scale * (1 - sy);
    const y = (restOffset + lift) * (1 - e) + (1 - pop) * 30 + hop.value + plant;
    return {
      opacity: Math.min(1, pop * 3) * (rm.value ? veil.value : 1),
      transform: [{ translateY: y }, { scaleX: scale * sx }, { scaleY: scale * sy }],
    };
  });

  const stillStyle = useAnimatedStyle(() => ({ opacity: still.value }));
  const curtainStyle = useAnimatedStyle(() => ({ opacity: curtain.value }));
  const laterStyle = useAnimatedStyle(() => ({ opacity: 1 - away.value }));

  if (!mounted || shown == null) return null;

  const store = shown.kind === 'store';
  const applying = phase === 'applying';
  const busy = phase === 'downloading' || applying;
  const failed = phase === 'failed' && !store;
  /** It can be put away: risen, and the restart not started. */
  const closable = offer != null && open && !applying;
  /** The main button can be pressed. */
  const interactive = closable && !busy;

  const title = store ? t('update.storeReadyTitle') : t('update.readyTitle');
  const blurb =
    shown.kind === 'store' ? (
      <Text style={[styles.blurb, styles.blurbSpacing, { color: meter.caption }]}>
        {t('update.storeReadyBlurb', { version: shown.version })}
      </Text>
    ) : (
      <Blurb
        ready={t('update.readyBlurb')}
        failed={t('update.failedBlurb')}
        showFailed={failed}
        color={meter.caption}
      />
    );
  const cta = store
    ? t('update.openAppStore')
    : busy
      ? t('update.updating')
      : failed
        ? t('update.tryAgain')
        : t('update.updateNow');

  const close = () => {
    if (closable) dismiss();
  };
  const primary = () => {
    if (!interactive) return;
    if (store) void Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light).catch(() => undefined);
    accept();
  };

  // The box the native reload screen draws into, in this screen's coordinates.
  const handoffBox = {
    left: (screen.width - HANDOFF_SIZE) / 2,
    top: (screen.height - HANDOFF_SIZE) / 2,
    width: HANDOFF_SIZE,
    height: HANDOFF_SIZE,
  };

  return (
    <Modal
      transparent
      animationType="none"
      visible
      statusBarTranslucent
      navigationBarTranslucent
      onRequestClose={close}>
      <View
        style={styles.fill}
        onLayout={onScreenLayout}
        accessibilityViewIsModal
        pointerEvents={offer != null && open ? 'auto' : 'none'}>
        <Animated.View style={[styles.fill, backdropStyle]} pointerEvents="none">
          <BlurView
            tint={scheme === 'dark' ? 'dark' : 'light'}
            intensity={BLUR}
            style={styles.fill}
          />
          <View style={[styles.fill, styles.wash]} />
        </Animated.View>

        <Pressable
          accessibilityRole="button"
          accessibilityLabel={t('update.close')}
          style={styles.fill}
          onPress={close}
        />

        <Animated.View style={[styles.surface, surfaceStyle]} pointerEvents="none" />

        {/* 'auto', not 'box-none': the dock is the card's hit area. A tap on its
            padding lands here and stops, rather than falling through to the
            backdrop behind it and counting as "Later". */}
        <Animated.View
          style={[styles.dock, { bottom }, dockStyle]}
          onLayout={onCardLayout}
          pointerEvents={closable ? 'auto' : 'none'}>
          <Stagger index={0} progress={reveal}>
            <Text accessibilityRole="header" style={[styles.title, { color: colors.foreground }]}>
              {title}
            </Text>
          </Stagger>
          <Stagger index={1} progress={reveal}>
            {blurb}
          </Stagger>
          <Stagger index={2} progress={reveal}>
            <UpdateButton label={cta} busy={busy} progress={bar} onPress={primary} />
          </Stagger>
          <Stagger index={3} progress={reveal}>
            {/* Kept in the layout while restarting, only hidden, so the card
                does not change height under the choreography. Still there
                while a retried download runs: that one can be walked away
                from. */}
            <Animated.View style={laterStyle}>
              <Pressable
                accessibilityRole="button"
                accessibilityElementsHidden={applying}
                importantForAccessibility={applying ? 'no-hide-descendants' : 'auto'}
                disabled={applying}
                onPress={close}
                hitSlop={8}
                style={({ pressed }) => [styles.later, pressed && { opacity: 0.5 }]}>
                <Text style={[styles.laterText, { color: meter.caption }]}>
                  {t('update.maybeLater')}
                </Text>
              </Pressable>
            </Animated.View>
          </Stagger>
        </Animated.View>

        {/* Solid while the card is, for the same reason: people tap a mascot,
            and that is not "Later". */}
        <Animated.View
          style={[styles.stage, handoffBox, stageStyle]}
          pointerEvents={closable ? 'auto' : 'none'}
          accessibilityElementsHidden
          importantForAccessibility="no-hide-descendants">
          {lottieOn && (
            <LottieView
              ref={lottie}
              source={MASCOT_LOTTIE}
              style={styles.fill}
              resizeMode="contain"
              autoPlay
              loop
              onAnimationLoaded={markWarm}
              onLayout={onLottieLayout}
            />
          )}
          <Animated.View style={[styles.fill, stillStyle]}>
            <Image
              source={MASCOT_STILL}
              style={styles.fill}
              resizeMode="contain"
              fadeDuration={0}
            />
          </Animated.View>
        </Animated.View>

        <Animated.View
          style={[styles.fill, { backgroundColor: background }, curtainStyle]}
          pointerEvents="none"
          accessibilityElementsHidden
          importantForAccessibility="no-hide-descendants">
          <Image
            source={MASCOT_STILL}
            style={[styles.stage, handoffBox]}
            resizeMode="contain"
            fadeDuration={0}
          />
        </Animated.View>
      </View>
    </Modal>
  );
});

/**
 * The update's blurb, in a box as tall as the longer of its two versions.
 *
 * "Ready" and "failed" are laid over each other in a row — each the row's
 * full width, the second pulled back over the first — so the row is the height
 * of the taller one and switching between them moves nothing. The card is laid
 * out from the bottom; a blurb that changed height would move the title
 * instantly while the card's edge and the mascot eased after it. Here the words
 * crossfade and the card stands still.
 */
function Blurb({
  ready,
  failed,
  showFailed,
  color,
}: {
  ready: string;
  failed: string;
  showFailed: boolean;
  color: string;
}) {
  const shown = useSharedValue(showFailed ? 1 : 0);
  useEffect(() => {
    shown.value = withTiming(showFailed ? 1 : 0, {
      duration: 200,
      easing: Easing.out(Easing.quad),
      reduceMotion: motion,
    });
  }, [showFailed, shown]);
  const readyStyle = useAnimatedStyle(() => ({ opacity: 1 - shown.value }));
  const failedStyle = useAnimatedStyle(() => ({ opacity: shown.value }));

  return (
    <View style={[styles.blurbBox, styles.blurbSpacing]}>
      <Animated.View
        style={[styles.blurbLayer, readyStyle]}
        accessibilityElementsHidden={showFailed}
        importantForAccessibility={showFailed ? 'no-hide-descendants' : 'auto'}>
        <Text style={[styles.blurb, { color }]}>{ready}</Text>
      </Animated.View>
      <Animated.View
        style={[styles.blurbLayer, styles.blurbOver, failedStyle]}
        accessibilityElementsHidden={!showFailed}
        importantForAccessibility={showFailed ? 'auto' : 'no-hide-descendants'}>
        <Text style={[styles.blurb, { color }]}>{failed}</Text>
      </Animated.View>
    </View>
  );
}

/** One line of the card, arriving a step after the one above it. */
function Stagger({
  index,
  progress,
  children,
}: {
  index: number;
  progress: SharedValue<number>;
  children: ReactNode;
}) {
  const animated = useAnimatedStyle(() => {
    const start = index * 0.12;
    const v = interpolate(progress.value, [start, start + 0.5], [0, 1], Extrapolation.CLAMP);
    return { opacity: v, transform: [{ translateY: (1 - v) * 12 }] };
  });
  return <Animated.View style={animated}>{children}</Animated.View>;
}

const styles = StyleSheet.create({
  fill: { position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 },
  wash: { backgroundColor: 'rgba(0,0,0,0.18)' },
  surface: {
    position: 'absolute',
    borderCurve: 'continuous',
  },
  dock: {
    position: 'absolute',
    left: MARGIN,
    right: MARGIN,
    paddingHorizontal: 20,
    // Clears the mascot's feet, which stand `SINK` points into the card.
    paddingTop: SINK + 22,
    paddingBottom: 10,
  },
  stage: {
    position: 'absolute',
  },
  title: {
    ...fonts.heavy(26, -0.7),
    textAlign: 'center',
  },
  blurb: {
    ...fonts.medium(15),
    lineHeight: 21,
    textAlign: 'center',
    paddingHorizontal: 4,
  },
  blurbSpacing: { marginTop: 6, marginBottom: 20 },
  blurbBox: { flexDirection: 'row', alignItems: 'center' },
  blurbLayer: { width: '100%' },
  blurbOver: { marginLeft: '-100%' },
  later: { alignSelf: 'center', paddingVertical: 12 },
  laterText: fonts.semibold(16),
});
