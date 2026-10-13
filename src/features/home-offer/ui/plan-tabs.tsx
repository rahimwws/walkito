import * as Haptics from 'expo-haptics';
import { useEffect, useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import Animated, {
  ReduceMotion,
  interpolateColor,
  useAnimatedStyle,
  useReducedMotion,
  useSharedValue,
  withTiming,
  type SharedValue,
} from 'react-native-reanimated';

import { DEPTH, RAISED_BORDER, fonts, meterColors, palette, raised } from '@/shared/config';
import { SETTLE_EASING } from '@/shared/lib/motion';
import { Raised, useRaisedScheme } from '@/shared/ui/raised';

import { DEAL } from './deal-tone';

export type PlanTab = { key: string; title: string; caption: string };

const RADIUS = 16;

/**
 * The plans as a 3D switch: one raised segment each, the chosen one leaning
 * violet like a chosen answer card (face, border and lip), its words violet
 * too, so it is never colour alone that says which. The caption under each
 * name is the store's price for it.
 */
export function PlanTabs({
  tabs,
  selected,
  onSelect,
}: {
  tabs: readonly PlanTab[];
  selected: string;
  onSelect: (key: string) => void;
}) {
  const scheme = useRaisedScheme();
  const tokens = raised[scheme];
  const colors = palette[scheme];
  const meter = meterColors[scheme];

  return (
    <View style={styles.row} accessibilityRole="radiogroup">
      {tabs.map((tab) => {
        const on = tab.key === selected;
        return (
          <Raised
            key={tab.key}
            face={on ? tokens.selectedFill : tokens.surface}
            edge={on ? tokens.selectedEdge : tokens.edge}
            lip={on ? tokens.selectedEdge : tokens.lip}
            depth={DEPTH.md.outlinedLip + 1}
            radius={RADIUS}
            haptic="none"
            onPress={() => {
              if (on) return;
              void Haptics.selectionAsync();
              onSelect(tab.key);
            }}
            accessibilityRole="radio"
            accessibilityState={{ selected: on }}
            style={styles.segment}
            contentStyle={styles.face}>
            <Text
              style={[styles.title, { color: on ? tokens.selectedInk : colors.foreground }]}
              numberOfLines={1}
              maxFontSizeMultiplier={1.3}>
              {tab.title}
            </Text>
            <Text
              style={[styles.caption, { color: on ? tokens.selectedInk : meter.label }]}
              numberOfLines={1}
              adjustsFontSizeToFit
              minimumFontScale={0.8}
              maxFontSizeMultiplier={1.3}>
              {tab.caption}
            </Text>
          </Raised>
        );
      })}
    </View>
  );
}

/** The space between the comeback switch's rim and its thumb. */
const TRACK_PAD = 4;
const TRACK_RADIUS = 20;
/** The thumb's slide to the plan tapped. */
const THUMB_MS = 280;

/**
 * The comeback's plans as one dark segmented switch, in the card's own
 * colours (`DEAL`) so the two read as one piece: a white thumb under the
 * chosen plan, as the card's price pill is white, that slides to the one
 * tapped. Each segment's words cross from white to ink as the thumb passes
 * under them, so they are never white on white or ink on the dark track
 * mid-slide. The caption under each name is the store's price for it.
 *
 * With Reduce Motion the thumb moves without sliding.
 */
export function DealTabs({
  tabs,
  selected,
  onSelect,
}: {
  tabs: readonly PlanTab[];
  selected: string;
  onSelect: (key: string) => void;
}) {
  const reduced = useReducedMotion();
  const index = Math.max(0, tabs.findIndex((tab) => tab.key === selected));
  /** Inside the rim: what the thumb and the segments share. */
  const [inner, setInner] = useState(0);
  const slot = inner > 0 ? (inner - TRACK_PAD * 2) / tabs.length : 0;
  /** Where the thumb is, in segments: 0 under the first. */
  const at = useSharedValue(index);
  useEffect(() => {
    at.value = reduced
      ? index
      : withTiming(index, { duration: THUMB_MS, easing: SETTLE_EASING, reduceMotion: ReduceMotion.Never });
  }, [at, index, reduced]);
  const thumb = useAnimatedStyle(() => ({ transform: [{ translateX: at.value * slot }] }));

  return (
    <View
      accessibilityRole="radiogroup"
      onLayout={(event) => {
        const width = event.nativeEvent.layout.width - RAISED_BORDER * 2;
        setInner((prev) => (prev === width ? prev : width));
      }}
      style={[styles.track, { backgroundColor: DEAL.face, borderColor: DEAL.edge }]}>
      {slot > 0 && (
        <Animated.View
          pointerEvents="none"
          style={[styles.thumb, { width: slot, backgroundColor: DEAL.pill }, thumb]}
        />
      )}
      {tabs.map((tab, i) => (
        <DealTab
          key={tab.key}
          tab={tab}
          index={i}
          at={at}
          on={i === index}
          onPress={() => {
            if (i === index) return;
            void Haptics.selectionAsync();
            onSelect(tab.key);
          }}
        />
      ))}
    </View>
  );
}

function DealTab({
  tab,
  index,
  at,
  on,
  onPress,
}: {
  tab: PlanTab;
  index: number;
  at: SharedValue<number>;
  on: boolean;
  onPress: () => void;
}) {
  // 1 with the thumb right under this segment, 0 once it is a segment away.
  const title = useAnimatedStyle(() => ({
    color: interpolateColor(Math.max(0, 1 - Math.abs(at.value - index)), [0, 1], [DEAL.ink, DEAL.pillInk]),
  }));
  const caption = useAnimatedStyle(() => ({
    color: interpolateColor(Math.max(0, 1 - Math.abs(at.value - index)), [0, 1], [DEAL.label, DEAL.pillInk]),
  }));
  return (
    <Pressable
      onPress={onPress}
      accessibilityRole="radio"
      accessibilityState={{ selected: on }}
      style={styles.dealSegment}>
      <Animated.Text style={[styles.title, title]} numberOfLines={1} maxFontSizeMultiplier={1.3}>
        {tab.title}
      </Animated.Text>
      <Animated.Text
        style={[styles.caption, caption]}
        numberOfLines={1}
        adjustsFontSizeToFit
        minimumFontScale={0.8}
        maxFontSizeMultiplier={1.3}>
        {tab.caption}
      </Animated.Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  row: { flexDirection: 'row', gap: 10 },
  segment: { flex: 1 },
  face: {
    minHeight: 58,
    paddingVertical: 9,
    paddingHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 2,
  },
  title: fonts.heavy(16, -0.2),
  caption: fonts.semibold(13),
  track: {
    flexDirection: 'row',
    padding: TRACK_PAD,
    borderWidth: RAISED_BORDER,
    borderRadius: TRACK_RADIUS,
    borderCurve: 'continuous',
  },
  thumb: {
    position: 'absolute',
    top: TRACK_PAD,
    bottom: TRACK_PAD,
    left: TRACK_PAD,
    borderRadius: TRACK_RADIUS - TRACK_PAD,
    borderCurve: 'continuous',
  },
  dealSegment: {
    flex: 1,
    minHeight: 50,
    paddingVertical: 7,
    paddingHorizontal: 8,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 1,
  },
});
