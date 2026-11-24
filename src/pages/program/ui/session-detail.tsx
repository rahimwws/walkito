import ArrowLeft01Icon from '@hugeicons/core-free-icons/ArrowLeft01Icon';
import ArrowRight01Icon from '@hugeicons/core-free-icons/ArrowRight01Icon';
import Clock01Icon from '@hugeicons/core-free-icons/Clock01Icon';
import FootprintsIcon from '@hugeicons/core-free-icons/FootprintsIcon';
import RepeatIcon from '@hugeicons/core-free-icons/RepeatIcon';
import Tick02Icon from '@hugeicons/core-free-icons/Tick02Icon';
import { HugeiconsIcon } from '@hugeicons/react-native';
import { Image, Pressable, ScrollView, StyleSheet, Text, View, useWindowDimensions } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { doseLabel, doseSeconds, type PlanDose, type PlannedExercise } from '@/entities/program';
import { bitepal, colors, fonts, target } from '@/shared/config';
import { useT, type Translate } from '@/shared/lib/i18n';
import { FactChip } from '@/shared/ui/fact-chip';
import { FluentIcon } from '@/shared/ui/fluent-icon';
import { BigNumber, Capsule, MoveCircle, Ring, RoundButton, TITLE_SCALE, cardStyle, moveColor, posterFor } from '@/widgets/session-player';

export type DetailMove = {
  id: string;
  title: string;
  /** "1 min", "10 times", "3 × 10 times", with ", each foot" where it applies:
   * what VoiceOver reads. */
  dose: string;
  /** The same dose as the row's chip shows it, as the plan prints it: "3 × 10", "2 min". */
  amount: string;
  /** Counted (a repeat glyph) or timed (a clock). */
  counted: boolean;
  /** Done on each foot: a second chip. */
  perSide: boolean;
  /** Ticked today already, from the day log. */
  done: boolean;
};

export type SessionDetailProps = {
  /** The day, "Tuesday". */
  title: string;
  /** "5 min · 4 moves". */
  meta: string;
  /** The session at the plan's dose, for the big number. */
  minutes: number;
  moves: readonly DetailMove[];
  /** The plan engine's one line on why today looks the way it does. */
  why: string | null;
  startLabel: string;
  onStart: () => void;
  onBack: () => void;
  onPreview: (exerciseId: string) => void;
};

const SIDE = 16;
const THUMB = 60;
const RING = 76;

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
    amount: doseLabel(e.dose.sets, e.dose.reps, e.dose.holdSec),
    counted: e.dose.reps != null,
    perSide: e.dose.perSide,
    done: ticked.includes(e.id),
  }));
}

/**
 * Today's session before it starts, in BitePal's card language with nothing
 * to read twice: a round back button on its own bar, the day as the title,
 * then one row on a white card (a stopwatch, the minutes large, and the ring
 * of moves done today with its count), the plan's one line on why, the first
 * move's photo, and the moves on a second card, each on the disc of the part
 * it works with its name, its dose as chips and a round button to its sheet.
 * Start is the black button pinned at the bottom.
 */
