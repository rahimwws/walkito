import { useLocalSearchParams, useRouter } from 'expo-router';
import { useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { EXERCISES_BY_ID, exerciseById, markCantDo, planMeta, type CantDoReason } from '@/entities/program';
import { CHROME_MAX_FONT_SCALE, clipShape, colors, fonts, target } from '@/shared/config';
import { track } from '@/shared/lib/analytics';
import { useT } from '@/shared/lib/i18n';
import { CantDoReasons, ExercisePreview, TITLE_SCALE } from '@/widgets/session-player';

const SIDE = 24;

/** The cue as numbered steps: the catalogue writes it as short sentences, each one thing to do. */
function stepsOf(cue: string): string[] {
  return cue
    .split(/(?<=[.!?])\s+/)
    .map((line) => line.trim())
    .filter((line) => line.length > 0);
}

/**
 * One move, as a native form sheet: the clip looping edge to edge, its name,
 * the steps as plain numbered lines, why it is in the plan, and "Can't do
 * this" in words, which takes it out of the plan with the player's reasons
 * and store. It starts nothing.
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
  const steps = stepsOf(exercise.cue);

  const pick = (reason: CantDoReason) => {
    markCantDo(id, reason);
    track('exercise_cant_do', { exercise: id, reason: reason === 'hurts' ? 'other' : reason });
    setAsking(false);
    setSaved(true);
  };

  return (
      <ScrollView
        style={styles.root}
        contentContainerStyle={{ paddingBottom: Math.max(insets.bottom, 20) + 16 }}
        showsVerticalScrollIndicator={false}>
        <View style={styles.clip}>
          <ExercisePreview exerciseId={id} aspectRatio={wide ? 16 / 9 : 9 / 16} style={wide ? styles.wide : styles.tall} />
        </View>

        <View style={styles.body}>
          <View style={styles.top}>
            <Text maxFontSizeMultiplier={TITLE_SCALE} accessibilityRole="header" style={styles.title}>
              {exercise.title}
            </Text>
            <Pressable
              accessibilityRole="button"
              onPress={() => router.back()}
              hitSlop={8}
              style={({ pressed }) => [styles.close, pressed && styles.pressed]}>
              <Text style={styles.closeText} maxFontSizeMultiplier={CHROME_MAX_FONT_SCALE}>
                {t('common.close')}
              </Text>
            </Pressable>
          </View>

          <View style={styles.steps}>
            {steps.map((step, index) => (
              <View key={index} style={styles.step} accessible accessibilityLabel={`${index + 1}. ${step}`}>
                <Text style={styles.stepNumber}>{index + 1}</Text>
                <Text style={styles.stepText}>{step}</Text>
              </View>
            ))}
          </View>

          {exercise.rationale.length > 0 && <Text style={styles.why}>{exercise.rationale}</Text>}

          <View style={styles.rule} />
          {saved ? (
            <Text style={styles.saved} accessibilityLiveRegion="polite">
              {t('player.sheet.saved')}
            </Text>
          ) : asking ? (
            <View>
              <Text accessibilityRole="header" style={styles.section}>
                {t('player.sheet.cantDoTitle')}
              </Text>
              <CantDoReasons equipment={planMeta(id)?.equipment ?? []} onPick={pick} />
              <Pressable
                accessibilityRole="button"
                onPress={() => setAsking(false)}
                style={({ pressed }) => [styles.text, pressed && styles.pressed]}>
                <Text style={styles.textQuiet}>{t('common.cancel')}</Text>
              </Pressable>
            </View>
          ) : (
            <Pressable
              accessibilityRole="button"
              onPress={() => setAsking(true)}
              style={({ pressed }) => [styles.text, pressed && styles.pressed]}>
              <Text style={styles.textLabel}>{t('player.cantDo.button')}</Text>
            </Pressable>
          )}
        </View>
      </ScrollView>
  );
}

const styles = StyleSheet.create({
  root: { backgroundColor: colors.surface },
  clip: { backgroundColor: '#ECF0F1', alignItems: 'center' },
  tall: { height: 380, aspectRatio: 9 / 16 },
  wide: { width: '100%' },
  body: { paddingHorizontal: SIDE, paddingTop: 20, gap: 20 },
  top: { flexDirection: 'row', alignItems: 'flex-start', gap: 12 },
  title: { flex: 1, ...fonts.bold(28, -0.4), color: colors.text },
  close: { minHeight: target.min, justifyContent: 'center' },
  closeText: { ...fonts.semibold(17), color: colors.text },
  pressed: { opacity: 0.55 },
  steps: { gap: 14 },
  step: { flexDirection: 'row', gap: 14 },
  stepNumber: { ...fonts.bold(19), color: colors.text, width: 20, fontVariant: ['tabular-nums'] },
  stepText: { flex: 1, ...fonts.regular(19), color: colors.text },
  why: { ...fonts.regular(19), color: colors.text2 },
  rule: { height: StyleSheet.hairlineWidth, backgroundColor: colors.separator },
  section: { ...fonts.semibold(19), color: colors.text, marginBottom: 4 },
  text: { minHeight: target.min, justifyContent: 'center' },
  textLabel: { ...fonts.semibold(19), color: colors.text },
  textQuiet: { ...fonts.medium(19), color: colors.text2 },
  saved: { ...fonts.regular(19), color: colors.text },
});
