import { CITE } from '@/lib/citations';
import type { Guide } from '../types';

/*
 * New citations (key | Vancouver | doi | pmid | design):
 *
 * ajimshaMfr | Ajimsha MS, Binsu D, Chithra S. Effectiveness of myofascial release in the management of plantar heel pain: a randomized controlled trial. Foot (Edinburgh). 2014;24(2):66–71. | 10.1016/j.foot.2014.03.005 | 24703512 | double-blinded RCT (n=66), therapist myofascial release vs sham ultrasound, 12 sessions over one month, follow-up at three months
 * sabanCalfMassage | Saban B, Deutscher D, Ziv T. Deep massage to posterior calf muscles in combination with neural mobilization exercises as a treatment for heel pain: a pilot randomized clinical trial. Manual Therapy. 2014;19(2):102–108. | 10.1016/j.math.2013.08.001 | 24090993 | pilot single-blind RCT (n=69), 8 sessions over one to one and a half months
 * fraserManual | Fraser JJ, Corbett R, Donner C, Hertel J. Does manual therapy improve pain and function in patients with plantar fasciitis? A systematic review. Journal of Manual & Manipulative Therapy. 2018;26(2):55–65. | 10.1080/10669817.2017.1322736 | 29686479 | systematic review of 7 RCTs
 * ranbhorFoamRoller | Ranbhor AR, Prabhakar AJ, Eapen C. Immediate effect of foam roller on pain and ankle range of motion in patients with plantar fasciitis: a randomized controlled trial. Hong Kong Physiotherapy Journal. 2021;41(1):25–33. | 10.1142/S1013702521500025 | 34054254 | RCT (n=50), single session, outcomes immediately after
 * ryuMassageBall | Ryu SC, Lee DO, Park Y, Shin Y, Lee DY, Kyung MG. Clinical efficacy of application-linked stretching ball as digital therapeutics in plantar fasciitis. Journal of Clinical Medicine. 2024;13(9):2722. | 10.3390/jcm13092722 | 38731253 | small RCT (20 randomized, 14 analysed), simple vs app-linked massage ball, follow-up 3 months, no no-ball control
 * buttagatSelfMassage | Buttagat V, Boonyaratana Y, Kluayhomthong S, Noiprasert S, Keawduangdee P, Areeudomwong P. A randomized controlled trial of a supervised self-administered program for chronic plantar fasciitis. Chiropractic & Manual Therapies. 2025;34(1):2. | 10.1186/s12998-025-00624-w | 41437285 | RCT (n=64), self-massage + stretching + strengthening vs leaflet, follow-up at two months
 * shindeFrozenBall | Shinde VV, Patil PR. Efficacy of static stretching along with frozen tennis ball exercises in individuals with plantar fasciitis. Cureus. 2026;18(8):e114000. | 10.7759/cureus.114000 | 42699086 | small two-group comparative study (n=30), allocation method unclear, two months
 *
 * Existing keys reused: guideline, rathleff, siriphorn.
 *
 * Note for review: /exercises/foot-roll/ says "Walkito starts at 2 minutes".
 * The app plan dose (recovery, level 1) is 1 x 60 s, which is what this page uses.
 */

