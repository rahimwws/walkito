/**
 * Email content for site leads: the confirm email, day 0 welcome with PDFs,
 * and the 7-day starter plan sequence.
 *
 * All lowercase subjects, plain hyphens (never a long dash), no health claims
 * (never treat/cure/fix/heal/clinically proven/guaranteed), no promised
 * results. US spelling throughout.
 *
 * The exercises and doses come from the site's guides and the app's real
 * exercise catalogue, not invented here.
 */

import type { Locale } from './types.ts';

// ── Types ───────────────────────────────────────────────────────────────────

export type SiteEmailContent = {
  subject: string;
  preheader: string;
  paragraphs: string[];
  button: { label: string; url: string } | null;
  ps: string | null;
};

// ── Links ───────────────────────────────────────────────────────────────────

const SITE = 'https://walkito.site';

const PDF_URLS = {
  pf: `${SITE}/downloads/walkito-plantar-fasciitis-exercises.pdf`,
  flat: `${SITE}/downloads/walkito-flat-feet-exercises.pdf`,
  standing: `${SITE}/downloads/walkito-standing-all-day-exercises.pdf`,
};

const GUIDE_URLS = {
  pf: `${SITE}/plantar-fasciitis-exercises/`,
  flat: `${SITE}/flat-feet-exercises/`,
  standing: `${SITE}/feet-hurt-standing-all-day/`,
  morning: `${SITE}/heel-pain-in-the-morning/`,
  calfRaises: `${SITE}/calf-raises-plantar-fasciitis/`,
  calfRaiseTest: `${SITE}/calf-raise-test/`,
};

const EXERCISE_URLS = {
  fasciaStretch: `${SITE}/exercises/plantar-fascia-stretch/`,
  calfStretch: `${SITE}/exercises/calf-stretch/`,
  soleusStretch: `${SITE}/exercises/soleus-stretch/`,
  heelRaises: `${SITE}/exercises/calf-raises/`,
  towelHeelRaise: `${SITE}/exercises/towel-heel-raise/`,
  shortFoot: `${SITE}/exercises/short-foot-exercise/`,
  footRoll: `${SITE}/exercises/foot-roll/`,
};

function appStoreLink(): string {
  return 'https://apps.apple.com/app/id6813076846?pt=126870927&ct=email-7day&mt=8';
}

// ── Confirm email ───────────────────────────────────────────────────────────

export function confirmEmail(_locale: Locale): SiteEmailContent {
  return {
    subject: 'confirm your email for the exercise sheets',
    preheader: 'one click and they are on the way.',
    paragraphs: [
      'you asked for the free printable exercise sheets and the 7-day starter plan from walkito.',
      'click the button below to confirm your email. the sheets and the first email will arrive right after.',
    ],
    button: { label: 'confirm my email', url: '__CONFIRM_URL__' },
    ps: 'if you did not sign up, you can ignore this email.',
  };
}

// ── Day 0: welcome with PDFs ────────────────────────────────────────────────

export function day0Welcome(_locale: Locale): SiteEmailContent {
  return {
    subject: 'your exercise sheets are here',
    preheader: 'three printable PDFs, plus a 7-day plan starting tomorrow.',
    paragraphs: [
      'here are your free exercise sheets. print them, stick them on the fridge, or save them on your phone.',
      `plantar fasciitis exercises (PDF): ${PDF_URLS.pf}`,
      `flat feet exercises (PDF): ${PDF_URLS.flat}`,
      `exercises for feet that hurt from standing (PDF): ${PDF_URLS.standing}`,
      'each sheet has the exercises with a picture, the dose, when to stop, and a week log to tick off.',
      'starting tomorrow, you will get one short email a day for seven days. each one covers one piece of the routine so you can start without reading everything at once.',
      `full guides with videos: ${GUIDE_URLS.pf}`,
    ],
    button: null,
    ps: 'see a clinician if the pain followed an injury, you cannot put weight on the foot, or you have numbness, swelling or fever. these exercises are not a diagnosis or a substitute for professional advice.',
  };
}

// ── Day 1: morning first-step routine ───────────────────────────────────────

