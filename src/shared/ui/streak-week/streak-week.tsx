import { StyleSheet, Text, View } from 'react-native';
import Svg, { G, Path } from 'react-native-svg';
import Animated, {
  useAnimatedStyle,
  useDerivedValue,
  withDelay,
} from 'react-native-reanimated';

import { accents, fonts, meterColors, palette } from '@/shared/config';
import { useLanguage, type Language } from '@/shared/lib/i18n';
import { useColorScheme } from '@/shared/lib/theme';
import { settle } from '@/shared/lib/motion';

/**
 * Weekday names, from the platform rather than from a catalogue.
 *
 * These are the one family of strings that must *not* be hand-translated.
 * `Intl` already knows them for every locale, and it knows the conventions a
 * translator gets wrong: Russian and Spanish lowercase their weekday names
 * where English capitalises, and each language abbreviates to its own length.
 * Writing them out by hand would be inventing an answer the platform already
 * has, and would need revisiting for every language added.
 *
 * Sunday-first, matching `Date.getDay()`. The reference date below is a known
 * Sunday (4 January 1970), so adding the index walks the week in that order
 * regardless of where the locale thinks a week begins.
 */
const SUNDAY = Date.UTC(1970, 0, 4);

export function weekdayNames(language: Language, style: 'short' | 'long'): string[] {
  const format = new Intl.DateTimeFormat(language, { weekday: style, timeZone: 'UTC' });
  return Array.from({ length: 7 }, (_, index) =>
    format.format(new Date(SUNDAY + index * 86_400_000)),
  );
}

/** Each cell lands just after the one before it, left to right, so the week
 * reads as filling in rather than appearing. */
const STAGGER_MS = 55;

/** How a day counted: `StreakLevel` in `entities/program`, which this layer
 * cannot import. Change both together. */
export type StreakWeekLevel = 'none' | 'checkin' | 'full';

export type StreakWeekProps = {
  /** Which days of this week are already earned, Sunday-first. */
  done: readonly boolean[];
  /**
   * How each day counted, Sunday-first. A full day (a session or a routine)
   * gets the shoe with its flame; a check-in alone, the flame on its own.
   * Omitted, every earned day is a full one.
   */
  levels?: readonly StreakWeekLevel[];
  /** Index of today, Sunday-first. Defaults to the real day. */
  today?: number;
};

/**
 * The week as seven flames.
 *
 * A streak is the one number on this screen the user is playing against, and a
 * count alone ("7 Days") only says where they are — not what today is worth.
 * Seven cells say it in one glance: what is banked, what is live, and what has
 * not happened yet.
 *
 * Three states, and the difference between them is carried by colour and shape
 * rather than by a badge:
 *
 * - **Earned** — lit, in the app's orange. A streak is a row of lit days; a
 *   grey flame for a day that counted read as a day that did not.
 * - **Today** — on a raised cell. Lit once it is earned, a plain grey flame
 *   until then: the one day the user can still do something about.
 * - **Missed or ahead** — the same flame, barely there. One shape across the
 *   whole row means the week reads as a single object.
 */
export function StreakWeek({ done, levels, today = new Date().getDay() }: StreakWeekProps) {
  const language = useLanguage();
  const short = weekdayNames(language, 'short');
  // Unabbreviated, for the label a screen reader gets. "Wed" is a heading on a
  // strip you can see; read aloud it is a syllable.
  const full = weekdayNames(language, 'long');

  return (
    <View style={styles.row}>
      {short.map((day, i) => (
        // Keyed by index, not by name: abbreviated weekdays are not unique in
        // every language, and two cells sharing a key drops one of them.
        <Cell
          key={i}
          index={i}
          label={day}
          name={full[i]}
          earned={levels != null ? levels[i] !== 'none' && levels[i] != null : done[i] === true}
          checkinOnly={levels?.[i] === 'checkin'}
          isToday={i === today}
          ahead={i > today && done[i] !== true}
        />
      ))}
    </View>
  );
}

/**
 * What a cell is, in words.
 *
 * The three states are carried by colour and by one raised surface, which is
 * the whole of the design and none of it survives being read aloud. `earned`
 * is not in the visual vocabulary at all — a banked day and a day that went by
 * without a session are the same grey flame — so it comes straight off the
 * data the row was handed rather than off anything on screen.
 */
function cellLabel(name: string, earned: boolean, isToday: boolean, ahead: boolean): string {
  if (isToday) return earned ? `Today, ${name}, done` : `Today, ${name}, not done yet`;
  if (earned) return `${name}, done`;
  if (ahead) return `${name}, still to come`;
  return `${name}, no session`;
}

