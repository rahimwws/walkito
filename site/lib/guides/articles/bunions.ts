import { CITE } from '@/lib/citations';
import type { Guide } from '../types';

export const BUNIONS_EN: Guide = {
  lang: 'en',
  page: 'bunions',
  mainSource: CITE.kimHV,
  published: '2026-10-07',
  updated: '2026-10-07',
  title: 'Bunion Exercises: What the Evidence Actually Supports',
  description:
    'Can bunion exercises reduce pain or slow hallux valgus progression? An honest look at toe-spread-out, abductor hallucis training, and toe spacers.',
  h1: 'Bunion exercises: what they can and cannot do',
  lede:
    'Bunion exercises cannot reverse the bony angle of a bunion. That is a structural change in the joint, and no exercise undoes it. What some small trials show is that specific exercises can strengthen the abductor hallucis muscle, the muscle that pulls the big toe inward, and in some cases that comes with modest pain relief and a small change in the hallux valgus angle. This page covers what those studies found, what they did not test, and which exercises have the best support.',
  toc: true,
  takeaways: [
    'In a trial of 24 people with mild to moderate hallux valgus, 8 weeks of toe-spread-out exercises plus an orthosis reduced the hallux valgus angle by an average of 3.4 degrees and increased abductor hallucis muscle size. The orthosis-only group showed no change (Kim and colleagues, 2015).',
    'A trial of 56 women with moderate hallux valgus found that 3 months of foot mobilization and exercise, combined with a toe separator, improved pain and function at 1 year, compared to a control group that received no intervention (Abdalbary, 2018).',
    'Toe spacers can relieve pressure between the toes and may reduce pain in the short term, but the evidence for them changing the hallux valgus angle long term is weak.',
    'Exercise does not replace surgery for moderate to severe bunions that cause daily pain. It may help with mild symptoms and muscle support around the joint.',
  ],
  sections: [
    {
      h2: 'Can exercises fix a bunion?',
      paragraphs: [
        'No. A bunion, clinically called hallux valgus, is a bony deviation at the first metatarsophalangeal joint (the big toe joint). The first metatarsal drifts inward and the big toe angles outward. Once the bone has shifted and the joint capsule has adapted, exercise cannot push it back.',
        'What exercise can do is strengthen the muscles around the joint. The abductor hallucis muscle runs along the inner arch and pulls the big toe into alignment. In people with hallux valgus, this muscle is weaker and smaller than in people without it. Strengthening it will not undo the structural change, but it may improve control, reduce symptoms, and possibly slow further drift in mild cases.',
        'A 2016 clinical commentary in the Journal of Orthopaedic and Sports Physical Therapy proposed a biomechanically based muscle-strengthening approach for early hallux valgus, centered on intrinsic foot muscles. The author argued that the deformity progresses partly because of muscle imbalance, so restoring muscle activity may have a protective effect. This is a plausible argument, but direct long-term evidence is still limited.',
      ],
    },
    {
      h2: 'What does the research say about bunion exercises?',
      keyFact: 'A trial of 60 women (120 feet) comparing one month of night splinting, exercise, or electrical stimulation found all three improved pain and function, but splinting outperformed exercise and electrotherapy (Külünkoğlu and colleagues, 2021).',
      paragraphs: [
        'The best evidence comes from a handful of small trials. None is large, and none followed participants for more than a year.',
        'Kim and colleagues (2015) randomly assigned 24 people with mild to moderate hallux valgus to either an orthosis alone or an orthosis plus toe-spread-out exercises for 8 weeks. The exercise group reduced their hallux valgus angle by an average of 3.4 degrees and increased the cross-sectional area of the abductor hallucis muscle. The orthosis-only group showed no significant change on either measure. The study was small and included mostly young adults with mild bunions.',
        'Abdalbary (2018) randomly assigned 56 women with moderate hallux valgus to 3 months of foot mobilization, strengthening exercises, and a toe separator, or to no intervention (a waiting list). At 3 months and again at 1 year, the exercise group had significantly better pain, function, and radiographic angle measurements than the group that received nothing. This trial is notable for its longer follow-up, but because the toe separator was bundled with mobilization and exercise, the study cannot tell us how much the separator alone contributed.',
        'Külünkoğlu and colleagues (2021) randomly assigned 60 women (120 feet) with hallux valgus to one month of night splinting, exercise, or electrical stimulation. All three groups improved in pain and function, but splinting was more effective than exercise and electrotherapy, and exercise outperformed electrotherapy. The study did not include an untreated control, so it is hard to know how much any of the three approaches added beyond natural variation.',
      ],
      sourceNote:
        'Kim 2015: 24 subjects, 8-week RCT. HV angle change: exercise group -3.41 ± 3.17 degrees, orthosis group -0.5 ± 2.07 degrees (p < 0.05). AbdH CSA change: exercise group +0.48 cm², orthosis group -0.11 cm². Abdalbary 2018: 56 women, randomized to 3 months of mobilization + exercise + toe separator (36 sessions) vs no intervention, 1-year follow-up RCT. Külünkoğlu 2021: 60 women (120 feet), 3-arm RCT (splint, exercise, electrotherapy), 1-month treatment, no untreated control; splinting was the most effective of the three.',
      cites: [CITE.kimHV, CITE.abdalbary, CITE.kulunkoglu],
    },
    {
      h2: 'Do toe spacers work for bunions?',
      keyFact: 'In a study of 30 women with painful hallux valgus, a toe-separator insole reduced pain significantly over three months, while a separate night-splint group did not improve (Tehraninasr and colleagues, 2008).',
      paragraphs: [
        'Toe spacers, also called toe separators, sit between the big toe and the second toe. They reduce friction, relieve pressure on the bunion, and gently push the big toe away from the second toe while worn.',
        'Tehraninasr and colleagues (2008) studied 30 women with painful hallux valgus over a 3-month period. One group wore an insole with a built-in toe separator, and a separate group wore a night splint instead. Pain dropped significantly in the toe-separator group but not in the night-splint group. Neither group had a statistically significant change in the hallux valgus angle. Abdalbary\'s trial paired a toe separator with manual therapy and exercise, so it does not isolate what the separator did on its own.',
        'The pattern across studies is consistent: toe spacers may help with comfort and short-term symptoms, but the evidence that they change the bone angle over time is weak. They are not harmful and are inexpensive, so many clinicians recommend them alongside exercises and footwear changes.',
      ],
      cites: [CITE.abdalbary, CITE.tehraninasr],
    },
    {
      h2: 'Which exercises help bunions?',
      paragraphs: [
        'These exercises target the abductor hallucis and the smaller intrinsic foot muscles. The goal is to restore muscle support around the first metatarsophalangeal joint. None will reverse the bony deformity, but two of them have trial support for improving muscle size and reducing symptoms in mild hallux valgus.',
      ],
      exercises: [
        {
          name: 'Toe spread (toe-spread-out)',
          dose: 'Walkito starts at 3 sets of 10, holding each spread for 5 seconds',
          how: 'Sit or stand with your foot flat. Lift all five toes, then press the little toe down and out while pressing the big toe down and in, spreading them apart. Hold the spread, then relax. This is the exercise tested in the Kim 2015 trial.',
          feel: 'Effort along the inner arch and between the toes',
          stop: 'Pain at the bunion joint during the movement',
          evidence: {
            level: 'moderate',
            why: 'The Kim 2015 RCT found the toe-spread-out exercise reduced the hallux valgus angle by 3.4 degrees and increased abductor hallucis size in 24 people over 8 weeks.',
          },
          media: 'toe_spread',
          caption: 'Toe spread: splay all five toes apart, press big toe inward',
          alt: 'A foot with all five toes spread wide apart, the abductor hallucis muscle along the inner arch highlighted',
        },
        {
          name: 'Big toe lift',
          dose: 'Walkito starts at 3 sets of 8, holding 5 seconds, each foot',
          how: 'Sit or stand with your foot flat. Lift only the big toe while keeping the other four toes on the ground. Lower slowly. This isolates the extensor hallucis and engages the abductor hallucis, training the big toe to move independently.',
          feel: 'A pulling sensation along the top of the big toe and inner arch',
          stop: 'Pain at the bunion joint',
          evidence: {
            level: 'early',
            why: 'Not tested in a bunion-specific trial. Based on EMG studies showing abductor hallucis activation during isolated big toe movements.',
          },
          media: 'big_toe_lift',
          caption: 'Big toe lift: lift the big toe while the other four stay flat',
          alt: 'A foot on the ground with the big toe raised and the other four toes flat on the floor',
        },
        {
          name: 'Short foot (seated)',
          dose: 'Walkito starts at 3 sets of 10, holding 5 seconds, each foot',
          how: 'Sit with your foot flat on the floor. Without curling the toes, try to shorten the foot by drawing the ball of the foot toward the heel. The arch rises slightly. This engages the intrinsic foot muscles, including the abductor hallucis.',
          feel: 'Tightening under the arch',
          stop: 'Pain at the bunion or cramping that does not ease',
          evidence: {
            level: 'early',
            why: 'EMG studies show abductor hallucis activation during short foot exercises, but a comparison study found the toe-spread-out exercise produced greater activation in mild hallux valgus subjects.',
          },
          media: 'short_foot_seated',
          caption: 'Short foot: raise the arch without curling the toes',
          alt: 'A seated figure with one foot on the floor, the arch rising slightly',
        },
        {
          name: 'Towel scrunch',
          dose: 'Walkito starts at 3 sets of 8, each foot',
          how: 'Sit with your foot on a towel. Curl your toes to pull the towel toward you. Release and repeat. This works the toe flexors and the muscles under the arch.',
          feel: 'The muscles under the arch and toes working',
          stop: 'Pain at the bunion joint',
          evidence: {
            level: 'early',
            why: 'Walkito\'s own addition. Towel scrunches target intrinsic foot muscles but have not been tested in a hallux valgus trial specifically.',
          },
          media: 'towel_scrunch',
          caption: 'Towel scrunch: curl the toes to pull the towel in',
          alt: 'A foot on a towel with toes curled, pulling the towel toward the heel',
        },
      ],
      cites: [CITE.kimHV, CITE.jung],
    },
    {
      h2: 'Does footwear matter for bunions?',
      paragraphs: [
        'Footwear is one of the most impactful changes you can make. A wide toe box gives the big toe room to sit in a more neutral position and stops the shoe from pressing on the bunion. Narrow and pointed shoes push the big toe further into valgus and compress the joint.',
        'High heels shift weight onto the forefoot and increase pressure on the first metatarsophalangeal joint. If bunion pain is a problem, reducing heel height is a straightforward first step.',
        'Shoes alone will not reverse the deformity, but they can reduce symptoms and slow progression by removing the external force that pushes the toe further out of alignment.',
      ],
    },
    {
      h2: 'When is surgery considered?',
      paragraphs: [
        'Surgery is considered when pain and functional limitation persist despite conservative measures like footwear changes, exercises, spacers, and orthotics. The decision depends on how much the bunion affects daily life, not on the angle alone.',
        'More than 150 surgical procedures exist for hallux valgus, ranging from soft tissue realignment to osteotomy (cutting and repositioning the bone). The choice depends on the severity and the specific anatomy. Recovery varies from weeks to months.',
        'Exercise and conservative management are usually tried for several months first. If you are managing symptoms well with the approaches on this page, surgery is not urgent. If pain limits walking, shoe choices, or activity despite those measures, a foot and ankle specialist can discuss the options.',
      ],
    },
  ],
  faq: [
    {
      q: 'Can exercises fix bunions?',
      a: 'No. Exercise cannot reverse the bony deviation of a bunion. What the Kim 2015 trial showed is that toe-spread-out exercises can strengthen the abductor hallucis muscle and produce a small reduction in the hallux valgus angle in mild cases. That is muscle support, not structural correction.',
      cites: [CITE.kimHV],
    },
    {
      q: 'How long do bunion exercises take to show results?',
      a: 'The Kim 2015 trial measured changes after 8 weeks of daily toe-spread-out exercises. Abdalbary\'s 2018 trial followed participants for 1 year. Muscle changes may begin in weeks, but any effect on pain or function likely takes a couple of months of consistent work.',
      cites: [CITE.kimHV, CITE.abdalbary],
    },
    {
      q: 'Are toe spacers worth trying?',
      a: 'Toe spacers can reduce friction and short-term discomfort. In the Tehraninasr 2008 study, a toe-separator insole significantly reduced pain in one group of 30 women, while a separate night-splint group did not improve. Neither group\'s hallux valgus angle changed significantly. Toe spacers are inexpensive and not harmful, so they are reasonable to try alongside exercises and wider shoes.',
      cites: [CITE.tehraninasr],
    },
    {
      q: 'Do bunions get worse without surgery?',
      a: 'Bunions tend to be progressive, meaning the angle can increase over time. Footwear changes, exercises, and spacers may slow the progression, but there are no long-term trials proving that any conservative measure stops it entirely. Some people have mild bunions for decades without significant worsening.',
    },
    {
      q: 'Can you run with a bunion?',
      a: 'Many people run with bunions without problems. A wide toe box running shoe and a toe spacer during runs can help. If the bunion causes pain during or after running, scaling back and seeing a clinician is worth considering before pushing through.',
    },
    {
      q: 'What causes bunions in the first place?',
      a: 'Bunions result from a combination of genetics, foot structure, and footwear. A family history of hallux valgus is the strongest risk factor. Narrow shoes and high heels do not cause bunions on their own but can accelerate progression in someone who is predisposed.',
    },
  ],
  redFlags: {
    h2: 'See a clinician first if',
    bullets: [
      'The bunion joint is red, warm, and swollen, which may indicate gout, infection, or bursitis rather than a simple bunion',
      'Pain is severe enough to limit daily walking despite wider shoes',
      'The big toe overlaps or underlaps the second toe',
      'You notice numbness or tingling in the big toe, which could indicate nerve compression',
      'The joint feels locked or you cannot move the big toe at all',
      'You have a wound, blister, or skin breakdown over the bunion',
    ],
  },
  program: {
    h2: 'Doing it as a plan',
    text:
      'Walkito includes [toe spreads](/exercises/toe-spread/) and [big toe lifts](/exercises/big-toe-lift/) as part of its intrinsic foot strengthening track. The app is built for plantar fasciitis and flat feet, not specifically for bunions, but the toe-spread-out exercise is the same movement tested in the Kim 2015 hallux valgus trial. If you want a structured way to build the habit, the 3-minute or 5-minute daily sessions keep the exercises consistent.',
    more: [
      'For broader forefoot pain involving the second and third metatarsal heads, see [ball of foot pain](/ball-of-foot-pain/). For pain under the big toe joint specifically, see [sesamoiditis](/sesamoiditis/).',
    ],
  },
  crumb: 'Bunion exercises',
  campaign: 'guide-bunions',
};
