import { CITE } from '@/lib/citations';
import type { Guide } from '../types';

/*
 * Translated from `articles/ex-band-inversion.ts` (2026-10-08), French (France)
 * with «vous». Figures, doses, grades and qualifiers are identical to the
 * English page. Citation notes live in the English file.
 */

export const EX_BAND_INVERSION_FR: Guide = {
  lang: 'fr',
  page: 'exBandInversion',
  published: '2026-10-08',
  updated: '2026-10-08',
  title: 'Inversion de cheville avec élastique\u00A0: la technique',
  description:
    'Inversion de cheville avec un élastique pour renforcer le tibial postérieur\u00A0: technique, séries, erreurs fréquentes, ce que montre la recherche.',
  h1: 'Inversion de cheville avec élastique\u00A0: comment renforcer le tibial postérieur',
  lede:
    'L’inversion de cheville avec un élastique est un exercice qui renforce le tibial postérieur, le muscle profond du mollet dont le tendon passe sous la malléole interne et soutient la voûte par en dessous. Vous tournez la plante du pied vers l’intérieur contre la résistance d’un élastique. Une étude IRM de 2004 a montré qu’un mouvement proche, l’adduction du pied en chaîne fermée, produisait l’activation isolée la plus forte du tibial postérieur parmi trois exercices testés.',
  takeaways: [
    'Une étude IRM de 2004 sur 5\u00A0adultes en bonne santé a montré que l’adduction du pied (tourner le pied vers l’intérieur) augmentait de 50\u00A0% l’intensité du signal du tibial postérieur, avec moins de 5\u00A0% d’augmentation dans les muscles voisins, ce qui en fait l’exercice le plus sélectif pour ce muscle (Kulig et coll., 2004).',
    'Une revue systématique de 2018 a montré que des programmes d’exercices comprenant un renforcement du tibial postérieur amélioraient la douleur et la fonction chez les personnes atteintes de dysfonction du tendon tibial postérieur, même si la revue notait que la plupart des études étaient petites (Ross et coll., 2018).',
    'Le tibial postérieur est le principal stabilisateur dynamique de la voûte longitudinale interne en position debout et pendant la marche. Quand il s’affaiblit, la voûte peut s’affaisser avec le temps.',
    'Walkito n’ajoute cet exercice qu’après six séances de pied court debout, pour que les muscles intrinsèques de la voûte travaillent avant l’arrivée de l’élastique.',
  ],
  toc: false,
  sections: [
    {
      h2: 'Qu’est-ce que l’exercice d’inversion de cheville avec élastique\u00A0?',
      paragraphs: [
        'L’inversion de cheville avec élastique est un exercice assis où un élastique de résistance est passé autour de l’avant du pied et fixé à l’autre pied ou à un point fixe. Vous tournez la plante du pied vers l’intérieur (inversion) contre la traction de l’élastique. Le genou reste immobile. Seuls le pied et la cheville bougent.',
        'L’exercice cible le tibial postérieur, un muscle profond de l’arrière de la jambe dont le tendon contourne l’arrière de la malléole interne et s’étale le long du dessous du pied. C’est le muscle extrinsèque le plus important pour le soutien de la voûte pendant la marche. Quand il s’affaiblit ou que son tendon dégénère, la voûte s’aplatit et le pied s’affaisse vers l’intérieur. Ce problème s’appelle la dysfonction du tendon tibial postérieur, ou pied plat acquis de l’adulte.',
      ],
      cites: [CITE.ling],
    },
    {
      h2: 'Comment faire l’inversion de cheville avec un élastique\u00A0?',
      paragraphs: [
        'Asseyez-vous les jambes allongées devant vous, ou au bord d’une chaise. Passez un élastique de résistance autour de l’intérieur de l’avant du pied de la jambe qui travaille. Fixez l’autre extrémité sous le pied opposé ou autour d’un pied de table, pour que l’élastique tire le pied vers l’extérieur.',
        'Commencez avec le pied légèrement tourné vers l’extérieur (en éversion). Tournez la plante du pied vers l’intérieur contre l’élastique, en ramenant l’avant du pied vers l’axe du corps. Bougez le pied, pas toute la jambe. Le genou pointe droit devant pendant tout le mouvement. Revenez lentement et recommencez.',
        'Commencez avec un élastique léger. Le mouvement est petit. Si le genou tourne ou si la hanche pivote, l’élastique est trop fort ou la jambe compense.',
      ],
      exercises: [
        {
          name: 'Inversion avec élastique',
          evidence: { level: 'moderate', why: 'L’IRM confirme l’activation sélective du tibial postérieur avec l’adduction du pied (Kulig 2004). Des programmes d’exercices comprenant un travail du tibial postérieur ont amélioré les résultats dans la dysfonction du tendon selon une revue systématique de 2018.' },
          dose: 'Walkito commence à 3\u00A0séries de 15, chaque pied',
          how: 'Asseyez-vous avec un élastique passé autour de l’avant du pied, fixé pour qu’il tire le pied vers l’extérieur. Tournez la plante du pied vers l’intérieur contre l’élastique. C’est le pied qui bouge, pas la jambe. Le genou reste immobile.',
          often: 'Jours de renforcement, après six séances de pied court debout',
          feel: 'Un travail le long de l’intérieur du pied et de la cheville',
          stop: 'La douleur atteint 6/10',
          media: 'band_inversion',
          caption: 'Inversion avec élastique\u00A0: tournez la plante du pied vers l’intérieur contre l’élastique',
          alt: 'Une personne assise qui tourne la plante du pied vers l’intérieur contre un élastique passé autour de l’avant du pied',
        },
      ],
      cites: [CITE.kulig, CITE.posteriorTibialReview],
    },
    {
      h2: 'Quel muscle cet exercice cible-t-il\u00A0?',
      keyFact: 'Une étude IRM de 2004 sur 5\u00A0adultes en bonne santé a montré que tourner le pied vers l’intérieur augmentait le signal du tibial postérieur de 50\u00A0%, avec moins de 5\u00A0% de changement dans les muscles voisins (Kulig et coll., 2004).',
      paragraphs: [
        'La cible principale est le tibial postérieur. C’est le muscle le plus profond de l’arrière de la jambe, situé derrière le tibia et la fibula. Son tendon passe derrière la malléole interne (l’os interne de la cheville), puis s’étale en plusieurs expansions qui s’attachent à presque tous les os du milieu du pied.',
        'Une étude IRM de 2004 de Kulig et coll. a testé trois exercices chez 5\u00A0adultes en bonne santé\u00A0: l’adduction du pied (tourner le pied vers l’intérieur en glissant au sol), la montée sur pointes sur une jambe et la supination du pied en chaîne ouverte. L’adduction du pied a produit l’activation la plus forte du tibial postérieur (50\u00A0% d’augmentation du signal) avec la plus faible activation des muscles voisins (moins de 5\u00A0%). La montée sur pointes sur une jambe activait aussi le tibial postérieur, mais activait fortement le gastrocnémien (99\u00A0%) et le soléaire (39\u00A0%), ce qui en fait un exercice beaucoup moins sélectif pour le tibial postérieur.',
      ],
      cites: [CITE.kulig],
    },
    {
      h2: 'Pourquoi le tibial postérieur compte-t-il pour la voûte\u00A0?',
      paragraphs: [
        'Le tibial postérieur est le principal stabilisateur dynamique de la voûte longitudinale interne. À chaque pas, il se contracte pour tenir la voûte pendant la phase d’appui intermédiaire, quand tout votre poids repose sur un pied. Les muscles intrinsèques du pied (entraînés par l’[exercice du pied court](/fr/exercices/pied-court/) et l’exercice pour [écarter les orteils](/fr/exercices/ecarter-orteils/)) assurent un soutien local de la voûte, mais le tibial postérieur fournit la force extrinsèque, plus grande, venue d’en haut.',
        'Quand le tendon du tibial postérieur s’affaiblit ou dégénère, la voûte s’affaisse progressivement et le pied part en pronation. Une revue de 2017 de Ling et Lui l’a décrite comme la cause la plus fréquente du pied plat acquis de l’adulte. Une revue systématique de 2018 de Ross et coll. a montré que des programmes d’exercices comprenant un renforcement du tibial postérieur amélioraient la douleur et la fonction dans la dysfonction du tendon tibial postérieur à un stade précoce.',
        'C’est pourquoi les [programmes d’exercices pour pieds plats](/fr/exercices-pieds-plats/) comprennent à la fois des exercices des muscles intrinsèques du pied et un travail du tibial postérieur. Les muscles intrinsèques sont les stabilisateurs locaux. Le tibial postérieur est le principal stabilisateur extrinsèque. Les deux comptent.',
      ],
      cites: [CITE.ling, CITE.posteriorTibialReview],
    },
    {
      h2: 'Quelles sont les erreurs fréquentes avec l’inversion avec élastique\u00A0?',
      paragraphs: [
        'L’erreur la plus fréquente est de tourner toute la jambe au lieu du seul pied. Quand la hanche tourne vers l’intérieur pour orienter le pied, le tibial postérieur ne fait presque rien. Gardez le genou pointé droit devant. Seul le pied bouge, au niveau de la cheville.',
        'Une autre erreur est d’utiliser un élastique trop fort. Le tibial postérieur est un petit muscle profond. Un élastique lourd oblige les plus gros muscles à prendre le relais. Commencez avec un élastique léger et concentrez-vous sur la sensation de travail le long de la malléole interne et de la voûte.',
        'Laisser le pied revenir brusquement entre les répétitions est un troisième problème. Contrôlez le retour. La phase excentrique, le retour lent, charge le tendon d’une façon qui l’aide à s’adapter. Un retour lent vaut plus qu’une traction rapide.',
        'Enfin, certaines personnes placent l’élastique trop haut sur le pied, près de l’articulation de la cheville elle-même. L’élastique doit se trouver autour de l’avant du pied, près de la base des orteils, pour que le bras de levier agisse sous le bon angle.',
      ],
    },
    {
      h2: 'Que dit la recherche sur le renforcement du tibial postérieur\u00A0?',
      paragraphs: [
        'Les données les plus directes sur le mouvement viennent de l’étude IRM de 2004 de Kulig et coll. Elle a confirmé que l’adduction du pied active sélectivement le tibial postérieur, avec une activation minimale des muscles voisins. L’inversion contre un élastique est donc l’exercice de choix quand le but est de renforcer ce muscle en particulier.',
        'Pour les résultats cliniques, une revue systématique de 2018 de Ross et coll. a étudié les programmes d’exercices pour la dysfonction du tendon tibial postérieur. La plupart des études étaient petites, mais la revue a conclu que les programmes comprenant des exercices excentriques et concentriques du tibial postérieur, souvent associés à un renforcement du mollet et à des orthèses, amélioraient la douleur et la fonction.',
        'L’exercice n’a pas été testé seul dans un grand essai sur la fasciite plantaire. Son rôle dans le programme Walkito est de soutenir la voûte en renforçant le stabilisateur extrinsèque qui travaille avec les muscles intrinsèques. Pages liées\u00A0: [exercices pour pieds plats](/fr/exercices-pieds-plats/), [exercice du pied court](/fr/exercices/pied-court/), [abduction de hanche](/fr/exercices/abduction-hanche/).',
      ],
      cites: [CITE.kulig, CITE.posteriorTibialReview],
    },
  ],
  faq: [
    {
      q: 'Quelle force d’élastique utiliser pour l’inversion de cheville\u00A0?',
      a: 'Commencez avec un élastique de résistance léger. Le tibial postérieur est un petit muscle profond et n’a pas besoin d’une charge lourde pour se fatiguer. Vous devez sentir un travail le long de la malléole interne et de la voûte. Si le genou tourne ou si la hanche pivote pour terminer le mouvement, l’élastique est trop fort.',
    },
    {
      q: 'L’inversion de cheville avec élastique aide-t-elle en cas de pieds plats\u00A0?',
      cites: [CITE.posteriorTibialReview, CITE.ling],
      a: 'Le tibial postérieur est le principal stabilisateur dynamique de la voûte. Une revue systématique de 2018 a montré que des programmes d’exercices comprenant un renforcement du tibial postérieur amélioraient la douleur et la fonction chez les personnes atteintes de dysfonction du tendon tibial postérieur, la cause la plus fréquente du pied plat acquis de l’adulte (Ross 2018). Le renforcer fait partie de l’approche classique des pieds plats.',
    },
    {
      q: 'Quelle différence entre inversion et éversion de la cheville\u00A0?',
      a: 'L’inversion tourne la plante du pied vers l’intérieur et entraîne le tibial postérieur, du côté interne de la cheville. L’éversion tourne la plante vers l’extérieur et entraîne les muscles fibulaires, du côté externe. Les deux sont utilisées en rééducation de la cheville, mais pour le soutien de la voûte, c’est l’inversion qui compte.',
    },
    {
      q: 'Peut-on faire cet exercice sans élastique\u00A0?',
      a: 'Sans élastique, vous pouvez appuyer l’intérieur du pied contre un mur ou résister au mouvement avec la main. L’élastique est préférable, car il donne une résistance régulière sur toute l’amplitude du mouvement. N’importe quel élastique de résistance léger convient.',
    },
  ],
  redFlags: {
    h2: 'Consultez d’abord un professionnel de santé si',
    bullets: [
      'vous avez une douleur ou un gonflement le long de la malléole interne qui s’aggrave avec l’activité',
      'vous ne pouvez pas monter sur la pointe d’un pied, ce qui peut évoquer une faiblesse du tendon tibial postérieur',
      'la voûte s’est affaissée récemment et le pied est devenu nettement plus plat',
      'vous avez eu une blessure à la cheville et l’intérieur de la cheville reste sensible',
    ],
  },
  program: {
    h2: 'En faire un plan',
    text: 'Walkito ajoute l’inversion de cheville avec élastique après six séances de pied court debout. Cette progression fait en sorte que les muscles intrinsèques du pied soient actifs avant que le stabilisateur extrinsèque soit chargé. Les séances durent 3, 5 ou 10\u00A0minutes, et un test tous les 14\u00A0jours suit votre temps de maintien de la voûte et l’endurance du mollet.',
    cta: 'Commencez avec 3\u00A0minutes par jour.',
  },
  crumb: 'Inversion de cheville avec élastique (tibial postérieur)',
  campaign: 'ex-band-inversion-fr',
};
