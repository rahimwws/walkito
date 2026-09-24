import { HugeiconsIcon, type IconSvgElement } from '@hugeicons/react-native';
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
  type ImageSourcePropType,
  type StyleProp,
  type ViewStyle,
} from 'react-native';

import { accents, fonts, type AccentName } from '@/shared/config';
import { useColorScheme } from '@/shared/lib/theme';

/** Width ÷ height. Taken from the design's pair of side-by-side cards. */
const ASPECT = 0.93;
const RADIUS = 26;
const BADGE_SIZE = 34;

/** Media cards stay dark in both schemes, the way Music and Fitness tiles do —
 * artwork sits behind the text, and a scheme-following surface would leave the
 * caption unreadable half the time. */
const INK = '#FFFFFF';
const MUTED = 'rgba(255,255,255,0.62)';
const BASE = '#141416';

export type FeatureCardProps = {
  /** Artwork filling the card. A soft tinted wash stands in when omitted. */
  image?: ImageSourcePropType;
  /** Small circular glyph pinned to the top-left corner. */
  badgeIcon?: IconSvgElement;
  /** Line above the title. Ignored when `icon` is set. */
  eyebrow?: string;
  /** Emphasised opening fragment of the title, e.g. "1" in "1 for 20 Days". */
  titleLead?: string;
  title: string;
  /** Glyph beside the title. Renders the footer as one row instead of a
   * stacked eyebrow + title. */
  icon?: IconSvgElement;
  /** Tints both the badge and the stand-in wash. */
  accent?: AccentName;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
};

/**
 * A tappable media tile: artwork, an optional corner badge, and a caption
 * anchored to the bottom.
 *
 * Designed to sit two-up in a row — give each `flex: 1` and the aspect ratio
 * keeps the pair square-ish at any width.
 */
export function FeatureCard({
  image,
  badgeIcon,
  eyebrow,
  titleLead,
  title,
  icon,
  accent = 'violet',
  onPress,
  style,
}: FeatureCardProps) {
  const scheme = useColorScheme();
  const tone = accents[scheme][accent];

  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [styles.card, style, pressed && { opacity: 0.88 }]}>
      {image != null ? (
        // In a pinned frame, stretched to fill it. A bundled image takes the
        // file's own pixel size as its default width and height, so pinned by
        // its insets alone it laid out as a 1600pt photo and `cover` showed its
        // top-left corner blown up across the card. The frame has no intrinsic
        // size to leak, and `flex: 1` with the defaults cleared fills it.
        <View style={StyleSheet.absoluteFill}>
          <Image source={image} style={styles.art} resizeMode="cover" />
        </View>
      ) : (
        // Stand-in artwork: an off-centre wash that reads as a blurred photo
        // behind the caption without shipping an asset.
        <View
          style={[
            StyleSheet.absoluteFill,
            {
              experimental_backgroundImage: `radial-gradient(circle at 62% 34%, ${tone.fill} 0%, ${tone.track} 42%, ${BASE} 78%)`,
            },
          ]}
        />
      )}

      {/* Keeps the caption legible over whatever the artwork happens to be. */}
      <View
        pointerEvents="none"
        style={[
          StyleSheet.absoluteFill,
          {
            experimental_backgroundImage:
              'linear-gradient(to top, rgba(0,0,0,0.78) 0%, rgba(0,0,0,0.34) 38%, rgba(0,0,0,0) 68%)',
          },
        ]}
      />

      {badgeIcon != null && (
        <View style={[styles.badge, { backgroundColor: tone.fill }]}>
          <HugeiconsIcon icon={badgeIcon} size={18} color={BASE} strokeWidth={2.2} />
        </View>
      )}

      <View style={styles.footer}>
        {icon != null ? (
          <View style={styles.inlineRow}>
            <HugeiconsIcon icon={icon} size={20} color={INK} strokeWidth={1.9} />
            <Text style={[styles.title, styles.inlineTitle]} numberOfLines={2}>
              {title}
            </Text>
          </View>
        ) : (
          <>
            {eyebrow != null && <Text style={styles.eyebrow}>{eyebrow}</Text>}
            <Text style={styles.title} numberOfLines={2}>
              {titleLead != null && <Text style={styles.titleLead}>{titleLead} </Text>}
              {title}
            </Text>
          </>
        )}
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  art: { flex: 1, width: undefined, height: undefined },
  card: {
    flex: 1,
    aspectRatio: ASPECT,
    borderRadius: RADIUS,
    borderCurve: 'continuous',
    overflow: 'hidden',
    backgroundColor: BASE,
    justifyContent: 'flex-end',
  },
  badge: {
    position: 'absolute',
    top: 14,
    left: 14,
    width: BADGE_SIZE,
    height: BADGE_SIZE,
    borderRadius: BADGE_SIZE / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  footer: {
    padding: 16,
    gap: 2,
  },
  inlineRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  eyebrow: {
    fontSize: 14,
    fontFamily: fonts.regular,
    color: MUTED,
  },
  title: {
    fontSize: 19,
    fontFamily: fonts.regular,
    color: MUTED,
    letterSpacing: -0.2,
  },
  inlineTitle: {
    fontSize: 16,
    fontFamily: fonts.medium,
    color: INK,
    flexShrink: 1,
  },
  titleLead: {
    fontFamily: fonts.bold,
    color: INK,
  },
});
