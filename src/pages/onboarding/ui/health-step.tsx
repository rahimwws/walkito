import * as Haptics from 'expo-haptics';
import {
  FireIcon,
  FootprintsIcon,
  HeartIcon,
  LockSimpleIcon,
} from 'phosphor-react-native';
import { useEffect, useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import Animated, {
  Easing,
  FadeIn,
  ReduceMotion,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withTiming,
} from 'react-native-reanimated';

import {
  connectHealth,
  healthAvailable,
  type HealthOutcome,
  type HealthSummary,
} from '@/entities/health';
import { PRIMARY, fonts, meterColors, palette } from '@/shared/config';
import { useColorScheme } from '@/shared/lib/theme';
import { PrimaryButton } from '@/shared/ui/primary-button';

/** The three figures we ask for, in the order Apple's own sheet lists them. */
const ROWS = [
  { key: 'steps', label: 'Steps', icon: FootprintsIcon, color: '#38BDF8' },
  { key: 'calories', label: 'Active Energy', icon: FireIcon, color: '#FB7185' },
  { key: 'heartRate', label: 'Heart Rate', icon: HeartIcon, color: '#F472B6' },
] as const;

export type HealthStepProps = {
  /** Reflected back so the ask is addressed to a person, not to a user. */
  name: string;
  summary: HealthSummary | null;
  onConnected: (summary: HealthSummary) => void;
  /** Both halves of leaving the screen. The page keeps its shared button bar
   * off this screen entirely, so the forward action has to live here — the
   * button went dead on "Connected" and the flow had nowhere left to go. */
  onNext: () => void;
  onSkip: () => void;
};

/**
 * The Health permission ask.
 *
 * Structured the way the category leaders do it: say what is wanted and why in
 * one breath, show the exact switches Apple is about to present, then a single
 * button — and immediately under it, the promise about where the data goes.
 * That last line is not decoration. It is the objection every user has at this
 * exact moment, and answering it before they can voice it is the difference
 * between a grant and a decline.
 *
 * The switches are a preview, not a control. Apple owns the actual decision
 * and presents its own sheet, so these are not touchable — they flick on by
 * themselves as the screen arrives, showing the state the user is being asked
 * to agree to. Three dead grey switches above a permission ask read as "here
 * is what you do not have"; three settling into place read as "here is what
 * this turns on". The *values* beside them stay blank until Health actually
 * answers, so nothing here ever claims a reading we have not taken.
 */
export function HealthStep({ name, summary, onConnected, onNext, onSkip }: HealthStepProps) {
  const scheme = useColorScheme();
  const colors = palette[scheme];
  const meter = meterColors[scheme];

  const [busy, setBusy] = useState(false);
  /** How the last attempt went, so the status line can say which of the four
   * things happened. Null until the button has been pressed once. */
  const [outcome, setOutcome] = useState<HealthOutcome | null>(null);
  const available = healthAvailable();
  const connected = summary != null;

  /**
   * The one line under the switches, in the slot the unavailable notice
   * already owned.
   *
   * A decline and an empty account used to be the same three nulls and the
   * same silence. They are different facts and the user can act on one of
   * them, so they say different things — in the same element, at the same
   * size, in the same place.
   */
  const status =
    !available
      ? 'Health isn’t available here — you can carry on without it.'
      : outcome === 'declined'
        ? 'Health access was declined. Your plan will work without it.'
        : outcome === 'empty'
          ? 'Connected — no data yet. It will fill in as you move.'
          : null;

  const connect = async () => {
    if (busy || connected) return;
    setBusy(true);
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    // Apple never reports which read scopes were denied, so "asked" is all we
    // can know. The read that follows is what actually decides whether we got
    // anything, and nulls are a perfectly good answer.
    const result = await connectHealth();
    setBusy(false);
    setOutcome(result.outcome);
    // Success is for a connection that produced something. A decline gets an
    // acknowledgement, not a celebration — the screen is about to tell the user
    // their plan works without it, and a triumphant buzz under that reads as
    // the app not having listened.
    Haptics.notificationAsync(
      result.outcome === 'ready'
        ? Haptics.NotificationFeedbackType.Success
        : Haptics.NotificationFeedbackType.Warning,
    );
    onConnected(result.summary);
  };

  return (
    <View style={styles.wrap}>
      <Text style={[styles.title, { color: colors.foreground }]}>
        {name.trim().length > 0 ? `Fill me in, ${name.trim()}!` : 'Fill me in!'}
      </Text>
      <Text style={[styles.blurb, { color: meter.caption }]}>
        Walkito reads your steps, energy and heart rate so the plan starts from what you
        have actually been doing — not what you meant to do.
      </Text>

      <View style={[styles.card, { backgroundColor: colors.card }]}>
        {ROWS.map((row, i) => {
          const Glyph = row.icon;
          const value = summary?.[row.key] ?? null;
          return (
            <View
              key={row.key}
              style={[
                styles.row,
                i > 0 && { borderTopWidth: StyleSheet.hairlineWidth, borderTopColor: meter.track },
              ]}>
              <Glyph size={22} color={row.color} weight="fill" />
              <Text style={[styles.rowLabel, { color: colors.foreground }]}>{row.label}</Text>
              {/* Before connecting this column is empty rather than showing a
                  zero — a zero is a reading, and we have not taken one. */}
              {connected && (
                <Animated.Text
                  entering={FadeIn.duration(260).reduceMotion(ReduceMotion.System)}
                  style={[styles.rowValue, { color: value == null ? meter.unit : colors.foreground }]}>
                  {value == null ? 'Not shared' : formatValue(row.key, value)}
                </Animated.Text>
              )}
              <Switch index={i} track={meter.track} />
            </View>
          );
        })}
      </View>

      <View style={styles.actions}>
        {/* One button, two jobs. Connecting is the only thing worth doing here
            until it is done, and once it is, the same button is the way on —
            a permanently disabled "Connected" sitting under a screen with no
            other control was a dead end with a tick on it. */}
        <PrimaryButton
          label={connected ? 'Next' : busy ? 'Opening Health…' : 'Connect to Health'}
          onPress={connected ? onNext : connect}
          disabled={busy || (!available && !connected)}
        />
        <View style={styles.promise}>
          <LockSimpleIcon size={14} color={meter.caption} weight="fill" />
          <Text style={[styles.promiseText, { color: meter.caption }]}>
            Your health data never leaves this device.
          </Text>
        </View>
        {status != null && (
          <Text style={[styles.promiseText, { color: meter.unit, textAlign: 'center' }]}>
            {status}
          </Text>
        )}
        {/* Quiet, and only while the ask is still open: declining has to be
            possible, but it must not look like the equal of the one thing this
            screen is for. */}
        {!connected && (
          <Pressable
            accessibilityRole="button"
            onPress={onSkip}
            hitSlop={10}
            style={({ pressed }) => [styles.skip, pressed && { opacity: 0.5 }]}>
            <Text style={[styles.skipText, { color: meter.caption }]}>Skip for now</Text>
          </Pressable>
        )}
      </View>
    </View>
  );
}

function formatValue(key: (typeof ROWS)[number]['key'], value: number): string {
  if (key === 'steps') return value >= 1000 ? `${(value / 1000).toFixed(1)}k` : String(value);
  if (key === 'calories') return `${value} kcal`;
  return `${value} bpm`;
}

/** Staggered so the three read as one gesture settling rather than three
 * things happening at once. */
const SWITCH_STAGGER_MS = 110;

function Switch({ index, track }: { index: number; track: string }) {
  const value = useSharedValue(0);

  useEffect(() => {
    value.value = withDelay(
      260 + index * SWITCH_STAGGER_MS,
      withTiming(1, {
        duration: 320,
        easing: Easing.bezier(0.23, 1, 0.32, 1),
        reduceMotion: ReduceMotion.System,
      }),
    );
  }, [index, value]);

  const trackStyle = useAnimatedStyle(() => ({
    backgroundColor: value.value > 0.5 ? PRIMARY : track,
    opacity: 0.4 + value.value * 0.6,
  }));
  const knobStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: value.value * 16 }],
  }));

  return (
    <Animated.View style={[styles.switch, trackStyle]}>
      <Animated.View style={[styles.knob, knobStyle]} />
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
    paddingTop: 8,
  },
  title: {
    fontSize: 28,
    lineHeight: 34,
    fontFamily: fonts.bold,
    letterSpacing: -0.7,
  },
  blurb: {
    marginTop: 10,
    fontSize: 16,
    lineHeight: 23,
    fontFamily: fonts.regular,
  },
  card: {
    marginTop: 28,
    borderRadius: 20,
    borderCurve: 'continuous',
    overflow: 'hidden',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    height: 56,
    paddingHorizontal: 16,
  },
  rowLabel: {
    flex: 1,
    fontSize: 16,
    fontFamily: fonts.semibold,
  },
  rowValue: {
    fontSize: 14,
    fontFamily: fonts.medium,
  },
  switch: {
    width: 38,
    height: 22,
    borderRadius: 11,
    padding: 3,
    justifyContent: 'center',
  },
  knob: {
    width: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: '#FFFFFF',
  },
  actions: {
    marginTop: 'auto',
    // Clear of the home indicator. Pinned flush to the bottom the promise read
    // as a caption falling off the screen rather than as part of the ask.
    marginBottom: 28,
    gap: 14,
  },
  promise: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
  },
  promiseText: {
    fontSize: 13,
    fontFamily: fonts.medium,
  },
  skip: {
    alignSelf: 'center',
    paddingVertical: 4,
  },
  skipText: {
    fontSize: 15,
    fontFamily: fonts.semibold,
  },
});
