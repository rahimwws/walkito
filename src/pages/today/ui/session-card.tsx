import PlayIcon from '@hugeicons/core-free-icons/PlayIcon';
import { HugeiconsIcon } from '@hugeicons/react-native';
import * as Haptics from 'expo-haptics';
import type { ComponentRef, Ref } from 'react';
import { Image, Pressable, StyleSheet, Text, View, useWindowDimensions } from 'react-native';

import type { PlanKind } from '@/entities/profile';
import { doseSeconds, exerciseById, type NextSession } from '@/entities/program';
import { CHROME_MAX_FONT_SCALE, colors, fonts, radius, space, target } from '@/shared/config';
import { useCountdown } from '@/shared/lib/clock';
import { useLanguage, useT, type Translate } from '@/shared/lib/i18n';
import { waitPhrase } from '@/shared/lib/wait';
import { posterFor, thumbFor } from '@/widgets/session-player';

import type { TodayWork } from '../model/today-work';
import { CATEGORY_ACCENT, RoundArt } from './round-art';
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
  /** The photo opens the plan. */
  onOpen: () => void;
  onWhy: () => void;
  /** The tour's "dock.start" stop, on the Start button. */
  startRef: Ref<ComponentRef<typeof View>>;
};

/** Moves shown on the card, two so Start stays above the tab bar; the meta
 * line counts them all. */
const ROWS = 2;
const THUMB = 44;
/** The card's padding around the photo. */
const INSET = 12;
/** Titles stop growing at twice their size, so a word never breaks. */
const TITLE_MAX_SCALE = 2;

/**
 * Today's session as pliability's Today card and Alan's session card: the
 * first move's photo with a play badge and a "Today" pill, the plan's name,
 * "5 min · 3 moves", the first moves as rows with their round drawings, and
 * Start across the bottom of the card. Done, rest and test days keep their
 * own lines.
 */
