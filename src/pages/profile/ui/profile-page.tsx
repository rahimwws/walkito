import ArrowLeft02Icon from '@hugeicons/core-free-icons/ArrowLeft02Icon';
import ArrowRight01Icon from '@hugeicons/core-free-icons/ArrowRight01Icon';
import Delete02Icon from '@hugeicons/core-free-icons/Delete02Icon';
import Mail01Icon from '@hugeicons/core-free-icons/Mail01Icon';
import Settings02Icon from '@hugeicons/core-free-icons/Settings02Icon';
import StarIcon from '@hugeicons/core-free-icons/StarIcon';
import { HugeiconsIcon, type IconSvgElement } from '@hugeicons/react-native';
import * as Haptics from 'expo-haptics';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Linking, Platform, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { useStreak } from '@/entities/program';
import { firstName, useProfileEmail, useProfileName } from '@/entities/profile';
import { APP_STORE_REVIEW_URL, PLAY_STORE_URL, SUPPORT_EMAIL, accents, fonts, meterColors, palette } from '@/shared/config';
import { track } from '@/shared/lib/analytics';
import { useT } from '@/shared/lib/i18n';
import { useColorScheme } from '@/shared/lib/theme';
import { REPLAY_MASK } from '@/shared/ui/replay-mask';

import { DeleteAccountSheet } from './delete-account-sheet';
import { NotePreviewRow } from './note-preview-row';
import { ResetRow } from './reset-row';

/**
 * The person, and the three things they can do about their account.
 *
 * A screen rather than a sheet, unlike everything else reached from the header.
 * A sheet is for an aside you dismiss back into what you were doing; this is a
 * place you go. It is also where the App Store's required exits live — the
 * subscription terms, the privacy policy, and account deletion — and those must
 * be findable rather than dismissed past.
 */
export function ProfilePage() {
  const router = useRouter();
  const scheme = useColorScheme();
  const colors = palette[scheme];
  const meter = meterColors[scheme];
  const insets = useSafeAreaInsets();
  const t = useT();

  const name = useProfileName();
  const streak = useStreak();
  const email = useProfileEmail();
  /** Where "Rate Walkito" goes on this phone: the store that sold the app. */
  const rateUrl = Platform.OS === 'ios' ? APP_STORE_REVIEW_URL : PLAY_STORE_URL;

  const [deleteOpen, setDeleteOpen] = useState(false);

  const greeting = firstName(name);

  return (
    <View style={styles.screen} {...REPLAY_MASK}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingTop: insets.top + 12,
          paddingHorizontal: 20,
          paddingBottom: Math.max(insets.bottom, 20) + 24,
        }}>
        {/* The screen is pushed with no header, so it carries its own way
            back. Same arrow, same size and same hit slop as the session
            player's — one gesture learned once. */}
        <Pressable
          accessibilityRole="button"
          accessibilityLabel={t('common.back')}
          onPress={() => router.back()}
          hitSlop={12}
          style={({ pressed }) => [styles.back, pressed && { opacity: 0.5 }]}>
          <HugeiconsIcon
            icon={ArrowLeft02Icon}
            size={26}
            color={colors.foreground}
            strokeWidth={2}
          />
        </Pressable>

        <Text style={[styles.name, { color: colors.foreground }]}>
          {greeting.length > 0 ? greeting : t('profile.you')}
        </Text>

        {/* Two numbers, because two is what this screen has honestly got. A
            grid of six padded out with derived variations of the same figure is
            the shape a profile screen takes when it has nothing to say. */}
        <View style={styles.stats}>
          <Stat
            label={t('profile.dayStreak')}
            value={String(streak.current)}
            tint={accents[scheme].orange.fill}
          />
          <Stat label={t('profile.sessionsDone')} value={String(streak.total)} tint={meter.ink} />
        </View>

        <Section title={t('profile.sectionApp')}>
          <Row
            icon={Settings02Icon}
            // The screen it opens owns this word, so it is read from there
            // rather than written twice.
            label={t('settings.title')}
            onPress={() => {
              Haptics.selectionAsync();
              router.push('/settings');
            }}
          />
          <NotePreviewRow />
          {/* The store's own review page, always one tap away — not only at the
              wins where Apple's prompt may or may not appear (see
              `useReviewAtWin`). Hidden on Android until the Play listing is live. */}
          {rateUrl != null && (
            <Row
              icon={StarIcon}
              label={t('profile.rate')}
              onPress={() => {
                Haptics.selectionAsync();
                track('rate_app_tapped', { from: 'profile' });
                void Linking.openURL(rateUrl).catch(() => {});
              }}
            />
          )}
          <Row
            icon={Mail01Icon}
            label={t('profile.contactSupport')}
            onPress={() => {
              Haptics.selectionAsync();
              void Linking.openURL(
                `mailto:${SUPPORT_EMAIL}?subject=${encodeURIComponent('Walkito')}`,
              ).catch(() => {});
            }}
          />
        </Section>

        {/* The address, not a session. Apple returns an email only on the
            very first authorisation, so this is the one copy of it — shown so
            the user can see what support would reach them on, and so a blank
            here is visible rather than discovered later. There is no account
            behind it and nothing to sign out of. */}
        {email.length > 0 && (
          <Section title={t('profile.sectionEmail')}>
            <View style={styles.row}>
              <HugeiconsIcon icon={Mail01Icon} size={20} color={meter.caption} strokeWidth={1.8} />
              <Text style={[styles.rowLabel, { color: colors.foreground }]}>{email}</Text>
            </View>
          </Section>
        )}

        {/* Last, and the only destructive thing on the screen. Apple requires an
            in-app way to delete an account for any app that creates one, and
            this app creates an anonymous identity on first launch. */}
        <Section title={t('profile.sectionDanger')}>
          {/* Above the irreversible one, and only in a development build. */}
          <ResetRow />
          <Row
            icon={Delete02Icon}
            label={t('profile.deleteAccount')}
            tint={accents[scheme].red.fill}
            onPress={() => {
              Haptics.selectionAsync();
              setDeleteOpen(true);
            }}
          />
        </Section>
      </ScrollView>

      <DeleteAccountSheet visible={deleteOpen} onClose={() => setDeleteOpen(false)} />
    </View>
  );
}

