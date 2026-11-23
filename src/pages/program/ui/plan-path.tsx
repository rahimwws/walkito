import { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import Calendar03Icon from '@hugeicons/core-free-icons/Calendar03Icon';
import Clock01Icon from '@hugeicons/core-free-icons/Clock01Icon';
import Tick02Icon from '@hugeicons/core-free-icons/Tick02Icon';
import { HugeiconsIcon, type IconSvgElement } from '@hugeicons/react-native';

import { EXERCISES_BY_ID, TEST_LOOK, fromDateKey } from '@/entities/program';
import { CHROME_MAX_FONT_SCALE, bitepal, colors, fonts, target } from '@/shared/config';
import { useLanguage, useT, type Translate } from '@/shared/lib/i18n';
import { FluentIcon } from '@/shared/ui/fluent-icon';
import { REPLAY_MASK } from '@/shared/ui/replay-mask';
import { CardLabel, MoveCircle, cardStyle } from '@/widgets/session-player';

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
const PHOTO = 44;
const WELL = 56;

export type PlanPathProps = {
  view: OutcomeView;
  /** The weeks and the test days between them, from `weekPath`. */
  nodes: readonly PathNode[];
  /** `YYYY-MM-DD`: which test is today's, and how far off the next one is. */
  today: string;
  onPreview: (exerciseId: string) => void;
};

/**
 * The goal and the weeks that work towards it, each as a white card on the
 * grey (BitePal #98-#102): "Your goal" with what the person came for, this
 * week and next with what each works on, what changes in it, its days and
 * minutes as chips and its moves on their parts' colours, and a card for
 * each test day where it falls. Past next week one line says how the weeks
 * after are made, because that is as far as the plan can truthfully be told:
 * never a plan length, "week N of M" or an end date.
 */
export function PlanPath({ view, nodes, today, onPreview }: PlanPathProps) {
  const language = useLanguage();
  const t = useT();
  const dateLabel = (date: string) =>
    new Intl.DateTimeFormat(language, {
      day: 'numeric',
      month: 'short',
    }).format(fromDateKey(date));
  const headline = [view.headline.before, view.headline.lead, view.headline.after]
    .filter((part) => part.length > 0)
    .join(' ');

  return (
    // Hidden from session recordings: the list shows where the person is with their tests.
    <View {...REPLAY_MASK} style={styles.section}>
      <View style={styles.card}>
        <CardLabel>{t('pages.plan.goalEyebrow')}</CardLabel>
        <Text accessibilityRole="header" style={styles.goal} maxFontSizeMultiplier={1.7}>
          {headline}
        </Text>
        {view.current == null && <Text style={styles.caption}>{t('pages.plan.outcome.done')}</Text>}
      </View>

      {nodes.map((node) =>
        node.kind === 'test' ? (
          <TestCard key={`test-${node.state}-${node.date}`} test={node} today={today} dateLabel={dateLabel} />
        ) : (
          <WeekCard key={`week-${node.weekStart}`} week={node} dateLabel={dateLabel} onPreview={onPreview} />
        ),
      )}

      <Text style={styles.after}>{t('pages.plan.weeks.after')}</Text>
    </View>
  );
}

function moveName(t: Translate, id: string): string {
  const exercise = EXERCISES_BY_ID[id];
  return exercise == null ? id : t(exercise.titleKey);
}

function Pill({ icon, label }: { icon: IconSvgElement; label: string }) {
  return (
    <View style={styles.pill}>
      <HugeiconsIcon icon={icon} size={18} color={colors.text2} strokeWidth={2} />
      <Text style={styles.pillText} maxFontSizeMultiplier={CHROME_MAX_FONT_SCALE}>
        {label}
      </Text>
    </View>
  );
}

/** One week: "This week" or "Next week · from 19 Oct", what it works on, what changes, its days and minutes, its moves. */
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

  return (
    <View style={styles.card}>
      <CardLabel style={week.when === 'this' ? styles.now : undefined}>{weekLabel(t, week, dateLabel)}</CardLabel>
      <Text accessibilityRole="header" style={styles.title} maxFontSizeMultiplier={1.7}>
        {weekTitle(t, week)}
      </Text>
      <Text style={styles.body}>{weekLine(t, week.change, (id) => moveName(t, id))}</Text>
      {week.days > 0 && (
        <View style={styles.pills}>
          <Pill icon={Calendar03Icon} label={t('pages.plan.weeks.days', { count: week.days })} />
          {week.minutes > 0 && (
            <Pill icon={Clock01Icon} label={t('pages.plan.weeks.minutes', { minutes: week.minutes })} />
          )}
        </View>
      )}
      {shown.length > 0 && (
        <View style={styles.moves}>
          {shown.map((id) => {
            const name = moveName(t, id);
            return (
              <Pressable
                key={id}
                accessibilityRole="button"
                accessibilityLabel={t('pages.plan.chipPreviewA11y', { name })}
                onPress={() => onPreview(id)}
                style={({ pressed }) => [styles.move, pressed && styles.pressed]}>
                <MoveCircle exerciseId={id} size={PHOTO} />
                <Text style={styles.moveName}>{name}</Text>
                {week.fresh.includes(id) && (
                  <View style={styles.fresh}>
                    <Text style={styles.freshText} maxFontSizeMultiplier={CHROME_MAX_FONT_SCALE}>
                      {t('pages.plan.weeks.newTag')}
                    </Text>
                  </View>
                )}
              </Pressable>
            );
          })}
          {hidden > 0 && (
            <Pressable
              accessibilityRole="button"
              onPress={() => setAll(true)}
              style={({ pressed }) => [styles.more, pressed && styles.pressed]}>
              <Text style={styles.moreText}>{t('pages.plan.weeks.more', { n: hidden })}</Text>
            </Pressable>
          )}
        </View>
      )}
    </View>
  );
}

