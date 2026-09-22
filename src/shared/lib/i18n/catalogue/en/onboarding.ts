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
  'onboarding.cta.seeOffer': 'See my offer',

  // ── Intro ────────────────────────────────────────────────────────────────
  'onboarding.intro.title': 'Run without second-guessing',
  'onboarding.intro.blurb': 'A daily plan that changes when your legs do.',
  'onboarding.intro.greeting': 'Hi, I’m Walkito',
  'onboarding.intro.headline': 'Let’s find out why it still hurts.',
  'onboarding.intro.cta': 'Continue with Apple',
  'onboarding.intro.footnote': '~2 min setup',
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
  'onboarding.name.blurb':
    'Everything after this gets written for you, not for runners in general.',
  'onboarding.name.placeholder': 'e.g. Alex',

  // ── Sex ──────────────────────────────────────────────────────────────────
  'onboarding.sex.title': 'Male or female, {name}?',
  'onboarding.sex.blurb': 'Load tolerance and injury patterns differ, so the plan does too.',
  'onboarding.sex.female': 'Female',
  'onboarding.sex.male': 'Male',

  // ── Runner ───────────────────────────────────────────────────────────────
  'onboarding.runner.title': 'What kind of athlete are you, {name}?',
  'onboarding.runner.blurb':
    'This is where your plan starts from. Under-selling here just makes week one too easy.',
  'onboarding.runner.new': 'Just getting started',
  'onboarding.runner.casual': 'Casual',
  'onboarding.runner.regular': 'Regular',
  'onboarding.runner.racing': 'Training for something',
  'onboarding.runner.serious': 'Serious about it',

  // ── Age ──────────────────────────────────────────────────────────────────
  'onboarding.age.title': 'How old are you?',
  'onboarding.age.blurb': 'Tendons adapt more slowly with age. This paces how fast the plan builds.',
  /** Both the unit toggle's label and the suffix riding the number. */
  'onboarding.age.years': 'years',

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

  // ── Pain ─────────────────────────────────────────────────────────────────
  'onboarding.pain.title': 'What’s getting in the way, {name}?',
  'onboarding.pain.blurb': 'Choose any that apply. Most people pick more than one.',
  'onboarding.pain.foot': 'Foot',
  'onboarding.pain.heel': 'Heel',
  'onboarding.pain.achilles': 'Achilles',
  'onboarding.pain.shin': 'Shin',
  'onboarding.pain.knee': 'Knee',
  'onboarding.pain.hip': 'Hip',
  'onboarding.pain.none': 'Nothing right now',

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
  'onboarding.load.titleRunning': 'How much are you running now, {name}?',
  'onboarding.load.titleTennis': 'How much are you on court, {name}?',
  'onboarding.load.blurbTennis': 'Matches and practice together — the honest week.',
  'onboarding.load.titleGym': 'How much are you training, {name}?',
  'onboarding.load.blurbGym': 'Time under load, not time in the building.',
  'onboarding.load.titleFootball': 'How much are you playing, {name}?',
  'onboarding.load.blurbFootball': 'Matches and training together — the honest week.',
  'onboarding.load.titleBasketball': 'How much are you playing, {name}?',
  'onboarding.load.blurbBasketball': 'Games and practice together — the honest week.',
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
  /** Said when the cap pushed an earlier answer off the list. It reports what
   * happened; it does not tell anyone off. */
  'onboarding.challenge.swapped': 'Only {count} at a time — {label} was swapped out.',

  // ── Health ───────────────────────────────────────────────────────────────
  'onboarding.health.title': 'Connect your Health data',
  'onboarding.health.blurb': 'So your plan starts from what you have actually been doing.',
  'onboarding.health.askNamed': 'Fill me in, {name}!',
  'onboarding.health.ask': 'Fill me in!',
  'onboarding.health.askBlurb':
    'Walkito reads your steps, energy and heart rate so the plan starts from what you have actually been doing — not what you meant to do.',
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
  /** The objection every user has at this exact moment, answered before they
   * can voice it. */
  'onboarding.health.promise': 'Your health data never leaves this device.',
  'onboarding.health.unavailable': 'Health isn’t available here — you can carry on without it.',
  'onboarding.health.declined': 'Health access was declined. Your plan will work without it.',
  'onboarding.health.empty': 'Connected — no data yet. It will fill in as you move.',

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
  'onboarding.notify.askBlurb':
    'A plan only works if it turns up. Let Walkito tell you when today has a session in it.',
  'onboarding.notify.promise1': 'A nudge on the days your plan has a session',
  'onboarding.notify.promise2': 'A heads-up when it changes what you are doing',
  'onboarding.notify.promise3': 'Nothing else. No streaks to guilt you back.',
  /** The mock banner. `bannerApp` is the app's own name and stays as it is. */
  'onboarding.notify.bannerApp': 'Walkito',
  'onboarding.notify.bannerTime': 'now',
  'onboarding.notify.bannerBody': 'Today is foot strength — 7 minutes. Your shins will thank you.',
  'onboarding.notify.turnOn': 'Turn on notifications',
  'onboarding.notify.opening': 'Opening…',
  'onboarding.notify.notNow': 'Not now',
  'onboarding.notify.declined': 'No problem — you can turn these on later in Settings.',

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
  'onboarding.pattern.knee': 'The knee is where it hurts. It’s rarely where it started.',
  'onboarding.pattern.hip': 'Something below the hip stopped carrying its share.',
  'onboarding.pattern.none': 'You’re here before it hurts. That’s the cheap way to do this.',
  /** Day 12–16 is the subjective-relief window from the strength arm of
   * Rathleff's trial, not the programme's length. */
  'onboarding.building.promise': 'First changes: day 12 to 16.',

  // ── Reflection parts ─────────────────────────────────────────────────────
  // The nouns and the volume line the two reflection screens are assembled
  // from. `{band}` is the label the user themselves picked on the load step.
  'onboarding.reflection.painHeel': 'Heel pain',
  'onboarding.reflection.painFoot': 'Foot pain',
  'onboarding.reflection.painAchilles': 'Achilles pain',
  'onboarding.reflection.painShin': 'Shin pain',
  'onboarding.reflection.painKnee': 'Knee pain',
  'onboarding.reflection.painHip': 'Hip pain',
  'onboarding.reflection.volumeWeekly': '{band} a week',
  'onboarding.reflection.volumeMonthly': '{band} a month',

  // ── Plan ─────────────────────────────────────────────────────────────────
  'onboarding.plan.title': 'Your plan',
  'onboarding.plan.blurb': 'Built from your answers.',
  /**
   * The headline figure. A plural entry on the weeks, which is the number that
   * moves — `{sessions}` is the three loaded days the protocol is built on and
   * is fixed by the programme, so it rides along as a plain substitution.
   */
  'onboarding.plan.meta': {
    one: '{count} week · {sessions} sessions a week',
    other: '{count} weeks · {sessions} sessions a week',
  },
  'onboarding.plan.week': 'Week {n}',
  'onboarding.plan.weeks': 'Weeks {from}–{to}',
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
  'onboarding.contract.stampTop': '★ WALKITO ★',
  'onboarding.contract.stampText': 'COMMITTED',
  'onboarding.contract.stampLine1': 'PAIN-FREE',
  'onboarding.contract.stampLine2': 'RUNNING',
  'onboarding.contract.noteNamed': '{name}, your signature stays on this device.',
  'onboarding.contract.note': 'Your signature stays on this device.',

  // ── Social proof ─────────────────────────────────────────────────────────
  'onboarding.social.welcomeNamed': 'Welcome, {name}',
  'onboarding.social.welcome': 'Welcome aboard',
  /** The newline divides the crest's two lines between the wreaths. */
  'onboarding.social.crest': 'Join 40,000+ runners\ntraining without pain',
  /**
   * The three reviews.
   *
   * Each is split into `before` · `lead` · `after`, where `lead` renders bold —
   * and the split is per language, because the emphasised clause does not land
   * in the same place twice. `lead` has to stay a contiguous run of the
   * sentence, the component puts a space between `before` and `lead`, and the
   * space in front of `after` is written here.
   */
  'onboarding.testimonial1.before': 'Six months of shin pain, and I ran a',
  'onboarding.testimonial1.lead': 'pain-free 10k',
  'onboarding.testimonial1.after': ' eight weeks in.',
  'onboarding.testimonial1.name': 'Marta K.',
  'onboarding.testimonial2.before': 'It found my',
  'onboarding.testimonial2.lead': 'calves, not my knees.',
  'onboarding.testimonial2.after': ' The strength work finally made sense.',
  'onboarding.testimonial2.name': 'Daniel R.',
  'onboarding.testimonial3.before': 'Back from an Achilles injury',
  'onboarding.testimonial3.lead': 'without losing the distance',
  'onboarding.testimonial3.after': ' I’d already built.',
  'onboarding.testimonial3.name': 'Priya S.',

  // ── Referral ─────────────────────────────────────────────────────────────
  'onboarding.referral.title': 'Have a referral code?',
  'onboarding.referral.blurb': 'Enter it and you both get {percent}% off your plan.',
  'onboarding.referral.applied': '{percent}% off applied.',
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
} as const satisfies Record<string, SourceEntry>;
