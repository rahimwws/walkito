import * as Haptics from 'expo-haptics';
import { useNavigation } from 'expo-router';
import { useEffect, useRef, useState } from 'react';
import { Linking, Platform, StyleSheet, Text } from 'react-native';

import { usePassWindow, useSubscription } from '@/entities/purchase';
import { deleteAccount, resetOnboarding } from '@/entities/session';
import { clearClips } from '@/widgets/session-player';
import { accents, colors, fonts, target } from '@/shared/config';
import { useT } from '@/shared/lib/i18n';
import { useSheetHandlers, useSheetRoute } from '@/shared/lib/sheet-route';
import { Button } from '@/shared/ui/button';
import { PrimaryButton } from '@/shared/ui/primary-button';
import { SheetScreen } from '@/shared/ui/sheet';

const ROUTE = 'delete-account';

/** Where a subscription is cancelled. The store's own page, not ours: deleting
 * a Walkito account cannot touch a subscription Apple or Google bills. */
const MANAGE_SUBSCRIPTIONS = Platform.select({
  android: 'https://play.google.com/store/account/subscriptions',
  default: 'https://apps.apple.com/account/subscriptions',
});

export type DeleteAccountSheetProps = {
  visible: boolean;
  onClose: () => void;
};

/**
 * The confirmation before the one action in this app that cannot be undone.
 *
 * Two steps rather than one, and the second names what goes: a single tap on a
 * red row is how people delete months of their own history by mistake.
 * The list is specific — "your data" is a phrase that lets someone assume their
 * streak is safe somewhere.
 *
 * The native form sheet route `/delete-account` (`DeleteAccountSheetScreen`);
 * this keeps Profile's `visible` / `onClose` API and opens it.
 */
export function DeleteAccountSheet({ visible, onClose }: DeleteAccountSheetProps) {
  useSheetRoute(ROUTE, visible, '/sheet/delete-account', null, onClose);
  return null;
}

export function DeleteAccountSheetScreen() {
  useSheetHandlers<null>(ROUTE);
  const navigation = useNavigation();
  const t = useT();
  /** Somebody whose subscription renews is told that deleting the account
   * leaves it billing, and where to cancel it: Apple's guidance for apps that
   * sell auto-renewing subscriptions. Not for a lifetime purchase, a
   * subscription already set not to renew, or a 3-month pass, none of which
   * will charge again; and not while the store is still being asked. */
  const held = useSubscription();
  const renewing = held?.kind === 'subscription' && held.willRenew;
  /** A pass running, or queued behind a subscription: its days are counted on
   * the account, so they go with it, and the sheet says so. */
  const pass = usePassWindow();
  const passKept = pass.expiresAt != null && pass.expiresAt > Date.now();

  const [busy, setBusy] = useState(false);
  const [problem, setProblem] = useState<string | null>(null);
  /** Deleted: back to the questionnaire once the sheet has gone, so it does
   * not stay up over the onboarding the guard swaps in. */
  const deleted = useRef(false);

  // No swiping it away halfway through a deletion.
  useEffect(() => {
    navigation.setOptions({ gestureEnabled: !busy });
  }, [busy, navigation]);

  useEffect(
    () => () => {
      // There is no account, no programme and no name left, so Home would
      // render an empty shell of a screen, and the guard that chooses between
      // the two stacks is exactly this flag.
      if (deleted.current) resetOnboarding();
    },
    [],
  );

  const close = () => {
    if (!busy) navigation.goBack();
  };

  const confirm = async () => {
    if (busy) return;
    setBusy(true);
    setProblem(null);
    const result = await deleteAccount();
    // The cached clips are files, not storage keys, so the entity's `clearAll`
    // cannot reach them, and an entity may not import the widget that owns
    // them. "Delete everything" has to mean it.
    clearClips();
    setBusy(false);

    if (result.status === 'local-only') {
      // Local storage is already cleared at this point, so the sheet cannot
      // pretend nothing happened. It says which half failed, and the user is
      // left signed out with an empty app rather than half-deleted in silence.
      setProblem(t('profile.deleteLocalOnly'));
      return;
    }

    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
    deleted.current = true;
    navigation.goBack();
  };

  return (
    <SheetScreen
      title={t('profile.deleteTitle')}
      onClose={busy ? undefined : close}
      footer={
        <>
          <PrimaryButton
            label={busy ? t('profile.deleting') : t('profile.deleteConfirm')}
            disabled={busy}
            // The only red button in the app. Destructive actions are the one
            // place colour is allowed to carry meaning here; everywhere else
            // the rule is that colour never judges.
            tint={{ fill: accents.light.red.fill, label: colors.onInk }}
            onPress={() => void confirm()}
          />
          <Button label={t('profile.keepAccount')} variant="ghost" onPress={close} disabled={busy} />
        </>
      }>
      <Text style={styles.blurb}>{t('profile.deleteBlurb')}</Text>

      {passKept && <Text style={styles.blurb}>{t('profile.deletePass')}</Text>}

      {renewing && (
        <>
          <Text style={styles.blurb}>
            {Platform.OS === 'android' ? t('profile.deleteSubscriptionAndroid') : t('profile.deleteSubscription')}
          </Text>
          <Text
            accessibilityRole="link"
            onPress={() => {
              Haptics.selectionAsync();
              Linking.openURL(MANAGE_SUBSCRIPTIONS).catch(() => {});
            }}
            suppressHighlighting
            style={styles.manage}>
            {t('profile.manageSubscription')}
          </Text>
        </>
      )}

      {problem != null && <Text style={styles.problem}>{problem}</Text>}
    </SheetScreen>
  );
}

const styles = StyleSheet.create({
  blurb: { ...fonts.regular(19), color: colors.text2 },
  manage: {
    ...fonts.semibold(19),
    color: colors.accent,
    minHeight: target.min,
    textAlignVertical: 'center',
    paddingVertical: 12,
  },
  problem: { ...fonts.medium(17), color: colors.warn },
});
