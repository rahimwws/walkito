import { CITE } from '@/lib/citations';
import type { Guide } from '../types';

/**
 * Original study 2 (plan C.6): 40 plantar fasciitis questions asked to ChatGPT,
 * Google AI Mode and Perplexity, 120 answers scored against the 2023 heel pain
 * guideline. Data: walkito-seo/research/ai-study/. Numbers are generated from
 * FINAL-scores.json by a script; do not edit them by hand.
 */
export const AI_STUDY_EN: Guide = {
  lang: 'en',
  page: 'aiStudy',
  mainSource: CITE.guideline,
  published: '2026-10-11',
  updated: '2026-10-11',
  title: '120 AI Answers on Plantar Fasciitis vs the 2023 Guideline',
  description:
    'We asked ChatGPT, Google AI Mode and Perplexity 40 plantar fasciitis questions: 80% of treatment answers cover stretching, 14% name a strength exercise.',
  h1: 'We asked ChatGPT, Google and Perplexity 40 questions about plantar fasciitis and checked the answers',
  lede:
    'AI answers about plantar fasciitis are mostly safe and mostly about stretching. Of 87 answers to treatment questions, 80% mention a calf stretch, but only 14% name a strengthening exercise such as a heel raise, the part the 2023 heel pain guideline grades B. Only 8 of all 120 answers cite that guideline, and the website the answers cite most is YouTube.',
  intro: [
    'This is our second study. In the [first one](/plantar-fasciitis-youtube-study/) we checked the 50 most-watched plantar fasciitis videos on YouTube, and only 9 taught all three home exercises the guideline supports. Here we asked the AI tools people now use instead of a search, with the same checklist.',
    'Walkito makes an exercise app for heel pain, and AI tools sometimes mention it, so we have an interest here. None of the 40 questions asks about apps, every score is backed by a quote from the answer, a second person scored a sample independently, and the full data is free to [download](/downloads/ai-answers-plantar-fasciitis-study-2026.csv).',
  ],
  takeaways: [
    'Stretching is covered well: 80% of answers to treatment questions mention a calf stretch and 69% a plantar fascia stretch.',
    'Strengthening is the gap: only 12 of 87 treatment answers (14%) name a strengthening exercise, and only 10 (11%) include a fascia stretch, a calf stretch and a named strengthening exercise together.',
    'Only 8 of 120 answers cite the 2023 clinical guideline for heel pain. Google AI Mode cited it in none of its 40.',
    'YouTube is the website the answers link to most (63 links), ahead of Mayo Clinic (51).',
    'The good news: only 2 of 120 answers clearly contradicted the guideline, none advised complete rest, and 61% said when to see a doctor.',
  ],
  toc: true,
  sections: [
    {
      h2: 'What does the 2023 guideline recommend?',
      keyFact: 'The 2023 heel pain guideline grades plantar fascia and calf stretching A, its top grade, and strength training B (Koc and colleagues, 2023).',
      paragraphs: [
        'The 2023 clinical practice guideline for heel pain grades each approach by the strength of its evidence. For exercise at home it supports three things: a plantar fascia stretch (grade A), a calf stretch (grade A) and strengthening (grade B). In a 48-person trial, loaded heel raises with a towel under the toes eased pain faster than stretching alone at three months. The guideline recommends against adding therapeutic ultrasound to stretching and against relying on insoles alone.',
      ],
      cites: [CITE.guideline, CITE.rathleff],
    },
    {
      h2: 'What did the AI answers include?',
      keyFact: 'Of 87 AI answers to plantar fasciitis treatment questions, 80% mentioned a calf stretch but only 14% named a strengthening exercise (Walkito study, 2026).',
      paragraphs: [
        'The first rows count only the 29 questions about treatment, such as "What exercises help plantar fasciitis?" or "Do insoles help?", because a question like "What causes plantar fasciitis?" does not call for exercises. Each tool answered each question once.',
      ],
      table: {
        caption: '120 AI answers to 40 plantar fasciitis questions, October 2026',
        head: ['What the answer includes', 'All tools', 'ChatGPT', 'Google AI Mode', 'Perplexity'],
        rows: [
          ['Any exercise or stretch', '82\u00A0of\u00A087 (94%)', '29', '25', '28'],
          ['A calf stretch (grade A)', '70\u00A0of\u00A087 (80%)', '28', '18', '24'],
          ['A plantar fascia stretch (grade A)', '60\u00A0of\u00A087 (69%)', '28', '9', '23'],
          ['Mentions strengthening at all', '28\u00A0of\u00A087 (32%)', '8', '11', '9'],
          ['**Names a strengthening exercise (grade B)**', '12\u00A0of\u00A087 (14%)', '4', '5', '3'],
          ['Fascia stretch, calf stretch and a named strengthening exercise', '10\u00A0of\u00A087 (11%)', '4', '4', '2'],
          ['When to see a doctor, or warning signs (all 40 questions)', '73\u00A0of\u00A0120 (61%)', '28', '16', '29'],
          ['Cites the 2023 guideline (all 40 questions)', '8\u00A0of\u00A0120 (7%)', '3', '0', '5'],
          ['Recommends specific products (all 40 questions)', '10\u00A0of\u00A0120 (8%)', '1', '8', '1'],
          ['Clearly contradicts the guideline (all 40 questions)', '2\u00A0of\u00A0120 (2%)', '0', '2', '0'],
        ],
      },
      after: [
        'Strengthening was usually missing or vague. Many answers said "stretching and strengthening" without naming an exercise, so we report both: any mention, and a named exercise such as a heel raise, a towel curl or the short foot exercise.',
      ],
      cites: [CITE.guideline],
    },
    {
      h2: 'Which websites do AI answers cite?',
      paragraphs: [
        'Google AI Mode and Perplexity linked sources in every answer. ChatGPT, on the free plan, linked none, apart from shoe shops in its answer about shoes. Across all answers, these were the most-linked websites:',
      ],
      table: {
        head: ['Website', 'Links'],
        rows: [
          ['youtube.com', '63'],
          ['mayoclinic.org', '51'],
          ['my.clevelandclinic.org', '33'],
          ['pmc.ncbi.nlm.nih.gov', '32'],
          ['nhs.uk', '18'],
          ['heelthatpain.com', '16'],
          ['orthoinfo.org', '13'],
          ['cls.health', '12'],
        ],
      },
      after: [
        'YouTube came first. That matters, because in our [YouTube study](/plantar-fasciitis-youtube-study/) only 9 of the 50 most-watched plantar fasciitis videos covered all three exercise types. Google AI Mode also named specific products, mostly shoes and insoles, in 8 of its 40 answers.',
      ],
    },
    {
      h2: 'What did the AI answers get wrong?',
      paragraphs: [
        'Very little was clearly wrong. Two answers, both from Google AI Mode, contradicted the guideline or the usual course of the condition:',
        {
          list: [
            'Asked whether ultrasound therapy helps, one answer said ultrasound combined with stretching significantly improves foot function. The guideline recommends against adding therapeutic ultrasound to stretching.',
            'Asked what happens if plantar fasciitis is left untreated, one answer said it rarely goes away on its own. Most cases improve over months, which another answer from the same tool said too.',
          ],
        },
        'The more common problem was what the answers left out: strengthening, the guideline itself, and, in Google AI Mode, when to see a doctor (16 of 40 answers, against 28 for ChatGPT and 29 for Perplexity).',
      ],
      cites: [CITE.guideline],
    },
    {
      h2: 'How to use AI answers for heel pain',
      paragraphs: [
        'AI answers are a reasonable first look, especially for stretching. Before you follow one, check it for the part most of them skip:',
        {
          list: [
            'Does it name a strengthening exercise, such as a [heel raise](/calf-raises-plantar-fasciitis/) that gets harder over the weeks?',
            'Does it give a dose: how long to hold, how many sets, how often?',
            'Does it say when to see a clinician? Pain after an injury, numbness, swelling or night pain needs one.',
            'Does it cite a guideline or a study, or only clinic and shop pages?',
          ],
        },
        'The full routine with doses is in our guide to [plantar fasciitis exercises](/plantar-fasciitis-exercises/).',
      ],
      cites: [CITE.guideline],
    },
    {
      h2: 'How we did this study',
      paragraphs: [
        '**Questions.** We wrote 40 questions people actually ask about plantar fasciitis, taken from Google\u2019s "People also ask" boxes, Google autocomplete and our own Search Console data, such as "What is the worst thing you can do for plantar fasciitis?" and "Do insoles help plantar fasciitis?". None mentions an app or a brand. The full list is in the data file.',
        '**Answers.** On October 11, 2026 we asked each question once in ChatGPT (free plan, temporary chat, no memory), Google AI Mode and Perplexity (free plan, default mode, incognito), from Arizona, United States. We saved every answer and every linked source.',
        '**Scoring.** Before collecting answers we wrote a fixed checklist based on the 2023 guideline. Every yes needed a short quote from the answer. A plantar fascia stretch counted if the answer named it or described pulling the toes back. A named strengthening exercise was checked with a fixed word list (heel raise, calf raise, towel curl, toe curl, short foot, marble pick-up, resistance band, eccentric heel drop). A second scorer scored 20 answers without seeing the first scores; the two agreed on 178 of 180 checks (99%).',
      ],
      bullets: [
        'AI answers change from one run to the next. We asked each question once, so read the numbers per tool as a snapshot, not a ranking.',
        'Paid plans and other countries may give different answers.',
        'ChatGPT showed no source links on the free plan, so the website counts come from Google AI Mode and Perplexity, plus one ChatGPT answer.',
        'We only scored what the answer says, not whether the linked pages are good.',
      ],
      cites: [CITE.guideline],
    },
  ],
  faq: [
    {
      q: 'Can I trust ChatGPT about plantar fasciitis?',
      a: 'For stretching, mostly yes: in our test ChatGPT mentioned a calf stretch in 28 of 29 answers about treatment and made no clear errors. It rarely named a strengthening exercise, which the 2023 guideline grades B, and it did not link its sources on the free plan.',
      cites: [CITE.guideline],
    },
    {
      q: 'Which AI tool gave the best plantar fasciitis answers?',
      a: 'No tool was best at everything. ChatGPT and Perplexity said when to see a doctor more often than Google AI Mode, and Perplexity cited the 2023 guideline most often. All three rarely named a strengthening exercise. We asked each question once, so these are snapshots, not a ranking.',
    },
    {
      q: 'What do AI answers miss about plantar fasciitis?',
      a: 'Mostly strengthening. Only 14% of answers about treatment named a strengthening exercise such as a heel raise, and only 8 of 120 answers cited the 2023 clinical guideline.',
      cites: [CITE.guideline],
    },
    {
      q: 'Can I use this data?',
      a: 'Yes. The data file is free to download and reuse. Please cite it as: Walkito, 120 AI answers on plantar fasciitis vs the 2023 guideline, October 2026, walkito.site.',
    },
  ],
  redFlags: {
    h2: 'See a clinician first if',
    bullets: [
      'your heel pain followed an injury or a fall',
      'you cannot put weight on the foot or you are limping',
      'the pain comes with numbness, tingling, swelling, redness or warmth',
      'pain wakes you at night or is there at rest',
      'pain is getting worse week over week despite exercise',
      'you have diabetes, reduced feeling in your feet or poor circulation',
    ],
  },
  program: {
    h2: 'Stretching and strengthening, in one plan',
    text: '[Walkito](/program/) puts the plantar fascia stretch, both calf stretches and a heel raise that gets harder over time into one short daily plan, with a dose for each exercise.',
    more: [
      'Each morning a one-tap check-in makes a bad day lighter, and every 14 days a short test shows whether your calves, arch and balance are changing. Walkito is an exercise program, not a diagnosis or a substitute for a clinician.',
    ],
    cta: 'Try Walkito on iPhone or Android.',
  },
  crumb: 'AI answers study',
  campaign: 'study-ai-answers',
};
