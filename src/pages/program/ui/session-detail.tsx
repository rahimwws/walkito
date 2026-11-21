import Tick02Icon from '@hugeicons/core-free-icons/Tick02Icon';
import { HugeiconsIcon } from '@hugeicons/react-native';
import { Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { doseSeconds, type PlanDose, type PlannedExercise } from '@/entities/program';
import { CHROME_MAX_FONT_SCALE, colors, fonts, target } from '@/shared/config';
import { useT, type Translate } from '@/shared/lib/i18n';
import { NavGlass, StartButton } from '@/shared/ui/glass';
import { TITLE_SCALE, posterFor, thumbFor } from '@/widgets/session-player';

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

const SIDE = 24;
const THUMB = 64;

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
  return dose.perSide ? `${amount}, ${t('player.detail.eachFoot')}` : amount;
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
 * Today's session before it starts (NTC #20 / #22): the first move's still
 * edge to edge, the day as one big title, "5 min · 4 moves", the plan's one
 * line on why, then the moves as plain rows with hairlines. A row opens the
 * move's sheet. The floating Start is the only button.
 */
export function SessionDetail({ title, meta, moves, why, startLabel, onStart, onBack, onPreview }: SessionDetailProps) {
  const t = useT();
  const insets = useSafeAreaInsets();
  const hero = moves.length > 0 ? (posterFor(moves[0].id) ?? thumbFor(moves[0].id)) : null;

  return (
    <View style={styles.root}>
      <ScrollView
        contentInsetAdjustmentBehavior="never"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: insets.bottom + target.primary + 56 }}>
        <View style={styles.hero}>
          {hero != null && <Image source={hero} resizeMode="cover" style={styles.fill} accessibilityIgnoresInvertColors />}
        </View>

        <View style={styles.head}>
          <Text maxFontSizeMultiplier={TITLE_SCALE} accessibilityRole="header" style={styles.title}>
            {title}
          </Text>
          <Text style={styles.meta}>{meta}</Text>
          {why != null && <Text style={styles.why}>{why}</Text>}
        </View>

        <View style={styles.list}>
          {moves.map((move, index) => {
            const thumb = posterFor(move.id) ?? thumbFor(move.id);
            return (
              <View key={`${move.id}-${index}`}>
                <View style={styles.rule} />
                <Pressable
                  accessibilityRole="button"
                  accessibilityLabel={`${move.title}, ${move.dose}`}
                  accessibilityHint={t('player.detail.rowHint')}
                  accessibilityState={{ checked: move.done }}
                  onPress={() => onPreview(move.id)}
                  style={({ pressed }) => [styles.row, pressed && styles.pressed]}>
                  <View style={styles.thumb}>
                    {thumb != null && <Image source={thumb} resizeMode="cover" style={styles.fill} accessibilityIgnoresInvertColors />}
                  </View>
                  <View style={styles.facts}>
                    <Text style={styles.name}>{move.title}</Text>
                    <Text style={styles.dose}>{move.dose}</Text>
                  </View>
                  {move.done && <HugeiconsIcon icon={Tick02Icon} size={22} color={colors.text} strokeWidth={2.2} />}
                </Pressable>
              </View>
            );
          })}
          <View style={styles.rule} />
        </View>
      </ScrollView>

      <NavGlass style={[styles.back, { top: insets.top + 8 }]} interactive>
        <Pressable
          accessibilityRole="button"
          onPress={onBack}
          style={({ pressed }) => [styles.backHit, pressed && styles.pressed]}>
          <Text style={styles.backText} maxFontSizeMultiplier={CHROME_MAX_FONT_SCALE}>
            {t('common.back')}
          </Text>
        </Pressable>
      </NavGlass>

      <View style={[styles.dock, { paddingBottom: Math.max(insets.bottom, 16) }]} pointerEvents="box-none">
        <StartButton label={startLabel} onPress={onStart} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: colors.surface },
  fill: { position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' },
  hero: { width: '100%', aspectRatio: 1, backgroundColor: '#ECF0F1' },
  head: { paddingHorizontal: SIDE, paddingTop: 24, paddingBottom: 28, gap: 6 },
  title: { ...fonts.bold(34, -0.6), color: colors.text },
  meta: { ...fonts.medium(19), color: colors.text2 },
  why: { ...fonts.regular(19), color: colors.text, marginTop: 12 },
  list: { paddingHorizontal: SIDE },
  rule: { height: StyleSheet.hairlineWidth, backgroundColor: colors.separator },
  row: { flexDirection: 'row', alignItems: 'center', gap: 16, minHeight: THUMB + 24, paddingVertical: 12 },
  pressed: { opacity: 0.55 },
  thumb: { width: THUMB, height: THUMB, overflow: 'hidden', backgroundColor: '#ECF0F1' },
  facts: { flex: 1, gap: 2 },
  name: { ...fonts.semibold(19), color: colors.text },
  dose: { ...fonts.regular(17), color: colors.text2 },
  back: { position: 'absolute', left: SIDE - 8, minHeight: target.min, borderRadius: 999, overflow: 'hidden' },
  backHit: { minHeight: target.min, paddingHorizontal: 18, justifyContent: 'center' },
  backText: { ...fonts.semibold(17), color: colors.text },
  dock: { position: 'absolute', left: SIDE, right: SIDE, bottom: 0 },
});
