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

import { fonts, meterColors, palette } from '@/shared/config';
import { useT } from '@/shared/lib/i18n';
import { useColorScheme } from '@/shared/lib/theme';

import { LanguageOptions } from './language-options';

/**
 * The picker as a bottom sheet, for surfaces that have no settings screen to
 * push — which in practice means onboarding.
 *
 * Settings uses `LanguageOptions` directly inside the form sheet it already
 * has; wrapping the list in a second modal there would put a sheet inside a
 * sheet. Same list either way.
 *
 * The mount is owned here rather than driven straight off `visible`, following
 * `StreakSheet` and `EmailSignInSheet`: a modal torn down the instant the flag
 * clears leaves the exit animation nothing to play on.
 */

const BLUR = 28;
const IN_MS = 340;
const OUT_MS = 220;
const RISE = 44;
const RADIUS = 28;

type Props = {
  visible: boolean;
  onClose: () => void;
};

export function LanguageSheet({ visible, onClose }: Props) {
  const scheme = useColorScheme();
  const colors = palette[scheme];
  const meter = meterColors[scheme];
  const insets = useSafeAreaInsets();
  const t = useT();

  const [mounted, setMounted] = useState(false);
  /** 0 away, 1 arrived. One number drives the blur and the card, so they
   * cannot arrive or leave at different times. */
  const progress = useSharedValue(0);

  useEffect(() => {
    if (visible) {
      setMounted(true);
      // A frame late: the modal has to exist before the transition starts, or
      // the first frames play against nothing.
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
  }, [visible, progress]);

  const backdrop = useAnimatedStyle(() => ({ opacity: progress.value }));
  const dock = useAnimatedStyle(() => ({
    opacity: progress.value,
    transform: [{ translateY: (1 - progress.value) * RISE }],
  }));

  if (!mounted) return null;

  return (
    <Modal transparent animationType="none" visible statusBarTranslucent onRequestClose={onClose}>
      <View style={styles.fill}>
        <Animated.View style={[styles.fill, backdrop]} pointerEvents="none">
          <BlurView
            tint={scheme === 'dark' ? 'dark' : 'light'}
            intensity={BLUR}
            style={styles.fill}
          />
          <View style={[styles.fill, styles.wash]} />
        </Animated.View>

        {/* Tapping away closes it. The language is already set the moment a row
            is tapped, so there is nothing here to confirm or lose. */}
        <Pressable
          accessibilityRole="button"
          accessibilityLabel={t('common.close')}
          style={styles.fill}
          onPress={onClose}
        />

        <Animated.View
          style={[styles.dock, { paddingBottom: Math.max(insets.bottom, 16) }, dock]}
          pointerEvents="box-none">
          <View style={[styles.card, { backgroundColor: colors.card }]}>
            <View style={styles.head}>
              <Text style={[styles.title, { color: colors.foreground }]}>{t('language.title')}</Text>
              <Pressable
                accessibilityRole="button"
                accessibilityLabel={t('common.close')}
                onPress={onClose}
                hitSlop={12}>
                <Text style={[styles.close, { color: meter.caption }]}>{t('common.close')}</Text>
              </Pressable>
            </View>

            <LanguageOptions />

            <Text style={[styles.note, { color: meter.caption }]}>{t('language.note')}</Text>
          </View>
        </Animated.View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  fill: { position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 },
  /** A trace of ink over the blur — blur alone leaves a bright page bright. */
  wash: { backgroundColor: 'rgba(0,0,0,0.18)' },
  dock: { position: 'absolute', left: 0, right: 0, bottom: 0, paddingHorizontal: 14 },
  card: {
    borderRadius: RADIUS,
    borderCurve: 'continuous',
    paddingHorizontal: 20,
    paddingTop: 18,
    paddingBottom: 18,
    gap: 12,
  },
  head: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  title: { fontSize: 24, fontFamily: fonts.heavy, letterSpacing: -0.6 },
  close: { fontSize: 16, fontFamily: fonts.medium },
  note: { fontSize: 13, fontFamily: fonts.medium, letterSpacing: -0.1 },
});
