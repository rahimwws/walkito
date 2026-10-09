import { CITE } from '@/lib/citations';
import type { Guide } from '../types';

/**
 * ── New citations (append to CITATIONS[] in lib/citations.ts) ──────────
 *
 * grossFlatFeetKnee | Gross KD, Felson DT, Niu J, Hunter DJ, Guermazi A, Roemer FW, Dufour AB, Gensure RH, Hannan MT. Association of flat feet with knee pain and cartilage damage in older adults. Arthritis Care & Research. 2011;63(7):937–944. | doi: 10.1002/acr.20431 | pmid: 21717597 | cross-sectional (Framingham, n=1,903)
 * kosashviliPesPlanus | Kosashvili Y, Fridman T, Backstein D, Safir O, Bar Ziv Y. The correlation between pes planus and anterior knee or intermittent low back pain. Foot & Ankle International. 2008;29(9):910–913. | doi: 10.3113/FAI.2008.0910 | pmid: 18778669 | retrospective cross-sectional review (97,279 military recruits)
 * nealFootPosture | Neal BS, Griffiths IB, Dowling GJ, et al. Foot posture as a risk factor for lower limb overuse injury: a systematic review and meta-analysis. Journal of Foot and Ankle Research. 2014;7(1):55. | doi: 10.1186/s13047-014-0055-4 | pmid: 25558288 | systematic review and meta-analysis of 21 prospective cohorts
 * bartonPfpGait | Barton CJ, Levinger P, Menz HB, Webster KE. Kinematic gait characteristics associated with patellofemoral pain syndrome: a systematic review. Gait & Posture. 2009;30(4):405–416. | doi: 10.1016/j.gaitpost.2009.07.109 | pmid: 19651515 | systematic review of 24 studies (no usable prospective data; case-control studies analysed)
 * collinsPfpOrthoses | Collins N, Crossley K, Beller E, Darnell R, McPoil T, Vicenzino B. Foot orthoses and physiotherapy in the treatment of patellofemoral pain syndrome: randomised clinical trial. BMJ. 2008;337:a1735. | doi: 10.1136/bmj.a1735 | pmid: 18952682 | RCT (n=179, one-year follow-up)
 * molgaardPfp | Mølgaard CM, Rathleff MS, Andreasen J, et al. Foot exercises and foot orthoses are more effective than knee focused exercises in individuals with patellofemoral pain. Journal of Science and Medicine in Sport. 2018;21(1):10–15. | doi: 10.1016/j.jsams.2017.05.019 | pmid: 28844333 | RCT (n=40, 12-month follow-up)
 * willyPfpGuideline | Willy RW, Hoglund LT, Barton CJ, et al. Patellofemoral Pain: Clinical Practice Guidelines Linked to the International Classification of Functioning, Disability and Health From the Academy of Orthopaedic Physical Therapy of the American Physical Therapy Association. Journal of Orthopaedic & Sports Physical Therapy. 2019;49(9):CPG1–CPG95. | doi: 10.2519/jospt.2019.0302 | pmid: 31475628 | clinical practice guideline
 * crossleyPfpConsensus | Crossley KM, van Middelkoop M, Callaghan MJ, Collins NJ, Rathleff MS, Barton CJ. 2016 Patellofemoral pain consensus statement from the 4th International Patellofemoral Pain Research Retreat, Manchester. Part 2: recommended physical interventions (exercise, taping, bracing, foot orthoses and combined interventions). British Journal of Sports Medicine. 2016;50(14):844–852. | doi: 10.1136/bjsports-2016-096268 | pmid: 27247098 | international consensus statement
 */

