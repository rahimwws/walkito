import PencilEdit02Icon from '@hugeicons/core-free-icons/PencilEdit02Icon';
import Tick02Icon from '@hugeicons/core-free-icons/Tick02Icon';
import { HugeiconsIcon } from '@hugeicons/react-native';
import * as Haptics from 'expo-haptics';
import { useEffect, useRef, type ReactNode } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import Animated, {
  Easing,
  FadeIn,
  FadeInDown,
  FadeOut,
  ReduceMotion,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';
import Svg, { Path } from 'react-native-svg';

import { PRIMARY, accents, fonts, meterColors, palette } from '@/shared/config';
import { mix, shade } from '@/shared/lib/color';
import { useT } from '@/shared/lib/i18n';
import { settle } from '@/shared/lib/motion';
import { useColorScheme } from '@/shared/lib/theme';
import { Card3D } from '@/shared/ui/card-3d';
import { MascotStill, celebrateRig } from '@/shared/ui/mascot';

/** One fact on the passport: an answer, with what it is an answer to. */
export type PassportStamp = {
  /** The step it came from, which a tap on it goes back to. */
  key: string;
  label: string;
  value: string;
  /** Where its question sits in the flow: the highest is the latest answer. */
  order: number;
};

/**
 * The stamp's inks. A stamp is printed paper, so it is the same in both
 * schemes: cream paper, and a coral panel between the brand's orange and red.
 * The figure on it is drawn in the paper's cream with the panel's own colour,
 * deepened, for its outline, as a one-colour print would be.
 */
export const STAMP_INK = (() => {
  const panel = shade(mix(accents.light.orange.fill, accents.light.red.fill, 0.55), 0.12);
  const paper = mix(palette.light.card, accents.light.amber.fill, 0.1);
  return { paper, panel, figure: paper, outline: shade(panel, 0.5) };
})();

/** The stamp's tilt as it lies on the page: stuck on by hand, not printed square. */
const TILT = -3;

/**
 * Where the perforation's holes sit along an edge `length` long: evenly, the
 * row centred, a solid corner left at each end.
 */
function holesAlong(length: number, step: number): number[] {
  const count = Math.max(1, Math.floor((length - step / 2) / step));
  const start = (length - (count - 1) * step) / 2;
  return Array.from({ length: count }, (_, i) => start + i * step);
}

/**
 * A postage stamp's outline: a `w` × `h` rectangle with half-round bites of
 * radius `r` taken out of every edge, one every `step`. Traced clockwise; each
 * bite is an arc swept counter-clockwise on screen, which is the way into the
 * paper on every edge.
 */
export function stampPath(w: number, h: number, r: number, step: number): string {
  const across = holesAlong(w, step);
  const down = holesAlong(h, step);
  const n = (v: number) => Number(v.toFixed(2));
  const d: string[] = ['M 0 0'];
  for (const x of across) d.push(`L ${n(x - r)} 0`, `A ${r} ${r} 0 0 0 ${n(x + r)} 0`);
  d.push(`L ${w} 0`);
  for (const y of down) d.push(`L ${w} ${n(y - r)}`, `A ${r} ${r} 0 0 0 ${w} ${n(y + r)}`);
  d.push(`L ${w} ${h}`);
  for (const x of [...across].reverse()) d.push(`L ${n(x + r)} ${h}`, `A ${r} ${r} 0 0 0 ${n(x - r)} ${h}`);
  d.push(`L 0 ${h}`);
  for (const y of [...down].reverse()) d.push(`L 0 ${n(y + r)}`, `A ${r} ${r} 0 0 0 0 ${n(y - r)}`);
  d.push('Z');
  return d.join(' ');
}

/** The paper with its perforated edge, drawn behind whatever is printed on it. */
function Perforated({ width, height, hole, step }: { width: number; height: number; hole: number; step: number }) {
  return (
    <Svg width={width} height={height} style={StyleSheet.absoluteFill} pointerEvents="none">
      <Path d={stampPath(width, height, hole, step)} fill={STAMP_INK.paper} />
    </Svg>
  );
}

/**
 * The Foot Passport's first stamp, on the halfway screen: cream paper with a
 * perforated edge, a coral panel, "Foot passport · first edition" across its
 * top, the figure large in the middle, and the title and its number at the
 * foot, as a commemorative stamp is laid out.
 *
 * It lands the way a stamp is pressed on: from a little larger and turned,
 * down to the page and its tilt, on the settle curve. With Reduce Motion it is
 * simply there. `art` draws the figure at the size it is given, in the
 * stamp's inks (`STAMP_INK`), so the screen can keep its own live mascot.
 */
export function PassportFirstStamp({
  width,
  title,
  number,
  art,
}: {
  width: number;
  /** Printed at its foot: what the stamp marks. */
  title: string;
  /** Its number in the series, printed as three digits. */
  number: number;
  art: (size: number) => ReactNode;
}) {
  const t = useT();
  const height = Math.round(width * 1.2);
  const margin = Math.round(width * 0.06) + 6;
  // Room left over the figure for his jump: the panel clips at its edge.
  const figure = Math.round((width - margin * 2) * 0.7);

  const land = useSharedValue(0);
  useEffect(() => {
    land.value = settle(1, 420);
  }, [land]);
  const style = useAnimatedStyle(() => ({
    opacity: Math.min(land.value * 2, 1),
    transform: [{ scale: 1.14 - 0.14 * land.value }, { rotate: `${TILT - 6 * (1 - land.value)}deg` }],
  }));

  return (
    <Animated.View
      accessible
      accessibilityRole="image"
      accessibilityLabel={`${t('onboarding.passport.stampEdition')}. ${title}`}
      style={[styles.stamp, { width, height }, style]}>
      <Perforated width={width} height={height} hole={Math.max(5, width * 0.026)} step={Math.max(16, width * 0.075)} />
      <View style={[styles.panel, { top: margin, left: margin, right: margin, bottom: margin }]}>
        <Text style={styles.edition} numberOfLines={2} adjustsFontSizeToFit minimumFontScale={0.75}>
          {t('onboarding.passport.stampEdition')}
        </Text>
        <View style={styles.figure}>{art(figure)}</View>
        <View style={styles.foot}>
          <Text style={styles.title} numberOfLines={2} adjustsFontSizeToFit minimumFontScale={0.75}>
            {title}
          </Text>
          <Text style={styles.number}>{String(number).padStart(3, '0')}</Text>
        </View>
      </View>
    </Animated.View>
  );
}

/** The passport's mark on the strip: the same stamp, at a glance's size. */
function MiniStamp() {
  const width = 34;
  const height = 40;
  return (
    <View style={{ width, height }} accessibilityElementsHidden importantForAccessibility="no-hide-descendants">
      <Perforated width={width} height={height} hole={2} step={6.5} />
      <View style={[styles.panel, styles.miniPanel]}>
        <MascotStill rig={celebrateRig} size={26} paper={STAMP_INK.figure} ink={STAMP_INK.outline} />
      </View>
    </View>
  );
}

/**
 * The Foot Passport, folded above the questions.
 *
 * Its first stamp in small, the name, and the newest fact said in words with
 * what it answers: "Where it hurts  Left heel". Each answer lands as its line
 * slides in and a tick presses in on the right, so every question visibly adds
 * to something that is theirs.
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
      style={styles.stripSlot}
      accessible
      accessibilityLabel={`${t('onboarding.passport.owner', { name })}${newest != null ? `. ${newest.label}: ${newest.value}` : ''}`}>
      <Card3D padding={0} contentStyle={styles.strip}>
        <MiniStamp />
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
        {/* A tick, pressed in each time an answer lands on the passport. Keyed
            on the fact, so every new one stamps again. */}
        {newest != null && <Tick key={newest.key} />}
      </Card3D>
    </Animated.View>
  );
}

