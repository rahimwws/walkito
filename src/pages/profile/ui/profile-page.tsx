import ArrowLeft02Icon from '@hugeicons/core-free-icons/ArrowLeft02Icon';
import Delete02Icon from '@hugeicons/core-free-icons/Delete02Icon';
import Mail01Icon from '@hugeicons/core-free-icons/Mail01Icon';
import Settings02Icon from '@hugeicons/core-free-icons/Settings02Icon';
import StarIcon from '@hugeicons/core-free-icons/StarIcon';
import { HugeiconsIcon, type IconSvgElement } from '@hugeicons/react-native';
import * as Haptics from 'expo-haptics';
import { useIsFocused, useRouter } from 'expo-router';
import { useState } from 'react';
import { Linking, Platform, Pressable, ScrollView, StyleSheet, Text, View, useWindowDimensions, type ColorValue } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { currentDay, useStreak } from '@/entities/program';
import { firstName, useProfileEmail, useProfileName } from '@/entities/profile';
import { FollowSheet, INSTAGRAM } from '@/features/follow';
import {
  APP_STORE_REVIEW_URL,
  PLAY_STORE_URL,
  SUPPORT_EMAIL,
  accents,
  bitepal,
  bodyColors,
  colors,
  fonts,
  target,
} from '@/shared/config';
import { track } from '@/shared/lib/analytics';
import { useT } from '@/shared/lib/i18n';
import { FluentIcon, type FluentName } from '@/shared/ui/fluent-icon';
import { GroupedRow, GroupedSection } from '@/shared/ui/grouped-list';
import { Mascot, waveRig } from '@/shared/ui/mascot';
import { REPLAY_MASK } from '@/shared/ui/replay-mask';

import { DeleteAccountSheet } from './delete-account-sheet';
import { NotePreviewRow } from './note-preview-row';
import { ProfileScene } from './profile-scene';
import { ResetRow } from './reset-row';

const SCENE = 260;
const NUMBER_SCALE = 1.7;

/**
 * The person, as BitePal's character header (#97): a flat landscape with her
 * name and the day of the plan at the top left, the settings gear at the top
 * right and the mascot standing on the hill; then the two numbers this screen
 * honestly has as BitePal's number cards, and the rest as white grouped cards
 * with a colourful round icon on every row.
 *
 * A pushed screen rather than a sheet: it is where the App Store's required
 * exits live (the subscription terms, the privacy policy in Settings, and
 * account deletion), and those must be findable rather than dismissed past.
 */