export const MASSAGE_BALL_EN: Guide = {
  lang: 'en',
  page: 'massageBall',
  mainSource: CITE.guideline,
  published: '2026-10-09',
  updated: '2026-10-09',
  title: 'Massage Ball or Frozen Bottle for Plantar Fasciitis?',
  description:
    'Does a massage ball help plantar fasciitis? What trials found for balls, rollers and a frozen bottle, how hard and how long to roll, and when to skip it.',
  h1: 'Massage ball, roller or frozen bottle for plantar fasciitis: what the research says',
  lede:
    'A massage ball can ease plantar fasciitis pain for a while, but it is a comfort step, not the main tool. Hands-on soft tissue work by a clinician has a top guideline grade. Rolling a ball or frozen bottle yourself is barely tested. Roll gently and briefly, and keep stretching and strength work as the core.',
  intro: [
    'This page compares the tools and the evidence. For the single move, step by step, see the [foot roll exercise](/exercises/foot-roll/). For the full routine with doses, see [plantar fasciitis exercises](/plantar-fasciitis-exercises/).',
  ],
  takeaways: [
    'The 2023 heel pain guideline gives manual therapy by a clinician its top grade, **A**, but that means skilled hands-on work, not rolling a ball at home (Koc and colleagues, 2023).',
    'In the only trial of a plain massage ball found for this page, 14 people with long-standing plantar fasciitis were asked to roll at least three times a day, and their foot scores did not improve significantly over three months (Ryu and colleagues, 2024).',
    'In a 50-person trial, one session of foam rolling the calf and sole eased pain about as much as stretching, measured right after (Ranbhor and colleagues, 2021).',
    'No trial has compared a frozen bottle with a room-temperature ball, so the cold is a comfort choice with little evidence behind it either way.',
    'Walkito starts the foot roll at 1 x 60 seconds, as a recovery step, with firm pressure that never turns sharp.',
  ],
  toc: true,
  sections: [
    {
      h2: 'Does a massage ball help plantar fasciitis?',
      keyFact: 'In a small trial of 14 people asked to roll a massage ball at least three times a day, foot scores did not improve significantly over three months (Ryu and colleagues, 2024).',
      paragraphs: [
        'A massage ball helps some people with plantar fasciitis feel looser and less sore for a short time, but there is little proof that rolling on its own changes the pain over months. Plantar fasciitis is irritation of the plantar fascia, the thick band under the sole that runs from the heel to the toes. Rolling presses on that band and on the small muscles around it.',
        'The direct evidence is thin. In a 2024 trial from Korea, 14 people whose heel pain had lasted at least six months were asked to roll a massage ball under the sole at least three times a day, more than five minutes each time. Over three months, the group as a whole did not improve significantly on a foot pain questionnaire. The trial was tiny and had no group without a ball, so it cannot prove the ball does nothing, only that nobody has shown it does much.',
        'That is why rolling sits in the recovery slot on this site, next to the exercises with stronger backing: plantar fascia and calf stretching (guideline grade A) and calf strength work (grade B).',
      ],
      figure: {
        id: 'plantar-fascia',
        caption: 'The plantar fascia runs from the heel to the base of the toes. A ball presses along this band.',
        alt: 'Side view of a foot with the plantar fascia highlighted from the heel bone to the toes',
      },
      cites: [CITE.ryuMassageBall, CITE.guideline],
    },
    {
      h2: 'What does the research say about massage for plantar fasciitis?',
      keyFact: 'In a 66-person trial, therapist myofascial release cut Foot Function Index scores by 72.4% after a month, against 7.4% with a sham, and by 60.6% at three months (Ajimsha and colleagues, 2014).',
      paragraphs: [
        'Massage by a trained clinician has decent evidence for plantar fasciitis. Massage you do yourself with a ball has very little.',
        '**Hands-on care by a clinician.** The 2023 heel pain guideline gives manual therapy grade **A**, its top grade. It defines this as skilled work on the joints and soft tissue of the leg and foot, such as myofascial release (slow, sustained pressure and stretch on the tissue). In a 2014 trial of 66 people, a therapist gave 12 sessions of myofascial release to the calf and sole over a month. Scores on the Foot Function Index, a questionnaire about pain and daily function, fell by 72.4%, against 7.4% in a group given sham (fake) ultrasound. At three months the drop was still 60.6%. A 2014 pilot trial of calf massage found a smaller, short-term gain (more on that in the calf section below).',
        'A 2018 review of 7 trials found that adding manual therapy improved function in 6 of them, but it clearly beat the comparison for pain in only 2 of 6. The authors suggest using it alongside stretching and strengthening.',
        '**Massage you do yourself.** Only a few trials test self-massage, and each bundles it with exercise or measures it for minutes. In a 2021 trial of 50 people, one session of foam rolling the calf and sole lowered pain by about 3 points on a 10 cm scale, against about 2.6 for one session of stretching, and the gap between the groups was not statistically significant. That was measured right after the session, with no follow-up. In a 2025 trial of 64 people, a supervised program of strengthening, stretching and 10 minutes of self-massage with a stick, three days a week for a month, lowered pain by 2.5 points more than a self-care leaflet, and the gain held a month later. Because the massage came packaged with exercise, its own share is unknown.',
      ],
      table: {
        caption: 'Massage for plantar fasciitis: who did it and what was found',
        head: ['Study', 'Who massaged', 'People', 'What was found'],
        rows: [
          ['Ajimsha 2014', 'Therapist, calf and sole', '66', 'Large drop in pain and disability vs sham, held at three months'],
          ['Saban 2014', 'Therapist, calf', '69', 'More gain than ultrasound, short term only'],
          ['Ranbhor 2021', 'Self, foam roller on calf and sole', '50', 'Pain eased about as much as stretching, one session only'],
          ['Ryu 2024', 'Self, massage ball', '14', 'No significant change over three months'],
          ['Buttagat 2025', 'Self, stick, plus exercises', '64', 'Better than a leaflet, but bundled with exercise'],
        ],
      },
      sourceNote: 'Ajimsha 2014: Foot Function Index change from week 1 to week 4, P<0.001 between groups. Saban 2014: Foot & Ankle Computerized Adaptive Test, mean change 15 (95% CI 9 to 21) vs 6 (1 to 11) points. Ranbhor 2021: VAS between-group p = 0.171; the roller group had higher calf pressure pain thresholds (gastrocnemius p = 0.029, soleus p = 0.013). Buttagat 2025: VAS mean difference -2.5 (95% CI -3.5 to -1.5); one author designed the stick (not sold). Fraser 2018: effect sizes favoured manual therapy for pain in 2 of 6 studies.',
      cites: [CITE.guideline, CITE.ajimshaMfr, CITE.sabanCalfMassage, CITE.fraserManual, CITE.ranbhorFoamRoller, CITE.ryuMassageBall, CITE.buttagatSelfMassage],
    },
    {
      h2: 'Tennis ball, lacrosse ball, spiky ball, roller or bottle: which is best?',
      paragraphs: [
        'No study has compared massage tools for plantar fasciitis, so the best one is the one that gives you firm pressure without a sharp spike of pain. The table below is practical guidance, not trial data.',
        'Start soft. A tennis ball spreads the pressure and suits a sore foot. Move to a lacrosse ball only if the tennis ball feels like nothing after a few sessions. A golf ball often digs straight into the sore spot at the heel. A spiky ball adds a skin sensation, but there is no evidence the spikes work any deeper.',
      ],
      table: {
        caption: 'Massage tools for plantar fasciitis compared (practical guidance, not trial data)',
        head: ['Tool', 'Pressure', 'Good for', 'Watch out'],
        rows: [
          ['Tennis ball', 'Soft', 'Starting out, a very sore foot', 'Can feel too light later'],
          ['Lacrosse ball', 'Firm', 'Deeper pressure once soreness settles', 'Easy to press too hard'],
          ['Spiky massage ball', 'Medium, prickly on the skin', 'People who like the skin sensation', 'Spikes add no depth'],
          ['Golf ball', 'Hard, small point', 'Small spots under the arch', 'Often too much near the heel'],
          ['Foot roller or rolling pin', 'Medium', 'Long, even strokes along the arch', 'Ridged rollers can bruise'],
          ['Frozen water bottle', 'Medium, plus cold', 'End of a long day, if cold feels good', 'Numbness hides how hard you press'],
          ['Foam roller', 'Soft to medium', 'The calf', 'Too wide to reach the arch well'],
        ],
      },
      cites: [],
    },
    {
      h2: 'Does a frozen water bottle help plantar fasciitis?',
      keyFact: 'In one small study of 30 people, adding a frozen tennis ball to stretching for two months lowered pain more than stretching alone, but how people were assigned to groups was unclear (Shinde and Patil, 2026).',
      paragraphs: [
        'A frozen water bottle can feel soothing on a sore sole, but no trial has shown that the cold adds anything over a room-temperature bottle or ball. It presses along the arch like a roller and numbs the skin for a while.',
        'The only study found that adds frozen rolling to an exercise program is small and weak. In a 2026 study of 30 people, one group did static stretching and the other did stretching plus a frozen tennis ball, for two months. Pain fell from about 7.7 to 3.5 out of 10 in the frozen-ball group and from 7.6 to 6.7 with stretching alone. The report does not make clear how people were placed in the groups, and the stretching group improved far less than in larger trials, so read the gap with caution. The 2023 heel pain guideline makes no recommendation on ice.',
        'If you like the cold, use it with care. Keep it to about 10 minutes, wrap a thin sock around the bottle if your skin burns, and skip cold if you have poor feeling in your feet or Raynaud\'s. Claims that a frozen bottle "reduces inflammation" are not backed by plantar fasciitis trials. For the wider question of cold versus warmth, see [ice or heat for plantar fasciitis](/ice-or-heat-for-plantar-fasciitis/).',
      ],
      cites: [CITE.shindeFrozenBall, CITE.guideline],
    },
    {
      h2: 'How hard and how long should you roll your foot?',
      paragraphs: [
        'Roll with firm, steady pressure that stays at or below about 3 to 5 out of 10 on a pain scale, for about a minute per foot. There is no tested best dose, so start short and add time only if your foot feels better afterwards.',
        'The studies used very different amounts. In the 2021 foam roller trial, people rolled for 45 seconds, rested 15 seconds and repeated that five times. In the 2024 massage ball trial, people were asked to roll at least three times a day for more than five minutes each time, and the group did not improve significantly. In the 2025 trial, self-massage took 10 minutes within a longer exercise session. Across these studies, more rolling did not look clearly better.',
        'Walkito starts the foot roll at 1 x 60 seconds, as a short recovery exercise on lighter days. Sit down and let the weight of the leg do most of the work.',
      ],
      exercises: [
        {
          name: 'Foot roll',
          evidence: { level: 'early', why: 'Self-rolling has only small or short trials for plantar fasciitis, with mixed results. Hands-on clinician work has stronger evidence.' },
          dose: 'Walkito starts at 1 x 60 seconds',
          how: 'Sit with a ball or bottle under the arch. Roll slowly from the ball of the foot to just in front of the heel and back, about one pass every two seconds. Lean forward to add pressure, sit back to ease it.',
          often: 'After a session or a long day on your feet',
          feel: 'Firm, dull pressure under the arch, easing as you go',
          stop: 'Pain turns sharp, burning or tingling, or reaches 6/10',
          media: 'foot_roll',
          caption: 'Foot roll: roll the sole slowly over a ball, firm but never sharp',
          alt: 'A seated figure rolling the sole of one foot over a ball',
        },
      ],
      cites: [CITE.ranbhorFoamRoller, CITE.ryuMassageBall, CITE.buttagatSelfMassage],
    },
    {
      h2: 'Should you roll or massage your calf for plantar fasciitis?',
      keyFact: 'In a 69-person pilot trial, deep calf massage with nerve-gliding exercises and self-stretching improved function more than heel ultrasound with the same stretches (Saban and colleagues, 2014).',
      paragraphs: [
        'Working on the calf is a reasonable addition for plantar fasciitis, because a tight calf pulls on the heel and the trials that helped most targeted the calf as well as the sole. The calf muscles join the Achilles tendon, which attaches to the heel bone close to where the plantar fascia starts.',
        'In the 2014 pilot trial of 69 people, deep massage to the calf, plus nerve-gliding exercises and self-stretching, improved function more than ultrasound to the heel with the same stretches. In the 2021 foam roller trial, people also rolled the calf from the back of the knee to the Achilles, and their calves became less tender to pressure than in the stretching group. Calf stretching has stronger backing than calf rolling: the 2023 guideline grades it **A**, and a 2020 review found moderate-quality evidence that plantar fascia stretching eased pain more than calf stretching, and very low-quality evidence that calf stretching beat sham stretching.',
        'Roll the calf on a foam roller for a minute if you like it, then do the two stretches below. More in [tight calves](/tight-calves/).',
      ],
      exercises: [
        {
          name: 'Calf stretch (straight knee)',
          evidence: { level: 'strong', why: 'Guideline grade A for calf and plantar fascia stretching.' },
          dose: 'Walkito starts at 2 holds of 30 seconds, each leg',
          how: 'Hands on a wall, back leg straight, heel on the floor. Lean the hips forward until you feel a pull in the upper calf.',
          often: 'Most days',
          feel: 'A stretch in the upper calf',
          stop: 'Pain at the heel reaches 6/10',
          media: 'calf_stretch_straight',
          caption: 'Calf stretch: back leg straight, heel down, lean forward',
          alt: 'A figure leaning on a wall with the back leg straight and the calf highlighted',
        },
        {
          name: 'Soleus stretch (bent knee)',
          evidence: { level: 'strong', why: 'Guideline grade A. Reaches the soleus, the deeper calf muscle, which only stretches with the knee bent.' },
          dose: 'Walkito starts at 2 holds of 30 seconds, each leg',
          how: 'Same wall position, then bend the back knee until the stretch moves lower, toward the heel. Keep the heel down.',
          often: 'Most days, after the straight-knee stretch',
          feel: 'A stretch low in the calf, near the heel',
          stop: 'Pain at the heel reaches 6/10',
          media: 'calf_stretch_bent',
          caption: 'Soleus stretch: bend the back knee until the stretch moves lower',
          alt: 'A figure in a split stance with bent knees, the lower calf highlighted',
        },
      ],
      cites: [CITE.sabanCalfMassage, CITE.ranbhorFoamRoller, CITE.guideline, CITE.siriphorn],
    },
    {
      h2: 'Why does massaging plantar fasciitis hurt, and can it make it worse?',
      paragraphs: [
        'Massaging plantar fasciitis often hurts because the tissue near the heel is already sensitive, and pressure on a sensitive spot feels sharp. Mild tenderness while you roll that fades within minutes is common. Pain that is sharp, lasts into the next morning or leaves a bruise means you pressed too hard or too long.',
        'Use your first steps the next morning as the test. If those steps are worse after a rolling session, cut the time in half, switch to a softer ball and stay away from the heel itself. If they are still worse, stop rolling for a while: the stretches and strength work matter more. More on that pattern in [heel pain in the morning](/heel-pain-in-the-morning/).',
        'Hard tools carry the most risk. Golf balls and ridged rollers focus force on a small area, and standing on a ball puts your whole body weight on it. Sit down instead. If the pain sits in the middle of the heel pad and feels bruised, that can be [heel fat pad syndrome](/heel-fat-pad-syndrome/), and pressing on it usually does not help.',
      ],
      cites: [],
    },
    {
      h2: 'Who should not use a massage ball or frozen bottle?',
      paragraphs: [
        'Most people can roll their foot safely, but a few should skip it or ask a clinician first, because rolling relies on you feeling when pressure is too much.',
      ],
      bullets: [
        'Diabetes with reduced feeling in the feet: you may not notice bruising or cold injury.',
        'Numbness, tingling or burning: that points toward a nerve, and pressure can stir it up.',
        'One very sore spot on the heel bone: that can be a stress fracture, a small crack in the bone.',
        'Blood thinners or easy bruising: soft ball and light pressure, if at all.',
        'Raynaud\'s or poor circulation: skip the frozen bottle.',
      ],
      cites: [],
    },
    {
      h2: 'Where does rolling fit in a plantar fasciitis routine?',
      paragraphs: [
        'Rolling fits best as a short extra around the exercises that carry the evidence: a minute of rolling, the plantar fascia stretch before your first steps, calf stretches during the day, and calf strength work a few times a week. In a 48-person trial, slow heel raises with a towel under the toes gave better foot function scores than plantar fascia stretching at three months, though the groups were level at six and twelve months.',
        'If you can see a physical therapist, hands-on soft tissue work is the version of massage the guideline backs most firmly. At home, keep the ball, but do not let it replace the [plantar fascia stretch](/exercises/plantar-fascia-stretch/) or [calf raises](/calf-raises-plantar-fasciitis/).',
      ],
      cites: [CITE.rathleff, CITE.guideline],
    },
  ],
  faq: [
    {
      q: 'Does rolling a ball under your foot help plantar fasciitis?',
      cites: [CITE.ryuMassageBall, CITE.ranbhorFoamRoller],
      a: 'It can ease pain for a short time, but there is little proof it helps over months. In a 50-person trial, one session of foam rolling eased pain about as much as stretching, measured right after. In a 14-person trial, people asked to roll a massage ball at least three times a day saw no significant change in three months. Use it as a comfort step next to stretching and strength work.',
    },
    {
      q: 'Is a frozen water bottle better than a ball for plantar fasciitis?',
      cites: [CITE.shindeFrozenBall],
      a: 'Nobody has tested that directly. The bottle adds cold, which numbs the skin and can feel good after a long day. One small study of 30 people found a frozen tennis ball plus stretching beat stretching alone over two months, but its methods were unclear. If cold feels good, use it for about 10 minutes. If not, a room-temperature ball is fine.',
    },
    {
      q: 'How long should I roll my foot for plantar fasciitis?',
      cites: [CITE.ranbhorFoamRoller, CITE.ryuMassageBall],
      a: 'About a minute per foot is a reasonable start. Trials used anything from five rounds of 45 seconds to more than five minutes three times a day, and longer rolling did not look clearly better. Add time only if your foot feels better afterwards and your first steps the next morning are no worse.',
    },
    {
      q: 'Is a tennis ball, lacrosse ball or golf ball best for plantar fasciitis?',
      a: 'No study has compared them. A tennis ball is the safest start because it is soft and spreads the pressure. A lacrosse ball gives firmer pressure once the foot is less sore. A golf ball is small and hard and often digs into the sore spot near the heel. Pick the softest ball that still gives you a firm, dull pressure.',
    },
    {
      q: 'Can massaging plantar fasciitis make it worse?',
      a: 'Yes, if you press too hard or too long. Sharp pain while rolling, a bruise, or first steps that are worse the next morning are signs to back off. Cut the time, switch to a softer ball, sit down and avoid pressing straight into the heel. If pain keeps rising despite that, stop rolling and see a clinician.',
    },
    {
      q: 'Does the plantar fasciitis guideline recommend massage?',
      cites: [CITE.guideline, CITE.ajimshaMfr],
      a: 'The 2023 heel pain guideline gives manual therapy grade A, its top grade, but it means skilled hands-on work by a clinician on joints and soft tissue. In one 66-person trial, therapist myofascial release cut pain and disability scores by 72.4% after a month, against 7.4% with a sham. Self-rolling with a ball is not graded separately.',
    },
  ],
  redFlags: {
    h2: 'See a clinician first if',
    bullets: [
      'the pain followed an injury, a fall or a pop under the foot',
      'squeezing the sides of the heel hurts, or one spot on the bone is very tender, which can point toward a stress fracture',
      'you have numbness, tingling or burning in the foot',
      'you have diabetes, reduced feeling in your feet or poor circulation',
      'the foot is red, warm or swollen, or you have a fever',
      'rolling leaves bruises, or your first steps are clearly worse the morning after',
      'pain keeps you awake at night or is there at rest',
      'it has not improved after several weeks of daily stretching and calf work',
    ],
  },
  program: {
    h2: 'Doing it as a plan',
    text: 'You do not have to decide when to roll and when to stretch. Walkito builds a plan one week at a time, with the foot roll as a short recovery step and the stretches and calf work as the core. For heel pain, the first goal is morning pain at or under 1 out of 10 for 14 days in a row.',
    more: [
      'You pick 3, 5 or 7 days a week and sessions of 3, 5 or 10 minutes. Every 14 days (then every 28 once a goal is reached), a short test checks calf endurance, arch hold and balance, so you can see what is changing. Walkito is an exercise program for adults. It does not diagnose and is not a substitute for a clinician.',
    ],
    cta: 'Start with 3 minutes a day.',
  },
  crumb: 'Massage ball and frozen bottle',
  campaign: 'guide-massage-ball',
};
