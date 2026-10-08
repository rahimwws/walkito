import { CITE } from '@/lib/citations';
import type { Guide } from '../types';

/*
 * ── Quanto tempo dura a fascite plantar (PT) ──────────────────────────
 *
 * Translated from `articles/pf-duration.ts`, written around the Brazilian
 * Portuguese queries «quanto tempo dura a fascite plantar», «fascite plantar
 * passa sozinha», «fascite plantar crônica». Informal «você». Figures, grades and
 * qualifiers are identical to the English page.
 */

export const PF_DURATION_PT: Guide = {
  lang: 'pt',
  page: 'pfDuration',
  mainSource: CITE.hansen,
  published: '2026-10-08',
  updated: '2026-10-08',
  title: 'Quanto tempo dura a fascite plantar? O que a evidência diz',
  description:
    'Quanto tempo dura a fascite plantar, o que faz a recuperação demorar mais, o que fazer se não está melhorando e como saber se a sua está melhorando.',
  h1: 'Quanto tempo dura a fascite plantar? O que a evidência realmente diz',
  lede:
    'A resposta honesta é: depende, e a maioria das fontes subestima o quanto isso varia. Uma revisão de 2020 relata que cerca de 90% das pessoas melhoram com tratamento sem cirurgia, como alongamento e palmilhas. Um acompanhamento mais longo de 174\u00A0pessoas conta uma história com mais nuances: cerca de metade estava sem sintomas aos cinco anos, e 46% ainda tinham alguma dor depois de dez anos em média, embora a maioria deles relatasse só sintomas leves.',
  intro: [
    'A página de [exercícios para fascite plantar](/pt/exercicios-fascite-plantar/) traz os exercícios, a evidência e os graus da diretriz. Esta página responde à pergunta que vem depois: quanto tempo tudo isso leva, o que faz levar mais tempo, e quais são as opções se as coisas não estão melhorando?',
  ],
  takeaways: [
    'Uma revisão de 2020 relata que cerca de 90% dos casos de fascite plantar respondem ao tratamento sem cirurgia, muitas vezes em alguns meses (Latt e colegas, 2020).',
    'Um grupo de 174\u00A0pacientes acompanhado a longo prazo mostrou que o risco de ainda ter fascite plantar era de 80,5% com um ano, 50,0% com cinco anos e 45,6% com dez anos desde o início dos sintomas (Hansen e colegas, 2018).',
    'Os preditores significativos de recuperação mais lenta nesse grupo foram ser mulher e ter dor nos dois calcanhares. IMC, idade, espessura da fáscia e esporão não tiveram efeito significativo no prognóstico (Hansen e colegas, 2018).',
    'A diretriz de 2023 para dor no calcanhar dá ao alongamento o grau **A** e ao treino de força um **B**. Talas noturnas para dor da manhã que não passa recebem um **A**, e laser de baixa intensidade ou agulhamento seco feitos por um profissional, um **B** (Koc e colegas, 2023).',
    'A dor da manhã numa escala de 0 a 10, anotada todo dia, é o jeito mais prático de ver se a recuperação está indo na direção certa.',
  ],
  toc: true,
  sections: [
    {
      h2: 'Quanto tempo a fascite plantar costuma durar?',
      keyFact: 'Em um grupo de 174\u00A0pessoas, o risco de ainda ter sintomas de fascite plantar era de 80,5% com um ano, caindo para 45,6% com dez anos (Hansen e colegas, 2018).',
      paragraphs: [
        'Não existe um número único. A recuperação depende de há quanto tempo você tem a dor, do que você faz a respeito, e de alguns fatores que você não controla.',
        'Uma revisão da literatura de 2020 diz que as abordagens sem cirurgia funcionam para cerca de 90% das pessoas com fascite plantar, normalmente em três a seis meses (Latt e colegas, 2020).',
        'Um estudo de coorte de 2018 dá a visão mais longa. Hansen e colegas acompanharam 174\u00A0pacientes com fascite plantar diagnosticada por ultrassom por 9,7\u00A0anos em média desde o início dos sintomas. No acompanhamento, 54% estavam sem sintomas e 46% ainda tinham alguma dor.',
        'A análise de Kaplan-Meier mostrou que o risco de ainda ter fascite plantar era de 80,5% com um ano, 50,0% com cinco anos e 45,6% com dez anos. Entre os que ficaram sem sintomas, a duração média dos sintomas foi de 725\u00A0dias, cerca de dois anos (Hansen e colegas, 2018).',
        'Esses números parecem piores que o habitual “passa em alguns meses”. Duas coisas explicam a diferença. Primeiro, o grupo de Hansen era uma população encaminhada para especialista: 93% tinham recebido uma injeção de corticoide, o que sugere que eram casos mais difíceis, não pessoas cuja dor melhorou com alongamento e calçados melhores.',
        'Segundo, os pacientes que ainda tinham sintomas no acompanhamento relataram, em média, só uma dor leve, com nota de cerca de 2 a 3 de 10 ao caminhar. Então “ainda com sintomas aos dez anos” não quer dizer necessariamente “sem conseguir andar”. Para muitos, significava um desconforto de vez em quando em vez da dor forte nos primeiros passos do começo.',
      ],
      sourceNote:
        'Hansen 2018: risco de FP por Kaplan-Meier: 80,5% (IC 95%: 73,5-85,6) com 1\u00A0ano, 50,0% (42,4-57,1) com 5\u00A0anos, 45,6% (37,9-53,0) com 10\u00A0anos, 44,0% (35,9-51,8) com 15\u00A0anos. Duração média dos sintomas no grupo sem sintomas: 725\u00A0dias (variação de 41 a 4018). NRS do grupo com sintomas no acompanhamento: 0,7 em repouso, 1,8 caminhando, 2,8 correndo, 2,1 à pressão.',
      cites: [CITE.latt, CITE.hansen],
    },
    {
      h2: 'A fascite plantar passa sozinha?',
      paragraphs: [
        'Às vezes. Algumas pessoas acordam um dia e a dor sumiu, sem nenhuma intervenção específica. Mas “passa sozinha” não é uma previsão útil para ninguém, porque não há como saber de antemão se você está nesse grupo.',
        'O que a evidência diz é que fazer alguma coisa a respeito (alongar, fortalecer a panturrilha, usar calçados com bom suporte) tende a adiantar a melhora. No ensaio de Rathleff, 48\u00A0pessoas com fascite plantar foram divididas em dois grupos: um fez elevações de calcanhar com carga e uma toalha embaixo dos dedos, o outro alongou a fáscia plantar.',
        'O grupo das elevações de calcanhar melhorou mais rápido aos três meses. Com um ano, os dois grupos estavam mais ou menos iguais (Rathleff e colegas, 2015). Ou seja, os exercícios não produziram uma melhora final maior, mas a adiantaram. Se ela teria vindo tão rápido sem nenhuma das duas intervenções, não se sabe.',
        'A diretriz de 2023 recomenda alongamento (grau A) e treino de força (grau B) como as primeiras coisas a tentar, junto com orientação sobre calçados. A diretriz não diz “espere para ver”. Ela diz “comece isso e acompanhe” (Koc e colegas, 2023). Se a dor é na parte de trás do calcanhar e não embaixo dele, veja [exercícios para tendinite de Aquiles](/pt/tendinite-de-aquiles-exercicios/).',
      ],
      cites: [CITE.rathleff, CITE.guideline],
    },
    {
      h2: 'O que faz a recuperação demorar mais?',
      keyFact: 'Em um grupo de 174\u00A0pessoas, as mulheres ficaram sem sintomas a cerca de metade do ritmo dos homens, e as pessoas com dor nos dois calcanhares se recuperaram a cerca de um terço do ritmo de quem tinha dor de um lado só (Hansen e colegas, 2018).',
      paragraphs: [
        'O grupo de Hansen 2018 testou vários fatores do início contra o tempo que os sintomas duraram. Dois deram resultado significativo.',
        '**Ser mulher.** Para cada 100 homens que ficavam sem sintomas por ano, só 49 mulheres ficavam (razão de taxas de risco de 0,49, P menor que 0,01). O motivo não está estabelecido. Os autores citaram diferenças hormonais, hábitos de calçado e fatores físicos como possibilidades, sem evidência para escolher entre elas (Hansen e colegas, 2018).',
        '**Dor nos dois calcanhares.** Quem tinha dor nos dois calcanhares no início tinha cerca de um terço da taxa anual de ficar sem sintomas em comparação com quem tinha dor de um lado só (razão de taxas de risco de 0,33, P menor que 0,01).',
        'Os autores observaram que a dor nos dois lados pode refletir uma condição inflamatória não reconhecida, já que dor nos pontos onde os tendões se prendem ao osso, dos dois lados, é uma característica de algumas formas de artrite. Ninguém no grupo tinha um diagnóstico inflamatório conhecido, mas não foi feito nenhum exame de sangue para rastrear isso (Hansen e colegas, 2018).',
        'IMC, idade, tabagismo, trabalho fisicamente pesado, espessura da fáscia no ultrassom e presença de esporão não tiveram efeito significativo no prognóstico nesse estudo. Esse último achado surpreende muita gente: o esporão não fez a dor durar mais nem menos (P = 0,88). Estudos anteriores também não encontraram relação entre esporão e sintomas.',
        'Se os dois calcanhares doem e a rigidez da manhã dura muito ou outras articulações estão envolvidas, vale contar isso a um profissional de saúde, mesmo que os exercícios estejam ajudando. Veja [dor no calcanhar ao acordar](/pt/dor-no-calcanhar-ao-acordar/) para saber mais sobre quando a dor nos dois lados é um sinal de alerta.',
      ],
      sourceNote:
        'Regressão de Cox de Hansen 2018: sexo feminino HRR 0,49 (IC 95%: 0,30-0,80, P < 0,01), dor bilateral HRR 0,33 (0,15-0,72, P < 0,01). IMC (>25 vs ≤25): HRR 0,65 (0,40-1,06, P = 0,09). Idade (>40 vs ≤40): HRR 1,93 (0,99-3,73, P = 0,05). Esporão: HRR 0,96 (0,56-1,63, P = 0,88).',
      cites: [CITE.hansen],
    },
    {
      h2: 'O que significa fascite plantar “crônica”?',
      paragraphs: [
        'Não existe uma definição única aceita por todos. Algumas fontes chamam a fascite plantar de crônica quando dura mais de três meses, outras usam seis meses. A diretriz de 2023 não define um limite. Uma revisão de 2020 descreve a fascite plantar crônica como “a causa mais comum de dor crônica no calcanhar em adultos”, sem dar um limite em meses (Latt e colegas, 2020).',
        'O padrão importa mais que o rótulo. A fascite plantar crônica normalmente significa que a dor forte nos primeiros passos da manhã virou uma dor mais surda e mais constante. O tecido também muda com o tempo: a palavra “fascite” sugere inflamação, mas os casos crônicos costumam ser descritos como um processo degenerativo e não inflamatório. É por isso que as injeções de corticoide, que agem na inflamação, muitas vezes ajudam a curto prazo, mas não a longo prazo.',
        'Se você tem fascite plantar há mais de alguns meses e ela não está claramente melhorando, a próxima seção mostra o que a diretriz recomenda.',
      ],
      cites: [CITE.latt, CITE.guideline],
    },
    {
      h2: 'Quais marcos são realistas?',
      keyFact: 'No ensaio de Rathleff, o grupo das elevações de calcanhar teve 29\u00A0pontos a mais de melhora (nota mais baixa) no Foot Function Index que o grupo do alongamento aos três meses, uma diferença descrita como grande e mensurável (Rathleff e colegas, 2015).',
      paragraphs: [
        'Nenhum estudo dá um cronograma semana a semana que sirva para todo mundo, e qualquer artigo que dê está chutando. O que a evidência oferece são alguns marcos que a maioria das pessoas vai reconhecer.',
        '**Primeiras semanas.** A dor da manhã pode não mudar muito. O ensaio de Rathleff mostrou uma diferença relevante entre os grupos com três meses, não com três semanas. No começo, a principal mudança é que os exercícios ficam mais fáceis de fazer e a panturrilha fica menos tensa. Vale prestar atenção nisso mesmo que o calcanhar ainda doa.',
        '**De um a três meses.** No ensaio de Rathleff, o grupo das elevações de calcanhar teve 29\u00A0pontos a mais de melhora no Foot Function Index que o grupo que só alongava, aos três meses. É uma diferença grande e mensurável. Muitas pessoas começam a perceber que a dor da manhã está um pouco menor na maioria dos dias, ou que os primeiros passos estão rígidos em vez de doloridos (Rathleff e colegas, 2015).',
        '**De três a seis meses.** O intervalo da revisão de 2020, “muitas vezes em três a seis meses”, coloca aqui o meio da melhora para a maioria das pessoas que estão fazendo os exercícios recomendados e usando calçados com bom suporte (Latt e colegas, 2020).',
        '**Seis meses ou mais.** A diretriz de 2023 sugere considerar outras opções se vários meses de alongamento, fortalecimento e mudança de calçado não ajudaram o suficiente. O grupo de Hansen mostra que a melhora ainda pode acontecer depois de um ano ou mais: a curva de sobrevida continuou caindo devagar até o quinto ano, mas o ritmo da melhora diminui. Se a dor está parada ou aumentando, e não só melhorando devagar, veja a próxima seção.',
        'O número útil não é “quantas semanas até eu terminar”, e sim “a minha dor da manhã está menor este mês do que no mês passado?”. Essa tendência é o marco.',
      ],
      cites: [CITE.rathleff, CITE.latt, CITE.hansen],
    },
    {
      h2: 'O que fazer se a fascite plantar não está melhorando?',
      paragraphs: [
        'Se vários meses de alongamento diário, fortalecimento da panturrilha e calçados com bom suporte não mudaram nada, a diretriz de 2023 para dor no calcanhar lista várias outras opções com os graus de evidência delas. Elas estão descritas abaixo de forma neutra. Nenhuma vem com garantia, e todas envolvem um profissional de saúde.',
      ],
      table: {
        caption: 'Opções e graus da diretriz de 2023 para dor no calcanhar que não passa',
        head: ['Opção', 'Grau', 'O que significa em palavras simples'],
        rows: [
          ['Terapia manual (mobilização das articulações e dos tecidos moles)', '**A**', 'O grau máximo da diretriz, feita por um profissional, para restrições de articulação e de flexibilidade.'],
          ['Alongamento da fáscia plantar e da panturrilha', '**A**', 'O grau máximo da diretriz. Recomendado como a base do tratamento conservador.'],
          ['Bandagem no pé (rígida ou elástica)', '**A**', 'Grau máximo para dor e função a curto prazo, junto com outros cuidados.'],
          ['Talas noturnas por 1 a 3\u00A0meses (dor da manhã que não passa)', '**A**', 'Grau máximo para quem continua com dor nos primeiros passos. Veja [dor no calcanhar ao acordar](/pt/dor-no-calcanhar-ao-acordar/).'],
          ['Treino de resistência e de força (por exemplo, elevações de calcanhar com carga)', '**B**', 'Segundo grau mais alto. Adiantou a melhora em um ensaio com 48\u00A0pessoas. Veja [elevação de calcanhar para fascite plantar](/pt/elevacao-de-calcanhar-fascite-plantar/).'],
          ['Laser de baixa intensidade e agulhamento seco (feitos por um profissional)', '**B**', 'Segundo grau mais alto. Os dois são procedimentos feitos em consultório.'],
          ['Palmilhas sozinhas para alívio da dor a curto prazo', '**B contra**', 'A diretriz recomenda **não** usar palmilhas como abordagem isolada de curto prazo.'],
          ['Palmilhas junto com outros cuidados', '**C**', 'Evidência fraca. Podem ajudar como parte de um programa mais amplo.'],
          ['Ultrassom terapêutico somado ao alongamento', '**A contra**', 'A diretriz recomenda **não** usar. A evidência não apoia somar isso ao alongamento.'],
          ['Injeção de corticoide', 'Sem grau na diretriz de 2023 para uso a longo prazo', 'Pode aliviar a dor a curto prazo. O grupo de Hansen não mostrou benefício no prognóstico a longo prazo com as injeções, e a diretriz não as recomenda como abordagem isolada.'],
          ['Terapia por ondas de choque', 'Discutida, evidência mista', 'Alguns estudos relatam benefício em casos que não passam. A evidência não é forte o bastante para um grau claro na diretriz.'],
        ],
      },
      cites: [CITE.guideline, CITE.hansen, CITE.rathleff],
    },
    {
      h2: 'Quando procurar um profissional se a fascite plantar não melhora?',
      paragraphs: [
        'O padrão na tabela acima é claro: alongamento e treino de força têm o apoio mais amplo. As opções feitas em consultório (laser, agulhamento seco, ondas de choque) têm alguma evidência, mas ficam atrás do exercício na classificação da diretriz. A cirurgia fica reservada para a pequena porcentagem de casos que não respondem a mais nada, e a diretriz não dá a ela um papel de destaque.',
        'Se você está fazendo os exercícios com constância há vários meses e a dor da manhã não está melhorando, esse é um momento razoável para procurar um profissional de saúde e conversar sobre as opções acima. Também é um momento razoável para confirmar se o diagnóstico está certo: veja [dor no calcanhar ao acordar](/pt/dor-no-calcanhar-ao-acordar/) para outras condições com o mesmo padrão.',
        'Para quem corre, mudanças na carga muitas vezes fazem parte do quadro: [dor no calcanhar de quem corre](/heel-pain-runners/) (em inglês) e [pés doendo de ficar em pé o dia todo](/feet-hurt-standing-all-day/) (em inglês) tratam desse lado.',
      ],
      cites: [CITE.guideline, CITE.hansen, CITE.rathleff],
    },
    {
      h2: 'Por que acompanhar a dor da manhã mostra a evolução?',
      paragraphs: [
        'A dor da manhã é o sinal diário mais confiável de como o pé está. Ela mede a mesma coisa (a rigidez dos primeiros passos), nas mesmas condições (acabou de acordar, pé sem carga), mais ou menos no mesmo horário todo dia. Isso a torna uma linha de tendência muito melhor do que “como o meu pé estava durante o dia”, que muda com a atividade, o calçado e o piso.',
        'Uma nota diária de 0 a 10 nos primeiros passos, acompanhada ao longo das semanas, mostra padrões que você não perceberia de outro jeito. Uma nota que desce de 5 para 3 em um mês é evolução de verdade, mesmo que alguma manhã ainda doa. Uma nota que dispara na manhã depois de uma corrida longa ou de um dia em pé mostra exatamente qual carga foi demais.',
        'O Walkito pede uma nota da dor da manhã antes de cada sessão e usa essa nota para ajustar os exercícios do dia. A primeira meta para dor no calcanhar é dor da manhã em 1 de 10 ou menos por 14\u00A0dias seguidos. Quando essa meta é alcançada, ela passa para manutenção e a próxima meta (normalmente força da panturrilha ou equilíbrio) entra no lugar. Essa mudança, de “deixar as manhãs mais fáceis” para “ganhar capacidade”, é o marco de verdade.',
      ],
      cites: [CITE.guideline],
    },
  ],
  faq: [
    {
      q: 'Quanto tempo demora para a fascite plantar passar?',
      cites: [CITE.latt, CITE.hansen],
      a: 'Uma revisão de 2020 relata que cerca de 90% das pessoas melhoram com tratamento sem cirurgia, muitas vezes em alguns meses (Latt e colegas, 2020). Um grupo de 174\u00A0pacientes mostrou 50% sem sintomas aos cinco anos e 46% ainda com sintomas aos dez anos, embora a maioria deles tivesse só uma dor leve nessa altura (Hansen e colegas, 2018). A recuperação se mede em meses, não em semanas, e nenhum programa pode prometer um prazo específico.',
    },
    {
      q: 'A fascite plantar passa completamente?',
      cites: [CITE.hansen],
      a: 'Para muitas pessoas, sim. No grupo de Hansen 2018, 54% estavam completamente sem sintomas num acompanhamento médio de 9,7\u00A0anos. Entre os que se recuperaram, a duração média dos sintomas foi de cerca de 725\u00A0dias. Algumas pessoas ainda tinham um leve desconforto de vez em quando, mas davam nota 0 em todas as escalas de dor. A recuperação foi mais lenta para mulheres e para quem tinha dor nos dois calcanhares.',
    },
    {
      q: 'Por que minha fascite plantar não melhora?',
      cites: [CITE.guideline],
      a: 'Há várias possibilidades. Os exercícios podem não estar sendo feitos com constância suficiente, o calçado pode não ter bom suporte, ou a carga diária no pé (passos, horas em pé, quilometragem de corrida) pode ser maior do que o tecido consegue acompanhar. Também é possível que o diagnóstico não seja fascite plantar. Se alongamento e fortalecimento não ajudaram depois de vários meses, a diretriz de 2023 recomenda conversar com um profissional de saúde sobre opções como talas noturnas, laser ou agulhamento seco.',
    },
    {
      q: 'Esporão faz a fascite plantar durar mais?',
      cites: [CITE.hansen],
      a: 'Não segundo o estudo de Hansen de 2018. Ter esporão no início não teve efeito significativo em quanto tempo os sintomas duraram (P = 0,88). Muitas pessoas têm esporão sem dor, e muitas com dor não têm esporão. O esporão muitas vezes está lá, mas não é ele que causa os sintomas.',
    },
    {
      q: 'Caminhar é bom para fascite plantar?',
      cites: [CITE.guideline],
      a: 'Caminhar de forma moderada com calçados de bom suporte normalmente não tem problema, e a diretriz não diz para parar de se mexer. O que importa é se a manhã seguinte está pior. Se a dor nos primeiros passos na manhã depois de uma caminhada está claramente maior que o normal, a caminhada foi mais do que o pé aguentava. Diminua a distância ou o tempo em vez de parar de vez.',
    },
    {
      q: 'Quando ir ao médico se a fascite plantar não melhora?',
      a: 'Procure um profissional de saúde se a dor não está claramente melhorando depois de vários meses de alongamento diário e treino de panturrilha, se está piorando em vez de ficar estável, se os dois calcanhares doem e outras articulações estão rígidas ou inchadas, se há dormência ou formigamento, ou se a dor acorda você à noite. Esses padrões podem indicar outra condição ou pedir opções além do exercício.',
    },
    {
      q: 'A fascite plantar pode voltar depois de passar?',
      cites: [CITE.hansen],
      a: 'Pode. No grupo de Hansen 2018, 32% do grupo sem sintomas tiveram pelo menos uma recaída antes de ficar sem sintomas de vez. O padrão de melhora, recaída e nova melhora é comum. Continuar com uma dose de manutenção de treino de panturrilha e alongamento depois que a dor passa é um jeito de diminuir a chance de ela voltar.',
    },
    {
      q: 'Quais são os sinais de que a fascite plantar está melhorando?',
      cites: [CITE.rathleff],
      a: 'O sinal mais claro é menos dor de manhã: os primeiros passos ficam rígidos em vez de doloridos, e a dor passa mais rápido quando você começa a caminhar. Muitas pessoas percebem essa mudança antes de a dor sumir de vez. No ensaio de Rathleff, os pacientes das elevações de calcanhar tinham notas mensuravelmente melhores com três meses, que é quando essa mudança costuma aparecer.',
    },
    {
      q: 'O que não fazer se a fascite plantar não está melhorando?',
      cites: [CITE.guideline],
      a: 'Não pare os exercícios assim que a dor da manhã diminuir, e não corra atrás de um atalho no lugar do básico. A dor diminuir antes de a fáscia se adaptar é um motivo comum para os sintomas voltarem. Se a dor fica parada ou piora por vários meses mesmo com alongamento, fortalecimento e calçados com bom suporte, isso pede um profissional de saúde, não uma espera mais longa.',
    },
  ],
  redFlags: {
    h2: 'Procure primeiro um profissional de saúde se',
    bullets: [
      'a dor não melhorou depois de vários meses de alongamento e fortalecimento feitos com constância',
      'está piorando semana após semana, e não só estável',
      'os dois calcanhares doem e a rigidez da manhã dura mais de 30\u00A0minutos, ou outras articulações estão rígidas ou inchadas',
      'a dor começou depois de uma lesão ou de uma queda',
      'você não consegue apoiar o pé, ou está mancando',
      'apertar as laterais do calcanhar reproduz a dor',
      'ela vem com dormência, formigamento ou queimação',
      'o calcanhar está vermelho, quente ao toque, ou você tem febre',
      'ela acorda você à noite ou aparece em repouso',
      'você tem diabetes, menos sensibilidade nos pés ou má circulação',
    ],
  },
  program: {
    h2: 'Fazendo isso como um plano',
    text: 'A recuperação leva tempo, e a parte mais difícil é saber se esse tempo está servindo para alguma coisa. O Walkito monta um plano uma semana de cada vez em torno de uma meta. Para dor no calcanhar, a primeira meta é uma manhã melhor: dor em 1 de 10 ou menos por 14\u00A0dias seguidos. Toda manhã você anota a sua dor, e a cada 14\u00A0dias um teste curto mede a resistência da panturrilha, a sustentação do arco e o equilíbrio, para você ver os números mudando.',
    more: [
      'Você escolhe 3, 5 ou 7 dias por semana e sessões de 3, 5 ou 10\u00A0minutos. Quando a meta da manhã é alcançada, ela passa para manutenção e a próxima meta entra no lugar. Não há data fixa para acabar, porque quem dita o ritmo é o pé.',
      'O Walkito é um programa de exercícios. Ele não faz diagnóstico e não substitui um profissional de saúde. Se a dor não melhora depois de vários meses, procure um profissional de saúde para confirmar o diagnóstico e conversar sobre as opções desta página.',
    ],
    cta: 'Comece com 3\u00A0minutos por dia.',
  },
  crumb: 'Quanto tempo dura a fascite plantar',
  campaign: 'guide-pf-duration-pt',
};
