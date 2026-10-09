import { CITE } from '@/lib/citations';
import type { Guide } from '../types';

/*
 * ── Combien de temps dure une fasciite plantaire (FR) ─────────────────
 *
 * Translated from `articles/pf-duration.ts`, written around the French
 * queries «combien de temps dure une fasciite plantaire», «fasciite plantaire
 * durée», «fasciite plantaire chronique». French (France) with «vous».
 * Figures, hazard ratios, grades and qualifiers are identical to the English
 */

export const PF_DURATION_FR: Guide = {
  lang: 'fr',
  page: 'pfDuration',
  mainSource: CITE.hansen,
  published: '2026-10-08',
  updated: '2026-10-08',
  title: 'Combien de temps dure une fasciite plantaire\u00A0?',
  description:
    'Combien de temps dure une fasciite plantaire, ce qui ralentit la récupération, que faire si ça ne s’améliore pas, et comment savoir si la vôtre va mieux.',
  h1: 'Combien de temps dure une fasciite plantaire\u00A0? Ce que disent vraiment les données',
  lede:
    'La réponse honnête\u00A0: ça dépend, et la plupart des sources sous-estiment à quel point cela varie. Une revue de 2020 indique qu’environ 90\u00A0% des personnes vont mieux avec des soins non chirurgicaux comme les étirements et les semelles. Un suivi plus long de 174\u00A0personnes donne une image plus nuancée\u00A0: environ la moitié n’avait plus de symptômes à cinq ans, et 46\u00A0% avaient encore un peu mal après dix ans en moyenne, même si la plupart d’entre elles ne signalaient que des symptômes légers.',
  intro: [
    'La page [exercices et étirements pour la fasciite plantaire](/fr/exercices-fasciite-plantaire/) présente les exercices, les preuves et les notes de la recommandation. Cette page répond à la question suivante\u00A0: combien de temps tout cela prend, qu’est-ce qui fait que cela prend plus longtemps, et quelles sont les options si ça ne s’améliore pas\u00A0?',
  ],
  takeaways: [
    'Une revue de 2020 indique qu’environ 90\u00A0% des fasciites plantaires répondent aux soins non chirurgicaux, souvent en quelques mois (Latt et coll., 2020).',
    'Une cohorte à plus long terme de 174\u00A0patients a montré que le risque d’avoir encore une fasciite plantaire était de 80,5\u00A0% à un an, 50,0\u00A0% à cinq ans et 45,6\u00A0% à dix ans après le début des symptômes (Hansen et coll., 2018).',
    'Dans cette cohorte, être une femme et avoir mal aux deux talons prédisaient nettement une récupération plus lente. L’IMC, l’âge, l’épaisseur du fascia et l’épine calcanéenne n’avaient pas d’effet significatif sur l’évolution (Hansen et coll., 2018).',
    'La recommandation de 2023 sur la douleur au talon donne aux étirements la note **A** et au renforcement musculaire un **B**. Les attelles de nuit pour une douleur du matin qui persiste reçoivent un **A**, et le laser de basse intensité ou le dry needling par un professionnel de santé un **B** (Koc et coll., 2023).',
    'La douleur du matin sur une échelle de 0 à 10, notée chaque jour, est la façon la plus pratique de voir si la récupération va dans le bon sens.',
  ],
  toc: true,
  sections: [
    {
      h2: 'Combien de temps dure en général une fasciite plantaire\u00A0?',
      keyFact: 'Dans une cohorte de 174\u00A0personnes, le risque d’avoir encore des symptômes de fasciite plantaire était de 80,5\u00A0% à un an, et descendait à 45,6\u00A0% à dix ans (Hansen et coll., 2018).',
      paragraphs: [
        'Il n’y a pas de chiffre unique. La récupération dépend de l’ancienneté de la douleur, de ce que vous faites, et de facteurs que vous ne contrôlez pas.',
        'Une revue de la littérature de 2020 indique que les approches non chirurgicales marchent pour environ 90\u00A0% des personnes atteintes de fasciite plantaire, en général en trois à six mois (Latt et coll., 2020).',
        'Une étude de cohorte de 2018 donne une vue à plus long terme. Hansen et coll. ont suivi 174\u00A0patients dont la fasciite plantaire avait été diagnostiquée à l’échographie, en moyenne 9,7\u00A0ans après le début des symptômes. Au suivi, 54\u00A0% n’avaient plus de symptômes et 46\u00A0% avaient encore un peu mal.',
        'L’analyse de Kaplan-Meier a montré que le risque d’avoir encore une fasciite plantaire était de 80,5\u00A0% à un an, 50,0\u00A0% à cinq ans et 45,6\u00A0% à dix ans. Chez ceux qui n’avaient plus de symptômes, la durée moyenne des symptômes était de 725\u00A0jours, soit environ deux ans (Hansen et coll., 2018).',
        'Ces chiffres semblent pires que le «\u00A0ça passe en quelques mois\u00A0» habituel. Deux choses expliquent l’écart. D’abord, la cohorte de Hansen était une population adressée à un spécialiste\u00A0: 93\u00A0% avaient reçu une infiltration de cortisone, ce qui laisse penser qu’il s’agissait de cas plus difficiles, pas de personnes dont la douleur s’était calmée avec des étirements et de meilleures chaussures.',
        'Ensuite, les patients qui avaient encore des symptômes au suivi ne signalaient en moyenne qu’une douleur légère, environ 2 à 3 sur 10 à la marche. «\u00A0Encore des symptômes à dix ans\u00A0» ne veut donc pas forcément dire «\u00A0incapable de marcher\u00A0». Pour beaucoup, cela voulait dire une gêne occasionnelle au lieu de la vive douleur des premiers pas du début.',
      ],
      sourceNote:
        'Hansen 2018\u00A0: risque de FP selon Kaplan-Meier\u00A0: 80,5\u00A0% (IC à 95\u00A0% 73,5-85,6) à 1\u00A0an, 50,0\u00A0% (42,4-57,1) à 5\u00A0ans, 45,6\u00A0% (37,9-53,0) à 10\u00A0ans, 44,0\u00A0% (35,9-51,8) à 15\u00A0ans. Durée moyenne des symptômes dans le groupe asymptomatique\u00A0: 725\u00A0jours (de 41 à 4018). Score NRS du groupe symptomatique au suivi\u00A0: 0,7 au repos, 1,8 à la marche, 2,8 à la course, 2,1 à la pression.',
      cites: [CITE.latt, CITE.hansen],
    },
    {
      h2: 'La fasciite plantaire part-elle toute seule\u00A0?',
      paragraphs: [
        'Parfois. Certaines personnes se réveillent un matin et la douleur a disparu, sans rien de particulier. Mais «\u00A0ça passe tout seul\u00A0» n’est pas une prédiction utile pour une personne donnée, car il n’y a aucun moyen de savoir à l’avance si vous faites partie de ce groupe.',
        'Ce que disent les données, c’est qu’agir, en s’étirant, en renforçant le mollet et en portant des chaussures qui soutiennent le pied, a tendance à accélérer l’amélioration. Dans l’essai de Rathleff, 48\u00A0personnes atteintes de fasciite plantaire ont été réparties en deux groupes\u00A0: l’un faisait des montées sur pointes avec charge et une serviette sous les orteils, l’autre étirait le fascia plantaire.',
        'Le groupe des montées sur pointes s’est amélioré plus vite à trois mois. À un an, les deux groupes étaient à peu près à égalité (Rathleff et coll., 2015). Les exercices n’ont donc pas donné une amélioration finale plus grande, mais ils l’ont accélérée. On ne sait pas si elle serait arrivée aussi vite sans aucune des deux approches.',
        'La recommandation de 2023 conseille les étirements (note A) et le renforcement (note B) comme premières choses à essayer, avec des conseils sur les chaussures. La recommandation ne dit pas «\u00A0attendez de voir\u00A0». Elle dit «\u00A0commencez ces exercices tout en surveillant\u00A0» (Koc et coll., 2023). Si la douleur est à l’arrière du talon plutôt que dessous, voir plutôt [tendinite d’Achille\u00A0: exercices](/fr/tendinite-achille-exercices/).',
      ],
      cites: [CITE.rathleff, CITE.guideline],
    },
    {
      h2: 'Qu’est-ce qui prédit une récupération plus lente\u00A0?',
      keyFact: 'Dans une cohorte de 174\u00A0personnes, les femmes devenaient asymptomatiques à un rythme environ deux fois plus lent que les hommes, et les personnes qui avaient mal aux deux talons à un rythme environ trois fois plus lent que celles qui avaient mal d’un seul côté (Hansen et coll., 2018).',
      paragraphs: [
        'La cohorte de Hansen 2018 a comparé plusieurs facteurs de départ à la durée des symptômes. Deux sont ressortis significatifs.',
        '**Être une femme.** Pour 100\u00A0hommes qui devenaient asymptomatiques par an, seules 49\u00A0femmes l’étaient (rapport de taux de risque 0,49, p inférieur à 0,01). La raison n’est pas établie. Les auteurs ont cité les différences hormonales, les habitudes de chaussures et des facteurs physiques comme pistes possibles, sans données pour trancher (Hansen et coll., 2018).',
        '**Douleur aux deux talons.** Les personnes qui avaient mal aux deux talons au départ devenaient asymptomatiques à un rythme annuel environ trois fois plus faible que celles qui avaient mal d’un seul côté (rapport de taux de risque 0,33, p inférieur à 0,01).',
        'Les auteurs ont noté qu’une douleur des deux côtés pourrait refléter une maladie inflammatoire non reconnue, car une douleur aux points d’attache des tendons sur l’os des deux côtés est une caractéristique de certaines formes de rhumatisme. Personne dans leur cohorte n’avait de diagnostic inflammatoire connu, mais aucun dépistage sérologique n’a été fait (Hansen et coll., 2018).',
        'L’IMC, l’âge, le tabagisme, un travail physiquement exigeant, l’épaisseur du fascia à l’échographie et la présence d’une épine calcanéenne n’avaient aucun effet significatif sur l’évolution dans cette étude. Ce dernier résultat surprend beaucoup de gens\u00A0: une épine calcanéenne ne rendait les symptômes ni plus longs ni plus courts (p = 0,88). Des études antérieures n’avaient pas non plus trouvé de lien entre épine calcanéenne et symptômes.',
        'Si les deux talons font mal et que la raideur du matin dure longtemps ou que d’autres articulations sont touchées, cela vaut la peine d’en parler à un professionnel de santé, même si les exercices aident. Voir [la douleur au talon au réveil](/fr/douleur-talon-au-reveil/) pour savoir quand une douleur des deux côtés est un signal d’alerte.',
      ],
      sourceNote:
        'Régression de Cox de Hansen 2018\u00A0: sexe féminin HRR 0,49 (IC à 95\u00A0% 0,30-0,80, p < 0,01), douleur bilatérale HRR 0,33 (0,15-0,72, p < 0,01). IMC (>25 contre ≤25)\u00A0: HRR 0,65 (0,40-1,06, p = 0,09). Âge (>40 contre ≤40)\u00A0: HRR 1,93 (0,99-3,73, p = 0,05). Épine calcanéenne\u00A0: HRR 0,96 (0,56-1,63, p = 0,88).',
      cites: [CITE.hansen],
    },
    {
      h2: 'Que veut dire fasciite plantaire «\u00A0chronique\u00A0»\u00A0?',
      paragraphs: [
        'Il n’y a pas de définition unique reconnue. Certaines sources parlent de fasciite plantaire chronique au-delà de trois mois, d’autres au-delà de six mois. La recommandation de 2023 ne fixe pas de limite. Une revue de 2020 définit la fasciite plantaire chronique comme «\u00A0la cause la plus fréquente de douleur chronique au talon chez l’adulte\u00A0», sans donner de seuil en mois (Latt et coll., 2020).',
        'Plus que l’étiquette, c’est le schéma qui compte. Une fasciite plantaire chronique veut en général dire que la vive douleur aux premiers pas du matin est devenue une douleur plus sourde et plus constante. Le tissu change aussi avec le temps\u00A0: le suffixe «\u00A0-ite\u00A0» évoque une inflammation, mais les cas chroniques sont en général décrits comme un processus dégénératif plutôt qu’inflammatoire. C’est pourquoi les infiltrations de cortisone, qui visent l’inflammation, aident souvent à court terme mais pas à long terme.',
        'Si vous avez une fasciite plantaire depuis plus de quelques mois et qu’elle ne s’améliore pas clairement, la section suivante présente ce que conseille la recommandation.',
      ],
      cites: [CITE.latt, CITE.guideline],
    },
    {
      h2: 'Quels repères réalistes\u00A0?',
      keyFact: 'Dans l’essai de Rathleff, le groupe des montées sur pointes avait un score au Foot Function Index meilleur (plus bas) de 29\u00A0points que le groupe des étirements à trois mois, une différence décrite comme importante et mesurable (Rathleff et coll., 2015).',
      paragraphs: [
        'Aucune étude ne donne un calendrier semaine par semaine valable pour tout le monde, et tout article qui le fait devine. Ce que les données offrent, ce sont quelques repères que la plupart des gens reconnaîtront.',
        '**Les premières semaines.** La douleur du matin peut ne pas beaucoup changer. L’essai de Rathleff a montré une différence nette entre les groupes à trois mois, pas à trois semaines. Au début, le principal changement est que les exercices deviennent plus faciles à faire et que le mollet paraît moins raide. Cela vaut la peine de le remarquer, même si le talon fait encore mal.',
        '**Un à trois mois.** Dans l’essai de Rathleff, le groupe des montées sur pointes avait un score au Foot Function Index meilleur de 29\u00A0points que le groupe des étirements seuls à trois mois. C’est une différence importante et mesurable. Beaucoup de gens commencent à remarquer que la douleur du matin est un peu plus basse plus souvent qu’autrement, ou que les premiers pas sont raides plutôt que vifs (Rathleff et coll., 2015).',
        '**Trois à six mois.** La fourchette «\u00A0souvent en trois à six mois\u00A0» de la revue de 2020 place ici le milieu de l’amélioration pour la plupart des personnes qui font les exercices conseillés et portent des chaussures qui soutiennent le pied (Latt et coll., 2020).',
        '**Six mois et plus.** La recommandation de 2023 suggère d’envisager d’autres options si plusieurs mois d’étirements, de renforcement et de changement de chaussures n’ont pas assez aidé. La cohorte de Hansen montre qu’une amélioration peut encore venir après un an et au-delà\u00A0: la courbe de survie a continué à baisser lentement jusqu’à la cinquième année, mais le rythme de l’amélioration ralentit. Si la douleur stagne ou augmente, et pas seulement lentement, voir la section suivante.',
        'Le chiffre utile n’est pas «\u00A0dans combien de semaines j’en aurai fini\u00A0» mais «\u00A0ma douleur du matin est-elle plus basse ce mois-ci que le mois dernier\u00A0?». Cette tendance est le vrai repère.',
      ],
      cites: [CITE.rathleff, CITE.latt, CITE.hansen],
    },
    {
      h2: 'Que faire si la fasciite plantaire ne s’améliore pas\u00A0?',
      paragraphs: [
        'Si plusieurs mois d’étirements quotidiens, de renforcement du mollet et de chaussures qui soutiennent le pied n’ont rien changé, la recommandation de 2023 sur la douleur au talon liste plusieurs autres options avec leur niveau de preuve. Elles sont décrites ci-dessous de façon neutre. Aucune ne s’accompagne d’une garantie, et toutes passent par un professionnel de santé.',
      ],
      table: {
        caption: 'Options et notes de la recommandation de 2023 pour une douleur sous le talon qui persiste',
        head: ['Option', 'Note', 'Ce que cela veut dire simplement'],
        rows: [
          ['Thérapie manuelle (mobilisation articulaire et des tissus mous)', '**A**', 'La meilleure note de la recommandation, par un professionnel de santé, pour les restrictions articulaires et de souplesse.'],
          ['Étirements du fascia plantaire et du mollet', '**A**', 'La meilleure note de la recommandation. Conseillés comme le cœur des soins conservateurs.'],
          ['Strapping du pied (rigide ou élastique)', '**A**', 'Meilleure note pour la douleur et la fonction à court terme, en plus d’autres soins.'],
          ['Attelles de nuit pendant 1 à 3\u00A0mois (douleur du matin qui persiste)', '**A**', 'Meilleure note pour les personnes dont les premiers pas restent douloureux. Voir [la douleur au talon au réveil](/fr/douleur-talon-au-reveil/).'],
          ['Exercices contre résistance et renforcement (par ex. montées sur pointes avec charge)', '**B**', 'Deuxième meilleure note. A accéléré l’amélioration dans un essai sur 48\u00A0personnes. Voir [montées sur pointes et fasciite plantaire](/fr/montees-sur-pointes-fasciite-plantaire/).'],
          ['Laser de basse intensité et dry needling (par un professionnel de santé)', '**B**', 'Deuxième meilleure note. Les deux se font en cabinet.'],
          ['Semelles orthopédiques seules pour soulager la douleur à court terme', '**B contre**', 'La recommandation **déconseille** les semelles orthopédiques comme approche isolée à court terme.'],
          ['Semelles orthopédiques associées à d’autres soins', '**C**', 'Preuves faibles. Peuvent aider dans le cadre d’un programme plus large.'],
          ['Ultrasons thérapeutiques ajoutés aux étirements', '**A contre**', 'La recommandation le **déconseille**. Les preuves ne soutiennent pas leur ajout aux étirements.'],
          ['Infiltration de corticoïdes', 'Non notée dans la recommandation de 2023 pour un usage à long terme', 'Peut soulager la douleur à court terme. La cohorte de Hansen n’a montré aucun bénéfice à long terme des infiltrations sur l’évolution, et la recommandation ne les conseille pas comme approche isolée.'],
          ['Ondes de choc', 'Discutées, preuves partagées', 'Certaines études rapportent un bénéfice dans les cas qui persistent. Les preuves ne sont pas assez solides pour une note claire dans la recommandation.'],
        ],
      },
      cites: [CITE.guideline, CITE.hansen, CITE.rathleff],
    },
    {
      h2: 'Quand consulter si la fasciite plantaire ne s’améliore pas\u00A0?',
      paragraphs: [
        'Le tableau ci-dessus est clair\u00A0: les étirements et le renforcement ont le soutien le plus large. Les options en cabinet (laser, dry needling, ondes de choc) ont quelques preuves, mais passent après l’exercice dans le classement de la recommandation. La chirurgie est réservée au petit pourcentage de cas qui ne répondent à rien d’autre, et la recommandation ne lui donne pas une place importante.',
        'Si vous faites les exercices régulièrement depuis plusieurs mois et que la douleur du matin ne s’améliore pas, c’est un bon moment pour consulter un professionnel de santé et parler des options ci-dessus. C’est aussi un bon moment pour vérifier que le diagnostic est le bon\u00A0: voir [la douleur au talon au réveil](/fr/douleur-talon-au-reveil/) pour les autres problèmes qui partagent le même schéma.',
        'Pour les coureurs, les changements de charge font souvent partie du tableau\u00A0: [douleur au talon en course à pied](/heel-pain-runners/) (en anglais) et [mal aux pieds après une journée debout](/fr/mal-aux-pieds-debout-toute-la-journee/) traitent de cet aspect.',
      ],
      cites: [CITE.guideline, CITE.hansen, CITE.rathleff],
    },
    {
      h2: 'En quoi le suivi de la douleur du matin montre-t-il les progrès\u00A0?',
      paragraphs: [
        'La douleur du matin est le signal quotidien le plus fiable de l’état du pied. Elle mesure la même chose (la raideur aux premiers pas), dans les mêmes conditions (juste au réveil, pied sans charge), à peu près à la même heure chaque jour. Elle donne donc une bien meilleure tendance que «\u00A0comment mon pied allait dans la journée\u00A0», qui varie avec l’activité, les chaussures et les surfaces.',
        'Une note quotidienne de 0 à 10 sur vos premiers pas, suivie sur plusieurs semaines, montre des tendances que vous ne remarqueriez pas autrement. Une note qui glisse de 5 à 3 en un mois est un vrai progrès, même si chaque matin fait encore un peu mal. Une note qui grimpe le lendemain d’une longue course ou d’une journée debout vous dit exactement quelle charge était de trop.',
        'Walkito vous demande votre douleur du matin avant chaque séance et s’en sert pour adapter les exercices du jour. Le premier objectif pour la douleur au talon est une douleur du matin à 1/10 ou moins pendant 14\u00A0jours de suite. Une fois cet objectif atteint, il passe en entretien et l’objectif suivant (en général la force du mollet ou l’équilibre) prend sa place. Ce passage de «\u00A0rendre les matins plus faciles\u00A0» à «\u00A0développer la capacité\u00A0» est le vrai repère.',
      ],
      cites: [CITE.guideline],
    },
  ],
  faq: [
    {
      q: 'Combien de temps met une fasciite plantaire à passer\u00A0?',
      cites: [CITE.latt, CITE.hansen],
      a: 'Une revue de 2020 indique qu’environ 90\u00A0% des personnes vont mieux avec des soins non chirurgicaux, souvent en quelques mois (Latt et coll., 2020). Une cohorte de 174\u00A0patients a montré que 50\u00A0% n’avaient plus de symptômes à cinq ans et que 46\u00A0% en avaient encore à dix ans, même si la plupart n’avaient alors qu’une douleur légère (Hansen et coll., 2018). La récupération se compte en mois, pas en semaines, et aucun programme ne peut promettre un délai précis.',
    },
    {
      q: 'La fasciite plantaire disparaît-elle un jour complètement\u00A0?',
      cites: [CITE.hansen],
      a: 'Pour beaucoup de gens, oui. Dans la cohorte de Hansen 2018, 54\u00A0% n’avaient plus du tout de symptômes après un suivi moyen de 9,7\u00A0ans. Chez ceux qui allaient mieux, la durée moyenne des symptômes était d’environ 725\u00A0jours. Certains avaient encore une légère gêne occasionnelle, mais notaient 0 sur toutes les échelles de douleur. La récupération était plus lente chez les femmes et chez les personnes qui avaient mal aux deux talons.',
    },
    {
      q: 'Pourquoi ma fasciite plantaire ne s’améliore pas\u00A0?',
      cites: [CITE.guideline],
      a: 'Plusieurs raisons possibles. Les exercices ne sont peut-être pas assez réguliers, les chaussures ne soutiennent peut-être pas le pied, ou la charge quotidienne sur le pied (pas, heures debout, kilométrage en course) dépasse peut-être ce que le tissu peut suivre. Il se peut aussi que ce ne soit pas une fasciite plantaire. Si les étirements et le renforcement n’ont pas aidé après plusieurs mois, la recommandation de 2023 conseille de parler avec un professionnel de santé d’options comme les attelles de nuit, le laser ou le dry needling.',
    },
    {
      q: 'Une épine calcanéenne fait-elle durer la fasciite plantaire plus longtemps\u00A0?',
      cites: [CITE.hansen],
      a: 'Pas d’après l’étude de Hansen 2018. Une épine calcanéenne au départ n’avait pas d’effet significatif sur la durée des symptômes (p = 0,88). Beaucoup de gens ont une épine calcanéenne sans douleur, et beaucoup de gens qui ont mal n’ont pas d’épine. L’épine est souvent là, mais ce n’est pas elle qui entretient les symptômes.',
    },
    {
      q: 'Marcher est-il bon pour la fasciite plantaire\u00A0?',
      cites: [CITE.guideline],
      a: 'Marcher modérément avec des chaussures qui soutiennent le pied ne pose en général pas de problème, et la recommandation ne dit pas d’arrêter de bouger. Ce qui compte, c’est de savoir si le lendemain matin est pire. Si la douleur aux premiers pas le lendemain d’une marche est nettement plus forte que d’habitude, cette marche était plus que ce que le pied pouvait encaisser. Réduisez la distance ou la durée au lieu de tout arrêter.',
    },
    {
      q: 'Quand consulter un médecin pour une fasciite plantaire qui ne s’améliore pas\u00A0?',
      a: 'Consultez un professionnel de santé si la douleur ne s’améliore pas clairement après plusieurs mois d’étirements quotidiens et de travail du mollet, si elle s’aggrave au lieu de stagner, si les deux talons font mal et que d’autres articulations sont raides ou gonflées, s’il y a des engourdissements ou des fourmillements, ou si la douleur vous réveille la nuit. Ces schémas peuvent signaler un autre problème ou demander des options au-delà de l’exercice seul.',
    },
    {
      q: 'La fasciite plantaire peut-elle revenir après être partie\u00A0?',
      cites: [CITE.hansen],
      a: 'Oui. Dans la cohorte de Hansen 2018, 32\u00A0% du groupe sans symptômes avaient eu au moins une rechute avant de devenir définitivement asymptomatiques. Une amélioration, puis une rechute, puis une nouvelle amélioration, c’est un schéma fréquent. Garder une dose d’entretien de travail du mollet et d’étirements une fois la douleur partie est une façon de réduire le risque qu’elle revienne.',
    },
    {
      q: 'Quels signes montrent que la fasciite plantaire va mieux\u00A0?',
      cites: [CITE.rathleff],
      a: 'Le signe le plus clair est une douleur du matin plus faible\u00A0: les premiers pas sont raides plutôt que vifs, et la douleur s’efface plus vite une fois que vous marchez. Beaucoup de gens remarquent ce changement avant que la douleur ait complètement disparu. Dans l’essai de Rathleff, les patients des montées sur pointes avaient des scores nettement meilleurs à trois mois, et c’est souvent à ce moment que ce changement apparaît.',
    },
    {
      q: 'Que ne faut-il pas faire si la fasciite plantaire ne s’améliore pas\u00A0?',
      cites: [CITE.guideline],
      a: 'N’arrêtez pas les exercices dès que la douleur du matin se calme, et ne courez pas après un raccourci unique au lieu des bases. Une douleur qui se calme avant que le fascia se soit adapté est une raison fréquente du retour des symptômes. Si la douleur stagne ou s’aggrave pendant plusieurs mois malgré les étirements, le renforcement et des chaussures qui soutiennent le pied, il faut consulter un professionnel de santé, pas attendre plus longtemps.',
    },
  ],
  redFlags: {
    h2: 'Consultez d’abord un professionnel de santé si',
    bullets: [
      'la douleur ne s’est pas améliorée après plusieurs mois d’étirements et de renforcement réguliers',
      'elle s’aggrave de semaine en semaine, au lieu de simplement stagner',
      'les deux talons font mal et la raideur du matin dure plus de 30\u00A0minutes, ou d’autres articulations sont raides ou gonflées',
      'la douleur a commencé après une blessure ou une chute',
      'vous ne pouvez pas poser le pied, ou vous boitez',
      'presser les côtés du talon reproduit la douleur',
      'elle s’accompagne d’engourdissements, de fourmillements ou de brûlures',
      'le talon est rouge, chaud au toucher, ou vous avez de la fièvre',
      'elle vous réveille la nuit ou est présente au repos',
      'vous avez du diabète, une sensibilité réduite des pieds ou une mauvaise circulation',
    ],
  },
  program: {
    h2: 'En faire un plan',
    text: 'La récupération prend du temps, et le plus dur est de savoir si ce temps sert à quelque chose. Walkito construit un plan une semaine à la fois autour d’un objectif. Pour la douleur au talon, le premier objectif est un meilleur matin\u00A0: une douleur à 1/10 ou moins pendant 14\u00A0jours de suite. Chaque matin, vous notez votre douleur, et tous les 14\u00A0jours un court test vérifie l’endurance du mollet, le maintien de la voûte et l’équilibre, pour que vous voyiez les chiffres bouger.',
    more: [
      'Vous choisissez 3, 5 ou 7\u00A0jours par semaine et des séances de 3, 5 ou 10\u00A0minutes. Une fois l’objectif du matin atteint, il passe en entretien et le suivant prend sa place. Il n’y a pas de date de fin fixe, car c’est le pied qui donne le rythme.',
      'Walkito est un programme d’exercices. Il ne pose pas de diagnostic et ne remplace pas un professionnel de santé. Si la douleur ne s’améliore pas après plusieurs mois, consultez un professionnel de santé pour vérifier le diagnostic et parler des options de cette page.',
    ],
    cta: 'Commencez avec 3\u00A0minutes par jour.',
  },
  crumb: 'Durée de la fasciite plantaire',
  campaign: 'guide-pf-duration-fr',
};
