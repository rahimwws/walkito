import { StyleSheet, Text, View } from "react-native";

import type { Goal } from "@/entities/program";
import { colors, fonts } from "@/shared/config";
import { useT, type Key } from "@/shared/lib/i18n";
import { Card } from "@/shared/ui/card";
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
  const t = useT();
  const tips = helpsTips(goals);
  if (tips.length === 0) return null;

  return (
    <Card style={styles.content}>
      <View style={styles.heading}>
        <Text style={styles.eyebrow}>
          {t("pages.plan.helps.eyebrow")}
        </Text>
        <Text
          accessibilityRole="header"
          style={styles.title}
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
          <Text style={styles.body}>
            {t(tip.key)}
          </Text>
        </View>
      ))}
    </Card>
  );
}

const styles = StyleSheet.create({
  content: {
    gap: 12,
  },
  heading: {
    gap: 2,
  },
  eyebrow: { ...fonts.semibold(15), color: colors.text2 },
  title: {
    ...fonts.bold(20, -0.3),
    lineHeight: 25,
    color: colors.text,
  },
  row: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 12,
  },
  body: {
    ...fonts.regular(17),
    lineHeight: 23,
    color: colors.text,
    flex: 1,
  },
});
