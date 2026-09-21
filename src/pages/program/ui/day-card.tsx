import {
  ArrowsClockwiseIcon,
  BarbellIcon,
  CheckCircleIcon,
  ClockIcon,
  LockIcon,
  MoonIcon,
  ScalesIcon,
  TargetIcon,
  WavesIcon,
  type Icon,
} from 'phosphor-react-native';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';

import {
  movePlanFor,
  movesFor,
  RETEST_TESTS,
  type DayStatus,
  type ExerciseCategory,
  type ProgramDay,
  type SessionKind,
} from '@/entities/program';
import { accents, fonts, meterColors, palette, type AccentName } from '@/shared/config';
import { PrimaryButton } from '@/shared/ui/primary-button';
import { useColorScheme } from '@/shared/lib/theme';

import { artFor } from '../config/kind-art';
import { RestButton } from './rest-button';

const RADIUS = 26;

/**
 * How strongly a card carries its kind's colour.
 *
 * The accents' own `track` alpha is tuned for a chip — a small shape where a
 * fifth of the hue still registers. Spread across a whole card the same value
 * came out grey and dead, so the card mixes its own, heavier tint. Today's is
 * heavier again, because it is the one card the screen is about.
 */
const TINT = 0.34;
const TINT_TODAY = 0.46;

/**
 * A palette accent at a chosen strength.
 *
 * The accents store `fill` as hex and `track` as one fixed alpha, and neither
 * is what a card needs. Parsed rather than hand-written so a change to the
 * palette carries through here instead of being silently ignored.
 */
