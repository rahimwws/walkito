import { CITE } from '@/lib/citations';
import type { Guide } from '../types';

/*
 * Foot pain for chefs and restaurant workers (EN). Research 2026-10-18.
 * Slips: Verma 2010/2011/2014 (one cohort, 475 workers, 36 US limited-service
 * restaurants, followed for three months) and Bell 2019 (cluster randomized
 * trial, 226 school districts' food service operations). These measure slips
 * and slip injuries, not foot pain: no study found tests whether clogs,
 * slip-resistant shoes or any kitchen shoe change foot pain. The page says so.
 * Kitchen pain figures: Abdelsalam 2023 (128), Iqbal 2023 (307 chefs),
 * Abebaw 2024 (415). Rest breaks: Park 2021 (1,909). Doses match the heel pain
 * guide (en.ts). NEW_* keys are placeholders for citations still to be added.
 */

export const CHEFS_EN: Guide = {
  lang: 'en',
  page: 'chefs',
  mainSource: CITE.bellSlipFootwear,
  published: '2026-10-18',
  updated: '2026-10-18',
  title: 'Chef Foot Pain: Kitchen Shoes, Mats and Exercises',
  description:
    'Why chefs’ feet hurt on hard, wet kitchen floors: what slip-resistant shoe studies found, clogs vs sneakers, mats, and short exercises that fit a shift.',
  h1: 'Foot pain for chefs and restaurant workers: what helps on long kitchen shifts',
  lede:
    'Chef foot pain mostly comes from long hours standing and walking on hard kitchen floors, and the options with the best evidence are calf and plantar fascia stretches, which the 2023 heel pain guideline grades **A**, and calf strength work, graded **B** (Koc and colleagues, 2023). Slip-resistant shoes are about safety, not pain: in a randomized trial across 226 school districts, giving food service workers slip-resistant shoes at no cost lowered slipping injury claims from 3.54 to 1.18 per 10,000 worker-months (Bell and colleagues, 2019). No study has tested whether clogs or any kitchen shoe reduce foot pain itself.',
  intro: [
    'This page is about the kitchen side of the problem: hard, wet and greasy floors, rushing during service, and shoes chosen for grip. For foot pain from standing in any job, see [why do my feet hurt after standing all day](/feet-hurt-standing-all-day/). For hospital shifts, see [foot pain for nurses](/nurses-foot-pain/). If your heel is sharpest on the first steps after rest, that pattern points to [plantar fasciitis](/plantar-fasciitis/).',
  ],
  toc: true,
  takeaways: [
    'In a survey of 128 kitchen workers in Cairo, 46.1% reported foot pain in the past 12 months, behind only the lower back and the knee (Abdelsalam and colleagues, 2023).',
    'In 475 workers from 36 US fast-food restaurants, wearing slip-resistant shoes was linked to a 54% lower rate of slipping (Verma and colleagues, 2011).',
    'In a randomized trial in school food service, slipping injury claims fell from 3.54 to 1.18 per 10,000 worker-months where workers got free slip-resistant shoes, while they rose from 2.01 to 2.30 in the comparison group (Bell and colleagues, 2019).',
    'Standing for most of the working day raised the odds of plantar fasciitis 3.6 times in a case-control study of 50 cases and 100 controls, and a tight calf raised them 23.3 times (Riddle and colleagues, 2003).',
    'The 2023 heel pain guideline grades calf and plantar fascia stretching **A** and strength training **B**. Insoles on their own are graded **B against** (Koc and colleagues, 2023).',
  ],
  sections: [
    {
      h2: 'Why do chefs’ feet hurt so much after a shift?',
      keyFact: 'In 128 kitchen workers, 46.1% reported foot pain in the past 12 months, behind the lower back (64.8%) and the knee (46.9%) (Abdelsalam and colleagues, 2023).',
      paragraphs: [
        '**Kitchen work stacks the things feet handle worst: hours of standing, short fast walks, hard floors and little rest.** In a survey of 128 kitchen workers at two large student hostels in Cairo, 90.6% reported a musculoskeletal problem in the past 12 months. The foot was the third most affected area, at 46.1%, just behind the knee at 46.9%.',
        'The numbers vary a lot between studies. In 307 restaurant chefs in Pakistan, most working 9 to 12 hours a day, 26 reported ankle or foot pain, far fewer than the 101 who reported lower back and knee pain (Iqbal and colleagues, 2023). The surveys used different groups and questions, so read them as a rough picture, not a precise rate.',
        'One link shows up clearly. In 415 hotel and restaurant kitchen workers in Ethiopia, prolonged standing came with 3.81 times the odds of a work-related musculoskeletal problem (Abebaw and colleagues, 2024). That study counted pain anywhere in the body, not only the feet.',
      ],
      sourceNote:
        'Abdelsalam 2023 and Abebaw 2024 used the Nordic Musculoskeletal Questionnaire for 12-month prevalence. Abebaw 2024: adjusted odds ratio 3.81 (95% CI 1.58 to 9.17) for prolonged standing. Iqbal 2023 used a convenience sample of 307 chefs (285 men).',
      cites: [CITE.abdelsalamKitchen, CITE.iqbalChefs, CITE.abebawKitchen],
    },
    {
      h2: 'Is kitchen foot pain plantar fasciitis?',
      keyFact: 'Standing for most of the working day raised the odds of plantar fasciitis 3.6 times, and limited ankle flexibility raised them 23.3 times (Riddle and colleagues, 2003).',
      paragraphs: [
        'Often it is general tiredness and ache that eases with a night’s rest. But kitchen work carries the two biggest risk factors found in a case-control study of 50 people with plantar fasciitis and 100 without: standing for most of the working day raised the odds 3.6 times, and a [tight calf](/tight-calves/) that limits how far the ankle bends raised them 23.3 times.',
        'Plantar fasciitis has a typical pattern: sharp pain under the heel on the first steps in the morning or after sitting, which eases as you walk and comes back after a long day. That pattern is covered in [heel pain in the morning](/heel-pain-in-the-morning/), and the full exercise guide is [plantar fasciitis exercises and stretches](/plantar-fasciitis-exercises/).',
        'Other patterns point elsewhere:',
        {
          list: [
            'burning under the ball of the foot by mid-service: see [ball of foot pain](/ball-of-foot-pain/)',
            'a deep, bruised ache in the middle of the heel that gets worse the longer you stand on a hard floor: see [heel fat pad syndrome](/heel-fat-pad-syndrome/)',
            'arches that ache or feel flat by the end of a shift: see [arch pain](/arch-pain/)',
          ],
        },
      ],
      cites: [CITE.riddle],
    },
    {
      h2: 'Clogs or slip-resistant shoes: what does the evidence say?',
      keyFact: 'Free slip-resistant shoes lowered slipping injury claims from 3.54 to 1.18 per 10,000 worker-months in a randomized trial across 226 school districts (Bell and colleagues, 2019).',
      paragraphs: [
        '**The strongest kitchen footwear evidence is about slips, not sore feet.** A US study followed 475 workers from 36 fast-food restaurants for three months. Workers whose shoes had a slip-resistant marking on the sole reported a 54% lower rate of slipping than workers without them, after allowing for age, sex, body weight and other factors (Verma and colleagues, 2011).',
        'A randomized trial then tested it as a program. School districts were randomly chosen to give their food service workers slip-resistant shoes at no cost. Slipping injury claims fell from 3.54 to 1.18 per 10,000 worker-months in those districts, and rose from 2.01 to 2.30 in the others (Bell and colleagues, 2019).',
        'Shoes wear out. In the same restaurant workers, those who already wore slip-resistant shoes and changed to a new pair had a 55% lower rate of slipping afterwards, and shoes worn for under six months did moderately better than older ones (Verma and colleagues, 2014). The study could not say exactly when to replace them.',
        '**No study we found compares clogs with sneakers, or any kitchen shoe with another, for foot pain.** For heel pain in general, the 2023 guideline grades [insoles](/insoles-vs-exercises/) on their own **B against**: the evidence says not to rely on them alone. A sensible order: pick a shoe with a slip-resistant sole that fits your foot now and does not pinch the toes, replace it when the tread is worn, and do the stretching and strength work below for the pain itself.',
      ],
      table: {
        caption: 'What each option is for',
        head: ['Option', 'Helps with', 'Evidence'],
        rows: [
          ['Slip-resistant shoes', 'Slips and slip injuries', 'Cohort and randomized trial'],
          ['Clogs vs sneakers', 'Not tested for pain', 'None found'],
          ['Insoles alone', 'Heel pain', 'Graded B against'],
          ['Anti-fatigue mats', 'Standing discomfort', 'Some, not in kitchens'],
          ['Compression socks', 'Leg discomfort, swelling', 'One small trial'],
          ['Calf and fascia stretches', 'Heel pain', 'Graded A'],
        ],
      },
      sourceNote:
        'Verma 2011: slip-resistant shoe use judged by a marking on the sole; 54% lower reported slip rate (95% CI 37% to 64%). Bell 2019: two-arm cluster randomized trial, kindergarten to grade 12 food service; adjusted odds ratio 0.33 (95% CI 0.17 to 0.63). Verma 2014: rate ratio 0.45 (95% CI 0.23 to 0.89) after changing to a new pair.',
      cites: [CITE.vermaSlipShoes, CITE.bellSlipFootwear, CITE.vermaShoeAge, CITE.guideline],
    },
    {
      h2: 'Where in the kitchen do most slips happen?',
      keyFact: 'Restaurant workers slipped 14.6 times as often while walking on a contaminated floor and 2.9 times as often while rushing (Verma and colleagues, 2011).',
      paragraphs: [
        'In the US restaurant study, most slips happened by the **sink and the fryer**, the areas workers also rated most slippery, and liquid or grease was on the floor in over 70% of slips (Verma and colleagues, 2010).',
        'A second analysis of the same workers looked at the moment of each slip. The rate of slipping was 14.6 times higher while walking on a contaminated floor, 2.9 times higher while rushing and 1.7 times higher while distracted. Slip-resistant shoes reduced the effect of rushing and of a dirty floor (Verma and colleagues, 2011).',
        'Who pays for the shoes matters too. Where the employer provided slip-resistant shoes, 91% of workers wore them. Where they were neither provided nor encouraged, 53.5% did (Verma and colleagues, 2010). If your kitchen has a shoe program, it is worth using.',
      ],
      cites: [CITE.vermaSlipExperience, CITE.vermaRushing],
    },
    {
      h2: 'Do anti-fatigue mats and compression socks help in a kitchen?',
      paragraphs: [
        'A 2015 review of research on standing at work lists floor mats, compression stockings and supportive footwear among the options with some evidence for less discomfort and fatigue (Waters and Dick, 2015). None of that research was done in kitchens. A mat at a station where you stand for long periods, like the pass or a prep table, is a reasonable thing to try. Choose one that lies flat and stays put on a wet floor, so it does not become a trip hazard of its own.',
        'Compression stockings have one small randomized trial behind them. In 40 security guards standing roughly 12-hour shifts, both 15 to 20 mmHg and 20 to 30 mmHg stockings avoided the rise in leg discomfort and swelling seen with regular socks (Garcia and colleagues, 2023). The guards were all men and none were cooks, so read this as a likely fit, not proof for kitchens.',
        '**Mats and socks help with comfort during a shift. They do not replace the stretching and strength work** that the heel pain guideline grades highest.',
      ],
      cites: [CITE.waters, CITE.garcia, CITE.guideline],
    },
    {
      h2: 'Which exercises help chefs with foot pain?',
      keyFact: 'The 2023 heel pain guideline grades calf and plantar fascia stretching A, its top grade, and strength training B (Koc and colleagues, 2023).',
      paragraphs: [
        'The exercises are the ones from the [plantar fasciitis guide](/plantar-fasciitis-exercises/), at the same starting doses. The stretches need only a wall or a chair, so they fit in a break, before service or after you change out of your work shoes. Keep the strength work for days off or after a shift.',
        'The guideline grades are for plantar fasciitis, but the tissues are the same ones a kitchen shift loads all day. If an exercise takes your pain to 6 out of 10 or higher, stop for the day.',
      ],
      exercises: [
        {
          name: 'Calf stretch',
          evidence: { level: 'strong', why: 'The 2023 heel pain guideline grades stretching A, its top grade. A tight calf was the strongest risk factor in a 2003 case-control study.' },
          dose: '2 holds of 30 seconds, each leg',
          often: 'Most shift days',
          feel: 'A stretch in the calf',
          how: 'Put your hands on a wall or a steel counter. Keep the back leg straight, the back heel flat on the floor and the hips forward. Do it on a dry patch of floor, not by the sink.',
          stop: 'Pain reaches 6 out of 10',
          image: 'Exercise: calf stretch',
          media: 'calf_stretch_straight',
          caption: 'Calf stretch: back leg straight, back heel flat, hips forward',
          alt: 'A figure leaning on a wall with the back leg straight, the calf highlighted',
        },
        {
          name: 'Soleus stretch',
          evidence: { level: 'strong', why: 'The 2023 heel pain guideline grades stretching A, its top grade.' },
          dose: '2 holds of 30 seconds, each leg',
          often: 'Most shift days',
          feel: 'A stretch near the heel',
          how: 'Take the same position, keep the back heel flat on the floor, then bend the back knee until you feel the stretch lower down, near the heel. The soleus, the deeper calf muscle, only lets go with the knee bent.',
          stop: 'Pain reaches 6 out of 10',
          image: 'Exercise: soleus stretch',
          media: 'calf_stretch_bent',
          caption: 'Soleus stretch: back heel flat, bend the back knee until you feel it near the heel',
          alt: 'A figure in a split stance with the knees bent, the lower calves highlighted',
        },
        {
          name: 'Plantar fascia stretch',
          evidence: { level: 'strong', why: 'The 2023 heel pain guideline grades stretching A, its top grade.' },
          dose: '2 holds of 30 seconds, each foot',
          often: 'Most days, first thing in the morning',
          feel: 'A stretch along the arch',
          how: 'Sit down and cross the foot over the other knee. Pull the toes back until you feel the stretch in the arch, not the calf. Do the first one on the edge of the bed, before your foot touches the floor.',
          stop: 'Pain reaches 6 out of 10',
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
          how: 'Sit with your feet flat and press up through the balls of your feet. Hands on the knees add resistance. With the knee bent, this mainly works the soleus, with almost no load on the heel, so it suits a break on an upturned crate or a staff-room chair.',
          stop: 'Pain reaches 6 out of 10',
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
          how: 'Stand on both feet, rise straight up over the big toes, then lower slowly. Hold a wall or rail. Do these at home or after a shift, not on a wet kitchen floor.',
          stop: 'Pain reaches 6 out of 10',
          image: 'Exercise: heel raises on both feet',
          media: 'heel_raise_double',
          caption: 'Heel raises on both feet: rise straight up over the big toes, then lower slowly',
          alt: 'A standing figure rising onto the toes of both feet, the calf highlighted',
        },
        {
          name: 'Foot roll',
          evidence: { level: 'early', why: 'Not tested in the studies on this page. It is here for comfort after a shift.' },
          dose: '1 minute',
          often: 'After a long shift or on days off',
          feel: 'Firm pressure under the foot',
          how: 'Sit and roll the sole of your foot slowly over a massage ball, with firm pressure. If you are wincing, ease off.',
          stop: 'Pain reaches 6 out of 10',
          image: 'Exercise: foot roll',
          media: 'foot_roll',
          caption: 'Foot roll: roll the sole slowly over a ball, with firm pressure',
          alt: 'A seated figure rolling the sole of one foot over a ball, the sole highlighted',
        },
      ],
      cites: [CITE.guideline, CITE.riddle],
    },
    {
      h2: 'How do you fit exercises into a kitchen shift?',
      paragraphs: [
        'A split shift or a double leaves little room for a routine, so tie the exercises to something you already do:',
        {
          list: [
            '**If you have 3 minutes:** the calf stretch and the soleus stretch, 30 seconds each side, before service or when you change shoes. That covers the tight calf, the strongest risk factor in the case-control study.',
            '**If you have 5 minutes:** add the plantar fascia stretch. Stretching is the part the 2023 guideline grades **A**.',
            '**If you have 10 minutes:** on a day off or after a shift, add the heel raises and a minute of foot rolling. Strength work is graded **B**.',
          ],
        },
        'Breaks themselves seem to matter. In 1,909 Korean kitchen workers, women who reported insufficient rest breaks had 1.68 times the odds of musculoskeletal problems (Park and colleagues, 2021). The link was reported for women, and a survey like this cannot show cause and effect. Even so, sitting down for a few minutes between rushes is worth defending.',
        'For plantar fasciitis in general, about 90% of people get better with non-surgical care, though it can take months; see [how long plantar fasciitis lasts](/how-long-does-plantar-fasciitis-last/). The 2023 guideline also suggests adjusting the load on your feet at work, advice graded **E** because it rests on theory, not trials.',
      ],
      cites: [CITE.riddle, CITE.guideline, CITE.parkRestBreaks, CITE.latt],
    },
  ],
  faq: [
    {
      q: 'Why do my feet hurt so much after working in a kitchen?',
      cites: [CITE.abdelsalamKitchen, CITE.riddle],
      a: 'Kitchen shifts combine hours of standing, short fast walks and hard floors. In a survey of 128 kitchen workers, 46.1% reported foot pain in the past year. Standing for most of the working day also raised the odds of plantar fasciitis 3.6 times in a case-control study. Daily calf and plantar fascia stretches target the tissues under the most strain.',
    },
    {
      q: 'Are clogs good for chefs with foot pain?',
      cites: [CITE.guideline],
      a: 'Nobody knows for sure: no study we found compares clogs with sneakers or other kitchen shoes for foot pain. What matters most for safety is a slip-resistant sole. For heel pain, the 2023 guideline grades insoles on their own B against, so pair whichever shoe fits you best with calf and plantar fascia stretches, which it grades A.',
    },
    {
      q: 'Do slip-resistant shoes actually work in restaurants?',
      cites: [CITE.vermaSlipShoes, CITE.bellSlipFootwear],
      a: 'For slips, yes. In 475 workers from 36 US fast-food restaurants, slip-resistant shoes were linked to a 54% lower rate of slipping. In a randomized trial in school food service, free slip-resistant shoes lowered slipping injury claims from 3.54 to 1.18 per 10,000 worker-months. These studies measured slips, not foot pain.',
    },
    {
      q: 'How often should kitchen shoes be replaced?',
      cites: [CITE.vermaShoeAge],
      a: 'There is no tested rule. In a study of 475 restaurant workers, slip-resistant shoes worn under six months were moderately more effective against slips than older ones, and workers who switched to a new pair slipped 55% less often afterwards. Check the tread, and replace shoes once the pattern on the sole is worn smooth.',
    },
    {
      q: 'Do anti-fatigue mats help kitchen workers?',
      cites: [CITE.waters],
      a: 'Probably, for comfort. A 2015 review of standing at work lists floor mats among the options with some evidence for less discomfort and fatigue, but none of that research was done in kitchens. Use a mat where you stand still for long periods, and choose one that lies flat and does not slide on a wet floor.',
    },
    {
      q: 'Do compression socks help chefs on long shifts?',
      cites: [CITE.garcia],
      a: 'They may. In a trial of 40 security guards standing roughly 12-hour shifts, both 15 to 20 mmHg and 20 to 30 mmHg stockings avoided the rise in leg discomfort and swelling seen with regular socks. The trial was small and not in kitchens, and stockings do not replace stretching or strength work.',
    },
    {
      q: 'Can you get plantar fasciitis from working as a chef?',
      cites: [CITE.riddle],
      a: 'Kitchen work carries known risk factors. In a case-control study of 50 people with plantar fasciitis and 100 without, standing for most of the working day raised the odds 3.6 times and a tight calf raised them 23.3 times. No study has measured plantar fasciitis in chefs specifically.',
    },
    {
      q: 'What can I do for sore feet during a busy service?',
      cites: [CITE.guideline, CITE.parkRestBreaks],
      a: 'Shift your weight, sit down in breaks when you can, and do a 30-second calf stretch against a wall on a dry patch of floor. In Korean kitchen workers, women with insufficient rest breaks had 1.68 times the odds of musculoskeletal problems. Keep heel raises and longer sessions for after the shift or days off.',
    },
  ],
  redFlags: {
    h2: 'See a clinician first if',
    bullets: [
      'the pain started after a slip, a fall, a twist or something heavy landing on your foot',
      'you cannot put weight on the foot, or you are limping',
      'the foot is numb, tingling or burning, or swollen, red or warm',
      'you have a burn, cut or blister on the foot that is not getting better, especially with diabetes or reduced feeling in your feet',
      'one calf or leg is suddenly painful and swollen',
      'pain wakes you at night or is there at rest',
      'pain is in one pinpoint spot and gets worse with activity, which can be a stress fracture pattern',
      'the pain has not eased after several weeks of better shoes, more breaks and the exercises on this page',
    ],
  },
  program: {
    h2: 'Doing it as a plan',
    text: 'Walkito is a heel and foot exercise app on iPhone and Android. It does not know your rota, so you choose when the sessions go: before service, between shifts or on your days off.',
    more: [
      'You pick 3, 5 or 7 days a week and sessions of 3, 5 or 10 minutes. Before each session you rate how your feet feel, and the plan adjusts to it. Every 14 days a short test checks calf endurance, arch hold and balance. Walkito does not diagnose. If pain is sharp, getting worse or keeping you up at night, see a clinician first.',
    ],
    cta: 'Start with a 3-minute session.',
  },
  related: ['standing', 'nurses', 'heelPain'],
  crumb: 'Foot pain for chefs',
  campaign: 'guide-chefs-foot-pain',
};
