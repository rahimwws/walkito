import { CITE } from '@/lib/citations';
import type { Guide } from '../types';

/*
 * Plantar fasciitis not getting better (EN). Research 2026-10-18.
 * Owns the "stuck / tried everything" search. /how-long-does-plantar-fasciitis-last/
 * owns the timeline question: this page does not repeat its timeline table or its
 * milestones, and links to it instead.
 * Long-term data: Hansen 2018 (174 patients, PMC5844527 full text read: 54% symptom-free,
 * 46% with symptoms, mostly minor; 93% had a US-guided steroid injection, a
 * hard-to-manage cohort; 31.9% of the symptom-free group relapsed at least once;
 * 77.5% of the still-symptomatic group had had a symptom-free period; mean 3.8 treatments tried).
 * Strength vs stretch: Rathleff 2015 (48 people). Heel raise dosing: Riel 2019 (70 people,
 * only 4 reached an acceptable symptom state after three months). Injection: Riel 2023
 * (180 people). Risk factors: Riddle 2003. Differential diagnosis and grades: Koc 2023 CPG,
 * grades read from the jospt.org summary of recommendations (manual therapy A, stretching A,
 * taping A, night splints A, orthoses alone B against, orthoses combined C, ultrasound added
 * to stretching A against, low-level laser B, resistance training B, dry needling B; no 2023
 * recommendation on shockwave). Latt 2020: 90% with non-surgical care, imaging for those who
 * do not respond, minimally invasive options or surgery after 6 months.
 * Doses match the heel pain guide (en.ts).
 */

