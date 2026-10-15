/**
 * Other people: how many moved with you today (the end of a session), and
 * following Walkito on Instagram (Profile, and once on the third day of use).
 *
 * **A count, never a person.** Nothing here names anybody or says anything
 * about a body. `{count}` is a whole number of people. "Instagram" is never
 * translated.
 */

import type { SourceEntry } from '../entry';

export const COMMUNITY_EN = {
  'community.alongside': { one: '{count} other person moved with you today', other: '{count} others moved with you today' },
  'follow.section': 'Community',
  'follow.title': 'Walkito on Instagram',
  'follow.note': 'Hi, I’m Rahim and I make Walkito. On Instagram I post short moves for your feet, real stories and what’s coming next. I read every reply.',
  'follow.founder': 'Rahim, founder of Walkito',
  'follow.cta': 'Follow on Instagram',
  'follow.later': 'Not now',
  'follow.rowHint': 'Short moves for your feet and what’s new',
} as const satisfies Record<string, SourceEntry>;
