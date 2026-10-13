import Tick02Icon from '@hugeicons/core-free-icons/Tick02Icon';
import { HugeiconsIcon, type IconSvgElement } from '@hugeicons/react-native';
import * as Haptics from 'expo-haptics';
import { useEffect, type ReactNode } from 'react';
import { StyleSheet, Text, View, type StyleProp, type ViewStyle } from 'react-native';
import Animated, {
  ReduceMotion,
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

import { DEPTH, accents, filled, fonts, meterColors, palette, raised, type AccentName } from '@/shared/config';
import { Raised, useRaisedScheme } from '@/shared/ui/raised';

/** Colours cross over this fast: Duolingo swaps them instantly, and a few
 * frames of blend is the least that still reads as one card changing rather
 * than as a second card appearing in its place. */
const SELECT_MS = 120;
const RADIUS = 18;
const ICON_TILE = 40;
/** The room a peeking figure takes at the card's right edge, by default. */
const PEEK_WIDTH = 92;
const TILE_ART = 56;
/** The box or radio: its side, the tick in it, the dot in a chosen radio. A
 * tile's is smaller and tucked into the corner, clear of a 56pt art tile on a
 * card as narrow as a third of a phone. */
const MARK = {
  row: { side: 24, tick: 16, dot: 10, radius: 7 },
  tile: { side: 20, tick: 14, dot: 8, radius: 6 },
} as const;

export type OptionCard3DProps = {
  label: string;
  /** A second line under the label, read with it. */
  caption?: string;
  icon?: IconSvgElement;
  /** Tints the icon tile. Defaults to the brand violet. */
  accent?: AccentName;
  /** A picture, a still mascot or an emoji instead of the icon, drawn as
   * given at the leading edge: no tile behind it, so art that wants one
   * brings its own. */
  art?: ReactNode;
  /**
   * Art that leans into the card from its right edge: a figure standing on
   * the card's bottom edge, cut off by the card itself (the face clips it).
   * There is no icon tile then, and the box or radio moves to the leading
   * side. Decorative: hidden from screen readers. Row layout only.
   */
  peek?: ReactNode;
  /** The room `peek` takes at the right edge. Default 92. */
  peekWidth?: number;
  selected: boolean;
  /** `single` is a radio in a group, `multi` a checkbox. */
  mode: 'single' | 'multi';
  /** `row` (default) is an answer card; `tile` stands the art on top, as a
   * Duolingo course card does. */
  layout?: 'row' | 'tile';
  disabled?: boolean;
  onPress: () => void;
  /** Omit, and the card reads its label and caption together. */
  accessibilityLabel?: string;
  style?: StyleProp<ViewStyle>;
};

/**
 * One answer you can pick: Duolingo's answer card, an opaque face raised on
 * a 2pt lip, leaning violet when chosen.
 *
 * Selected is never colour alone. The icon tile fills violet with its glyph
 * turned white, and then a multi-choice card ticks its box while a single one
 * fills its radio with a dot; someone who cannot tell the violet from the grey
 * still sees which one is picked. The label keeps its weight either way: a
 * heavier face can rewrap a long label (German) and change the card's height
 * under the finger that chose it.
 *
 * Every answer gets the same selected look. Nothing here is coloured by which
 * answer it is, so the card cannot reward one reply over another (the reason
 * the session's "how did it feel" card is neutral).
 *
 * The haptic is the selection tick, and it fires when the choice changes, on
 * the tap, not on touch-down: a finger can land on a card and slide off it
 * without choosing anything.
 */
export function OptionCard3D({
  label,
  caption,
  icon,
  accent,
  art,
  peek,
  peekWidth = PEEK_WIDTH,
  selected,
  mode,
  layout = 'row',
  disabled = false,
  onPress,
  accessibilityLabel,
  style,
}: OptionCard3DProps) {
  const scheme = useRaisedScheme();
  const tokens = raised[scheme];
  const colors = palette[scheme];
  const meter = meterColors[scheme];
  // The pane, unchosen and chosen: the opaque card. Drawn glass was tried
  // here and read as murky behind a 3D lip; answers stay solid.
  const pane = { face: tokens.surface, edge: tokens.edge, lip: tokens.lip, onFace: tokens.selectedFill, onEdge: tokens.selectedEdge, onLip: tokens.selectedEdge };
  const peeking = peek != null && layout === 'row';
  // The violet a chosen tile, box and radio fill with, and what sits on it:
  // the kit's primary face, the one every violet face with white on it uses.
  const { face: violet, label: onPrimary } = filled[scheme].primary;
  const tone = accent != null ? accents[scheme][accent] : { fill: violet, track: tokens.selectedFill };

  const on = useSharedValue(selected ? 1 : 0);
  useEffect(() => {
    on.value = withTiming(selected ? 1 : 0, { duration: SELECT_MS, reduceMotion: ReduceMotion.System });
  }, [selected, on]);

  const faceColour = useAnimatedStyle(() => ({
    backgroundColor: interpolateColor(on.value, [0, 1], [pane.face, pane.onFace]),
    borderColor: interpolateColor(on.value, [0, 1], [pane.edge, pane.onEdge]),
  }));
  const lipColour = useAnimatedStyle(() => ({
    backgroundColor: interpolateColor(on.value, [0, 1], [pane.lip, pane.onLip]),
  }));
  const labelColour = useAnimatedStyle(() => ({
    color: interpolateColor(on.value, [0, 1], [colors.foreground, tokens.selectedInk]),
  }));
  const tileColour = useAnimatedStyle(() => ({
    backgroundColor: interpolateColor(on.value, [0, 1], [tone.track, violet]),
  }));
  const whiteGlyph = useAnimatedStyle(() => ({ opacity: on.value }));
  const toneGlyph = useAnimatedStyle(() => ({ opacity: 1 - on.value }));
  const boxColour = useAnimatedStyle(() => ({
    backgroundColor: interpolateColor(on.value, [0, 1], [tokens.surface, violet]),
    borderColor: interpolateColor(on.value, [0, 1], [tokens.edge, violet]),
  }));

  const tile = layout === 'tile';
  const glyphSize = tile ? 28 : 22;
  const tileSize = tile ? TILE_ART : ICON_TILE;
  const labelFace = tile ? fonts.bold(15) : fonts.bold(17, -0.2);
  const ink = disabled ? tokens.disabledInk : undefined;
  // A mark on a disabled box sits on the grey face, where white vanishes.
  const markInk = ink ?? onPrimary;

  const tileGlyph =
    icon != null ? (
      <Animated.View
        style={[
          styles.iconTile,
          { width: tileSize, height: tileSize, borderRadius: tile ? 16 : 12 },
          disabled ? { backgroundColor: tokens.disabledFace } : tileColour,
        ]}>
        <Animated.View style={[styles.glyph, !disabled && toneGlyph]}>
          <HugeiconsIcon icon={icon} size={glyphSize} color={ink ?? tone.fill} strokeWidth={2} />
        </Animated.View>
        {!disabled && (
          <Animated.View style={[styles.glyph, whiteGlyph]}>
            <HugeiconsIcon icon={icon} size={glyphSize} color={onPrimary} strokeWidth={2} />
          </Animated.View>
        )}
      </Animated.View>
    ) : null;
  // A peeking figure replaces the tile altogether.
  const iconTile = peeking ? null : (art ?? tileGlyph);

  // A ticked box for many, a dotted radio for one: the shape says which kind
  // of question it is before anything is chosen.
  const markSize = MARK[layout];
  const mark = (
    <Animated.View
      style={[
        styles.mark,
        {
          width: markSize.side,
          height: markSize.side,
          borderRadius: mode === 'multi' ? markSize.radius : markSize.side / 2,
        },
        disabled ? { borderColor: tokens.disabledInk, backgroundColor: tokens.disabledFace } : boxColour,
        tile && styles.markCorner,
      ]}>
      <Animated.View style={whiteGlyph}>
        {mode === 'multi' ? (
          <HugeiconsIcon icon={Tick02Icon} size={markSize.tick} color={markInk} strokeWidth={2.6} />
        ) : (
          <View
            style={{
              width: markSize.dot,
              height: markSize.dot,
              borderRadius: markSize.dot / 2,
              backgroundColor: markInk,
            }}
          />
        )}
      </Animated.View>
    </Animated.View>
  );

  const text = (
    <View style={[styles.text, tile && styles.textTile, peeking && { marginRight: peekWidth - 20 }]}>
      <Animated.Text
        style={[labelFace, tile && styles.centred, ink != null ? { color: ink } : labelColour]}
        maxFontSizeMultiplier={1.4}>
        {label}
      </Animated.Text>
      {caption != null && (
        <Text
          style={[styles.caption, tile && styles.centred, { color: ink ?? meter.caption }]}
          maxFontSizeMultiplier={1.4}>
          {caption}
        </Text>
      )}
    </View>
  );

  return (
    <Raised
      face={disabled ? tokens.disabledFace : pane.face}
      edge={disabled ? tokens.disabledFace : pane.edge}
      clip={peeking}
      // A crescent cannot cross-fade, so it changes with the choice; at the
      // pane's 120 ms blend nobody sees it go first.
      lip={pane.lip}
      depth={DEPTH.md.outlinedLip}
      radius={RADIUS}
      haptic="none"
      disabled={disabled}
      onPress={() => {
        void Haptics.selectionAsync();
        onPress();
      }}
      accessibilityRole={mode === 'single' ? 'radio' : 'checkbox'}
      // No label of our own: the card is one accessible element, so it reads
      // its label and caption Texts together. A caption passed as the hint is
      // lost to anyone with hints turned off.
      accessibilityLabel={accessibilityLabel}
      accessibilityState={mode === 'single' ? { selected } : { checked: selected }}
      faceAnimatedStyle={disabled ? undefined : faceColour}
      lipAnimatedStyle={disabled ? undefined : lipColour}
      style={[tile && styles.tileOuter, style]}
      contentStyle={[tile ? styles.tileFace : styles.rowFace, peeking && styles.peekFace]}>
      {peeking ? (
        <>
          {mark}
          {text}
          <View
            pointerEvents="none"
            accessibilityElementsHidden
            importantForAccessibility="no-hide-descendants"
            style={[styles.peek, { width: peekWidth }]}>
            {peek}
          </View>
        </>
      ) : (
        <>
          {iconTile}
          {text}
          {mark}
        </>
      )}
    </Raised>
  );
}

const styles = StyleSheet.create({
  rowFace: {
    minHeight: 64,
    paddingVertical: 14,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
  },
  /** A little taller with a figure in it, so he has room to stand. */
  peekFace: {
    minHeight: 68,
  },
  /** Pinned to the face's right edge, top to bottom; the face clips it. */
  peek: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
  },
  tileOuter: {
    minWidth: 104,
  },
  tileFace: {
    paddingTop: 12,
    paddingHorizontal: 12,
    paddingBottom: 20,
    alignItems: 'center',
    gap: 10,
  },
  iconTile: {
    alignItems: 'center',
    justifyContent: 'center',
    borderCurve: 'continuous',
  },
  glyph: {
    ...StyleSheet.absoluteFill,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    flex: 1,
    gap: 2,
  },
  textTile: {
    flex: 0,
    alignSelf: 'stretch',
  },
  centred: {
    textAlign: 'center',
  },
  caption: fonts.medium(14),
  mark: {
    borderWidth: 2,
    borderCurve: 'continuous',
    alignItems: 'center',
    justifyContent: 'center',
  },
  markCorner: {
    position: 'absolute',
    top: 6,
    right: 6,
  },
});
