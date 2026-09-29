import { BlurView } from 'expo-blur';
import * as Haptics from 'expo-haptics';
import { useEffect, useState } from 'react';
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

import { IN_SESSION_STOP_PAIN } from '@/entities/program';
import { fonts, meterColors, palette } from '@/shared/config';
import { useT } from '@/shared/lib/i18n';
import { useColorScheme } from '@/shared/lib/theme';
import { PrimaryButton } from '@/shared/ui/primary-button';
import { REPLAY_MASK } from '@/shared/ui/replay-mask';

export type SessionPainSheetProps = {
  visible: boolean;
  /** A score was confirmed, 0–10. */
  onPick: (score: number) => void;
  onCancel: () => void;
};

/** 0–5 on the first row, 6–10 on the second: two even rows rather than six
 * and a lonely five. */
const ROWS = [
  [0, 1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
] as const;

/** The same card metrics as the streak sheet, so every aside in the app is
 * one shape. */
const RADIUS = 36;
const BLUR = 28;
const IN_MS = 340;
const OUT_MS = 220;
const RISE = 44;

/**
 * "It hurts", asked mid-session.
 *
 * Two beats, not one. It used to commit on the tap: pick a number and the
 * sheet vanished, and either the session carried on with a line of small print
 * under the header or it ended outright — with nothing on screen having said
 * which was about to happen. Now a tap only picks; the sheet then says, in
 * words, what that number means for this session and tomorrow's, and the
 * button underneath is named for exactly that outcome. Nothing happens that
 * was not announced first.
 *
 * No colour on the numbers — nothing in this app colours a pain score, because
 * a red 8 reads as the app judging the answer.
 *
 * Drawn like the streak sheet — blurred page, card docked above the bottom
 * edge — but as an overlay inside the player rather than a `Modal`: the player
 * itself runs inside a presented sheet, and a `Modal` nested in one does not
 * reliably present on iOS. See the note on `CelebrationSheet`.
 */
export function SessionPainSheet({ visible, onPick, onCancel }: SessionPainSheetProps) {
  const scheme = useColorScheme();
  const colors = palette[scheme];
  const meter = meterColors[scheme];
  const insets = useSafeAreaInsets();
  const t = useT();

  const [score, setScore] = useState<number | null>(null);
  const [mounted, setMounted] = useState(false);
  const progress = useSharedValue(0);

  useEffect(() => {
    if (visible) {
      setMounted(true);
      setScore(null);
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

  const stops = score != null && score >= IN_SESSION_STOP_PAIN;

  return (
    <View style={styles.host} pointerEvents={visible ? 'box-none' : 'none'} {...REPLAY_MASK}>
      <Animated.View style={[styles.fill, backdrop]} pointerEvents="none">
        <BlurView tint={scheme === 'dark' ? 'dark' : 'light'} intensity={BLUR} style={styles.fill} />
        <View style={[styles.fill, styles.wash]} />
      </Animated.View>

      <Pressable
        accessibilityRole="button"
        accessibilityLabel={t('widgets.painClose')}
        style={styles.fill}
        onPress={onCancel}
      />

      <Animated.View
        style={[styles.dock, { paddingBottom: Math.max(insets.bottom, 16) }, dock]}
        pointerEvents="box-none">
        <View style={[styles.card, { backgroundColor: colors.card }]}>
          <Text style={[styles.title, { color: colors.foreground }]}>{t('widgets.painTitle')}</Text>

          <View style={styles.grid}>
            {ROWS.map((row, r) => (
              <View key={r} style={styles.row}>
                {row.map((value) => {
                  const picked = score === value;
                  return (
                    <Pressable
                      key={value}
                      accessibilityRole="radio"
                      accessibilityState={{ selected: picked }}
                      accessibilityLabel={String(value)}
                      onPress={() => {
                        Haptics.selectionAsync();
                        setScore(value);
                      }}
                      style={({ pressed }) => [
                        styles.cell,
                        { backgroundColor: picked ? colors.foreground : meter.track },
                        pressed && { opacity: 0.6 },
                      ]}>
                      <Text
                        style={[
                          styles.cellText,
                          { color: picked ? colors.background : colors.foreground },
                        ]}>
                        {value}
                      </Text>
                    </Pressable>
                  );
                })}
                {/* Keeps the short row's cells the same width as the full
                    one's. */}
                {row.length < ROWS[0].length && <View style={styles.spacer} />}
              </View>
            ))}
          </View>

          {/* What the number does, said before anything is done with it. */}
          <Text accessibilityLiveRegion="polite" style={[styles.blurb, { color: meter.caption }]}>
            {score == null
              ? t('widgets.painPick')
              : stops
                ? t('widgets.painHighHint')
                : t('widgets.painLowHint')}
          </Text>

          <PrimaryButton
            label={stops ? t('widgets.painEnd') : t('widgets.painResume')}
            disabled={score == null}
            onPress={() => {
              if (score == null) return;
              onPick(score);
            }}
          />
          <Pressable
            accessibilityRole="button"
            onPress={onCancel}
            hitSlop={8}
            style={({ pressed }) => [styles.cancel, pressed && { opacity: 0.5 }]}>
            <Text style={[styles.cancelText, { color: meter.caption }]}>
              {t('widgets.painCancel')}
            </Text>
          </Pressable>
        </View>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  host: { position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: 100 },
  fill: { position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 },
  /** A trace of ink over the blur, as on every other sheet. */
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
  },
  title: {
    fontSize: 26,
    fontFamily: fonts.heavy,
    letterSpacing: -0.7,
    textAlign: 'center',
  },
  grid: { gap: 8, marginTop: 20 },
  row: { flexDirection: 'row', gap: 8 },
  cell: {
    flex: 1,
    aspectRatio: 1,
    borderRadius: 16,
    borderCurve: 'continuous',
    alignItems: 'center',
    justifyContent: 'center',
  },
  spacer: { flex: 1 },
  cellText: { fontSize: 20, fontFamily: fonts.bold },
  blurb: {
    fontSize: 15,
    lineHeight: 21,
    fontFamily: fonts.medium,
    textAlign: 'center',
    marginTop: 16,
    marginBottom: 18,
    paddingHorizontal: 4,
    // Held to three lines' height so the button does not jump as the text
    // changes between the short prompt and the longer outcomes.
    minHeight: 63,
  },
  cancel: { alignSelf: 'center', paddingVertical: 12 },
  cancelText: { fontSize: 16, fontFamily: fonts.semibold },
});
