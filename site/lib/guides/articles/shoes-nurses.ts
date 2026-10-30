import { CITE } from '@/lib/citations';
import type { Guide } from '../types';

/*
 * Buying guide: best shoes for nurses with plantar fasciitis. Facts checked
 * October 23, 2026. Evidence: PubMed abstracts (and the Reed 2014 and Getie
 * 2021 full texts on PMC) for every study cited; the 2014 and 2023 JOSPT heel
 * pain guidelines read in full. Shoe list: the models named most often across
 * Google's first page and AI Overview for "best shoes for nurses with plantar
 * fasciitis" (US, October 23, 2026). APMA seal status: apma.org/seal-db search
 * the same day. Maker features were read on the maker's own page only for
 * Dansko Professional, Brooks Addiction Walker 2 and Clove Classic; the other
 * maker pages blocked our check, so their features are as review sites
 * describe them, and heel drop is listed only where the maker states it. We did not test any
 * shoe, earn nothing from them and use no affiliate links. Walkito is not in
 * the shoe list. No prices. Recheck the APMA column and drops before editing.
 */
export const SHOES_NURSES_EN: Guide = {
  lang: 'en',
  page: 'shoesNurses',
  mainSource: CITE.guideline,
  published: '2026-10-23',
  updated: '2026-10-23',
  title: 'Best Shoes for Nurses With Plantar Fasciitis: The Evidence',
  description:
    'No trial has tested a nursing shoe for plantar fasciitis. What the studies support instead, and 12 shoes review sites often name, with APMA seal status.',
  h1: 'Best shoes for nurses with plantar fasciitis: what the evidence shows',
  lede:
    'No trial has tested any named nursing shoe for plantar fasciitis, so no brand has evidence that it is the best. Pick by features that have some research behind them: a good fit, a cushioned heel, some heel raise or a rocker sole, a slip-resistant outsole and two pairs to rotate. The shoes below are ones review sites often recommend; the stretching and strengthening in our [exercises guide](/plantar-fasciitis-exercises/) have more evidence behind them than any shoe.',
  intro: [
    'Walkito makes this page, so we are not neutral: we make an exercise app, not shoes. We did not wear-test these shoes, we earn nothing from them and there are no affiliate links. This page is about the shoe question only. For why shifts hurt and what to do before and after them, see [foot pain for nurses](/feet-hurt-standing-all-day/).',
  ],
  takeaways: [
    'The 2023 heel pain guideline does not grade shoes on their own. It lists footwear advice under patient education at its lowest grade, E. The 2014 version said clinicians may prescribe a rocker-bottom shoe with an orthosis, and shoe rotation for people who stand for long periods (grade C).',
    'In 29 women with heel pain, a shoe with a 14 mm heel-to-toe drop gave 15% lower heel pressure and was 47% to 67% more comfortable than a 4 mm shoe with a different outsole, in one lab session.',
    'In a study of 50 people with heel pain and 25 matched people without it, those with heel pain wore shoes with harder heels and stood 3.4 hours a day longer.',
    'In a survey of 366 nurses in Ethiopia, low shoe comfort went with about 4 times the odds of ankle or foot pain.',
    'In a trial of 4,553 NHS staff, slip-resistant shoes cut the slip rate by 37% over 14 weeks. That is about slips, not heel pain.',
  ],
  toc: true,
  sections: [
    {
      h2: 'What are the best shoes for nurses with plantar fasciitis?',
      paragraphs: [
        'The honest answer is a set of features, not a brand. No study we found tested a Hoka, Brooks, Dansko, ASICS, New Balance or Clove shoe in people with plantar fasciitis. What the research does give is a checklist:',
        {
          list: [
            '**A shoe that fits and feels comfortable.** Nurses with low shoe comfort had about 4 times the odds of ankle or foot pain in one survey, and a study of 120 nurses called for nursing shoes in different widths for the same length, so look for a model sold in widths.',
            '**A cushioned, not hard, heel.** People with heel pain wore harder-heeled shoes than matched people without it, and the 2023 guideline mentions footwear with heel cushioning for some people (grade C).',
            '**Some heel raise or a rocker sole, not a flat one.** A higher-drop shoe lowered heel pressure in a lab study, and rocker soles with an orthosis lowered pain in another. Both were single sessions.',
            '**Room for an insole.** The rocker shoe did best combined with an orthosis. See [best insoles for plantar fasciitis](/best-insoles-for-plantar-fasciitis/).',
            '**A slip-resistant outsole.** The strongest footwear trial in hospital staff is about slips, and it found fewer of them.',
            '**Two pairs, rotated through the week.** Linked to lower odds of plantar fasciitis in factory workers, and part of the 2014 guideline.',
          ],
        },
        'A firm heel counter, the stiff cup at the back of the shoe, is a common recommendation for holding the heel and an insole in place. We found no study testing it in plantar fasciitis.',
      ],
      cites: [CITE.shoeGetie2021, CITE.shoePuszczalowska2024, CITE.landorfFootwear, CITE.guideline, CITE.shoeFranettovich2025, CITE.shoeFong2012, CITE.shoeCockayne2021, CITE.shoeWerner2010, CITE.shoeMartin2014Cpg],
    },
    {
      h2: 'What does the heel pain guideline say about shoes?',
      keyFact: 'The 2014 heel pain guideline said clinicians “may prescribe (1) a rocker-bottom shoe construction in conjunction with a foot orthosis, and (2) shoe rotation during the work week for those who stand for long periods” (Martin and colleagues, 2014, grade C).',
      paragraphs: [
        'Not much. The 2023 guideline has no graded recommendation for shoes on their own. Footwear shows up twice: under patient education, “footwear options to mitigate commonly occurring weight loading stresses”, at grade E, the lowest level; and inside its orthoses advice, a heel cushion or footwear with heel cushioning for people whose feet roll outward (grade C).',
        'The 2014 version was more specific. It said clinicians may prescribe a rocker-bottom shoe together with a foot orthosis, and shoe rotation during the work week for people who stand for long periods, both at grade C, meaning weaker evidence. **For nurses, shoe rotation is the one piece of guideline shoe advice written for people who stand at work.**',
      ],
      cites: [CITE.guideline, CITE.shoeMartin2014Cpg],
    },
    {
      h2: 'Do rocker soles help plantar fasciitis?',
      keyFact: 'In 15 people with plantar fasciitis, rocker shoes plus custom orthoses gave a heel pain score of 9.7 on a 100 mm scale, against 30.9 for rocker shoes alone and 29.5 for orthoses alone, right after walking in them (Fong and colleagues, 2012).',
      paragraphs: [
        'Maybe, and mostly with an insole. In that crossover study of 15 people, the combination also lowered pressure under the inner heel the most. But it measured pain right after walking, not over weeks.',
        'A lab study of 8 people with plantar fasciitis and 8 without found that rocker shoes with a stiff insole reduced bending at the big toe but did not significantly reduce strain on the plantar fascia. **We found no trial that followed people in rocker shoes over weeks, and none that tested a commercial rocker shoe such as a Hoka or a Dansko clog.**',
      ],
      cites: [CITE.shoeFong2012, CITE.shoeGreve2019],
    },
    {
      h2: 'What heel drop is best for plantar fasciitis?',
      keyFact: 'In 29 women with heel pain, a test shoe with a 14 mm heel-to-toe drop reduced heel peak pressure by 15% and maximum loading rate by 29% compared with a 4 mm shoe, in one session (Franettovich Smith and colleagues, 2025).',
      paragraphs: [
        'No trial has tested which drop is best. That 2025 lab study is the closest: the higher-drop shoe also scored 47% to 67% higher for comfort. But the two shoes also differed in outsole material, so it does not isolate drop, and one author had earlier consulted for a footwear brand. Review sites quote drop ranges for plantar fasciitis; we could not find those ranges in either guideline.',
        'Two other findings point the same way. People with heel pain wore harder-heeled shoes than people without it, though heel height did not differ between the groups. And a lab test of three brands of nursing shoe concluded that comfortable nursing shoes need arch support, about 1.5 cm of foam under the ball of the foot and a heel height of 1.8 to 3.6 cm. That study measured total heel height, not drop, and was not a study of people with plantar fasciitis.',
        'Zero-drop and minimalist shoes have only small trials in plantar fasciitis, some of them alongside exercise or insoles, and switching straight into them for 12-hour shifts has not been tested. Our page on [barefoot shoes](/barefoot-shoes/) covers those trials and how people moved into them slowly.',
      ],
      cites: [CITE.shoeFranettovich2025, CITE.landorfFootwear, CITE.shoeChiu2007, CITE.shoeRyan2009, CITE.ribeiroShoes],
    },
    {
      h2: 'Are clogs good for nurses with plantar fasciitis?',
      paragraphs: [
        'There is no study of professional clogs in people with plantar fasciitis. The two closest studies were in healthy volunteers. In 8 women doing 2-hour standing and walking tasks, soft shoes rather than clogs roughly halved foot swelling and heel impact. In 10 people standing for 2 hours, an unstable, rocker-type shoe lowered lower-leg discomfort and swelling compared with a flat shoe. Neither study tested a rocker-bottom nursing clog like the ones sold today.',
        'Dansko’s product page for the Professional clog lists a rocker bottom, a contoured footbed with arch support and “APMA ACCEPTED”. **We could not find the Professional in APMA’s seal database on October 23, 2026.** If a clog suits you, the features above still apply: heel cushioning, room for an insole and a slip-resistant sole.',
      ],
      cites: [CITE.shoeHansen1998, CITE.shoeKarimi2016],
    },
    {
      h2: 'Nursing shoes review sites often recommend',
      table: {
        caption: '12 shoes often named on Google’s first page, checked October 23, 2026',
        head: ['Shoe', 'Type', 'Key features', 'APMA seal'],
        rows: [
          ['Hoka Bondi 9 (and Bondi SR)', 'Max-cushion running shoe', 'Thick cushioning, rocker shape; SR has a slip-resistant sole*', 'Bondi 9 yes; SR not checked'],
          ['Dansko Professional', 'Clog', 'Rocker bottom, contoured footbed with arch support', 'Maker says yes; not found in database'],
          ['Brooks Addiction Walker 2', 'Leather walking shoe', 'Maximum support, leather upper, wide sizes, 12 mm heel drop (maker)', 'Yes'],
          ['ASICS Gel-Kayano', 'Stability running shoe', 'Stability, gel cushioning, wide version*', 'Kayano 32 yes; 33 not listed'],
          ['New Balance 990v6', 'Walking shoe', 'Several widths*', 'Not listed'],
          ['ASICS Gel-Nimbus', 'Cushioned running shoe', 'Cushioned, mesh upper*', 'Nimbus 28 yes'],
          ['New Balance 1080v15', 'Cushioned running shoe', 'Soft cushioning, wide sizes*', 'Yes'],
          ['Brooks Ghost', 'Cushioned running shoe', 'Cushioned*', 'Ghost 17 and 18 yes'],
          ['Clove Classic', 'Healthcare sneaker', 'Fluid-repellent, easy to clean, grippy outsole, slip-on', 'Yes'],
          ['Skechers Arch Fit SR', 'Work sneaker', 'Molded arch insole, slip-resistant sole*', 'Yes, many SR styles'],
          ['Orthofeet Coral', 'Orthopedic walking shoe', 'Removable arch support, wide toe box*', 'Yes'],
          ['Hoka Clifton', 'Cushioned running shoe', 'Lighter cushioning*', 'Clifton 10 yes; 11 not listed'],
        ],
      },
      after: [
        'These are listed because review sites often recommend them, not because we tested them, and not in any order. We earn nothing from any of them. Features without a star were read on the maker’s own product page; a star (*) means the maker page blocked our check, so the feature is as review sites describe it. We list a heel drop only where the maker states it.',
        '“APMA seal” means the model appeared in the [American Podiatric Medical Association’s seal database](https://www.apma.org/seal-db) when we searched it on October 23, 2026; “Not listed” means we did not find it there, not that it failed anything. **We found no published studies of any of these 12 shoes.** None of the review pages on Google’s first page cited a footwear trial either.',
      ],
    },
    {
      h2: 'Should nurses rotate shoes?',
      keyFact: 'In a cross-sectional study of automobile assembly plant workers, rotating shoes during the work week was linked to a lower risk of plantar fasciitis (Werner and colleagues, 2010).',
      paragraphs: [
        'It is cheap to try and has some support. The factory study could not show cause and effect, but it was enough for the 2014 guideline to list shoe rotation for people who stand for long periods. More time standing on hard surfaces raised the risk in the same study.',
        'A later review of the charts of 42 patients compared shoe rotation, custom orthoses and physical therapy. All three groups improved at 4 weeks and three months, with slightly larger changes in the rotation group. It was small and not randomized. In practice, rotation means having two pairs, even two different models, and switching between them on shift days.',
      ],
      cites: [CITE.shoeWerner2010, CITE.shoeMartin2014Cpg, CITE.shoeKoo2024],
    },
    {
      h2: 'Do slip-resistant shoes matter for nurses?',
      keyFact: 'In a randomized trial of 4,553 NHS staff, slip-resistant shoes cut the slip rate by 37% over 14 weeks (rate ratio 0.63) and roughly halved falls from a slip (Cockayne and colleagues, 2021).',
      paragraphs: [
        'Yes, for slips. This is the best footwear trial in hospital staff, but it measured slips and falls, not heel pain. A shoe company paid for the grip testing used to pick the trial shoes, which the authors disclosed.',
        'A 10-year programme in US hospitals that included slip-resistant footwear for some staff saw slip, trip and fall claims fall by 58%, and nursing and office staff made the most claims. The programme changed many things at once, so the shoes alone cannot take the credit.',
      ],
      cites: [CITE.shoeCockayne2021, CITE.shoeBell2008],
    },
    {
      h2: 'What do the APMA seal and “podiatrist recommended” mean?',
      paragraphs: [
        'Less than they sound. APMA says its Seal of Acceptance means a product was reviewed by a group of its podiatrists, but that it “is not a testing laboratory”, only reviews products that companies submit, and does not compare products against each other. A shoe can be missing from the database because the maker never applied.',
        '“Reviewed by a podiatrist” on a review site means someone checked the article, not that the shoes were tested. Several review pages also give heel drop ranges and replacement mileages that disagree with each other and cite no study.',
      ],
    },
    {
      h2: 'Shoes or exercises: what has more evidence?',
      keyFact: 'The 2023 heel pain guideline grades calf and plantar fascia stretching A, its top grade, and strength training B, while shoes get no graded recommendation of their own (Koc and colleagues, 2023).',
      paragraphs: [
        'The exercises. Stretching has the top grade and strengthening a B; footwear advice sits at grade E, under patient education. A good shoe can make a shift more comfortable, but it is the part with the least evidence.',
        'The stretches are in [plantar fasciitis exercises](/plantar-fasciitis-exercises/), the heel raise and how to make it harder in [calf raises for plantar fasciitis](/calf-raises-plantar-fasciitis/), and how to fit them around shifts in [foot pain for nurses](/feet-hurt-standing-all-day/). If the pain is general aching after long shifts rather than first-step heel pain, start with [why feet hurt after standing all day](/feet-hurt-standing-all-day/). If you add an insole, [best insoles for plantar fasciitis](/best-insoles-for-plantar-fasciitis/) covers what the trials found.',
      ],
      cites: [CITE.guideline],
    },
    {
      h2: 'Where does the evidence stop?',
      paragraphs: [
        {
          list: [
            'No randomized trial has tested any commercial nursing shoe, running shoe or clog for plantar fasciitis.',
            'No trial has isolated the effect of heel drop, compared cushioned with stability shoes, or tested how often to replace shoes, in people with heel pain.',
            'The rocker sole and heel drop studies measured pressure or pain in a single session, not over weeks.',
            'The clog and unstable shoe studies were in 8 and 10 healthy volunteers in a lab.',
            'The shoe rotation evidence is one cross-sectional factory study and one small chart review.',
            'People with heel pain struggled more to find comfortable shoes than people without it in a study of 192 people with heel pain and 69 without, so expect some trial and error.',
          ],
        },
      ],
      cites: [CITE.shoeFong2012, CITE.shoeFranettovich2025, CITE.shoeHansen1998, CITE.shoeKarimi2016, CITE.shoeWerner2010, CITE.shoeKoo2024, CITE.shoeSullivan2015],
    },
  ],
  faq: [
    {
      q: 'What shoes do podiatrists recommend for nurses with plantar fasciitis?',
      a: 'Review sites, some checked by podiatrists, most often name the Hoka Bondi, Dansko Professional clog, Brooks Addiction Walker 2 and ASICS Gel-Kayano. None has been tested for plantar fasciitis in a published study. The research points to features instead: a good fit, a cushioned heel, some heel raise or a rocker sole, a slip-resistant outsole and two pairs to rotate.',
      cites: [CITE.landorfFootwear, CITE.shoeFranettovich2025, CITE.shoeWerner2010],
    },
    {
      q: 'Are Hoka or Brooks better for plantar fasciitis?',
      a: 'No study has compared them or tested either brand for plantar fasciitis. Both make several models that review sites recommend for nurses, and several of those models have the APMA seal, which is a review of submitted products and not a test. Choose the one that fits your foot, feels cushioned under the heel and leaves room for an insole.',
    },
    {
      q: 'Are Dansko clogs good for plantar fasciitis?',
      a: 'There is no study of Dansko or any professional clog in people with plantar fasciitis. Dansko says the Professional has a rocker bottom and arch support and is APMA accepted, but we could not find it in APMA’s seal database on October 23, 2026. In one small lab study, soft shoes beat ordinary clogs for foot swelling and heel impact.',
      cites: [CITE.shoeHansen1998],
    },
    {
      q: 'Are zero-drop shoes OK for nurses with plantar fasciitis?',
      a: 'They have not been tested on 12-hour shifts. In a lab study of 29 women with heel pain, a shoe with a 14 mm drop gave 15% lower heel pressure than a 4 mm shoe. Flexible and minimalist shoes have only small trials, some combined with exercise or insoles. If you try them, build up slowly on days off.',
      cites: [CITE.shoeFranettovich2025, CITE.shoeRyan2009, CITE.ribeiroShoes],
    },
    {
      q: 'Can the right shoes alone make plantar fasciitis go away?',
      a: 'There is no evidence that they can. The 2023 heel pain guideline gives shoes no graded recommendation of their own, while calf and plantar fascia stretching get its top grade, A, and strength training a B. A comfortable, cushioned shoe can make a shift easier, and the exercises do the part with the stronger evidence.',
      cites: [CITE.guideline],
    },
  ],
  redFlags: {
    h2: 'See a clinician first if',
    bullets: [
      'your heel pain followed an injury or a fall at work',
      'you cannot put weight on the foot, or you are limping',
      'the foot is numb, tingling, burning, swollen or warm',
      'pain is in one pinpoint spot and gets worse with activity, which can be a stress fracture pattern',
      'pain wakes you at night or keeps getting worse',
      'you have diabetes, reduced feeling in your feet or poor circulation',
    ],
  },
  program: {
    h2: 'Doing it as a plan',
    text: 'Shoes are the part with the least evidence; the exercises are the part with the most. [Walkito](/program/) is an exercise app for iPhone and Android for heel pain, plantar fasciitis and flat feet. You pick sessions of 3, 5 or 10 minutes, on 3, 5 or 7 days a week, and a morning pain check-in adjusts the session.',
    more: [
      'Every 14 days, then every 28 after your first goal, a short test of calf raises, arch hold and single-leg balance compares your left and right side. On rotating shifts, the time of day does not matter. Walkito is a weekly or yearly subscription, with the price shown in the store. It does not diagnose and is not a medical device.',
    ],
    cta: 'Start with a 3-minute session.',
  },
  crumb: 'Shoes for nurses',
  campaign: 'guide-shoes-nurses',
  related: ['nurses', 'bestInsoles', 'standing', 'barefoot'],
};
