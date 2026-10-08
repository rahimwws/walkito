/**
 * The rebuilt onboarding: who someone is, how long it has hurt, the safety
 * check, what they tried, the reactions that answer each, the 30-second check,
 * the first week — and `setup.*`, the screens after the first purchase.
 *
 * Its own file rather than more of `./onboarding.ts`, which holds the screens
 * that survived. Keys keep the `onboarding.` prefix: they are that domain's.
 *
 * The rules this copy keeps:
 * - Never a diagnosis and never a promise of a result. A reaction says what is
 *   common and what the plan does, not what this person has or will get.
 * - No figures we cannot stand behind: "a big part of who's here", not "50%".
 * - No doctors and no refusals: the safety check only changes the plan.
 *
 * Sections appear in the same order in `../ru/journey.ts` and `../es/journey.ts`.
 */

import type { SourceEntry } from '../entry';

export const JOURNEY_EN = {
  // ── Intro ────────────────────────────────────────────────────────────────
  'onboarding.intro.ctaStart': 'Let’s start',
  /** One tappable line, so it stays one sentence in every language. */
  'onboarding.intro.haveAccount': 'Already have an account? Sign in',
  'onboarding.signIn.title': 'Welcome back',
  'onboarding.signIn.blurb': 'Sign in to the account your plan is saved to.',
  'onboarding.signIn.apple': 'Continue with Apple',
  'onboarding.signIn.google': 'Continue with Google',
  'onboarding.signIn.email': 'Use email instead',

  // ── Name ─────────────────────────────────────────────────────────────────
  'onboarding.react.nameNamed': 'Nice to meet you, {name}.',

  // ── Who they are ─────────────────────────────────────────────────────────
  'onboarding.role.title': 'What keeps you on your feet, {name}?',
  'onboarding.role.blurb': 'So the plan fits your day, not someone else’s.',
  'onboarding.role.running': 'Running',
  'onboarding.role.feet': 'Work on my feet all day',
  'onboarding.role.both': 'Both',
  'onboarding.role.walking': 'Everyday walking',
  'onboarding.runner.titleRunning': 'How do you run, {name}?',

  'onboarding.react.runningTitle': 'Runners, you’re in good company.',
  'onboarding.react.runningBody': 'Your plan fits around your runs.',
  'onboarding.react.feetTitle': 'Long shifts are hard on feet.',
  'onboarding.react.feetBody': 'Your plan fits before or after work.',
  'onboarding.react.bothTitle': 'Runs on top of a full day.',
  'onboarding.react.bothBody': 'Your plan counts both.',
  'onboarding.react.walkingTitle': 'Every step adds up.',
  'onboarding.react.walkingBody': 'Your plan is built around walking.',

  // ── Where it hurts ───────────────────────────────────────────────────────
  'onboarding.react.areaHeel': 'The most common one here.',
  'onboarding.react.areaFoot': 'That’s where the plan starts.',
  'onboarding.react.areaAchilles': 'It responds well to slow loading.',
  'onboarding.react.areaCalf': 'It pulls on everything below.',
  'onboarding.react.areaShin': 'Load rose faster than the legs.',
  'onboarding.react.areaNone': 'Good time to build.',

  /** The place and the side, as one name. Whole names per side, because the
   * adjective agrees with the noun in Russian and follows it in Spanish. */
  'onboarding.where.heelLeft': 'Left heel',
  'onboarding.where.heelRight': 'Right heel',
  'onboarding.where.heelBoth': 'Both heels',
  'onboarding.where.footLeft': 'Left foot',
  'onboarding.where.footRight': 'Right foot',
  'onboarding.where.footBoth': 'Both feet',
  'onboarding.where.achillesLeft': 'Left Achilles',
  'onboarding.where.achillesRight': 'Right Achilles',
  'onboarding.where.achillesBoth': 'Both Achilles',
  'onboarding.where.calfLeft': 'Left calf',
  'onboarding.where.calfRight': 'Right calf',
  'onboarding.where.calfBoth': 'Both calves',
  'onboarding.where.shinLeft': 'Left shin',
  'onboarding.where.shinRight': 'Right shin',
  'onboarding.where.shinBoth': 'Both shins',

  // ── How long ─────────────────────────────────────────────────────────────
  'onboarding.duration.title': 'How long has it hurt?',
  'onboarding.duration.blurb': 'Roughly is fine.',
  'onboarding.duration.weeks': 'Less than 6 weeks',
  'onboarding.duration.months': '6 weeks to 3 months',
  'onboarding.duration.year': '3 to 12 months',
  'onboarding.duration.longer': 'Over a year',

  'onboarding.react.weeksTitle': 'Early is the best time.',
  'onboarding.react.weeksBody': 'We’ll start gently.',
  'onboarding.react.monthsTitle': 'It won’t fade on its own.',
  'onboarding.react.monthsBody': 'We’ll start with what helps first.',
  'onboarding.react.yearTitle': 'That’s a long time.',
  'onboarding.react.yearBody': 'Usually the load never changed. We’ll change it.',
  'onboarding.react.longerTitle': 'Over a year. It’s real.',
  'onboarding.react.longerBody': 'It needs a different load, not more rest.',

  // ── Morning pain ─────────────────────────────────────────────────────────
  'onboarding.morning.title': 'Pain in your first steps today?',
  'onboarding.morning.blurb': 'The same question you’ll answer each morning.',
  'onboarding.morning.min': 'Fine',
  'onboarding.morning.max': 'Worst',
  'onboarding.morning.a11y': 'First steps this morning, {score} out of 10',
  'onboarding.react.painZero': 'Let’s keep it that way.',
  'onboarding.react.painMild': 'Small, but every morning.',
  'onboarding.react.painMiddle': 'Enough to change your day.',
  'onboarding.react.painHard': 'We’ll start gently.',

  // ── Safety check ─────────────────────────────────────────────────────────
  'onboarding.safety.title': 'Any of these right now?',
  'onboarding.safety.blurb': 'A quick safety check.',
  'onboarding.safety.calf': 'Calf swollen, warm or red on one side',
  'onboarding.safety.pop': 'A sudden pop at the back of the ankle',
  'onboarding.safety.diabetes': 'Diabetes with a hot, red foot or an open sore',
  'onboarding.safety.fall': 'Hurt it in a fall and can’t put weight on it',
  'onboarding.safety.numb': 'Numbness, tingling or burning',
  'onboarding.safety.none': 'None of these',
  'onboarding.react.safetySeated': 'Week one starts seated.',
  'onboarding.react.safetyNumb': 'Noted. We’ll watch it.',

  // ── What they tried ──────────────────────────────────────────────────────
  'onboarding.tried.title': 'What have you tried?',
  'onboarding.tried.blurb': 'Pick all that apply.',
  'onboarding.tried.insoles': 'Insoles or orthotics',
  'onboarding.tried.stretching': 'Stretching',
  'onboarding.tried.shoes': 'New shoes',
  'onboarding.tried.rest': 'Rest',
  'onboarding.tried.physio': 'Physio',
  'onboarding.tried.none': 'Nothing yet',

  'onboarding.react.insolesTitle': 'Insoles take load off.',
  'onboarding.react.insolesBody': 'Your plan adds the strength they can’t.',
  'onboarding.react.restTitle': 'Rest calms it down.',
  'onboarding.react.restBody': 'Your plan adds the strength rest can’t.',
  'onboarding.react.stretchingTitle': 'Stretching is a good start.',
  'onboarding.react.stretchingBody': 'Your plan adds strength on top.',
  'onboarding.react.shoesTitle': 'Good shoes help.',
  'onboarding.react.shoesBody': 'Your plan strengthens what carries the load.',
  'onboarding.react.physioTitle': 'A physio is a great start.',
  'onboarding.react.physioBody': 'Your plan keeps it going every day.',
  'onboarding.react.nothingTitle': 'You’re in the right place.',
  'onboarding.react.nothingBody': 'We start with what helps most.',
  'onboarding.react.tap': 'Tap to continue',

  // ── Goal ─────────────────────────────────────────────────────────────────
  'onboarding.goal.titleShort': 'What matters most?',
  'onboarding.goal.mornings': 'Easier mornings',
  'onboarding.goal.backToRunning': 'Back to running',
  'onboarding.goal.shift': 'Get through a shift without aching',

  // ── Load ─────────────────────────────────────────────────────────────────
  'onboarding.load.titleFeet': 'Hours on your feet a day?',
  'onboarding.load.blurbFeet': 'Your usual day, not your longest.',
  'onboarding.load.feet0': 'Under 4 hours',
  'onboarding.load.feet1': '4–8 hours',
  'onboarding.load.feet2': '8–12 hours',
  'onboarding.load.feet3': '12+ hours',
  /** `{band}` is the label they picked on the load step. */
  'onboarding.reflection.feetDaily': '{band} a day on your feet',

  // ── Halfway ──────────────────────────────────────────────────────────────
  'onboarding.midway.title': 'What we know, {name}',
  'onboarding.midway.body': 'A few more, then your plan.',
  'onboarding.midway.mornings': 'Mornings: {score} out of 10',
  'onboarding.midway.since': 'For: {duration}',
  /** `{items}` is the answers they picked, separated by commas. */
  'onboarding.midway.tried': 'Tried: {items}',
  'onboarding.midway.nothing': 'Nothing hurts right now',

  // ── Why it still hurts ───────────────────────────────────────────────────
  'onboarding.why.title': 'Why it still hurts, {name}',
  'onboarding.why.patternHead': 'The pattern',
  'onboarding.why.lingersHead': 'Why it lingers',
  'onboarding.why.helpsHead': 'What helps',
  'onboarding.why.patternHeel': 'Worst in the first steps. Very common.',
  'onboarding.why.patternFoot': 'The arch muscles tire before the day ends.',
  'onboarding.why.patternAchilles': 'Load rose faster than the tendon adapted.',
  'onboarding.why.patternCalf': 'A tight calf pulls on the heel and foot.',
  'onboarding.why.patternShin': 'Load rose faster than the legs.',
  'onboarding.why.lingersWeeks': 'Only weeks in. Easiest to turn around.',
  'onboarding.why.lingersMonths': 'Months in. It won’t just fade.',
  'onboarding.why.lingersYear': 'Months in. The load never changed.',
  'onboarding.why.lingersLonger': 'Over a year. The load never changed.',
  'onboarding.why.triedInsoles': 'Insoles take load off, but don’t build strength.',
  'onboarding.why.triedRest': 'Rest calms it, but doesn’t build strength.',
  'onboarding.why.triedStretching': 'Stretching alone doesn’t build strength.',
  'onboarding.why.triedShoes': 'Shoes change the load, not what carries it.',
  'onboarding.why.triedPhysio': 'What’s missing is doing it daily.',
  'onboarding.why.triedNone': 'A fresh start.',
  'onboarding.why.helpsFoot': 'A morning stretch, then slow calf and foot strength.',
  'onboarding.why.helpsAchilles': 'Slow calf loading, week by week.',
  'onboarding.why.helpsCalf': 'Loosen the calf, then strengthen it.',
  'onboarding.why.helpsShin': 'Ease the load, then build strength.',
  'onboarding.why.footer': 'Not a diagnosis.',
  'onboarding.why.cta': 'Build my plan',

  // ── When ─────────────────────────────────────────────────────────────────
  'onboarding.habit.title': 'When will you do it?',
  'onboarding.habit.blurb': 'Tie it to something you already do every day.',
  'onboarding.habit.wake': 'When I wake up, before I stand',
  'onboarding.habit.coffee': 'With my morning coffee',
  'onboarding.habit.shift': 'After my shift',
  'onboarding.habit.bed': 'Before bed',
  'onboarding.habit.reminder': 'Reminder: {time}',
  'onboarding.habit.change': 'Change',
  'onboarding.react.habitWake': 'The foot is stiffest then.',
  'onboarding.react.habitCoffee': 'Every day, like coffee.',
  'onboarding.react.habitShift': 'When feet need it most.',
  'onboarding.react.habitBed': 'A calm few minutes.',
  'onboarding.react.equipmentNone': 'Nothing needed.',
  'onboarding.react.equipmentSome': 'We’ll plan around it.',

  // ── The 30-second check ──────────────────────────────────────────────────
  'onboarding.test.introTitle': 'Quick check: stand up',
  'onboarding.test.introBody': 'Two checks, 30 seconds.',
  'onboarding.test.introBalance': 'Standing on one leg',
  'onboarding.test.start': 'Start the check',
  'onboarding.test.notNow': 'Skip it',
  'onboarding.test.meta': 'Check {n} of {total}',
  'onboarding.test.toeStep1': 'Stand with your feet flat and relaxed.',
  'onboarding.test.toeStep2': 'Lift only your big toe. Keep the others down.',
  'onboarding.test.toeQuestion': 'Does an arch appear under your foot?',
  'onboarding.test.toeYes': 'Yes, an arch appears',
  'onboarding.test.toeNo': 'No',
  'onboarding.test.toeUnsure': 'Not sure',
  'onboarding.test.balanceBody': 'Lift one foot. Tap Stop when it touches down.',
  'onboarding.test.startLeft': 'Start left leg',
  'onboarding.test.startRight': 'Start right leg',
  'onboarding.test.stop': 'Stop',
  'onboarding.test.left': 'Left',
  'onboarding.test.right': 'Right',
  'onboarding.test.seconds': '{count} s',
  'onboarding.test.resultTitle': 'Your starting point',
  'onboarding.test.archYes': 'Flexible foot. It responds well to strength work.',
  'onboarding.test.archNo': 'No arch. We’ll focus on calf and ankle.',
  'onboarding.test.archUnsure': 'Hard to tell. Your first retest will measure it.',
  'onboarding.test.balanceHead': 'On one leg',
  'onboarding.test.resultFoot': 'Your plan uses this from day one.',

  // ── Building ─────────────────────────────────────────────────────────────
  'onboarding.building.heading': 'Building your plan',
  'onboarding.building.where': '{where} · mornings {score}/10',
  'onboarding.building.safety': 'Safety check passed',
  'onboarding.building.seated': 'Week one starts seated',
  'onboarding.building.kitAll': 'Everything you need at home',
  'onboarding.building.kitWithout': 'Planned without: {items}',
  'onboarding.building.kitNone': 'No equipment needed',
  'onboarding.building.choosing': 'Choosing your first week…',
  'onboarding.building.ctaWeek': 'See my first week',

  // ── First week ───────────────────────────────────────────────────────────
  'onboarding.week.title': 'Your first week',
  'onboarding.week.blurb': 'Short sessions on the days you picked. Each one adjusts to how your foot feels that morning.',
  'onboarding.week.morningMeta': 'Every morning, before you stand · 2 min',
  'onboarding.week.sessionMeta': 'In your sessions this week',

  // ── After the first purchase ─────────────────────────────────────────────
  'setup.save.titleNamed': 'You’re in, {name}',
  'setup.save.title': 'You’re in',
  'setup.save.blurb': 'So it’s safe on a new phone.',
  'setup.save.later': 'Not now',
  'setup.widget.title': 'Your check-in on the Home Screen',
  'setup.widget.blurb': 'One tap before you stand.',
  'setup.widget.add': 'Add widget',
  'setup.widget.later': 'Not now',
  'setup.widget.stepOf': 'Step {n} of {total}',
  'setup.widget.holdTitle': 'Hold your Home Screen',
  'setup.widget.holdBody': 'Press and hold an empty spot.',
  'setup.widget.editTitle': 'Tap Edit, then Add Widget',
  'setup.widget.editBody': 'Top corner, then Add Widget.',
  'setup.widget.searchTitle': 'Search for Walkito',
  'setup.widget.searchBody': 'Pick the small size, tap Add Widget.',
  /** The system's own labels, as iOS shows them in this language. */
  'setup.widget.mockEdit': 'Edit',
  'setup.widget.mockAdd': 'Add Widget',
  'setup.widget.mockSearch': 'Search Widgets',
  'setup.next': 'Next',
  'setup.done': 'Done',
  'setup.finish': 'Start my first session',

  // ── The paywall ──────────────────────────────────────────────────────────
  // Before the plans: their own numbers on top, tomorrow morning first, then
  // the product itself and what it rests on.
  'offer.stripMornings': 'Mornings {score}/10',
  'offer.introTomorrowWhen': 'Tomorrow, before you stand',
  'offer.introTomorrowBody': 'Two minutes, before your foot touches the floor.',
  'offer.howTitleShort': 'Here is how it works',
  'offer.howCheckinShort': '10-second morning check-in',
  'offer.howSessionShort': '3–10 minute session, adjusted every day',
  'offer.howRetestShort': 'The same test every two weeks',
  'offer.builtTitle': 'What it’s built on',
  'offer.builtBody':
    'Exercises from published research and the 2023 heel pain guideline. Walkito itself hasn’t been tested in a trial.',
  /** True: "Before your first step" in Library is `free`, and plays after access ends. */
  'offer.freeLine': 'If you ever cancel, the morning stretch stays free.',
  'offer.haveCode': 'Have a code?',
  'offer.startPlan': 'Start my plan',
} as const satisfies Record<string, SourceEntry>;