/** A test day as its own card: the test's icon in a round well, when it is, a violet tick once taken. */
function TestCard({ test, today, dateLabel }: { test: PathTest; today: string; dateLabel: (date: string) => string }) {
  const t = useT();
  const label = testLine(t, test, today, dateLabel);
  const taken = test.state === 'done';
  return (
    <View
      style={[styles.card, styles.testCard]}
      accessible
      accessibilityLabel={label}
      accessibilityValue={taken ? { text: t('pages.plan.path.done') } : undefined}>
      <View style={styles.well}>
        <FluentIcon name={TEST_LOOK.art} size={30} />
      </View>
      <Text style={styles.testText}>{label}</Text>
      {taken && (
        <View style={styles.tick}>
          <HugeiconsIcon icon={Tick02Icon} size={20} color={bitepal.onPrimary} strokeWidth={2.6} />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  section: { gap: 12 },
  card: { ...cardStyle, padding: 20, gap: 10 },
  goal: { ...fonts.heavy(28, -0.6), color: colors.text },
  caption: { ...fonts.medium(17), color: colors.text2 },
  after: { ...fonts.medium(17), color: colors.text3, paddingHorizontal: 4 },
  now: { color: bitepal.selected },
  title: { ...fonts.heavy(24, -0.4), color: colors.text },
  body: { ...fonts.regular(19), color: colors.text },
  pills: { flexDirection: 'row', flexWrap: 'wrap', gap: 8 },
  pill: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    minHeight: 34,
    paddingHorizontal: 12,
    borderRadius: 999,
    backgroundColor: bitepal.well,
  },
  pillText: { ...fonts.semibold(17), color: colors.text2 },
  moves: { gap: 4, marginTop: 4 },
  move: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    minHeight: target.min + 4,
  },
  moveName: { ...fonts.semibold(19), color: colors.text, flexShrink: 1 },
  fresh: {
    paddingHorizontal: 10,
    minHeight: 28,
    justifyContent: 'center',
    borderRadius: 999,
    backgroundColor: bitepal.selectedSoft,
  },
  freshText: { ...fonts.semibold(17), color: bitepal.selected },
  more: {
    alignSelf: 'flex-start',
    minHeight: target.min,
    justifyContent: 'center',
  },
  moreText: { ...fonts.semibold(17), color: colors.text },
  testCard: { flexDirection: 'row', alignItems: 'center', gap: 14 },
  well: {
    width: WELL,
    height: WELL,
    borderRadius: WELL / 2,
    backgroundColor: bitepal.well,
    alignItems: 'center',
    justifyContent: 'center',
  },
  testText: { ...fonts.heavy(20, -0.3), color: colors.text, flex: 1 },
  tick: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: bitepal.selected,
    alignItems: 'center',
    justifyContent: 'center',
  },
  pressed: { opacity: 0.55 },
});
