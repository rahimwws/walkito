import * as Haptics from 'expo-haptics';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { Linking, Platform, Pressable, ScrollView, StyleSheet, Text, View, useWindowDimensions } from 'react-native';
import Animated, { Easing, FadeIn, FadeInDown, ReduceMotion } from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { requestWidgetPin } from '@/features/home-widget';
import { SignInOptions, type EmailSheetPreview } from '@/features/sign-in';
import { healthAvailable, type HealthSummary } from '@/entities/health';
import { firstName, getIntake, profileEmail, saveIntake, setProfileEmail, useProfileName } from '@/entities/profile';
import { accountSaved, deferAccount, finishSetup, settleAccount, useAccountOwed, useSetupPending } from '@/entities/session';
import { PRIMARY, fonts, meterColors, palette } from '@/shared/config';
import { track } from '@/shared/lib/analytics';
import { useT, type Key } from '@/shared/lib/i18n';
import { useColorScheme } from '@/shared/lib/theme';
import { Glow } from '@/shared/ui/glow';
import { NoteSheet } from '@/shared/ui/note-sheet';
import { PrimaryButton } from '@/shared/ui/primary-button';

import { EmailStep } from './email-step';
import { SaveRing, SaveSky } from './save-sky';
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

/** Apple's relay for someone who hid their address at "Sign in with Apple". */
const PRIVATE_RELAY = /@privaterelay\.appleid\.com$/i;

/** An address we can write to that the person chose to show us: one from
 * Google, from an emailed code, or from Apple when they did not hide it. */
function realEmail(address: string): boolean {
  return address !== '' && !PRIVATE_RELAY.test(address);
}

const GUIDE: Readonly<Record<GuideStep, { title: Key; body: Key; n: number }>> = {
  hold: { title: 'setup.widget.holdTitle', body: 'setup.widget.holdBody', n: 1 },
  edit: { title: 'setup.widget.editTitle', body: 'setup.widget.editBody', n: 2 },
  search: { title: 'setup.widget.searchTitle', body: 'setup.widget.searchBody', n: 3 },
};

/**
 * What comes after the first purchase, in order: save the plan to an account,
 * an email address for anyone without a real one on file, Health, the watch,
 * the note from the two of us and the widget, and then Home: setup ends there,
 * with nothing started for them (the first session is theirs to begin).
 *
 * All of it used to sit in front of the paywall, where each was a reason to
 * stop. After it, each has a reason: signing in keeps the plan on a new phone,
 * Health and the watch feed a plan that is now theirs, and the widget brings
 * them back tomorrow morning.
 *
 * **Signing in has no "Not now".** On Android it is required: only an account
 * goes on, by Google or an emailed code. If it fails for a reason that is not
 * the person's (no network, a server or Google down) "Continue for now"
 * appears, and the screen comes back on its own at the next launch
 * (`deferAccount`). On iPhone, closing Apple's sheet goes on: App Review
 * requires an account to stay optional when what was bought is not tied to one
 * (5.1.1(v), 3.1.2(a)), and the subscription here belongs to the Apple ID.
 *
 * **Health has no "Not now" either**, and never needs one: its one button
 * opens the system's own sheet, and whatever is answered there goes on. App
 * Review rejected a skip beside it (5.1.1(iv)), iOS never says whether reading
 * was allowed, and asking for a grant is not allowed on either store.
 *
 * The email address step stays optional (5.1.1(x)), and is skipped for
 * anyone whose real address came with signing in.
 */
