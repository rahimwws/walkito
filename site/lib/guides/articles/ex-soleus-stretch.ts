import { CITE } from '@/lib/citations';
import type { Guide } from '../types';

/*
 * No new citations. Uses existing keys:
 * CITE.guideline, CITE.riddle, CITE.patelGastrocnemius, CITE.rathleff
 */

export const EX_SOLEUS_STRETCH: Guide = {
  lang: 'en',
  page: 'exSoleusStretch',
  published: '2026-10-05',
  updated: '2026-10-05',
  title: 'Soleus Stretch (Bent Knee): How to Do It Right',
  description:
    'How to do the soleus stretch (bent knee) for plantar fasciitis and tight calves: technique, why it needs its own stretch, sets and hold time.',
  h1: 'Soleus stretch (bent knee): technique, sets and why it matters',
  lede:
    'The soleus is the deeper calf muscle that sits underneath the gastrocnemius. It only stretches when the knee is bent, because bending the knee takes the gastrocnemius out of the equation. In a series of 254 people with plantar fasciitis, 23 to 30 percent had a combined gastrocnemius-soleus contracture. If you only do the straight-knee stretch, you are missing this muscle entirely.',
  takeaways: [
    'The soleus crosses only the ankle. The gastrocnemius crosses the knee and the ankle. Bending the knee lets the gastrocnemius go slack so the soleus takes the stretch.',
    'In 254 people with plantar fasciitis, 23 to 30 percent had a contracture in both the gastrocnemius and the soleus (Patel and DiGiovanni, 2011).',
    'The 2023 heel pain guideline grades calf stretching A, its top grade, without separating the two calf muscles (Koc and colleagues, 2023).',
    'Walkito starts at 3 holds of 30 seconds, each leg, with the back knee bent.',
  ],
  toc: false,
  sections: [
    {
      h2: 'How do you do a soleus stretch?',
      paragraphs: [
        'Start in the same wall position as the [calf stretch](/exercises/calf-stretch/): hands on a wall, one foot stepped back, heel on the floor. Then bend the back knee. Keep bending until you feel the stretch move lower in the calf, down near the Achilles tendon and the heel. That lower pull is the soleus.',
        'The heel stays on the floor throughout. If the heel lifts, the stretch disappears. You will not feel this one as high in the calf as the straight-knee version. The sensation sits closer to the heel, sometimes just above the back of the ankle. Hold for 30 seconds, then switch.',
      ],
      exercises: [
        {
          name: 'Soleus stretch (bent knee)',
          evidence: {
            level: 'strong',
            why: 'The 2023 guideline grades calf stretching A. Targets the deeper muscle missed by the straight-knee calf stretch.',
          },
          dose: 'Walkito starts at 3 holds of 30 seconds, each leg',
          how: 'Hands on a wall, one foot back, heel down. Bend the back knee until you feel a stretch low in the calf, near the heel. Hold 30 seconds.',
          often: 'Most sessions, paired with the straight-knee calf stretch',
          feel: 'A stretch low in the calf, near the Achilles tendon',
          stop: 'Pain reaches 6/10',
          media: 'calf_stretch_bent',
          caption: 'Soleus stretch: bend the back knee until the stretch moves lower',
          alt: 'A figure in a split stance leaning on a wall with the back knee bent, the lower calf highlighted',
        },
      ],
      cites: [CITE.guideline],
    },
    {
      h2: 'Why does the soleus need its own stretch?',
      paragraphs: [
        'The gastrocnemius, the outer calf muscle, crosses both the knee and the ankle. When you straighten the knee and lean forward, it takes the stretch. The soleus sits deeper and crosses only the ankle. With a straight knee, the gastrocnemius does all the work and the soleus barely moves.',
        'Bending the knee puts slack into the gastrocnemius so it stops resisting. Now the ankle dorsiflexion pulls on the soleus instead. That is the whole point of the bent-knee version. It is not a modification. It is a separate exercise for a separate muscle.',
        'In a review of 254 people with plantar fasciitis, about a quarter had both muscles tight. The straight-knee stretch alone would not have reached the soleus portion of that tightness.',
      ],
      cites: [CITE.patelGastrocnemius],
    },
    {
      h2: 'How do you know if the stretch is in the right place?',
      paragraphs: [
        'If you feel the stretch high in the calf, behind the knee, the knee is too straight and the gastrocnemius is taking over. Bend the knee further. The stretch should drop to the lower third of the calf or just above the heel.',
        'If you feel nothing, try stepping the back foot closer to the wall and bending the knee more deeply. Some people need a smaller stance to load the soleus.',
        'If the stretch sits in the Achilles tendon itself and feels sharp rather than like a pull, ease off. A stretch should feel firm and sustained, not painful. Pain in the tendon during stretching is different from calf tightness and may point to [Achilles tendonitis](/achilles-tendonitis-exercises/).',
      ],
    },
    {
      h2: 'Common mistakes with the soleus stretch',
      paragraphs: [
        'Not bending the knee enough. A slight bend is not enough to release the gastrocnemius. You need a real bend, enough that you can see the back knee tracking forward over the toes.',
        'Letting the heel lift. The moment the heel comes off the floor, the stretch vanishes. Press the heel down and let the knee move forward over the foot.',
        'Rushing through it. A 5-second hold is too short for a sustained stretch to affect tissue length. Hold for 30 seconds, and try to relax into the stretch rather than pushing harder.',
        'Skipping it because the straight-knee stretch felt like enough. They are different muscles. If both are tight, you need both stretches.',
      ],
    },
    {
      h2: 'How the soleus stretch fits in a program',
      paragraphs: [
        'Walkito pairs the soleus stretch with the [calf stretch](/exercises/calf-stretch/) and the [plantar fascia stretch](/exercises/plantar-fascia-stretch/) on most sessions. Together, the three stretches cover the main structures that pull on the heel. The order does not matter much, but doing the plantar fascia stretch first, before the first step of the day, is the most commonly repeated instruction.',
        'For the strength side of the calf, see [calf raises for plantar fasciitis](/calf-raises-plantar-fasciitis/) or the individual [calf raise](/exercises/calf-raises/) page. Strength and stretching are recommended together by the 2023 guideline.',
      ],
      cites: [CITE.guideline],
    },
  ],
  faq: [
    {
      q: 'What does the soleus stretch feel like?',
      a: 'A pull low in the calf, near the Achilles tendon, sometimes just above the back of the ankle. It feels different from the straight-knee calf stretch, which sits higher in the calf. If the stretch is high up, the knee is not bent enough and the gastrocnemius is still doing the work.',
    },
    {
      q: 'Is the soleus stretch the same as the calf stretch with a bent knee?',
      a: 'Yes. "Soleus stretch" and "bent-knee calf stretch" are two names for the same exercise. Bending the knee takes the gastrocnemius out of the stretch so that the soleus, the deeper calf muscle, receives the load. The technique is identical.',
    },
    {
      q: 'Do you need to stretch both calf muscles for plantar fasciitis?',
      cites: [CITE.patelGastrocnemius, CITE.guideline],
      a: 'In 254 people with plantar fasciitis, a quarter had both calf muscles tight (Patel and DiGiovanni, 2011). The guideline grades calf stretching A without separating the two. Most plantar fasciitis programs include both the straight-knee and bent-knee versions, because skipping one leaves half the calf untouched.',
    },
    {
      q: 'How often should you do the soleus stretch?',
      cites: [CITE.guideline],
      a: 'Walkito schedules it on most sessions, alongside the calf stretch. The 2023 guideline recommends calf stretching as part of daily self-care for plantar fasciitis. Three holds of 30 seconds per leg takes about three minutes. It is low-load and safe to repeat daily.',
    },
  ],
  redFlags: {
    h2: 'Stop and see a clinician if',
    bullets: [
      'the pain is sharp and localized in the Achilles tendon, not a pull in the muscle',
      'you feel a sudden pop or tearing during the stretch',
      'the calf or ankle is swollen, red or warm on one side',
      'the pain followed an injury or a sudden increase in activity',
      'numbness or tingling runs down the back of the leg',
      'it has not improved after several weeks of daily stretching',
    ],
  },
  program: {
    h2: 'Doing it as a plan',
    text: 'Walkito programs the soleus stretch alongside the calf stretch and the plantar fascia stretch on most sessions. You pick 3, 5 or 7 days a week and sessions of 3, 5 or 10 minutes. The app moves from stretching to strength at your pace, not on a fixed calendar.',
    more: [
      'Every 14 days, a short test checks calf endurance, arch hold and balance. Ankle range that improves over weeks shows the stretching is doing something. Walkito is an exercise program. It does not diagnose and is not a substitute for a clinician.',
    ],
    cta: 'Start with 3 minutes a day.',
  },
  crumb: 'Soleus stretch (bent knee)',
  campaign: 'ex-soleus-stretch',
};
