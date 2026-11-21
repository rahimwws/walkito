import Cancel01Icon from '@hugeicons/core-free-icons/Cancel01Icon';
import CheckmarkCircle02Icon from '@hugeicons/core-free-icons/CheckmarkCircle02Icon';
import { HugeiconsIcon } from '@hugeicons/react-native';
import * as Haptics from 'expo-haptics';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { EXERCISES_BY_ID, exerciseById, markCantDo, planMeta, type CantDoReason, type Equipment } from '@/entities/program';
import { clipShape, colors, fonts, radius, space, target } from '@/shared/config';
import { track } from '@/shared/lib/analytics';
import { useT, type Key } from '@/shared/lib/i18n';
import { Button } from '@/shared/ui/button';
import { ExercisePreview } from '@/widgets/session-player';

/** The reasons the player's own "Can't do this" offers, in its order: only the
 * equipment this move uses, and "It hurts" always. */
const REASONS: readonly { reason: CantDoReason; label: Key; needs: Equipment | null }[] = [
  { reason: 'no_step', label: 'player.cantDo.noStep', needs: 'step' },
  { reason: 'no_band', label: 'player.cantDo.noBand', needs: 'band' },
  { reason: 'no_towel', label: 'player.cantDo.noTowel', needs: 'towel' },
  { reason: 'no_pillow', label: 'player.cantDo.noPillow', needs: 'pillow' },
  { reason: 'no_ball', label: 'player.cantDo.noBall', needs: 'ball' },
  { reason: 'hurts', label: 'player.cantDo.hurts', needs: null },
];

/**
 * The cue as numbered steps: the catalogue writes it as one to three short
 * sentences, each one thing to do. Split here rather than restated, so the
 * sheet never says anything the player does not.
 */
function stepsOf(cue: string): string[] {
  return cue
    .split(/(?<=[.!?])\s+/)
    .map((line) => line.trim())
    .filter((line) => line.length > 0);
}

/**
 * One move, as a native form sheet (spec §7.3, Runna #45): its clip looping,
 * its name, how to do it in numbered steps, why it is in the plan, and
 * "Can't do this", which takes it out of the plan with the same reasons and
 * the same store the player's button uses. Opened from Session detail and the
 * plan's moves; it starts nothing.
 */
export function ExerciseSheetPage() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const t = useT();
  const [asking, setAsking] = useState(false);
  const [saved, setSaved] = useState(false);

  if (id == null || EXERCISES_BY_ID[id] == null) return null;
  const exercise = exerciseById(id);
  const wide = clipShape(id) > 1;
  const equipment = planMeta(id)?.equipment ?? [];
  const reasons = REASONS.filter((entry) => entry.needs == null || equipment.includes(entry.needs));
  const steps = stepsOf(exercise.cue);

  const pick = (reason: CantDoReason) => {
    void Haptics.selectionAsync();
    markCantDo(id, reason);
    track('exercise_cant_do', { exercise: id, reason: reason === 'hurts' ? 'other' : reason });
    setAsking(false);
    setSaved(true);
  };

  return (
    <View style={styles.root}>
      <ScrollView
        contentContainerStyle={[styles.body, { paddingBottom: Math.max(insets.bottom, 20) + 12 }]}
        showsVerticalScrollIndicator={false}>
        <View style={styles.top}>
          <Text accessibilityRole="header" style={styles.title}>
            {exercise.title}
          </Text>
          <Pressable
            accessibilityRole="button"
            accessibilityLabel={t('common.close')}
            onPress={() => router.back()}
            style={({ pressed }) => [styles.close, pressed && styles.pressed]}>
            <HugeiconsIcon icon={Cancel01Icon} size={22} color={colors.text} strokeWidth={2} />
          </Pressable>
        </View>

        <View style={styles.clipCard}>
          <ExercisePreview
            exerciseId={id}
            aspectRatio={wide ? 16 / 9 : 9 / 16}
            style={wide ? styles.wideClip : styles.tallClip}
          />
        </View>

        <Text accessibilityRole="header" style={styles.section}>
          {t('player.sheet.stepsTitle')}
        </Text>
        <View style={styles.steps}>
          {steps.map((step, index) => (
            <View key={index} style={styles.step} accessible accessibilityLabel={`${index + 1}. ${step}`}>
              <View style={styles.number}>
                <Text style={styles.numberText}>{index + 1}</Text>
              </View>
              <Text style={styles.stepText}>{step}</Text>
            </View>
          ))}
        </View>

        {exercise.rationale.length > 0 && (
          <View style={styles.why}>
            <Text style={styles.whyLabel}>{t('pages.exerciseSheet.why')}</Text>
            <Text style={styles.whyText}>{exercise.rationale}</Text>
          </View>
        )}

        {saved ? (
          <View style={styles.saved} accessibilityLiveRegion="polite">
            <HugeiconsIcon icon={CheckmarkCircle02Icon} size={22} color={colors.good} strokeWidth={2} />
            <Text style={styles.savedText}>{t('player.sheet.saved')}</Text>
          </View>
        ) : asking ? (
          <View style={styles.reasons}>
            <Text accessibilityRole="header" style={styles.section}>
              {t('player.sheet.cantDoTitle')}
            </Text>
            {reasons.map((entry) => (
              <Button key={entry.reason} label={t(entry.label)} variant="secondary" onPress={() => pick(entry.reason)} />
            ))}
            <Button label={t('common.cancel')} variant="ghost" onPress={() => setAsking(false)} />
          </View>
        ) : (
          <View style={styles.actions}>
            <Button label={t('player.cantDo.button')} variant="secondary" onPress={() => setAsking(true)} />
          </View>
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: colors.surface },
  body: { paddingHorizontal: space.screen, paddingTop: 20, gap: 16 },
  top: { flexDirection: 'row', alignItems: 'flex-start', gap: 12 },
  title: { flex: 1, ...fonts.bold(28, -0.4), color: colors.text, paddingTop: 6 },
  close: {
    width: target.min,
    height: target.min,
    borderRadius: target.min / 2,
    backgroundColor: colors.surface2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  pressed: { opacity: 0.6 },
  clipCard: {
    borderRadius: radius.photo,
    borderCurve: 'continuous',
    overflow: 'hidden',
    backgroundColor: colors.surface2,
    alignItems: 'center',
  },
  tallClip: { height: 360, aspectRatio: 9 / 16 },
  wideClip: { width: '100%' },
  section: { ...fonts.semibold(20), color: colors.text, marginTop: 8 },
  steps: { gap: 14 },
  step: { flexDirection: 'row', alignItems: 'flex-start', gap: 14 },
  number: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: colors.accentSoft,
    alignItems: 'center',
    justifyContent: 'center',
  },
  numberText: { ...fonts.bold(19), color: colors.accent },
  stepText: { flex: 1, ...fonts.regular(21), color: colors.text, paddingTop: 4 },
  why: {
    backgroundColor: colors.bg,
    borderRadius: radius.card,
    borderCurve: 'continuous',
    padding: space.card,
    gap: 4,
  },
  whyLabel: { ...fonts.semibold(17), color: colors.text2 },
  whyText: { ...fonts.regular(19), color: colors.text },
  actions: { gap: 12, marginTop: 4 },
  reasons: { gap: 10 },
  saved: { flexDirection: 'row', alignItems: 'flex-start', gap: 10, marginTop: 4 },
  savedText: { flex: 1, ...fonts.regular(19), color: colors.text },
});
