import { CITE } from '@/lib/citations';
import type { Guide } from '../types';

/*
 * ── New citations (append to CITATIONS[] in lib/citations.ts) ──────────
 *
 * lemontFasciosis | Lemont H, Ammirati KM, Usen N. Plantar fasciitis: a degenerative process (fasciosis) without inflammation. Journal of the American Podiatric Medical Association. 2003;93(3):234–237. | doi: 10.7547/87507315-93-3-234 | pmid: 12756315 | histology review of 50 surgical cases
 * bleakleyIce | Bleakley C, McDonough S, MacAuley D. The use of ice in the treatment of acute soft-tissue injury: a systematic review of randomized controlled trials. American Journal of Sports Medicine. 2004;32(1):251–261. | doi: 10.1177/0363546503260757 | pmid: 14754753 | systematic review of 22 RCTs
 * frenchHeatCold | French SD, Cameron M, Walker BF, Reggars JW, Esterman AJ. Superficial heat or cold for low back pain. Cochrane Database of Systematic Reviews. 2006;(1):CD004750. | doi: 10.1002/14651858.CD004750.pub2 | pmid: 16437495 | Cochrane systematic review (9 trials, 1,117 people)
 * bleakleyThermal | Bleakley CM, Costello JT. Do thermal agents affect range of movement and mechanical properties in soft tissues? A systematic review. Archives of Physical Medicine and Rehabilitation. 2013;94(1):149–163. | doi: 10.1016/j.apmr.2012.07.023 | pmid: 22885279 | systematic review (36 studies, 1,301 healthy people)
 * bregerContrast | Breger Stanton DE, Lazaro R, Macdermid JC. A systematic review of the effectiveness of contrast baths. Journal of Hand Therapy. 2009;22(1):57–69. | doi: 10.1016/j.jht.2008.08.001 | pmid: 18945584 | systematic review (10 studies)
 * petrofskyHeat | Petrofsky J, Laymon M, Lee H. Local heating of trigger points reduces neck and plantar fascia pain. Journal of Back and Musculoskeletal Rehabilitation. 2020;33(1):21–28. | doi: 10.3233/BMR-181222 | pmid: 31594202 | small RCT (20 people with plantar pain, heat vs sham)
 * costantinoCryo | Costantino C, Vulpiani MC, Romiti D, Vetrano M, Saraceni VM. Cryoultrasound therapy in the treatment of chronic plantar fasciitis with heel spurs. A randomized controlled clinical study. European Journal of Physical and Rehabilitation Medicine. 2014;50(1):39–47. | doi: none | pmid: 24172641 | single-blind RCT (102 people)
 * jadhavCryostretch | Jadhav A, Gurudut P. Comparative effectiveness of Gua Sha, cryostretch, and positional release technique on tenderness and function in subjects with plantar fasciitis: a randomized clinical trial. International Journal of Therapeutic Massage & Bodywork. 2023;16(1):13–23. | doi: 10.3822/ijtmb.v16i1.749 | pmid: 36866182 | RCT (36 people, 7-day follow-up)
 * shindeFrozenBall | Shinde VV, Patil PR. Efficacy of static stretching along with frozen tennis ball exercises in individuals with plantar fasciitis. Cureus. 2026;18(8):e114000. | doi: 10.7759/cureus.114000 | pmid: 42699086 | small two-group controlled trial (30 people, allocation method unclear)
 * malangaHeatCold | Malanga GA, Yan N, Stark J. Mechanisms and efficacy of heat and cold therapies for musculoskeletal injury. Postgraduate Medicine. 2015;127(1):57–65. | doi: 10.1080/00325481.2015.992719 | pmid: 25526231 | narrative review
 * thngBurns | Thng P, Lim RM, Low BY. Thermal burns in diabetic feet. Singapore Medical Journal. 1999;40(5):362–364. | doi: none | pmid: 10489498 | case series (5 people)
 *
 * Existing keys reused: guideline, rathleff, digiovanni2003.
 */

