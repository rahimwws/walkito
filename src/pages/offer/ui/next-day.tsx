import Tick02Icon from '@hugeicons/core-free-icons/Tick02Icon';
import { HugeiconsIcon } from '@hugeicons/react-native';
import { useIsFocused } from 'expo-router';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { exerciseById } from '@/entities/program';
import { clipShape, fonts } from '@/shared/config';
import { useT } from '@/shared/lib/i18n';
import { CLIP_BACKDROP, ExercisePreview } from '@/widgets/session-player';

import { nextDay, weekStrip } from '../model/next-day';
import { usePlansTheme } from './plans-theme';

/** The clip's longer side. Drawn in the clip's own shape, so it fills its
 * frame without bands. */
const CLIP_LONG = 116;
const CELL = 28;

/**
 * The day that comes next, where the sky was: the paywall after the first
 * session.
 *
 * A move of that day, playing, with its name and how long it takes, and the
 * first week by days under it with today ticked. It is the plan they have
 * already started, shown as theirs; the plans under it are how it goes on.
 * Read once as the view opens (`nextDay`), so it holds still while it is
 * looked at. The clip runs only while the step is in front and nothing is
 * over it.
 */
export function NextDay({ covered }: { covered: boolean }) {
  const { PLUS, SHEET } = usePlansTheme();
  const t = useT();
  const focused = useIsFocused();
  const [next] = useState(() => nextDay());
  const [strip] = useState(() => (next == null ? [] : weekStrip(next)));
  if (next == null) return null;

  const when =
    next.ahead === 0
      ? t('offer.next.today', { day: next.day })
      : next.ahead === 1
        ? t('offer.next.tomorrow', { day: next.day })
        : t('offer.next.later', { day: next.day });
  const title = next.test ? t('testday.intro.title') : t(exerciseById(next.clip).titleKey);
  const shape = clipShape(next.clip);
  const clip =
    shape > 1
      ? { width: CLIP_LONG, height: Math.round(CLIP_LONG / shape) }
      : { width: Math.round(CLIP_LONG * shape), height: CLIP_LONG };

  return (
    <View style={[styles.card, { backgroundColor: SHEET.card, borderColor: SHEET.edge }]}>
      <View style={styles.row}>
        <View style={[styles.clip, clip]}>
          <ExercisePreview exerciseId={next.clip} style={clip} aspectRatio={shape} fit="cover" playing={focused && !covered} />
        </View>
        <View style={styles.copy}>
          <Text style={[styles.when, { color: PLUS.lit }]} numberOfLines={1} maxFontSizeMultiplier={1.3}>
            {when}
          </Text>
          <Text style={[styles.title, { color: SHEET.ink }]} numberOfLines={2} maxFontSizeMultiplier={1.3}>
            {title}
          </Text>
          <View style={styles.meta}>
            <Text style={[styles.metaText, { color: SHEET.label }]} maxFontSizeMultiplier={1.3}>
              {t('session.minutes', { count: next.minutes })}
            </Text>
            {next.moves > 0 && (
              <>
                <View style={[styles.dot, { backgroundColor: SHEET.caption }]} />
                <Text style={[styles.metaText, { color: SHEET.label }]} maxFontSizeMultiplier={1.3}>
                  {t('session.moveCount', { count: next.moves })}
                </Text>
              </>
            )}
          </View>
        </View>
      </View>
      {/* The week by days: decorative beside the words above, which say
          which day is next. */}
      <View style={styles.strip} accessibilityElementsHidden importantForAccessibility="no-hide-descendants">
        {strip.map((cell) => (
          <View
            key={cell.day}
            style={[
              styles.cell,
              cell.done
                ? { backgroundColor: PLUS.accent, borderColor: PLUS.accent }
                : { borderColor: cell.next ? PLUS.accent : SHEET.edge },
            ]}>
            {cell.done ? (
              <HugeiconsIcon icon={Tick02Icon} size={15} color={PLUS.onAccent} strokeWidth={3} />
            ) : (
              <Text style={[styles.cellText, { color: cell.next ? SHEET.ink : SHEET.caption }]} allowFontScaling={false}>
                {cell.day}
              </Text>
            )}
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 24,
    borderCurve: 'continuous',
    borderWidth: 2,
    padding: 12,
  },
  row: { flexDirection: 'row', alignItems: 'center', gap: 14 },
  clip: {
    borderRadius: 14,
    borderCurve: 'continuous',
    overflow: 'hidden',
    backgroundColor: CLIP_BACKDROP,
  },
  copy: { flex: 1, justifyContent: 'center', gap: 3 },
  when: { ...fonts.heavy(13, 0.4), textTransform: 'uppercase' },
  title: { ...fonts.heavy(21, -0.4), lineHeight: 25 },
  meta: { flexDirection: 'row', alignItems: 'center', gap: 7 },
  metaText: fonts.semibold(14),
  dot: { width: 3, height: 3, borderRadius: 1.5 },
  strip: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 12, paddingHorizontal: 2 },
  cell: {
    width: CELL,
    height: CELL,
    borderRadius: CELL / 2,
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cellText: fonts.bold(13),
});
