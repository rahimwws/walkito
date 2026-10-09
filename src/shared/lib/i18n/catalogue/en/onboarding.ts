/**
 * Onboarding — the fifteen screens between the front door and the app.
 *
 * The domain with the most copy, and the one where the fragment rule earns its
 * keep. Four places in this flow used to assemble a sentence at the call site:
 * the building screen joined a pain noun to a volume band with ", "; the plan
 * screen stuck " a week" onto "30–50 km"; the contract's caption prepended
 * "{name}, your " to a shared tail; and the testimonials split every quote
 * around a bold clause. None of those joins survive a translation — Russian
 * moves the noun, Spanish moves the preposition, and the bold clause lands in a
 * different half of the sentence — so each is a whole template here, once per
 * language.
 *
 * Two conventions this file leans on:
 *
 * - **`{name}` is left unfilled by `t()`.** The call sites pass `NAME_SLOT`
 *   (`{ name: '{name}' }`) so the placeholder survives into `withName`, which
 *   decides whether to substitute the name or delete the slot and the
 *   punctuation stranded around it. A user who skipped the name step must not
 *   read "Male or female, ?".
 * - **Steps that write their own heading keep a `title`/`blurb` anyway.** The
 *   intro, health, notify, building and social screens all render their own
 *   copy; their step-table entries are bookkeeping, and are translated so a
 *   future change that starts rendering them cannot surface English.
 *
 * Sections below appear in the same order in `../ru/onboarding.ts` and
 * `../es/onboarding.ts`.
 */

import type { SourceEntry } from '../entry';