export function day1(_locale: Locale): SiteEmailContent {
  return {
    subject: 'day 1: the two stretches before your feet touch the floor',
    preheader: 'the first thing to do is the one you do before you stand up.',
    paragraphs: [
      'the worst moment for most people is the first few steps in the morning. two stretches, done on the edge of the bed, can take the edge off those steps.',
      '1. plantar fascia stretch: sit on the bed, cross one foot over the other knee, and pull the toes back until you feel a stretch along the arch. hold for 30 seconds, twice on each foot.',
      '2. calf stretch: stand facing a wall, one foot back, heel down, back leg straight, hips forward. hold for 30 seconds, twice on each leg. then bend the back knee slightly and hold again to reach the soleus, the deeper calf muscle.',
      'do the fascia stretch before you stand up. the calf stretch can come right after.',
      `exercise page: ${EXERCISE_URLS.fasciaStretch}`,
      `exercise page: ${EXERCISE_URLS.calfStretch}`,
      `more on morning heel pain: ${GUIDE_URLS.morning}`,
    ],
    button: null,
    ps: 'mild discomfort during a stretch is fine. sharp pain is not. if it hurts more the next morning, ease off for a few days.',
  };
}

// ── Day 2: calf stretches properly ──────────────────────────────────────────

export function day2(_locale: Locale): SiteEmailContent {
  return {
    subject: 'day 2: why there are two calf stretches, not one',
    preheader: 'the straight-leg version misses the deeper muscle.',
    paragraphs: [
      'the 2023 heel pain guideline gives calf and fascia stretching its highest grade. two muscles make up the calf, and a straight leg only reaches the outer one.',
      'calf stretch (gastrocnemius): wall, back leg straight, heel down, 2 holds of 30 seconds each leg.',
      'soleus stretch: same position, but bend the back knee until you feel the stretch lower down, near the heel. 2 holds of 30 seconds each leg.',
      'the soleus only lets go with the knee bent, which is why you need both versions. a tight calf pulls on the heel all day, so these stretches matter even though you feel them higher up.',
      `calf stretch: ${EXERCISE_URLS.calfStretch}`,
      `soleus stretch: ${EXERCISE_URLS.soleusStretch}`,
    ],
    button: null,
    ps: 'see a clinician if the pain is getting worse despite easing the load, or if squeezing the sides of the heel hurts.',
  };
}

// ── Day 3: seated heel raises and double-leg heel raises ────────────────────

export function day3(_locale: Locale): SiteEmailContent {
  return {
    subject: 'day 3: your first calf strength exercise',
    preheader: 'start seated, move to standing when it feels easy.',
    paragraphs: [
      'stretching loosens the calf. strength work is what makes it stay that way. the 2023 guideline grades strength training B for heel pain.',
      'seated heel raises: sit with your feet flat and press up through the balls of your feet. hands on the knees add resistance. 3 sets of 10, both feet.',
      'heel raises on both feet: stand on both feet, rise straight up over the big toes, then lower slowly. 3 sets of 10.',
      'start with seated raises for the first few sessions. once they feel easy, move to standing. you are building up to single-leg raises, but there is no rush to get there.',
      `calf raises guide: ${GUIDE_URLS.calfRaises}`,
      `heel raises exercise page: ${EXERCISE_URLS.heelRaises}`,
    ],
    button: null,
    ps: 'if the pain is worse the next morning, drop back to the seated version for a few more days.',
  };
}

// ── Day 4: short foot and arch ──────────────────────────────────────────────

export function day4(_locale: Locale): SiteEmailContent {
  return {
    subject: 'day 4: the short foot exercise for your arch',
    preheader: 'pull the ball of the foot toward the heel without curling the toes.',
    paragraphs: [
      'the short foot is the core of arch work. you shorten the foot by pulling the ball of the foot toward the heel, so the arch lifts, without curling the toes.',
      'short foot, seated: sit with your feet flat. pull the ball of the foot toward the heel so the arch lifts. keep the toes relaxed and flat. 3 sets of 8, hold 5 seconds, each foot.',
      'once the seated version feels natural, try it standing on both feet. then, eventually, on one foot.',
      'if your main issue is heel pain rather than flat feet, the short foot is still useful. it wakes up the small muscles of the arch that support the plantar fascia from above.',
      `short foot exercise page: ${EXERCISE_URLS.shortFoot}`,
      `flat feet exercises guide: ${GUIDE_URLS.flat}`,
    ],
    button: null,
    ps: 'a rigid flat foot, one that stays flat even when the foot is off the ground, is structural. exercise will not change its shape. the short foot is for flexible flat feet.',
  };
}

// ── Day 5: how to use the morning pain score ────────────────────────────────

