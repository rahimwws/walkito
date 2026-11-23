import Flag02Icon from '@hugeicons/core-free-icons/Flag02Icon';
import { HugeiconsIcon } from '@hugeicons/react-native';
import * as Haptics from 'expo-haptics';
import { makeImageFromView } from '@shopify/react-native-skia';
import { useEffect, useMemo, useRef, useState, type ComponentRef } from 'react';
import { Platform, Pressable, ScrollView, Share, StyleSheet, Text, View, useWindowDimensions } from 'react-native';
import Animated, { FadeIn, FadeOut, useReducedMotion } from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { useIntake } from '@/entities/profile';
import { GOAL_SPECS, fromDateKey, retestResults, type TestDayOutcome } from '@/entities/program';
import { bitepal, colors, fonts } from '@/shared/config';
import { track } from '@/shared/lib/analytics';
import { useLanguage, useT, type Translate } from '@/shared/lib/i18n';
import { FluentIcon } from '@/shared/ui/fluent-icon';
import { thumbsUpRig, trophyRig } from '@/shared/ui/mascot';

import { goalValuesOf, legsOf, resultRows, type ResultRow, type TestKind } from '../../model/test-day';
import { Bar, BigNumber, CardLabel, Capsule, NUMERAL_SCALE, SIDE, SessionMascot, TITLE_SCALE, TextButton, cardStyle, ink, sceneStyle } from '../player/kit';
import { CARD_ORDER, daysBetween, realGain, signed, verdictOf, type CardGoal, type Verdict } from './results-math';
import { testColor } from './test-meta';
import { TestRing } from './test-visuals';

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

/** The test each result comes from, for its picture in the ring. */
const KIND_OF: Readonly<Record<CardGoal, TestKind>> = {
  calf_raises: 'calf',
  arch_hold: 'arch',
  balance: 'balance',
};

/**
 * What they came for, said back to them under the numbers: a reminder of the
 * goal in their words from onboarding, never a verdict on whether they are on
 * track for it.
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
/** Tests drawn as bars: four keep every label at 17pt on a small phone. */
const BARS_SHOWN = 4;

/** A figure counting from last time's to today's; at once with Reduce Motion. */
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
      const at = Math.min(1, Math.max(0, (Date.now() - start) / COUNT_MS));
      setShown(Math.round(from + (to - from) * (1 - (1 - at) ** 3)));
      if (at < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [from, to, reduceMotion]);
  return shown;
}

