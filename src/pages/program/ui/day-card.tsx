import ArrowDown01Icon from '@hugeicons/core-free-icons/ArrowDown01Icon';
import ArrowUp01Icon from '@hugeicons/core-free-icons/ArrowUp01Icon';
import SquareLock02Icon from '@hugeicons/core-free-icons/SquareLock02Icon';
import Tick02Icon from '@hugeicons/core-free-icons/Tick02Icon';
import { HugeiconsIcon } from '@hugeicons/react-native';
import * as Haptics from 'expo-haptics';
import { useState } from 'react';
import { Pressable, StyleSheet, Text, View, useWindowDimensions } from 'react-native';

import { dayLook, doseLabel, exerciseById, fromDateKey, type PlanDay } from '@/entities/program';
import { bitepal, colors, fonts, target } from '@/shared/config';
import { useLanguage, useT } from '@/shared/lib/i18n';
import { FluentIcon } from '@/shared/ui/fluent-icon';
import { MoveCircle, TITLE_SCALE, cardStyle } from '@/widgets/session-player';

const PHOTO = 46;
const STATUS = 44;

export type DayCardProps = {
  day: PlanDay;
  /** "Strength · calves", "Test day", "Rest day". */
  title: string;
  /** `YYYY-MM-DD`. */
  today: string;
  done: boolean;
  /** A test day: what its three tests are. */
  testBody: string;
  onPreview: (exerciseId: string) => void;
  /** Looking around without buying: a day ahead is locked, and its corner
   * mark is a lock. Its moves still open to be read. */
  locked?: boolean;
};

/**
 * One day of the week on the plan, as BitePal's home cards (#99): the date as
 * the grey label, what the day is as the heavy title, how long and how many,
 * the moves as overlapping circles on their parts' colours, and a round mark
 * at the corner (a violet tick once done). A tap opens the day's moves, each
 * opening its sheet. A test day has its own card with the test's icon; a rest
 * day is one short line.
 */
export function DayCard({ day, title, today, done, testBody, onPreview, locked = false }: DayCardProps) {
  const t = useT();
  const language = useLanguage();
  const [open, setOpen] = useState(false);
  const large = useWindowDimensions().fontScale >= 1.35;
  const label = new Intl.DateTimeFormat(language, {
    weekday: 'long',
    day: 'numeric',
    month: 'short',
  }).format(fromDateKey(day.date));
  const past = day.date < today;
  const rest = day.type === 'rest' && !done;
  const test = day.type === 'test';
  const moves = test || rest ? [] : day.exercises;
  const lock = locked && !rest && !done && !past;
  const name = lock ? `${label}, ${title}, ${t('quick.locked')}` : `${label}, ${title}`;

  const meta = test
    ? testBody
    : rest
      ? null
      : past && !done
        ? t('pages.week.skipped')
        : t('player.header.meta', {
            minutes: t('quick.minutes', { count: day.minutes }),
            moves: t('quick.moves', { count: moves.length }),
          });

  const status = done ? (
    <View style={[styles.status, styles.statusDone]}>
      <HugeiconsIcon icon={Tick02Icon} size={24} color={bitepal.onPrimary} strokeWidth={2.6} />
    </View>
  ) : lock ? (
    <View style={styles.status}>
      <HugeiconsIcon icon={SquareLock02Icon} size={22} color={colors.text2} strokeWidth={2} />
    </View>
  ) : (
    <View style={styles.status}>
      <FluentIcon name={dayLook(day.type).art} size={24} />
    </View>
  );

  const head = (
    <View style={[styles.head, large && styles.headLarge]}>
      <View style={styles.headText}>
        <Text style={styles.label}>{label}</Text>
        <Text style={[styles.title, (rest || (past && !done)) && styles.quiet]} maxFontSizeMultiplier={TITLE_SCALE}>
          {title}
        </Text>
      </View>
      {status}
    </View>
  );

  if (moves.length === 0) {
    return (
      <View
        style={[styles.card, rest && styles.restCard]}
        accessible
        accessibilityLabel={name}
        accessibilityValue={done ? { text: t('pages.plan.path.done') } : undefined}>
        {head}
        {meta != null && <Text style={styles.meta}>{meta}</Text>}
      </View>
    );
  }

  return (
    <View style={styles.card}>
      <Pressable
        accessibilityRole="button"
        accessibilityLabel={name}
        accessibilityValue={done ? { text: t('pages.plan.path.done') } : meta != null ? { text: meta } : undefined}
        accessibilityState={{ expanded: open }}
        onPress={() => {
          void Haptics.selectionAsync();
          setOpen((was) => !was);
        }}
        style={({ pressed }) => [styles.toggle, pressed && styles.pressed]}>
        {head}
        {meta != null && <Text style={styles.meta}>{meta}</Text>}
        <View style={styles.photoRow}>
          <View style={styles.photos} accessibilityElementsHidden importantForAccessibility="no-hide-descendants">
            {moves.slice(0, 5).map((move, index) => (
              <MoveCircle
                key={move.id}
                exerciseId={move.id}
                size={PHOTO}
                style={[styles.photo, index > 0 && styles.overlap]}
              />
            ))}
          </View>
          <HugeiconsIcon icon={open ? ArrowUp01Icon : ArrowDown01Icon} size={24} color={colors.text3} strokeWidth={2} />
        </View>
      </Pressable>
      {open && (
        <View style={styles.list}>
          {moves.map((move) => {
            const name = exerciseById(move.id).title;
            return (
              <Pressable
                key={move.id}
                accessibilityRole="button"
                accessibilityLabel={t('pages.plan.chipPreviewA11y', { name })}
                onPress={() => onPreview(move.id)}
                style={({ pressed }) => [styles.move, pressed && styles.pressed]}>
                <MoveCircle exerciseId={move.id} size={PHOTO} />
                <View style={styles.moveText}>
                  <Text style={styles.moveName} maxFontSizeMultiplier={TITLE_SCALE}>
                    {name}
                  </Text>
                  <Text style={styles.moveDose}>
                    {doseLabel(move.dose.sets, move.dose.reps, move.dose.holdSec, move.dose.perSide)}
                  </Text>
                </View>
              </Pressable>
            );
          })}
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  card: { ...cardStyle, padding: 20, gap: 8 },
  restCard: { paddingVertical: 16 },
  toggle: { gap: 8 },
  head: { flexDirection: 'row', alignItems: 'center', gap: 12 },
  headLarge: { flexDirection: 'column-reverse', alignItems: 'flex-start' },
  headText: { flexGrow: 1, flexShrink: 1, gap: 2 },
  label: { ...fonts.semibold(17), color: colors.text3 },
  title: { ...fonts.heavy(22, -0.4), color: colors.text },
  quiet: { color: colors.text2 },
  meta: { ...fonts.medium(17), color: colors.text2 },
  status: {
    width: STATUS,
    height: STATUS,
    borderRadius: STATUS / 2,
    backgroundColor: bitepal.well,
    alignItems: 'center',
    justifyContent: 'center',
  },
  statusDone: { backgroundColor: bitepal.selected },
  photoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 4,
  },
  photos: { flexDirection: 'row' },
  photo: { borderWidth: 3, borderColor: bitepal.card },
  overlap: { marginLeft: -12 },
  list: { gap: 6, marginTop: 6 },
  move: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    minHeight: target.min + 4,
  },
  moveText: { flex: 1, gap: 1 },
  moveName: { ...fonts.semibold(19), color: colors.text },
  moveDose: { ...fonts.medium(17), color: colors.text3 },
  pressed: { opacity: 0.6 },
});
