import { describe, expect, mock, test } from 'bun:test';

import { systemTracking } from './font-faces';

// `fonts.ts` requires the Inter files for `fontAssets`, which the test runner
// cannot parse. Nothing here reads them.
for (const file of ['400Regular/Inter_400Regular', '500Medium/Inter_500Medium', '700Bold/Inter_700Bold']) {
  mock.module(`@expo-google-fonts/inter/${file}.ttf`, () => ({ default: 0 }));
}
const { faces, fonts } = await import('./fonts');

/**
 * What CoreText added per character, measured on the iOS 26.5 simulator by
 * setting the same 44-character line in the old bundled SF Pro Rounded .otf and
 * in the system rounded face, and dividing the difference by the length.
 */
const MEASURED: [size: number, perChar: number][] = [
  [9.5, 0.571],
  [13, 0.508],
  [17, 0.374],
  [24, 0.352],
  [34, 0.382],
  [56, 0.273],
  [104, 0],
];

describe('systemTracking', () => {
  test('matches what iOS adds to the rounded system face', () => {
    for (const [size, perChar] of MEASURED) {
      expect(Math.abs(systemTracking(size) - perChar)).toBeLessThan(0.001);
    }
  });

  test('floors to whole font units between the table sizes', () => {
    // 40pt interpolates to 19.71 units between 36 (22) and 50 (14): CoreText
    // uses 19, not 19.71 and not 20.
    expect(systemTracking(40)).toBe((19 * 40) / 2048);
    // 24pt lands exactly on 30 units, and must not be floored to 29 by a
    // rounding error on the way.
    expect(systemTracking(24)).toBe((30 * 24) / 2048);
  });

  test('holds the first entry below 6pt and is 0 from 80pt up', () => {
    expect(systemTracking(5)).toBe((174 * 5) / 2048);
    expect(systemTracking(80)).toBe(0);
    expect(systemTracking(200)).toBe(0);
  });
});

describe('fonts', () => {
  test('sets the size and takes the tracking back out of the spacing', () => {
    expect(fonts.semibold(17, -0.2)).toEqual({
      ...faces.semibold,
      fontSize: 17,
      letterSpacing: -0.2 - systemTracking(17),
    });
    expect(fonts.medium(15)).toEqual({
      ...faces.medium,
      fontSize: 15,
      letterSpacing: -systemTracking(15),
    });
  });

  test('leaves letterSpacing out when it comes to 0, so pair kerning stays on', () => {
    const style = fonts.heavy(104);
    expect(style).toEqual({ ...faces.heavy, fontSize: 104 });
    expect('letterSpacing' in style).toBe(false);
  });

  test('keeps the five weights the bundled files had', () => {
    expect(Object.values(faces).map((face) => [face.fontFamily, face.fontWeight])).toEqual([
      ['ui-rounded', '400'],
      ['ui-rounded', '500'],
      ['ui-rounded', '600'],
      ['ui-rounded', '700'],
      ['ui-rounded', '800'],
    ]);
  });
});
