import { CITE } from '@/lib/citations';
import type { Guide } from '../types';

/*
 * ── Dor no calcanhar depois de andar (PT) ─────────────────────────────
 *
 * Translated from `articles/heel-pain-after-walking.ts`, written around the
 * Brazilian Portuguese queries «dor no calcanhar depois de andar», «dor no
 * calcanhar após caminhada», «calcanhar dói depois de caminhar». Informal
 * «você». Figures, doses, grades and qualifiers are identical to the English page.
 */

export const HEEL_PAIN_AFTER_WALKING_PT: Guide = {
  lang: 'pt',
  page: 'heelPainAfterWalking',
  mainSource: CITE.guideline,
  published: '2026-10-08',
  updated: '2026-10-08',
  title: 'Dor no calcanhar depois de andar: o que ajuda',
  description:
    'Dor no calcanhar depois de andar ou ficar em pé: por que dói após uma caminhada longa, as causas, quando se preocupar e os exercícios que mais ajudam.',
  h1: 'Dor no calcanhar depois de andar: por que dói e o que fazer',
  lede:
    'O calcanhar estava bem enquanto você andava, mas agora que parou ele dói. Ou a dor começou no meio de uma caminhada longa e foi piorando a cada passo. Os dois padrões apontam para a mesma coisa: os tecidos embaixo do calcanhar receberam mais carga do que aguentavam naquele dia. A causa mais comum é a fascite plantar, e a resposta mais útil é alongamento e fortalecimento gradual da panturrilha.',
  intro: [
    'Esta página trata da dor no calcanhar que aparece durante ou depois de andar. Se o calcanhar dói mais nos primeiros passos da manhã, esse padrão está em [dor no calcanhar ao acordar](/pt/dor-no-calcanhar-ao-acordar/). Se os pés doem de ficar horas parado no mesmo lugar, [dor nos pés de ficar em pé o dia todo](/pt/dor-nos-pes-ficar-em-pe/) fala do lado da carga estática. Os três se sobrepõem, mas cada um tem um foco diferente.',
  ],
  takeaways: [
    'A diretriz de 2023 para dor no calcanhar descreve a dor da fascite plantar como “mais perceptível ao apoiar o peso logo cedo pela manhã ou depois de um período de repouso”, mas também cita a dor que piora com atividade prolongada com apoio do peso como uma característica principal (Koc e colegas, 2023).',
    'Em um estudo de caso-controle pareado com 50\u00A0pessoas com fascite plantar e 100\u00A0controles, a menor dorsiflexão do tornozelo (o quanto o pé sobe em direção à canela) foi o fator de risco independente mais forte, à frente de um índice de massa corporal acima de 30 e de ficar em pé a maior parte do dia de trabalho (Riddle e colegas, 2003).',
    'A diretriz dá ao alongamento da fáscia plantar e da panturrilha o grau máximo, **A**, e ao treino de força um **B** (Koc e colegas, 2023).',
    'Cerca de 90% das pessoas com fascite plantar melhoram com cuidados sem cirurgia, como alongamento, trabalho de panturrilha e controle da carga (Latt e colegas, 2020).',
    'Dor no calcanhar depois de andar que aumenta a cada saída e não alivia com repouso pode indicar uma fratura por estresse, e não fascite plantar. Apertar as laterais do calcanhar é um dos sinais clínicos.',
  ],
  toc: true,
  sections: [
    {
      h2: 'Por que o calcanhar dói depois de andar?',
      paragraphs: [
        'Andar põe carga na fáscia plantar, a faixa grossa de tecido embaixo do pé, a cada passo. Toda vez que o calcanhar bate no chão e o pé rola para a frente, a fáscia estica e absorve força. Num pé saudável, tudo bem. Mas quando a fáscia está irritada ou a panturrilha está tensa demais para absorver a parte dela, a carga se concentra onde a fáscia se prende no calcanhar.',
        'O resultado é uma dor que aumenta durante ou depois de uma caminhada, principalmente uma mais longa que o normal. A diretriz de 2023 para dor no calcanhar cita dois padrões típicos da fascite plantar: dor nos primeiros passos depois do repouso, e dor que aumenta com atividade prolongada com apoio do peso. Andar é a atividade prolongada com apoio do peso mais comum que existe.',
        'Uma panturrilha tensa é parte importante do quadro. Em um estudo de caso-controle pareado com 50\u00A0pessoas com fascite plantar e 100\u00A0controles, a menor dorsiflexão do tornozelo teve a maior razão de chances de todos os fatores de risco medidos. Quando o tornozelo não dobra o suficiente, cada passo pede que a fáscia compense a diferença.',
      ],
      cites: [CITE.guideline, CITE.riddle],
    },
    {
      h2: 'Dor no calcanhar depois de andar é sempre fascite plantar?',
      paragraphs: [
        'A fascite plantar é a causa mais comum, mas não é a única. O local e o momento da dor ajudam a diferenciar.',
        '**Afinamento do coxim gorduroso do calcanhar.** O coxim gorduroso embaixo do osso do calcanhar amortece cada passo. Quando ele afina ou se desloca, o osso recebe mais impacto diretamente. Uma revisão de escopo de 2022 observou que a dor do coxim gorduroso costuma ser uma dor funda no centro do calcanhar, pior em superfícies duras e ao andar descalço (Chang e colegas, 2022). A dor da fascite plantar costuma ficar na parte de dentro e da frente do calcanhar. A dor do coxim gorduroso fica bem embaixo, no centro. Se andar descalço em piso frio ou concreto é claramente pior do que andar com um tênis amortecido, vale considerar o afinamento do coxim gorduroso. Veja [síndrome do coxim gorduroso do calcanhar](/pt/sindrome-coxim-gorduroso-calcanhar/) para saber mais.',
        '**Tendinite de Aquiles.** Dor na parte de trás do calcanhar ou no tendão logo acima, não embaixo do pé. O tendão de Aquiles pode ficar dolorido depois de uma caminhada longa, principalmente em subida. Se a sua dor é na parte de trás do calcanhar e não embaixo dele, veja [exercícios para tendinite de Aquiles](/pt/tendinite-de-aquiles-exercicios/).',
        '**Fratura por estresse do calcâneo.** Dor que aparece aos poucos depois de um aumento repentino na distância ou na intensidade das caminhadas. Ao contrário da fascite plantar, a dor da fratura por estresse costuma aumentar com a atividade e não aliviar muito com repouso. Apertar as laterais do calcanhar pode reproduzir a dor. Se esse é o seu padrão, procure um profissional de saúde antes de exercitar o pé.',
        '**Dor irradiada da lombar ou nervo comprimido.** Dor no calcanhar que vem com dormência, formigamento ou queimação pode indicar um problema de nervo, e não de carga no tecido. Isso é motivo para procurar primeiro um profissional de saúde.',
      ],
      cites: [CITE.fatPadReview, CITE.achillesGuideline, CITE.patelStressFracture],
    },
    {
      h2: 'Qual a diferença entre dor depois de andar e dor ao acordar?',
      paragraphs: [
        'Na maioria dos casos, a dor no calcanhar pela manhã e a dor depois de andar são dois lados da mesma condição. A dor da manhã acontece porque a fáscia enrijece e encurta durante a noite e depois é esticada de repente quando você fica em pé. A dor depois de andar acontece porque a fáscia recebeu carga repetida durante a caminhada e o tecido está avisando que já chega.',
        'A diferença importa na hora de encaixar os exercícios. A dor da manhã responde melhor a um alongamento da fáscia plantar feito antes do primeiro passo. A dor depois de andar responde ao controle da carga: andar uma distância que o pé aguenta, aumentar essa distância aos poucos e usar alongamento e trabalho de panturrilha para subir o limite. [Dor no calcanhar ao acordar](/pt/dor-no-calcanhar-ao-acordar/) traz em detalhes os alongamentos da manhã e as talas noturnas.',
        'Se você tem dor de manhã e também depois de andar, esse é o padrão típico da fascite plantar. Os exercícios se sobrepõem. O alongamento da manhã e os alongamentos de panturrilha ajudam nos dois. O fortalecimento da panturrilha aumenta a capacidade de toda a cadeia, para que a carga das suas caminhadas do dia a dia fique dentro do que os tecidos aguentam.',
      ],
      cites: [CITE.guideline],
    },
    {
      h2: 'Qual a diferença para a dor nos pés de ficar em pé?',
      paragraphs: [
        'Ficar parado em pé e andar são cargas diferentes. Ficar em pé mantém os mesmos tecidos sob estresse constante e estático, sem a bomba da panturrilha que a caminhada oferece. Andar alterna carga e descarga, o que é mais leve para as veias e para o coxim gorduroso, mas mais pesado para a fáscia no ponto em que ela se prende ao calcanhar, por causa do alongamento repetido na hora de impulsionar o passo.',
        'Se os seus pés doem depois de ficar horas em pé, mas ficam bem depois de uma caminhada, o problema provavelmente é cansaço de ficar em pé. [Dor nos pés de ficar em pé o dia todo](/pt/dor-nos-pes-ficar-em-pe/) fala desse padrão, incluindo meias de compressão e tapetes, que importam menos aqui. Se o seu calcanhar dói especificamente depois de andar, mas não depois de ficar em pé, a questão de carga está na inserção da fáscia, e os exercícios de panturrilha abaixo são o ponto de partida.',
      ],
      cites: [CITE.waters],
    },
    {
      h2: 'Quais exercícios ajudam na dor no calcanhar depois de andar?',
      keyFact: 'Uma revisão sistemática concluiu que tanto o alongamento da fáscia plantar quanto o alongamento da panturrilha reduziram a dor na fascite plantar mais do que não alongar (Siriphorn e Eksakulkla, 2020).',
      paragraphs: [
        'Os exercícios são os mesmos que a diretriz de 2023 recomenda para fascite plantar. A diretriz dá ao alongamento o grau máximo, **A**, e ao treino de força um **B**. Os dois são recomendados. Uma revisão sistemática concluiu que o alongamento da fáscia plantar e o alongamento da panturrilha reduziram a dor em comparação com não alongar (Siriphorn e Eksakulkla, 2020).',
      ],
      exercises: [
        {
          name: 'Alongamento da fáscia plantar',
          evidence: { level: 'strong', why: 'Grau A na diretriz. A recomendação mais repetida da diretriz de 2023.' },
          dose: '10\u00A0vezes de 10\u00A0segundos, cada pé',
          how: 'Sente-se e cruze um tornozelo sobre o outro joelho. Puxe os dedos para trás com cuidado até sentir um alongamento ao longo do arco. Faça antes de ficar em pé de manhã, depois de ficar sentado e depois de uma caminhada longa.',
          often: 'Toda manhã e depois de atividade prolongada',
          feel: 'Um alongamento ao longo do arco, não dor forte',
          stop: 'A dor chegar a 6/10',
          media: 'fascia_stretch',
          caption: 'Alongamento da fáscia plantar: puxe os dedos para trás com cuidado',
          alt: 'Uma figura sentada puxando os dedos para trás para alongar o arco',
        },
        {
          name: 'Alongamento de panturrilha (joelho esticado)',
          evidence: { level: 'strong', why: 'Grau A na diretriz. Trabalha a panturrilha tensa, que foi o fator de risco mais forte em um estudo de caso-controle de 2003.' },
          dose: '2\u00A0vezes de 30\u00A0segundos, cada perna',
          how: 'Mãos na parede. Perna de trás esticada, calcanhar no chão, quadril para a frente. Segure até sentir o alongamento na parte de cima da panturrilha.',
          often: 'Na maioria das sessões e antes de uma caminhada longa',
          feel: 'Um alongamento na parte de cima da panturrilha',
          stop: 'A dor chegar a 6/10',
          media: 'calf_stretch_straight',
          caption: 'Alongamento de panturrilha: perna de trás esticada, calcanhar no chão, incline para a frente',
          alt: 'Uma figura apoiada na parede com a perna de trás esticada e a panturrilha destacada',
        },
        {
          name: 'Alongamento do sóleo (joelho dobrado)',
          evidence: { level: 'strong', why: 'Grau A na diretriz. O sóleo, o músculo mais profundo da panturrilha, só solta com o joelho dobrado.' },
          dose: '2\u00A0vezes de 30\u00A0segundos, cada perna',
          how: 'Mesma posição na parede do alongamento de panturrilha, depois dobre o joelho de trás até sentir o alongamento descer, perto do calcanhar.',
          often: 'Depois do alongamento com o joelho esticado',
          feel: 'Um alongamento mais embaixo na panturrilha, perto do calcanhar',
          stop: 'A dor chegar a 6/10',
          media: 'calf_stretch_bent',
          caption: 'Alongamento do sóleo: dobre o joelho de trás até o alongamento descer',
          alt: 'Uma figura com uma perna à frente da outra e os joelhos dobrados, com a parte baixa da panturrilha destacada',
        },
        {
          name: 'Elevação de calcanhar com os dois pés',
          evidence: { level: 'moderate', why: 'Grau B na diretriz para treino de força. Um degrau antes do trabalho com carga em uma perna.' },
          dose: '3\u00A0séries de 10, com os dois pés',
          how: 'Fique em pé sobre os dois pés, suba reto sobre os dedões e depois desça devagar. Os dois pés dividem a carga. Segure numa parede ou corrimão para se equilibrar.',
          often: 'Dias de força, quando só alongar não basta',
          feel: 'As panturrilhas trabalhando juntas',
          stop: 'A dor chegar a 6/10',
          media: 'heel_raise_double',
          caption: 'Elevação de calcanhar: suba reto e desça devagar',
          alt: 'Uma figura em pé subindo na ponta dos pés, com as panturrilhas destacadas',
        },
        {
          name: 'Elevação de calcanhar com toalha (em uma perna)',
          evidence: { level: 'strong', why: 'O exercício do único ensaio clínico randomizado de elevação de calcanhar específico para fascite plantar (Rathleff 2015). Grau B na diretriz.' },
          dose: 'O Walkito começa com 3\u00A0séries de 12, cada perna. O protocolo da pesquisa progride para 5\u00A0séries de 8RM.',
          how: 'Fique em um pé só num degrau, com uma toalha enrolada embaixo dos dedos. Três segundos subindo, dois segundos parado, três segundos descendo. A toalha põe carga na fáscia plantar pelo mecanismo de molinete (windlass).',
          often: 'Dias de força, quando a elevação com os dois pés ficar fácil por duas sessões',
          feel: 'Trabalho pesado na panturrilha e um puxão embaixo do arco',
          stop: 'A dor chegar a 6/10',
          media: 'heel_raise_towel',
          caption: 'Elevação de calcanhar com toalha: ritmo lento, toalha embaixo dos dedos',
          alt: 'Uma figura num degrau subindo na ponta dos pés com uma toalha enrolada embaixo do pé',
        },
      ],
      cites: [CITE.guideline, CITE.siriphorn, CITE.rathleff, CITE.riddle],
    },
    {
      h2: 'Quanto andar quando o calcanhar dói?',
      paragraphs: [
        'A meta não é parar de andar. É descobrir a distância que o seu calcanhar aguenta sem piorar na manhã seguinte e, a partir daí, ir aumentando.',
        'Um jeito prático: ande uma distância que mantenha a dor da manhã seguinte igual ou abaixo do seu nível atual. Se a sua nota de costume pela manhã é 4 de 10 e uma caminhada de 30\u00A0minutos leva a nota para 6 na manhã seguinte, essa caminhada foi demais. Encurte até a nota da manhã ficar estável. Depois acrescente cinco minutos a cada uma ou duas semanas, desde que a dor da manhã não dispare.',
        'Isso é controle da carga, não repouso. Repouso total raramente ajuda na fascite plantar. A diretriz recomenda modificar a atividade, não ficar parado. Andar com um calçado com bom suporte numa superfície mais macia é mais leve para a fáscia do que andar descalço no concreto.',
        'Se você também corre, o mesmo princípio vale em outra escala. [Dor no calcanhar de quem corre](/heel-pain-runners/) (em inglês) fala em mais detalhes de picos de carga e mudanças na quilometragem.',
      ],
      cites: [CITE.guideline],
    },
    {
      h2: 'Quanto tempo até o calcanhar parar de doer depois das caminhadas?',
      keyFact: 'Em dados normativos de 566\u00A0adultos saudáveis, a média de elevações de calcanhar em uma perna foi de cerca de 23 a 24\u00A0repetições, uma referência para acompanhar a resistência da panturrilha ao longo do tempo (Hebert-Losier e colegas, 2017).',
      paragraphs: [
        'Não existe um prazo fixo. Uma revisão da evidência clínica relata que cerca de 90% das pessoas com fascite plantar melhoram com cuidados sem cirurgia, muitas vezes em alguns meses (Latt e colegas, 2020). Em um acompanhamento mais longo de 174\u00A0pessoas, cerca de metade ainda tinha algum sintoma aos 5\u00A0anos, embora a maioria fosse leve nessa altura (Hansen e colegas, 2018).',
        'O que você consegue medir antes é se os exercícios estão funcionando. A dor da manhã numa escala de 0 a 10 é o sinal mais claro do dia a dia. A resistência da panturrilha, medida contando elevações de calcanhar em uma perna, acompanha a força ao longo das semanas. Uma referência muito citada para adultos é de cerca de 23 a 24\u00A0repetições em média, a partir de dados normativos de 566\u00A0adultos saudáveis (Hebert-Losier e colegas, 2017). O que importa é se o seu número está subindo, não se ele bate com a referência.',
        'Para saber mais sobre o prazo geral, veja [quanto tempo dura a fascite plantar](/pt/quanto-tempo-dura-fascite-plantar/).',
      ],
      cites: [CITE.latt, CITE.hansen, CITE.hebertLosier],
    },
  ],
  faq: [
    {
      q: 'Por que meu calcanhar dói depois de uma caminhada longa?',
      cites: [CITE.guideline, CITE.riddle],
      a: 'A causa mais comum é a fascite plantar. Cada passo põe carga na fáscia plantar onde ela se prende ao osso do calcanhar. Uma caminhada longa exige mais desse tecido do que uma curta. Quando a panturrilha está tensa ou a fáscia já está irritada, a carga passa do que o tecido aguenta e a dor aparece. Uma panturrilha tensa foi o fator de risco independente mais forte em um estudo de caso-controle de 2003.',
    },
    {
      q: 'Devo parar de andar se o calcanhar dói?',
      cites: [CITE.guideline],
      a: 'Normalmente não é preciso repouso total. A diretriz de 2023 recomenda modificar a atividade, não ficar parado. Ande uma distância que o seu calcanhar aguenta sem piorar a manhã seguinte. Encurte a distância se precisar e depois aumente de novo aos poucos. Um calçado com bom suporte e uma superfície mais macia ajudam.',
    },
    {
      q: 'Dor no calcanhar depois de andar é fascite plantar?',
      cites: [CITE.guideline, CITE.fatPadReview],
      a: 'É a causa mais comum, mas não a única. A dor da fascite plantar fica na parte de dentro e da frente do calcanhar e também piora nos primeiros passos depois do repouso. O afinamento do coxim gorduroso do calcanhar causa uma dor funda no centro, pior em superfícies duras. A tendinite de Aquiles dói na parte de trás do calcanhar. Uma fratura por estresse aumenta com a atividade e pode doer em repouso. Procure um profissional de saúde se não tiver certeza.',
    },
    {
      q: 'Qual o melhor exercício para dor no calcanhar depois de andar?',
      cites: [CITE.guideline, CITE.siriphorn],
      a: 'O alongamento da fáscia plantar e os alongamentos de panturrilha têm o grau de evidência mais alto (A) na diretriz de 2023. Uma metanálise concluiu que os dois reduziram a dor em comparação com não alongar. Faça o alongamento da fáscia plantar depois de uma caminhada e os alongamentos de panturrilha na maioria dos dias. O fortalecimento da panturrilha (grau B na diretriz) constrói a capacidade de que a cadeia precisa para aguentar caminhadas mais longas.',
    },
    {
      q: 'Dor no calcanhar depois de andar precisa de raio-X?',
      cites: [CITE.guideline],
      a: 'Normalmente não. A diretriz de 2023 diz que exame de imagem não é necessário quando o exame clínico aponta para fascite plantar. Se a dor não melhorou depois de várias semanas de alongamento e controle da carga, se está piorando, ou se apertar as laterais do calcanhar a reproduz (sinal de uma possível fratura por estresse), o exame de imagem passa a ser útil.',
    },
    {
      q: 'Por que meu calcanhar dói depois de ficar em pé, mas não depois de andar?',
      cites: [CITE.waters],
      a: 'Ficar em pé põe carga estática no pé, sem a bomba da panturrilha que a caminhada oferece. O sangue se acumula, o coxim gorduroso é comprimido e o arco cansa. Andar alterna carga e descarga, o que é mais leve para as veias. Se ficar em pé é o seu gatilho, [dor nos pés de ficar em pé o dia todo](/pt/dor-nos-pes-ficar-em-pe/) fala desse padrão, incluindo meias de compressão e tapetes.',
    },
    {
      q: 'Como saber se a dor no calcanhar é fratura por estresse?',
      cites: [CITE.patelStressFracture],
      a: 'A dor da fratura por estresse normalmente aumenta com a atividade, começou depois de um aumento repentino no volume de caminhada ou corrida e não alivia muito com repouso. Apertar as laterais do calcanhar pode reproduzi-la. A dor da fascite plantar normalmente melhora depois que você aquece e é pior nos primeiros passos depois do repouso. Se o padrão combina com uma fratura, procure um profissional de saúde antes de fazer exercícios.',
    },
    {
      q: 'Como aliviar a dor no calcanhar logo depois de uma caminhada?',
      a: 'Logo depois de uma caminhada, descanse o pé, coloque gelo no ponto dolorido por um tempo curto e evite voltar a andar descalço em piso duro. Isso alivia a dor do momento, mas não muda a causa. Os exercícios desta página, alongamento da panturrilha e da fáscia mais trabalho de força gradual, são o que muda a forma como o calcanhar aguenta a próxima caminhada.',
    },
    {
      q: 'Por que só um calcanhar dói depois de andar?',
      a: 'A dor no calcanhar depois de andar muitas vezes aparece em um pé só porque a carga numa caminhada quase nunca se divide igualmente entre as pernas. Um passo mais longo de um lado, uma lesão antiga, um sapato mais gasto em um pé ou carregar a bolsa sempre no mesmo ombro podem jogar mais esforço em um calcanhar. Com o tempo, os dois lados ainda podem passar a doer.',
    },
  ],
  redFlags: {
    h2: 'Procure primeiro um profissional de saúde se',
    bullets: [
      'a dor começou depois de uma lesão ou de uma queda',
      'você não consegue apoiar o pé, ou está mancando',
      'apertar as laterais do calcanhar reproduz a dor, o que pode indicar uma fratura por estresse',
      'a dor no calcanhar continua piorando a cada caminhada mesmo encurtando a distância',
      'ela vem com dormência, formigamento ou queimação',
      'o calcanhar está vermelho, quente ou inchado, ou você tem febre',
      'os dois calcanhares doem e a rigidez da manhã dura mais de 30\u00A0minutos, principalmente se outras articulações estão envolvidas',
      'a dor não deixa você dormir ou aparece em repouso',
      'não melhorou depois de várias semanas de alongamento, trabalho de panturrilha e controle da carga',
      'você tem diabetes, menos sensibilidade nos pés ou má circulação',
    ],
  },
  program: {
    h2: 'Fazendo isso como um plano',
    text: 'Você não precisa descobrir os exercícios, as doses nem quando passar para o próximo nível. O Walkito monta um plano uma semana de cada vez em torno de uma meta. Para dor no calcanhar, a primeira meta é dor da manhã em 1 de 10 ou menos por 14\u00A0dias seguidos. Se ontem você andou mais que o normal e a nota da manhã dispara, a sessão se ajusta sozinha.',
    more: [
      'Você escolhe 3, 5 ou 7 dias por semana e sessões de 3, 5 ou 10\u00A0minutos. A cada 14\u00A0dias (e depois a cada 28 quando a meta da manhã for alcançada), um teste curto mede a resistência da panturrilha, a sustentação do arco e o equilíbrio, para você ver se o trabalho está aumentando o quanto você consegue andar.',
      'O Walkito é um programa de exercícios. Ele não faz diagnóstico e não substitui um profissional de saúde. Se a dor no calcanhar depois de andar está piorando mesmo com os exercícios, procure primeiro um profissional de saúde.',
    ],
    cta: 'Comece com 3\u00A0minutos por dia.',
  },
  crumb: 'Dor no calcanhar depois de andar',
  campaign: 'guide-heel-after-walking-pt',
};
