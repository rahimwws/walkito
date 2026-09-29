import { describe, expect, test } from 'bun:test';
import { readFileSync } from 'node:fs';

import { palette } from '@/shared/config/theme';

import {
  ART_FADE_FROM,
  ART_FADE_TO,
  COVER_MARGIN,
  CROUCH_SCALE,
  HOLE_OPEN_TO,
  MASCOT_FOCUS,
  MASK_GRACE_MS,
  REDUCED_FADE_MS,
  REVEAL_BY_MS,
  REVEAL_MS,
  SPLASH_MASCOT_SIZE,
  VEIL_FADE_FROM,
  artOpacity,
  coverScale,
  focusPoint,
  focusRadius,
  holeOpacity,
  mascotBox,
  revealScale,
  revealTilt,
  smoothstep,
  veilOpacity,
} from './reveal-math';

/** Portrait windows the app can open in: SE, 13 mini, 15/16 Pro, 16 Pro Max,
 * and an iPhone app letterboxed on an iPad. */
const WINDOWS = [
  { width: 375, height: 667, ratio: 2 },
  { width: 375, height: 812, ratio: 3 },
  { width: 393, height: 852, ratio: 3 },
  { width: 440, height: 956, ratio: 3 },
  { width: 768, height: 1024, ratio: 2 },
];

function farthestCorner(width: number, height: number, x: number, y: number) {
  return Math.max(
    Math.hypot(x, y),
    Math.hypot(width - x, y),
    Math.hypot(x, height - y),
    Math.hypot(width - x, height - y),
  );
}

describe('mascotBox', () => {
  test('is the 200 pt square at the centre of the window', () => {
    for (const { width, height, ratio } of WINDOWS) {
      const box = mascotBox(width, height, ratio);
      expect(box.size).toBe(SPLASH_MASCOT_SIZE);
      expect(Math.abs(box.x + box.size / 2 - width / 2)).toBeLessThanOrEqual(0.5 / ratio + 1e-9);
      expect(Math.abs(box.y + box.size / 2 - height / 2)).toBeLessThanOrEqual(0.5 / ratio + 1e-9);
    }
  });

  test('sits on whole device pixels, where Yoga puts the Image', () => {
    // 393 − 200 is odd: the unsnapped left edge would be 289.5 px on a 3x screen.
    const box = mascotBox(393, 852, 3);
    expect(box.x * 3).toBeCloseTo(Math.round(box.x * 3), 9);
    expect(box.y * 3).toBeCloseTo(Math.round(box.y * 3), 9);
  });

  test('survives a nonsense pixel ratio', () => {
    expect(mascotBox(393, 852, 0).x).toBe(97);
  });
});

describe('coverScale', () => {
  test('grows the solid body past every corner of the window', () => {
    for (const { width, height, ratio } of WINDOWS) {
      const box = mascotBox(width, height, ratio);
      const focus = focusPoint(box);
      const radius = focusRadius(box);
      const end = coverScale(width, height, focus, radius);
      expect(radius * end).toBeGreaterThanOrEqual(farthestCorner(width, height, focus.x, focus.y));
      // By the margin and no more, so the leap is not longer than it needs.
      expect((radius * end) / farthestCorner(width, height, focus.x, focus.y)).toBeCloseTo(
        COVER_MARGIN,
        9,
      );
    }
  });

  test('is where the zoom actually ends', () => {
    const box = mascotBox(393, 852, 3);
    const end = coverScale(393, 852, focusPoint(box), focusRadius(box));
    expect(revealScale(1, 1, end)).toBeCloseTo(end, 9);
    // A sanity range for a phone: big enough to clear the corners from a body
    // 58 pt across, small enough that the last frames are not a blur.
    expect(end).toBeGreaterThan(12);
    expect(end).toBeLessThan(25);
  });
});

describe('focus', () => {
  test('is on the body, above and left of the square centre', () => {
    expect(MASCOT_FOCUS.x).toBeLessThan(0.5);
    expect(MASCOT_FOCUS.y).toBeLessThan(0.5);
    const box = mascotBox(393, 852, 3);
    const focus = focusPoint(box);
    expect(focus.x).toBeGreaterThan(box.x);
    expect(focus.x).toBeLessThan(box.x + box.size);
    expect(focus.y).toBeGreaterThan(box.y);
    expect(focus.y).toBeLessThan(box.y + box.size);
  });
});

describe('the reveal at rest', () => {
  test('is exactly the static splash', () => {
    // What Skia draws under the cover before anything moves: no hole, the
    // mascot at full strength and size, upright. Anything else and removing
    // the cover would change a pixel.
    expect(revealScale(0, 0, 17)).toBe(1);
    expect(Math.abs(revealTilt(0, 0))).toBe(0);
    expect(holeOpacity(0)).toBe(0);
    expect(artOpacity(0)).toBe(1);
    expect(veilOpacity(0)).toBe(1);
  });
});

