/**
 * The onboarding's story, taken word for word from the web funnel
 * (funnel/web-v1: flow.ts, screens/story.tsx, try-it.tsx, plan.tsx,
 * price.tsx): her usual day, how her feet get in her way, the three cards
 * (the problem, not her fault, the research), without and with Walkito, real
 * App Store reviews, what she wants back, the first move and how it felt, her
 * promise, the peek at her plan, and the gift after a closed payment sheet.
 *
 * The rules this copy keeps, as the funnel's did:
 * - No cure, fix, heal, relieve or pain-free; no result promised and no date
 *   for one. "Working toward" a goal, never reaching it.
 * - Nothing invented: the reviews are the App Store's, word for word, under
 *   the names they were posted with, and stay in English in every language
 *   (a translation would put words in a reviewer's mouth). The rating is the
 *   App Store's own count. The journal names are titles, never translated.
 * - Every price is the store's: {intro}, {price}.
 */

import type { SourceEntry } from '../entry';

export const STORY_EN = {
  // ── Her usual day (asked only for everyday walking) ──────────────────────
  'story.day.title': 'What does your usual day look like?',
  'story.day.sit8': 'Sitting most of the day',
  'story.day.sit8Hint': '8 hours or more',
  'story.day.sit4': 'Sitting part of the day',
  'story.day.sit4Hint': '4 to 8 hours',
  'story.day.feet': 'On my feet most of the day',

  // ── How her feet get in the way ──────────────────────────────────────────
  'story.life.banner': 'Foot pain changes your whole day.',
  'story.life.title': 'Choose all that apply:',
  'story.life.mornings': 'I dread my first steps in the morning',
  'story.life.walks': 'I skip walks',
  'story.life.shift': 'I can’t stand through my shift',
  'story.life.runs': 'I cut my runs short',
  'story.life.shoes': 'I can’t wear the shoes I like',
  'story.life.evening': 'My feet hurt by evening',
  'story.life.none': 'None of these',

  // ── The three cards ──────────────────────────────────────────────────────
  'story.fault.title': 'Sitting all day weakens your feet.',
  'story.fault.titleRunner': 'Cushioned shoes leave your feet less to do.',
  'story.fault.body': 'Chairs and soft shoes do your foot muscles’ job.',
  'story.path.title': 'It’s not your fault. And it can change.',
  'story.path.body': 'Foot muscles respond to small daily work.',
  'story.research.title': 'Built on published research',
  'story.research.bjsm': 'British Journal of Sports Medicine',
  'story.research.jospt': 'Journal of Orthopaedic & Sports Physical Therapy',
  'story.research.ajsm': 'American Journal of Sports Medicine',
  'story.research.msse': 'Medicine & Science in Sports & Exercise',
  'story.next': 'Next',

  // ── Without / with ───────────────────────────────────────────────────────
  'story.compare.title': 'With Walkito, you know what to do',
  'story.compare.without': 'Without Walkito',
  'story.compare.with': 'With Walkito',
  'story.compare.without1': 'Random stretches from videos',
  'story.compare.without2': 'Not sure what helps',
  'story.compare.without3': 'Giving up after a week',
  'story.compare.with1': 'A plan for your feet',
  'story.compare.with2': '5 minutes, from a chair',
  'story.compare.with3': 'A reminder every morning',
  'story.compare.cta': 'Let’s do this!',

  // ── Reviews: the App Store's, word for word ──────────────────────────────
  'story.reviews.title': 'Made for people like you',
  'story.reviews.kolodi':
    'honestly didn’t expect much but it’s pretty nice. answered a few questions about my feet and it made me a daily plan, takes like a few min. gonna try it for a couple weeks and see',
  'story.reviews.ahmetaz':
    'Really liked this app. The interface is clean and easy to navigate, and programs are easy to follow. Helped with my heel pain. Would recommend',
  'story.reviews.from': 'From the App Store',
  'story.reviews.stars': '5 stars on the App Store',
  'story.reviews.rating': {
    one: '{rating} · {count} App Store rating',
    other: '{rating} · {count} App Store ratings',
  },

  // ── What she wants back ──────────────────────────────────────────────────
  'story.goals.title': 'What do you want back?',
  'story.goals.mornings': 'Enjoy my mornings again',
  'story.goals.walk': 'Walk without thinking about my feet',
  'story.goals.shift': 'Stand through my day',
  'story.goals.runs': 'Run longer',
  'story.goals.shoes': 'Wear the shoes I like',
  'story.goals.evenings': 'Enjoy my evenings on my feet',
  'story.goals.cta': 'These are my goals',

  // ── The first move ───────────────────────────────────────────────────────
  'story.move.eyebrow': 'Try it now · 60 seconds',
  'story.move.ready': 'Sit at the front of a sturdy chair, feet on the floor. Stop if anything hurts.',
  'story.move.start': 'Start 60 seconds',
  'story.move.skip': 'Skip, show my plan',
  'story.felt.title': 'How did that feel?',
  'story.felt.blurb': 'Take a moment to notice.',
  'story.felt.lighter': 'Lighter, looser',
  'story.felt.better': 'A little better',
  'story.felt.same': 'About the same',
  'story.felt.unsure': 'Hard to tell',
  'story.felt.goodTitle': 'That’s your feet waking up.',
  'story.felt.goodLine': 'Do this daily and you’re working toward: {goal}',
  'story.felt.normalTitle': 'That’s normal on day 1.',
  'story.felt.normalLine': 'Feet change with daily practice, not one move. Tomorrow’s move is ready.',
  'story.praise.titleNamed': 'Nice work, {name}.',
  'story.praise.title': 'Nice work.',
  'story.praise.line': 'Day 1 of your plan is done',
  'story.continue': 'Continue',

  // ── Her promise ──────────────────────────────────────────────────────────
  'story.sign.title': 'Sign your commitment',
  'story.sign.promise': {
    one: 'Promise yourself {count} minute a day for your feet.',
    other: 'Promise yourself {count} minutes a day for your feet.',
  },
  'story.sign.pad': 'Sign here with your finger',
  'story.sign.clear': 'Clear',
  'story.sign.hint': 'Draw on the open space above',
  'story.sign.cta': 'Finish',

  // ── Analyzing, and the plan ──────────────────────────────────────────────
  'story.analyzing.title': 'Analyzing your answers',
  'story.analyzing.goal': 'Goal: {goal}',
  'story.analyzing.plan': 'Your plan: {plan}',
  'story.analyzing.cta': 'See my plan',
  'story.plan.desk': 'Desk Feet Reset',
  'story.plan.runner': 'Runner’s Feet',
  'story.plan.feet': 'On-Your-Feet Reset',
  'story.peek.titleNamed': '{name}, here’s a peek at your plan:',
  'story.peek.title': 'Here’s a peek at your plan:',
  'story.peek.line': {
    one: '{count} week · {minutes} min a day',
    other: '{count} weeks · {minutes} min a day',
  },
  'story.peek.lineSeated': {
    one: '{count} week · {minutes} min a day · seated',
    other: '{count} weeks · {minutes} min a day · seated',
  },
  'story.peek.lineRunner': {
    one: '{count} week · {minutes} min a day · before or after your runs',
    other: '{count} weeks · {minutes} min a day · before or after your runs',
  },
  'story.peek.week1': 'Week 1 · today',
  'story.peek.minutes': '{minutes} min',
  'story.peek.moves': {
    one: '{count} move this week',
    other: '{count} moves this week',
  },
  'story.peek.week2': 'Week 2',
  'story.peek.later': 'Weeks 3–{weeks}',
  'story.peek.locked': 'Locked',
  'story.peek.cta': 'Get my plan',

  // ── The paywall ──────────────────────────────────────────────────────────
  'story.timeline.title': 'How it works',
  'story.timeline.today': 'Today',
  'story.timeline.todayText': 'Your plan starts now.',
  'story.timeline.day14': 'Day 14: redo your first move and compare.',
  'story.trust.carla': 'Dr. Carla Shayman, PT, DPT, reviewed our heel pain and flat feet guides',

  // ── The gift, once, after the payment sheet is closed ────────────────────
  'story.gift.title': 'A gift just for you',
  'story.gift.blurb': 'Open the box to see your offer.',
  'story.gift.open': 'Open now',
  'story.gift.offerTitle': 'Your first year {intro}',
  'story.gift.offerLine': 'Then {price} a year. Cancel any time.',
  'story.gift.buy': 'Start my year for {intro}',
  'story.gift.terms': 'Paid today: {intro} for your first year. Then {price} every year until you cancel in Settings.',
  'story.gift.decline': 'No, thanks',
  // ── Before your first step ───────────────────────────────────────────────
  'story.wake.title': 'When do you usually get up?',
  'story.routine.title': 'Tomorrow at {time}, before your first step',
  'story.routine.eyebrow': 'Also in your plan',
  'story.routine.minutes': '2 minutes',
  'story.routine.line': '2 minutes in bed, sitting up or on its edge.',
  'story.routine.why': 'Why before your first step?',
  'story.routine.whyText': 'In a 2003 study in the Journal of Bone and Joint Surgery, DiGiovanni and colleagues taught a plantar fascia stretch to be done before the first step of the day. Your routine starts with that stretch, at that moment. It is an exercise, not a treatment.',
  'story.paywall.firstStep': 'Your first-step routine starts tomorrow at {time}',
  'story.paywall.ready': 'Your first-step routine is ready',
  'story.firstSteps.title': 'First steps',
  'story.firstSteps.cue': 'Sitting up in bed or on its edge, before your first step. Slow and easy.',
  'story.firstSteps.why': 'Three seated moves for the edge of your bed: the plantar fascia stretch, the big toe lift and the short foot. 2 minutes in bed, before your first step of the day.',
  'story.notify.title': 'Before your first step',
  'story.notify.body': 'Your first-step routine is ready: 2 minutes in bed.',
} as const satisfies Record<string, SourceEntry>;