export const PF_NOT_BETTER_EN: Guide = {
  lang: 'en',
  page: 'pfNotBetter',
  mainSource: CITE.hansen,
  published: '2026-10-18',
  updated: '2026-10-18',
  title: 'Plantar Fasciitis Not Getting Better? What to Change',
  description:
    'Heel pain stuck? Six common reasons plantar fasciitis stalls, what each looks like, what to change, and the options when exercise is not enough.',
  h1: 'Plantar fasciitis not getting better? Reasons and what to change',
  lede:
    'When plantar fasciitis is not getting better, the usual reasons are a plan that is only stretching, a load that never goes up, stopping when it eases, or something that keeps setting it off. Sometimes it is not plantar fasciitis at all. It is rarely a sign that nothing can change: in a study that followed 174 people for about ten years, 54% were free of symptoms and most of the rest had only minor pain (Hansen and colleagues, 2018).',
  intro: [
    'This page is for the stuck phase: you have tried the stretches, maybe insoles, maybe an injection, and your first steps still hurt. How long recovery usually takes is covered in [how long plantar fasciitis lasts](/how-long-does-plantar-fasciitis-last/). Here we go through the common reasons it stalls, what each one looks like, what to change, and when to get checked again.',
  ],
  takeaways: [
    'In 174 people followed for a mean of 9.7 years from the start of symptoms, 54% were symptom-free and 46% still had some symptoms, mostly minor. Most had already had a steroid injection, so these were harder cases (Hansen and colleagues, 2018).',
    'Ups and downs are normal: 31.9% of the people who got better had at least one relapse first, and 77.5% of those still in pain had had a pain-free period at some point (Hansen and colleagues, 2018).',
    'In a trial of 48 people, loaded heel raises brought improvement forward compared with stretching alone at three months. By one year both groups were about even (Rathleff and colleagues, 2015).',
    'The 2023 heel pain guideline grades stretching, manual therapy, taping and night splints **A**, and strength work, dry needling and low-level laser **B**. It recommends against insoles on their own for short-term relief (Koc and colleagues, 2023).',
    'The same guideline says to look for other diagnoses when symptoms are not settling, such as inflammatory arthritis, fat pad atrophy or a lump in the fascia (Koc and colleagues, 2023).',
  ],
  toc: true,
  sections: [
    {
      h2: 'Is plantar fasciitis permanent if it is not getting better?',
      keyFact: 'In a group of 174 people followed for a mean of 9.7 years, 54% were symptom-free and 46% still had some symptoms, most of them minor (Hansen and colleagues, 2018).',
      paragraphs: [
        '**For most people, no.** A 2020 review reports that about 90% of people get better with non-surgical care, though it can take three to six months (Latt and colleagues, 2020). The harder question is what happens to the people who are still stuck after that.',
        'The best long-term data come from a Danish study that followed 174 people with plantar fasciitis confirmed on ultrasound. At a mean of 9.7 years after their symptoms started, 54% had no symptoms at all. The other 46% still had some, but most described them as minor. On average, people had tried 3.8 different treatments (Hansen and colleagues, 2018).',
        'Two things make this study more hopeful than it first looks. It was a hospital group with hard-to-manage pain: 93% had already had a steroid injection, which is not a first step. And "still has symptoms" meant any score above 0 out of 10, so it includes people with occasional mild aches.',
        'The study also found the fascia got thinner over time whether people still had pain or not, and only 24% of the pain-free group had a fascia that looked fully normal on ultrasound. So a scan that still looks abnormal does not mean you cannot feel better. For the full timeline, see [how long plantar fasciitis lasts](/how-long-does-plantar-fasciitis-last/).',
      ],
      sourceNote:
        'Hansen 2018: 269 diagnosed 2001 to 2011, 174 took part (91 women, 83 men), 137 had a follow-up ultrasound. Asymptomatic = 0 on every pain scale (rest, walking, running, pressure). Fascia thickness fell from 6.9 mm and 6.7 mm to 4.3 mm in both groups. Women and people with pain in both heels did worse (both P < .01). The authors note the study cannot judge which treatments worked.',
      cites: [CITE.latt, CITE.hansen],
    },
    {
      h2: 'Which reason fits you?',
      paragraphs: [
        'Most stalled cases fit one or two of these patterns. Read down the middle column and see which sounds like you, then go to that section.',
      ],
      table: {
        caption: 'Common reasons plantar fasciitis stalls',
        head: ['Reason', 'What it looks like', 'What to change'],
        rows: [
          ['Stretching only', 'Weeks of stretches, first steps still sharp', 'Add calf strength work'],
          ['Load never goes up', 'Same easy raises for months', 'Step up slowly, keep it heavy'],
          ['Stopped too early', 'Better, stopped, back again', 'Keep a lighter dose going'],
          ['Flare, then stop', 'One bad day, a week off', 'Scale down, do not drop out'],
          ['Ongoing triggers', 'Long shifts, runs or a stiff ankle', 'Change the load you can'],
          ['Not plantar fasciitis', 'Night pain, tingling, both heels', 'Get reassessed'],
        ],
      },
      cites: [CITE.guideline, CITE.hansen],
    },
    {
      h2: 'Are you only stretching?',
      keyFact: 'In a trial of 48 people, the heel raise group scored 29 points better on the Foot Function Index than the stretching group at three months (Rathleff and colleagues, 2015).',
      paragraphs: [
        '**Stretching is worth keeping, but on its own it may not be enough.** The 2023 heel pain guideline grades plantar fascia and calf stretching **A**, its top grade. It also grades strength work for the foot and ankle **B** (Koc and colleagues, 2023). Many home plans only include the first.',
        'In a trial of 48 people, one group did slow, heavy heel raises with a towel under the toes and the other stretched the plantar fascia. At three months, the heel raise group scored 29 points better on the Foot Function Index. By one year the two groups were about even (Rathleff and colleagues, 2015). So adding strength work did not change where people ended up, but it got them there sooner.',
        'What it looks like: you have stretched faithfully for a month or more, the stretch feels easier, but the first steps of the day are still sharp. What to change: keep the stretches and add the calf work in the next section. [Calf raises for plantar fasciitis](/calf-raises-plantar-fasciitis/) explains the trial routine in detail.',
      ],
      cites: [CITE.guideline, CITE.rathleff],
    },
    {
      h2: 'Has the load ever gone up?',
      keyFact: 'In a trial of 70 people doing heel raises for three months, only 4 reached a point where they felt they needed no further treatment (Riel and colleagues, 2019).',
      paragraphs: [
        '**Strength work only helps if it gets harder over time.** Ten easy heel raises on two feet, done for months, is a warm-up, not a load. The trial routine moves from both feet to one foot, adds a slow tempo and a towel under the toes, then adds weight such as a backpack (Rathleff and colleagues, 2015).',
        'How you set the load matters less than people think. A 2019 trial gave 70 people either a set, step-by-step heel raise plan or told them to choose their own sets and weight, as heavy as they could manage. Both groups improved by a similar amount. Choosing your own dose did not lead people to do more (Riel and colleagues, 2019).',
        'The same trial is a useful reality check: after three months of heel raises, 44 of the 65 people who answered said they were better, but only 4 of 70 felt they needed no further treatment. If you are better but not done at three months, you are in the common group, not the failed one.',
        'What to change: move up one step when the current one feels easy for two sessions in a row and your next morning is no worse. The cards below are the steps, in order.',
      ],
      exercises: [
        {
          name: 'Plantar fascia stretch',
          evidence: { level: 'strong', why: 'The 2023 heel pain guideline grades stretching A, its top grade.' },
          dose: '2 holds of 30 seconds, each foot',
          often: 'Most sessions',
          feel: 'A stretch along the arch',
          how: 'Sit down and cross the foot over the other knee. Pull the toes back until you feel the stretch in the arch, not the calf. Do the first one on the edge of the bed, before your foot touches the floor.',
          stop: 'Sharp heel pain that stays after you let go',
          image: 'Exercise: plantar fascia stretch',
          media: 'fascia_stretch',
          caption: 'Plantar fascia stretch: pull the toes back until you feel it in the arch',
          alt: 'A figure pulling the toes of one foot back, the sole of the foot highlighted',
        },
        {
          name: 'Seated heel raises',
          evidence: { level: 'moderate', why: 'The 2023 guideline grades strength work B. This step was not tested on its own.' },
          dose: '3 sets of 10, both feet',
          often: 'Strength days',
          feel: 'Work low in the calf',
          how: 'Sit with your feet flat and press up through the balls of your feet. Hands on the knees add resistance. With the knee bent, this mainly works the soleus, the deeper calf muscle, with almost no load on the heel. Start here if standing raises hurt.',
          stop: 'Heel pain that goes above 6 out of 10, or is worse the next morning',
          image: 'Exercise: seated heel raises',
          media: 'heel_raise_seated',
          caption: 'Seated heel raises: press up through the balls of the feet',
          alt: 'A seated figure lifting both heels, the calves highlighted',
        },
        {
          name: 'Heel raises on both feet',
          evidence: { level: 'moderate', why: 'The 2023 guideline grades strength work B. This step was not tested on its own.' },
          dose: '3 sets of 10, both feet',
          often: 'Strength days',
          feel: 'The calves working together',
          how: 'Stand on both feet, rise straight up over the big toes, then lower slowly. Both feet share the load while the calf gets used to the work.',
          stop: 'Heel pain that goes above 6 out of 10, or is worse the next morning',
          image: 'Exercise: heel raises on both feet',
          media: 'heel_raise_double',
          caption: 'Heel raises on both feet: rise straight up over the big toes, then lower slowly',
          alt: 'A standing figure rising onto the toes of both feet, the calf highlighted',
        },
        {
          name: 'Heel raise hold',
          evidence: { level: 'moderate', why: 'The 2023 guideline grades strength work B. This step was not tested on its own.' },
          dose: '3 holds of 20 seconds, both feet',
          often: 'Strength days',
          feel: 'The calves working to stay still',
          how: 'Rise onto your toes on both feet, then stay still at the top. Don’t sink back down. A useful step on days when moving reps feel too much.',
          stop: 'Heel pain that goes above 6 out of 10, or is worse the next morning',
          image: 'Exercise: heel raise hold',
          media: 'heel_raise_hold',
          caption: 'Heel raise hold: rise, then stay still at the top',
          alt: 'A figure holding a raised position on the toes of both feet, the calves highlighted',
        },
        {
          name: 'Heel raises with a towel',
          evidence: { level: 'moderate', why: 'This is the routine from a 48-person trial, and the 2023 guideline grades strength work B.' },
          dose: '4 sets of 10, each leg, with added weight',
          often: 'Strength days',
          feel: 'Hard work in the calf',
          how: 'Stand on one foot on a step, with a rolled towel under your toes. Take three seconds to rise, hold for two at the top, and take three seconds to lower. At this level, add weight such as a backpack. The towel is what makes this exercise work the plantar fascia and not just the calf.',
          stop: 'Heel pain that goes above 6 out of 10, or is worse the next morning',
          image: 'Exercise: heel raises with a towel',
          media: 'heel_raise_towel',
          caption: 'Heel raises with a towel: three seconds up, two at the top, three down',
          alt: 'A figure rising onto the toes on a step with a rolled towel, the calves highlighted',
        },
      ],
      sourceNote:
        'Riel 2019: 70 people with plantar fasciopathy on ultrasound, standing heel raises for three months. Foot Health Status Questionnaire pain: adjusted difference 6.9 points, 95% CI 15.5 to 1.7, not significant. Improved on Global Rating of Change: 24 of 33 (self-dosed) and 20 of 32 (set plan). Patient Acceptable Symptom State: 3 of 35 and 1 of 35.',
      cites: [CITE.rathleff, CITE.rielSelfDosed, CITE.guideline],
    },
    {
      h2: 'Did you stop when it started to feel better, or after a flare?',
      keyFact: 'In a long-term study, 31.9% of people who became symptom-free had at least one relapse first (Hansen and colleagues, 2018).',
      paragraphs: [
        '**Relapses are part of the normal path, not proof that nothing works.** In the long-term Danish study, 31.9% of the people who ended up symptom-free had at least one relapse before the pain went for good. Among those who still had symptoms, 77.5% had had a pain-free period at some point (Hansen and colleagues, 2018).',
        'Two patterns come out of that:',
        {
          list: [
            '**Stopping too early.** The pain eases, the exercises go, and a few weeks later the heel is back to where it started. What to change: when mornings are good, drop to a lighter maintenance dose, for example fewer strength days, instead of stopping.',
            '**Flare, then stop.** A long day on your feet or a new pair of shoes sets off a bad morning, and you stop everything for a week. What to change: go back one step on the cards above and keep going. Stopping completely loses the strength you built.',
          ],
        },
        'A simple rule helps you tell a flare from a setback: pain during the exercise up to about 6 out of 10 is fine if it settles and your next morning is no worse. This is the rule Walkito uses. It has not been tested as a rule on its own, so if your mornings get worse week after week, see a clinician.',
        'No study has tested how long to keep a maintenance dose going after plantar fasciitis settles. The 2023 guideline does not set an end date for strength work (Koc and colleagues, 2023).',
      ],
      cites: [CITE.hansen, CITE.guideline],
    },
    {
      h2: 'Is something still setting it off?',
      keyFact: 'An ankle that bent 0 degrees or less raised the odds of plantar fasciitis about 23 times in a study of 50 cases and 100 controls (Riddle and colleagues, 2003).',
      paragraphs: [
        '**Exercises can be outpaced by the load you put on the foot the rest of the day.** In a matched study of 50 people with plantar fasciitis and 100 without, a stiff ankle was the strongest risk factor: an ankle that bent 0 degrees or less raised the odds 23.3 times. A body mass index over 30 raised them about 5.6 times, and spending most of the workday on your feet about 3.6 times (Riddle and colleagues, 2003).',
        'The 2023 guideline lists the same factors, plus running, and adds that hard surfaces with poor shock absorption make standing and walking at work more of a risk (Koc and colleagues, 2023). Some of these you can change, some you cannot:',
        {
          list: [
            '**A stiff ankle or tight calf.** Keep the calf and soleus stretches going; [tight calves](/tight-calves/) has the full set.',
            '**Long shifts on hard floors.** Cushioned shoes, a mat where you stand, and sitting breaks where you can. See [feet hurt from standing all day](/feet-hurt-standing-all-day/).',
            '**Walking or running volume.** Cut the distance or the pace instead of stopping. If your first steps the next morning are clearly worse, it was too much. See [walking with plantar fasciitis](/walking-with-plantar-fasciitis/).',
            '**Body weight.** Weight was not linked to how long symptoms lasted in the long-term study (Hansen and colleagues, 2018), so this is not about blame. [Weight and plantar fasciitis](/weight-and-plantar-fasciitis/) covers what is known.',
          ],
        },
        'Insoles can take some pressure off the heel while you build strength, but the guideline recommends against relying on them alone for short-term relief (grade **B**) and allows them alongside other care (grade **C**). [Insoles or exercises](/insoles-vs-exercises/) compares the two.',
      ],
      cites: [CITE.riddle, CITE.guideline, CITE.hansen],
    },
    {
      h2: 'Could it be something other than plantar fasciitis?',
      paragraphs: [
        '**Yes, and the guideline tells clinicians to check when symptoms are not settling.** The 2023 heel pain guideline says clinicians should look for other diagnoses, including inflammatory arthritis of the spine and joints (spondyloarthritis), thinning of the heel fat pad, and a benign lump in the fascia (plantar fibroma), when the picture does not fit or symptoms are not resolving with care (Koc and colleagues, 2023).',
        'A 2020 review lists other causes of pain under the heel, including a trapped nerve (tarsal tunnel syndrome or Baxter’s nerve), a stress fracture of the heel bone, a torn fascia, and inflammatory arthritis (Latt and colleagues, 2020). Clues that point away from plantar fasciitis:',
        {
          list: [
            '**Burning, tingling or numbness**, or pain that spreads into the arch or toes: possible nerve problem.',
            '**Pain that builds the longer you walk**, rather than easing after the first steps, and hurts when you squeeze the sides of the heel: see [plantar fasciitis or stress fracture](/plantar-fasciitis-vs-stress-fracture/).',
            '**Pain at the back of the heel** rather than underneath: see [plantar fasciitis or Achilles tendonitis](/plantar-fasciitis-vs-achilles-tendonitis/).',
            '**A deep bruise-like ache in the middle of the heel pad**, worse on hard floors and barefoot: see [heel fat pad syndrome](/heel-fat-pad-syndrome/).',
            '**Pain at night or at rest**: see [heel pain at night](/heel-pain-at-night/).',
            '**Both heels, with long morning stiffness or other sore joints.** In the long-term study, pain in both heels went with slower recovery, and the authors suggested it could point to an inflammatory condition that was not tested for (Hansen and colleagues, 2018).',
          ],
        },
      ],
      cites: [CITE.guideline, CITE.latt, CITE.hansen],
    },
    {
      h2: 'What does the guideline list when exercise alone has not helped?',
      keyFact: 'In a trial of 180 people, a steroid injection added to heel raises, advice and a heel cup made no difference patients would notice at any point up to a year (Riel and colleagues, 2023).',
      paragraphs: [
        'These are options to discuss with a clinician, not things to try at home. All grades are from the 2023 heel pain guideline, where **A** is its strongest recommendation (Koc and colleagues, 2023):',
        {
          list: [
            '**Manual therapy** (hands-on joint and soft tissue work): **A**.',
            '**Taping**, rigid or elastic, alongside other care, for short-term relief: **A**. See [plantar fasciitis taping](/plantar-fasciitis-taping/).',
            '**Night splints for one to three months**, if first steps keep hurting: **A**. See [night splints](/night-splints-plantar-fasciitis/).',
            '**Dry needling** of the calf and foot muscles: **B**.',
            '**Low-level laser** as part of a rehab program, for short-term pain: **B**.',
            '**Insoles combined with other care**: **C**.',
          ],
        },
        'The guideline recommends **against** insoles as the only thing you do for short-term relief (**B**) and against adding therapeutic ultrasound to stretching (**A**). The 2023 version makes no recommendation on shockwave therapy.',
        '**Steroid injections** ease pain for some people in the short term, but the evidence for adding them is weak. In a trial of 180 people, everyone got advice and a heel cup; one group added heel raises and one added heel raises plus an injection. The differences between groups never reached the size patients would notice, at any point up to a year (Riel and colleagues, 2023). The same trial found no clear extra benefit from adding the heel raises, which is a reminder that no single add-on is a sure thing.',
        'A 2020 review says people who still have pain after at least six months of non-surgical care may be offered minimally invasive options, such as injections or shockwave, or in some cases surgery (Latt and colleagues, 2020). These are decisions for you and a specialist. A physical therapist can also check your form and load in person: see [app or physical therapy](/app-vs-physical-therapy-plantar-fasciitis/).',
      ],
      sourceNote:
        'Riel 2023: advice + heel cup (n = 62), plus self-dosed heavy-slow heel raises (n = 59), plus an ultrasound-guided triamcinolone injection (n = 59). Foot Health Status Questionnaire pain, minimal important difference 14.1 points. Injection group vs advice only: adjusted difference 9.1 points at three months (p = 0.023) and 5.2 points over 52 weeks (p = 0.045), below the minimal important difference. No significant difference between exercise and exercise plus injection, or between advice and exercise, at any time.',
      cites: [CITE.guideline, CITE.rielHeelRaiseAdd, CITE.latt],
    },
    {
      h2: 'When should you get reassessed?',
      paragraphs: [
        '**Get checked again if a few months of steady, progressing exercise have not moved your morning pain, or sooner if the pattern changes.** A 2020 review says imaging is kept for unusual cases and for people who do not respond to first-line care (Latt and colleagues, 2020), and the guideline says clinicians should look for other diagnoses when symptoms are not resolving (Koc and colleagues, 2023).',
        'To get the most out of the visit, bring:',
        {
          list: [
            'Your morning pain scores (first steps, 0 to 10) for the last few weeks, so the trend is clear.',
            'What you have done, how often, and how heavy: "heel raises" tells a clinician less than "one leg, 4 sets of 10, with a backpack".',
            'What makes it worse: a shift, a run, new shoes, barefoot floors.',
            'Anything that does not fit plantar fasciitis: night pain, tingling, both heels, other sore joints.',
          ],
        },
        'Ask whether the diagnosis still fits, whether an imaging test would change anything, and which of the guideline options above suit you.',
      ],
      cites: [CITE.latt, CITE.guideline],
    },
  ],
  faq: [
    {
      q: 'Why is my plantar fasciitis not getting better?',
      cites: [CITE.guideline, CITE.rathleff],
      a: 'The common reasons are a stretch-only plan with no calf strength work, a load that never gets harder, stopping when pain eases or after a flare, and daily load such as long shifts or runs. Sometimes it is not plantar fasciitis. The 2023 guideline grades stretching A and strength work B, so most plans need both.',
    },
    {
      q: 'Is plantar fasciitis permanent?',
      cites: [CITE.hansen, CITE.latt],
      a: 'Usually not. About 90% of people get better with non-surgical care. In a hard-to-manage group of 174 people followed for a mean of 9.7 years, 54% were symptom-free and most of the rest had only minor symptoms. Some people do keep mild symptoms for years, so it is worth getting reassessed if you are stuck.',
    },
    {
      q: 'Can chronic plantar fasciitis still get better?',
      cites: [CITE.hansen],
      a: 'Yes. In a long-term study, people kept becoming symptom-free well after the first year, and 77.5% of those who still had pain had had a pain-free period at some point. The fascia also got thinner over time whether or not people still had pain. Slow is not the same as stuck for good.',
    },
    {
      q: 'Should I stop exercising if my heel pain flares up?',
      cites: [CITE.hansen],
      a: 'Usually not completely. Go back a step, for example from one-leg to two-leg heel raises, and keep going. Relapses are common: 31.9% of people who became symptom-free in a long-term study had at least one first. See a clinician if mornings keep getting worse week after week.',
    },
    {
      q: 'Is stretching enough for plantar fasciitis?',
      cites: [CITE.guideline, CITE.rathleff],
      a: 'For some people it is, but adding calf strength work may help sooner. The 2023 guideline grades stretching A and strength work B. In a 48-person trial, heavy heel raises gave a better result than stretching at three months, though the groups were about even by one year.',
    },
    {
      q: 'Do steroid injections help plantar fasciitis that will not go away?',
      cites: [CITE.rielHeelRaiseAdd],
      a: 'They can ease pain for a while, but the added benefit looks small. In a trial of 180 people, adding an injection to heel raises, advice and a heel cup made no difference patients would notice at any point up to a year. Whether one suits you is a decision for your doctor.',
    },
    {
      q: 'When is surgery considered for plantar fasciitis?',
      cites: [CITE.latt],
      a: 'Only after a long trial of non-surgical care. A 2020 review says surgery is considered when pain and limits persist despite at least six months of non-surgical treatment, and that minimally invasive options such as injections or shockwave are usually discussed first. A foot and ankle specialist makes that call with you.',
    },
    {
      q: 'Could my heel pain be something other than plantar fasciitis?',
      cites: [CITE.guideline, CITE.latt],
      a: 'Yes. The 2023 guideline tells clinicians to look for other causes when symptoms are not settling, such as inflammatory arthritis or heel fat pad thinning. Other causes include a trapped nerve and a heel stress fracture. Burning, tingling, night pain or pain that builds with walking are reasons to get checked.',
    },
    {
      q: 'Do insoles help if plantar fasciitis is not improving?',
      cites: [CITE.guideline],
      a: 'They may help as part of a wider plan. The 2023 guideline recommends against using insoles as the only treatment for short-term relief (grade B) and says they may be used combined with other care (grade C). Pair them with stretching and calf strength work rather than relying on them alone.',
    },
  ],
  redFlags: {
    h2: 'See a clinician first if',
    bullets: [
      'the pain is getting worse week after week, not just staying the same',
      'it started after a fall, a jump or a sudden snap, or you cannot put weight on the foot',
      'it hurts when you squeeze the sides of the heel, or it builds the longer you walk',
      'you feel burning, tingling or numbness in the heel, arch or toes',
      'it wakes you at night or hurts at rest',
      'both heels hurt with long morning stiffness, or other joints are sore or swollen',
      'the heel is red, warm or swollen, or you have a fever',
      'you have diabetes, reduced feeling in your feet or poor circulation',
    ],
  },
  program: {
    h2: 'Doing it as a plan',
    text: 'Walkito is a heel and foot exercise app. It cannot tell you why your heel is stuck, and it does not replace a clinician’s check, but it covers the parts that often go missing: calf strength work that gets harder over time, and a lighter session on bad mornings instead of a week off.',
    more: [
      'You pick 3, 5 or 7 days a week and sessions of 3, 5 or 10 minutes. Before each session you rate your morning heel pain, and the plan adjusts to it. Every 14 days a short test checks calf strength, arch hold and balance, so you can see whether things are moving. Walkito does not diagnose.',
    ],
    cta: 'Start with a 3-minute session.',
  },
  related: ['pfDuration', 'calfRaises', 'heelPain'],
  crumb: 'Plantar fasciitis not getting better',
  campaign: 'guide-plantar-fasciitis-not-getting-better',
};