describe('revealScale', () => {
  const end = 17;

  test('crouches first, without the leap', () => {
    expect(revealScale(1, 0, end)).toBeCloseTo(CROUCH_SCALE, 9);
    expect(revealScale(0.5, 0, end)).toBeCloseTo(1 - (1 - CROUCH_SCALE) / 2, 9);
  });

  test('only ever grows during the leap', () => {
    let last = revealScale(1, 0, end);
    for (let i = 1; i <= 100; i++) {
      const next = revealScale(1, i / 100, end);
      expect(next).toBeGreaterThan(last);
      last = next;
    }
  });

  test('accelerates: half the time covers less than half the zoom', () => {
    const half = revealScale(1, 0.5, end);
    const geometricMiddle = Math.sqrt(CROUCH_SCALE * end);
    expect(half).toBeLessThan(geometricMiddle);
  });

  test('clamps progress outside 0–1', () => {
    expect(revealScale(-1, -1, end)).toBe(1);
    expect(revealScale(2, 2, end)).toBeCloseTo(end, 9);
    expect(revealScale(Number.NaN, Number.NaN, end)).toBe(1);
  });
});

describe('layers', () => {
  test('the hole is fully open before the drawn mascot starts to fade', () => {
    // Otherwise he would fade to the background colour, not to the app.
    expect(HOLE_OPEN_TO).toBeLessThanOrEqual(ART_FADE_FROM);
    expect(holeOpacity(ART_FADE_FROM)).toBe(1);
    expect(artOpacity(HOLE_OPEN_TO)).toBe(1);
  });

  test('the drawn mascot is gone well before the end', () => {
    expect(artOpacity(ART_FADE_TO)).toBe(0);
    expect(ART_FADE_TO).toBeLessThan(VEIL_FADE_FROM);
  });

  test('he is seen to grow before he turns into a window', () => {
    // Faded too early he dissolves in place: once he is only a hole, his edge
    // is invisible over the app's own background, the splash's colour.
    for (const { width, height, ratio } of WINDOWS) {
      const box = mascotBox(width, height, ratio);
      const end = coverScale(width, height, focusPoint(box), focusRadius(box));
      // Still whole once he is clearly bigger than the still.
      expect(revealScale(1, ART_FADE_FROM, end)).toBeGreaterThan(1.1);
      // Half faded only when he is well past his size at rest.
      expect(revealScale(1, (ART_FADE_FROM + ART_FADE_TO) / 2, end)).toBeGreaterThan(1.6);
      // Gone only once he is several times it.
      expect(revealScale(1, ART_FADE_TO, end)).toBeGreaterThan(2.5);
    }
  });

  test('the veil is whole until the corners are nearly out, and gone at the end', () => {
    expect(veilOpacity(VEIL_FADE_FROM)).toBe(1);
    expect(veilOpacity(1)).toBe(0);
  });

  test('the lean is straightened out by mid-leap', () => {
    expect(revealTilt(1, 0)).toBeLessThan(0);
    expect(Math.abs(revealTilt(1, 0.5))).toBe(0);
    expect(Math.abs(revealTilt(1, 1))).toBe(0);
  });

  test('smoothstep is flat at both ends', () => {
    expect(smoothstep(0, 1, 0)).toBe(0);
    expect(smoothstep(0, 1, 1)).toBe(1);
    expect(smoothstep(0, 1, 0.5)).toBe(0.5);
    expect(smoothstep(0.2, 0.4, 0.1)).toBe(0);
    expect(smoothstep(0.2, 0.4, 0.9)).toBe(1);
  });
});

describe('timing', () => {
  test('the reveal fits the budget after the app is ready', () => {
    // Worst case: two 60 Hz frames for the first screen to lay out, the whole
    // grace for Skia, then the zoom. The fade path is shorter still.
    const twoFrames = 2 * (1000 / 60);
    expect(twoFrames + MASK_GRACE_MS + REVEAL_MS).toBeLessThanOrEqual(900);
    expect(REDUCED_FADE_MS).toBeLessThanOrEqual(REVEAL_MS);
  });

  test('the hard stop comes after any sane launch, and never much later', () => {
    expect(REVEAL_BY_MS).toBeGreaterThan(REVEAL_MS);
    expect(REVEAL_BY_MS).toBeLessThanOrEqual(2500);
  });
});

describe('native splash in app.json', () => {
  type Plugin = string | [string, Record<string, unknown>];
  const config = JSON.parse(readFileSync(new URL('../../../../app.json', import.meta.url), 'utf8'));
  const entry = (config.expo.plugins as Plugin[]).find(
    (plugin): plugin is [string, Record<string, unknown>] =>
      Array.isArray(plugin) && plugin[0] === 'expo-splash-screen',
  );

  test('is configured', () => {
    expect(entry).toBeDefined();
  });

  test('draws the same picture as the first JS frame', () => {
    const options = entry?.[1] ?? {};
    expect(options.imageWidth).toBe(SPLASH_MASCOT_SIZE);
    expect(options.backgroundColor).toBe(palette.dark.background);
    expect(options.resizeMode).toBe('contain');
    expect(options.image).toBe('./assets/update/mascot-handoff@3x.png');
  });

  test('has no dark variant, which would unpin the dark appearance', () => {
    // The plugin writes UIUserInterfaceStyle = Automatic whenever a `dark`
    // block is present, overriding app.json's "dark". The app is dark-only,
    // so the one variant already is the dark one.
    expect(entry?.[1]?.dark).toBeUndefined();
    expect(config.expo.userInterfaceStyle).toBe('dark');
  });
});
