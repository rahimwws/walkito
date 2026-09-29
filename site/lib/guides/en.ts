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
  title: 'Flat Feet Exercises for Fallen Arches and Arch Pain',
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

export const HEEL_PAIN_EN: Guide = {
  lang: 'en',
  page: 'heelPain',
  published: '2026-09-24',
  updated: '2026-09-28',
  title: 'Plantar Fasciitis Exercises & Stretches for Heel Pain',
  description:
    'Heel raises, plantar fascia and calf stretches for heel pain and morning heel pain, with starting doses and what the 2023 clinical guideline recommends.',
  h1: 'Plantar fasciitis exercises and stretches for heel pain',
  lede: 'For heel pain from plantar fasciitis, the 2023 clinical guideline gives its top grade, A, to plantar fascia and calf stretching, and a B to strength training. In a trial of 48 people, all wearing shoe inserts, slow single-leg heel raises with a towel under the toes improved pain and function faster than stretching, though by twelve months the two groups had caught up with each other. Doing both is what the guideline supports.',
  takeaways: [
    'The 2023 JOSPT heel pain guideline grades plantar fascia and calf stretching A and strength training B.',
    'In a trial of 48 people, all wearing shoe inserts, high-load heel raises scored 29 points lower on the Foot Function Index than stretching at three months; by twelve months the groups had converged, so strength work brought improvement forward rather than making it bigger.',
    'On load, the same guideline’s advice is education on modifying weight-bearing activity, graded E, meaning theoretical rather than trial evidence.',
    'Heel pain after an injury, with numbness or swelling, that wakes you at night, or that hurts when you squeeze the heel needs a clinician first.',
  ],
  sections: [
    {
      h2: 'The exercises, with starting doses',
      paragraphs: [
        'These are the exercises Walkito uses for heel pain, at the doses it starts from: a starting point, not a prescription. [How these guides are written](/about/).',
        'Order matters. Walkito starts with the stretches and seated work; the towel heel raise, which loads the fascia hardest, comes later and is reached one level at a time. If any exercise pushes your pain to **6/10 or more**, stop for the day. That is where Walkito ends a session.',
      ],
      exercises: [
        {
          name: 'Plantar fascia stretch',
          dose: '10 × 10 s, each foot, the first before you stand up',
          how: 'Sitting, cross the foot over the other knee and pull the toes back until you feel the stretch in the arch, not the calf.',
        },
        {
          name: 'Calf stretch',
          dose: '3 × 30 s, each leg',
          how: 'Hands on a wall, back leg straight, heel down, hips forward. A tight calf pulls on the heel all day.',
        },
        {
          name: 'Soleus stretch',
          dose: '3 × 30 s, each leg',
          how: 'The same position, with the back knee bent until you feel it lower, near the heel. The deeper calf muscle only lets go with the knee bent.',
        },
        {
          name: 'Heel raises with a towel',
          dose: '3 × 12, each leg, every other day',
          how: 'On a step, on one foot, with a rolled towel under the toes. Three seconds up, two held at the top, three down. The towel is what makes this load the fascia rather than just the calf.',
        },
      ],
    },
    {
      h2: 'Morning heel pain: the first steps',
      paragraphs: [
        'Pain on the first steps after getting up, or after sitting for a while, is the pattern most often linked to plantar fasciitis. It often eases once you get moving, and comes back after the next long rest.',
        'Two things on this page are aimed at it. The plantar fascia stretch is done **before you stand up** (on the edge of the bed, toes pulled back), so the first steps are not the first stretch. And the 2023 guideline grades night splints, worn for 1–3 months, **A** for people who consistently have pain on their first steps in the morning; that is one to discuss with a clinician, and not something Walkito provides.',
        'Walkito asks for your morning pain every day for the same reason: it is the most direct reading of how the foot coped with yesterday, and it decides how much today’s session asks.',
      ],
      cites: [CITE.guideline],
    },
    {
      h2: 'Heel pain when running: rest or keep going?',
      paragraphs: [
        'Change the load rather than stopping everything. The 2023 guideline’s advice on this is education on strategies to modify weight-bearing load at work, in sport and in daily life, graded E, meaning it is based on theoretical rather than trial evidence. In practice: keep the stretches every day, and cut back whatever makes the heel worse.',
        'On a bad morning, keep the stretches and drop the heel raises for the day. The next morning is the check: if your first steps are clearly worse after a run, that run was more than the heel could take. Walkito reads it the same way: a big day on your feet yesterday turns today’s strength session into a lighter recovery one, and a high-pain morning shrinks the session rather than cancelling it.',
        'If running hurts sharply, or the pain is getting worse week on week, stop and see a clinician rather than training through it. The same goes for pain that builds during runs after you increased your mileage, or that hurts when you squeeze the sides of the heel: both can be signs of a stress fracture, one of the other causes of heel pain the guideline names.',
      ],
      cites: [CITE.guideline],
    },
    {
      h2: 'Strength or stretching?',
      paragraphs: [
        'In a randomised trial of 48 people with plantar fasciitis confirmed by ultrasound, both groups wore shoe inserts; one added high-load heel raises every other day, the other daily plantar-specific stretching. At three months the strength group scored **29 points lower** on the Foot Function Index (95% CI 6–52, p = 0.016).',
        'At twelve months the two groups had converged: 22 against 16, no significant difference. Strength work brings improvement **forward**; it does not make it bigger. Doing both is what the guideline supports. The study-by-study reasoning is on [the evidence page](/science/).',
      ],
      cites: [CITE.rathleff],
    },
    {
      h2: 'What the 2023 guideline recommends, and against: the main grades',
      bullets: [
        'Plantar fascia and calf stretching: **grade A**',
        'Manual therapy to the joints and soft tissue of the lower limb, from a clinician: **grade A**',
        'Taping alongside other physical therapy, for short-term (up to 6 weeks) improvement in pain and function: **grade A**',
        'Night splints for 1–3 months, for people who consistently have pain on their first steps in the morning: **grade A**',
        'Resistance and strength training: **grade B**',
        'Low-level laser therapy and dry needling, from a clinician: **grade B**',
        'Orthotics on their own, for short-term pain relief: **grade B against**',
        'Orthotics combined with other treatment: **grade C**',
        'Therapeutic ultrasound added to stretching: **grade A against**',
      ],
      cites: [CITE.guideline],
    },
    {
      h2: 'When the heel stops hurting',
      paragraphs: [
        `Heel pain can come back, so Walkito does not stop when the pain does. Once its pain-free mornings goal is reached (morning pain at or under 1/10 for ${PROGRAM.painFreeDays} days running), that goal moves to maintaining, kept going at a lower dose, and the next goal takes its place.`,
        'If your arches are flat as well, the arch has its own exercises and its own timeline: see [exercises for flat feet](/flat-feet-exercises/). Questions about the app itself are answered in [the FAQ](/faq/).',
      ],
    },
  ],
  faq: [
    {
      q: 'Can I keep running with plantar fasciitis?',
      a: 'You don’t have to stop everything: change the load instead. The 2023 clinical guideline includes education on modifying weight-bearing load, graded E (theoretical rather than trial evidence). Cut back what makes the heel worse and keep stretching daily. If your first steps next morning are clearly worse, the run was too much. Sharp or worsening pain needs a clinician.',
    },
    {
      q: 'Why is heel pain worse in the morning?',
      a: 'First-step pain after sleep or sitting is the pattern most often linked to plantar fasciitis; the usual explanation is that the tissue under the foot stiffens at rest and is loaded suddenly by the first steps. That is why the fascia stretch is done before standing up, and why the 2023 guideline grades night splints A for it.',
    },
    {
      q: 'Is stretching or strengthening better for plantar fasciitis?',
      a: 'Both, and strengthening works faster. In a trial of 48 people, high-load heel raises scored 29 points lower on the Foot Function Index than stretching at three months, but by twelve months the groups had converged. The 2023 guideline grades stretching A and strength training B. [The evidence page](/science/) has the details.',
    },
    {
      q: 'Is a heel spur the same as plantar fasciitis?',
      a: 'Not exactly. “Heel spur” is often used loosely for plantar fasciitis, but strictly it means a bony growth seen on an X-ray, while plantar fasciitis describes pain from the band of tissue under the foot. The exercises on this page are the ones the 2023 guideline grades for plantar heel pain; only a clinician can say what is behind yours.',
    },
    {
      q: 'How often should I do plantar fasciitis exercises?',
      a: `Stretch daily and strengthen every other day. The plantar fascia and calf stretches are daily work, with the first fascia stretch before your first steps. The towel heel raises follow the trial Walkito uses, done every other day. In Walkito you choose ${DAYS} training days a week, and strength days never fall back to back.`,
    },
    {
      q: 'When should I see a doctor about heel pain?',
      a: 'See a clinician first if the pain followed an injury or a fall, you cannot put weight on the foot, or it comes with numbness, tingling, swelling, warmth or fever. The same applies if it wakes you at night, is sharp or getting worse, or hurts when you squeeze the heel (a possible stress fracture). Walkito does not diagnose.',
    },
  ],
  redFlags: RED_FLAGS,
  program: {
    h2: 'Doing it as a plan',
    text: `Walkito turns this into a plan built one week at a time around one focus goal; with heel pain, the first is pain-free mornings: morning pain at or under 1/10 for ${PROGRAM.painFreeDays} days running. You choose ${DAYS} training days a week and sessions of ${MINUTES} minutes. A bad morning shortens and softens the day; a good one never speeds it up. Every ${PROGRAM.testEveryDays} days until your first goal is reached, then every ${PROGRAM.testEveryDaysAfterGoal}, it retests calf endurance, arch hold and single-leg balance. [How the plan works](/program/).`,
  },
  crumb: 'Plantar fasciitis exercises',
  campaign: 'guide-heel-pain',
};
