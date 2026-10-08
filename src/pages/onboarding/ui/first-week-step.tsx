import * as Haptics from 'expo-haptics';
import { useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import Animated, { Easing, FadeIn, FadeInDown, ReduceMotion } from 'react-native-reanimated';

import { ExercisePreview } from '@/widgets/session-player';
import { PRIMARY, fonts, meterColors, palette } from '@/shared/config';
import { useLanguage, useT } from '@/shared/lib/i18n';
import { useColorScheme } from '@/shared/lib/theme';

const EASE = Easing.bezier(0.23, 1, 0.32, 1).factory();

export type WeekMove = { id: string; title: string; meta: string };

/** A Monday, any Monday: the labels only need the weekday names. */
const MONDAY = new Date(2024, 0, 1);

/**
 * The first week, before anybody pays: the days they picked and the moves in
 * it, with the selected one playing above the list.
 *
 * The product shown rather than described. Only moves with a clip appear, so
 * every card can be watched.
 */
export function FirstWeekStep({ days, moves }: { days: readonly number[]; moves: readonly WeekMove[] }) {
  const scheme = useColorScheme();
  const colors = palette[scheme];
  const meter = meterColors[scheme];
  const t = useT();
  const language = useLanguage();
  const [selected, setSelected] = useState(moves[0]?.id ?? null);

  const weekday = new Intl.DateTimeFormat(language, { weekday: 'short' });
  const labels = Array.from({ length: 7 }, (_, i) => {
    const day = new Date(MONDAY);
    day.setDate(MONDAY.getDate() + i);
    return weekday.format(day);
  });

  return (
    <ScrollView style={styles.fill} contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
      <Animated.Text entering={FadeIn.duration(300).reduceMotion(ReduceMotion.System)} style={[styles.title, { color: colors.foreground }]}>
        {t('onboarding.week.title')}
      </Animated.Text>

      <View style={styles.days}>
        {labels.map((label, i) => {
          const on = days.includes(i);
          return (
            <View
              key={label}
              style={[styles.day, { backgroundColor: on ? PRIMARY : colors.card }]}
              accessibilityLabel={label}
              accessibilityState={{ selected: on }}>
              <Text numberOfLines={1} style={[styles.dayLabel, { color: on ? '#FFFFFF' : meter.caption }]}>
                {label}
              </Text>
            </View>
          );
        })}
      </View>

      {selected != null && <ExercisePreview key={selected} exerciseId={selected} style={styles.clip} expandable />}

      {moves.map((move, i) => {
        const on = move.id === selected;
        return (
          <Animated.View key={move.id} entering={FadeInDown.delay(140 + i * 90).duration(340).easing(EASE).reduceMotion(ReduceMotion.System)}>
            <Pressable
              accessibilityRole="button"
              accessibilityState={{ selected: on }}
              onPress={() => {
                Haptics.selectionAsync();
                setSelected(move.id);
              }}
              style={[styles.card, { backgroundColor: colors.card, borderColor: on ? PRIMARY : 'transparent' }]}>
              <Text style={[styles.cardTitle, { color: colors.foreground }]}>{move.title}</Text>
              <Text style={[styles.cardMeta, { color: meter.caption }]}>{move.meta}</Text>
            </Pressable>
          </Animated.View>
        );
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  fill: { flex: 1 },
  content: { gap: 12, paddingBottom: 12 },
  title: { ...fonts.heavy(30, -0.8), lineHeight: 36 },
  days: { flexDirection: 'row', gap: 6, marginTop: 4 },
  day: { flex: 1, height: 40, borderRadius: 12, borderCurve: 'continuous', alignItems: 'center', justifyContent: 'center' },
  dayLabel: fonts.bold(13),
  clip: { aspectRatio: 16 / 10 },
  card: { borderRadius: 18, borderCurve: 'continuous', paddingVertical: 14, paddingHorizontal: 16, gap: 2, borderWidth: 2 },
  cardTitle: fonts.bold(17, -0.2),
  cardMeta: { ...fonts.medium(14), lineHeight: 19 },
});
