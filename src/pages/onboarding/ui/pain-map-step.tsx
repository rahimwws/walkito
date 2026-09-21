import { XIcon } from 'phosphor-react-native';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import Animated, { FadeIn, ReduceMotion } from 'react-native-reanimated';

import { ZONE_LABEL, patternFor, type FootSide, type FootZone } from '@/entities/pain-map';
import { accents, fonts, meterColors, palette } from '@/shared/config';
import { useColorScheme } from '@/shared/lib/theme';
import { SegmentedControl } from '@/shared/ui/segmented-control';
import { FootZonePicker } from '@/widgets/foot-zone-picker';

/** The control's order, and how a position maps back to what gets stored. */
const SIDES: readonly FootSide[] = ['left', 'right', 'both'];
const SIDE_LABELS = ['Left', 'Right', 'Both'];

export type PainMapStepProps = {
  side: FootSide;
  onSide: (next: FootSide) => void;
  zones: readonly FootZone[];
  onToggle: (zone: FootZone) => void;
  /** Shown when Next was pressed with nothing selected. */
  error: string | null;
};

/**
 * Where exactly it hurts.
 *
 * The side control sits above the image rather than below it, so the foot is
 * already the right way round before the first tap — asking someone to re-read
 * a diagram they have just marked up is a small cruelty.
 *
 * The chips are not decoration. A glow on a 704-wide photograph is easy to miss
 * on a small screen, and they are the only part of this control a screen reader
 * can move through as a list.
 */
export function PainMapStep({ side, onSide, zones, onToggle, error }: PainMapStepProps) {
  const scheme = useColorScheme();
  const colors = palette[scheme];
  const meter = meterColors[scheme];
  const accent = accents[scheme].orange;

  const pattern = patternFor(zones);

  return (
    <View style={styles.wrap}>
      <SegmentedControl
        segments={SIDE_LABELS}
        selectedIndex={SIDES.indexOf(side)}
        onChange={(index) => onSide(SIDES[index])}
      />

      <View style={styles.picker}>
        {/* Zones are anatomical, so switching foot keeps them — the heel is the
            heel whichever one it is on. */}
        <FootZonePicker
          selected={zones}
          onToggle={onToggle}
          mirror={side === 'left'}
        />
      </View>

      {zones.length > 0 && (
        <View style={styles.chips}>
          {zones.map((zone) => (
            <Pressable
              key={zone}
              accessibilityRole="button"
              accessibilityLabel={`${ZONE_LABEL[zone]}, selected. Tap to remove.`}
              onPress={() => onToggle(zone)}
              style={({ pressed }) => [
                styles.chip,
                { backgroundColor: accent.track },
                pressed && { opacity: 0.6 },
              ]}>
              <Text style={[styles.chipText, { color: accent.fill }]}>{ZONE_LABEL[zone]}</Text>
              <XIcon size={13} weight="bold" color={accent.fill} />
            </Pressable>
          ))}
        </View>
      )}

      {/* The line this screen gives back, in exchange for what it took. It
          describes a pattern and never names a condition — see the note over
          `PATTERN_LINE`. */}
      {pattern != null && (
        <Animated.Text
          key={pattern}
          entering={FadeIn.duration(200).reduceMotion(ReduceMotion.System)}
          style={[styles.pattern, { color: meter.caption }]}>
          {pattern}
        </Animated.Text>
      )}

      {error != null && (
        <Animated.Text
          entering={FadeIn.duration(200).reduceMotion(ReduceMotion.System)}
          style={[styles.error, { color: colors.foreground }]}>
          {error}
        </Animated.Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
    gap: 16,
  },
  picker: {
    marginTop: 4,
  },
  chips: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  chip: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 7,
    paddingLeft: 12,
    paddingRight: 10,
    paddingVertical: 7,
    borderRadius: 13,
    borderCurve: 'continuous',
  },
  chipText: {
    fontSize: 14,
    fontFamily: fonts.bold,
    letterSpacing: -0.1,
  },
  pattern: {
    fontSize: 15,
    lineHeight: 21,
    fontFamily: fonts.regular,
  },
  error: {
    fontSize: 15,
    lineHeight: 21,
    fontFamily: fonts.semibold,
  },
});
