import Search01Icon from '@hugeicons/core-free-icons/Search01Icon';
import { HugeiconsIcon } from '@hugeicons/react-native';
import { useEffect, type ReactNode } from 'react';
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

const MASCOT = require('@assets/update/mascot-handoff.png');
const APP_ICON = require('@assets/icon-small.webp');

/**
 * The small widget, drawn as it looks on the Home Screen: the mascot, the
 * morning question and its two answers. The real one is `DailyCheck` in
 * `features/home-widget`; this is a picture of it, in the same words.
 */
export function WidgetPreview({ scale = 1 }: { scale?: number }) {
  const t = useT();
  const size = 158 * scale;
  return (
    <View style={[styles.widget, { width: size, height: size, borderRadius: 26 * scale }]}>
      <View style={styles.widgetTop}>
        <Image source={MASCOT} style={{ width: 40 * scale, height: 40 * scale }} resizeMode="contain" />
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
    backgroundColor: '#1C1C1F',
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