export type FootCheckResultsProps = {
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

/** The character in the header: the trophy for the first test day, a
 * thumbs-up on every later one, whatever the numbers say. */
const RESULTS_MASCOT = 120;

/**
 * What the Foot Check found, in the Bend style the session screens share: the
 * moment in a round badge, one line that says it, then each test on its own
 * white card, its picture in a ring of its accent filled to its share of the
 * goal, the figure large and the change under it. A card opens to the last
 * tests as bars, the legs, and what the test shows. Then the next test and
 * the goal, each on a card, and Done as the violet button.
 *
 * Read from the stored results rather than from what was just typed, so the
 * same screen serves "See results" on a later day.
 */
export function FootCheckResults({ outcome, side, onDone }: FootCheckResultsProps) {
  const insets = useSafeAreaInsets();
  const language = useLanguage();
  const t = useT();
  const largeText = useWindowDimensions().fontScale > 1.6;
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
      history: results.slice(-BARS_SHOWN).map((result) => ({ date: result.date, values: goalValuesOf(result) })),
    };
    // outcome changes identity when a new test is saved, which is when the
    // stored results have moved.
  }, [outcome, side]);

  const day = (key: string) => new Intl.DateTimeFormat(language, { day: 'numeric', month: 'long' }).format(fromDateKey(key));
  const nextTest = new Intl.DateTimeFormat(language, { weekday: 'long', day: 'numeric', month: 'long' }).format(
    fromDateKey(outcome.nextTestOn),
  );

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

  const shortDay = (key: string) => new Intl.DateTimeFormat(language, { day: 'numeric', month: 'short' }).format(fromDateKey(key));

  return (
    <View style={styles.root}>
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <View style={[sceneStyle, styles.head, largeText && styles.headStacked]}>
          <View style={styles.headText}>
            <CardLabel>{heroEyebrow(t, hero)}</CardLabel>
            <Text maxFontSizeMultiplier={TITLE_SCALE} style={styles.title} accessibilityRole="header">
              {heroTitle(t, hero)}
            </Text>
            <Text style={styles.lead}>{hero.kind === 'first' ? t('testday.results.firstBlurb') : dateLine}</Text>
          </View>
          <SessionMascot
            rig={hero.kind === 'first' ? trophyRig : thumbsUpRig}
            shot={hero.kind === 'first' ? 'present' : 'nod'}
            size={RESULTS_MASCOT}
            surface={sceneStyle.backgroundColor}
            style={largeText && styles.mascotStacked}
          />
        </View>

        <View style={styles.cards}>
          {cards.map((row, index) => (
            <ResultCard
              key={row.type}
              row={row}
              delay={200 + index * 120}
              previous={read?.before?.[row.type] ?? null}
              history={read?.history ?? []}
              legs={row.type === 'calf_raises' ? (read?.legs ?? null) : null}
              gap={row.type === 'calf_raises' ? symmetry : null}
              open={open === row.type}
              onToggle={() => toggle(row.type)}
              day={shortDay}
            />
          ))}
        </View>

        <View style={[styles.card, styles.info, largeText && styles.infoStacked]}>
          <View style={styles.well}>
            <FluentIcon name="calendar" size={30} />
          </View>
          <View style={styles.infoText}>
            <Text maxFontSizeMultiplier={TITLE_SCALE} style={styles.infoTitle}>{t('testday.results.nextTest', { date: nextTest })}</Text>
            <Text style={styles.body}>{t('testday.results.planUpdated')}</Text>
          </View>
        </View>

        {goalLine != null && (
          <View style={[styles.card, styles.info, largeText && styles.infoStacked]}>
            <View style={styles.well}>
              <FluentIcon name="target" size={30} />
            </View>
            <View style={styles.infoText}>
              <CardLabel>{t('widgets.retestYourGoal')}</CardLabel>
              <Text maxFontSizeMultiplier={TITLE_SCALE} style={styles.infoTitle}>{t(goalLine)}</Text>
            </View>
          </View>
        )}
      </ScrollView>

      <View style={[styles.dock, { paddingBottom: Math.max(insets.bottom, 16) }]}>
        <Capsule label={t('testday.results.done')} onPress={onDone} />
        {cards.length > 0 && <TextButton label={t('testday.results.share')} onPress={() => setSharing(true)} maxScale={TITLE_SCALE} />}
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

type CardProps = {
  row: Card;
  delay: number;
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

/** One test on a white card: its picture in the goal ring, its name and what
 * is left to the goal, the figure large with the change under it. Opens to
 * the details. */
function ResultCard({ row, delay, previous, history, legs, gap, open, onToggle, day }: CardProps) {
  const t = useT();
  const seconds = row.type !== 'calf_raises';
  const figure = useCountUp(previous ?? 0, row.value);
  const left = Math.max(0, row.target - row.value);
  const stacked = useWindowDimensions().fontScale > 1.6;
  const tone = { fill: testColor(KIND_OF[row.type]), track: bitepal.track };
  const share = (value: number | null) => (value == null ? 0 : value / Math.max(1, row.target));

  return (
    <View style={styles.card}>
      <Pressable
        accessibilityRole="button"
        accessibilityState={{ expanded: open }}
        accessibilityHint={open ? t('testday.results.hideDetails') : t('testday.results.showDetails')}
        accessibilityLabel={t(NAME_KEY[row.type]) + ', ' + row.value + ' ' + (seconds
          ? t('testday.results.unitSeconds', { count: row.value })
          : t('testday.results.unitRaises', { count: row.value })) + '. ' + changeSentence(t, row)}
        onPress={() => {
          void Haptics.selectionAsync();
          onToggle();
        }}
        style={({ pressed }) => [styles.cardBody, pressed && styles.pressed]}>
        <View style={[styles.cardRow, stacked && styles.cardRowStacked]}>
          <View style={styles.cardCopy}>
            <CardLabel>{t(NAME_KEY[row.type])}</CardLabel>
            <BigNumber
              value={figure}
              unit={seconds ? t('testday.results.secondsShort') : t('testday.results.unitRaises', { count: row.value })}
              size={48}
            />
          </View>
          <TestRing kind={KIND_OF[row.type]} from={share(previous)} to={share(row.value)} tone={tone} delay={delay} size={76} stroke={6} />
        </View>
        <Bar value={share(row.value)} color={tone.fill} />
        <View style={[styles.cardFoot, stacked && styles.cardFootStacked]}>
          <Text style={styles.footText}>
            {row.reached
              ? t('testday.results.reached')
              : seconds
                ? t('testday.results.toGoSeconds', { count: left })
                : t('testday.results.toGoRaises', { count: left })}
          </Text>
          <View style={[styles.chip, row.change != null && row.change > 0 && realGain(row.type, row.change) && styles.chipGain]}>
            <Text style={[styles.chipText, row.change != null && row.change > 0 && realGain(row.type, row.change) && styles.gain]}>
              {chipLabel(t, row)}
            </Text>
          </View>
        </View>
      </Pressable>

      {open && (
        <Animated.View entering={FadeIn.duration(200)} exiting={FadeOut.duration(140)} style={styles.details}>
          <View style={styles.rule} />
          <Bars
            values={history.map((entry) => entry.values[row.type])}
            dates={history.map((entry) => day(entry.date))}
            target={row.target}
            fill={tone.fill}
          />
          {legs != null && (
            <View style={styles.legs}>
              <Text style={styles.body}>{t('testday.results.legs', { left: legs.left, right: legs.right })}</Text>
              {gap != null && (
                <Text style={styles.small}>
                  {t('testday.results.gapBetween', { n: gap.value })} · {t('testday.results.goalGap', { n: gap.target })}
                </Text>
              )}
            </View>
          )}
          <Text style={styles.small} accessibilityLabel={t('testday.results.explainA11y') + '. ' + t(EXPLAIN_KEY[row.type])}>
            {t(EXPLAIN_KEY[row.type])}
          </Text>
        </Animated.View>
      )}
    </View>
  );
}

const BARS_HEIGHT = 110;

/** The last tests, oldest first: soft bars, today's in the test's accent, the
 * goal a line with its figure. Every label at 17pt. */
function Bars({ values, dates, target, fill }: { values: readonly number[]; dates: readonly string[]; target: number; fill: string }) {
  const t = useT();
  const top = Math.max(1, target, ...values) * 1.1;
  return (
    <View accessible accessibilityLabel={t('testday.results.history') + ': ' + values.map((value, i) => dates[i] + ' ' + value).join(', ')}>
      <View style={styles.barsHead}>
        <Text style={styles.small}>{t('testday.results.history')}</Text>
        <View style={styles.goalTag}>
          <HugeiconsIcon icon={Flag02Icon} size={18} color={colors.text3} strokeWidth={2.2} />
          <Text style={styles.small} maxFontSizeMultiplier={1.4}>
            {target}
          </Text>
        </View>
      </View>
      <View style={styles.bars}>
        <View style={[styles.goalLine, { bottom: (target / top) * BARS_HEIGHT }]} />
        {values.map((value, i) => {
          const last = i === values.length - 1;
          return (
            <View key={dates[i] + '-' + i} style={styles.barCol}>
              <Text style={[styles.barValue, last && styles.barValueLast]} maxFontSizeMultiplier={1.4}>
                {value}
              </Text>
              <View
                style={[styles.bar, { height: Math.max(4, (value / top) * BARS_HEIGHT), backgroundColor: last ? fill : colors.surface2 }]}
              />
            </View>
          );
        })}
      </View>
      <View style={styles.barDates}>
        {dates.map((date, i) => (
          <Text key={date + '-' + i} style={styles.barDate} numberOfLines={1} maxFontSizeMultiplier={1.4}>
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
  if (row.type === 'calf_raises') return t('testday.results.chipRaises', { delta: signed(row.change), count: Math.abs(row.change) });
  return t('testday.results.chipSeconds', { delta: signed(row.change) });
}

/** The change, said in full for VoiceOver. */
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
        await Share.share(base64 != null ? { url: 'data:image/png;base64,' + base64 } : { message });
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
      <View style={styles.shareWrap}>
        <View ref={card} collapsable={false} style={styles.shareCard}>
          <Text style={styles.shareBrand}>{t('testday.results.shareBrand')}</Text>
          <Text style={styles.shareDate}>{date}</Text>
          <Text maxFontSizeMultiplier={TITLE_SCALE} style={styles.shareTitle}>
            {t('testday.results.shareTitle')}
          </Text>
          <View style={styles.shareRows}>
            {rows.map((row) => (
              <View key={row.type} style={styles.shareRow}>
                <Text style={styles.shareName} numberOfLines={1}>
                  {t(NAME_KEY[row.type])}
                </Text>
                <Text maxFontSizeMultiplier={NUMERAL_SCALE} style={styles.shareValue}>
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
  root: { flex: 1, backgroundColor: ink.canvas },
  pressed: { opacity: 0.55 },
  content: { paddingHorizontal: SIDE - 4, paddingTop: 8, paddingBottom: 32 },
  card: cardStyle,

  head: { flexDirection: 'row', alignItems: 'center', gap: 8, padding: 20, paddingRight: 8, marginTop: 8 },
  headStacked: { flexDirection: 'column-reverse', alignItems: 'stretch', paddingRight: 20 },
  mascotStacked: { alignSelf: 'center' },
  headText: { flex: 1, gap: 4 },
  title: { ...fonts.heavy(32, -0.8), color: ink.text },
  lead: { ...fonts.regular(19), color: ink.grey, marginTop: 4 },

  cards: { marginTop: 20, gap: 12 },
  cardBody: { padding: 20, gap: 12 },
  cardRow: { flexDirection: 'row', alignItems: 'center', gap: 12 },
  cardRowStacked: { flexDirection: 'column-reverse', alignItems: 'flex-start' },
  cardCopy: { flex: 1, alignSelf: 'stretch' },
  cardFoot: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', gap: 12, flexWrap: 'wrap' },
  cardFootStacked: { flexDirection: 'column', alignItems: 'flex-start' },
  footText: { ...fonts.semibold(17), color: ink.grey, flexShrink: 1 },
  chip: { paddingHorizontal: 12, paddingVertical: 4, borderRadius: 999, backgroundColor: bitepal.well },
  chipGain: { backgroundColor: '#E6F4EA' },
  chipText: { ...fonts.bold(17), color: ink.text },
  small: { ...fonts.regular(17), color: ink.grey },
  gain: { color: colors.good },
  well: {
    width: 52,
    height: 52,
    borderRadius: 26,
    backgroundColor: bitepal.well,
    alignItems: 'center',
    justifyContent: 'center',
  },
  body: { ...fonts.regular(17), color: ink.text },
  rule: { height: StyleSheet.hairlineWidth, backgroundColor: ink.rule, marginBottom: 4 },

  details: { gap: 16, paddingHorizontal: 16, paddingBottom: 18 },
  legs: { gap: 4 },
  goalTag: { flexDirection: 'row', alignItems: 'center', gap: 4 },
  barsHead: { flexDirection: 'row', justifyContent: 'space-between', flexWrap: 'wrap', columnGap: 12 },
  bars: { flexDirection: 'row', alignItems: 'flex-end', gap: 10, height: BARS_HEIGHT + 28, marginTop: 8 },
  goalLine: {
    position: 'absolute',
    left: 0,
    right: 0,
    height: 1.5,
    backgroundColor: colors.text3,
    opacity: 0.5,
  },
  barCol: { flex: 1, alignItems: 'center', justifyContent: 'flex-end', gap: 4 },
  bar: { alignSelf: 'stretch', maxWidth: 48, marginHorizontal: 'auto', borderRadius: 8, borderCurve: 'continuous' },
  barValue: { ...fonts.medium(17), color: ink.grey, fontVariant: ['tabular-nums'] },
  barValueLast: { ...fonts.bold(17), color: ink.text },
  barDates: { flexDirection: 'row', gap: 10, marginTop: 6 },
  barDate: { flex: 1, ...fonts.regular(17), color: ink.grey, textAlign: 'center' },

  info: { flexDirection: 'row', alignItems: 'center', gap: 14, padding: 20, marginTop: 12 },
  infoStacked: { flexDirection: 'column', alignItems: 'flex-start' },
  infoText: { flexGrow: 1, flexShrink: 1, gap: 2 },
  infoTitle: { ...fonts.bold(19), color: ink.text },

  dock: { paddingHorizontal: SIDE, paddingTop: 12, gap: 4, backgroundColor: ink.canvas },

  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: ink.canvas,
    paddingHorizontal: SIDE,
  },
  shareWrap: { flex: 1, justifyContent: 'center' },
  shareCard: { padding: 24, gap: 4, borderRadius: 24, borderCurve: 'continuous', backgroundColor: colors.accent },
  shareBrand: { ...fonts.bold(19), color: '#FFFFFF' },
  shareDate: { ...fonts.regular(17), color: 'rgba(255,255,255,0.75)' },
  shareTitle: { ...fonts.bold(32, -0.6), color: '#FFFFFF', marginTop: 20 },
  shareRows: { marginTop: 16 },
  shareRow: {
    flexDirection: 'row',
    alignItems: 'baseline',
    gap: 12,
    paddingVertical: 12,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: 'rgba(255,255,255,0.3)',
  },
  shareName: { flex: 1, ...fonts.regular(17), color: '#FFFFFF' },
  shareValue: { ...fonts.bold(28, -0.6), color: '#FFFFFF', fontVariant: ['tabular-nums'] },
  shareActions: { gap: 4 },
});
