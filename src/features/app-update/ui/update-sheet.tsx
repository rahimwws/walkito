import * as Haptics from 'expo-haptics';
import { memo, useCallback, useEffect, useRef, useState } from 'react';
import { Modal, Pressable, StyleSheet, Text, View } from 'react-native';
import Animated, {
  Easing,
  ReduceMotion,
  useAnimatedStyle,
  useReducedMotion,
  useSharedValue,
  withDelay,
  withTiming,
} from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { scheduleOnRN } from 'react-native-worklets';

import { colors, fonts, radius, space } from '@/shared/config';
import { useT } from '@/shared/lib/i18n';

import type { AppUpdates, UpdateOffer } from '../model/use-app-updates';

import { UpdateButton } from './update-button';

/** How far below the screen the card starts. */
const BELOW = 320;
/** The colour the screen is covered in before the restart: the launch
 * splash's white, so the relaunch opens onto the same picture. */
const CURTAIN = colors.surface;

const motion = ReduceMotion.System;

type UpdateSheetProps = Pick<
  AppUpdates,
  'offer' | 'phase' | 'downloadProgress' | 'accept' | 'dismiss' | 'handoff'
>;

/**
 * "There is a newer version": a plain card at the bottom of the screen.
 *
 * Tapping away is "Later": nothing here has to be answered. That holds while a
 * retried download is still running, too. Only once the restart itself has
 * started does the sheet stay put. A tap on the card is not a tap outside.
 *
 * After "Update now" the screen fades to white and the native reload screen
 * (the same white, see `model/reload-screen.ts`) takes over, so the restart
 * reads as one fade onto the relaunched app.
 */
