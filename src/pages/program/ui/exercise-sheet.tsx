import { BlurView } from 'expo-blur';
import { Modal, Pressable, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { exerciseById } from '@/entities/program';
import { fonts, meterColors, palette } from '@/shared/config';
import { useT } from '@/shared/lib/i18n';
import { useColorScheme } from '@/shared/lib/theme';
import { ExercisePreview } from '@/widgets/session-player';

const BLUR = 28;

/**
 * One exercise, previewed: its clip and the one line that matters most while
 * doing it. Opened from an exercise chip on the today card. It starts nothing —
 * the session begins from the card's own button — and a tap anywhere outside
 * closes it, the same way the day sheet closes.
 */
export function ExerciseSheet({ exerciseId, onClose }: { exerciseId: string | null; onClose: () => void }) {
  const scheme = useColorScheme();
  const colors = palette[scheme];
  const meter = meterColors[scheme];
  const insets = useSafeAreaInsets();
  const t = useT();
  if (exerciseId == null) return null;
  const exercise = exerciseById(exerciseId);

  return (
    <Modal transparent visible animationType="fade" statusBarTranslucent onRequestClose={onClose}>
      <View style={styles.fill}>
        <BlurView tint={scheme === 'dark' ? 'dark' : 'light'} intensity={BLUR} style={styles.fill} />
        <Pressable accessibilityRole="button" accessibilityLabel={t('common.close')} style={styles.fill} onPress={onClose} />
        <View style={[styles.dock, { paddingBottom: Math.max(insets.bottom, 16) }]} pointerEvents="box-none">
          <View style={[styles.card, { backgroundColor: colors.card }]}>
            <ExercisePreview exerciseId={exercise.id} />
            <Text style={[styles.title, { color: colors.foreground }]}>{exercise.title}</Text>
            <Text style={[styles.cue, { color: meter.caption }]}>{exercise.cue}</Text>
          </View>
        </View>
      </View>
    </Modal>
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
  dock: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    paddingHorizontal: 14,
  },
  card: {
    borderRadius: 36,
    borderCurve: 'continuous',
    padding: 18,
    gap: 12,
  },
  title: {
    ...fonts.heavy(24, -0.6),
    textAlign: 'center',
    marginTop: 4,
  },
  cue: {
    ...fonts.medium(16),
    lineHeight: 22,
    textAlign: 'center',
  },
});
