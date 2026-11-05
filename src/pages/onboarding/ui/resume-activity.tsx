import { HStack, Image, ProgressView, Spacer, Text, VStack } from '@expo/ui/swift-ui';
import {
  activityBackgroundTint,
  aspectRatio,
  background,
  clipShape,
  font,
  foregroundStyle,
  frame,
  lineLimit,
  minimumScaleFactor,
  monospacedDigit,
  padding,
  progressViewStyle,
  resizable,
  tint,
} from '@expo/ui/swift-ui/modifiers';
import { Asset } from 'expo-asset';
import { Directory, File } from 'expo-file-system';
import { createLiveActivity, widgetsDirectory, type LiveActivity } from 'expo-widgets';
import { useEffect } from 'react';
import { Platform } from 'react-native';

import { track } from '@/shared/lib/analytics';
import type { Translate } from '@/shared/lib/i18n';

import { STEP_COUNT } from '../model/steps';

/**
 * What the Lock Screen is told about an onboarding left half-way. Finished text
 * only: the widget body cannot import or format anything.
 */
export type ResumeActivityProps = {
  title: string;
  cta: string;
  /** 0–1, how far through the screens they are. */
  progress: number;
  /** "40%", written out here because the widget cannot format. */
  percent: string;
  /** The mascot, copied into the App Group. Empty draws an SF Symbol instead. */
  art: string;
};

/**
 * The onboarding, waiting on the Lock Screen and in the Dynamic Island.
 *
 * Somebody who leaves the questions half-way usually means to come back and
 * forgets. The activity is started once they have answered something, follows
 * the progress bar as they go, turns into "Your plan is ready" when they reach
 * the paywall, and comes down once Home is theirs (`endResumeActivities` in the
 * root layout). Tapping anywhere on it opens the app, which is still on the
 * screen they left while iOS keeps the process; the button is drawn, not wired.
 *
 * Colours are hex literals because the `'widget'` directive forbids reaching
 * outside this function: `palette.dark.card` and `meterColors.dark.caption`.
 */
const ResumeActivity = (props: ResumeActivityProps) => {
  'widget';

  const muted = '#9E9EA6';
  const mascot = (size: number) =>
    props.art ? (
      <Image
        uiImage={props.art}
        modifiers={[resizable(), aspectRatio({ contentMode: 'fit' }), frame({ width: size, height: size })]}
      />
    ) : (
      <Image systemName="figure.walk" color="#FFFFFF" size={size * 0.6} />
    );

  const bar = (
    <ProgressView
      value={props.progress}
      modifiers={[progressViewStyle('linear'), tint('#FFFFFF'), frame({ maxWidth: 9999 })]}
    />
  );

  return {
    banner: (
      <VStack
        spacing={12}
        modifiers={[padding({ all: 16 }), frame({ maxWidth: 9999 }), activityBackgroundTint('#1C1C1F')]}>
        <HStack spacing={14}>
          {mascot(64)}
          <VStack alignment="leading" spacing={10}>
            <Text
              modifiers={[
                font({ size: 19, weight: 'bold', design: 'rounded' }),
                foregroundStyle('#FFFFFF'),
                lineLimit(2),
                minimumScaleFactor(0.8),
              ]}>
              {props.title}
            </Text>
            <HStack spacing={10}>
              {bar}
              <Text
                modifiers={[
                  font({ size: 14, weight: 'bold', design: 'rounded' }),
                  monospacedDigit(),
                  foregroundStyle(muted),
                ]}>
                {props.percent}
              </Text>
            </HStack>
          </VStack>
        </HStack>
        <HStack
          spacing={6}
          modifiers={[padding({ vertical: 12 }), frame({ maxWidth: 9999 }), background('#FFFFFF'), clipShape('capsule')]}>
          <Spacer />
          <Text modifiers={[font({ size: 17, weight: 'bold', design: 'rounded' }), foregroundStyle('#111114')]}>
            {props.cta}
          </Text>
          <Image systemName="chevron.right" color="#111114" size={13} />
          <Spacer />
        </HStack>
      </VStack>
    ),

    compactLeading: mascot(22),
    compactTrailing: (
      <Text
        modifiers={[
          font({ size: 14, weight: 'bold', design: 'rounded' }),
          monospacedDigit(),
          foregroundStyle('#FFFFFF'),
        ]}>
        {props.percent}
      </Text>
    ),
    minimal: mascot(22),

    expandedLeading: <VStack modifiers={[padding({ leading: 4, top: 4 })]}>{mascot(44)}</VStack>,
    expandedCenter: (
      <Text
        modifiers={[
          font({ size: 16, weight: 'bold', design: 'rounded' }),
          foregroundStyle('#FFFFFF'),
          lineLimit(2),
          minimumScaleFactor(0.8),
          padding({ top: 4 }),
        ]}>
        {props.title}
      </Text>
    ),
    expandedTrailing: (
      <Text
        modifiers={[
          font({ size: 14, weight: 'bold', design: 'rounded' }),
          monospacedDigit(),
          foregroundStyle(muted),
          padding({ trailing: 4, top: 4 }),
        ]}>
        {props.percent}
      </Text>
    ),
    expandedBottom: <VStack modifiers={[padding({ horizontal: 4, bottom: 4 })]}>{bar}</VStack>,
  };
};

