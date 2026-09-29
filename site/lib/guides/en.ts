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
    'Short-foot, toe, balance and hip exercises for flexible flat feet and fallen arches, with starting doses, what the trials found, and where arch pain fits.',
  h1: 'Flat feet exercises for fallen arches and arch pain',
  lede: 'If your flat feet are flexible (the arch comes back when the foot is off the ground), the exercises tested in a trial are short-foot training, hip strengthening and stretching, done together: six weeks of them changed arch measures more than control. Give it time: a 2024 meta-analysis of short-foot training found no significant effect overall, and an improvement in navicular drop only in programs longer than six weeks. Those trials measured arch shape, not pain; if the pain is near the heel, the evidence for plantar fasciitis (stretching and strength work) is the better guide.',
  takeaways: [
    'The randomised trial behind these exercises was run on flexible flat feet, where the arch reappears when the foot is off the ground.',
    'In a trial of 52 people, a six-week program improved navicular drop by 0.4 cm and arch angle by 16 degrees more than control.',
    'A 2024 meta-analysis found no significant overall effect of short-foot training; only in the subgroup of programs longer than six weeks did navicular drop improve.',
    'A rigid flat foot, flat even off the ground, is structural, and exercise will not change it.',
    'Those results measure arch shape, not pain; for plantar heel pain, the 2023 guideline grades stretching A and strength training B.',
  ],
  sections: [
    {
      h2: 'First, check: flexible or rigid?',
      paragraphs: [
        'Look at your foot while you stand, then lift it off the floor or rise onto your toes. If the arch reappears, the flat foot is **flexible**, the kind the randomised trial on this page was run on. The 2024 meta-analysis pooled studies of flat feet in general.',
        'If the arch stays flat even off the ground, it is rigid. That is a structural issue exercise will not change, and it is worth seeing a clinician rather than starting a program. Walkito does not check your foot type, so this check is yours: with a rigid foot, leave the arch-hold goal aside and see a clinician first.',
        '“Fallen arches” is usually just another name for flat feet. One arch that has flattened **suddenly**, on one side, as an adult is different: see a clinician before exercising it.',
      ],
    },
    {
      h2: 'The exercises, with starting doses',
      paragraphs: [
        'These are the exercises Walkito uses for the arch, at the doses it starts from: a starting point, not a prescription. Short-foot work, hip strengthening and stretching are what the trial tested; toe spreading and single-leg balance are Walkito’s own additions. Do them barefoot. [How these guides are written](/about/).',
      ],
      exercises: [
        {
          name: 'Short foot, seated',
          dose: '3 × 10, hold 5 s, each foot',
          how: 'Foot flat on the floor. Pull the ball of the foot toward the heel so the arch lifts. Don’t curl the toes; that is the most common way to do it wrong.',
        },
        {
          name: 'Short foot, standing',
          dose: '3 × 10, hold 5 s',
          how: 'The same movement with your weight on both feet. Toes stay flat and long; only the arch lifts.',
        },
        {
          name: 'Short foot, one leg',
          dose: '3 × 10, hold 5 s, each foot',
          how: 'Standing on one foot. Keep the big toe down: if it lifts, the arch is cheating. One foot at a time is where the weaker side shows.',
        },
        {
          name: 'Toe spread',
          dose: '3 × 10, hold 5 s',
          how: 'Spread the toes as wide as they go and hold. Toes that can spread share the load with the arch; lifting them is not the point.',
        },
        {
          name: 'Single-leg hold',
          dose: '3 × 30 s, each leg',
          how: 'Stand on one foot and look at one fixed spot. Let the foot wobble. It is meant to; that is the foot doing the balancing.',
        },
        {
          name: 'Hip abduction',
          dose: '3 × 15, each side',
          how: 'Lying on your side, lift the top leg out to the side, leading with the heel rather than the toes. A hip that gives way lands the load on the arch.',
        },
        {
          name: 'Calf and soleus stretch',
          dose: '3 × 30 s each, each leg',
          how: 'Hands on a wall, back leg straight, heel down, hips forward. Then bend the back knee until you feel it lower, near the heel: that is the deeper soleus.',
        },
      ],
    },
    {
      h2: 'How long before the arch changes?',
      paragraphs: [
        'In a randomised trial of 52 people with **flexible** flat feet, a six-week program of foot shortening, ankle work, hip strengthening and stretching improved navicular drop by **0.4 cm** and arch angle by **16 degrees** more than the control group.',
        'A 2024 meta-analysis of short-foot training found **no significant difference overall** in navicular drop or foot posture compared with controls. Only in the subgroup of programs **longer than six weeks** did navicular drop improve significantly, and the authors say larger studies are needed. Plan for at least six weeks, and more if you are doing short-foot work on its own.',
        `That is one reason Walkito’s plan has no end date. Its arch goal (holding the arch for ${PROGRAM.goals.archHoldSeconds} seconds) stays in the plan until it is reached, however many weeks that takes, and the arch hold is measured every ${PROGRAM.testEveryDays} days until your first goal is reached, then every ${PROGRAM.testEveryDaysAfterGoal}, so you can see whether it is moving. The trials themselves are summarised on [the evidence page](/science/).`,
      ],
      cites: [CITE.brijwasi, CITE.cheng],
    },
    {
      h2: 'Pain under the arch of the foot',
      paragraphs: [
        'The results above are measures of arch shape (navicular drop and arch angle), not of pain. They show the arch can be trained; they are not evidence that the same exercises relieve an aching arch.',
        'None of the studies cited here measured pain under the arch. Pain at the heel, and sometimes along the arch, can come from the plantar fascia, the band of tissue that runs along the sole. If yours is near the heel, the 2023 heel pain guideline is the better guide: it grades plantar fascia and calf stretching **A** and strength training **B** for plantar heel pain. The exercises are in [plantar fasciitis exercises and stretches](/plantar-fasciitis-exercises/).',
        'Walkito can work on both at once, as separate goals: pain-free mornings for the pain, an arch hold for the arch. How the two share a week is on [the plan page](/program/).',
      ],
      cites: [CITE.guideline],
    },
  ],
  faq: [
    {
      q: 'Can exercises change flat feet?',
      a: 'Flexible flat feet can change measurably; rigid ones cannot. In a randomised trial of 52 people whose arch reappeared off the ground, a six-week program improved navicular drop by 0.4 cm and arch angle by 16 degrees more than control. A foot that stays flat even when lifted is structural, and exercise will not change its shape.',
    },
    {
      q: 'How long does it take for flat feet exercises to work?',
      a: 'Six weeks or more, going by the trials. A six-week program combining short-foot, hip and stretching work changed arch measures in one randomised trial. For short-foot training alone, a 2024 meta-analysis found no significant effect overall, and an improvement in navicular drop only in programs longer than six weeks. Walkito keeps its 60-second arch-hold goal until it is reached.',
    },
    {
      q: 'What helps pain under the arch of the foot?',
      a: 'No study cited here measured arch pain, so there is no direct evidence here. If the pain is near the heel and linked to the plantar fascia, the 2023 heel pain guideline grades plantar fascia and calf stretching A and strength training B. The arch exercises on this page train arch shape, not pain; see [plantar fasciitis exercises](/plantar-fasciitis-exercises/).',
    },
    {
      q: 'Are fallen arches the same as flat feet?',
      a: 'Usually, yes: “fallen arches” is a common name for flat feet. What matters more is whether the foot is flexible, with an arch that reappears off the ground, or rigid. The trial on this page was run on flexible flat feet. An arch that has flattened suddenly on one side as an adult should be seen by a clinician first.',
    },
    {
      q: 'How often should I do flat feet exercises?',
      a: `On each training day while the arch is your focus. In Walkito you choose ${DAYS} training days a week, and while the arch is the week’s focus goal, every session includes an arch exercise, one level harder at a time. The arch hold is retested every ${PROGRAM.testEveryDays} days, then every ${PROGRAM.testEveryDaysAfterGoal} after your first goal.`,
    },
    {
      q: 'When should I see a doctor about flat feet?',
      a: 'See a clinician before starting if the arch stays flat when the foot is off the ground, if one arch has flattened suddenly as an adult, or if the pain followed an injury, wakes you at night or comes with numbness, tingling, swelling or warmth. Pain that is sharp or getting worse also needs a clinician rather than more exercise.',
    },
  ],
  redFlags: {
    h2: RED_FLAGS.h2,
    bullets: [...RED_FLAGS.bullets, 'the arch stays flat when the foot is off the ground'],
  },
  program: {
    h2: 'Doing it as a plan',
    text: `Walkito builds these into a plan one week at a time, around one focus goal; for a flexible flat foot, that includes holding the arch for ${PROGRAM.goals.archHoldSeconds} seconds. You choose ${DAYS} training days a week and sessions of ${MINUTES} minutes. Every ${PROGRAM.testEveryDays} days until your first goal is reached, then every ${PROGRAM.testEveryDaysAfterGoal}, it retests the arch hold, calf raises and single-leg balance, so you can see whether the arch work is doing anything rather than guess. A goal you reach moves to maintaining and the next one takes its place. [How the plan works](/program/).`,
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
  lede: 'Your first steps out of bed are the worst part of the day. A sharp pull right at the heel, before you’ve even had coffee. It eases once you’re moving, then comes back after you sit for a while. That pattern has a name, plantar fasciitis, and the 2023 clinical guideline for heel pain calls it the most commonly recognised cause of heel pain under the foot.',
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
        'The exercises for plantar fasciitis in Walkito are three stretches and one strength exercise, shown here at the doses Walkito starts from. They are a starting point, not a prescription. [How these guides are written](/about/).',
        'Order matters. Walkito starts with the stretches and the seated work. The towel heel raise loads the plantar fascia the hardest, so it comes later and is reached one level at a time. If any exercise takes your pain to **6/10 or more**, stop for the day. That is the point where Walkito ends a session.',
      ],
      table: {
        head: ['Exercise', 'Dose', 'How often', 'What you should feel', 'Stop if'],
        rows: [
          ['Plantar fascia stretch', '10 holds of 10 seconds, each foot', 'Every day, the first one before you stand up', 'A stretch along the arch, not the calf', 'Pain reaches 6/10'],
          ['Calf stretch', '3 holds of 30 seconds, each leg', 'Every day', 'A stretch in the calf of the straight back leg', 'Pain reaches 6/10'],
          ['Soleus stretch', '3 holds of 30 seconds, each leg', 'Every day', 'A stretch low in the calf, near the heel', 'Pain reaches 6/10'],
          ['Heel raises with a towel', '3 sets of 12, each leg', 'Every other day', 'Hard work in the calf and a pull under the arch', 'Pain reaches 6/10. Skip them on a bad morning.'],
        ],
      },
      exercises: [
        {
          name: 'Plantar fascia stretch',
          dose: '10 holds of 10 seconds, each foot',
          often: 'Every day',
          feel: 'A stretch along the arch',
          how: 'Sit down and cross the foot over the other knee. Pull the toes back until you feel the stretch in the arch, not the calf. Do the first one on the edge of the bed, before your first steps.',
          image: 'Exercise: plantar fascia stretch',
        },
        {
          name: 'Calf stretch',
          dose: '3 holds of 30 seconds, each leg',
          often: 'Every day',
          feel: 'A stretch in the calf',
          how: 'Put your hands on a wall. Keep the back leg straight, the heel down and the hips forward. A tight calf pulls on the heel all day, so this stretch matters even though you feel it higher up.',
          image: 'Exercise: calf stretch',
        },
        {
          name: 'Soleus stretch',
          dose: '3 holds of 30 seconds, each leg',
          often: 'Every day',
          feel: 'A stretch near the heel',
          how: 'Take the same position, then bend the back knee until you feel the stretch lower down, near the heel. The soleus, the deeper calf muscle, only lets go with the knee bent.',
          image: 'Exercise: soleus stretch',
        },
        {
          name: 'Heel raises with a towel',
          dose: '3 sets of 12, each leg',
          often: 'Every other day',
          feel: 'Hard work in the calf',
          how: 'Stand on one foot on a step, with a rolled towel under your toes. Take three seconds to rise, hold for two at the top, and take three seconds to lower. The towel is what makes this exercise work the plantar fascia and not just the calf.',
          image: 'Exercise: heel raises with a towel',
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
        'On a bad morning, keep the stretches and drop the heel raises for the day. The next morning tells you how it went. If your first steps are clearly worse after a run, that run was more than the heel could take. Walkito reads it the same way. A big day on your feet turns the next strength session into a lighter recovery one, and a painful morning makes the session shorter without cancelling it.',
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
      a: `Stretch every day and do the strength work every other day. The plantar fascia and calf stretches are daily, with the first fascia stretch before your first steps. The towel heel raises are done every other day, as in the trial Walkito follows. In Walkito you choose ${DAYS} training days a week, and strength days never fall back to back.`,
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
