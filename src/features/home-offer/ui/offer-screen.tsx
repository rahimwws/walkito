import { useEffect, useState, type MutableRefObject } from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { expectReturn } from '@/entities/purchase';
import { fonts, meterColors, palette } from '@/shared/config';
import { useT } from '@/shared/lib/i18n';
import { useColorScheme } from '@/shared/lib/theme';
import { Glow } from '@/shared/ui/glow';
import { LegalLinks } from '@/shared/ui/subscription-terms';

import { useOfferPurchase, type PassSale } from '../model/use-offer-purchase';
import { useOfferScreen, type OfferGuard } from '../model/use-offer-screen';

import { OfferPanel } from './offer-panel';
import { PillButton } from './pill-button';

/**
 * How strongly the brand glow shows behind the offer: about what came through
 * when the offer stood over Home, whose glow was blurred and washed under it.
 */
const GLOW_OPACITY = 0.5;
/** A store that answers within this needs no spinner: the offer simply arrives. */
const SPINNER_AFTER_MS = 600;

/**
 * The offers after "Not now" on the paywall, as a screen of their own.
 *
 * Drawn by the paywall's own route (`pages/offer`) in place of the plans, for
 * somebody who skipped them: it is a hard paywall, so this is all of the app
 * they have until they buy. The stage decides what it says (`useOfferScreen`):
 * the one-time trial, the comeback against its deadline, then the standard
 * plans. On the app's own background with a soft, still brand glow, the panel
 * arrives as one score (`entrance.ts`): the headline types itself, then the
 * line under it, the card with its mascot, the button, the small print.
 *
 * No close button and no way into the app, by the founder's rule: the way on
 * is buying or restoring. A purchase hands over to the setup screens (the
 * root layout's guards). Android's back button leaves the app, as on any
 * screen with nowhere to go back to.
 *
 * Before the store has answered there is nothing to show but the background
 * (a spinner if it takes a while); if it cannot be reached, the screen says so
 * and can ask again, with Restore purchases, Terms and Privacy under it.
 *
 * `pass` is the host's pass checkout: with it the comeback, the limited offer,
 * carries the 3-month pass as its third card, and a Restore purchases that
 * finds nothing on the anonymous account of first launch offers its sign-in
 * (a pass is kept on an account). Its sheets belong inside the host's own
 * modal, which is why the host and not this screen mounts them.
 */
export function OfferScreen({ pass = null }: { pass?: PassSale | null }) {
  const { content, status, retry, guard } = useOfferScreen(pass != null);
  const [openedAt] = useState(() => Date.now());
  const spinner = useLate(status === 'loading', SPINNER_AFTER_MS);
  const scheme = useColorScheme();
  const meter = meterColors[scheme];
  const signInToRestore = pass?.signInToRestore;

  return (
    <View style={styles.fill}>
      <View pointerEvents="none" style={[StyleSheet.absoluteFill, { opacity: GLOW_OPACITY }]}>
        <Glow />
      </View>
      {content != null ? (
        // Keyed by what it is, so a change of stage (the trial missed, the
        // comeback's minutes up) arrives afresh rather than swapping words.
        <OfferPanel
          key={content.kind}
          content={content}
          guard={guard}
          openedAt={openedAt}
          pass={pass}
          purchase={{ signInToRestore }}
        />
      ) : status === 'unavailable' ? (
        <Unavailable guard={guard} onRetry={retry} signInToRestore={signInToRestore} />
      ) : spinner ? (
        <View style={styles.centre}>
          <ActivityIndicator color={meter.caption} />
        </View>
      ) : null}
    </View>
  );
}

/** True once `on` has held for `ms`; false again the moment it does not. */
function useLate(on: boolean, ms: number): boolean {
  const [late, setLate] = useState(false);
  useEffect(() => {
    if (!on) {
      setLate(false);
      return undefined;
    }
    const timer = setTimeout(() => setLate(true), ms);
    return () => clearTimeout(timer);
  }, [on, ms]);
  return on && late;
}

/**
 * The store could not be reached, or answered with no plan to sell. This
 * screen is the only one somebody who has not bought has, so it is never a
 * dead end: it says what is wrong, asks again on a tap (and by itself when
 * the app comes back to the foreground), and keeps Restore purchases within
 * reach for somebody who already paid on another phone.
 */
function Unavailable({
  guard,
  onRetry,
  signInToRestore,
}: {
  guard: MutableRefObject<OfferGuard>;
  onRetry: () => void;
  signInToRestore?: (onRestored: () => void) => void;
}) {
  const t = useT();
  const scheme = useColorScheme();
  const colors = palette[scheme];
  const meter = meterColors[scheme];
  const insets = useSafeAreaInsets();
  const { busy, notice, restore } = useOfferPurchase(guard, { signInToRestore });

  return (
    <View
      style={[
        styles.centre,
        styles.unavailable,
        { paddingTop: insets.top + 28, paddingBottom: Math.max(insets.bottom, 16) + 8 },
      ]}>
      <Text
        accessibilityLiveRegion="polite"
        style={[styles.message, { color: colors.foreground }]}
        maxFontSizeMultiplier={1.4}>
        {t('offer.storeUnreachable')}
      </Text>
      <PillButton label={t('error.retry')} onPress={onRetry} />
      {notice != null && (
        <Text
          accessibilityLiveRegion="polite"
          style={[styles.notice, { color: meter.label }]}
          maxFontSizeMultiplier={1.4}>
          {notice}
        </Text>
      )}
      {/* A tap on Terms or Privacy opens the browser: reading, not leaving. */}
      <View
        onTouchStart={() => {
          guard.current.linkAt = Date.now();
          expectReturn();
        }}>
        <LegalLinks onRestore={() => void restore()} disabled={busy} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  fill: { flex: 1 },
  centre: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  unavailable: { paddingHorizontal: 24, gap: 18 },
  message: { ...fonts.semibold(18, -0.2), lineHeight: 24, textAlign: 'center' },
  notice: { ...fonts.semibold(14), lineHeight: 19, textAlign: 'center' },
});
