import Calendar03Icon from '@hugeicons/core-free-icons/Calendar03Icon';
import Clock01Icon from '@hugeicons/core-free-icons/Clock01Icon';
import { useEffect, useState, type ReactNode } from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import Animated, { useAnimatedStyle, useReducedMotion, useSharedValue, withDelay } from 'react-native-reanimated';
import Svg, { Defs, LinearGradient, Rect, Stop } from 'react-native-svg';

import { EXERCISES_BY_ID, fromDateKey } from '@/entities/program';
import { RAISED_BORDER, accents, fonts, meterColors, palette, type AccentName } from '@/shared/config';
import { mix, readableOn } from '@/shared/lib/color';
import { useLanguage, useT, type Translate } from '@/shared/lib/i18n';
import { settle } from '@/shared/lib/motion';
import { useColorScheme } from '@/shared/lib/theme';
import { Card3D, cardColours } from '@/shared/ui/card-3d';
import { Chip3D } from '@/shared/ui/chip-3d';
import { FluentIcon } from '@/shared/ui/fluent-icon';
import {
  MascotStill,
  idleRig,
  reminderRig,
  runningRig,
  thumbsUpRig,
  walkingRig,
  type MascotRig,
} from '@/shared/ui/mascot';
import { REPLAY_MASK } from '@/shared/ui/replay-mask';
import { thumbFor } from '@/widgets/session-player';

import {
  pathReached,
  testLine,
  weekLabel,
  weekLine,
  weekTitle,
  type OutcomeView,
  type PathNode,
  type PathTest,
  type PathWeek,
  type WeekTheme,
} from '../model/plan-view';
import { TEST_LOOK, moveLook } from './kind-tone';
import { useListInView } from './plan-mascot';

/** The rail's column: as wide as a test day's disc. */
const RAIL = 26;
/** The rail itself: thin, the goal's colour. */
const LINE = 2;
/** Between the rail and what hangs on it. */
const GUTTER = 12;
/** Under each station, which the rail runs through to the next one. */
const ROW_GAP = 10;
/** A test day's one line: its height, and where its marker sits, the line's middle. */
const LINE_HEIGHT = 26;
const LINE_MARK = LINE_HEIGHT / 2;
/**
 * A week card's marker sits level with its first row: the "Now" chip on this
 * week's, the "Next week" label on next week's. The card's border, its
 * padding, then half that row.
 */
const CARD_PADDING = 14;
const HEAD_NOW = 30;
const HEAD_NEXT = 18;
const MARK_NOW = RAISED_BORDER + CARD_PADDING + HEAD_NOW / 2;
const MARK_NEXT = RAISED_BORDER + CARD_PADDING + HEAD_NEXT / 2;
/** Where the way is still ahead the rail is the goal's colour at this much,
 * mixed into the page rather than see-through, so markers can sit on it. */
const AHEAD = 0.32;
/** The rail runs on this far past the last station and fades out: no end
 * node, no finish line. The plan goes on. */
const TAIL = 56;
const TAIL_GRADIENT = 'goal-stations-tail';
/** The markers on the rail. */
const DOT_CURRENT = 12;
const HALO = 24;
const TICK = 16;
const DISC = 26;
const DISC_EMOJI = 14;
/** The stations rise into place one after another, the first time the rail is seen. */
const RISE_START_MS = 120;
const RISE_STAGGER_MS = 60;
const RISE_MS = 360;
const RISE_PX = 10;
/** This week's figure, and next week's. */
const MASCOT_NOW = 72;
const MASCOT_NEXT = 58;
/** Moves listed before "+3 more" opens the rest. */
const MOVES_SHOWN = 5;
const MOVE_EMOJI = 22;
/** A move's still, where its clip has one, in the emoji's place. */
const MOVE_THUMB = { width: 54, height: 36 };

/**
 * Each week's own mascot, standing for its work rather than a result: the
 * alarm clock for settling in and for mornings, the thumbs-up for the arch,
 * running for the calves, on one leg for balance, square on both feet for
 * evening the legs out. Stills, so the rail stays calm; the one moving mascot
 * on this screen is the day card's.
 */
