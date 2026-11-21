import * as Haptics from 'expo-haptics';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { useEffect, useState } from 'react';
import { Pressable, StyleSheet, Text, useWindowDimensions, View } from 'react-native';

import { checkInOn, currentDay, isFirstStepTime, logPain, settleOffset, useLogsVersion } from '@/entities/program';
import { SafetySheet } from '@/features/safety-check';
import { colors, fonts, radius, space, target } from '@/shared/config';
import { useT, type Key } from '@/shared/lib/i18n';
import { Button } from '@/shared/ui/button';
import { Card } from '@/shared/ui/card';
import { REPLAY_MASK } from '@/shared/ui/replay-mask';
import { useSplashRevealed } from '@/shared/ui/splash';

type Answer = 'fine' | 'stiff' | 'sore' | 'hurt';

/**
 * The four words, as the 0–10 the check-in has always stored, so the plan
 * reads them exactly as it read the dial: "fine" is no pain, "it hurt" is the
 * dial's "Hurts" band (7, where the plan eases off for the day).
 */
export const ANSWER_SCORE: Readonly<Record<Answer, number>> = { fine: 0, stiff: 2, sore: 5, hurt: 7 };

const ORDER: readonly Answer[] = ['fine', 'stiff', 'sore', 'hurt'];

/** The word a stored score reads as, for one logged on the old dial too. */
export function answerFor(score: number): Answer {
  if (score <= 0) return 'fine';
  if (score <= 3) return 'stiff';
  if (score <= 6) return 'sore';
  return 'hurt';
}

function label(answer: Answer, morning: boolean): Key {
  if (answer === 'hurt') return morning ? 'home.today.check.hurtMorning' : 'home.today.check.hurtDay';
  return `home.today.check.${answer}`;
}

/**
 * The morning check-in as four big words (Runna/NRC style, no 0–10 dial on
 * Home): shown until today is answered. Once answered here it folds to one
 * line with "Change". The home-screen widget's "fine" answers it too.
 */
export function MorningCheck() {
  const t = useT();
  const router = useRouter();
  useLogsVersion();
  const { fontScale } = useWindowDimensions();
  const morning = isFirstStepTime(Date.now());
  const today = checkInOn(currentDay());
  const [answeredHere, setAnsweredHere] = useState(false);
  const [editing, setEditing] = useState(false);
  const [safety, setSafety] = useState(false);

  const record = (answer: Answer) => {
    void Haptics.selectionAsync();
    logPain(currentDay(), ANSWER_SCORE[answer], []);
    settleOffset(currentDay());
    setAnsweredHere(true);
    setEditing(false);
  };

  const { checkin } = useLocalSearchParams<{ checkin?: string }>();
  const revealed = useSplashRevealed();
  useEffect(() => {
    if (checkin !== 'fine' && checkin !== 'hurts' && checkin !== 'open') return;
    if (!revealed) return;
    router.setParams({ checkin: undefined });
    if (checkin === 'fine' && checkInOn(currentDay()) == null) record('fine');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [checkin, revealed]);

  if (today != null && !answeredHere && !editing) return null;

  if (today != null && !editing) {
    return (
      <Card style={styles.card} {...REPLAY_MASK}>
        <Text style={styles.answered} accessibilityLiveRegion="polite">
          {t('home.today.check.answered', { answer: t(label(answerFor(today.score), morning)) })}
        </Text>
        <View style={styles.actions}>
          <Button size="md" variant="secondary" label={t('home.today.check.change')} onPress={() => setEditing(true)} />
          <Button size="md" variant="ghost" label={t('home.somethingNewTitle')} onPress={() => setSafety(true)} />
        </View>
        <SafetySheet visible={safety} onClose={() => setSafety(false)} />
      </Card>
    );
  }

  const column = fontScale > 1.35;
  return (
    <Card style={styles.card} {...REPLAY_MASK}>
      <Text style={styles.question} accessibilityRole="header">
        {morning ? t('home.today.check.morning') : t('home.today.check.day')}
      </Text>
      <View style={[styles.grid, column && styles.column]}>
        {ORDER.map((answer) => {
          const picked = today != null && answerFor(today.score) === answer;
          return (
            <Pressable
              key={answer}
              accessibilityRole="button"
              accessibilityState={{ selected: picked }}
              onPress={() => record(answer)}
              style={({ pressed }) => [
                styles.word,
                column ? styles.wordColumn : styles.wordGrid,
                picked && styles.wordPicked,
                pressed && styles.pressed,
              ]}>
              <Text style={[styles.wordText, picked && styles.wordTextPicked]}>{t(label(answer, morning))}</Text>
            </Pressable>
          );
        })}
      </View>
    </Card>
  );
}

const styles = StyleSheet.create({
  card: { gap: 12 },
  question: { ...fonts.semibold(20), color: colors.text },
  grid: { flexDirection: 'row', flexWrap: 'wrap', gap: space.gap },
  column: { flexDirection: 'column' },
  word: {
    minHeight: target.primary,
    borderRadius: radius.button,
    borderCurve: 'continuous',
    backgroundColor: colors.surface2,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 12,
    paddingVertical: 10,
  },
  wordGrid: { flexBasis: '45%', flexGrow: 1 },
  wordColumn: { alignSelf: 'stretch' },
  wordPicked: { backgroundColor: colors.accentSoft },
  wordText: { ...fonts.semibold(19), color: colors.text, textAlign: 'center' },
  wordTextPicked: { color: colors.accent },
  answered: { ...fonts.regular(19), color: colors.text },
  actions: { flexDirection: 'row', flexWrap: 'wrap', gap: space.gap },
  pressed: { opacity: 0.6 },
});
