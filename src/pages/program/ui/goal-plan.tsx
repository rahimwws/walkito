import { useState } from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';

import { EXERCISES_BY_ID, TEST_LOOK, fromDateKey, moveLook } from '@/entities/program';
import { colors, fonts } from '@/shared/config';
import { useLanguage, useT, type Translate } from '@/shared/lib/i18n';
import { Card } from '@/shared/ui/card';
import { FluentIcon } from '@/shared/ui/fluent-icon';
import { REPLAY_MASK } from '@/shared/ui/replay-mask';
import { thumbFor } from '@/widgets/session-player';

import {
  testLine,
  weekLabel,
  weekLine,
  weekTitle,
  type OutcomeView,
  type PathNode,
  type PathTest,
  type PathWeek,
} from '../model/plan-view';

/** Moves listed before "+3 more" opens the rest. */
const MOVES_SHOWN = 5;
const MOVE_EMOJI = 22;
/** A move's still, where its clip has one, in the emoji's place. */
const MOVE_THUMB = { width: 54, height: 36 };

export type GoalPlanProps = {
  view: OutcomeView;
  /** The weeks and the test days between them, from `weekPath`. */
  nodes: readonly PathNode[];
  /** `YYYY-MM-DD`: which test is today's, and how far off the next one is. */
  today: string;
  /** A move tapped on a week's card: its preview. */
  onPreview: (exerciseId: string) => void;
};

/**
 * The goal, and the weeks that work towards it, as a plain list.
 *
 * "Your goal" and what the person came for, then this week and next as cards
 * (what each works on, one sentence of what changes in it, its days and
 * minutes, its moves by name, each opening its preview), the test days as a
 * line where they fall. Past next week one line says how the weeks after are
 * made, because that is as far as the plan can truthfully be told. No plan
 * length, never "week N of M", no end date.
 */
export function GoalPlan({ view, nodes, today, onPreview }: GoalPlanProps) {
  const language = useLanguage();
  const t = useT();
  const dateLabel = (date: string) =>
    new Intl.DateTimeFormat(language, { day: 'numeric', month: 'short' }).format(fromDateKey(date));

  return (
    // Hidden from session recordings: the list shows where the person is with
    // their tests.
    <View {...REPLAY_MASK} style={styles.section}>
      <View style={styles.head}>
        <Text style={styles.eyebrow}>{t('pages.plan.goalEyebrow')}</Text>
        <Text accessibilityRole="header" style={styles.headline}>
          {view.headline.before}
          {view.headline.lead.length > 0 && (
            <Text style={styles.lead}>
              {view.headline.before.length > 0 ? ' ' : ''}
              {view.headline.lead}
            </Text>
          )}
          {view.headline.after.length > 0 ? ` ${view.headline.after}` : ''}
        </Text>
        {view.current == null && <Text style={styles.caption}>{t('pages.plan.outcome.done')}</Text>}
      </View>

      {nodes.map((node) =>
        node.kind === 'test' ? (
          <TestRow key={`test-${node.state}-${node.date}`} test={node} today={today} dateLabel={dateLabel} />
        ) : (
          <WeekCard key={`week-${node.weekStart}`} week={node} dateLabel={dateLabel} onPreview={onPreview} />
        ),
      )}

      <Text style={styles.caption}>{t('pages.plan.weeks.after')}</Text>
    </View>
  );
}

/** A move's name in the reader's language. */
function moveName(t: Translate, id: string): string {
  const exercise = EXERCISES_BY_ID[id];
  return exercise == null ? id : t(exercise.titleKey);
}

/**
 * One week, readable on its own: "This week", or "Next week · from 19 Oct",
 * what it works on, what changes in it, its days and minutes, and its moves,
 * a "New" beside one the plan has never scheduled. The first five, then
 * "+3 more" for the rest.
 */
