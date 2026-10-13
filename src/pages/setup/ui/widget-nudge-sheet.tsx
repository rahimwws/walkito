import * as Haptics from 'expo-haptics';
import { BlurView } from 'expo-blur';
import { useEffect, useRef, useState } from 'react';
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
import { Mascot, celebrateRig, pointingRig, type MascotHandle } from '@/shared/ui/mascot';
import { PrimaryButton } from '@/shared/ui/primary-button';

const RADIUS = 36;
const DOCK_PAD = 10;
const CARD_PAD = 20;
const MASCOT = 128;
const BLUR = 28;
const IN_MS = 340;
const OUT_MS = 220;
const RISE = 44;
/** His wave waits for the card to land, so the two beats are each their own. */
const LANDED_MS = 320;

export type WidgetNudgeSheetProps = {
  visible: boolean;
  /** "Show me again": the walkthrough from its first step, or Android's pin
   * sheet once more. */
  onAgain: () => void;
  /** "Maybe later", or a tap outside the card: setup ends, nothing is lost. */
  onLater: () => void;
};

/**
 * Asked when the widget step ended and the system says the widget is not on
 * the Home Screen. Kind and short: the mascot pointing the way, a line that
 * says it takes three taps, and two answers of equal weight to the person.
 * Asked once per walkthrough, never in a loop: "Maybe later" ends setup.
 *
 * Built like the streak sheet (one shared value drives the blur and the card,
 * the mount outlives the flag so the exit can play), at its content's height.
 */
export function WidgetNudgeSheet({ visible, onAgain, onLater }: WidgetNudgeSheetProps) {
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

  return (
    <Modal transparent animationType="none" visible statusBarTranslucent onRequestClose={onLater}>
      <View style={styles.fill}>
        <Animated.View style={[styles.fill, backdrop]} pointerEvents="none">
          <BlurView tint={scheme === 'dark' ? 'dark' : 'light'} intensity={BLUR} style={styles.fill} />
          <View style={[styles.fill, styles.wash]} />
        </Animated.View>

        <Pressable
          accessibilityRole="button"
          accessibilityLabel={t('setup.widget.nudgeLater')}
          style={styles.fill}
          onPress={onLater}
        />

        <Animated.View
          style={[styles.dock, { paddingTop: insets.top + 12, paddingBottom: Math.max(insets.bottom, 16) }, dock]}
          pointerEvents="box-none">
          <View style={[styles.card, { backgroundColor: colors.card }]}>
            <View accessibilityElementsHidden importantForAccessibility="no-hide-descendants">
              <Mascot
                ref={mascot}
                rig={pointingRig}
                size={MASCOT}
                paused={!visible}
                surface={colors.card}
              />
            </View>
            <Text style={[styles.title, { color: colors.foreground }]} accessibilityRole="header">
              {t('setup.widget.nudgeTitle')}
            </Text>
            <Text style={[styles.body, { color: meter.caption }]}>{t('setup.widget.nudgeBody')}</Text>
            <PrimaryButton label={t('setup.widget.nudgeAgain')} onPress={onAgain} style={styles.cta} />
            <Pressable
              accessibilityRole="button"
              onPress={() => {
                Haptics.selectionAsync();
                onLater();
              }}
              hitSlop={8}
              style={({ pressed }) => [styles.later, pressed && { opacity: 0.6 }]}>
              <Text style={[styles.laterText, { color: meter.caption }]}>{t('setup.widget.nudgeLater')}</Text>
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
  wash: {
    backgroundColor: 'rgba(0,0,0,0.18)',
  },
  dock: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'flex-end',
    paddingHorizontal: DOCK_PAD,
  },
  card: {
    borderRadius: RADIUS,
    borderCurve: 'continuous',
    paddingTop: 20,
    paddingBottom: 12,
    paddingHorizontal: CARD_PAD,
    alignItems: 'center',
  },
  title: { ...fonts.heavy(24, -0.6), lineHeight: 29, textAlign: 'center', marginTop: 6 },
  body: { ...fonts.regular(16), lineHeight: 22, textAlign: 'center', marginTop: 8 },
  cta: { alignSelf: 'stretch', marginTop: 20 },
  later: { alignItems: 'center', paddingTop: 14, paddingBottom: 6 },
  laterText: fonts.semibold(15, -0.2),
});

/** The figure standing on the "it's there" card (`CelebrationSheet`): he
 * jumps once the card has landed, his feet on its edge. */
const ADDED_SIZE = 132;
const FOOT_SINK = 0.035;

export function WidgetAddedMascot({ paused }: { paused: boolean }) {
  const scheme = useColorScheme();
  const mascot = useRef<MascotHandle>(null);
  useEffect(() => {
    if (paused) return undefined;
    const timer = setTimeout(() => mascot.current?.play('celebrate'), LANDED_MS);
    return () => clearTimeout(timer);
  }, [paused]);
  const feet = (celebrateRig.ground[1] - celebrateRig.box.y) / celebrateRig.box.size;
  return (
    <View style={{ marginBottom: -Math.round((1 - feet + FOOT_SINK) * ADDED_SIZE) }}>
      <Mascot ref={mascot} rig={celebrateRig} size={ADDED_SIZE} surface={palette[scheme].card} paused={paused} />
    </View>
  );
}
