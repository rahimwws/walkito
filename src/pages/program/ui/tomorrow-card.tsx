import Clock01Icon from '@hugeicons/core-free-icons/Clock01Icon';
import Dumbbell01Icon from '@hugeicons/core-free-icons/Dumbbell01Icon';
import Target01Icon from '@hugeicons/core-free-icons/Target01Icon';
import { StyleSheet, Text, View } from 'react-native';

import type { DayType } from '@/entities/program';
import { fonts, meterColors, palette } from '@/shared/config';
import { useT } from '@/shared/lib/i18n';
import { useColorScheme } from '@/shared/lib/theme';
import { Card3D } from '@/shared/ui/card-3d';
import { Chip3D } from '@/shared/ui/chip-3d';
import { FluentIcon } from '@/shared/ui/fluent-icon';
import { IconCircle3D } from '@/shared/ui/icon-circle-3d';

import { dayLook } from './kind-tone';
import { OpensCaption } from './rest-button';

/** The day's emoji, in its raised disc: the today card's, one card down. */
const BADGE_EMOJI = 24;

export type TomorrowCardProps = {
  /** Tomorrow's type in the plan; `rest` when the plan has nothing on it. */
  kind: DayType;
  /** "Mobility · calves", "Test day", "Rest day". */
  title: string;
  /** The planned minutes. Unused on a rest day. */
  minutes: number;
  /** Moves on a session day, tests on a test day. Unused on a rest day. */
  count: number;
  /** When tomorrow's session opens, epoch ms. Null on a rest day. */
  opensAt: number | null;
  /** A rest day: when the next session is, "Next session: Monday, strength." */
  nextLine: string | null;
};

/**
 * Tomorrow, under a finished day: what it is and when it opens.
 *
 * Its kind's emoji in a raised disc, "Tomorrow" over its title, then how long
 * and how many as the same colourful chips the today card wears, and the
 * countdown to its midnight. Toned by its kind, as the today card is; a rest
 * day is the neutral card with the 💤, and says when the next session is
 * instead, since "when do I train next?" is the question a rest day leaves.
 *
 * No mascot: the finished day's card at the top has the screen's one. Not
 * tappable either: the page opens no day sheet, and a card that looks
 * pressable and does nothing is worse than one that is plainly a note.
 */
export function TomorrowCard({ kind, title, minutes, count, opensAt, nextLine }: TomorrowCardProps) {
  const scheme = useColorScheme();
  const colors = palette[scheme];
  const meter = meterColors[scheme];
  const t = useT();

  const rest = kind === 'rest';
  const look = dayLook(kind);
  const tone = rest || look.accent == null ? undefined : look.accent;

  return (
    <Card3D material="solid" tone={tone} padding={16} contentStyle={styles.content}>
      <View style={styles.head}>
        {/* Decoration: the title beside it names the day. */}
        <View accessibilityElementsHidden importantForAccessibility="no-hide-descendants">
          <IconCircle3D size="sm" tone="neutral" accessibilityLabel={title}>
            <FluentIcon name={look.art} size={BADGE_EMOJI} />
          </IconCircle3D>
        </View>
        <View style={styles.heading}>
          <Text style={[styles.eyebrow, { color: meter.caption }]}>{t('pages.plan.tomorrowEyebrow')}</Text>
          <Text accessibilityRole="header" style={[styles.title, { color: colors.foreground }]}>
            {title}
          </Text>
        </View>
      </View>

      {!rest && (
        <View style={styles.chips}>
          {minutes > 0 && (
            <Chip3D icon={Clock01Icon} accent="blue" label={t('session.minutes', { count: minutes })} />
          )}
          {kind === 'test' ? (
            <Chip3D icon={Target01Icon} accent="amber" label={t('pages.program.testCount', { count })} />
          ) : (
            count > 0 && (
              <Chip3D icon={Dumbbell01Icon} accent="violet" label={t('session.moveCount', { count })} />
            )
          )}
        </View>
      )}

      {!rest && opensAt != null && <OpensCaption at={opensAt} style={[styles.body, { color: meter.caption }]} />}
      {rest && nextLine != null && <Text style={[styles.body, { color: meter.caption }]}>{nextLine}</Text>}
    </Card3D>
  );
}

const styles = StyleSheet.create({
  content: {
    gap: 12,
  },
  head: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  heading: {
    flex: 1,
    gap: 2,
  },
  eyebrow: fonts.bold(12, 0.6),
  title: {
    ...fonts.heavy(20, -0.4),
    lineHeight: 25,
  },
  chips: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  body: {
    ...fonts.medium(15),
    lineHeight: 21,
  },
});
