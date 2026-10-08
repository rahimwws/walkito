/**
 * The exercise catalogue, in Brazilian Portuguese.
 *
 * Vocabulary as a Brazilian physio or personal trainer says it:
 *
 * - **calf → «panturrilha»**, never «barriga da perna» (colloquial) or
 *   «gémeos» (European). The specific muscles are «gastrocnêmio» and «sóleo».
 * - **toes → «dedos do pé»**, and **ball of the foot → «a parte da frente do
 *   pé»**, never «a bola do pé», which is a calque.
 * - **heel raise → «elevação de calcanhar»**, the name used in every
 *   Brazilian gym.
 *
 * The rest of the anatomy is the standard clinical term: fáscia plantar,
 * sóleo, tibial posterior, arco do pé, calcanhar, tornozelo, tendão de Aquiles.
 *
 * `você` throughout. Cues put the physical instruction first: they are
 * followed by somebody standing on a painful foot, so the verb comes early
 * and the qualifier after it.
 */
export const EXERCISES_PT = {
  // ── Mobility ─────────────────────────────────────────────────────────────
  'exercises.fasciaStretch.title': 'Alongamento plantar',
  'exercises.fasciaStretch.rationale': 'Faça a primeira série antes de o pé tocar o chão.',
  'exercises.fasciaStretch.cue': 'Puxe os dedos para trás até sentir o arco, não a panturrilha.',

  'exercises.calfStretchStraight.title': 'Alongamento de panturrilha',
  'exercises.calfStretchStraight.rationale': 'Uma panturrilha mais solta tira um pouco da tensão do calcanhar.',
  'exercises.calfStretchStraight.cue': 'Perna de trás esticada, calcanhar no chão, quadril para a frente.',

  'exercises.calfStretchBent.title': 'Alongamento de sóleo',
  'exercises.calfStretchBent.rationale':
    'O músculo mais profundo da panturrilha só solta com o joelho dobrado.',
  'exercises.calfStretchBent.cue':
    'Dobre um pouco os dois joelhos. O calcanhar de trás fica apoiado no chão.',

  'exercises.ankleRocks.title': 'Mobilidade de tornozelo',
  'exercises.ankleRocks.rationale': 'Um tornozelo que dobra deixa o calcanhar ficar no chão.',
  'exercises.ankleRocks.cue': 'O joelho passa por cima dos dedos, o calcanhar fica no chão.',

  // ── The loaded work ──────────────────────────────────────────────────────
  'exercises.heelRaiseTowel.title': 'Elevação de calcanhar',
  'exercises.heelRaiseTowel.rationale':
    'Em um estudo, elevações lentas e pesadas aliviaram a dor mais cedo do que só alongar.',
  'exercises.heelRaiseTowel.cue':
    'Toalha embaixo dos dedos. Sem ela, você só está treinando panturrilha.',

  'exercises.heelRaisePlain.title': 'Elevação com uma perna',
  'exercises.heelRaisePlain.rationale': 'A versão simples, que mantém a força que você construiu.',
  'exercises.heelRaisePlain.cue':
    'Três segundos para subir, três para descer. Velocidade é o que faz o exercício perder o sentido.',

  // ── Intrinsic foot work ──────────────────────────────────────────────────
  'exercises.shortFootSeated.title': 'Pé curto',
  'exercises.shortFootSeated.rationale': 'O músculo que sustenta seu arco fica dentro do próprio pé.',
  'exercises.shortFootSeated.cue':
    'Não encolha os dedos. Puxe a parte da frente do pé em direção ao calcanhar.',

  'exercises.shortFootDouble.title': 'Pé curto, em pé',
  'exercises.shortFootDouble.rationale': 'O mesmo músculo, agora segurando o seu peso.',
  'exercises.shortFootDouble.cue': 'Os dedos ficam retos e alongados. Só o arco sobe.',

  'exercises.shortFootSingle.title': 'Pé curto, uma perna',
  'exercises.shortFootSingle.rationale': 'Um pé de cada vez é onde o lado mais fraco aparece.',
  'exercises.shortFootSingle.cue':
    'Mantenha o dedão no chão. Se ele levantar, o arco está roubando.',

  'exercises.toeSpread.title': 'Abrir os dedos',
  'exercises.toeSpread.rationale': 'Dedos que conseguem se abrir dividem a carga com o arco.',
  'exercises.toeSpread.cue':
    'Abra os dedos pelo chão e depois pressione o dedão e o dedo mindinho para baixo.',

  'exercises.bandInversion.title': 'Inversão com elástico',
  'exercises.bandInversion.rationale':
    'Virar o pé para dentro treina o músculo que passa por baixo do arco.',
  'exercises.bandInversion.cue': 'Mexa o pé, não a perna. O joelho fica parado.',

  'exercises.hipAbduction.title': 'Elevação lateral de perna',
  'exercises.hipAbduction.rationale': 'Um quadril que cede joga a carga no arco.',
  'exercises.hipAbduction.cue':
    'Deite de lado. Levante a perna de cima, um pouco para trás, com os dedos apontando para a frente.',

  // ── Balance ──────────────────────────────────────────────────────────────
  'exercises.singleLegHold.title': 'Equilíbrio em uma perna',
  'exercises.singleLegHold.rationale':
    'Ficar em uma perna só é o teste em que o pé falha primeiro.',
  'exercises.singleLegHold.cue': 'Olhe para um ponto fixo. Deixe o pé balançar, é para isso mesmo.',

  'exercises.eyesClosedStand.title': 'Equilíbrio de olhos fechados',
  'exercises.eyesClosedStand.rationale': 'De olhos fechados, quem faz o equilíbrio é o pé.',
  'exercises.eyesClosedStand.cue': 'Fique perto de uma parede. Tudo bem se apoiar nela.',

  'exercises.heelToeWalk.title': 'Caminhada calcanhar-ponta',
  'exercises.heelToeWalk.rationale':
    'Andar do calcanhar à ponta é o arco recebendo e soltando a carga, em ordem.',
  'exercises.heelToeWalk.cue':
    'O calcanhar toca primeiro, depois role o pé. Devagar o bastante para parar no meio do passo.',

  // ── What closes a session ────────────────────────────────────────────────
  'exercises.footRoll.title': 'Rolar o pé',
  'exercises.footRoll.rationale': 'Rolar o pé acalma o tecido depois do trabalho.',
  'exercises.footRoll.cue': 'Devagar e com firmeza. Se estiver fazendo careta, alivie.',

  'exercises.barefootHome.title': 'Descalço em casa',
  'exercises.barefootHome.rationale': 'Horas descalço são horas em que o pé está trabalhando.',
  'exercises.barefootHome.cue': 'Só dentro de casa, em piso liso, e aumente aos poucos.',

  'exercises.breathingReset.title': 'Respiração lenta',
  'exercises.breathingReset.rationale': 'Um minuto de respiração lenta fecha bem a sessão.',
  'exercises.breathingReset.cue': 'Solte o ar por mais tempo do que puxa. É só isso.',

  // ── The weekly plan's additions ──────────────────────────────────────────
  'exercises.heelRaiseDouble.title': 'Elevação de calcanhar com os dois pés',
  'exercises.heelRaiseDouble.rationale': 'Os dois pés dividem a carga enquanto a panturrilha acorda.',
  'exercises.heelRaiseDouble.cue': 'Suba reto sobre os dedões e desça devagar.',

  'exercises.heelRaiseSeated.title': 'Elevação de calcanhar sentado',
  'exercises.heelRaiseSeated.rationale': 'Trabalho de panturrilha quase sem carga no calcanhar.',
  'exercises.heelRaiseSeated.cue':
    'Empurre com a parte da frente dos pés. As mãos nos joelhos dão mais resistência.',

  'exercises.heelRaiseHold.title': 'Elevação de calcanhar sustentada',
  'exercises.heelRaiseHold.rationale': 'Segurar no alto carrega o tendão sem o quique.',
  'exercises.heelRaiseHold.cue': 'Suba e fique parado lá em cima, sem deixar descer.',

  'exercises.bigToeLift.title': 'Elevação do dedão',
  'exercises.bigToeLift.rationale': 'Ensina o dedão a se mexer sozinho.',
  'exercises.bigToeLift.cue': 'Levante só o dedão. Os outros quatro ficam apoiados no chão.',

  'exercises.towelScrunch.title': 'Puxar a toalha',
  'exercises.towelScrunch.rationale': 'Acorda os músculos pequenos embaixo do arco.',
  'exercises.towelScrunch.cue': 'Puxe a toalha com os dedos. O calcanhar fica no chão.',

  'exercises.kneeToWall.title': 'Joelho na parede',
  'exercises.kneeToWall.rationale': 'Solta o tornozelo para o calcanhar não levar a tensão.',
  'exercises.kneeToWall.cue':
    'O calcanhar fica apoiado. Leve o joelho para a frente, sobre o segundo dedo.',

  'exercises.balancePillow.title': 'Equilíbrio no travesseiro',
  'exercises.balancePillow.rationale': 'Uma superfície macia faz o tornozelo trabalhar a cada balanço.',
  'exercises.balancePillow.cue': 'Fique ao lado de uma parede. Joelho solto, olhar para a frente.',

  'exercises.heelDropStraight.title': 'Descida de calcanhar',
  'exercises.heelDropStraight.rationale':
    'Descer devagar é o que reconstrói a panturrilha e o tendão de Aquiles.',
  'exercises.heelDropStraight.cue':
    'Suba com os dois pés, desça devagar com um. Deixe o calcanhar passar abaixo do degrau.',

  'exercises.tibialisRaise.title': 'Elevação da ponta dos pés',
  'exercises.tibialisRaise.rationale': 'Fortalece o músculo da canela que firma cada passo.',
  'exercises.tibialisRaise.cue': 'Costas na parede. Levante a ponta dos pés, calcanhares no chão.',

  'exercises.stepDown.title': 'Descida do degrau',
  'exercises.stepDown.rationale': 'Controla o joelho para o pé não aterrissar sozinho.',
  'exercises.stepDown.cue':
    'O joelho acompanha a linha dos dedos. Encoste o calcanhar no chão, sem despencar.',

  'exercises.soleMassage.title': 'Massagem na sola',
  'exercises.soleMassage.rationale': 'Solta o tecido depois de um dia longo.',
  'exercises.soleMassage.cue':
    'Passadas firmes com o polegar, do calcanhar aos dedos. Alivie onde for pontiagudo.',

  'exercises.pogoHops.title': 'Saltinhos pogo',
  'exercises.pogoHops.rationale': 'Ensina o pé a impulsionar de novo, só quando a dor já passou.',
  'exercises.pogoHops.cue': 'Saltinhos pequenos e rápidos, tornozelos firmes. Pare se o calcanhar doer.',

  // ── The morning stretch ──────────────────────────────────────────────────
  'exercises.morningStretch.copy':
    'Antes de levantar: puxe os dedos para trás, 10 segundos, 10 vezes.',

  // ── Load notes ───────────────────────────────────────────────────────────
  'exercises.loadNote.backpack':
    'Coloque uma mochila. Pesada o bastante para a última repetição ser mesmo a última.',
  'exercises.loadNote.heavier': 'Coloque mais peso. Oito repetições devem ser tudo o que você aguenta.',
  'exercises.loadNote.towelOff':
    'Sem toalha. Só o peso do corpo. Esta é a versão que você vai continuar fazendo.',

  // ── Categories ───────────────────────────────────────────────────────────
  // «Treino» rather than «Força», for the same reason as Spanish: the bucket
  // holds balance and intrinsic foot work as well as the loaded lifts.
  'exercises.category.fitness': 'Treino',
  'exercises.category.mobility': 'Mobilidade',
  'exercises.category.recovery': 'Recuperação',
  'exercises.category.habit': 'Hábito',

  // ── Dose ─────────────────────────────────────────────────────────────────
  // Seconds as «s» with a space, the SI convention, as in Spanish.
  'exercises.dose.setsReps': '{sets} × {reps}',
  'exercises.dose.setsHold': '{sets} × {seconds} s',
  'exercises.dose.hold': '{seconds} s',
  'exercises.dose.holdMinutes': '{minutes} min',
  'exercises.dose.sets': { one: '{count} série', other: '{count} séries' },
  'exercises.dose.bothFeet': '{dose} · os dois pés',
};
