/**
 * Home, French.
 *
 * Two exports, mirroring `../en/home.ts`: the phrases numbers arrive in, and
 * the sentences themselves as ordered segments.
 *
 * `tu` throughout. Where a word could go two ways ("étage" for a flight of
 * stairs), the one Apple's Santé app itself uses in French wins, so the figure
 * matches what the user can go and check.
 *
 * **Segments follow French word order, not English's.** Where English splits a
 * clause across two frames, French may join them, and where English leaves a
 * lowercase word after a full stop inside one variant, French writes the
 * capital it needs. Variant counts match English in every state.
 *
 * The `many` plural form is left out everywhere: in French it is the
 * whole-millions form, and no count in this app reaches a million. `one`
 * covers 0 and 1.
 *
 * **Register:** a coach. The health lines compare the person to themselves and
 * never to a norm — "au-dessus de ta moyenne", never "élevé", never "tu
 * boites", never "tu compenses". No adjective agrees with the user, because
 * the app does not know their gender: "sur une chaise", not "assis".
 */

import type { BriefVariants } from '@/shared/ui/daily-brief';

export const HOME_FR = {
  'home.greeting.morning': 'Bonjour',
  'home.greeting.afternoon': 'Bonjour',
  'home.greeting.evening': 'Bonsoir',

  // ── The kind of work a day is ────────────────────────────────────────────
  'home.workStrength': 'force du pied et du mollet',
  'home.workMobility': 'étirements',
  'home.workBalance': 'travail d’équilibre',
  'home.workRecovery': 'récupération douce',
  'home.fallbackMove': 'montées sur pointes',

  // ── Counted phrases ──────────────────────────────────────────────────────
  'home.minutes': { one: '{count} minute', other: '{count} minutes' },
  'home.moves': { one: '{count} exercice', other: '{count} exercices' },
  'home.tests': { one: '{count} test', other: '{count} tests' },
  'home.weeks': { one: '{count} semaine', other: '{count} semaines' },
  'home.points': { one: '{count} point', other: '{count} points' },
  'home.flights': { one: '{count} étage', other: '{count} étages' },
  'home.hoursOnFeet': { one: '{count} heure', other: '{count} heures' },
  'home.thresholdHours': { one: '{count} heure', other: '{count} heures' },
  'home.daysInARow': { one: '{count} jour d’affilée', other: '{count} jours d’affilée' },
  'home.dayNumber': 'jour {count}',
  'home.dayOfPlan': 'jour {day} sur {total}',
  'home.steps': { one: '{steps} pas', other: '{steps} pas' },

  // Avec la préposition : « vers la course », « vers le tennis ».
  'home.backTo.running': 'vers la course',
  'home.backTo.tennis': 'vers le tennis',
  'home.backTo.gym': 'vers la salle',
  'home.backTo.football': 'vers le foot',
  'home.backTo.basketball': 'vers le basket',
  'home.backTo.cycling': 'vers le vélo',
  'home.backTo.hiking': 'vers les sentiers',

  // ── Units ────────────────────────────────────────────────────────────────
  'home.km': '{value} km',
  'home.percent': '{value} %',
  'home.duration': '{hours} h {minutes} min',

  // ── Today's list ─────────────────────────────────────────────────────────
  'home.tasksTitle': 'Au programme aujourd’hui',
  'home.libraryTitle': 'Pour tout de suite',
  'home.allDoneTitle': 'Fini pour aujourd’hui',
  'home.allDoneBlurb': 'Rien d’autre à faire aujourd’hui.',
  'home.retestTask': 'Réévaluation',
  'home.retestTaskSub': 'Point d’étape · {tests}',
  'home.seeResults': 'Voir les résultats',
  'home.nothingScheduled': 'Rien de prévu aujourd’hui. Le repos compte aussi.',
  'home.markDone': 'Marquer comme fait',
  'home.markNotDone': 'Marquer comme non fait',
  'home.taskSubtitle': '{category} · {dose}',
  'home.taskA11y': '{title}. {subtitle}',
  'home.chipSeconds': '{count} s',
  'home.chipMinutes': '{count} min',

  // ── The check-in ─────────────────────────────────────────────────────────
  'home.itHurts': 'J’ai mal aujourd’hui',
  'home.noPain': 'Pas de douleur aujourd’hui',
  'home.logCheckIn': 'Faire le bilan du jour',
  'home.checkInAgain': 'Refaire le bilan',
  'home.checkInTitle': 'Bilan du jour',
  'home.checkInSub': 'Comment va le pied ?',
  'home.checkInSubMorning': 'À quel point tes premiers pas au lever ont-ils fait mal ce matin ?',
  'home.checkInSubDay': 'Comment va ton pied aujourd’hui ?',
  'home.somethingNew': 'Du nouveau ? (gonflement, engourdissement, claquement)',
  'safety.title': 'Du nouveau ?',
  'safety.sub': 'Touche tout ce qui s’applique en ce moment.',
  'safety.a1': 'Mon mollet est gonflé, chaud ou rouge d’un côté, ou j’ai du mal à respirer ou mal à la poitrine',
  'safety.a2': 'J’ai senti un claquement soudain à l’arrière de la cheville et je ne peux pas me mettre sur la pointe du pied de ce côté',
  'safety.a3': 'J’ai du diabète et mon pied est chaud, rouge, gonflé ou a une plaie ouverte',
  'safety.b1': 'Ça a commencé après une chute, une torsion ou un choc, et je ne peux pas mettre tout mon poids dessus',
  'safety.b2': 'Je peux montrer du doigt un point douloureux sur un os, ou serrer les côtés de mon talon fait mal',
  'safety.b3': 'Ça me réveille la nuit ou ça reste fort au repos',
  'safety.b4': 'J’ai de la fièvre ou je ne me sens pas bien',
  'safety.c1': 'Brûlure, fourmillements ou engourdissement dans le pied',
  'safety.c2': 'Les deux talons me font mal et d’autres articulations sont gonflées ou raides le matin',
  'safety.c3': 'Une voûte s’est affaissée d’elle-même à l’âge adulte',
  'safety.c4': 'J’ai du diabète ou moins de sensations dans les pieds',
  'safety.c5': 'J’ai eu une infiltration de corticoïdes dans le talon ou le tendon d’Achille ces 3 dernières semaines',
  'safety.common': 'Douleur ou démarche gênée après une longue journée ? C’est courant avec une douleur au talon - tu peux continuer.',
  'safety.none': 'Rien de tout ça',
  'safety.check': 'OK',
  'safety.resultA': 'Ne t’entraîne pas aujourd’hui. Il faut voir un médecin maintenant - appelle les secours ou va aux urgences.',
  'safety.resultB1': 'Fais vérifier ça bientôt. D’ici là, vas-y doucement.',
  'safety.resultB2': 'Ça vaut la peine d’en parler à un médecin quand tu peux.',
  'safety.resultNone': 'Rien ici ne demande un médecin pour le moment. Continue comme prévu.',
  'safety.close': 'Fermer',
  'home.save': 'Enregistrer',
  'home.saved': 'Enregistré',
  // Rien ici ne félicite un chiffre : accueillir un sept avec chaleur apprend
  // à arrêter de le noter honnêtement.
  'home.ackGood': 'Bien.',
  'home.ackLogged': 'Noté.',
  'home.ackLoggedShorter': 'Noté. La séance du jour est plus courte en conséquence.',

  // ── The leg map ──────────────────────────────────────────────────────────
  'home.whereItHurts': 'Où ça fait mal',
  'home.zonesEmpty': 'Touche là où ça fait mal - jusqu’à {count}',
  'home.zonesFull': 'Jusqu’à {count} à la fois - touche-en une pour la changer',
  'home.zonesPicked': '{zones} - ensuite {move}',
  'home.zoneJoin': ' · ',

  /** Names a person finds on their own leg, not labels from an anatomy chart. */
  'home.zone.calf': 'Mollet',
  'home.zone.soleus': 'Soléaire',
  'home.zone.tibia': 'Tibia',
  'home.zone.tibAnt': 'Avant du tibia',
  'home.zone.ankle': 'Cheville',
  'home.zone.achilles': 'Achille',
  'home.zone.heel': 'Talon',
  'home.zone.dorsum': 'Dessus du pied',
  'home.zone.arch': 'Voûte plantaire',
  'home.zone.ball': 'Avant-pied',
  'home.zone.toes': 'Orteils',
  'home.zone.innerAnkle': 'Intérieur de la cheville',

  // ── The pain scale ───────────────────────────────────────────────────────
  'home.painToday': 'Douleur du jour',
  'home.morePain': 'Plus de douleur',
  'home.lessPain': 'Moins de douleur',
  'home.painValueA11y': '{score} sur {max}, {band}',
  // Toujours par rapport à la plage habituelle de cette personne, jamais à une norme.
  'home.rangeAbove': 'Au-dessus de ta plage habituelle',
  'home.rangeBelow': 'En dessous de ta plage habituelle',
  'home.rangeWithin': 'Dans ta plage habituelle',
  'home.rangeAboveChip': 'Au-dessus',
  'home.rangeBelowChip': 'En dessous',
  'home.rangeWithinChip': 'Habituel',
  'home.usualRangeLegend': 'Habituel {low}-{high}',
  'home.usualRangeA11y': 'Plage habituelle, de {low} à {high}',

  /**
   * What each score means, as what the pain stops you doing. The person is
   * rating their own body, so none of these is a verdict: they describe.
   */
  'home.bandNothing': 'Rien',
  'home.bandNothingBlurb': 'Aucune douleur à signaler aujourd’hui.',
  'home.bandBarely': 'À peine',
  'home.bandBarelyBlurb': 'Tu l’oublierais si personne ne demandait.',
  'home.bandNoticeable': 'Perceptible',
  'home.bandNoticeableBlurb': 'Tu le sens, mais ça ne change rien à ce que tu fais.',
  'home.bandSore': 'Gênant',
  'home.bandSoreBlurb': 'Tu fais avec, sans même y penser.',
  'home.bandHurts': 'Ça fait mal',
  'home.bandHurtsBlurb': 'C’est lui qui décide pour toi maintenant.',
  'home.bandSevere': 'Intense',
  'home.bandSevereBlurb': 'Le problème, c’est de tenir debout, pas de courir.',
};

