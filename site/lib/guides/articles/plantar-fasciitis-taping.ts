import { CITE } from '@/lib/citations';
import type { Guide } from '../types';

/**
 * ── New citations (append to CITATIONS[] in lib/citations.ts) ──────────
 *
 * morrisseyBestPractice | Morrissey D, Cotchett M, Said J'Bari A, et al. Management of plantar heel pain: a best practice guide informed by a systematic review, expert clinical reasoning and patient values. British Journal of Sports Medicine. 2021;55(19):1106–1118. | doi: 10.1136/bjsports-2019-101970 | pmid: 33785535 | mixed-methods best practice guide (systematic review of 51 RCTs, n=4351, plus 14 expert interviews and a 40-person patient survey)
 * vanDeWaterTaping | van de Water AT, Speksnijder CM. Efficacy of taping for the treatment of plantar fasciosis: a systematic review of controlled trials. Journal of the American Podiatric Medical Association. 2010;100(1):41–51. | doi: 10.7547/1000041 | pmid: 20093544 | systematic review (5 controlled trials)
 * podolskyTaping | Podolsky R, Kalichman L. Taping for plantar fasciitis. Journal of Back and Musculoskeletal Rehabilitation. 2015;28(1):1–6. | doi: 10.3233/BMR-140485 | pmid: 24867905 | systematic review (8 studies, 5 RCTs)
 * radfordTaping | Radford JA, Landorf KB, Buchbinder R, Cook C. Effectiveness of low-Dye taping for the short-term treatment of plantar heel pain: a randomised trial. BMC Musculoskeletal Disorders. 2006;7:64. | doi: 10.1186/1471-2474-7-64 | pmid: 16895612 | participant-blinded RCT (n=92, 1-week follow-up)
 * landorfTaping | Landorf KB, Radford JA, Keenan AM, Redmond AC. Effectiveness of low-Dye taping for the short-term management of plantar fasciitis. Journal of the American Podiatric Medical Association. 2005;95(6):525–530. | doi: 10.7547/0950525 | pmid: 16291843 | non-randomised comparative study (n=105)
 * hylandCalcaneal | Hyland MR, Webber-Gaffney A, Cohen L, Lichtman PT. Randomized controlled trial of calcaneal taping, sham taping, and plantar fascia stretching for the short-term management of plantar heel pain. Journal of Orthopaedic & Sports Physical Therapy. 2006;36(6):364–371. | doi: 10.2519/jospt.2006.2078 | pmid: 16776486 | RCT, 4 groups (n=41, 1-week follow-up)
 * garciaGomarizSham | García-Gomariz C, García-Martínez MT, Alcahuz-Griñán M, Hernández-Guillén D, Blasco JM. Effects on pain of kinesiology tape in patients with plantar fasciitis: a randomized controlled study. Disability and Rehabilitation. 2024;46(23):5490–5496. | doi: 10.1080/09638288.2024.2304645 | pmid: 38243921 | RCT, kinesiology tape vs sham tape (n=34, 5 days of wear plus 24 h)
 * garciaGomarizLowDye | García-Gomariz C, Hernández-Guillén D, Nieto-Gil P, Blasco-García C, Alcahuz-Griñán M, Blasco JM. Effects of kinesiotape versus low-dye tape on pain and comfort measures in patients with plantar fasciitis: a randomized clinical trial. Life (Basel). 2024;14(2):249. | doi: 10.3390/life14020249 | pmid: 38398758 | RCT, kinesiology tape vs low-Dye tape (n=40, 5 days)
 * songKinesio | Song W, Huang Q, Jiang Z. Clinical efficacy of athletic taping-assisted physiotherapy for plantar fasciitis: a systematic evaluation and meta-analysis. Foot and Ankle Surgery. 2026;32(1):11–25. | doi: 10.1016/j.fas.2025.05.013 | pmid: 40473505 | systematic review and meta-analysis (11 RCTs, n=395)
 * zhangLowDye | Zhang L, Chen L, Zhang X, Chen J, Luo Y. Effectiveness of low-dye taping in the treatment of patients with plantar fasciitis: a systematic review and meta-analysis. Medicine (Baltimore). 2026;105(8):e46770. | doi: 10.1097/MD.0000000000046770 | pmid: 41731793 | systematic review and meta-analysis (11 RCTs)
 *
 * Reused: CITE.guideline, CITE.rathleff, CITE.digiovanni2003
 *
 * Note: radfordTaping is a different paper from radfordStretch (tight-calves draft).
 * The night-splints sibling may also add Morrissey 2021: merge to one key if so.
 */

