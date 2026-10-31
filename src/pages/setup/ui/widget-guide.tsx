import Search01Icon from '@hugeicons/core-free-icons/Search01Icon';
import { HugeiconsIcon } from '@hugeicons/react-native';
import { useEffect, useRef, type ReactNode } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import Animated, {
  Easing,
  ReduceMotion,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withSequence,
  withTiming,
} from 'react-native-reanimated';

import { PRIMARY, fonts, meterColors, palette } from '@/shared/config';
import { useT } from '@/shared/lib/i18n';
import { useColorScheme } from '@/shared/lib/theme';
import { Mascot, MascotStill, phoneRig, type MascotHandle } from '@/shared/ui/mascot';
import { useSplashRevealed } from '@/shared/ui/splash';

const APP_ICON = require('@assets/icon-small.webp');

/** The widget's face: always dark, as the real one is (`DailyCheck`). */
const WIDGET_FACE = palette.dark.card;
/** Once the step has faded in (the page's 260 ms), so the move is seen. */
const PRESENT_MS = 520;

/**
 * The small widget, drawn as it looks on the Home Screen: the mascot, the
 * morning question and its two answers. The real one is `DailyCheck` in
 * `features/home-widget`; this is a picture of it, in the same words.
 *
 * The mascot is the one holding up his phone, drawn as the widget draws its
 * own: white, on the widget's dark face, in either appearance. `alive` on the
 * step that asks for the widget, where it is the screen's one figure: he
 * holds the phone out once and breathes. A still drawing anywhere else (the
 * last step of the walkthrough draws it small, inside a phone).
 */
export function WidgetPreview({ scale = 1, alive = false }: { scale?: number; alive?: boolean }) {
  const t = useT();
  const size = 158 * scale;
  const figure = 40 * scale;
  return (
    <View style={[styles.widget, { width: size, height: size, borderRadius: 26 * scale }]}>
      <View style={styles.widgetTop}>
        <View accessibilityElementsHidden importantForAccessibility="no-hide-descendants">
          {alive ? (
            <WidgetMascot size={figure} />
          ) : (
            <MascotStill
              rig={phoneRig}
              size={figure}
              surface={WIDGET_FACE}
              paper={palette.dark.foreground}
              ink={WIDGET_FACE}
            />
          )}
        </View>
        <Text style={[styles.widgetQuestion, { fontSize: 14 * scale, lineHeight: 17 * scale }]} numberOfLines={2}>
          {t('widget.question')}
        </Text>
      </View>
      <View style={styles.widgetAnswers}>
        <View style={[styles.widgetPill, styles.widgetHurts]}>
          <Text style={[styles.widgetPillText, { fontSize: 12 * scale }]} numberOfLines={1}>
            {t('widget.hurts')}
          </Text>
        </View>
        <View style={[styles.widgetPill, styles.widgetFine]}>
          <Text style={[styles.widgetPillText, { fontSize: 12 * scale }]} numberOfLines={1}>
            {t('widget.fine')}
          </Text>
        </View>
      </View>
    </View>
  );
}

/** The widget's mascot, alive: mounted and unmounted with the step, so
 * nothing breathes once it has gone, and still under the launch splash (setup
 * can be the first screen) until it has gone. Reduce Motion gets the still
 * drawing. */
function WidgetMascot({ size }: { size: number }) {
  const mascot = useRef<MascotHandle>(null);
  const revealed = useSplashRevealed();
  const presented = useRef(false);
  useEffect(() => {
    if (presented.current || !revealed) return undefined;
    const timer = setTimeout(() => {
      presented.current = true;
      mascot.current?.play('present');
    }, PRESENT_MS);
    return () => clearTimeout(timer);
  }, [revealed]);
  return (
    <Mascot
      ref={mascot}
      rig={phoneRig}
      size={size}
      surface={WIDGET_FACE}
      paper={palette.dark.foreground}
      ink={WIDGET_FACE}
      paused={!revealed}
    />
  );
}

/** A phone's Home Screen, in outline: a grid of app tiles and a gap. */
function HomeGrid({ jiggle, children }: { jiggle?: boolean; children?: ReactNode }) {
  const scheme = useColorScheme();
  const meter = meterColors[scheme];
  const tilt = useSharedValue(0);

  useEffect(() => {
    if (!jiggle) return;
    // Mounted only while this step is on screen, and gone with it.
    tilt.value = withRepeat(
      withSequence(
        withTiming(1, { duration: 120, easing: Easing.inOut(Easing.quad), reduceMotion: ReduceMotion.System }),
        withTiming(-1, { duration: 120, easing: Easing.inOut(Easing.quad), reduceMotion: ReduceMotion.System }),
      ),
      -1,
      true,
    );
  }, [jiggle, tilt]);

  const wobble = useAnimatedStyle(() => ({ transform: [{ rotate: `${tilt.value * 2.5}deg` }] }));

  return (
    <View style={[styles.phone, { borderColor: meter.track }]}>
      <View style={styles.grid}>
        {Array.from({ length: 12 }, (_, i) => (
          <Animated.View key={i} style={[styles.tile, { backgroundColor: meter.track }, jiggle && wobble]} />
        ))}
      </View>
      {children}
    </View>
  );
}

