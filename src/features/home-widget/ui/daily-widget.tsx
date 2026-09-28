import { Capsule, Gauge, HStack, Image, Link, Spacer, Text, VStack, ZStack } from '@expo/ui/swift-ui';
import {
  aspectRatio,
  background,
  containerBackground,
  contentShape,
  font,
  foregroundStyle,
  frame,
  gaugeStyle,
  lineLimit,
  minimumScaleFactor,
  opacity,
  padding,
  resizable,
  scaleEffect,
  shapes,
  strokeBorder,
  tint,
  widgetURL,
} from '@expo/ui/swift-ui/modifiers';
import { createWidget, type WidgetEnvironment } from 'expo-widgets';

/**
 * How one day of the week strip is drawn.
 *
 * - `done` — the day's work was done; a filled tick.
 * - `today` — still open; a ring filling with today's exercises.
 * - `future` — not reached yet; an empty ring.
 * - `missed` — gone by with nothing done; a quiet dash, never red. Colour
 *   does not judge a day in this app, and the widget follows the same rule.
 * - `rest` — a planned rest day, past or ahead; `zzz`.
 * - `test` — a retest day still to come.
 * - `off` — outside the plan altogether.
 */
export type DayCellState = 'done' | 'today' | 'future' | 'missed' | 'rest' | 'test' | 'off';

export type WidgetDay = {
  /** Short weekday, already in the user's language. */
  label: string;
  state: DayCellState;
};

/**
 * Everything the home-screen widget draws.
 *
 * Finished text and finished numbers only. The widget body is compiled into a
 * separate bundle and runs inside WidgetKit's process with no imports, no
 * module scope and no catalogue, so every word arrives here already translated
 * and every figure already worked out — the same contract `SessionActivity`
 * keeps for the Lock Screen.
 *
 * **No `null` anywhere in here.** Props are stored in the App Group's
 * UserDefaults, and a JS `null` crosses the bridge as `NSNull`, which
 * UserDefaults answers with `abort()` — not an exception anything can catch,
 * a dead app on every launch. Anything absent is an *omitted key*; the reads
 * below all treat `undefined` as "not there". `sync.ts` strips nulls at the
 * boundary as well, as a second line.
 *
 * Top-level keys only for anything a button changes: a press returns a partial
 * object that is shallow-merged into these props, so a nested field could not
 * be updated without replacing its siblings.
 */
export type DailyWidgetProps = {
  /** The calendar day this entry speaks for, `YYYY-MM-DD`. */
  dateKey: string;
  /** Today's latest reading, 0–10, if there is one — the card it belongs to
   * is ringed. Absent while nothing has been said. */
  answerScore?: number;
  /**
   * Written by the first version of this widget, which recorded answers
   * itself. Still read by the app's import so a timeline left over from that
   * build is not lost; nothing writes these now.
   */
  answerSource?: 'app' | 'widget';
  answeredAt?: number;
  text: {
    question: string;
    hurts: string;
    fine: string;
    /** Below iOS 17 a small widget has one tap target; this says where it goes. */
    tapToCheckIn: string;
    goalTitle: string;
    /** "2/3" while there is work to count; the day's name on a rest or retest
     * day; a dash when the day's plan is not known yet. */
    goalValue: string;
    /** The word next to the check-in mark. */
    checkinLabel: string;
  };
  /** Local `file://` URIs of the mascot, copied into the App Group by the
   * app. Each is absent until copied, and an SF Symbol stands in. */
  art: { neutral?: string; pain?: string; fine?: string };
  goal: { done: number; total: number };
  /** Monday-first, seven entries. */
  week: WidgetDay[];
  /** Index of today in `week`, or -1 when today is not in it. */
  todayIndex: number;
  streak: number;
  /** Where a tap outside the cards goes: the app. */
  url: string;
  /** Deep links into Home's check-in, one per card. */
  links: { fine: string; hurts: string; checkin: string };
};

/**
 * The one home-screen widget: today's check-in, and today's goal.
 *
 * One widget in two sizes rather than two widgets, so there is nothing to
 * choose between in the gallery.
 *
 * - **Small** asks the morning question the way Home does — two cards, a
 *   mascot on each — and each card opens the app on that answer. "No pain" is
 *   recorded there and said back; "It hurts" opens the check-in sheet, where
 *   the scale and the leg map are. The widget itself records nothing and
 *   announces nothing: the answer is the app's to take and to acknowledge. It
 *   keeps asking all day, because Home takes more than one check-in a day,
 *   and rings the card of the latest answer.
 * - **Medium** is the goal and the week, in the shape of the reference: the
 *   day's exercises done out of planned, today's check-in, and seven cells.
 *
 * Always dark. The mascots are white drawings made for the app's dark
 * surfaces and vanish on a light one, and the reference is a dark card too.
 *
 * Colours are hex literals kept in step with `palette`, `meterColors` and
 * `accents` by hand: the `'widget'` directive forbids referencing anything
 * outside this function. Icons are SF Symbols for the same reason — Hugeicons
 * render through react-native-svg, which does not exist in WidgetKit.
 */
