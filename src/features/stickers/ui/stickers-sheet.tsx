import { useEffect, useRef, useState } from 'react';
import { Modal, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { todayKey } from '@/entities/program';
import { fonts, meterColors, palette } from '@/shared/config';
import { track } from '@/shared/lib/analytics';
import { useT } from '@/shared/lib/i18n';
import { useColorScheme } from '@/shared/lib/theme';
import { PrimaryButton } from '@/shared/ui/primary-button';
import { StickerTile, type StickerState } from '@/shared/ui/sticker-tile';

import { openAlbum } from '../model/store';
import type { StickerId } from '../model/stickers';
import { useStickers } from '../model/use-stickers';
import { STICKER_RIGS } from './rigs';

const SIDE_PAD = 20;

export type StickersSheetProps = {
  visible: boolean;
  onClose: () => void;
};

/**
 * The album: all twenty stickers in a grid. Earned ones in colour with their
 * pose, the rest as grey silhouettes of theirs, each with its short name so a
 * locked one says what it is for.
 *
 * The newest one earned since the album was last opened arrives with a pop,
 * once the sheet has finished rising; the others go in as they are.
 */
export function StickersSheet({ visible, onClose }: StickersSheetProps) {
  const [shown, setShown] = useState(false);

  useEffect(() => {
    if (!visible) setShown(false);
  }, [visible]);

  return (
    <Modal
      animationType="slide"
      presentationStyle="pageSheet"
      visible={visible}
      onShow={() => setShown(true)}
      onRequestClose={onClose}>
      {/* Mounted only while the sheet is up, so the album is worked out and
          opened once per look, never behind a closed sheet. */}
      <Album shown={shown} onClose={onClose} />
    </Modal>
  );
}

function Album({ shown, onClose }: { shown: boolean; onClose: () => void }) {
  const t = useT();
  const scheme = useColorScheme();
  const colors = palette[scheme];
  const meter = meterColors[scheme];
  const insets = useSafeAreaInsets();
  const album = useStickers();

  /** The one sticker that arrives with a pop this time, decided as it opens. */
  const [arrival, setArrival] = useState<StickerId | null>(null);
  const earned = useRef(album.earnedIds);
  earned.current = album.earnedIds;
  const opened = useRef(false);

  useEffect(() => {
    // Once per look. A second run would find everything already seen and take
    // the arrival back.
    if (opened.current) return;
    opened.current = true;
    track('sticker_book_opened');
    setArrival(openAlbum(earned.current, todayKey()));
  }, []);

  return (
    <View style={[styles.root, { backgroundColor: colors.background }]}>
      <View style={[styles.grabber, { backgroundColor: meter.track }]} />
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <Text style={[styles.title, { color: colors.foreground }]} accessibilityRole="header">
          {t('stickers.albumTitle')}
        </Text>
        <Text style={[styles.count, { color: colors.foreground }]}>
          {t('stickers.collected', { count: album.earned, total: album.total })}
        </Text>
        <Text style={[styles.blurb, { color: meter.caption }]}>{t('stickers.albumBlurb')}</Text>

        <View style={styles.grid}>
          {album.entries.map((entry) => {
            const name = entry.label(t);
            const state: StickerState = !entry.earned ? 'locked' : entry.id === arrival ? 'new' : 'earned';
            const a11y =
              state === 'locked'
                ? t('stickers.lockedA11y', { name })
                : state === 'new'
                  ? t('stickers.newA11y', { name })
                  : t('stickers.earnedA11y', { name });
            return (
              <View key={entry.id} style={styles.cell}>
                <StickerTile
                  rig={STICKER_RIGS[entry.id]}
                  state={state}
                  accent={entry.accent}
                  size="md"
                  id={entry.id}
                  label={name}
                  // Held until the sheet has risen, so the arrival is seen.
                  paused={!shown}
                  accessibilityLabel={a11y}
                />
              </View>
            );
          })}
        </View>
      </ScrollView>

      <View style={[styles.footer, { paddingBottom: Math.max(insets.bottom, 20) + 8 }]}>
        <PrimaryButton label={t('common.done')} onPress={onClose} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1 },
  grabber: { alignSelf: 'center', width: 40, height: 5, borderRadius: 3, marginTop: 8 },
  content: { paddingHorizontal: SIDE_PAD, paddingTop: 20, paddingBottom: 24 },
  title: fonts.heavy(28, -0.7),
  count: { ...fonts.bold(17, -0.2), marginTop: 4 },
  blurb: { ...fonts.medium(15), lineHeight: 21, marginTop: 6 },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    rowGap: 20,
    marginTop: 24,
  },
  cell: {
    width: '33.333%',
    alignItems: 'center',
  },
  footer: { paddingHorizontal: SIDE_PAD, paddingTop: 8 },
});