const WEEK_MASCOT: Readonly<Record<WeekTheme, MascotRig>> = {
  settling: reminderRig,
  pain_free_mornings: reminderRig,
  arch_hold: thumbsUpRig,
  calf_raises: runningRig,
  balance: walkingRig,
  symmetry: idleRig,
  keep: thumbsUpRig,
};

export type GoalStationsProps = {
  view: OutcomeView;
  /** The weeks and the test days between them, from `weekPath`. */
  nodes: readonly PathNode[];
  /** `YYYY-MM-DD`: which test is today's, and how far off the next one is. */
  today: string;
  /** The goal's colour: the rail, this week's card, its chip. Test days keep the ruler's amber. */
  accent: AccentName;
  /** A move tapped on a week's card: its preview. */
  onPreview: (exerciseId: string) => void;
};

/**
 * The goal, and the weeks that work towards it, on a rail.
 *
 * The goal's head as it always read ("Your goal", and what the person came
 * for with the one word that matters as a chip), then a thin rail down the
 * left in the goal's colour with one card per week hung on it: this week,
 * then next.
 *
 * Every week reads on its own: "This week" or "Next week · from 19 Oct", what
 * it works on as its title ("Settle things down", "Build the calves"), one
 * plain sentence of what changes in it, its days and minutes as chips, and its
 * moves by name with their emoji, each opening its preview. This week's card
 * is opened up: in the goal's colour, the "Now" chip, the larger mascot.
 * Next week's is the neutral card with a smaller one, as readable as this
 * week's. The test days sit on the rail where they fall, as small discs with
 * the ruler and one line ("Test day · in 14 days"), ticked once taken.
 *
 * The rail is solid up to this week and faint after; past next week it fades
 * out beside one line saying how the weeks after are made, because that is
 * as far as the plan can truthfully be told. No end node, no trophy, no plan
 * length, never "week N of M", no end date. Nothing on it is a figure but the
 * days, the minutes and the days to the next test.
 *
 * Solid 3D cards like the rest of the screen, never glass. The stations rise
 * into place once, the first time the rail is actually in view (the plan is
 * mounted, hidden, under every tab), and Reduce Motion puts them in place.
 */
export function GoalStations({ view, nodes, today, accent, onPreview }: GoalStationsProps) {
  const scheme = useColorScheme();
  const colors = palette[scheme];
  const language = useLanguage();
  const line = accents[scheme][accent].fill;
  const ahead = mix(colors.background, line, AHEAD);
  const markerColours = {
    line,
    amber: accents[scheme][TEST_LOOK.accent].fill,
    background: colors.background,
  };
  const mascots = weekMascots(nodes);

  const dateLabel = (date: string) =>
    new Intl.DateTimeFormat(language, { day: 'numeric', month: 'short' }).format(fromDateKey(date));

  // A rise played at mount would play to nobody: it waits for the first time
  // the list is actually open.
  const inView = useListInView();
  const [play, setPlay] = useState(inView);
  useEffect(() => {
    if (inView) setPlay(true);
  }, [inView]);

  return (
    // Hidden from session recordings: the rail shows where the person is with
    // their tests.
    <View {...REPLAY_MASK} style={styles.section}>
      <GoalHead view={view} accent={accent} />

      <View>
        {nodes.map((node, i) => {
          const after = nodes[i + 1];
          return (
            <Row
              key={node.kind === 'test' ? `test-${node.state}-${node.date}` : `week-${node.weekStart}`}
              mark={node.kind === 'test' ? LINE_MARK : node.when === 'this' ? MARK_NOW : MARK_NEXT}
              // The rail starts at the first station, not above it.
              above={i === 0 ? null : pathReached(node) ? line : ahead}
              below={after != null && pathReached(after) ? line : ahead}
              delay={RISE_START_MS + i * RISE_STAGGER_MS}
              play={play}
              marker={markerFor(node, markerColours)}>
              {node.kind === 'test' ? (
                <TestLine test={node} today={today} dateLabel={dateLabel} />
              ) : (
                <WeekCard
                  week={node}
                  accent={accent}
                  rig={mascots.get(node.weekStart) ?? idleRig}
                  dateLabel={dateLabel}
                  onPreview={onPreview}
                />
              )}
            </Row>
          );
        })}
        <After color={ahead} delay={RISE_START_MS + nodes.length * RISE_STAGGER_MS} play={play} />
      </View>
    </View>
  );
}

