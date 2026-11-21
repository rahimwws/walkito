import Tick02Icon from '@hugeicons/core-free-icons/Tick02Icon';
import { HugeiconsIcon } from '@hugeicons/react-native';
import { Image, StyleSheet, Text, View } from 'react-native';

import type { PlanKind } from '@/entities/profile';
import { type NextSession } from '@/entities/program';
import { colors, fonts, space } from '@/shared/config';
import { useCountdown } from '@/shared/lib/clock';
import { useLanguage, useT, type Translate } from '@/shared/lib/i18n';
import { waitPhrase } from '@/shared/lib/wait';
import { Card } from '@/shared/ui/card';
import { posterFor } from '@/widgets/session-player';

import type { TodayWork } from '../model/today-work';

export type TodayCardProps = {
  work: TodayWork;
  kind: PlanKind;
  ranToday: boolean;
  next: NextSession | null;
  /** Home is in front: the next-session countdown ticks only then. */
  active: boolean;
  onPress: () => void;
};

/**
 * Today's session as one card (Runna #6, NTC #2): the first move's still, the
 * plan's name, "Today: 5 minutes" and what it asks of you. Ticks while partly
 * done; "Done for today" once it is.
 */
export function TodayCard({ work, kind, ranToday, next, active, onPress }: TodayCardProps) {
  const t = useT();
  // A test day has no moves of its own: the calf raise is its first test.
  const poster = posterFor(work.type === 'test' ? 'heel_raise_plain' : (work.exerciseIds[0] ?? ''));
  const rest = work.type === 'rest';
  const title = work.done ? t('home.today.done') : rest ? t('home.today.restTitle') : t('home.today.heroTitle', { count: work.minutes });
  const partly = !work.done && work.ticked > 0 && work.exerciseIds.length > 0;

  return (
    <Card padding={0} onPress={onPress} style={styles.card}>
      {poster != null && <Image source={poster} style={styles.photo} resizeMode="cover" accessibilityIgnoresInvertColors />}
      <View style={styles.body}>
        <Text style={styles.plan}>{t(`story.plan.${kind}`)}</Text>
        <View style={styles.titleRow}>
          {work.done && (
            <View style={styles.tick}>
              <HugeiconsIcon icon={Tick02Icon} size={18} color={colors.onInk} strokeWidth={2.5} />
            </View>
          )}
          <Text style={styles.title} accessibilityRole="header">
            {title}
          </Text>
        </View>
        {work.done ? (
          <NextLine next={next} active={active} />
        ) : (
          <Text style={styles.meta}>{metaLine(t, work, kind, ranToday)}</Text>
        )}
        {partly && (
          <View style={styles.progress}>
            <View style={styles.ticks}>
              {work.exerciseIds.map((id, i) => (
                <View key={id} style={[styles.segment, i < work.ticked && styles.segmentDone]} />
              ))}
            </View>
            <Text style={styles.progressText}>
              {t('home.today.progress', { count: work.ticked, total: work.exerciseIds.length })}
            </Text>
          </View>
        )}
      </View>
    </Card>
  );
}

function metaLine(t: Translate, work: TodayWork, kind: PlanKind, ranToday: boolean): string {
  if (work.type === 'rest') return t('home.today.restMeta');
  if (work.type === 'test') return t('home.today.testMeta', { count: work.tests });
  const minutes = t('quick.minutes', { count: work.minutes });
  if (kind === 'runner') {
    if (ranToday) return t('home.today.afterRun', { minutes });
    if (work.type === 'recovery') return t('home.today.recovery', { minutes });
    return t('home.today.beforeRun', { minutes });
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
  card: { overflow: 'hidden' },
  photo: { width: '100%', aspectRatio: 16 / 9, backgroundColor: colors.surface2 },
  body: { padding: space.card, gap: 6 },
  plan: { ...fonts.medium(17), color: colors.text2 },
  titleRow: { flexDirection: 'row', alignItems: 'center', gap: 10 },
  tick: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: colors.good,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: { ...fonts.bold(28, -0.4), color: colors.text, flexShrink: 1 },
  meta: { ...fonts.regular(19), color: colors.text2 },
  progress: { gap: 8, marginTop: 8 },
  ticks: { flexDirection: 'row', gap: 4 },
  segment: { flex: 1, height: 6, borderRadius: 3, backgroundColor: colors.surface2 },
  segmentDone: { backgroundColor: colors.good },
  progressText: { ...fonts.medium(17), color: colors.text2 },
});