export const OnboardingResumeActivity = createLiveActivity('OnboardingResume', ResumeActivity);

/** About how long a screen takes, for the minutes left on the Lock Screen. */
const SECONDS_PER_STEP = 8;

/** The home widget's own drawing and file name, so the App Group holds one copy. */
const ART = { name: 'mascot-tasks-v1.png', source: require('@assets/widget/mascot-tasks.png') };

let current: LiveActivity<ResumeActivityProps> | null = null;
let art: string | null = null;

async function shareArt(): Promise<string> {
  if (art != null) return art;
  try {
    const dir = new Directory(widgetsDirectory);
    if (!dir.exists) dir.create({ intermediates: true });
    const target = new File(dir, ART.name);
    if (!target.exists) {
      const [asset] = await Asset.loadAsync(ART.source);
      if (asset?.localUri == null) return '';
      new File(asset.localUri).copy(target);
    }
    return (art = target.uri);
  } catch (error) {
    if (__DEV__) console.warn('[activities] could not share the mascot', error);
    return '';
  }
}

function propsFor(t: Translate, index: number, ready: boolean, shared: string): ResumeActivityProps {
  if (ready) {
    return { title: t('widget.resumeReady'), cta: t('widget.resumeReadyCta'), progress: 1, percent: '100%', art: shared };
  }
  const progress = Math.min(0.99, index / STEP_COUNT);
  const minutes = Math.max(1, Math.ceil(((STEP_COUNT - index) * SECONDS_PER_STEP) / 60));
  return {
    title: t('widget.resumeTitle', { count: minutes }),
    cta: t('widget.resumeCta'),
    progress,
    percent: `${Math.round(progress * 100)}%`,
    art: shared,
  };
}

async function show(props: ResumeActivityProps): Promise<void> {
  try {
    if (current != null) {
      await current.update(props);
      return;
    }
    current = OnboardingResumeActivity.start(props);
    track('onboarding_activity_started');
  } catch (error) {
    // Live Activities switched off in Settings, or an OS without them.
    if (__DEV__) console.warn('[activities] onboarding activity unavailable', error);
    current = null;
  }
}

/** Every onboarding activity down, this process's or one a previous run left. */
export function endResumeActivities(): void {
  if (Platform.OS !== 'ios') return;
  current = null;
  try {
    for (const activity of OnboardingResumeActivity.getInstances()) void activity.end('immediate');
  } catch (error) {
    if (__DEV__) console.warn('[activities] could not end the onboarding activity', error);
  }
}

/**
 * Keeps the Lock Screen in step with the onboarding: nothing until the first
 * answer, then the progress at each screen. One left by a previous process is
 * replaced, since the flow starts over on a fresh launch.
 */
export function useResumeActivity(t: Translate, index: number): void {
  useEffect(() => {
    endResumeActivities();
  }, []);

  useEffect(() => {
    if (Platform.OS !== 'ios' || index < 1) return;
    void shareArt().then((shared) => show(propsFor(t, index, false, shared)));
  }, [t, index]);
}

/** The onboarding is done and the paywall is next: the activity says so. */
export function readyResumeActivity(t: Translate): void {
  if (Platform.OS !== 'ios' || current == null) return;
  void shareArt().then((shared) => show(propsFor(t, 0, true, shared)));
}
