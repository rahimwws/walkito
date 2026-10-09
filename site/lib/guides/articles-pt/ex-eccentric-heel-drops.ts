import { CITE } from '@/lib/citations';
import type { Guide } from '../types';

/**
 * Translated from `articles/ex-eccentric-heel-drops.ts` (2026-10-08).
 * Brazilian Portuguese, informal «você». Terms follow
 * `articles-pt/achilles.ts`. No new citations; uses only existing CITE keys.
 */

export const EX_ECCENTRIC_HEEL_DROPS_PT: Guide = {
  lang: 'pt',
  page: 'exEccentricHeelDrops',
  mainSource: CITE.alfredson,
  published: '2026-10-08',
  updated: '2026-10-08',
  title: 'Descida excêntrica do calcanhar: como fazer certo',
  description:
    'Como fazer a descida excêntrica do calcanhar para o tendão de Aquiles: o protocolo de Alfredson, séries, repetições, ritmo e erros comuns.',
  h1: 'Descida excêntrica do calcanhar: como fazer, séries, repetições e o que a pesquisa diz',
  lede:
    'A descida excêntrica do calcanhar é um exercício de força em que você sobe com os dois pés e desce devagar em um só, deixando o calcanhar afundar abaixo da beira de um degrau. A fase de descida, chamada de contração excêntrica, é o objetivo. O exercício foi criado para a tendinopatia de Aquiles e testado pela primeira vez em um ensaio de 1998 de Alfredson, em que 15\u00A0atletas voltaram a correr depois de fazê-lo duas vezes por dia por três meses.',
  takeaways: [
    'A diretriz de 2024 para o Aquiles dá ao exercício (todos os tipos de carga no tendão) o grau **A**, o mais alto, na tendinopatia de Aquiles no meio do tendão (Chimenti e colegas, 2024).',
    'Uma metanálise em rede de 2021 com 29\u00A0ensaios randomizados não encontrou nenhum protocolo de exercício claramente melhor que outro; todos foram melhores que nenhum exercício (van der Vlist e colegas, 2021).',
    'Na dor de Aquiles insercional (bem no osso do calcanhar), a descida do calcanhar deve ficar no nível do chão, sem passar da beira do degrau, porque a dorsiflexão profunda comprime o tendão contra o osso (Jonsson e colegas, 2008).',
    'O protocolo de Alfredson pede 3 x 15 duas vezes por dia, sete dias por semana, por cerca de três meses. O Walkito começa com 3 x 10, cada perna, nos dias de força.',
  ],
  toc: false,
  sections: [
    {
      h2: 'O que é a descida excêntrica do calcanhar?',
      paragraphs: [
        'Uma contração muscular excêntrica é aquela em que o músculo se alonga sob carga. Na descida do calcanhar, a panturrilha se alonga enquanto você desce o calcanhar abaixo do degrau. Essa descida controlada é o que constrói a capacidade do tendão ao longo das semanas. A subida é feita com os dois pés, para tirar o esforço concêntrico do lado machucado.',
        'A confusão mais comum é entre a descida do calcanhar e o alongamento de panturrilha. O alongamento fica parado na posição de baixo. A descida do calcanhar passa por ela devagar, com o músculo trabalhando o caminho todo. Ficar parado embaixo como em um alongamento tira o estímulo de carga que faz o exercício funcionar. O benefício está na descida lenta e controlada.',
      ],
      cites: [CITE.alfredson],
    },
    {
      h2: 'Como fazer a descida excêntrica do calcanhar?',
      paragraphs: [
        'Fique na beira de um degrau com a parte da frente dos pés no degrau e os calcanhares para fora da beira. Suba com os dois pés. Passe o peso para a perna que vai trabalhar. Desça esse calcanhar devagar, em uns três segundos, deixando-o afundar abaixo do degrau. Mantenha o joelho esticado. Use os dois pés para voltar lá para cima.',
        'A descida com o joelho esticado trabalha o gastrocnêmio, o músculo maior e mais superficial da panturrilha. Alfredson também prescreveu uma versão com o joelho dobrado para trabalhar o sóleo, o músculo mais profundo da panturrilha. A versão com o joelho dobrado é o mesmo movimento com o joelho dobrado a uns 30 a 45\u00A0graus durante a descida.',
      ],
      exercises: [
        {
          name: 'Descida excêntrica do calcanhar (joelho esticado)',
          evidence: {
            level: 'strong',
            why: 'O protocolo original de Alfredson de 1998. A diretriz de 2024 dá ao exercício o grau A na tendinopatia de Aquiles no meio do tendão.',
          },
          dose: 'Alfredson: 3 x 15, duas vezes por dia, cerca de três meses. O Walkito começa com 3 x 10, cada perna',
          how: 'Fique na beira de um degrau. Suba com os dois pés, passe para uma perna e desça devagar em três segundos. O calcanhar afunda abaixo do degrau. Use os dois pés para voltar a subir. Joelho esticado.',
          often: 'Duas vezes por dia no protocolo de Alfredson. Walkito: dias de força.',
          feel: 'Trabalho pesado na panturrilha durante a descida, não um alongamento embaixo',
          stop: 'Dor acima de 5/10 que não passa até a manhã seguinte',
          media: 'heel_drop_straight',
          caption: 'Descida excêntrica do calcanhar: suba com os dois pés, desça devagar com um',
          alt: 'Uma figura em um degrau descendo um calcanhar abaixo da beira do degrau com o joelho esticado, com a panturrilha e o tendão de Aquiles destacados',
        },
      ],
      cites: [CITE.alfredson, CITE.achillesGuideline],
    },
    {
      h2: 'O protocolo de Alfredson: séries, repetições e progressão',
      paragraphs: [
        'O protocolo original é 3\u00A0séries de 15\u00A0repetições com o joelho esticado, mais 3\u00A0séries de 15 com o joelho dobrado, feitas duas vezes por dia, sete dias por semana, por cerca de três meses. São 180\u00A0repetições por dia. Quando o exercício fica sem dor com o peso do corpo, acrescenta-se carga com uma mochila.',
        'O Walkito começa com um volume menor: 3\u00A0séries de 10, cada perna, nos dias de força. A dose de Alfredson é alta e o esforço para manter a rotina é real. Um ensaio de 2014 de Stevens e Tan encontrou que um protocolo excêntrico «conforme a tolerância», com menos repetições, deu melhoras iguais na dor e na função, e por isso as orientações mais recentes são menos rígidas quanto a cumprir as 180 diárias.',
      ],
      table: {
        caption: 'Protocolo de descida excêntrica do calcanhar de Alfredson (1998)',
        head: ['Variação', 'Séries x repetições', 'Sessões por dia', 'Frequência'],
        rows: [
          ['Joelho esticado', '3 x 15', '2', 'Todo dia, cerca de três meses'],
          ['Joelho dobrado', '3 x 15', '2', 'Todo dia, cerca de três meses'],
        ],
      },
      cites: [CITE.alfredson, CITE.achillesGuideline],
    },
    {
      h2: 'Quanta dor é aceitável na descida excêntrica do calcanhar?',
      paragraphs: [
        'Em um ensaio de Silbernagel (2007) com 38\u00A0pessoas, um grupo continuou correndo e colocando carga durante a reabilitação seguindo uma regra de monitorar a dor: a dor durante e depois da carga podia chegar a cerca de **5 de 10**, desde que passasse até a manhã seguinte e não piorasse de semana em semana. Esse grupo se saiu tão bem aos doze meses quanto o grupo que descansou primeiro.',
        'Isso é diferente da regra de parar em 6/10 usada na página de [fascite plantar](/pt/exercicios-fascite-plantar/). O número 5/10 vem de um estudo específico do Aquiles, não de um padrão universal, mas é o modelo de dor mais citado na reabilitação do Aquiles. Dor que não passa durante a noite ou piora a cada semana quer dizer que a carga está alta demais.',
      ],
      cites: [CITE.silbernagel],
    },
    {
      h2: 'Dor insercional ou no meio do tendão: isso muda o exercício?',
      keyFact: 'Em um estudo piloto de 2008 com 27\u00A0pessoas com dor de Aquiles insercional, a carga excêntrica no nível do chão, sem descer abaixo da posição neutra, deu bons resultados em 67\u00A0por cento dos casos (Jonsson e colegas, 2008).',
      paragraphs: [
        'A tendinopatia de Aquiles no meio do tendão fica no corpo do tendão, em geral de 2 a 6\u00A0centímetros acima do osso do calcanhar. As descidas excêntricas padrão passando da beira de um degrau são adequadas aqui.',
        'A tendinopatia de Aquiles insercional é dor bem no ponto onde o tendão se prende no osso. Em um estudo piloto de 2008 com 27\u00A0pessoas com dor insercional crônica, um protocolo adaptado com carga excêntrica só no nível do chão, sem descer abaixo da posição neutra, relatou bons resultados em 67\u00A0por cento dos casos. A dorsiflexão profunda comprime o tendão contra o osso do calcanhar, o que torna as descidas profundas padrão contraproducentes na dor insercional.',
        'Se a sua dor é bem na parte de trás do osso do calcanhar, faça todas as descidas do calcanhar no chão. Não desça abaixo da beira do degrau. Não faça alongamentos fortes. Essa é a adaptação que mais passa despercebida nos programas para o Aquiles. Para a página completa sobre o problema, veja [exercícios para tendinite de Aquiles](/pt/tendinite-de-aquiles-exercicios/).',
      ],
      cites: [CITE.jonsson, CITE.achillesGuideline],
    },
    {
      h2: 'Quais são os erros comuns na descida excêntrica do calcanhar?',
      paragraphs: [
        'Ficar parado embaixo como em um alongamento. O benefício está na descida lenta, não em ficar pendurado embaixo. Desça em três segundos e use logo os dois pés para voltar a subir.',
        'Descer demais. O calcanhar deve afundar até a amplitude natural dele abaixo do degrau. Forçar mais para baixo, inclinando o pé para dentro ou para fora para ganhar amplitude, sobrecarrega os tendões da parte de dentro ou de fora do tornozelo. Três a cinco centímetros abaixo do degrau bastam.',
        'Ir rápido demais. A velocidade tira a carga excêntrica, que é a base do exercício. Se você não consegue controlar a descida em uns três segundos, volte primeiro para uma versão com os dois pés.',
        'Pular a versão com o joelho dobrado. A descida com o joelho esticado trabalha o gastrocnêmio. A versão com o joelho dobrado trabalha o sóleo. Os dois músculos fazem parte do tendão de Aquiles. O protocolo original inclui as duas.',
      ],
    },
    {
      h2: 'Versões mais fáceis e mais difíceis',
      paragraphs: [
        'Se a descida excêntrica em uma perna dói demais ou está difícil demais agora, volte para a [elevação de calcanhar](/pt/exercicios/elevacao-de-calcanhar/) com os dois pés ou para a [elevação de calcanhar sustentada](/pt/exercicios/elevacao-de-calcanhar/). Elas constroem a força de base de que o trabalho excêntrico precisa.',
        'Se o peso do corpo está fácil demais, acrescente carga. O protocolo original usava uma mochila. Um colete com peso ou uma máquina de panturrilha também servem. A diretriz também cita a resistência pesada e lenta (3\u00A0dias por semana, cargas mais pesadas, menos repetições) como igualmente eficaz, com base em um ensaio de 2015 com 58\u00A0pessoas.',
      ],
      cites: [CITE.beyer, CITE.vanDerVlist],
    },
  ],
  faq: [
    {
      q: 'Descida excêntrica do calcanhar é a mesma coisa que elevação de calcanhar?',
      cites: [CITE.alfredson],
      a: 'Não. A elevação de calcanhar tem a fase de subida e a de descida. A descida excêntrica usa os dois pés para subir e um pé só para descer devagar. Só a fase de descida (excêntrica) é feita no lado machucado. A subida (concêntrica) é dividida. Essa diferença importa porque controla quanta carga o tendão recebe a cada repetição.',
    },
    {
      q: 'Dá para fazer a descida excêntrica do calcanhar no chão?',
      cites: [CITE.jonsson],
      a: 'Sim, e você deve fazer assim se a sua dor é no ponto onde o tendão se prende ao osso do calcanhar (insercional). Um estudo piloto de 2008 encontrou bons resultados com carga excêntrica no nível do chão, sem descer abaixo da posição neutra. Na dor no meio do tendão, o degrau dá amplitude extra, mas o chão ainda dá uma carga excêntrica.',
    },
    {
      q: 'A descida excêntrica do calcanhar deve doer?',
      cites: [CITE.silbernagel],
      a: 'Algum desconforto é esperado. Um ensaio permitiu dor de até cerca de 5 de 10 durante a carga, desde que ela passasse até a manhã seguinte e não piorasse de semana em semana (Silbernagel 2007). Dor que continua alta durante a noite ou aumenta a cada semana é o sinal para diminuir a carga.',
    },
    {
      q: 'Quanto tempo a descida excêntrica do calcanhar leva para fazer efeito?',
      cites: [CITE.achillesGuideline, CITE.alfredson],
      a: 'A recuperação da tendinopatia de Aquiles é medida em meses. O ensaio original fez o protocolo por cerca de três meses. A diretriz de 2024 observa que a melhora na função pode aparecer em duas semanas, mas a recuperação mais completa vai bem além disso. Nenhum ensaio promete um prazo fixo.',
    },
    {
      q: 'Descida excêntrica do calcanhar ajuda na fascite plantar?',
      cites: [CITE.rathleff],
      a: 'A descida excêntrica foi criada para o tendão de Aquiles, não para a fáscia plantar. Na fascite plantar, o exercício testado é a [elevação de calcanhar com toalha](/pt/exercicios/elevacao-calcanhar-toalha/), que acrescenta uma toalha embaixo dos dedos para trabalhar a fáscia. A descida do calcanhar aparece mais tarde na sequência da panturrilha do Walkito, depois da elevação com toalha.',
    },
  ],
  redFlags: {
    h2: 'Procure um profissional de saúde antes se',
    bullets: [
      'você sentiu um estalo repentino ou a sensação de ter levado um chute na parte de trás da perna',
      'a região do tendão está inchada, vermelha, quente ou tem um afundamento visível',
      'você está tomando ou tomou recentemente um antibiótico do grupo das fluoroquinolonas e tem uma dor nova no tendão',
      'a dor é no ponto onde o tendão se prende ao osso do calcanhar e piora com a carga, em vez de melhorar',
      'a dor aparece em repouso ou acorda você à noite',
      'você não consegue subir na ponta do pé de jeito nenhum no lado dolorido',
    ],
  },
  program: {
    h2: 'Fazendo isso como um plano',
    text: 'A descida excêntrica do calcanhar é um degrau na sequência da panturrilha que o Walkito monta em um plano semanal. A sequência começa com a elevação sentado e sobe pela elevação com os dois pés, a sustentada, a elevação com toalha, a descida do calcanhar e os saltitos curtos na ponta dos pés. Cada degrau abre quando duas sessões no nível atual pareceram fáceis.',
    more: [
      'Você escolhe 3, 5 ou 7\u00A0dias por semana e sessões de 3, 5 ou 10\u00A0minutos. A cada 14\u00A0dias, um teste curto mede a resistência da panturrilha e o equilíbrio. Se a dor é bem no ponto onde o tendão se prende ao osso do calcanhar, peça para um profissional de saúde avaliar antes de colocar muita carga. O Walkito é um programa de exercícios. Ele não faz diagnóstico.',
    ],
    cta: 'Comece com 3\u00A0minutos por dia.',
  },
  crumb: 'Descida excêntrica do calcanhar',
  campaign: 'ex-eccentric-heel-drops-pt',
};
