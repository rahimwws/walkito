import AlertCircleIcon from '@hugeicons/core-free-icons/AlertCircleIcon';
import ArrowRight01Icon from '@hugeicons/core-free-icons/ArrowRight01Icon';
import InformationCircleIcon from '@hugeicons/core-free-icons/InformationCircleIcon';
import RepeatIcon from '@hugeicons/core-free-icons/RepeatIcon';
import Video01Icon from '@hugeicons/core-free-icons/Video01Icon';
import Image01Icon from '@hugeicons/core-free-icons/Image01Icon';
import UnavailableIcon from '@hugeicons/core-free-icons/UnavailableIcon';
import VolumeHighIcon from '@hugeicons/core-free-icons/VolumeHighIcon';
import VolumeOffIcon from '@hugeicons/core-free-icons/VolumeOffIcon';
import { HugeiconsIcon, type IconSvgElement } from '@hugeicons/react-native';
import * as Haptics from 'expo-haptics';
import { useEffect, useState, type ReactNode } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import Animated, {
  Easing,
  ReduceMotion,
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { EXERCISES_BY_ID, IN_SESSION_STOP_PAIN, exerciseById, type CantDoReason, type Equipment } from '@/entities/program';
import { colors, fonts, themed } from '@/shared/config';
import { useT, type Key } from '@/shared/lib/i18n';
import { REPLAY_MASK } from '@/shared/ui/replay-mask';

import { Capsule, Hairline, MoveCircle, SIDE, TITLE_SCALE, TextButton, cardStyle, ink } from './kit';

const IN_MS = 300;
const OUT_MS = 200;
const RISE = 40;

/**
 * A plain white sheet from the bottom over a dimmed player. Drawn inside the
 * player rather than as a Modal: the player already runs in a presented
 * sheet, and a Modal nested in one does not reliably present on iOS.
 */
function Sheet({
  visible,
  onClose,
  children,
}: {
  visible: boolean;
  onClose: () => void;
  children: ReactNode;
}) {
  const t = useT();
  const insets = useSafeAreaInsets();
  const [mounted, setMounted] = useState(false);
  const shown = useSharedValue(0);

  useEffect(() => {
    if (visible) {
      setMounted(true);
      const frame = requestAnimationFrame(() => {
        shown.value = withTiming(1, { duration: IN_MS, easing: Easing.out(Easing.cubic), reduceMotion: ReduceMotion.System });
      });
      return () => cancelAnimationFrame(frame);
    }
    shown.value = withTiming(
      0,
      { duration: OUT_MS, easing: Easing.in(Easing.cubic), reduceMotion: ReduceMotion.System },
      (finished) => {
        if (finished) runOnJS(setMounted)(false);
      },
    );
    return undefined;
  }, [visible, shown]);

  const dim = useAnimatedStyle(() => ({ opacity: shown.value }));
  const card = useAnimatedStyle(() => ({
    opacity: shown.value,
    transform: [{ translateY: (1 - shown.value) * RISE }],
  }));

  if (!mounted) return null;

  return (
    <View style={styles.host} pointerEvents={visible ? 'box-none' : 'none'} {...REPLAY_MASK}>
      <Animated.View style={[styles.fill, styles.dim, dim]} pointerEvents="none" />
      <Pressable accessibilityRole="button" accessibilityLabel={t('widgets.painClose')} style={styles.fill} onPress={onClose} />
      <Animated.View style={[styles.card, { paddingBottom: Math.max(insets.bottom, 16) }, card]} accessibilityViewIsModal>
        <ScrollView bounces={false} showsVerticalScrollIndicator={false} contentContainerStyle={styles.cardBody}>
          {children}
        </ScrollView>
      </Animated.View>
    </View>
  );
}

const SCORES = [
  [0, 1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
] as const;

/**
 * "It hurts", 0 to 10. A tap only picks; the line under the numbers then says
 * what that number does, and the button is named for exactly that. No colour
 * on a pain score.
 */
export function PainSheet({
  visible,
  onPick,
  onCancel,
  after = false,
}: {
  visible: boolean;
  onPick: (score: number) => void;
  onCancel: () => void;
  /** Asked after the session: the outcomes speak about the next one. */
  after?: boolean;
}) {
  const t = useT();
  const [score, setScore] = useState<number | null>(null);
  useEffect(() => {
    if (visible) setScore(null);
  }, [visible]);
  const stops = score != null && score >= IN_SESSION_STOP_PAIN;

  return (
    <Sheet visible={visible} onClose={onCancel}>
      <Text maxFontSizeMultiplier={TITLE_SCALE} accessibilityRole="header" style={styles.title}>
        {t('widgets.painTitle')}
      </Text>
      <View style={styles.scores} accessibilityRole="radiogroup">
        {SCORES.map((row, r) => (
          <View key={r} style={styles.scoreRow}>
            {row.map((value) => {
              const on = score === value;
              return (
                <Pressable
                  key={value}
                  accessibilityRole="radio"
                  accessibilityState={{ selected: on }}
                  accessibilityLabel={String(value)}
                  onPress={() => {
                    void Haptics.selectionAsync();
                    setScore(value);
                  }}
                  style={({ pressed }) => [styles.score, on && styles.scoreOn, pressed && styles.pressed]}>
                  <Text style={[styles.scoreText, on && styles.scoreTextOn]}>{value}</Text>
                </Pressable>
              );
            })}
            {row.length < SCORES[0].length && <View style={styles.spacer} />}
          </View>
        ))}
      </View>
      <Text accessibilityLiveRegion="polite" style={styles.body}>
        {score == null
          ? t('widgets.painPick')
          : after
            ? stops
              ? t('player.afterPain.highHint')
              : t('player.afterPain.lowHint')
            : stops
              ? t('widgets.painHighHint')
              : t('widgets.painLowHint')}
      </Text>
      <Capsule
        label={after ? t('player.afterPain.save') : stops ? t('widgets.painEnd') : t('widgets.painResume')}
        disabled={score == null}
        onPress={() => {
          if (score != null) onPick(score);
        }}
      />
      <TextButton label={t('widgets.painCancel')} quiet onPress={onCancel} />
    </Sheet>
  );
}

const REASONS: readonly { reason: CantDoReason; label: Key; needs: Equipment | null }[] = [
  { reason: 'no_step', label: 'player.cantDo.noStep', needs: 'step' },
  { reason: 'no_band', label: 'player.cantDo.noBand', needs: 'band' },
  { reason: 'no_towel', label: 'player.cantDo.noTowel', needs: 'towel' },
  { reason: 'no_pillow', label: 'player.cantDo.noPillow', needs: 'pillow' },
  { reason: 'no_ball', label: 'player.cantDo.noBall', needs: 'ball' },
  { reason: 'hurts', label: 'player.cantDo.hurts', needs: null },
];

/** The reasons "Can't do this" offers: only the kit this move uses, and "It hurts" always. */
export function reasonsFor(equipment: readonly Equipment[]) {
  return REASONS.filter((entry) => entry.needs == null || equipment.includes(entry.needs));
}

/** "Can't do this": the reasons as plain rows. */
export function CantDoSheet({
  visible,
  equipment,
  onPick,
  onCancel,
}: {
  visible: boolean;
  equipment: readonly Equipment[];
  onPick: (reason: CantDoReason) => void;
  onCancel: () => void;
}) {
  const t = useT();
  return (
    <Sheet visible={visible} onClose={onCancel}>
      <Text maxFontSizeMultiplier={TITLE_SCALE} accessibilityRole="header" style={styles.title}>
        {t('player.cantDo.title')}
      </Text>
      <Text style={styles.body}>{t('player.cantDo.blurb')}</Text>
      <ReasonRows equipment={equipment} onPick={onPick} />
      <TextButton label={t('widgets.painCancel')} quiet onPress={onCancel} />
    </Sheet>
  );
}

/** The reasons as rows with hairlines between, shared with the exercise sheet. */
export function ReasonRows({
  equipment,
  onPick,
}: {
  equipment: readonly Equipment[];
  onPick: (reason: CantDoReason) => void;
}) {
  const t = useT();
  return (
    <View style={styles.rows}>
      {reasonsFor(equipment).map((entry) => (
        <View key={entry.reason}>
          <Hairline />
          <Pressable
            accessibilityRole="button"
            onPress={() => {
              void Haptics.selectionAsync();
              onPick(entry.reason);
            }}
            style={({ pressed }) => [styles.row, pressed && styles.pressed]}>
            <Text style={styles.rowText}>{t(entry.label)}</Text>
          </Pressable>
        </View>
      ))}
      <Hairline />
    </View>
  );
}

/** A row of the More sheet: a glyph in a grey circle and what it does. */
function MenuRow({ icon, label, onPress }: { icon: IconSvgElement; label: string; onPress: () => void }) {
  return (
    <Pressable
      accessibilityRole="button"
      onPress={() => {
        void Haptics.selectionAsync();
        onPress();
      }}
      style={({ pressed }) => [styles.menuRow, pressed && styles.pressed]}>
      <View style={styles.menuIcon}>
        <HugeiconsIcon icon={icon} size={20} color={ink.text} strokeWidth={2} />
      </View>
      <Text style={styles.menuText}>{label}</Text>
      <HugeiconsIcon icon={ArrowRight01Icon} size={20} color={colors.text3} strokeWidth={2} />
    </Pressable>
  );
}

/**
 * Bend's More: what the player does besides playing, as rows on a white card.
 * Sound, the instruction again, the drawing or the clip, the pain rule, and
 * the two ways out of a move. A row left null is not offered.
 */
export function MenuSheet({
  visible,
  onClose,
  soundOn,
  onSound,
  onReplay,
  media,
  onMedia,
  onRule,
  onPain,
  onCantDo,
}: {
  visible: boolean;
  onClose: () => void;
  soundOn: boolean;
  onSound: () => void;
  onReplay: (() => void) | null;
  /** What is showing now, when both can be shown. */
  media: 'video' | 'pose' | null;
  onMedia: () => void;
  onRule: () => void;
  onPain: (() => void) | null;
  onCantDo: (() => void) | null;
}) {
  const t = useT();
  const rows: { key: string; icon: IconSvgElement; label: string; onPress: () => void }[] = [
    { key: 'sound', icon: soundOn ? VolumeHighIcon : VolumeOffIcon, label: soundOn ? t('player.tempo.on') : t('player.tempo.off'), onPress: onSound },
  ];
  if (onReplay != null) rows.push({ key: 'replay', icon: RepeatIcon, label: t('player.voice.replay'), onPress: onReplay });
  if (media != null) {
    rows.push({
      key: 'media',
      icon: media === 'pose' ? Video01Icon : Image01Icon,
      label: media === 'pose' ? t('player.media.video') : t('player.media.pose'),
      onPress: onMedia,
    });
  }
  rows.push({ key: 'rule', icon: InformationCircleIcon, label: t('player.painRule.title'), onPress: onRule });
  if (onPain != null) rows.push({ key: 'pain', icon: AlertCircleIcon, label: t('widgets.painButton'), onPress: onPain });
  if (onCantDo != null) rows.push({ key: 'cant', icon: UnavailableIcon, label: t('player.cantDo.button'), onPress: onCantDo });
  return (
    <Sheet visible={visible} onClose={onClose}>
      <View style={styles.menuCard}>
        {rows.map((row, index) => (
          <View key={row.key}>
            {index > 0 && <View style={styles.menuRule} />}
            <MenuRow icon={row.icon} label={row.label} onPress={row.onPress} />
          </View>
        ))}
      </View>
      <TextButton label={t('common.close')} quiet onPress={onClose} />
    </Sheet>
  );
}

/** The cue as numbered steps: the catalogue writes it as short sentences, each one thing to do. */
export function stepsOf(cue: string): string[] {
  return cue
    .split(/(?<=[.!?])\s+/)
    .map((line) => line.trim())
    .filter((line) => line.length > 0);
}

/** The steps as Bend lists them: a number in a violet circle, then the line. */
export function StepList({ steps }: { steps: readonly string[] }) {
  return (
    <View style={styles.steps}>
      {steps.map((step, index) => (
        <View key={index} style={styles.step} accessible accessibilityLabel={index + 1 + '. ' + step}>
          <View style={styles.stepBadge}>
            <Text style={styles.stepNumber} maxFontSizeMultiplier={1.4}>
              {index + 1}
            </Text>
          </View>
          <Text style={styles.stepText}>{step}</Text>
        </View>
      ))}
    </View>
  );
}

/** The (i) beside the move's name: its picture, its name and how to do it. */
export function InfoSheet({ visible, exerciseId, onClose }: { visible: boolean; exerciseId: string | null; onClose: () => void }) {
  const t = useT();
  if (exerciseId == null || EXERCISES_BY_ID[exerciseId] == null) return <Sheet visible={false} onClose={onClose}>{null}</Sheet>;
  const exercise = exerciseById(exerciseId);
  return (
    <Sheet visible={visible} onClose={onClose}>
      <View style={styles.infoTop}>
        <MoveCircle exerciseId={exerciseId} size={140} />
      </View>
      <Text maxFontSizeMultiplier={TITLE_SCALE} accessibilityRole="header" style={[styles.title, styles.centered]}>
        {exercise.title}
      </Text>
      <Text style={styles.eyebrow}>{t('player.sheet.stepsTitle').toLocaleUpperCase()}</Text>
      <StepList steps={stepsOf(exercise.cue)} />
      <Capsule label={t('player.painRule.ok')} onPress={onClose} />
    </Sheet>
  );
}

/** "0-3 is fine. 4-5 is OK if it settles by next morning. 6 or more - stop." */
export function PainRuleSheet({ visible, onClose }: { visible: boolean; onClose: () => void }) {
  const t = useT();
  return (
    <Sheet visible={visible} onClose={onClose}>
      <Text maxFontSizeMultiplier={TITLE_SCALE} accessibilityRole="header" style={styles.title}>
        {t('player.painRule.title')}
      </Text>
      <Text style={styles.rule}>{t('player.painRule.body')}</Text>
      <Capsule label={t('player.painRule.ok')} onPress={onClose} />
    </Sheet>
  );
}

const styles = StyleSheet.create({
  host: { position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: 100 },
  fill: { position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 },
  dim: { backgroundColor: 'rgba(0,0,0,0.32)' },
  card: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    maxHeight: '92%',
    // Lifted off the page in dark, where a black sheet under a dim of black
    // would have no edge.
    backgroundColor: themed((t, scheme) => (scheme === 'dark' ? t.colors.surface : t.bitepal.page)),
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
    borderCurve: 'continuous',
  },
  cardBody: { paddingHorizontal: SIDE, paddingTop: 28, gap: 16 },
  title: { ...fonts.bold(28, -0.4), color: ink.text },
  body: { ...fonts.regular(19), color: ink.grey },
  rule: { ...fonts.regular(19), color: ink.text, marginBottom: 8 },
  scores: { gap: 8 },
  scoreRow: { flexDirection: 'row', gap: 8 },
  score: {
    flex: 1,
    aspectRatio: 1,
    minHeight: 48,
    borderRadius: 999,
    borderWidth: 1,
    borderColor: ink.rule,
    alignItems: 'center',
    justifyContent: 'center',
  },
  scoreOn: { backgroundColor: colors.accent, borderColor: colors.accent },
  scoreText: { ...fonts.semibold(20), color: ink.text, fontVariant: ['tabular-nums'] },
  scoreTextOn: { color: colors.onInk },
  spacer: { flex: 1 },
  rows: { alignSelf: 'stretch' },
  row: { minHeight: 56, justifyContent: 'center' },
  rowText: { ...fonts.regular(19), color: ink.text },
  centered: { textAlign: 'center' },
  eyebrow: { ...fonts.semibold(17, 0.6), color: colors.text3 },
  infoTop: { alignItems: 'center' },
  steps: { gap: 14 },
  step: { flexDirection: 'row', gap: 14, alignItems: 'flex-start' },
  stepBadge: {
    minWidth: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: colors.accentSoft,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 6,
  },
  stepNumber: { ...fonts.bold(17), color: colors.accent, fontVariant: ['tabular-nums'] },
  stepText: { flex: 1, ...fonts.regular(19), color: ink.text },
  menuCard: { ...cardStyle, shadowOpacity: 0, borderWidth: StyleSheet.hairlineWidth, borderColor: ink.rule },
  menuRow: { minHeight: 60, flexDirection: 'row', alignItems: 'center', gap: 14, paddingHorizontal: 16, paddingVertical: 10 },
  menuIcon: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: colors.surface2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuText: { flex: 1, ...fonts.semibold(19), color: ink.text },
  menuRule: { height: StyleSheet.hairlineWidth, backgroundColor: ink.rule, marginLeft: 66 },
  pressed: { opacity: 0.55 },
});
