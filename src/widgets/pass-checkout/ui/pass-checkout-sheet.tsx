import { useEffect, useState } from 'react';
import { ActivityIndicator, Modal, Platform, Pressable, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { SignInOptions } from '@/features/sign-in';
import { fonts, meterColors, palette } from '@/shared/config';
import { useLanguage, useT } from '@/shared/lib/i18n';
import { useColorScheme } from '@/shared/lib/theme';
import { Button3D } from '@/shared/ui/button-3d';
import { FluentIcon } from '@/shared/ui/fluent-icon';

/**
 * Where the pass checkout is, as its sheet shows it.
 *
 * - `sign-in`: an account first. A pass is kept on the account, so it works
 *   on every phone signed in to it; the anonymous account of first launch is
 *   kept and given the sign-in (`emailMode: 'create'`), so nothing is lost.
 * - `setting-up`: the store said yes and the server's days are on their way
 *   (`settlePass`, 10 s at most). Calm, and not to be closed: it is brief.
 * - `set`: a subscription still renews beside the pass, which is queued after
 *   it. The one thing left to do is turn its renewal off.
 *
 * Nothing shows while the store's own sheet is up (`idle`).
 */
export type CheckoutStage =
  | { readonly kind: 'idle' }
  | { readonly kind: 'sign-in' }
  | { readonly kind: 'setting-up' }
  | {
      readonly kind: 'set';
      /** When the 3 months start (the subscription's period end), or null
       * when the server has not said yet. */
      readonly startsAt: number | null;
    };

export type PassCheckoutSheetProps = {
  stage: CheckoutStage;
  /** Closed by the person: the sign-in's scrim, Android's back. */
  onClose: () => void;
  onSignedIn: () => void;
  onTurnOffRenewal: () => void;
  onDone: () => void;
  /** iOS: the sheet has finished sliding away. */
  onHidden: () => void;
};

/**
 * The pass checkout's own sheet, rising from the bottom over whatever sells
 * the pass. Its host mounts it inside its own modal (the offer wall, the
 * cancel flow, the offers sheet), so it rises over that rather than under it.
 *
 * On `palette.card`, the solid surface: no glass, so no fade can catch one.
 * The last stage it showed stays drawn while it slides away.
 */
export function PassCheckoutSheet({
  stage,
  onClose,
  onSignedIn,
  onTurnOffRenewal,
  onDone,
  onHidden,
}: PassCheckoutSheetProps) {
  const scheme = useColorScheme();
  const colors = palette[scheme];
  const meter = meterColors[scheme];
  const insets = useSafeAreaInsets();
  const t = useT();
  const language = useLanguage();
  const visible = stage.kind !== 'idle';

  // What the sheet shows while it slides away: the stage before `idle`.
  const [last, setLast] = useState<CheckoutStage>(stage);
  useEffect(() => {
    if (stage.kind !== 'idle') setLast(stage);
  }, [stage]);
  const shown = stage.kind !== 'idle' ? stage : last;

  // Google not on this phone (no Play Services), or Apple's sheet not here:
  // email leads, as on the save screen after the first purchase.
  const [platform, setPlatform] = useState(true);
  useEffect(() => {
    if (stage.kind === 'sign-in') setPlatform(true);
  }, [stage.kind]);

  const closable = shown.kind === 'sign-in';
  const date = (at: number) =>
    new Intl.DateTimeFormat(language, { day: 'numeric', month: 'long', year: 'numeric' }).format(new Date(at));

  const body = (() => {
    switch (shown.kind) {
      case 'sign-in':
        return (
          <>
            <FluentIcon name="calendar" size={44} style={styles.art} />
            <Text accessibilityRole="header" style={[styles.title, { color: colors.foreground }]}>
              {t('pass.signIn.title')}
            </Text>
            <Text style={[styles.text, { color: meter.caption }]}>{t('pass.signIn.body')}</Text>
            <SignInOptions
              emailMode="create"
              platform={platform}
              onSignedIn={({ outcome }) => {
                if (outcome === 'signed-in') onSignedIn();
              }}
              onNoAccount={(outcome) => {
                if (outcome === 'unavailable') setPlatform(false);
              }}
            />
          </>
        );
      case 'setting-up':
        return (
          <>
            <ActivityIndicator color={meter.caption} style={styles.art} />
            <Text accessibilityRole="header" style={[styles.title, { color: colors.foreground }]}>
              {t('pass.setup.title')}
            </Text>
            <Text accessibilityLiveRegion="polite" style={[styles.text, { color: meter.caption }]}>
              {t('pass.setup.body')}
            </Text>
          </>
        );
      case 'set':
        return (
          <>
            <FluentIcon name="check" size={44} style={styles.art} />
            <Text accessibilityRole="header" style={[styles.title, { color: colors.foreground }]}>
              {t('pass.set.title')}
            </Text>
            <Text style={[styles.text, { color: meter.caption }]}>
              {shown.startsAt != null ? t('pass.set.body', { date: date(shown.startsAt) }) : t('pass.set.bodyNoDate')}
            </Text>
            <View style={styles.actions}>
              <Button3D
                label={t('pass.set.turnOff')}
                accessibilityHint={t(Platform.OS === 'ios' ? 'cancel.anywayHintIos' : 'cancel.anywayHintAndroid')}
                onPress={onTurnOffRenewal}
                fullWidth
              />
              <Button3D variant="ghost" size="md" label={t('pass.set.done')} onPress={onDone} />
            </View>
          </>
        );
      case 'idle':
        return null;
    }
  })();

  return (
    <Modal
      visible={visible}
      transparent
      animationType="slide"
      statusBarTranslucent
      onRequestClose={closable ? onClose : () => undefined}
      onDismiss={onHidden}>
      <Pressable
        accessibilityRole={closable ? 'button' : undefined}
        accessibilityLabel={closable ? t('common.close') : undefined}
        disabled={!closable}
        style={styles.scrim}
        onPress={onClose}
      />
      <View style={[styles.sheet, { backgroundColor: colors.card, paddingBottom: Math.max(insets.bottom, 16) + 8 }]}>
        {body}
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  scrim: { flex: 1, backgroundColor: 'rgba(0,0,0,0.4)' },
  sheet: {
    paddingTop: 26,
    paddingHorizontal: 22,
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
    borderCurve: 'continuous',
    gap: 10,
  },
  art: { alignSelf: 'center', marginBottom: 4 },
  title: { ...fonts.heavy(24, -0.6), lineHeight: 29, textAlign: 'center' },
  text: { ...fonts.regular(16), lineHeight: 22, textAlign: 'center', marginBottom: 10 },
  actions: { gap: 6, alignItems: 'stretch' },
});
