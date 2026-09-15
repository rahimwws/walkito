import Cancel01Icon from '@hugeicons/core-free-icons/Cancel01Icon';
import { HugeiconsIcon } from '@hugeicons/react-native';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { fonts, meterColors } from '@/shared/config';
import { kv } from '@/shared/lib/storage';
import { useColorScheme } from '@/shared/lib/theme';
import { Relief } from '@/shared/ui/relief';

import { PAIN_LEGEND, painRing } from '../model/pain-ring';

const SEEN_KEY = 'progress/pain-legend-seen';

/** Whether the legend still needs showing. Read once, at mount. */
export function painLegendUnseen(): boolean {
  return !kv.getBoolean(SEEN_KEY);
}

export function markPainLegendSeen(): void {
  kv.set(SEEN_KEY, true);
}

export type PainLegendProps = {
  /** Called after the legend has marked itself seen, so the screen can drop
   * it from the tree. */
  onDismiss: () => void;
};

/**
 * One-time note explaining the rings.
 *
 * Shown once and never again, which is the only honest way to ship a colour
 * code: without it the rings read as decoration, and with it permanently
 * on-screen the path turns into a chart with a key. Three swatches and a
 * sentence is the whole budget.
 */
export function PainLegend({ onDismiss }: PainLegendProps) {
  const scheme = useColorScheme();
  const meter = meterColors[scheme];

  // Raised and opaque, matching the card below it: it floats over the ribbon,
  // and a translucent fill let a node show straight through the words.
  return (
    <Relief radius={18} contentStyle={styles.bar}>
      {/* The three words the ramp is built from were only ever React keys, so
          the swatches said nothing out loud — which made this a colour key
          with no key in it for anyone not reading the colour. */}
      <View style={styles.swatches}>
        {PAIN_LEGEND.map((stop) => (
          <View
            key={stop.label}
            accessible
            accessibilityRole="text"
            accessibilityLabel={stop.label}
            style={[styles.dot, { borderColor: painRing(stop.pain, scheme) }]}
          />
        ))}
      </View>

      <Text style={[styles.copy, { color: meter.caption }]} numberOfLines={2}>
        The ring around a day shows the pain you logged that day.
      </Text>

      <Pressable
        accessibilityRole="button"
        accessibilityLabel="Dismiss"
        onPress={() => {
          markPainLegendSeen();
          onDismiss();
        }}
        hitSlop={10}
        style={({ pressed }) => pressed && { opacity: 0.6 }}>
        <HugeiconsIcon icon={Cancel01Icon} size={18} color={meter.unit} strokeWidth={2.2} />
      </Pressable>
    </Relief>
  );
}

const styles = StyleSheet.create({
  bar: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    paddingVertical: 10,
    paddingHorizontal: 14,
  },
  swatches: {
    flexDirection: 'row',
    gap: 5,
  },
  dot: {
    width: 14,
    height: 14,
    borderRadius: 7,
    borderWidth: 2,
  },
  copy: {
    flex: 1,
    fontSize: 13,
    fontFamily: fonts.regular,
    lineHeight: 17,
  },
});
