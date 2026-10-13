import FireIcon from '@hugeicons/core-free-icons/FireIcon';
import { HugeiconsIcon } from '@hugeicons/react-native';
import { useEffect, useRef } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { fonts } from '@/shared/config';
import { useT } from '@/shared/lib/i18n';
import { Mascot, celebrateRig, idleRig, type MascotHandle, type MascotRig } from '@/shared/ui/mascot';
import { Raised, faceFor, useRaisedScheme } from '@/shared/ui/raised';
import { STAT_TILE_STAGGER_MS, StatTile } from '@/shared/ui/stat-tile';

/** The celebration's dock rises over 320 ms (`CelebrationSheet`): the jump and
 * the tiles wait for it to land, so each beat is its own. */
const LANDED_MS = 300;
/** How far the feet press into the card's edge, as a share of the mascot: on
 * the card, not hovering a hair above it. */
const FOOT_SINK = 0.035;

/** Where the feet are in the mascot's square, from the top: the rig's ground
 * line in its own units. */
function feetAt(rig: MascotRig): number {
  return (rig.ground[1] - rig.box.y) / rig.box.size;
}

/**
 * The mascot on the card's edge.
 *
 * A finished session gets the jump: crouch, leap with the arms flung up,
 * land, two little bounces, once. A session stopped because it hurt gets the
 * everyday mascot and one slow nod: it counts, and he agrees, but nothing
 * about that is a party.
 *
 * Silent either way. The sheet's own haptic is the sound of the moment, and
 * the mascot's files play through the ring switch until the app has
 * `expo-audio` (`shared/ui/mascot/sound.ts`): a cheer on every finished
 * session would be heard in a silent meeting.
 *
 * Mounted with the sheet and unmounted with it, so the jump plays once per
 * opening and the idle breath never runs behind a closed sheet. `paused` holds
 * it still while the pain question covers it.
 */
export function DoneMascot({
  calm,
  size,
  surface,
  paused,
}: {
  calm: boolean;
  size: number;
  /** The card's colour: in the dark the outline is drawn in what he stands on. */
  surface: string;
  paused: boolean;
}) {
  const rig = calm ? idleRig : celebrateRig;
  const mascot = useRef<MascotHandle>(null);

  useEffect(() => {
    const timer = setTimeout(() => mascot.current?.play(calm ? 'nod' : 'celebrate'), LANDED_MS);
    return () => clearTimeout(timer);
    // Once per mount: the sheet mounts this fresh on every opening.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <View style={{ marginBottom: -Math.round((1 - feetAt(rig) + FOOT_SINK) * size) }}>
      <Mascot ref={mascot} rig={rig} size={size} surface={surface} paused={paused} />
    </View>
  );
}

const CHIP_LIP = 3;

/**
 * The run, in an orange chip standing on its lip: the streak's colour, the
 * streak's flame. A count, never a verdict, so it has no other colour to be.
 */
export function StreakChip({ count }: { count: number }) {
  const t = useT();
  const scheme = useRaisedScheme();
  const tone = faceFor(scheme, 'orange');
  const label = t('widgets.sessionDoneStreak', { count });
  return (
    <Raised
      face={tone.face}
      lip={tone.lip}
      depth={CHIP_LIP}
      radius={12}
      accessibilityRole="text"
      accessibilityLabel={label}
      style={styles.chipOuter}
      contentStyle={styles.chip}>
      <HugeiconsIcon icon={FireIcon} size={16} color={tone.label} strokeWidth={2.4} />
      <Text style={[styles.chipLabel, { color: tone.label }]} numberOfLines={1} maxFontSizeMultiplier={1.3}>
        {label}
      </Text>
    </Raised>
  );
}

/**
 * What was done, in three tiles: the session's minutes, its moves, and every
 * day of care so far. Showing up and effort only, never a pain figure, and
 * the minutes are the plan's dose rather than the clock, so nothing here can
 * be raised by doing more than was asked.
 */
export function DoneTiles({ minutes, moves, care }: { minutes: number; moves: number; care: number }) {
  const t = useT();
  return (
    <View style={styles.tiles}>
      <StatTile
        label={t('sessionDone.tileSession')}
        value={minutes}
        format={(value) => t('sessionDone.minutes', { count: Math.round(value) })}
        emoji="timer"
        accent="blue"
        delayMs={LANDED_MS}
        accessibilityLabel={t('sessionDone.tileSessionA11y', { count: minutes })}
      />
      <StatTile
        label={t('sessionDone.tileMoves')}
        value={moves}
        emoji="strength"
        accent="violet"
        delayMs={LANDED_MS + STAT_TILE_STAGGER_MS}
        accessibilityLabel={t('sessionDone.tileMovesA11y', { count: moves })}
      />
      <StatTile
        label={t('sessionDone.tileShowedUp')}
        value={care}
        emoji="seedling"
        accent="teal"
        delayMs={LANDED_MS + STAT_TILE_STAGGER_MS * 2}
        accessibilityLabel={t('sessionDone.tileShowedUpA11y', { count: care })}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  chipOuter: {
    alignSelf: 'center',
    marginTop: 10,
  },
  chip: {
    height: 34,
    paddingHorizontal: 12,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  chipLabel: fonts.heavy(15, 0.1),
  tiles: {
    alignSelf: 'stretch',
    flexDirection: 'row',
    gap: 8,
    marginTop: 18,
  },
});