/**
 * Each week's mascot, by what it works on. Two weeks in a row on the same
 * work would stand the same figure twice and read as the same card twice, so
 * the second one gives way to the thumbs-up (or, if that is the first one's,
 * to the figure standing square).
 */
function weekMascots(nodes: readonly PathNode[]): Map<string, MascotRig> {
  const out = new Map<string, MascotRig>();
  let last: MascotRig | null = null;
  for (const node of nodes) {
    if (node.kind !== 'week') continue;
    let rig = WEEK_MASCOT[node.theme];
    if (rig === last) rig = rig === thumbsUpRig ? idleRig : thumbsUpRig;
    out.set(node.weekStart, rig);
    last = rig;
  }
  return out;
}

/**
 * "Your goal", and what the person came for, with the one word that matters
 * set as a chip in the goal's colour: "On your feet [all day]". No figure
 * under it: the weeks below say the way, and no pain number is ever a target.
 * With every step reached, one neutral line says what happens now.
 */
function GoalHead({ view, accent }: { view: OutcomeView; accent: AccentName }) {
  const scheme = useColorScheme();
  const colors = palette[scheme];
  const meter = meterColors[scheme];
  const t = useT();
  const tone = accents[scheme][accent];

  return (
    <View style={styles.head}>
      <View style={styles.eyebrowRow}>
        <FluentIcon name="target" size={18} />
        <Text style={[styles.eyebrow, { color: meter.caption }]}>{t('pages.plan.goalEyebrow')}</Text>
      </View>
      <View style={styles.headline} accessible accessibilityRole="header">
        {words(view.headline.before).map((word, i) => (
          <Text key={`b${i}`} style={[styles.word, { color: colors.foreground }]}>
            {word}
          </Text>
        ))}
        {view.headline.lead.length > 0 && (
          <View style={[styles.lead, { backgroundColor: tone.track }]}>
            <Text style={[styles.word, { color: tone.fill }]}>{view.headline.lead}</Text>
          </View>
        )}
        {words(view.headline.after).map((word, i) => (
          <Text key={`a${i}`} style={[styles.word, { color: colors.foreground }]}>
            {word}
          </Text>
        ))}
      </View>
      {view.current == null && (
        <Text style={[styles.keep, { color: meter.caption }]}>{t('pages.plan.outcome.done')}</Text>
      )}
    </View>
  );
}

/** Words to lay out one by one, so the chip can wrap among them. */
function words(text: string): string[] {
  return text.split(' ').filter((word) => word.length > 0);
}

/**
 * One station: its stretch of rail and its marker on the left, what hangs on
 * it on the right. The rail runs the row's full height, padding included, so
 * it reads as one line from station to station; it is solid where both ends
 * are reached and faint where the way is still ahead, the change hidden under
 * the marker. The marker and the station rise together; the rail stays put,
 * so the stations arrive along it.
 */
function Row({
  mark,
  above,
  below,
  delay,
  play,
  marker,
  children,
}: {
  /** The marker's centre, from the row's top. */
  mark: number;
  /** The rail into this station. Null for the first, where the rail starts. */
  above: string | null;
  /** The rail out of it, to the next station or into the fade. */
  below: string;
  delay: number;
  play: boolean;
  marker: { size: number; node: ReactNode };
  children: ReactNode;
}) {
  const rise = useRise(delay, play);
  return (
    <View style={styles.row}>
      <View style={styles.rail}>
        {above != null && <View style={[styles.segment, { top: 0, height: mark, backgroundColor: above }]} />}
        <View style={[styles.segment, { top: mark, bottom: 0, backgroundColor: below }]} />
        <Animated.View
          style={[
            styles.marker,
            {
              top: mark - marker.size / 2,
              left: (RAIL - marker.size) / 2,
              width: marker.size,
              height: marker.size,
            },
            rise,
          ]}>
          {marker.node}
        </Animated.View>
      </View>
      <Animated.View style={[styles.body, rise]}>{children}</Animated.View>
    </View>
  );
}

