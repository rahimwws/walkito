import { CITE } from '@/lib/citations';
import type { Guide } from '../types';

/*
 * No new citations. Uses existing keys:
 * CITE.guideline, CITE.riddle, CITE.patelGastrocnemius
 */

export const EX_ANKLE_ROCKS: Guide = {
  lang: 'en',
  page: 'exAnkleRocks',
  published: '2026-10-05',
  updated: '2026-10-05',
  title: 'Ankle Rocks: Knee-Over-Toes Ankle Mobility Exercise',
  description:
    'How to do ankle rocks, the knee-over-toes drill for ankle mobility: technique, sets and reps, why ankle bend matters, and how to test it.',
  h1: 'Ankle rocks: how to do them, why ankle mobility matters',
  lede:
    'Ankle rocks are a standing exercise where the knee travels forward over the toes while the heel stays flat on the floor. They build ankle dorsiflexion, how far the ankle bends when the foot is on the ground. In a case-control study of 50 people with plantar fasciitis and 100 controls, reduced dorsiflexion was the single strongest risk factor, at 23.3 times the odds.',
  takeaways: [
    'Reduced ankle dorsiflexion was the strongest independent risk factor for plantar fasciitis in a matched case-control study, at 23.3 times the odds (Riddle and colleagues, 2003).',
    'Ankle rocks build dorsiflexion by loading the end of the range under bodyweight, unlike a passive wall stretch.',
    'The knee-to-wall test measures how far the knee travels past the toes with the heel down. Walkito includes a knee-to-wall exercise (2 holds of 30 seconds, each leg) and uses the test in its periodic check-in.',
    'Walkito starts ankle rocks at 2 sets of 15, each leg.',
  ],
  toc: false,
  sections: [
    {
      h2: 'How do you do ankle rocks?',
      paragraphs: [
        'Stand in a split stance, one foot forward and one back, with your hands on a wall or door frame for balance. Keeping the front heel flat on the floor, slowly rock the front knee forward over your toes. Let the knee travel as far as it can while the heel stays down. Then rock back to the start. That is one rep.',
        'The movement is slow and controlled. You are not bouncing. Each rock should take about two seconds forward and two seconds back. The back leg is just for balance. All the ankle work is happening in the front leg.',
        'Keep the front foot pointing straight ahead. If the foot rotates outward, the ankle finds a shortcut and you miss the range you are trying to build.',
      ],
      exercises: [
        {
          name: 'Ankle rocks',
          evidence: {
            level: 'moderate',
            why: 'Targets ankle dorsiflexion, the strongest independent risk factor for plantar fasciitis in a 2003 case-control study. Not tested as an isolated exercise in a PF trial.',
          },
          dose: 'Walkito starts at 2 sets of 15, each leg',
          how: 'Split stance, hands on a wall. Rock the front knee forward over the toes, heel stays flat. Slow, about two seconds each way. Switch legs after each set.',
          often: 'Mobility sessions',
          feel: 'A stretch at the front of the ankle and a pull in the lower calf',
          stop: 'Pain reaches 6/10',
          media: 'ankle_rocks',
          caption: 'Ankle rocks: knee travels forward over the toes, heel stays flat',
          alt: 'A figure in a split stance rocking the front knee forward over the toes, the ankle highlighted',
        },
      ],
      cites: [CITE.riddle],
    },
    {
      h2: 'Why does ankle mobility matter for heel pain?',
      paragraphs: [
        'Ankle dorsiflexion is how far the foot can bend upward toward the shin while the heel stays on the ground. Every step you take requires some dorsiflexion. When the ankle cannot bend far enough, the body compensates. The foot may roll inward, the calf takes more strain, and the plantar fascia absorbs forces it was not designed for.',
        'In the Riddle 2003 case-control study, reduced ankle dorsiflexion was the variable with the largest independent effect, at 23.3 times the odds of developing plantar fasciitis. That was stronger than BMI, standing time or running distance. A tight calf, specifically the gastrocnemius, was present in 52 to 60 percent of 254 people with plantar fasciitis in a separate review.',
        'Stretching the calf passively (as in the [calf stretch](/exercises/calf-stretch/) and [soleus stretch](/exercises/soleus-stretch/)) addresses one side of the problem: muscle length. Ankle rocks address the other side: active control at end-range. Rocking the knee over the toes under bodyweight teaches the ankle to use the range it has, not just reach it passively.',
      ],
      cites: [CITE.riddle, CITE.patelGastrocnemius],
    },
    {
      h2: 'Ankle rocks vs. the calf stretch: what is the difference?',
      paragraphs: [
        'The [calf stretch](/exercises/calf-stretch/) is a passive hold. You lean into the wall and wait for the muscle to lengthen. The back leg is straight, which targets the gastrocnemius. The [soleus stretch](/exercises/soleus-stretch/) does the same with a bent knee.',
        'Ankle rocks are an active, repetitive movement. You push the knee forward, come back, push again. You are loading the ankle through its range rather than holding still at end-range. Ankle rocks build the ability to use dorsiflexion under load, which is what walking and running actually require.',
        'Both are useful. Stretching opens the range. Ankle rocks train you to use it. The guideline grades calf stretching A. Ankle rocks are part of the ankle mobility work Walkito programs alongside those stretches.',
      ],
      cites: [CITE.guideline],
    },
    {
      h2: 'The knee-to-wall test and how it connects',
      paragraphs: [
        'The knee-to-wall test, also called the weight-bearing lunge test, is a simple way to measure ankle dorsiflexion. You stand facing a wall, one foot a few centimeters back, and lunge the knee forward until it touches the wall. If the heel lifts before the knee reaches the wall, move the foot closer. The distance from the big toe to the wall at the point where the knee just touches, with the heel still flat, is your score.',
        'Walkito includes a knee-to-wall exercise in the app (2 holds of 30 seconds, each leg) and uses the test in its periodic check-in. Tracking this distance over weeks tells you whether your ankle range is actually improving. An increase of a centimeter or two over a few weeks is meaningful.',
        'Ankle rocks and the knee-to-wall exercise work the same range from different angles. Rocks are repetitions through the range. The knee-to-wall hold is a sustained load at end-range. Both help. Walkito programs them on mobility days.',
      ],
    },
    {
      h2: 'Common mistakes with ankle rocks',
      paragraphs: [
        'Letting the heel lift. The heel must stay flat throughout every rep. If it lifts, you have passed the end of your range and the exercise loses its point. Rock only as far as the heel allows.',
        'Turning the foot outward. The foot should point straight ahead. External rotation lets the ankle sidestep its tight spot. Keep the second toe aimed at the wall.',
        'Going too fast. Bouncing or rushing through reps does not build controlled range. Two seconds forward, two seconds back. Let the ankle feel the end of its range on each rep.',
        'Skipping the back leg. Some people try to do ankle rocks on both legs at once by just squatting. That divides the load and reduces the range the front ankle has to work through. Use a split stance so one ankle does the work.',
      ],
    },
    {
      h2: 'Easier and harder versions',
      paragraphs: [
        'If ankle rocks in standing are too demanding, try them seated. Sit with the foot flat on the floor and slide the knee forward over the toes. It is the same movement with less load. This works well after an acute flare when standing exercises are too much.',
        'A harder version is a weighted ankle rock. Hold a kettlebell or a heavy book against the chest while rocking forward. The added weight pushes the knee further into dorsiflexion. Only add weight once bodyweight ankle rocks feel easy for two sessions in a row.',
        'For other ankle and lower-leg work, see [tibialis raises](/exercises/tibialis-raises/) (shin strength) and [single-leg balance](/exercises/single-leg-balance/) (ankle stability). The full program is in [plantar fasciitis exercises](/plantar-fasciitis-exercises/).',
      ],
    },
  ],
  faq: [
    {
      q: 'How many ankle rocks should you do?',
      a: 'Walkito starts at 2 sets of 15 per leg. That is 30 reps per leg per session. There is no published protocol for ankle rocks in plantar fasciitis specifically, so this dose comes from the app. Increase the sets or add weight once the current dose feels easy for two sessions.',
    },
    {
      q: 'Do ankle rocks help plantar fasciitis?',
      cites: [CITE.riddle],
      a: 'Ankle rocks target ankle dorsiflexion, which was the strongest independent risk factor for plantar fasciitis in a case-control study (23.3 times the odds). No trial has tested ankle rocks as an isolated exercise for PF, but improving the range they target addresses the single biggest biomechanical risk factor the research has identified.',
    },
    {
      q: 'What is the knee-to-wall test?',
      a: 'A simple measure of ankle dorsiflexion. Stand facing a wall and lunge the knee forward until it touches, keeping the heel flat. The distance from the big toe to the wall is your score. Walkito includes this as a periodic test and as a separate exercise (2 holds of 30 seconds per leg) to build end-range control.',
    },
    {
      q: 'Are ankle rocks the same as knee-over-toes rocks?',
      a: 'Yes. "Ankle rocks," "knee-over-toes rocks" and "ankle dorsiflexion rocks" are all names for the same movement. The knee travels forward over the toes while the heel stays flat. The exercise builds the ankle range needed for walking, squatting and running.',
    },
    {
      q: 'Should the knee go past the toes?',
      a: 'Yes. That is the point of the exercise. The idea that the knee should never pass the toes is a myth that does not apply to normal gait or ankle mobility work. Every step you take sends the knee past the toes. Ankle rocks train that range under control. Keep the heel flat and stop where the range ends naturally.',
    },
  ],
  redFlags: {
    h2: 'Stop and see a clinician if',
    bullets: [
      'you feel a sharp pinch at the front of the ankle that does not go away between reps',
      'the ankle locks or catches during the movement',
      'swelling appears at the front or sides of the ankle after rocking',
      'pain shoots up the shin or down into the foot',
      'the ankle gave way or was injured recently',
      'it has not improved after several weeks of consistent mobility work',
    ],
  },
  program: {
    h2: 'Doing it as a plan',
    text: 'Walkito programs ankle rocks on mobility days, alongside the calf and soleus stretches. You pick 3, 5 or 7 days a week and sessions of 3, 5 or 10 minutes. The app tracks your ankle range through the knee-to-wall test every 14 days.',
    more: [
      'A centimeter of improvement in the knee-to-wall score over a few weeks is meaningful and easy to see on the graph. Walkito is an exercise program. It does not diagnose and is not a substitute for a clinician.',
    ],
    cta: 'Start with 3 minutes a day.',
  },
  crumb: 'Ankle rocks',
  campaign: 'ex-ankle-rocks',
};
