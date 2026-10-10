import { CITE } from '@/lib/citations';
import type { Guide } from '../types';

/*
 * ── Maladie de Sever (FR) ─────────────────────────────────────────────
 *
 * Translated from `articles/severs.ts`, written around the French queries
 * «maladie de Sever», «apophysite calcanéenne», «douleur talon enfant».
 * French (France) with «vous». Figures, grades and qualifiers are identical
 * to the English page. No new citations.
 */

export const SEVERS_FR: Guide = {
  lang: 'fr',
  page: 'severs',
  mainSource: CITE.wiegerinck,
  published: '2026-10-08',
  updated: '2026-10-08',
  title: 'Maladie de Sever\u00A0: douleur au talon chez l’enfant',
  description:
    'Maladie de Sever\u00A0: douleur au talon de l’enfant de 8 à 15\u00A0ans. Talonnettes, étirements, gestion de la charge et quand consulter.',
  h1: 'Maladie de Sever\u00A0: ce que c’est, ce qui aide et quand consulter',
  lede:
    'La maladie de Sever, aussi appelée apophysite calcanéenne, est la cause la plus fréquente de douleur au talon chez l’enfant. Elle survient quand le cartilage de croissance à l’arrière de l’os du talon est irrité par la traction répétée du tendon d’Achille, en général pendant une poussée de croissance et un sport avec de la course ou des sauts. Ce n’est pas une maladie au sens habituel. Elle disparaît d’elle-même une fois le cartilage de croissance fermé.',
  intro: [
    'Cette page s’adresse aux parents. Elle explique ce qui se passe dans le talon, ce que dit la recherche sur les talonnettes, les étirements et la gestion de la charge, et quand la douleur demande un professionnel de santé plutôt que du repos.',
    'Walkito est une application d’exercices conçue pour les adultes souffrant du talon et de la voûte plantaire. Elle n’est pas conçue pour les enfants, et rien sur cette page ne recommande de l’utiliser avec un enfant. Si la douleur au talon de votre enfant ne s’améliore pas avec les mesures ci-dessous, un médecin du sport pédiatrique ou un podologue est la bonne prochaine étape.',
  ],
  takeaways: [
    'La maladie de Sever touche les enfants de 8 à 15\u00A0ans, le plus souvent pendant une poussée de croissance, et disparaît une fois le cartilage de croissance du calcanéum fermé, en général entre 12 et 17\u00A0ans (revue StatPearls, 2024).',
    'Dans un essai sur 101\u00A0enfants, l’attente surveillée, une talonnette et des exercices excentriques supervisés ont chacun nettement réduit la douleur au talon sur trois mois, sans différence entre les trois au dernier suivi (Wiegerinck et coll., 2016).',
    'Dans un essai croisé sur 51\u00A0garçons, une coque talonnière a réduit la douleur d’environ 80\u00A0% par rapport à une cale de talon, mesurée sur l’échelle Borg CR-10 (Perhamre et coll., 2011).',
    'Un essai factoriel de 12\u00A0mois sur 124\u00A0enfants a trouvé un avantage relatif des talonnettes sur les orthèses préfabriquées à 2\u00A0mois, mais aucun avantage pour aucune option à 12\u00A0mois (James et coll., 2016).',
    'Le cartilage de croissance apparaît en général vers 7 à 9\u00A0ans et se soude entre 15 et 17\u00A0ans. Tant qu’il n’est pas fermé, les récidives sont fréquentes, surtout pendant les poussées de croissance et les saisons sportives.',
  ],
  toc: true,
  sections: [
    {
      h2: 'Qu’est-ce que la maladie de Sever\u00A0?',
      paragraphs: [
        'La maladie de Sever est une inflammation de l’apophyse calcanéenne, le cartilage de croissance à l’arrière de l’os du talon, là où s’attache le tendon d’Achille. Chez un enfant en croissance, ce cartilage de croissance est fait de cartilage, plus souple et plus vulnérable aux contraintes que l’os qui l’entoure. Le tendon d’Achille et le fascia plantaire tirent tous deux sur cette zone. Quand un enfant court, saute ou fait du sport sur sol dur, ces forces se répètent des centaines de fois par séance.',
        'Pendant une poussée de croissance, l’os du talon peut grandir plus vite que les muscles du mollet et le tendon d’Achille, ce qui augmente la tension sur le cartilage de croissance. C’est cette association d’une croissance osseuse rapide et de chocs répétés qui provoque l’irritation.',
        'La maladie de Sever n’est pas une fracture et n’abîme pas le cartilage de croissance de façon permanente. On la classe parmi les apophysites de traction\u00A0: le cartilage de croissance est tiré, pas cassé. Une fois qu’il s’est fermé et transformé en os solide, le problème ne peut pas revenir.',
      ],
      cites: [CITE.wiegerinck],
    },
    {
      h2: 'À quel âge survient-elle, et qui est touché\u00A0?',
      paragraphs: [
        'La maladie de Sever touche les enfants d’environ 8 à 15\u00A0ans. L’apophyse calcanéenne apparaît vers 7 à 9\u00A0ans et se soude en général entre 15 et 17\u00A0ans. Les garçons sont touchés deux à trois fois plus souvent que les filles, avec un début typique vers 12\u00A0ans chez les garçons et 11\u00A0ans chez les filles. Environ 60\u00A0% des cas touchent les deux talons.',
        'Elle représente 2 à 16\u00A0% des consultations d’enfants dans les cliniques du sport. Les sports les plus associés sont le football, le basket, l’athlétisme, le cross-country, la gymnastique et le tennis. Le schéma est prévisible\u00A0: elle apparaît souvent en début de saison sportive ou pendant une poussée de croissance, quand la charge sur le talon augmente d’un coup.',
        'Les facteurs de risque comprennent\u00A0:',
        {
          list: [
            'Beaucoup de course et de sauts.',
            'Des mollets raides.',
            'Une cheville peu souple.',
            'Un IMC élevé.',
            'Des surfaces de jeu dures.',
            'Des chaussures ou crampons mal amortis.',
          ],
        },
      ],
      cites: [CITE.nietoGilSever, CITE.micheliSever, CITE.wiegerinck, CITE.jamesSever],
    },
    {
      h2: 'Quels sont les symptômes de la maladie de Sever\u00A0?',
      paragraphs: [
        'Le symptôme principal est une douleur à l’arrière ou sur les côtés du talon, en général pendant ou après l’activité, surtout après la course ou les sauts. La douleur est souvent décrite comme un bleu. Il y a rarement un gonflement ou un hématome visible. **Presser ou serrer les côtés du talon reproduit en général la douleur.** Ce test de compression est la vérification clinique habituelle.',
        'Contrairement à la fasciite plantaire de l’adulte, pire aux premiers pas après le repos, la douleur de la maladie de Sever a tendance à s’aggraver avec l’activité et ne s’améliore pas à la marche. Certains enfants se mettent à boiter ou à marcher sur la pointe des pieds pour éviter de mettre du poids sur le talon.',
        'La douleur peut aller de légère, seulement remarquée pendant le sport, à assez forte pour empêcher complètement l’enfant de jouer.',
      ],
    },
    {
      h2: 'Qu’est-ce qui aide la maladie de Sever\u00A0? Les preuves',
      keyFact: 'Dans un essai sur 101\u00A0enfants, les trois approches ont amélioré la douleur, et le groupe talonnette était plus satisfait à six semaines, même si la différence avait disparu à trois mois (Wiegerinck et coll., 2016).',
      paragraphs: [
        'Les preuves sur la maladie de Sever sont peu nombreuses mais augmentent. Les trois principales options étudiées sont la gestion de la charge (réduire l’activité douloureuse), les talonnettes ou semelles, et les exercices d’étirement ou de renforcement. Les trois ont montré un bénéfice, et **aucune ne s’est montrée nettement meilleure que les autres au dernier suivi.**',
        'Dans un essai de 2016 sur 101\u00A0enfants de 8 à 15\u00A0ans, Wiegerinck et coll. ont comparé trois approches\u00A0:',
        {
          list: [
            'L’attente surveillée avec le conseil d’arrêter l’activité douloureuse.',
            'Une talonnette.',
            'Des exercices excentriques supervisés.',
          ],
        },
        'Les trois groupes se sont nettement améliorés. À six semaines, le groupe talonnette était plus satisfait que les deux autres. À trois mois, il ne restait aucune différence cliniquement pertinente entre les trois.',
        'Dans un autre essai factoriel de 2016 sur 124\u00A0enfants, James et coll. ont comparé les talonnettes aux orthèses préfabriquées, et le remplacement des chaussures à l’absence de remplacement. Les talonnettes avaient un petit avantage sur les orthèses préfabriquées à 2\u00A0mois dans le domaine physique de l’Oxford Ankle Foot Questionnaire. À 6 et 12\u00A0mois, il ne restait aucune différence entre les combinaisons.',
        'Dans un essai croisé sur 51\u00A0garçons, Perhamre et coll. ont comparé une coque talonnière de 3\u00A0mm à une cale de talon de 5\u00A0mm. La coque talonnière a réduit la douleur d’environ 80\u00A0% sur l’échelle Borg CR-10, ce qui suggère que l’amorti et l’absorption des chocs comptent peut-être plus que le simple fait de surélever le talon.',
      ],
      sourceNote:
        'Wiegerinck 2016\u00A0: 101\u00A0enfants, douleur EVA nettement améliorée dans les 3\u00A0groupes (p<0,005), aucune différence entre groupes à 3\u00A0mois. James 2016\u00A0: 124\u00A0enfants, effet principal des talonnettes p=0,04 à 1-2\u00A0mois (domaine physique uniquement), aucun effet à 6 ou 12\u00A0mois. Perhamre 2011\u00A0: 51\u00A0garçons, essai croisé, Borg CR-10 avec coque talonnière passé de 7 à 2.',
      cites: [CITE.wiegerinck, CITE.jamesSever, CITE.perhamreHeelCup],
    },
    {
      h2: 'Gestion de la charge et adaptation de l’activité',
      paragraphs: [
        'La gestion de la charge est la base de la prise en charge de la maladie de Sever. **Cela ne veut pas dire arrêter tout sport.** Cela veut dire réduire les activités qui font mal, surtout la course et les sauts sur sol dur, jusqu’à ce que la douleur se calme. La plupart des enfants peuvent reprendre le sport en deux à huit semaines si la charge est gérée tôt.',
        'Concrètement\u00A0:',
        {
          list: [
            'Réduire les entraînements plutôt que d’arrêter complètement.',
            'Éviter si possible les crampons sur terrain dur.',
            'Passer à des chaussures bien amorties.',
            'Sauter les parties de l’entraînement qui comportent le plus de course et de sauts.',
          ],
        },
        'Certains entraîneurs laissent l’enfant participer aux exercices techniques en le dispensant des sprints et de la préparation physique.',
        'Le plus difficile dans la gestion de la charge, c’est que la maladie de Sever a tendance à récidiver. Un enfant peut aller mieux après deux semaines de repos, reprendre pleinement l’activité, et voir la douleur revenir. Cela ne veut pas dire que le premier repos a échoué. Cela veut dire que le cartilage de croissance est encore ouvert et encore vulnérable. Les récidives sont fréquentes jusqu’à la fin de la croissance osseuse.',
      ],
      cites: [CITE.wiegerinck],
    },
    {
      h2: 'Les talonnettes et les semelles aident-elles la maladie de Sever\u00A0?',
      keyFact: 'Un essai croisé sur 51\u00A0garçons a trouvé qu’une coque talonnière réduisait la douleur d’environ 80\u00A0% par rapport à une cale de talon, ce qui suggère que l’absorption des chocs compte plus que l’angle de surélévation du talon (Perhamre et coll., 2011).',
      paragraphs: [
        'Les coques talonnières font partie des mesures les plus pratiques contre la maladie de Sever. Elles amortissent le talon, absorbent les chocs et réduisent les pics de force qui atteignent le cartilage de croissance. L’essai croisé de Perhamre a trouvé qu’une coque talonnière réduisait la douleur d’environ 80\u00A0% par rapport à une cale de talon chez 51\u00A0garçons, ce qui suggère que l’absorption des chocs au talon compte plus que le simple changement d’angle du talon.',
        'Dans l’essai factoriel de James, les talonnettes (un type de semelle qui surélève le talon) ont montré un petit avantage à court terme sur les orthèses préfabriquées à 2\u00A0mois, mais aucun avantage à 12\u00A0mois. Les orthèses sur mesure n’ont été testées dans aucun de ces essais.',
        '**Un point de départ raisonnable est une coque talonnière peu coûteuse vendue sans ordonnance, portée dans les deux chaussures et pendant le sport.** Si cela n’aide pas, un professionnel de santé peut évaluer si une orthèse sur mesure vaut le coût.',
      ],
      cites: [CITE.perhamreHeelCup, CITE.jamesSever],
    },
    {
      h2: 'L’étirement du mollet aide-t-il la maladie de Sever\u00A0?',
      paragraphs: [
        'Des mollets raides augmentent la traction sur le cartilage de croissance, et la raideur du mollet est l’un des facteurs de risque reconnus de l’apophysite calcanéenne. Étirer le gastrocnémien (le muscle superficiel du mollet, étiré genou tendu) et le soléaire (le muscle profond du mollet, étiré genou plié) est une recommandation habituelle.',
        'Dans l’essai de Wiegerinck, le groupe exercices a suivi un programme de renforcement excentrique du mollet supervisé par un kinésithérapeute. Ce groupe s’est autant amélioré que les groupes talonnette et attente surveillée. Les étirements et un renforcement doux sont sans danger et peuvent aider en réduisant la traction sur le cartilage de croissance, mais **les preuves ne montrent pas qu’ils soient supérieurs aux talonnettes ou à la seule gestion de la charge.**',
        'Les exercices pour un enfant atteint d’apophysite calcanéenne doivent être supervisés ou enseignés par un professionnel de santé ou un kinésithérapeute. La dose et la progression dépendent de l’âge de l’enfant, de son niveau de douleur et des exigences de son sport. Un enfant qui a une douleur aiguë et qui boite a d’abord besoin de repos, pas d’exercices.',
      ],
      cites: [CITE.wiegerinck],
    },
    {
      h2: 'Walkito convient-il à un enfant atteint de la maladie de Sever\u00A0?',
      paragraphs: [
        'Non. Walkito est une application d’exercices conçue pour les adultes souffrant de douleur sous le talon et de douleur de la voûte plantaire. Ses doses d’exercices, ses seuils de douleur et ses règles de progression sont conçus pour des corps d’adultes. Le cartilage de croissance d’un enfant est une structure fondamentalement différente de l’os du talon soudé d’un adulte, et les règles de mise en charge sont différentes.',
        'Si votre enfant a eu le feu vert d’un professionnel de santé et que vous cherchez des conseils d’exercices, un médecin du sport pédiatrique ou un podologue peut proposer un programme adapté à l’âge et au sport de l’enfant. Les guides pour adultes de ce site, comme [montées sur pointes pour la fasciite plantaire](/fr/montees-sur-pointes-fasciite-plantaire/) et [exercices pour la fasciite plantaire](/fr/exercices-fasciite-plantaire/), travaillent les mêmes muscles, mais avec des doses et des seuils pour adultes.',
      ],
    },
    {
      h2: 'Combien de temps dure-t-elle, et revient-elle\u00A0?',
      paragraphs: [
        'La maladie de Sever disparaît en général en quelques semaines à quelques mois avec la gestion de la charge et des soins de soutien. La plupart des enfants peuvent reprendre le sport en deux à huit semaines. La douleur disparaît en général pour de bon une fois que le cartilage de croissance s’est soudé en os solide, le plus souvent entre 12 et 17\u00A0ans selon le sexe et le rythme de maturation de l’enfant (revue StatPearls, 2024).',
        'Les récidives sont fréquentes et attendues. Chaque poussée de croissance et chaque nouvelle saison sportive peut ramener la douleur. **Une récidive n’est pas le signe d’une prise en charge ratée.** C’est le signe que le cartilage de croissance est encore ouvert. Continuer les coques talonnières, de bonnes chaussures et les étirements du mollet pendant les saisons sportives peut réduire l’intensité et la fréquence des poussées.',
        'Aucun problème à long terme n’a été associé à la maladie de Sever. Elle n’abîme pas le cartilage de croissance et ne modifie pas la forme finale de l’os.',
      ],
      cites: [CITE.wiegerinck, CITE.jamesSever],
    },
  ],
  faq: [
    {
      q: 'C’est quoi la maladie de Sever\u00A0?',
      a: 'La maladie de Sever, aussi appelée apophysite calcanéenne, est une inflammation du cartilage de croissance à l’arrière de l’os du talon. C’est la cause la plus fréquente de douleur au talon chez l’enfant de 8 à 15\u00A0ans, due à la traction répétée du tendon d’Achille pendant la course, les sauts et les poussées de croissance. Ce n’est pas une vraie maladie, et elle disparaît une fois le cartilage de croissance fermé.',
    },
    {
      q: 'Les talonnettes aident-elles la maladie de Sever\u00A0?',
      cites: [CITE.perhamreHeelCup],
      a: 'Dans un essai croisé sur 51\u00A0garçons, une coque talonnière a réduit la douleur au talon d’environ 80\u00A0% par rapport à une cale de talon, mesurée sur l’échelle Borg CR-10 (Perhamre 2011). Les coques talonnières amortissent le cartilage de croissance et absorbent les chocs. Une coque peu coûteuse vendue sans ordonnance, portée dans les deux chaussures et pendant le sport, est une première étape raisonnable.',
    },
    {
      q: 'Un enfant avec une maladie de Sever doit-il arrêter le sport\u00A0?',
      cites: [CITE.wiegerinck],
      a: 'Pas forcément. Dans un essai sur 101\u00A0enfants, réduire l’activité douloureuse était aussi efficace que des talonnettes ou des exercices supervisés à trois mois (Wiegerinck 2016). La plupart des professionnels de santé conseillent de réduire la course et les sauts plutôt que d’arrêter tout sport. Les exercices techniques sans chocs répétés au talon sont en général sans risque. Une reprise complète est attendue en deux à huit semaines.',
    },
    {
      q: 'La maladie de Sever est-elle définitive\u00A0?',
      a: 'Non. La maladie de Sever disparaît complètement une fois le cartilage de croissance du calcanéum fermé, ce qui arrive entre 12 et 17\u00A0ans selon le sexe et la maturation. Aucune complication à long terme n’a été rapportée. Les récidives sont fréquentes tant que le cartilage de croissance est ouvert, mais chaque épisode disparaît aussi.',
    },
    {
      q: 'Les étirements aident-ils la maladie de Sever\u00A0?',
      cites: [CITE.wiegerinck],
      a: 'L’étirement du mollet est une recommandation habituelle, car des mollets raides augmentent la traction sur le cartilage de croissance. Dans l’essai de Wiegerinck 2016, des exercices excentriques supervisés ont amélioré la douleur autant qu’une talonnette ou l’attente surveillée. Les étirements aident, mais il n’est pas prouvé qu’ils agissent plus vite que la gestion de la charge ou les talonnettes seules.',
    },
    {
      q: 'Quelle différence entre maladie de Sever et fasciite plantaire\u00A0?',
      a: 'La maladie de Sever touche le cartilage de croissance à l’arrière du talon chez l’enfant, alors que la fasciite plantaire est une irritation du fascia plantaire sous le pied, surtout chez l’adulte. La douleur de Sever se situe en général à l’arrière et sur les côtés du talon et s’aggrave avec l’activité. Celle de la fasciite plantaire se situe en général sous le talon et est pire aux premiers pas après le repos. Les deux problèmes ont des causes et des prises en charge différentes.',
    },
    {
      q: 'Walkito peut-il aider mon enfant atteint de la maladie de Sever\u00A0?',
      a: 'Walkito est conçu pour les adultes souffrant du talon et de la voûte plantaire. Ses doses d’exercices, ses seuils de douleur et ses règles de progression sont pensés pour des corps d’adultes, pas pour le cartilage de croissance ouvert d’un enfant. Un médecin du sport pédiatrique ou un podologue est la bonne source pour le programme d’exercices d’un enfant.',
    },
    {
      q: 'Avec quoi peut-on confondre la maladie de Sever\u00A0?',
      cites: [CITE.wiegerinck],
      a: 'Une irritation du tendon d’Achille, une fracture de fatigue du calcanéum et une bursite rétrocalcanéenne peuvent toutes se ressembler chez un enfant en croissance. Un test de compression positif (douleur quand on presse les côtés du talon l’un vers l’autre), un âge de 8 à 15\u00A0ans et une hausse récente de l’entraînement orientent plutôt vers la maladie de Sever. Un traumatisme unique, un gonflement ou une douleur qui s’aggrave à un point précis demandent un professionnel de santé pour écarter une fracture.',
    },
    {
      q: 'Comment poser un strap (kinésio) pour la maladie de Sever\u00A0?',
      a: 'Aucun essai n’a testé le kinésio-taping pour la maladie de Sever, donc aucune technique n’est prouvée meilleure que les coques talonnières ou la gestion de la charge. Certains professionnels posent la bande le long du tendon d’Achille et sous le talon pour réduire la traction sur le cartilage de croissance. Si vous voulez essayer, faites-la poser par un kinésithérapeute ou un préparateur sportif, qui vous montrera la technique.',
    },
  ],
  redFlags: {
    h2: 'Consultez un professionnel de santé si',
    bullets: [
      'la douleur est assez forte pour que l’enfant boite ou refuse de poser le talon',
      'la douleur a suivi un traumatisme unique ou une chute, ce qui pourrait évoquer une fracture plutôt qu’une apophysite',
      'il y a un gonflement, une rougeur ou une chaleur visibles autour du talon',
      'l’enfant a de la fièvre ou ne se sent pas bien en plus de la douleur au talon',
      'la douleur ne s’améliore pas après plusieurs semaines de gestion de la charge, de coques talonnières et de repos',
      'la douleur est présente au repos ou réveille l’enfant la nuit, ce qui peut évoquer autre chose qu’une apophysite',
      'la douleur se situe à un point précis et s’aggrave, ce qui peut suggérer une fracture de fatigue plutôt qu’une irritation du cartilage de croissance',
      'la douleur au talon s’accompagne d’un gonflement ou d’une raideur d’autres articulations',
    ],
  },
  program: {
    h2: 'Une remarque pour les parents qui cherchent une application',
    text: 'Walkito est un programme d’exercices pour les adultes souffrant du talon et de la voûte plantaire. Il n’est pas conçu pour les enfants, et ses doses et règles de progression supposent un os du talon entièrement soudé. Si vous êtes un adulte et lisez cette page parce que votre propre talon fait mal, les guides pour adultes peuvent vous aider\u00A0: [exercices pour la fasciite plantaire](/fr/exercices-fasciite-plantaire/), [douleur au talon au réveil](/fr/douleur-talon-au-reveil/) ou [montées sur pointes pour la fasciite plantaire](/fr/montees-sur-pointes-fasciite-plantaire/). Pour un enfant, le bon point de départ est un professionnel de santé.',
  },
  crumb: 'Maladie de Sever',
  campaign: 'guide-severs-fr',
};
