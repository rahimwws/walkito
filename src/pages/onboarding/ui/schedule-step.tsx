import * as Haptics from 'expo-haptics';
import type { ReactNode } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import Animated, { FadeIn, FadeOut, LinearTransition, ReduceMotion } from 'react-native-reanimated';

import { PRIMARY, fonts, meterColors, palette } from '@/shared/config';
import { useT } from '@/shared/lib/i18n';
import { useColorScheme } from '@/shared/lib/theme';

import { OPTION_ICONS } from '../config/option-icons';
import type { ResolvedOption } from '../model/steps';

/** Violet at low alpha behind a chosen chip. */
const PICKED_FILL = { light: 'rgba(139,92,246,0.14)', dark: 'rgba(139,92,246,0.22)' } as const;

/**
 * How much time, and what is at home, on one screen.
 *
 * Days and minutes are three-way picks with a recommended middle, so they sit
 * as two rows of segments rather than two lists. What is at home is a set of
 * chips, and every chip that unlocks an exercise says so under them as it is
 * picked: the answer visibly changes the plan.
 */
export function ScheduleStep({
  days,
  minutes,
  kit,
  picked,
  onPick,
  adds,
  reaction,
}: {
  days: readonly ResolvedOption[];
  minutes: readonly ResolvedOption[];
  kit: readonly ResolvedOption[];
  picked: { days: string | null; minutes: string | null; kit: readonly string[] };
  onPick: (key: 'planDays' | 'planMinutes' | 'equipment', next: string[]) => void;
  /** Exercise names the picked kit brings into the plan. */
  adds: readonly string[];
  reaction?: ReactNode;
}) {
  const scheme = useColorScheme();
  const meter = meterColors[scheme];
  const t = useT();

  const toggleKit = (value: string) => {
    Haptics.selectionAsync();
    if (value === 'none') {
      onPick('equipment', picked.kit.includes('none') ? [] : ['none']);
      return;
    }
    const without = picked.kit.filter((v) => v !== 'none');
    onPick('equipment', without.includes(value) ? without.filter((v) => v !== value) : [...without, value]);
  };

  return (
    <ScrollView style={styles.scroll} contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
      <Text style={[styles.section, { color: meter.label }]}>{t('onboarding.schedule.days')}</Text>
      <Segments options={days} value={picked.days} onChange={(v) => onPick('planDays', [v])} />

      <Text style={[styles.section, styles.sectionNext, { color: meter.label }]}>{t('onboarding.schedule.minutes')}</Text>
      <Segments options={minutes} value={picked.minutes} onChange={(v) => onPick('planMinutes', [v])} />

      <Text style={[styles.section, styles.sectionNext, { color: meter.label }]}>{t('onboarding.schedule.kit')}</Text>
      <View style={styles.chips}>
        {kit.map((option) => {
          const on = picked.kit.includes(option.value);
          const art = OPTION_ICONS[option.value] ?? OPTION_ICONS.default;
          const Glyph = art.icon;
          return (
            <Pressable
              key={option.value}
              accessibilityRole="checkbox"
              accessibilityState={{ checked: on }}
              accessibilityLabel={option.label}
              onPress={() => toggleKit(option.value)}
              style={({ pressed }) => [
                styles.chip,
                { borderColor: on ? PRIMARY : meter.track, backgroundColor: on ? PICKED_FILL[scheme] : 'transparent' },
                pressed && styles.pressed,
              ]}>
              <Glyph size={18} color={art.color} weight={art.weight ?? 'fill'} />
              <Text style={[styles.chipLabel, { color: palette[scheme].foreground }]} numberOfLines={1}>
                {option.label}
              </Text>
            </Pressable>
          );
        })}
      </View>

      {adds.length > 0 && (
        <Animated.View
          entering={FadeIn.duration(240).reduceMotion(ReduceMotion.System)}
          exiting={FadeOut.duration(140).reduceMotion(ReduceMotion.System)}
          layout={LinearTransition.duration(220)}
          style={[styles.adds, { backgroundColor: meter.iconTile }]}>
          <Text style={[styles.addsTitle, { color: meter.label }]}>{t('onboarding.schedule.adds')}</Text>
          <View style={styles.addsRow}>
            {adds.map((name) => (
              <Animated.View
                key={name}
                entering={FadeIn.duration(260).reduceMotion(ReduceMotion.System)}
                style={[styles.addChip, { backgroundColor: palette[scheme].card }]}>
                <Text style={[styles.addText, { color: palette[scheme].foreground }]} numberOfLines={1}>
                  {`+ ${name}`}
                </Text>
              </Animated.View>
            ))}
          </View>
        </Animated.View>
      )}
      {reaction}
    </ScrollView>
  );
}

/** Three choices side by side, each its label over its caption. */
function Segments({
  options,
  value,
  onChange,
}: {
  options: readonly ResolvedOption[];
  value: string | null;
  onChange: (next: string) => void;
}) {
  const scheme = useColorScheme();
  const colors = palette[scheme];
  const meter = meterColors[scheme];
  return (
    <View style={styles.segments}>
      {options.map((option) => {
        const on = option.value === value;
        return (
          <Pressable
            key={option.value}
            accessibilityRole="radio"
            accessibilityState={{ selected: on }}
            accessibilityLabel={option.caption != null ? `${option.label}, ${option.caption}` : option.label}
            onPress={() => {
              Haptics.selectionAsync();
              onChange(option.value);
            }}
            style={({ pressed }) => [
              styles.segment,
              { backgroundColor: on ? PICKED_FILL[scheme] : colors.card, borderColor: on ? PRIMARY : 'transparent' },
              pressed && styles.pressed,
            ]}>
            <Text style={[styles.segmentLabel, { color: colors.foreground }]} numberOfLines={1}>
              {option.label}
            </Text>
            {option.caption != null && (
              <Text style={[styles.segmentCaption, { color: on ? PRIMARY : meter.caption }]} numberOfLines={2}>
                {option.caption}
              </Text>
            )}
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  scroll: { flex: 1, marginTop: 22 },
  content: { paddingBottom: 12 },
  pressed: { opacity: 0.7 },
  section: { ...fonts.bold(14, 0.1), marginBottom: 10 },
  sectionNext: { marginTop: 22 },
  segments: { flexDirection: 'row', gap: 8 },
  segment: {
    flex: 1,
    minHeight: 64,
    paddingHorizontal: 8,
    paddingVertical: 10,
    borderRadius: 18,
    borderCurve: 'continuous',
    borderWidth: 1.5,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 2,
  },
  segmentLabel: fonts.bold(16, -0.2),
  segmentCaption: { ...fonts.semibold(12), lineHeight: 15, textAlign: 'center' },
  chips: { flexDirection: 'row', flexWrap: 'wrap', gap: 8 },
  chip: {
    height: 44,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 7,
    paddingHorizontal: 13,
    borderRadius: 22,
    borderWidth: 1.5,
  },
  chipLabel: fonts.semibold(15, -0.2),
  adds: {
    marginTop: 14,
    padding: 12,
    gap: 8,
    borderRadius: 18,
    borderCurve: 'continuous',
  },
  addsTitle: fonts.bold(13, 0.1),
  addsRow: { flexDirection: 'row', flexWrap: 'wrap', gap: 6 },
  addChip: { paddingHorizontal: 10, paddingVertical: 6, borderRadius: 12 },
  addText: fonts.semibold(13),
});
