import { StyleSheet, Text, View, type StyleProp, type ViewStyle } from 'react-native';
import Svg, { Polygon } from 'react-native-svg';

import { fonts, type AccentName } from '@/shared/config';
import { shade } from '@/shared/lib/color';
import { Raised, faceFor, useRaisedScheme } from '@/shared/ui/raised';

const BADGE_HEIGHT = 22;
const BADGE_LIP = 2;
const RIBBON_HEIGHT = 34;
/** How far each swallowtail shows past the band, how deep its notch cuts, and
 * how far it hangs below the band (which is what reads as the fold). */
const TAIL = 18;
const TAIL_TUCK = 8;
const NOTCH = 8;
const DROP = 6;
const RIBBON_SHADE = 0.22;

export type BadgeProps = {
  label: string;
  /** Default the brand violet. */
  accent?: AccentName | 'primary';
  /** Stands it on a 2pt lip, for a badge on a raised card. */
  raised?: boolean;
  style?: StyleProp<ViewStyle>;
};

/** A small capsule of words: "New", "Best value". Never a verdict on a value. */
export function Badge({ label, accent = 'primary', raised = false, style }: BadgeProps) {
  const scheme = useRaisedScheme();
  const tone = faceFor(scheme, accent);
  return (
    <Raised
      face={tone.face}
      lip={tone.lip}
      depth={raised ? BADGE_LIP : 0}
      radius={8}
      style={[styles.badgeOuter, style]}
      contentStyle={styles.badge}>
      <Text style={[styles.badgeLabel, { color: tone.label }]} numberOfLines={1} maxFontSizeMultiplier={1.3}>
        {label}
      </Text>
    </Raised>
  );
}

export type RibbonProps = {
  label: string;
  accent: AccentName | 'primary';
  style?: StyleProp<ViewStyle>;
};

/**
 * A ribbon banner: a band with swallowtail ends folded behind it. For the
 * sticker book's cover and a celebration's header. Static; the moment around
 * it does the moving.
 */
export function Ribbon({ label, accent, style }: RibbonProps) {
  const scheme = useRaisedScheme();
  const tone = faceFor(scheme, accent);
  const tail = shade(tone.face, RIBBON_SHADE);
  const w = TAIL + TAIL_TUCK;
  const h = RIBBON_HEIGHT;
  return (
    <View style={[styles.ribbonOuter, style]}>
      <Svg width={w} height={h} style={[styles.tail, { left: 0 }]}>
        <Polygon points={`0,0 ${w},0 ${w},${h} 0,${h} ${NOTCH},${h / 2}`} fill={tail} />
      </Svg>
      <Svg width={w} height={h} style={[styles.tail, { right: 0 }]}>
        <Polygon points={`0,0 ${w},0 ${w - NOTCH},${h / 2} ${w},${h} 0,${h}`} fill={tail} />
      </Svg>
      <View style={[styles.band, { backgroundColor: tone.face }]}>
        <Text style={[styles.ribbonLabel, { color: tone.label }]} numberOfLines={1} maxFontSizeMultiplier={1.3}>
          {label}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  badgeOuter: {
    alignSelf: 'flex-start',
  },
  badge: {
    height: BADGE_HEIGHT,
    paddingHorizontal: 9,
    alignItems: 'center',
    justifyContent: 'center',
  },
  badgeLabel: fonts.heavy(11, 0.2),
  ribbonOuter: {
    alignSelf: 'center',
    height: RIBBON_HEIGHT + DROP,
    paddingHorizontal: TAIL,
  },
  tail: {
    position: 'absolute',
    top: DROP,
  },
  band: {
    height: RIBBON_HEIGHT,
    borderRadius: 6,
    paddingHorizontal: 18,
    alignItems: 'center',
    justifyContent: 'center',
  },
  ribbonLabel: fonts.heavy(15),
});