export const ONBOARDING_EN = {
  // ── Acts ─────────────────────────────────────────────────────────────────
  // The four named stretches the progress bar fills within.
  'onboarding.act.about': 'About you',
  'onboarding.act.sport': 'Your sport',
  'onboarding.act.health': 'Your health',
  'onboarding.act.plan': 'Your plan',

  // ── Shared buttons ───────────────────────────────────────────────────────
  // One bar carries the flow, so its label is a lookup rather than a per-step
  // string. `skip` and `skipForNow` are different promises and stay apart.
  'onboarding.cta.next': 'Next',
  'onboarding.cta.continue': 'Continue',
  'onboarding.cta.done': 'Done',
  'onboarding.cta.skip': 'Skip',
  'onboarding.cta.skipForNow': 'Skip for now',
  'onboarding.cta.checking': 'Checking…',
  'onboarding.cta.applyCode': 'Apply code',
  'onboarding.cta.startPlan': 'Start my plan',

  // ── Intro ────────────────────────────────────────────────────────────────
  'onboarding.intro.title': 'Run without second-guessing',
  'onboarding.intro.blurb': 'A daily plan that changes when your legs do.',
  'onboarding.intro.greeting': 'Hi, I’m Walkito',
  'onboarding.intro.headline': 'Let’s find out why it still hurts.',
  'onboarding.intro.cta': 'Continue with Apple',
  'onboarding.intro.ctaGoogle': 'Continue with Google',
  /** A genuine failure, not a cancel. No blame and no error code — there is
   * nothing here the user did wrong. */
  'onboarding.intro.signInFailed': 'Sign-in didn’t complete. Try again.',
  'onboarding.intro.emailCta': 'Sign in with email',

  // ── Email sign-in sheet ──────────────────────────────────────────────────
  'onboarding.email.title': 'Sign in',
  'onboarding.email.blurb': 'Use the email and password for your account.',
  'onboarding.email.address': 'Email',
  'onboarding.email.password': 'Password',
  'onboarding.email.submit': 'Sign in',
  'onboarding.email.submitting': 'Signing in…',

  // ── Name ─────────────────────────────────────────────────────────────────
  // The newline is a deliberate break in the heading, not a wrap — each
  // language chooses where its own two lines divide.
  'onboarding.name.title': 'What should we\ncall you?',
  'onboarding.name.blurb': 'It goes on your Foot Passport.',
  'onboarding.name.placeholder': 'e.g. Alex',
  // The Foot Passport: a stamp per answer, folded above the questions and
  // open on the halfway screen. Labels are short: each sits beside its value.
  'onboarding.passport.title': 'Foot Passport',
  'onboarding.passport.owner': '{name}’s Foot Passport',
  'onboarding.passport.empty': 'Your answers will show up here',
  'onboarding.passport.issued': 'Issued {date}',
  'onboarding.passport.edit': 'Anything to fix? Tap to edit.',
  'onboarding.passport.heading': 'Your Foot Passport, {name}',
  // Who they are, in the passport's words: the role question's own
  // answers ("Both") mean nothing out of it.
  'onboarding.passport.role.running': 'Runner',
  'onboarding.passport.role.feet': 'On my feet at work',
  'onboarding.passport.role.both': 'Runner, on my feet at work',
  'onboarding.passport.role.walking': 'Everyday walking',
  'onboarding.passport.who': 'Who',
  'onboarding.passport.toe': 'Big toe lift',
  'onboarding.passport.bunion': 'Bunion',
  'onboarding.passport.where': 'Where it hurts',
  'onboarding.passport.since': 'Since',
  'onboarding.passport.mornings': 'First steps',
  'onboarding.passport.goal': 'Goal',
  'onboarding.passport.load': 'Load',
  'onboarding.passport.habit': 'Tied to',
  'onboarding.passport.plan': 'Plan',
  'onboarding.passport.morningsValue': '{score}/10',
  'onboarding.passport.planValue': '{days} · {minutes}',

  // The two foot checks with a photograph: each answer changes the plan
  // (`toeWork` in `planSettingsFrom`), so neither is a question for show.
  'onboarding.toe.title': 'Can you lift your big toe on its own?',
  'onboarding.toe.blurb': 'Stand up, keep the other four toes on the floor, and try.',
  'onboarding.toe.yes': 'Yes, easily',
  'onboarding.toe.little': 'A little',
  'onboarding.toe.no': 'No, it won’t lift',
  'onboarding.bunion.title': 'Do you have a bunion?',
  'onboarding.bunion.blurb': 'A bony bump where the big toe meets the foot, often with the toe leaning in.',
  'onboarding.bunion.straight': 'Straight big toe',
  'onboarding.bunion.example': 'With a bunion',
  'onboarding.bunion.no': 'No',
  'onboarding.bunion.little': 'A slight one',
  'onboarding.bunion.yes': 'Yes',
  'onboarding.bunion.unsure': 'Not sure',
  'onboarding.bunion.note': 'A picture to compare with, not a diagnosis.',

  // ── Runner ───────────────────────────────────────────────────────────────
  'onboarding.runner.title': 'What kind of athlete are you, {name}?',
  'onboarding.runner.blurb':
    'This is where your plan starts from. Under-selling here just makes week one too easy.',
  'onboarding.runner.new': 'Just getting started',
  'onboarding.runner.casual': 'Casual',
  'onboarding.runner.regular': 'Regular',
  'onboarding.runner.racing': 'Training for something',
  'onboarding.runner.serious': 'Serious about it',

  // ── Body ─────────────────────────────────────────────────────────────────
  'onboarding.body.title': 'A little more about you, {name}',
  'onboarding.body.blurb': 'Tendons carry what you weigh. This sets your starting load.',
  'onboarding.body.kg': 'kg',
  'onboarding.body.lb': 'lb',

  // ── Shoe size ────────────────────────────────────────────────────────────
  'onboarding.size.title': 'What size do you run in, {name}?',
  'onboarding.size.blurb':
    'Shoe size stands in for the length of the lever your calf has to move.',

  // ── Goal ─────────────────────────────────────────────────────────────────
  'onboarding.goal.title': '{name}, what are you working toward?',
  'onboarding.goal.blurb': 'Pick the one that matters most right now. You can change it later.',
  'onboarding.goal.painfree': 'Run pain-free',
  'onboarding.goal.race': 'Train for a race',
  'onboarding.goal.consistent': 'Run more consistently',
  'onboarding.goal.stronger': 'Build stronger legs',
  'onboarding.goal.injuryfree': 'Stay injury-free',
  'onboarding.goal.flatfeet': 'Stronger arches',
  'onboarding.goal.ankles': 'Steadier ankles',
  'onboarding.goal.jump': 'Jump higher',
  'onboarding.goal.allday': 'Stay on my feet all day',
  'onboarding.goal.comeback': 'Come back after an injury',
  'onboarding.goal.steady': 'Walk with confidence',
  // Days and minutes, one screen: a heading over two short lists.
  'onboarding.schedule.title': 'How much time do you have, {name}?',
  'onboarding.schedule.days': 'Days a week',
  'onboarding.schedule.minutes': 'Minutes per session',
  'onboarding.schedule.kit': 'At home?',
  // Under the kit: the exercises it brings into the plan, as they are picked.
  'onboarding.schedule.adds': 'Adds to your plan',
  'onboarding.days.days3': '3 days',
  'onboarding.days.days3Caption': 'An easy start',
  'onboarding.days.days5': '5 days',
  'onboarding.days.days5Caption': 'Recommended',
  'onboarding.days.days7': 'Every day',
  'onboarding.days.days7Caption': 'Short and daily',
  'onboarding.minutes.blurb': 'Change it any day - busy days still count.',
  'onboarding.minutes.min3': '3 minutes',
  'onboarding.minutes.min3Caption': 'Even on busy days',
  'onboarding.minutes.min5': '5 minutes',
  'onboarding.minutes.min5Caption': 'Recommended',
  'onboarding.minutes.min10': '10 minutes',
  'onboarding.minutes.min10Caption': 'For faster progress',
  'onboarding.equipment.title': 'What do you have at home?',
  'onboarding.equipment.blurb': 'Pick all you have.',
  'onboarding.equipment.step': 'A step or stairs',
  'onboarding.equipment.band': 'Resistance band',
  'onboarding.equipment.towel': 'Towel',
  'onboarding.equipment.pillow': 'Pillow',
  'onboarding.equipment.ball': 'Massage ball',
  'onboarding.equipment.none': 'None of these',
  'onboarding.reminder.title': 'When should we remind you?',
  'onboarding.reminder.blurb': 'One reminder a day. Pick a time you usually have five free minutes.',
  // ── Pain ─────────────────────────────────────────────────────────────────
  'onboarding.pain.title': 'Where does it usually hurt, {name}?',
  /** `{count}` is the most the map takes at once — three. */
  'onboarding.pain.blurb': 'Tap the spots on the leg, up to {count}.',
  'onboarding.pain.full': 'Up to {count} at a time. Tap one to swap it.',
  'onboarding.pain.none': 'Nothing hurts right now',
  // Shown where pain is first reported. The full wording is in Settings.
  'onboarding.pain.disclaimer':
    'Not medical advice. If pain is sharp, getting worse, or comes with swelling or numbness, see a doctor.',

  'onboarding.side.title': 'Which side, {name}?',
  'onboarding.side.blurb': 'The tests compare one leg with the other, so we need to know which one we’re working on.',
  'onboarding.side.left': 'Left',
  'onboarding.side.right': 'Right',
  'onboarding.side.both': 'Both',

  // ── Sport ────────────────────────────────────────────────────────────────
  'onboarding.sport.title': 'What puts the load on your legs, {name}?',
  'onboarding.sport.blurb': 'This decides how the next questions are framed.',
  'onboarding.sport.running': 'Running',
  'onboarding.sport.tennis': 'Tennis',
  'onboarding.sport.gym': 'Gym',
  'onboarding.sport.football': 'Football',
  'onboarding.sport.basketball': 'Basketball',
  'onboarding.sport.cycling': 'Cycling',
  'onboarding.sport.hiking': 'Hiking',

  // ── Load ─────────────────────────────────────────────────────────────────
  // The question is asked in the language of the sport that was picked, so
  // there is a title per sport. The blurbs collapse where two sports share
  // one — running and cycling both get the plain weekly line.
  'onboarding.load.title': 'How much are you doing right now?',
  'onboarding.load.blurb': 'Your honest current week, not your best one.',
  'onboarding.load.blurbMonth': 'Your honest current month, not your best one.',
  'onboarding.load.titleRunning': 'How much do you run a week?',
  'onboarding.load.titleTennis': 'How much are you on court, {name}?',
  'onboarding.load.blurbTennis': 'Matches and practice together - the honest week.',
  'onboarding.load.titleGym': 'How much are you training, {name}?',
  'onboarding.load.blurbGym': 'Time under load, not time in the building.',
  'onboarding.load.titleFootball': 'How much are you playing, {name}?',
  'onboarding.load.blurbFootball': 'Matches and training together - the honest week.',
  'onboarding.load.titleBasketball': 'How much are you playing, {name}?',
  'onboarding.load.blurbBasketball': 'Games and practice together - the honest week.',
  'onboarding.load.titleCycling': 'How much are you riding, {name}?',
  'onboarding.load.titleHiking': 'How much are you hiking, {name}?',
  /** Distance bands. `{unit}` so the scale can change without the five labels
   * being rewritten — every language keeps the number range and moves only the
   * unit. */
  'onboarding.load.km0': '0–5 {unit}',
  'onboarding.load.km1': '5–15 {unit}',
  'onboarding.load.km2': '15–30 {unit}',
  'onboarding.load.km3': '30–50 {unit}',
  'onboarding.load.km4': '50+ {unit}',
  'onboarding.load.unitKm': 'km',
  'onboarding.load.hours0': 'Under 1 hour',
  'onboarding.load.hours1': '1–3 hours',
  'onboarding.load.hours2': '3–5 hours',
  'onboarding.load.hours3': '5–8 hours',
  'onboarding.load.hours4': '8+ hours',
  'onboarding.load.perWeek': 'per week',
  'onboarding.load.runsPerWeek': 'Runs per week',
  'onboarding.load.sessionsPerWeek': 'Sessions per week',
  'onboarding.load.ridesPerWeek': 'Rides per week',
  'onboarding.load.hikesPerMonth': 'Hikes per month',

  // ── Challenge ────────────────────────────────────────────────────────────
  'onboarding.challenge.title': 'What’s hardest right now, {name}?',
  'onboarding.challenge.blurb': 'Up to two. The plan leans toward whatever you pick.',
  'onboarding.challenge.painfree': 'Staying pain-free',
  'onboarding.challenge.back': 'Getting back to running',
  'onboarding.challenge.distance': 'Increasing distance',
  'onboarding.challenge.recovery': 'Recovering faster',
  'onboarding.challenge.strength': 'Getting stronger',
  'onboarding.challenge.injury': 'Avoiding another injury',

  // Where they heard about the app. Asked once; the answer is attribution.
  'onboarding.source.title': 'How did you find Walkito?',
  'onboarding.source.blurb': 'One tap. It helps us reach people like you.',
  'onboarding.source.tiktok': 'TikTok',
  'onboarding.source.instagram': 'Instagram',
  'onboarding.source.youtube': 'YouTube',
  'onboarding.source.friend': 'A friend told me',
  'onboarding.source.appStore': 'Browsing the App Store',
  'onboarding.source.playStore': 'Browsing Google Play',
  'onboarding.source.google': 'Google search',
  'onboarding.source.other': 'Somewhere else',
  /** Said when the cap pushed an earlier answer off the list. It reports what
   * happened; it does not tell anyone off. */
  'onboarding.challenge.swapped': 'Only {count} at a time - {label} was swapped out.',

  // ── Health ───────────────────────────────────────────────────────────────
  'onboarding.health.title': 'Connect your Health data',
  'onboarding.health.blurb': 'So your plan starts from what you have actually been doing.',
  'onboarding.health.askNamed': 'Fill me in, {name}!',
  'onboarding.health.ask': 'Fill me in!',
  /** Android's: Health Connect is asked for steps, workouts and sleep, not energy or heart rate. */
  'onboarding.health.askBlurbAndroid':
    'Walkito reads your steps, runs and sleep so the plan starts from what you have actually been doing - not what you meant to do.',
  'onboarding.health.askBlurb':
    'Walkito reads your steps, energy and heart rate so the plan starts from what you have actually been doing - not what you meant to do.',
  'onboarding.health.steps': 'Steps',
  'onboarding.health.calories': 'Active Energy',
  'onboarding.health.heartRate': 'Heart Rate',
  /** A type the user declined. Not an error — it is a valid answer. */
  'onboarding.health.notShared': 'Not shared',
  'onboarding.health.thousands': '{value}k',
  'onboarding.health.kcal': '{value} kcal',
  'onboarding.health.bpm': '{value} bpm',
  'onboarding.health.connect': 'Connect to Health',
  'onboarding.health.opening': 'Opening Health…',
  'onboarding.health.connectAndroid': 'Connect Health Connect',
  'onboarding.health.openingAndroid': 'Opening Health Connect…',
  /** The objection every user has at this exact moment, answered before they
   * can voice it. */
  'onboarding.health.promise': 'Your health data never leaves this device.',
  'onboarding.health.unavailable': 'Health isn’t available here - you can carry on without it.',
  'onboarding.health.declined': 'Health access was declined. Your plan will work without it.',
  'onboarding.health.empty': 'Connected - no data yet. It will fill in as you move.',

  // ── Watch ────────────────────────────────────────────────────────────────
  'onboarding.watch.title': 'Do you wear a watch?',
  'onboarding.watch.blurb': 'Only so we know whether anything needs connecting.',
  'onboarding.watch.apple': 'Apple Watch',
  'onboarding.watch.appleCaption': 'Everything works already',
  'onboarding.watch.garmin': 'Garmin',
  'onboarding.watch.whoop': 'Whoop',
  'onboarding.watch.switchCaption': 'One switch to flip',
  'onboarding.watch.none': 'No watch',
  'onboarding.watch.noneCaption': 'Your phone in your pocket is enough',

  // ── Watch sync ───────────────────────────────────────────────────────────
  // The menu names inside the steps are another app's, and those apps localise
  // their own interfaces — so each language names the path as that language's
  // build of Garmin Connect or Whoop presents it.
  'onboarding.watchSync.title': 'Turn on Health sync',
  'onboarding.watchSync.blurb': 'One switch inside the app you already use.',
  'onboarding.watchSync.open': 'Open {app}',
  'onboarding.watchSync.garminApp': 'Garmin Connect',
  'onboarding.watchSync.garmin1': 'Open Garmin Connect and go to More.',
  'onboarding.watchSync.garmin2': 'Tap Settings, then Apple Health.',
  'onboarding.watchSync.garmin3': 'Turn on the categories you want shared.',
  'onboarding.watchSync.whoopApp': 'Whoop',
  'onboarding.watchSync.whoop1': 'Open Whoop and tap More.',
  'onboarding.watchSync.whoop2': 'Open App Settings, then Integrations.',
  'onboarding.watchSync.whoop3': 'Tap Apple Health and turn it on.',

  // ── Notifications ────────────────────────────────────────────────────────
  'onboarding.notify.title': 'Turn on notifications',
  'onboarding.notify.blurb': 'So your plan can tell you when it needs you.',
  'onboarding.notify.askNamed': 'Don’t go it alone, {name}',
  'onboarding.notify.ask': 'Don’t go it alone',
  'onboarding.notify.askBlurb': 'Only on days your plan has a session.',
  'onboarding.notify.promise1': 'A nudge on the days your plan has a session',
  'onboarding.notify.promise2': 'A heads-up when it changes what you are doing',
  'onboarding.notify.promise3': 'And now and then a discount - nothing more.',
  /** The mock banner. `bannerApp` is the app's own name and stays as it is. */
  'onboarding.notify.bannerApp': 'Walkito',
  'onboarding.notify.bannerTime': 'now',
  'onboarding.notify.bannerBody': 'Today is foot strength - 7 minutes. Your shins will thank you.',
  'onboarding.notify.turnOn': 'Turn on notifications',
  'onboarding.notify.opening': 'Opening…',
  'onboarding.notify.notNow': 'Not now',
  'onboarding.notify.declined': 'No problem - you can turn these on later in Settings.',

  // ── Building ─────────────────────────────────────────────────────────────
  'onboarding.building.title': 'Building your plan',
  'onboarding.building.blurb': 'Folding everything you told me into week one.',
  'onboarding.building.line1': 'Getting to know you',
  'onboarding.building.line3': 'Your plan is ready',
  'onboarding.building.cta': 'Start my training',
  /**
   * Their answers, read back. Three templates rather than a join, because the
   * separator and the order are a language's decision: English sets the pain
   * first and the volume second with a comma between them, and nothing
   * guarantees another language wants either.
   */
  'onboarding.building.reflectionBoth': '{pain}, {volume}.',
  'onboarding.building.reflectionPain': '{pain}.',
  'onboarding.building.reflectionVolume': '{volume}.',
  /** What the programme knows about each complaint, in one sentence. Each names
   * the mechanism rather than the symptom. */
  'onboarding.pattern.heel': 'This is the most common pattern there is. It also responds fastest.',
  'onboarding.pattern.foot': 'The arch isn’t weak on its own. What holds it up is.',
  'onboarding.pattern.achilles': 'Load built faster than the tendon adapted. That’s fixable.',
  'onboarding.pattern.shin': 'Volume outran your legs. The plan walks that back, then builds.',
  'onboarding.pattern.calf': 'The calf pulls on everything below it. Loosen it and the rest follows.',
  'onboarding.pattern.none': 'You’re here before it hurts. That’s the cheap way to do this.',

  // ── Reflection parts ─────────────────────────────────────────────────────
  // The nouns and the volume line the two reflection screens are assembled
  // from. `{band}` is the label the user themselves picked on the load step.
  'onboarding.reflection.painHeel': 'Heel pain',
  'onboarding.reflection.painFoot': 'Foot pain',
  'onboarding.reflection.painAchilles': 'Achilles pain',
  'onboarding.reflection.painShin': 'Shin pain',
  'onboarding.reflection.painCalf': 'Calf pain',
  'onboarding.reflection.volumeWeekly': '{band} a week',
  'onboarding.reflection.volumeMonthly': '{band} a month',

  // ── Plan ─────────────────────────────────────────────────────────────────
  /** Optional. Empty is a skip; the button says so. */
  'onboarding.sendPlan.title': 'Send your plan\nto your email?',
  'onboarding.sendPlan.blurb': 'Optional. A few short emails in the first two weeks, and you can turn them off any time.',
  'onboarding.sendPlan.placeholder': 'you@example.com',
  'onboarding.sendPlan.send': 'Send it',
  'onboarding.plan.title': 'Your plan',
  'onboarding.plan.blurb': 'Built from your answers.',
  /** The plan's name, set large over the rest. Two, picked by what they said
   * about their running: already running, or starting out. Names, not
   * lengths — the plan has no end. */
  'onboarding.plan.wordmarkMomentum': 'Momentum',
  'onboarding.plan.wordmarkFoundations': 'Foundations',
  /**
   * The headline figure: sessions a week, the days they chose. No length,
   * because the plan has none — it is built a week at a time and a reached goal
   * hands over to the next, so a count of weeks here would promise an end the
   * app never reaches.
   */
  'onboarding.plan.meta': {
    one: '{count} session a week',
    other: '{count} sessions a week',
  },
  'onboarding.plan.week': 'Week {n}',
  'onboarding.plan.weeks': 'Weeks {from}–{to}',
  /** The last row, left open: the plan carries on past it. "Weeks 9+". */
  'onboarding.plan.weeksOn': 'Weeks {from}+',
  'onboarding.plan.phaseSettle': 'settle the irritation',
  'onboarding.plan.phaseBuild': 'build the arch',
  'onboarding.plan.phaseLoad': 'back to full load',
  /**
   * The same two facts as the building screen, in a longer sentence.
   *
   * "The first two weeks" is written out rather than figured: a digit mid-
   * sentence reads as data, and this clause is prose. Two is `BLOCK_LENGTH / 7`
   * and has been for as long as the programme has had blocks; if that ever
   * changes, these three lines change with it.
   *
   * The closing clause is a description of the table below, not a promise —
   * block one prescribes no loaded work at all.
   */
  'onboarding.plan.reflectionBoth':
    '{pain}, and {volume}. The first two weeks calm things down before any loading.',
  'onboarding.plan.reflectionPain':
    '{pain}. The first two weeks calm things down before any loading.',
  'onboarding.plan.reflectionVolume':
    '{volume}. The first two weeks build a base before any loading.',

  // ── Contract ─────────────────────────────────────────────────────────────
  'onboarding.contract.title': 'Let’s make a contract, {name}',
  'onboarding.contract.blurb': 'Not with me. With yourself.',
  'onboarding.contract.hint': 'Sign here',
  /** The rubber stamp. Two bottom lines because it is set as two stacked rows
   * of small caps — each language splits its own phrase across them, and the
   * halves are not the same halves. Keep them short: the ring is 132pt wide. */
  'onboarding.contract.stampTop': '★ Walkito ★',
  'onboarding.contract.stampText': 'Committed',
  'onboarding.contract.stampLine1': 'Day one',
  'onboarding.contract.stampLine2': 'Started',
  'onboarding.contract.noteNamed': '{name}, your signature stays on this device.',
  'onboarding.contract.note': 'Your signature stays on this device.',

  // ── Social proof ─────────────────────────────────────────────────────────
  'onboarding.social.welcomeNamed': 'Welcome, {name}',
  'onboarding.social.welcome': 'Welcome aboard',
  /** The newline divides the crest's two lines between the wreaths. */
  'onboarding.social.crest': 'A few minutes a day.\nNo gym, no guesswork.',
  /**
   * Three cards on how the plan works — not reviews. There were five-star
   * quotes from named runners here, and a 1.0 app has no such runners: App
   * Review reads invented testimonials as misleading (2.3.1), and so would
   * anyone who later found out. Each card is something the app really does.
   *
   * `name` is the card's small label. Each text is split into `before` ·
   * `lead` · `after`, where `lead` renders bold — and the split is per language, because the emphasised clause does not land
   * in the same place twice. `lead` has to stay a contiguous run of the
   * sentence, the component puts a space between `before` and `lead`, and the
   * space in front of `after` is written here.
   */
  'onboarding.testimonial1.before': 'Say how the foot feels, and',
  'onboarding.testimonial1.lead': 'today’s session adjusts',
  'onboarding.testimonial1.after': ' to match.',
  'onboarding.testimonial1.name': 'Every morning',
  'onboarding.testimonial2.before': 'Short, guided moves you can do',
  'onboarding.testimonial2.lead': 'at home or at work',
  'onboarding.testimonial2.after': ' - a floor and a wall are enough.',
  'onboarding.testimonial2.name': 'Every session',
  'onboarding.testimonial3.before': 'A one-minute retest',
  'onboarding.testimonial3.lead': 'shows what actually changed',
  'onboarding.testimonial3.after': ', in numbers rather than feelings.',
  'onboarding.testimonial3.name': 'Every two weeks',

  // ── Outlook ──────────────────────────────────────────────────────────────
  // Three months, told as what changes on the leg they marked: today, then the
  // end of each month, with a figure pinned to each zone.
  'onboarding.outlook.title': 'Here’s where this goes, {name}',
  'onboarding.outlook.blurb': 'What hurts today, and what the plan does about it.',
  'onboarding.outlook.blurbNone': 'Your legs today, and where the plan takes them.',
  'onboarding.outlook.today': 'Today',
  'onboarding.outlook.month': 'Month {n}',
  /** A zone's stage at each stop, in place of a percentage: the figures were
   * invented, and a number reads as a promise. Kept to a word or two — the
   * callout is 98pt wide. */
  'onboarding.outlook.pain0': 'Sore',
  'onboarding.outlook.pain1': 'Settling',
  'onboarding.outlook.pain2': 'Easing',
  'onboarding.outlook.pain3': 'Calmer',
  'onboarding.outlook.strength0': 'Baseline',
  'onboarding.outlook.strength1': 'Waking up',
  'onboarding.outlook.strength2': 'Building',
  'onboarding.outlook.strength3': 'Stronger',
  'onboarding.outlook.footnote': 'An illustration of how the plan builds, not a prediction. Everyone recovers at their own pace.',

  // ── Referral ─────────────────────────────────────────────────────────────
  'onboarding.referral.title': 'Have a referral code?',
  /** The annual subscription by name: the invite price is on the annual plan
   * only, and the weekly one is never discounted. */
  'onboarding.referral.blurb': 'Enter it for {percent}% off the annual subscription.',
  'onboarding.referral.applied': '{percent}% off the annual subscription applied.',
  'onboarding.referral.unlocked': 'Code accepted. Walkito Premium is on.',
  /** Every one of these is an ordinary thing a person can do, so none is
   * phrased as an error the user caused. */
  'onboarding.referral.unknown': 'We don’t know that code. Check it and try again.',
  'onboarding.referral.own': 'That one is yours. Send it to someone else.',
  'onboarding.referral.already': 'You have already used a code.',
  'onboarding.referral.unavailable': 'Invites are not available in this build.',
  'onboarding.referral.failed': 'Could not reach the server. Try again in a moment.',

  // ── The note at the end of onboarding ────────────────────────────────────
  //
  // DRAFT. Two founders speaking in the first person about their own
  // reason for building the app, written from what the app is rather than
  // from anything either of them said. Replace it with the real reason
  // before shipping — a note like this is only worth showing if it is true.
  //
  // It names no condition, injury or timeline and makes no health claim,
  // which keeps it clear of the rule the rest of the copy follows: this
  // app screens and trains, it does not diagnose or treat.
  //
  // The names are written into the sentences rather than interpolated.
  // They transliterate across scripts, and Russian inflects them — the
  // title and the body would need different forms of the same word.
  'onboarding.note.title': 'A note from us',
  'onboarding.note.body1':
    'Hi, I’m Rahim. My friend and I make Walkito, just the two of us. A lot of people’s heels hurt: insoles, a third pair of shoes - and they still limp in the morning. The exercises that help are well known. Nobody tells you which ones, or how many. So that is what we made.',
  'onboarding.note.body2':
    'It would mean a lot if you left a review. It genuinely matters to us. Thank you for being here.',
  'onboarding.note.signature': 'Rahim and Rahman',
  'onboarding.note.cta': 'Rate Walkito',
  'onboarding.note.later': 'Not now',
} as const satisfies Record<string, SourceEntry>;
