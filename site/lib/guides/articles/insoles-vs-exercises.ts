import { CITE } from '@/lib/citations';
import type { Guide } from '../types';

/*
 * ── New citations ──────────────────────────────────────────────────────
 *
 * landorf2006 | Landorf KB, Keenan AM, Herbert RD. Effectiveness of foot orthoses to treat plantar fasciitis: a randomized trial. Archives of Internal Medicine. 2006;166(12):1305–1310. | 10.1001/archinte.166.12.1305 | 16801514 | randomised controlled trial (n=135, sham vs prefabricated vs custom, 12-month follow-up)
 * whittakerOrthoses | Whittaker GA, Munteanu SE, Menz HB, Tan JM, Rabusin CL, Landorf KB. Foot orthoses for plantar heel pain: a systematic review and meta-analysis. British Journal of Sports Medicine. 2018;52(5):322–328. | 10.1136/bjsports-2016-097355 | 28935689 | systematic review and meta-analysis (19 RCTs, 1660 participants)
 * rasenbergStap | Rasenberg N, Bierma-Zeinstra SMA, Fuit L, et al. Custom insoles versus sham and GP-led usual care in patients with plantar heel pain: results of the STAP-study - a randomised controlled trial. British Journal of Sports Medicine. 2021;55(5):272–278. | 10.1136/bjsports-2019-101409 | 32878869 | randomised controlled trial (n=185, three arms)
 * rasenbergCost | Rasenberg N, van Middelkoop M, Bierma-Zeinstra SMA, El Alili M, Bindels P, Bosmans J. Cost-effectiveness of custom-made insoles versus usual care in patients with plantar heel pain in primary care: cost-effectiveness analysis of a randomised controlled trial. BMJ Open. 2021;11(11):e051866. | 10.1136/bmjopen-2021-051866 | 34732484 | cost-effectiveness analysis of an RCT (n=116)
 * evansCochrane | Evans AM, Rome K, Carroll M, Hawke F. Foot orthoses for treating paediatric flat feet. Cochrane Database of Systematic Reviews. 2022;1(1):CD006311. | 10.1002/14651858.CD006311.pub4 | 35080267 | Cochrane systematic review (16 RCTs, 1058 children)
 * banwellPlanus | Banwell HA, Mackintosh S, Thewlis D. Foot orthoses for adults with flexible pes planus: a systematic review. Journal of Foot and Ankle Research. 2014;7(1):23. | 10.1186/1757-1146-7-23 | 24708560 | systematic review (13 studies, 2 RCTs)
 * kirmiziFlatfoot | Kirmizi M, Sengul YS, Akcali O, Angin S. Effects of foot exercises and customized arch support insoles on foot posture, plantar force distribution, and balance in people with flexible flatfoot: a randomized controlled trial. Gait & Posture. 2024;113:106–114. | 10.1016/j.gaitpost.2024.05.030 | 38865799 | randomised controlled trial (n=45, three arms)
 * jungOrthosesShortFoot | Jung DY, Koh EK, Kwon OY. Effect of foot orthoses and short-foot exercise on the cross-sectional area of the abductor hallucis muscle in subjects with pes planus: a randomized controlled trial. Journal of Back and Musculoskeletal Rehabilitation. 2011;24(4):225–231. | 10.3233/BMR-2011-0299 | 22142711 | randomised controlled trial (n=28). NOTE: different paper from existing CITE.jung (PMID 21256447)
 * protopapasOrthotic | Protopapas K, Perry SD. The effect of a 12-week custom foot orthotic intervention on muscle size and muscle activity of the intrinsic foot muscle of young adults during gait termination. Clinical Biomechanics. 2020;78:105063. | 10.1016/j.clinbiomech.2020.105063 | 32521283 | small controlled study, non-randomised (n=18)
 *
 * Existing keys reused: guideline, rathleff, brijwasi, houckPTTD, burnsCavus. landorf2006 cited in body.
 */

