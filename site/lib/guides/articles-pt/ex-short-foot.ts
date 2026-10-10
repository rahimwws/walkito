import { CITE } from '@/lib/citations';
import type { Guide } from '../types';

/*
 * Translated from `articles/ex-short-foot.ts` (2026-10-08). Brazilian
 * Portuguese, informal «você». Exercise names follow `pt.ts` («pé curto,
 * sentado / em pé / em uma perna», «puxar a toalha com os dedos»). Figures,
 * doses and citations are identical to the English page.
 */

export const EX_SHORT_FOOT_PT: Guide = {
  lang: 'pt',
  page: 'exShortFoot',
  published: '2026-10-08',
  updated: '2026-10-08',
  title: 'Exercício de pé curto: como fazer e progredir',
  description:
    'Como fazer o exercício de pé curto para pé chato: dicas de técnica, séries e repetições, de sentado a em pé, erros comuns e o que a pesquisa mostra.',
  h1: 'Exercício de pé curto: como fazer, séries e progressão',
  lede:
    'O exercício de pé curto treina os músculos pequenos de dentro do pé para sustentar o arco sem dobrar os dedos. Você puxa a parte da frente do pé em direção ao calcanhar para o arco encurtar e subir. É o exercício que uma revisão narrativa de 2015 chamou de base do treino do “core do pé” (foot core), e ele aparece na maioria dos programas para pé chato e fascite plantar que trabalham os músculos intrínsecos do pé.',
  takeaways: [
    'Um estudo de ressonância magnética de 2016 com 8\u00A0atletas mostrou que o pé curto produziu a maior ativação média (até 34,9%) em três dos quatro músculos plantares intrínsecos testados, em comparação com abrir os dedos, estender o dedão e estender do segundo ao quinto dedo (Gooding e colegas, 2016).',
    'Uma pesquisa com eletromiografia mostrou que o abdutor do hálux, o músculo que sustenta a parte de dentro do arco, ficou mais de quatro vezes mais ativo no pé curto do que ao puxar a toalha com os dedos (Jung e colegas, 2011).',
    'Uma metanálise de 2024 sobre o treino de pé curto em pessoas com pé chato mostrou que programas com mais de seis semanas melhoraram a queda do navicular, mas programas mais curtos não chegaram a um resultado significativo (Cheng e colegas, 2024).',
    'Adultos saudáveis que fizeram quatro semanas de exercícios de pé curto melhoraram o equilíbrio dinâmico mais do que um grupo que puxou a toalha com os dedos pelo mesmo período (Lynn e colegas, 2012).',
  ],
  toc: false,
  sections: [
    {
      h2: 'O que é o exercício de pé curto?',
      paragraphs: [
        'O exercício de pé curto é uma contração isométrica dos músculos intrínsecos do pé. Você diminui a distância entre a parte da frente do pé e o calcanhar puxando um em direção ao outro, o que levanta o arco. Os dedos ficam esticados e relaxados o tempo todo. Uma revisão de 2015 de McKeon e colegas o chamou de exercício central do seu modelo de “core do pé”, comparando os músculos intrínsecos do pé aos músculos profundos do core do tronco.',
        'Ele também é chamado de doming do arco, doming do pé ou exercício de encurtar o pé. É diferente de puxar a toalha com os dedos ou de dobrar os dedos, porque esses exercícios usam a flexão dos dedos, que recruta os músculos flexores longos dos dedos, que descem da canela. O exercício de pé curto busca isolar os músculos que ficam inteiramente dentro do pé.',
      ],
      cites: [CITE.mcKeon],
    },
    {
      h2: 'Como fazer o exercício de pé curto?',
      paragraphs: [
        'Sente-se em uma cadeira com os pés apoiados no chão, descalço. Posicione o pé de forma que o calcanhar, a parte da frente do pé e os cinco dedos fiquem no chão. Sem dobrar nem agarrar com os dedos, tente puxar a parte da frente do pé para trás, em direção ao calcanhar. O arco vai subir. Segure essa contração e solte.',
        'Pense em deixar o pé mais curto e mais alto, e não mais largo e mais achatado. Os dedos não devem pressionar o chão, sair do chão nem se dobrar para baixo. **Se você vê os dedos agarrando, está usando os músculos errados.** Comece colocando um dedo da mão embaixo do arco para sentir ele subir.',
      ],
      exercises: [
        {
          name: 'Pé curto, sentado',
          evidence: { level: 'moderate', why: 'Parte do programa testado em um ensaio randomizado de 2023 com pé chato (Brijwasi 2023). Sozinho, uma metanálise de 2024 encontrou resultados significativos só depois de seis semanas.' },
          dose: 'O Walkito começa com 3\u00A0séries de 10, segure 5\u00A0segundos, cada pé',
          how: 'Sente-se com os pés apoiados no chão. Puxe a parte da frente do pé em direção ao calcanhar para o arco subir. Mantenha os dedos relaxados e apoiados. Segure por cinco segundos e solte.',
          often: 'Toda sessão, enquanto for o seu nível',
          feel: 'O arco subindo, com os dedos relaxados',
          stop: 'A dor chegar a 6/10',
          media: 'short_foot_seated',
          caption: 'Pé curto, sentado: puxe a parte da frente do pé em direção ao calcanhar para o arco subir',
          alt: 'Uma figura sentada contraindo o arco de um pé, com os dedos apoiados no chão',
        },
      ],
      cites: [CITE.brijwasi, CITE.cheng],
    },
    {
      h2: 'Quais músculos o exercício de pé curto trabalha?',
      paragraphs: [
        'O exercício de pé curto trabalha os músculos plantares intrínsecos: o abdutor do hálux, o flexor curto dos dedos, o quadrado plantar e o abdutor do dedo mínimo. Esses músculos ficam inteiramente dentro do pé e sustentam o arco longitudinal medial por baixo.',
        'Um estudo de ressonância magnética de 2016, de Gooding e colegas, mediu a ativação muscular depois de 40\u00A0repetições de quatro exercícios diferentes para o pé em 8\u00A0atletas universitários. O pé curto produziu a maior ativação média em:',
        {
          list: [
            'Abdutor do dedo mínimo (34,9%).',
            'Abdutor do hálux (29,7%).',
            'Flexor curto dos dedos (24,8%).',
          ],
        },
        'Um estudo anterior de eletromiografia, de Jung e colegas (2011), mostrou que a atividade do abdutor do hálux era mais de quatro vezes maior no pé curto do que ao puxar a toalha com os dedos.',
        'É por isso que **o pé curto é considerado um exercício melhor do que puxar a toalha para trabalhar especificamente os músculos intrínsecos.** Puxar a toalha recruta os flexores longos dos dedos, os músculos extrínsecos que vão da canela até os dedos. O exercício de pé curto deixa esses músculos extrínsecos mais quietos.',
      ],
      cites: [CITE.gooding, CITE.jung],
    },
    {
      h2: 'Como progredir de sentado para em pé e para uma perna só?',
      paragraphs: [
        'Quando o pé curto sentado parecer fácil por duas sessões seguidas, o próximo passo é fazer em pé, sobre os dois pés. A mesma contração agora precisa sustentar o peso do corpo. Depois disso, o pé curto em uma perna acrescenta a exigência de equilíbrio e mostra qualquer diferença entre o seu lado esquerdo e o direito.',
        'Cada versão é o mesmo movimento. **A única coisa que muda é a carga.** Ficar em pé dobra a exigência sobre os músculos do arco. Em uma perna, ela mais ou menos dobra de novo, e você ainda precisa estabilizar o tornozelo.',
      ],
      exercises: [
        {
          name: 'Pé curto, em pé',
          evidence: { level: 'moderate', why: 'Parte do programa testado em um ensaio randomizado de 2023 com pé chato (Brijwasi 2023). Não foi testado sozinho.' },
          dose: 'O Walkito começa com 3\u00A0séries de 10, segure 5\u00A0segundos, os dois pés',
          how: 'Fique em pé com os dois pés no chão. Puxe a parte da frente de cada pé em direção ao calcanhar para os dois arcos subirem. Os dedos ficam esticados e apoiados. Só o arco se move.',
          often: 'Toda sessão, quando o pé curto sentado parecer fácil',
          feel: 'O arco trabalhando enquanto sustenta o seu peso',
          stop: 'A dor chegar a 6/10',
          media: 'short_foot_double',
          caption: 'Pé curto, em pé: dedos esticados e apoiados, só o arco sobe',
          alt: 'Uma figura em pé com os dois arcos visivelmente erguidos e os dedos apoiados',
        },
        {
          name: 'Pé curto, em uma perna',
          evidence: { level: 'moderate', why: 'Parte do programa testado em um ensaio randomizado de 2023 com pé chato (Brijwasi 2023). Não foi testado sozinho.' },
          dose: 'O Walkito começa com 3\u00A0séries de 10, segure 5\u00A0segundos, cada pé',
          how: 'Fique em pé em um pé só. Suba o arco do mesmo jeito de antes. Mantenha o dedão pressionando o chão de leve. Se o dedão levantar, o arco está compensando em vez de trabalhar.',
          often: 'Toda sessão, quando o pé curto em pé parecer fácil',
          feel: 'Trabalho mais forte no arco, com o dedão pressionando o chão',
          stop: 'A dor chegar a 6/10',
          media: 'short_foot_single',
          caption: 'Pé curto, em uma perna: suba o arco e mantenha o dedão no chão',
          alt: 'Uma figura em pé sobre um pé só, com o arco erguido e o dedão apoiado',
        },
      ],
      cites: [CITE.brijwasi],
    },
    {
      h2: 'Quais erros deixam o exercício de pé curto menos eficaz?',
      paragraphs: [
        {
          list: [
            'O erro mais comum é dobrar os dedos. Se os dedos flexionam e agarram o chão, o exercício vira uma flexão dos dedos e os flexores extrínsecos assumem. **Mantenha os dedos esticados e relaxados.** Algumas pessoas acham mais fácil levantar os dedos rapidinho, contrair o arco e depois apoiar os dedos de volta.',
            'O segundo erro é empurrar o pé para fora em vez de encurtá-lo. O movimento deve ser reto para trás, da parte da frente do pé em direção ao calcanhar, não de um lado para o outro.',
            'O terceiro é prender a respiração. Respire normalmente durante cada contração.',
          ],
        },
        'Se você não consegue sentir o arco subir, tente colocar um dedo ou uma caneta embaixo do arco. O objetivo é sentir o arco pressionar esse objeto. Pode levar várias sessões até o cérebro aprender a ativar esses músculos sob comando. Essa curva de aprendizado é normal.',
      ],
    },
    {
      h2: 'O que a pesquisa diz sobre os exercícios de pé curto?',
      keyFact: 'Em um ensaio de 2023 com 52\u00A0pessoas com pé chato flexível, um programa de seis semanas que juntava exercícios de pé curto, trabalho de tornozelo, fortalecimento de quadril e alongamentos mudou o formato do arco mais do que em um grupo controle (Brijwasi e Borkar, 2023).',
      paragraphs: [
        'A evidência mais forte vem de programas que juntam o exercício de pé curto com outros exercícios, não do pé curto sozinho. Em um ensaio de 2023 com 52\u00A0pessoas com pé chato flexível, Brijwasi e Borkar testaram um programa de seis semanas com:',
        {
          list: [
            'Exercícios de pé curto.',
            'Trabalho de tornozelo.',
            'Fortalecimento de quadril.',
            'Alongamentos.',
          ],
        },
        'O programa mudou duas medidas do formato do arco mais do que no grupo controle.',
        'Uma metanálise de 2024, de Cheng e colegas, analisou o treino de pé curto sozinho em vários ensaios. Os resultados combinados não mostraram melhora significativa na queda do navicular nem no índice de postura do pé no geral. Mas quando os revisores limitaram a análise a programas com mais de seis semanas, a queda do navicular melhorou de forma significativa. A duração do treino importa.',
        'Sobre equilíbrio, um ensaio randomizado de 2012, de Lynn e colegas, comparou quatro semanas de treino de pé curto com quatro semanas de puxar a toalha com os dedos em adultos saudáveis. O grupo do pé curto melhorou o equilíbrio dinâmico mais do que o grupo da toalha.',
        'Nenhum desses estudos é grande. **A evidência apoia o exercício de pé curto como parte de um programa mais amplo de fortalecimento do pé, principalmente para pé chato e dor no arco.** Ele não é uma solução isolada, e não foi testado sozinho como tratamento principal para fascite plantar. Para a lista completa de exercícios, veja [exercícios para pé chato](/pt/exercicios-pe-chato/) ou [exercícios para fascite plantar](/pt/exercicios-fascite-plantar/).',
      ],
      cites: [CITE.brijwasi, CITE.cheng, CITE.lynn],
    },
  ],
  faq: [
    {
      q: 'Quanto tempo o exercício de pé curto leva para funcionar?',
      cites: [CITE.cheng],
      a: 'Uma metanálise de 2024 mostrou que programas de treino de pé curto com menos de seis semanas não mudaram de forma significativa a altura do arco, mas programas com mais de seis semanas melhoraram a queda do navicular (Cheng 2024). Conte com pelo menos seis a oito semanas de prática regular antes de aparecerem mudanças mensuráveis.',
    },
    {
      q: 'O exercício de pé curto é a mesma coisa que o doming do arco?',
      a: 'Sim. Exercício de pé curto, doming do arco e doming do pé descrevem o mesmo movimento: puxar a parte da frente do pé em direção ao calcanhar para subir o arco sem dobrar os dedos. O nome “pé curto” vem do pé ficando visivelmente mais curto quando o arco sobe.',
    },
    {
      q: 'Posso fazer o exercício de pé curto com fascite plantar?',
      cites: [CITE.guideline],
      a: 'O exercício de pé curto não faz parte da principal diretriz para fascite plantar, que se concentra em alongamento e em elevações de calcanhar com carga. Mas fortalecer os músculos intrínsecos do pé pode ajudar como parte de um programa mais amplo. Veja [exercícios para fascite plantar](/pt/exercicios-fascite-plantar/) para os exercícios apoiados pela diretriz.',
    },
    {
      q: 'O pé curto é melhor do que puxar a toalha com os dedos?',
      cites: [CITE.jung, CITE.lynn],
      a: 'Para trabalhar especificamente os músculos intrínsecos do pé, sim. A eletromiografia mostra que o abdutor do hálux fica mais de quatro vezes mais ativo no pé curto do que ao puxar a toalha (Jung 2011). Um ensaio randomizado separado mostrou que o grupo do pé curto melhorou mais o equilíbrio do que o grupo da toalha depois de quatro semanas (Lynn 2012). Puxar a toalha ainda tem seu lugar como um exercício inicial mais simples.',
    },
    {
      q: 'Quantas séries e repetições do pé curto devo fazer?',
      cites: [CITE.brijwasi],
      a: 'O Walkito começa com 3\u00A0séries de 10\u00A0repetições, segurando cada uma por 5\u00A0segundos, em cada pé. O ensaio de 2023 com pé chato usou uma faixa parecida. Aumente a dificuldade passando de sentado para em pé e para uma perna só, em vez de acrescentar mais repetições.',
    },
  ],
  redFlags: {
    h2: 'Procure primeiro um profissional de saúde se',
    bullets: [
      'a dor no arco começou depois de uma lesão repentina ou de um estalo, o que pode indicar uma ruptura da fáscia plantar',
      'você tem dormência, formigamento ou queimação no pé, o que pode indicar envolvimento de um nervo',
      'um pé está rígido e o arco não sobe nada quando você fica na ponta dos pés, o que pode precisar de exame de imagem',
      'a dor está piorando de semana em semana mesmo com exercício regular',
    ],
  },
  program: {
    h2: 'Fazendo isso como um plano',
    text: 'O Walkito monta um plano que inclui o exercício de pé curto em uma progressão de três degraus: sentado, em pé e depois em uma perna. Cada degrau se abre quando duas sessões no nível atual pareceram fáceis. Você escolhe sessões de 3, 5 ou 10\u00A0minutos, e um teste a cada 14\u00A0dias mostra se o tempo de sustentação do arco está melhorando.',
    cta: 'Comece com 3\u00A0minutos por dia.',
  },
  crumb: 'Exercício de pé curto',
  campaign: 'ex-short-foot-pt',
};
