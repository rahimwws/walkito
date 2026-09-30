import * as b from './content.ts';
import type { EmailContent, EmailKey, Locale, PaywallView } from './types.ts';

/**
 * Every email once, with one believable user's numbers, in a given language.
 *
 * For looking at the real thing before real users get it: the scheduler's
 * `sampleTo` mode sends these to one address, and the preview page is rendered
 * from them. The user is the same one the preview describes — goal "stronger
 * calves", calf raises 8 → 14 of 25, mornings 6 → 3.
 */

const NAME: Record<Locale, string> = { en: 'sam', ru: 'аня', es: 'lucía' };

const PRICES: Record<Locale, { offer: string; standard: string }> = {
  en: { offer: '$14.99', standard: '$49.99' },
  ru: { offer: '1 190 ₽', standard: '3 990 ₽' },
  es: { offer: '14,99 €', standard: '49,99 €' },
};

function paywall(l: Locale): PaywallView {
  return { firstAt: '', lastAt: '', offerPrice: PRICES[l].offer, standardPrice: PRICES[l].standard, percent: 70, weeks: 12 };
}

export function sampleEmails(l: Locale): { key: EmailKey; content: EmailContent }[] {
  return [
    { key: 'welcome', content: b.welcome(l, { name: NAME[l], minutes: 5, runner: false }) },
    { key: 'day2_morning', content: b.day2Morning(l) },
    { key: 'day2_focus', content: b.day2Focus(l, { goal: 'calf_raises', metric: 'calf', current: 8 }) },
    { key: 'day5_easy', content: b.day5Easy(l) },
    { key: 'day5_start', content: b.day5Start(l) },
    { key: 'day10_keep', content: b.day10Keep(l, { days: 10, minutes: 5, painDrop: { start: 6, last: 3 } }) },
    { key: 'day14_test', content: b.day14Test(l, { metric: 'calf', before: 8 }) },
    { key: 'test_result', content: b.testResult(l, { metric: 'calf', before: 8, now: 14, weeks: 2 }) },
    { key: 'goal_reached', content: b.goalReached(l, { goal: 'calf_raises', next: 'balance' }) },
    { key: 'pain_up', content: b.painUp(l) },
    { key: 'winback_7', content: b.winback7(l) },
    { key: 'winback_21', content: b.winback21(l, { metric: 'calf', current: 14 }) },
    { key: 'offer', content: b.offer(l, { goal: 'calf_raises', metric: 'calf', current: 8, paywall: paywall(l) }) },
    { key: 'offer_final', content: b.offerFinal(l, { paywall: paywall(l) }) },
    { key: 'weekly', content: b.weekly(l, { sessions: 4, metric: 'calf', current: 14, avgPain: 3, next: 'balance' }) },
  ];
}
