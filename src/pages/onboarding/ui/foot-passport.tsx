import PencilEdit02Icon from '@hugeicons/core-free-icons/PencilEdit02Icon';
import Tick02Icon from '@hugeicons/core-free-icons/Tick02Icon';
import { HugeiconsIcon } from '@hugeicons/react-native';
import * as Haptics from 'expo-haptics';
import { useEffect, useRef } from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import Animated, {
  Easing,
  FadeIn,
  FadeInDown,
  FadeOut,
  ReduceMotion,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';

import { LegMap, type LegZone } from '@/entities/leg-zone';
import { PRIMARY, fonts, meterColors, palette } from '@/shared/config';
import { useLanguage, useT } from '@/shared/lib/i18n';
import { settle } from '@/shared/lib/motion';
import { useColorScheme } from '@/shared/lib/theme';

/** One fact on the passport: an answer, with what it is an answer to. */
export type PassportStamp = {
  /** The step it came from, which a tap on it goes back to. */
  key: string;
  label: string;
  value: string;
  /** Where its question sits in the flow: the highest is the latest answer. */
  order: number;
};

/** The cover's 3D foot, the same chrome as the building screen's art. */
const FOOT = require('@assets/onboarding/building/foot.webp');

/** The cover: the brand violet deepening to the bottom right. */
const COVER = 'linear-gradient(135deg, #9B7BFF 0%, #7C5CFF 45%, #5B3FD6 100%)';


/**
 * The Foot Passport, folded above the questions.
 *
 * The 3D foot, the name, and the newest fact said in words with what
 * it answers: "Where it hurts  Left heel". Each answer lands as its line
 * slides in and a stamp presses in on the right, so every question visibly
 * adds to something that is theirs.
 */
export function PassportStrip({ name, stamps }: { name: string; stamps: readonly PassportStamp[] }) {
  const scheme = useColorScheme();
  const colors = palette[scheme];
  const meter = meterColors[scheme];
  const t = useT();
  // The card lists facts in the order they read best; the strip says the one
  // just given, which is the question furthest along the flow.
  const newest = stamps.reduce<PassportStamp | null>(
    (latest, stamp) => (latest == null || stamp.order > latest.order ? stamp : latest),
    null,
  );
  const seen = useRef(stamps.length);

  useEffect(() => {
    if (stamps.length > seen.current) void Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    seen.current = stamps.length;
  }, [stamps.length]);

  return (
    <Animated.View
      entering={FadeInDown.duration(320).reduceMotion(ReduceMotion.System)}
      style={[styles.strip, { backgroundColor: colors.card }]}
      accessible
      accessibilityLabel={`${t('onboarding.passport.owner', { name })}${newest != null ? `. ${newest.label}: ${newest.value}` : ''}`}>
      {/* The 3D foot on its own, straight on the card: no tile behind it. */}
      <Image source={FOOT} style={styles.coverFoot} resizeMode="contain" />
      <View style={styles.who}>
        <Text style={[styles.stripTitle, { color: colors.foreground }]} numberOfLines={1}>
          {t('onboarding.passport.owner', { name })}
        </Text>
        <View style={styles.factSlot}>
          {newest == null ? (
            <Text style={[styles.fact, { color: meter.caption }]} numberOfLines={1}>
              {t('onboarding.passport.empty')}
            </Text>
          ) : (
            <Animated.Text
              key={newest.key}
              entering={FadeInDown.duration(300).reduceMotion(ReduceMotion.System)}
              exiting={FadeOut.duration(120).reduceMotion(ReduceMotion.System)}
              style={[styles.fact, { color: meter.caption }]}
              numberOfLines={1}>
              {newest.label}
              <Text style={[styles.factValue, { color: colors.foreground }]}>{`  ${newest.value}`}</Text>
            </Animated.Text>
          )}
        </View>
      </View>
      {/* A passport stamp, pressed in each time an answer lands on it. Keyed
          on the fact, so every new one stamps again. */}
      {newest != null && <Stamp key={newest.key} />}
    </Animated.View>
  );
}

/**
 * The stamp: a violet tick in a tilted square, the way a passport is stamped.
 * It lands from larger and lighter to its size, once, on the settle curve
 * (no bounce, `shared/lib/motion`). With Reduce Motion it is simply there.
 */
function Stamp() {
  const p = useSharedValue(0);
  useEffect(() => {
    p.value = settle(1, 380);
  }, [p]);
  const style = useAnimatedStyle(() => ({
    opacity: p.value,
    transform: [{ scale: 1.6 - 0.6 * p.value }, { rotate: `${-4 - 8 * p.value}deg` }],
  }));
  return (
    <Animated.View style={[styles.stamp, style]} accessibilityElementsHidden importantForAccessibility="no">
      <HugeiconsIcon icon={Tick02Icon} size={18} color={PRIMARY} strokeWidth={2.6} />
    </Animated.View>
  );
}

/**
 * The passport, open: a page of it.
 *
 * A violet band with the name and the day it was issued, and where a passport
 * has its photograph, their own leg with the places they marked. Under it the
 * facts as a document lays them out, two to a row, a small label over each
 * answer. Any fact can be tapped to go back and change it.
 */
export function PassportCard({
  name,
  stamps,
  zones,
  onEdit,
}: {
  name: string;
  stamps: readonly PassportStamp[];
  /** The marked leg zones, for the photograph. Empty shows the foot instead. */
  zones: readonly LegZone[];
  onEdit?: (key: string) => void;
}) {
  const scheme = useColorScheme();
  const colors = palette[scheme];
  const meter = meterColors[scheme];
  const t = useT();
  const language = useLanguage();
  const issued = new Intl.DateTimeFormat(language, { day: 'numeric', month: 'long', year: 'numeric' }).format(new Date());

  return (
    <Animated.View
      entering={FadeIn.duration(320).reduceMotion(ReduceMotion.System)}
      style={[styles.card, { backgroundColor: colors.card }]}>
      <View style={[styles.band, { experimental_backgroundImage: COVER }]}>
        <View style={styles.bandCopy}>
          <Text style={styles.bandEyebrow}>{t('onboarding.passport.title')}</Text>
          <Text style={styles.bandName} numberOfLines={1} adjustsFontSizeToFit>
            {name}
          </Text>
          <Text style={styles.bandIssued}>{t('onboarding.passport.issued', { date: issued })}</Text>
        </View>
        <View style={styles.photo}>
          {zones.length > 0 ? (
            <View style={styles.photoLeg}>
              <LegMap selected={zones} />
            </View>
          ) : (
            <Image source={FOOT} style={styles.photoFoot} resizeMode="contain" />
          )}
        </View>
      </View>

      <View style={styles.grid}>
        {stamps.map((stamp, i) => (
          <Animated.View
            key={stamp.key}
            entering={FadeInDown.delay(140 + i * 60)
              .duration(300)
              .easing(Easing.bezier(0.23, 1, 0.32, 1).factory())
              .reduceMotion(ReduceMotion.System)}
            style={styles.cell}>
            <Pressable
              accessibilityRole="button"
              accessibilityLabel={`${stamp.label}: ${stamp.value}`}
              accessibilityHint={t('onboarding.passport.edit')}
              disabled={onEdit == null}
              onPress={() => {
                Haptics.selectionAsync();
                onEdit?.(stamp.key);
              }}
              style={({ pressed }) => [styles.field, { backgroundColor: meter.iconTile }, pressed && styles.pressed]}>
              <Text style={[styles.fieldLabel, { color: meter.label }]} numberOfLines={1}>
                {stamp.label}
              </Text>
              <Text style={[styles.fieldValue, { color: colors.foreground }]} numberOfLines={2}>
                {stamp.value}
              </Text>
            </Pressable>
          </Animated.View>
        ))}
      </View>

      {onEdit != null && (
        <View style={styles.editLine}>
          <HugeiconsIcon icon={PencilEdit02Icon} size={14} color={meter.caption} strokeWidth={2} />
          <Text style={[styles.editText, { color: meter.caption }]}>{t('onboarding.passport.edit')}</Text>
        </View>
      )}
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  pressed: { opacity: 0.6 },

  strip: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    paddingVertical: 9,
    paddingLeft: 9,
    paddingRight: 12,
    borderRadius: 20,
    borderCurve: 'continuous',
    marginBottom: 18,
  },
  coverFoot: { width: 40, height: 40 },
  who: { flex: 1, gap: 2 },
  stripTitle: fonts.heavy(15, -0.2),
  factSlot: { height: 18, justifyContent: 'center' },
  fact: fonts.medium(13),
  factValue: fonts.bold(13),
  stamp: {
    width: 34,
    height: 34,
    borderRadius: 9,
    borderCurve: 'continuous',
    borderWidth: 2,
    borderColor: PRIMARY,
    backgroundColor: 'rgba(139,92,246,0.12)',
    alignItems: 'center',
    justifyContent: 'center',
  },

  card: {
    borderRadius: 26,
    borderCurve: 'continuous',
    overflow: 'hidden',
    paddingBottom: 12,
  },
  band: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    paddingVertical: 14,
    paddingLeft: 18,
    paddingRight: 14,
  },
  bandCopy: { flex: 1, gap: 2 },
  bandEyebrow: { ...fonts.bold(11, 1.4), textTransform: 'uppercase', color: 'rgba(255,255,255,0.72)' },
  bandName: { ...fonts.heavy(28, -0.7), color: '#FFFFFF' },
  bandIssued: { ...fonts.medium(12), color: 'rgba(255,255,255,0.7)' },
  photo: {
    width: 72,
    height: 92,
    borderRadius: 12,
    borderCurve: 'continuous',
    backgroundColor: 'rgba(255,255,255,0.92)',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  photoLeg: { height: 86, alignItems: 'center' },
  photoFoot: { width: 52, height: 52 },

  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 10,
    paddingTop: 10,
  },
  cell: { width: '50%', padding: 4 },
  field: {
    minHeight: 60,
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderRadius: 14,
    borderCurve: 'continuous',
    gap: 2,
  },
  fieldLabel: { ...fonts.bold(11, 0.6), textTransform: 'uppercase' },
  fieldValue: { ...fonts.bold(15, -0.2), lineHeight: 19 },
  editLine: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
    marginTop: 8,
  },
  editText: fonts.medium(13),
});
