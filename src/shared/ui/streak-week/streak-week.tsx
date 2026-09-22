import { FireIcon } from 'phosphor-react-native';
import { StyleSheet, Text, View } from 'react-native';
import Animated, {
  Easing,
  ReduceMotion,
  useAnimatedStyle,
  useDerivedValue,
  withDelay,
  withSpring,
} from 'react-native-reanimated';

import { accents, fonts, meterColors, palette } from '@/shared/config';
import { useLanguage, type Language } from '@/shared/lib/i18n';
import { useColorScheme } from '@/shared/lib/theme';

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

function weekdayNames(language: Language, style: 'short' | 'long'): string[] {
  const format = new Intl.DateTimeFormat(language, { weekday: style, timeZone: 'UTC' });
  return Array.from({ length: 7 }, (_, index) =>
    format.format(new Date(SUNDAY + index * 86_400_000)),
  );
}

/** Each cell lands just after the one before it, left to right, so the week
 * reads as filling in rather than appearing. */
const STAGGER_MS = 55;

export type StreakWeekProps = {
  /** Which days of this week are already earned, Sunday-first. */
  done: readonly boolean[];
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
 * - **Earned** — a flame, but grey. It happened; it is not news.
 * - **Today** — the only lit thing on the row, in the app's orange, on a raised
 *   cell. It is the only day the user can still do anything about.
 * - **Ahead** — the same flame, unlit. One shape across the whole row means
 *   the week reads as a single object with a lit position in it, rather than
 *   as two kinds of thing sitting next to each other.
 */
export function StreakWeek({ done, today = new Date().getDay() }: StreakWeekProps) {
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
          earned={done[i] === true}
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
  isToday,
  ahead,
}: {
  index: number;
  label: string;
  /** The day, spelled out. Only the label uses it. */
  name: string;
  /** Banked. Invisible on the strip; see `cellLabel`. */
  earned: boolean;
  isToday: boolean;
  ahead: boolean;
}) {
  const scheme = useColorScheme();
  const colors = palette[scheme];
  const meter = meterColors[scheme];
  const flame = accents[scheme].orange;

  const landed = useDerivedValue(() =>
    withDelay(
      index * STAGGER_MS,
      withSpring(1, {
        damping: 15,
        stiffness: 180,
        mass: 0.7,
        reduceMotion: ReduceMotion.System,
      }),
    ),
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
          styles.day,
          {
            color: isToday ? colors.foreground : meter.unit,
            fontFamily: isToday ? fonts.bold : fonts.medium,
          },
        ]}>
        {label}
      </Text>
      {/* Solid, not outlined: at this size a stroked flame reads as a
          scribble. Three tones, one glyph — lit for today, legible grey for
          what is banked, barely there for what has not happened yet. */}
      <FireIcon
        size={30}
        color={isToday ? flame.fill : ahead ? meter.track : meter.unit}
        weight="fill"
      />
    </Animated.View>
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
  day: {
    fontSize: 14,
    letterSpacing: -0.2,
  },
});