/**
 * What sits on the rail at a station. This week: a dot in a soft halo, in the
 * goal's colour. Next week: a hollow ring in it. A test day: a small amber
 * disc with the ruler, taken or to come; its line says which.
 *
 * Every fill is opaque, so the rail never shows through a marker.
 */
function markerFor(
  node: PathNode,
  colours: { line: string; amber: string; background: string },
): { size: number; node: ReactNode } {
  const { line, amber, background } = colours;

  if (node.kind === 'test') {
    return {
      size: DISC,
      node: (
        <View style={[styles.disc, { backgroundColor: mix(background, amber, 0.22), borderColor: amber }]}>
          <FluentIcon name={TEST_LOOK.art} size={DISC_EMOJI} />
        </View>
      ),
    };
  }
  if (node.when === 'this') {
    return {
      size: HALO,
      node: (
        <View style={[styles.halo, { backgroundColor: mix(background, line, 0.28) }]}>
          <View style={[styles.dotCurrent, { backgroundColor: line }]} />
        </View>
      ),
    };
  }
  return {
    size: DOT_CURRENT,
    node: <View style={[styles.ring, { borderColor: line, backgroundColor: background }]} />,
  };
}

/** A move's name in the reader's language. */
function moveName(t: Translate, id: string): string {
  const exercise = EXERCISES_BY_ID[id];
  return exercise == null ? id : t(exercise.titleKey);
}

/**
 * One week, readable on its own.
 *
 * Its head ("Now" and "This week", or "Next week · from 19 Oct"), what it
 * works on as its title, and one sentence of what changes in it, beside its
 * mascot. Then how many days have something to do and how long a session is,
 * as chips, and its moves: each with its emoji and its name, a "New" beside
 * one the plan has never scheduled, each opening its preview. The first five,
 * then "+3 more" for the rest.
 *
 * This week's card leans to the goal's colour and is a little larger; next
 * week's is the card's own neutral face, its head in the goal's colour.
 */
function WeekCard({
  week,
  accent,
  rig,
  dateLabel,
  onPreview,
}: {
  week: PathWeek;
  accent: AccentName;
  rig: MascotRig;
  dateLabel: (date: string) => string;
  onPreview: (exerciseId: string) => void;
}) {
  const scheme = useColorScheme();
  const colors = palette[scheme];
  const meter = meterColors[scheme];
  const t = useT();
  const [all, setAll] = useState(false);

  const now = week.when === 'this';
  const face = cardColours(scheme, now ? accent : undefined).face;
  const tint = readableOn(accents[scheme][accent].fill, face);
  const shown = all ? week.moves : week.moves.slice(0, MOVES_SHOWN);
  const hidden = week.moves.length - shown.length;

  return (
    <Card3D material="solid" tone={now ? accent : undefined} padding={CARD_PADDING} contentStyle={styles.card}>
      <View style={styles.cardTop}>
        <View style={styles.cardCopy}>
          <View style={[styles.cardHead, { minHeight: now ? HEAD_NOW : HEAD_NEXT }]}>
            {now && <Chip3D label={t('pages.plan.path.now')} accent={accent} />}
            <Text style={[styles.when, { color: now ? meter.caption : tint }]}>
              {weekLabel(t, week, dateLabel)}
            </Text>
          </View>
          <Text accessibilityRole="header" style={[now ? styles.titleNow : styles.title, { color: colors.foreground }]}>
            {weekTitle(t, week)}
          </Text>
          <Text style={[now ? styles.lineNow : styles.line, { color: now ? colors.foreground : meter.caption }]}>
            {weekLine(t, week.change, (id) => moveName(t, id))}
          </Text>
        </View>
        <MascotStill rig={rig} size={now ? MASCOT_NOW : MASCOT_NEXT} surface={face} />
      </View>

      {week.days > 0 && (
        <View style={styles.chips}>
          <Chip3D icon={Calendar03Icon} accent="violet" label={t('pages.plan.weeks.days', { count: week.days })} />
          {week.minutes > 0 && (
            <Chip3D icon={Clock01Icon} accent="blue" label={t('pages.plan.weeks.minutes', { minutes: week.minutes })} />
          )}
        </View>
      )}

      {shown.length > 0 && (
        <View style={styles.moves}>
          {shown.map((id) => (
            <MoveRow key={id} id={id} fresh={week.fresh.includes(id)} tint={tint} onPreview={onPreview} />
          ))}
          {hidden > 0 && (
            <Pressable
              accessibilityRole="button"
              onPress={() => setAll(true)}
              hitSlop={8}
              style={({ pressed }) => [styles.moreRow, pressed && styles.pressed]}>
              <Text style={[styles.more, { color: tint }]}>{t('pages.plan.weeks.more', { n: hidden })}</Text>
            </Pressable>
          )}
        </View>
      )}
    </Card3D>
  );
}

