import { describe, expect, test } from 'bun:test';

import { contrast, filledFace, labelOn, mix, readableOn, shade } from '@/shared/lib/color';

import { DEPTH, RAISED_BORDER, filled, raised } from './raised';
import { PRIMARY, accents, palette } from './theme';

const SCHEMES = ['light', 'dark'] as const;
/**
 * WCAG AA for normal text. Every label in the kit is normal text by WCAG's
 * measure: large is 14pt bold, about 18.7 iOS points, and the largest label on
 * a filled face is the 18pt button.
 */
const AA = 4.5;

describe('the raised tokens', () => {
  test('are derived as their comments say', () => {
    expect(mix(palette.light.card, PRIMARY, 0.1)).toBe(raised.light.selectedFill);
    for (const scheme of SCHEMES) {
      expect(shade(PRIMARY, 0.1).toUpperCase()).toBe(filled[scheme].primary.face);
    }
    expect(shade(filled.light.primary.face, 0.2).toUpperCase()).toBe(filled.light.primary.lip);
    expect(shade(filled.dark.primary.face, 0.28).toUpperCase()).toBe(filled.dark.primary.lip);
    for (const scheme of SCHEMES) expect(raised[scheme].surface).toBe(palette[scheme].card);
  });

  test('an outlined control has one bottom band: its lip is its edge', () => {
    for (const scheme of SCHEMES) expect(raised[scheme].lip).toBe(raised[scheme].edge);
  });

  test('a chosen answer reads at AA in both schemes', () => {
    for (const scheme of SCHEMES) {
      const t = raised[scheme];
      expect(contrast(t.selectedInk, t.selectedFill)).toBeGreaterThanOrEqual(AA);
    }
  });

  test('an unchosen answer and a secondary button read at AA', () => {
    for (const scheme of SCHEMES) {
      expect(contrast(palette[scheme].foreground, raised[scheme].surface)).toBeGreaterThanOrEqual(AA);
    }
  });

  test('filled labels read at AA, not only at the large-text bar', () => {
    for (const scheme of SCHEMES) {
      for (const face of Object.values(filled[scheme])) {
        expect(contrast(face.label, face.face)).toBeGreaterThanOrEqual(AA);
      }
    }
    // The brand violet itself does not, which is why the face is a step down.
    expect(contrast('#FFFFFF', PRIMARY)).toBeLessThan(AA);
  });

  test('every accent face gets a label that reads on it at AA', () => {
    for (const scheme of SCHEMES) {
      for (const { fill } of Object.values(accents[scheme])) {
        const face = filledFace(fill);
        expect(face.label).toBe(labelOn(fill));
        expect(contrast(face.label, face.face)).toBeGreaterThanOrEqual(AA);
        expect(contrast(face.lip, face.face)).toBeGreaterThan(1.2);
      }
    }
  });

  test('an accent face moves only where its label needs it', () => {
    for (const scheme of SCHEMES) {
      for (const [name, { fill }] of Object.entries(accents[scheme])) {
        const moved = filledFace(fill).face !== fill.toUpperCase();
        // Light violet takes white at 4.35:1; every other accent already reads.
        expect(moved).toBe(scheme === 'light' && name === 'violet');
      }
    }
    // Unmoved, its ledge is the kit's usual 0.2 shade.
    expect(filledFace(accents.dark.teal.fill).lip).toBe(shade(accents.dark.teal.fill, 0.2).toUpperCase());
  });

  test('ink, not white, on amber, orange and teal, in both schemes', () => {
    for (const scheme of SCHEMES) {
      for (const name of ['amber', 'orange', 'teal'] as const) {
        expect(labelOn(accents[scheme][name].fill)).toBe('#111114');
      }
    }
  });

  test('a value in its accent is darkened only as far as AA needs', () => {
    for (const scheme of SCHEMES) {
      const surface = raised[scheme].surface;
      for (const { fill } of Object.values(accents[scheme])) {
        const ink = readableOn(fill, surface);
        expect(contrast(ink, surface)).toBeGreaterThanOrEqual(AA);
      }
    }
    // Violet already reads on white, so it keeps its own hex.
    expect(readableOn('#6C48C0', '#FFFFFF')).toBe('#6C48C0');
  });

  test('a lip is visible against the face it sits under', () => {
    for (const scheme of SCHEMES) {
      for (const face of Object.values(filled[scheme])) {
        expect(contrast(face.lip, face.face)).toBeGreaterThan(1.2);
      }
    }
  });

  test('filled and outlined controls stand the same height, and the outlined bottom edge is as thick as the filled lip', () => {
    for (const size of Object.values(DEPTH)) {
      expect(size.face + size.lip).toBe(size.total);
      expect(size.outlinedFace + size.outlinedLip).toBe(size.total);
      // The outlined face carries its border at the bottom too.
      expect(RAISED_BORDER + size.outlinedLip).toBe(size.lip);
    }
  });
});
