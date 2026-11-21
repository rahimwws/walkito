import ArrowLeft02Icon from '@hugeicons/core-free-icons/ArrowLeft02Icon';
import ArrowRight01Icon from '@hugeicons/core-free-icons/ArrowRight01Icon';
import Tick02Icon from '@hugeicons/core-free-icons/Tick02Icon';
import { HugeiconsIcon } from '@hugeicons/react-native';
import { Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { doseSeconds, planMeta, type PlanDose, type PlannedExercise } from '@/entities/program';
import { colors, fonts, radius, space, target } from '@/shared/config';
import { useT, type Translate } from '@/shared/lib/i18n';
import { Chip } from '@/shared/ui/chip';
import { NavGlass, StartButton } from '@/shared/ui/glass';
import { posterFor, thumbFor } from '@/widgets/session-player';

export type DetailMove = {
  id: string;
  title: string;
  /** "1 min", "10 times", "3 × 10 times". */
  dose: string;
  eachFoot: boolean;
  /** Ticked today already, from the day log. */
  done: boolean;
};

export type SessionDetailProps = {
  /** "Tuesday · 5 min". */
  title: string;
  chips: readonly string[];
  moves: readonly DetailMove[];
  /** The plan engine's one line on why today looks the way it does. */
  why: string | null;
  startLabel: string;
  onStart: () => void;
  onBack: () => void;
  onPreview: (exerciseId: string) => void;
};

const BACK = 48;

const POSITION_CHIP = {
  seated: 'player.detail.chipSeated',
  standing: 'player.detail.chipStanding',
  floor: 'player.detail.chipFloor',
} as const;

/** "10 times", "3 × 10 times" for counted reps; the whole move's time for a hold. */
function doseText(t: Translate, dose: PlanDose): string {
  if (dose.reps != null) {
    return dose.sets > 1 ? t('player.detail.setsReps', { sets: dose.sets, reps: dose.reps }) : t('player.detail.reps', { count: dose.reps });
  }
  const seconds = Math.max(1, Math.round(doseSeconds(dose)));
  return seconds >= 60 ? t('session.minutes', { count: Math.round(seconds / 60) }) : t('player.detail.seconds', { count: seconds });
}

/**
 * What the detail says about a planned session: where it is done and what it
 * needs, as chips, and each move with its dose. Only facts the plan holds: a
 * position chip when every move shares one (or "sitting and standing"), and
 * "No equipment" only when no move needs any.
 */
export function detailOf(
  t: Translate,
  exercises: readonly PlannedExercise[],
  ticked: readonly string[],
  title: (id: string) => string,
): { chips: string[]; moves: DetailMove[] } {
  const metas = exercises.map((e) => planMeta(e.id));
  const positions = new Set(metas.flatMap((meta) => (meta == null ? [] : [meta.position])));
  const chips: string[] = [];
  if (positions.size === 1) chips.push(t(POSITION_CHIP[[...positions][0]]));
  else if (positions.size > 1) chips.push(t('player.detail.chipMixed'));
  if (metas.every((meta) => meta != null && meta.equipment.length === 0)) chips.push(t('player.detail.chipNoEquipment'));
  chips.push(t('session.moveCount', { count: exercises.length }));
  return {
    chips,
    moves: exercises.map((e) => ({
      id: e.id,
      title: title(e.id),
      dose: doseText(t, e.dose),
      eachFoot: e.dose.perSide,
      done: ticked.includes(e.id),
    })),
  };
}

/**
 * Today's session before it starts (spec §7.3, NTC #24 / #22, Bend #5): the
 * first move's still across the top, the day and its length, what it asks for
 * in chips, then every move as a row with its still, its dose and whether it
 * is one foot at a time. A row opens the move's sheet. The floating Start is
 * the one action, at the bottom.
 */
export function SessionDetail({ title, chips, moves, why, startLabel, onStart, onBack, onPreview }: SessionDetailProps) {
  const t = useT();
  const insets = useSafeAreaInsets();
  const hero = moves.length > 0 ? posterFor(moves[0].id) : null;

  return (
    <View style={styles.root}>
      <ScrollView
        contentInsetAdjustmentBehavior="never"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: insets.bottom + target.primary + 48 }}>
        <View style={styles.hero}>
          {hero != null && (
            <Image source={hero} resizeMode="cover" style={styles.fill} accessibilityIgnoresInvertColors />
          )}
        </View>

        <View style={styles.head}>
          <Text accessibilityRole="header" style={styles.title}>
            {title}
          </Text>
          <View style={styles.chips}>
            {chips.map((chip) => (
              <Chip key={chip} label={chip} />
            ))}
          </View>
        </View>

        <Text accessibilityRole="header" style={styles.section}>
          {t('player.detail.movesTitle')}
        </Text>
        <View style={styles.list}>
          {moves.map((move, index) => {
            const thumb = posterFor(move.id) ?? thumbFor(move.id);
            const facts = move.eachFoot ? `${move.dose}, ${t('player.detail.eachFoot')}` : move.dose;
            return (
              <Pressable
                key={`${move.id}-${index}`}
                accessibilityRole="button"
                accessibilityLabel={`${move.title}, ${facts}`}
                accessibilityHint={t('player.detail.rowHint')}
                accessibilityState={{ checked: move.done }}
                onPress={() => onPreview(move.id)}
                style={({ pressed }) => [styles.row, index > 0 && styles.rowRule, pressed && styles.pressed]}>
                <View style={styles.thumb}>
                  {thumb != null && (
                    <Image source={thumb} resizeMode="cover" style={styles.fill} accessibilityIgnoresInvertColors />
                  )}
                </View>
                <View style={styles.facts}>
                  <Text style={styles.name}>{move.title}</Text>
                  <Text style={styles.dose}>{move.dose}</Text>
                  {move.eachFoot && <Text style={styles.dose}>{t('player.detail.eachFoot')}</Text>}
                </View>
                {move.done ? (
                  <View style={styles.tick}>
                    <HugeiconsIcon icon={Tick02Icon} size={18} color={colors.onInk} strokeWidth={2.5} />
                  </View>
                ) : (
                  <HugeiconsIcon icon={ArrowRight01Icon} size={22} color={colors.text3} strokeWidth={2} />
                )}
              </Pressable>
            );
          })}
        </View>

        {why != null && (
          <View style={styles.why}>
            <Text accessibilityRole="header" style={styles.whyTitle}>
              {t('player.detail.whyTitle')}
            </Text>
            <Text style={styles.whyText}>{why}</Text>
          </View>
        )}
      </ScrollView>

      <NavGlass style={[styles.back, { top: insets.top + 8 }]} interactive>
        <Pressable
          accessibilityRole="button"
          accessibilityLabel={t('common.back')}
          onPress={onBack}
          style={({ pressed }) => [styles.backHit, pressed && styles.pressed]}>
          <HugeiconsIcon icon={ArrowLeft02Icon} size={24} color={colors.text} strokeWidth={2} />
        </Pressable>
      </NavGlass>

      <View style={[styles.dock, { paddingBottom: Math.max(insets.bottom, 16) }]} pointerEvents="box-none">
        <StartButton label={startLabel} onPress={onStart} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1 },
  fill: { position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' },
  hero: {
    width: '100%',
    aspectRatio: 4 / 3,
    backgroundColor: colors.surface2,
  },
  head: {
    paddingHorizontal: space.screen,
    paddingTop: 20,
    gap: 12,
  },
  title: { ...fonts.bold(28, -0.4), color: colors.text },
  chips: { flexDirection: 'row', flexWrap: 'wrap', gap: 8 },
  section: {
    ...fonts.semibold(20),
    color: colors.text,
    paddingHorizontal: space.screen,
    marginTop: space.section,
    marginBottom: 12,
  },
  list: {
    marginHorizontal: space.screen,
    backgroundColor: colors.surface,
    borderRadius: radius.card,
    borderCurve: 'continuous',
    overflow: 'hidden',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
    minHeight: 88,
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  rowRule: { borderTopWidth: StyleSheet.hairlineWidth, borderTopColor: colors.separator },
  pressed: { opacity: 0.6 },
  thumb: {
    width: 96,
    aspectRatio: 4 / 3,
    borderRadius: 12,
    borderCurve: 'continuous',
    overflow: 'hidden',
    backgroundColor: colors.surface2,
  },
  facts: { flex: 1, gap: 2 },
  name: { ...fonts.semibold(19), color: colors.text },
  dose: { ...fonts.regular(17), color: colors.text2 },
  tick: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: colors.good,
    alignItems: 'center',
    justifyContent: 'center',
  },
  why: { paddingHorizontal: space.screen, marginTop: space.section, gap: 6 },
  whyTitle: { ...fonts.semibold(20), color: colors.text },
  whyText: { ...fonts.regular(19), color: colors.text2 },
  back: {
    position: 'absolute',
    left: space.screen,
    width: BACK,
    height: BACK,
    borderRadius: BACK / 2,
    overflow: 'hidden',
  },
  backHit: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  dock: { position: 'absolute', left: space.screen, right: space.screen, bottom: 0 },
});
