import ArrowRight01Icon from '@hugeicons/core-free-icons/ArrowRight01Icon';
import StethoscopeIcon from '@hugeicons/core-free-icons/StethoscopeIcon';
import Tick02Icon from '@hugeicons/core-free-icons/Tick02Icon';
import { HugeiconsIcon } from '@hugeicons/react-native';
import { GlassView, isLiquidGlassAvailable } from 'expo-glass-effect';
import * as Haptics from 'expo-haptics';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { useEffect, useMemo, useRef, useState } from 'react';
import { Image, Modal, Pressable, StyleSheet, Text, useWindowDimensions, View } from 'react-native';
import Animated, {
  Easing,
  ReduceMotion,
  interpolate,
  interpolateColor,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';

import { useSafeAreaInsets } from 'react-native-safe-area-context';

import {
  PROGRAM,
  TODAY_INDEX,
  currentDay,
  isFirstStepTime,
  painOn,
  logPain,
  settleOffset,
  type ProgramDay,
  exerciseById,
} from '@/entities/program';
import { accents, fonts, meterColors, palette, primaryButton } from '@/shared/config';
import { useT, type Key } from '@/shared/lib/i18n';
import { PROGRAM_EASING, PROGRAM_MS } from '@/shared/lib/program';
import { AnimatedNumber } from '@/shared/ui/animated-number';
import { PrimaryButton } from '@/shared/ui/primary-button';
import { REPLAY_MASK } from '@/shared/ui/replay-mask';
import { useSplashRevealed } from '@/shared/ui/splash';
import { useColorScheme } from '@/shared/lib/theme';

import { SessionView } from '@/widgets/session-player';

import { LegMap, MAX_ZONES, ZONE_LABEL_KEYS, toggleZone, type LegZone } from '@/entities/leg-zone';

import { reliefIdsFor } from '../model/zone-relief';

import { PAIN_MAX, PAIN_MIN, PainScale, painBand, painColor } from './pain-scale';
import { SafetySheet } from './safety-sheet';

const PRESS_MS = 90;
const SELECT_MS = 260;
const SELECT_EASING = Easing.bezier(0.23, 1, 0.32, 1);

/** The card's corner, and the tiles' — nested, so the inner radius is the
 * outer one less the padding between them. */
const CARD_RADIUS = 28;
const CARD_PAD = 18;
const TILE_RADIUS = CARD_RADIUS - CARD_PAD / 2;

/** The answer cards: glass, overlapping and tipped a few degrees apart, so the
 * pair reads as two cards dropped on the screen rather than two cells of a
 * grid. */
const GLASS_RADIUS = 36;
const GLASS_WIDTH = '62%';
const STAGGER = 34;
const TILT = 5;
const GLASS_HEIGHT = 182;

/** The title is a key, resolved where the card is drawn — so the pair repaints
 * with the language rather than at next launch. */
const CARDS = [
  {
    key: 'pain',
    title: 'home.itHurts',
    art: require('@assets/home/mascot-pain.png'),
    /** Leading card: sits high and left, tipped anticlockwise. */
    side: 'left',
  },
  {
    key: 'nopain',
    title: 'home.noPain',
    art: require('@assets/home/mascot-nopain.png'),
    side: 'right',
  },
] as const satisfies readonly { key: string; title: Key; art: unknown; side: 'left' | 'right' }[];

type CardKey = (typeof CARDS)[number]['key'];

export type PainCheckProps = {
  /** Fired once the day's answer is in. `painless` is what the celebration and
   * the reordering above both key off — a good day is worth marking, and either
   * way the question is done and should stop holding the top of the screen. */
  onLogged?: (painless: boolean) => void;
};

/**
 * Today's check-in: does it hurt, or not.
 *
 * Two cards rather than a toggle or a slider. The answer changes what the plan
 * does tomorrow, so it deserves to be the size of a decision — and having both
 * outcomes visible at once means neither is the default that gets tapped
 * without reading.
 *
 * One card holds the whole question: a kicker that says what this is and how
 * long it takes, the question itself, the two answers as tiles and the one
 * button that commits. It used to be grey centred text floating over two
 * tilted cards, with the button and the link drifting underneath — four
 * things that did not look like they belonged to each other.
 *
 * Picking a tile tints it violet. That is the app's colour for "selected",
 * the same for either answer: it says which one you chose, never whether it
 * was the good one.
 *
 * Choosing and confirming are separate. Each card used to carry its own Log
 * button, which asked the same question twice and put two loud primaries side
 * by side. Now a tap picks — the chosen card comes level and forward while the
 * other tips away — and one primary underneath commits it.
 */
export function PainCheck({ onLogged }: PainCheckProps) {
  const scheme = useColorScheme();
  const meter = meterColors[scheme];
  const t = useT();
  const [selected, setSelected] = useState<CardKey | null>(null);
  const [open, setOpen] = useState(false);
  /** The red-flag check, behind "Something new?". */
  const [safety, setSafety] = useState(false);
  /** Before noon the question is about the first steps out of bed; after it,
   * about the day. Read per render, so a screen left open across noon follows. */
  const morning = isFirstStepTime(Date.now());
  /**
   * Whether a check-in has been made since this screen was opened.
   *
   * It softens the question rather than closing it. The button used to read
   * "Logged for today" and stay disabled, which made a day one answer: somebody
   * whose foot hurt at seven, settled by noon and hurt again after a walk had
   * nowhere to say so. A day is not one answer, and the log now holds as many
   * as are given.
   *
   * What it still does is stop a second commit landing by accident — the block
   * does not go away once answered, it slides under the task list and stays on
   * screen, so without this, scrolling back to it would re-fire the confetti.
   * Picking a card again clears it.
   */
  const [logged, setLogged] = useState(false);
  /**
   * What the app says back, once the answer is in.
   *
   * Held here rather than in the sheet because the sheet is not somewhere an
   * acknowledgement can be read: under the relief line it closes itself in the
   * same handler that saves, and over it the offload slides across the pane a
   * beat later. This block is the one place every path ends up looking at —
   * including "No pain today", which never opens the sheet at all.
   */
  const [ack, setAck] = useState<string | null>(null);
  const ackTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(
    () => () => {
      if (ackTimer.current != null) clearTimeout(ackTimer.current);
    },
    [],
  );

  /**
   * Say it after the swap, not during it.
   *
   * Logging is what sends this block under the task list, and that crossing is
   * measured off both blocks' heights — a line appearing here mid-flight would
   * change one of them and jolt the list arriving over it. By the time the
   * motion is paid off the height can grow freely.
   */
  const acknowledge = (score: number, text: string = t(acknowledgement(score))) => {
    ackTimer.current = setTimeout(() => setAck(text), PROGRAM_MS);
  };

  /**
   * The answer, written down, then said back.
   *
   * Everything downstream of this screen reads the log rather than this
   * component: the streak counts the check-in, the morning line ranks off it,
   * and tomorrow's session is adapted from it. Held only in local state the
   * answer would survive exactly as long as the screen does, and the app would
   * spend the rest of the day acting as though nobody had been asked.
   *
   * The write goes first and the acknowledgement second, because the
   * acknowledgement is a timeout — an answer that only reached storage after
   * `PROGRAM_MS` would be lost by anyone who logged and immediately left.
   */
  const record = (score: number, zones: readonly LegZone[], said?: string) => {
    logPain(currentDay(), score, zones);
    // The morning's answer is what moves the plan a step back or lets it return.
    settleOffset(currentDay());
    acknowledge(score, said);
  };

  /**
   * An answer started on the home-screen widget.
   *
   * The widget's two cards open the app on `?checkin=fine` or `?checkin=hurts`
   * rather than recording anything themselves — the app is where an answer is
   * taken and said back. "No pain" is recorded here, the same way the card and
   * button on this screen record it, and acknowledged in words that say it was
   * recorded. "It hurts" opens the sheet, because the number and the place are
   * the answer and neither can be given on the home screen.
   *
   * The parameter is cleared once read, so the same link tapped again later is
   * a new request rather than an unchanged one React never sees.
   *
   * Held until the launch splash has opened. A widget tap is usually a cold
   * start, and a sheet opened at mount sat above the splash while its zoom
   * played behind it; the acknowledgement for "no pain" was said to nobody.
   */
  const router = useRouter();
  const { checkin } = useLocalSearchParams<{ checkin?: string }>();
  const revealed = useSplashRevealed();
  useEffect(() => {
    if (checkin !== 'fine' && checkin !== 'hurts' && checkin !== 'open') return;
    if (!revealed) return;
    router.setParams({ checkin: undefined });
    if (checkin === 'fine') {
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
      setSelected('nopain');
      setLogged(true);
      onLogged?.(true);
      record(0, [], t('widget.ackNoPain'));
    } else if (checkin === 'hurts') {
      setSelected('pain');
      setLogged(false);
      setOpen(true);
    }
    // `open` only lands here: the question is on screen, answered or not.
    // Keyed on the request alone. `record` and `onLogged` are fresh closures
    // every render, and re-running for them would record the answer twice.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [checkin, revealed]);

  return (
    <>
      <View style={styles.wrap}>
        <View style={styles.block} {...REPLAY_MASK}>
          <View style={styles.head}>
            <Text style={[styles.kicker, { color: meter.label }]}>
              {morning ? t('home.checkInKickerMorning') : t('home.checkInKickerDay')}
            </Text>
            <Text accessibilityRole="header" style={[styles.question, { color: palette[scheme].foreground }]}>
              {morning ? t('home.checkInSubMorning') : t('home.checkInSubDay')}
            </Text>
          </View>

          <View style={glass.stage} accessibilityRole="radiogroup">
            {CARDS.map((card) => (
              <PainCard
                key={card.key}
                card={card}
                selected={selected === card.key}
                // Nothing is chosen when the screen arrives, so both sit at full
                // strength: dimming everything would read as disabled.
                dimmed={selected != null && selected !== card.key}
                // Not locked once answered. The cards stay live so a second
                // check-in can be started from the same place as the first.
                locked={false}
                onPress={() => {
                  Haptics.selectionAsync();
                  setSelected(card.key);
                  // Re-opens the question. Without this the button would still
                  // read "Check in again" after a fresh choice had been made.
                  setLogged(false);
                }}
              />
            ))}
          </View>

          {/* Only once a tile is picked. Disabled, it was a big grey slab under
              two answers that already read as the thing to tap. */}
          {selected != null && (
            <PrimaryButton
              label={logged ? t('home.checkInAgain') : t('home.logCheckIn')}
              onPress={() => {
                Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
                // "No pain today" is already the whole answer. Opening a slider to
                // ask how much of the nothing there was would be the app refusing
                // to take yes for an answer.
                if (selected === 'nopain') {
                  setLogged(true);
                  onLogged?.(true);
                  // A real zero, not an absent reading. The engine treats null as
                  // "they have not been asked yet" and would go on adapting today
                  // off yesterday's number; "no pain today" is an answer and has to
                  // be stored as one.
                  // No zones: nothing hurts, so there is nowhere to point at.
                  record(0, []);
                  return;
                }
                setOpen(true);
              }}
            />
          )}

          {ack != null && (
            <Text accessibilityLiveRegion="polite" style={[styles.ack, { color: meter.caption }]}>
              {ack}
            </Text>
          )}
        </View>

        <SomethingNewRow onPress={() => setSafety(true)} />
      </View>

      <SafetySheet visible={safety} onClose={() => setSafety(false)} />

      <Modal animationType="slide" presentationStyle="pageSheet" visible={open} onRequestClose={() => setOpen(false)}>
        <Sheet
          onClose={() => setOpen(false)}
          onSaved={(score, zones) => {
            setLogged(true);
            onLogged?.(false);
            record(score, zones);
          }}
        />
      </Modal>
    </>
  );
}

/**
 * What this person's days normally look like.
 *
 * Their own last thirty entries, not a clinical norm. "Above usual" has to mean
 * above usual *for you* — a 4 is an ordinary Tuesday for one person and the
 * worst month of the year for another, and a fixed threshold would tell one of
 * them something false every single day.
 */
const USUAL_WINDOW = 30;
/** Fewer readings than this and there is no ordinary day to describe yet. */
const USUAL_MIN_READINGS = 3;

function usualRange(): { low: number; high: number } {
  const today = currentDay();
  const logged: number[] = [];
  for (let day = Math.max(1, today - USUAL_WINDOW); day < today; day += 1) {
    const pain = painOn(day);
    // Only real answers. A day nobody logged is not a quiet day, and counting
    // it as one is what dragged the range down to a flat zero on a fresh
    // install — the scale then hatched its whole length as "outside your
    // usual" and put both edge marks on the same pixel.
    if (pain != null) logged.push(pain);
  }
  if (logged.length < USUAL_MIN_READINGS) return { low: PAIN_MIN, high: PAIN_MAX };
  return { low: Math.min(...logged), high: Math.max(...logged) };
}

/**
 * Where a check-in stops being a note and becomes a decision.
 *
 * Seven, matching the first rung of the copy ladder: at seven and above the
 * plan stops asking for work and starts unloading. Below it the sheet has
 * nothing to add that the number did not already say.
 */
const RELIEF_ABOVE = 6;

/** How far the check-in slides under the arriving session — the same fraction
 * the program's own push uses. */
const PUSH_PARALLAX = 0.3;

/**
 * One line back, for the answer that was just given.
 *
 * Three registers, and the ladder only ever goes one way: a quiet "good" for a
 * day with nothing in it, a plain receipt in the middle, and above the relief
 * line the one thing worth saying — what the app has already done about it.
 * Nothing here congratulates a number, because a 7 is not an achievement and
 * being met with warmth for reporting one teaches people to stop reporting.
 *
 * The second sentence is pinned to `RELIEF_ABOVE` rather than to a copy band,
 * because it is a claim about the day's session and it has to be true: at six
 * and below nothing about today changes, so nothing about today is promised.
 */
function acknowledgement(score: number): Key {
  if (score <= 2) return 'home.ackGood';
  if (score <= RELIEF_ABOVE) return 'home.ackLogged';
  return 'home.ackLoggedShorter';
}

/**
 * What a sore day gets instead of the programme.
 *
 * Today's slot, rewritten as recovery. Not the session that was scheduled: the
 * whole point of asking is that the answer can change the day, and handing
 * someone at eight out of ten the strength work they were down for would make
 * the question decorative.
 */
function reliefDay(): ProgramDay {
  return { ...PROGRAM[TODAY_INDEX], kind: 'recovery', minutes: 3, checkpoint: false };
}

/**
 * Today's number.
 *
 * One question, one gesture, and the whole sheet answers to it: the digits, the
 * words under them, the colour of the wedge and the colour of the button that
 * commits it are all the same value said five ways. That redundancy is the
 * point — the answer decides what tomorrow's session is, and it should be
 * impossible to log a 7 while thinking you logged a 3.
 */
/**
 * "Something new?" on Home: the way to the red-flag check, as a row of its own.
 *
 * It was an underlined line of grey text, which read as a footnote — and the
 * thing it opens is the one screen in the app that can say "see a doctor".
 * A tile, a title, the examples on a line of their own and a chevron make it
 * read as somewhere you can go, without making it loud. The stethoscope is
 * neutral on purpose: the row asks a question, it does not raise an alarm.
 */
function SomethingNewRow({ onPress }: { onPress: () => void }) {
  const scheme = useColorScheme();
  const colors = palette[scheme];
  const meter = meterColors[scheme];
  const t = useT();
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={t('home.somethingNew')}
      onPress={() => {
        Haptics.selectionAsync();
        onPress();
      }}
      style={({ pressed }) => [styles.newRow, { backgroundColor: colors.card }, pressed && { opacity: 0.7 }]}
    >
      <View style={[styles.newTile, { backgroundColor: meter.iconTile }]}>
        <HugeiconsIcon icon={StethoscopeIcon} size={21} color={colors.foreground} strokeWidth={1.8} />
      </View>
      <View style={styles.newCopy}>
        <Text numberOfLines={1} style={[styles.newTitle, { color: colors.foreground }]}>
          {t('home.somethingNewTitle')}
        </Text>
        <Text numberOfLines={1} style={[styles.newSub, { color: meter.caption }]}>
          {t('home.somethingNewSub')}
        </Text>
      </View>
      <HugeiconsIcon icon={ArrowRight01Icon} size={20} color={meter.caption} strokeWidth={2} />
    </Pressable>
  );
}

/** The same way in, inside the check-in sheet, where the height is spoken for
 * and a line of text is all there is room for. */
function SomethingNew({ onPress }: { onPress: () => void }) {
  const scheme = useColorScheme();
  const meter = meterColors[scheme];
  const t = useT();
  return (
    <Pressable
      accessibilityRole="button"
      onPress={() => {
        Haptics.selectionAsync();
        onPress();
      }}
      hitSlop={8}
      style={({ pressed }) => [styles.somethingNew, pressed && { opacity: 0.5 }]}
    >
      <Text style={[styles.somethingNewText, { color: meter.caption }]}>{t('home.somethingNew')}</Text>
    </Pressable>
  );
}

function Sheet({
  onClose,
  onSaved,
}: {
  onClose: () => void;
  /** Carries the number up with it: the block above owns what gets said back,
   * and it cannot say the right thing without knowing what was logged. The
   * zones travel the same way, so the write stays in one place. */
  onSaved: (score: number, zones: readonly LegZone[]) => void;
}) {
  const scheme = useColorScheme();
  const colors = palette[scheme];
  const meter = meterColors[scheme];
  const insets = useSafeAreaInsets();
  const { width } = useWindowDimensions();
  const t = useT();

  /**
   * Where it hurts, if they said. Optional on purpose — the number is the
   * question this sheet exists to ask, and making the map compulsory would put
   * a second obligation in front of a check-in whose whole value is that it
   * takes a moment.
   */
  const [zones, setZones] = useState<readonly LegZone[]>([]);
  /** Set when a fourth zone is refused, cleared by the next accepted tap. The
   * map has to answer every tap — see `toggleZone`. */
  const [zonesFull, setZonesFull] = useState(false);
  const [safety, setSafety] = useState(false);
  const morning = isFirstStepTime(Date.now());
  const onZoneTap = (zone: LegZone) => {
    const next = toggleZone(zones, zone);
    if (next == null) {
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Warning);
      setZonesFull(true);
      return;
    }
    Haptics.selectionAsync();
    setZonesFull(false);
    setZones(next);
  };

  /**
   * The exercises that match where it hurts, as titles.
   *
   * Titles rather than ids because that is what the player takes — see the note
   * on `moves` in `SessionView`. Recomputed as the map changes, so the session
   * waiting behind the button is always the one for what is currently marked.
   *
   * `t` is in the dependencies because `exercise.title` resolves against the
   * active language on read. Without it a language change would leave this memo
   * holding titles in the language the sheet was opened in.
   */
  const reliefMoves = useMemo(() => reliefIdsFor(zones).map((id) => exerciseById(id).title), [zones, t]);

  const usual = useMemo(usualRange, []);
  /** Held steady across renders: a fresh object every frame would hand the
   * player a new `day` on each one. */
  const relief = useMemo(reliefDay, []);
  /** Opens on the middle of their usual range rather than on zero. Zero is a
   * claim, and a slider that starts on one collects a lot of accidental zeros
   * from people who only meant to close the sheet. */
  const [score, setScore] = useState(() => Math.round((usual.low + usual.high) / 2));
  const [logged, setLogged] = useState(false);
  /** Mounted only once the offload is actually on its way in — the player owns
   * a video and a frame callback, and neither should be running behind a screen
   * most check-ins never leave. */
  const [relieving, setRelieving] = useState(false);

  /** 0 the check-in, 1 the session it opened. Same two-pane push the program
   * uses, on the same duration and curve, so the app only has one way of
   * getting from a list to the thing on it. */
  const push = useSharedValue(0);

  const band = painBand(score);
  const tone = painColor(score, scheme);

  const checkPane = useAnimatedStyle(() => ({
    transform: [{ translateX: -push.value * width * PUSH_PARALLAX }],
  }));
  const reliefPane = useAnimatedStyle(() => ({
    transform: [{ translateX: (1 - push.value) * width }],
  }));

  const save = () => {
    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
    setLogged(true);
    onSaved(score, zones);
    /**
     * Under the line and with nothing marked, the answer is filed and the
     * sheet's job is done.
     *
     * Marking a zone overrides the number. Someone who took the trouble to
     * point at their achilles has asked a question, and closing on them would
     * make the map a survey — it would collect the answer and do nothing with
     * it. The score still decides whether the *programme* changes; this only
     * decides whether we show them the thing that helps.
     */
    if (score <= RELIEF_ABOVE && zones.length === 0) {
      onClose();
      return;
    }
    // Over it, closing would be the wrong answer to what was just said. A day
    // this sore is exactly the day the app has something to do about it, and
    // making the user find that thing themselves — back on Home, in a list, two
    // taps away — is how a check-in becomes a form nobody fills in twice.
    setRelieving(true);
    push.value = withTiming(1, {
      duration: PROGRAM_MS,
      easing: PROGRAM_EASING,
      reduceMotion: ReduceMotion.System,
    });
  };

  return (
    <View style={[styles.sheetRoot, { backgroundColor: colors.background }]} {...REPLAY_MASK}>
      <Animated.View style={[styles.sheet, { paddingBottom: Math.max(insets.bottom, 20) + 8 }, checkPane]}>
        <View style={[styles.grabber, { backgroundColor: meter.track }]} />

        <Text style={[styles.sheetTitle, { color: colors.foreground }]}>{t('home.checkInTitle')}</Text>
        <Text style={[styles.sheetSub, { color: meter.caption }]}>
          {morning ? t('home.checkInSubMorning') : t('home.checkInSubDay')}
        </Text>

        <View style={styles.readout}>
          <AnimatedNumber
            text={String(score)}
            value={score}
            color={colors.foreground}
            fontSize={104}
            weight="heavy"
            duration={0.25}
          />
        </View>

        <Text style={[styles.bandLabel, { color: colors.foreground }]}>{t(band.label)}</Text>

        {/* Where first, then how much.
          The place is the part the user has to look at the drawing to answer,
          and the scale is the part their thumb already knows — putting the
          drawing directly under the readout means the eye finishes one question
          before the hand starts the other. It also takes the leftover height,
          so the scale and the button keep theirs on a short screen. */}
        <View style={styles.legStage}>
          <LegMap selected={zones} onToggle={onZoneTap} />
        </View>
        <Text style={[styles.zoneLine, { color: meter.caption }]}>
          {zonesFull
            ? t('home.zonesFull', { count: MAX_ZONES })
            : zones.length === 0
              ? t('home.zonesEmpty', { count: MAX_ZONES })
              : t('home.zonesPicked', {
                  zones: zones.map((zone) => t(ZONE_LABEL_KEYS[zone])).join(t('home.zoneJoin')),
                  move: reliefMoves[0],
                })}
        </Text>

        <View style={styles.scale}>
          <PainScale score={score} onChange={setScore} usual={usual} />
        </View>

        <SomethingNew onPress={() => setSafety(true)} />
        <SafetySheet visible={safety} onClose={() => setSafety(false)} />

        <PrimaryButton
          label={logged ? t('home.saved') : t('home.save')}
          // The button is the colour of the answer it is about to commit. It is
          // the last thing under the thumb before the number is written down, and
          // carrying the same colour as the wedge is what makes it read as "save
          // *this*" rather than as a generic confirm.
          // Ink, not white. The fill sweeps the whole ramp, and every stop on
          // it is a light hue: white reads at roughly 1.9:1 through the amber
          // middle and never better than 3:1 at the red end, while ink clears 6:1
          // everywhere. This is exactly the pairing `tint`'s own doc asks the
          // caller to make rather than assume.
          tint={{ fill: tone, label: primaryButton.dark.label }}
          style={styles.save}
          onPress={save}
        />
      </Animated.View>

      {/* The offload, arriving from the right. It paints the page colour itself
          because it has to cover the check-in sliding underneath it, and it is
          the same colour the sheet is already painting, so there is no seam. */}
      <Animated.View style={[styles.pane, { backgroundColor: colors.background }, reliefPane]}>
        {relieving && <SessionView day={relief} moves={reliefMoves} onBack={onClose} />}
      </Animated.View>
    </View>
  );
}

function PainCard({
  card,
  selected,
  dimmed,
  locked,
  onPress,
}: {
  card: (typeof CARDS)[number];
  selected: boolean;
  dimmed: boolean;
  /** The day's answer is already in. The cards stay legible — they are the
   * record of what was chosen — but they stop taking a new one. */
  locked: boolean;
  onPress: () => void;
}) {
  const scheme = useColorScheme();
  const colors = palette[scheme];
  const hasGlass = isLiquidGlassAvailable();
  const t = useT();
  const title = t(card.title);

  const left = card.side === 'left';
  const pressed = useSharedValue(0);

  const chosen = useDerivedValue(
    () =>
      withTiming(selected ? 1 : 0, {
        duration: SELECT_MS,
        easing: Easing.bezier(0.23, 1, 0.32, 1),
        reduceMotion: ReduceMotion.System,
      }),
    [selected],
  );
  const faded = useDerivedValue(
    () =>
      withTiming(dimmed ? 1 : 0, {
        duration: SELECT_MS,
        easing: Easing.bezier(0.23, 1, 0.32, 1),
        reduceMotion: ReduceMotion.System,
      }),
    [dimmed],
  );

  /**
   * Picking a card straightens it and brings it forward; the other tips a
   * little further away and drops back. The tilt is what makes this read as a
   * choice rather than a checkbox — the chosen card is the one that has come
   * level with the screen.
   */
  const style = useAnimatedStyle(() => {
    const rest = left ? -TILT : TILT;
    const angle =
      interpolate(chosen.value, [0, 1], [rest, 0]) +
      interpolate(faded.value, [0, 1], [0, left ? -2 : 2]);
    return {
      transform: [
        { rotate: `${angle}deg` },
        { translateY: interpolate(chosen.value, [0, 1], [0, -6]) },
        { scale: 1 + chosen.value * 0.04 - faded.value * 0.04 - pressed.value * 0.02 },
      ],
    };
  });

  const ring = useAnimatedStyle(() => ({
    borderColor: interpolateColor(chosen.value, [0, 1], ['transparent', colors.foreground]),
  }));

  /**
   * The dim, as a scrim over the card rather than alpha around it.
   *
   * This used to be `opacity` on the wrapper above, which is an animated,
   * non-unit alpha on an ancestor of a GlassView — the one thing this project
   * has learned not to do (expo/expo#41024; see the note in
   * `app/layouts/program-overlay.tsx`). The glass does not recover when the
   * alpha returns to 1, so the first tap on either card permanently killed the
   * material on the other one. A veil in the page's own colour dims the card
   * just as well and leaves every ancestor at full alpha.
   */
  const scrim = useAnimatedStyle(() => ({ opacity: faded.value * 0.45 }));

  return (
    <Animated.View
      style={[
        glass.slot,
        left ? glass.slotLeft : glass.slotRight,
        // The chosen card has to be the one on top, or straightening it would
        // slide it under its neighbour.
        { zIndex: selected ? 2 : 1 },
        style,
      ]}>
      <Pressable
        accessibilityRole="radio"
        accessibilityState={{ selected, disabled: locked }}
        accessibilityLabel={title}
        disabled={locked}
        onPress={onPress}
        onPressIn={() => {
          pressed.value = withTiming(1, { duration: PRESS_MS });
        }}
        onPressOut={() => {
          pressed.value = withTiming(0, {
            duration: PRESS_MS * 2,
            easing: Easing.bezier(0.23, 1, 0.32, 1),
            reduceMotion: ReduceMotion.System,
          });
        }}
        style={glass.face}>
        {/* The glass is an absolute sibling under the content, never a parent
            of it: a GlassView nested inside another glass effect renders empty
            on iOS 26. Where liquid glass is unavailable the card falls back to
            the flat surface. */}
        {hasGlass ? (
          <GlassView glassEffectStyle="regular" style={[StyleSheet.absoluteFill, glass.shape]} />
        ) : (
          <View style={[StyleSheet.absoluteFill, glass.shape, { backgroundColor: colors.card }]} />
        )}
        <Animated.View style={[StyleSheet.absoluteFill, glass.shape, glass.ring, ring]} />

        <View style={glass.body}>
          <Image source={card.art} style={glass.art} resizeMode="contain" />
          <Text style={[glass.title, { color: colors.foreground }]}>{title}</Text>
        </View>

        {/* Last child, so it veils the artwork and the label as well as the
            glass. See `scrim` above for why this is not an opacity. */}
        <Animated.View
          pointerEvents="none"
          style={[
            StyleSheet.absoluteFill,
            glass.shape,
            { backgroundColor: colors.background },
            scrim,
          ]}
        />
      </Pressable>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  wrap: { gap: 12 },
  block: { gap: 16 },
  card: {
    borderRadius: CARD_RADIUS,
    borderCurve: 'continuous',
    padding: CARD_PAD,
    paddingTop: 20,
    gap: 16,
  },
  head: { gap: 6, paddingHorizontal: 2 },
  kicker: fonts.semibold(13, -0.1),
  question: { ...fonts.heavy(22, -0.6), lineHeight: 27 },
  tiles: { flexDirection: 'row', gap: 10 },
  tile: {
    flex: 1,
    borderRadius: TILE_RADIUS,
    borderCurve: 'continuous',
    borderWidth: 2,
  },
  tileBody: {
    alignItems: 'center',
    paddingTop: 12,
    paddingBottom: 14,
    paddingHorizontal: 10,
    gap: 4,
  },
  art: { width: 92, height: 92 },
  tileLabel: {
    ...fonts.bold(16, -0.3),
    lineHeight: 20,
    textAlign: 'center',
  },
  /** Top-right, out of the drawing's way. */
  radio: {
    position: 'absolute',
    top: 10,
    right: 10,
    width: 22,
    height: 22,
    borderRadius: 11,
    borderWidth: 1.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  ack: {
    ...fonts.medium(15),
    lineHeight: 21,
    marginTop: -4,
    paddingHorizontal: 2,
  },
  newRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
    paddingVertical: 14,
    paddingLeft: 14,
    paddingRight: 12,
    borderRadius: 22,
    borderCurve: 'continuous',
  },
  newTile: {
    width: 42,
    height: 42,
    borderRadius: 14,
    borderCurve: 'continuous',
    alignItems: 'center',
    justifyContent: 'center',
  },
  newCopy: { flex: 1, gap: 2 },
  newTitle: fonts.bold(16, -0.3),
  newSub: fonts.medium(14, -0.1),
  sheetRoot: { flex: 1 },
  /** Both panes fill the sheet and are moved by transform alone, so neither can
   * push the other around mid-transition. */
  pane: { position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 },
  sheet: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: 'center',
    paddingTop: 12,
    paddingHorizontal: 22,
  },
  grabber: { width: 40, height: 5, borderRadius: 3 },
  sheetTitle: {
    ...fonts.heavy(28, -0.7),
    marginTop: 18,
  },
  sheetSub: { ...fonts.regular(16), marginTop: 2 },
  /** Fixed height, because the digits are a SwiftUI host that does not
   * self-size reliably in flex — and because a readout that changed height
   * between "9" and "10" would nudge every word under it. */
  readout: {
    height: 124,
    justifyContent: 'center',
    marginTop: 8,
  },
  bandLabel: fonts.bold(22, -0.4),
  somethingNew: { alignSelf: 'center', paddingVertical: 6 },
  somethingNewText: {
    ...fonts.semibold(14),
    textAlign: 'center',
    textDecorationLine: 'underline',
  },
  /** Takes the slack, so the wedge sits against the button on a tall phone and
   * gives way before anything else on a short one. */
  scale: { alignSelf: 'stretch', justifyContent: 'center', marginTop: 4, marginBottom: 12 },
  /** Claims what is left after the readout and the scale, and hands it to the
   * drawing — the same measure-don't-guess the watch-sync step needed. */
  legStage: { flex: 1, alignSelf: 'stretch', alignItems: 'center', marginTop: 6 },
  zoneLine: {
    marginTop: 6,
    ...fonts.medium(13, -0.1),
    textAlign: 'center',
    marginBottom: 12,
  },
  save: { alignSelf: 'stretch' },
});

/** The answer cards, kept as they were before the check-in got its header. */
const glass = StyleSheet.create({
  stage: { height: GLASS_HEIGHT + STAGGER },
  slot: {
    position: 'absolute',
    width: GLASS_WIDTH,
    height: GLASS_HEIGHT,
  },
  slotLeft: { left: 0, top: 0 },
  slotRight: { right: 0, top: STAGGER },
  face: {
    borderRadius: GLASS_RADIUS,
    borderCurve: 'continuous',
    overflow: 'hidden',
  },
  /** The glass layer's own shape, matching the card's. */
  shape: {
    borderRadius: GLASS_RADIUS,
    borderCurve: 'continuous',
  },
  ring: {
    borderWidth: 2.5,
  },
  body: {
    height: GLASS_HEIGHT,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 12,
    gap: 6,
  },
  art: { width: 118, height: 118 },
  title: {
    ...fonts.bold(19, -0.3),
    textAlign: 'center',
  },
});
