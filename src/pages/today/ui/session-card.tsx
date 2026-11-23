import PlayIcon from '@hugeicons/core-free-icons/PlayIcon';
import { Image, Pressable, StyleSheet, Text, View, useWindowDimensions } from 'react-native';

import type { PlanKind } from '@/entities/profile';
import { doseSeconds, exerciseById, type NextSession } from '@/entities/program';
import { colors, fonts, target } from '@/shared/config';
import { useCountdown } from '@/shared/lib/clock';
import { useLanguage, useT, type Translate } from '@/shared/lib/i18n';
import { waitPhrase } from '@/shared/lib/wait';
import { posterFor } from '@/widgets/session-player';

import { PART_OF } from '../model/parts';
import type { TodayWork } from '../model/today-work';
import { PartIcon } from '@/shared/ui/part-icon';
import { RoundAction } from './round-action';
import { TodayCard } from './today-card';

export type SessionCardProps = {
  work: TodayWork;
  kind: PlanKind;
  ranToday: boolean;
  next: NextSession | null;
  /** Today is in front: the next-session countdown ticks only then. */
  active: boolean;
  startLabel: string;
  onStart: () => void;
  onWhy: () => void;
};

/** Moves listed on the card; the meta line counts them all. */
const ROWS = 3;
const PHOTO = 56;
/** Big numbers stop growing at 1.7 times their size, so "5 min" never breaks. */
const BIG_MAX_SCALE = 1.7;

/**
 * Today's session as BitePal's home cards (#99, #98): a small grey label, the
 * minutes as the big number, the round play button with the ring of moves
 * done, the moves as label-and-value rows with their part icons, and the
 * moves' photos in a row of overlapping circles.
 */
export function SessionCard({ work, kind, ranToday, next, active, startLabel, onStart, onWhy }: SessionCardProps) {
  const t = useT();
  const language = useLanguage();
  const large = useWindowDimensions().fontScale >= 1.35;
  const total = work.exerciseIds.length;
  const showMoves = !work.done && work.type !== 'rest' && work.type !== 'test';
  const photos = work.exerciseIds.map((id) => posterFor(id)).filter((p) => p != null);

  const big = work.done
    ? t('home.today.done')
    : work.type === 'rest'
      ? t('home.today.rest.title')
      : t('quick.minutes', { count: work.minutes });

  return (
    <TodayCard style={styles.card}>
      <View style={[styles.head, large && styles.headLarge]}>
        <View style={styles.headText}>
          <Text style={styles.label}>{t('home.today.sessionLabel')}</Text>
          <Text
            style={[styles.big, (work.done || work.type === 'rest') && styles.bigWord]}
            accessibilityRole="header"
            maxFontSizeMultiplier={BIG_MAX_SCALE}>
            {big}
          </Text>
        </View>
        <RoundAction
          icon={PlayIcon}
          label={startLabel}
          onPress={onStart}
          progress={total > 0 && !work.done ? work.ticked / total : work.done ? 1 : undefined}
        />
      </View>

      {work.done ? (
        <NextLine next={next} active={active} />
      ) : (
        <Text style={styles.meta}>
          {work.type === 'rest' ? t('home.today.restMeta') : metaLine(t, language, work, kind, ranToday)}
        </Text>
      )}

      {showMoves && (
        <View style={styles.moves}>
          {work.exercises.slice(0, ROWS).map((exercise) => {
            const part = PART_OF[exercise.id];
            return (
              <View key={exercise.id} style={styles.move}>
                <View style={styles.moveText}>
                  <Text style={styles.moveLabel}>{exerciseById(exercise.id).title}</Text>
                  <Text style={styles.moveValue}>{doseLine(t, doseSeconds(exercise.dose))}</Text>
                </View>
                {part != null && <PartIcon part={part} size={48} />}
              </View>
            );
          })}
        </View>
      )}

      {photos.length > 0 && !work.done && (
        <View style={styles.photos} accessibilityElementsHidden importantForAccessibility="no-hide-descendants">
          {photos.slice(0, 5).map((source, index) => (
            <Image
              key={index}
              source={source}
              style={[styles.photo, index > 0 && styles.photoOverlap]}
              resizeMode="cover"
              accessibilityIgnoresInvertColors
            />
          ))}
        </View>
      )}

      <View style={styles.foot}>
        <Text style={styles.footText}>{t(`story.plan.${kind}`)}</Text>
        <Pressable accessibilityRole="button" onPress={onWhy} style={({ pressed }) => [styles.why, pressed && styles.pressed]}>
          <Text style={styles.whyText}>{t('home.why.title')}</Text>
        </Pressable>
      </View>
    </TodayCard>
  );
}

/** "1 min" or "45 s": what the player counts down for the move. */
function doseLine(t: Translate, seconds: number): string {
  const rounded = Math.max(1, Math.round(seconds));
  return rounded >= 60 ? t('quick.minutes', { count: Math.round(rounded / 60) }) : t('quick.seconds', { count: rounded });
}

/** "3 moves · in a chair", or where it sits around a run, or the tests. */
function metaLine(t: Translate, language: string, work: TodayWork, kind: PlanKind, ranToday: boolean): string {
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
  const line = t('home.today.meta', { moves: t('quick.moves', { count: work.exerciseIds.length }), where });
  return line.charAt(0).toLocaleUpperCase(language) + line.slice(1);
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
  card: { gap: 4 },
  head: { flexDirection: 'row', alignItems: 'flex-start', gap: 12 },
  headLarge: { flexDirection: 'column-reverse', alignItems: 'flex-start' },
  headText: { flexShrink: 1, flexGrow: 1, gap: 2 },
  label: { ...fonts.medium(17), color: colors.text3 },
  big: { ...fonts.heavy(44, -1), color: colors.text, fontVariant: ['tabular-nums'] },
  bigWord: fonts.heavy(30, -0.6),
  meta: { ...fonts.medium(17), color: colors.text2 },
  moves: { marginTop: 14, gap: 14 },
  move: { flexDirection: 'row', alignItems: 'center', gap: 12 },
  moveText: { flex: 1, gap: 1 },
  moveLabel: { ...fonts.medium(17), color: colors.text3 },
  moveValue: { ...fonts.heavy(19), color: colors.text },
  photos: { flexDirection: 'row', marginTop: 16 },
  photo: {
    width: PHOTO,
    height: PHOTO,
    borderRadius: PHOTO / 2,
    borderWidth: 3,
    borderColor: colors.surface,
    backgroundColor: colors.surface2,
  },
  photoOverlap: { marginLeft: -14 },
  foot: { marginTop: 12, gap: 0 },
  footText: { ...fonts.medium(17), color: colors.text3 },
  why: { alignSelf: 'flex-start', minHeight: target.min, justifyContent: 'center' },
  whyText: { ...fonts.semibold(17), color: colors.accent },
  pressed: { opacity: 0.6 },
});
