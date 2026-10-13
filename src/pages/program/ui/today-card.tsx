import Clock01Icon from '@hugeicons/core-free-icons/Clock01Icon';
import Dumbbell01Icon from '@hugeicons/core-free-icons/Dumbbell01Icon';
import Target01Icon from '@hugeicons/core-free-icons/Target01Icon';
import { HugeiconsIcon } from '@hugeicons/react-native';
import { StyleSheet, Text, View } from 'react-native';

import type { DayType, SessionMinutes } from '@/entities/program';
import { fonts, meterColors, palette, raised, type AccentName } from '@/shared/config';
import { useT } from '@/shared/lib/i18n';
import { useColorScheme } from '@/shared/lib/theme';
import { Button3D } from '@/shared/ui/button-3d';
import { Card3D, cardColours } from '@/shared/ui/card-3d';
import { Chip3D } from '@/shared/ui/chip-3d';
import { FluentIcon, type FluentName } from '@/shared/ui/fluent-icon';
import { IconCircle3D } from '@/shared/ui/icon-circle-3d';
import {
  idleRig,
  pointingRig,
  sleepingRig,
  thinkingRig,
  type MascotRig,
  type MascotShot,
} from '@/shared/ui/mascot';
import { Raised } from '@/shared/ui/raised';

import type { TodayVariant } from '../model/plan-view';
import { KIND_LOOK, dayLook } from './kind-tone';
import { TodayMascot } from './plan-mascot';
import { WaitCaption } from './rest-button';

export const MINUTE_CHOICES: readonly SessionMinutes[] = [3, 5, 10];

/** The mascot in the card's top corner: about as tall as the title's two lines
 * and the eyebrow over them, so he stands beside the heading rather than over
 * the chips. */
const MASCOT = 76;

/** The day's emoji, in its raised disc. */
const BADGE_EMOJI = 26;

/** The minutes choice: a raised chip, the kit's chosen-answer colours when on. */
const CHOICE_LIP = 3;

export type TodayCardProps = {
  /** Never `done`: a finished day has its own card (`TodayDoneCard`). */
  variant: Exclude<TodayVariant, 'done'>;
  /** The day's type, for its emoji, its colour and its mascot. */
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
  /** A sheet is over the plan: the mascot holds still under it. */
  covered?: boolean;
};

/** Who stands on the card, and the one thing he does when it is first seen. */
function poseFor(variant: TodayCardProps['variant']): { rig: MascotRig; shot?: MascotShot; mirrored?: boolean } {
  switch (variant) {
    case 'session':
      // Pointing at the title from the right edge: "this one's yours".
      return { rig: pointingRig, shot: 'hop', mirrored: true };
    case 'easy':
      return { rig: idleRig };
    case 'test':
      return { rig: thinkingRig };
    case 'rest':
      return { rig: sleepingRig, shot: 'nod' };
  }
}

/**
 * Today, as the level about to be played.
 *
 * A solid 3D card, toned by the day's kind: the kind's Fluent emoji in a
 * raised disc, the title, and the one mascot on the screen in the corner.
 * Under them how long and how many, as colourful 3D chips, then the minutes
 * to choose and the filled violet Start. The moves themselves are the
 * checklist under the card (`TodayMoves`), and what finishing earns is under
 * that (`FinishReward`).
 *
 * A flare day swaps in seated work and hides the minutes (it is three,
 * fixed); a test day shows the tests instead; a rest day has no button, only
 * the wait, and the mascot asleep. Only while there is something to do: once
 * the day is done this card goes, and a smaller one leads in its place
 * (`TodayDoneCard`), with the day's title ticked, what it earned and the way
 * back to a test's results; tomorrow is the card under the goal
 * (`TomorrowCard`). This card comes back at midnight, at the top, when the
 * page moves on to the new day.
 *
 * Solid, never glass: a glass face on a 3D lip read as murky, and the card
 * holds a filled button, which glass would not carry.
 */