export const FLAT_FEET_KNEE_PAIN_EN: Guide = {
  lang: 'en',
  page: 'flatFeetKneePain',
  mainSource: CITE.grossFlatFeetKnee,
  published: '2026-10-09',
  updated: '2026-10-09',
  title: 'Flat Feet and Knee Pain: Is There a Link?',
  description:
    'Flat feet and knee pain: what the studies show about the link, what a clinician checks, whether insoles help, and why hip and knee exercise comes first.',
  h1: 'Flat feet and knee pain: is there a link, and what helps?',
  lede:
    'Flat feet are linked to knee pain, but the link is small and not shown to be a cause. In 1,903 older adults, the flattest feet had 1.3 times the odds of frequent knee pain. For pain at the front of the knee, the best evidence is for hip and knee strengthening, with insoles as a short-term extra.',
  intro: [
    'Your knee aches on the stairs, or after a run, and someone has told you it is because your feet are flat. That is a fair thing to wonder. The foot and the knee do move together. But most people with flat feet have no knee pain at all, and knee pain has many causes that have nothing to do with the arch.',
  ],
  takeaways: [
    'In a 2011 study of 1,903 older adults, the flattest feet had 1.3 times the odds of knee pain on most days and 1.4 times the odds of cartilage damage on the inner side of the knee (Gross and colleagues). The study shows a link, not a cause.',
    'In 97,279 young military recruits, front-of-knee pain was 7 percent with moderate or severe flat feet and 4 percent with mild flat feet or none (Kosashvili and colleagues, 2008).',
    'A 2014 review of 21 prospective studies found only very limited evidence, with small effects, that a rolled-in foot posture raises the risk of pain around the kneecap (Neal and colleagues).',
    'In a trial of 179 adults with kneecap pain, shaped insoles beat flat inserts short term but were no better than physiotherapy, and added nothing on top of it (Collins and colleagues, 2008).',
    'The 2019 US physical therapy guideline gives combined hip and knee exercise its top grade, A, for pain around the kneecap. Insoles are only recommended short term, for people whose feet roll in more than usual, and alongside exercise.',
  ],
  toc: true,
  sections: [
    {
      h2: 'Can flat feet cause knee pain?',
      keyFact: 'In 1,903 older adults, the flattest feet had 1.3 times the odds of frequent knee pain compared with all other feet (Gross and colleagues, 2011).',
      figure: { id: 'arches', caption: 'The same foot bones with a flat foot, a typical arch and a high arch, seen from the inner side.', alt: 'Three feet seen from the inner side on a flat floor: a flat foot whose arch rests on the floor, a typical arch with a small gap underneath, and a high arch with a large gap under the middle of the foot.' },
      paragraphs: [
        'Flat feet are linked to knee pain in several large studies, but none of them proves that the arch causes the pain. The size of the link is small, and it shows up mostly in the flattest feet.',
        'The best known study comes from the Framingham Studies in the United States. Gross and colleagues measured the footprints of 1,903 older adults (average age 65) and asked about knee pain. The 2011 results: the flattest feet had 1.3 times the odds of knee pain on most days, compared with all the other feet. They also had 1.4 times the odds of cartilage damage on the inner side of the knee joint on MRI. Cartilage is the smooth layer that covers the ends of the bones. There was no link with damage in any other part of the knee.',
        'A second study looked at the young end of life. Kosashvili and colleagues reviewed 97,279 young military recruits in 2008. Front-of-knee pain was found in 7 percent of recruits with moderate or severe flat feet, and in 4 percent of those with mild flat feet or normal arches. Mild flat feet, which made up 74 percent of the flat-footed group, carried no extra risk.',
        'Both studies measured people once, so they cannot say whether the foot came first. The Framingham authors also noted that a footprint may not tell a flat foot from a wide, fleshy one, and body weight affects the knee on its own.',
      ],
      sourceNote:
        'Gross 2011: cross-sectional, odds ratio for knee pain 1.3 (95% CI 1.1 to 1.6), medial tibiofemoral cartilage damage 1.4 (95% CI 1.1 to 1.8), adjusted for age, sex and body mass index. Kosashvili 2008: retrospective review, flat feet graded by an orthopedist, front-of-knee pain attributed to the patellofemoral joint.',
      cites: [CITE.grossFlatFeetKnee, CITE.kosashvili],
    },
    {
      h2: 'Where in the knee does flat-foot knee pain show up?',
      paragraphs: [
        'Knee pain linked to flat feet is usually described in one of two places: around or behind the kneecap, or on the inner side of the knee. These are different problems, and they are looked after in different ways.',
        'Pain around or behind the kneecap is called patellofemoral pain. It tends to come on slowly and gets worse with squatting, stairs, running, jumping or sitting for a long time with the knee bent. It is common in teenagers and active adults. This is the knee problem with the most research on foot posture, and most of this page is about it.',
        'Pain on the inner side of the knee in an older adult is more often linked to osteoarthritis, the wear-related changes in a joint. The Framingham study found cartilage damage on the inner side of the knee was more common in the flattest feet, which fits this picture. But a link at one point in time is all the study shows.',
        'A knee that swells after a twist, locks or gives way is a different story. That points to the meniscus (the cartilage cushion inside the knee) or a ligament, and needs a clinician.',
      ],
      cites: [CITE.willyPfpGuideline, CITE.grossFlatFeetKnee],
    },
    {
      h2: 'How could a flat foot affect the knee?',
      paragraphs: [
        'The usual explanation is a chain: when the foot rolls in, the shin bone turns in with it, and the knee drifts inward. Rolling in is called pronation, and some of it is a normal part of every step. The idea is that too much of it changes how the kneecap tracks in its groove.',
        'The foot and shin do turn together. Whether that explains knee pain is less clear. A 2009 review by Barton and colleagues pulled together 24 studies of how people with kneecap pain walk and run. It found some differences at the heel bone and more inward movement at the hip in runners. But the review found no forward-looking studies with usable data. The studies it could weigh compared people who already had pain with people who did not, which cannot separate cause from effect.',
        'The forward-looking evidence is thin. A 2014 review by Neal and colleagues pooled 21 prospective studies of 6,228 people, which follow people over time to see who gets hurt. A rolled-in foot posture was a clear risk factor for shin splints. For kneecap pain, the evidence was very limited and the effects were small. The reviewers concluded that foot posture is one piece of a wider assessment, not the answer on its own.',
        'The hip sits at the top of the same chain. Weak muscles on the outside of the hip let the thigh turn in, and that can pull the knee inward from above. This is one reason the exercise advice for kneecap pain starts at the hip, not the foot.',
      ],
      sourceNote:
        'Neal 2014: effect sizes for pronated foot posture and patellofemoral pain 0.28 to 0.33. Barton 2009: no prospective studies with enough data for effect sizes; findings come from case-control studies.',
      cites: [CITE.bartonPfpGait, CITE.nealFootPosture],
    },
    {
      h2: 'What should a clinician check for knee pain with flat feet?',
      paragraphs: [
        'A clinician will usually look at the knee first and the foot second. The aim is to find out what is sore in the knee, then whether the foot, hip or training load is adding to it. The 2019 US physical therapy guideline for kneecap pain lists simple movement tests, such as a squat, a step-down from a stair and a single-leg squat, to see what brings the pain on and how the leg moves.',
        'Things a physical therapist, sports doctor or podiatrist is likely to check:',
      ],
      bullets: [
        'Where exactly it hurts, and what brings it on (stairs, squats, sitting, running).',
        'Whether the knee has swollen, locked, given way, or was hurt in a twist or fall.',
        'How the knee, hip and foot move in a squat or a step-down.',
        'Strength of the hip muscles on the outside and back of the hip, and of the thigh.',
        'If your flat feet are flexible (the arch comes back when you sit or stand on your toes) or rigid. See [flat feet](/flat-feet/) for the quick check.',
        'In older adults, signs of knee osteoarthritis, which may need an X-ray.',
      ],
      cites: [CITE.willyPfpGuideline],
    },
    {
      h2: 'Do insoles help knee pain from flat feet?',
      keyFact: 'In a trial of 179 adults with kneecap pain, shaped insoles beat flat inserts in the short term but were no better than physiotherapy (Collins and colleagues, 2008).',
      paragraphs: [
        'Shaped insoles can ease front-of-knee pain in the short term, but they add little once you are doing good exercise.',
        'The clearest test is a 2008 trial in the BMJ. Collins and colleagues split 179 adults aged 18 to 40 with pain around the kneecap into four groups: ready-made shaped insoles, flat inserts, physiotherapy (exercise for the thigh muscles, taping, hands-on work and advice), or insoles plus physiotherapy. The shaped insoles did better than flat inserts after about a month and a half. They were no better than physiotherapy, and adding them to physiotherapy did not improve results. By one year, all four groups had improved by a meaningful amount.',
        'A smaller 2018 trial by Mølgaard and colleagues picked 40 people with kneecap pain whose heels tilted in more than usual. Adding foot exercises and custom insoles to knee exercises gave 8.9 points more pain relief on a 100-point knee scale at four months. At twelve months the difference between groups was no longer statistically clear. The trial cannot tell whether the insoles, the foot exercises or the extra sessions made the difference.',
        'The 2019 guideline puts it together this way: ready-made insoles can be used for people whose feet roll in more than usual, only for short-term pain relief, and always alongside exercise. It found too little evidence to favour custom insoles over ready-made ones. For the wider insole debate, see [insoles vs exercises](/insoles-vs-exercises/).',
      ],
      sourceNote:
        'Collins 2008: single-blind RCT, outcomes at about a month and a half, three months and one year; shaped insoles vs flat inserts on global improvement, number needed to benefit 4. One author had received funding from an insole maker. Mølgaard 2018: KOOS pain subscale, 8.9 points (95% CI 0.4 to 17.4). Willy 2019: grade A.',
      cites: [CITE.collinsPfpOrthoses, CITE.molgaardPfp, CITE.willyPfpGuideline],
    },
    {
      h2: 'What exercises help knee pain when you have flat feet?',
      keyFact: 'The 2019 US physical therapy guideline grades combined hip and knee exercise A, its top grade, for pain around the kneecap (Willy and colleagues).',
      paragraphs: [
        'For pain around the kneecap, the exercises with the best evidence work the hip and the thigh, not the arch. The 2019 US physical therapy guideline gives combined hip and knee exercise its top grade, A. A 2016 international consensus says the same, and adds that hip plus knee exercise should be chosen over knee exercise alone.',
        'Hip exercise targets the muscles on the outside and back of the hip. Knee exercise strengthens the front of the thigh, with squats or by straightening the knee against resistance. Flat feet do not change this advice, and no trial has tested foot exercises alone for knee pain in flat-footed people.',
        'If your arch also aches, short-foot work and balance training are reasonable extras, though the evidence that they help the knee is early. For the full foot routine, see [flat feet exercises](/flat-feet-exercises/).',
        'Walkito is a foot and lower-leg app with no knee goal or knee exercises. Its plan does include a hip abduction exercise (lifting the leg out to the side), starting at 3 sets of 10 on each side. A physical therapist can build the knee part.',
        'Stop for the day if knee pain reaches 6/10, or if the knee is clearly worse the next morning. Some ache while loading the knee is common in these programs.',
      ],
      exercises: [
        {
          name: 'Standing hip abduction with a band',
          evidence: { level: 'moderate', why: 'Hip-targeted exercise is part of the combined hip and knee program the 2019 guideline grades A. This exact exercise was not tested on its own.' },
          dose: 'Walkito starts at 3 sets of 10, each side',
          often: 'Most sessions',
          feel: 'Work on the outside of the standing and moving hip',
          stop: 'Knee or hip pain reaches 6/10',
          how: 'Loop a band around your ankles and hold a wall. Stand tall on one leg and lift the other leg out to the side, toes pointing forward. Do not lean away. Lower slowly. See [hip abduction](/exercises/hip-abduction/) for the details.',
          media: 'hip_abduction',
          caption: 'Hip abduction: lift the leg out to the side, body upright',
          alt: 'A figure holding a wall and lifting one leg out to the side against a resistance band',
        },
        {
          name: 'Partial squat or sit-to-stand',
          evidence: { level: 'moderate', why: 'Knee-targeted strength work is the other half of the grade A combination in the 2019 guideline. Not part of Walkito.' },
          dose: 'Your physical therapist sets the dose; 2 to 3 sets of 10 is a common start',
          often: 'Most days, if your clinician agrees',
          feel: 'Work in the front of the thigh',
          stop: 'Knee pain reaches 6/10',
          how: 'Stand in front of a chair, feet hip-width apart. Bend your hips and knees as if to sit, keeping your knees in line with your second toe. Stop at a depth that feels manageable, then stand up. Lightly touching the chair is fine.',
        },
        {
          name: 'Short foot exercise',
          evidence: { level: 'early', why: 'Shown to change arch shape in flexible flat feet as part of a combined program. Not tested on its own for knee pain.' },
          dose: 'Walkito starts at 3 sets of 8, with 5-second holds',
          often: 'Most sessions',
          feel: 'Effort under the arch, toes relaxed',
          stop: 'Foot or knee pain reaches 6/10',
          how: 'Sit with your foot flat. Shorten the foot by drawing the ball of the foot toward the heel, so the arch lifts. Do not curl your toes. Hold, then relax. See [short foot exercise](/exercises/short-foot-exercise/).',
          media: 'short_foot_seated',
          caption: 'Short foot: draw the ball of the foot toward the heel',
          alt: 'A seated figure lifting the arch of one foot without curling the toes',
        },
        {
          name: 'Single-leg hold',
          evidence: { level: 'early', why: 'Trains control of the foot, knee and hip together. No trial of balance work alone for knee pain with flat feet.' },
          dose: 'Walkito starts at 3 holds of 20 seconds, each leg',
          often: 'Balance days',
          feel: 'Small corrections in the foot and hip',
          stop: 'Knee pain reaches 6/10',
          how: 'Stand on one leg near a wall with a soft knee. Keep the knee pointing over your toes, not drifting in. Look at one spot on the wall.',
          media: 'single_leg_hold',
          caption: 'Single-leg hold: knee over the toes, small corrections',
          alt: 'A figure balancing on one leg beside a wall',
        },
      ],
      sourceNote:
        'Crossley 2016 consensus: hip and knee exercise recommended for pain and function in the short, medium and long term. Short-foot evidence: Brijwasi 2023 (52 people, combined program changed arch shape); Cheng 2024 review (no clear change in overall foot posture from short-foot training alone).',
      cites: [CITE.willyPfpGuideline, CITE.crossleyPfpConsensus, CITE.brijwasi, CITE.cheng],
    },
    {
      h2: 'Can you keep running with flat feet and knee pain?',
      paragraphs: [
        'Many runners with flat feet and kneecap pain keep running at a lower load while they build strength. A common approach is a slow return, raising how often, how hard and how long you run one step at a time.',
        'The guideline also lists gait retraining, with weaker evidence (grade C): a clinician coaching you to take shorter, quicker steps or to keep the thigh from drifting inward. Stability shoes and insoles are often suggested for flat-footed runners. For insoles, the trials above show short-term relief at best, so try them if they feel good.',
        'If running brings on sharp pain, a limp, or swelling, stop and get it checked. Pain along the inner shin is a separate problem; see [shin splints exercises](/shin-splints-exercises/).',
      ],
      cites: [CITE.willyPfpGuideline],
    },
  ],
  faq: [
    {
      q: 'Can flat feet cause knee pain?',
      cites: [CITE.grossFlatFeetKnee, CITE.nealFootPosture],
      a: 'Flat feet are linked to knee pain, but the link is small and not shown to be a cause. In 1,903 older adults, the flattest feet had 1.3 times the odds of frequent knee pain (Gross 2011). A 2014 review found only very limited evidence that a rolled-in foot raises the risk of kneecap pain. Most people with flat feet have no knee pain.',
    },
    {
      q: 'Can flat feet cause inner knee pain?',
      cites: [CITE.grossFlatFeetKnee],
      a: 'There is a link in older adults. In the 2011 Framingham study, the flattest feet had 1.4 times the odds of cartilage damage on the inner side of the knee, and no link with damage elsewhere in the knee. That pattern fits knee osteoarthritis. The study measured people once, so it cannot show the feet caused it. A clinician can check whether arthritis is the source.',
    },
    {
      q: 'Do insoles help knee pain from flat feet?',
      cites: [CITE.collinsPfpOrthoses, CITE.willyPfpGuideline],
      a: 'For pain around the kneecap, shaped insoles can help in the short term. In a trial of 179 adults, they beat flat inserts after about a month and a half, but were no better than physiotherapy and added nothing on top of it (Collins 2008). The 2019 guideline backs ready-made insoles only short term, for feet that roll in more than usual, together with exercise.',
    },
    {
      q: 'Will raising my arch stop my knee pain?',
      cites: [CITE.cheng, CITE.willyPfpGuideline],
      a: 'Probably not on its own. A 2024 review found short-foot training alone made no clear change to overall foot posture, and no trial has shown that changing the arch eases knee pain. The exercise with the best evidence for kneecap pain is combined hip and knee strengthening, graded A by the 2019 guideline. Foot work can be an extra if your arch also hurts.',
    },
    {
      q: 'Should I wear a knee brace for knee pain with flat feet?',
      cites: [CITE.willyPfpGuideline],
      a: 'For pain around the kneecap, the 2019 US physical therapy guideline advises against knee braces, sleeves and straps (grade B), because a Cochrane review found no meaningful effect on pain when added to exercise. Short-term taping applied by a clinician is a different thing and may ease pain in the short term alongside exercise.',
    },
    {
      q: 'Do kids with flat feet get knee pain?',
      cites: [CITE.kosashvili],
      a: 'Most young people with flat feet have no knee pain. The best data come from older teens: in 97,279 young military recruits, front-of-knee pain was 7 percent with moderate or severe flat feet and 4 percent with mild flat feet or none (Kosashvili 2008). A child with knee pain and a limp should see a doctor, since hip problems can show up as knee pain. See [flat feet in kids](/flat-feet-in-kids/).',
    },
  ],
  redFlags: {
    h2: 'See a clinician first if',
    bullets: [
      'your knee locks, catches so you cannot straighten it, or gives way under you',
      'the knee swelled up quickly, within hours, after a twist, fall or pop',
      'the joint is hot, red or very swollen, or you have a fever or feel unwell',
      'you cannot put weight on the leg or walk more than a few steps',
      'the calf is swollen, warm and tender, which can be a blood clot',
      'there is numbness, tingling or weakness in the leg or foot',
      'the pain wakes you at night or comes with weight loss you cannot explain',
      'a child has knee pain with a limp, or one flat foot is stiff and painful',
      'the knee is not easing after about a month of lighter load and exercise',
    ],
  },
  program: {
    h2: 'Doing it as a plan',
    text: 'Walkito is built for heel, foot and lower-leg pain in adults, not knee pain. If you have flat feet with arch or heel pain as well as a sore knee, it can take care of the foot side: short-foot work, balance and hip abduction, set out one week at a time. The knee exercises should come from a physical therapist.',
    more: [
      'You pick 3, 5 or 7 days a week and sessions of 3, 5 or 10 minutes. Every 14 days at first, a short test checks calf endurance, arch hold and balance, so you can see what is changing. Walkito is an exercise program. It does not diagnose, it does not help knee pain directly, and it is not a substitute for a clinician. For back pain with flat feet, see [flat feet and back pain](/flat-feet-back-pain/).',
    ],
    cta: 'Start with 3 minutes a day.',
  },
  crumb: 'Flat feet and knee pain',
  campaign: 'guide-flat-feet-knee',
};