function WeekCard({
  week,
  dateLabel,
  onPreview,
}: {
  week: PathWeek;
  dateLabel: (date: string) => string;
  onPreview: (exerciseId: string) => void;
}) {
  const t = useT();
  const [all, setAll] = useState(false);
  const shown = all ? week.moves : week.moves.slice(0, MOVES_SHOWN);
  const hidden = week.moves.length - shown.length;
  const facts = [
    week.days > 0 ? t('pages.plan.weeks.days', { count: week.days }) : null,
    week.days > 0 && week.minutes > 0 ? t('pages.plan.weeks.minutes', { minutes: week.minutes }) : null,
  ].filter((fact): fact is string => fact != null);

  return (
    <Card style={styles.card}>
      <View style={styles.cardCopy}>
        <Text style={[styles.when, week.when === 'this' && styles.whenNow]}>{weekLabel(t, week, dateLabel)}</Text>
        <Text accessibilityRole="header" style={styles.title}>
          {weekTitle(t, week)}
        </Text>
        <Text style={styles.line}>{weekLine(t, week.change, (id) => moveName(t, id))}</Text>
        {facts.length > 0 && <Text style={styles.facts}>{facts.join(' · ')}</Text>}
      </View>

      {shown.length > 0 && (
        <View style={styles.moves}>
          {shown.map((id) => (
            <MoveRow key={id} id={id} fresh={week.fresh.includes(id)} onPreview={onPreview} />
          ))}
          {hidden > 0 && (
            <Pressable
              accessibilityRole="button"
              onPress={() => setAll(true)}
              hitSlop={8}
              style={({ pressed }) => [styles.moreRow, pressed && styles.pressed]}>
              <Text style={styles.more}>{t('pages.plan.weeks.more', { n: hidden })}</Text>
            </Pressable>
          )}
        </View>
      )}
    </Card>
  );
}

/** One of a week's moves: its still or emoji, its name, "New" for a move the
 * plan has never scheduled. A tap opens its preview, which starts nothing. */
function MoveRow({ id, fresh, onPreview }: { id: string; fresh: boolean; onPreview: (exerciseId: string) => void }) {
  const t = useT();
  const exercise = EXERCISES_BY_ID[id];
  if (exercise == null) return null;
  const name = t(exercise.titleKey);
  const thumb = thumbFor(id);

  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={t('pages.plan.chipPreviewA11y', { name })}
      onPress={() => onPreview(id)}
      style={({ pressed }) => [styles.move, pressed && styles.pressed]}>
      {thumb != null ? (
        <Image source={thumb} resizeMode="cover" style={styles.moveThumb} accessibilityIgnoresInvertColors />
      ) : (
        <FluentIcon name={moveLook(id, exercise.category).art} size={MOVE_EMOJI} />
      )}
      <Text style={styles.moveName} numberOfLines={2}>
        {name}
      </Text>
      {fresh && <Text style={styles.fresh}>{t('pages.plan.weeks.newTag')}</Text>}
    </Pressable>
  );
}

/** A test day's one line: "Test day · today", "Test day · in 12 days", or the
 * day one was taken, with a tick once taken. */
function TestRow({ test, today, dateLabel }: { test: PathTest; today: string; dateLabel: (date: string) => string }) {
  const t = useT();
  const label = testLine(t, test, today, dateLabel);
  const taken = test.state === 'done';
  const current = test.state === 'next' || test.date === today;

  return (
    <View
      style={styles.testRow}
      accessible
      accessibilityLabel={label}
      accessibilityValue={taken ? { text: t('pages.plan.path.done') } : undefined}>
      <FluentIcon name={TEST_LOOK.art} size={20} />
      <Text style={[styles.testText, { color: current ? colors.text : colors.text2 }]}>{label}</Text>
      {taken && <FluentIcon name="check" size={18} />}
    </View>
  );
}

const styles = StyleSheet.create({
  section: {
    gap: 12,
  },
  head: {
    gap: 4,
  },
  eyebrow: { ...fonts.semibold(15), color: colors.text2 },
  headline: {
    ...fonts.bold(26, -0.5),
    lineHeight: 32,
    color: colors.text,
  },
  lead: {
    color: colors.accent,
  },
  caption: {
    ...fonts.regular(17),
    lineHeight: 23,
    color: colors.text2,
  },
  card: {
    gap: 14,
  },
  cardCopy: {
    gap: 4,
  },
  when: { ...fonts.semibold(15), color: colors.text2 },
  whenNow: { color: colors.accent },
  title: {
    ...fonts.bold(20, -0.3),
    lineHeight: 25,
    color: colors.text,
  },
  line: {
    ...fonts.regular(17),
    lineHeight: 23,
    color: colors.text,
  },
  facts: { ...fonts.regular(15), color: colors.text2 },
  moves: {
    gap: 6,
  },
  move: {
    minHeight: 44,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  moveThumb: {
    ...MOVE_THUMB,
    borderRadius: 8,
    borderCurve: 'continuous',
  },
  moveName: {
    flexShrink: 1,
    ...fonts.medium(17),
    lineHeight: 22,
    color: colors.text,
  },
  fresh: { ...fonts.semibold(15), color: colors.accent },
  moreRow: {
    alignSelf: 'flex-start',
    minHeight: 44,
    justifyContent: 'center',
  },
  more: { ...fonts.semibold(17), color: colors.accent },
  pressed: {
    opacity: 0.55,
  },
  testRow: {
    minHeight: 44,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  testText: {
    flexShrink: 1,
    ...fonts.semibold(17),
    lineHeight: 22,
  },
});
