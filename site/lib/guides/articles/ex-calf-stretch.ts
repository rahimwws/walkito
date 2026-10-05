import { CITE } from '@/lib/citations';
import type { Guide } from '../types';

/*
 * ── New citations (append to CITATIONS[] in lib/citations.ts) ──────────
 *
 * siriphorn
 *   Siriphorn A, Eksakulkla S. Calf stretching and plantar fascia-specific
 *   stretching for plantar fasciitis: a systematic review and meta-analysis.
 *   Journal of Bodywork and Movement Therapies. 2020;24(4):222–232.
 *   doi: 10.1016/j.jbmt.2020.06.013 | PMID: 33218515 | Systematic review
 *   and meta-analysis
 */

export const EX_CALF_STRETCH: Guide = {
  lang: 'en',
  page: 'exCalfStretch',
  published: '2026-10-05',
  updated: '2026-10-05',
  title: 'Calf Stretch for Plantar Fasciitis: Technique & Dose',
  description:
    'How to do the calf stretch (straight knee) for plantar fasciitis and tight calves: technique, sets, hold time, and what the evidence says.',
  h1: 'Calf stretch for plantar fasciitis: technique, sets and hold time',
  lede:
    'The calf stretch with a straight knee targets the gastrocnemius, the large outer calf muscle. A tight gastrocnemius limits how far the ankle bends, and in a case-control study of 50 people with plantar fasciitis and 100 controls, reduced ankle dorsiflexion was the strongest independent risk factor. The 2023 heel pain guideline gives calf stretching its top grade, A.',
  takeaways: [
    'Reduced ankle dorsiflexion was the strongest independent risk factor for plantar fasciitis in a matched case-control study, at 23.3 times the odds (Riddle and colleagues, 2003).',
    'In a series of 254 people with plantar fasciitis, 52 to 60 percent had a contracture isolated to the gastrocnemius (Patel and DiGiovanni, 2011).',
    'The 2023 heel pain guideline grades plantar fascia and calf stretching A, its top grade (Koc and colleagues, 2023).',
    'A 2020 meta-analysis found a large treatment effect for calf and plantar fascia stretching, though evidence quality ranged from moderate to very low (Siriphorn and Eksakulkla, 2020).',
    'Walkito starts at 3 holds of 30 seconds, each leg.',
  ],
  toc: false,
  sections: [
    {
      h2: 'How do you do a calf stretch with a straight knee?',
      paragraphs: [
        'Stand facing a wall with your hands flat against it at about shoulder height. Step one foot back about two feet. Keep the back leg straight, the heel pressed into the floor and the toes pointing forward. Lean your hips toward the wall until you feel a stretch in the upper part of the back calf. Hold for 30 seconds, then switch legs.',
        'The key is keeping the back knee locked straight. That isolates the gastrocnemius, which crosses both the knee and the ankle. If you bend the knee, the stretch shifts to the soleus, the deeper calf muscle, and that is a different exercise. See [soleus stretch](/exercises/soleus-stretch/) for that version.',
      ],
      exercises: [
        {
          name: 'Calf stretch (straight knee)',
          evidence: {
            level: 'strong',
            why: 'The 2023 guideline grades calf stretching A. Tight calf was the strongest PF risk factor in a 2003 case-control study.',
          },
          dose: 'Walkito starts at 3 holds of 30 seconds, each leg',
          how: 'Hands on a wall. Step one foot back, keep that knee straight and the heel down. Lean the hips forward until you feel a stretch in the upper calf. Hold 30 seconds.',
          often: 'Most sessions',
          feel: 'A stretch in the upper calf of the back leg',
          stop: 'Pain reaches 6/10',
          media: 'calf_stretch_straight',
          caption: 'Calf stretch: back leg straight, heel down, hips forward',
          alt: 'A figure leaning on a wall with the back leg straight, the calf highlighted',
        },
      ],
      cites: [CITE.guideline, CITE.riddle],
    },
    {
      h2: 'Why does a tight calf muscle cause heel pain?',
      paragraphs: [
        'The gastrocnemius runs from behind the knee down to the heel through the Achilles tendon. The plantar fascia picks up where the Achilles leaves off, wrapping under the heel bone and running forward to the toes. When the gastrocnemius is tight, it limits how far the ankle can bend upward. That forces the plantar fascia to absorb more strain with every step.',
        'In a matched case-control study of 50 people with plantar fasciitis and 100 controls, reduced ankle dorsiflexion raised the odds of plantar fasciitis 23.3 times. That was stronger than BMI, standing time or any other variable in the study.',
        'Separately, a review of 254 people with plantar fasciitis found that 52 to 60 percent had a contracture isolated to the gastrocnemius, and another 23 to 30 percent had a combined gastrocnemius-soleus contracture. In other words, a tight calf is not a side issue. It is present in most people with this condition.',
      ],
      cites: [CITE.riddle, CITE.patelGastrocnemius],
    },
    {
      h2: 'Does the calf stretch help plantar fasciitis?',
      paragraphs: [
        'The 2023 heel pain guideline reviewed the available stretching studies and gave plantar fascia and calf stretching a grade of **A**, its highest. That grade covers both the plantar fascia stretch and the calf stretch together, because most protocols include both.',
        'A 2020 systematic review and meta-analysis pooled the stretching trials and found a large treatment effect for both calf stretching and plantar fascia stretching. The authors rated the evidence quality as moderate to very low and called for higher-quality trials. Even so, the effect size was large and comparable to other interventions.',
        'No single trial isolates the straight-knee calf stretch on its own for plantar fasciitis. It is always tested as part of a program. The guideline recommends it alongside the [plantar fascia stretch](/exercises/plantar-fascia-stretch/) and strength work like [calf raises](/exercises/calf-raises/).',
      ],
      cites: [CITE.guideline, CITE.siriphorn],
    },
    {
      h2: 'Common mistakes with the calf stretch',
      paragraphs: [
        'Bending the back knee. The moment the knee bends, the gastrocnemius goes slack and the stretch moves to the soleus. Keep the back knee locked straight throughout the hold.',
        'Letting the back heel lift. If the heel comes off the floor, the calf is not being stretched. Press the heel down first, then lean forward until the stretch appears.',
        'Turning the back foot outward. When the foot rotates out, the stretch hits the outside of the calf instead of the full muscle. Keep the toes pointed straight at the wall.',
        'Holding too short. A 10-second hold is not long enough for a sustained stretch to have an effect on tissue length. Hold for at least 30 seconds per rep.',
      ],
    },
    {
      h2: 'Who should do this stretch and who should skip it?',
      paragraphs: [
        'This stretch is relevant for anyone with heel pain, plantar fasciitis, tight calves from standing all day or a sport that loads the calf, like running. It appears in the exercise lists for [plantar fasciitis exercises](/plantar-fasciitis-exercises/), [feet that hurt from standing](/feet-hurt-standing-all-day/) and [heel pain from running](/heel-pain-runners/).',
        'Skip it or modify it if you have an Achilles tendon problem that is actively painful during the stretch. In that case, the pain is coming from a different structure, and loading the Achilles through a wall stretch may not be the right starting point. See [Achilles tendonitis exercises](/achilles-tendonitis-exercises/) for the Achilles-specific approach.',
        'If you cannot reach the wall or stand comfortably, a seated towel stretch gives a similar pull on the calf. Loop a towel around the ball of the foot, keep the knee straight and pull the toes toward you.',
      ],
    },
    {
      h2: 'How the calf stretch fits with the soleus stretch',
      paragraphs: [
        'The gastrocnemius and the soleus together make up the calf. The straight-knee version stretches the gastrocnemius. The bent-knee version stretches the soleus. They are two exercises, not two versions of the same one.',
        'Most programs for plantar fasciitis include both, because a tight calf can be tight in either muscle or both. The guideline does not separate them. Walkito programs both on the same session when stretching is on the schedule. The [soleus stretch](/exercises/soleus-stretch/) page covers the bent-knee version. For the full stretching and strength program, see [plantar fasciitis exercises](/plantar-fasciitis-exercises/).',
      ],
      cites: [CITE.guideline],
    },
  ],
  faq: [
    {
      q: 'How long should you hold a calf stretch for plantar fasciitis?',
      cites: [CITE.guideline],
      a: 'Most protocols use 30-second holds, and that is what Walkito starts with. The 2023 guideline recommends calf stretching without specifying a single hold duration, but most of the trials it draws from used 30 seconds per hold, repeated 2 to 3 times per leg.',
    },
    {
      q: 'Should you stretch your calves every day for plantar fasciitis?',
      cites: [CITE.guideline],
      a: 'The 2023 guideline recommends calf and plantar fascia stretching as part of daily self-care for plantar fasciitis. Walkito schedules calf stretches on most sessions. The stretch is low-load and low-risk, so daily is reasonable as long as it stays below 6/10 pain.',
    },
    {
      q: 'What is the difference between a calf stretch and a soleus stretch?',
      cites: [CITE.patelGastrocnemius],
      a: 'The calf stretch with a straight knee targets the gastrocnemius, the large outer calf muscle. The soleus stretch bends the back knee, which lets the gastrocnemius go slack and isolates the deeper soleus. Both muscles were found to be tight in the majority of people with plantar fasciitis (Patel and DiGiovanni, 2011).',
    },
    {
      q: 'Can tight calves cause plantar fasciitis?',
      cites: [CITE.riddle, CITE.patelGastrocnemius],
      a: 'A tight calf limits ankle dorsiflexion, and that was the strongest independent risk factor for plantar fasciitis in a case-control study (23.3 times the odds). Separately, 52 to 60 percent of 254 people with plantar fasciitis had an isolated gastrocnemius contracture. A tight calf does not guarantee plantar fasciitis, but it raises the odds substantially.',
    },
  ],
  redFlags: {
    h2: 'Stop and see a clinician if',
    bullets: [
      'the pain is in the Achilles tendon itself, not in the calf muscle',
      'you feel a sudden pop or tearing sensation during the stretch',
      'the calf is swollen, red or warm on one side only',
      'the pain followed an injury or a fall',
      'numbness, tingling or burning accompanies the calf tightness',
      'it has not improved after several weeks of daily stretching',
    ],
  },
  program: {
    h2: 'Doing it as a plan',
    text: 'Walkito schedules the calf stretch alongside the soleus stretch and the plantar fascia stretch on most sessions. You pick 3, 5 or 7 days a week and sessions of 3, 5 or 10 minutes. The app moves from stretching into strength work at your pace.',
    more: [
      'Every 14 days, a short test checks calf endurance, arch hold and balance. A tight calf that loosens up over weeks will show as more ankle range on the test. Walkito is an exercise program. It does not diagnose and is not a substitute for a clinician.',
    ],
    cta: 'Start with 3 minutes a day.',
  },
  crumb: 'Calf stretch (gastrocnemius, straight knee)',
  campaign: 'ex-calf-stretch',
};