export const PF_TAPING_EN: Guide = {
  lang: 'en',
  page: 'pfTaping',
  mainSource: CITE.guideline,
  published: '2026-10-09',
  updated: '2026-10-09',
  title: 'Plantar Fasciitis Taping: Does It Help?',
  description:
    'Plantar fasciitis taping: what the research shows for low-Dye and kinesiology tape, how to apply each, how long to wear it, side effects and when to stop.',
  h1: 'Taping for plantar fasciitis: what it does, how to apply it, and when to stop',
  lede:
    'Taping can ease plantar fasciitis pain for a short while. The 2023 heel pain guideline gives foot taping its top grade, A, but only for short-term relief and only alongside other care such as stretching. Most trials lasted a few days to a week. Use tape to get through a sore stretch, and let exercise do the longer work.',
  intro: [
    'Plantar fasciitis is irritation of the plantar fascia, the thick band of tissue that runs from your heel to your toes. Tape is cheap and you can learn to put it on yourself. This page covers what the trials found, the two kinds of tape, how to apply each, and when to stop. For the full condition guide, see [plantar fasciitis](/plantar-fasciitis/).',
  ],
  takeaways: [
    'The 2023 heel pain guideline grades foot taping **A**, its top grade, for short-term pain and function (from one week up to about a month and a half), used together with other physical therapy (Koc and colleagues, 2023).',
    'In a blinded trial of 92 people, rigid low-Dye tape lowered first-step pain by about 1.2 points out of 10 more than a sham after one week, a small effect (Radford and colleagues, 2006).',
    'In that same trial, 13 of 46 people who wore tape (28%) had a side effect, such as tape that felt too tight or a skin reaction, and all of them cleared once the tape came off (Radford and colleagues, 2006).',
    'In a trial of 40 people, kinesiology tape eased pain more than rigid low-Dye tape on the first day (2 points out of 10), but the gap shrank each day after (García-Gomariz and colleagues, 2024).',
    'The 2023 guideline found no taping studies that looked past about a month and a half, so tape is a short-term aid next to stretching and calf strength work.',
  ],
  toc: true,
  sections: [
    {
      h2: 'Does taping help plantar fasciitis?',
      keyFact: 'A 2023 clinical guideline gives foot taping, rigid or elastic, its top grade A, for short-term pain and function when used with other care (Koc and colleagues, 2023).',
      paragraphs: [
        'Taping helps plantar fasciitis pain in the short term. The 2023 heel pain guideline from the American Physical Therapy Association gives foot taping, rigid or elastic, its top grade, **A**. The wording matters. The guideline recommends tape together with other physical therapy, and only for short-term gains, which it defines as one week up to about a month and a half.',
        'A 2010 review of 5 controlled trials found limited evidence that pain was lower after one week, unclear results for daily function, and a hint that tape adds something on top of stretching (van de Water and Speksnijder, 2010). A 2015 review of 8 studies found that all favored taping, but only 2 were high quality (Podolsky and Kalichman, 2015).',
        'A 2021 best practice guide, built from a review of 51 trials and interviews with 14 experts, puts taping, stretching and education at the core of self-care for heel pain (Morrissey and colleagues, 2021). Tape is one part of a plan, next to [plantar fasciitis exercises](/plantar-fasciitis-exercises/).',
      ],
      cites: [CITE.guideline, CITE.vanDeWaterTaping, CITE.podolskyTaping, CITE.morrisseyBestPractice],
    },
    {
      h2: 'How much does taping help, and how long does it last?',
      keyFact: 'In a blinded trial of 92 people, low-Dye tape lowered first-step pain by about 1.2 points out of 10 more than a sham after one week (Radford and colleagues, 2006).',
      paragraphs: [
        '**The relief from tape is real but modest, and it fades fast once the tape comes off.**',
        'The cleanest test is a 2006 Australian trial of 92 people with heel pain. Half wore rigid low-Dye tape for a week plus a fake ultrasound, and half got only the fake ultrasound. People were told one of the two options might be fake, though most in the tape group guessed they had the real one.',
        'The taped group had about 1.2 points less first-step pain on a 0 to 10 scale than the sham group. Other measures, like foot function, did not differ (Radford and colleagues, 2006).',
        'The sham group improved too, by close to 2 points, just from being in a study and expecting help. An earlier study by the same team, without random groups, reported a gap more than twice as large (Landorf and colleagues, 2005). When there is no fair comparison group, tape looks stronger than it is.',
        'Kinesiology tape shows the same short pattern. In a 2024 trial of 34 people, kinesiology tape beat a sham tape by up to 3.5 points out of 10 on day two, and the difference then shrank day by day until the tape came off (García-Gomariz and colleagues, 2024). The 2023 guideline found no taping studies that looked past about a month and a half.',
      ],
      sourceNote:
        'Radford 2006: first-step pain on a 100 mm visual analogue scale, adjusted mean difference −12.3 mm (95% CI −22.4 to −2.2), taping group improved about 30 mm (71.4 to 41.4) and sham group about 18 mm (72.0 to 54.0). Landorf 2005: non-randomised, 65 taped for 3 to 5 days vs 40 untaped, adjusted difference 31.7 mm.',
      cites: [CITE.radfordTaping, CITE.landorfTaping, CITE.garciaGomarizSham, CITE.guideline],
    },
    {
      h2: 'Low-Dye taping or kinesiology tape: which is better?',
      keyFact: 'In a trial of 40 people, kinesiology tape eased pain 2 points out of 10 more than low-Dye tape on day one, with the gap shrinking each day (García-Gomariz and colleagues, 2024).',
      paragraphs: [
        'Both kinds of tape have trial support, and **there is no clear winner yet.** Low-Dye taping uses stiff, non-stretch sports tape (often zinc oxide tape) to hold the arch up and limit how far it flattens. Kinesiology tape, often sold as KT tape, is thin and stretchy. It moves with you and does not hold the foot in place.',
        'Only one small trial has compared them head to head. In 40 people, kinesiology tape eased pain more on the first day, by 2 points out of 10, and people rated it more comfortable, less sweaty and longer-lasting. The pain gap got smaller every day after that (García-Gomariz and colleagues, 2024).',
        'A third option, calcaneal taping (four strips around the heel bone and Achilles, not touching the arch), cut pain more than stretching or sham tape after one week in a 41-person trial (Hyland and colleagues, 2006).',
        'Two 2026 reviews of 11 trials each point the same way:',
        {
          list: [
            'Kinesiology tape added to rehab lowered pain a little more than rehab alone, a result the authors called preliminary (Song and colleagues, 2026).',
            'Low-Dye tape beat a placebo but was no better than other options (Zhang and colleagues, 2026).',
          ],
        },
      ],
      table: {
        caption: 'Rigid low-Dye tape vs kinesiology tape for plantar fasciitis',
        head: ['', 'Low-Dye (rigid) tape', 'Kinesiology (elastic) tape'],
        rows: [
          ['What it is', 'Stiff sports tape, about 2.5 to 3.8 cm wide', 'Thin, stretchy cotton tape, usually 5 cm wide'],
          ['What it tries to do', 'Hold the arch up and take strain off the fascia', 'Support while letting the foot move'],
          ['Best trial result', 'About 1.2 points less first-step pain than sham after one week, in 92 people', 'Up to 3.5 points less pain than sham tape on day two, in 34 people'],
          ['Comfort', 'Can feel tight, harder to wear in shoes', 'Rated more comfortable in a 40-person trial'],
          ['Typical wear', 'A few days', 'A few days, up to about five'],
        ],
      },
      cites: [CITE.garciaGomarizLowDye, CITE.hylandCalcaneal, CITE.songKinesio, CITE.zhangLowDye, CITE.radfordTaping, CITE.garciaGomarizSham, CITE.guideline],
    },
    {
      h2: 'How do you tape your foot for plantar fasciitis (low-Dye method)?',
      paragraphs: [
        'Low-Dye taping takes about five minutes once you have practiced. **If you can, have a physiotherapist or podiatrist show you the first time.** The steps below follow the common version.',
        'Before you start, wash the foot with plain soap, dry it well, and skip any lotion. Trim strips in advance from rigid sports tape about 2.5 cm wide. Sit with the foot resting at a right angle to the leg, not pointed.',
      ],
      bullets: [
        '**Anchor strip.** Start on the inner side of the foot just behind the big toe joint, run the tape around the back of the heel, and finish on the outer side just behind the little toe joint. Snug, not tight.',
        '**Second anchor.** Lay a second strip over the first, overlapping it by about half.',
        '**Underside strips.** Start on the outer edge of the anchor, pull across the sole under the heel, and stick it down on the inner edge. Add 3 or 4 of these, each overlapping the last by half, working forward until you stop just short of the ball of the foot.',
        '**Lock strip.** Repeat the first anchor over the top to hold the ends down. Some people lift the big toe slightly while placing it.',
        '**Check it.** Stand and take a few steps. The arch should feel held, not squeezed. Never wrap tape all the way around the top of the foot, because that can cut off blood flow.',
      ],
      after: [
        'If your toes tingle, go pale or turn blue, or the foot throbs, take the tape off right away and try again a little looser.',
      ],
    },
    {
      h2: 'How do you apply kinesiology tape for plantar fasciitis?',
      paragraphs: [
        'Kinesiology tape for plantar fasciitis is usually one long strip from the heel along the sole, with the front end split into fingers that fan out toward the toes. No single pattern has been shown to work better than another, so use any method as a starting point and see how your foot responds.',
      ],
      bullets: [
        '**Measure.** Cut a strip from the back of the heel to the base of the toes. Round the corners so they peel less.',
        '**Split the front end.** Cut the front half lengthwise into 3 to 5 thin fingers.',
        '**Anchor at the heel.** Pull your toes back to put the sole on a light stretch. Stick the uncut end on the back or bottom of the heel with no stretch on the tape.',
        '**Lay it along the sole.** Smooth the tape forward along the arch with light stretch, then fan the fingers toward the base of each toe. Lay the last 2 to 3 cm of each end down with no stretch.',
        '**Rub it in.** Rub the tape for a few seconds so the glue grips. Put it on about half an hour before a shower or a walk.',
      ],
      sourceNote: 'Step order based on common clinical practice. The trials on this page tested taping in general, not one exact kinesiology pattern.',
    },
    {
      h2: 'How long can you leave plantar fasciitis tape on, and can you sleep in it?',
      paragraphs: [
        '**Most people leave tape on for two to five days, then give the skin a rest.** That matches the trials: low-Dye tape stayed on for 3 to 5 days in one study and for a week in another, and kinesiology tape was worn for 5 days in the 2024 trials (Landorf and colleagues, 2005; Radford and colleagues, 2006; García-Gomariz and colleagues, 2024).',
        'Rigid tape loosens as you walk, so it often needs a fresh strip sooner. Kinesiology tape is made to last several days and can get wet. Pat it dry after a shower, and do not use a hair dryer on it.',
        'You can sleep in tape if the skin feels normal, but we found no trial that tested tape worn only at night. For morning pain, the option with guideline support is a night splint, covered in [night splints for plantar fasciitis](/night-splints-plantar-fasciitis/), along with the stretches in [heel pain in the morning](/heel-pain-in-the-morning/).',
      ],
      cites: [CITE.landorfTaping, CITE.radfordTaping, CITE.garciaGomarizSham, CITE.garciaGomarizLowDye],
    },
    {
      h2: 'What are the side effects of taping?',
      keyFact: 'In a 92-person trial, 13 of 46 people who wore low-Dye tape (28%) had a side effect, and all of them cleared once the tape came off (Radford and colleagues, 2006).',
      paragraphs: [
        '**The main side effects of taping are skin irritation and tape that feels too tight.** The 2023 guideline calls mild skin irritation the only harm reported. The 2006 blinded trial gives the clearest numbers. Of 46 people who wore rigid tape for a week, 13 (28%) had a side effect:',
        {
          list: [
            '4 said it was too tight.',
            '4 had an allergic skin reaction.',
            '5 noticed a new ache elsewhere in the leg.',
          ],
        },
        'Five took the tape off early. Every one of these cleared once the tape was removed (Radford and colleagues, 2006).',
        'To lower the risk:',
        {
          list: [
            'Use hypoallergenic tape or a thin underwrap on sensitive skin.',
            'Never pull rigid tape tight around the foot.',
            'Peel tape off slowly, ideally after loosening it with a little baby oil.',
          ],
        },
      ],
      cites: [CITE.guideline, CITE.radfordTaping],
    },
    {
      h2: 'What should you do alongside the tape?',
      keyFact: 'In a trial of 48 people, slow heel raises with a towel under the toes eased pain faster than stretching alone at three months, and both groups were even by twelve months (Rathleff and colleagues, 2015).',
      paragraphs: [
        'Pair tape with stretching and calf strength work, because those are the parts with evidence beyond the short term. The 2023 guideline grades plantar fascia and calf stretching **A** for both short-term and long-term pain. Strength training gets a **B**. In a trial of 48 people, slow heel raises with a towel under the toes eased pain faster than stretching alone at three months, though both groups were even by twelve months (Rathleff and colleagues, 2015).',
        'Tape can make walking easier this week so you keep moving and keep doing the exercises. If walking itself sets off the pain, [heel pain after walking](/heel-pain-after-walking/) covers how to adjust the load.',
        'The three exercises below are the core. In Walkito, the stretches start at 2 holds of 30 seconds, and this towel heel raise, once your plan reaches it, is set at 4 sets of 10 with the same slow 3-2-3 count (a backpack adds weight when you have a step).',
        'Once a week, the exercise for your focus goal moves up a step if your last two sessions with it felt easy and morning pain did not rise, and down a step if a session felt hard or morning pain rose by 2 or more.',
      ],
      exercises: [
        {
          name: 'Plantar fascia stretch',
          evidence: { level: 'strong', why: 'Guideline grade A. In a 2003 trial of 101 people, this stretch beat a calf-only stretch for pain.' },
          dose: '2 holds of 30 seconds, each foot',
          how: 'Sit with one ankle over the other knee. Pull the toes back until you feel a stretch along the arch. Do it before your first steps in the morning.',
          often: 'Every morning and after long sitting',
          feel: 'A pull along the arch, not a sharp pain',
          stop: 'Pain reaches 6/10',
          media: 'fascia_stretch',
          caption: 'Plantar fascia stretch: pull the toes back before you stand',
          alt: 'A seated figure pulling the toes back to stretch the arch, the plantar fascia highlighted',
        },
        {
          name: 'Calf stretch (straight knee)',
          evidence: { level: 'strong', why: 'Guideline grade A for short-term and long-term pain.' },
          dose: '2 holds of 30 seconds, each leg',
          how: 'Hands on a wall, back leg straight, heel on the floor, hips forward. Hold until you feel the stretch in the upper calf.',
          often: 'Most days',
          feel: 'A stretch in the upper calf',
          stop: 'Pain reaches 6/10',
          media: 'calf_stretch_straight',
          caption: 'Calf stretch: back leg straight, heel down, lean in',
          alt: 'A figure leaning on a wall with the back leg straight and the calf highlighted',
        },
        {
          name: 'Heel raise with a towel under the toes',
          evidence: { level: 'moderate', why: 'Guideline grade B for strength training. Tested in one 48-person trial.' },
          dose: '4 sets of 10 (Walkito\'s dose)',
          how: 'Stand on a step with a rolled towel under your toes and the heel free. Rise up slowly over about three seconds, pause for two, and lower over about three seconds. Hold a rail for balance.',
          often: 'Every other day',
          feel: 'Hard work in the calf and a pull under the arch',
          stop: 'Pain reaches 6/10, or the next morning is clearly worse',
          media: 'heel_raise_towel',
          caption: 'Towel heel raise: slow up, slow down',
          alt: 'A figure rising onto the toes with a rolled towel under the toes, calf and arch highlighted',
        },
      ],
      cites: [CITE.guideline, CITE.rathleff, CITE.digiovanni2003],
    },
    {
      h2: 'When should you stop taping?',
      paragraphs: [
        'Stop taping:',
        {
          list: [
            'When it no longer makes a difference you can feel.',
            'When your skin reacts.',
            'Once the pain has settled enough that you walk normally without it.',
          ],
        },
        '**Tape is not meant to be worn for months.** The research covers up to about a month and a half, and the guideline only recommends it for the short term.',
        'A simple test: go a day without tape and rate your first-step pain from 0 to 10. If it matches your taped days, the tape is no longer doing much. If you still need tape every day after a month of regular exercises, see a clinician to check for something else and talk through other options, such as shoe inserts (see [insoles vs exercises](/insoles-vs-exercises/)).',
      ],
      cites: [CITE.guideline],
    },
  ],
  faq: [
    {
      q: 'Does KT tape help plantar fasciitis?',
      cites: [CITE.garciaGomarizSham, CITE.guideline],
      a: 'Kinesiology (KT) tape helps plantar fasciitis pain for a short time. In a 2024 trial of 34 people, it beat a sham tape by up to 3.5 points out of 10 on day two, and the gap shrank over the following days. The 2023 guideline grades taping A for short-term relief, used together with stretching and other care.',
    },
    {
      q: 'Is low-Dye taping better than kinesiology tape?',
      cites: [CITE.garciaGomarizLowDye, CITE.guideline],
      a: 'There is no clear winner. In the only head-to-head trial, with 40 people, kinesiology tape eased pain 2 points out of 10 more on the first day and felt more comfortable, but the difference shrank each day. The 2023 guideline grades both kinds of tape A for short-term pain and says they still need a proper comparison.',
    },
    {
      q: 'How long should you keep tape on for plantar fasciitis?',
      cites: [CITE.radfordTaping, CITE.garciaGomarizSham],
      a: 'Most people keep tape on for two to five days, then give the skin a break before taping again. Trials used about the same: kinesiology tape for 5 days and rigid low-Dye tape for up to a week. Take it off sooner if it itches, burns, feels too tight, or your toes tingle or change color.',
    },
    {
      q: 'What kind of tape do you use for plantar fasciitis?',
      cites: [CITE.guideline],
      a: 'You can use either rigid sports tape about 2.5 to 3.8 cm wide (often zinc oxide tape) for low-Dye taping, or stretchy kinesiology tape, usually 5 cm wide. The 2023 guideline supports both kinds for short-term pain. If your skin is sensitive, pick a hypoallergenic tape or put a thin underwrap on first.',
    },
    {
      q: 'Can taping replace exercises for plantar fasciitis?',
      cites: [CITE.guideline, CITE.rathleff],
      a: 'No. Tape eases pain for days, and the 2023 guideline found no studies of it past about a month and a half. Stretching has guideline grade A for both short-term and long-term pain, and slow heel raises eased pain faster than stretching alone at three months in a 48-person trial. Use tape to keep moving while the exercises do the longer work.',
    },
    {
      q: 'Is taping safe for everyone?',
      cites: [CITE.radfordTaping],
      a: 'Taping is low-risk for most adults, but not risk-free. In a 92-person trial, 28% of people who wore tape had a side effect, mostly tightness or a skin reaction, and all cleared once the tape came off. If you have diabetes, poor feeling in your feet, fragile skin or poor circulation, ask a clinician before taping yourself.',
    },
  ],
  redFlags: {
    h2: 'See a clinician first if',
    bullets: [
      'the pain followed an injury or a fall',
      'you cannot put weight on the foot, or you are limping',
      'it comes with numbness, tingling or burning',
      'the heel is red, warm or swollen, or you have a fever',
      'you have diabetes, reduced feeling in your feet or poor circulation (do not tape yourself without advice)',
      'the skin under the tape blisters, breaks, or a rash spreads past the edges of the tape',
      'your toes go numb, pale or blue with the tape on and do not recover within minutes of taking it off',
      'pain keeps you awake at night or is present at rest',
      'you still need tape every day after a month of regular stretching and calf work',
    ],
  },
  program: {
    h2: 'Doing it as a plan',
    text: 'Tape can make the next few days easier. The exercises are what keep working after it comes off. Walkito builds a plan one week at a time around one goal. For heel pain, the first goal is a better morning: pain at or under 1 out of 10 for 14 days in a row. Stretching starts on day one. Each week, only the exercise for your focus goal can move up a step, and only when your last two sessions with it felt easy and morning pain did not rise.',
    more: [
      'You pick 3, 5 or 7 days a week and sessions of 3, 5 or 10 minutes. Every 14 days at first (every 28 once a goal is reached), a short test checks calf endurance, arch hold and balance, so you can see what is changing. Taping is not part of Walkito. Walkito is an exercise program for adults. It does not diagnose and is not a substitute for a clinician.',
    ],
    cta: 'Start with 3 minutes a day.',
  },
  crumb: 'Taping',
  campaign: 'guide-pf-taping',
};
