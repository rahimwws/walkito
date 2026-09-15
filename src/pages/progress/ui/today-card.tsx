import Tick02Icon from '@hugeicons/core-free-icons/Tick02Icon';
import { HugeiconsIcon } from '@hugeicons/react-native';
import { StyleSheet, Text, View } from 'react-native';

import { fonts, meterColors, palette } from '@/shared/config';
import { useColorScheme } from '@/shared/lib/theme';
import { Relief, ReliefButton } from '@/shared/ui/relief';

export type TodayCardProps = {
  /** Small line above the title. Omitted on the shapes that don't need it. */
  eyebrow?: string;
  title: string;
  subtitle?: string;
  /** The button. Omit it and the card becomes the finished state, which is why
   * `note` and `action` are never both set. */
  action?: { label: string; onPress: () => void };
  /** Quiet line under a card with no button. */
  note?: string;
};

/**
 * The card pinned above the tab bar: what today asks for, and the button that
 * starts it.
 *
 * One card with three shapes rather than three cards — a session, a retest,
 * and a day already finished all answer the same question, and swapping the
 * copy keeps the answer in the same place on screen every time.
 *
 * Raised rather than glass. The card is the only thing on this screen a user
 * is meant to press, and a surface that visibly sits above the page and
 * collapses under a finger says so more plainly than a translucent one.
 */
export function TodayCard({ eyebrow, title, subtitle, action, note }: TodayCardProps) {
  const scheme = useColorScheme();
  const colors = palette[scheme];
  const meter = meterColors[scheme];

  return (
    <Relief radius={26} contentStyle={styles.card}>
      {action != null ? (
        <View style={styles.copy}>
          {eyebrow != null && (
            <Text style={[styles.eyebrow, { color: meter.label }]}>{eyebrow}</Text>
          )}
          <Text style={[styles.title, { color: colors.foreground }]}>{title}</Text>
          {subtitle != null && (
            <Text style={[styles.subtitle, { color: meter.caption }]}>{subtitle}</Text>
          )}
        </View>
      ) : (
        <View style={styles.doneRow}>
          <HugeiconsIcon
            icon={Tick02Icon}
            size={22}
            color={colors.foreground}
            strokeWidth={2.8}
          />
          <Text style={[styles.title, { color: colors.foreground }]}>{title}</Text>
        </View>
      )}

      {action != null ? (
        <ReliefButton label={action.label} onPress={action.onPress} style={styles.button} />
      ) : (
        note != null && <Text style={[styles.note, { color: meter.caption }]}>{note}</Text>
      )}
    </Relief>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 20,
  },
  copy: {
    gap: 2,
  },
  doneRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
  eyebrow: {
    fontSize: 13,
    fontFamily: fonts.medium,
  },
  title: {
    fontSize: 22,
    fontFamily: fonts.bold,
    letterSpacing: -0.4,
  },
  subtitle: {
    fontSize: 15,
    fontFamily: fonts.medium,
    marginTop: 2,
  },
  note: {
    fontSize: 13,
    fontFamily: fonts.regular,
    textAlign: 'center',
    marginTop: 6,
  },
  button: {
    marginTop: 16,
  },
});
