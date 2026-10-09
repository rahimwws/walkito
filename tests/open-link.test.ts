import { describe, expect, test } from 'bun:test';

import { rewriteIncomingPath } from '@/pages/open/model/intent';
import { linkTarget } from '@/pages/open/model/route';

/**
 * Email links, from the URL a phone hands the app to the screen it opens.
 * The case this exists for: no link, however old or odd, may end on Expo
 * Router's "Unmatched Route" page.
 */

describe('incoming links', () => {
  test('the site hand-off shape becomes the /open route', () => {
    expect(rewriteIncomingPath('walkito:///?open=today&minutes=3&src=email&e=winback_7')).toBe(
      '/open/today?minutes=3&src=email&e=winback_7',
    );
    expect(rewriteIncomingPath('/?open=library/morning&src=email&e=day2_morning')).toBe(
      '/open/library/morning?src=email&e=day2_morning',
    );
  });

  test('a scheme link with "open" as its host is folded back into the path', () => {
    expect(rewriteIncomingPath('walkito://open/today?src=email&e=welcome')).toBe('/open/today?src=email&e=welcome');
    expect(rewriteIncomingPath('walkito.dev://open/plan/')).toBe('/open/plan');
  });

  test('every shape of a plan-code link reaches one route', () => {
    const to = '/open/plan-code?code=WK-2GMA00';
    expect(rewriteIncomingPath('walkito://plan?code=WK-2GMA00')).toBe(to);
    expect(rewriteIncomingPath('walkito:///plan?code=WK-2GMA00')).toBe(to);
    expect(rewriteIncomingPath('walkito.dev://plan/?code=WK-2GMA00')).toBe(to);
    expect(rewriteIncomingPath('https://walkito.site/p/WK-2GMA00/')).toBe(to);
    expect(rewriteIncomingPath('https://walkito.site/p/WK-2GMA00')).toBe(to);
    expect(rewriteIncomingPath('/p/WK-2GMA00/')).toBe(to);
    expect(rewriteIncomingPath('walkito://p/WK-2GMA00')).toBe(to);
    // Passed on as typed; the page decides whether it is a code.
    expect(rewriteIncomingPath('walkito://plan?code=wk 2gma00')).toBe('/open/plan-code?code=wk%202gma00');
  });

  test('a plan link without a code is not a plan-code link', () => {
    expect(rewriteIncomingPath('walkito://plan')).toBe('walkito://plan');
    expect(rewriteIncomingPath('walkito:///plan?code=')).toBe('walkito:///plan?code=');
    expect(rewriteIncomingPath('https://walkito.site/p/')).toBe('https://walkito.site/p/');
    expect(rewriteIncomingPath('https://walkito.site/p/a/b/')).toBe('https://walkito.site/p/a/b/');
  });

  test('everything else passes through untouched', () => {
    expect(rewriteIncomingPath('https://walkito.site/open/today/?src=email&e=welcome')).toBe(
      'https://walkito.site/open/today/?src=email&e=welcome',
    );
    expect(rewriteIncomingPath('walkito:///?checkin=fine')).toBe('walkito:///?checkin=fine');
    expect(rewriteIncomingPath('/progress')).toBe('/progress');
    expect(rewriteIncomingPath('::not a url::')).toBe('::not a url::');
  });
});

describe('where each email path goes', () => {
  test('every button path the emails use has a screen', () => {
    expect(linkTarget(['today'], {})).toEqual({ to: 'program', request: { kind: 'today' } });
    expect(linkTarget(['today'], { minutes: '3' })).toEqual({ to: 'program', request: { kind: 'today', minutes: 3 } });
    expect(linkTarget(['plan'], {})).toEqual({ to: 'program', request: { kind: 'plan' } });
    expect(linkTarget(['test'], {})).toEqual({ to: 'program', request: { kind: 'test' } });
    expect(linkTarget(['progress'], {})).toEqual({ to: 'progress' });
    expect(linkTarget(['library', 'morning'], {})).toEqual({ to: 'library', protocol: 'morning' });
    expect(linkTarget(['paywall'], { offering: 'offer' })).toEqual({ to: 'offer', offering: 'offer' });
    expect(linkTarget(['settings'], {})).toEqual({ to: 'settings' });
    expect(linkTarget(['plan-code'], { code: 'WK-2GMA00' })).toEqual({ to: 'plan-code', code: 'WK-2GMA00' });
  });

  test('an unknown path goes Home, and odd minutes are ignored', () => {
    expect(linkTarget(['something', 'old'], {})).toEqual({ to: 'home' });
    expect(linkTarget([], {})).toEqual({ to: 'home' });
    expect(linkTarget(['today', ''], { minutes: '7' })).toEqual({ to: 'program', request: { kind: 'today' } });
  });
});
