import * as Haptics from 'expo-haptics';
import { useEffect, useRef, useState, type ReactNode } from 'react';
import { Alert, StyleSheet, View } from 'react-native';
import Animated, {
  Easing,
  ReduceMotion,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import { SafeAreaView } from 'react-native-safe-area-context';

import { useIntake } from '@/entities/profile';
import {
  GOAL_SPECS,
  finishTestDay,
  lastTestDayOutcome,
  postponeTest,
  todayKey,
  type TestDayOutcome,
} from '@/entities/program';
import { palette } from '@/shared/config';
import { useT } from '@/shared/lib/i18n';
import { useColorScheme } from '@/shared/lib/theme';

import { mirroredFor } from '../../model/mirror';
import {
  NOTHING_TAKEN,
  STATIONS,
  balanceLeg,
  legOrder,
  nextStation,
  segmentsFor,
  testWindowMs,
  toMeasurements,
  withTaken,
  type Station,
  type Taken,
} from '../../model/test-day';
import { TestDayHeader } from './test-day-header';
import { TestDayIntro } from './test-day-intro';
import { TestDayResults } from './test-day-results';
import { TestRunner } from './test-runner';
import { legLabel } from './test-meta';

export type TestDayFlowProps = {
  /** Closed: by the X, by Done on the results, or by "Test tomorrow". No
   * measurement is recorded by closing — only finishing the last test writes
   * the numbers. Two things are kept either way: today's check-in, when it
   * was answered on the intro, and "Test tomorrow", which moves the test.
   *
   * From this call on the flow is inert: its clip is paused and its clocks
   * stopped, because a host may keep it mounted off screen while it slides
   * away. Mount a fresh one — a new `key` — for the next opening. */
  onClose: () => void;
  /** After the numbers are written, once, with what they changed. */
  onSaved?: (outcome: TestDayOutcome) => void;
  /** Open straight on the last test's results, read-only. Falls back to the
   * intro when there has been no test yet. */
  review?: boolean;
};

type Screen = { at: 'intro' } | { at: 'test'; station: Station } | { at: 'results' };

const FADE_MS = 220;

/**
 * The whole test day, as one presented flow: what is coming, the three tests,
 * and what they found.
 *
 * It replaced a session-player mode that timed each test for a flat twenty
 * seconds and then asked for four numbers at the end, unexplained. Here every
 * test says what it is before it starts, counts in, runs a countdown to its
 * goal, and asks for its own figure straight after — so the only question is
 * "is that right?", about a number the person has just watched being counted.
 *
 * Finishing goes through `finishTestDay`, the one path that writes a test day:
 * the numbers, the session, the day log, the goals, the week and the sync, in
 * the order each needs. It is called exactly once, when the last figure is
 * confirmed. Closing before that discards every figure taken, and the test
 * stays due — today, or tomorrow once "Test tomorrow" has moved it.
 *
 * Paints its own page and keeps clear of the notch with a native safe area, so
 * a host mounts it as it is: in a page sheet, where the sheet already sits
 * below the status bar, or in a pane of its own, where it does not. Mount a
 * fresh one per opening (key it), as the session player is.
 */
export function TestDayFlow({ onClose, onSaved, review = false }: TestDayFlowProps) {
  const scheme = useColorScheme();
  const colors = palette[scheme];
  const t = useT();
  const side = useIntake()?.side ?? null;

  const [reviewed] = useState(() => (review ? lastTestDayOutcome() : null));
  /**
   * The plan day this test is for, and when it began — fixed as the flow
   * opens. A test begun before midnight and finished after it belongs to the
   * day it was begun on; see `finishTestDay`.
   */
  const [opened] = useState(() => ({ date: todayKey(), at: Date.now() }));
  const [screen, setScreen] = useState<Screen>(reviewed != null ? { at: 'results' } : { at: 'intro' });
  const [outcome, setOutcome] = useState<TestDayOutcome | null>(reviewed);
  const [taken, setTaken] = useState<Taken>(NOTHING_TAKEN);
  /** A clock has run: from here closing asks before it throws work away. */
  const [begun, setBegun] = useState(false);
  /** The second calf leg starts on the first one's button. */
  const [autoStart, setAutoStart] = useState(false);
  /** On the way out. Everything that counts, ticks or plays stops. */
  const [leaving, setLeaving] = useState(false);

  /** `finishTestDay` writes a test day; twice would be two sessions, two
   * pushes and a second set of goals moved on. */
  const saved = useRef(false);
  const onSavedRef = useRef(onSaved);
  onSavedRef.current = onSaved;

  const legs = legOrder(side);
  /** Only a leg the user named is "the sore one". */
  const soreKnown = side === 'left' || side === 'right';

  const close = () => {
    setLeaving(true);
    onClose();
  };

  const requestClose = () => {
    if (screen.at !== 'test' || !begun) {
      close();
      return;
    }
    Alert.alert(t('testday.leave.title'), t('testday.leave.body'), [
      { text: t('testday.leave.stay'), style: 'cancel' },
      { text: t('testday.leave.confirm'), style: 'destructive', onPress: close },
    ]);
  };

  const confirm = (station: Station, value: number) => {
    const next = withTaken(taken, station, value);
    setTaken(next);
    const following = nextStation(station);
    if (following != null) {
      setAutoStart(station.kind === 'calf' && station.leg === 0);
      setScreen({ at: 'test', station: following });
      return;
    }
    const measured = toMeasurements(next);
    if (measured == null || saved.current) return;
    saved.current = true;
    let result: TestDayOutcome;
    try {
      result = finishTestDay(measured, { date: opened.date, startedAt: opened.at });
    } catch (error) {
      // Thrown from a press, this would take the app down with the numbers.
      // Whatever was written before the throw stays written; the flow gets
      // out of the way rather than offering a second save that would record
      // the day twice.
      console.warn('[test-day] finishing failed:', error);
      close();
      return;
    }
    setOutcome(result);
    setScreen({ at: 'results' });
    void Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
    onSavedRef.current?.(result);
  };

  let content: ReactNode;
  let key: string;
  if (screen.at === 'results' && outcome != null) {
    key = 'results';
    content = <TestDayResults outcome={outcome} side={side} onDone={close} />;
  } else if (screen.at === 'test') {
    const { station } = screen;
    const { kind, leg } = station;
    // The calf test's two sets are the two legs, sore first; the balance test
    // stands on the sore one; the arch hold is on both feet.
    const measuredLeg = kind === 'calf' ? legs[leg] : kind === 'balance' ? balanceLeg(side) : null;
    key = `${kind}-${leg}`;
    content = (
      <TestRunner
        station={station}
        legLabel={measuredLeg == null ? null : legLabel(t, measuredLeg, soreKnown && measuredLeg === legs[0])}
        mirrored={measuredLeg == null ? mirroredFor(side) : measuredLeg === 'left'}
        // The second calf set is timed off the first: see `testWindowMs`.
        windowMs={testWindowMs(kind, GOAL_SPECS, kind === 'calf' && leg === 1 ? taken.calf[0] : null)}
        autoStart={autoStart}
        active={!leaving}
        nextLeg={kind === 'calf' && leg === 0 ? legLabel(t, legs[1], false) : null}
        last={nextStation(station) == null}
        onBegan={() => setBegun(true)}
        onConfirm={(value) => confirm(station, value)}
      />
    );
  } else {
    key = 'intro';
    content = (
      <TestDayIntro
        onStart={() => {
          setAutoStart(false);
          setScreen({ at: 'test', station: STATIONS[0] });
        }}
        onTomorrow={() => {
          // What the button says: the test moves to tomorrow, and today gets
          // back the day the week had there. Closing alone left the test on
          // today, and tomorrow never offered it.
          try {
            postponeTest();
          } catch (error) {
            console.warn('[test-day] postponing failed:', error);
          }
          close();
        }}
      />
    );
  }

  const position = screen.at === 'test' ? screen.station.kind : screen.at === 'results' ? 'results' : null;

  return (
    <View style={[styles.root, { backgroundColor: colors.background }]}>
      {/* Native, not the hook: the insets have to be this view's own. In a
          page sheet the top edge is already clear of the status bar and the
          hook would pad it a second time. */}
      <SafeAreaView edges={['top']} style={styles.root}>
        <TestDayHeader segments={segmentsFor(position)} onClose={requestClose} />
        <FadeIn key={key}>{content}</FadeIn>
      </SafeAreaView>
    </View>
  );
}

/**
 * Each step arrives by fading in over the last one's place, mounted fresh.
 *
 * By hand around one shared value rather than an `entering` builder: a builder
 * that fails to run leaves its subject at opacity 0, and here that would be a
 * test screen nobody can see.
 */
function FadeIn({ children }: { children: ReactNode }) {
  const opacity = useSharedValue(0);
  useEffect(() => {
    opacity.value = withTiming(1, {
      duration: FADE_MS,
      easing: Easing.out(Easing.cubic),
      reduceMotion: ReduceMotion.System,
    });
  }, [opacity]);
  const style = useAnimatedStyle(() => ({ opacity: opacity.value }));
  return <Animated.View style={[styles.root, style]}>{children}</Animated.View>;
}

const styles = StyleSheet.create({
  root: { flex: 1 },
});
