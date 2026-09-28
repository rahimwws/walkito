import AppStoreIcon from '@hugeicons/core-free-icons/AppStoreIcon';
import Download04Icon from '@hugeicons/core-free-icons/Download04Icon';
import { HugeiconsIcon } from '@hugeicons/react-native';
import { BlurView } from 'expo-blur';
import { useEffect, useState } from 'react';
import { Modal, Pressable, StyleSheet, Text, View } from 'react-native';
import Animated, {
  Easing,
  ReduceMotion,
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { accents, fonts, meterColors, palette } from '@/shared/config';
import { useT } from '@/shared/lib/i18n';
import { useColorScheme } from '@/shared/lib/theme';
import { PrimaryButton } from '@/shared/ui/primary-button';

import type { AppUpdates, UpdateOffer } from '../model/use-app-updates';

/** The streak sheet's metrics, so every aside is one shape. */
const RADIUS = 36;
const BLUR = 28;
const IN_MS = 340;
const OUT_MS = 220;
const RISE = 44;
const BADGE = 64;

/**
 * "There is a newer version", as an aside.
 *
 * Tapping away is "Later": nothing here has to be answered, and an update
 * prompt that traps the person is how an app gets deleted instead of updated.
 * Once they have said yes to an over-the-air update the sheet stays put until
 * the restart — backing out of a half-downloaded update is not a thing a
 * person can meaningfully choose.
 */
export function UpdateSheet({ offer, applying, failed, accept, dismiss }: AppUpdates) {
  const scheme = useColorScheme();
  const colors = palette[scheme];
  const meter = meterColors[scheme];
  const insets = useSafeAreaInsets();
  const t = useT();
  const tone = accents[scheme].violet;

  const visible = offer != null;
  /** Held after `offer` clears, so the exit has something to play on. */
  const [shown, setShown] = useState<UpdateOffer | null>(null);
  const [mounted, setMounted] = useState(false);
  const progress = useSharedValue(0);

  useEffect(() => {
    if (offer != null) {
      setShown(offer);
      setMounted(true);
      const frame = requestAnimationFrame(() => {
        progress.value = withTiming(1, {
          duration: IN_MS,
          easing: Easing.out(Easing.cubic),
          reduceMotion: ReduceMotion.System,
        });
      });
      return () => cancelAnimationFrame(frame);
    }
    progress.value = withTiming(
      0,
      { duration: OUT_MS, easing: Easing.in(Easing.cubic), reduceMotion: ReduceMotion.System },
      (finished) => {
        if (finished) runOnJS(setMounted)(false);
      },
    );
    return undefined;
  }, [offer, progress]);

  const backdrop = useAnimatedStyle(() => ({ opacity: progress.value }));
  const dock = useAnimatedStyle(() => ({
    opacity: progress.value,
    transform: [{ translateY: (1 - progress.value) * RISE }],
  }));

  if (!mounted || shown == null) return null;

  const store = shown.kind === 'store';
  const close = () => {
    if (!applying) dismiss();
  };

  return (
    <Modal transparent animationType="none" visible statusBarTranslucent onRequestClose={close}>
      <View style={styles.fill} pointerEvents={visible ? 'auto' : 'none'}>
        <Animated.View style={[styles.fill, backdrop]} pointerEvents="none">
          <BlurView tint={scheme === 'dark' ? 'dark' : 'light'} intensity={BLUR} style={styles.fill} />
          <View style={[styles.fill, styles.wash]} />
        </Animated.View>

        <Pressable
          accessibilityRole="button"
          accessibilityLabel={t('common.close')}
          style={styles.fill}
          onPress={close}
        />

        <Animated.View
          style={[styles.dock, { paddingBottom: Math.max(insets.bottom, 16) }, dock]}
          pointerEvents="box-none">
          <View style={[styles.card, { backgroundColor: colors.card }]}>
            <View style={[styles.badge, { backgroundColor: tone.track }]}>
              <HugeiconsIcon
                icon={store ? AppStoreIcon : Download04Icon}
                size={30}
                color={tone.fill}
                strokeWidth={1.8}
              />
            </View>

            <Text style={[styles.title, { color: colors.foreground }]}>
              {store ? t('update.storeTitle') : t('update.otaTitle')}
            </Text>
            <Text style={[styles.blurb, { color: meter.caption }]}>
              {failed
                ? t('update.failed')
                : store
                  ? t('update.storeBlurb', { version: shown.kind === 'store' ? shown.version : '' })
                  : t('update.otaBlurb')}
            </Text>

            <PrimaryButton
              label={
                applying
                  ? t('update.applying')
                  : store
                    ? t('update.openStore')
                    : failed
                      ? t('update.retry')
                      : t('update.install')
              }
              disabled={applying}
              onPress={accept}
            />
            {!applying && (
              <Pressable
                accessibilityRole="button"
                onPress={close}
                hitSlop={8}
                style={({ pressed }) => [styles.later, pressed && { opacity: 0.5 }]}>
                <Text style={[styles.laterText, { color: meter.caption }]}>{t('update.later')}</Text>
              </Pressable>
            )}
          </View>
        </Animated.View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  fill: { position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 },
  wash: { backgroundColor: 'rgba(0,0,0,0.18)' },
  dock: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    paddingHorizontal: 14,
  },
  card: {
    borderRadius: RADIUS,
    borderCurve: 'continuous',
    paddingHorizontal: 20,
    paddingTop: 26,
    paddingBottom: 10,
    alignItems: 'stretch',
  },
  badge: {
    alignSelf: 'center',
    width: BADGE,
    height: BADGE,
    borderRadius: BADGE / 2,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  title: {
    fontSize: 26,
    fontFamily: fonts.heavy,
    letterSpacing: -0.7,
    textAlign: 'center',
  },
  blurb: {
    fontSize: 15,
    lineHeight: 21,
    fontFamily: fonts.medium,
    textAlign: 'center',
    marginTop: 6,
    marginBottom: 20,
    paddingHorizontal: 4,
  },
  later: { alignSelf: 'center', paddingVertical: 12 },
  laterText: { fontSize: 16, fontFamily: fonts.semibold },
});