export const ICE_HEAT_EN: Guide = {
  lang: 'en',
  page: 'iceHeat',
  mainSource: CITE.guideline,
  published: '2026-10-09',
  updated: '2026-10-09',
  title: 'Ice or Heat for Plantar Fasciitis? What Helps',
  description:
    'Ice or heat for plantar fasciitis: what each does, what the few trials found, how to use them safely, and why exercise does the real work.',
  h1: 'Ice or heat for plantar fasciitis: which helps, and when',
  lede:
    'For plantar fasciitis, ice and heat are both fine as short-term comfort. Ice tends to suit a sore heel after a long day on your feet. Heat tends to suit a stiff foot before you stretch. Neither has strong trial evidence, and the 2023 heel pain guideline makes no recommendation on either. Stretching and calf strength do the real work.',
  intro: [
    'So pick the one that feels better, use it safely, and keep it next to your exercises, not in place of them. Below: why the "it is inflamed, so ice it" rule is shaky, what the few studies found, and how to protect your skin. For the condition itself, see [plantar fasciitis](/plantar-fasciitis/).',
  ],
  takeaways: [
    'The 2023 heel pain guideline found only 1 small trial on heat and concluded that a recommendation on superficial heat or cold "cannot be made" (Koc and colleagues, 2023).',
    'In tissue from 50 cases of heel surgery for long-standing plantar fasciitis, researchers found worn, degenerated fascia without signs of inflammation (Lemont and colleagues, 2003).',
    'A review of 22 trials of ice for acute injuries rated their quality 3.4 out of 10 on average and found no evidence for a best way or best length of time to ice (Bleakley and colleagues, 2004).',
    'A review of 36 studies in people without injuries found heat plus stretching improved range of motion more than stretching alone, though every study had a high risk of bias (Bleakley and Costello, 2013).',
    'Stretching gets the guideline\'s top grade, **A**, and strength training a **B**. Ice and heat are comfort tools to use alongside them.',
  ],
  toc: true,
  sections: [
    {
      h2: 'Is ice or heat better for plantar fasciitis?',
      keyFact: 'The 2023 heel pain guideline found 1 small heat trial and said a recommendation on superficial thermal modalities cannot be made (Koc and colleagues, 2023).',
      paragraphs: [
        '**Neither ice nor heat is clearly better for plantar fasciitis**, because neither has been tested well enough to pick a winner. The 2023 heel pain guideline from the American Physical Therapy Association reviewed the research on "thermal modalities", meaning hot and cold packs and similar. It found one small, lower-quality trial on heat and concluded that a recommendation "cannot be made".',
        'That does not mean they are useless. It means they are comfort tools, and you can choose by what your foot feels like right now. The table below is a practical guide, not a rule from a trial.',
      ],
      table: {
        caption: 'Ice or heat: a practical guide',
        head: ['Situation', 'Usually more comfortable', 'Why'],
        rows: [
          ['Heel throbs after a long walk or a shift', 'Ice', 'Cold dulls pain signals for a while'],
          ['Foot feels stiff and tight, before you stretch', 'Heat', 'Warm tissue tends to stretch more easily'],
          ['First steps in the morning', 'Heat or nothing, then stretch', 'The goal is to loosen up before loading the foot'],
          ['Pain started suddenly after an injury, with swelling or bruising', 'Ice, and see a clinician', 'This may not be plantar fasciitis'],
          ['You have diabetes, numb feet or poor circulation', 'Ask a clinician first', 'You may not feel a burn or cold injury'],
        ],
      },
      cites: [CITE.guideline],
    },
    {
      h2: 'Is plantar fasciitis inflamed, and does it need ice?',
      keyFact: 'In 50 surgical cases of long-standing plantar fasciitis, the fascia showed degeneration without inflammation (Lemont and colleagues, 2003).',
      figure: {
        id: 'plantar-fascia',
        caption: 'The plantar fascia runs from the heel bone to the base of the toes.',
        alt: 'A foot seen from the inner side, with the plantar fascia highlighted as a band from the heel to the toes.',
      },
      paragraphs: [
        '**Long-standing plantar fasciitis is usually not an inflamed tissue in the way a fresh sprain is.** The "-itis" in the name means inflammation, which is why so many pages tell you to ice it. But when Lemont and colleagues looked at tissue from 50 cases of surgery for chronic plantar fasciitis in 2003, they found worn, frayed and degenerated fascia, and no signs of inflammation. They suggested calling it fasciosis, meaning a degenerated band, not an inflamed one.',
        'Two caveats travel with that finding. These were the hardest cases, bad enough to need surgery, so early heel pain may look different. And the study only described tissue. It did not test ice.',
        'It does change the reason for icing. If the fascia is mainly worn and overloaded, cold is not "putting out a fire". It dulls pain for a while, which is still useful. What helps a worn tissue adapt is gradual load: stretching and strength work.',
      ],
      cites: [CITE.lemontFasciosis],
    },
    {
      h2: 'Does ice help plantar fasciitis? What the trials found',
      keyFact: 'In a 30-person trial, pain fell from 7.7 to 3.5 out of 10 with a frozen tennis ball plus stretching, against 7.6 to 6.7 with stretching alone (Shinde and Patil, 2026).',
      paragraphs: [
        '**Ice probably eases plantar fasciitis pain for a short time**, but very few trials have tested it, and none tested ice against doing nothing. Here is what exists:',
        {
          list: [
            'In a 2014 trial of 102 people with plantar fasciitis lasting more than six months, both groups had 10 daily 20-minute sessions from a clinic machine: cold alone, or cold plus ultrasound. Both improved, and the combined group did better up to 18 months (Costantino and colleagues). Cold was the comparison, so the trial cannot say how much the cold itself did.',
            'A 2023 trial of 36 people had the same gap: a "cryostretch" group, rolling on a frozen tennis ball, improved over 7 days, but so did the two groups without cold (Jadhav and Gurudut).',
            'The most direct test is small. In a 2026 study of 30 people, the group that added a frozen tennis ball to stretching for two months went from 7.7 to 3.5 on a 0 to 10 pain scale, while stretching alone went from 7.6 to 6.7 (Shinde and Patil). That looks like a big difference, but the paper does not clearly say how people were put into groups, and the frozen-ball group also got rolling pressure, so the cold and the massage cannot be separated.',
          ],
        },
        'Outside the foot, the picture is similar. A 2004 review of 22 trials of ice for fresh injuries such as ankle sprains rated their average quality 3.4 out of 10 and found no best method or length of time to ice. The only signal, a marginal one, favoured ice plus exercise after ankle sprains and surgery (Bleakley and colleagues).',
      ],
      sourceNote: 'Costantino 2014: single-blind RCT, cryoultrasound vs cryotherapy, pain on a visual analogue scale. Jadhav 2023: RCT, 12 per group, Numerical Pain Rating Scale and Foot Function Index at day 7. Shinde 2026: 15 per group, NPRS and Foot Function Index, allocation described as "random sampling technique". Bleakley 2004: mean PEDro score 3.4/10.',
      cites: [CITE.costantinoCryo, CITE.jadhavCryostretch, CITE.shindeFrozenBall, CITE.bleakleyIce],
    },
    {
      h2: 'Is heat good for plantar fasciitis?',
      keyFact: 'A Cochrane review of 9 trials and 1,117 people found moderate evidence, from a few of those trials, of a small short-term pain benefit from heat wraps for low back pain, and too little evidence to judge cold (French and colleagues, 2006).',
      paragraphs: [
        '**Heat is fine for plantar fasciitis if it feels good**, and the idea that it "makes the inflammation worse" has no trial behind it.',
        'The only heat trial the 2023 guideline found was small: 20 people with plantar foot pain were randomly given a heat patch or a fake patch over trigger points (tender spots in the muscle). Pain dropped in the heat group but not in the fake-patch group (Petrofsky and colleagues, 2020). The patch stayed on for about four hours, and pain was measured right after, so it tells you about short-term relief only.',
        'The best general evidence on heat comes from back pain, not feet. A Cochrane review (a careful summary of trials) of 9 trials and 1,117 people found moderate evidence, from a few of those trials, that heat wraps give a small, short-term drop in recent low back pain, and that adding exercise helped more. For cold it found only three poor-quality studies and drew no conclusions (French and colleagues, 2006).',
        'Heat brings more blood to the area and makes tissue a little more pliable. Cold slows blood flow and dulls pain. A 2015 review noted that most advice on both rests on experience, with limited trial evidence (Malanga and colleagues).',
      ],
      cites: [CITE.petrofskyHeat, CITE.guideline, CITE.frenchHeatCold, CITE.malangaHeatCold],
    },
    {
      h2: 'Should you use heat before stretching?',
      keyFact: 'Across 36 studies in 1,301 people without injuries, heat plus stretching improved range of motion more than stretching alone (Bleakley and Costello, 2013).',
      paragraphs: [
        '**Warming the foot before you stretch is a reasonable choice**, and it has more support than icing before stretching. A 2013 review of 36 studies in 1,301 people without injuries found that heat increased range of motion, and that heat plus stretching worked better than stretching alone. The data on cold were conflicting. Every study had a high risk of bias, and none involved people with heel pain, so take this as a sensible idea, not a tested plan for plantar fasciitis.',
        'Warming up can be simple. A warm shower, or a few minutes with your feet in warm water, before the plantar fascia stretch and calf stretch.',
        'In the morning, though, do not wait for a warm-up before you stretch. The first-step stretch is meant to happen before your foot takes weight, on the edge of the bed. [Heel pain in the morning](/heel-pain-in-the-morning/) walks through that routine.',
      ],
      cites: [CITE.bleakleyThermal],
    },
    {
      h2: 'Do contrast baths help plantar fasciitis?',
      paragraphs: [
        'Contrast baths, switching your foot between warm and cold water, have no trial behind them for plantar fasciitis that we could find. A 2009 systematic review of contrast baths included 10 studies in volunteers without injuries and in people with rheumatoid arthritis, diabetes or foot and ankle injuries. It found that switching temperatures may raise skin blood flow, but no link to better function was shown (Breger Stanton and colleagues).',
        'You will see many different recipes online:',
        {
          list: [
            'Two minutes cold and 30 seconds warm.',
            'One minute cold and three minutes warm.',
            'Always end on cold.',
          ],
        },
        '**None of these timings comes from a study.** If you like contrast baths, they are low risk for most people with normal feeling in their feet. Just do not expect more from them than from plain warm or cold.',
      ],
      cites: [CITE.bregerContrast],
    },
    {
      h2: 'How do you ice or heat your heel safely?',
      paragraphs: [
        'Ice and heat are low risk for most people, but both can injure skin, and the risk is higher on a foot that does not feel normally. No trial has set the best length of time to ice (Bleakley and colleagues, 2004), so the limits below are common practice, not research numbers.',
      ],
      bullets: [
        'Keep a thin cloth between ice and skin. Never put ice straight on bare skin.',
        'Most advice keeps ice to about 10 to 20 minutes at a time, then lets the skin warm back up fully before the next round.',
        'Take ice off if the skin turns white, hard or numb, or tingles sharply.',
        'For heat, use warm, not hot. A heat pack or warm water should feel pleasant, never stinging.',
        'Never sleep on a heating pad or with an ice pack on your foot.',
        'Skip heat on a heel that is red, hot and swollen, especially with a fever. That needs a clinician, not a heat pack.',
        'If you have diabetes, numbness in your feet, poor circulation or Raynaud\'s (fingers or toes that turn white in the cold), ask a clinician before using either.',
      ],
      after: [
        'That last point matters. In a case series of five people with diabetes and nerve damage in their feet, using heat on their feet led to burns and infections that all needed surgery to clean the wounds (Thng and colleagues, 1999). A foot that cannot feel heat properly cannot warn you.',
        'A frozen water bottle rolled under the arch combines cold with massage. It has its own page: [massage ball and frozen bottle for plantar fasciitis](/massage-ball-plantar-fasciitis/), with the technique on [foot roll](/exercises/foot-roll/).',
      ],
      cites: [CITE.bleakleyIce, CITE.thngBurns],
    },
    {
      h2: 'What actually helps plantar fasciitis long term?',
      keyFact: 'In a trial of 48 people, slow heel raises with a towel under the toes eased pain faster than stretching alone at three months, and both groups were even by twelve months (Rathleff and colleagues, 2015).',
      paragraphs: [
        'The part of plantar fasciitis care with the strongest evidence is exercise, not temperature. The 2023 guideline gives plantar fascia and calf stretching its top grade, **A**, and strength training for the foot and ankle a **B**.',
        'In a 2003 trial of 101 people, a plantar fascia stretch helped more than a calf stretch alone after about two months (DiGiovanni and colleagues). In a 2015 trial of 48 people, slow heel raises with a towel under the toes eased pain faster than stretching alone at three months, though by twelve months both groups were about even (Rathleff and colleagues).',
        'Use ice or heat around these exercises: warmth before stretching, ice after a long day, if either helps. Walkito works the same way: the stretches and calf work are the plan, and the foot roll is a 60-second recovery step, not the main event. The full list is in [plantar fasciitis exercises](/plantar-fasciitis-exercises/).',
      ],
      exercises: [
        {
          name: 'Plantar fascia stretch',
          dose: 'In the trial: 10 holds of 10 seconds. Walkito starts at 2 holds of 30 seconds, each foot',
          often: 'Every morning before your first step, and after sitting',
          feel: 'A pull along the arch, not sharp pain',
          stop: 'Pain reaches 6/10',
          how: 'Sit and cross one ankle over the other knee. Pull the toes back gently until you feel a stretch along the arch. Hold, then release. A warm foot may stretch more easily.',
          media: 'fascia_stretch',
          caption: 'Plantar fascia stretch: pull the toes back gently before standing',
          alt: 'A seated figure pulling the toes back to stretch the arch',
          evidence: { level: 'strong', why: 'Guideline grade A. A 2003 trial of 101 people favoured it over a calf stretch alone.' },
        },
        {
          name: 'Calf stretch (straight knee)',
          dose: 'Walkito starts at 2 holds of 30 seconds, each leg',
          often: 'Most days',
          feel: 'A stretch in the upper calf',
          stop: 'Pain reaches 6/10',
          how: 'Hands on a wall, back leg straight, heel down, hips forward. Hold until you feel the upper calf stretch.',
          media: 'calf_stretch_straight',
          caption: 'Calf stretch: back leg straight, heel down, lean forward',
          alt: 'A figure leaning on a wall with the back leg straight',
          evidence: { level: 'strong', why: 'Guideline grade A for calf and plantar fascia stretching.' },
        },
        {
          name: 'Heel raises on both feet',
          dose: 'Walkito starts at 3 sets of 10',
          often: 'Strength days, not two in a row',
          feel: 'Work in both calves',
          stop: 'Pain reaches 6/10, or the next morning is clearly worse',
          how: 'Stand holding a wall, rise onto your toes over about three seconds, and lower over about three seconds. This is the first step toward the towel heel raise from the 48-person trial, covered in [calf raises for plantar fasciitis](/calf-raises-plantar-fasciitis/).',
          media: 'heel_raise_double',
          caption: 'Heel raises: rise slowly, lower slowly',
          alt: 'A standing figure rising onto the toes of both feet',
          evidence: { level: 'moderate', why: 'Guideline grade B for strength training. This two-foot version was not tested on its own.' },
        },
        {
          name: 'Foot roll',
          dose: 'Walkito starts at 1 round of 60 seconds',
          often: 'After a session or a long day',
          feel: 'Firm pressure under the arch, never sharp pain',
          stop: 'You wince, or the sole is more sore the next morning',
          how: 'Sit and roll the sole slowly over a ball. A frozen water bottle adds cold if that feels better.',
          media: 'foot_roll',
          caption: 'Foot roll: slow, firm pressure under the arch',
          alt: 'A seated figure rolling the sole of one foot over a ball',
          evidence: { level: 'early', why: 'A comfort step. Rolling with or without cold has only small, early studies behind it.' },
        },
      ],
      cites: [CITE.guideline, CITE.digiovanni2003, CITE.rathleff],
    },
  ],
  faq: [
    {
      q: 'Should I ice or heat plantar fasciitis?',
      cites: [CITE.guideline],
      a: 'Use whichever feels better, because neither has strong evidence for plantar fasciitis. The 2023 heel pain guideline found only one small heat trial and made no recommendation on heat or cold. Many people like ice after a long day on their feet and warmth before stretching. Both are short-term comfort. Stretching and calf strength work are what the guideline recommends.',
    },
    {
      q: 'How long should I ice my heel for plantar fasciitis?',
      cites: [CITE.bleakleyIce],
      a: 'Common practice is about 10 to 20 minutes at a time, with a thin cloth between the ice and your skin, then letting the skin warm up fully before icing again. No trial has found a best length of time: a review of 22 ice trials found no evidence for an optimal duration. Stop early if the skin turns white, numb or hard.',
    },
    {
      q: 'Does heat make plantar fasciitis worse?',
      cites: [CITE.petrofskyHeat, CITE.lemontFasciosis],
      a: 'There is no trial showing heat makes plantar fasciitis worse. That warning comes from the idea that the fascia is inflamed, but tissue from long-standing cases showed degeneration without inflammation. In one small trial of 20 people with plantar foot pain, pain dropped with a heat patch but not with a fake patch. Avoid heat on a heel that is red, hot and swollen.',
    },
    {
      q: 'Is it OK to ice plantar fasciitis in the morning?',
      cites: [CITE.guideline],
      a: 'You can, but morning is when the foot is stiffest, and cold will not loosen it. The more useful morning step is a plantar fascia stretch before your first step. The 2023 guideline grades stretching A, its top grade. A warm shower or warm socks before you stretch may feel better than ice. Save ice for later, after time on your feet.',
    },
    {
      q: 'Does rolling a frozen water bottle help plantar fasciitis?',
      cites: [CITE.shindeFrozenBall],
      a: 'It may ease pain, but the evidence is thin. In a small study of 30 people, adding a frozen tennis ball to stretching for two months lowered pain more than stretching alone, but group allocation was unclear and the cold cannot be separated from the rolling. It is a reasonable comfort step next to stretching and calf work, not a replacement for them.',
    },
    {
      q: 'Can I use ice or heat if I have diabetes?',
      cites: [CITE.thngBurns],
      a: 'Ask a clinician first. Diabetes can reduce feeling in the feet, so you may not notice skin getting too hot or too cold until it is damaged. In a case series of five people with diabetic nerve damage who used heat on their feet, all developed burns that needed surgery to clean. The same caution applies to poor circulation or numbness.',
    },
  ],
  redFlags: {
    h2: 'See a clinician first if',
    bullets: [
      'the pain followed an injury or a fall, or came with sudden swelling or bruising',
      'you cannot put weight on the foot, or you are limping',
      'squeezing the sides of the heel reproduces the pain, which can point toward a stress fracture',
      'it comes with numbness, tingling or burning',
      'the heel is red, hot or swollen, or you have a fever',
      'you have diabetes, numbness in your feet, poor circulation or Raynaud\'s, before using ice or heat',
      'skin stays white, numb, blistered or very red after ice or heat',
      'it has not improved after several weeks of daily stretching and a lighter load',
    ],
  },
  program: {
    h2: 'Doing it as a plan',
    text: 'Ice and heat can take the edge off a bad day. The exercise plan is the part the guideline backs. Walkito builds that plan one week at a time around one focus goal. For heel pain, the first goal is a better morning: pain at or under 1 out of 10 for 14 days in a row. Stretches are in the plan from the first week, and the foot roll shows up as a short recovery step.',
    more: [
      'Each week, only the exercise for your focus goal can change. It moves up one step when your last two sessions with it felt easy and morning pain did not rise, and down a step if a session felt hard or morning pain rose by 2 or more.',
      'You pick 3, 5 or 7 days a week and sessions of 3, 5 or 10 minutes. A short test checks calf endurance, arch hold and balance every 14 days at first, then every 28 once you reach a goal, so you can see what is changing. Walkito is an exercise program for adults. It does not diagnose and is not a substitute for a clinician.',
    ],
    cta: 'Start with 3 minutes a day.',
  },
  crumb: 'Ice or heat',
  campaign: 'guide-ice-heat',
};
