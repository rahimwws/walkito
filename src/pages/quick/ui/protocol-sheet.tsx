import { BlurView } from 'expo-blur';
import * as Haptics from 'expo-haptics';
import { useEffect, useMemo, useState } from 'react';
import { Modal, Pressable, StyleSheet, Text, View } from 'react-native';
import Animated, {
  Easing,
  ReduceMotion,
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { PROGRAM, TODAY_INDEX } from '@/entities/program';
import { type Protocol } from '@/entities/protocols';
import { fonts, meterColors, palette } from '@/shared/config';
import { useT } from '@/shared/lib/i18n';
import { useColorScheme } from '@/shared/lib/theme';
import { PrimaryButton } from '@/shared/ui/primary-button';
import { SessionView, type PlaylistStep } from '@/widgets/session-player';

/**
 * A protocol, as an aside.
 *
 * The same sheet the plan's own days open into: blur behind, a card docked at
 * the bottom, three figures across it and one button. Built to that shape on
 * purpose — this answers "what is this" for a protocol exactly as `DaySheet`
 * does for a day, and a second, different answer to the same question is how an
 * app stops feeling like one app.
 *
 * Tapping away closes it. Nothing here has to be decided.
 */

const RADIUS = 36;
const BLUR = 28;
const IN_MS = 340;
const OUT_MS = 220;
const RISE = 44;

type Props = {
  /** Null closes the sheet. A protocol opens it. */
  protocol: Protocol | null;
  onClose: () => void;
};

const POSITION_KEYS = {
  seated: 'quick.seated',
  standing: 'quick.standing',
  in_bed: 'quick.inBed',
} as const;

export function ProtocolSheet({ protocol, onClose }: Props) {
  const scheme = useColorScheme();
  const colors = palette[scheme];
  const meter = meterColors[scheme];
  const insets = useSafeAreaInsets();
  const t = useT();

  const [running, setRunning] = useState(false);

  /**
   * Mounted separately from `protocol`, the same trick `StreakSheet` documents:
   * a modal torn down the instant the caller's value clears leaves nothing for
   * the exit to play on, so the sheet blinks out instead of leaving.
   */
  const [mounted, setMounted] = useState(false);
  const anim = useSharedValue(0);

  useEffect(() => {
    if (protocol != null) {
      setMounted(true);
      // A frame late: the modal has to exist before the transition starts.
      const frame = requestAnimationFrame(() => {
        anim.value = withTiming(1, {
          duration: IN_MS,
          easing: Easing.out(Easing.cubic),
          reduceMotion: ReduceMotion.System,
        });
      });
      return () => cancelAnimationFrame(frame);
    }

    anim.value = withTiming(
      0,
      { duration: OUT_MS, easing: Easing.in(Easing.cubic), reduceMotion: ReduceMotion.System },
      (finished) => {
        if (finished) runOnJS(setMounted)(false);
      },
    );
    return undefined;
  }, [protocol, anim]);

  const backdrop = useAnimatedStyle(() => ({ opacity: anim.value }));
  const dock = useAnimatedStyle(() => ({
    opacity: anim.value,
    transform: [{ translateY: (1 - anim.value) * RISE }],
  }));

  /**
   * A day object for the player, which needs one for its header.
   *
   * Today's, rewritten to recovery — a protocol is not the day's session and
   * must not be dressed as one. Nothing about the plan is read back from it.
   */
  const day = useMemo(
    () => ({
      ...PROGRAM[TODAY_INDEX],
      kind: 'recovery' as const,
      minutes: protocol?.minutes ?? 3,
      checkpoint: false,
    }),
    [protocol?.minutes],
  );

  const playlist: readonly PlaylistStep[] = useMemo(
    () =>
      (protocol?.steps ?? []).map((step) => ({
        exerciseId: step.exerciseId,
        seconds: step.seconds,
        // The player's per-side machinery is exactly what `switchAtHalf`
        // describes: it halves the time, names the foot and taps at the change.
        perSide: step.switchAtHalf === true,
      })),
    [protocol],
  );

  const close = () => {
    setRunning(false);
    onClose();
  };

  if (!mounted || protocol == null) return null;

  // Running takes the whole screen. A player inside a docked card would be a
  // video the size of a business card.
  if (running) {
    return (
      <Modal visible animationType="slide" presentationStyle="pageSheet" onRequestClose={close}>
        <View style={[styles.player, { backgroundColor: colors.background }]}>
          <SessionView
            day={day}
            playlist={playlist}
            cue={t(protocol.cueKey)}
            onBack={close}
            onFinish={close}
          />
        </View>
      </Modal>
    );
  }

  return (
    <Modal transparent animationType="none" visible statusBarTranslucent onRequestClose={close}>
      {/* Driven by hand rather than by entering/exiting builders: one that
          fails to run strands its subject at opacity 0, and an exiting builder
          cannot run inside a modal whose visibility is what removed it. */}
      <View style={styles.fill}>
        <Animated.View style={[styles.fill, backdrop]} pointerEvents="none">
          <BlurView
            tint={scheme === 'dark' ? 'dark' : 'light'}
            intensity={BLUR}
            style={styles.fill}
          />
          <View style={[styles.fill, styles.wash]} />
        </Animated.View>

        <Pressable
          accessibilityRole="button"
          accessibilityLabel={t('quick.close')}
          style={styles.fill}
          onPress={close}
        />

        <Animated.View
          style={[styles.dock, { paddingBottom: Math.max(insets.bottom, 16) }, dock]}
          pointerEvents="box-none">
          <View style={[styles.card, { backgroundColor: colors.card }]}>
            <Text style={[styles.eyebrow, { color: meter.caption }]}>{t('quick.title')}</Text>
            <Text style={[styles.title, { color: colors.foreground }]}>
              {t(protocol.titleKey)}
            </Text>

            {/* The same three-across the day sheet uses: how long, how much,
                and the one fact particular to this kind of thing. */}
            <View style={styles.stats}>
              <Stat
                value={t('quick.minutes', { count: protocol.minutes })}
                label={t('quick.title')}
                tone={colors.foreground}
                caption={meter.caption}
              />
              <Stat
                value={String(protocol.steps.length)}
                label={t('quick.stepsLabel')}
                tone={colors.foreground}
                caption={meter.caption}
              />
              <Stat
                value={t(POSITION_KEYS[protocol.position])}
                label={t('quick.positionLabel')}
                tone={colors.foreground}
                caption={meter.caption}
              />
            </View>

            <PrimaryButton
              label={t('quick.start')}
              onPress={() => {
                Haptics.selectionAsync();
                setRunning(true);
              }}
            />
          </View>
        </Animated.View>
      </View>
    </Modal>
  );
}

function Stat({
  value,
  label,
  tone,
  caption,
}: {
  value: string;
  label: string;
  tone: string;
  caption: string;
}) {
  return (
    <View style={styles.stat}>
      <Text style={[styles.statValue, { color: tone }]}>{value}</Text>
      <Text style={[styles.statLabel, { color: caption }]}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  fill: { position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 },
  /** A trace of ink over the blur — blur alone leaves a bright page bright. */
  wash: { backgroundColor: 'rgba(0,0,0,0.18)' },
  player: { flex: 1 },
  dock: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    paddingHorizontal: 14,
  },
  card: {
    borderRadius: RADIUS,
    borderCurve: 'continuous',
    paddingHorizontal: 20,
    paddingTop: 24,
    paddingBottom: 18,
    alignItems: 'stretch',
  },
  eyebrow: { fontSize: 14, fontFamily: fonts.semibold, textAlign: 'center' },
  title: {
    fontSize: 34,
    lineHeight: 40,
    fontFamily: fonts.heavy,
    letterSpacing: -1,
    textAlign: 'center',
    marginTop: 2,
  },
  stats: { flexDirection: 'row', marginTop: 20, marginBottom: 22 },
  stat: { flex: 1, alignItems: 'center', gap: 2 },
  statValue: { fontSize: 19, fontFamily: fonts.bold, letterSpacing: -0.4 },
  statLabel: { fontSize: 13, fontFamily: fonts.medium },
});