export function SetupPage() {
  const insets = useSafeAreaInsets();
  const { width } = useWindowDimensions();
  const scheme = useColorScheme();
  const colors = palette[scheme];
  const meter = meterColors[scheme];
  const t = useT();
  const name = firstName(useProfileName());

  const [step, setStep] = useState<SetupStep | null>(null);
  const [health, setHealth] = useState<HealthSummary | null>(null);
  const [watch, setWatch] = useState<string | null>(null);
  /** Google is not on this phone: email is the way in. */
  const [platformShown, setPlatformShown] = useState(true);
  /** Signing in failed for a reason that was not theirs: a way on appears. */
  const [deferReason, setDeferReason] = useState<'offline' | 'server' | null>(null);
  /** Development only (`?authPreview=`): Android's states on any simulator,
   * and the email sheet open on a stage. */
  const [devAndroid, setDevAndroid] = useState(false);
  const [emailPreview, setEmailPreview] = useState<EmailSheetPreview | null>(null);
  const android = Platform.OS === 'android' || devAndroid;
  /** A sign-in sheet is over the save screen: its mascot holds still. */
  const [covered, setCovered] = useState(false);

  // Only an account owed from an earlier launch, the rest done: that one
  // screen, and then straight back to the app with no session started.
  const setupPending = useSetupPending();
  const accountOwed = useAccountOwed();
  const [owedOnly] = useState(() => !setupPending && accountOwed);
  const order = owedOnly ? (['save'] as const) : ORDER;

  const skip = (candidate: SetupStep, saved: boolean): boolean => {
    switch (candidate) {
      case 'save':
        return saved;
      // Somebody whose real address came with signing in (Google, an emailed
      // code, Apple when they did not hide it), or who gave it before, is not
      // asked again. Apple's relay address is not one they chose to give.
      case 'email':
        return realEmail(profileEmail());
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
      // Signed in since, on this launch or another: nothing is owed. With
      // nothing else left, the guard takes them back to the app.
      if (answer) settleAccount();
      setStep(order.find((candidate) => !skip(candidate, answer)) ?? (owedOnly ? null : 'note'));
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

  // Development: `walkito.dev://?authPreview=<state>` shows a state of the save
  // screen on the simulator without signing in: apple, android (Google not on
  // the phone), deferred (the way on after a failure), email, code, existing.
  useEffect(() => {
    if (!__DEV__) return undefined;
    const onUrl = (url: string | null) => {
      const state = url?.match(/[?&]authPreview=([\w-]+)/)?.[1];
      if (state == null) return;
      const example = 'you@example.com';
      setStep('save');
      setDevAndroid(state === 'android' || state === 'deferred');
      setPlatformShown(state !== 'android' && state !== 'deferred');
      setDeferReason(state === 'deferred' ? 'offline' : null);
      setEmailPreview(
        state === 'email'
          ? { stage: 'address', email: '' }
          : state === 'code'
            ? { stage: 'code', email: example }
            : state === 'existing'
              ? { stage: 'code', email: example, existing: true }
              : null,
      );
    };
    void Linking.getInitialURL()
      .then(onUrl)
      .catch(() => undefined);
    const subscription = Linking.addEventListener('url', ({ url }) => onUrl(url));
    return () => subscription.remove();
  }, []);

  /** The end of setup: the guard takes them to Home, where it ends. No session
   * is started for them; Home's own button is there. */
  const done = () => {
    // An account owed from an earlier launch is not a second setup.
    if (!owedOnly) track('setup_completed');
    finishSetup();
  };

  const next = () => {
    if (step == null) return;
    const from = order.indexOf(step);
    const following = order.slice(from + 1).find((candidate) => !skip(candidate, saved));
    if (following == null) {
      done();
      return;
    }
    setStep(following);
  };

  /** Whatever the save screen ended with, on iPhone: it goes on. */
  const declined = (outcome: 'cancelled' | 'unavailable' | 'failed') => {
    track('setup_account_declined', { platform: Platform.OS === 'ios' ? 'ios' : 'android', outcome });
    if (!android) {
      next();
      return;
    }
    // Android: an account is required. A cancel stays here; Google missing
    // from the phone leaves email as the way in; a failure has already
    // offered a way on (`onFailure`).
    if (outcome === 'unavailable') setPlatformShown(false);
  };

  const addWidget = async () => {
    Haptics.selectionAsync();
    // Android's launcher can pin it with a sheet of its own; iPhone is walked
    // through it, because iOS lets nothing but the person add a widget.
    if (await requestWidgetPin()) {
      track('widget_add', { result: 'pinned' });
      done();
      return;
    }
    setStep('hold');
  };

  if (step == null) return <View style={styles.root} />;

  const guide = step === 'hold' || step === 'edit' || step === 'search' ? GUIDE[step] : null;

  return (
    <View style={[styles.root, { paddingTop: insets.top + 44, paddingBottom: Math.max(insets.bottom, 16) + 4 }]}>
      {/* The save step under the welcome page's night sky, the rest under
          the app's glow. */}
      {step === 'save' ? (
        <>
          <SaveSky />
          <StatusBar style="light" />
        </>
      ) : (
        <Glow />
      )}
      <Animated.View key={step} entering={FadeIn.duration(260).reduceMotion(ReduceMotion.System)} style={styles.body}>
        {step === 'save' && (
          <View style={styles.center}>
            <SaveRing size={Math.min(width - 48, 330)} paused={covered} />
            <Animated.Text
              entering={FadeInDown.delay(360)
                .duration(420)
                .easing(Easing.bezier(0.23, 1, 0.32, 1).factory())
                .reduceMotion(ReduceMotion.System)}
              style={[styles.saveTitle, styles.centerText]}>
              {name !== '' ? t('setup.save.titleNamed', { name }) : t('setup.save.title')}
            </Animated.Text>
            <Animated.Text
              entering={FadeIn.delay(520).duration(420).reduceMotion(ReduceMotion.System)}
              style={[styles.blurb, styles.centerText, styles.nightCaption]}>
              {t('setup.save.blurb')}
            </Animated.Text>
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
            <WidgetPreview alive />
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
          {!platformShown && (
            <Text style={[styles.note, styles.nightCaption]}>{t('setup.save.googleUnavailable')}</Text>
          )}
          <SignInOptions
            emailMode="create"
            night
            platform={platformShown}
            onSignedIn={({ email, created }) => {
              if (email != null) {
                setProfileEmail(email, 'onboarding');
                track('sign_in_completed', { method: 'email', status: 'signed-in', created });
              }
              settleAccount();
              next();
            }}
            onNoAccount={declined}
            onFailure={(failure) => setDeferReason(failure)}
            onCovered={setCovered}
            preview={emailPreview}
          />
          {/* Android only, and only after a failure that was not theirs:
              nobody who paid is held behind a server. Asked again next
              launch. */}
          {android && deferReason != null && (
            <>
              <Text style={[styles.note, styles.nightCaption]}>{t('setup.save.deferredNote')}</Text>
              <Later
                night
                label={t('setup.save.deferred')}
                onPress={() => {
                  track('setup_account_deferred', { reason: deferReason });
                  deferAccount();
                  next();
                }}
              />
            </>
          )}
        </View>
      )}

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
              done();
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
                done();
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

function Later({ label, onPress, night = false }: { label: string; onPress: () => void; night?: boolean }) {
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
      <Text style={[styles.laterText, { color: night ? NIGHT_CAPTION : meter.caption }]}>{label}</Text>
    </Pressable>
  );
}

/** Words on the save step's night sky, in either appearance. */
const NIGHT_INK = '#FFFFFF';
const NIGHT_CAPTION = 'rgba(255, 255, 255, 0.72)';

const styles = StyleSheet.create({
  root: { flex: 1, paddingHorizontal: 24 },
  saveTitle: { ...fonts.heavy(32, -0.8), lineHeight: 37, color: NIGHT_INK, marginTop: 8 },
  nightCaption: { color: NIGHT_CAPTION },
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
  note: { ...fonts.medium(14), lineHeight: 19, textAlign: 'center', marginBottom: 8 },
  laterText: fonts.semibold(15, -0.2),
});
