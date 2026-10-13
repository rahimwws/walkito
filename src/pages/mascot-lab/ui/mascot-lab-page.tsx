import { Redirect, Stack, useIsFocused } from 'expo-router';
import { useEffect, useRef, useState } from 'react';
import { ScrollView, StyleSheet, Text, useWindowDimensions, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { fonts, meterColors, palette } from '@/shared/config';
import { useColorScheme } from '@/shared/lib/theme';
import {
  Mascot,
  blankSignRig,
  celebrateRig,
  giftRig,
  handsUpRig,
  heartRig,
  idleRig,
  noInternetRig,
  offendedRig,
  painRig,
  peekBottomRig,
  peekSideRig,
  phoneRig,
  pointingRig,
  preloadMascotSounds,
  premiumRig,
  reminderRig,
  runningRig,
  sadRig,
  sleepingRig,
  surprisedRig,
  thinkingRig,
  thumbsUpRig,
  trophyRig,
  walkingRig,
  waveRig,
  type MascotHandle,
  type MascotRig,
  type MascotShot,
} from '@/shared/ui/mascot';

const RIGS: readonly MascotRig[] = [
  idleRig,
  celebrateRig,
  sadRig,
  thinkingRig,
  sleepingRig,
  pointingRig,
  thumbsUpRig,
  surprisedRig,
  trophyRig,
  runningRig,
  painRig,
  handsUpRig,
  giftRig,
  walkingRig,
  peekBottomRig,
  peekSideRig,
  heartRig,
  premiumRig,
  reminderRig,
  noInternetRig,
  offendedRig,
  waveRig,
  blankSignRig,
  phoneRig,
];

/** Each tick, the next mascot plays the next move, so every pose goes through every move. */
const SHOTS: readonly MascotShot[] = ['wave', 'happy', 'nod', 'celebrate', 'poke', 'cheer', 'present', 'hop'];
const TICK_MS = 700;

/**
 * Development only: every rigged mascot on one screen, running through all
 * its moves in turn, and each one pokeable. Where a move is tuned
 * on a phone before it goes into a screen. Open `walkito.dev://mascot-lab`.
 */
export function MascotLabPage() {
  const scheme = useColorScheme();
  const colors = palette[scheme];
  const meter = meterColors[scheme];
  const insets = useSafeAreaInsets();
  const { width } = useWindowDimensions();
  const size = Math.floor((width - 16 * 2 - 8 * 2) / 3);

  const focused = useIsFocused();
  const refs = useRef<Record<string, MascotHandle | null>>({});
  const [doing, setDoing] = useState<Record<string, string>>({});

  useEffect(() => {
    if (!__DEV__ || !focused) return undefined;
    preloadMascotSounds(['happy', 'sad', 'hmm', 'boing', 'cheer', 'gift', 'step', 'pop']);
    let tick = 0;
    const timer = setInterval(() => {
      const rig = RIGS[tick % RIGS.length];
      const shot = SHOTS[Math.floor(tick / RIGS.length) % SHOTS.length];
      refs.current[rig.name]?.play(shot);
      setDoing((prev) => ({ ...prev, [rig.name]: shot }));
      tick += 1;
    }, TICK_MS);
    return () => clearInterval(timer);
  }, [focused]);

  if (!__DEV__) return <Redirect href="/" />;

  return (
    <ScrollView
      contentContainerStyle={[styles.grid, { paddingTop: insets.top + 24, paddingBottom: insets.bottom + 24 }]}>
      <Stack.Screen options={{ headerShown: false }} />
      {RIGS.map((rig) => (
        <View key={rig.name} style={[styles.cell, { width: size }]}>
          <View style={{ height: size * 0.2 }} />
          <Mascot
            ref={(handle) => {
              refs.current[rig.name] = handle;
            }}
            rig={rig}
            size={size}
            state="idle"
            paused={!focused}
            surface={colors.background}
            onPress={() => undefined}
          />
          <Text style={[styles.name, { color: colors.foreground }]}>{rig.name}</Text>
          <Text style={[styles.doing, { color: meter.caption }]}>{doing[rig.name] ?? 'idle'}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  grid: {
    flexGrow: 1,
    alignContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    rowGap: 8,
  },
  cell: { alignItems: 'center' },
  name: { ...fonts.bold(14, -0.2), marginTop: 4 },
  doing: { ...fonts.medium(12), marginTop: 1 },
});
