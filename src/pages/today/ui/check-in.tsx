import * as Haptics from 'expo-haptics';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { useEffect, useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { checkInOn, currentDay, isFirstStepTime, logPain, settleOffset, useLogsVersion } from '@/entities/program';
import { SafetySheet } from '@/features/safety-check';
import { colors, fonts, target } from '@/shared/config';
import { useT } from '@/shared/lib/i18n';
import { REPLAY_MASK } from '@/shared/ui/replay-mask';
import { useSplashRevealed } from '@/shared/ui/splash';

import { ANSWERS, ANSWER_SCORE, answerFor, answerLabel, type Answer } from '../model/check-in';
import { PlainRow } from './plain-row';

/**
 * The morning check-in as four words (no 0–10 dial on Today), until today is
 * answered. Answered here, it folds to one line with "Change" and the red-flag
 * check behind "Something new?". The home-screen widget's "fine" answers it.
 */
export function CheckIn() {
  const t = useT();
  const router = useRouter();
  useLogsVersion();
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
    // Keyed on the request alone: `record` is a fresh closure every render.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [checkin, revealed]);

  if (today != null && !answeredHere && !editing) return null;

  if (today != null && !editing) {
    return (
      <View {...REPLAY_MASK}>
        <PlainRow
          title={t('home.today.check.answered', { answer: t(answerLabel(answerFor(today.score), morning)) })}
          action={{ label: t('home.today.check.change'), onPress: () => setEditing(true) }}>
          <Pressable
            accessibilityRole="button"
            onPress={() => setSafety(true)}
            style={({ pressed }) => [styles.link, pressed && styles.pressed]}>
            <Text style={styles.linkText}>{t('home.somethingNewTitle')}</Text>
          </Pressable>
        </PlainRow>
        <SafetySheet visible={safety} onClose={() => setSafety(false)} />
      </View>
    );
  }

  return (
    <View style={styles.root} {...REPLAY_MASK}>
      <Text style={styles.question} accessibilityRole="header">
        {morning ? t('home.today.check.morning') : t('home.today.check.day')}
      </Text>
      <View style={styles.words}>
        {ANSWERS.map((answer) => {
          const picked = today != null && answerFor(today.score) === answer;
          return (
            <Pressable
              key={answer}
              accessibilityRole="button"
              accessibilityState={{ selected: picked }}
              onPress={() => record(answer)}
              style={({ pressed }) => [styles.word, picked && styles.wordPicked, pressed && styles.pressed]}>
              <Text style={[styles.wordText, picked && styles.wordTextPicked]}>{t(answerLabel(answer, morning))}</Text>
            </Pressable>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: colors.separator,
    paddingVertical: 20,
    gap: 16,
  },
  question: { ...fonts.semibold(19), color: colors.text },
  words: { flexDirection: 'row', flexWrap: 'wrap', gap: 12 },
  word: {
    minHeight: target.primary,
    flexGrow: 1,
    flexBasis: '40%',
    borderRadius: 999,
    borderWidth: 1.5,
    borderColor: colors.ink,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  wordPicked: { backgroundColor: colors.ink },
  wordText: { ...fonts.semibold(19), color: colors.text, textAlign: 'center' },
  wordTextPicked: { color: colors.onInk },
  link: { alignSelf: 'flex-start', minHeight: target.min, justifyContent: 'center' },
  linkText: { ...fonts.semibold(17), color: colors.text2, textDecorationLine: 'underline' },
  pressed: { opacity: 0.5 },
});
