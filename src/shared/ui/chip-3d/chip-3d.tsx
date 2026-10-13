import { HugeiconsIcon, type IconSvgElement } from '@hugeicons/react-native';
import { StyleSheet, Text, type StyleProp, type ViewStyle } from 'react-native';

import { fonts, meterColors, raised, type AccentName } from '@/shared/config';
import { Raised, faceFor, useRaisedScheme } from '@/shared/ui/raised';

/** How far the chip stands off its ledge. */
export const CHIP_3D_LIP = 3;
const HEIGHT = 30;
const RADIUS = 12;

export type Chip3DProps = {
  /** "8 min", "5 moves": a fact, never a verdict. */
  label: string;
  icon?: IconSvgElement;
  /**
   * One accent per metric, the same one wherever it appears. `neutral` is the
   * card's own face, for a fact with no metric to name.
   */
  accent: AccentName | 'primary' | 'neutral';
  /** Read out instead of the label. Default the label. */
  accessibilityLabel?: string;
  style?: StyleProp<ViewStyle>;
};

/**
 * A solid chip standing on its lip, Duolingo's way: a session's minutes and
 * moves, a duration on a task row.
 *
 * Inert: it says what something is, and the row or card around it is what
 * presses. A tone names a category, never a verdict, so nothing here can mark
 * a value good or bad.
 */
export function Chip3D({ label, icon, accent, accessibilityLabel, style }: Chip3DProps) {
  const scheme = useRaisedScheme();
  const tokens = raised[scheme];
  const tone =
    accent === 'neutral'
      ? { face: tokens.surface, edge: tokens.edge, lip: tokens.lip, label: meterColors[scheme].caption }
      : { ...faceFor(scheme, accent), edge: undefined };

  return (
    <Raised
      face={tone.face}
      edge={tone.edge}
      lip={tone.lip}
      depth={CHIP_3D_LIP}
      radius={RADIUS}
      accessibilityRole="text"
      accessibilityLabel={accessibilityLabel ?? label}
      style={[styles.outer, style]}
      contentStyle={styles.face}>
      {icon != null && <HugeiconsIcon icon={icon} size={15} color={tone.label} strokeWidth={2.4} />}
      <Text style={[styles.label, { color: tone.label }]} numberOfLines={1} maxFontSizeMultiplier={1.3}>
        {label}
      </Text>
    </Raised>
  );
}

const styles = StyleSheet.create({
  outer: {
    alignSelf: 'flex-start',
  },
  face: {
    height: HEIGHT,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  label: fonts.heavy(14, 0.1),
});
