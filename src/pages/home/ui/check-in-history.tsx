import ArrowRight01Icon from '@hugeicons/core-free-icons/ArrowRight01Icon';
import { HugeiconsIcon } from '@hugeicons/react-native';
import * as Haptics from 'expo-haptics';
import { useRouter } from 'expo-router';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { checkInOn, currentDay } from '@/entities/program';
import { accents, fonts, meterColors } from '@/shared/config';
import { track } from '@/shared/lib/analytics';
import { useT } from '@/shared/lib/i18n';
import { useColorScheme } from '@/shared/lib/theme';

import { checkInHistory } from '../model/check-in-history';

/**
 * Under the day's answer, in the same card: how many of the last two weeks
 * carry a check-in, those days as a row of dots with today's picked out, and
 * the way to the whole history in Progress.
 *
 * A count and never a verdict: the sentence says how many days were answered,
 * not how they went, and a dot is a day answered whatever the answer was.
 * Ink for a day answered, the track for one that was not, and violet for
 * today, the colour the Progress chart gives its newest bar. Nothing moves.
 *
 * Drawn by the check-in on every log write, so the answer just given is in
 * the row the moment it is saved.
 */
export function CheckInHistory() {
  const scheme = useColorScheme();
  const meter = meterColors[scheme];
  const violet = accents[scheme].violet;
  const t = useT();
  const router = useRouter();
  const history = checkInHistory(currentDay(), (day) => checkInOn(day) != null);
  const line =
    history.days < 2
      ? t('home.checkInHistory.first')
      : t('home.checkInHistory.count', { count: history.logged, days: history.days });

  return (
    <View style={[styles.root, { borderTopColor: meter.divider }]}>
      <Text style={[styles.line, { color: meter.ink }]}>{line}</Text>
      {/* The sentence above already says what the row shows. */}
      <View style={styles.dots} accessibilityElementsHidden importantForAccessibility="no-hide-descendants">
        {history.dots.map((dot, i) => (
          <View
            key={i}
            style={[
              styles.dot,
              { backgroundColor: dot.today && dot.logged ? violet.fill : dot.logged ? meter.ink : meter.track },
              dot.logged && !dot.today && styles.past,
              dot.today && !dot.logged && { borderWidth: 2, borderColor: violet.fill },
            ]}
          />
        ))}
      </View>
      <Pressable
        accessibilityRole="link"
        onPress={() => {
          Haptics.selectionAsync();
          track('checkin_history_opened');
          router.navigate('/progress');
        }}
        style={({ pressed }) => [styles.link, pressed && styles.pressed]}>
        <Text style={[styles.linkText, { color: violet.fill }]}>{t('home.checkInHistory.link')}</Text>
        <HugeiconsIcon icon={ArrowRight01Icon} size={16} color={violet.fill} strokeWidth={2.2} />
      </Pressable>
    </View>
  );
}

/** The card's own padding (`CARD_PAD` in the check-in), so the row lines up
 * with nothing narrower than the card's other content. */
const SIDE = 18;

const styles = StyleSheet.create({
  root: {
    marginHorizontal: SIDE,
    paddingTop: 14,
    paddingBottom: 2,
    borderTopWidth: StyleSheet.hairlineWidth,
  },
  line: { ...fonts.medium(16, -0.1), lineHeight: 21 },
  dots: { flexDirection: 'row', gap: 6, marginTop: 12 },
  /** Fourteen share the row; fewer keep their size and start at the left. */
  dot: { flex: 1, maxWidth: 16, aspectRatio: 1, borderRadius: 8 },
  /** The Progress chart's ink for a bar that is not the newest. */
  past: { opacity: 0.32 },
  link: {
    alignSelf: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    minHeight: 48,
  },
  linkText: fonts.semibold(15, -0.1),
  pressed: { opacity: 0.6 },
});
