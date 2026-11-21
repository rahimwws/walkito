import * as Haptics from 'expo-haptics';
import { makeImageFromView } from '@shopify/react-native-skia';
import { useEffect, useMemo, useRef, useState, type ComponentRef } from 'react';
import { Platform, Pressable, ScrollView, Share, StyleSheet, Text, View, useWindowDimensions } from 'react-native';
import Animated, { FadeIn, FadeOut, useReducedMotion } from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { useIntake } from '@/entities/profile';
import { GOAL_SPECS, fromDateKey, retestResults, type TestDayOutcome } from '@/entities/program';
import { fonts } from '@/shared/config';
import { track } from '@/shared/lib/analytics';
import { useLanguage, useT, type Translate } from '@/shared/lib/i18n';

import { goalValuesOf, legsOf, resultRows, type ResultRow } from '../../model/test-day';
import { Capsule, Hairline, NUMERAL_SCALE, SIDE, TITLE_SCALE, TextButton, ink } from '../player/kit';
import { CARD_ORDER, daysBetween, realGain, signed, verdictOf, type CardGoal, type Verdict } from './results-math';

const NAME_KEY = {
  arch_hold: 'testday.results.name.arch_hold',
  calf_raises: 'testday.results.name.calf_raises',
  balance: 'testday.results.name.balance',
} as const satisfies Record<CardGoal, string>;

const EXPLAIN_KEY = {
  arch_hold: 'testday.results.explain.arch_hold',
  calf_raises: 'testday.results.explain.calf_raises',
  balance: 'testday.results.explain.balance',
} as const satisfies Record<CardGoal, string>;

const VERDICT_UP_KEY = {
  arch_hold: 'testday.results.verdictUp.arch_hold',
  calf_raises: 'testday.results.verdictUp.calf_raises',
  balance: 'testday.results.verdictUp.balance',
} as const satisfies Record<CardGoal, string>;

const VERDICT_GOAL_KEY = {
  arch_hold: 'testday.results.verdictGoal.arch_hold',
  calf_raises: 'testday.results.verdictGoal.calf_raises',
  balance: 'testday.results.verdictGoal.balance',
} as const satisfies Record<CardGoal, string>;

/**
 * What they came for, said back to them under the numbers.
 *
 * The one moment the numbers mean most is the moment to connect them to the
 * reason the person started, in their words from onboarding. A reminder of
 * the goal, never a verdict on whether they are on track for it.
 */
const GOAL_LINE = {
  painfree: 'widgets.retestGoal.painfree',
  race: 'widgets.retestGoal.race',
  consistent: 'widgets.retestGoal.consistent',
  stronger: 'widgets.retestGoal.stronger',
  injuryfree: 'widgets.retestGoal.injuryfree',
  flatfeet: 'widgets.retestGoal.flatfeet',
  ankles: 'widgets.retestGoal.ankles',
  jump: 'widgets.retestGoal.jump',
  allday: 'widgets.retestGoal.allday',
  comeback: 'widgets.retestGoal.comeback',
  steady: 'widgets.retestGoal.steady',
} as const;

function goalLineKey(goal: string | null | undefined): (typeof GOAL_LINE)[keyof typeof GOAL_LINE] | null {
  return goal != null && Object.hasOwn(GOAL_LINE, goal) ? GOAL_LINE[goal as keyof typeof GOAL_LINE] : null;
}

const COUNT_MS = 750;

/**
 * A figure counting from last time's to today's. Settles on the figure at
 * once with Reduce Motion, or when there is nothing to count.
 */