/**
 * The tick: violet in a tilted square, the way a passport is stamped. It lands
 * from larger and lighter to its size, once, on the settle curve (no bounce,
 * `shared/lib/motion`). With Reduce Motion it is simply there.
 */
function Tick() {
  const p = useSharedValue(0);
  useEffect(() => {
    p.value = settle(1, 380);
  }, [p]);
  const style = useAnimatedStyle(() => ({
    opacity: p.value,
    transform: [{ scale: 1.6 - 0.6 * p.value }, { rotate: `${-4 - 8 * p.value}deg` }],
  }));
  return (
    <Animated.View style={[styles.tick, style]} accessibilityElementsHidden importantForAccessibility="no">
      <HugeiconsIcon icon={Tick02Icon} size={18} color={PRIMARY} strokeWidth={2.6} />
    </Animated.View>
  );
}

/**
 * What the passport holds so far: the facts as a document lays them out, two
 * to a row, a small label over each answer, on a glass card under the stamp.
 * Any fact can be tapped to go back and change it.
 */
export function PassportCard({
  stamps,
  onEdit,
}: {
  stamps: readonly PassportStamp[];
  onEdit?: (key: string) => void;
}) {
  const scheme = useColorScheme();
  const colors = palette[scheme];
  const meter = meterColors[scheme];
  const t = useT();

  if (stamps.length === 0) return null;

  return (
    <Animated.View entering={FadeIn.delay(220).duration(320).reduceMotion(ReduceMotion.System)}>
      <Card3D padding={6} contentStyle={styles.card}>
        <View style={styles.grid}>
          {stamps.map((stamp, i) => (
            <Animated.View
              key={stamp.key}
              entering={FadeInDown.delay(260 + i * 60)
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
      </Card3D>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  pressed: { opacity: 0.6 },

  stamp: {
    alignSelf: 'center',
  },
  panel: {
    position: 'absolute',
    backgroundColor: STAMP_INK.panel,
    borderRadius: 4,
    overflow: 'hidden',
    alignItems: 'center',
  },
  edition: {
    ...fonts.heavy(10, 1.2),
    lineHeight: 13,
    textTransform: 'uppercase',
    textAlign: 'center',
    color: STAMP_INK.paper,
    marginTop: 10,
    paddingHorizontal: 10,
  },
  figure: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  foot: {
    alignSelf: 'stretch',
    flexDirection: 'row',
    alignItems: 'flex-end',
    gap: 8,
    paddingHorizontal: 12,
    paddingBottom: 10,
  },
  title: {
    flex: 1,
    ...fonts.heavy(17, -0.3),
    lineHeight: 20,
    color: STAMP_INK.paper,
  },
  number: {
    ...fonts.heavy(20, -0.2),
    color: STAMP_INK.paper,
    fontVariant: ['tabular-nums'],
  },
  miniPanel: {
    top: 4,
    left: 4,
    right: 4,
    bottom: 4,
    borderRadius: 2,
    justifyContent: 'center',
  },

  stripSlot: {
    marginBottom: 18,
  },
  strip: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    paddingVertical: 8,
    paddingLeft: 10,
    paddingRight: 12,
  },
  who: { flex: 1, gap: 2 },
  stripTitle: fonts.heavy(15, -0.2),
  factSlot: { height: 18, justifyContent: 'center' },
  fact: fonts.medium(13),
  factValue: fonts.bold(13),
  tick: {
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
    paddingBottom: 8,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
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
