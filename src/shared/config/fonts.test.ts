import { describe, expect, test } from 'bun:test';

import { faces, fonts } from './fonts';

describe('fonts', () => {
  test('sets the size and the spacing the design asks for', () => {
    expect(fonts.semibold(17, -0.2)).toEqual({ ...faces.semibold, fontSize: 17, letterSpacing: -0.2 });
  });

  test('leaves letterSpacing out at 0, so pair kerning stays on', () => {
    const style = fonts.regular(19);
    expect(style).toEqual({ ...faces.regular, fontSize: 19 });
    expect('letterSpacing' in style).toBe(false);
  });

  test('is the system face at five weights, none lighter than Regular', () => {
    expect(Object.values(faces).map((face) => [face.fontFamily, face.fontWeight])).toEqual([
      ['System', '400'],
      ['System', '500'],
      ['System', '600'],
      ['System', '700'],
      ['System', '800'],
    ]);
  });
});