export const INSOLES_VS_EXERCISES_EN: Guide = {
  lang: 'en',
  page: 'insolesVsExercises',
  mainSource: CITE.whittakerOrthoses,
  published: '2026-10-09',
  updated: '2026-10-09',
  title: 'Insoles vs Exercises: Do You Need Orthotics?',
  description:
    'Do you need orthotics or exercises? What trials found for insoles in heel pain and flat feet, custom vs store-bought, and how to combine both.',
  h1: 'Insoles vs exercises: do you need orthotics for foot pain?',
  lede:
    'Most people with heel pain or flat feet do not need custom orthotics. In trials, insoles give a small, short-lived drop in pain, and store-bought ones do about as well as custom ones. Exercise builds the capacity of the foot and calf, and the heel pain guideline grades it higher. Insoles are a reasonable add-on, not a replacement.',
  takeaways: [
    'A review of 19 trials (1,660 people) found insoles eased heel pain more than a sham insert only in the medium term, by a small amount, with no difference between custom and prefabricated insoles (Whittaker and colleagues, 2018).',
    'In a trial of 185 people with heel pain, custom insoles did no better than sham insoles at three months, and GP-led care did slightly better than custom insoles (Rasenberg and colleagues, 2021).',
    'The 2023 heel pain guideline recommends **against** orthoses used alone for short-term relief (grade B) and allows them alongside other care (grade C). Stretching gets an **A**, strength training a **B** (Koc and colleagues, 2023).',
    'In a small study of 18 young adults with flat feet, three months of custom orthoses was followed by a 9.6 to 17.4 percent drop in the size of small foot muscles (Protopapas and Perry, 2020).',
  ],
  toc: true,
  sections: [
    {
      h2: 'What is the difference between insoles, orthotics and exercises?',
      paragraphs: [
        'An **insole** is anything you slip into a shoe. An **orthotic** (foot orthosis) is an insole shaped to support the arch and take load off the heel. **Prefabricated** ones are bought off the shelf. **Custom** ones are made from a scan or cast of your foot, usually by a podiatrist (a foot specialist), and cost much more.',
        'Both change the load on the foot while you wear them. Exercise changes the tissue itself, so the foot and calf can take more load with or without an insert.',
      ],
    },
    {
      h2: 'Do insoles help plantar fasciitis?',
      keyFact: 'In a review of 19 trials with 1,660 people, insoles eased heel pain more than sham inserts only in the medium term, and custom and prefabricated insoles did not differ at any time point (Whittaker and colleagues, 2018).',
      paragraphs: [
        'A little, for a while. Plantar fasciitis is irritation of the plantar fascia, the band of tissue under the arch. The fair test compares a real insole with a **sham**: a flat, soft insert that looks real but gives no support.',
        'In a trial of 135 people, both a prefabricated and a custom insole improved function by about 8 points on a 0 to 100 scale over a sham at three months (Landorf and colleagues, 2006). The pain difference was similar in size but not statistically clear. At twelve months, no group differed.',
        'A systematic review pooled 19 randomised trials with 1,660 people (Whittaker and colleagues, 2018). In the medium term, roughly the second and third month, insoles eased pain more than a sham, with moderate-quality evidence. The effect was small, and the authors called it "uncertain whether this is a clinically important change." In the short and longer term, there was no clear benefit.',
        'The 2023 heel pain guideline reads it the same way: **not** orthoses alone for short-term relief (grade B against), but they **may** be used alongside other care (grade C).',
      ],
      figure: {
        id: 'plantar-fascia',
        caption: 'The plantar fascia runs from the heel to the toes. An insole takes some load off it; exercise changes how much load it can take.',
        alt: 'The underside of a foot with the plantar fascia highlighted from heel to toes',
      },
      cites: [CITE.landorf2006, CITE.whittakerOrthoses, CITE.guideline],
    },
    {
      h2: 'Are custom orthotics worth it?',
      keyFact: 'In a trial of 185 people with heel pain, custom insoles did no better than sham insoles at three months, and people in GP-led care reported first-step pain 1.48 points lower than those with custom insoles (Rasenberg and colleagues, 2021).',
      paragraphs: [
        'For ordinary heel pain, the research says usually not. The Whittaker review found **no difference between custom and prefabricated insoles at any time point**, and the 2023 guideline notes "a similarity in outcomes between custom and prefabricated orthoses."',
        'The Dutch STAP trial randomised 185 adults with heel pain (Rasenberg and colleagues, 2021) to:',
        {
          list: [
            'GP (general practitioner) care.',
            'A podiatrist-made custom insole.',
            'A sham insole.',
          ],
        },
        '**Every group also got a booklet with exercises.** At three months, custom insoles did no better than sham. The GP care group did better than the custom group: about 1 point less pain during activity and 1.5 points less first-step pain, on a 0 to 10 scale. A cost analysis of the same trial over about six months found custom insoles "not cost-effective" compared with GP care.',
        'Custom orthotics can still help some people (see below). But if you want an insole for heel pain, a well-fitting off-the-shelf arch support is the reasonable first try.',
      ],
      cites: [CITE.whittakerOrthoses, CITE.guideline, CITE.rasenbergStap, CITE.rasenbergCost],
    },
    {
      h2: 'What do exercises do that insoles do not?',
      keyFact: 'In a trial of 48 people who all wore shoe inserts, the group that added heavy heel raises scored 29 points better on the Foot Function Index at three months than the group that added stretching (Rathleff and colleagues, 2015).',
      paragraphs: [
        'Exercise changes the tissue, so the change lasts after the session. The 2023 guideline grades plantar fascia and calf stretching **A** and strength training **B**.',
        'In one trial, all 48 people with plantar fasciitis got a shoe insert (Rathleff and colleagues, 2015). Half added daily stretching; half added a heavy heel raise with a towel under the toes, every second day.',
        'At three months, the heel raise group scored 29 points better on the Foot Function Index (a 0 to 100 score of foot pain and disability). By six and twelve months the groups were even. The insert was the same in both groups; the exercise made the early difference. The full routine is on [plantar fasciitis exercises](/plantar-fasciitis-exercises/).',
      ],
      exercises: [
        {
          name: 'Plantar fascia stretch',
          evidence: { level: 'strong', why: 'Guideline grade A for plantar fascia and calf stretching.' },
          dose: 'Walkito starts at 2 holds of 30 seconds, each foot',
          how: 'Sit and cross one ankle over the other knee. Pull the toes back gently until you feel a stretch along the arch. Hold, then release. Most useful before your first steps in the morning.',
          often: 'Daily',
          feel: 'A pull along the arch, not sharp pain',
          stop: 'Pain reaches 6/10',
          media: 'fascia_stretch',
          caption: 'Plantar fascia stretch: pull the toes back gently',
          alt: 'A seated figure pulling the toes of one foot back, the arch highlighted',
        },
        {
          name: 'Heel raise with a towel under the toes',
          evidence: { level: 'strong', why: 'The exercise from the 2015 Rathleff trial. Guideline grade B for strength training.' },
          dose: 'In the trial, people built from 3 sets of 12 heavy reps to 5 sets of 8. In Walkito it comes after easier heel raises, at 4 sets of 10, each leg, with the same 3-2-3 tempo and added weight such as a backpack when you have a step',
          how: 'Stand on one foot on a step, a rolled towel under the toes. Rise for three seconds, hold for two, lower for three. Hold a rail. The towel bends the toes up, loading the plantar fascia along with the calf.',
          often: 'Every second day',
          feel: 'Hard work in the calf and a pull under the arch',
          stop: 'Pain reaches 6/10, or the next morning is clearly worse',
          media: 'heel_raise_towel',
          caption: 'Towel heel raise: three seconds up, two-second hold, three seconds down',
          alt: 'A figure on a step rising onto the toes of one foot, a rolled towel under the toes',
        },
      ],
      cites: [CITE.guideline, CITE.rathleff],
    },
    {
      h2: 'Do insoles help flat feet?',
      paragraphs: [
        '**The evidence is thin for both.** Flat feet (a low arch) often cause no pain at all, and then there is nothing to correct. See [flat feet](/flat-feet/).',
        'For adults with flexible flat feet, a review found 13 studies, only two randomised (Banwell and colleagues, 2014). It found "no high level evidence" for orthoses and only low-level evidence that they ease pain.',
        'On the exercise side, in a trial of 45 adults, about a month and a half of foot exercises improved foot posture more than custom arch insoles, and exercise plus insoles also beat insoles alone (Kirmizi and colleagues, 2024). In another trial of 52 people, an exercise program changed arch shape more than a control group (Brijwasi and Borkar, 2023). Neither reported pain as its main result.',
        'For children, a Cochrane review of 16 trials (1,058 children) found low to very low certainty evidence, and concluded that costly custom orthoses for children with painless flexible flat feet have no supporting evidence (Evans and colleagues, 2022). See [flat feet in kids](/flat-feet-in-kids/). The exercises here and the Walkito app are for adults.',
      ],
      exercises: [
        {
          name: 'Short foot, seated',
          evidence: { level: 'early', why: 'Changed arch shape in small trials, including one where foot exercises beat custom insoles on posture. Pain was not the main outcome.' },
          dose: 'Walkito starts at 3 sets of 8, with a 5-second hold, each foot',
          how: 'Sit with the foot flat. Without curling the toes, draw the ball of the foot toward the heel so the arch lifts a little. Hold, then relax. If the toes grip, you are using the wrong muscles.',
          often: 'Most days',
          feel: 'The arch lifting, toes relaxed',
          stop: 'Cramping that does not ease, or pain reaches 6/10',
          media: 'short_foot_seated',
          caption: 'Short foot: draw the ball of the foot toward the heel',
          alt: 'A seated leg with the foot on the floor, the arch highlighted as it lifts',
        },
      ],
      cites: [CITE.banwellPlanus, CITE.kirmiziFlatfoot, CITE.brijwasi, CITE.evansCochrane2022],
    },
    {
      h2: 'Do orthotics weaken your feet?',
      paragraphs: [
        '**Possibly a little.** In a study of 18 young adults with flat feet, three small muscles inside the foot shrank by 9.6 to 17.4 percent after three months of wearing custom orthoses (Protopapas and Perry, 2020). The groups were not randomised and the study was small, so read this as a signal, not a settled fact.',
        'Exercise appears to offset it. In a randomised trial of 28 people with flat feet, everyone wore orthoses for two months and half also did the short-foot exercise (Jung and colleagues, 2011). The muscle along the inner arch grew in both groups, but more with the exercise, and big-toe strength rose more too. If you wear insoles all day, keep the foot working with a few minutes of [foot strengthening exercises](/foot-strengthening-exercises/).',
      ],
      cites: [CITE.protopapasOrthotic, CITE.jungOrthosesShortFoot],
    },
    {
      h2: 'Insoles vs exercises at a glance',
      table: {
        caption: 'Insoles and exercises compared, from the studies on this page',
        head: ['', 'Insoles and orthotics', 'Exercises'],
        rows: [
          ['How they work', 'Change the load on the foot while worn', 'Change the tissue, so it tolerates more load'],
          ['Heel pain evidence', 'Small medium-term benefit over sham; none at twelve months', 'Stretching grade **A**, strength grade **B**'],
          ['Guideline grade for heel pain', '**B against** alone; **C** with other care', 'Core of first-line care'],
          ['Custom vs off the shelf', 'No difference in trials', 'No equipment needed'],
          ['Flat feet evidence', 'Low-level evidence for pain', 'Small trials show arch changes; pain data thin'],
          ['Cost', 'Low for prefabricated, much higher for custom', 'Free'],
          ['Downside', 'May shrink small foot muscles if worn alone', 'Can flare pain if you build up too fast'],
        ],
      },
      cites: [CITE.whittakerOrthoses, CITE.landorf2006, CITE.guideline, CITE.banwellPlanus, CITE.protopapasOrthotic],
    },
    {
      h2: 'When do insoles make sense?',
      bullets: [
        '**Long shifts on your feet.** A firm arch support can make the day easier while exercise builds capacity. See [feet that hurt from standing all day](/feet-hurt-standing-all-day/).',
        '**A flare.** An insole or heel cup can take the edge off while first steps are sharp. [Taping](/plantar-fasciitis-taping/) is another short-term option, with a higher guideline grade.',
        '**Painful high arches.** In a trial of 154 adults with painful high arches (pes cavus), custom orthoses eased pain more than a sham at three months (Burns and colleagues, 2006). See [high arches exercises](/high-arches-exercises/).',
        '**Posterior tibial tendon dysfunction**, where the tendon that holds up the arch weakens. Trials pair an orthosis with exercise (Houck and colleagues, 2015). See [posterior tibial tendon dysfunction exercises](/posterior-tibial-tendon-dysfunction-exercises/).',
        '**Diabetes or reduced feeling in the feet.** Pressure-spreading insoles are often part of foot care here, fitted by a clinician.',
      ],
      cites: [CITE.guideline, CITE.burnsCavus, CITE.houckPTTD],
    },
    {
      h2: 'How do you combine insoles and exercises?',
      paragraphs: [
        '**Use the insole for comfort and the exercises for change.** In both the Rathleff and STAP trials, everyone had exercise advice alongside whatever went in their shoe. Wear an off-the-shelf arch support on the days that hurt, and start the stretches and heel raises at the same time. As morning pain settles, try short spells without the insole, then longer ones.',
        'Walkito can set out the exercise side as a weekly plan: once a week it moves your main exercise up a step when you rated your last two sessions with it easy and morning pain has not risen.',
        'If a few months of daily stretching and strength work have not helped, see a clinician. That is when a custom orthosis, among other options, is worth discussing with someone who has examined your foot.',
      ],
      cites: [CITE.rathleff, CITE.rasenbergStap],
    },
  ],
  faq: [
    {
      q: 'Do I need orthotics for plantar fasciitis?',
      cites: [CITE.guideline, CITE.whittakerOrthoses],
      a: 'Most people do not. The 2023 heel pain guideline recommends against orthoses used alone for short-term relief (grade B) and allows them alongside other care (grade C). A review of 19 trials found only a small medium-term benefit over sham inserts. Stretching (grade A) and calf strengthening (grade B) are the core, and an insole can be a comfort add-on.',
    },
    {
      q: 'Are custom orthotics better than over-the-counter insoles?',
      cites: [CITE.whittakerOrthoses, CITE.rasenbergStap],
      a: 'For heel pain, trials have not found a difference. A review of 19 trials found no difference between custom and prefabricated insoles at any time point (Whittaker and colleagues, 2018). In a trial of 185 adults, custom insoles did no better than sham insoles at three months (Rasenberg and colleagues, 2021). A well-fitting off-the-shelf arch support is a reasonable first try.',
    },
    {
      q: 'Do orthotics make your feet weaker?',
      cites: [CITE.protopapasOrthotic, CITE.jungOrthosesShortFoot],
      a: 'There is a small signal that they can. In a non-randomised study of 18 young adults with flat feet, three months of custom orthoses was followed by a 9.6 to 17.4 percent drop in the size of three small foot muscles. In a 28-person trial, adding the short-foot exercise to orthoses built more muscle and big-toe strength than orthoses alone.',
    },
    {
      q: 'Do insoles help flat feet?',
      cites: [CITE.banwellPlanus, CITE.kirmiziFlatfoot],
      a: 'The evidence is weak. A review of 13 studies found no high-level evidence that orthoses help adults with flexible flat feet, and only low-level evidence for pain (Banwell and colleagues, 2014). In a trial of 45 adults, foot exercises improved foot posture more than custom arch insoles (Kirmizi and colleagues, 2024). Flat feet that do not hurt need nothing.',
    },
    {
      q: 'Does my child with flat feet need orthotics?',
      cites: [CITE.evansCochrane2022],
      a: 'Usually not, if the feet do not hurt. A Cochrane review of 16 trials with 1,058 children found low to very low certainty evidence for orthoses, and concluded that costly custom orthoses for children with painless flexible flat feet have no supporting evidence (Evans and colleagues, 2022). A child with foot pain, stiffness or a limp should see a clinician.',
    },
  ],
  redFlags: {
    h2: 'See a clinician first if',
    bullets: [
      'the pain followed an injury or a fall, or you cannot put weight on the foot',
      'squeezing the sides of the heel is very painful, which can point to a stress fracture',
      'there is numbness, tingling or burning in the foot',
      'the foot is red, hot or swollen, or you have a fever',
      'one arch has dropped recently, or you cannot rise onto the toes of that foot',
      'you have diabetes, poor circulation or reduced feeling in your feet',
      'a child has flat feet with pain, stiffness or a limp',
      'pain has not improved after a few months of daily stretching and strength work',
    ],
  },
  program: {
    h2: 'Doing the exercises as a plan',
    text: 'An insole goes in your shoe once. Exercise works only if you keep at it. Walkito builds a plan one week at a time for heel pain or flat feet, starting with stretches like the plantar fascia stretch (2 holds of 30 seconds) and arch work like the short foot (3 sets of 8 with 5-second holds), then steps your main exercise up when you rate it easy twice in a row and morning pain holds steady.',
    more: [
      'You choose sessions of 3, 5 or 10 minutes. Every 14 days at first (every 28 once you reach a goal), a short test checks calf endurance, arch hold and balance. Walkito is an exercise program for adults. It does not diagnose, it is not a substitute for a clinician, and it works fine alongside an insole.',
    ],
    cta: 'Start with 3 minutes a day.',
  },
  crumb: 'Insoles vs exercises',
  campaign: 'guide-insoles-vs-exercises',
};
