import { CITE } from '@/lib/citations';
import type { Guide } from '../types';

/*
 * Foot pain for teachers (EN). Research 2026-10-18.
 * Teacher data is thin and almost all questionnaire based: Tahernejad 2024
 * meta-analysis (44 studies, 15,972 teachers; "ankle" region pooled from 27
 * studies, 8,634 teachers, 30%, most studies grouped ankle and foot, very
 * heterogeneous, publication bias flagged), Erick and Smith 2011 review
 * (lower limb pain less studied and lower than back and upper limb), and one
 * large single-region survey (Alqahtani 2020, 1,439 teachers, Abha, Saudi
 * Arabia). We found no study that measured how many hours teachers stand,
 * so the page says so and leans on prolonged-standing evidence (Waters and
 * Dick 2015, Coenen 2017, Riddle 2003, Garcia 2023, Landorf 2023).
 * Doses match the heel pain guide (en.ts, HEEL_PAIN_EN).
 * New citations: CITE.tahernejadTeachers, CITE.erickTeachers,
 * CITE.alqahtaniTeachers (see new-teachers-foot-pain.md).
 */

export const TEACHERS_EN: Guide = {
  lang: 'en',
  page: 'teachers',
  mainSource: CITE.tahernejadTeachers,
  published: '2026-10-18',
  updated: '2026-10-18',
  title: 'Teacher Foot Pain: Exercises, Shoes and Floors That Help',
  description:
    'Why teaching days make your feet hurt, 3-minute exercises that fit between classes, what helps in shoes and floors, and when it is plantar fasciitis.',
  h1: 'Teacher foot pain: what a school day does to your feet, and what helps',
  lede:
    'Teacher foot pain mostly comes from hours of standing and walking the room on hard floors, and the options with the best evidence, calf and plantar fascia stretches plus calf strength work, take 3 to 5 minutes and fit between classes. The 2023 heel pain guideline grades those stretches **A**, its top grade, and strength work **B** (Koc and colleagues, 2023). Research on teachers’ feet is limited: in a 2024 review, 27 studies reported pain in the ankle region, mostly counted together with the foot, and the pooled figure was 30% of teachers (Tahernejad and colleagues, 2024).',
  intro: [
    'This page is about the school day: standing at the board, walking between desks, hall and yard duty, and what you can do in a passing period or after the last bell. If you stand all day in another job, [why do my feet hurt after standing all day](/feet-hurt-standing-all-day/) is the general guide, and [foot pain for nurses](/nurses-foot-pain/) covers long hospital shifts. If your heel hurts most on the first steps in the morning, go to [plantar fasciitis](/plantar-fasciitis/).',
  ],
  toc: true,
  takeaways: [
    'In a 2024 review of 44 studies and 15,972 teachers, pain in the ankle region (mostly counted with the foot) was pooled at 30% across 27 studies, below the neck and lower back at 47% each. Results varied widely between studies (Tahernejad and colleagues, 2024).',
    'In one survey of 1,439 teachers in a single Saudi region, 85.5% reported foot pain in the past 12 months, and it was more common in teachers with 16 or more lessons a week (Alqahtani, 2020). Other surveys found much lower figures, so read it as one region’s result.',
    'We found no study that measured how many hours a typical teacher stands. In a study of 50 cases and 100 controls, standing for most of the working day raised the odds of plantar fasciitis 3.6 times, and very limited ankle flexibility, usually from a tight calf, raised them 23.3 times (Riddle and colleagues, 2003).',
    'The 2023 heel pain guideline grades plantar fascia and calf stretching **A** and strength work **B**. Insoles on their own get a **B against** (Koc and colleagues, 2023).',
    'In 50 people with heel pain and 25 without, those with heel pain stood 3.4 hours a day longer and wore shoes with harder heels. That is a link, not proof of cause (Landorf and colleagues, 2023).',
  ],
  sections: [
    {
      h2: 'What does a teaching day do to your feet?',
      keyFact: 'Standing for most of the working day raised the odds of plantar fasciitis 3.6 times, and reduced ankle flexibility raised them 23.3 times, in a study of 50 cases and 100 controls (Riddle and colleagues, 2003).',
      paragraphs: [
        '**A teaching day mixes standing still with short walks, mostly on hard floors.** You stand at the board or the front desk, walk the rows while students work, then stand again on hall or yard duty. Standing still loads the heel, the plantar fascia (the band under the foot that holds up the arch) and the calf for long stretches without the pumping action of walking.',
        'We found no study that measured how many hours a typical teacher stands, so this page does not give a figure. What is measured is prolonged standing in general. A 2015 review of standing work linked it with leg and foot discomfort, fatigue and leg swelling, and listed floor mats, supportive shoes, compression stockings and sit-stand options among the measures with some evidence (Waters and Dick, 2015).',
        'In a 2017 review of 25 laboratory studies, discomfort in the lower back and legs grew the longer people stood without a break. The authors suggested not standing for more than about 40 minutes at a time (Coenen and colleagues, 2017). That is roughly one lesson.',
        'The calf matters too. In a 2003 study, a [tight calf](/tight-calves/) was the strongest risk factor for plantar fasciitis, at 23.3 times the odds, and standing for most of the working day raised the odds 3.6 times (Riddle and colleagues, 2003). A teacher on their feet all day with tight calves has both.',
      ],
      cites: [CITE.waters, CITE.coenen, CITE.riddle],
    },
    {
      h2: 'How common is foot pain in teachers?',
      keyFact: 'Pain in the ankle region, mostly counted together with the foot, was pooled at 30% across 27 studies of 8,634 teachers (Tahernejad and colleagues, 2024).',
      paragraphs: [
        '**Common, but less studied than teachers’ backs and necks.** A 2024 review pooled 44 studies of 15,972 teachers. Neck and lower back pain came first, at 47% each. Pain in the ankle region, which most of the studies counted together with the foot, was pooled at 30% across 27 studies of 8,634 teachers. The studies were very different from each other, and the authors found signs of publication bias for the ankle figure, so read 30% as a rough middle, not an exact rate.',
        'An earlier review found that only a few studies had looked at teachers’ legs and feet at all, and that leg and foot pain was reported less often than back, neck and arm pain (Erick and Smith, 2011).',
        'The largest foot-specific survey we found asked 1,439 teachers in one region of Saudi Arabia. 85.5% reported foot pain in the past 12 months. It was more common in teachers with 16 or more lessons a week (88%) than in those with fewer (81.4%), and in those with more than 10 years of teaching (86.8% against 82.6%). It was a self-reported questionnaire in one region, and most of the teachers were women, so it may not match your school (Alqahtani, 2020).',
      ],
      cites: [CITE.tahernejadTeachers, CITE.erickTeachers, CITE.alqahtaniTeachers],
    },
    {
      h2: 'Which exercises fit between classes?',
      keyFact: 'The 2023 heel pain guideline grades plantar fascia and calf stretching A, its top grade, and strength training B (Koc and colleagues, 2023).',
      paragraphs: [
        'The exercises below come from the plantar fasciitis guideline. They were not tested in teachers, but they target the tissues a standing day loads: the calf, the plantar fascia and the heel. Most need only a wall or a desk, so they fit a passing period or a planning period. These are Walkito’s starting doses, not a prescription. [How these guides are written](/about/).',
        'Stretches get the guideline’s top grade, **A**. Calf strength work gets a **B**. If any exercise takes your pain to **6/10 or more**, stop for the day.',
      ],
      exercises: [
        {
          name: 'Calf stretch',
          evidence: { level: 'strong', why: 'The 2023 heel pain guideline grades stretching A, its top grade. Not tested in teachers.' },
          dose: '2 holds of 30 seconds, each leg',
          often: 'Most days, between classes',
          feel: 'A stretch in the calf',
          how: 'Put your hands on the wall or the whiteboard frame. Keep the back leg straight, the back heel flat on the floor and the hips forward. A tight calf pulls on the heel all day, so this stretch matters even though you feel it higher up.',
          stop: 'Pain reaches 6/10',
          image: 'Exercise: calf stretch',
          media: 'calf_stretch_straight',
          caption: 'Calf stretch: back leg straight, back heel flat, hips forward',
          alt: 'A figure leaning on a wall with the back leg straight, the calf highlighted',
        },
        {
          name: 'Soleus stretch',
          evidence: { level: 'strong', why: 'The 2023 heel pain guideline grades stretching A, its top grade. Not tested in teachers.' },
          dose: '2 holds of 30 seconds, each leg',
          often: 'Most days, between classes',
          feel: 'A stretch near the heel',
          how: 'Take the same position at the wall, keep the back heel flat on the floor, then bend the back knee until you feel the stretch lower down, near the heel. The soleus, the deeper calf muscle, only lets go with the knee bent.',
          stop: 'Pain reaches 6/10',
          image: 'Exercise: soleus stretch',
          media: 'calf_stretch_bent',
          caption: 'Soleus stretch: back heel flat, bend the back knee until you feel it near the heel',
          alt: 'A figure in a split stance with the knees bent, the lower calves highlighted',
        },
        {
          name: 'Plantar fascia stretch',
          evidence: { level: 'strong', why: 'The 2023 heel pain guideline grades stretching A, its top grade. Not tested in teachers.' },
          dose: '2 holds of 30 seconds, each foot',
          often: 'Most days, on waking and after sitting',
          feel: 'A stretch along the arch',
          how: 'Sit down and cross the foot over the other knee. Pull the toes back until you feel the stretch in the arch, not the calf. Do the first one on the edge of the bed, before your foot touches the floor, and another at your desk before you stand up after a planning period.',
          stop: 'Pain reaches 6/10',
          image: 'Exercise: plantar fascia stretch',
          media: 'fascia_stretch',
          caption: 'Plantar fascia stretch: pull the toes back until you feel it in the arch',
          alt: 'A figure pulling the toes of one foot back, the sole of the foot highlighted',
        },
        {
          name: 'Seated heel raises',
          evidence: { level: 'moderate', why: 'The 2023 guideline grades strength work B. This step was not tested on its own.' },
          dose: '3 sets of 10, both feet',
          often: 'Strength days, 3 a week, never two in a row',
          feel: 'Work low in the calf',
          how: 'Sit at your desk with your feet flat and press up through the balls of your feet. Hands on the knees add resistance. With the knee bent, this mainly works the soleus, with almost no load on the heel. It fits under the desk while students do quiet work.',
          stop: 'Pain reaches 6/10',
          image: 'Exercise: seated heel raises',
          media: 'heel_raise_seated',
          caption: 'Seated heel raises: press up through the balls of the feet',
          alt: 'A seated figure lifting both heels, the calves highlighted',
        },
        {
          name: 'Heel raises on both feet',
          evidence: { level: 'moderate', why: 'The 2023 guideline grades strength work B. This step was not tested on its own.' },
          dose: '3 sets of 10, both feet',
          often: 'Strength days, once the seated raises feel easy',
          feel: 'The calves working together',
          how: 'Stand on both feet with a hand on the desk, rise straight up over the big toes, then lower slowly. Both feet share the load. More on how to build up: [calf raises for plantar fasciitis](/calf-raises-plantar-fasciitis/).',
          stop: 'Pain reaches 6/10',
          image: 'Exercise: heel raises on both feet',
          media: 'heel_raise_double',
          caption: 'Heel raises on both feet: rise straight up over the big toes, then lower slowly',
          alt: 'A standing figure rising onto the toes of both feet, the calf highlighted',
        },
        {
          name: 'Foot roll',
          evidence: { level: 'early', why: 'Not tested in the studies on this page. It is here for comfort after a long day.' },
          dose: '1 minute',
          often: 'After school, on recovery days',
          feel: 'Firm pressure under the foot',
          how: 'Sit and roll the sole of your foot slowly over a massage ball, with firm pressure. If you are wincing, ease off. A ball in your desk drawer makes this an after-school habit. More in [massage ball for plantar fasciitis](/massage-ball-plantar-fasciitis/).',
          stop: 'Wincing, or a heel that is red, warm or swollen',
          image: 'Exercise: foot roll',
          media: 'foot_roll',
          caption: 'Foot roll: roll the sole slowly over a ball, with firm pressure',
          alt: 'A seated figure rolling the sole of one foot over a ball, the sole highlighted',
        },
      ],
      cites: [CITE.guideline, CITE.riddle],
    },
    {
      h2: 'How do you fit foot exercises into a school day?',
      paragraphs: [
        'You do not need a separate workout. Tie each exercise to a point in the day that already happens. The doses are the same as above; the table only says when they fit.',
      ],
      table: {
        caption: 'One way to spread the exercises over a school day',
        head: ['When', 'What', 'Time'],
        rows: [
          ['Before you get up', 'Plantar fascia stretch', '2 minutes'],
          ['Before the first bell', 'Calf and soleus stretch at a wall', '4 minutes'],
          ['While students work', 'Sit; seated heel raises', '1 to 2 minutes'],
          ['Passing period', 'Calf stretch, one side each break', '1 minute'],
          ['After school', 'Heel raises on both feet, foot roll', '2 to 3 minutes'],
        ],
      },
      after: [
        'Do the strength work (the heel raises) on 3 days a week, never two days in a row. The stretches can go on most days. If you only manage one thing, make it the calf stretch: it targets the strongest risk factor in the 2003 study.',
        'The 40-minute point from the standing studies is a useful cue. When students start independent work, sit down for a few minutes, even on a stool at the front. That breaks up the standing without leaving the room (Coenen and colleagues, 2017).',
      ],
      cites: [CITE.coenen, CITE.riddle],
    },
    {
      h2: 'What are the best shoes for teachers on their feet all day?',
      paragraphs: [
        '**No study has compared shoes for teachers, and no trial picks one brand or style.** The 2023 heel pain guideline does not grade shoe types. What evidence there is points to cushioning under the heel and to fit.',
        'In a 2023 study, 50 people with plantar heel pain were compared with 25 matched people without it. Those with heel pain stood 3.4 hours a day longer and wore shoes with harder heels. Shoe style, heel height and standing on hard floors did not differ between the groups (Landorf and colleagues, 2023). That shows a link, not that soft heels prevent pain, but it supports a shoe with a cushioned heel for long days at the board.',
        'A practical checklist, based on fit and comfort rather than a trial:',
        {
          list: [
            'a cushioned heel and a firm heel counter (the back of the shoe does not fold when you squeeze it)',
            'room for your toes to spread, with no pinching at the end of the day',
            'a low, stable heel rather than a high or very thin one',
            'a second pair to swap with, so you are not in the same worn pair every day',
          ],
        },
        '**Insoles can make a day more comfortable, but do not rely on them alone.** The 2023 guideline grades insoles on their own **B against**, and combined with stretching and strength work a **C** (Koc and colleagues, 2023). [Insoles or exercises](/insoles-vs-exercises/) compares the two, and [best insoles for plantar fasciitis](/best-insoles-for-plantar-fasciitis/) covers what to look for.',
        'Compression socks are another option for heavy, swollen legs by the end of the day. In a trial of 40 security guards on long standing shifts, 15 to 20 mmHg and 20 to 30 mmHg stockings both avoided the rise in leg discomfort and swelling seen with regular socks (Garcia and colleagues, 2023). It was not a study of teachers.',
      ],
      cites: [CITE.landorfFootwear, CITE.guideline, CITE.garcia],
    },
    {
      h2: 'Do classroom floors and mats make a difference?',
      paragraphs: [
        'Most classrooms have hard floors: tile, vinyl over concrete, or thin carpet. No study has measured classroom floors and teachers’ feet. The 2015 review of standing work lists floor mats among the measures with some evidence for less discomfort, alongside shoes and sit-stand options (Waters and Dick, 2015).',
        'A mat only helps where you actually stand. If you teach from one spot, such as the board, the projector or a lab bench, an anti-fatigue mat there is worth trying. If you walk the room, the shoe is your mat.',
        'Moving is the other half. The standing studies found discomfort building with time spent standing still (Coenen and colleagues, 2017). Walking between desks, sitting during quiet work and shifting your weight all break up the static load.',
        'At home, avoid going barefoot on hard floors first thing in the morning if your heel hurts. [Heel pain in the morning](/heel-pain-in-the-morning/) explains why the first steps matter.',
      ],
      cites: [CITE.waters, CITE.coenen],
    },
    {
      h2: 'When is a teacher’s heel pain plantar fasciitis?',
      keyFact: 'Of the teachers with foot pain in one survey, 25.8% said it came early in the morning and after rest, a pattern typical of plantar fasciitis, though the survey diagnosed no one (Alqahtani, 2020).',
      paragraphs: [
        'General aching at the end of a school day that is gone by the next morning is standing fatigue. **Plantar fasciitis has a typical pattern: sharp pain under the heel on the first steps in the morning or after you have been sitting, that eases as you walk, then comes back after a long day on your feet.** In the Saudi survey, 25.8% of teachers with foot pain said it came early in the morning and after rest (Alqahtani, 2020). That survey did not diagnose anyone, so it is a pattern, not a count of plantar fasciitis.',
        'If that sounds like you, start with [plantar fasciitis exercises and stretches](/plantar-fasciitis-exercises/). About 90% of people with plantar fasciitis get better with non-surgical care, though it can take three to six months (Latt and colleagues, 2020). [How long plantar fasciitis lasts](/how-long-does-plantar-fasciitis-last/) has the details.',
        'Other patterns point elsewhere:',
        {
          list: [
            'a deep ache in the middle of the heel, worse barefoot on hard floors: [heel fat pad syndrome](/heel-fat-pad-syndrome/)',
            'pain along the arch that builds through the day: [arch pain](/arch-pain/)',
            'pain under the ball of the foot: [ball of foot pain](/ball-of-foot-pain/)',
            'pain at the back of the heel, in the tendon: [Achilles tendonitis exercises](/achilles-tendonitis-exercises/)',
          ],
        },
        'Not sure which one it is? The [foot pain identifier](/foot-pain-identifier/) asks a few questions about where and when it hurts. **If you are still unsure, see a clinician before you load it with exercise.**',
      ],
      cites: [CITE.alqahtaniTeachers, CITE.latt],
    },
  ],
  faq: [
    {
      q: 'Why do my feet hurt so much after teaching all day?',
      cites: [CITE.waters, CITE.coenen],
      a: 'Teaching keeps you standing and walking on hard floors for most of the day, which loads the heel, arch and calf without much rest. Reviews of standing work link long standing with leg and foot discomfort and fatigue, and laboratory studies found discomfort growing the longer people stood still. Breaks to sit, calf stretches and cushioned shoes all help.',
    },
    {
      q: 'How common is foot pain in teachers?',
      cites: [CITE.tahernejadTeachers, CITE.alqahtaniTeachers],
      a: 'A 2024 review pooled pain in the ankle region, mostly counted together with the foot, at 30% of teachers across 27 studies, with very different results between studies. One survey of 1,439 teachers in a single Saudi region found 85.5% with foot pain in the past year. Neck and lower back pain are reported more often than foot pain.',
    },
    {
      q: 'What are the best shoes for teachers who stand all day?',
      cites: [CITE.landorfFootwear, CITE.guideline],
      a: 'No study has tested shoes for teachers. Look for a cushioned heel, a firm heel counter, room for the toes and a low, stable heel. In one study, people with heel pain wore shoes with harder heels and stood longer each day. Insoles alone get a B against in the 2023 heel pain guideline, so pair them with stretching.',
    },
    {
      q: 'What stretches can teachers do between classes?',
      cites: [CITE.guideline],
      a: 'A calf stretch and a soleus stretch at a wall take about a minute each side: 2 holds of 30 seconds per leg. The plantar fascia stretch can be done seated at your desk, 2 holds of 30 seconds per foot. The 2023 heel pain guideline grades these stretches A, though it was written for plantar fasciitis, not teachers.',
    },
    {
      q: 'Can standing all day as a teacher cause plantar fasciitis?',
      cites: [CITE.riddle],
      a: 'It can raise the risk. In a 2003 study of 50 people with plantar fasciitis and 100 without, standing for most of the working day raised the odds 3.6 times, and very limited ankle flexibility, usually from a tight calf, raised them 23.3 times. The study did not look at teachers, and no study has counted plantar fasciitis in teachers specifically.',
    },
    {
      q: 'Do anti-fatigue mats help teachers?',
      cites: [CITE.waters],
      a: 'They may, if you stand in one spot. A 2015 review of standing work lists floor mats among the measures with some evidence for less discomfort. No study has tested mats in classrooms. If you walk the room most of the lesson, your shoes matter more than a mat.',
    },
    {
      q: 'Should teachers wear compression socks?',
      cites: [CITE.garcia],
      a: 'They are worth trying if your legs feel heavy or swollen by the end of the day. In a trial of 40 security guards on long standing shifts, 15 to 20 mmHg and 20 to 30 mmHg stockings both avoided the rise in leg discomfort and swelling seen with regular socks. The trial did not include teachers.',
    },
    {
      q: 'How long should a teacher stand before sitting down?',
      cites: [CITE.coenen],
      a: 'There is no tested limit for teachers. A 2017 review of laboratory standing studies found discomfort building with time and suggested not standing for more than about 40 minutes at a time. In practice, sit for a few minutes when students start independent work, and walk the room instead of standing still in one place.',
    },
  ],
  redFlags: {
    h2: 'See a clinician first if',
    bullets: [
      'the pain started after a fall, a twist or a knock, for example on yard duty or the stairs',
      'you cannot put weight on the foot, or you are limping',
      'the foot is numb, tingling, burning, swollen or warm',
      'the heel or foot is red, or you have a fever or feel unwell',
      'pain wakes you at night or is there at rest',
      'pain is in one pinpoint spot and gets worse with activity, which can be a stress fracture pattern',
      'one calf or leg has swollen suddenly and is painful, red or warm',
      'you have diabetes, reduced feeling in your feet or poor circulation',
    ],
  },
  program: {
    h2: 'Doing it as a plan',
    text: 'You do not have to work out the order, the doses or when to move to a harder version. [Walkito](/program/) builds a plan one week at a time around one goal. If your heel follows the morning pattern of plantar fasciitis, the first goal is morning pain at 1 out of 10 or less for 14 days in a row.',
    more: [
      'You pick 3, 5 or 7 days a week and sessions of 3, 5 or 10 minutes, so a session fits before the first bell or after the last one. Before each session you rate your morning heel pain, and the plan adjusts to it. Walkito does not diagnose.',
    ],
    cta: 'Start with a 3-minute session.',
  },
  related: ['nurses', 'standing', 'heelPain'],
  crumb: 'Foot pain for teachers',
  campaign: 'guide-teachers-foot-pain',
};
