import Cancel01Icon from '@hugeicons/core-free-icons/Cancel01Icon';
import { HugeiconsIcon } from '@hugeicons/react-native';
import { useEffect, useRef, useState, type ReactNode } from 'react';
import { ActivityIndicator, Modal, Pressable, StyleSheet, Text, View } from 'react-native';

import { fonts, meterColors, palette } from '@/shared/config';
import { track } from '@/shared/lib/analytics';
import { useT } from '@/shared/lib/i18n';
import { useColorScheme } from '@/shared/lib/theme';
import { Glow } from '@/shared/ui/glow';

import type { PassSale } from '../model/use-offer-purchase';
import type { OfferGuard } from '../model/use-offer-screen';
import { useOfferSheet, type OfferSheetKind } from '../model/use-offer-sheet';

import { OfferPanel } from './offer-panel';
import { PillButton } from './pill-button';

/** As behind the offer screen: the brand glow, softened. */
const GLOW_OPACITY = 0.5;
/** Room over the headline for the close button, in a sheet that starts below
 * the status bar. */
const TOP_INSET = 64;
const ROUND = 36;

/**
 * The offer's cards in a page sheet of their own, opened from inside the app
 * and closed with a button or a swipe: outside the hard wall, and outside the
 * offer screen's stages (no deadline, no push, nothing moved on).
 *
 * - `limited`: the limited offer's three cards, the year chosen, then
 *   lifetime and the 3-month pass, with the store's prices and no countdown.
 *   The App Review account's "Special offers" row in Settings: the comeback
 *   is shown only to somebody who skipped the paywall, which a reviewer
 *   signed in to a granted account never is.
 * - `standard`: the standard plans, as the offer screen shows them once the
 *   comeback is over. Home's card for a pass that is ending.
 *
 * The same panel as the offer screen (`OfferPanel`), so the cards, the words
 * and the disclosure are the ones a customer sees. A purchase or a restore
 * closes the sheet; the pass goes through `pass`, the host's checkout, whose
 * sheets are `children`: inside this modal, so they rise over it.
 */
export function OfferSheet({
  visible,
  kind,
  onClose,
  pass = null,
  children,
}: {
  visible: boolean;
  kind: OfferSheetKind;
  onClose: () => void;
  /** The host's pass checkout. Without it the pass card is not offered. */
  pass?: PassSale | null;
  /** The pass checkout's sheets, mounted inside this one. */
  children?: ReactNode;
}) {
  const scheme = useColorScheme();
  const colors = palette[scheme];
  const meter = meterColors[scheme];
  const t = useT();
  const { content, status, retry } = useOfferSheet(kind, visible, pass != null);
  const guard = useRef<OfferGuard>({ busy: false, linkAt: 0 });
  const [openedAt, setOpenedAt] = useState(() => Date.now());
  useEffect(() => {
    if (visible) setOpenedAt(Date.now());
  }, [visible]);

  // The pass on the cards, counted once per opening.
  const passOnCard = content?.kind === 'comeback' && content.plans.some((p) => p.slot === 'pass');
  useEffect(() => {
    if (visible && passOnCard) track('pass_offer_view', { placement: 'limited_offer' });
  }, [visible, passOnCard]);

  return (
    <Modal visible={visible} animationType="slide" presentationStyle="pageSheet" onRequestClose={onClose}>
      <View style={[styles.root, { backgroundColor: colors.background }]}>
        <View pointerEvents="none" style={[StyleSheet.absoluteFill, { opacity: GLOW_OPACITY }]}>
          <Glow />
        </View>
        {content != null ? (
          // Keyed by the opening, so each one arrives with its own entrance.
          <OfferPanel
            key={`${content.kind}:${openedAt}`}
            content={content}
            guard={guard}
            openedAt={openedAt}
            pass={pass}
            topInset={TOP_INSET}
            purchase={{ armsSetup: false, onPurchased: onClose }}
          />
        ) : status === 'unavailable' ? (
          <View style={[styles.centre, styles.unavailable]}>
            <Text
              accessibilityLiveRegion="polite"
              style={[styles.message, { color: colors.foreground }]}
              maxFontSizeMultiplier={1.4}>
              {t('offer.storeUnreachable')}
            </Text>
            <PillButton label={t('error.retry')} onPress={retry} />
          </View>
        ) : (
          <View style={styles.centre}>
            <ActivityIndicator color={meter.caption} />
          </View>
        )}
        <Pressable
          accessibilityRole="button"
          accessibilityLabel={t('common.close')}
          onPress={onClose}
          hitSlop={10}
          style={({ pressed }) => [styles.close, { backgroundColor: meter.iconTile }, pressed && styles.pressed]}>
          <HugeiconsIcon icon={Cancel01Icon} size={18} color={colors.foreground} strokeWidth={2.2} />
        </Pressable>
      </View>
      {children}
    </Modal>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1 },
  centre: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  unavailable: { paddingHorizontal: 24, gap: 18 },
  message: { ...fonts.semibold(18, -0.2), lineHeight: 24, textAlign: 'center' },
  close: {
    position: 'absolute',
    top: 14,
    right: 16,
    width: ROUND,
    height: ROUND,
    borderRadius: ROUND / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  pressed: { opacity: 0.6 },
});
