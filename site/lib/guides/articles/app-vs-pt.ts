import { CITE } from '@/lib/citations';
import type { Guide } from '../types';

/**
 * Comparison page (plan C.7 #2). Evidence and quotes:
 * walkito-seo/research/pages/app-vs-pt-evidence.md; search brief:
 * app-vs-pt-serp.md. Never claim an app equals physical therapy: no trial has
 * compared the two for plantar fasciitis.
 */
export const APP_VS_PT_EN: Guide = {
  lang: 'en',
  page: 'appVsPt',
  mainSource: CITE.guideline,
  published: '2026-10-11',
  updated: '2026-10-11',
  title: 'Exercise App vs Physical Therapy for Plantar Fasciitis',
  description:
    'Is an exercise app as good as physical therapy for plantar fasciitis? What the trials show, what a physical therapist adds, and when to go in person.',
  h1: 'Is an exercise app as good as physical therapy for plantar fasciitis?',
  lede:
    'Nobody knows yet: we found no trial comparing an exercise app with physical therapy for plantar fasciitis. What the trials do show is that home exercise did about as well as physical therapy in one trial and worse than supervised clinic care in another, and that hands-on treatment added to home exercise helps short-term pain. A sensible middle path is a clinician visit to confirm the diagnosis, then the home exercises, with or without an app.',
  intro: [
    'Walkito is an exercise app, so we have a stake in this question. That is why this page sticks to what the studies found, including the ones that favour physical therapy. If you have Hinge Health through work, see our summary of [Hinge Health reviews](/hinge-health-reviews/).',
  ],
  takeaways: [
    'We found no randomized trial comparing an exercise app with physical therapy for plantar fasciitis. The only study comparing a digital program with physiotherapy was observational, and its authors call the results provisional.',
    'Home exercise vs physical therapy is mixed: one 57-person trial found no difference over a year, while a 47-person trial found a supervised outpatient program did better.',
    'Hands-on treatments added to home exercise, such as dry needling, manual therapy, laser and taping, improved short-term pain or function in a 2026 review of 24 trials.',
    'A physical therapist can diagnose, rule out other causes and do hands-on care. An app can only guide the exercises, though the stretching and strengthening the 2023 guideline recommends are exercises you can do at home.',
    'See a clinician if the pain is severe, keeps getting worse, has not improved after about two weeks of home care, or comes with numbness or tingling.',
  ],
  toc: true,
  sections: [
    {
      h2: 'Exercise app vs physical therapy at a glance',
      table: {
        head: ['', 'Exercise app', 'Physical therapy'],
        rows: [
          ['Diagnosis', 'No; you need to know what it is first', 'Yes; checks for other causes of heel pain'],
          ['Exercises', 'Stretching and strengthening at home', 'Stretching and strengthening, tailored in person'],
          ['Hands-on care', 'None', 'Manual therapy, taping, dry needling, laser'],
          ['Form check', 'Video only (a few apps use the camera)', 'A clinician watches you'],
          ['Time', 'At home, when you choose', 'Appointments and travel'],
          ['Cost', 'Subscription, or free through some employers', 'Per visit; depends on your insurance'],
          ['Evidence for plantar fasciitis', 'No trial against physical therapy found', 'Several trials, with mixed results against home exercise'],
        ],
      },
    },
    {
      h2: 'What does the research say?',
      keyFact: 'In a randomized trial of 57 people with plantar fasciitis, home stretching and formal physical therapy had no notable differences in pain or function over a year (Kaiser and colleagues, 2022).',
      paragraphs: [
        'We found no trial of an app against physical therapy for plantar fasciitis, so the closest evidence is home exercise against physical therapy:',
        {
          list: [
            '**Home stretching did about as well.** In a randomized trial of 57 people, home stretching and formal physical therapy showed no notable differences in pain, function or quality of life at any point over a year.',
            '**Supervised care did better.** In a randomized trial of 47 people, a supervised outpatient program beat a home program on pain and function at 8 weeks and 6 months.',
            '**Adding physical therapy to podiatry care.** In a trial of 95 people, adding physical therapy made no difference on the main measure at 6 months, though some secondary measures favoured it.',
          ],
        },
        'The only study of a digital program against hospital physiotherapy for plantar fasciitis followed 587 people in China. Home digital exercise was not worse for first-step pain at 3 months and cost less. But it was not randomized, only about 6% of screened patients were eligible, and its authors call the findings provisional until a randomized trial confirms them.',
        'Across muscle and joint problems in general, a review of 37 trials found remote rehabilitation helped compared with other controls, but the advantage disappeared when it was compared with face-to-face rehabilitation. It was cheaper per person.',
      ],
      cites: [CITE.kaiserHomeStretch, CITE.cilOutpatient, CITE.mcclintonPodiatryPT, CITE.xuDigitalPT, CITE.molinaTelerehab],
    },
    {
      h2: 'What does a physical therapist do that an app can\u2019t?',
      keyFact: 'Adding dry needling, low-level laser or manual therapy to a home exercise program gave clinically significant short-term pain relief in a review of 24 trials (Li and colleagues, 2026).',
      paragraphs: [
        'Three things an app cannot do:',
        {
          list: [
            '**Diagnose.** Heel pain is not always plantar fasciitis. A stress fracture, a trapped nerve or an Achilles problem can feel similar and need different care.',
            '**Hands-on treatment.** The 2023 guideline grades manual therapy and taping A, and dry needling and laser B. All need a clinician. In a 2026 review of 24 trials, adding dry needling, laser or manual therapy to home exercise improved short-term pain, and dry needling and taping improved short-term function.',
            '**Watch you move.** A therapist can see how you walk, how far your ankle bends and whether you do an exercise right, and change the plan on the spot.',
          ],
        },
        'Not every add-on helps: a separate 84-person trial found that adding high-intensity laser or shockwave to home exercise gave no extra benefit over three months.',
      ],
      cites: [CITE.liHomeAddons, CITE.kosehasanogullariLaserESWT, CITE.guideline],
    },
    {
      h2: 'What can an exercise app do well?',
      paragraphs: [
        'The exercises themselves are the part of care you can do at home, and the 2023 guideline recommends them: stretching the plantar fascia and calf (grade A) and strengthening (grade B). A good app gives you those every week, with doses that grow over time.',
        'Apps may also help you keep going. In a 4-week trial of 80 people with muscle and joint problems, an app with remote support led to better home exercise adherence than paper handouts, though the authors call the clinical importance unclear. In a 2026 trial of 87 people with heel pain, an app-style home program and a paper handout gave similar first-step pain, with some other measures favouring the app.',
      ],
      cites: [CITE.guideline, CITE.lambertAppAdherence, CITE.shimICT],
    },
    {
      h2: 'Is physical therapy worth it for plantar fasciitis?',
      paragraphs: [
        'It can be, especially at the start or when home exercise is not working. There is no standard number of visits for plantar fasciitis; in one of the trials above, the supervised group came twice a week for 8 weeks. Copays add up, so it is worth asking your insurance what it covers.',
        'If you cannot get or afford regular visits, a clinician visit to confirm the diagnosis and check your exercises, then a home program, is a reasonable middle path. Bring your questions and ask the therapist to watch you do each exercise once.',
      ],
      cites: [CITE.cilOutpatient],
    },
    {
      h2: 'What should a good plantar fasciitis app include?',
      paragraphs: [
        'If you go the home route with an app, check that it has:',
        {
          list: [
            'A plantar fascia stretch and calf stretches with the knee straight and bent.',
            'Strengthening that gets harder over the weeks, such as the [towel heel raise](/exercises/towel-heel-raise/).',
            'Clear doses, and a way to make a bad day lighter.',
            'Advice on when to stop and see a clinician.',
            'No promise to end the pain. In our [check of 20 heel pain apps](/heel-pain-apps-study/), 9 of 19 promised to end the pain or claimed proven results.',
          ],
        },
        'Our [buyer\u2019s guide](/best-app-for-plantar-fasciitis/) compares the main apps, and [Walkito vs Hinge Health](/walkito-vs-hinge-health/) covers the option that includes a physical therapist.',
      ],
    },
    {
      h2: 'When should you see a physical therapist or doctor?',
      paragraphs: [
        'The [NHS advises](https://www.nhs.uk/conditions/plantar-fasciitis/) seeing a doctor if the pain is severe or stopping your normal activities, is getting worse or keeps coming back, has not improved after 2 weeks of home care, or comes with tingling or loss of feeling, and if you have diabetes. The red flags below add a few more reasons to get checked.',
      ],
    },
  ],
  faq: [
    {
      q: 'Do I need physical therapy for plantar fasciitis?',
      a: 'Not always. In one 57-person trial, home stretching did about as well as formal physical therapy over a year, but another trial found supervised clinic care better. A visit is worth it to confirm the diagnosis, and if home exercise is not helping.',
      cites: [CITE.kaiserHomeStretch, CITE.cilOutpatient],
    },
    {
      q: 'Can I do physical therapy for plantar fasciitis at home?',
      a: 'You can do the exercise part at home: plantar fascia and calf stretches and strengthening, which the 2023 guideline recommends. Diagnosis and hands-on care such as manual therapy, taping or dry needling need a clinician.',
      cites: [CITE.guideline],
    },
    {
      q: 'Is virtual physical therapy as good as in person?',
      a: 'For muscle and joint problems in general, a review of 37 trials found no clear advantage for remote rehabilitation over face-to-face care, and it was cheaper. We found no randomized trial of virtual physical therapy for plantar fasciitis specifically.',
      cites: [CITE.molinaTelerehab],
    },
    {
      q: 'How many physical therapy sessions do you need for plantar fasciitis?',
      a: 'There is no standard number. Trials vary; in one, the supervised group had sessions twice a week for 8 weeks. Your therapist will suggest a plan based on how you respond.',
      cites: [CITE.cilOutpatient],
    },
  ],
  redFlags: {
    h2: 'See a clinician first if',
    bullets: [
      'your heel pain followed an injury or a fall',
      'the pain is severe or stops you doing normal activities',
      'it has not improved after about two weeks of home care, or keeps getting worse',
      'the pain comes with numbness, tingling, swelling, redness or warmth',
      'pain wakes you at night or is there at rest',
      'you have diabetes, reduced feeling in your feet or poor circulation',
    ],
  },
  program: {
    h2: 'If you go the home route',
    text: '[Walkito](/program/) gives you the plantar fascia stretch, calf stretches with the knee straight and bent, and strength work that gets harder over time, such as the towel heel raise later in the plan, on 3, 5 or 7 days a week. It does not diagnose and has no hands-on care.',
    more: [
      'Each morning a one-tap check-in makes a bad day lighter, and a short test every 14 days, then every 28 after your first goal, shows whether your calves, arch and balance are changing.',
    ],
    cta: 'Try Walkito on iPhone or Android.',
  },
  crumb: 'App vs physical therapy',
  campaign: 'compare-app-vs-pt',
};
