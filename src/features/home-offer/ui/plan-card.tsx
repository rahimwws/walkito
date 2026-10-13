import { StyleSheet, Text, View } from 'react-native';

import { fonts, meterColors, palette } from '@/shared/config';
import { useColorScheme } from '@/shared/lib/theme';
import { Badge } from '@/shared/ui/badge';
import { Card3D } from '@/shared/ui/card-3d';

import { PriceLine } from './rich-text';

export type PlanCardModel = {
  /** "Yearly", "Lifetime". */
  title: string;
  /** The billed amount inside its template, `PRICE_SLOT` in place of it. */
  priceTemplate: string;
  price: string;
  /** Smaller, at the right of the price: the monthly equivalent. Never the
   * most prominent figure (App Review Guideline 3.1.2). */
  aside: string | null;
  /** A line under the price: what happens after the first year, or that
   * nothing renews. */
  note: string | null;
  /** "1 week free", "50% off first year": only what the store's figures say. */
  badge: string | null;
};

/**
 * The chosen plan, as the reference's card: its name with a badge, the
 * store's billed price large, the monthly equivalent small at the right.
 * Opaque (the solid 3D card), so a mascot behind its top edge is hidden by it.
 */
export function PlanCard({ model }: { model: PlanCardModel }) {
  const scheme = useColorScheme();
  const colors = palette[scheme];
  const meter = meterColors[scheme];

  return (
    <Card3D size="lg" material="solid" padding={18} contentStyle={styles.content}>
      <View style={styles.top}>
        <Text style={[styles.title, { color: colors.foreground }]} numberOfLines={1} maxFontSizeMultiplier={1.3}>
          {model.title}
        </Text>
        {model.badge != null && <Badge label={model.badge} accent="primary" raised style={styles.badge} />}
      </View>
      <View style={styles.priceRow}>
        <PriceLine
          template={model.priceTemplate}
          price={model.price}
          style={[styles.unit, { color: meter.label }]}
          priceStyle={[styles.price, { color: colors.foreground }]}
        />
        {model.aside != null && (
          <Text style={[styles.aside, { color: meter.caption }]} numberOfLines={1} maxFontSizeMultiplier={1.3}>
            {model.aside}
          </Text>
        )}
      </View>
      {model.note != null && (
        <Text style={[styles.note, { color: meter.label }]} maxFontSizeMultiplier={1.4}>
          {model.note}
        </Text>
      )}
    </Card3D>
  );
}

const styles = StyleSheet.create({
  content: { gap: 10 },
  top: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', gap: 10 },
  title: { ...fonts.heavy(22, -0.5), flexShrink: 1 },
  badge: { alignSelf: 'center' },
  priceRow: { flexDirection: 'row', alignItems: 'baseline', justifyContent: 'space-between', gap: 10 },
  /** The words around the figure ("/yr", "once"): the figure's own size
   * comes from `price`, set over this on the nested span. */
  unit: { ...fonts.semibold(17, -0.2), flexShrink: 1 },
  price: fonts.heavy(26, -0.6),
  aside: fonts.semibold(16, -0.2),
  note: { ...fonts.medium(14), lineHeight: 19 },
});
