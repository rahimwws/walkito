import { StyleSheet, Text, View } from "react-native";

import type { Goal } from "@/entities/program";
import { fonts, meterColors, palette } from "@/shared/config";
import { useT, type Key } from "@/shared/lib/i18n";
import { useColorScheme } from "@/shared/lib/theme";
import { Card3D } from "@/shared/ui/card-3d";
import { FluentIcon, type FluentName } from "@/shared/ui/fluent-icon";

type Tip = { icon: FluentName; key: Key };

/**
 * Heel pain: what the guidance puts beside the exercises. In Riel 2023 the
 * advice and a heel cup did most of the work and the exercises added little on
 * top, so leaving them out left out the larger half. Shoes first, since the
 * first steps of the day are what hurt.
 */
const HEEL_TIPS: readonly Tip[] = [
  { icon: "shoe", key: "pages.plan.helps.shoes" },
  { icon: "foot", key: "pages.plan.helps.indoors" },
  { icon: "run", key: "pages.plan.helps.load" },
  { icon: "relief", key: "pages.plan.helps.tape" },
  { icon: "moon", key: "pages.plan.helps.night" },
  { icon: "calendar", key: "pages.plan.helps.time" },
];

/**
 * Flat feet: said plainly that the work is strength, not shape. Exercise does
 * not raise an adult's arch by any amount that matters, and nothing here may
 * suggest it does.
 */
const ARCH_TIPS: readonly Tip[] = [
  { icon: "strength", key: "pages.plan.helps.arch" },
  { icon: "shoe", key: "pages.plan.helps.archShoes" },
];

/** The tips for these goals, or none: only heel pain and the arch have any. */
export function helpsTips(goals: readonly Goal[]): readonly Tip[] {
  const active = (type: Goal["type"]) =>
    goals.some((g) => g.type === type && g.status === "active");
  if (active("pain_free_mornings")) return HEEL_TIPS;
  if (active("arch_hold")) return ARCH_TIPS;
  return [];
}

/**
 * "What else helps", at the foot of the plan: what the exercises cannot do on
 * their own. A note, not a task, so nothing on it is tappable or ticked.
 */
export function HelpsCard({ goals }: { goals: readonly Goal[] }) {
  const scheme = useColorScheme();
  const colors = palette[scheme];
  const meter = meterColors[scheme];
  const t = useT();
  const tips = helpsTips(goals);
  if (tips.length === 0) return null;

  return (
    <Card3D material="solid" padding={16} contentStyle={styles.content}>
      <View style={styles.heading}>
        <Text style={[styles.eyebrow, { color: meter.caption }]}>
          {t("pages.plan.helps.eyebrow")}
        </Text>
        <Text
          accessibilityRole="header"
          style={[styles.title, { color: colors.foreground }]}
        >
          {t("pages.plan.helps.title")}
        </Text>
      </View>
      {tips.map((tip) => (
        <View key={tip.key} style={styles.row}>
          <View
            accessibilityElementsHidden
            importantForAccessibility="no-hide-descendants"
          >
            <FluentIcon name={tip.icon} size={24} />
          </View>
          <Text style={[styles.body, { color: colors.foreground }]}>
            {t(tip.key)}
          </Text>
        </View>
      ))}
    </Card3D>
  );
}

const styles = StyleSheet.create({
  content: {
    gap: 12,
  },
  heading: {
    gap: 2,
  },
  eyebrow: fonts.bold(12, 0.6),
  title: {
    ...fonts.heavy(20, -0.4),
    lineHeight: 25,
  },
  row: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 12,
  },
  body: {
    ...fonts.medium(15),
    lineHeight: 21,
    flex: 1,
  },
});
