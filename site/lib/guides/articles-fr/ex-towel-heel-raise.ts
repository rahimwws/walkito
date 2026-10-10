import { CITE } from '@/lib/citations';
import type { Guide } from '../types';

/*
 * Translated from `articles/ex-towel-heel-raise.ts` (2026-10-08), French
 * (France) with «vous». Figures, doses, grades and qualifiers are identical
 * to the English page.
 */

export const EX_TOWEL_HEEL_RAISE_FR: Guide = {
  lang: 'fr',
  page: 'exTowelHeelRaise',
  mainSource: CITE.rathleff,
  published: '2026-10-08',
  updated: '2026-10-08',
  title: 'Montée sur pointes avec serviette\u00A0: protocole Rathleff',
  description:
    'Montée sur pointes avec serviette du protocole de Rathleff\u00A0: séries, répétitions, tempo, la serviette sous les orteils, erreurs, versions faciles ou dures.',
  h1: 'Montée sur pointes avec serviette\u00A0: le protocole à charge lourde de Rathleff, étape par étape',
  lede:
    'La montée sur pointes avec serviette est une montée sur pointes sur une jambe, sur une marche, avec une serviette roulée sous les orteils. Elle vient d’un essai de 2015 sur 48\u00A0personnes atteintes de fasciite plantaire, où cet exercice a soulagé la douleur au talon plus vite que les étirements seuls sur trois mois. C’est la serviette qui la distingue d’une montée sur pointes classique\u00A0: elle fait travailler le fascia plantaire par le mécanisme de treuil.',
  takeaways: [
    'Dans un essai sur 48\u00A0personnes, les montées sur pointes avec serviette et charge avaient un score meilleur de 29\u00A0points au Foot Function Index que les étirements seuls à trois mois, même si les deux groupes s’étaient rejoints à douze mois (Rathleff et coll., 2015).',
    'La recommandation de 2023 sur la douleur au talon donne au renforcement musculaire la note B, un cran sous les étirements notés A, et recommande les deux (Koc et coll., 2023).',
    'La serviette sous les orteils les fait se relever, ce qui active le mécanisme de treuil\u00A0: le fascia plantaire partage alors la charge avec le mollet.',
    'Walkito commence à 3\u00A0séries de 12, chaque jambe, avec un tempo de 3\u00A0secondes pour monter, 2\u00A0secondes de maintien et 3\u00A0secondes pour descendre.',
  ],
  toc: false,
  sections: [
    {
      h2: 'Que fait travailler la montée sur pointes avec serviette\u00A0?',
      paragraphs: [
        'La montée sur pointes avec serviette fait travailler\u00A0:',
        {
          list: [
            'Le gastrocnémien et le soléaire (les deux muscles du mollet).',
            'Le tendon d’Achille.',
            'Le fascia plantaire.',
          ],
        },
        'En haut du mouvement, la serviette roulée relève les orteils, ce qui tire sur le fascia plantaire par le mécanisme de treuil. Sans la serviette, l’exercice entraîne surtout le mollet. Avec elle, **le fascia prend une partie de la charge.**',
        'C’est pourquoi l’essai de Rathleff a utilisé la serviette précisément pour la fasciite plantaire, plutôt qu’une montée sur pointes simple. Le but est de charger ensemble la chaîne mollet-tendon d’Achille-fascia. Si votre douleur est dans le tendon d’Achille plutôt que sous le pied, une [descente excentrique du talon](/fr/exercices/descentes-excentriques-talon/) sans serviette est un meilleur point de départ.',
      ],
      cites: [CITE.rathleff],
    },
    {
      h2: 'Comment faire la montée sur pointes avec serviette\u00A0?',
      paragraphs: [
        'Roulez une petite serviette en un cylindre à peu près de la largeur de votre poing. Posez-la au bord d’une marche. Tenez-vous sur un pied, les cinq orteils sur la serviette et l’avant du pied sur la marche. Tenez-vous à un mur ou à une rampe pour l’équilibre.',
        'Montez en trois secondes, en poussant par le gros orteil. Tenez deux secondes en haut. Redescendez en trois secondes, en laissant le talon descendre un peu sous le niveau de la marche. **Ce tempo lent fait partie du protocole.** Des répétitions rapides réduisent la charge sur le tendon et le fascia.',
        'Dans l’essai de Rathleff, les participants ajoutaient du poids avec un sac à dos une fois que le poids du corps seul ne suffisait plus à rendre la dernière répétition difficile. «\u00A012RM\u00A0» désigne la charge la plus lourde que vous puissiez soulever pour exactement 12\u00A0répétitions contrôlées.',
      ],
      exercises: [
        {
          name: 'Montées sur pointes avec serviette',
          evidence: {
            level: 'strong',
            why: 'L’exercice du seul essai randomisé sur les montées sur pointes dans la fasciite plantaire (Rathleff 2015). Note B dans la recommandation.',
          },
          dose: 'Walkito commence à 3 x 12, chaque jambe. Protocole de recherche\u00A0: 3 x 12RM, en progressant vers 5 x 8RM',
          how: 'Tenez-vous sur un pied sur une marche, une serviette roulée sous les orteils. Trois secondes pour monter, deux secondes de maintien, trois secondes pour descendre. Ajoutez du poids quand la dernière répétition n’est plus difficile.',
          often: 'Un jour sur deux dans l’essai. Walkito la place les jours de renforcement.',
          feel: 'Un travail dur dans le mollet et une traction sous la voûte',
          stop: 'La douleur atteint 6/10 ou plus',
          media: 'heel_raise_towel',
          caption: 'Montée sur pointes avec serviette\u00A0: trois secondes pour monter, maintien, trois secondes pour descendre',
          alt: 'Une personne sur une marche qui monte sur la pointe des pieds avec une serviette roulée sous le pied, le mollet et la voûte mis en évidence',
        },
      ],
      cites: [CITE.rathleff, CITE.guideline],
    },
    {
      h2: 'Séries, répétitions et progression de Rathleff',
      paragraphs: [
        'L’essai augmentait la charge sur environ trois mois. Le tempo restait le même du début à la fin\u00A0: trois secondes pour monter, deux secondes de maintien, trois secondes pour descendre.',
      ],
      table: {
        caption: 'Progression des montées sur pointes avec serviette de Rathleff 2015',
        head: ['Semaines', 'Séries x répétitions', 'Tempo', 'Fréquence'],
        rows: [
          ['1-2', '3 x 12RM', '3\u00A0s montée / 2\u00A0s maintien / 3\u00A0s descente', 'Un jour sur deux'],
          ['3-4', '4 x 10RM', '3\u00A0s montée / 2\u00A0s maintien / 3\u00A0s descente', 'Un jour sur deux'],
          ['À partir de 5', '5 x 8RM', '3\u00A0s montée / 2\u00A0s maintien / 3\u00A0s descente', 'Un jour sur deux'],
        ],
      },
      cites: [CITE.rathleff],
    },
    {
      h2: 'Quelles sont les erreurs fréquentes avec la montée sur pointes avec serviette\u00A0?',
      paragraphs: [
        '**Aller trop vite est l’erreur la plus fréquente.** Une descente en trois secondes garde le mollet sous tension assez longtemps pour construire de la force. Rebondir de haut en bas en fait un exercice cardio, pas un exercice de renforcement.',
        'Laisser glisser la serviette, si bien qu’un ou deux orteils seulement reposent dessus, réduit la charge sur le fascia. Les cinq orteils doivent être sur la serviette. Si elle glisse sans arrêt, pliez-la plus épaisse ou prenez une serviette à main plutôt qu’une serviette de bain.',
        'Commencer sur une jambe alors que les montées sur deux pieds sont encore difficiles mène à une mauvaise technique et à des compensations. Si une montée sur une jambe sur une marche est de trop pour l’instant, commencez par les [montées sur pointes sur deux pieds](/fr/exercices/montees-sur-pointes/) au sol, et progressez.',
      ],
    },
    {
      h2: 'Versions plus faciles et plus difficiles',
      paragraphs: [
        'Si la montée sur pointes avec serviette complète sur une marche est trop difficile, revenez à une étape plus facile de la progression du mollet\u00A0:',
        {
          list: [
            'Les [montées sur pointes assis](/fr/exercices/montees-sur-pointes/) sont la charge la plus faible.',
            'Les montées debout sur deux pieds viennent ensuite.',
            'Puis le maintien sur pointes en haut.',
            'Puis la montée sur une jambe avec serviette sur une marche.',
          ],
        },
        'Chaque étape doit vous paraître gérable deux séances de suite avant de passer à la suivante.',
        'Si le poids du corps sur une jambe est trop facile, ajoutez de la charge. L’essai de Rathleff utilisait un sac à dos rempli de livres ou de bouteilles d’eau. En salle, vous avez accès à une machine à mollets ou à un gilet lesté. Le but est que la dernière répétition de chaque série soit vraiment la dernière que vous puissiez faire avec une bonne technique.',
      ],
    },
    {
      h2: 'Que dit la recherche sur les montées sur pointes avec serviette\u00A0?',
      keyFact: 'Dans un essai sur 48\u00A0personnes avec une fasciite plantaire confirmée, les montées sur pointes avec serviette avaient un meilleur score au Foot Function Index à trois mois, mais les résultats étaient proches de ceux des étirements seuls à douze mois (Rathleff et coll., 2015).',
      paragraphs: [
        'L’essai de Rathleff de 2015 est le seul essai randomisé à avoir testé la montée sur pointes avec serviette précisément pour la fasciite plantaire. Chez 48\u00A0personnes avec une fasciite plantaire confirmée à l’échographie, le groupe des montées sur pointes avait un score meilleur de 29\u00A0points au Foot Function Index à trois mois que le groupe des étirements seuls. À douze mois, les deux groupes s’étaient rejoints.',
        'La recommandation de 2023 sur la douleur au talon a examiné ces données et d’autres, et a donné au renforcement musculaire la note **B** et aux étirements la note **A**. Les deux sont recommandés. La recommandation ne met pas en avant la variante avec serviette, mais c’est le seul exercice de renforcement testé dans un essai qui lui est propre sur la fasciite plantaire.',
        'Rien dans les données ne dit que cet exercice doit remplacer les étirements. **L’approche la plus solide associe les deux\u00A0:** un [étirement du fascia plantaire](/fr/exercices/etirement-fascia-plantaire/) pour la raideur du matin et la montée avec charge pour construire la capacité. Pour la liste complète des exercices et la façon dont ils s’articulent, voir [exercices pour la fasciite plantaire](/fr/exercices-fasciite-plantaire/).',
      ],
      sourceNote:
        'Rathleff 2015\u00A0: différence de 29\u00A0points au FFI à 3\u00A0mois (IC à 95\u00A0% 6-52, p = 0,016). À 12\u00A0mois\u00A0: 22 contre 16, une différence non significative.',
      cites: [CITE.rathleff, CITE.guideline],
    },
    {
      h2: 'À qui s’adresse la montée sur pointes avec serviette\u00A0?',
      paragraphs: [
        'À toute personne atteinte de fasciite plantaire qui a assez de force dans le mollet pour faire une montée sur une jambe sur une marche. L’essai a inclus des adultes dont la douleur durait depuis au moins trois mois et qui supportaient la mise en charge.',
        'Si votre douleur est récente et que vous ne tenez pas confortablement sur une jambe, commencez plus bas dans l’échelle\u00A0: d’abord les montées assis ou sur deux pieds. Si votre douleur est dans le tendon d’Achille plutôt que dans le fascia plantaire, l’approche de mise en charge est proche, mais sans serviette et avec un protocole différent. Voir [descentes excentriques du talon](/fr/exercices/descentes-excentriques-talon/) ou [exercices pour la tendinite d’Achille](/fr/tendinite-achille-exercices/) pour cette voie.',
      ],
      cites: [CITE.rathleff],
    },
  ],
  faq: [
    {
      q: 'À quoi sert la serviette dans la montée sur pointes avec serviette\u00A0?',
      cites: [CITE.rathleff],
      a: 'La serviette roulée sous les cinq orteils les fait se relever en haut du mouvement. Cela active le mécanisme de treuil, un lien entre le gros orteil et le fascia plantaire. Sans la serviette, l’exercice charge surtout le mollet. Avec elle, le fascia partage la charge, et c’est pourquoi l’essai de Rathleff l’utilisait pour la fasciite plantaire.',
    },
    {
      q: 'Combien de montées sur pointes avec serviette faire\u00A0?',
      cites: [CITE.rathleff],
      a: 'L’essai de Rathleff commençait à 3\u00A0séries de 12\u00A0répétitions (avec la charge la plus lourde possible pour 12\u00A0répétitions), et passait à 5\u00A0séries de 8\u00A0répétitions plus lourdes vers la semaine 5, un jour sur deux. Walkito commence à 3\u00A0séries de 12 par jambe et monte d’un cran une fois que deux séances à ce niveau vous ont paru faciles.',
    },
    {
      q: 'Peut-on faire la montée sur pointes avec serviette au sol plutôt que sur une marche\u00A0?',
      a: 'Oui, mais vous perdez l’amplitude supplémentaire en bas, quand le talon descend sous la marche. Une version au sol charge quand même le mollet et le fascia. C’est un point de départ raisonnable si une marche vous paraît instable ou trop intense, et vous pourrez passer à la marche plus tard.',
    },
    {
      q: 'La montée sur pointes avec serviette doit-elle faire mal\u00A0?',
      cites: [CITE.guideline],
      a: 'Un travail dur dans le mollet et une traction sous la voûte sont normaux. Arrêtez pour aujourd’hui si la douleur atteint 6 sur 10 ou plus, ou si le lendemain matin est nettement pire que d’habitude. Une légère courbature qui se calme en une journée est normale, surtout les deux premières semaines.',
    },
    {
      q: 'La montée sur pointes avec serviette, c’est la même chose qu’une descente excentrique du talon\u00A0?',
      cites: [CITE.rathleff, CITE.alfredson],
      a: 'Non. La montée sur pointes avec serviette comprend la montée et la descente, et utilise une serviette sous les orteils pour charger le fascia plantaire. La descente excentrique du talon se concentre seulement sur la phase de descente, sans serviette, et a été conçue pour la tendinopathie d’Achille. Elles visent des problèmes différents, avec des protocoles différents.',
    },
  ],
  redFlags: {
    h2: 'Consultez d’abord un professionnel de santé si',
    bullets: [
      'la douleur a suivi un claquement soudain ou une blessure au lieu de s’installer progressivement',
      'vous ne pouvez pas poser le pied ou vous boitez',
      'le talon est rouge, chaud ou gonflé, ou vous avez de la fièvre',
      'la douleur vous réveille la nuit ou est présente quand vous n’êtes pas debout',
      'elle ne s’est pas améliorée après plusieurs semaines de mise en charge régulière',
    ],
  },
  program: {
    h2: 'En faire un plan',
    text: 'La montée sur pointes avec serviette est une étape d’une progression du mollet que Walkito intègre à un plan hebdomadaire. La progression va des montées sur pointes assis aux montées sur deux pieds, puis au maintien, à la montée avec serviette, aux descentes excentriques du talon et enfin aux sauts pogo. Chaque étape s’ouvre une fois que deux séances au niveau actuel vous ont paru faciles.',
    more: [
      'Vous choisissez 3, 5 ou 7\u00A0jours par semaine et des séances de 3, 5 ou 10\u00A0minutes. Tous les 14\u00A0jours, un court test vérifie l’endurance du mollet et l’équilibre. Walkito est un programme d’exercices, pas un outil de diagnostic.',
    ],
    cta: 'Commencez avec 3\u00A0minutes par jour.',
  },
  crumb: 'Montée sur pointes avec serviette',
  campaign: 'ex-towel-heel-raise-fr',
};