export function TodayCard(props: TodayCardProps) {
  const {
    variant,
    kind,
    title,
    moveCount,
    minutes,
    onMinutes,
    onStart,
    tests,
    restRoutine,
    nextAt,
    onShort,
    note,
    covered = false,
  } = props;
  const scheme = useColorScheme();
  const colors = palette[scheme];
  const meter = meterColors[scheme];
  const t = useT();

  const rest = variant === 'rest';
  const working = variant === 'session' || variant === 'easy';
  // An easy day is relief whatever kind it replaced: the herb and the calm teal.
  const look: { art: FluentName; accent: AccentName | null } =
    variant === 'easy' ? { art: 'relief', accent: KIND_LOOK.mobility.accent } : dayLook(kind);
  // A rest day is the neutral card: there is no work to colour.
  const tone = rest || look.accent == null ? undefined : look.accent;
  const face = cardColours(scheme, tone).face;
  const pose = poseFor(variant);

  return (
    <Card3D size="lg" material="solid" tone={tone} padding={18} contentStyle={styles.content}>
      <View style={styles.head}>
        {/* The day's emoji, standing in its disc. Decoration: the title
            beside it names the day. */}
        <View accessibilityElementsHidden importantForAccessibility="no-hide-descendants">
          <IconCircle3D size="sm" tone="neutral" accessibilityLabel={title}>
            <FluentIcon name={look.art} size={BADGE_EMOJI} />
          </IconCircle3D>
        </View>

        <View style={styles.heading}>
          <Text style={[styles.eyebrow, { color: meter.caption }]}>{t('pages.plan.todayEyebrow')}</Text>
          <Text accessibilityRole="header" style={[styles.title, { color: colors.foreground }]}>
            {title}
          </Text>
        </View>

        {/* The one mascot in frame. Decoration: the words say what the day
            is. Keyed by pose, so a session that finishes under him is a new
            mascot with its own one move. */}
        <View
          pointerEvents="none"
          accessibilityElementsHidden
          importantForAccessibility="no-hide-descendants"
          style={styles.mascot}>
          <TodayMascot
            key={pose.rig.name}
            rig={pose.rig}
            size={MASCOT}
            surface={face}
            covered={covered}
            shot={pose.shot}
            mirrored={pose.mirrored}
          />
        </View>
      </View>

      {/* How long and how many, as solid chips under the title: the session
          at a glance before its moves are read. The minutes follow the choice
          below; an easy day keeps them hidden, as the choice is. */}
      {working && moveCount > 0 && (
        <View style={styles.chips}>
          {variant === 'session' && (
            <Chip3D icon={Clock01Icon} accent="blue" label={t('session.minutes', { count: minutes })} />
          )}
          <Chip3D icon={Dumbbell01Icon} accent="violet" label={t('session.moveCount', { count: moveCount })} />
        </View>
      )}

      {rest && (
        <>
          <Text style={[styles.body, { color: meter.caption }]}>{t('pages.plan.rest')}</Text>
          {nextAt != null && <WaitCaption at={nextAt} style={[styles.body, { color: colors.foreground }]} />}
          {restRoutine != null && (
            <Button3D
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
          <Text style={[styles.body, { color: colors.foreground }]}>{tests.body}</Text>
          <View style={styles.chips}>
            {tests.chips.map((chip) => (
              <Chip3D key={chip} label={chip} icon={Target01Icon} accent="amber" />
            ))}
          </View>
        </>
      )}

      {working && note != null && <Text style={[styles.body, { color: meter.caption }]}>{note}</Text>}

      {variant === 'session' && <MinuteChoice minutes={minutes} onMinutes={onMinutes} />}

      {(working || variant === 'test') && <Button3D label={t('pages.plan.start')} onPress={onStart} />}
      {working && onShort != null && (
        <Button3D label={t('pages.plan.notUpForIt')} variant="ghost" size="sm" onPress={onShort} />
      )}
    </Card3D>
  );
}

/**
 * How long, as three raised chips: the chosen one in the kit's chosen-answer
 * colours, the others on the card's own neutral face. A radio group to a
 * screen reader, as the flat chips were.
 */
function MinuteChoice({ minutes, onMinutes }: { minutes: SessionMinutes; onMinutes: (minutes: SessionMinutes) => void }) {
  const scheme = useColorScheme();
  const tokens = raised[scheme];
  const meter = meterColors[scheme];
  const t = useT();

  return (
    <View style={styles.chips} accessibilityRole="radiogroup">
      {MINUTE_CHOICES.map((m) => {
        const on = m === minutes;
        const ink = on ? tokens.selectedInk : meter.caption;
        const label = t('session.minutes', { count: m });
        return (
          <Raised
            key={m}
            face={on ? tokens.selectedFill : tokens.surface}
            edge={on ? tokens.selectedEdge : tokens.edge}
            lip={on ? tokens.selectedEdge : tokens.lip}
            depth={CHOICE_LIP}
            radius={12}
            onPress={() => onMinutes(m)}
            accessibilityRole="radio"
            accessibilityState={{ selected: on }}
            accessibilityLabel={label}
            contentStyle={styles.choice}>
            <HugeiconsIcon icon={Clock01Icon} size={15} color={ink} strokeWidth={2.4} />
            <Text style={[styles.choiceLabel, { color: ink }]} numberOfLines={1} maxFontSizeMultiplier={1.3}>
              {label}
            </Text>
          </Raised>
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
    alignItems: 'flex-start',
    gap: 12,
  },
  heading: {
    flex: 1,
    gap: 2,
    paddingTop: 2,
  },
  eyebrow: fonts.bold(12, 0.6),
  title: {
    ...fonts.heavy(24, -0.6),
    lineHeight: 29,
  },
  /** Pulled into the card's padding, so the figure stands in the corner and
   * the heading keeps the width. */
  mascot: {
    width: MASCOT,
    height: MASCOT,
    marginTop: -8,
    marginRight: -6,
  },
  body: {
    ...fonts.medium(16),
    lineHeight: 22,
  },
  chips: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  choice: {
    height: 34,
    paddingHorizontal: 12,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  choiceLabel: fonts.heavy(14, 0.1),
});
