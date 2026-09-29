import { CITE } from '@/lib/citations';
import { PROGRAM } from '@/lib/site';

import type { Guide } from './types';

/** "3, 5 or 7" — a list of options as a sentence says it. */
const or = (xs: readonly number[]) => `${xs.slice(0, -1).join(', ')} or ${xs[xs.length - 1]}`;

const DAYS = or(PROGRAM.daysPerWeek);
const MINUTES = or(PROGRAM.sessionMinutes);

/*
 * The same list, in the same order, belongs in every language's guides and
 * About page. Calcaneal stress fracture is one of the causes of heel pain the
 * 2023 guideline names alongside plantar fasciitis, which is why a runners' site
 * spells out its signs.
 */
const RED_FLAGS = {
  h2: 'See a clinician first if',
  bullets: [
    'the pain followed an injury or a fall',
    'you cannot put weight on the foot, or you are limping',
    'it comes with numbness, tingling, burning, swelling or warmth',
    'the heel is red, or you have a fever or feel unwell',
    'it wakes you at night',
    'it is sharp, or getting worse despite easing the load',
    'squeezing the sides of the heel hurts, or the pain builds during runs after you increased your mileage; both can be signs of a stress fracture',
    'you have diabetes, reduced feeling in your feet or poor circulation',
    'both heels hurt and other joints are swollen or stiff',
    'it has not improved after several weeks of exercise and a lighter load',
    'one arch has flattened suddenly as an adult',
  ],
} as const;

