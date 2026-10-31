import * as Haptics from 'expo-haptics';
import { BlurView } from 'expo-blur';
import { useEffect, useRef, useState } from 'react';
import { Linking, Modal, Pressable, StyleSheet, Text, View } from 'react-native';
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
import { track } from '@/shared/lib/analytics';
import { useT } from '@/shared/lib/i18n';
import { useColorScheme } from '@/shared/lib/theme';
import { Mascot, waveRig, type MascotHandle } from '@/shared/ui/mascot';
import { PrimaryButton } from '@/shared/ui/primary-button';

import { INSTAGRAM } from '../config/instagram';

const RADIUS = 36;
const MASCOT = 120;
const BLUR = 28;
const IN_MS = 340;
const OUT_MS = 220;
const RISE = 44;
/** His wave waits for the card to land, so the two beats are each their own. */
const LANDED_MS = 320;

export type FollowSheetProps = {
  visible: boolean;
  /** Where it was opened from, for analytics: by itself on the third day of
   * use, or from Profile. */
  from: 'auto' | 'profile';
  onClose: () => void;
};

/**
 * Follow Walkito on Instagram: short moves for the feet, real stories, and
 * what is coming next, posted by Rahim himself. Offered once on the third
 * day of use, and always from Profile.
 *
 * Outside the app on purpose. A feed inside it would need reporting, blocking
 * and moderation (App Review 1.2); an account the founder runs, and reads the
 * replies to, is the place for that.
 *
 * Built like the widget nudge (one shared value drives the blur and the card,
 * the mount outlives the flag so the exit can play): Walkito waving on top,
 * the handle, two lines from Rahim, and two answers.
 */
export function FollowSheet({ visible, from, onClose }: FollowSheetProps) {
  const scheme = useColorScheme();
  const colors = palette[scheme];
  const meter = meterColors[scheme];
  const insets = useSafeAreaInsets();
  const t = useT();

  const [mounted, setMounted] = useState(false);
  const progress = useSharedValue(0);
  const mascot = useRef<MascotHandle>(null);

  useEffect(() => {
    if (visible) {
      setMounted(true);
      const frame = requestAnimationFrame(() => {
        progress.value = withTiming(1, {
          duration: IN_MS,
          easing: Easing.out(Easing.cubic),
          reduceMotion: ReduceMotion.System,
        });
      });
      const wave = setTimeout(() => mascot.current?.play('wave'), LANDED_MS);
      return () => {
        cancelAnimationFrame(frame);
        clearTimeout(wave);
      };
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

  const follow = () => {
    track('instagram_follow_tapped', { from });
    void Linking.openURL(INSTAGRAM.url).catch(() => {});
    onClose();
  };
  const dismiss = () => {
    track('instagram_offer_dismissed', { from });
    onClose();
  };

  const founder = t('follow.founder');

  return (
    <Modal transparent animationType="none" visible statusBarTranslucent onRequestClose={dismiss}>
      <View style={styles.fill}>
        <Animated.View style={[styles.fill, backdrop]} pointerEvents="none">
          <BlurView tint={scheme === 'dark' ? 'dark' : 'light'} intensity={BLUR} style={styles.fill} />
          <View style={[styles.fill, styles.wash]} />
        </Animated.View>

        <Pressable
          accessibilityRole="button"
          accessibilityLabel={t('follow.later')}
          style={styles.fill}
          onPress={dismiss}
        />

        <Animated.View
          style={[styles.dock, { paddingTop: insets.top + 12, paddingBottom: Math.max(insets.bottom, 16) }, dock]}
          pointerEvents="box-none">
          <View style={[styles.card, { backgroundColor: colors.card }]}>
            <View accessibilityElementsHidden importantForAccessibility="no-hide-descendants">
              <Mascot ref={mascot} rig={waveRig} size={MASCOT} paused={!visible} surface={colors.card} />
            </View>
            <Text style={[styles.eyebrow, { color: meter.caption }]}>{INSTAGRAM.handle}</Text>
            <Text style={[styles.title, { color: colors.foreground }]} accessibilityRole="header">
              {t('follow.title')}
            </Text>

            {/* Two lines in his voice, signed: who is in there, and what for. */}
            <View style={[styles.note, { backgroundColor: meter.iconTile }]}>
              <Text style={[styles.noteText, { color: colors.foreground }]}>{t('follow.note')}</Text>
              <View style={styles.sign}>
                <View style={[styles.initial, { backgroundColor: colors.foreground }]}>
                  <Text style={[styles.initialText, { color: colors.card }]}>{founder.slice(0, 1)}</Text>
                </View>
                <Text style={[styles.signText, { color: meter.label }]}>{founder}</Text>
              </View>
            </View>

            <PrimaryButton
              label={t('follow.cta')}
              icon={INSTAGRAM.icon}
              onPress={follow}
              style={styles.cta}
            />
            <Pressable
              accessibilityRole="button"
              onPress={() => {
                Haptics.selectionAsync();
                dismiss();
              }}
              hitSlop={8}
              style={({ pressed }) => [styles.later, pressed && { opacity: 0.6 }]}>
              <Text style={[styles.laterText, { color: meter.caption }]}>{t('follow.later')}</Text>
            </Pressable>
          </View>
        </Animated.View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  fill: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  wash: { backgroundColor: 'rgba(0,0,0,0.18)' },
  dock: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'flex-end',
    paddingHorizontal: 10,
  },
  card: {
    borderRadius: RADIUS,
    borderCurve: 'continuous',
    paddingTop: 16,
    paddingBottom: 12,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  eyebrow: { ...fonts.semibold(14), marginTop: 6 },
  title: { ...fonts.heavy(26, -0.6), lineHeight: 31, textAlign: 'center', marginTop: 2 },
  note: {
    alignSelf: 'stretch',
    borderRadius: 20,
    borderCurve: 'continuous',
    padding: 14,
    marginTop: 18,
  },
  noteText: { ...fonts.medium(16, -0.1), lineHeight: 22 },
  sign: { flexDirection: 'row', alignItems: 'center', gap: 8, marginTop: 12 },
  initial: {
    width: 26,
    height: 26,
    borderRadius: 13,
    alignItems: 'center',
    justifyContent: 'center',
  },
  initialText: fonts.bold(13),
  signText: fonts.semibold(14),
  cta: { alignSelf: 'stretch', marginTop: 18 },
  later: { alignItems: 'center', paddingTop: 14, paddingBottom: 6 },
  laterText: fonts.semibold(15, -0.2),
});
