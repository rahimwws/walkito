import Clock01Icon from '@hugeicons/core-free-icons/Clock01Icon';
import Dumbbell01Icon from '@hugeicons/core-free-icons/Dumbbell01Icon';
import Target01Icon from '@hugeicons/core-free-icons/Target01Icon';
import { StyleSheet, Text, View } from 'react-native';

import type { DayType } from '@/entities/program';
import { colors, fonts } from '@/shared/config';
import { useT } from '@/shared/lib/i18n';
import { Card } from '@/shared/ui/card';
import { Chip } from '@/shared/ui/chip';
import { FluentIcon } from '@/shared/ui/fluent-icon';

import { dayLook } from './kind-tone';
import { OpensCaption } from './wait-caption';

const BADGE = 40;
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
 * Tomorrow, under a finished day: what it is and when it opens. A rest day
 * says when the next session is instead, since "when do I train next?" is the
 * question a rest day leaves. Not tappable: the page opens no day sheet.
 */
export function TomorrowCard({ kind, title, minutes, count, opensAt, nextLine }: TomorrowCardProps) {
  const t = useT();
  const rest = kind === 'rest';

  return (
    <Card style={styles.content}>
      <View style={styles.head}>
        <View style={styles.badge} accessibilityElementsHidden importantForAccessibility="no-hide-descendants">
          <FluentIcon name={dayLook(kind).art} size={BADGE_EMOJI} />
        </View>
        <View style={styles.heading}>
          <Text style={styles.eyebrow}>{t('pages.plan.tomorrowEyebrow')}</Text>
          <Text accessibilityRole="header" style={styles.title}>
            {title}
          </Text>
        </View>
      </View>

      {!rest && (
        <View style={styles.chips}>
          {minutes > 0 && <Chip icon={Clock01Icon} label={t('session.minutes', { count: minutes })} />}
          {kind === 'test' ? (
            <Chip icon={Target01Icon} label={t('pages.program.testCount', { count })} />
          ) : (
            count > 0 && <Chip icon={Dumbbell01Icon} label={t('session.moveCount', { count })} />
          )}
        </View>
      )}

      {!rest && opensAt != null && <OpensCaption at={opensAt} style={styles.body} />}
      {rest && nextLine != null && <Text style={styles.body}>{nextLine}</Text>}
    </Card>
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
  badge: {
    width: BADGE,
    height: BADGE,
    borderRadius: BADGE / 2,
    backgroundColor: colors.surface2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    flex: 1,
    gap: 2,
  },
  eyebrow: { ...fonts.semibold(15), color: colors.text2 },
  title: {
    ...fonts.bold(20, -0.3),
    lineHeight: 25,
    color: colors.text,
  },
  chips: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  body: {
    ...fonts.regular(17),
    lineHeight: 23,
    color: colors.text2,
  },
});
