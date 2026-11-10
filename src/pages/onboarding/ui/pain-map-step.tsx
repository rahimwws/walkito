import Tick02Icon from '@hugeicons/core-free-icons/Tick02Icon';
import { HugeiconsIcon } from '@hugeicons/react-native';
import * as Haptics from 'expo-haptics';
import { useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
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
import { useT, type Key } from '@/shared/lib/i18n';
import { useColorScheme } from '@/shared/lib/theme';

import { NO_PAIN, zonesIn } from '../model/pain-areas';

const SELECT_MS = 180;
const CHIP_HEIGHT = 46;
/** A place's name beside the leg: a row tall enough for a thumb. */
const PLACE_HEIGHT = 36;

/**
 * The places named beside the leg, from the calf down to the toes: the ones
 * people come with, and as many as stand beside the leg on an ordinary phone
 * without scrolling. The rest (the soleus, the front of the shin, the top of
 * the foot) stay on the drawing only; marked there, they are named in the
 * line under it. The inner ankle answers to "Ankle", the word for it.
 */
const PLACES: readonly { zone: LegZone; label: Key }[] = [
  { zone: 'calf', label: 'home.zone.calf' },
  { zone: 'tibia', label: 'home.zone.tibia' },
  { zone: 'achilles', label: 'home.zone.achilles' },
  { zone: 'inner_ankle', label: 'home.zone.ankle' },
  { zone: 'heel', label: 'home.zone.heel' },
  { zone: 'arch', label: 'home.zone.arch' },
  { zone: 'ball', label: 'home.zone.ball' },
  { zone: 'toes', label: 'home.zone.toes' },
];
const NAMED = new Set<LegZone>(PLACES.map((place) => place.zone));

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
 * Pointed at or picked, either one: the places are also named in a column
 * beside the leg, and a name and its spot on the drawing light together. The
 * drawing alone, with "Nothing hurts right now" as the only button on the
 * screen, did not say it could be touched: on the first day of paid installs
 * 16 of 31 people answered that nothing hurt, in an app they had installed
 * from an ad about sore feet, and 13 of the 14 rage taps in the whole flow
 * landed on this screen. A heel on a leg this size is narrower than a
 * fingertip; its name is a row.
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

  // The names beside the leg say what is marked; the line only adds what
  // has no name there, and the refusal of a fourth.
  const line = full
    ? t('onboarding.pain.full', { count: MAX_ZONES })
    : zones
        .filter((zone) => !NAMED.has(zone))
        .map((zone) => t(ZONE_LABEL_KEYS[zone]))
        .join(t('home.zoneJoin'));

  return (
    <View style={styles.wrap}>
      <View style={styles.stage}>
        <View style={styles.leg}>
          <LegMap selected={zones} onToggle={onZone} />
        </View>
        <ScrollView
          style={styles.places}
          contentContainerStyle={styles.placesContent}
          showsVerticalScrollIndicator={false}>
          {PLACES.map((place) => (
            <Chip
              key={place.zone}
              selected={zones.includes(place.zone)}
              label={t(place.label)}
              onPress={() => onZone(place.zone)}
              height={PLACE_HEIGHT}
            />
          ))}
        </ScrollView>
      </View>

      {/* Always laid out, empty or not, so the chip below never jumps as the
          first zone is marked. */}
      <Text style={[styles.line, { color: full ? colors.foreground : meter.caption }]} numberOfLines={1}>
        {line.length > 0 ? line : ' '}
      </Text>

      <View style={styles.noneSlot}>
        <Chip selected={none} label={t('onboarding.pain.none')} onPress={onNone} height={CHIP_HEIGHT} tick />
      </View>

      {/* Where the user first tells the app about pain, so where it says what
          it is not. App Review 1.4.1 wants health apps to say so in the app. */}
      <Text style={[styles.disclaimer, { color: meter.unit }]}>{t('onboarding.pain.disclaimer')}</Text>
    </View>
  );
}

/** A place's name, or "nothing hurts" (`tick`): outlined, and washed in the
 * violet every picked answer takes. */
function Chip({
  selected,
  label,
  onPress,
  height,
  tick = false,
}: {
  selected: boolean;
  label: string;
  onPress: () => void;
  height: number;
  tick?: boolean;
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
      style={({ pressed }) => pressed && { opacity: 0.7 }}>
      <Animated.View style={[styles.chip, { height, borderRadius: height / 2 }, chipStyle]}>
        {tick && (
          <HugeiconsIcon
            icon={Tick02Icon}
            size={18}
            color={selected ? PRIMARY : meter.label}
            strokeWidth={2}
          />
        )}
        <Text style={[styles.chipLabel, { color: colors.foreground }]} numberOfLines={1}>
          {label}
        </Text>
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
  // drawing's own aspect ratio. The names stand beside it, and scroll on a
  // phone too short for all nine.
  stage: {
    flex: 1,
    alignSelf: 'stretch',
    flexDirection: 'row',
    gap: 12,
  },
  leg: { flex: 1, alignItems: 'center' },
  places: { flex: 1 },
  placesContent: { flexGrow: 1, justifyContent: 'center', gap: 6 },
  line: {
    marginTop: 10,
    ...fonts.medium(14, -0.1),
    textAlign: 'center',
  },
  disclaimer: {
    marginTop: 14,
    ...fonts.medium(11.5),
    lineHeight: 16,
    textAlign: 'center',
  },
  noneSlot: {
    alignSelf: 'center',
    marginTop: 12,
  },
  chip: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    paddingHorizontal: 18,
    borderWidth: 1.5,
  },
  chipLabel: fonts.semibold(15, -0.2),
});
