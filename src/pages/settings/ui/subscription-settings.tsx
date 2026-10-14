import ArrowRight01Icon from '@hugeicons/core-free-icons/ArrowRight01Icon';
import ArrowUpRight01Icon from '@hugeicons/core-free-icons/ArrowUpRight01Icon';
import { HugeiconsIcon } from '@hugeicons/react-native';
import * as Haptics from 'expo-haptics';
import { useEffect, useRef, useState } from 'react';
import { Platform, Pressable, StyleSheet, Text, View } from 'react-native';

import { openStoreSubscriptions, useSubscription, type Subscription } from '@/entities/purchase';
import { fonts, meterColors, palette } from '@/shared/config';
import { useLanguage, useT } from '@/shared/lib/i18n';
import { useColorScheme } from '@/shared/lib/theme';

import { endCancelPreview, useCancelPreview } from '../model/cancel-preview';

import { CancelFlow } from './cancel-flow';

/** How a renewing plan is named under the row, by its billing period. */
const RENEWS = {
  annual: 'cancel.row.renewsAnnual',
  monthly: 'cancel.row.renewsMonthly',
  weekly: 'cancel.row.renewsWeekly',
} as const;

/**
 * The preview opens the flow by itself once Settings has finished rising: iOS
 * refuses to present a page while the form sheet under it is still moving.
 */
const PREVIEW_OPEN_MS = 700;

/** Past a page sheet's slide away: if iOS has not said it is gone by then,
 * it is taken as gone (`settled`). */
const MANAGE_FALLBACK_MS = 900;

/**
 * Settings → Subscription: the plan held, and the way to manage it.
 *
 * Only for somebody a store bills. Access granted by account, a lapsed
 * subscriber browsing their history and anybody with nothing bought get no
 * section at all: there is nothing of theirs here to manage. Three rows,
 * one at a time:
 *
 * - **renewing**: "Manage subscription", the plan and its renewal date. It
 *   opens the cancel flow (`CancelFlow`), which asks why first, and keeps
 *   "Cancel anyway" — the store's own page — one tap away on every screen;
 * - **renewal off**: the same row says so, with the date access lasts until,
 *   and opens the store's page straight away: there is nothing left to talk
 *   anybody out of;
 * - **lifetime**: a plain row that says it is theirs for good, and does nothing.
 *
 * The section reads the store when it mounts and again whenever the app comes
 * back to the front (`useSubscription`), so a renewal turned off on the
 * store's page is on the row by the time the person is back.
 */
export function SubscriptionSettings() {
  const scheme = useColorScheme();
  const colors = palette[scheme];
  const meter = meterColors[scheme];
  const t = useT();
  const language = useLanguage();
  const real = useSubscription();
  const preview = useCancelPreview();
  const held: Subscription | null | undefined = preview?.subscription ?? real;
  const [open, setOpen] = useState(false);
  /** "Cancel anyway" on iOS: the store's sheet waits for ours to have gone. */
  const manageOnDismiss = useRef(false);

  const previewId = preview?.id;
  useEffect(() => {
    if (previewId == null) return undefined;
    const timer = setTimeout(() => setOpen(true), PREVIEW_OPEN_MS);
    return () => clearTimeout(timer);
  }, [previewId]);

  if (held == null) return null;

  const date = (at: number) =>
    new Intl.DateTimeFormat(language, { day: 'numeric', month: 'long', year: 'numeric' }).format(new Date(at));

  if (held.kind === 'lifetime') {
    return (
      <View style={styles.root}>
        <Text style={[styles.sectionTitle, { color: meter.caption }]}>{t('cancel.row.section')}</Text>
        <View style={[styles.group, { backgroundColor: meter.track }]}>
          <View style={styles.row}>
            <View style={styles.rowText}>
              <Text style={[styles.label, { color: colors.foreground }]}>{t('cancel.row.lifetime')}</Text>
              <Text style={[styles.hint, { color: meter.caption }]}>{t('cancel.row.lifetimeHint')}</Text>
            </View>
          </View>
        </View>
      </View>
    );
  }

  const renewing = held.willRenew;
  const hint = (() => {
    if (held.expiresAt == null) return t('cancel.row.manageHint');
    if (!renewing) return t('cancel.row.ends', { date: date(held.expiresAt) });
    if (held.periodType === 'trial') return t('cancel.row.trial', { date: date(held.expiresAt) });
    return t(RENEWS[held.period === 'lifetime' ? 'annual' : held.period], { date: date(held.expiresAt) });
  })();

  const press = () => {
    Haptics.selectionAsync();
    if (renewing) setOpen(true);
    else void openStoreSubscriptions(held);
  };

  /**
   * The flow's sheet has gone: on iOS, the moment it reports so, and in any
   * case once a slide away is over. The store's page opens then if "Cancel
   * anyway" asked for it, and a preview ends, so the row goes back to what
   * the store says. Safe to run twice.
   */
  const settled = () => {
    if (manageOnDismiss.current) {
      manageOnDismiss.current = false;
      void openStoreSubscriptions(held);
    }
    endCancelPreview();
  };

  const close = () => {
    setOpen(false);
    setTimeout(settled, MANAGE_FALLBACK_MS);
  };

  const cancelAnyway = () => {
    if (Platform.OS === 'ios') {
      // Apple's sheet is presented over the app's top screen, and ours is it
      // until it has slid away; `onDismissed` opens the store once it has.
      // The timer is the belt to that brace: whatever the sheet reports, the
      // tap on "Cancel anyway" always ends on the store's page.
      manageOnDismiss.current = true;
      setOpen(false);
      setTimeout(settled, MANAGE_FALLBACK_MS);
      return;
    }
    // Google Play is an app of its own: nothing here is in its way.
    setOpen(false);
    void openStoreSubscriptions(held);
    setTimeout(settled, MANAGE_FALLBACK_MS);
  };

  return (
    <View style={styles.root}>
      <Text style={[styles.sectionTitle, { color: meter.caption }]}>{t('cancel.row.section')}</Text>
      <View style={[styles.group, { backgroundColor: meter.track }]}>
        <Pressable
          accessibilityRole="button"
          accessibilityHint={renewing ? undefined : t(Platform.OS === 'ios' ? 'cancel.anywayHintIos' : 'cancel.anywayHintAndroid')}
          onPress={press}
          style={({ pressed }) => [styles.row, pressed && styles.pressed]}>
          <View style={styles.rowText}>
            <Text style={[styles.label, { color: colors.foreground }]}>{t('cancel.row.manage')}</Text>
            <Text style={[styles.hint, { color: meter.caption }]}>{hint}</Text>
          </View>
          <HugeiconsIcon
            icon={renewing ? ArrowRight01Icon : ArrowUpRight01Icon}
            size={18}
            color={meter.unit}
            strokeWidth={2}
          />
        </Pressable>
      </View>

      <CancelFlow
        visible={open}
        held={held}
        preview={preview}
        onClose={close}
        onCancelAnyway={cancelAnyway}
        onDismissed={settled}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  root: { marginTop: 24 },
  sectionTitle: { ...fonts.bold(12, 0.1), marginBottom: 8 },
  group: { borderRadius: 22, borderCurve: 'continuous', overflow: 'hidden' },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    paddingVertical: 14,
    paddingHorizontal: 16,
  },
  pressed: { opacity: 0.6 },
  rowText: { flex: 1 },
  label: fonts.semibold(16, -0.2),
  hint: { ...fonts.medium(13), marginTop: 1 },
});