function Cell({
  index,
  label,
  name,
  earned,
  checkinOnly,
  isToday,
  ahead,
}: {
  index: number;
  label: string;
  /** The day, spelled out. Only the label uses it. */
  name: string;
  /** Banked. Invisible on the strip; see `cellLabel`. */
  earned: boolean;
  /** Banked by a check-in alone: the flame without the shoe. */
  checkinOnly: boolean;
  isToday: boolean;
  ahead: boolean;
}) {
  const scheme = useColorScheme();
  const colors = palette[scheme];
  const meter = meterColors[scheme];
  const flame = accents[scheme].orange;

  const landed = useDerivedValue(() =>
    withDelay(index * STAGGER_MS, settle(1, 380)),
  );

  const style = useAnimatedStyle(() => ({
    opacity: Math.min(landed.value * 1.6, 1),
    transform: [{ scale: 0.86 + landed.value * 0.14 }],
  }));

  return (
    <Animated.View
      // One element per day, not three: the abbreviation, the surface and the
      // flame are one fact between them, and read separately the flame is an
      // unnamed glyph after a syllable.
      accessible
      accessibilityRole="text"
      accessibilityLabel={cellLabel(name, earned, isToday, ahead)}
      style={[
        styles.cell,
        // `track` rather than `iconTile` for the same reason the brief uses it:
        // the strip sits on the bare page, and on the light scheme `iconTile`
        // is within two values of that background — today's cell would lose its
        // container and be marked by nothing but a heavier weight.
        { backgroundColor: isToday ? meter.track : 'transparent' },
        isToday && styles.cellToday,
        style,
      ]}>
      <Text
        style={[
          isToday ? styles.dayToday : styles.day,
          { color: isToday ? colors.foreground : meter.unit },
        ]}>
        {label}
      </Text>
      {/* Solid, not outlined: at this size a stroked flame reads as a
          scribble. Lit for every day that counted (the shoe and its flame
          for a session or a routine, the flame alone for a check-in), grey
          for today while it is still open, barely there otherwise. Both
          levels are lit the same: a check-in counted just as much. */}
      {earned && checkinOnly ? (
        <Flame size={32} color={flame.fill} />
      ) : (
        <ShoeFlame size={32} color={earned ? flame.fill : isToday ? meter.unit : meter.track} />
      )}
    </Animated.View>
  );
}

/**
 * A running shoe with a flame rising out of it: the streak, in the app's own
 * terms (a day on your feet that counted). One colour, solid, so it reads at
 * this size the way the plain flame did; the sole is the same colour, a touch
 * deeper, and a gap between the flame and the shoe keeps the two shapes apart.
 */
function ShoeFlame({ size, color }: { size: number; color: string }) {
  return (
    <Svg width={size} height={size} viewBox="0 0 32 32">
      {/* The flame, rising out of the shoe's collar. */}
      <Path d={FLAME_PATH} fill={color} />
      {/* A running shoe in profile: heel collar, the slope of the laces, the
          toe, and its sole under a gap. */}
      <Path
        d="M3.4 24.6V18.6C3.4 17.4 4.4 16.6 5.6 16.8L7.6 17.2C8.9 18.6 10.6 19.2 12.4 19C13.7 18.9 14.8 18.5 15.7 18L17.4 19.3L19.2 18.6L20.6 19.9L22.4 19.4C25.6 20.2 28.4 21.6 28.8 24V24.6H3.4Z"
        fill={color}
      />
      <Path d="M2.8 26H29.2V27C29.2 28.2 28.2 29.2 27 29.2H5C3.8 29.2 2.8 28.2 2.8 27V26Z" fill={color} opacity={0.7} />
    </Svg>
  );
}

/**
 * The strip's glyph for a level, for anything that explains the strip (the
 * streak sheet): the shoe with its flame for `full`, the flame alone for
 * `checkin`. Lit in the given colour.
 */
export function StreakGlyph({ level, size = 32, color }: { level: 'checkin' | 'full'; size?: number; color: string }) {
  return level === 'checkin' ? <Flame size={size} color={color} /> : <ShoeFlame size={size} color={color} />;
}

/** The flame from `ShoeFlame` on its own, grown to fill the same square and
 * standing where the shoe would: a day a check-in kept. */
const FLAME_PATH =
  'M12.6 1.2C13.6 4.6 18.4 6.8 18.4 11.2C18.4 14.2 16 15.9 12.6 15.9C9.3 15.9 7 14 7 11.3C7 9.2 8.2 7.8 9.3 6.9C9.5 8.7 10.4 9.7 11.4 10C11.1 7 11.5 4 12.6 1.2Z';

function Flame({ size, color }: { size: number; color: string }) {
  // The flame's own box is 7–18.4 across and 1.2–15.9 down; scaled 1.75 and
  // centred across, its base set on the shoe's sole line (y 29).
  return (
    <Svg width={size} height={size} viewBox="0 0 32 32">
      <G transform="translate(-6.2 1.2) scale(1.75)">
        <Path d={FLAME_PATH} fill={color} />
      </G>
    </Svg>
  );
}

const CELL_RADIUS = 26;

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'stretch',
    gap: 6,
  },
  cell: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    paddingVertical: 15,
    borderRadius: CELL_RADIUS,
    // Squircle, so a capsule this tall does not bow at the corners.
    borderCurve: 'continuous',
  },
  // Today is the only cell with a surface under it. Giving every cell one
  // would turn the row into a segmented control, which invites a tap that
  // does nothing — the week is a readout, not a picker.
  cellToday: {
    transform: [{ scale: 1 }],
  },
  day: fonts.medium(14, -0.2),
  dayToday: fonts.bold(14, -0.2),
});