function tint(hex: string, alpha: number): string {
  const r = Number.parseInt(hex.slice(1, 3), 16);
  const g = Number.parseInt(hex.slice(3, 5), 16);
  const b = Number.parseInt(hex.slice(5, 7), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

/**
 * The sticker for each session kind.
 *
 * Solid and coloured, from the pack the questionnaire already uses — the same
 * glyphs the user has been answering with for twelve screens, so a strength day
 * here is recognisably the strength they picked back there. The accent names
 * the kind and never rates it: a recovery day is amber because it is recovery,
 * not because it counts for less.
 */
const KIND_STICKER: Record<SessionKind, { icon: Icon; accent: AccentName }> = {
  strength: { icon: BarbellIcon, accent: 'violet' },
  mobility: { icon: WavesIcon, accent: 'teal' },
  balance: { icon: ScalesIcon, accent: 'blue' },
  recovery: { icon: MoonIcon, accent: 'amber' },
};

/**
 * The tone each exercise category wears, matching Home's task list exactly.
 *
 * Same four accents, same four glyphs, same meaning — a Fitness chip is violet
 * on both screens or the two lists are describing the same session in two
 * different languages. The accent names the kind of effort and never rates it:
 * Recovery is amber because it is recovery, not because it counts for less.
 */
const CATEGORY_TONE: Record<ExerciseCategory, { icon: Icon; accent: AccentName }> = {
  Fitness: { icon: BarbellIcon, accent: 'violet' },
  Mobility: { icon: WavesIcon, accent: 'teal' },
  Recovery: { icon: MoonIcon, accent: 'amber' },
  Habit: { icon: ArrowsClockwiseIcon, accent: 'blue' },
};

const KIND_LABEL: Record<SessionKind, string> = {
  strength: 'Strength',
  mobility: 'Mobility',
  balance: 'Balance',
  recovery: 'Recovery',
};

export type DayCardProps = {
  day: ProgramDay;
  status: DayStatus;
  /**
   * Opens the day itself — what it holds, what it measured, when it comes up.
   *
   * Every card has one, including today's. It is the card, not the button: the
   * button on today's card starts the session, and a row tap that hijacked it
   * would make the one actionable card in the list the one place a tap did
   * something other than what the button under your thumb says.
   */
  onOpen?: () => void;
  /**
   * When this day opens, in epoch milliseconds — for the next day up only. Null
   * on every other card: a column of countdowns is a queue, not a plan.
   */
  unlockAt?: number | null;
  /** Starts the session, once the wait is over. */
  onStart?: () => void;
};

/**
 * One day of the program.
 *
 * Three states in one shape: today's card carries what the session is and the
 * button that begins it, days behind carry a check, days ahead carry a lock.
 * The row above the button is identical in all three, which is what lets the
 * list be read down the left edge as a column of day numbers rather than as a
 * stack of unrelated cards.
 */
export function DayCard({ day, status, onOpen, unlockAt, onStart }: DayCardProps) {
  const scheme = useColorScheme();
  const colors = palette[scheme];
  const meter = meterColors[scheme];

  /**
   * Whether the card shows what the session is made of.
   *
   * Today and the day just finished, and nothing else. A finished day keeps its
   * list because the first question after a session is what was in it — and
   * once the status turns over, hiding the chips would make the card go blank
   * at the exact moment the user looks back at it.
   *
   * An upcoming day stays shut on purpose: the programme adapts to what the
   * check-in says, so its exercises are a guess until the morning it arrives.
   * Printing them would be a promise the plan has not made.
   */
  /**
   * Whether the card shows what the session is made of.
   *
   * Today, and the next one up. A finished day drops its list: the question
   * after a session is what comes next, not what was just done — and the answer
   * to that is on the card below it, where the list now is.
   */
  const open = status === 'today' || unlockAt != null;
  const art = day.checkpoint ? null : artFor(day.kind);

  const sticker = day.checkpoint
    ? { icon: TargetIcon, accent: 'amber' as AccentName }
    : KIND_STICKER[day.kind];
  const tone = accents[scheme][sticker.accent];
  const Sticker = sticker.icon;

  const label = day.checkpoint ? 'Retest' : KIND_LABEL[day.kind];
  const items = day.checkpoint
    ? `${RETEST_TESTS} tests`
    : movesFor(day).length + ' moves';

  return (
    // The card itself is the target, rather than a control added beside the
    // content: a fourteen-row list where thirteen rows are inert has no way to
    // say so, and the row already looks like the thing you would press. A
    // `Pressable` lays out exactly as the `View` it replaces, so the card is
    // unchanged — it only answers now.
    <Pressable
      // One element again. Every card now opens the same sheet and nothing
      // inside one acts on its own, so there is no nested control for
      // `Pressable` to swallow.
      accessible
      accessibilityRole="button"
      accessibilityLabel={`Day ${day.day}, ${label}, ${day.minutes} minutes`}
      onPress={onOpen}
      style={[
        styles.card,
        {
          // Tinted by kind, so the list can be read as a column of colours
          // before a word of it is read. The accent names the kind and never
          // rates it — a rest day is amber because it is a rest, not because it
          // counts for less.
          backgroundColor: tint(tone.fill, open ? TINT_TODAY : TINT),
          // Today is the one card with an edge. It used to be the one card made
          // of glass, and glass under a coloured fill reads as neither — so the
          // marker moved to the border, which the tint cannot swallow.
          borderColor: open ? tone.fill : 'transparent',
          borderWidth: open ? 1.5 : StyleSheet.hairlineWidth,
        },
      ]}>

      <View style={styles.row}>
        {/* The day's own figure, at the left where the day number used to be.
            A rest day has none and the row simply closes up — that absence is
            the point rather than a gap, because a rest day is the one day with
            no work to illustrate. */}
        {art != null && (
          <Image source={art} resizeMode="contain" accessible={false} style={styles.art} />
        )}

        <View style={styles.facts}>
          {/* The day number, back where the list can be read down its own left
              edge without a second column to carry it. */}
          <Text style={[styles.dayLabel, { color: meter.label }]}>Day {day.day}</Text>

          <View style={styles.fact}>
            <Sticker size={19} weight="fill" color={tone.fill} />
            <Text style={[styles.factText, { color: meter.caption }]}>{label}</Text>
          </View>
          <View style={styles.fact}>
            <ClockIcon size={19} weight="fill" color={meter.unit} />
            <Text style={[styles.factText, { color: meter.caption }]}>{day.minutes} min</Text>
          </View>
        </View>

        <Mark status={status} tint={colors.foreground} dim={meter.unit} />
      </View>

      {/* Why the lock is there, and for how long. Without it a finished user
          sees the next day shut with no explanation and reads it as broken —
          which is exactly what happened. The programme runs on dates, not on
          completions, and that is a rule worth saying out loud once rather
          than leaving to be inferred from a padlock. */}


      {open && (
        <>
          {/* What the session actually is, as chips. The card no longer offers
              to start it — that button lives in the sheet the card opens — so
              these are the whole of what today's card has to say. */}
          <View style={styles.tags}>
            {day.checkpoint
              ? // The three tests wear the checkpoint's own amber rather than a
                // category tone. They are not exercises and have no category —
                // colouring them as though they did would invent one.
                ['Calf', 'Arch', 'Balance'].map((zone) => (
                  <Chip key={zone} label={zone} icon={TargetIcon} tone={tone} />
                ))
              : // The dose rides in the chip it belongs to. "Heel raises" is a
                // movement and "Heel raises · 3 × 12" is the prescription, and
                // the prescription is what actually changes from block to block
                // — without it every card in the plan reads the same. The row
                // already wraps, so a longer chip costs no layout.
                movePlanFor(day).map((move) => {
                  const category = CATEGORY_TONE[move.category];
                  return (
                    <Chip
                      key={move.id}
                      label={move.dose == null ? move.title : `${move.title} · ${move.dose}`}
                      icon={category.icon}
                      tone={accents[scheme][category.accent]}
                    />
                  );
                })}
            {/* The count is the one chip that names no category, so it is the
                one chip that stays grey — which is also what keeps it from
                competing with the exercises it is counting. */}
            <View style={[styles.tag, { backgroundColor: meter.track }]}>
              <Text style={[styles.tagText, { color: meter.caption }]}>{items}</Text>
            </View>
          </View>

        </>
      )}

      {/* Last, under what the session is, because it is what to do about it.
          The countdown lives inside the button rather than beside it: a clock
          on a line of its own is information, and the same clock on the control
          it will become is the control saying when it works. */}
      {unlockAt != null && <RestButton unlockAt={unlockAt} onStart={onStart ?? (() => {})} />}
    </Pressable>
  );
}

/**
 * One exercise, as a chip.
 *
 * Built to Home's task-list chip so the two screens describe a session the same
 * way: tinted fill, glyph and label in the accent, same gap and radius. Someone
 * moving between the two tabs should recognise a Mobility chip without reading
 * it, and that only works if it is literally the same chip.
 */
function Chip({
  label,
  icon: Glyph,
  tone,
}: {
  label: string;
  icon: Icon;
  tone: { fill: string; track: string };
}) {
  return (
    <View style={[styles.tag, { backgroundColor: tone.track }]}>
      <Glyph size={13} weight="fill" color={tone.fill} />
      <Text style={[styles.tagText, { color: tone.fill }]}>{label}</Text>
    </View>
  );
}

/** Behind, ahead, or neither — today needs no badge, it has the button. */
function Mark({ status, tint, dim }: { status: DayStatus; tint: string; dim: string }) {
  // A solid padlock with a keyhole rather than the simple one: that glyph's
  // shackle is a thin arc and read as a sharp hook at this size.
  if (status === 'upcoming') return <LockIcon size={24} weight="fill" color={dim} />;
  if (status === 'done' || status === 'rest') {
    return <CheckCircleIcon size={26} weight="fill" color={tint} />;
  }
  // Missed days get a hole rather than a mark. Nothing here is red and nothing
  // scolds: a day that went by is information, and the list simply moves on.
  return <View style={styles.blank} />;
}

const styles = StyleSheet.create({
  card: {
    borderRadius: RADIUS,
    borderCurve: 'continuous',
    borderWidth: StyleSheet.hairlineWidth,
    padding: 16,
    overflow: 'hidden',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  /**
   * Bigger than the row it sits in, and deliberately not allowed to say so.
   *
   * The negative margins take roughly two thirds of the figure back out of the
   * layout, so the facts column stays the tallest thing in the row and keeps
   * deciding the card's height. What is left overhangs into the card's own
   * padding, which is why the pose reads large without the card growing an inch.
   *
   * Fixed width, so the facts beside it start on the same line down the whole
   * list however wide a given pose happens to draw.
   */
  art: {
    width: 84,
    height: 84,
    marginVertical: -14,
    marginLeft: -8,
  },
  facts: {
    flex: 1,
    gap: 6,
  },
  dayLabel: {
    fontSize: 12,
    fontFamily: fonts.bold,
    letterSpacing: 0.6,
    textTransform: 'uppercase',
  },
  fact: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 7,
  },
  factText: {
    fontSize: 16,
    fontFamily: fonts.semibold,
    letterSpacing: -0.2,
  },
  /** Holds the trailing column's width open on days with no badge, so the
   * facts beside them do not widen and the list stays in one grid. */
  blank: {
    width: 22,
    height: 22,
  },
  tags: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 6,
    marginTop: 14,
  },
  /** Home's chip, to the point. Same gap, padding, radius and weight — the two
   * lists have to look like one system or the colour means nothing. */
  tag: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    paddingHorizontal: 11,
    paddingVertical: 7,
    borderRadius: 12,
    borderCurve: 'continuous',
  },
  tagText: {
    fontSize: 14,
    fontFamily: fonts.bold,
    letterSpacing: -0.1,
  },

});
