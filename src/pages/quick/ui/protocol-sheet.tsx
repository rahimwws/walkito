import * as Haptics from 'expo-haptics';
import { useMemo, useState } from 'react';
import { Modal, Pressable, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { PROGRAM, TODAY_INDEX, exerciseById } from '@/entities/program';
import { protocolSeconds, type Protocol } from '@/entities/protocols';
import { fonts, meterColors, palette } from '@/shared/config';
import { useT } from '@/shared/lib/i18n';
import { useColorScheme } from '@/shared/lib/theme';
import { PrimaryButton } from '@/shared/ui/primary-button';
import { SessionView, type PlaylistStep } from '@/widgets/session-player';

/**
 * What a protocol contains, and the button that starts it.
 *
 * Presented before the player rather than running straight from the card: the
 * steps are the whole product here. Somebody deciding whether they have two
 * minutes wants to see what the two minutes are, and a protocol that starts on
 * a single tap is one you cannot inspect without committing to it.
 *
 * No thumbnails. The spec asked for the first frame of each clip, which would
 * mean decoding video to draw a list — see the note on `NEEDS_DESIGN_DECISION`
 * in the report. The names and the lengths carry the list without it.
 */

type Props = {
  /** Null closes the sheet. A protocol opens it. */
  protocol: Protocol | null;
  onClose: () => void;
};

export function ProtocolSheet({ protocol, onClose }: Props) {
  const scheme = useColorScheme();
  const colors = palette[scheme];
  const meter = meterColors[scheme];
  const insets = useSafeAreaInsets();
  const t = useT();

  const [running, setRunning] = useState(false);

  /**
   * A day object for the player, which needs one for its header.
   *
   * Today's, with the kind rewritten to recovery — a protocol is not the day's
   * session and must not be dressed as one. Nothing about the programme is
   * read back from this; see `PROTOCOLS_ADVANCE_PROGRAM`.
   */
  const day = useMemo(
    () => ({ ...PROGRAM[TODAY_INDEX], kind: 'recovery' as const, minutes: protocol?.minutes ?? 3, checkpoint: false }),
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

  if (protocol == null) return null;

  const close = () => {
    setRunning(false);
    onClose();
  };

  return (
    <Modal
      visible
      animationType="slide"
      presentationStyle="pageSheet"
      onRequestClose={close}>
      <View style={[styles.host, { backgroundColor: colors.background }]}>
        {running ? (
          <SessionView
            day={day}
            playlist={playlist}
            cue={t(protocol.cueKey)}
            onBack={close}
            onFinish={close}
          />
        ) : (
          <View style={[styles.body, { paddingBottom: Math.max(insets.bottom, 16) + 8 }]}>
            <View style={styles.head}>
              <View style={styles.headText}>
                <Text style={[styles.title, { color: colors.foreground }]}>
                  {t(protocol.titleKey)}
                </Text>
                <Text style={[styles.meta, { color: meter.caption }]}>
                  {t('quick.minutes', { count: protocol.minutes })} ·{' '}
                  {t(POSITION_KEYS[protocol.position])}
                </Text>
              </View>
              <Pressable accessibilityRole="button" onPress={close} hitSlop={12}>
                <Text style={[styles.close, { color: meter.caption }]}>{t('quick.close')}</Text>
              </Pressable>
            </View>

            <Text style={[styles.cue, { color: meter.caption }]}>{t(protocol.cueKey)}</Text>

            <View style={styles.steps}>
              {protocol.steps.map((step, index) => (
                <View key={`${step.exerciseId}-${index}`} style={styles.step}>
                  <Text style={[styles.stepIndex, { color: meter.unit }]}>{index + 1}</Text>
                  <Text style={[styles.stepName, { color: colors.foreground }]} numberOfLines={1}>
                    {exerciseById(step.exerciseId)?.title ?? step.exerciseId}
                  </Text>
                  <Text style={[styles.stepTime, { color: meter.caption }]}>
                    {t('quick.seconds', { count: step.seconds })}
                  </Text>
                </View>
              ))}
            </View>

            <View style={styles.cta}>
              <PrimaryButton
                label={t('quick.start')}
                onPress={() => {
                  Haptics.selectionAsync();
                  setRunning(true);
                }}
              />
            </View>
          </View>
        )}
      </View>
    </Modal>
  );
}

const POSITION_KEYS = {
  seated: 'quick.seated',
  standing: 'quick.standing',
  in_bed: 'quick.inBed',
} as const;

/** Unused here, kept so the total is available to whatever reports it. */
export const totalSeconds = protocolSeconds;

const styles = StyleSheet.create({
  host: { flex: 1 },
  body: { flex: 1, paddingHorizontal: 24, paddingTop: 20 },
  head: { flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'space-between' },
  headText: { flex: 1 },
  title: { fontSize: 26, fontFamily: fonts.heavy, letterSpacing: -0.6 },
  meta: { marginTop: 2, fontSize: 15, fontFamily: fonts.medium, letterSpacing: -0.2 },
  close: { fontSize: 16, fontFamily: fonts.medium },
  cue: { marginTop: 14, fontSize: 15, fontFamily: fonts.medium, lineHeight: 21 },
  steps: { marginTop: 22, gap: 14 },
  step: { flexDirection: 'row', alignItems: 'center', gap: 14 },
  stepIndex: { width: 16, fontSize: 14, fontFamily: fonts.bold },
  stepName: { flex: 1, fontSize: 16, fontFamily: fonts.semibold, letterSpacing: -0.2 },
  stepTime: { fontSize: 14, fontFamily: fonts.medium },
  cta: { marginTop: 'auto' },
});
