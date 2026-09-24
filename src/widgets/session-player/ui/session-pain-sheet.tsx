import * as Haptics from 'expo-haptics';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { fonts, meterColors, palette } from '@/shared/config';
import { useT } from '@/shared/lib/i18n';
import { useColorScheme } from '@/shared/lib/theme';

export type SessionPainSheetProps = {
  visible: boolean;
  /** A score was picked, 0–10. */
  onPick: (score: number) => void;
  onCancel: () => void;
};

const SCORES = Array.from({ length: 11 }, (_, i) => i);

/**
 * "It hurts", asked mid-session.
 *
 * A row of eleven numbers rather than a slider: whoever presses this is
 * standing on one foot with the phone propped against a wall, and a tap on a
 * large target is the one input that works from there. No colour on the
 * numbers — nothing in this app colours a pain score, because a red 8 reads as
 * the app judging the answer.
 *
 * An overlay inside the player, not a `Modal`: the player itself runs inside a
 * presented sheet, and a `Modal` nested in one does not reliably present on iOS
 * — see the note on `CelebrationSheet`, which learned that the hard way.
 */
export function SessionPainSheet({ visible, onPick, onCancel }: SessionPainSheetProps) {
  const scheme = useColorScheme();
  const colors = palette[scheme];
  const meter = meterColors[scheme];
  const insets = useSafeAreaInsets();
  const t = useT();

  if (!visible) return null;

  return (
    <View style={StyleSheet.absoluteFill}>
      <Pressable
        accessibilityRole="button"
        accessibilityLabel={t('widgets.painClose')}
        style={styles.scrim}
        onPress={onCancel}
      />
      <View
        style={[
          styles.card,
          { backgroundColor: colors.card, paddingBottom: Math.max(insets.bottom, 20) },
        ]}>
        <Text style={[styles.title, { color: colors.foreground }]}>
          {t('widgets.painTitle')}
        </Text>
        <Text style={[styles.blurb, { color: meter.caption }]}>{t('widgets.painBlurb')}</Text>
        <View style={styles.grid}>
          {SCORES.map((score) => (
            <Pressable
              key={score}
              accessibilityRole="button"
              accessibilityLabel={String(score)}
              onPress={() => {
                Haptics.selectionAsync();
                onPick(score);
              }}
              style={({ pressed }) => [
                styles.cell,
                { backgroundColor: meter.track },
                pressed && { opacity: 0.6 },
              ]}>
              <Text style={[styles.cellText, { color: colors.foreground }]}>{score}</Text>
            </Pressable>
          ))}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  scrim: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
  card: {
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
    paddingTop: 24,
    paddingHorizontal: 20,
    gap: 8,
  },
  title: {
    fontSize: 22,
    fontFamily: fonts.bold,
  },
  blurb: {
    fontSize: 15,
    fontFamily: fonts.regular,
    marginBottom: 8,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  cell: {
    // Six to a row on a phone, so 0–10 sit as 6 + 5 rather than leaving the
    // 10 alone on a third line.
    width: 52,
    height: 52,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cellText: {
    fontSize: 20,
    fontFamily: fonts.semibold,
  },
});