export function day5(_locale: Locale): SiteEmailContent {
  return {
    subject: 'day 5: how your morning pain tells you what to do today',
    preheader: 'the first steps are the clearest signal of how yesterday went.',
    paragraphs: [
      'morning pain on the first steps is the pattern most often linked to plantar fasciitis. it usually eases once you get moving, and it comes back after you sit for a while.',
      'what it tells you: if your first steps are worse the next morning after a harder day, that day asked more than the heel could take. if they are the same or better, you can hold steady or move up.',
      'on a bad morning, keep the stretches and drop the heel raises for the day. on a good morning, do both.',
      'the walkito app asks about morning pain every day for the same reason. it decides how much today\'s session asks of you. the pain-free-mornings goal means 14 days in a row where the morning score is 1 or less on a 0-10 scale.',
      `more on morning heel pain: ${GUIDE_URLS.morning}`,
    ],
    button: null,
    ps: 'if it wakes you at night, or both heels hurt and other joints are swollen or stiff, see a clinician.',
  };
}

// ── Day 6: towel heel raise (Rathleff) with the stop rule ───────────────────

export function day6(_locale: Locale): SiteEmailContent {
  return {
    subject: 'day 6: the towel heel raise and when to stop a set',
    preheader: 'the towel under the toes is what makes this work the fascia.',
    paragraphs: [
      'the towel heel raise comes from a 48-person trial by Rathleff and colleagues. the rolled towel under the toes dorsiflexes them, which loads the plantar fascia and not just the calf.',
      'towel heel raise: stand on one foot on a step, with a rolled towel under your toes. take 3 seconds to rise, hold for 2 at the top, and take 3 seconds to lower. 4 sets of 10, each leg.',
      'this is the hardest step in the calf strength ladder. you do not start here. work up through seated raises, double-leg standing raises, and the heel raise hold first.',
      'the stop rule: if any exercise takes your pain to 6 out of 10 or more, stop for the day. that is the point where walkito ends a session. mild discomfort during the work is fine.',
      `towel heel raise: ${EXERCISE_URLS.towelHeelRaise}`,
      `calf raises guide: ${GUIDE_URLS.calfRaises}`,
    ],
    button: null,
    ps: 'see a clinician if the pain is sharp, or getting worse despite easing the load.',
  };
}

// ── Day 7: recap, calf raise test, soft app mention ─────────────────────────

export function day7(_locale: Locale): SiteEmailContent {
  return {
    subject: 'day 7: where you are and what comes next',
    preheader: 'a simple test to see where your calf strength stands.',
    paragraphs: [
      'you have the stretches, the calf strength ladder, the arch work and the morning pain check. that is the core of the routine.',
      'the calf raise test: stand on one foot and do as many single-leg calf raises as you can, at a steady pace, until you cannot rise to full height. count them. 25 is the target. test again in two weeks and compare.',
      'a few things to remember: do the fascia stretch before your feet touch the floor. do the calf and soleus stretches most days. add the strength work on strength days and drop it on bad mornings. stop any exercise at 6 out of 10 pain.',
      `calf raise test: ${GUIDE_URLS.calfRaiseTest}`,
      `all the guides: ${SITE}/printable-exercise-sheets/`,
      'if you want the plan to adjust for you each morning, that is what the walkito app does. it asks how your feet feel, picks today\'s session, tracks your pain and tests your progress every two weeks.',
      `get walkito on the app store: ${appStoreLink()}`,
    ],
    button: null,
    ps: 'these exercises are not a diagnosis. if the pain is not improving after several weeks of exercise and a lighter load, see a clinician. you can reply to this email if you have questions.',
  };
}

// ── Lookup ──────────────────────────────────────────────────────────────────

const SEQUENCE: Record<number, (locale: Locale) => SiteEmailContent> = {
  0: day0Welcome,
  1: day1,
  2: day2,
  3: day3,
  4: day4,
  5: day5,
  6: day6,
  7: day7,
};

export function siteLeadEmail(day: number, locale: Locale): SiteEmailContent | null {
  const fn = SEQUENCE[day];
  return fn != null ? fn(locale) : null;
}

export const SITE_LEAD_EMAIL_KEYS = [
  'site_confirm',
  'site_day0',
  'site_day1',
  'site_day2',
  'site_day3',
  'site_day4',
  'site_day5',
  'site_day6',
  'site_day7',
] as const;

export type SiteLeadEmailKey = (typeof SITE_LEAD_EMAIL_KEYS)[number];