export function SessionCard({ work, kind, ranToday, next, active, startLabel, onStart, onOpen, onWhy, startRef }: SessionCardProps) {
  const t = useT();
  const language = useLanguage();
  const { width, fontScale } = useWindowDimensions();
  const photoHeight = Math.round((width - 2 * space.screen - 2 * INSET) / 2);
  /** At large text sizes a move's circle sits at the top of its words. */
  const large = fontScale >= 1.35;
  // A test day has no moves of its own: the calf raise is its first test.
  const poster = posterFor(work.type === 'test' ? 'heel_raise_plain' : (work.exerciseIds[0] ?? ''));
  const partly = !work.done && work.ticked > 0 && work.exerciseIds.length > 0;
  const showMoves = !work.done && work.type !== 'rest' && work.type !== 'test';
  const context = contextLine(t, language, work, kind, ranToday);

  return (
    <TodayCard style={styles.card}>
      <Pressable
        accessibilityRole="button"
        accessibilityLabel={t('home.today.weekHint')}
        onPress={() => {
          void Haptics.selectionAsync();
          onOpen();
        }}
        style={({ pressed }) => [styles.media, pressed && styles.pressed]}>
        {poster != null ? (
          <Image source={poster} style={[styles.photo, { height: photoHeight }]} resizeMode="cover" accessibilityIgnoresInvertColors />
        ) : (
          <View style={[styles.photo, styles.restBand, { height: photoHeight }]}>
            <RoundArt emoji={work.done ? 'check' : 'rest'} accent={work.done ? 'teal' : 'blue'} size={96} />
          </View>
        )}
        <View style={styles.pill}>
          <Text style={styles.pillText} maxFontSizeMultiplier={CHROME_MAX_FONT_SCALE} numberOfLines={1}>
            {t('tabs.today')}
          </Text>
        </View>
        {poster != null && (
          <View style={styles.play}>
            <HugeiconsIcon icon={PlayIcon} size={22} color={colors.accent} strokeWidth={2.2} />
          </View>
        )}
      </Pressable>

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
            <Text style={styles.title} accessibilityRole="header" maxFontSizeMultiplier={TITLE_MAX_SCALE}>
              {t('home.today.cardMeta', {
                minutes: t('quick.minutes', { count: work.minutes }),
                moves:
                  work.type === 'test'
                    ? t('home.today.testMeta', { count: work.tests })
                    : t('quick.moves', { count: work.exerciseIds.length }),
              })}
            </Text>
            {context != null && <Text style={styles.meta}>{context}</Text>}
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

        {showMoves && (
          <View style={styles.moves}>
            {work.exercises.slice(0, ROWS).map((exercise) => {
              const move = exerciseById(exercise.id);
              return (
                <View key={exercise.id} style={[styles.move, large && styles.moveLarge]}>
                  <RoundArt source={thumbFor(exercise.id)} accent={CATEGORY_ACCENT[move.category]} size={THUMB} />
                  <View style={styles.moveText}>
                    <Text style={styles.moveTitle}>{move.title}</Text>
                    <Text style={styles.moveDose}>{doseLine(t, doseSeconds(exercise.dose))}</Text>
                  </View>
                </View>
              );
            })}
          </View>
        )}

        <View ref={startRef} collapsable={false} style={styles.start}>
          <Pressable
            accessibilityRole="button"
            onPress={() => {
              void Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
              onStart();
            }}
            style={({ pressed }) => [styles.button, pressed && styles.buttonPressed]}>
            <Text style={styles.buttonText}>{startLabel}</Text>
          </Pressable>
        </View>
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

/** Where the moves are done, or where the session sits around a run. */
function contextLine(t: Translate, language: string, work: TodayWork, kind: PlanKind, ranToday: boolean): string | null {
  if (work.type === 'test') return null;
  if (kind === 'runner') {
    if (ranToday) return t('home.today.afterRun');
    if (work.type === 'recovery') return t('home.today.recovery');
    return t('home.today.beforeRun');
  }
  // The where-words are written to follow "3 moves · "; alone, they open the line.
  const where =
    work.where === 'chair'
      ? t('home.today.whereChair')
      : work.where === 'standing'
        ? t('home.today.whereStanding')
        : t('home.today.whereMixed');
  return where.charAt(0).toLocaleUpperCase(language) + where.slice(1);
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
  card: { padding: INSET },
  media: { borderRadius: radius.photo, borderCurve: 'continuous', overflow: 'hidden' },
  photo: { width: '100%', backgroundColor: colors.surface2 },
  restBand: { alignItems: 'center', justifyContent: 'center', backgroundColor: colors.accentSoft },
  pill: {
    position: 'absolute',
    top: 12,
    left: 12,
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 999,
    backgroundColor: colors.surface,
  },
  pillText: { ...fonts.semibold(17), color: colors.text },
  play: {
    position: 'absolute',
    right: 12,
    bottom: 12,
    width: 48,
    height: 48,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.surface,
    boxShadow: '0px 2px 8px rgba(17, 17, 20, 0.18)',
  },
  body: { paddingHorizontal: 8, paddingTop: 12, paddingBottom: 0, gap: 2 },
  plan: { ...fonts.medium(17), color: colors.text2 },
  title: { ...fonts.bold(26, -0.4), color: colors.text },
  meta: { ...fonts.regular(17), color: colors.text2 },
  progress: { gap: 8, marginTop: 10 },
  track: { flexDirection: 'row', height: 6, borderRadius: 3, backgroundColor: colors.surface2, overflow: 'hidden' },
  fill: { backgroundColor: colors.accent },
  moves: { marginTop: 12, gap: 8 },
  move: { flexDirection: 'row', alignItems: 'center', gap: 14 },
  moveLarge: { alignItems: 'flex-start' },
  moveText: { flex: 1, gap: 1 },
  moveTitle: { ...fonts.semibold(17), color: colors.text },
  moveDose: { ...fonts.regular(17), color: colors.text2 },
  start: { marginTop: 14 },
  button: {
    minHeight: target.primary,
    borderRadius: 999,
    backgroundColor: colors.accent,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingVertical: 12,
  },
  buttonPressed: { opacity: 0.85 },
  buttonText: { ...fonts.semibold(19), color: colors.onInk, textAlign: 'center' },
  why: { alignSelf: 'center', minHeight: target.min, justifyContent: 'center' },
  whyText: { ...fonts.medium(17), color: colors.text2, textDecorationLine: 'underline' },
  pressed: { opacity: 0.7 },
});