/**
 * One of a week's moves: its emoji (by the plan's own kind, as today's list
 * has it), its name, and "New" for a move the plan has never scheduled
 * before. A tap opens its preview, which starts nothing.
 */
function MoveRow({
  id,
  fresh,
  tint,
  onPreview,
}: {
  id: string;
  fresh: boolean;
  tint: string;
  onPreview: (exerciseId: string) => void;
}) {
  const scheme = useColorScheme();
  const colors = palette[scheme];
  const t = useT();
  const exercise = EXERCISES_BY_ID[id];
  if (exercise == null) return null;
  const name = t(exercise.titleKey);
  const look = moveLook(id, exercise.category);

  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={t('pages.plan.chipPreviewA11y', { name })}
      onPress={() => onPreview(id)}
      style={({ pressed }) => [styles.move, pressed && styles.pressed]}>
      {thumbFor(id) != null ? (
        <Image source={thumbFor(id)!} resizeMode="cover" style={styles.moveThumb} accessibilityIgnoresInvertColors />
      ) : (
        <FluentIcon name={look.art} size={MOVE_EMOJI} />
      )}
      <Text style={[styles.moveName, { color: colors.foreground }]} numberOfLines={2}>
        {name}
      </Text>
      {fresh && <Text style={[styles.fresh, { color: tint }]}>{t('pages.plan.weeks.newTag')}</Text>}
    </Pressable>
  );
}

/**
 * A test day's one line: "Test day · today", "Test day · in 12 days", or the
 * day one was taken, with a tick after it once taken.
 */
function TestLine({
  test,
  today,
  dateLabel,
}: {
  test: PathTest;
  today: string;
  dateLabel: (date: string) => string;
}) {
  const scheme = useColorScheme();
  const colors = palette[scheme];
  const meter = meterColors[scheme];
  const t = useT();
  const label = testLine(t, test, today, dateLabel);
  const taken = test.state === 'done';
  // The next one and today's are in ink; one taken on an earlier day is grey.
  const ink = test.state === 'next' || test.date === today;

  return (
    <View
      style={styles.testLine}
      accessible
      accessibilityLabel={label}
      accessibilityValue={taken ? { text: t('pages.plan.path.done') } : undefined}>
      <Text style={[styles.testText, { color: ink ? colors.foreground : meter.caption }]}>{label}</Text>
      {taken && <FluentIcon name="check" size={TICK} />}
    </View>
  );
}

/**
 * Past next week the rail runs on a little and fades to nothing, and beside
 * it one line says how the weeks after are made: one at a time, each Sunday
 * evening, from how the week before went. As far as the plan can be told.
 */
function After({ color, delay, play }: { color: string; delay: number; play: boolean }) {
  const scheme = useColorScheme();
  const meter = meterColors[scheme];
  const t = useT();
  const rise = useRise(delay, play);

  return (
    <View style={styles.row}>
      <View style={styles.tail} pointerEvents="none">
        <Svg width={LINE} height={TAIL}>
          <Defs>
            <LinearGradient id={TAIL_GRADIENT} x1="0" y1="0" x2="0" y2="1">
              <Stop offset="0" stopColor={color} stopOpacity={1} />
              <Stop offset="1" stopColor={color} stopOpacity={0} />
            </LinearGradient>
          </Defs>
          <Rect x={0} y={0} width={LINE} height={TAIL} fill={`url(#${TAIL_GRADIENT})`} />
        </Svg>
      </View>
      <Animated.View style={[styles.afterBody, rise]}>
        <Text style={[styles.after, { color: meter.caption }]}>{t('pages.plan.weeks.after')}</Text>
      </Animated.View>
    </View>
  );
}

