import { describe, expect, test } from 'bun:test';

import { crescentPath } from './crescent';

/** The end point of every segment, in order. */
function points(path: string): [number, number][] {
  const out: [number, number][] = [];
  for (const segment of path.split(/(?=[MLAZ])/)) {
    const values = segment.slice(1).trim().split(/\s+/).filter(Boolean).map(Number);
    if (values.length >= 2) out.push([values[values.length - 2], values[values.length - 1]]);
  }
  return out;
}

describe('the crescent under a glass face', () => {
  test('starts where the face corner begins, and closes', () => {
    const path = crescentPath(200, 58, 18, 4);
    expect(points(path)[0]).toEqual([0, 40]);
    expect(path.trim().endsWith('Z')).toBe(true);
  });

  test('spans the face width and reaches exactly one depth below it', () => {
    const all = points(crescentPath(200, 58, 18, 4));
    const xs = all.map(([x]) => x);
    const ys = all.map(([, y]) => y);
    expect(Math.min(...xs)).toBe(0);
    expect(Math.max(...xs)).toBe(200);
    expect(Math.max(...ys)).toBe(62);
    // Nothing above where the face's bottom corners start: the band never
    // climbs into the face it sits under.
    expect(Math.min(...ys)).toBe(40);
  });

  test('runs back along the face bottom, so the band is depth thick', () => {
    const path = crescentPath(200, 58, 18, 4);
    expect(path).toContain('L 182 62');
    expect(path).toContain('L 18 58');
  });

  test('clamps the radius to half the height, as borderRadius does', () => {
    expect(crescentPath(120, 36, 99, 3)).toBe(crescentPath(120, 36, 18, 3));
    expect(crescentPath(120, 36, 99, 3)).toContain('A 18 18');
  });

  test('draws nothing before the face has been measured', () => {
    expect(crescentPath(0, 58, 18, 4)).toBe('');
    expect(crescentPath(200, 0, 18, 4)).toBe('');
    expect(crescentPath(200, 58, 18, 0)).toBe('');
  });
});