export const FLAT_FEET_EN: Guide = {
  lang: 'en',
  page: 'flatFeet',
  published: '2026-09-24',
  updated: '2026-09-28',
  title: 'Flat Feet Exercises for Fallen Arches & Arch Pain',
  description:
    'Flat feet exercises for flexible flat feet and fallen arches: doses, how often, what each should feel like, what trials found, and where arch pain fits.',
  h1: 'Flat feet exercises for fallen arches and arch pain',
  lede: 'By evening your feet feel tired, and the arches ache. When you stand, your feet seem to roll in and the arches sink toward the floor. People may tell you flat feet are just how you’re built and not worth a second thought. Wanting to do something about them makes sense, and there is real research on training the arch.',
  intro: [
    'Start with one check: whether your flat feet are flexible, meaning the arch comes back when you lift the foot. For flexible flat feet, one trial of 52 people found that six weeks of short-foot exercises, ankle work, hip strengthening and stretching, done together, changed the shape of the arch more than in a control group. The evidence for short-foot training on its own is thinner. A 2024 review found no clear change overall, and a change in one arch measure only in programs that ran longer than six weeks. Both measured the shape of the arch, not pain. If your pain is near the heel, the heel pain research is the better guide.',
  ],
  takeaways: [
    'The randomized trial on this page was run on flexible flat feet, where the arch comes back when the foot is off the ground (Brijwasi and Borkar, 2023).',
    'In that trial of 52 people, six weeks of short-foot, ankle, hip and stretching work changed arch shape more than in the control group (Brijwasi and Borkar, 2023).',
    'A 2024 review of short-foot training found no clear change overall, and an improvement in one arch measure only in programs longer than six weeks (Cheng and colleagues, 2024).',
    'A rigid flat foot, one that stays flat even off the ground, is structural, and exercise will not change its shape.',
    'These studies measured arch shape, not pain. For heel pain, the 2023 heel pain guideline gives plantar fascia and calf stretching its top grade, A, and strength training a B.',
  ],
  toc: true,
  sections: [
    {
      h2: 'How do you tell if flat feet are flexible or rigid?',
      paragraphs: [
        'You can tell whether flat feet are flexible or rigid with a check that takes a few seconds. It matters because the trial on this page was run on flexible flat feet, and exercise will not change the shape of a rigid one. The 2024 review pooled studies of flat feet in general. Walkito doesn’t check your foot type, so this check is yours to do:',
      ],
      bullets: [
        'Stand barefoot and look at the inside of your foot. With a flat foot, the arch sits low or touches the floor.',
        'Lift that foot off the floor, or rise up onto your toes, and look again.',
        'If the arch comes back, the flat foot is **flexible**. The exercises below are for this kind.',
        'If the arch stays flat even off the ground, the foot is **rigid**. That is a structural issue exercise will not change. Leave the arch-hold goal aside and see a clinician before starting a program.',
        '“Fallen arches” is usually just another name for flat feet. But if one arch has flattened **suddenly**, on one side, as an adult, see a clinician before you exercise it, whatever the check shows.',
      ],
    },
    {
      h2: 'The exercises for flat feet, with starting doses',
      paragraphs: [
        'The exercises for flat feet in Walkito start with towel scrunches and big toe lifts, then move up through three versions of the short foot. Toe spreads, band turn-ins, a single-leg hold, hip abduction and calf stretches fill in around them. These are Walkito’s starting doses, not a prescription. Do them barefoot. [How these guides are written](/about/).',
        'The short foot is the core of the arch work. You shorten the foot by pulling the ball of the foot toward the heel, so the arch lifts, without curling the toes. Short-foot work, hip strengthening and stretching are what the trial tested. The towel scrunch, big toe lift, toe spread, band turn-in and single-leg hold are Walkito’s own additions.',
        'You do one arch exercise at a time, the one at your level. Walkito moves you up one step once the last two sessions with it felt easy. While the arch is your goal, every session has an arch exercise in it, and the others take turns. Some exercises need a towel or a resistance band. Walkito asks what you have and leaves out anything you don’t. If any exercise takes your pain to **6/10 or more**, stop for the day. That is the point where Walkito ends a session.',
      ],
      table: {
        head: ['Exercise', 'Dose', 'How often', 'What you should feel', 'Stop if'],
        rows: [
          ['Towel scrunch', '3 sets of 8, hold 5 seconds, each foot', 'Every session, while it is your level', 'The small muscles under the arch working', 'Pain reaches 6/10'],
          ['Big toe lift', '3 sets of 8, hold 5 seconds, each foot', 'Every session, while it is your level', 'The big toe moving on its own', 'Pain reaches 6/10'],
          ['Short foot, seated', '3 sets of 8, hold 5 seconds, each foot', 'Every session, while it is your level', 'The arch lifting, with the toes relaxed', 'Pain reaches 6/10'],
          ['Short foot, standing', '3 sets of 8, hold 5 seconds, both feet', 'Every session, while it is your level', 'The arch working while it carries your weight', 'Pain reaches 6/10'],
          ['Short foot, one leg', '3 sets of 10, hold 5 seconds, each foot', 'Every session, while it is your level', 'Harder work in the arch, with the big toe pressing down', 'Pain reaches 6/10'],
          ['Toe spread', '3 sets of 10, each foot', 'Strength days, in turn with the band turn-in', 'Effort in the small muscles of the foot', 'Pain reaches 6/10'],
          ['Band turn-in', '3 sets of 12, each foot', 'Strength days, after six sessions of the standing short foot', 'Work along the inside of the foot and ankle', 'Pain reaches 6/10'],
          ['Single-leg hold', '3 holds of 20 seconds, each leg', 'Balance days', 'The foot and ankle making small corrections', 'Pain reaches 6/10'],
          ['Hip abduction', '3 sets of 10, each leg, standing, with a band', 'Strength days, when the left and right goal is in your plan', 'Work on the outside of the hip', 'Pain reaches 6/10'],
          ['Calf and soleus stretch', '2 holds of 30 seconds for each stretch, each leg', 'Most sessions, in turn with the other stretches', 'A stretch in the calf, then lower down, near the heel', 'Pain reaches 6/10'],
        ],
      },
      exercises: [
        {
          name: 'Towel scrunch',
          dose: '3 sets of 8, hold 5 seconds, each foot',
          often: 'Every session, while it is your level',
          feel: 'The small muscles under the arch working',
          how: 'Sit with a towel flat on the floor under your foot. Pull the towel in with your toes, and keep the heel down. The towel scrunch wakes up the small muscles under the arch.',
          image: 'Exercise: towel scrunch',
          media: 'towel_scrunch',
          caption: 'Towel scrunch: pull the towel in with your toes, the heel stays down',
          alt: 'A seated figure pulling a towel in with the toes of one foot',
        },
        {
          name: 'Big toe lift',
          dose: '3 sets of 8, hold 5 seconds, each foot',
          often: 'Every session, while it is your level',
          feel: 'The big toe moving on its own',
          how: 'Sit with your feet flat. Lift only the big toe and hold. The other four toes stay flat on the floor. The big toe lift teaches the big toe to move on its own, which is the arch’s first switch.',
          image: 'Exercise: big toe lift',
          media: 'big_toe_lift',
          caption: 'Big toe lift: lift only the big toe while the other four stay flat',
          alt: 'A foot on the floor lifting only the big toe, the arch highlighted',
        },
        {
          name: 'Short foot, seated',
          dose: '3 sets of 8, hold 5 seconds, each foot',
          often: 'Every session, while it is your level',
          feel: 'The arch lifting',
          how: 'Sit with your foot flat on the floor. Pull the ball of the foot toward the heel so the arch lifts, and hold. Don’t curl the toes. Curling them is the most common way to get this exercise wrong.',
          image: 'Exercise: short foot, seated',
          media: 'short_foot_seated',
          caption: 'Short foot, seated: pull the ball of the foot toward the heel so the arch lifts',
          alt: 'A seated leg with the foot flat on the floor, the arch muscles highlighted as the arch lifts',
        },
        {
          name: 'Short foot, standing',
          dose: '3 sets of 8, hold 5 seconds, both feet',
          often: 'Every session, while it is your level',
          feel: 'The arch working under your weight',
          how: 'Stand with your weight on both feet and do the same movement. The toes stay flat and long. Only the arch lifts. It is the same muscle as the seated version, now holding your weight.',
          image: 'Exercise: short foot, standing',
          media: 'short_foot_double',
          caption: 'Short foot, standing: toes flat and long, only the arch lifts',
          alt: 'Two legs standing, with the arch and calf of one leg highlighted as the arch lifts',
        },
        {
          name: 'Short foot, one leg',
          dose: '3 sets of 10, hold 5 seconds, each foot',
          often: 'Every session, while it is your level',
          feel: 'Harder work in the arch',
          how: 'Stand on one foot and lift the arch. Keep the big toe down. If it lifts, the arch is cheating. Working one foot at a time is where the weaker side shows.',
          image: 'Exercise: short foot, one leg',
          media: 'short_foot_single',
          caption: 'Short foot, one leg: lift the arch and keep the big toe down',
          alt: 'A foot standing on the floor, the arch highlighted as it lifts',
        },
        {
          name: 'Toe spread',
          dose: '3 sets of 10, each foot',
          often: 'Strength days',
          feel: 'Effort in the small muscles of the foot',
          how: 'Spread your toes as wide as they go, then hold. Toes that can spread share the load with the arch. Lifting them is not the point.',
          image: 'Exercise: toe spread',
          media: 'toe_spread',
          caption: 'Toe spread: spread the toes as wide as they go, and hold',
          alt: 'A foot from the front, the small muscles between the toes highlighted as they spread',
        },
        {
          name: 'Band turn-in',
          dose: '3 sets of 12, each foot',
          often: 'Strength days',
          feel: 'Work along the inside of the foot and ankle',
          how: 'Sit with a resistance band around the foot and turn the foot in against it. Move the foot, not the leg. The knee stays still. Walkito adds the band turn-in only after six sessions of the standing short foot, so the arch’s own muscles come first.',
          image: 'Exercise: band turn-in',
          media: 'band_inversion',
          caption: 'Band turn-in: turn the foot in against the band, the knee stays still',
          alt: 'A leg with a resistance band around the foot, turning the foot inward, the lower leg highlighted',
        },
        {
          name: 'Single-leg hold',
          dose: '3 holds of 20 seconds, each leg',
          often: 'Balance days',
          feel: 'Small corrections in the foot and ankle',
          how: 'Stand on one foot and look at one fixed spot. Let the foot wobble. It’s meant to, because that wobble is the foot doing the balancing.',
          image: 'Exercise: single-leg hold',
          media: 'single_leg_hold',
          caption: 'Single-leg hold: stand on one foot and let it make small corrections',
          alt: 'A figure balancing on one leg, the lower leg muscles highlighted',
        },
        {
          name: 'Hip abduction',
          dose: '3 sets of 10, each leg',
          often: 'Strength days',
          feel: 'Work on the outside of the hip',
          how: 'Stand with a resistance band and lift one leg out to the side against it. Push through the heel, not the toes. A hip that gives way lands the load on the arch.',
          image: 'Exercise: hip abduction',
          media: 'hip_abduction',
          caption: 'Hip abduction: lift one leg out to the side against the band',
          alt: 'A standing figure with a band around both legs lifting one leg out to the side, the outer hip highlighted',
        },
        {
          name: 'Calf and soleus stretch',
          dose: '2 holds of 30 seconds for each stretch, each leg',
          often: 'Most sessions',
          feel: 'A stretch in the calf, then near the heel',
          how: 'Put your hands on a wall. Keep the back leg straight, the heel down and the hips forward, and feel the stretch in the calf. Then bend the back knee until you feel it lower, near the heel. That is the soleus, the deeper calf muscle.',
          image: 'Exercise: calf and soleus stretch',
          media: 'calf_stretch_straight',
          caption: 'Calf stretch: hands on the wall, back leg straight, heel down',
          alt: 'A figure leaning on a wall with the back leg straight, the calf highlighted',
        },
      ],
    },
    {
      h2: 'How long before flat feet exercises change the arch?',
      paragraphs: [
        'Flat feet exercises changed the arch after six weeks or more in the research so far, and only in flexible flat feet. In a trial of 52 people with **flexible** flat feet, a six-week program of short-foot exercises, ankle work, hip strengthening and stretching changed two measures of arch shape more than in the control group.',
        'The evidence for short-foot training on its own is thinner. A 2024 review pooled studies of short-foot training on flat feet in general. Overall, it found no clear difference from control groups in arch shape or foot posture. Only programs longer than six weeks improved how far the arch sinks under your weight, and the authors say larger studies are needed. So plan for at least six weeks, and longer if you do short-foot work on its own.',
        `That is one reason Walkito’s plan has no end date. The arch goal, holding the arch for ${PROGRAM.goals.archHoldSeconds} seconds, stays in the plan until you reach it, however many weeks that takes. The arch hold is tested every ${PROGRAM.testEveryDays} days until your first goal is reached, then every ${PROGRAM.testEveryDaysAfterGoal}, so you can see whether it is moving. The trials are summarized on [the evidence page](/science/).`,
      ],
      sourceNote:
        'Brijwasi and Borkar: navicular drop (how far the navicular bone on the inside of the arch drops when you stand) improved by 0.4 cm, and arch angle by 16 degrees, more than in the control group. Cheng and colleagues: no significant difference overall in navicular drop or Foot Posture Index; navicular drop improved significantly only in the subgroup of programs longer than six weeks.',
      cites: [CITE.brijwasi, CITE.cheng],
    },
    {
      h2: 'Do flat feet exercises help arch pain?',
      paragraphs: [
        'No study on this page shows that flat feet exercises ease arch pain, because none of them measured it. The trial and the review measured the shape of the arch. They show the arch can be trained. They are not evidence that the same exercises relieve an aching arch.',
        'Pain at the heel, and sometimes along the arch, can come from the plantar fascia, the band of tissue that runs along the sole. If yours is near the heel, the 2023 heel pain guideline is the better guide. For heel pain under the foot, it gives plantar fascia and calf stretching its top grade, **A**, and strength training a **B**. Those exercises are in [plantar fasciitis exercises and stretches](/plantar-fasciitis-exercises/).',
        'Walkito can work on both at once, as separate goals: pain-free mornings for the pain, and an arch hold for the arch. How the two share a week is on [the plan page](/program/).',
      ],
      cites: [CITE.guideline],
    },
    {
      h2: 'What happens when you reach the arch goal?',
      paragraphs: [
        `When you reach the arch goal, holding the arch for ${PROGRAM.goals.archHoldSeconds} seconds, Walkito keeps the arch work in the plan at a lower dose. The goal moves to maintaining, and the next goal takes its place. Reaching it doesn’t mean the arch work stops.`,
        `The tests carry on too, every ${PROGRAM.testEveryDaysAfterGoal} days once your first goal is reached. If the arch hold starts to slide, you see it in the numbers instead of guessing.`,
        'If your heel hurts as well, the heel has its own exercises and its own goal: see [plantar fasciitis exercises and stretches](/plantar-fasciitis-exercises/). Questions about the app itself are answered in [the FAQ](/faq/).',
      ],
    },
  ],
  faq: [
    {
      q: 'Can exercises change flat feet?',
      a: 'Exercise can change the arch shape of flexible flat feet, but not rigid ones. In a trial of 52 people whose arch came back off the ground, six weeks of short-foot, ankle, hip and stretching work changed arch measures more than in a control group. A foot that stays flat even when lifted is structural, and exercise will not change its shape.',
    },
    {
      q: 'How long does it take for flat feet exercises to work?',
      a: `Plan on six weeks or more. In one trial on flexible flat feet, a six-week program of short-foot, hip and stretching work changed arch measures. For short-foot training alone, a 2024 review found no clear change overall, and an improvement only in programs longer than six weeks. Walkito keeps its ${PROGRAM.goals.archHoldSeconds}-second arch-hold goal until you reach it.`,
    },
    {
      q: 'What helps pain under the arch of the foot?',
      a: 'There is no direct evidence here, because no study cited on this page measured arch pain. If the pain is near the heel and linked to the plantar fascia, the 2023 heel pain guideline grades plantar fascia and calf stretching A and strength training B. The arch exercises on this page train arch shape, not pain. See [plantar fasciitis exercises](/plantar-fasciitis-exercises/).',
    },
    {
      q: 'Are fallen arches the same as flat feet?',
      a: 'Usually, yes. “Fallen arches” is a common name for flat feet. What matters more is whether the foot is flexible, with an arch that comes back off the ground, or rigid. The trial on this page was run on flexible flat feet. An arch that has flattened suddenly on one side as an adult should be seen by a clinician first.',
    },
    {
      q: 'How often should I do flat feet exercises?',
      a: `Do the short-foot work on each training day while the arch is your goal. In Walkito you choose ${DAYS} training days a week, and while the arch is the week’s focus, every session includes an arch exercise, one level harder at a time. The arch hold is retested every ${PROGRAM.testEveryDays} days, then every ${PROGRAM.testEveryDaysAfterGoal} after your first goal.`,
    },
    {
      q: 'When should I see a doctor about flat feet?',
      a: 'See a clinician before you start if the arch stays flat when the foot is off the ground, or if one arch has flattened suddenly as an adult. The same goes for pain that followed an injury, wakes you at night, or comes with numbness, tingling, swelling or warmth. Pain that is sharp or getting worse needs a clinician, not more exercise.',
    },
  ],
  redFlags: {
    h2: RED_FLAGS.h2,
    bullets: [...RED_FLAGS.bullets, 'the arch stays flat when the foot is off the ground'],
  },
  program: {
    h2: 'Doing it as a plan',
    text: `You don’t have to work out the order, the doses or when to move to a harder version. Walkito builds a plan one week at a time around one goal. For a flexible flat foot, that goal is the arch hold: holding your arch up for ${PROGRAM.goals.archHoldSeconds} seconds. If you also have pain, pain-free mornings come first.`,
    more: [
      `You pick ${DAYS} days a week and sessions of ${MINUTES} minutes. Every ${PROGRAM.testEveryDays} days (then every ${PROGRAM.testEveryDaysAfterGoal} once your first goal is met), a short test checks arch hold, calf endurance and balance, so you can see whether the arch work is doing anything.`,
    ],
    cta: `Start with ${PROGRAM.sessionMinutes[0]} minutes a day.`,
  },
  crumb: 'Flat feet exercises',
  campaign: 'guide-flat-feet',
};