export const BRIEF_FR = {
  // ── La douleur, telle que la personne la note ────────────────────────────
  flare: [
    [
      { k: 'frame', text: 'aujourd’hui, c’est' },
      { k: 'metric', icon: 'rest', text: '{restMinutes}', tail: ',' },
      { k: 'frame', text: 'sur une chaise. C’est tout.' },
    ],
    [
      { k: 'frame', text: 'matin difficile. Aujourd’hui :' },
      { k: 'metric', icon: 'rest', text: '{restMinutes}', tail: '.' },
      { k: 'frame', text: 'Rien de plus.' },
    ],
    [
      { k: 'frame', text: 'on décharge aujourd’hui -' },
      { k: 'metric', icon: 'rest', text: '{restMinutes}', tail: ',' },
      { k: 'frame', text: 'sans appui sur les pieds.' },
    ],
  ],

  'pain-spike': [
    [
      { k: 'frame', text: 'tes matins ont pris' },
      { k: 'metric', icon: 'warn', text: '{jump}', tone: 'warn' },
      { k: 'frame', text: 'de plus que la semaine dernière. Aujourd’hui, on allège.' },
    ],
    [
      { k: 'frame', text: 'cette semaine compte' },
      { k: 'metric', icon: 'warn', text: '{jump}', tone: 'warn' },
      { k: 'frame', text: 'de plus que la précédente. Journée plus légère.' },
    ],
    [
      { k: 'frame', text: 'la douleur est' },
      { k: 'metric', icon: 'warn', text: 'au-dessus de ta moyenne', tail: '.', tone: 'warn' },
      { k: 'frame', text: 'On lève le pied aujourd’hui.' },
    ],
  ],

  // ── La structure du programme ────────────────────────────────────────────
  baseline: [
    [
      { k: 'frame', text: 'aujourd’hui, pas d’entraînement, mais' },
      { k: 'metric', icon: 'retest', text: '{tests}' },
      { k: 'frame', text: '- pour avoir une base de comparaison plus tard.' },
    ],
    [
      { k: 'frame', text: 'le premier jour, c’est' },
      { k: 'metric', icon: 'retest', text: '{tests}', tail: ',' },
      { k: 'frame', text: 'environ quatre minutes. C’est ton point de départ.' },
    ],
    [
      { k: 'frame', text: 'on commence par' },
      { k: 'metric', icon: 'retest', text: '{tests}', tail: '.' },
      { k: 'frame', text: 'Dans deux semaines, on verra ce qui a changé.' },
    ],
  ],

  retest: [
    [
      { k: 'frame', text: 'ça fait' },
      { k: 'metric', icon: 'retest', text: '{weeks}', tail: '.' },
      { k: 'frame', text: 'On regarde ce qui a bougé.' },
    ],
    [
      { k: 'frame', text: 'jour de point d’étape -' },
      { k: 'metric', icon: 'retest', text: '{tests}', tail: ',' },
      { k: 'value', text: '{testMinutes}', tail: '.' },
    ],
    [
      { k: 'frame', text: 'on mesure :' },
      { k: 'metric', icon: 'retest', text: '{testMinutes}', tail: ',' },
      { k: 'frame', text: 'et on saura où tu en es.' },
    ],
  ],

  'checkpoint-recap': [
    [
      { k: 'frame', text: 'une nouvelle semaine commence aujourd’hui. Objectif :' },
      { k: 'metric', icon: 'level', text: '{block}', tail: '.' },
    ],
    // La nuance de l'original reste : « la plupart » et « en général ».
    [
      { k: 'frame', text: 'nouvelle semaine aujourd’hui. La plupart des gens sentent leurs matins s’adoucir en' },
      { k: 'metric', icon: 'level', text: '4-6 semaines', tail: '.' },
      { k: 'frame', text: 'Le plus grand changement arrive en général vers 3 mois.' },
    ],
    [
      { k: 'frame', text: 'cette semaine travaille sur' },
      { k: 'metric', icon: 'level', text: '{block}', tail: '.' },
      { k: 'frame', text: 'Le plan est construit autour.' },
    ],
  ],

  // ── Le plan de la semaine ────────────────────────────────────────────────
  'goal-reached': [
    [
      { k: 'metric', icon: 'up', text: '{goalDone}' },
      { k: 'frame', text: ': fait. Ensuite :' },
      { k: 'metric', icon: 'level', text: '{nextGoal}', tail: '.' },
    ],
  ],
  'missed-yesterday': [
    [
      { k: 'frame', text: 'hier n’a pas pu se faire. On évite d’en sauter deux -' },
      { k: 'metric', icon: 'session', text: '2 minutes', tail: ' aujourd’hui ?' },
    ],
  ],
  'test-soon': [
    [
      { k: 'frame', text: 'plus que' },
      { k: 'metric', icon: 'retest', text: '{testIn}' },
      { k: 'frame', text: 'avant ton prochain test.' },
    ],
  ],
  'new-this-week': [
    [
      { k: 'frame', text: 'nouveau cette semaine :' },
      { k: 'metric', icon: 'session', text: '{newMove}', tail: '.' },
    ],
  ],

  'first-week': [
    [
      { k: 'metric', icon: 'streak', text: '{dayOfPlan}', tail: '.' },
      { k: 'frame', text: 'Aujourd’hui :' },
      { k: 'metric', icon: 'tasks', text: '{moves}' },
      { k: 'frame', text: 'de {work} -' },
      { k: 'value', text: '{minutes}', tail: '.' },
    ],
    [
      { k: 'frame', text: 'les débuts -' },
      { k: 'metric', icon: 'streak', text: '{planDay}', tail: ' :' },
      { k: 'value', text: '{minutes}' },
      { k: 'frame', text: 'de {work}. Court et souvent vaut mieux que long et rare.' },
    ],
    [
      { k: 'metric', icon: 'streak', text: '{planDay}', tail: '.' },
      {
        k: 'frame',
        text: 'Aujourd’hui : {work}. La première semaine, c’est venir, pas forcer.',
      },
    ],
  ],

  // ── La charge, d'après ce qui s'est passé ────────────────────────────────
  'big-run': [
    [
      { k: 'frame', text: 'hier, c’était ta' },
      { k: 'metric', icon: 'feet', text: 'plus longue sortie du mois', tail: ' -' },
      { k: 'value', text: '{distance}', tail: '.' },
      { k: 'frame', text: 'Aujourd’hui, c’est' },
      { k: 'metric', icon: 'rest', text: 'tranquille', tail: '.' },
    ],
    [
      { k: 'frame', text: 'c’était' },
      { k: 'metric', icon: 'feet', text: '{distance}', tail: ',' },
      { k: 'frame', text: 'plus que tout en quatre semaines. Aujourd’hui, on récupère.' },
    ],
    [
      { k: 'frame', text: 'hier, la plus longue sortie du mois. Aujourd’hui :' },
      { k: 'metric', icon: 'rest', text: 'récupération', tail: '.' },
    ],
  ],

  stairs: [
    [
      { k: 'metric', icon: 'level', text: '{flights}' },
      { k: 'frame', text: 'hier - plus que dans ta semaine habituelle. Une journée tranquille s’impose.' },
    ],
    [
      { k: 'frame', text: 'hier, tu as pris les' },
      { k: 'metric', icon: 'level', text: 'escaliers' },
      { k: 'frame', text: 'plus que d’habitude. Les escaliers tirent beaucoup sur la voûte.' },
    ],
    [
      { k: 'frame', text: 'hier, la journée a été chargée en' },
      { k: 'metric', icon: 'level', text: 'escaliers', tail: '.' },
      { k: 'frame', text: 'Aujourd’hui penche vers le plus facile.' },
    ],
  ],

  // Cinq segments là où l'anglais en a six : « the next morning was » /
  // « rough » ne forment qu'une seule proposition en français.
  'on-feet': [
    [
      { k: 'frame', text: 'tu en es à' },
      { k: 'metric', icon: 'feet', text: '{hours}' },
      { k: 'frame', text: 'debout. Les deux dernières fois que tu as dépassé' },
      { k: 'metric', icon: 'threshold', text: '{limit}', tail: ',', tone: 'warn' },
      { k: 'frame', text: 'le lendemain matin a été difficile.' },
    ],
    [
      { k: 'frame', text: 'ça fait' },
      { k: 'metric', icon: 'feet', text: '{hours}' },
      { k: 'frame', text: 'debout aujourd’hui. Au-delà de' },
      { k: 'metric', icon: 'threshold', text: '{limit}', tail: ',', tone: 'warn' },
      { k: 'frame', text: 'le lendemain matin en a déjà pâti.' },
    ],
    [
      { k: 'frame', text: 'déjà une longue journée -' },
      { k: 'metric', icon: 'feet', text: '{hours}', tail: '.' },
      { k: 'frame', text: 'Ça vaut le coup de t’asseoir dix minutes.' },
    ],
  ],

  // Une question, jamais une étape franchie.
  'steps-today': [
    [
      { k: 'frame', text: 'déjà' },
      { k: 'metric', icon: 'feet', text: '{stepsToday}' },
      { k: 'frame', text: 'aujourd’hui. Comment va le talon ?' },
    ],
    [
      { k: 'metric', icon: 'feet', text: '{stepsToday}' },
      { k: 'frame', text: 'jusqu’ici - c’est beaucoup. Si le talon tire, assieds-toi un moment.' },
    ],
    [
      { k: 'frame', text: 'tu en es à' },
      { k: 'metric', icon: 'feet', text: '{stepsToday}', tail: '.' },
      { k: 'frame', text: 'Étire ton pied ce soir - demain matin te dira merci.' },
    ],
    [
      { k: 'frame', text: 'une longue journée debout -' },
      { k: 'metric', icon: 'feet', text: '{stepsToday}', tail: '.' },
      { k: 'frame', text: 'Note comment va le talon pour que le plan le sache.' },
    ],
  ],

  // ── Récupération ─────────────────────────────────────────────────────────
  'poor-sleep': [
    [
      { k: 'frame', text: 'tu as dormi en moyenne' },
      { k: 'metric', icon: 'sleep', text: '{sleep}' },
      { k: 'frame', text: 'cette semaine. Les tendons se reconstruisent la nuit - aujourd’hui, c’est' },
      { k: 'metric', icon: 'rest', text: 'plus léger', tail: '.' },
    ],
    [
      { k: 'frame', text: 'des nuits courtes toute la semaine -' },
      { k: 'metric', icon: 'sleep', text: '{sleep}' },
      { k: 'frame', text: 'en moyenne. On enlève un peu aujourd’hui.' },
    ],
    [
      { k: 'frame', text: 'ton sommeil est' },
      { k: 'metric', icon: 'sleep', text: 'sous les sept heures', tail: '.' },
      { k: 'frame', text: 'Aujourd’hui est plus facile, exprès.' },
    ],
  ],

  'resting-hr': [
    [
      { k: 'frame', text: 'ton pouls au repos est' },
      { k: 'metric', icon: 'level', text: 'un peu plus haut', tail: '.' },
      { k: 'frame', text: 'Aujourd’hui penche vers la récupération.' },
    ],
    [
      { k: 'frame', text: 'le pouls au repos est' },
      { k: 'metric', icon: 'level', text: 'au-dessus de ton habitude', tail: '.' },
      { k: 'frame', text: 'On y va doucement.' },
    ],
    [
      { k: 'frame', text: 'ton corps rattrape encore son retard -' },
      { k: 'metric', icon: 'level', text: 'pouls au repos plus haut', tail: '.' },
      { k: 'frame', text: 'Plus léger aujourd’hui.' },
    ],
  ],

  // ── La marche ────────────────────────────────────────────────────────────
  'slower-walk': [
    [
      { k: 'frame', text: 'tu marches' },
      { k: 'metric', icon: 'gait', text: 'moins vite que d’habitude' },
      { k: 'frame', text: 'depuis le début de la semaine. Ça va souvent avec un pied qui tire.' },
    ],
    [
      { k: 'frame', text: 'ton rythme de marche est' },
      { k: 'metric', icon: 'gait', text: 'sous ta propre moyenne', tail: '.' },
      { k: 'frame', text: 'À remarquer, pas de quoi s’inquiéter.' },
    ],
    [
      { k: 'frame', text: 'des pas plus lents que d’habitude cette semaine.' },
      { k: 'metric', icon: 'gait', text: 'Rien d’alarmant' },
      { k: 'frame', text: '- mais on garde une journée tranquille.' },
    ],
  ],

  'gait-change': [
    [
      { k: 'frame', text: 'tes pas sont devenus' },
      { k: 'metric', icon: 'gait', text: 'inégaux', tone: 'warn' },
      { k: 'frame', text: '-' },
      { k: 'value', text: '{today}', tone: 'warn' },
      { k: 'frame', text: 'contre' },
      { k: 'value', text: '{usual}', tail: ' d’habitude.' },
    ],
    [
      { k: 'frame', text: 'moins réguliers que d’habitude cette semaine -' },
      { k: 'metric', icon: 'gait', text: '{today}', tone: 'warn' },
      { k: 'frame', text: 'contre' },
      { k: 'value', text: '{usual}', tail: ' habituellement.' },
    ],
    [
      { k: 'frame', text: 'quelque chose a changé dans ta façon de marcher.' },
      { k: 'metric', icon: 'gait', text: '{today}', tone: 'warn' },
      { k: 'frame', text: 'contre tes' },
      { k: 'value', text: '{usual}', tail: '.' },
      { k: 'frame', text: 'Ça arrive souvent quand quelque chose fait mal.' },
    ],
  ],

  // ── Fait, et le retour ───────────────────────────────────────────────────
  done: [
    [
      { k: 'frame', text: 'c’est fait pour aujourd’hui.' },
      { k: 'metric', icon: 'done', text: '{days}', tail: '.', tone: 'good' },
      { k: 'frame', text: 'À demain.' },
    ],
    [
      { k: 'frame', text: 'aujourd’hui, c’est réglé -' },
      { k: 'metric', icon: 'done', text: '{days}', tone: 'good' },
      { k: 'frame', text: 'et ça continue.' },
    ],
    [
      { k: 'frame', text: 'séance faite - c’est le' },
      { k: 'metric', icon: 'done', text: '{streakDay}' },
      { k: 'frame', text: 'de ta série en cours.' },
    ],
  ],

  returning: [
    [
      { k: 'frame', text: 'content de te revoir. Tu as' },
      { k: 'metric', icon: 'session', text: 'une courte séance' },
      { k: 'frame', text: 'pour reprendre en douceur.' },
    ],
    [
      { k: 'frame', text: 'ça fait plaisir de te voir. On commence' },
      { k: 'metric', icon: 'session', text: 'petit' },
      { k: 'frame', text: 'aujourd’hui.' },
    ],
    [
      { k: 'frame', text: 'te revoilà - on reprend là où tu en étais, juste' },
      { k: 'metric', icon: 'session', text: 'plus léger', tail: '.' },
    ],
  ],

  // ── Les bonnes nouvelles, seulement un matin calme ───────────────────────
  'pain-down': [
    [
      { k: 'frame', text: 'tes matins' },
      { k: 'metric', icon: 'up', text: 's’adoucissent', tone: 'good' },
      { k: 'frame', text: '-' },
      { k: 'value', text: '{drop}', tone: 'good' },
      { k: 'frame', text: 'de moins ce mois-ci.' },
    ],
    [
      { k: 'frame', text: 'ce mois-ci,' },
      { k: 'metric', icon: 'up', text: '{drop}', tone: 'good' },
      { k: 'frame', text: 'de moins. C’est un vrai changement, pas du bruit.' },
    ],
    [
      { k: 'frame', text: 'les deux dernières semaines ont été' },
      { k: 'metric', icon: 'up', text: 'plus calmes', tone: 'good' },
      { k: 'frame', text: 'que les deux d’avant.' },
    ],
  ],

  'walk-back': [
    [
      { k: 'frame', text: 'ton rythme de marche est' },
      { k: 'metric', icon: 'done', text: 'revenu à ton habitude', tail: '.', tone: 'good' },
      { k: 'frame', text: 'Bon signe.' },
    ],
    [
      { k: 'frame', text: 'le rythme est' },
      { k: 'metric', icon: 'done', text: 'revenu', tone: 'good' },
      { k: 'frame', text: 'là où il se situe d’habitude.' },
    ],
    [
      { k: 'frame', text: 'tu marches de nouveau à' },
      { k: 'metric', icon: 'done', text: 'ta vitesse habituelle', tail: '.', tone: 'good' },
    ],
  ],

  'gait-recovered': [
    [
      { k: 'frame', text: 'ta marche est' },
      { k: 'metric', icon: 'done', text: 'de nouveau régulière', tail: '.', tone: 'good' },
      { k: 'frame', text: 'Retour à' },
      { k: 'value', text: '{usual}', tail: '.' },
    ],
    [
      { k: 'frame', text: 'tes pas sont' },
      { k: 'metric', icon: 'done', text: 'de nouveau équilibrés', tone: 'good' },
      { k: 'frame', text: '- deux jours de suite.' },
    ],
    [
      { k: 'frame', text: 'ça s’est égalisé.' },
      { k: 'metric', icon: 'done', text: 'Retour à ton habitude', tail: '.', tone: 'good' },
    ],
  ],

  // ── Le vide, dit honnêtement ─────────────────────────────────────────────
  learning: [
    [
      { k: 'frame', text: 'j’apprends encore ta façon de marcher. Laisse-moi' },
      { k: 'metric', icon: 'window', text: 'quelques jours de plus' },
      { k: 'frame', text: 'avec ton téléphone en poche.' },
    ],
    [
      { k: 'frame', text: 'je me fais encore une idée de ton habitude -' },
      { k: 'metric', icon: 'window', text: 'quelques jours de plus' },
      { k: 'frame', text: 'devraient suffire.' },
    ],
    [
      { k: 'frame', text: 'pas encore assez d’historique.' },
      { k: 'metric', icon: 'window', text: 'Quelques jours de plus' },
      { k: 'frame', text: 'et je pourrai comparer.' },
    ],
  ],

  // ── Leur objectif ────────────────────────────────────────────────────────
  // Jamais une promesse de résultat : « le chemin du retour » est une
  // direction, pas l'assurance que le talon ira bien d'ici là.
  'goal-back': [
    [
      { k: 'frame', text: 'chaque séance est un pas de plus' },
      { k: 'metric', icon: 'session', text: '{backTo}', tail: '.' },
      { k: 'frame', text: 'Aujourd’hui :' },
      { k: 'value', text: '{minutes}', tail: '.' },
    ],
    [
      { k: 'frame', text: 'le retour' },
      { k: 'metric', icon: 'session', text: '{backTo}' },
      { k: 'frame', text: 'passe par des journées comme celle-ci. Aujourd’hui :' },
      { k: 'value', text: '{minutes}', tail: '.' },
    ],
    [
      { k: 'frame', text: 'aujourd’hui,' },
      { k: 'value', text: '{minutes}' },
      { k: 'frame', text: '- et un peu plus de chemin' },
      { k: 'metric', icon: 'session', text: '{backTo}', tail: '.' },
    ],
    [
      { k: 'frame', text: 'un peu chaque jour, c’est comme ça qu’on avance' },
      { k: 'metric', icon: 'session', text: '{backTo}', tail: '.' },
    ],
  ],

  'goal-consistent': [
    [
      { k: 'frame', text: 'déjà' },
      { k: 'metric', icon: 'streak', text: '{days}', tail: '.' },
      { k: 'frame', text: 'Continue comme ça.' },
    ],
    [
      { k: 'frame', text: 'tu voulais de la régularité - la voilà :' },
      { k: 'metric', icon: 'streak', text: '{days}', tail: '.' },
    ],
    [
      { k: 'metric', icon: 'streak', text: '{days}', tail: '.' },
      { k: 'frame', text: 'La séance du jour ne prend que' },
      { k: 'value', text: '{minutes}', tail: '.' },
    ],
  ],

  'goal-stronger': [
    [
      { k: 'frame', text: 'la force vient de la répétition. Aujourd’hui :' },
      { k: 'metric', icon: 'level', text: '{work}', tail: '.' },
    ],
    [
      { k: 'frame', text: 'aujourd’hui :' },
      { k: 'metric', icon: 'level', text: '{work}', tail: '.' },
      { k: 'frame', text: 'Plus c’est fréquent, plus on gagne en force.' },
    ],
    [
      { k: 'frame', text: 'gagner en force, c’est peu mais souvent. Aujourd’hui :' },
      { k: 'value', text: '{minutes}', tail: '.' },
    ],
  ],

  'goal-injuryfree': [
    [
      { k: 'frame', text: 'la meilleure protection contre les blessures, c’est un peu chaque jour. Aujourd’hui :' },
      { k: 'value', text: '{minutes}', tail: '.' },
    ],
    [
      { k: 'frame', text: 'un pied fort se blesse moins. Aujourd’hui, il a droit à' },
      { k: 'value', text: '{minutes}', tail: '.' },
    ],
    [
      { k: 'value', text: '{minutes}' },
      { k: 'frame', text: 'par jour suffisent pour garder une longueur d’avance sur les blessures.' },
    ],
  ],

  'no-data': [
    [
      { k: 'frame', text: 'je n’arrive pas à lire ta marche - garde ton téléphone dans une' },
      { k: 'metric', icon: 'pocket', text: 'poche', tail: ',' },
      { k: 'frame', text: 'pas dans un sac, et je la capterai.' },
    ],
    [
      { k: 'frame', text: 'aucune donnée de marche ne remonte. Il faut un téléphone en' },
      { k: 'metric', icon: 'pocket', text: 'poche' },
      { k: 'frame', text: 'sur un terrain plat.' },
    ],
    [
      { k: 'frame', text: 'rien à lire pour l’instant - les capteurs veulent le téléphone en' },
      { k: 'metric', icon: 'pocket', text: 'poche' },
      { k: 'frame', text: 'pendant que tu marches.' },
    ],
  ],

  // ── La plupart des jours ─────────────────────────────────────────────────
  'quiet-session': [
    [
      { k: 'frame', text: 'aujourd’hui :' },
      { k: 'metric', icon: 'session', text: '{move}' },
      { k: 'frame', text: '- l’exercice qui porte ce plan.' },
    ],
  ],

  'quiet-progress': [
    [
      { k: 'metric', icon: 'streak', text: '{dayOfPlan}', tail: '.' },
      { k: 'frame', text: 'Le plus dur, commencer, est derrière toi.' },
    ],
  ],

  'quiet-load-big': [
    [
      { k: 'frame', text: 'grosse journée debout hier -' },
      { k: 'metric', icon: 'feet', text: '{steps}', tail: '.' },
      { k: 'frame', text: 'Un contexte, pas un verdict.' },
    ],
  ],

  'quiet-load-light': [
    [
      { k: 'frame', text: 'une' },
      { k: 'metric', icon: 'feet', text: 'journée plus légère' },
      { k: 'frame', text: 'debout hier. Bon jour pour charger un peu.' },
    ],
  ],

  'quiet-shoes': [
    [
      { k: 'frame', text: 'une idée pour les chaussures : un' },
      { k: 'metric', icon: 'level', text: 'contrefort plus ferme' },
      { k: 'frame', text: 'et un peu plus de drop soulagent la voûte.' },
    ],
  ],

  'quiet-cadence': [
    [
      { k: 'frame', text: 'si tu cours aujourd’hui, garde ta cadence environ' },
      { k: 'metric', icon: 'up', text: '{cadence} au-dessus de ton habitude', tail: '.' },
      { k: 'frame', text: 'Des pas plus courts, moins de charge sur le talon.' },
    ],
  ],

  'quiet-horizon': [
    [
      { k: 'frame', text: 'l’essentiel du changement se voit' },
      { k: 'metric', icon: 'window', text: 'tôt', tail: '.' },
      { k: 'frame', text: 'Tu es en plein dedans.' },
    ],
  ],
} satisfies Record<string, BriefVariants>;