function Stat({ label, value, tint }: { label: string; value: string; tint: string }) {
  const scheme = useColorScheme();
  const meter = meterColors[scheme];
  return (
    <View style={[styles.stat, { backgroundColor: meter.track }]}>
      <Text style={[styles.statValue, { color: tint }]}>{value}</Text>
      <Text style={[styles.statLabel, { color: meter.caption }]}>{label}</Text>
    </View>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  const scheme = useColorScheme();
  const meter = meterColors[scheme];
  return (
    <View style={styles.section}>
      <Text style={[styles.sectionTitle, { color: meter.caption }]}>{title}</Text>
      <View style={[styles.card, { backgroundColor: meter.track }]}>{children}</View>
    </View>
  );
}

function Row({
  icon,
  label,
  value,
  hint,
  tint,
  onPress,
}: {
  icon: IconSvgElement;
  label: string;
  value?: string;
  /** A second line under the label, for what the row is worth. */
  hint?: string;
  tint?: string;
  onPress: () => void;
}) {
  const scheme = useColorScheme();
  const colors = palette[scheme];
  const meter = meterColors[scheme];
  const colour = tint ?? colors.foreground;
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={label}
      onPress={onPress}
      style={({ pressed }) => [styles.row, pressed && { opacity: 0.6 }]}>
      <HugeiconsIcon icon={icon} size={20} color={colour} strokeWidth={1.8} />
      <View style={styles.rowText}>
        <Text style={[styles.rowLabel, { color: colour }]}>{label}</Text>
        {hint != null && <Text style={[styles.rowHint, { color: meter.caption }]}>{hint}</Text>}
      </View>
      {value != null && <Text style={[styles.rowValue, { color: meter.caption }]}>{value}</Text>}
      <HugeiconsIcon icon={ArrowRight01Icon} size={18} color={meter.unit} strokeWidth={1.8} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1 },
  back: { alignSelf: 'flex-start', marginBottom: 14 },
  name: fonts.heavy(34, -1),
  stats: { flexDirection: 'row', gap: 12, marginTop: 20 },
  stat: {
    flex: 1,
    borderRadius: 22,
    borderCurve: 'continuous',
    paddingVertical: 16,
    paddingHorizontal: 16,
  },
  statValue: fonts.heavy(30, -0.8),
  statLabel: { ...fonts.medium(13), marginTop: 2 },
  section: { marginTop: 28 },
  sectionTitle: { ...fonts.bold(12, 0.1), marginBottom: 8 },
  card: { borderRadius: 22, borderCurve: 'continuous', overflow: 'hidden' },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    paddingVertical: 15,
    paddingHorizontal: 16,
  },
  rowText: { flex: 1 },
  rowLabel: fonts.semibold(16, -0.2),
  rowHint: { ...fonts.medium(13), marginTop: 1 },
  rowValue: fonts.medium(14),
});
