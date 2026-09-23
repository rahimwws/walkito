import Tick02Icon from '@hugeicons/core-free-icons/Tick02Icon';
import { HugeiconsIcon } from '@hugeicons/react-native';
import * as Haptics from 'expo-haptics';
import { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import Animated, {
  Easing,
  ReduceMotion,
  interpolateColor,
  useAnimatedStyle,
  useDerivedValue,
  withTiming,
} from 'react-native-reanimated';

import {
  LegMap,
  MAX_ZONES,
  ZONE_LABEL_KEYS,
  toggleZone,
  type LegZone,
} from '@/entities/leg-zone';
import { PRIMARY, fonts, meterColors, palette } from '@/shared/config';
import { useT } from '@/shared/lib/i18n';
import { useColorScheme } from '@/shared/lib/theme';

import { NO_PAIN, zonesIn } from '../model/pain-areas';

const SELECT_MS = 180;
const CHIP_HEIGHT = 46;

/** The chip's chosen fill, written out for `interpolateColor` — the same
 * violet wash the choice chips use, so "picked" looks the same everywhere. */
const PICKED_FILL = {
  light: 'rgba(139,92,246,0.14)',
  dark: 'rgba(139,92,246,0.22)',
} as const;

export type PainMapStepProps = {
  /** The stored answer: zones, or `['none']`. */
  value: readonly string[];
  onChange: (next: string[]) => void;
};

/**
 * Where it usually hurts, pointed at rather than picked from a list.
 *
 * The list this replaced asked people to name anatomy — "achilles", "shin" —
 * and a runner with a sore spot above the heel does not always know which of
 * those it is. The map is the one the daily check-in uses, so this is also the
 * user's first go at a control they will meet every day.
 *
 * "Nothing hurts" stays a first-class answer, as a chip under the leg. The
 * product is prevention as much as rehab, and a screen that could only be
 * passed by marking an injury would tell healthy runners they are in the wrong
 * app. The two exclude each other: marking a zone clears the chip, and the
 * chip clears the zones.
 */
export function PainMapStep({ value, onChange }: PainMapStepProps) {
  const scheme = useColorScheme();
  const colors = palette[scheme];
  const meter = meterColors[scheme];
  const t = useT();

  const zones = zonesIn(value);
  const none = value.includes(NO_PAIN);
  /** Set when a fourth zone is refused, so the tap is answered — see
   * `toggleZone` for why a silent refusal reads as a broken map. */
  const [full, setFull] = useState(false);

  const onZone = (zone: LegZone) => {
    const next = toggleZone(zones, zone);
    if (next == null) {
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Warning);
      setFull(true);
      return;
    }
    Haptics.selectionAsync();
    setFull(false);
    onChange([...next]);
  };

  const onNone = () => {
    Haptics.selectionAsync();
    setFull(false);
    onChange(none ? [] : [NO_PAIN]);
  };

  const line = full
    ? t('onboarding.pain.full', { count: MAX_ZONES })
    : zones.map((zone) => t(ZONE_LABEL_KEYS[zone])).join(t('home.zoneJoin'));

  return (
    <View style={styles.wrap}>
      <View style={styles.stage}>
        <LegMap selected={zones} onToggle={onZone} />
      </View>

      {/* Always laid out, empty or not, so the chip below never jumps as the
          first zone is marked. */}
      <Text style={[styles.line, { color: full ? colors.foreground : meter.caption }]} numberOfLines={1}>
        {line.length > 0 ? line : ' '}
      </Text>

      <NoneChip selected={none} label={t('onboarding.pain.none')} onPress={onNone} />
    </View>
  );
}

function NoneChip({
  selected,
  label,
  onPress,
}: {
  selected: boolean;
  label: string;
  onPress: () => void;
}) {
  const scheme = useColorScheme();
  const colors = palette[scheme];
  const meter = meterColors[scheme];

  const chosen = useDerivedValue(
    () =>
      withTiming(selected ? 1 : 0, {
        duration: SELECT_MS,
        easing: Easing.bezier(0.23, 1, 0.32, 1),
        reduceMotion: ReduceMotion.System,
      }),
    [selected],
  );

  const chipStyle = useAnimatedStyle(() => ({
    borderColor: interpolateColor(chosen.value, [0, 1], [meter.track, PRIMARY]),
    backgroundColor: interpolateColor(chosen.value, [0, 1], ['transparent', PICKED_FILL[scheme]]),
  }));

  return (
    <Pressable
      accessibilityRole="checkbox"
      accessibilityState={{ checked: selected }}
      accessibilityLabel={label}
      onPress={onPress}
      style={({ pressed }) => [styles.chipSlot, pressed && { opacity: 0.7 }]}>
      <Animated.View style={[styles.chip, chipStyle]}>
        <HugeiconsIcon
          icon={Tick02Icon}
          size={18}
          color={selected ? PRIMARY : meter.label}
          strokeWidth={2}
        />
        <Text style={[styles.chipLabel, { color: colors.foreground }]}>{label}</Text>
      </Animated.View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
    marginTop: 18,
  },
  // The leg takes whatever height is left; its width follows from the
  // drawing's own aspect ratio, so it is centred rather than stretched.
  stage: {
    flex: 1,
    alignSelf: 'stretch',
    alignItems: 'center',
  },
  line: {
    marginTop: 10,
    fontSize: 14,
    fontFamily: fonts.medium,
    letterSpacing: -0.1,
    textAlign: 'center',
  },
  chipSlot: {
    alignSelf: 'center',
    marginTop: 12,
  },
  chip: {
    height: CHIP_HEIGHT,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    paddingHorizontal: 18,
    borderRadius: CHIP_HEIGHT / 2,
    borderWidth: 1.5,
  },
  chipLabel: {
    fontSize: 15,
    fontFamily: fonts.semibold,
    letterSpacing: -0.2,
  },
});
