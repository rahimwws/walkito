import { CITE } from '@/lib/citations';
import type { Guide } from '../types';

/*
 * No new citations. Uses existing key:
 * CITE.guideline
 *
 * Note: no RCT has tested foot rolling (ball or frozen bottle) as an isolated
 * intervention for plantar fasciitis. Evidence level is 'early'. The page says
 * this honestly.
 */

export const EX_FOOT_ROLL: Guide = {
  lang: 'en',
  page: 'exFootRoll',
  published: '2026-10-05',
  updated: '2026-10-05',
  title: 'Foot Roll for Plantar Fasciitis: Ball, Bottle & How',
  description:
    'How to do the foot roll for plantar fasciitis: ball or frozen bottle technique, how long to roll, and what it does and does not do.',
  h1: 'Foot roll for plantar fasciitis: ball, bottle and technique',
  lede:
    'Rolling the sole of the foot over a ball or bottle is one of the most common self-care steps for plantar fasciitis. It feels good, and clinicians recommend it as a way to settle the tissue between sessions. But no randomized trial has tested rolling on its own for plantar fasciitis. This page covers what rolling does, what it does not do, and where a frozen bottle fits in honestly.',
  takeaways: [
    'No randomized trial has tested foot rolling as an isolated intervention for plantar fasciitis. It is widely recommended as a comfort and recovery measure, not as a primary intervention.',
    'The 2023 heel pain guideline recommends stretching (grade A) and strength training (grade B) as the exercise pillars. Rolling is not graded separately.',
    'A frozen water bottle adds cold to the rolling. Cold can reduce discomfort after a flare, but no trial shows it speeds recovery for plantar fasciitis beyond what rolling alone does.',
    'Walkito uses the foot roll as a recovery exercise at the end of a session, for 2 minutes.',
  ],
  toc: false,
  sections: [
    {
      h2: 'How do you do a foot roll?',
      paragraphs: [
        'Sit in a chair with one foot on a ball. A tennis ball, lacrosse ball or massage ball all work. Place the ball under the arch and roll it slowly from the ball of the foot back toward the heel and forward again. Use firm pressure, not light. The ball should press into the tissue enough that you feel a deep, sustained pressure.',
        'Roll for about 2 minutes per foot. Keep the pressure steady and avoid spots that feel sharp. If a spot makes you wince, ease off or skip over it. The goal is a firm massage, not pain.',
      ],
      exercises: [
        {
          name: 'Foot roll',
          evidence: {
            level: 'early',
            why: 'Widely recommended but not tested as an isolated intervention in a plantar fasciitis trial.',
          },
          dose: 'Walkito starts at 2 minutes',
          how: 'Sit with a ball under the arch. Roll it slowly from the ball of the foot to the heel, with firm pressure. If you wince, ease off.',
          often: 'Recovery days, or after any session as a cooldown',
          feel: 'Firm, sustained pressure under the foot',
          stop: 'Pain reaches 6/10',
          media: 'foot_roll',
          caption: 'Foot roll: roll the sole slowly over a ball with firm pressure',
          alt: 'A seated figure rolling the sole of one foot over a ball, the sole of the foot highlighted',
        },
      ],
    },
    {
      h2: 'Does rolling a ball under your foot help plantar fasciitis?',
      paragraphs: [
        'Rolling is widely recommended by physical therapists and podiatrists as part of plantar fasciitis care. The idea is that it works as a self-massage: it applies pressure along the fascia, may increase blood flow locally and can reduce perceived tightness. Patients commonly report short-term relief after rolling.',
        'That said, no randomized trial has tested rolling as a standalone intervention for plantar fasciitis. It appears in protocols alongside stretching and strengthening, but it is never the variable being measured. The 2023 guideline does not grade it separately. Stretching and strength training carry the evidence.',
        'Rolling sits in the recovery category. It is useful after a long day on your feet, after a session of calf raises, or any time the sole feels tight and sore. It is not a replacement for the [plantar fascia stretch](/exercises/plantar-fascia-stretch/), [calf stretch](/exercises/calf-stretch/) or [calf raises](/exercises/calf-raises/) that carry the guideline grades.',
      ],
      cites: [CITE.guideline],
    },
    {
      h2: 'Should you use a frozen water bottle?',
      paragraphs: [
        'A frozen water bottle is one of the most popular home remedies for plantar fasciitis. The shape lets you roll the full length of the sole, and the cold numbs the area at the same time. Clinicians often recommend it, and it does feel good.',
        'Here is what the evidence actually says. Cold therapy (ice, frozen bottles) is a general pain management tool. It reduces discomfort by numbing nerve endings and may temporarily reduce swelling. But no randomized trial has compared a frozen bottle to a room-temperature bottle for plantar fasciitis. The benefit you feel is likely a mix of the rolling (pressure on the fascia) and the numbing (cold on the nerve endings). Whether the cold speeds recovery beyond what rolling alone does is an open question.',
        'If a frozen bottle gives you relief, use it. Just do not count on the cold as a replacement for stretching and strength work. And avoid icing for longer than 15 to 20 minutes at a time. Prolonged cold can irritate the skin.',
      ],
    },
    {
      h2: 'What kind of ball should you use?',
      paragraphs: [
        'A tennis ball is the most common starting point. It is soft enough to press into the arch without being sharp. A lacrosse ball is firmer and delivers more pressure. A golf ball is small and very hard, and can be too much for a sore heel.',
        'Start with whatever you have. If a tennis ball feels too soft after a few sessions, try a lacrosse ball. If you are wincing on any ball, it is too firm or you are pressing too hard. The exercise should feel like a deep massage, never like you are grinding into an injury.',
        'A frozen water bottle works in place of a ball and adds cold. A foam roller under the foot is gentler still. A specialized foot roller from a sports store does the same job. None of these is proven to work better than the others.',
      ],
    },
    {
      h2: 'Common mistakes with the foot roll',
      paragraphs: [
        'Pressing too hard. Harder is not better. If you push until the pain hits 6/10 or you are grimacing, you may be irritating the fascia rather than settling it. Back off to firm, steady pressure.',
        'Rolling too fast. Quick back-and-forth movement skips over the tissue. Roll slowly, about one full pass per second, so each spot gets sustained pressure.',
        'Using it as the only exercise. Rolling feels productive, and it is easy to do at a desk. But it does not strengthen the calf or stretch the fascia in the way the guideline-graded exercises do. Pair it with the [plantar fascia stretch](/exercises/plantar-fascia-stretch/) and [calf raises](/calf-raises-plantar-fasciitis/) for the full picture.',
      ],
      cites: [CITE.guideline],
    },
    {
      h2: 'When to roll and when to skip it',
      paragraphs: [
        'Roll after a long day on your feet, after a session of calf raises, or any time the sole feels tight. In Walkito, the foot roll appears on recovery days and at the end of sessions as a cooldown.',
        'Skip rolling if the heel is acutely swollen, red or warm. Those signs can point to something other than plantar fasciitis, and pressing into an inflamed area can make it worse. See a clinician first. For the full set of exercises the guideline recommends, see [plantar fasciitis exercises](/plantar-fasciitis-exercises/) or [feet that hurt from standing all day](/feet-hurt-standing-all-day/).',
      ],
    },
  ],
  faq: [
    {
      q: 'Does rolling a frozen water bottle under your foot help plantar fasciitis?',
      a: 'A frozen water bottle combines rolling (pressure on the fascia) and cold (numbing the nerve endings). Both can reduce discomfort in the short term. No trial has compared a frozen bottle to a room-temperature one for plantar fasciitis, so whether the cold adds a recovery benefit beyond the rolling itself is unknown. It is safe to try and many people find it soothing.',
    },
    {
      q: 'How long should you roll your foot on a ball?',
      a: 'About 2 minutes per foot is a reasonable starting dose. That is what Walkito uses. You can repeat it a few times a day if it gives relief. There is no specific research dose, because rolling has not been tested as a standalone intervention.',
    },
    {
      q: 'Is a tennis ball or a lacrosse ball better for plantar fasciitis?',
      a: 'Start with a tennis ball. It is softer and less likely to cause sharp pain on a sore heel. A lacrosse ball delivers firmer pressure and may feel better once the acute pain has settled. Neither is proven superior. Use whichever gives you firm pressure without making you wince.',
    },
    {
      q: 'Can rolling your foot make plantar fasciitis worse?',
      a: 'Yes, if you press too hard. Grinding aggressively into a sore fascia can increase inflammation rather than settle it. The pressure should feel like a deep massage, firm but not sharp. If pain hits 6/10 or the sole is more sore the next morning, ease up.',
    },
    {
      q: 'Is foot rolling a substitute for stretching?',
      cites: [CITE.guideline],
      a: 'No. The 2023 guideline grades stretching A and strength training B. Rolling is not graded at all. It works as a recovery step alongside the exercises that carry the evidence, like the plantar fascia stretch and calf raises. Rolling alone will not give you the same benefit.',
    },
  ],
  redFlags: {
    h2: 'Stop and see a clinician if',
    bullets: [
      'the sole is acutely swollen, red or warm',
      'rolling consistently makes the pain worse the next morning',
      'the pain is sharp and localized to one pinpoint spot that worsens with pressure',
      'you feel numbness, tingling or burning under the foot',
      'the pain followed an injury, a fall or a sudden pop in the arch',
      'it has not improved after several weeks despite the full exercise program',
    ],
  },
  program: {
    h2: 'Doing it as a plan',
    text: 'Walkito puts the foot roll at the end of sessions and on recovery days. The app handles the timing and the order so you do not have to remember which days to roll and which to stretch or strengthen.',
    more: [
      'You pick 3, 5 or 7 days a week and sessions of 3, 5 or 10 minutes. Every 14 days, a short test checks calf endurance, arch hold and balance. Walkito is an exercise program. It does not diagnose and is not a substitute for a clinician.',
    ],
    cta: 'Start with 3 minutes a day.',
  },
  crumb: 'Foot roll',
  campaign: 'ex-foot-roll',
};