/*
 * The pilot for the writing guide (reader's journey, plain words, study detail
 * in source lines, real tables, a contents list, an image slot per exercise).
 * Every fact, dose, grade and figure is the one this page carried before the
 * rewrite; the trial's Foot Function Index figures moved to its source line.
 */
export const HEEL_PAIN_EN: Guide = {
  lang: 'en',
  page: 'heelPain',
  published: '2026-09-24',
  updated: '2026-09-28',
  title: 'Plantar Fasciitis Exercises for Heel Pain',
  description:
    'Plantar fasciitis exercises and stretches for heel pain: doses, how often, what each should feel like, and what the 2023 guideline recommends.',
  h1: 'Plantar fasciitis exercises and stretches for heel pain',
  lede: 'Your first steps out of bed are the worst part of the day. A sharp pull right at the heel, before you’ve even had coffee. It eases once you’re moving, then comes back after you sit for a while. That pattern has a name, plantar fasciitis, and the 2023 clinical guideline for heel pain calls it the most commonly recognized cause of heel pain under the foot.',
  intro: [
    'It’s also confusing to look up, because everyone says something different. The evidence points to two things: stretching the plantar fascia and calf, and strength work for the calf. A 2023 clinical guideline gives stretching its top grade, A, and strength training a B. In one trial of 48 people, all wearing shoe inserts, slow heel raises with a towel under the toes helped faster than stretching alone. By twelve months both groups were even. Doing both is what the guideline supports.',
  ],
  takeaways: [
    'The 2023 heel pain guideline from the Journal of Orthopaedic & Sports Physical Therapy gives plantar fascia and calf stretching its top grade, A, and strength training a B.',
    'In a trial of 48 people, heavy heel raises eased pain and improved daily function faster than stretching, and by twelve months both groups were even (Rathleff and colleagues, 2015).',
    'For heel pain when you run, the same guideline advises changing the load instead of stopping everything, advice graded E because it rests on theory, not trials.',
    'See a clinician first if the pain followed an injury, comes with numbness or swelling, wakes you at night, or hurts when you squeeze the heel.',
  ],
  toc: true,
  sections: [
    {
      h2: 'The exercises for plantar fasciitis, with starting doses',
      paragraphs: [
        'The exercises for plantar fasciitis in Walkito are stretches for the plantar fascia and calf, calf strength work that builds up in small steps, and a foot roll. These are Walkito’s starting doses, not a prescription. [How these guides are written](/about/).',
        'Order matters. While pain is your goal, Walkito keeps the calf work gentle: seated heel raises first, then heel raises on both feet, then a held heel raise, one step at a time. You move up a step once the last two sessions with it felt easy. The towel heel raise loads the plantar fascia the hardest, so it only comes in once morning pain has come down and the goal moves on to calf strength. If any exercise takes your pain to **6/10 or more**, stop for the day. That is the point where Walkito ends a session.',
      ],
      table: {
        head: ['Exercise', 'Dose', 'How often', 'What you should feel', 'Stop if'],
        rows: [
          ['Plantar fascia stretch', '2 holds of 30 seconds, each foot', 'Most sessions, in turn with the calf stretches', 'A stretch along the arch, not the calf', 'Pain reaches 6/10'],
          ['Calf stretch', '2 holds of 30 seconds, each leg', 'Most sessions, in turn with the other stretches', 'A stretch in the calf of the straight back leg', 'Pain reaches 6/10'],
          ['Soleus stretch', '2 holds of 30 seconds, each leg', 'Most sessions, in turn with the other stretches', 'A stretch low in the calf, near the heel', 'Pain reaches 6/10'],
          ['Seated heel raises', '3 sets of 10, both feet', 'Strength days, 3 a week, never two in a row', 'Easy work in the calves, with almost no load on the heel', 'Pain reaches 6/10'],
          ['Heel raises on both feet', '3 sets of 10, both feet', 'Strength days, once the seated raises feel easy', 'The calves working, with both feet sharing the load', 'Pain reaches 6/10'],
          ['Heel raise hold', '3 holds of 20 seconds, both feet', 'Strength days, the next step up', 'The calves working to stay still at the top', 'Pain reaches 6/10'],
          ['Heel raises with a towel', '4 sets of 10, each leg, with added weight', 'Strength days, once the goal moves on to calf strength', 'Hard work in the calf and a pull under the arch', 'Pain reaches 6/10'],
          ['Foot roll', '1 minute', 'Recovery days', 'Firm pressure under the foot, never a wince', 'Pain reaches 6/10'],
        ],
      },
      exercises: [
        {
          name: 'Plantar fascia stretch',
          dose: '2 holds of 30 seconds, each foot',
          often: 'Most sessions',
          feel: 'A stretch along the arch',
          how: 'Sit down and cross the foot over the other knee. Pull the toes back until you feel the stretch in the arch, not the calf. Do the first one on the edge of the bed, before your foot touches the floor.',
          image: 'Exercise: plantar fascia stretch',
          media: 'fascia_stretch',
          caption: 'Plantar fascia stretch: pull the toes back until you feel it in the arch',
          alt: 'A figure pulling the toes of one foot back, the sole of the foot highlighted',
        },
        {
          name: 'Calf stretch',
          dose: '2 holds of 30 seconds, each leg',
          often: 'Most sessions',
          feel: 'A stretch in the calf',
          how: 'Put your hands on a wall. Keep the back leg straight, the heel down and the hips forward. A tight calf pulls on the heel all day, so this stretch matters even though you feel it higher up.',
          image: 'Exercise: calf stretch',
          media: 'calf_stretch_straight',
          caption: 'Calf stretch: back leg straight, heel down, hips forward',
          alt: 'A figure leaning on a wall with the back leg straight, the calf highlighted',
        },
        {
          name: 'Soleus stretch',
          dose: '2 holds of 30 seconds, each leg',
          often: 'Most sessions',
          feel: 'A stretch near the heel',
          how: 'Take the same position, then bend the back knee until you feel the stretch lower down, near the heel. The soleus, the deeper calf muscle, only lets go with the knee bent.',
          image: 'Exercise: soleus stretch',
          media: 'calf_stretch_bent',
          caption: 'Soleus stretch: bend the back knee until you feel it near the heel',
          alt: 'A figure in a split stance with the knees bent, the lower calves highlighted',
        },
        {
          name: 'Seated heel raises',
          dose: '3 sets of 10, both feet',
          often: 'Strength days',
          feel: 'Easy work in the calves',
          how: 'Sit with your feet flat and press up through the balls of your feet. Hands on the knees add resistance. Seated heel raises work the calf with almost no load on the heel.',
          image: 'Exercise: seated heel raises',
          media: 'heel_raise_seated',
          caption: 'Seated heel raises: press up through the balls of the feet',
          alt: 'A seated figure lifting both heels, the calves highlighted',
        },
        {
          name: 'Heel raises on both feet',
          dose: '3 sets of 10, both feet',
          often: 'Strength days',
          feel: 'The calves working together',
          how: 'Stand on both feet, rise straight up over the big toes, then lower slowly. Both feet share the load while the calf wakes up.',
          image: 'Exercise: heel raises on both feet',
          media: 'heel_raise_double',
          caption: 'Heel raises on both feet: rise straight up over the big toes, then lower slowly',
          alt: 'A standing figure rising onto the toes of both feet, the calf highlighted',
        },
        {
          name: 'Heel raise hold',
          dose: '3 holds of 20 seconds, both feet',
          often: 'Strength days',
          feel: 'The calves working to stay still',
          how: 'Rise onto your toes on both feet, then stay still at the top. Don’t sink back down. Holding at the top loads the tendon without the bounce.',
          image: 'Exercise: heel raise hold',
          media: 'heel_raise_hold',
          caption: 'Heel raise hold: rise, then stay still at the top',
          alt: 'A figure holding a raised position on the toes of both feet, the calves highlighted',
        },
        {
          name: 'Heel raises with a towel',
          dose: '4 sets of 10, each leg, with added weight',
          often: 'Strength days',
          feel: 'Hard work in the calf',
          how: 'Stand on one foot on a step, with a rolled towel under your toes. Take three seconds to rise, hold for two at the top, and take three seconds to lower. At this level Walkito adds weight, such as a backpack. The towel is what makes this exercise work the plantar fascia and not just the calf.',
          image: 'Exercise: heel raises with a towel',
          media: 'heel_raise_towel',
          caption: 'Heel raises with a towel: three seconds up, two at the top, three down',
          alt: 'A figure rising onto the toes on a step with a rolled towel, the calves highlighted',
        },
        {
          name: 'Foot roll',
          dose: '1 minute',
          often: 'Recovery days',
          feel: 'Firm pressure under the foot',
          how: 'Sit and roll the sole of your foot slowly over a massage ball, with firm pressure. If you’re wincing, ease off. Rolling settles the tissue after it has worked. No ball? The sole massage uses firm thumb strokes from heel to toes instead.',
          image: 'Exercise: foot roll',
          media: 'foot_roll',
          caption: 'Foot roll: roll the sole slowly over a ball, with firm pressure',
          alt: 'A seated figure rolling the sole of one foot over a ball, the sole highlighted',
        },
      ],
    },
    {
      h2: 'What helps morning heel pain?',
      paragraphs: [
        'Morning heel pain on the first steps is the pattern most often linked to plantar fasciitis. It often eases once you get moving, and it comes back after you sit for a while.',
        'Two things on this page aim at it. The plantar fascia stretch is done **before you stand up**, on the edge of the bed with the toes pulled back, so your first steps are not your first stretch. And the 2023 guideline gives night splints, worn for 1 to 3 months, an **A** for people who keep getting pain on their first steps in the morning. Night splints are something to talk over with a clinician. Walkito doesn’t provide them.',
        'Walkito asks about your morning pain every day for the same reason. Morning pain is the clearest sign of how your foot coped with yesterday, and it decides how much today’s session asks of you.',
      ],
      cites: [CITE.guideline],
    },
    {
      h2: 'Should you rest or keep running with heel pain?',
      paragraphs: [
        'If heel pain from plantar fasciitis flares when you run, change the load instead of stopping everything. The 2023 guideline recommends learning how to adjust the load on your feet at work, in sport and in daily life. That advice is graded E, which means it rests on theory rather than trials. So keep the stretches every day, and cut back whatever makes the heel worse.',
        'On a bad morning, keep the stretches and drop the heel raises for the day. The next morning tells you how it went. If your first steps are clearly worse after a run, that run was more than the heel could take. Walkito reads it the same way. A big day on your feet turns the next strength session into a lighter recovery one, and a painful morning makes the session shorter without canceling it.',
        'Stop and see a clinician if running hurts sharply or the pain gets worse week after week. The same goes for pain that builds during runs after you added mileage, or pain when you squeeze the sides of the heel. Both can be signs of a stress fracture, one of the other causes of heel pain the guideline names.',
      ],
      cites: [CITE.guideline],
    },
    {
      h2: 'Is strength work or stretching better for plantar fasciitis?',
      paragraphs: [
        'Strength work and stretching both help plantar fasciitis, and strength work helps sooner.',
        'In a trial of 48 people with plantar fasciitis confirmed by ultrasound, everyone wore shoe inserts. One group added heavy heel raises every other day. The other stretched the plantar fascia every day. At three months, the heel-raise group was clearly ahead on pain and daily function. At twelve months, the two groups were even. Strength work brought the improvement forward. It did not make it bigger.',
        'The guideline supports doing both. The study-by-study reasoning is on [the evidence page](/science/).',
      ],
      sourceNote:
        'Scored on the Foot Function Index: 29 points lower in the heel-raise group at three months (95% CI 6-52, p = 0.016), and 22 against 16 at twelve months, not a significant difference.',
      cites: [CITE.rathleff],
    },
    {
      h2: 'What does the 2023 guideline recommend for plantar fasciitis?',
      paragraphs: [
        'The 2023 guideline for plantar fasciitis grades each option by the strength of its evidence. A is the top grade. A grade marked “against” means the guideline advises not to use that option.',
      ],
      table: {
        head: ['Option', 'Grade'],
        rows: [
          ['Plantar fascia and calf stretching', '**A**'],
          ['Manual therapy (hands-on work on the joints and soft tissue of the leg and foot), from a clinician', '**A**'],
          ['Taping alongside other physical therapy, for better pain and function over up to 6 weeks', '**A**'],
          ['Night splints for 1 to 3 months, if your first steps each morning keep hurting', '**A**'],
          ['Resistance and strength training', '**B**'],
          ['Low-level laser therapy and dry needling, from a clinician', '**B**'],
          ['Orthotics on their own, for short-term pain relief', '**B against**'],
          ['Orthotics combined with other care', '**C**'],
          ['Therapeutic ultrasound added to stretching', '**A against**'],
        ],
      },
      cites: [CITE.guideline],
    },
    {
      h2: 'What happens when the heel stops hurting?',
      paragraphs: [
        `When heel pain stops, Walkito keeps going at a lower dose, because heel pain can come back. Once you reach the pain-free mornings goal (morning pain at or under 1/10 for ${PROGRAM.painFreeDays} days in a row), that goal moves to maintaining and the next goal takes its place.`,
        'If your arches are flat as well, the arch has its own exercises and its own timeline: see [exercises for flat feet](/flat-feet-exercises/). Questions about the app itself are answered in [the FAQ](/faq/).',
      ],
    },
  ],
  faq: [
    {
      q: 'Can I keep running with plantar fasciitis?',
      a: 'You don’t have to stop everything. Change the load instead. The 2023 clinical guideline recommends learning to adjust the load on your feet, graded E, which means it comes from theory, not trials. Cut back whatever makes the heel worse and keep stretching every day. If your first steps the next morning are clearly worse, the run was too much. Sharp or worsening pain needs a clinician.',
    },
    {
      q: 'Why is heel pain worse in the morning?',
      a: 'Heel pain on the first steps after sleep or sitting is the pattern most often linked to plantar fasciitis. The usual explanation is that the tissue under the foot stiffens at rest, then gets loaded suddenly by those first steps. That is why the plantar fascia stretch is done before you stand up, and why the 2023 guideline gives night splints an A for it.',
    },
    {
      q: 'Is stretching or strengthening better for plantar fasciitis?',
      a: 'Both help, and strengthening works faster. In a trial of 48 people, heavy heel raises were clearly ahead of stretching at three months, but by twelve months the two groups were even. The 2023 guideline gives stretching an A and strength training a B. [The evidence page](/science/) has the details.',
    },
    {
      q: 'Is a heel spur the same as plantar fasciitis?',
      a: 'Not exactly. People often say “heel spur” when they mean plantar fasciitis, but strictly a heel spur is a bony growth that shows on an X-ray. Plantar fasciitis is pain from the band of tissue under the foot. The exercises on this page are the ones the 2023 guideline grades for heel pain under the foot. Only a clinician can say what is behind yours.',
    },
    {
      q: 'How often should I do plantar fasciitis exercises?',
      a: `Stretch on most days and do the calf strength work on strength days. In Walkito you choose ${DAYS} training days a week, and every week has three strength days, never two in a row. The stretches come in most sessions, with the first plantar fascia stretch before your foot touches the floor. In the trial Walkito follows, the heel raises were done every other day.`,
    },
    {
      q: 'When should I see a doctor about heel pain?',
      a: 'See a clinician first if the pain followed an injury or a fall, you can’t put weight on the foot, or it comes with numbness, tingling, swelling, warmth or fever. The same applies if it wakes you at night, is sharp or getting worse, or hurts when you squeeze the heel, which can mean a stress fracture. Walkito doesn’t diagnose.',
    },
  ],
  redFlags: RED_FLAGS,
  program: {
    h2: 'Doing it as a plan',
    text: `You don’t have to work out the order, the doses or how long to stay on each exercise. Walkito builds a plan one week at a time around one goal. For heel pain, the first goal is a better morning: pain at or under 1/10 for ${PROGRAM.painFreeDays} days in a row.`,
    more: [
      `You pick ${DAYS} days a week and sessions of ${MINUTES} minutes. Every ${PROGRAM.testEveryDays} days (then every ${PROGRAM.testEveryDaysAfterGoal} once that goal is met), a short test checks calf endurance, arch hold and balance, so you can see what’s changing.`,
    ],
    cta: `Start with ${PROGRAM.sessionMinutes[0]} minutes a day.`,
  },
  crumb: 'Plantar fasciitis exercises',
  campaign: 'guide-heel-pain',
};