export const UpdateSheet = memo(function UpdateSheet({
  offer,
  phase,
  downloadProgress,
  accept,
  dismiss,
  handoff,
}: UpdateSheetProps) {
  const insets = useSafeAreaInsets();
  const reduceMotion = useReducedMotion();
  const t = useT();
  const bottom = Math.max(insets.bottom, 16);

  /** Held after `offer` clears, so the exit has something to play on. */
  const [shown, setShown] = useState<UpdateOffer | null>(null);
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);

  const latestOffer = useRef(offer);
  latestOffer.current = offer;
  const mountedRef = useRef(false);
  const covered = useRef(false);
  const choreographed = useRef(false);
  const live = useRef(true);
  useEffect(() => {
    live.current = true;
    return () => {
      live.current = false;
    };
  }, []);

  const veil = useSharedValue(0);
  const rise = useSharedValue(0);
  const curtain = useSharedValue(0);
  const bar = useSharedValue(0);
  const away = useSharedValue(0);

  const unmount = useCallback(() => {
    if (!live.current || latestOffer.current != null) return;
    mountedRef.current = false;
    setMounted(false);
    setShown(null);
  }, []);

  const enter = useCallback(() => {
    setOpen(true);
    void Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light).catch(() => undefined);
    veil.value = withTiming(1, { duration: 240, easing: Easing.out(Easing.quad), reduceMotion: motion });
    rise.value = reduceMotion
      ? 1
      : withTiming(1, { duration: 320, easing: Easing.out(Easing.cubic), reduceMotion: motion });
  }, [reduceMotion, rise, veil]);

  const exit = useCallback(() => {
    const done = (finished?: boolean) => {
      'worklet';
      if (finished) scheduleOnRN(unmount);
    };
    if (!reduceMotion) {
      rise.value = withTiming(0, { duration: 240, easing: Easing.in(Easing.cubic), reduceMotion: motion });
    }
    veil.value = withTiming(0, { duration: 240, easing: Easing.in(Easing.quad), reduceMotion: motion }, done);
  }, [reduceMotion, rise, veil, unmount]);

  useEffect(() => {
    if (offer != null) {
      setShown(offer);
      if (!mountedRef.current) {
        covered.current = false;
        choreographed.current = false;
        for (const value of [veil, rise, curtain, bar, away]) value.value = 0;
        mountedRef.current = true;
        setMounted(true);
        setOpen(false);
        requestAnimationFrame(() => {
          if (live.current) enter();
        });
      } else {
        enter();
      }
      return;
    }
    if (!mountedRef.current) return;
    if (covered.current) {
      // The development preview, reset under the native reload screen.
      unmount();
      return;
    }
    exit();
    // Only the offer drives this; everything else it touches is stable.
  }, [offer]);

  const onCovered = useCallback(() => {
    covered.current = true;
    requestAnimationFrame(() => handoff(CURTAIN));
  }, [handoff]);

  const playHandoff = useCallback(() => {
    void Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success).catch(() => undefined);
    // Already downloaded, so the bar has nothing to wait for. It fills anyway,
    // briefly: a restart with no visible progress reads as a missed tap.
    bar.value = withTiming(1, {
      duration: bar.value > 0.8 ? 220 : 440,
      easing: Easing.inOut(Easing.cubic),
      reduceMotion: motion,
    });
    const handedOff = (finished?: boolean) => {
      'worklet';
      if (finished) scheduleOnRN(onCovered);
    };
    curtain.value = withDelay(
      360,
      withTiming(1, { duration: 320, easing: Easing.inOut(Easing.quad), reduceMotion: ReduceMotion.Never }, handedOff),
    );
  }, [bar, curtain, onCovered]);

  /** The restart failed after the screen was covered: back to the sheet. */
  const collapse = useCallback(() => {
    covered.current = false;
    curtain.value = withTiming(0, { duration: 240, reduceMotion: ReduceMotion.Never });
  }, [curtain]);

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

  const backdropStyle = useAnimatedStyle(() => ({ opacity: veil.value }));
  const cardStyle = useAnimatedStyle(() => ({
    opacity: veil.value,
    transform: [{ translateY: (1 - rise.value) * BELOW }],
  }));
  const curtainStyle = useAnimatedStyle(() => ({ opacity: curtain.value }));
  const laterStyle = useAnimatedStyle(() => ({ opacity: 1 - away.value }));

  if (!mounted || shown == null) return null;

  const store = shown.kind === 'store';
  const applying = phase === 'applying';
  const busy = phase === 'downloading' || applying;
  const failed = phase === 'failed' && !store;
  const closable = offer != null && open && !applying;
  const interactive = closable && !busy;

  const title = store ? t('update.storeReadyTitle') : t('update.readyTitle');
  const blurb = store
    ? t('update.storeReadyBlurb', { version: shown.version })
    : failed
      ? t('update.failedBlurb')
      : t('update.readyBlurb');
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

  return (
    <Modal
      transparent
      animationType="none"
      visible
      statusBarTranslucent
      navigationBarTranslucent
      onRequestClose={close}>
      <View style={styles.fill} accessibilityViewIsModal pointerEvents={offer != null && open ? 'auto' : 'none'}>
        <Animated.View style={[styles.fill, styles.wash, backdropStyle]} pointerEvents="none" />
        <Pressable
          accessibilityRole="button"
          accessibilityLabel={t('update.close')}
          style={styles.fill}
          onPress={close}
        />
        {/* 'auto': the card is its own hit area, so a tap on it is not "Later". */}
        <Animated.View
          style={[styles.card, { bottom }, cardStyle]}
          pointerEvents={closable ? 'auto' : 'none'}>
          <Text accessibilityRole="header" style={styles.title}>
            {title}
          </Text>
          <Text style={styles.blurb} accessibilityLiveRegion="polite">
            {blurb}
          </Text>
          <UpdateButton label={cta} busy={busy} progress={bar} onPress={primary} />
          <Animated.View style={laterStyle}>
            <Pressable
              accessibilityRole="button"
              accessibilityElementsHidden={applying}
              importantForAccessibility={applying ? 'no-hide-descendants' : 'auto'}
              disabled={applying}
              onPress={close}
              hitSlop={8}
              style={({ pressed }) => [styles.later, pressed && { opacity: 0.5 }]}>
              <Text style={styles.laterText}>{t('update.maybeLater')}</Text>
            </Pressable>
          </Animated.View>
        </Animated.View>
        <Animated.View
          style={[styles.fill, { backgroundColor: CURTAIN }, curtainStyle]}
          pointerEvents="none"
          accessibilityElementsHidden
          importantForAccessibility="no-hide-descendants"
        />
      </View>
    </Modal>
  );
});

const styles = StyleSheet.create({
  fill: { position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 },
  wash: { backgroundColor: 'rgba(0,0,0,0.3)' },
  card: {
    position: 'absolute',
    left: 12,
    right: 12,
    backgroundColor: colors.surface,
    borderRadius: radius.card,
    borderCurve: 'continuous',
    paddingHorizontal: space.card,
    paddingTop: 28,
    paddingBottom: 10,
  },
  title: { ...fonts.bold(28), color: colors.text, textAlign: 'center' },
  blurb: {
    ...fonts.regular(17),
    lineHeight: 24,
    color: colors.text2,
    textAlign: 'center',
    marginTop: 8,
    marginBottom: 24,
  },
  later: { alignSelf: 'center', paddingVertical: 14 },
  laterText: { ...fonts.semibold(17), color: colors.text2 },
});