const DailyWidget = (props: DailyWidgetProps, environment: WidgetEnvironment) => {
  'widget';

  const bg = '#1C1C1F';
  const ink = '#FFFFFF';
  const caption = '#9E9EA6';
  const tile = '#2A2A2F';
  const positive = '#2ECC71';
  const blue = '#3B9EFF';
  const flame = '#FF9245';

  // Sizing rule for everything below: fill, don't fix. `frame` with a `width`
  // or `height` becomes SwiftUI's fixed frame and silently drops `maxWidth`,
  // which is what left the first version's tiles hugging their text. So
  // anything that should grow takes `maxWidth`/`maxHeight` only, and the few
  // fixed sizes left are icons.
  //
  // And no padding or background on `Text`: expo-widgets applies a Text's
  // modifiers twice, so both would double. They go on the stack around it.
  const fill = frame({ maxWidth: 9999, maxHeight: 9999 });

  // `containerBackground` and interactive buttons are both iOS 17. Content
  // margins are reported only from 17 on, so their absence marks an older
  // system — where the background has to be painted and padded by hand, and
  // the check-in becomes a tap that opens the app.
  const legacy = environment.widgetContentMargins == null;
  const surface = legacy
    ? [padding({ all: 14 }), fill, background(bg)]
    : [fill, containerBackground(bg, 'widget')];

  // A widget that has not been fed yet: placed before the app was opened, or
  // after the account was reset, or left a week without the app. Also any
  // entry written in an older shape, which has no `links`. It has no
  // words to show, so it shows the mascot's stand-in and opens the app.
  if (props == null || props.text == null || props.links == null) {
    return (
      <VStack modifiers={[...surface, widgetURL((props && props.url) || 'walkito://')]}>
        <Image systemName="figure.walk" size={44} color={blue} />
      </VStack>
    );
  }

  const answered = props.answerScore != null;

  // Resizable, or a 192-pixel PNG lays out at 192 points and a frame only
  // crops it. A flexible frame, so the drawing gives way before the text does
  // on a small phone and grows into the room a large one has.
  const mascot = (uri: string | undefined, largest: number) =>
    uri ? (
      <Image
        uiImage={uri}
        modifiers={[resizable(), aspectRatio({ contentMode: 'fit' }), frame({ maxWidth: largest, maxHeight: largest })]}
      />
    ) : (
      <Image systemName="figure.walk" size={largest * 0.6} color={blue} />
    );

  const label = (text: string, size: number, color: string, weight: 'semibold' | 'bold' | 'heavy' | 'medium', lines = 1) => (
    <Text
      modifiers={[
        font({ size, weight, design: 'rounded' }),
        foregroundStyle(color),
        lineLimit(lines),
        minimumScaleFactor(0.6),
      ]}>
      {text}
    </Text>
  );

  const streakBadge =
    props.streak > 0 ? (
      <HStack spacing={3}>
        <Image systemName="flame.fill" size={16} color={flame} />
        {label(String(props.streak), 16, ink, 'bold')}
      </HStack>
    ) : null;

  const card = shapes.roundedRectangle({ cornerRadius: 18, roundedCornerStyle: 'continuous' });

  const small = () => {
    // Before iOS 17 a small widget is a single tap target. The same question,
    // and the tap opens Home's check-in to answer it there.
    if (legacy) {
      return (
        <VStack alignment="leading" spacing={6} modifiers={[...surface, widgetURL(props.links.checkin)]}>
          <VStack alignment="leading" modifiers={[fill]}>{mascot(props.art.neutral, 56)}</VStack>
          {label(props.text.question, 18, ink, 'heavy', 2)}
          {label(props.text.tapToCheckIn, 13, caption, 'medium', 2)}
        </VStack>
      );
    }

    const latest = props.answerScore;
    const choice = (link: string, uri: string | undefined, text: string, chosen: boolean) => (
      <Link destination={link}>
        <VStack
          spacing={4}
          modifiers={[
            padding({ vertical: 8, horizontal: 4 }),
            fill,
            background(tile, card),
            // Ringed like the chosen card on Home: the latest answer today.
            ...(chosen
              ? [strokeBorder({ color: ink, shape: 'roundedRectangle', cornerRadius: 18, style: { lineWidth: 2 } })]
              : []),
          ]}>
          {mascot(uri, 56)}
          {label(text, 14, ink, 'semibold')}
        </VStack>
      </Link>
    );

    return (
      <VStack alignment="leading" spacing={8} modifiers={[...surface, widgetURL(props.url)]}>
        <HStack alignment="top" spacing={4}>
          {label(props.text.question, 17, ink, 'heavy', 2)}
          <Spacer minLength={0} />
          {streakBadge}
        </HStack>
        <HStack spacing={8} modifiers={[fill]}>
          {choice(props.links.hurts, props.art.pain, props.text.hurts, latest != null && latest > 0)}
          {choice(props.links.fine, props.art.fine, props.text.fine, latest === 0)}
        </HStack>
      </VStack>
    );
  };

  const cell = (day: WidgetDay, index: number) => {
    const isToday = index === props.todayIndex;
    const icon =
      day.state === 'done' ? (
        <Image systemName="checkmark.circle.fill" size={26} color={positive} />
      ) : day.state === 'today' ? (
        <Gauge
          value={props.goal.total > 0 ? Math.min(props.goal.done / props.goal.total, 1) : 0}
          modifiers={[gaugeStyle('circularCapacity'), tint(blue), scaleEffect(0.5), frame({ width: 28, height: 28 })]}
        />
      ) : day.state === 'rest' ? (
        <Image systemName="zzz" size={18} color={caption} />
      ) : day.state === 'test' ? (
        <Image systemName="ruler" size={20} color={flame} />
      ) : day.state === 'missed' ? (
        <Image systemName="minus" size={18} color={caption} />
      ) : (
        <Image systemName="circle" size={24} color={day.state === 'off' ? tile : caption} />
      );

    return (
      <VStack spacing={5} modifiers={[fill]}>
        <VStack
          spacing={6}
          modifiers={[
            fill,
            background(tile, shapes.roundedRectangle({ cornerRadius: 14, roundedCornerStyle: 'continuous' })),
            ...(isToday
              ? [strokeBorder({ color: blue, shape: 'roundedRectangle', cornerRadius: 14, style: { lineWidth: 2.5 } })]
              : []),
          ]}>
          <ZStack modifiers={[frame({ width: 28, height: 28 })]}>{icon}</ZStack>
          {label(day.label, 14, day.state === 'off' ? caption : ink, 'semibold')}
        </VStack>
        {/* The bar under today, as in the reference. Under every cell and
            hidden elsewhere, so the seven stay the same height. Hidden by
            opacity rather than painted the background colour, which would
            show wherever the system draws its own background instead. */}
        <Capsule modifiers={[frame({ width: 20, height: 4 }), foregroundStyle(blue), opacity(isToday ? 1 : 0)]} />
      </VStack>
    );
  };

  const stat = (symbol: string, color: string, text: string) => (
    <HStack spacing={4}>
      <Image systemName={symbol as 'circle'} size={16} color={color} />
      {label(text, 16, ink, 'semibold')}
    </HStack>
  );

  const medium = () => (
    <VStack alignment="leading" spacing={10} modifiers={[...surface, widgetURL(props.url)]}>
      <HStack spacing={8}>
        <VStack modifiers={[frame({ width: 32, height: 32 })]}>{mascot(props.art.neutral, 32)}</VStack>
        {label(props.text.goalTitle, 20, ink, 'heavy')}
        <Spacer minLength={6} />
        {stat('figure.strengthtraining.functional', blue, props.text.goalValue)}
        <Link destination={props.links.checkin}>
          {stat(answered ? 'checkmark.circle.fill' : 'bandage.fill', answered ? positive : caption, props.text.checkinLabel)}
        </Link>
      </HStack>
      <HStack spacing={6} modifiers={[fill]}>
        {props.week.map((day, index) => cell(day, index))}
      </HStack>
    </VStack>
  );

  return environment.widgetFamily === 'systemSmall' ? small() : medium();
};

/**
 * Registered at import. Constructing it writes the compiled layout into the App
 * Group, which is what the extension renders from — so this module is loaded at
 * launch, before onboarding, by `useHomeWidget`. Without a layout the extension
 * draws expo-widgets' red "No layout found" box instead of the fallback above.
 *
 * The name must match `widgets[].name` in `app.json`.
 */
export const DailyCheckWidget = createWidget<DailyWidgetProps>('DailyCheck', DailyWidget);
