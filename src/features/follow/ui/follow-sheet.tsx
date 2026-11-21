import * as Haptics from 'expo-haptics';
import { useLocalSearchParams, useNavigation } from 'expo-router';
import { useEffect, useRef } from 'react';
import { Linking, Pressable, StyleSheet, Text, View } from 'react-native';

import { colors, fonts, radius, target } from '@/shared/config';
import { track } from '@/shared/lib/analytics';
import { useT } from '@/shared/lib/i18n';
import { useSheetHandlers, useSheetRoute } from '@/shared/lib/sheet-route';
import { Button } from '@/shared/ui/button';
import { SheetScreen } from '@/shared/ui/sheet';

import { INSTAGRAM } from '../config/instagram';

const ROUTE = 'follow';

export type FollowSheetProps = {
  visible: boolean;
  /** Where it was opened from, for analytics: by itself on the third day of
   * use, or from Profile. */
  from: 'auto' | 'profile';
  onClose: () => void;
};

/**
 * Follow Walkito on Instagram: short moves for the feet, real stories, and
 * what is coming next, posted by Rahim himself. Offered once on the third
 * day of use, and always from Profile.
 *
 * Outside the app on purpose. A feed inside it would need reporting, blocking
 * and moderation (App Review 1.2); an account the founder runs, and reads the
 * replies to, is the place for that.
 *
 * The sheet is the native form sheet route `/follow` (`FollowSheetScreen`);
 * this keeps the hosts' `visible` / `onClose` API and opens it.
 */
export function FollowSheet({ visible, from, onClose }: FollowSheetProps) {
  useSheetRoute(ROUTE, visible, { pathname: '/sheet/[name]', params: { name: 'follow', from } }, null, onClose);
  return null;
}

/** The handle, two lines from Rahim, and two answers. Closing it any way but
 * "Follow" counts as dismissed. */
export function FollowSheetScreen() {
  useSheetHandlers<null>(ROUTE);
  const navigation = useNavigation();
  const params = useLocalSearchParams<{ from?: string }>();
  const from: FollowSheetProps['from'] = params.from === 'auto' ? 'auto' : 'profile';
  const t = useT();
  const followed = useRef(false);

  useEffect(
    () => () => {
      if (!followed.current) track('instagram_offer_dismissed', { from });
    },
    [from],
  );

  const follow = () => {
    followed.current = true;
    track('instagram_follow_tapped', { from });
    void Linking.openURL(INSTAGRAM.url).catch(() => {});
    navigation.goBack();
  };
  const later = () => {
    Haptics.selectionAsync();
    navigation.goBack();
  };

  const founder = t('follow.founder');

  return (
    <SheetScreen
      eyebrow={INSTAGRAM.handle}
      title={t('follow.title')}
      footer={
        <>
          <Button label={t('follow.cta')} icon={INSTAGRAM.icon} iconPosition="leading" onPress={follow} />
          <Button label={t('follow.later')} variant="ghost" onPress={later} />
        </>
      }>
      {/* Two lines in his voice, signed: who is in there, and what for. */}
      <View style={styles.note}>
        <Text style={styles.noteText}>{t('follow.note')}</Text>
        <View style={styles.sign}>
          <View style={styles.initial}>
            <Text style={styles.initialText}>{founder.slice(0, 1)}</Text>
          </View>
          <Text style={styles.signText}>{founder}</Text>
        </View>
      </View>
    </SheetScreen>
  );
}

const styles = StyleSheet.create({
  note: {
    borderRadius: radius.card,
    borderCurve: 'continuous',
    padding: 20,
    backgroundColor: colors.bg,
  },
  noteText: { ...fonts.regular(19), color: colors.text },
  sign: { flexDirection: 'row', alignItems: 'center', gap: 10, marginTop: 14, minHeight: target.min - 16 },
  initial: {
    width: 32,
    height: 32,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.ink,
  },
  initialText: { ...fonts.bold(17), color: colors.onInk },
  signText: { ...fonts.semibold(17), color: colors.text2 },
});
