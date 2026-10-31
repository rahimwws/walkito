import { useState } from 'react';
import { StyleSheet, Text, View, type StyleProp, type ViewStyle } from 'react-native';

import { fonts, palette, raised } from '@/shared/config';
import { useT } from '@/shared/lib/i18n';
import { useColorScheme } from '@/shared/lib/theme';
import { Ribbon } from '@/shared/ui/badge';
import { Card3D } from '@/shared/ui/card-3d';
import { MascotStill, blankSignRig } from '@/shared/ui/mascot';
import { ProgressBar3D } from '@/shared/ui/progress-bar-3d';

import { useStickers } from '../model/use-stickers';
import { StickersSheet } from './stickers-sheet';

/**
 * The mascot holding the blank sign, and where the sign is on it. Measured off
 * `assets-src/mascot/blank-sign.svg` in its 2048 frame, which is the rig's
 * box: the board spans 7-93% across and 43-74% down. The count is written on
 * the board, so the still is drawn rather than a live rig whose breath would
 * slide the board under the figures. Being still, it has nothing to pause
 * when the page is out of view.
 */
const SIGN = 190;
const BOARD = { left: 0.07, right: 0.93, top: 0.43, bottom: 0.74 } as const;

export type StickersCardProps = {
  style?: StyleProp<ViewStyle>;
  /** The album opened or closed, for a host that pauses its own mascots while
   * the sheet covers them. */
  onOpenChange?: (open: boolean) => void;
};

/**
 * The sticker album's cover: a ribbon, the mascot holding up how many are in,
 * and a bar filling toward the whole set. Tapping it opens the album.
 *
 * Reads everything itself, from the program's synced history: the host only
 * places it.
 */
export function StickersCard({ style, onOpenChange }: StickersCardProps) {
  const t = useT();
  const scheme = useColorScheme();
  const album = useStickers();
  const [open, setOpenState] = useState(false);
  const setOpen = (next: boolean) => {
    setOpenState(next);
    onOpenChange?.(next);
  };

  // The card's own face, which is what the mascot stands on: in the dark his
  // outline is drawn in it, so he reads cut out of the card.
  const surface = raised[scheme].surface;
  // The sign is written in the outline's colour, as `MascotStill` inks it.
  const signInk = scheme === 'dark' ? surface : palette.light.foreground;
  const collected = t('stickers.collected', { count: album.earned, total: album.total });

  return (
    <>
      <Card3D
        size="lg"
        material="solid"
        onPress={() => setOpen(true)}
        accessibilityLabel={collected}
        accessibilityHint={t('stickers.cardHint')}
        style={style}
        contentStyle={styles.content}>
        <Ribbon label={t('stickers.ribbon')} accent="amber" />

        <View style={styles.sign} accessibilityElementsHidden importantForAccessibility="no-hide-descendants">
          <MascotStill rig={blankSignRig} size={SIGN} surface={surface} />
          <View
            pointerEvents="none"
            style={[
              styles.board,
              {
                left: SIGN * BOARD.left,
                width: SIGN * (BOARD.right - BOARD.left),
                top: SIGN * BOARD.top,
                height: SIGN * (BOARD.bottom - BOARD.top),
              },
            ]}>
            <Text style={[styles.count, { color: signInk }]} numberOfLines={1} adjustsFontSizeToFit>
              {t('stickers.sign', { count: album.earned, total: album.total })}
            </Text>
          </View>
        </View>

        <ProgressBar3D
          value={album.total > 0 ? album.earned / album.total : 0}
          size="md"
          accent="amber"
          accessibilityLabel={t('stickers.ribbon')}
          accessibilityValueText={collected}
          style={styles.bar}
        />
      </Card3D>

      <StickersSheet visible={open} onClose={() => setOpen(false)} />
    </>
  );
}

const styles = StyleSheet.create({
  content: {
    paddingTop: 18,
    paddingBottom: 20,
  },
  sign: {
    alignSelf: 'center',
    width: SIGN,
    height: SIGN,
    marginTop: 6,
  },
  board: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  count: fonts.heavy(34, -0.8),
  bar: {
    marginTop: 14,
  },
});
