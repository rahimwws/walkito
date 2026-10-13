/**
 * Tokens for the raised kit: the glass + 3D surfaces in `shared/ui/raised` and
 * every component built on it.
 *
 * Kept out of `theme.ts` because they are derived rather than chosen: each one
 * is a mix or a shade of a `palette` or `PRIMARY` value, written down as the
 * opaque hex it comes to. Opaque on purpose — a 2pt border and the lip under it
 * overlap at the corners, and two translucent layers there would double into a
 * darker seam that a single opaque colour cannot.
 *
 * The derivation is noted beside each entry so a palette change can be carried
 * through by hand, and `raised.test.ts` checks the contrast pairs, so a value
 * that drifts out of legibility fails a test instead of a screenshot.
 */

export const raised = {
  light: {
    /** The face of a neutral raised surface: `palette.card`. */
    surface: '#FFFFFF',
    /** Its 2pt border: the meter track flattened onto the card. */
    edge: '#E7E7E8',
    /**
     * The ledge under it: the edge again, as in dark and as Duolingo draws it.
     * A ledge a step darker than the border (`shade(card, 0.14)`, what `Relief`
     * drew) gave an outlined control a two-tone bottom band.
     */
    lip: '#E7E7E8',
    /** A chosen answer: `mix(card, PRIMARY, 0.10)`. */
    selectedFill: '#F3EFFE',
    /** Its border, and its lip: `mix(card, PRIMARY, 0.45)`. */
    selectedEdge: '#CBB6FB',
    /** Its label: about 5.5:1 on `selectedFill`. */
    selectedInk: '#6C48C0',
    disabledFace: '#E7E7E8',
    /** Contrast minimums do not apply to a disabled control (WCAG 1.4.3). */
    disabledInk: '#9B9B9C',
    /** A sticker or a node not reached yet. */
    lockedFace: '#F1F1F1',
    /** The crescent under a pressable glass face. */
    glassLip: '#D0D0D2',
    /** The stripe riding a progress fill, and any other catch of light. Its
     * strength is set where it is drawn: 0.2, Duolingo's. */
    highlight: '#FFFFFF',
  },
  dark: {
    surface: '#1C1C1F',
    edge: '#3C3C3E',
    /**
     * The edge doubles as the lip, as Duolingo's dark theme does. A ledge
     * shaded down from the card lands behind the page, a few points away, and
     * disappears; the thicker bottom wall is the same trick and survives.
     */
    lip: '#3C3C3E',
    selectedFill: '#2E2641',
    selectedEdge: '#593F95',
    selectedInk: '#B495F9',
    disabledFace: '#333335',
    disabledInk: '#7B7B7D',
    lockedFace: '#2A2A2C',
    glassLip: '#373739',
    highlight: '#FFFFFF',
  },
} as const;

export type RaisedColors = {
  readonly [K in keyof (typeof raised)['light']]: string;
};

/** A filled face: the colour, the ledge under it, and the label on it. */
export type FilledFace = { face: string; lip: string; label: string };

/**
 * The two filled faces that are not an accent.
 *
 * `primary` is the brand violet a step down, `shade(PRIMARY, 0.1)`, with white
 * on it at 5.06:1. `PRIMARY` itself takes white at 4.23:1, which passes only
 * for large text, and no label on a filled face is large: WCAG's 14pt bold is
 * about 18.7 iOS points, while a badge is 11, the bar's count 12 and a button
 * 14 to 18. `ink` is today's committing look made 3D; in the light scheme its
 * face is lifted from `#1C1C21` to `#2A2A31` so the step down to the black lip
 * is visible at all.
 *
 * An accent's face is not here: `filledFace` (`shared/lib/color`) derives it
 * from the accent's fill, darkened only where its label needs it.
 */
export const filled: Record<'light' | 'dark', Record<'primary' | 'ink', FilledFace>> = {
  light: {
    // Lip: shade(face, 0.2).
    primary: { face: '#7D53DD', lip: '#6442B1', label: '#FFFFFF' },
    ink: { face: '#2A2A31', lip: '#000000', label: '#FFFFFF' },
  },
  dark: {
    // Lip: shade(face, 0.28). Darker than in light: against a near-black
    // page the light scheme's lip reads as part of the face.
    primary: { face: '#7D53DD', lip: '#5A3C9F', label: '#FFFFFF' },
    ink: { face: '#F2F2F5', lip: '#BDBDBF', label: '#111114' },
  },
};

export type DepthSize = 'lg' | 'md' | 'sm';

/**
 * The geometry of a raised control, by size.
 *
 * Duolingo's measured rule: a filled control and an outlined one stand the same
 * total height, and the outlined one's bottom edge (its 2pt border plus its
 * lip) is as thick as the filled one's lip. So a primary button and the
 * secondary beside it line up top and bottom, and both read as the same depth.
 *
 * How far a press moves the face is the lip, always: if the two ever
 * disagreed, a pressed face would float above its own base or sink through it.
 */
export const DEPTH: Record<
  DepthSize,
  {
    /** Face height of a filled control. */
    face: number;
    /** Lip under a filled control. */
    lip: number;
    /** Face height of an outlined control, its 2pt border included. */
    outlinedFace: number;
    /** Lip under an outlined control. */
    outlinedLip: number;
    /** Face plus lip, the same for both. */
    total: number;
    radius: number;
  }
> = {
  lg: { face: 56, lip: 6, outlinedFace: 58, outlinedLip: 4, total: 62, radius: 18 },
  md: { face: 46, lip: 4, outlinedFace: 48, outlinedLip: 2, total: 50, radius: 14 },
  sm: { face: 34, lip: 3, outlinedFace: 36, outlinedLip: 1, total: 37, radius: 11 },
};

/** The border every outlined raised surface draws. */
export const RAISED_BORDER = 2;
