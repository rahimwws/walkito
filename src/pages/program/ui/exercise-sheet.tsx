import Cancel01Icon from '@hugeicons/core-free-icons/Cancel01Icon';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View, useWindowDimensions } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { EXERCISES_BY_ID, exerciseById, markCantDo, planMeta, type CantDoReason } from '@/entities/program';
import { bitepal, clipShape, colors, fonts, target } from '@/shared/config';
import { track } from '@/shared/lib/analytics';
import { useT } from '@/shared/lib/i18n';
import {
  CardLabel,
  CantDoReasons,
  ExercisePreview,
  RoundButton,
  StepList,
  TITLE_SCALE,
  cardStyle,
  moveColor,
  soft,
  stepsOf,
} from '@/widgets/session-player';

const SIDE = 16;
const STUDIO = '#ECF0F1';

/**
 * One move, as a native form sheet, in BitePal's card language: the clip
 * looping in a circle on the disc of the part it works, its name, "How to do
 * it" as the grey label of a white card of numbered steps, why it is in the
 * plan on another, and
 * "Can't do this" in words, which takes it out of the plan with the player's
 * reasons and store. It starts nothing.
 */
export function ExerciseSheetPage() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const { width } = useWindowDimensions();
  const t = useT();
  const [asking, setAsking] = useState(false);
  const [saved, setSaved] = useState(false);

  if (id == null || EXERCISES_BY_ID[id] == null) return null;
  const exercise = exerciseById(id);
  const wide = clipShape(id) > 1;
  const disc = Math.round(Math.min(width - 96, 300));
  const inner = Math.round(disc * 0.9);

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
      <View style={styles.bar}>
        <RoundButton icon={Cancel01Icon} size={44} label={t('common.close')} onPress={() => router.back()} />
      </View>

      <View style={styles.top}>
        <View style={[styles.disc, { width: disc, height: disc, borderRadius: disc / 2, backgroundColor: soft(moveColor(id)) }]}>
          <View style={[styles.inner, { width: inner, height: inner, borderRadius: inner / 2 }]}>
            <ExercisePreview
              exerciseId={id}
              aspectRatio={wide ? 16 / 9 : 9 / 16}
              style={wide ? { height: inner, aspectRatio: 16 / 9 } : { height: inner, aspectRatio: 9 / 16 }}
            />
          </View>
        </View>
        <Text maxFontSizeMultiplier={TITLE_SCALE} accessibilityRole="header" style={styles.title}>
          {exercise.title}
        </Text>
      </View>

      <View style={styles.body}>
        <View style={styles.card}>
          <CardLabel>{t('player.sheet.stepsTitle')}</CardLabel>
          <StepList steps={stepsOf(exercise.cue)} />
        </View>

        {exercise.rationale.length > 0 && (
          <View style={styles.card}>
            <CardLabel>{t('player.detail.whyTitle')}</CardLabel>
            <Text style={styles.why}>{exercise.rationale}</Text>
          </View>
        )}

        {saved ? (
          <Text style={styles.saved} accessibilityLiveRegion="polite">
            {t('player.sheet.saved')}
          </Text>
        ) : asking ? (
          <View style={styles.card}>
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
            style={({ pressed }) => [styles.text, styles.cantDo, pressed && styles.pressed]}>
            <Text style={styles.textLabel}>{t('player.cantDo.button')}</Text>
          </Pressable>
        )}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  root: { backgroundColor: bitepal.page },
  bar: { flexDirection: 'row', justifyContent: 'flex-end', paddingHorizontal: 16, paddingTop: 14 },
  top: { alignItems: 'center', paddingHorizontal: SIDE, gap: 16 },
  disc: { alignItems: 'center', justifyContent: 'center' },
  inner: { overflow: 'hidden', backgroundColor: STUDIO, alignItems: 'center', justifyContent: 'center' },
  title: { ...fonts.heavy(30, -0.6), color: colors.text, textAlign: 'center' },
  body: { paddingHorizontal: SIDE, paddingTop: 20, gap: 12 },
  card: { ...cardStyle, padding: 20, gap: 12 },
  why: { ...fonts.regular(19), color: colors.text },
  section: { ...fonts.semibold(19), color: colors.text },
  text: { minHeight: target.min, justifyContent: 'center' },
  cantDo: { alignSelf: 'center' },
  textLabel: { ...fonts.bold(19), color: colors.text },
  textQuiet: { ...fonts.medium(19), color: colors.text2 },
  saved: { ...fonts.regular(19), color: colors.text, textAlign: 'center' },
  pressed: { opacity: 0.55 },
});
