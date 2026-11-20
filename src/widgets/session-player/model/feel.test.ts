import { describe, expect, test } from 'bun:test';

import { SEND_HURT_TO_ANALYTICS, feedbackOf, feelForAnalytics } from './feel';

describe('after-session check-in', () => {
  test('the plan keeps its three readings', () => {
    expect(feedbackOf('easy')).toBe('easy');
    expect(feedbackOf('right')).toBe('ok');
    expect(feedbackOf('hard')).toBe('ok');
    expect(feedbackOf('hurt')).toBe('hard');
  });

  test('easy, right and hard each reach PostHog as their own value', () => {
    const sent = (['easy', 'right', 'hard'] as const).map((feel) => feelForAnalytics(feel));
    expect(sent).toEqual(['easy', 'right', 'hard']);
    expect(new Set(sent).size).toBe(3);
  });

  test('"It hurt" sends no new value until it is allowed', () => {
    expect(SEND_HURT_TO_ANALYTICS).toBe(false);
    expect(feelForAnalytics('hurt')).toBeNull();
    expect(feelForAnalytics('hurt', true)).toBe('hurt');
  });
});
