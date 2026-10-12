import { CITE } from '@/lib/citations';
import type { Guide } from '../types';

/**
 * Comparison page (plan C.7 #4). Evidence: walkito-seo/research/pages/
 * yt-vs-app-evidence.md, independently re-checked in yt-vs-app-verified.md
 * (2026-10-11). Our own numbers come from the YouTube study page; keep them in
 * sync with lib/guides/articles/youtube-study.ts.
 */
export const YT_VS_APP_EN: Guide = {
  lang: 'en',
  page: 'ytVsApp',
  mainSource: CITE.guideline,
  published: '2026-10-11',
  updated: '2026-10-11',
  title: 'Plantar Fasciitis: Free YouTube Videos vs an App',
  description:
    'Are free YouTube routines enough for plantar fasciitis, or is an exercise app worth it? What our check of 50 top videos and the trials show.',
  h1: 'Free YouTube videos or an exercise app for plantar fasciitis?',
  lede:
    'Free videos can be enough if you pick a good one: we found no trial comparing YouTube routines with an exercise app for plantar fasciitis. The catch is picking. In our check of the 50 most-viewed plantar fasciitis videos, only 9 included a plantar fascia stretch, a calf stretch and strengthening, the three exercise types the 2023 guideline recommends. An app mainly adds structure; in trials, digital tools usually helped people do their exercises a bit more often, at least in the first weeks.',
  intro: [
    'Walkito is an exercise app, so we have a stake in this question. This page includes the findings that favour free videos too.',
  ],
  takeaways: [
    'We found no trial comparing free YouTube videos with an exercise app for plantar fasciitis.',
    'Of the 50 most-viewed plantar fasciitis videos we checked, 9 covered all three exercise types the guideline recommends, 15 had neither a plantar fascia stretch nor strengthening, and 9 said when to see a doctor.',
    'Published reviews of plantar fasciitis videos disagree: one rated 67% of 140 plantar fasciitis and heel spur videos poor or very poor for reliability, another found most of the 79 most-viewed videos useful.',
    'In a trial of people with heel pain, AI-made exercise videos and free paper leaflets gave the same adherence (73% vs 71%), but the video group did harder exercises more accurately.',
    'Heavy heel raises may speed early improvement, but how to dose them is not settled: in one trial, people who set their own load did as well as those on a fixed plan.',
  ],
  toc: true,
  sections: [
    {
      h2: 'Free videos vs an exercise app at a glance',
      table: {
        head: ['', 'Free YouTube video', 'Exercise app'],
        rows: [
          ['Cost', 'Free, often with ads', 'Free to a subscription'],
          ['All three exercise types', '9 of the top 50 videos', 'Rarely: 1 of 19 listings mention a fascia stretch'],
          ['Clear dose', '46 of the top 50 videos', 'Not checked'],
          ['Plan adapts to you', 'You decide', '10 of 19 apps say so'],
          ['Tracks your progress', 'No', 'Not checked'],
          ['Says when to see a doctor', '9 of the top 50 videos', '10 of 19 apps'],
          ['Selling something', '34 of the top 50 videos', 'The app itself'],
        ],
      },
      paragraphs: [
        'Video numbers are from [our study of the 50 most-viewed plantar fasciitis videos](/plantar-fasciitis-youtube-study/), October 2026. App numbers are from [our check of heel pain apps](/heel-pain-apps-study/) (19 apps, Walkito not counted), based on store listings and websites, not on using each app.',
      ],
    },
    {
      h2: 'Are YouTube videos for plantar fasciitis any good?',
      keyFact: 'Of the 50 most-viewed plantar fasciitis videos on YouTube, 9 included a plantar fascia stretch, a calf stretch and strengthening (7 on a strict count); together they had 21% of the views (Walkito study, October 2026).',
      paragraphs: [
        'Some are, many are not. In our check of the 50 most-viewed videos, with 75 million views between them:',
        {
          list: [
            '15 of 50 had neither a plantar fascia stretch nor any strengthening.',
            '9 of 50 said when to see a doctor, and none of the top 10 did.',
            '17 of 50 titles promised a fast or permanent result.',
            '34 of 50 sold something, such as a product or a paid program.',
            'On the plus side, 46 of 50 gave a clear dose, such as how many reps or how long to hold.',
          ],
        },
        'Published reviews disagree. One rated 67% of 140 plantar fasciitis and heel spur videos poor or very poor for reliability. Another, of the 79 most-viewed videos, found 30% high quality and most of them useful and in line with guidelines; the largest share of high-quality videos came from health professionals such as physiotherapists. A third, of 50 videos, found most were low quality and that videos by doctors scored higher.',
      ],
      cites: [CITE.yuceYoutube, CITE.feyziogluYoutube, CITE.satilmisYoutube],
    },
    {
      h2: 'How do you know if a plantar fasciitis video is good?',
      paragraphs: [
        'Check for these before you follow a routine:',
        {
          list: [
            'A plantar fascia stretch, such as pulling your toes back.',
            'Calf stretches, ideally with the knee straight and bent.',
            'At least one strengthening exercise, such as a [heel raise with a towel under the toes](/exercises/towel-heel-raise/).',
            'A clear dose: how many reps or seconds, and how often.',
            'Advice on when to see a doctor.',
            'A named clinician, such as a physical therapist or doctor.',
            'No promise of a fast or permanent result, and no hard sell.',
          ],
        },
        'Stretching is graded A and strengthening B in the 2023 guideline, so a routine with only stretches leaves out part of what is recommended. [Our study page](/plantar-fasciitis-youtube-study/) lists which of the top 50 videos include all three.',
      ],
      cites: [CITE.guideline],
    },
    {
      h2: 'What does an app add over free videos?',
      keyFact: 'In a review of 10 trials, 7 found that adding a digital tool improved home exercise adherence; the 3 that found no difference followed people for longer, so the benefit may be short term (Lang and colleagues, 2022).',
      paragraphs: [
        'Mainly structure: a set plan, reminders and a record of what you did. The evidence that this matters is real but modest:',
        {
          list: [
            '**Heel pain, app vs handout.** In a trial of 87 people with plantar fasciitis or Achilles pain, an app-based program and a paper handout gave similar first-step pain; foot function scores favoured the app at 4 and 24 weeks.',
            '**Heel pain, video vs leaflet.** In a trial of 103 people with plantar fasciitis or Achilles pain, AI-made videos and free AAOS leaflets gave the same adherence (73% vs 71%), but the video group did the harder exercises, such as towel curls, more accurately.',
            '**Muscle and joint pain.** An app with remote support improved adherence over paper handouts in a 4-week trial of 80 people, and a web-based program gave a small improvement at 3 weeks in a trial of 305 people.',
          ],
        },
        'Exercise videos alone may not be what helps. A Cochrane review found that 5 of 6 trials of different ways of delivering exercise, such as supervised sessions, refresher sessions or audio and video tapes to take home, improved adherence. But a later review in adults 45 and older with back pain or hip or knee arthritis found audio or video cues did not improve adherence, while booster sessions with a physiotherapist did for people with arthritis.',
      ],
      cites: [CITE.langDigitalAdherence, CITE.shimICT, CITE.ulgenAIVideo, CITE.lambertAppAdherence, CITE.bennellWebAdherence, CITE.jordanAdherenceCochrane, CITE.nicolsonAdherence],
    },
    {
      h2: 'Does a plan that gets harder matter?',
      paragraphs: [
        'Heavy heel raises may speed early improvement. In a trial of 48 people, heel raises that got heavier scored 29 points better than plantar fascia stretching on a foot function score at 3 months, with no difference at 1, 6 or 12 months.',
        'In a trial of 70 people, those who chose their own load (as heavy as they could manage) did as well as people following a fixed progression. And in a trial of 180 adults, adding heel raises to advice and a heel cup made no significant difference to pain at any point over a year. The 2023 guideline says more research is needed on the dose and timing of exercise.',
        'If you use a free routine, you can make it harder yourself as it gets easier. An app plans that for you, which helps if you would rather not.',
      ],
      cites: [CITE.rathleff, CITE.rielSelfDosed, CITE.rielHeelRaiseAdd, CITE.guideline],
    },
    {
      h2: 'Good free plantar fasciitis exercise resources',
      paragraphs: [
        'These are free and include strengthening, not just stretches:',
        {
          list: [
            '[AAOS Foot and Ankle Conditioning Program](https://orthoinfo.aaos.org/en/recovery/foot-and-ankle-conditioning-program), from the American Academy of Orthopaedic Surgeons.',
            '[Mayo Clinic foot stretches](https://www.mayoclinic.org/diseases-conditions/plantar-fasciitis/multimedia/foot-stretches-to-prevent-plantar-fasciitis/img-20008230), illustrated, with a towel exercise.',
            '[Royal Berkshire NHS leaflet](https://www.royalberkshire.nhs.uk/media/413p4ouw/advice-and-exercises-for-patients-with-plantar-fasciitis_jul25.pdf) (PDF).',
            '[United Lincolnshire NHS leaflet](https://www.ulh.nhs.uk/wp-content/uploads/2025/07/Plantar-fasciitis-Exercises.pdf) (PDF).',
            'Our own [plantar fasciitis exercises guide](/plantar-fasciitis-exercises/), with a video for each exercise.',
          ],
        },
      ],
    },
    {
      h2: 'When is an app worth it?',
      paragraphs: [
        'If a free routine with all three exercise types is going well, there is no need to pay for anything. An app may be worth it if:',
        {
          list: [
            'you keep stopping and want a set plan and reminders',
            'you want the exercises to get harder without planning it yourself',
            'you want to track whether things are changing',
          ],
        },
        'Either way, see a doctor or physical therapist if the pain has not improved after about two weeks of home care ([NHS](https://www.nhs.uk/conditions/heel-pain/)). For the costs side by side, see [what plantar fasciitis care costs](/plantar-fasciitis-treatment-cost/).',
      ],
    },
  ],
  faq: [
    {
      q: 'Can YouTube videos help plantar fasciitis?',
      a: 'They can, if the routine includes a plantar fascia stretch, calf stretches and strengthening, which the 2023 guideline recommends. In our check of the 50 most-viewed videos, only 9 included all three.',
      cites: [CITE.guideline],
    },
    {
      q: 'What is the best YouTube video for plantar fasciitis?',
      a: 'We do not rank videos, but a good one includes a plantar fascia stretch, calf stretches and strengthening, gives a clear dose, says when to see a doctor and is made by a named clinician. Our YouTube study lists which of the top 50 videos include all three exercise types.',
    },
    {
      q: 'Do I need an app for plantar fasciitis exercises?',
      a: 'No. The exercises need no equipment and good free guides exist. An app adds a set plan, reminders and progress tracking; in trials, digital tools usually helped people do their exercises a bit more often, at least in the first weeks.',
      cites: [CITE.langDigitalAdherence],
    },
    {
      q: 'Are AI-made or video instructions better than a paper handout?',
      a: 'For adherence, not clearly. In a trial of 103 people with heel pain, AI-made videos and paper leaflets gave the same adherence, but the video group did harder exercises more accurately.',
      cites: [CITE.ulgenAIVideo],
    },
  ],
  redFlags: {
    h2: 'See a clinician first if',
    bullets: [
      'your heel pain followed an injury or a fall',
      'the pain is severe or stops you doing normal activities',
      'it has not improved after about two weeks of home care, or keeps getting worse',
      'the pain comes with numbness, tingling or swelling',
      'you have diabetes or reduced feeling in your feet',
    ],
  },
  program: {
    h2: 'If you want a set plan',
    text: '[Walkito](/program/) gives you the plantar fascia stretch, calf stretches with the knee straight and bent, and strength work that gets harder over time, such as the towel heel raise later in the plan, on 3, 5 or 7 days a week. It is a weekly or yearly subscription; the price is shown in the store.',
    more: [
      'Each morning a one-tap check-in makes a bad day lighter, and a short test every 14 days, then every 28 after your first goal, shows whether your calves, arch and balance are changing.',
    ],
    cta: 'Try Walkito on iPhone or Android.',
  },
  crumb: 'YouTube vs app',
  campaign: 'compare-yt-vs-app',
};
