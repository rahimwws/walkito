import * as Haptics from 'expo-haptics';
import { useEffect, useState } from 'react';
import { Platform, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import Animated, { Easing, FadeIn, FadeInDown, ReduceMotion } from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { requestWidgetPin } from '@/features/home-widget';
import { SignInOptions } from '@/features/sign-in';
import { healthAvailable, type HealthSummary } from '@/entities/health';
import { firstName, getIntake, profileEmail, saveIntake, setProfileEmail, useProfileName } from '@/entities/profile';
import { accountSaved, finishSetup } from '@/entities/session';
import { PRIMARY, fonts, meterColors, palette } from '@/shared/config';
import { track } from '@/shared/lib/analytics';
import { useT, type Key } from '@/shared/lib/i18n';
import { requestProgram } from '@/shared/lib/program';
import { useColorScheme } from '@/shared/lib/theme';
import { Glow } from '@/shared/ui/glow';
import { NoteSheet } from '@/shared/ui/note-sheet';
import { PrimaryButton } from '@/shared/ui/primary-button';

import { EmailStep } from './email-step';
import { HealthStep } from './health-step';
import { WatchSyncStep } from './watch-sync-step';
import { WidgetGuideArt, WidgetPreview, type GuideStep } from './widget-guide';

type SetupStep = 'save' | 'email' | 'health' | 'watch' | 'watch-sync' | 'note' | 'widget' | GuideStep;

const ORDER: readonly SetupStep[] = ['save', 'email', 'health', 'watch', 'watch-sync', 'note', 'widget', 'hold', 'edit', 'search'];

const WATCH: readonly { value: string; label: Key; caption: Key }[] = [
  { value: 'apple', label: 'onboarding.watch.apple', caption: 'onboarding.watch.appleCaption' },
  { value: 'garmin', label: 'onboarding.watch.garmin', caption: 'onboarding.watch.switchCaption' },
  { value: 'whoop', label: 'onboarding.watch.whoop', caption: 'onboarding.watch.switchCaption' },
  { value: 'none', label: 'onboarding.watch.none', caption: 'onboarding.watch.noneCaption' },
];

const GUIDE: Readonly<Record<GuideStep, { title: Key; body: Key; n: number }>> = {
  hold: { title: 'setup.widget.holdTitle', body: 'setup.widget.holdBody', n: 1 },
  edit: { title: 'setup.widget.editTitle', body: 'setup.widget.editBody', n: 2 },
  search: { title: 'setup.widget.searchTitle', body: 'setup.widget.searchBody', n: 3 },
};

/**
 * What comes after the first purchase, in order: save the plan to an account,
 * an email address for anyone who has none on file yet, Health, the watch,
 * the note from the two of us, the widget, and the first session.
 *
 * All of it used to sit in front of the paywall, where each was a reason to
 * stop. After it, each has a reason: signing in protects what was just paid
 * for, Health and the watch feed a plan that is now theirs, and the widget
 * brings them back tomorrow morning. Every screen can be passed; leaving any
 * way finishes the setup, so nobody is held in front of the app they bought.
 */
export function SetupPage() {
  const insets = useSafeAreaInsets();
  const scheme = useColorScheme();
  const colors = palette[scheme];
  const meter = meterColors[scheme];
  const t = useT();
  const name = firstName(useProfileName());

  const [step, setStep] = useState<SetupStep | null>(null);
  const [health, setHealth] = useState<HealthSummary | null>(null);
  const [watch, setWatch] = useState<string | null>(null);

  const skip = (candidate: SetupStep, saved: boolean): boolean => {
    switch (candidate) {
      case 'save':
        return saved;
      // Somebody whose address came with Apple or Google sign-in, or who gave
      // it before, is not asked twice.
      case 'email':
        return profileEmail() !== '';
      case 'health':
        return !healthAvailable();
      case 'watch':
        return Platform.OS === 'android' || !healthAvailable();
      case 'watch-sync':
        return watch !== 'garmin' && watch !== 'whoop';
      default:
        return false;
    }
  };

  // The first screen waits on one question: is this phone already signed in
  // to an account? Somebody who came back through "Already have an account"
  // has nothing to save.
  const [saved, setSaved] = useState(false);
  useEffect(() => {
    let live = true;
    void accountSaved().then((answer) => {
      if (!live) return;
      setSaved(answer);
      setStep(ORDER.find((candidate) => !skip(candidate, answer)) ?? 'note');
    });
    return () => {
      live = false;
    };
    // Once, on arrival.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (step != null) track('setup_step_viewed', { step });
  }, [step]);

  const done = (startSession: boolean) => {
    track('setup_completed');
    if (startSession) requestProgram({ kind: 'today' });
    finishSetup();
  };

  const next = () => {
    if (step == null) return;
    const from = ORDER.indexOf(step);
    const following = ORDER.slice(from + 1).find((candidate) => !skip(candidate, saved));
    if (following == null) {
      done(true);
      return;
    }
    setStep(following);
  };

  const addWidget = async () => {
    Haptics.selectionAsync();
    // Android's launcher can pin it with a sheet of its own; iPhone is walked
    // through it, because iOS lets nothing but the person add a widget.
    if (await requestWidgetPin()) {
      track('widget_add', { result: 'pinned' });
      done(true);
      return;
    }
    setStep('hold');
  };

  if (step == null) return <View style={styles.root} />;

  const guide = step === 'hold' || step === 'edit' || step === 'search' ? GUIDE[step] : null;

  return (
    <View style={[styles.root, { paddingTop: insets.top + 44, paddingBottom: Math.max(insets.bottom, 16) + 4 }]}>
      <Glow />
      <Animated.View key={step} entering={FadeIn.duration(260).reduceMotion(ReduceMotion.System)} style={styles.body}>
        {step === 'save' && (
          <View style={styles.center}>
            <Animated.Text
              entering={FadeInDown.duration(380).easing(Easing.bezier(0.23, 1, 0.32, 1).factory()).reduceMotion(ReduceMotion.System)}
              style={[styles.title, styles.centerText, { color: colors.foreground }]}>
              {name !== '' ? t('setup.save.titleNamed', { name }) : t('setup.save.title')}
            </Animated.Text>
            <Text style={[styles.blurb, styles.centerText, { color: meter.caption }]}>{t('setup.save.blurb')}</Text>
          </View>
        )}

        {step === 'email' && <EmailStep onDone={next} />}

        {step === 'health' && (
          <HealthStep name={name} summary={health} onConnected={setHealth} onNext={next} />
        )}

        {step === 'watch' && (
          <ScrollView contentContainerStyle={styles.list} showsVerticalScrollIndicator={false}>
            <Text style={[styles.title, { color: colors.foreground }]}>{t('onboarding.watch.title')}</Text>
            <Text style={[styles.blurb, { color: meter.caption }]}>{t('onboarding.watch.blurb')}</Text>
            {WATCH.map((option) => {
              const on = watch === option.value;
              return (
                <Pressable
                  key={option.value}
                  accessibilityRole="radio"
                  accessibilityState={{ checked: on }}
                  onPress={() => {
                    Haptics.selectionAsync();
                    setWatch(option.value);
                  }}
                  style={[styles.row, { backgroundColor: colors.card, borderColor: on ? PRIMARY : 'transparent' }]}>
                  <Text style={[styles.rowTitle, { color: colors.foreground }]}>{t(option.label)}</Text>
                  <Text style={[styles.rowCaption, { color: meter.caption }]}>{t(option.caption)}</Text>
                </Pressable>
              );
            })}
          </ScrollView>
        )}

        {step === 'watch-sync' && (
          <View style={styles.fill}>
            <Text style={[styles.title, { color: colors.foreground }]}>{t('onboarding.watchSync.title')}</Text>
            <Text style={[styles.blurb, { color: meter.caption }]}>{t('onboarding.watchSync.blurb')}</Text>
            <WatchSyncStep brand={watch === 'whoop' ? 'whoop' : 'garmin'} />
          </View>
        )}

        {step === 'widget' && (
          <View style={styles.center}>
            <WidgetPreview />
            <Text style={[styles.title, styles.centerText, { color: colors.foreground }]}>{t('setup.widget.title')}</Text>
            <Text style={[styles.blurb, styles.centerText, { color: meter.caption }]}>{t('setup.widget.blurb')}</Text>
          </View>
        )}

        {guide != null && (
          <View style={styles.center}>
            <Text style={[styles.meta, { color: meter.caption }]}>{t('setup.widget.stepOf', { n: guide.n, total: 3 })}</Text>
            <WidgetGuideArt step={step as GuideStep} />
            <Text style={[styles.title, styles.centerText, { color: colors.foreground }]}>{t(guide.title)}</Text>
            <Text style={[styles.blurb, styles.centerText, { color: meter.caption }]}>{t(guide.body)}</Text>
          </View>
        )}
      </Animated.View>

      {/* The bar. Health carries its own button; the note is a sheet. */}
      {step === 'save' && (
        <View style={styles.bar}>
          <SignInOptions
            onSignedIn={({ email }) => {
              if (email != null) {
                setProfileEmail(email, 'onboarding');
                track('sign_in_completed', { method: 'email', status: 'signed-in' });
              }
              next();
            }}
          />
          <Later label={t('setup.save.later')} onPress={next} />
        </View>
      )}

      {step === 'health' && <Later label={t('setup.save.later')} onPress={next} />}

      {step === 'watch' && (
        <View style={styles.bar}>
          <PrimaryButton
            label={t('setup.next')}
            disabled={watch == null}
            onPress={() => {
              const intake = getIntake();
              if (intake != null && watch != null) saveIntake({ ...intake, watch });
              next();
            }}
          />
        </View>
      )}

      {step === 'watch-sync' && (
        <View style={styles.bar}>
          <PrimaryButton label={t('onboarding.cta.done')} onPress={next} />
        </View>
      )}

      {step === 'widget' && (
        <View style={styles.bar}>
          <PrimaryButton label={t('setup.widget.add')} onPress={() => void addWidget()} />
          <Later
            label={t('setup.widget.later')}
            onPress={() => {
              track('widget_add', { result: 'skipped' });
              done(true);
            }}
          />
        </View>
      )}

      {guide != null && (
        <View style={styles.bar}>
          <PrimaryButton
            label={step === 'search' ? t('setup.finish') : t('setup.next')}
            onPress={() => {
              if (step === 'search') {
                track('widget_add', { result: 'guided' });
                done(true);
                return;
              }
              next();
            }}
          />
        </View>
      )}

      {/* The founders' note, now that there is a plan behind it. "Rate
          Walkito" queues Apple's sheet for the next screen. */}
      <NoteSheet visible={step === 'note'} onDone={next} />
    </View>
  );
}

function Later({ label, onPress }: { label: string; onPress: () => void }) {
  const scheme = useColorScheme();
  const meter = meterColors[scheme];
  return (
    <Pressable
      accessibilityRole="button"
      onPress={() => {
        Haptics.selectionAsync();
        onPress();
      }}
      hitSlop={8}
      style={({ pressed }) => [styles.later, pressed && { opacity: 0.6 }]}>
      <Text style={[styles.laterText, { color: meter.caption }]}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, paddingHorizontal: 24 },
  body: { flex: 1 },
  fill: { flex: 1, gap: 10 },
  center: { flex: 1, alignItems: 'center', justifyContent: 'center', gap: 14 },
  centerText: { textAlign: 'center' },
  title: { ...fonts.heavy(28, -0.7), lineHeight: 33 },
  blurb: { ...fonts.regular(16), lineHeight: 22 },
  meta: fonts.semibold(13),
  list: { gap: 10, paddingBottom: 12 },
  row: { borderRadius: 18, borderCurve: 'continuous', padding: 16, gap: 2, borderWidth: 2 },
  rowTitle: fonts.bold(17, -0.2),
  rowCaption: fonts.medium(14),
  bar: { paddingTop: 12, gap: 4 },
  later: { alignItems: 'center', paddingTop: 12, paddingBottom: 4 },
  laterText: fonts.semibold(15, -0.2),
});
