import { useRouter } from 'expo-router';
import { NativeTabs } from 'expo-router/native-tabs';
import { useState } from 'react';
import { Platform, View } from 'react-native';
import { runOnJS, useAnimatedReaction } from 'react-native-reanimated';

import { useYoureInPresenter } from '@/pages/youre-in';
import { colors } from '@/shared/config/tokens';
import { useT } from '@/shared/lib/i18n';
import { ProgramProvider, useProgram } from '@/shared/lib/program';
import { OverlayHost } from '@/shared/ui/overlay-host';

/**
 * Four native tabs (spec §6): Today, Plan, Exercises, Progress. The bar is
 * the system's own, so on iOS 26+ it is Liquid Glass and on older iOS and
 * Android it is the platform's solid bar. Labels always show and the bar
 * never minimizes: people 50+ lose a bar that shrinks away.
 *
 * Plan and Exercises pad their own scroll for the status bar on iOS. Left on,
 * the tab switches the first scroll view it finds to automatic insets, and on
 * Plan whether it finds it depends on what has mounted by then, so the title
 * sat under the status bar on some launches and twice as low on others.
 */
export function TabsLayout() {
  const router = useRouter();
  return (
    <ProgramProvider onOpen={() => router.navigate('/plan')} onClose={() => router.navigate('/')}>
      <TabsChrome />
    </ProgramProvider>
  );
}

/** True while a session fills the Plan tab: the bar steps aside for it. */
function useSessionOpen(): boolean {
  const detail = useProgram()?.detail;
  const [open, setOpen] = useState(false);
  useAnimatedReaction(
    () => (detail == null ? false : detail.value > 0.5),
    (now, was) => {
      if (now !== was) runOnJS(setOpen)(now);
    },
    [detail],
  );
  return open;
}

function TabsChrome() {
  const t = useT();
  const sessionOpen = useSessionOpen();
  // "You're in", once, after a purchase or a restore.
  useYoureInPresenter();
  return (
    <View style={{ flex: 1 }}>
      <NativeTabs hidden={sessionOpen} minimizeBehavior="never" tintColor={colors.accent}>
        <NativeTabs.Trigger name="index">
          <NativeTabs.Trigger.Label>{t('tabs.today')}</NativeTabs.Trigger.Label>
          <NativeTabs.Trigger.Icon sf="sun.max" md="wb_sunny" />
        </NativeTabs.Trigger>
        <NativeTabs.Trigger name="plan" disableAutomaticContentInsets={Platform.OS === 'ios'}>
          <NativeTabs.Trigger.Label>{t('tabs.plan')}</NativeTabs.Trigger.Label>
          <NativeTabs.Trigger.Icon sf="calendar" md="calendar_month" />
        </NativeTabs.Trigger>
        <NativeTabs.Trigger name="exercises" disableAutomaticContentInsets={Platform.OS === 'ios'}>
          <NativeTabs.Trigger.Label>{t('tabs.exercises')}</NativeTabs.Trigger.Label>
          <NativeTabs.Trigger.Icon sf="figure.flexibility" md="self_improvement" />
        </NativeTabs.Trigger>
        <NativeTabs.Trigger name="progress">
          <NativeTabs.Trigger.Label>{t('tabs.progress')}</NativeTabs.Trigger.Label>
          <NativeTabs.Trigger.Icon sf="chart.bar" md="bar_chart" />
        </NativeTabs.Trigger>
      </NativeTabs>
      {/* Over the bar: what a tab screen shows above everything (Home's
          sheets), still in the tree so any native sheet presents over it. */}
      <OverlayHost />
    </View>
  );
}
