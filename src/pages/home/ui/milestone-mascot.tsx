import { useIsFocused } from 'expo-router';
import { useEffect, useRef } from 'react';
import { View } from 'react-native';

import { BIG_MILESTONE } from '@/entities/program';
import { palette } from '@/shared/config';
import { usePlanOver } from '@/shared/lib/program';
import { useColorScheme } from '@/shared/lib/theme';
import {
  Mascot,
  celebrateRig,
  thumbsUpRig,
  trophyRig,
  type MascotHandle,
  type MascotRig,
  type MascotShot,
} from '@/shared/ui/mascot';
import { useSplashRevealed } from '@/shared/ui/splash';

/** The emblem's own square: he stands where the badge used to. */
const SIZE = 132;
/** The sheet's dock rises over 320 ms (`CelebrationSheet`): his move waits for
 * it to land, so the two beats are each their own. */
const LANDED_MS = 300;
/** How far the feet press into the card's edge, as a share of him: on the card,
 * not hovering a hair above it. */
const FOOT_SINK = 0.035;

/** Where the feet are in the mascot's square, from the top: the rig's ground
 * line in its own units. */
function feetAt(rig: MascotRig): number {
  return (rig.ground[1] - rig.box.y) / rig.box.size;
}

/**
 * Who stands on a milestone's card, and the one thing he does.
 *
 * Three and seven days get the thumbs up; ten, the one with the confetti, gets
 * the jump; a month and a hundred days get the trophy. Every rung is a run of
 * days shown up for, never a pain figure, so a prize is never a prize for how
 * the body felt.
 */
function poseFor(days: number): { rig: MascotRig; shot: MascotShot } {
  if (days > BIG_MILESTONE) return { rig: trophyRig, shot: 'celebrate' };
  if (days === BIG_MILESTONE) return { rig: celebrateRig, shot: 'celebrate' };
  return { rig: thumbsUpRig, shot: 'happy' };
}

/**
 * The mascot on the streak milestone's card, in the emblem's place.
 *
 * Mounted with the sheet and gone with it, so his move plays once per opening
 * and his breathing never runs behind a closed sheet. The sheet can open while
 * Home is not what is on screen (a run reached under the plan or another tab,
 * or at launch under the splash), so he holds still and keeps his move until
 * Home is in front, the plan is down and the splash has gone.
 */
export function MilestoneMascot({ days, paused = false }: { days: number; paused?: boolean }) {
  const scheme = useColorScheme();
  const focused = useIsFocused();
  const planOver = usePlanOver();
  const revealed = useSplashRevealed();
  const seen = focused && !planOver && revealed && !paused;
  const { rig, shot } = poseFor(days);
  const mascot = useRef<MascotHandle>(null);
  const played = useRef(false);

  useEffect(() => {
    if (played.current || !seen) return undefined;
    const timer = setTimeout(() => {
      played.current = true;
      mascot.current?.play(shot);
    }, LANDED_MS);
    return () => clearTimeout(timer);
  }, [seen, shot]);

  return (
    <View style={{ marginBottom: -Math.round((1 - feetAt(rig) + FOOT_SINK) * SIZE) }}>
      <Mascot ref={mascot} rig={rig} size={SIZE} surface={palette[scheme].card} paused={!seen} />
    </View>
  );
}
