import { CITE } from '@/lib/citations';
import type { Guide } from '../types';

/**
 * Placeholder CITE indices for the three new citations above.
 * Replace with real indices after appending them to CITATIONS[].
 */

export const STANDING_DESK_EN: Guide = {
  lang: 'en',
  page: 'standingDesk',
  mainSource: CITE.buckley,
  published: '2026-10-04',
  updated: '2026-10-04',
  title: 'Standing Desk Foot Pain: Why It Happens & What Helps',
  description:
    'Why feet hurt from a standing desk, how long to stand before sitting, anti-fatigue mats, and exercises you can do at your desk.',
  h1: 'Standing desk foot pain: why it happens and what helps',
  lede:
    'Switching to a standing desk is supposed to be better for you, but your feet and legs may disagree in the first few weeks. Foot pain from a standing desk usually comes from standing too long in one position, not from the desk itself. The research points to shorter standing bouts, a mat, the right shoes and a few exercises you can do without leaving your desk.',
  intro: [
    'A 2017 systematic review of laboratory studies found that clinically relevant low-back and lower-limb symptoms develop after roughly 40 minutes of uninterrupted standing. A 2015 expert statement recommends building toward 2 hours of standing and light activity per working day, eventually progressing to 4 hours, broken into shorter bouts rather than one long stretch. This page covers both the research and the practical steps.',
  ],
  toc: true,
  takeaways: [
    'A 2017 systematic review of 25 laboratory studies found that clinically relevant musculoskeletal symptoms developed after about 40 minutes of uninterrupted standing, shortened to 42 minutes in people prone to back pain. The authors recommended not standing continuously for more than 40 minutes (Coenen and colleagues, 2017).',
    'A 2015 expert statement commissioned by Public Health England recommends initially accumulating 2 hours per day of standing and light activity during work, eventually progressing to 4 hours per day, broken into shorter bouts (Buckley and colleagues, 2015).',
    'A 2014 systematic review of 14 studies found sufficient evidence that sit-stand workstations reduce low-back discomfort, with no decrease in productivity, but found no optimal sit-stand time ratio (Karakolis and Callaghan, 2014).',
    'A 2015 review of occupational health research found prolonged standing associated with musculoskeletal discomfort, fatigue and leg pain, and listed floor mats, compression stockings and supportive footwear among the interventions with evidence behind them (Waters and Dick, 2015).',
    'Reduced ankle flexibility, meaning a tight calf, was the strongest predictor of plantar fasciitis in a 2003 case-control study, at 23.3 times the odds. Standing for most of the working day raised them 3.6 times (Riddle and colleagues, 2003).',
  ],
  sections: [
    {
      h2: 'Why do your feet hurt from a standing desk?',
      keyFact: 'A 2017 systematic review of 25 studies found low-back symptoms became clinically relevant after about 71 minutes of standing in general, but only 42 minutes in people prone to standing pain (Coenen and colleagues, 2017).',
      paragraphs: [
        'Standing desk foot pain happens for the same reason any prolonged standing hurts: your feet, calves and lower legs carry a static load without the relief that walking or sitting provides. When you stand still, gravity pools blood in the lower legs, the calf muscles hold the same position without contracting and relaxing, and the plantar fascia under the arch absorbs a steady load.',
        'A 2017 systematic review of 25 laboratory studies pooled data from 591 participants and found that clinically relevant levels of low-back symptoms developed after about 71 minutes of uninterrupted standing in the general population, but only 42 minutes in people who tend to develop pain while standing. For lower-limb symptoms, the picture was similar. The authors recommended a threshold of 40 minutes as a practical limit before breaking up standing time.',
        'A 2015 review of the occupational health literature confirmed the association between prolonged standing and musculoskeletal discomfort, fatigue and leg pain across many types of standing work. The review also found that cardiovascular strain and leg swelling increase with standing duration.',
      ],
      cites: [CITE.coenen, CITE.waters],
    },
    {
      h2: 'How long should you stand at a standing desk before sitting down?',
      keyFact: 'A 2015 expert statement recommends building toward 2 hours per day of standing and light activity, progressing eventually to 4 hours, broken into shorter bouts (Buckley and colleagues, 2015).',
      paragraphs: [
        'There is no single answer that fits everyone, but the research narrows it down. A 2015 expert statement commissioned by Public Health England and the Active Working Community Interest Company recommended that desk-based workers initially build toward accumulating 2 hours per day of standing and light activity during working hours, eventually progressing to 4 hours per day. The statement specified that standing should be broken into shorter bouts, not done in one stretch.',
        'The 2017 review of laboratory studies suggests that 40 minutes of continuous standing is the point where symptoms start to become clinically relevant. Putting those together, a practical starting point is standing for 20 to 30 minutes, sitting for 20 to 30 minutes, and repeating through the day, adjusting as your body adapts.',
        'A 2014 systematic review of 14 studies on sit-stand workstations found sufficient evidence that they reduce low-back discomfort, with no decrease in productivity. The review found no optimal sit-stand ratio, and the authors noted that the best ratio likely varies from person to person and job to job. What the evidence supports is alternating, not a fixed rule.',
      ],
      sourceNote:
        'Buckley and colleagues (2015): expert consensus from an international panel, commissioned by Public Health England. Coenen and colleagues (2017): systematic review of 25 laboratory studies, 591 participants, pooled dose-response analysis. Karakolis and Callaghan (2014): systematic review of 14 studies on sit-stand workstations.',
      cites: [CITE.buckley, CITE.coenen, CITE.karakolis],
    },
    {
      h2: 'Do anti-fatigue mats help with standing desk foot pain?',
      paragraphs: [
        'Anti-fatigue mats have some evidence behind them. The 2015 occupational health review lists floor mats among the interventions with evidence for reducing discomfort during prolonged standing. A crossover study of 38 surgical team members found that standing on a 15 mm rubber anti-fatigue mat during procedures resulted in significantly lower pain and fatigue scores compared to standing on standard flooring.',
        'The mechanism is straightforward: a softer surface lets the feet make small adjustments and shifts some of the load that a hard floor concentrates on the heel and ball of the foot. A 2018 systematic review of cushioning materials during prolonged standing noted consistent findings for reduced discomfort, though the studies were small and the benefit was for comfort, not for preventing a specific condition.',
        'A mat is not going to solve foot pain on its own, but it is one of the simpler things to try. If you already have a standing desk and your feet hurt, a mat combined with shorter standing bouts and the exercises on this page covers the main bases.',
      ],
      cites: [CITE.waters],
    },
    {
      h2: 'What shoes should you wear at a standing desk?',
      paragraphs: [
        'If you work from home, you may be standing at your desk in socks or slippers. That is a lot of hours without any cushioning or arch support. The 2023 heel pain guideline grades orthotics on their own B-against for plantar fasciitis, meaning the evidence leans against using them as a standalone option, but that is about inserts in isolation, not about whether any shoe is better than no shoe.',
        'A reasonable approach: wear a shoe with some cushioning and a supportive insole while you stand, even at home. You do not need a special standing-desk shoe. If you alternate between standing and sitting, you can take the shoes off during sitting periods. The exercises on this page target the tissues directly. Shoes and mats help with comfort during standing, but they do not replace the stretching and strength work.',
      ],
      cites: [CITE.guideline],
    },
    {
      h2: 'What exercises can you do at your desk for standing-related foot pain?',
      keyFact: 'The 2023 heel pain guideline grades calf and plantar fascia stretching A, its top grade, and strength training B (Koc and colleagues, 2023).',
      paragraphs: [
        'These exercises target the calf, the plantar fascia and the small muscles of the foot. Some of them can be done at your desk during a sitting break. Others are better done away from the desk at a separate time. If any exercise brings your pain to 6 out of 10 or higher, stop for the day.',
        'The 2023 heel pain guideline gives calf and plantar fascia stretching its top grade, A, and strength training a B. Both are for plantar fasciitis specifically, but the same tissues take the load during standing desk work. For the full plantar fasciitis exercise list, see [plantar fasciitis exercises and stretches](/plantar-fasciitis-exercises/).',
      ],
      exercises: [
        {
          name: 'Calf stretch (straight knee)',
          evidence: {
            level: 'moderate',
            why: 'The 2023 heel pain guideline grades calf stretching A. A tight calf was the strongest risk factor for plantar fasciitis in a 2003 case-control study.',
          },
          dose: '2 holds of 30 seconds, each leg',
          how: 'Step back from your desk, put your hands on the desk edge or a wall, and keep the back leg straight with the heel down. This targets the gastrocnemius, the bigger outer calf muscle. You can do this during a transition from standing to sitting.',
          media: 'calf_stretch_straight',
          caption: 'Calf stretch: back leg straight, heel down, hands on desk or wall',
          alt: 'A figure leaning against a desk with the back leg straight and the calf highlighted',
        },
        {
          name: 'Calf stretch (bent knee)',
          evidence: {
            level: 'moderate',
            why: 'Same guideline support. Targets the soleus, the deeper calf muscle, which only releases with the knee bent.',
          },
          dose: '2 holds of 30 seconds, each leg',
          how: 'Same position, but bend the back knee until you feel the stretch lower down, closer to the heel. The soleus, the deeper calf muscle, only lets go when the knee is bent.',
          media: 'calf_stretch_bent',
          caption: 'Soleus stretch: bend the back knee to feel it near the heel',
          alt: 'A figure in a desk stretch with the back knee bent, the lower calf highlighted',
        },
        {
          name: 'Heel raises, seated',
          evidence: {
            level: 'early',
            why: 'Seated heel raises load the soleus with less overall demand than standing versions. Not tested for standing desk pain specifically.',
          },
          dose: '3 sets of 15, both feet',
          how: 'Sit at your desk with feet flat on the floor. Raise both heels as high as you can, hold for a second, then lower slowly. This works the soleus, the deeper calf muscle, and you can do it during any sitting break without leaving your chair.',
          media: 'heel_raise_seated',
          caption: 'Seated heel raises: raise both heels, hold, lower slowly',
          alt: 'A seated figure raising both heels off the floor with the calves highlighted',
        },
        {
          name: 'Toe spread',
          evidence: {
            level: 'early',
            why: 'Targets intrinsic foot muscles. Not part of the tested programs on this page.',
          },
          dose: '3 sets of 10, hold 5 seconds',
          how: 'Sit at your desk and spread all five toes apart as wide as you can, then hold. This activates the small muscles between the toes that get compressed inside shoes during standing. You can do it with shoes off during a sitting break.',
          media: 'toe_spread',
          caption: 'Toe spread: spread all five toes apart and hold',
          alt: 'A foot viewed from above with toes spread wide apart',
        },
        {
          name: 'Short foot, seated',
          evidence: {
            level: 'early',
            why: 'A 2024 review found short-foot training changed arch shape but not pain. Walkito includes it as part of a broader program.',
          },
          dose: '3 sets of 10, hold 5 seconds, each foot',
          how: 'Sit with your foot flat on the floor. Pull the ball of the foot toward the heel so the arch lifts, without curling the toes. This trains the small muscles inside the arch that support it during standing.',
          media: 'short_foot_seated',
          caption: 'Short foot: pull the ball of the foot toward the heel so the arch lifts',
          alt: 'A seated leg with the foot on the floor, the arch highlighted as it lifts',
        },
        {
          name: 'Heel raises, both feet (standing)',
          evidence: {
            level: 'moderate',
            why: 'The 2023 heel pain guideline grades strength training B for plantar fasciitis. Builds the calf strength that absorbs standing load.',
          },
          dose: '3 sets of 10, both feet',
          how: 'Stand at your desk, rise straight up over the big toes over about three seconds, then lower slowly. Hold the desk edge for balance. The detailed progression, including the towel variation, is in [calf raises for plantar fasciitis](/calf-raises-plantar-fasciitis/).',
          media: 'heel_raise_double',
          caption: 'Standing heel raises: rise over the big toes, lower slowly',
          alt: 'A standing figure rising onto the toes of both feet with the calves highlighted',
        },
      ],
      table: {
        caption: 'Starting doses for standing desk foot pain',
        head: ['Exercise', 'Dose', 'Where', 'What you should feel'],
        rows: [
          ['Calf stretch (straight knee)', '2 x 30 seconds, each leg', 'At desk or wall', 'A stretch in the upper calf'],
          ['Calf stretch (bent knee)', '2 x 30 seconds, each leg', 'At desk or wall', 'A stretch low in the calf, near the heel'],
          ['Seated heel raises', '3 x 15, both feet', 'At desk, seated', 'The calves working gently'],
          ['Toe spread', '3 x 10 (5-second hold)', 'At desk, seated, shoes off', 'Toes spreading, no pain'],
          ['Short foot', '3 x 10 (5-second hold), each foot', 'At desk, seated', 'The arch lifting, toes relaxed'],
          ['Standing heel raises', '3 x 10, both feet', 'At desk, standing', 'The calves working, not sharp pain'],
        ],
      },
      cites: [CITE.guideline, CITE.riddle],
    },
    {
      h2: 'Should you shift your weight, use a footrest, or just move more?',
      paragraphs: [
        'All three help, and all three are variations of the same idea: break up the static standing posture. The 2015 expert statement emphasises that seated work should be regularly broken up with standing, and that standing itself should include light activity. Even shifting your weight from one foot to the other changes which muscles are loaded and promotes blood flow in the lower legs.',
        'A small footrest or a low bar under the desk lets you prop one foot up and shift the load between sides. This is an old factory-floor strategy, and it is one of the interventions the occupational health review lists. You do not need a special product for this. A sturdy box or a low shelf works.',
        'Short movement breaks during sitting are just as important. Stand up, walk to the kitchen and back, or do a set of the seated heel raises or toe spreads from the table above. The goal is not a workout. It is avoiding the static posture that causes the problem in the first place.',
      ],
      cites: [CITE.buckley, CITE.waters],
    },
    {
      h2: 'How do you transition to a standing desk without foot pain?',
      paragraphs: [
        'Start with less standing than you think you need. The 2015 expert statement recommends building toward 2 hours of standing and light activity per day, not starting there. If you are new to standing, begin with 15 to 20 minutes of standing per hour and increase gradually over a few weeks.',
        'A practical first week: stand for 15 minutes, sit for 45 minutes, repeat through the day. In the second week, move to 20 minutes standing, 40 sitting. By the third or fourth week, try 30 and 30. Listen to your feet and lower back. If discomfort is building, sit down sooner instead of pushing through.',
        'Add a mat from the start if you have one. Wear shoes with some cushioning, even at home. Do the calf stretches from the table above at least once a day. If you already have foot pain from standing and want the broader guide, [why do my feet hurt after standing all day](/feet-hurt-standing-all-day/) covers the overlap between standing desk pain and conditions like plantar fasciitis. For the nurse-specific version, see [foot pain for nurses](/nurses-foot-pain/).',
      ],
      cites: [CITE.buckley],
    },
    {
      h2: 'Could standing desk foot pain be plantar fasciitis or something else?',
      paragraphs: [
        'Standing desk foot pain is usually general discomfort from prolonged static standing. But if the pain is sharp, concentrated near the heel, and worst on the first steps after you sit for a while, that pattern points toward plantar fasciitis. Standing for most of the working day raised the odds of plantar fasciitis 3.6 times in one case-control study, so the standing desk is a plausible contributor.',
        'The exercises that help both conditions overlap heavily. If your pain follows the plantar fasciitis pattern, [plantar fasciitis exercises and stretches](/plantar-fasciitis-exercises/) is the fuller guide. If your arches feel flat, see [flat feet exercises for fallen arches](/flat-feet-exercises/). If you are not sure, see a clinician before loading the foot with exercise.',
      ],
      cites: [CITE.riddle],
    },
  ],
  faq: [
    {
      q: 'How long should you stand at a standing desk?',
      a: 'A 2015 expert statement recommends building toward 2 hours of standing and light activity per working day, eventually progressing to 4 hours, broken into shorter bouts. A 2017 systematic review found that musculoskeletal symptoms became clinically relevant after about 40 minutes of continuous standing. A practical starting point is 20 to 30 minutes of standing, followed by 20 to 30 minutes of sitting.',
      cites: [CITE.buckley, CITE.coenen],
    },
    {
      q: 'Do anti-fatigue mats actually work for standing desks?',
      a: 'A 2015 occupational health review lists floor mats among the interventions with evidence for reducing discomfort during prolonged standing. A crossover study of surgical team members found lower pain and fatigue scores with a 15 mm rubber mat compared to standard flooring. The benefit is for comfort and fatigue, not for preventing a specific condition. A mat combined with shorter standing bouts and calf stretches covers more than a mat alone.',
      cites: [CITE.waters],
    },
    {
      q: 'Can a standing desk cause plantar fasciitis?',
      a: 'Standing for most of the working day raised the odds of plantar fasciitis 3.6 times in a case-control study of 50 cases and 100 controls. A standing desk increases your daily standing hours, so it is a plausible contributor if your calf is already tight, which was the strongest independent risk factor at 23.3 times the odds. Calf stretches are the most direct way to address both risk factors.',
      cites: [CITE.riddle],
    },
    {
      q: 'Is it better to sit or stand all day?',
      a: 'Neither. The 2014 Karakolis and Callaghan review found sufficient evidence that sit-stand workstations reduce low-back discomfort, with no decrease in productivity, but found no optimal sit-stand ratio. The 2017 Coenen review found that uninterrupted standing causes symptoms after about 40 minutes. Alternating between sitting and standing is what the evidence supports, not choosing one or the other.',
      cites: [CITE.karakolis, CITE.coenen],
    },
    {
      q: 'What exercises can you do at a standing desk?',
      a: 'During standing: calf stretches against the desk edge (2 holds of 30 seconds each side) and standing heel raises (3 sets of 10). During sitting breaks: seated heel raises (3 sets of 15), toe spreads and the short foot exercise. These target the calf, plantar fascia and intrinsic foot muscles that carry the standing load. If any exercise takes your pain to 6 out of 10 or higher, stop for the day.',
      cites: [CITE.guideline],
    },
    {
      q: 'Why do my feet hurt more standing still than walking?',
      a: 'Walking activates the calf pump, which pushes blood back up from the lower legs with each step. Standing still takes that pump away, so blood pools in the feet and lower legs, and the muscles hold the same static position instead of contracting and relaxing. A 2017 systematic review confirmed this mechanism and found lower-limb symptoms develop reliably during static standing in laboratory settings.',
      cites: [CITE.coenen],
    },
  ],
  redFlags: {
    h2: 'See a clinician first if',
    bullets: [
      'the pain followed an injury or a fall',
      'you cannot put weight on the foot, or you are limping',
      'the foot is numb, tingling, burning, swollen or warm',
      'the heel or foot is red, or you have a fever or feel unwell',
      'pain wakes you at night',
      'pain is sharp, or getting worse despite sitting more',
      'pain is in one pinpoint spot and gets worse with activity, which can be a stress fracture pattern and not standing discomfort',
      'one leg or foot has swollen suddenly and is painful, red or warm',
      'you have diabetes, reduced feeling in your feet or poor circulation',
      'the pain has not eased after several weeks of shorter standing bouts, a mat and the exercises on this page',
    ],
  },
  program: {
    h2: 'Doing it as a plan',
    text:
      'You do not have to work out the order, the doses or when to progress. Walkito builds a plan one week at a time around one goal. If your standing desk pain follows the morning-pain pattern of plantar fasciitis, the first goal is morning pain at 1 out of 10 or less for 14 days in a row.',
    more: [
      'You pick 3, 5 or 7 days a week and sessions of 3, 5 or 10 minutes. Every 14 days (then every 28 once your first goal is met), a short test checks calf endurance, arch hold and balance, so you can see whether the work is doing anything.',
      'Walkito is an exercise program. It does not diagnose and is not a substitute for a clinician. If pain is sharp, getting worse or keeping you up at night, see a clinician first.',
    ],
    cta: 'Start with 3 minutes a day.',
  },
  crumb: 'Standing desk foot pain',
  campaign: 'guide-standing-desk',
};
