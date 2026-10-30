import { CITE } from '@/lib/citations';
import type { Guide } from '../types';

/*
 * ── Hub: Plantar fasciitis ────────────────────────────────────────────
 *
 * No new citations. Every figure comes from existing CITATIONS[] entries.
 *
 * Integration:
 *   1. Add to EN_ONLY in lib/i18n.ts:
 *        hubPlantarFasciitis: '/plantar-fasciitis/',
 *   2. Add to CITE map and CITATIONS[] if any new keys are listed (none here).
 *   3. Register the guide in articles-en.ts / index.ts.
 */

export const HUB_PLANTAR_FASCIITIS_EN: Guide = {
  lang: 'en',
  page: 'hubPlantarFasciitis' as any,
  mainSource: CITE.guideline,
  published: '2026-10-05',
  updated: '2026-10-26',
  title: 'Plantar Fasciitis: Symptoms, Causes and What Helps',
  description:
    'Plantar fasciitis in plain English: the symptoms, what causes it, what the 2023 guideline says helps most, and how long it usually lasts.',
  h1: 'Plantar fasciitis: symptoms, causes and what helps',
  lede:
    'Plantar fasciitis is overload of the plantar fascia, the thick band of tissue that runs under the foot from the heel bone to the toes, and it is the most common cause of pain under the heel. The classic symptom is sharp heel pain on your first steps in the morning that eases after a few minutes of walking. What helps most, according to the 2023 clinical guideline, is plantar fascia and calf stretching (top grade) plus calf strength work, and about 90 percent of people improve with non-surgical care.',
  takeaways: [
    'Morning heel pain on the first steps, easing after a few minutes of walking, is the most recognizable symptom pattern (Koc and colleagues, 2023).',
    'The 2023 heel pain guideline gives plantar fascia and calf stretching its top grade, A, and strength training a B (Koc and colleagues, 2023).',
    'About 90 percent of people with plantar fasciitis improve with non-surgical care such as stretching, strength work and supportive shoes, often within several months (Latt and colleagues, 2020).',
    'Reduced ankle dorsiflexion, how far the foot bends up toward the shin, was the strongest independent risk factor in a case-control study of 50 cases and 100 controls, with an odds ratio of 23.3 (Riddle and colleagues, 2003).',
    'In a long-term follow-up of 174 patients, about half were symptom-free by five years. Among those still symptomatic, most reported only minor pain (Hansen and colleagues, 2018).',
  ],
  toc: true,
  sections: [
    {
      h2: 'Plantar fasciitis symptoms',
      paragraphs: [
        '**The hallmark symptom is pain under the heel on your first steps in the morning.** The guideline describes it as pain "most noticeable with weight bearing first thing in the morning or after a period of rest." It usually eases once you walk for a few minutes, then returns after you sit for a while and stand up again.',
        'The pain is usually at the inside front of the heel, where the fascia attaches to the bone, and may spread along the arch. It tends to be worst after rest, not during activity. Mornings are worst because the fascia stiffens and shortens while you sleep, then stretches suddenly under your full weight on the first step.',
        'Morning pain is also the most useful way to judge progress: if the next morning is worse, yesterday asked too much of the foot. [Heel pain in the morning](/heel-pain-in-the-morning/) covers the morning pattern, the before-you-stand routine and night splints.',
      ],
      cites: [CITE.guideline],
    },
    {
      h2: 'What helps plantar fasciitis?',
      keyFact: 'In a trial of 48 people, loaded heel raises with a towel eased pain faster than stretching alone at three months, though by twelve months both groups were even (Rathleff and colleagues, 2015).',
      paragraphs: [
        'The 2023 clinical guideline grades each approach by the strength of the evidence behind it. The top grade goes to stretching, [taping](/plantar-fasciitis-taping/), manual therapy from a clinician, and [night splints](/night-splints-plantar-fasciitis/) for persistent morning pain. Strength training comes next.',
        '**No single option works for everyone.** Most people start with stretching and supportive shoes, add strength work once the initial pain settles, and see a clinician about the remaining options if progress stalls. The guideline recommends against [orthotics](/insoles-vs-exercises/) as a standalone short-term approach and against adding therapeutic ultrasound to stretching. [Best insoles for plantar fasciitis](/best-insoles-for-plantar-fasciitis/) covers when insoles are worth adding.',
      ],
      table: {
        caption: '2023 guideline grades for plantar heel pain',
        head: ['Approach', 'Grade', 'Notes'],
        rows: [
          ['Plantar fascia and calf stretching', '**A**', 'Top grade. The core of conservative care.'],
          ['Manual therapy (joint and soft-tissue work)', '**A**', 'Top grade. Performed by a clinician for joint and flexibility restrictions.'],
          ['Foot taping (rigid or elastic)', '**A**', 'Top grade for short-term pain and function, used alongside other care.'],
          ['Night splints for 1 to 3 months', '**A**', 'Top grade for persistent morning pain. See [heel pain in the morning](/heel-pain-in-the-morning/).'],
          ['Strength training (loaded heel raises)', '**B**', 'Brought improvement forward in a 48-person trial. See [calf raises for plantar fasciitis](/calf-raises-plantar-fasciitis/).'],
          ['Low-level laser therapy', '**B**', 'Clinic-based procedure.'],
          ['Dry needling', '**B**', 'Clinic-based procedure.'],
          ['Foot orthotics combined with other care', '**C**', 'Weak evidence. May help as part of a broader program. See [best insoles for plantar fasciitis](/best-insoles-for-plantar-fasciitis/).'],
          ['Foot orthotics alone, short-term', '**B against**', 'The guideline recommends **against** this as a standalone approach.'],
          ['Therapeutic ultrasound added to stretching', '**A against**', 'Evidence does not support adding it.'],
        ],
      },
      sourceNote:
        'Grades from Koc and colleagues, 2023, Journal of Orthopaedic & Sports Physical Therapy clinical practice guideline for heel pain.',
      cites: [CITE.guideline, CITE.rathleff],
    },
    {
      h2: 'Plantar fasciitis exercises and stretches',
      paragraphs: [
        'The exercises the guideline supports fall into two groups: stretching (grade A) for the plantar fascia and calf, and strength training (grade B) that builds the calf\'s capacity to handle daily load without overloading the fascia. The core three:',
      ],
      bullets: [
        '[Plantar fascia stretch](/exercises/plantar-fascia-stretch/): sit on the edge of the bed, cross one ankle over the other knee and pull the toes back gently, 10 times for 10 seconds on each foot, before you stand.',
        '[Calf stretch](/exercises/calf-stretch/) and [soleus stretch](/exercises/soleus-stretch/): 3 holds of 30 seconds on each leg for the tight calf that pulls on the heel.',
        '[Towel heel raise](/exercises/towel-heel-raise/): the loaded calf raise from the Rathleff trial, added once the initial pain settles. [Calf raises for plantar fasciitis](/calf-raises-plantar-fasciitis/) has the protocol.',
      ],
      after: [
        '[Plantar fasciitis exercises and stretches](/plantar-fasciitis-exercises/) has the full list with starting doses, what each should feel like, and when to stop. When we checked the 50 most-watched plantar fasciitis videos on YouTube, [only 9 included all three home exercises](/plantar-fasciitis-youtube-study/) the guideline supports.',
      ],
      cites: [CITE.guideline, CITE.rathleff],
    },
    {
      h2: 'How long does plantar fasciitis last?',
      keyFact: 'In a cohort of 174 people, about half were symptom-free by five years, and 46 percent still had some pain at ten years, most only minor (Hansen and colleagues, 2018).',
      paragraphs: [
        'A 2020 review reports that about 90 percent of people improve with non-surgical care, often within several months. In a longer follow-up of 174 patients, about half were symptom-free by five years, and 46 percent still had some pain at a mean of ten years, though most of those reported only minor symptoms. Being female and having pain in both heels predicted slower recovery; BMI, age, fascia thickness and a [heel spur](/plantar-fasciitis-vs-heel-spur/) did not.',
        'The useful milestone is whether your morning pain is lower this month than last month. [How long does plantar fasciitis last?](/how-long-does-plantar-fasciitis-last/) covers the timeline evidence and what to do if progress stalls.',
      ],
      cites: [CITE.latt, CITE.hansen],
    },
    {
      h2: 'What causes plantar fasciitis?',
      keyFact: 'In a case-control study of 50 people with plantar fasciitis and 100 without, reduced ankle dorsiflexion raised the odds of plantar fasciitis 23.3 times, the strongest risk factor measured (Riddle and colleagues, 2003).',
      paragraphs: [
        'Plantar fasciitis happens when the fascia is loaded beyond what it can handle and recover from. The load can be too much at once (a sudden jump in running mileage) or steady over time (standing on a hard floor all day). It usually comes from a combination of a tight calf, a load the foot was not ready for, and not enough recovery time.',
        'In a matched case-control study, reduced ankle dorsiflexion was the strongest independent risk factor, with an odds ratio of 23.3. Prolonged standing at work raised the odds 3.6 times, and higher body mass index also raised them. In a separate series of 254 people with plantar fasciitis, 52 to 60 percent had a contracture isolated to the gastrocnemius, the bigger, more superficial calf muscle.',
        'The guideline also names age between 40 and 60 (the years when [heel pain peaks in women around menopause](/plantar-fasciitis-menopause/)), running or jumping activities, and jobs with prolonged standing. [Flat feet](/flat-feet/) or [high arches](/high-arches-exercises/) can shift how load travels through the fascia, but neither means you will get it.',
      ],
      cites: [CITE.riddle, CITE.patelGastrocnemius, CITE.guideline],
    },
    {
      h2: 'What is the plantar fascia?',
      figure: { id: 'plantar-fascia', caption: 'The plantar fascia runs from the heel bone to the toes. Plantar fasciitis pain usually starts where it attaches to the heel.', alt: 'Sole of a foot showing the plantar fascia as white bands fanning out from the heel bone to the base of the toes, with a red spot on the heel where pain usually starts.' },
      paragraphs: [
        'The plantar fascia is a tough band of connective tissue along the sole from the heel bone (the calcaneus) to the base of the toes. It supports the arch and absorbs shock every time you step. When it is loaded more than it can recover from, the tissue becomes irritated near its attachment at the heel.',
        'The name ends in "itis," which suggests inflammation, but current thinking points toward a degenerative process rather than ongoing inflammation, so some clinicians say "plantar fasciopathy." The name does not change the symptoms or the recommended approach.',
      ],
      cites: [CITE.guideline, CITE.latt],
    },
    {
      h2: 'How is it diagnosed, and could it be something else?',
      paragraphs: [
        'A clinician usually diagnoses plantar fasciitis from your history and a physical exam: tenderness at the inside front of the heel, pain on the first morning steps, and pain that eases with activity and returns after rest. **Imaging is not needed for a typical case.** The guideline suggests considering it if the pattern does not fit, if symptoms do not improve after several weeks of conservative care, or to rule out another diagnosis. A thickened fascia on a scan without the matching symptoms is not plantar fasciitis.',
        'Conditions that share the location or the morning pattern:',
        {
          list: [
            '**Achilles tendonitis.** Pain at the back of the heel or in the tendon above it, not under the foot. See [plantar fasciitis vs Achilles tendonitis](/plantar-fasciitis-vs-achilles-tendonitis/).',
            '**Heel fat pad syndrome.** A deep ache in the center of the heel, worse on hard surfaces and barefoot. A 2022 scoping review noted it can be hard to tell apart from plantar fasciitis without imaging. See [heel fat pad syndrome](/heel-fat-pad-syndrome/).',
            '**Heel spur.** Many people have one with no pain at all, and in the Hansen 2018 cohort a spur at baseline had no significant effect on how long symptoms lasted. See [plantar fasciitis vs heel spur](/plantar-fasciitis-vs-heel-spur/).',
            '**Calcaneal stress fracture.** Pain that builds with activity instead of easing, can hurt at rest or at night, and squeezing the sides of the heel often reproduces it. See a clinician before exercising the foot. [How to tell them apart](/plantar-fasciitis-vs-stress-fracture/).',
            '**Inflammatory arthritis.** Both heels hurt, morning stiffness lasts more than 30 minutes, and other joints are stiff or swollen. A clinician should check.',
          ],
        },
        'More in [heel pain that isn\'t plantar fasciitis](/heel-pain-not-plantar-fasciitis/). Walkito does not diagnose; if you are unsure, a clinician is the right starting point.',
      ],
      cites: [CITE.guideline, CITE.achillesGuideline, CITE.fatPadReview, CITE.hansen],
    },
    {
      h2: 'Plantar fasciitis at work and while running',
      paragraphs: [
        'Prolonged standing on hard surfaces raised the odds of plantar fasciitis 3.6 times in the Riddle 2003 study, and a 2015 review linked prolonged standing at work to musculoskeletal discomfort, fatigue and leg pain. The same calf stretches and strength work apply. For runners, the 2023 guideline advises reducing mileage or intensity instead of stopping altogether (grade E, theoretical evidence, since no trial has tested it).',
      ],
      bullets: [
        '[Feet hurt from standing all day](/feet-hurt-standing-all-day/), with job pages for [nurses](/feet-hurt-standing-all-day/), [teachers](/feet-hurt-standing-all-day/), [retail and warehouse workers](/feet-hurt-standing-all-day/), [chefs](/feet-hurt-standing-all-day/) and [hairdressers](/feet-hurt-standing-all-day/), plus [standing desk foot pain](/feet-hurt-standing-all-day/).',
        '[Heel pain from running](/heel-pain-runners/) covers how to adjust training when the heel hurts.',
      ],
      cites: [CITE.riddle, CITE.waters, CITE.guideline],
    },
    {
      h2: 'All plantar fasciitis guides on this site',
      bullets: [
        'Start here: [exercises and stretches](/plantar-fasciitis-exercises/), [how long it lasts](/how-long-does-plantar-fasciitis-last/), [heel pain in the morning](/heel-pain-in-the-morning/) and [best insoles](/best-insoles-for-plantar-fasciitis/).',
        'Exercises and tests: [calf raises](/calf-raises-plantar-fasciitis/), [heel spur exercises](/heel-spur-exercises/), [tight calves](/tight-calves/), the [calf raise test](/calf-raise-test/), and the [plantar fascia stretch](/exercises/plantar-fascia-stretch/), [calf stretch](/exercises/calf-stretch/), [towel heel raise](/exercises/towel-heel-raise/) and [foot roll](/exercises/foot-roll/).',
        'Care and tools: [taping](/plantar-fasciitis-taping/), [ice or heat](/ice-or-heat-for-plantar-fasciitis/), a [massage ball or frozen bottle](/massage-ball-plantar-fasciitis/) and [night splints](/night-splints-plantar-fasciitis/).',
        'Other heel pain: [heel pain after walking](/heel-pain-after-walking/), [heel pain at night](/heel-pain-at-night/), [Haglund\'s deformity](/haglunds-deformity/), [Sever\'s disease](/severs-disease/) in children, and the [foot pain identifier](/foot-pain-identifier/).',
        'Apps and costs: [best app for plantar fasciitis](/best-app-for-plantar-fasciitis/) (seven compared), [what plantar fasciitis care costs](/plantar-fasciitis-treatment-cost/), [an exercise app vs physical therapy](/app-vs-physical-therapy-plantar-fasciitis/) and [free YouTube videos vs an app](/youtube-vs-app-plantar-fasciitis/).',
      ],
    },
  ],
  faq: [
    {
      q: 'What is the fastest way to get rid of plantar fasciitis?',
      cites: [CITE.guideline, CITE.rathleff],
      a: 'There is no shortcut, but the evidence points to starting early with plantar fascia and calf stretching (guideline grade A) and adding calf strength work (grade B). In a trial of 48 people, heavy heel raises brought improvement forward at three months (Rathleff and colleagues, 2015). Supportive shoes and not overloading the foot are the other basics.',
    },
    {
      q: 'Can plantar fasciitis go away on its own?',
      cites: [CITE.latt, CITE.hansen],
      a: 'It can, but it usually takes a long time. A 2020 review reports about 90 percent of people improve with conservative care (Latt and colleagues, 2020). In a cohort of 174 patients, about half were symptom-free by five years (Hansen and colleagues, 2018). Active care such as stretching and calf strength work can bring that timeline forward.',
    },
    {
      q: 'Should I keep walking with plantar fasciitis?',
      cites: [CITE.guideline],
      a: 'Walking in supportive shoes at a comfortable pace is generally fine, and the guideline does not say to stop moving. The test is how your heel feels the next morning. If first-step pain after a walk is clearly higher than usual, that walk was too much, so shorten the distance before stopping. More in [walking with plantar fasciitis](/walking-with-plantar-fasciitis/).',
    },
    {
      q: 'What shoes and insoles help plantar fasciitis?',
      cites: [CITE.guideline, CITE.riddle],
      a: 'A shoe with some cushion, arch support and a small heel-to-toe drop helps compensate for a tight calf. Reduced ankle flexibility is the strongest risk factor for plantar fasciitis (Riddle and colleagues, 2003). The guideline rates insoles as weak help alongside other care and advises against them alone in the short term. Avoid going barefoot on hard surfaces, especially in the morning. See [best insoles for plantar fasciitis](/best-insoles-for-plantar-fasciitis/).',
    },
    {
      q: 'Does a heel spur cause plantar fasciitis?',
      cites: [CITE.hansen],
      a: 'Not in the way most people assume. A heel spur is a bony growth on the underside of the heel bone, and many people have one with no pain. In a follow-up of 174 patients, a heel spur at baseline had no significant effect on symptom duration (Hansen and colleagues, 2018). The fascia overload is the problem, not the spur.',
    },
    {
      q: 'When should I see a doctor about heel pain?',
      a: 'See a clinician if pain followed an injury, if you cannot put weight on the foot, if both heels hurt and other joints are stiff, if there is numbness or tingling, if the heel is red or warm, if it wakes you at night, or if [pain is not improving after several months](/plantar-fasciitis-not-getting-better/) of stretching and calf work.',
    },
  ],
  redFlags: {
    h2: 'See a clinician first if',
    bullets: [
      'the pain followed an injury or a fall',
      'you cannot put weight on the foot, or you are limping',
      'it comes with numbness, tingling, burning, swelling or warmth',
      'the heel is red, or you have a fever or feel unwell',
      'it wakes you at night or is present at rest',
      'squeezing the sides of the heel reproduces the pain',
      'both heels hurt and other joints are swollen or stiff',
      'it has not improved after several weeks of exercise and a lighter load',
      'you have diabetes, reduced feeling in your feet or poor circulation',
    ],
  },
  program: {
    h2: 'Doing it as a plan',
    text: 'You do not need to figure out which exercises to do, in what order, or when to progress. [Walkito](/program/) builds a plan one week at a time around one goal. For plantar fasciitis, the first goal is a better morning: pain at or under 1 out of 10 for 14 days in a row.',
    more: [
      'You pick 3, 5 or 7 days a week and sessions of 3, 5 or 10 minutes. Every 14 days a short test checks calf endurance, arch hold and balance. Once the morning goal is met, it moves to maintaining and the next goal takes its place.',
      'Walkito is an exercise program. It does not diagnose and is not a substitute for a clinician.',
    ],
    cta: 'Start with a 3-minute session.',
  },
  crumb: 'Plantar fasciitis',
  campaign: 'hub-plantar-fasciitis',
};