export function SessionDetail({ title, meta, minutes, moves, why, startLabel, onStart, onBack, onPreview }: SessionDetailProps) {
  const t = useT();
  const insets = useSafeAreaInsets();
  const { fontScale } = useWindowDimensions();
  const stacked = fontScale > 1.6;
  const hero = moves.length > 0 ? posterFor(moves[0].id) : null;
  const done = moves.filter((move) => move.done).length;

  return (
    <View style={styles.root}>
      <View style={[styles.bar, { paddingTop: insets.top + 6 }]}>
        <RoundButton icon={ArrowLeft01Icon} label={t('common.back')} onPress={onBack} />
      </View>

      <ScrollView
        contentInsetAdjustmentBehavior="never"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[styles.content, { paddingBottom: 24 }]}>
        <Text maxFontSizeMultiplier={TITLE_SCALE} accessibilityRole="header" style={styles.title}>
          {title}
        </Text>

        <View style={styles.card}>
          <View style={[styles.summary, stacked && styles.summaryStacked]} accessible accessibilityLabel={meta}>
            <View style={styles.summaryText}>
              <FluentIcon name="timer" size={44} />
              <BigNumber value={t('session.minutes', { count: minutes })} size={52} style={styles.bigShrink} />
            </View>
            <Ring size={RING} stroke={7} value={moves.length === 0 ? 0 : done / moves.length} color={bitepal.selected}>
              <Text style={styles.ringText} maxFontSizeMultiplier={1.4}>
                {done + '/' + moves.length}
              </Text>
            </Ring>
          </View>
          {why != null && <Text style={styles.why}>{why}</Text>}
        </View>

        {hero != null && (
          <View style={[styles.hero, stacked && styles.heroShort]}>
            <Image source={hero} resizeMode="cover" style={styles.fill} accessibilityIgnoresInvertColors />
          </View>
        )}

        <View style={[styles.card, styles.list]}>
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
                <MoveCircle exerciseId={move.id} size={THUMB} style={{ borderWidth: 2, borderColor: moveColor(move.id) }} />
                <View style={[styles.facts, stacked && styles.factsStacked]}>
                  <Text style={styles.name}>{move.title}</Text>
                  <View style={styles.chips}>
                    <FactChip icon={move.counted ? RepeatIcon : Clock01Icon} label={move.amount} />
                    {move.perSide && <FactChip icon={FootprintsIcon} label={t('player.detail.eachFoot')} />}
                  </View>
                </View>
                {move.done ? (
                  <View style={styles.done}>
                    <HugeiconsIcon icon={Tick02Icon} size={18} color={colors.onInk} strokeWidth={2.6} />
                  </View>
                ) : (
                  !stacked && (
                    <View style={styles.go}>
                      <HugeiconsIcon icon={ArrowRight01Icon} size={20} color={colors.text} strokeWidth={2.2} />
                    </View>
                  )
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
  root: { flex: 1, backgroundColor: bitepal.page },
  bar: { paddingHorizontal: SIDE, paddingBottom: 8, backgroundColor: bitepal.page, flexDirection: 'row' },
  content: { paddingHorizontal: SIDE, paddingTop: 4, gap: 12 },
  fill: { position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' },
  title: { ...fonts.heavy(34, -0.8), color: colors.text, paddingHorizontal: 4, marginBottom: 4 },
  card: { ...cardStyle, padding: 20, gap: 16 },
  summary: { flexDirection: 'row', alignItems: 'center', gap: 12 },
  summaryStacked: { flexDirection: 'column', alignItems: 'flex-start' },
  summaryText: { flex: 1, flexDirection: 'row', alignItems: 'center', gap: 10 },
  bigShrink: { flexShrink: 1 },
  ringText: { ...fonts.heavy(17), color: colors.text, fontVariant: ['tabular-nums'] },
  why: { ...fonts.regular(17), color: colors.text2 },
  hero: {
    ...cardStyle,
    width: '100%',
    aspectRatio: 16 / 9,
    overflow: 'hidden',
    backgroundColor: '#ECF0F1',
  },
  heroShort: { aspectRatio: 2.4 },
  list: { paddingVertical: 4, paddingHorizontal: 0, gap: 0 },
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
  facts: { flex: 1, gap: 6 },
  chips: { flexDirection: 'row', flexWrap: 'wrap', gap: 6 },
  factsStacked: { flex: 0, alignSelf: 'stretch' },
  name: { ...fonts.bold(19), color: colors.text },
  go: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: bitepal.well,
    alignItems: 'center',
    justifyContent: 'center',
  },
  done: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: colors.good,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dock: { paddingHorizontal: SIDE + 4, paddingTop: 12, backgroundColor: bitepal.page },
});
