import ArrowRight01Icon from '@hugeicons/core-free-icons/ArrowRight01Icon';
import CheckmarkCircle02Icon from '@hugeicons/core-free-icons/CheckmarkCircle02Icon';
import Clock01Icon from '@hugeicons/core-free-icons/Clock01Icon';
import LockIcon from '@hugeicons/core-free-icons/LockIcon';
import Target01Icon from '@hugeicons/core-free-icons/Target01Icon';
import { HugeiconsIcon } from '@hugeicons/react-native';
import { StyleSheet, Text, View } from 'react-native';

import {
  movePlanFor,
  movesFor,
  RETEST_TESTS,
  type DayStatus,
  type ProgramDay,
  type SessionKind,
} from '@/entities/program';
import { fonts, meterColors, palette, type AccentName } from '@/shared/config';
import { useT, type Key } from '@/shared/lib/i18n';
import { useColorScheme } from '@/shared/lib/theme';
import { Card3D } from '@/shared/ui/card-3d';
import { Chip3D } from '@/shared/ui/chip-3d';
import { FluentIcon, type FluentName } from '@/shared/ui/fluent-icon';

import { KIND_LOOK, REST_ART, TEST_LOOK, moveLook } from './kind-tone';
import { RestButton } from './rest-button';

/** The day's emoji, where the mascot pose used to stand: one figure on the
 * screen is the rule, and it is on today's card. */
const EMOJI = 34;

/** What a day's work is called. The day sheet reads these same keys — a card
 * that says "Strength" and a sheet that says something else would be describing
 * two different sessions. */
const KIND_KEY = {
  strength: 'pages.program.kindStrength',
  mobility: 'pages.program.kindMobility',
  balance: 'pages.program.kindBalance',
  recovery: 'pages.program.kindRecovery',
} as const satisfies Record<SessionKind, Key>;

/** The three chips a checkpoint card carries, in the order they are tested. */
const RETEST_ZONE_KEYS = [
  'pages.program.zoneCalf',
  'pages.program.zoneArch',
  'pages.program.zoneBalance',
] as const satisfies readonly Key[];

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
  /** The weekly plan's weekday, "WED", in place of "DAY 17". */
  label?: string;
  /** The weekly plan has no locks: a day ahead is a preview, not a door. */
  locks?: boolean;
  /** A planned rest day: named as rest, with no minutes to count. */
  rest?: boolean;
};

/**
 * One day of the plan, as a solid 3D card.
 *
 * The day's emoji at the left, the day and its kind beside it, its minutes as
 * a chip, and at the right what tapping does: a chevron for a day to read, a
 * lock or a tick where the old program still draws them. Toned by kind, so the
 * list can be read as a column of colours before a word of it is read; the
 * accent names the kind and never rates it, and a rest day is the plain card.
 *
 * An open card (today's, or the next one up) also lists what the session is
 * made of, as 3D chips, and the next one up counts down on the button it
 * becomes.
 */
export function DayCard({ day, status, onOpen, unlockAt, onStart, label: dayLabel, locks = true, rest = false }: DayCardProps) {
  const scheme = useColorScheme();
  const colors = palette[scheme];
  const meter = meterColors[scheme];
  // Subscribed rather than read once: `movePlanFor` resolves its titles and
  // doses through the catalogue at call time, so the chips only repaint on a
  // language change if this component is listening for one.
  const t = useT();

  /**
   * Whether the card shows what the session is made of: today, and the next
   * one up. An upcoming day stays shut on purpose: the plan adapts to what the
   * check-in says, so its exercises are a guess until the morning it arrives.
   */
  const open = status === 'today' || unlockAt != null;

  const look: { art: FluentName; accent: AccentName | null } = day.checkpoint
    ? TEST_LOOK
    : rest
      ? { art: REST_ART, accent: null }
      : KIND_LOOK[day.kind];

  const label = day.checkpoint ? t('pages.program.retest') : rest ? t('pages.plan.restDay') : t(KIND_KEY[day.kind]);
  const items = day.checkpoint
    ? t('pages.program.testCount', { count: RETEST_TESTS })
    : t('session.moveCount', { count: movesFor(day).length });

  return (
    <Card3D
      material="solid"
      tone={look.accent ?? undefined}
      padding={14}
      onPress={onOpen}
      accessibilityLabel={t('pages.program.dayCardA11y', {
        day: day.day,
        kind: label,
        // Spelled out, unlike the "7 min" on the face of the card: read aloud,
        // an abbreviation is a syllable.
        minutes: t('pages.program.minuteCount', { count: day.minutes }),
      })}
      contentStyle={styles.content}>
      <View style={styles.row}>
        <FluentIcon name={look.art} size={EMOJI} />

        <View style={styles.facts}>
          <Text style={[styles.dayLabel, { color: meter.caption }]}>{dayLabel ?? t('session.day', { day: day.day })}</Text>
          <Text style={[styles.kind, { color: colors.foreground }]} numberOfLines={1}>
            {label}
          </Text>
        </View>

        {!rest && <Chip3D icon={Clock01Icon} accent="neutral" label={t('session.minutes', { count: day.minutes })} />}

        <Mark status={status} locks={locks} ink={colors.foreground} dim={meter.unit} />
      </View>

      {open && (
        <View style={styles.tags}>
          {day.checkpoint
            ? // The three tests wear the checkpoint's own amber: they are not
              // exercises and have no kind.
              RETEST_ZONE_KEYS.map((zone) => <Chip3D key={zone} label={t(zone)} icon={Target01Icon} accent="amber" />)
            : // The dose rides in the chip it belongs to: the prescription is
              // what changes from week to week.
              movePlanFor(day).map((move) => (
                <Chip3D
                  key={move.id}
                  label={
                    move.dose == null
                      ? move.title
                      : t('pages.program.moveWithDose', { title: move.title, dose: move.dose })
                  }
                  accent={moveLook(move.id, move.category).accent}
                />
              ))}
          {/* The count names no kind, so it is the one neutral chip. */}
          <Chip3D label={items} accent="neutral" />
        </View>
      )}

      {/* Last, under what the session is, because it is what to do about it.
          The countdown lives inside the button rather than beside it. */}
      {unlockAt != null && <RestButton unlockAt={unlockAt} onStart={onStart ?? (() => {})} />}
    </Card3D>
  );
}

/**
 * What the trailing edge says. A day of the weekly plan opens a sheet, so it
 * gets the chevron; the old program's locks and ticks are kept for the days it
 * still draws. Missed days get nothing: nothing here is red and nothing scolds.
 */
function Mark({ status, locks, ink, dim }: { status: DayStatus; locks: boolean; ink: string; dim: string }) {
  if (!locks && status === 'upcoming') {
    return <HugeiconsIcon icon={ArrowRight01Icon} size={20} color={dim} strokeWidth={2.2} />;
  }
  if (status === 'upcoming') return <HugeiconsIcon icon={LockIcon} size={22} color={dim} strokeWidth={2} />;
  if (status === 'done' || status === 'rest') {
    return <HugeiconsIcon icon={CheckmarkCircle02Icon} size={24} color={ink} strokeWidth={2} />;
  }
  return <View style={styles.blank} />;
}

const styles = StyleSheet.create({
  content: {
    gap: 12,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  facts: {
    flex: 1,
    gap: 2,
  },
  dayLabel: fonts.bold(12, 0.1),
  kind: fonts.semibold(17, -0.2),
  /** Holds the trailing column's width open on days with no mark, so the
   * facts beside them do not widen and the list stays in one grid. */
  blank: {
    width: 22,
    height: 22,
  },
  tags: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 6,
  },
});
