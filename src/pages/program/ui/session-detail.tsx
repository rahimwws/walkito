import ArrowLeft01Icon from '@hugeicons/core-free-icons/ArrowLeft01Icon';
import ArrowRight01Icon from '@hugeicons/core-free-icons/ArrowRight01Icon';
import Tick02Icon from '@hugeicons/core-free-icons/Tick02Icon';
import { HugeiconsIcon } from '@hugeicons/react-native';
import { Image, Pressable, ScrollView, StyleSheet, Text, View, useWindowDimensions } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { doseSeconds, type PlanDose, type PlannedExercise } from '@/entities/program';
import { colors, fonts, target } from '@/shared/config';
import { useT, type Translate } from '@/shared/lib/i18n';
import { Capsule, MoveCircle, RoundButton, TITLE_SCALE, cardStyle, posterFor } from '@/widgets/session-player';

export type DetailMove = {
  id: string;
  title: string;
  /** "1 min", "10 times", "3 × 10 times", with ", each foot" where it applies. */
  dose: string;
  /** Ticked today already, from the day log. */
  done: boolean;
};

export type SessionDetailProps = {
  /** The day, "Tuesday". */
  title: string;
  /** "5 min · 4 moves". */
  meta: string;
  moves: readonly DetailMove[];
  /** The plan engine's one line on why today looks the way it does. */
  why: string | null;
  startLabel: string;
  onStart: () => void;
  onBack: () => void;
  onPreview: (exerciseId: string) => void;
};

const SIDE = 20;
const THUMB = 60;

/** "10 times", "3 × 10 times" for counted reps; the whole move's time for a hold. */
function doseText(t: Translate, dose: PlanDose): string {
  const amount =
    dose.reps != null
      ? dose.sets > 1
        ? t('player.detail.setsReps', { sets: dose.sets, reps: dose.reps })
        : t('player.detail.reps', { count: dose.reps })
      : (() => {
          const seconds = Math.max(1, Math.round(doseSeconds(dose)));
          return seconds >= 60
            ? t('session.minutes', { count: Math.round(seconds / 60) })
            : t('player.detail.seconds', { count: seconds });
        })();
  return dose.perSide ? amount + ', ' + t('player.detail.eachFoot') : amount;
}

/** Each planned move as a row: its name, its dose, and whether it is done today. */
export function detailMoves(
  t: Translate,
  exercises: readonly PlannedExercise[],
  ticked: readonly string[],
  title: (id: string) => string,
): DetailMove[] {
  return exercises.map((e) => ({
    id: e.id,
    title: title(e.id),
    dose: doseText(t, e.dose),
    done: ticked.includes(e.id),
  }));
}

/**
 * Today's session before it starts, after Bend's routine screen: a round
 * back button on its own bar, the first move's photo as a rounded card, the
 * day as the title with "5 MIN · 4 MOVES" under it, the plan's one line on
 * why, then the moves on a white card, each a pastel circle with the move
 * drawn on it, its name and dose, and a chevron to its sheet. Start is the
 * full-width violet button pinned at the bottom.
 */
export function SessionDetail({ title, meta, moves, why, startLabel, onStart, onBack, onPreview }: SessionDetailProps) {
  const t = useT();
  const insets = useSafeAreaInsets();
  const { fontScale } = useWindowDimensions();
  const stacked = fontScale > 1.6;
  const hero = moves.length > 0 ? posterFor(moves[0].id) : null;

  return (
    <View style={styles.root}>
      <View style={[styles.bar, { paddingTop: insets.top + 6 }]}>
        <RoundButton icon={ArrowLeft01Icon} label={t('common.back')} onPress={onBack} />
      </View>

      <ScrollView
        contentInsetAdjustmentBehavior="never"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[styles.content, { paddingBottom: 24 }]}>
        {hero != null && (
          <View style={[styles.hero, stacked && styles.heroShort]}>
            <Image source={hero} resizeMode="cover" style={styles.fill} accessibilityIgnoresInvertColors />
          </View>
        )}

        <View style={styles.head}>
          <Text maxFontSizeMultiplier={TITLE_SCALE} accessibilityRole="header" style={styles.title}>
            {title}
          </Text>
          <Text style={styles.meta}>{meta.toLocaleUpperCase()}</Text>
          {why != null && <Text style={styles.why}>{why}</Text>}
        </View>

        <Text accessibilityRole="header" style={styles.section}>
          {t('player.detail.movesTitle')}
        </Text>
        <View style={styles.card}>
          {moves.map((move, index) => (
            <View key={move.id + '-' + index}>
              {index > 0 && <View style={[styles.rule, !stacked && { marginLeft: 16 + THUMB + 14 }]} />}
              <Pressable
                accessibilityRole="button"
                accessibilityLabel={move.title + ', ' + move.dose}
                accessibilityHint={t('player.detail.rowHint')}
                accessibilityState={{ checked: move.done }}
                onPress={() => onPreview(move.id)}
                style={({ pressed }) => [styles.row, stacked && styles.rowStacked, pressed && styles.pressed]}>
                <MoveCircle exerciseId={move.id} size={THUMB} />
                <View style={[styles.facts, stacked && styles.factsStacked]}>
                  <Text style={styles.name}>{move.title}</Text>
                  <Text style={styles.dose}>{move.dose}</Text>
                </View>
                {move.done ? (
                  <View style={styles.done}>
                    <HugeiconsIcon icon={Tick02Icon} size={18} color={colors.onInk} strokeWidth={2.6} />
                  </View>
                ) : (
                  !stacked && <HugeiconsIcon icon={ArrowRight01Icon} size={22} color={colors.text3} strokeWidth={2} />
                )}
              </Pressable>
            </View>
          ))}
        </View>
      </ScrollView>

      <View style={[styles.dock, { paddingBottom: Math.max(insets.bottom, 16) }]}>
        <Capsule label={startLabel} onPress={onStart} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: colors.bg },
  bar: { paddingHorizontal: SIDE, paddingBottom: 8, backgroundColor: colors.bg, flexDirection: 'row' },
  content: { paddingHorizontal: SIDE, paddingTop: 4 },
  fill: { position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' },
  hero: {
    ...cardStyle,
    width: '100%',
    aspectRatio: 16 / 10,
    overflow: 'hidden',
    backgroundColor: '#ECF0F1',
  },
  heroShort: { aspectRatio: 2.4 },
  head: { paddingTop: 20, paddingBottom: 8, gap: 6 },
  title: { ...fonts.bold(32, -0.6), color: colors.text },
  meta: { ...fonts.semibold(17, 0.6), color: colors.text3 },
  why: { ...fonts.regular(19), color: colors.text2, marginTop: 8 },
  section: { ...fonts.bold(22, -0.3), color: colors.text, marginTop: 24, marginBottom: 12 },
  card: { ...cardStyle, paddingVertical: 4 },
  rule: { height: StyleSheet.hairlineWidth, backgroundColor: colors.separator },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
    minHeight: Math.max(target.min, THUMB + 20),
    paddingVertical: 10,
    paddingHorizontal: 16,
  },
  rowStacked: { flexDirection: 'column', alignItems: 'flex-start', paddingVertical: 16 },
  pressed: { opacity: 0.55 },
  facts: { flex: 1, gap: 2 },
  factsStacked: { flex: 0, alignSelf: 'stretch' },
  name: { ...fonts.semibold(19), color: colors.text },
  dose: { ...fonts.regular(17), color: colors.text2 },
  done: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: colors.good,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dock: { paddingHorizontal: SIDE, paddingTop: 12, backgroundColor: colors.bg },
});
