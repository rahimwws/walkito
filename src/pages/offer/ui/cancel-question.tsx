import { BlurView } from 'expo-blur';
import * as Haptics from 'expo-haptics';
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
import { useT, type Key } from '@/shared/lib/i18n';
import { kv } from '@/shared/lib/storage';
import { useColorScheme } from '@/shared/lib/theme';

export type CancelReason = 'subscription' | 'price' | 'charge' | 'try' | 'other';

const REASONS: readonly { reason: CancelReason; label: Key }[] = [
  { reason: 'subscription', label: 'offer.cancel.subscription' },
  { reason: 'price', label: 'offer.cancel.price' },
  { reason: 'charge', label: 'offer.cancel.charge' },
  { reason: 'try', label: 'offer.cancel.try' },
  { reason: 'other', label: 'offer.cancel.other' },
];

const ASKED_KEY = 'purchase/cancel-asked';

/**
 * Whether the question is still to be asked, and from this call on it is not.
 * Once per person: asked after every closed sheet it would be the app arguing
 * with a decision.
 */
export function takeCancelQuestion(): boolean {
  if (kv.getBoolean(ASKED_KEY) === true) return false;
  kv.set(ASKED_KEY, true);
  return true;
}

export function devForgetCancelQuestion(): void {
  if (__DEV__) kv.remove(ASKED_KEY);
}

const IN_MS = 340;
const OUT_MS = 220;
const RISE = 44;

/**
 * "No charge was made. What stopped you?", after the store's sheet was closed
 * without buying.
 *
 * The first line is the one that matters to somebody who has just seen a
 * payment sheet and backed out of it: nothing was taken. The question under
 * it is the only way to learn why the sheet was closed, which the store never
 * says. An answer is recorded and the sheet goes; it changes no price and
 * offers nothing (Guideline 5.6), and tapping away is an answer too.
 */
export function CancelQuestion({
  visible,
  onAnswer,
}: {
  visible: boolean;
  /** `null`: closed without an answer. */
  onAnswer: (reason: CancelReason | null) => void;
}) {
  const scheme = useColorScheme();
  const colors = palette[scheme];
  const meter = meterColors[scheme];
  const insets = useSafeAreaInsets();
  const t = useT();

  // Mounted apart from `visible`, so the exit has something to play on: see
  // `StreakSheet`, whose transition this is.
  const [mounted, setMounted] = useState(false);
  const progress = useSharedValue(0);

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
    <Modal transparent animationType="none" visible statusBarTranslucent onRequestClose={() => onAnswer(null)}>
      <View style={StyleSheet.absoluteFill}>
        <Animated.View style={[StyleSheet.absoluteFill, backdrop]} pointerEvents="none">
          <BlurView tint={scheme === 'dark' ? 'dark' : 'light'} intensity={28} style={StyleSheet.absoluteFill} />
          <View style={[StyleSheet.absoluteFill, styles.wash]} />
        </Animated.View>
        <Pressable
          accessibilityRole="button"
          accessibilityLabel={t('common.close')}
          style={StyleSheet.absoluteFill}
          onPress={() => onAnswer(null)}
        />
        <Animated.View
          style={[styles.dock, { paddingBottom: Math.max(insets.bottom, 16) }, dock]}
          pointerEvents="box-none">
          <View style={[styles.card, { backgroundColor: colors.card }]}>
            <View style={styles.head} accessible accessibilityRole="header">
              <Text style={[styles.title, { color: meter.ink }]} maxFontSizeMultiplier={1.3}>
                {t('offer.cancel.title')}
              </Text>
              <Text style={[styles.question, { color: meter.label }]} maxFontSizeMultiplier={1.3}>
                {t('offer.cancel.question')}
              </Text>
            </View>
            {REASONS.map(({ reason, label }) => (
              <Pressable
                key={reason}
                accessibilityRole="button"
                onPress={() => {
                  void Haptics.selectionAsync();
                  onAnswer(reason);
                }}
                style={({ pressed }) => [styles.row, { backgroundColor: meter.iconTile }, pressed && styles.pressed]}>
                <Text style={[styles.rowLabel, { color: meter.ink }]} maxFontSizeMultiplier={1.3}>
                  {t(label)}
                </Text>
              </Pressable>
            ))}
          </View>
        </Animated.View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  wash: { backgroundColor: 'rgba(0,0,0,0.18)' },
  dock: { position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'flex-end', paddingHorizontal: 10 },
  card: { borderRadius: 36, borderCurve: 'continuous', padding: 16, gap: 8 },
  head: { alignItems: 'center', gap: 4, paddingTop: 10, paddingBottom: 12, paddingHorizontal: 8 },
  title: { ...fonts.heavy(24, -0.5), textAlign: 'center' },
  question: { ...fonts.semibold(17), textAlign: 'center' },
  // 56pt tall at least: these are read and tapped by people in their sixties.
  row: { minHeight: 56, borderRadius: 18, borderCurve: 'continuous', justifyContent: 'center', paddingHorizontal: 18, paddingVertical: 12 },
  rowLabel: fonts.semibold(17),
  pressed: { opacity: 0.6 },
});
