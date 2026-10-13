import { CITE } from '@/lib/citations';
import type { Guide } from '../types';

/*
 * ── New citations (append to CITATIONS[] in lib/citations.ts) ──────────
 *
 * gooding | Gooding TM, Feger MA, Hart JM, Hertel J. Intrinsic Foot Muscle Activation During Specific Exercises: A T2 Time Magnetic Resonance Imaging Study. Journal of Athletic Training. 2016;51(8):644-650. | 10.4085/1062-6050-51.10.07 | 27690528 | descriptive laboratory study
 *
 * mcKeon | McKeon PO, Hertel J, Bramble D, Davis I. The foot core system: a new paradigm for understanding intrinsic foot muscle function. British Journal of Sports Medicine. 2015;49(5):290. | 10.1136/bjsports-2013-092690 | 24659509 | narrative review
 */

export const EX_BIG_TOE_LIFT: Guide = {
  lang: 'en',
  page: 'exBigToeLift',
  published: '2026-10-05',
  updated: '2026-10-05',
  title: 'Big Toe Lift (Toe Yoga): Technique and Benefits',
  description:
    'How to do the big toe lift (toe yoga): technique, what muscles it works, sets and reps, common mistakes, and why big toe control matters.',
  h1: 'Big toe lift (toe yoga): how to do it and why it matters',
  lede:
    'The big toe lift is an exercise where you raise the big toe on its own while the other four toes stay flat on the floor. Some people call it toe yoga. It trains the brain to control the big toe independently, which matters because the big toe is the arch\'s main lever during walking. When the big toe extends, it tightens the plantar fascia through the windlass mechanism and stiffens the foot for push-off.',
  takeaways: [
    'A 2016 MRI study found first-toe extension activated the flexor digitorum brevis (18.1%), the abductor hallucis (16.9%) and the flexor digiti minimi (16.3%), because the other toes must press down to stay flat while the big toe lifts (Gooding and colleagues, 2016).',
    'The big toe drives the windlass mechanism: when it bends back, the plantar fascia tightens and the arch stiffens for push-off. Poor independent control of the big toe can reduce that stiffening.',
    'A 2020 study of 41 people (56 feet) with metatarsalgia found that eight weeks of toe exercises, including big toe work, was followed by more toe grip strength and less forefoot pain. The study had no comparison group (Amaha and colleagues, 2020).',
    'Most people find the reverse movement (lifting only the small toes while the big toe stays down) harder. Practicing both directions is sometimes called toe yoga.',
  ],
  toc: false,
  sections: [
    {
      h2: 'What is the big toe lift exercise?',
      paragraphs: [
        'The big toe lift is an isolation exercise. You lift only the big toe while the other four toes stay pressed into the floor. Then you reverse it: press the big toe down and lift the other four. This back-and-forth pattern is what gives the exercise its popular name, toe yoga.',
        'The purpose is not strength in the usual sense. It is motor control. The big toe has its own set of muscles (the extensor hallucis brevis and longus for lifting, the flexor hallucis brevis and longus for pressing down), but most people have lost the ability to move it separately from the other toes. The exercise restores that independent control.',
      ],
    },
    {
      h2: 'How do you do the big toe lift?',
      paragraphs: [
        'Sit barefoot with your feet flat on the floor. Start with just one foot. Press the four smaller toes gently into the floor and lift only the big toe as high as it will go. Hold for a few seconds, then lower. That is one rep.',
        'If you cannot lift the big toe without the other toes following, try this: place a finger on top of the smaller toes to hold them down. Over time the brain learns to separate the two movements. Another helpful cue is to think about pressing through the ball of the foot with the smaller toes while the big toe lifts.',
      ],
      exercises: [
        {
          name: 'Big toe lift',
          evidence: { level: 'early', why: 'MRI shows it activates intrinsic foot muscles (Gooding 2016). Included in exercise programs for flat feet and metatarsalgia but not tested on its own in an outcome trial.' },
          dose: 'Walkito starts at 3 sets of 8, hold 5 seconds, each foot',
          how: 'Sit with your feet flat. Lift only the big toe while the other four toes stay flat on the floor. Hold for five seconds, then lower. Then try the reverse: press the big toe down and lift the other four.',
          often: 'Every session while this is your level',
          feel: 'The big toe moving on its own, and effort in the smaller toes pressing down',
          stop: 'Pain reaches 6/10',
          media: 'big_toe_lift',
          caption: 'Big toe lift: lift only the big toe while the other four stay flat',
          alt: 'A seated figure with the big toe lifted and the four smaller toes pressed flat on the floor',
        },
      ],
      cites: [CITE.gooding],
    },
    {
      h2: 'What muscles does the big toe lift work?',
      keyFact: 'A 2016 MRI study measured big toe lifts in a small group of athletes and found they activated all three intrinsic plantar muscles tested, with the flexor digitorum brevis showing the highest activation at 18.1 percent (Gooding and colleagues, 2016).',
      paragraphs: [
        'The muscles that lift the big toe are the extensor hallucis longus (which runs from the shin) and the extensor hallucis brevis (which sits on top of the foot). But the exercise also works the muscles that hold the other toes down, and that is where the real training happens.',
        'A 2016 MRI study by Gooding and colleagues found that the first-toe extension exercise activated the flexor digitorum brevis (18.1%), the abductor hallucis (16.9%) and the flexor digiti minimi (16.3%). The intrinsic plantar muscles were working to keep the smaller toes flat while the big toe lifted.',
        'This makes the big toe lift a two-for-one exercise. The lifting side trains the extensors. The pressing-down side trains the intrinsic plantar muscles, the same ones the [short foot exercise](/exercises/short-foot-exercise/) targets.',
      ],
      cites: [CITE.gooding],
    },
    {
      h2: 'Why does independent big toe control matter for the arch?',
      paragraphs: [
        'The big toe is the on-switch for the windlass mechanism. When the big toe extends (bends upward) during the push-off phase of walking, it pulls the plantar fascia tight and raises the arch. This stiffening converts the foot from a flexible platform that absorbs shock into a rigid lever that propels you forward.',
        'If the big toe cannot extend independently, the windlass does not engage fully. The arch stays flatter through push-off, and the foot has to compensate by loading other structures more. Over time, that can contribute to arch fatigue, [ball-of-foot pain](/ball-of-foot-pain/) and strain on the plantar fascia.',
        'The big toe lift exercise does not load the windlass the way a towel calf raise does. What it does is teach the brain to activate the big toe on its own, so the windlass can do its job during normal walking. It is a coordination exercise, not a strength exercise.',
      ],
    },
    {
      h2: 'What are the common mistakes with the big toe lift?',
      paragraphs: [
        'The most common mistake is lifting all five toes together. If all the toes go up at once, the exercise becomes a general toe extension and the independent control is lost. Press the smaller toes down with your fingers if needed until the separation develops.',
        'Another mistake is using the shin muscle (tibialis anterior) to lift the big toe by pulling the whole foot upward. Keep the foot flat. Only the big toe moves.',
        'Rushing through reps is a third issue. This is a motor control exercise. Speed defeats the purpose. Hold each lift for the full five seconds and focus on quality over quantity. If only three clean reps are possible, three clean reps are better than eight sloppy ones.',
        'Cramping in the arch or under the foot is common in the first few sessions. It usually means the intrinsic muscles are weak and fatigue quickly. Stop, massage the area, and try again the next session.',
      ],
    },
    {
      h2: 'What does the research say?',
      paragraphs: [
        'The big toe lift (first-toe extension) was one of the four exercises tested in the 2016 MRI study by Gooding and colleagues. All four exercises activated all of the intrinsic plantar muscles. The big toe lift was not the top activator for any single muscle, but it produced meaningful activation across all of them, particularly the flexor digitorum brevis.',
        'A 2020 study by Amaha and colleagues followed 41 people (56 feet) with primary metatarsalgia, pain under the ball of the foot, through eight weeks of toe exercises that included big toe work, towel scrunches and marble pickups. Toe grip strength rose and forefoot pain fell from before to after the program. The study had no control group, so some of the change may not be from the exercises alone.',
        'No study has isolated the big toe lift on its own in a controlled outcome trial. The evidence supports it as part of a broader foot-strengthening approach. Related exercise pages: [short foot exercise](/exercises/short-foot-exercise/), [toe spread](/exercises/toe-spread/), [towel scrunch](/exercises/towel-scrunch/).',
      ],
      cites: [CITE.gooding, CITE.amaha],
    },
  ],
  faq: [
    {
      q: 'What is toe yoga?',
      a: 'Toe yoga is the common name for exercises that involve moving the big toe independently from the smaller toes, and vice versa. The basic version is lifting only the big toe while the other four stay down, then reversing. It trains the brain to control each group separately.',
    },
    {
      q: 'How many big toe lifts should I do?',
      a: 'Walkito starts at 3 sets of 8 repetitions per foot, holding each lift for 5 seconds. Quality matters more than quantity. If you cannot isolate the big toe for all 8 reps, do fewer and build up.',
    },
    {
      q: 'Why can I not lift my big toe by itself?',
      a: 'Most people have not practiced moving the big toe independently since childhood, if ever. The neural pathway is dormant, not damaged. With daily practice, most people can separate the movement within two to four weeks. It is a coordination skill, not a strength issue.',
    },
    {
      q: 'Does the big toe lift help with plantar fasciitis?',
      cites: [CITE.guideline],
      a: 'The big toe lift is not part of the main plantar fasciitis guideline, which focuses on stretching and loaded heel raises. It may help as part of a broader program by improving windlass mechanism control. See [plantar fasciitis exercises](/plantar-fasciitis-exercises/) for the primary exercises.',
    },
    {
      q: 'Should I do big toe lifts or short foot exercises?',
      cites: [CITE.gooding],
      a: 'They train different skills. The big toe lift develops independent toe control and activates the extensors. The short foot exercise targets the arch-supporting flexors through an isometric contraction. Both appear in foot-strengthening programs and work well together (Gooding 2016).',
    },
  ],
  redFlags: {
    h2: 'See a clinician first if',
    bullets: [
      'the big toe joint is stiff and painful to bend, which can indicate hallux rigidus',
      'you have numbness or loss of feeling in the big toe',
      'the big toe has drifted toward the second toe and a bump has formed at the joint',
      'pain under the ball of the foot is sharp and worsening',
    ],
  },
  program: {
    h2: 'Doing it as a plan',
    text: 'Walkito uses the big toe lift early in the foot-strengthening sequence, alongside towel scrunches. Once you can isolate the big toe cleanly for two sessions, the plan shifts focus to the short foot exercise and its seated-to-standing progression. Sessions are 3, 5 or 10 minutes, and a test every 14 days tracks progress.',
    cta: 'Start with 3 minutes a day.',
  },
  crumb: 'Big toe lift (toe yoga)',
  campaign: 'ex-big-toe-lift',
};
