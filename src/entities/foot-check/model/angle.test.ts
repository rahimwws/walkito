import { describe, expect, test } from 'bun:test';

import { NO_READING, STEADY_MS, feed, gaugeFill, tiltOf, type Reading } from './angle';

const RAD = Math.PI / 180;
/** Gravity as a phone tipped `deg` forward from upright feels it. */
const tipped = (deg: number) => ({ x: 0, y: -Math.cos(deg * RAD), z: -Math.sin(deg * RAD) });

/** Feed a run of angles, one every 50 ms, starting at `from`. */
function run(reading: Reading, angles: readonly number[], from: number): { reading: Reading; at: number } {
  let at = from;
  let next = reading;
  for (const angle of angles) {
    next = feed(next, angle, at);
    at += 50;
  }
  return { reading: next, at };
}

const hold = (angle: number, ms: number) => Array.from({ length: Math.ceil(ms / 50) }, () => angle);
const slide = (from: number, to: number, ms: number) => {
  const steps = Math.ceil(ms / 50);
  return Array.from({ length: steps }, (_, i) => from + ((to - from) * (i + 1)) / steps);
};

describe('the tilt of the phone', () => {
  test('upright is 0, flat is 90, and a lean is the lean', () => {
    expect(tiltOf(tipped(0))).toBeCloseTo(0, 5);
    expect(tiltOf({ x: 0, y: 0, z: -1 })).toBeCloseTo(90, 5);
    expect(tiltOf(tipped(31))).toBeCloseTo(31, 5);
  });

  test('upside down reads the same: which end is up is not asked', () => {
    expect(tiltOf({ x: 0, y: Math.cos(20 * RAD), z: Math.sin(20 * RAD) })).toBeCloseTo(20, 5);
  });

  test('a phone being moved about is not read', () => {
    expect(tiltOf({ x: 0.2, y: -1.6, z: 0.4 })).toBeNull();
    expect(tiltOf({ x: 0, y: -0.3, z: 0 })).toBeNull();
  });
});

describe('taking the ankle bend', () => {
  test('a shin that slides forward and stops is measured where it stopped', () => {
    const a = run(NO_READING, hold(2, 600), 0);
    const b = run(a.reading, slide(2, 31, 1500), a.at);
    expect(b.reading.result).toBeNull();
    const c = run(b.reading, hold(31, STEADY_MS + 400), b.at);
    expect(c.reading.result).toBe(31);
  });

  test('sitting still before moving measures nothing', () => {
    const { reading } = run(NO_READING, hold(3, 4000), 0);
    expect(reading.result).toBeNull();
  });

  test('a foot already tucked back is not measured where it started', () => {
    const a = run(NO_READING, hold(16, 3000), 0);
    expect(a.reading.result).toBeNull();
    const b = run(a.reading, [...slide(16, 34, 1200), ...hold(34, STEADY_MS + 400)], a.at);
    expect(b.reading.result).toBe(34);
  });

  test('a shin still moving is not measured', () => {
    const { reading } = run(NO_READING, [...hold(2, 300), ...slide(2, 40, 6000)], 0);
    expect(reading.result).toBeNull();
  });

  test('a phone lying on a thigh is not an ankle', () => {
    const { reading } = run(NO_READING, [...hold(5, 300), ...slide(5, 80, 800), ...hold(80, 3000)], 0);
    expect(reading.result).toBeNull();
  });

  test('samples lost to movement do not break the reading, and a result stays', () => {
    const a = run(NO_READING, [...hold(2, 300), ...slide(2, 28, 1000)], 0);
    const skipped = feed(a.reading, null, a.at);
    expect(skipped).toBe(a.reading);
    const b = run(skipped, hold(28, STEADY_MS + 400), a.at + 50);
    expect(b.reading.result).toBe(28);
    expect(feed(b.reading, 45, b.at).result).toBe(28);
  });

  test('a hand that trembles a degree either way is still still', () => {
    const tremble = Array.from({ length: 40 }, (_, i) => 30 + (i % 2 === 0 ? 0.8 : -0.8));
    const a = run(NO_READING, [...hold(2, 300), ...slide(2, 30, 1000)], 0);
    expect(run(a.reading, tremble, a.at).reading.result).toBe(30);
  });
});

test('the gauge fills with the angle and stops at its ends', () => {
  expect(gaugeFill(0)).toBe(0);
  expect(gaugeFill(25)).toBe(0.5);
  expect(gaugeFill(90)).toBe(1);
  expect(gaugeFill(-4)).toBe(0);
});