/**
 * A station rising into place, once, `delay` after the rail is first seen:
 * the marker and the station share it. Reduce Motion puts it in place at once.
 */
function useRise(delay: number, play: boolean) {
  const reduceMotion = useReducedMotion();
  const shown = useSharedValue(reduceMotion ? 1 : 0);
  useEffect(() => {
    if (!play) return;
    shown.value = reduceMotion ? 1 : withDelay(delay, settle(1, RISE_MS));
  }, [play, reduceMotion, delay, shown]);
  return useAnimatedStyle(() => ({
    opacity: shown.value,
    transform: [{ translateY: (1 - shown.value) * RISE_PX }],
  }));
}

const styles = StyleSheet.create({
  section: {
    gap: 14,
  },
  head: {
    gap: 8,
  },
  eyebrowRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  eyebrow: fonts.bold(12, 0.6),
  headline: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    columnGap: 7,
    rowGap: 4,
  },
  word: {
    ...fonts.heavy(26, -0.7),
    lineHeight: 34,
  },
  lead: {
    paddingHorizontal: 10,
    borderRadius: 12,
    borderCurve: 'continuous',
  },
  keep: {
    ...fonts.medium(15),
    lineHeight: 21,
  },
  row: {
    flexDirection: 'row',
  },
  rail: {
    width: RAIL,
  },
  segment: {
    position: 'absolute',
    left: (RAIL - LINE) / 2,
    width: LINE,
  },
  marker: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
  },
  body: {
    flex: 1,
    marginLeft: GUTTER,
    paddingBottom: ROW_GAP,
  },
  dotCurrent: {
    width: DOT_CURRENT,
    height: DOT_CURRENT,
    borderRadius: DOT_CURRENT / 2,
  },
  halo: {
    width: HALO,
    height: HALO,
    borderRadius: HALO / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  ring: {
    width: DOT_CURRENT,
    height: DOT_CURRENT,
    borderRadius: DOT_CURRENT / 2,
    borderWidth: 2,
  },
  disc: {
    width: DISC,
    height: DISC,
    borderRadius: DISC / 2,
    borderWidth: 1.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    gap: 12,
  },
  cardTop: { flexDirection: 'row', alignItems: 'center', gap: 10 },
  cardCopy: { flex: 1, gap: 6 },
  cardHead: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  when: {
    flexShrink: 1,
    ...fonts.bold(12, 0.6),
    lineHeight: HEAD_NEXT,
  },
  titleNow: {
    ...fonts.heavy(19, -0.3),
    lineHeight: 24,
  },
  title: {
    ...fonts.heavy(17, -0.2),
    lineHeight: 22,
  },
  lineNow: {
    ...fonts.medium(15),
    lineHeight: 21,
  },
  line: {
    ...fonts.medium(14),
    lineHeight: 19,
  },
  chips: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  moves: {
    gap: 4,
  },
  moveThumb: {
    ...MOVE_THUMB,
    borderRadius: 10,
    borderCurve: 'continuous',
  },
  move: {
    minHeight: 32,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  moveName: {
    flexShrink: 1,
    ...fonts.semibold(15, -0.1),
    lineHeight: 20,
  },
  fresh: fonts.bold(12, 0.4),
  moreRow: {
    alignSelf: 'flex-start',
    minHeight: 28,
    justifyContent: 'center',
    paddingLeft: MOVE_EMOJI + 10,
  },
  more: fonts.bold(14),
  pressed: {
    opacity: 0.55,
  },
  testLine: {
    minHeight: LINE_HEIGHT,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  testText: {
    flexShrink: 1,
    ...fonts.semibold(15),
    lineHeight: 20,
  },
  tail: {
    width: RAIL,
    height: TAIL,
    alignItems: 'center',
  },
  afterBody: {
    flex: 1,
    marginLeft: GUTTER,
    paddingTop: 2,
  },
  after: {
    ...fonts.medium(14),
    lineHeight: 20,
  },
});
