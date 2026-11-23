import PencilEdit02Icon from '@hugeicons/core-free-icons/PencilEdit02Icon';
import * as Haptics from 'expo-haptics';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { useEffect, useState } from 'react';
import { Pressable, StyleSheet, Text, View, useWindowDimensions } from 'react-native';

import { checkInOn, currentDay, isFirstStepTime, logPain, settleOffset, useLogsVersion } from '@/entities/program';
import { SafetySheet } from '@/features/safety-check';
import { colors, fonts, target } from '@/shared/config';
import { useT } from '@/shared/lib/i18n';
import { FluentIcon } from '@/shared/ui/fluent-icon';
import { REPLAY_MASK } from '@/shared/ui/replay-mask';
import { useSplashRevealed } from '@/shared/ui/splash';

import { ANSWERS, ANSWER_SCORE, answerFor, answerLabel, type Answer } from '../model/check-in';
import { RoundAction } from './round-action';
import { cardStyle } from './today-card';

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
  /** At large text sizes the words stack, one full-width button each. */
  const stacked = useWindowDimensions().fontScale >= 1.35;

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
      <View style={styles.root} {...REPLAY_MASK}>
        <View style={[styles.answered, stacked && styles.answeredStacked]}>
          <View style={styles.answeredText} accessible accessibilityLabel={t('home.today.check.answered', { answer: t(answerLabel(answerFor(today.score), morning)) })}>
            <Text style={styles.label}>{morning ? t('home.today.check.morning') : t('home.today.check.day')}</Text>
            <Text style={styles.answer}>{t(answerLabel(answerFor(today.score), morning))}</Text>
          </View>
          <RoundAction icon={PencilEdit02Icon} label={t('home.today.check.change')} onPress={() => setEditing(true)} />
        </View>
        <Pressable
          accessibilityRole="button"
          onPress={() => setSafety(true)}
          style={({ pressed }) => [styles.link, pressed && styles.pressed]}>
          <Text style={styles.linkText}>{t('home.somethingNewTitle')}</Text>
        </Pressable>
        <SafetySheet visible={safety} onClose={() => setSafety(false)} />
      </View>
    );
  }

  return (
    <View style={styles.root} {...REPLAY_MASK}>
      <View style={[styles.head, stacked && styles.headStacked]}>
        <Text style={styles.question} accessibilityRole="header">
          {morning ? t('home.today.check.morning') : t('home.today.check.day')}
        </Text>
        <FluentIcon name="foot" size={44} />
      </View>
      <View style={styles.words}>
        {ANSWERS.map((answer) => {
          const picked = today != null && answerFor(today.score) === answer;
          return (
            <Pressable
              key={answer}
              accessibilityRole="button"
              accessibilityState={{ selected: picked }}
              onPress={() => record(answer)}
              style={({ pressed }) => [styles.word, stacked && styles.wordStacked, picked && styles.wordPicked, pressed && styles.pressed]}>
              <Text style={[styles.wordText, picked && styles.wordTextPicked]}>{t(answerLabel(answer, morning))}</Text>
            </Pressable>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: { ...cardStyle, padding: 20, gap: 16 },
  head: { flexDirection: 'row', alignItems: 'flex-start', gap: 14 },
  headStacked: { flexDirection: 'column-reverse', alignItems: 'flex-start' },
  question: { ...fonts.heavy(24, -0.4), color: colors.text, flexShrink: 1, flexGrow: 1 },
  answered: { flexDirection: 'row', alignItems: 'flex-start', gap: 12 },
  answeredStacked: { flexDirection: 'column-reverse' },
  answeredText: { flexShrink: 1, flexGrow: 1, gap: 2 },
  label: { ...fonts.medium(17), color: colors.text3 },
  answer: { ...fonts.heavy(30, -0.6), color: colors.text },
  words: { flexDirection: 'row', flexWrap: 'wrap', gap: 10 },
  word: {
    minHeight: target.primary,
    flexGrow: 1,
    flexBasis: '40%',
    borderRadius: 999,
    backgroundColor: colors.bg,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  wordStacked: { flexBasis: '100%' },
  wordPicked: { backgroundColor: colors.accent },
  wordText: { ...fonts.bold(19), color: colors.text, textAlign: 'center' },
  wordTextPicked: { color: colors.onInk },
  link: { alignSelf: 'flex-start', minHeight: target.min, justifyContent: 'center' },
  linkText: { ...fonts.semibold(17), color: colors.accent },
  pressed: { opacity: 0.5 },
});
