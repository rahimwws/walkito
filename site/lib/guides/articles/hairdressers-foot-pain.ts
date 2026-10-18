import { CITE } from '@/lib/citations';
import type { Guide } from '../types';

/*
 * Foot pain for hairdressers (EN). Research 2026-10-18.
 * Hairdresser data is thin for the feet: most studies measure back, neck,
 * shoulders and hands. Feet figures: Kozak 2019 scoping review (44 studies,
 * 5 report feet, 10% to 44%), Mishra and Sarkar 2021 (384 vs 384, knee or foot
 * pain combined), Bradshaw 2011 (147 vs 67), Ince Parpucu 2023 (lower leg).
 * Compression: Blazek 2013 (108, crossover RCT, hairdressers), Agle 2020 (38).
 * Mats: Speed 2018 review, Wiggermann 2013, Kim 1994. Standing time: Coenen 2017.
 * No study has tested sit-stand stools or exercise breaks for hairdressers'
 * feet; the page says so. Doses match the heel pain guide (en.ts) and
 * ex-ankle-rocks.ts.
 */

export const HAIRDRESSERS_EN: Guide = {
  lang: 'en',
  page: 'hairdressers',
  mainSource: CITE.kozakHairdressing,
  published: '2026-10-18',
  updated: '2026-10-18',
  title: 'Hairdresser Foot Pain: Shoes, Mats and Quick Exercises',
  description:
    'Why hairdressers’ feet hurt from standing in one spot, what studies found, which shoes, mats and stools help, and short exercises between clients.',
  h1: 'Hairdresser foot pain: what helps when you stand in one spot all day',
  lede:
    'Hairdresser foot pain mostly comes from standing still at the chair for hours, not from walking, so the options with some evidence target static standing: a cushioned floor or shoe, low-strength compression stockings, and a minute of calf work between clients. In a study of 384 hairdressers and 384 people in other jobs, 49.5% of hairdressers reported knee or foot pain, against 38.3% of the comparison group (Mishra and Sarkar, 2021).',
  intro: [
    'Research on hairdressers mostly looks at shoulders, neck, wrists and back. Feet get much less attention, and this page says where the data is thin. It covers what is known about hairdressers’ feet and legs, the standing evidence that applies to salon work, and how to fit exercise into the gaps between clients. For general standing pain, see [why do my feet hurt after standing all day](/feet-hurt-standing-all-day/). For shift work with a lot of walking, see [foot pain for nurses](/nurses-foot-pain/).',
  ],
  toc: true,
  takeaways: [
    'Of 384 hairdressers in India, 49.5% reported knee or foot pain in the past 12 months, against 38.3% of 384 people in other jobs. The study counted knee and foot together (Mishra and Sarkar, 2021).',
    'A 2019 scoping review of 44 studies found only 5 that reported foot pain in hairdressers, ranging from 10% to 44%. Most studies looked at the back, neck, shoulders and hands, and standing was one of the common risk factors (Kozak and colleagues, 2019).',
    'In a randomized crossover trial of 108 hairdressers, 15 to 20 mmHg compression stockings lowered leg pain and swelling scores by 12% and lower leg volume by 19 mL on average (Blazek and colleagues, 2013).',
    'A 2018 review of 10 studies found moderate evidence that softer floors and cushioned insoles reduce discomfort and fatigue in people who stand at work (Speed and colleagues, 2018).',
    'A tight calf was the strongest risk factor for plantar fasciitis in a 2003 case-control study, at 23.3 times the odds, and standing most of the working day raised the odds 3.6 times (Riddle and colleagues, 2003).',
  ],
  sections: [
    {
      h2: 'How common is foot pain in hairdressers?',
      keyFact: 'Five studies in a 2019 scoping review reported foot pain in hairdressers, from 10% to 44% (Kozak and colleagues, 2019).',
      paragraphs: [
        '**Foot and leg pain is common in hairdressers, but it is far less studied than shoulder or back pain.** A 2019 scoping review gathered 44 studies on musculoskeletal problems in hairdressing. Only 5 of them reported foot pain, and the figures ranged from 10% to 44%. The spread is wide because the studies used different questions, countries and time frames.',
        'The largest study with a comparison group surveyed 384 hairdressers and 384 people in other jobs in two Indian cities. Knee or foot pain was the most common complaint in both groups: 49.5% of hairdressers against 38.3% of the others. The study counted knee and foot as one category, so it cannot say how much of that was the feet alone.',
        'A UK study of 147 hairdressers and 67 people in other jobs found work-related leg or foot pain far more often in the hairdressers. The odds were 31 times higher, but the statistical range was very wide, from about 4 to 267 times, so the real size of the gap is uncertain. In a 2023 Turkish study, after the lower back, the most painful areas were the lower legs: 36.9% on the right and 32.5% on the left.',
      ],
      sourceNote:
        'Mishra and Sarkar (2021): cross-sectional, 384 hairdressers and 384 controls, 12-month prevalence, knee and foot in one category. Bradshaw and colleagues (2011): interviewer-led questionnaire, adjusted odds ratio 31.0 (95% CI 3.8 to 267.4). Ince Parpucu and colleagues (2023): Cornell Musculoskeletal Discomfort Questionnaire, past week.',
      cites: [CITE.kozakHairdressing, CITE.mishraHairdressers, CITE.bradshawHairdressers, CITE.inceParpucuHairdressers],
    },
    {
      h2: 'Why does standing in one spot hurt more than walking?',
      paragraphs: [
        'A hairdresser’s day is different from a nurse’s. You do not cover long distances. You stand at the chair, shift a little, lean in, and stand again. When you stand still:',
        {
          list: [
            'The calf muscles hold one position, so they stop pumping blood back up the leg.',
            'Blood and fluid pool in the lower legs and feet, which is why shoes feel tighter by evening.',
            'The heel pad and the plantar fascia, the band under the arch, carry a steady load with no break.',
          ],
        },
        'Lab studies show how fast this builds. A 2017 review of 25 laboratory studies found low-back symptoms became clinically relevant after about 71 minutes of standing on average, and after 42 minutes in people prone to standing pain. A single colour or cut can take longer than that. A 2015 review of standing at work linked prolonged standing to low back and leg pain, discomfort and fatigue across many jobs.',
        'In a 2023 study of Turkish hairdressers, those who reported lower-leg fatigue also had more pain in the knees and lower legs and worse scores for energy and mobility. **The swelling side is measurable too:** in 38 hairdressers, ankle size grew from 21.1 cm in the morning to 22.1 cm by the end of a day without compression.',
      ],
      cites: [CITE.coenen, CITE.waters, CITE.inceParpucuHairdressers, CITE.agleHosiery],
    },
    {
      h2: 'Does posture at the chair affect your feet?',
      paragraphs: [
        'Studies of hairdressers’ posture focus on the back and arms, not the feet. A scoping review reported that hairdressers often bend forward or twist while cutting and washing, and that cutting kept the spine bent forward for 66% of the task time in one measurement study. Leaning in for a long time tends to shift your weight toward the front of the foot.',
        'No study has measured how salon posture changes the load on hairdressers’ feet. What you can control is simple: raise or lower the client’s chair so you are not leaning, keep your weight on both feet, and shift your stance every few minutes. In a lab study of four hours of standing, people who shifted their weight more also reported more discomfort, so frequent shifting can be a sign that discomfort is building, and a reasonable cue for a short break (Wiggermann and Keyserling, 2013).',
        'If your feet hurt with your back, the connection runs both ways. [Flat feet and back pain](/flat-feet-back-pain/) covers what the research says.',
      ],
      cites: [CITE.kozakHairdressing, CITE.wiggermannMats],
    },
    {
      h2: 'What are the best shoes for hairdressers?',
      paragraphs: [
        '**No study has compared shoe types for hairdressers.** The shoe advice online comes from shoe brands or clinics, not from trials in salons. What the wider standing research supports is cushioning: a 2018 review of 10 studies found moderate evidence that cushioned insoles and softer floors reduce discomfort and fatigue in people who stand at work, and limited evidence that insoles do more than mats.',
        'In practice, look for:',
        {
          list: [
            'A cushioned sole and some arch support, so the heel and arch do not take the full load of a hard floor.',
            'A closed toe that does not squeeze the toes. Pain between the toes can be [Morton’s neuroma](/mortons-neuroma/).',
            'A low, stable heel. High heels put more of your weight on the front of the foot.',
            'A grippy sole. Salon floors get wet and slippery.',
          ],
        },
        'Some people change shoes halfway through a long day. No study has tested this, but a different shoe spreads the load differently. If you already have heel or arch pain, insoles can make the day more comfortable, but they work on comfort, not on the calf and arch themselves. [Insoles vs exercises](/insoles-vs-exercises/) compares the two.',
      ],
      cites: [CITE.speedCushioning],
    },
    {
      h2: 'Do anti-fatigue mats help hairdressers?',
      keyFact: 'A 2018 review of 10 studies found moderate evidence that softer flooring and cushioned insoles reduce discomfort and fatigue in standing workers (Speed and colleagues, 2018).',
      paragraphs: [
        'A mat at your chair is one of the simplest changes with evidence behind it. In a lab study, people stood for four hours on four different anti-fatigue mats and on a hard floor. Three of the four mats lowered discomfort compared with the hard floor, but the mats did not differ much from each other.',
        'The evidence is not all positive. In a small 1994 study of 5 people, mats reduced muscle fatigue in the lower back only, and only with the softer of two mats. The leg muscles showed no change. **So a mat helps with comfort, but it does not replace moving and stretching.**',
        'At the salon, put the mat where you actually stand, behind the chair, and keep it flat so you do not trip on the edges. Hair and water on a mat can make it slippery, so sweep it often.',
      ],
      cites: [CITE.speedCushioning, CITE.wiggermannMats, CITE.kimMats],
    },
    {
      h2: 'Should hairdressers use a stool or a sit-stand seat?',
      paragraphs: [
        '**No study has tested whether a stool reduces foot pain in hairdressers.** Sitting takes load off the feet, and in office studies, alternating between sitting and standing reduced low-back discomfort with no loss of work output (Karakolis and Callaghan, 2014). That is the best indirect evidence for mixing in some sitting.',
        'A stool has a trade-off. A German posture study, summarised in the 2019 scoping review, found hairdressers who used a rolling stool bent their lower back more steeply and raised their hands above shoulder height more often. A stool that is too low can swap foot pain for back and shoulder strain.',
        'A practical approach: use a stool for tasks where you can reach without stretching, like detail work at the back of the head or foils at the lower sections, and stand for the rest. Set the stool high enough that your arms stay below shoulder level. If you work at a basin, sit when the setup allows it.',
      ],
      cites: [CITE.karakolis, CITE.kozakHairdressing],
    },
    {
      h2: 'What exercises can you do between clients?',
      keyFact: 'The 2023 heel pain guideline grades calf and plantar fascia stretching A, its top grade, and strength training B (Koc and colleagues, 2023).',
      paragraphs: [
        'The exercises are the same ones used for [plantar fasciitis](/plantar-fasciitis/) and general standing pain: calf stretches, heel raises and a plantar fascia stretch. What is different for hairdressers is the timing. **You get short gaps between clients, so pick one or two exercises per gap instead of a full routine.** No study has tested exercise breaks for hairdressers’ feet, so the doses here come from the main heel pain guide.',
        'The calf matters most. In a case-control study, a tight calf raised the odds of plantar fasciitis 23.3 times, more than any other factor. If any exercise brings your pain to 6 out of 10 or higher, stop for the day.',
      ],
      exercises: [
        {
          name: 'Calf stretch',
          evidence: { level: 'strong', why: 'The 2023 heel pain guideline grades stretching A, its top grade.' },
          dose: '2 holds of 30 seconds, each leg',
          how: 'Put your hands on a wall or the back of your station. Keep the back leg straight, the back heel flat on the floor and the hips forward. Two holds on each leg take about two minutes, so it fits one gap between clients.',
          media: 'calf_stretch_straight',
          caption: 'Calf stretch: back leg straight, back heel flat, hips forward',
          alt: 'A figure leaning on a wall with the back leg straight, the calf highlighted',
        },
        {
          name: 'Soleus stretch',
          evidence: { level: 'strong', why: 'The 2023 heel pain guideline grades stretching A, its top grade.' },
          dose: '2 holds of 30 seconds, each leg',
          how: 'Same position, back heel flat, then bend the back knee until you feel the stretch lower down, near the heel. The soleus, the deeper calf muscle, is the one that holds you upright when you stand still, and it only lets go with the knee bent.',
          media: 'calf_stretch_bent',
          caption: 'Soleus stretch: back heel flat, bend the back knee until you feel it near the heel',
          alt: 'A figure in a split stance with the knees bent, the lower calves highlighted',
        },
        {
          name: 'Heel raises on both feet',
          evidence: { level: 'moderate', why: 'The 2023 guideline grades strength work B. This step was not tested on its own.' },
          dose: '3 sets of 10, both feet',
          how: 'Stand on both feet, rise straight up over the big toes, then lower slowly. Hold the station for balance. Besides building strength, this makes the calf pump blood back up the leg, which still standing does not.',
          media: 'heel_raise_double',
          caption: 'Heel raises on both feet: rise straight up over the big toes, then lower slowly',
          alt: 'A standing figure rising onto the toes of both feet, the calf highlighted',
        },
        {
          name: 'Seated heel raises',
          evidence: { level: 'moderate', why: 'The 2023 guideline grades strength work B. This step was not tested on its own.' },
          dose: '3 sets of 10, both feet',
          how: 'Sit on your stool with your feet flat and press up through the balls of your feet. Hands on the knees add resistance. With the knee bent, this mainly works the soleus, with almost no load on the heel. A good option when your heels are already sore.',
          media: 'heel_raise_seated',
          caption: 'Seated heel raises: press up through the balls of the feet',
          alt: 'A seated figure lifting both heels, the calves highlighted',
        },
        {
          name: 'Ankle rocks',
          evidence: { level: 'early', why: 'Targets ankle flexibility, the strongest risk factor for plantar fasciitis in a 2003 case-control study. Not tested on its own in a trial.' },
          dose: '2 sets of 15, each leg',
          how: 'Split stance, hands on a wall. Rock the front knee forward over the toes while the heel stays flat. Go slowly, about two seconds each way. It moves the ankle after a long stretch of standing still.',
          media: 'ankle_rocks',
          caption: 'Ankle rocks: knee travels forward over the toes, heel stays flat',
          alt: 'A figure in a split stance rocking the front knee forward over the toes, the ankle highlighted',
        },
        {
          name: 'Plantar fascia stretch',
          evidence: { level: 'strong', why: 'The 2023 heel pain guideline grades plantar fascia stretching A.' },
          dose: '2 holds of 30 seconds, each foot',
          how: 'Sit and cross one foot over the other knee. Pull the toes back gently until you feel a stretch along the arch. Do it on a break when you can sit, and before your first steps in the morning if your heel hurts most then.',
          media: 'fascia_stretch',
          caption: 'Plantar fascia stretch: pull the toes back gently until you feel it in the arch',
          alt: 'A seated figure pulling the toes of one foot back, the arch highlighted',
        },
      ],
      table: {
        caption: 'Which exercise fits which gap',
        head: ['Gap', 'Exercise', 'Dose'],
        rows: [
          ['While colour sets', 'Calf stretch', '2 x 30 s, each leg'],
          ['Next gap', 'Soleus stretch', '2 x 30 s, each leg'],
          ['Client at the basin', 'Heel raises', '3 x 10, both feet'],
          ['Sitting on your stool', 'Seated heel raises', '3 x 10, both feet'],
          ['Before a long cut', 'Ankle rocks', '2 x 15, each leg'],
          ['Lunch break', 'Plantar fascia stretch', '2 x 30 s, each foot'],
        ],
      },
      after: [
        'Heel raises on both feet and seated heel raises are the same strength work, so pick one per day. Strength work every other day leaves time for the calf to recover.',
      ],
      cites: [CITE.guideline, CITE.riddle],
    },
    {
      h2: 'Do compression stockings help hairdressers?',
      keyFact: 'In a randomized crossover trial of 108 hairdressers, 15 to 20 mmHg stockings lowered leg pain and swelling scores by 12% and lower leg volume by 19 mL (Blazek and colleagues, 2013).',
      paragraphs: [
        '**Compression stockings are one of the few things tested in hairdressers themselves.** In a Swiss randomized crossover trial, 108 hairdressers wore low-strength stockings (15 to 20 mmHg) for one period and no stockings for another. With stockings, the score for leg pain and feeling of swelling fell by 12% on average, and lower leg volume fell by 19 mL. Sleep and mood scores improved too.',
        'A smaller Brazilian study of 38 hairdressers measured the ankle. Without stockings it grew from 21.1 cm in the morning to 22.1 cm by the end of the day. With stockings it was 21.2 cm at the end of the day, about the same as in the morning.',
        'The effects were modest, and the studies measured leg swelling and leg symptoms, not foot conditions like plantar fasciitis. A 2023 trial in security guards found similar results for long standing shifts. **Stockings help with swelling and heavy legs, while the calf and arch still need their own exercise.** If you have diabetes, poor circulation or numb feet, ask a clinician before using compression.',
      ],
      sourceNote:
        'Blazek and colleagues (2013): randomized crossover, 108 hairdressers, medical compression stockings 15 to 20 mmHg against none, symptom score range 0 to 4 (mean drop 0.22). Agle and colleagues (2020): 38 hairdressers without venous disease, ankle circumference at point B, morning and evening, with and without stockings.',
      cites: [CITE.blazekHosiery, CITE.agleHosiery, CITE.garcia],
    },
    {
      h2: 'Could it be plantar fasciitis, varicose veins or something else?',
      paragraphs: [
        'General ache and heavy legs at the end of a salon day are common and usually ease overnight. Some patterns point to something more specific:',
        {
          list: [
            'Sharp heel pain on the first steps in the morning or after sitting points to [plantar fasciitis](/plantar-fasciitis/). The full routine is in [plantar fasciitis exercises](/plantar-fasciitis-exercises/).',
            'Burning or pain under the ball of the foot fits [ball of foot pain](/ball-of-foot-pain/), common with thin soles or heels.',
            'An arch that aches or looks lower by evening fits [arch pain](/arch-pain/).',
            'Swollen, twisted or bulging veins on the legs may be varicose veins. In a survey of 182 hairdressers in Taiwan, 24.2% had them, and in those over 45, long monthly standing hours were a risk factor (Chen and Guo, 2014).',
          ],
        },
        'If you are not sure what the pain is, the [foot pain identifier](/foot-pain-identifier/) can help you narrow it down, and a clinician can tell you for sure. **If pain changes, spreads or stops easing with rest, get it checked before loading it with exercise.**',
      ],
      cites: [CITE.chenVaricose],
    },
  ],
  faq: [
    {
      q: 'Why do hairdressers’ feet hurt so much?',
      a: 'Hairdressers stand in one spot for long periods, which loads the heel and arch without the calf pumping that walking provides. In a study of 384 hairdressers, 49.5% reported knee or foot pain over 12 months, against 38.3% of people in other jobs. Leaning forward, hard floors and unsupportive shoes add to the load.',
      cites: [CITE.mishraHairdressers, CITE.waters],
    },
    {
      q: 'What are the best shoes for hairdressers with foot pain?',
      a: 'No study has compared shoe types for hairdressers, so there is no proven best shoe. Look for a cushioned sole, some arch support, a low heel, room for the toes and a grippy sole. A 2018 review of 10 studies found moderate evidence that cushioned insoles and softer floors reduce discomfort in standing workers.',
      cites: [CITE.speedCushioning],
    },
    {
      q: 'Do anti-fatigue mats work for hairdressers?',
      a: 'They help with comfort. In a lab study of four hours of standing, three of four anti-fatigue mats lowered discomfort compared with a hard floor. A small older study found mats reduced back muscle fatigue but not leg fatigue. A mat is worth having at your chair, but it does not replace stretching and moving between clients.',
      cites: [CITE.wiggermannMats, CITE.kimMats],
    },
    {
      q: 'Should hairdressers wear compression socks?',
      a: 'Low-strength compression is one of the few options tested in hairdressers. In a crossover trial of 108 hairdressers, 15 to 20 mmHg stockings lowered leg pain and swelling scores by 12% and lower leg volume by 19 mL. The effect was modest. Ask a clinician first if you have diabetes or poor circulation.',
      cites: [CITE.blazekHosiery],
    },
    {
      q: 'Is it better for hairdressers to sit on a stool?',
      a: 'Sitting for part of the day takes load off the feet, but no study has tested stools for hairdressers’ foot pain. One posture study found stool users bent their lower back more and raised their hands above the shoulder more often. Use a stool set high enough to keep your arms low, and stand for the rest.',
      cites: [CITE.kozakHairdressing, CITE.karakolis],
    },
    {
      q: 'What stretches can hairdressers do between clients?',
      a: 'The calf stretch and soleus stretch, 2 holds of 30 seconds on each leg, fit into one gap between clients. Heel raises, 3 sets of 10, get the calf pumping again after standing still. The 2023 heel pain guideline grades calf and plantar fascia stretching A, its top grade, for plantar fasciitis.',
      cites: [CITE.guideline],
    },
    {
      q: 'Can hairdressing cause plantar fasciitis?',
      a: 'Standing for most of the working day raised the odds of plantar fasciitis 3.6 times in a case-control study of 50 cases and 100 controls, and a tight calf raised them 23.3 times. No study has measured plantar fasciitis in hairdressers specifically, but salon work involves exactly that kind of long standing.',
      cites: [CITE.riddle],
    },
    {
      q: 'How long can a hairdresser stand before taking a break?',
      a: 'There is no tested limit for hairdressers. In a review of lab studies, low-back symptoms became clinically relevant after about 71 minutes of standing on average and after 42 minutes in people prone to standing pain. Breaking long services with a short stretch, a few heel raises or a minute on a stool is a reasonable approach.',
      cites: [CITE.coenen],
    },
  ],
  redFlags: {
    h2: 'See a clinician first if',
    bullets: [
      'the pain started after a fall, a twist or something dropped on your foot',
      'you cannot put weight on the foot, or you are limping',
      'the foot is numb, tingling or burning',
      'one leg has swollen suddenly and is painful, red or warm',
      'the foot is red or hot, or you have a fever or feel unwell',
      'pain wakes you at night or is there even when you rest',
      'you have diabetes, poor circulation or reduced feeling in your feet',
      'the pain has not eased after several weeks of better shoes, a mat, breaks and the exercises on this page',
    ],
  },
  program: {
    h2: 'Doing it as a plan',
    text:
      'You do not have to work out the order, the doses or when to move to a harder version. [Walkito](/program/) is a heel and foot exercise app that builds your plan one week at a time, and sessions are short enough to fit before work or on a break.',
    more: [
      'You pick 3, 5 or 7 days a week and sessions of 3, 5 or 10 minutes. Before each session you rate your heel pain, and the plan adjusts to it. Walkito does not diagnose.',
    ],
    cta: 'Start with a 3-minute session.',
  },
  related: ['standing', 'nurses', 'standingDesk'],
  crumb: 'Foot pain for hairdressers',
  campaign: 'guide-hairdressers-foot-pain',
};
