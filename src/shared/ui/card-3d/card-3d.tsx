import type { ReactNode } from 'react';
import type { AccessibilityRole, StyleProp, ViewStyle } from 'react-native';

import { accents, palette, raised, type AccentName } from '@/shared/config';
import { mix } from '@/shared/lib/color';
import { useReduceTransparency } from '@/shared/lib/theme';
import { GLASS_FACE, GLASS_MATERIAL, GLASS_RIM, Raised, seeThrough, useRaisedScheme } from '@/shared/ui/raised';

const CARD = {
  md: { radius: 20, lip: 2 },
  lg: { radius: 26, lip: 4 },
} as const;

/** How far a toned card leans to its accent: the face, then its border and lip. */
const TONE = {
  light: { face: 0.12, edge: 0.4 },
  dark: { face: 0.18, edge: 0.5 },
} as const;

/** The glass card's lip, when it has one. */
const GLASS_LIP = 4;

export type CardColours = { face: string; edge: string; lip: string };

/**
 * A card's face, border and lip, neutral or leaning to a tone.
 *
 * Exported so whatever divides a card's content (a rule between quest rows)
 * draws in the card's own edge colour: a neutral grey rule on an amber card
 * reads as a seam from somewhere else.
 */
export function cardColours(scheme: 'light' | 'dark', tone?: AccentName): CardColours {
  const tokens = raised[scheme];
  if (tone == null) return { face: tokens.surface, edge: tokens.edge, lip: tokens.lip };
  const card = palette[scheme].card;
  const fill = accents[scheme][tone].fill;
  const edge = mix(card, fill, TONE[scheme].edge);
  return { face: mix(card, fill, TONE[scheme].face), edge, lip: edge };
}

/** How far a toned glass card leans to its accent: the pane, then its rim. */
const GLASS_TONE = { face: 0.16, rim: 0.5 } as const;

/**
 * The same, in the kit's drawn glass: a see-through pane and rim, on the solid
 * lip the opaque card would have (a crescent shows under glass, never through
 * it).
 */
export function glassCardColours(scheme: 'light' | 'dark', tone?: AccentName): CardColours {
  const glass = GLASS_MATERIAL[scheme];
  if (tone == null) return { face: glass.face, edge: glass.rim, lip: glass.lip };
  const fill = accents[scheme][tone].fill;
  return {
    face: seeThrough(fill, GLASS_TONE.face),
    edge: seeThrough(fill, GLASS_TONE.rim),
    lip: cardColours(scheme, tone).lip,
  };
}

type A11y = {
  accessibilityRole?: AccessibilityRole;
  accessibilityLabel?: string;
  accessibilityHint?: string;
};

export type Card3DProps = A11y & {
  children: ReactNode;
  /** `md` (default) for rows and lists, `lg` for a card that leads a screen. */
  size?: 'md' | 'lg';
  /**
   * Leans the card toward an accent. A tone names a category (quests are
   * amber), never a verdict: a card is not tinted by how well something went.
   */
  tone?: AccentName;
  /** Omit for an inert card. */
  onPress?: () => void;
  /** Inner padding. Default 16. */
  padding?: number;
  /**
   * `glass` (default): the kit's drawn glass, a clear pane with a sheen and a
   * thin rim on its lip. `solid`: the opaque card. Reduce Transparency draws
   * `solid` whatever is asked.
   */
  material?: 'glass' | 'solid';
  style?: StyleProp<ViewStyle>;
  contentStyle?: StyleProp<ViewStyle>;
};

/**
 * The 3D card: a border and a lip under it, so the content reads as a thing
 * you could pick up rather than a region of the page. `Relief`, grown up.
 * Glass by default (the look that is ours), opaque on request.
 *
 * Inert by default, and then a plain `View`: a card that holds buttons must
 * not sit in their responder path.
 */
export function Card3D({
  children,
  size = 'md',
  tone,
  onPress,
  padding = 16,
  material = 'glass',
  style,
  contentStyle,
  accessibilityRole,
  accessibilityLabel,
  accessibilityHint,
}: Card3DProps) {
  const scheme = useRaisedScheme();
  const shape = CARD[size];
  const solidOnly = useReduceTransparency();
  const glassy = material === 'glass' && !solidOnly;
  const { face, edge, lip } = glassy ? glassCardColours(scheme, tone) : cardColours(scheme, tone);

  return (
    <Raised
      face={face}
      edge={edge}
      edgeWidth={glassy ? GLASS_RIM + 0.5 : undefined}
      translucent={glassy}
      sheen={glassy ? 'soft' : undefined}
      lip={lip}
      depth={shape.lip}
      radius={shape.radius}
      onPress={onPress}
      accessibilityRole={accessibilityRole ?? (onPress != null ? 'button' : undefined)}
      accessibilityLabel={accessibilityLabel}
      accessibilityHint={accessibilityHint}
      style={style}
      contentStyle={[{ padding }, contentStyle]}>
      {children}
    </Raised>
  );
}

export type GlassCardProps = A11y & {
  children: ReactNode;
  /** A crescent lip under the glass. Only drawn on a pressable card: chrome
   * that cannot be pressed has no reason to look like it can. */
  lip?: boolean;
  onPress?: () => void;
  /** Default 26, the app's card radius. */
  radius?: number;
  /** Default 16. */
  padding?: number;
  style?: StyleProp<ViewStyle>;
  contentStyle?: StyleProp<ViewStyle>;
};

/**
 * A glass card: what sits *over* content, as the counters over the glow do.
 *
 * Liquid Glass on iOS 26, a blur with a sheen before it, and a solid card
 * under Reduce Transparency and on Android. Never put a glass `Button3D`
 * inside one: glass nested in glass does not render. Use `secondary`.
 */
export function GlassCard({
  children,
  lip = false,
  onPress,
  radius = 26,
  padding = 16,
  style,
  contentStyle,
  accessibilityRole,
  accessibilityLabel,
  accessibilityHint,
}: GlassCardProps) {
  const scheme = useRaisedScheme();
  const withLip = lip && onPress != null;

  return (
    <Raised
      face={GLASS_FACE}
      lip={raised[scheme].glassLip}
      depth={withLip ? GLASS_LIP : 0}
      radius={radius}
      onPress={onPress}
      accessibilityRole={accessibilityRole ?? (onPress != null ? 'button' : undefined)}
      accessibilityLabel={accessibilityLabel}
      accessibilityHint={accessibilityHint}
      style={style}
      contentStyle={[{ padding }, contentStyle]}>
      {children}
    </Raised>
  );
}
