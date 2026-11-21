import * as Haptics from 'expo-haptics';
import { Image, Pressable, StyleSheet, Text, useWindowDimensions, View } from 'react-native';

import type { PlanKind } from '@/entities/profile';
import type { NextSession } from '@/entities/program';
import { colors, fonts, space } from '@/shared/config';
import { useCountdown } from '@/shared/lib/clock';
import { useLanguage, useT, type Translate } from '@/shared/lib/i18n';
import { waitPhrase } from '@/shared/lib/wait';
import { posterFor } from '@/widgets/session-player';

import type { TodayWork } from '../model/today-work';

export type TodayHeroProps = {
  work: TodayWork;
  kind: PlanKind;
  ranToday: boolean;
  next: NextSession | null;
  /** Today is in front: the next-session countdown ticks only then. */
  active: boolean;
  onPress: () => void;
};

/** Titles stop growing at twice their size, so a word never breaks. */
const TITLE_MAX_SCALE = 2;

/**
 * Today's one session, NTC-style: the first move's still edge to edge, the
 * plan's name, the minutes in huge type and what it asks of you. "Done for
 * today" once it is. Tapping it opens the plan.
 */
export function TodayHero({ work, kind, ranToday, next, active, onPress }: TodayHeroProps) {
  const t = useT();
  const { width } = useWindowDimensions();
  // A test day has no moves of its own: the calf raise is its first test.
  const poster = posterFor(work.type === 'test' ? 'heel_raise_plain' : (work.exerciseIds[0] ?? ''));
  const partly = !work.done && work.ticked > 0 && work.exerciseIds.length > 0;

  return (
    <Pressable
      accessibilityRole="button"
      onPress={() => {
        void Haptics.selectionAsync();
        onPress();
      }}
      style={({ pressed }) => pressed && styles.pressed}>
      {poster != null && (
        <Image
          source={poster}
          style={[styles.photo, { width, height: Math.round((width * 9) / 16) }]}
          resizeMode="cover"
          accessibilityIgnoresInvertColors
        />
      )}
      <View style={styles.body}>
        <Text style={styles.plan}>{t(`story.plan.${kind}`)}</Text>
        {work.done ? (
          <>
            <Text style={styles.title} accessibilityRole="header" maxFontSizeMultiplier={TITLE_MAX_SCALE}>
              {t('home.today.done')}
            </Text>
            <NextLine next={next} active={active} />
          </>
        ) : work.type === 'rest' ? (
          <>
            <Text style={styles.title} accessibilityRole="header" maxFontSizeMultiplier={TITLE_MAX_SCALE}>
              {t('home.today.rest.title')}
            </Text>
            <Text style={styles.meta}>{t('home.today.restMeta')}</Text>
          </>
        ) : (
          <>
            <Text
              style={styles.numeral}
              accessibilityRole="header"
              numberOfLines={1}
              adjustsFontSizeToFit
              maxFontSizeMultiplier={1}>
              {t('quick.minutes', { count: work.minutes })}
            </Text>
            <Text style={styles.meta}>{metaLine(t, work, kind, ranToday)}</Text>
          </>
        )}
        {partly && (
          <View style={styles.progress}>
            <View style={styles.track}>
              <View style={[styles.fill, { flex: work.ticked }]} />
              <View style={{ flex: work.exerciseIds.length - work.ticked }} />
            </View>
            <Text style={styles.meta}>{t('home.today.progress', { count: work.ticked, total: work.exerciseIds.length })}</Text>
          </View>
        )}
      </View>
    </Pressable>
  );
}

function metaLine(t: Translate, work: TodayWork, kind: PlanKind, ranToday: boolean): string {
  if (work.type === 'test') return t('home.today.testMeta', { count: work.tests });
  if (kind === 'runner') {
    if (ranToday) return t('home.today.afterRun');
    if (work.type === 'recovery') return t('home.today.recovery');
    return t('home.today.beforeRun');
  }
  const where =
    work.where === 'chair'
      ? t('home.today.whereChair')
      : work.where === 'standing'
        ? t('home.today.whereStanding')
        : t('home.today.whereMixed');
  return t('home.today.meta', { moves: t('quick.moves', { count: work.exerciseIds.length }), where });
}

/** When the next session opens: counted within a day, named beyond it. */
function NextLine({ next, active }: { next: NextSession | null; active: boolean }) {
  const t = useT();
  const language = useLanguage();
  const waiting = next != null && !next.open;
  const left = useCountdown(waiting ? next.at : null, active);
  if (next == null || !waiting || left == null || left <= 0) {
    return <Text style={styles.meta}>{t('home.allDoneBlurb')}</Text>;
  }
  const phrase = waitPhrase(t, language, next.at, left);
  return (
    <Text style={styles.meta}>
      {phrase.kind === 'in' ? t('nextSession.in', { time: phrase.time }) : t('nextSession.on', { day: phrase.day })}
    </Text>
  );
}

const styles = StyleSheet.create({
  photo: { marginHorizontal: -space.screen, backgroundColor: colors.surface2 },
  body: { paddingTop: 20, gap: 4 },
  plan: { ...fonts.medium(17), color: colors.text2 },
  numeral: { ...fonts.bold(76, -1.8), color: colors.text, fontVariant: ['tabular-nums'] },
  title: { ...fonts.bold(34, -0.6), color: colors.text },
  meta: { ...fonts.regular(19), color: colors.text2 },
  progress: { gap: 8, marginTop: 12 },
  track: { flexDirection: 'row', height: 4, borderRadius: 2, backgroundColor: colors.separator, overflow: 'hidden' },
  fill: { backgroundColor: colors.ink },
  pressed: { opacity: 0.7 },
});
