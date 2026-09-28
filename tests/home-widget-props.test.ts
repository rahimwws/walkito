import { describe, expect, mock, test } from 'bun:test';

import { NO_SIGNALS } from '../src/entities/health/model/metrics';

// The health slice's public API pulls in the HealthKit bridge and React
// Native, which bun cannot load. The widget only reads the cached signals.
mock.module('@/entities/health', () => ({ healthSignals: () => NO_SIGNALS }));

const { buildWidgetProps } = await import('../src/features/home-widget/model/props');
const { weekPlan } = await import('../src/entities/program');

/** Every path in a value that holds null — the one thing UserDefaults aborts on. */
function nullPaths(value: unknown, path = 'props'): string[] {
  if (value === null) return [path];
  if (Array.isArray(value)) return value.flatMap((item, i) => nullPaths(item, `${path}[${i}]`));
  if (value != null && typeof value === 'object') {
    return Object.entries(value).flatMap(([key, item]) => nullPaths(item, `${path}.${key}`));
  }
  return [];
}

describe('home widget props', () => {
  const now = Date.now();
  const plan = weekPlan(now).days;
  const links = { fine: 'walkito:///?checkin=fine', hurts: 'walkito:///?checkin=hurts', checkin: 'walkito:///?checkin=open' };

  test('today carries no null anywhere', () => {
    expect(nullPaths(buildWidgetProps(now, {}, 'walkito:///', links, plan))).toEqual([]);
  });

  test('a forecast carries no null, no answer, and the check-in links', () => {
    const props = buildWidgetProps(now + 86_400_000, {}, 'walkito:///', links, plan, true);
    expect(nullPaths(props)).toEqual([]);
    expect(props.answerScore).toBeUndefined();
    expect(props.links.hurts).toBe(links.hurts);
  });

  test('the week is seven Monday-first cells with today marked', () => {
    const props = buildWidgetProps(now, {}, 'walkito:///', links, plan);
    expect(props.week).toHaveLength(7);
    const monday = (new Date(now).getDay() + 6) % 7;
    expect(props.todayIndex).toBe(monday);
    expect(props.week[monday].state).not.toBe('missed');
  });
});
