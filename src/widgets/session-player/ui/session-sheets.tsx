import * as Haptics from 'expo-haptics';
import { BlurView } from 'expo-blur';
import { useEffect, useState, type ReactNode } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import Animated, {
  Easing,
  ReduceMotion,
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import type { CantDoReason, Equipment } from '@/entities/program';
import { fonts, meterColors, palette } from '@/shared/config';
import { useT, type Key } from '@/shared/lib/i18n';
import { useColorScheme } from '@/shared/lib/theme';
import { PrimaryButton } from '@/shared/ui/primary-button';

/**
 * The player's two small sheets — "Can't do this" and the pain rule — on the
 * same dock the pain question uses: a blurred backdrop, a card rising from the
 * bottom, a tap outside to close.
 */

const RADIUS = 36;
const BLUR = 28;
const IN_MS = 340;
const OUT_MS = 220;
const RISE = 44;

function DockSheet({
  visible,
  onClose,
  closeLabel,
  children,
}: {
  visible: boolean;
  onClose: () => void;
  closeLabel: string;
  children: ReactNode;
}) {
  const scheme = useColorScheme();
  const colors = palette[scheme];
  const insets = useSafeAreaInsets();
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
    <View style={styles.host} pointerEvents={visible ? 'box-none' : 'none'}>
      <Animated.View style={[styles.fill, backdrop]} pointerEvents="none">
        <BlurView tint={scheme === 'dark' ? 'dark' : 'light'} intensity={BLUR} style={styles.fill} />
        <View style={[styles.fill, styles.wash]} />
      </Animated.View>
      <Pressable accessibilityRole="button" accessibilityLabel={closeLabel} style={styles.fill} onPress={onClose} />
      <Animated.View
        style={[styles.dock, { paddingBottom: Math.max(insets.bottom, 16) }, dock]}
        pointerEvents="box-none">
        <View style={[styles.card, { backgroundColor: colors.card }]}>{children}</View>
      </Animated.View>
    </View>
  );
}

/** The reasons, in the order they are offered. Equipment first, and only the
 * equipment this exercise actually uses; "It hurts" always. */
const REASONS: readonly { reason: CantDoReason; label: Key; needs: Equipment | null }[] = [
  { reason: 'no_step', label: 'player.cantDo.noStep', needs: 'step' },
  { reason: 'no_band', label: 'player.cantDo.noBand', needs: 'band' },
  { reason: 'no_towel', label: 'player.cantDo.noTowel', needs: 'towel' },
  { reason: 'no_pillow', label: 'player.cantDo.noPillow', needs: 'pillow' },
  { reason: 'no_ball', label: 'player.cantDo.noBall', needs: 'ball' },
  { reason: 'hurts', label: 'player.cantDo.hurts', needs: null },
];

export function CantDoSheet({
  visible,
  equipment,
  onPick,
  onCancel,
}: {
  visible: boolean;
  /** What the exercise needs. Reasons for anything else are not offered. */
  equipment: readonly Equipment[];
  onPick: (reason: CantDoReason) => void;
  onCancel: () => void;
}) {
  const scheme = useColorScheme();
  const colors = palette[scheme];
  const meter = meterColors[scheme];
  const t = useT();
  const options = REASONS.filter((entry) => entry.needs == null || equipment.includes(entry.needs));

  return (
    <DockSheet visible={visible} onClose={onCancel} closeLabel={t('widgets.painClose')}>
      <Text style={[styles.title, { color: colors.foreground }]}>{t('player.cantDo.title')}</Text>
      <Text style={[styles.blurb, { color: meter.caption }]}>{t('player.cantDo.blurb')}</Text>
      <View style={styles.list}>
        {options.map((entry) => (
          <Pressable
            key={entry.reason}
            accessibilityRole="button"
            onPress={() => {
              Haptics.selectionAsync();
              onPick(entry.reason);
            }}
            style={({ pressed }) => [styles.option, { backgroundColor: meter.track }, pressed && { opacity: 0.6 }]}>
            <Text style={[styles.optionText, { color: colors.foreground }]}>{t(entry.label)}</Text>
          </Pressable>
        ))}
      </View>
      <Pressable
        accessibilityRole="button"
        onPress={onCancel}
        hitSlop={8}
        style={({ pressed }) => [styles.cancel, pressed && { opacity: 0.5 }]}>
        <Text style={[styles.cancelText, { color: meter.caption }]}>{t('widgets.painCancel')}</Text>
      </Pressable>
    </DockSheet>
  );
}

/** "0-3 is fine. 4-5 is OK if it settles by next morning. 6 or more - stop." */
export function PainRuleSheet({ visible, onClose }: { visible: boolean; onClose: () => void }) {
  const scheme = useColorScheme();
  const colors = palette[scheme];
  const meter = meterColors[scheme];
  const t = useT();
  return (
    <DockSheet visible={visible} onClose={onClose} closeLabel={t('widgets.painClose')}>
      <Text style={[styles.title, { color: colors.foreground }]}>{t('player.painRule.title')}</Text>
      <Text style={[styles.rule, { color: meter.label }]}>{t('player.painRule.body')}</Text>
      <PrimaryButton label={t('player.painRule.ok')} onPress={onClose} />
      <View style={styles.bottom} />
    </DockSheet>
  );
}

const styles = StyleSheet.create({
  host: { position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: 100 },
  fill: { position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 },
  wash: { backgroundColor: 'rgba(0,0,0,0.18)' },
  dock: { position: 'absolute', left: 0, right: 0, bottom: 0, paddingHorizontal: 14 },
  card: {
    borderRadius: RADIUS,
    borderCurve: 'continuous',
    paddingHorizontal: 20,
    paddingTop: 26,
    paddingBottom: 10,
  },
  title: { ...fonts.heavy(26, -0.7), textAlign: 'center' },
  blurb: { ...fonts.medium(15), lineHeight: 21, textAlign: 'center', marginTop: 8 },
  rule: { ...fonts.semibold(18, -0.2), lineHeight: 26, textAlign: 'center', marginTop: 14, marginBottom: 22 },
  list: { gap: 8, marginTop: 18 },
  option: {
    height: 52,
    borderRadius: 16,
    borderCurve: 'continuous',
    alignItems: 'center',
    justifyContent: 'center',
  },
  optionText: fonts.semibold(17, -0.2),
  cancel: { alignSelf: 'center', paddingVertical: 12 },
  cancelText: fonts.semibold(16),
  bottom: { height: 8 },
});
