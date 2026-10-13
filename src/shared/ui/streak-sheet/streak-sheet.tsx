import FireIcon from '@hugeicons/core-free-icons/FireIcon';
import { HugeiconsIcon } from '@hugeicons/react-native';
import { BlurView } from 'expo-blur';
import { useEffect, useState } from 'react';
import { Modal, Pressable, ScrollView, StyleSheet, Text, View, useWindowDimensions } from 'react-native';
import Animated, {
  Easing,
  ReduceMotion,
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { accents, fonts, meterColors, palette, raised } from '@/shared/config';
import { readableOn } from '@/shared/lib/color';
import { useT } from '@/shared/lib/i18n';
import { useColorScheme } from '@/shared/lib/theme';
import { FluentIcon } from '@/shared/ui/fluent-icon';
import { Mascot, thumbsUpRig } from '@/shared/ui/mascot';
import { PrimaryButton } from '@/shared/ui/primary-button';
import { Raised, faceFor, useRaisedScheme } from '@/shared/ui/raised';
import { STAT_TILE_STAGGER_MS, StatTile } from '@/shared/ui/stat-tile';
import { StreakWeekRaised, streakWeekNodeSize } from '@/shared/ui/streak-week';

/** The card's corner. Generous, because a sheet this short with a small radius
 * reads as a bar stuck to the bottom of the screen rather than as a card. */
const RADIUS = 36;
/** Room between the card and the screen's edges, and inside the card. Small
 * enough that seven week nodes fit across a 390pt phone at their full size. */
const DOCK_PAD = 10;
const CARD_PAD = 16;

/** The thumbs-up beside the number: the sheet's one mascot. */
const MASCOT = 120;

/**
 * The streak lengths that get a moment: `STREAK_MILESTONES` in
 * `entities/program`, which this layer cannot import. Change both together.
 */
const MILESTONES = [3, 7, 10, 30, 100] as const;
const RUNG_LIP = 3;

/**
 * How hard the page behind is blurred.
 *
 * Enough to push it back and let the card come forward, not enough to hide
 * where the user was — the sheet is an aside, and an aside that erases its own
 * context reads as a screen change rather than as something laid on top.
 */
const BLUR = 28;

/** Out is quicker than in. Arriving wants to be watched; leaving is the user
 * having already decided, and a slow exit reads as the app hesitating. */
const IN_MS = 340;
const OUT_MS = 220;

/** How far the card travels. Enough to read as coming from below the screen,
 * short enough that it never looks like it is being thrown. */
const RISE = 44;

/** The mascot boings when tapped; there is nothing else for a tap to do. */
const noop = () => undefined;

export type StreakSheetProps = {
  visible: boolean;
  onClose: () => void;
  /** Consecutive attended days. */
  current: number;
  /** Attended days since the plan began: the "Showed up" tile. */
  total: number;
  /** Sunday-first, seven entries — the shape `StreakWeek` reads. */
  week: readonly boolean[];
  /**
   * The best run so far (`Streak.longest`). Without it the sheet leaves the
   * "Longest streak" tile out rather than guess, and the milestone ladder
   * counts from `current`.
   */
  longest?: number;
  /**
   * Sunday-first, seven entries: the days that counted only because the plan
   * said rest (`DayAttendance.rest`). With it, those days are drawn as rest
   * and the line about what counts gets the sleeping mascot when one fell this
   * week. Without it, every counted day is a flame and the line is plain.
   */
  rest?: readonly boolean[];
};

/**
 * What the streak means, opened from the capsule that shows it.
 *
 * A bottom sheet sized to its contents, not a page. The run is the big orange
 * number with the flame and the mascot's thumbs up beside it; under it the
 * week as raised nodes, three tiles (the run, every day shown up, the best
 * run), the line that says what counts, and the ladder of milestones. A day
 * not attended is an empty node like a day still to come, so nothing here
 * ever counts what was lost.
 *
 * The week is the argument, not the decoration. Reading "you showed up Monday,
 * Tuesday and today" off seven nodes is what makes the headline checkable, and
 * a number the user can check is one they will still trust on the morning it
 * says something they did not expect.
 */
export function StreakSheet({ visible, onClose, current, total, week, longest, rest }: StreakSheetProps) {
  const scheme = useColorScheme();
  const colors = palette[scheme];
  const meter = meterColors[scheme];
  const insets = useSafeAreaInsets();
  const { width } = useWindowDimensions();
  const t = useT();

  /**
   * Mounted separately from `visible`, which is the whole trick.
   *
   * A `Modal` driven straight off the caller's flag is torn down the instant
   * the flag clears, so there is no longer anything on screen for an exit
   * animation to play on — reanimated's `exiting` never runs, and the sheet
   * simply blinks out. Owning the mount means the flag starts the *transition*
   * and the transition decides when the modal actually goes.
   */
  const [mounted, setMounted] = useState(false);
  /** 0 away, 1 arrived. One number drives the blur, the wash and the card, so
   * they cannot arrive or leave at different times.
   *
   * Named `progress` rather than `t`, which is now the translator in every file
   * that renders a string. */
  const progress = useSharedValue(0);

  useEffect(() => {
    if (visible) {
      setMounted(true);
      // A frame late on purpose: the modal has to exist before the transition
      // starts, or the first frames play against nothing and the card appears
      // already half-way up.
      const frame = requestAnimationFrame(() => {
        progress.value = withTiming(1, {
          duration: IN_MS,
          easing: Easing.out(Easing.cubic),
          reduceMotion: ReduceMotion.System,
        });
      });
      return () => cancelAnimationFrame(frame);
    }

    progress.value = withTiming(
      0,
      { duration: OUT_MS, easing: Easing.in(Easing.cubic), reduceMotion: ReduceMotion.System },
      (finished) => {
        // Only when it ran to the end. Reopening mid-exit cancels this timing,
        // and unmounting then would pull the sheet out from under the animation
        // that is already bringing it back.
        if (finished) runOnJS(setMounted)(false);
      },
    );
    return undefined;
  }, [visible, progress]);

  /** The page behind, fading rather than dimming in steps. Opacity and not
   * `intensity`: expo-blur still tints its backdrop at zero, so a blur animated
   * down to nothing leaves a visible wash behind — the note in
   * `liquid-glass/copy.tsx` is about exactly this. */
  const backdrop = useAnimatedStyle(() => ({ opacity: progress.value }));

  const dock = useAnimatedStyle(() => ({
    opacity: progress.value,
    transform: [{ translateY: (1 - progress.value) * RISE }],
  }));

  if (!mounted) return null;

  // Large text, so 3:1 is the bar: the light scheme's orange needs a nudge
  // darker to reach it on white, the dark one is already there.
  const flame = readableOn(accents[scheme].orange.fill, colors.card, 3);
  const best = Math.max(longest ?? current, current);
  const nextMilestone = MILESTONES.find((days) => days > best);
  const nodeSize = streakWeekNodeSize(width - DOCK_PAD * 2 - CARD_PAD * 2);

  return (
    <Modal
      // Transparent, so the page stays visible behind the sheet. `pageSheet`
      // was doing the one thing this must not: taking the whole screen for an
      // aside the user can dismiss without answering.
      transparent
      animationType="none"
      // Unconditionally true, not `visible`. The component returns null until
      // it is mounted and stays mounted until the exit finishes, so by the time
      // this renders the modal always should be up — and handing it the
      // caller's flag instead would snap it shut on the first frame of the exit,
      // which is the very thing owning the mount was meant to prevent.
      visible
      statusBarTranslucent
      onRequestClose={onClose}>
      {/* Driven by hand rather than by `entering`/`exiting` builders. Two
          reasons, both learned here: an entering builder that fails to run
          leaves its subject stranded at opacity 0 — `GiftSheet` carries a note
          about a `FadeIn` that did exactly that, twice — and an exiting builder
          cannot run at all inside a modal whose visibility is what removed it.
          One shared value sidesteps both and keeps the two directions
          symmetrical. */}
      <View style={styles.fill}>
        {/* The app itself, pushed back. A flat scrim would dim the page; a
            blur keeps it recognisable while making it unmistakably the
            background — which is what says this is something laid on top
            rather than somewhere the user has navigated to. */}
        <Animated.View style={[styles.fill, backdrop]} pointerEvents="none">
          <BlurView
            tint={scheme === 'dark' ? 'dark' : 'light'}
            intensity={BLUR}
            style={styles.fill}
          />
          <View style={[styles.fill, styles.wash]} />
        </Animated.View>

        {/* Tapping away closes it. Nothing here has to be answered, and a sheet
            that explains something should never trap the person reading it. */}
        <Pressable
          accessibilityRole="button"
          accessibilityLabel={t('common.close')}
          style={styles.fill}
          onPress={onClose}
        />

        {/* The whole height, with the card pushed to its foot: on a short phone
            the card stops under the status bar and its body scrolls, rather
            than running off the top. Touches above the card fall through to
            the backdrop. */}
        <Animated.View
          style={[
            styles.dock,
            { paddingTop: insets.top + 12, paddingBottom: Math.max(insets.bottom, 16) },
            dock,
          ]}
          pointerEvents="box-none">
          <View style={[styles.card, { backgroundColor: colors.card }]}>
            <ScrollView
              style={styles.scroll}
              contentContainerStyle={styles.body}
              bounces={false}
              showsVerticalScrollIndicator={false}>
              <View style={styles.hero}>
                {/* One element for the figure and its words: read apart, the
                    number is a bare figure after an unnamed glyph. */}
                <View
                  style={styles.count}
                  accessible
                  accessibilityRole="header"
                  accessibilityLabel={t('streakSheet.inARow', { count: current })}>
                  <View style={styles.number}>
                    <FluentIcon name="fire" size={48} />
                    <Text
                      style={[styles.big, { color: flame }]}
                      numberOfLines={1}
                      adjustsFontSizeToFit
                      maxFontSizeMultiplier={1.2}>
                      {current}
                    </Text>
                  </View>
                  {/* One key, not "{count} days" plus " in a row": Russian
                      closes with "подряд" after both, French with
                      "d'affilée", and no ordering of two English fragments
                      reaches either. */}
                  <Text style={[styles.caption, { color: colors.foreground }]} maxFontSizeMultiplier={1.3}>
                    {t('streakSheet.inARow', { count: current })}
                  </Text>
                </View>
                {/* Thumbs up for any run at all; at zero he only stands there,
                    since there is nothing yet to be pleased about and nothing
                    to be sorry for either. Paused while the sheet leaves. */}
                <Mascot
                  rig={thumbsUpRig}
                  size={MASCOT}
                  state={current > 0 ? 'happy' : 'idle'}
                  paused={!visible}
                  surface={colors.card}
                  onPress={noop}
                />
              </View>

              <View style={styles.block}>
                <StreakWeekRaised done={week} rest={rest} size={nodeSize} />
              </View>

              {/* Showing up and runs only: never a pain figure, never a test. */}
              <View style={[styles.block, styles.tiles]}>
                <StatTile
                  label={t('streakSheet.current')}
                  value={current}
                  emoji="fire"
                  accent="orange"
                  accessibilityLabel={t('streakSheet.currentA11y', { count: current })}
                />
                <StatTile
                  label={t('streakSheet.showedUp')}
                  value={total}
                  emoji="seedling"
                  accent="teal"
                  delayMs={STAT_TILE_STAGGER_MS}
                  accessibilityLabel={t('streakSheet.showedUpA11y', { count: total })}
                />
                {longest != null && (
                  <StatTile
                    label={t('streakSheet.longest')}
                    value={best}
                    emoji="trophy"
                    accent="amber"
                    delayMs={STAT_TILE_STAGGER_MS * 2}
                    accessibilityLabel={t('streakSheet.longestA11y', { count: best })}
                  />
                )}
              </View>

              {/* What counts, said calmly. The rule is the thing the number
                  cannot say on its own, and "a check-in or a session or a rest
                  day" is a far kinder rule than the one a user assumes. No
                  figure of its own: the thumbs up above is the sheet's one
                  mascot, and the moon on the row already marks a rest day. */}
              <View style={[styles.block, styles.calm, { backgroundColor: colors.background }]}>
                <View style={styles.calmText}>
                  <Text style={[styles.calmTitle, { color: colors.foreground }]}>
                    {t('streakSheet.allCount')}
                  </Text>
                  <Text style={[styles.calmRule, { color: meter.caption }]}>{t('streak.rule')}</Text>
                </View>
              </View>

              {/* The ladder. Reached rungs stand up in orange and stay reached
                  whatever the run does next, so it counts from the best run;
                  the next one is in the brand violet, the rest wait in grey. */}
              <View style={[styles.block, styles.ladder]}>
                {MILESTONES.map((days) => {
                  const reached = days <= best;
                  return (
                    <Rung
                      key={days}
                      days={days}
                      tone={reached ? 'orange' : days === nextMilestone ? 'primary' : 'neutral'}
                      label={
                        reached
                          ? t('streakSheet.milestoneReached', { count: days })
                          : t('streakSheet.milestoneAhead', { count: days })
                      }
                    />
                  );
                })}
              </View>
            </ScrollView>

            {/* "Got it", not "Claim". This hands over an explanation, and a
                button promising something to collect would be writing a cheque
                the app cannot cash. The app's own committing button, as it
                always was here. */}
            <PrimaryButton label={t('streak.dismiss')} onPress={onClose} style={styles.cta} />
          </View>
        </Animated.View>
      </View>
    </Modal>
  );
}

/**
 * One milestone: a chip standing on its lip with the flame and the day count.
 * `neutral` is one not reached yet; a tone names a state of the ladder, never
 * a verdict.
 */
function Rung({ days, tone, label }: { days: number; tone: 'orange' | 'primary' | 'neutral'; label: string }) {
  const scheme = useRaisedScheme();
  const tokens = raised[scheme];
  const colours =
    tone === 'neutral'
      ? { face: tokens.surface, edge: tokens.edge, lip: tokens.lip, label: meterColors[scheme].label }
      : { ...faceFor(scheme, tone), edge: undefined };
  return (
    <Raised
      face={colours.face}
      edge={colours.edge}
      lip={colours.lip}
      depth={RUNG_LIP}
      radius={12}
      accessibilityRole="text"
      accessibilityLabel={label}
      style={styles.rungOuter}
      contentStyle={styles.rung}>
      <HugeiconsIcon icon={FireIcon} size={15} color={colours.label} strokeWidth={2.4} />
      <Text style={[styles.rungLabel, { color: colours.label }]} numberOfLines={1} maxFontSizeMultiplier={1.3}>
        {days}
      </Text>
    </Raised>
  );
}

const styles = StyleSheet.create({
  fill: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  /** A trace of ink over the blur. Blur alone leaves a bright page bright, and
   * the card needs something to sit against on the light scheme. */
  wash: {
    backgroundColor: 'rgba(0,0,0,0.18)',
  },
  dock: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'flex-end',
    paddingHorizontal: DOCK_PAD,
  },
  card: {
    flexShrink: 1,
    borderRadius: RADIUS,
    borderCurve: 'continuous',
    paddingTop: 6,
    paddingBottom: 16,
    overflow: 'hidden',
  },
  /** Its content's height until the screen runs out, then it scrolls. Full
   * width of the card, its padding inside: a scroll view clips what is drawn
   * past it, and the mascot's hop and arms reach past his own square. */
  scroll: {
    flexGrow: 0,
    flexShrink: 1,
  },
  body: {
    paddingHorizontal: CARD_PAD,
    // The height of his hop, so the top of it is not cut off.
    paddingTop: 16,
    paddingBottom: 4,
  },
  hero: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 8,
  },
  count: {
    flex: 1,
    paddingLeft: 4,
  },
  number: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  big: { ...fonts.heavy(68, -2.4), flexShrink: 1 },
  caption: { ...fonts.heavy(19, -0.4), marginTop: -2 },
  block: {
    marginTop: 18,
  },
  tiles: {
    flexDirection: 'row',
    gap: 8,
  },
  calm: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    padding: 12,
    borderRadius: 20,
    borderCurve: 'continuous',
  },
  calmText: {
    flex: 1,
    gap: 4,
  },
  calmTitle: fonts.semibold(15, -0.1),
  calmRule: { ...fonts.medium(13), lineHeight: 18 },
  ladder: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rungOuter: {
    alignSelf: 'flex-start',
  },
  rung: {
    height: 30,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  rungLabel: fonts.heavy(14, 0.1),
  cta: {
    marginTop: 16,
    marginHorizontal: CARD_PAD,
  },
});