function Finger() {
  const pulse = useSharedValue(0);
  useEffect(() => {
    pulse.value = withRepeat(
      withTiming(1, { duration: 1100, easing: Easing.out(Easing.quad), reduceMotion: ReduceMotion.System }),
      -1,
      false,
    );
  }, [pulse]);
  const ring = useAnimatedStyle(() => ({ opacity: 1 - pulse.value, transform: [{ scale: 1 + pulse.value * 0.9 }] }));
  return (
    <View style={styles.fingerSpot}>
      <Animated.View style={[styles.fingerRing, ring]} />
      <View style={styles.finger} />
    </View>
  );
}

export type GuideStep = 'hold' | 'edit' | 'search';

/** One step of the walkthrough, drawn. */
export function WidgetGuideArt({ step }: { step: GuideStep }) {
  const scheme = useColorScheme();
  const colors = palette[scheme];
  const meter = meterColors[scheme];
  const t = useT();

  if (step === 'hold') {
    return (
      <HomeGrid jiggle>
        <Finger />
      </HomeGrid>
    );
  }

  if (step === 'edit') {
    return (
      <HomeGrid jiggle>
        <View style={[styles.editPill, { backgroundColor: colors.card }]}>
          <Text style={[styles.editText, { color: colors.foreground }]}>{t('setup.widget.mockEdit')}</Text>
        </View>
        <View style={[styles.menu, { backgroundColor: colors.card }]}>
          <View style={[styles.menuItem, { backgroundColor: PRIMARY }]}>
            <Text style={styles.menuItemText}>{t('setup.widget.mockAdd')}</Text>
          </View>
        </View>
      </HomeGrid>
    );
  }

  return (
    <View style={[styles.phone, styles.sheet, { borderColor: meter.track }]}>
      <View style={[styles.search, { backgroundColor: meter.track }]}>
        <HugeiconsIcon icon={Search01Icon} size={16} color={meter.caption} strokeWidth={2} />
        <Text style={[styles.searchText, { color: meter.caption }]}>{t('setup.widget.mockSearch')}</Text>
      </View>
      <View style={[styles.result, { backgroundColor: colors.card }]}>
        <Image source={APP_ICON} style={styles.appIcon} />
        <Text style={[styles.resultText, { color: colors.foreground }]}>{t('onboarding.notify.bannerApp')}</Text>
      </View>
      <View style={styles.previewWrap}>
        <WidgetPreview scale={0.8} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  widget: {
    backgroundColor: WIDGET_FACE,
    padding: 12,
    justifyContent: 'space-between',
    shadowColor: '#000000',
    shadowOpacity: 0.25,
    shadowRadius: 16,
    shadowOffset: { width: 0, height: 8 },
    elevation: 6,
  },
  widgetTop: { flexDirection: 'row', alignItems: 'center', gap: 6 },
  widgetQuestion: { ...fonts.bold(14), color: '#FFFFFF', flex: 1 },
  widgetAnswers: { gap: 6 },
  widgetPill: { borderRadius: 12, paddingVertical: 7, alignItems: 'center' },
  widgetHurts: { backgroundColor: 'rgba(255,255,255,0.14)' },
  widgetFine: { backgroundColor: PRIMARY },
  widgetPillText: { ...fonts.bold(12), color: '#FFFFFF' },
  phone: {
    width: 230,
    height: 300,
    alignSelf: 'center',
    borderRadius: 36,
    borderCurve: 'continuous',
    borderWidth: 3,
    padding: 18,
    paddingTop: 44,
  },
  grid: { flexDirection: 'row', flexWrap: 'wrap', gap: 14, justifyContent: 'space-between' },
  tile: { width: 40, height: 40, borderRadius: 11 },
  fingerSpot: { position: 'absolute', bottom: 54, alignSelf: 'center', width: 44, height: 44, alignItems: 'center', justifyContent: 'center' },
  fingerRing: { position: 'absolute', width: 44, height: 44, borderRadius: 22, backgroundColor: 'rgba(139,92,246,0.35)' },
  finger: { width: 26, height: 26, borderRadius: 13, backgroundColor: PRIMARY },
  editPill: { position: 'absolute', top: 12, left: 16, paddingHorizontal: 12, paddingVertical: 5, borderRadius: 12 },
  editText: fonts.bold(13),
  menu: { position: 'absolute', top: 44, left: 16, borderRadius: 14, padding: 6 },
  menuItem: { borderRadius: 10, paddingHorizontal: 12, paddingVertical: 8 },
  menuItemText: { ...fonts.bold(13), color: '#FFFFFF' },
  sheet: { paddingTop: 22, gap: 12 },
  search: { flexDirection: 'row', alignItems: 'center', gap: 6, borderRadius: 12, paddingHorizontal: 10, paddingVertical: 8 },
  searchText: fonts.medium(13),
  result: { flexDirection: 'row', alignItems: 'center', gap: 10, borderRadius: 14, padding: 8 },
  appIcon: { width: 30, height: 30, borderRadius: 8 },
  resultText: fonts.bold(15),
  previewWrap: { alignItems: 'center', marginTop: 4 },
});