function useCountUp(from: number, to: number): number {
  const reduceMotion = useReducedMotion();
  const [shown, setShown] = useState(reduceMotion ? to : from);
  useEffect(() => {
    if (reduceMotion || from === to) {
      setShown(to);
      return;
    }
    setShown(from);
    let frame = 0;
    const start = Date.now() + 250;
    const tick = () => {
      const t = Math.min(1, Math.max(0, (Date.now() - start) / COUNT_MS));
      setShown(Math.round(from + (to - from) * (1 - (1 - t) ** 3)));
      if (t < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [from, to, reduceMotion]);
  return shown;
}

export type TestDayResultsProps = {
  outcome: TestDayOutcome;
  side: 'left' | 'right' | 'both' | null;
  onDone: () => void;
};

type Hero =
  | { kind: 'goal'; type: CardGoal }
  | { kind: 'up'; type: CardGoal; verdict: Verdict }
  | { kind: 'first' }
  | { kind: 'steady' };

type Card = ResultRow & { type: CardGoal };

/**
 * What the test found: one line that says it, then the three tests as plain
 * rows, each a big figure and the change in words. A row opens to every test
 * so far as simple bars, the legs, and what the test shows. The next test
 * closes the page; the result can leave the app as a card.
 *
 * Read from the stored results rather than from what was just typed, so the
 * same screen serves "See results" on a later day.
 */
export function TestDayResults({ outcome, side, onDone }: TestDayResultsProps) {
  const insets = useSafeAreaInsets();
  const language = useLanguage();
  const t = useT();
  const goalLine = goalLineKey(useIntake()?.goal);
  const [open, setOpen] = useState<CardGoal | null>(null);
  const [sharing, setSharing] = useState(false);

  const read = useMemo(() => {
    const results = retestResults();
    const last = results[results.length - 1];
    if (last == null) return null;
    const previous = results[results.length - 2] ?? null;
    const latest = goalValuesOf(last);
    const before = previous == null ? null : goalValuesOf(previous);
    return {
      rows: resultRows(latest, before, outcome.reached, GOAL_SPECS),
      before,
      legs: legsOf(last, side),
      date: last.date,
      previousDate: previous?.date ?? null,
      history: results.slice(-6).map((result) => ({ date: result.date, values: goalValuesOf(result) })),
    };
    // `outcome` changes identity when a new test is saved, which is when the
    // stored results have moved.
  }, [outcome, side]);

  const day = (key: string) =>
    new Intl.DateTimeFormat(language, { day: 'numeric', month: 'long' }).format(fromDateKey(key));
  const nextTest = new Intl.DateTimeFormat(language, {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
  }).format(fromDateKey(outcome.nextTestOn));

  const verdict: Verdict = read == null ? { kind: 'first' } : verdictOf(read.rows);
  const hero = heroOf(read?.rows ?? [], verdict, outcome.reached);
  const celebrate = hero.kind === 'goal' || hero.kind === 'up';
  const dateLine =
    read == null
      ? null
      : read.previousDate == null
        ? t('testday.results.dateFirst', { date: day(read.date) })
        : t('testday.results.dateVs', { date: day(read.date), count: daysBetween(read.previousDate, read.date) });

  useEffect(() => {
    if (!celebrate) return;
    const timer = setTimeout(() => {
      void Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
    }, 420);
    return () => clearTimeout(timer);
  }, [celebrate]);

  const symmetry = read?.rows.find((row) => row.type === 'symmetry') ?? null;
  const cards: Card[] =
    read == null
      ? []
      : CARD_ORDER.map((type) => read.rows.find((row) => row.type === type)).filter((row): row is Card => row != null);

  const toggle = (type: CardGoal) => {
    setOpen((current) => {
      if (current === type) return null;
      track('test_results_detail', { test: type });
      return type;
    });
  };

  return (
    <View style={styles.root}>
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <Text style={styles.eyebrow}>{heroEyebrow(t, hero)}</Text>
        <Text maxFontSizeMultiplier={TITLE_SCALE} style={styles.title} accessibilityRole="header">
          {heroTitle(t, hero)}
        </Text>
        <Text style={styles.lead}>{hero.kind === 'first' ? t('testday.results.firstBlurb') : dateLine}</Text>

        <View style={styles.rows}>
          <Hairline />
          {cards.map((row) => (
            <View key={row.type}>
              <ScoreRow
                row={row}
                previous={read?.before?.[row.type] ?? null}
                history={read?.history ?? []}
                legs={row.type === 'calf_raises' ? (read?.legs ?? null) : null}
                gap={row.type === 'calf_raises' ? symmetry : null}
                open={open === row.type}
                onToggle={() => toggle(row.type)}
                day={(key) => new Intl.DateTimeFormat(language, { day: 'numeric', month: 'short' }).format(fromDateKey(key))}
              />
              <Hairline />
            </View>
          ))}
        </View>

        <View style={styles.after}>
          <Text style={styles.nextTitle}>{t('testday.results.nextTest', { date: nextTest })}</Text>
          <Text style={styles.body}>{t('testday.results.planUpdated')}</Text>
        </View>

        {goalLine != null && (
          <View style={styles.after}>
            <Text style={styles.small}>{t('widgets.retestYourGoal')}</Text>
            <Text style={styles.goal}>{t(goalLine)}</Text>
          </View>
        )}
      </ScrollView>

      <View style={[styles.dock, { paddingBottom: Math.max(insets.bottom, 16) }]}>
        <Capsule label={t('testday.results.done')} onPress={onDone} />
        {cards.length > 0 && <TextButton label={t('testday.results.share')} onPress={() => setSharing(true)} />}
      </View>

      {sharing && read != null && <ShareOverlay rows={cards} date={day(read.date)} onClose={() => setSharing(false)} />}
    </View>
  );
}

/** The moment at the top: a goal reached first, then the test that grew most
 * against its own goal, then a first test or a level one. */
function heroOf(rows: readonly ResultRow[], verdict: Verdict, reached: readonly string[]): Hero {
  const reachedCard = CARD_ORDER.find((type) => reached.includes(type) && rows.some((row) => row.type === type));
  if (reachedCard != null) return { kind: 'goal', type: reachedCard };
  if (verdict.kind === 'first') return { kind: 'first' };
  if (verdict.kind === 'steady') return { kind: 'steady' };
  let best: CardGoal | null = null;
  let bestShare = 0;
  for (const type of CARD_ORDER) {
    const row = rows.find((candidate) => candidate.type === type);
    if (row?.change == null || !realGain(type, row.change)) continue;
    const share = row.change / Math.max(1, row.target);
    if (share > bestShare) {
      bestShare = share;
      best = type;
    }
  }
  return best == null ? { kind: 'steady' } : { kind: 'up', type: best, verdict };
}

function heroTitle(t: Translate, hero: Hero): string {
  switch (hero.kind) {
    case 'goal':
      return t(VERDICT_GOAL_KEY[hero.type]);
    case 'first':
      return t('testday.results.verdictFirst');
    case 'steady':
      return t('testday.results.verdictSteady');
    case 'up':
      if (hero.verdict.kind === 'two') return t('testday.results.verdictUpTwo');
      if (hero.verdict.kind === 'all') return t('testday.results.verdictUpAll');
      return t(VERDICT_UP_KEY[hero.type]);
  }
}

function heroEyebrow(t: Translate, hero: Hero): string {
  switch (hero.kind) {
    case 'goal':
      return t('testday.results.reached');
    case 'up':
      return t('testday.results.heroEyebrowUp');
    case 'first':
      return t('testday.results.heroEyebrowFirst');
    case 'steady':
      return t('testday.results.heroEyebrowSteady');
  }
}

// ── One test ────────────────────────────────────────────────────────────────

type RowProps = {
  row: Card;
  /** Last test's figure, as the goal reads it. Null on a first test. */
  previous: number | null;
  history: readonly { date: string; values: Record<CardGoal, number> }[];
  /** Calf raises only: each leg by its real name. */
  legs: { left: number; right: number } | null;
  /** Calf raises only: the gap the two legs leave. */
  gap: ResultRow | null;
  open: boolean;
  onToggle: () => void;
  day: (key: string) => string;
};

/** One test as a plain row: its name and what is left to the goal, the figure
 * big on the right with the change under it. Opens to the details. */
function ScoreRow({ row, previous, history, legs, gap, open, onToggle, day }: RowProps) {
  const t = useT();
  const seconds = row.type !== 'calf_raises';
  const figure = useCountUp(previous ?? 0, row.value);
  const left = Math.max(0, row.target - row.value);
  const stacked = useWindowDimensions().fontScale > 1.6;

  return (
    <View>
      <Pressable
        accessibilityRole="button"
        accessibilityState={{ expanded: open }}
        accessibilityHint={open ? t('testday.results.hideDetails') : t('testday.results.showDetails')}
        accessibilityLabel={`${t(NAME_KEY[row.type])}, ${row.value} ${
          seconds
            ? t('testday.results.unitSeconds', { count: row.value })
            : t('testday.results.unitRaises', { count: row.value })
        }. ${changeSentence(t, row)}`}
        onPress={() => {
          void Haptics.selectionAsync();
          onToggle();
        }}
        style={({ pressed }) => [styles.row, stacked && styles.rowStacked, pressed && styles.pressed]}>
        <View style={styles.rowCopy}>
          <Text style={styles.name}>{t(NAME_KEY[row.type])}</Text>
          <Text style={styles.small}>
            {row.reached
              ? t('testday.results.reached')
              : seconds
                ? t('testday.results.toGoSeconds', { count: left })
                : t('testday.results.toGoRaises', { count: left })}
          </Text>
        </View>
        <View style={[styles.rowFigure, stacked && styles.rowFigureStacked]}>
          <Text maxFontSizeMultiplier={TITLE_SCALE} style={styles.figure}>
            {figure}
            {seconds && <Text style={styles.unit}> {t('testday.results.secondsShort')}</Text>}
          </Text>
          <Text style={styles.small}>{chipLabel(t, row)}</Text>
        </View>
      </Pressable>

      {open && (
        <Animated.View entering={FadeIn.duration(200)} exiting={FadeOut.duration(140)} style={styles.details}>
          <Bars
            values={history.map((entry) => entry.values[row.type])}
            dates={history.map((entry) => day(entry.date))}
            target={row.target}
          />
          {legs != null && (
            <View>
              <Text style={styles.body}>{t('testday.results.legs', { left: legs.left, right: legs.right })}</Text>
              {gap != null && (
                <Text style={styles.small}>
                  {t('testday.results.gapBetween', { n: gap.value })} · {t('testday.results.goalGap', { n: gap.target })}
                </Text>
              )}
            </View>
          )}
          <Text
            style={styles.small}
            accessibilityLabel={`${t('testday.results.explainA11y')}. ${t(EXPLAIN_KEY[row.type])}`}>
            {t(EXPLAIN_KEY[row.type])}
          </Text>
        </Animated.View>
      )}
    </View>
  );
}

const BARS_HEIGHT = 96;

/** Every test so far, oldest first: grey bars, today's black, the goal a
 * hairline. Each bar carries its figure and date. */
function Bars({ values, dates, target }: { values: readonly number[]; dates: readonly string[]; target: number }) {
  const t = useT();
  const top = Math.max(1, target, ...values);
  return (
    <View
      accessible
      accessibilityLabel={`${t('testday.results.history')}: ${values.map((value, i) => `${dates[i]} ${value}`).join(', ')}`}>
      <Text style={styles.small}>{t('testday.results.history')}</Text>
      <View style={styles.bars}>
        <View style={[styles.goalLine, { bottom: (target / top) * BARS_HEIGHT }]}>
          <Text style={styles.goalTag}>{target}</Text>
        </View>
        {values.map((value, i) => {
          const last = i === values.length - 1;
          return (
            <View key={`${dates[i]}-${i}`} style={styles.barCol}>
              <Text style={[styles.barValue, last && styles.barValueLast]}>{value}</Text>
              <View
                style={[
                  styles.bar,
                  { height: Math.max(2, (value / top) * BARS_HEIGHT), backgroundColor: last ? ink.text : ink.rule },
                ]}
              />
            </View>
          );
        })}
      </View>
      <View style={styles.barDates}>
        {dates.map((date, i) => (
          <Text key={`${date}-${i}`} style={styles.barDate} numberOfLines={1}>
            {date}
          </Text>
        ))}
      </View>
    </View>
  );
}

function chipLabel(t: Translate, row: ResultRow): string {
  if (row.change == null) return t('testday.results.chipBaseline');
  if (row.change === 0) return t('testday.results.chipSame');
  if (row.type === 'calf_raises')
    return t('testday.results.chipRaises', { delta: signed(row.change), count: Math.abs(row.change) });
  return t('testday.results.chipSeconds', { delta: signed(row.change) });
}

/** The chip, said in full for VoiceOver. */
function changeSentence(t: Translate, row: ResultRow): string {
  if (row.change == null) return t('testday.results.first');
  if (row.change === 0) return t('testday.results.same');
  const count = Math.abs(row.change);
  const better = row.change > 0;
  switch (row.type) {
    case 'calf_raises':
      return better ? t('testday.results.moreRaises', { count }) : t('testday.results.fewerRaises', { count });
    case 'symmetry':
      return better ? t('testday.results.gapSmaller', { count }) : t('testday.results.gapLarger', { count });
    default:
      return better ? t('testday.results.moreSeconds', { count }) : t('testday.results.fewerSeconds', { count });
  }
}

// ── Sharing ─────────────────────────────────────────────────────────────────

/**
 * The result as a card, shown first so the person sees what leaves the app,
 * then rendered to an image and handed to the share sheet. iOS shares the
 * picture; Android's share sheet takes text only from React Native, so there
 * it is the same three figures in a line.
 */
function ShareOverlay({ rows, date, onClose }: { rows: readonly Card[]; date: string; onClose: () => void }) {
  const t = useT();
  const insets = useSafeAreaInsets();
  const card = useRef<ComponentRef<typeof View>>(null);
  const [busy, setBusy] = useState(false);
  const value = (type: CardGoal) => rows.find((row) => row.type === type)?.value ?? 0;

  const share = async () => {
    if (busy) return;
    setBusy(true);
    try {
      const message = t('testday.results.shareMessage', {
        calf: value('calf_raises'),
        arch: value('arch_hold'),
        balance: value('balance'),
      });
      if (Platform.OS === 'ios') {
        const image = await makeImageFromView(card as unknown as Parameters<typeof makeImageFromView>[0]);
        const base64 = image?.encodeToBase64();
        await Share.share(base64 != null ? { url: `data:image/png;base64,${base64}` } : { message });
      } else {
        await Share.share({ message });
      }
      track('test_results_shared');
    } catch (error) {
      console.warn('[test-day] sharing failed:', error);
    } finally {
      setBusy(false);
    }
  };

  return (
    <Animated.View
      entering={FadeIn.duration(200)}
      exiting={FadeOut.duration(160)}
      style={[styles.overlay, { paddingTop: insets.top + 24, paddingBottom: Math.max(insets.bottom, 16) }]}>
      <View style={styles.cardWrap}>
        <View ref={card} collapsable={false} style={styles.card}>
          <Text style={styles.cardBrand}>{t('testday.results.shareBrand')}</Text>
          <Text style={styles.cardDate}>{date}</Text>
          <Text maxFontSizeMultiplier={TITLE_SCALE} style={styles.cardTitle}>{t('testday.results.shareTitle')}</Text>
          <View style={styles.cardRows}>
            {rows.map((row) => (
              <View key={row.type} style={styles.cardRow}>
                <Text style={styles.cardName} numberOfLines={1}>
                  {t(NAME_KEY[row.type])}
                </Text>
                <Text maxFontSizeMultiplier={NUMERAL_SCALE} style={styles.cardValue}>
                  {row.type === 'calf_raises' ? row.value : t('testday.results.valueSeconds', { n: row.value })}
                </Text>
              </View>
            ))}
          </View>
        </View>
      </View>
      <View style={styles.shareActions}>
        <Capsule label={t('testday.results.share')} onPress={() => void share()} disabled={busy} />
        <TextButton label={t('testday.close')} onPress={onClose} quiet />
      </View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: ink.page },
  pressed: { opacity: 0.55 },
  content: { paddingHorizontal: SIDE, paddingTop: 8, paddingBottom: 32 },

  eyebrow: { ...fonts.semibold(15), color: ink.grey },
  title: { ...fonts.bold(34, -0.6), color: ink.text, marginTop: 6 },
  lead: { ...fonts.regular(19), color: ink.grey, marginTop: 8 },

  rows: { marginTop: 32 },
  row: { flexDirection: 'row', alignItems: 'center', gap: 16, paddingVertical: 18, minHeight: 88 },
  rowCopy: { flexGrow: 1, flexShrink: 1, gap: 4 },
  name: { ...fonts.semibold(19), color: ink.text },
  rowFigure: { alignItems: 'flex-end', gap: 2, maxWidth: '50%' },
  rowStacked: { flexDirection: 'column', alignItems: 'flex-start', gap: 8 },
  rowFigureStacked: { alignItems: 'flex-start', maxWidth: '100%' },
  figure: { ...fonts.bold(40, -1), color: ink.text, fontVariant: ['tabular-nums'] },
  unit: { ...fonts.semibold(19, 0), color: ink.grey },
  small: { ...fonts.regular(15), color: ink.grey },
  body: { ...fonts.regular(17), color: ink.text },

  details: { gap: 16, paddingBottom: 20 },
  bars: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    gap: 8,
    height: BARS_HEIGHT + 24,
    marginTop: 8,
  },
  goalLine: {
    position: 'absolute',
    left: 0,
    right: 0,
    height: StyleSheet.hairlineWidth,
    backgroundColor: ink.grey,
  },
  goalTag: { position: 'absolute', right: 0, bottom: 4, ...fonts.medium(12), color: ink.grey },
  barCol: { flex: 1, maxWidth: 56, alignItems: 'center', justifyContent: 'flex-end', gap: 4 },
  bar: { alignSelf: 'stretch', borderRadius: 3 },
  barValue: { ...fonts.medium(13), color: ink.grey, fontVariant: ['tabular-nums'] },
  barValueLast: { ...fonts.bold(13), color: ink.text },
  barDates: { flexDirection: 'row', gap: 8, marginTop: 6 },
  barDate: { flex: 1, maxWidth: 56, ...fonts.regular(12), color: ink.grey, textAlign: 'center' },

  after: { marginTop: 32, gap: 4 },
  nextTitle: { ...fonts.semibold(19), color: ink.text },
  goal: { ...fonts.regular(19), color: ink.text },

  dock: { paddingHorizontal: SIDE, paddingTop: 12, gap: 4, backgroundColor: ink.page },

  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: ink.page,
    paddingHorizontal: SIDE,
  },
  cardWrap: { flex: 1, justifyContent: 'center' },
  card: { padding: 24, gap: 4, borderRadius: 24, borderCurve: 'continuous', backgroundColor: '#000000' },
  cardBrand: { ...fonts.bold(17), color: '#FFFFFF' },
  cardDate: { ...fonts.regular(15), color: 'rgba(255,255,255,0.6)' },
  cardTitle: { ...fonts.bold(34, -0.6), color: '#FFFFFF', marginTop: 20 },
  cardRows: { marginTop: 16 },
  cardRow: {
    flexDirection: 'row',
    alignItems: 'baseline',
    gap: 12,
    paddingVertical: 12,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: 'rgba(255,255,255,0.24)',
  },
  cardName: { flex: 1, ...fonts.regular(17), color: '#FFFFFF' },
  cardValue: { ...fonts.bold(28, -0.6), color: '#FFFFFF', fontVariant: ['tabular-nums'] },
  shareActions: { gap: 4 },
});
