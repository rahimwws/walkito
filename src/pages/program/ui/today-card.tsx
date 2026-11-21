import Clock01Icon from '@hugeicons/core-free-icons/Clock01Icon';
import Dumbbell01Icon from '@hugeicons/core-free-icons/Dumbbell01Icon';
import Target01Icon from '@hugeicons/core-free-icons/Target01Icon';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { dayLook, type DayType, type SessionMinutes } from '@/entities/program';
import { CHROME_MAX_FONT_SCALE, colors, fonts } from '@/shared/config';
import { useT } from '@/shared/lib/i18n';
import { Button } from '@/shared/ui/button';
import { Card } from '@/shared/ui/card';
import { Chip } from '@/shared/ui/chip';
import { FluentIcon, type FluentName } from '@/shared/ui/fluent-icon';

import type { TodayVariant } from '../model/plan-view';
import { WaitCaption } from './wait-caption';

export const MINUTE_CHOICES: readonly SessionMinutes[] = [3, 5, 10];

const BADGE = 44;
const BADGE_EMOJI = 26;

export type TodayCardProps = {
  /** Never `done`: a finished day has its own card (`TodayDoneCard`). */
  variant: Exclude<TodayVariant, 'done'>;
  /** The day's type, for its emoji. */
  kind: DayType;
  title: string;
  /** How many moves the session runs, for the chip under the title. */
  moveCount: number;
  minutes: SessionMinutes;
  onMinutes: (minutes: SessionMinutes) => void;
  onStart: () => void;
  /** Test day: the three tests, and what they are for. */
  tests?: { chips: readonly string[]; body: string };
  /** Rest: the Library routine the button opens. */
  restRoutine?: { label: string; onPress: () => void };
  /**
   * When the next session opens, epoch ms — for the rest card's wait. Null
   * when three weeks hold nothing but rest. A done day's wait is on the
   * tomorrow card (`TomorrowCard`).
   */
  nextAt?: number | null;
  /** "Not up for it?": start the 2-minute version instead. */
  onShort?: () => void;
  /** Why today differs from the plan — a big day yesterday, a short night. */
  note?: string | null;
};

/**
 * Today, while there is something to do: the day's emoji, its title, how long
 * and how many, the minutes to choose and Start. A flare day swaps in seated
 * work and hides the minutes (it is three, fixed); a test day shows the tests
 * instead; a rest day has no button, only the wait. Once the day is done a
 * smaller card leads in its place (`TodayDoneCard`).
 */
export function TodayCard(props: TodayCardProps) {
  const { variant, kind, title, moveCount, minutes, onMinutes, onStart, tests, restRoutine, nextAt, onShort, note } =
    props;
  const t = useT();

  const rest = variant === 'rest';
  const working = variant === 'session' || variant === 'easy';
  // An easy day is relief whatever kind it replaced.
  const art: FluentName = variant === 'easy' ? 'relief' : dayLook(kind).art;

  return (
    <Card style={styles.content}>
      <View style={styles.head}>
        <View style={styles.badge} accessibilityElementsHidden importantForAccessibility="no-hide-descendants">
          <FluentIcon name={art} size={BADGE_EMOJI} />
        </View>
        <View style={styles.heading}>
          <Text style={styles.eyebrow}>{t('pages.plan.todayEyebrow')}</Text>
          <Text accessibilityRole="header" style={styles.title}>
            {title}
          </Text>
        </View>
      </View>

      {working && moveCount > 0 && (
        <View style={styles.chips}>
          {variant === 'session' && <Chip icon={Clock01Icon} label={t('session.minutes', { count: minutes })} />}
          <Chip icon={Dumbbell01Icon} label={t('session.moveCount', { count: moveCount })} />
        </View>
      )}

      {rest && (
        <>
          <Text style={styles.caption}>{t('pages.plan.rest')}</Text>
          {nextAt != null && <WaitCaption at={nextAt} style={styles.body} />}
          {restRoutine != null && (
            <Button
              label={restRoutine.label}
              variant="secondary"
              size="sm"
              leading={<FluentIcon name="stretch" size={18} />}
              align="start"
              onPress={restRoutine.onPress}
            />
          )}
        </>
      )}

      {variant === 'test' && tests != null && (
        <>
          <Text style={styles.body}>{tests.body}</Text>
          <View style={styles.chips}>
            {tests.chips.map((chip) => (
              <Chip key={chip} label={chip} icon={Target01Icon} />
            ))}
          </View>
        </>
      )}

      {working && note != null && <Text style={styles.caption}>{note}</Text>}

      {variant === 'session' && <MinuteChoice minutes={minutes} onMinutes={onMinutes} />}

      {(working || variant === 'test') && <Button label={t('pages.plan.start')} onPress={onStart} />}
      {working && onShort != null && (
        <Button label={t('pages.plan.notUpForIt')} variant="ghost" size="sm" onPress={onShort} />
      )}
    </Card>
  );
}

/** How long, as three capsules: a radio group to a screen reader. */
function MinuteChoice({ minutes, onMinutes }: { minutes: SessionMinutes; onMinutes: (minutes: SessionMinutes) => void }) {
  const t = useT();

  return (
    <View style={styles.chips} accessibilityRole="radiogroup">
      {MINUTE_CHOICES.map((m) => {
        const on = m === minutes;
        const label = t('session.minutes', { count: m });
        return (
          <Pressable
            key={m}
            onPress={() => onMinutes(m)}
            accessibilityRole="radio"
            accessibilityState={{ selected: on }}
            accessibilityLabel={label}
            style={({ pressed }) => [
              styles.choice,
              { backgroundColor: on ? colors.accentSoft : colors.surface2, opacity: pressed ? 0.7 : 1 },
            ]}>
            <Text
              style={[styles.choiceLabel, { color: on ? colors.accent : colors.text }]}
              numberOfLines={1}
              maxFontSizeMultiplier={CHROME_MAX_FONT_SCALE}>
              {label}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    gap: 14,
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
    ...fonts.bold(24, -0.4),
    lineHeight: 29,
    color: colors.text,
  },
  caption: {
    ...fonts.regular(17),
    lineHeight: 23,
    color: colors.text2,
  },
  body: {
    ...fonts.regular(17),
    lineHeight: 23,
    color: colors.text,
  },
  chips: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  choice: {
    minHeight: 44,
    paddingHorizontal: 16,
    borderRadius: 999,
    justifyContent: 'center',
  },
  choiceLabel: fonts.semibold(17),
});
