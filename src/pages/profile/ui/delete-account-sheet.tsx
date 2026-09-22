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

import { deleteAccount, resetOnboarding } from '@/entities/session';
import { clearClips } from '@/widgets/session-player';
import { accents, fonts, meterColors, palette, primaryButton } from '@/shared/config';
import { useT } from '@/shared/lib/i18n';
import { useColorScheme } from '@/shared/lib/theme';
import { PrimaryButton } from '@/shared/ui/primary-button';

const RADIUS = 34;
const RISE = 40;
const IN_MS = 300;
const OUT_MS = 200;

export type DeleteAccountSheetProps = {
  visible: boolean;
  onClose: () => void;
};

/**
 * The confirmation before the one action in this app that cannot be undone.
 *
 * Two steps rather than one, and the second names what goes: a single tap on a
 * red row is how people delete twelve weeks of their own history by mistake.
 * The list is specific — "your data" is a phrase that lets someone assume their
 * streak is safe somewhere.
 *
 * Built like the other sheets here: a transparent modal driven by one shared
 * value, never by `entering`/`exiting` builders. An entering builder that fails
 * to run leaves its subject stranded at opacity 0, which has happened three
 * times in this project.
 */
export function DeleteAccountSheet({ visible, onClose }: DeleteAccountSheetProps) {
  const scheme = useColorScheme();
  const colors = palette[scheme];
  const meter = meterColors[scheme];
  const insets = useSafeAreaInsets();
  const t = useT();

  const [mounted, setMounted] = useState(false);
  const [busy, setBusy] = useState(false);
  const [problem, setProblem] = useState<string | null>(null);
  /** How far open the sheet is, 0–1. Named `progress` rather than `t`, which
   * now belongs to the translator — same rename as `streak-sheet`. */
  const progress = useSharedValue(0);

  useEffect(() => {
    if (visible) {
      setMounted(true);
      setProblem(null);
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

  const confirm = async () => {
    if (busy) return;
    setBusy(true);
    setProblem(null);
    const result = await deleteAccount();
    // The cached clips are files, not storage keys, so the entity's `clearAll`
    // cannot reach them — and an entity may not import the widget that owns
    // them. Fourteen megabytes surviving is not a privacy problem, they are the
    // same clips everybody gets, but "delete everything" has to mean it.
    clearClips();
    setBusy(false);

    if (result.status === 'local-only') {
      // Local storage is already cleared at this point, so the sheet cannot
      // pretend nothing happened. It says which half failed, and the user is
      // left signed out with an empty app rather than half-deleted in silence.
      setProblem(t('profile.deleteLocalOnly'));
      return;
    }

    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
    // Back to the questionnaire. There is no account, no programme and no name
    // left, so Home would render an empty shell of a screen — and the guard
    // that chooses between the two stacks is exactly this flag.
    resetOnboarding();
    onClose();
  };

  return (
    <Modal transparent animationType="none" visible statusBarTranslucent onRequestClose={onClose}>
      <Animated.View style={[styles.fill, backdrop]}>
        <BlurView intensity={28} tint="dark" style={styles.fill} />
        <View style={[styles.fill, styles.wash]} />
      </Animated.View>

      <Pressable
        accessibilityRole="button"
        accessibilityLabel={t('common.close')}
        style={styles.fill}
        onPress={busy ? undefined : onClose}
      />

      <Animated.View
        style={[styles.dock, { paddingBottom: Math.max(insets.bottom, 16) }, dock]}
        pointerEvents="box-none">
        <View style={[styles.card, { backgroundColor: colors.card }]}>
          <Text style={[styles.title, { color: colors.foreground }]}>
            {t('profile.deleteTitle')}
          </Text>

          <Text style={[styles.blurb, { color: meter.caption }]}>{t('profile.deleteBlurb')}</Text>

          {problem != null && (
            <Text style={[styles.problem, { color: accents[scheme].red.fill }]}>{problem}</Text>
          )}

          <PrimaryButton
            label={busy ? t('profile.deleting') : t('profile.deleteConfirm')}
            disabled={busy}
            // The only red button in the app. Destructive actions are the one
            // place colour is allowed to carry meaning here — everywhere else
            // the rule is that colour never judges.
            tint={{ fill: accents[scheme].red.fill, label: primaryButton.dark.label }}
            onPress={() => void confirm()}
            style={styles.cta}
          />

          <Pressable
            accessibilityRole="button"
            onPress={busy ? undefined : onClose}
            hitSlop={8}
            style={({ pressed }) => [styles.keep, pressed && { opacity: 0.6 }]}>
            <Text style={[styles.keepText, { color: colors.foreground }]}>
              {t('profile.keepAccount')}
            </Text>
          </Pressable>
        </View>
      </Animated.View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  fill: { position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 },
  wash: { backgroundColor: 'rgba(0,0,0,0.28)' },
  dock: { position: 'absolute', left: 0, right: 0, bottom: 0, paddingHorizontal: 14 },
  card: {
    borderRadius: RADIUS,
    borderCurve: 'continuous',
    paddingHorizontal: 20,
    paddingTop: 22,
    paddingBottom: 14,
  },
  title: { fontSize: 24, fontFamily: fonts.heavy, letterSpacing: -0.6 },
  blurb: { fontSize: 15, lineHeight: 21, fontFamily: fonts.regular, marginTop: 8 },
  problem: { fontSize: 14, lineHeight: 20, fontFamily: fonts.medium, marginTop: 12 },
  cta: { alignSelf: 'stretch', marginTop: 18 },
  keep: { alignSelf: 'center', paddingVertical: 12 },
  keepText: { fontSize: 16, fontFamily: fonts.semibold },
});