export function ProfilePage() {
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const { width, fontScale } = useWindowDimensions();
  const focused = useIsFocused();
  const t = useT();
  const large = fontScale >= 1.35;

  const name = firstName(useProfileName());
  const streak = useStreak();
  const email = useProfileEmail();
  /** Where "Rate Walkito" goes on this phone: the store that sold the app. */
  const rateUrl = Platform.OS === 'ios' ? APP_STORE_REVIEW_URL : PLAY_STORE_URL;

  const [deleteOpen, setDeleteOpen] = useState(false);
  const [followOpen, setFollowOpen] = useState(false);

  const stats: { label: string; value: number; art: FluentName; tone: ColorValue }[] = [
    { label: t('profile.dayStreak'), value: streak.current, art: 'seedling', tone: bodyColors.calf },
    { label: t('profile.sessionsDone'), value: streak.total, art: 'strength', tone: bodyColors.heel },
  ];

  return (
    <View style={styles.screen} {...REPLAY_MASK}>
      <ScrollView
        contentInsetAdjustmentBehavior="never"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: Math.max(insets.bottom, 20) + 24 }}>
        <View style={{ height: SCENE + insets.top }}>
          <ProfileScene width={width} height={SCENE + insets.top} />
          <View style={[styles.bar, { top: insets.top + 8 }]}>
            <HeaderButton icon={ArrowLeft02Icon} label={t('common.back')} onPress={() => router.back()} />
            <HeaderButton icon={Settings02Icon} label={t('settings.title')} onPress={() => router.push('/settings')} />
          </View>
          <View style={[styles.who, { top: insets.top + 68 }]}>
            <Text style={styles.name} accessibilityRole="header" numberOfLines={2} maxFontSizeMultiplier={1.3}>
              {name.length > 0 ? name : t('profile.you')}
            </Text>
            <View style={styles.dayPill}>
              <Text style={styles.dayText} maxFontSizeMultiplier={1.4}>
                {t('home.today.dayN', { count: currentDay() })}
              </Text>
            </View>
          </View>
          <View style={styles.mascot} accessibilityElementsHidden importantForAccessibility="no-hide-descendants">
            <Mascot rig={waveRig} state="wave" size={150} paused={!focused} easterEgg={false} />
          </View>
        </View>

        <View style={styles.sheet}>
          <View style={[styles.stats, large && styles.statsStacked]}>
            {stats.map((stat) => (
              <View key={stat.label} style={[styles.stat, !large && styles.statHalf]} accessible accessibilityLabel={stat.label + ', ' + stat.value}>
                <View style={styles.statHead}>
                  <Text style={styles.statLabel}>{stat.label}</Text>
                  <View style={[styles.statIcon, { backgroundColor: bitepal.well }]}>
                    <FluentIcon name={stat.art} size={24} />
                  </View>
                </View>
                <Text style={styles.statValue} maxFontSizeMultiplier={NUMBER_SCALE}>
                  {stat.value}
                </Text>
              </View>
            ))}
          </View>

          {/* Instagram, above the app's own rows: the one thing on this
              screen that is about other people. */}
          <GroupedSection title={t('follow.section')}>
            <GroupedRow
              icon={INSTAGRAM.icon}
              tone={bodyColors.heel}
              label={t('follow.title')}
              hint={t('follow.rowHint')}
              onPress={() => {
                track('instagram_offer_viewed', { from: 'profile' });
                setFollowOpen(true);
              }}
            />
          </GroupedSection>

          <GroupedSection title={t('profile.sectionApp')}>
            <GroupedRow icon={Settings02Icon} tone={bodyColors.arch} label={t('settings.title')} onPress={() => router.push('/settings')} />
            {__DEV__ && <NotePreviewRow />}
            {/* The store's own review page, always one tap away. Hidden on
                Android until the Play listing is live. */}
            {rateUrl != null && (
              <GroupedRow
                icon={StarIcon}
                tone={bodyColors.toes}
                label={t('profile.rate')}
                onPress={() => {
                  track('rate_app_tapped', { from: 'profile' });
                  void Linking.openURL(rateUrl).catch(() => {});
                }}
              />
            )}
            <GroupedRow
              icon={Mail01Icon}
              tone={bodyColors.calf}
              label={t('profile.contactSupport')}
              onPress={() => {
                void Linking.openURL(`mailto:${SUPPORT_EMAIL}?subject=${encodeURIComponent('Walkito')}`).catch(() => {});
              }}
            />
          </GroupedSection>

          {/* The address Apple gave on the first sign-in: shown so the person
              sees what support would reach them on. Nothing to sign out of. */}
          {email.length > 0 && (
            <GroupedSection title={t('profile.sectionEmail')}>
              <GroupedRow icon={Mail01Icon} tone={bodyColors.ankle} label={email} />
            </GroupedSection>
          )}

          {/* Last, and the only destructive thing on the screen. */}
          <GroupedSection title={t('profile.sectionDanger')}>
            {__DEV__ && <ResetRow />}
            <GroupedRow
              icon={Delete02Icon}
              tone={accents.light.red.fill}
              label={t('profile.deleteAccount')}
              labelColor={accents.light.red.fill}
              onPress={() => setDeleteOpen(true)}
            />
          </GroupedSection>
        </View>
      </ScrollView>

      <DeleteAccountSheet visible={deleteOpen} onClose={() => setDeleteOpen(false)} />
      <FollowSheet visible={followOpen} from="profile" onClose={() => setFollowOpen(false)} />
    </View>
  );
}

/** A round white button over the scene: back, and the settings gear (#97). */
function HeaderButton({ icon, label, onPress }: { icon: IconSvgElement; label: string; onPress: () => void }) {
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={label}
      onPress={() => {
        void Haptics.selectionAsync();
        onPress();
      }}
      style={({ pressed }) => [styles.headerButton, pressed && styles.pressed]}>
      <HugeiconsIcon icon={icon} size={24} color={colors.text} strokeWidth={2} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1 },
  bar: { position: 'absolute', left: 20, right: 20, flexDirection: 'row', justifyContent: 'space-between' },
  headerButton: {
    width: target.min,
    height: target.min,
    borderRadius: target.min / 2,
    backgroundColor: 'rgba(255,255,255,0.86)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  pressed: { opacity: 0.6 },
  who: { position: 'absolute', left: 20, right: 150, gap: 6, alignItems: 'flex-start' },
  name: { ...fonts.heavy(34, -0.8), color: colors.text },
  dayPill: {
    minHeight: 32,
    justifyContent: 'center',
    paddingHorizontal: 12,
    borderRadius: 999,
    backgroundColor: 'rgba(255,255,255,0.86)',
  },
  dayText: { ...fonts.heavy(17), color: colors.text },
  mascot: { position: 'absolute', right: 12, bottom: 18 },
  /** The grey page rises over the scene's foot on a rounded edge (#97). */
  sheet: {
    marginTop: -28,
    paddingHorizontal: 16,
    paddingTop: 20,
    gap: 24,
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
    backgroundColor: colors.bg,
  },
  stats: { flexDirection: 'row', gap: 12 },
  statsStacked: { flexDirection: 'column' },
  stat: { backgroundColor: bitepal.card, borderRadius: bitepal.cardRadius, borderCurve: 'continuous', padding: 18, gap: 6 },
  statHalf: { flex: 1 },
  statHead: { flexDirection: 'row', alignItems: 'flex-start', gap: 8 },
  statLabel: { ...fonts.semibold(17), color: colors.text3, flex: 1 },
  statIcon: { width: 44, height: 44, borderRadius: 22, alignItems: 'center', justifyContent: 'center' },
  statValue: { ...fonts.heavy(44, -1), color: colors.text, fontVariant: ['tabular-nums'] },
});
