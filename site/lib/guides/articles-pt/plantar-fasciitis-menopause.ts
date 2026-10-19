import { CITE } from '@/lib/citations';
import type { Guide } from '../types';

/*
 * Brazilian Portuguese version of articles/plantar-fasciitis-menopause.ts
 * (2026-10-19), written around «fascite plantar na menopausa» and «dor no
 * calcanhar na menopausa». Informal «você». Figures, grades, doses, hedges
 * and CITE keys are identical to the English page after its fact-check.
 * Same media ids. Exercise names follow the other Portuguese PF pages. HRT
 * is «terapia hormonal (TH)», the usual Brazilian term. All links have a
 * Portuguese target. "Clinician" is «profissional de saúde».
 */

export const PF_MENOPAUSE_PT: Guide = {
  lang: 'pt',
  page: 'pfMenopause',
  mainSource: CITE.rasenbergIncidence,
  published: '2026-10-19',
  updated: '2026-10-19',
  title: 'Fascite plantar na menopausa: dor no calcanhar aos 40 e 50',
  description:
    'A fascite plantar atinge o pico nas mulheres perto dos 50 anos, cerca do dobro dos homens. O que se sabe sobre menopausa e calcanhar, e o que ajuda.',
  h1: 'Fascite plantar e menopausa: por que a dor no calcanhar costuma começar aos 40 e 50\u00A0anos',
  lede:
    'A fascite plantar é mais comum nas mulheres perto da idade da menopausa: em registros de clínicas de medicina de família da Holanda, os casos novos em mulheres chegaram ao pico de 11,23 por 1.000\u00A0pacientes-ano aos 50\u00A0anos, contra um pico de 5,54 nos homens aos 55 (Rasenberg e colegas, 2019). Não se sabe se a queda dos hormônios é a causa. A ligação é plausível, mas nenhum estudo a comprovou (Douglas-Harris e colegas, 2026). O que ajuda é o mesmo que em qualquer idade: alongamentos da fáscia plantar e da panturrilha, com grau **A** na diretriz de 2023 para dor no calcanhar, e trabalho de força na panturrilha, com grau **B** (Koc e colegas, 2023).',
  intro: [
    'Se o seu calcanhar começou a doer entre os 40 e os 50 e poucos anos, você está no grupo mais afetado, e não é algo que você fez de errado. Esta página mostra os números por idade e sexo, o que a pesquisa diz e não diz sobre hormônios e a fáscia plantar, as outras mudanças da meia-idade que sobrecarregam o calcanhar, os exercícios com a melhor evidência, o que se sabe sobre terapia hormonal e quando procurar um profissional de saúde.',
  ],
  takeaways: [
    'Em registros de cerca de 1,9\u00A0milhão de pacientes holandeses, os casos novos de dor no calcanhar em mulheres chegaram ao pico de 11,23 por 1.000\u00A0pacientes-ano aos 50\u00A0anos. Nos homens o pico foi de 5,54, aos 55. Dos 18.004\u00A0casos, 62% eram mulheres (Rasenberg e colegas, 2019).',
    'A diretriz de 2023 para dor no calcanhar diz que a fascite plantar é mais comum entre os 40 e os 60\u00A0anos e lista a corrida e trabalhos com muito tempo em pé como fatores de risco (Koc e colegas, 2023).',
    'Uma ligação entre menopausa e dor no calcanhar é plausível, mas não comprovada: nenhum estudo mediu a fáscia plantar ao longo da menopausa, e em um estudo de grupos focais de 2026, 76% das 17\u00A0mulheres não tinham relacionado as duas coisas (Douglas-Harris e colegas, 2026).',
    'Nenhum ensaio testou a terapia hormonal para fascite plantar. Se ela serve para você depende dos seus sintomas da menopausa e do seu histórico de saúde, e essa é uma decisão para tomar com o seu médico.',
    'Os alongamentos da fáscia plantar e da panturrilha (grau **A**) e o trabalho de força na panturrilha (grau **B**) são os exercícios com melhor avaliação, seja qual for a sua idade (Koc e colegas, 2023).',
  ],
  toc: true,
  sections: [
    {
      h2: 'A fascite plantar é mais comum perto da menopausa?',
      keyFact: 'Os casos novos de dor na sola do calcanhar chegaram ao pico de 11,23 por 1.000\u00A0pacientes-ano em mulheres aos 50\u00A0anos, contra 5,54 em homens aos 55 (Rasenberg e colegas, 2019).',
      paragraphs: [
        '**Sim, as datas coincidem.** Um estudo holandês pesquisou os registros dos médicos de família de cerca de 1,9\u00A0milhão de pacientes de 2013 a 2016 e encontrou 18.004\u00A0casos novos de dor na sola do calcanhar, o termo amplo que inclui a fascite plantar. 62% eram mulheres. No geral, as mulheres tiveram 4,64\u00A0casos novos por 1.000\u00A0pacientes-ano e os homens, 2,98 (Rasenberg e colegas, 2019).',
        'O padrão por idade é o que chama atenção. Nas mulheres, os casos novos chegaram ao pico de **11,23 por 1.000\u00A0pacientes-ano aos 50\u00A0anos**. Nos homens, o pico foi mais baixo e mais tarde: 5,54 aos 55 (Rasenberg e colegas, 2019). A idade média da menopausa no Reino Unido é 51\u00A0anos, e é por isso que os pesquisadores começaram a perguntar se as duas coisas estão ligadas (Douglas-Harris e colegas, 2026).',
        'A diretriz de 2023 para dor no calcanhar diz que a fascite plantar é mais comum entre os 40 e os 60\u00A0anos (Koc e colegas, 2023). As mulheres também tendem a ficar com ela por mais tempo: em um acompanhamento de 5 a 15\u00A0anos de 174\u00A0pessoas, o risco de ainda ter fascite plantar era maior nas mulheres e nas pessoas com dor nos dois calcanhares (Hansen e colegas, 2018).',
      ],
      table: {
        caption: 'Pico de casos novos de dor na sola do calcanhar, atenção primária na Holanda (Rasenberg e colegas, 2019)',
        head: ['', 'Mulheres', 'Homens'],
        rows: [
          ['Idade do pico', '50', '55'],
          ['Pico por 1.000 pacientes-ano', '11,23', '5,54'],
          ['Taxa em todas as idades', '4,64', '2,98'],
        ],
      },
      after: [
        'Esses números vêm de pessoas que foram ao médico de família, então contam a dor no calcanhar que incomodou o suficiente para marcar uma consulta. Eles mostram quando a dor no calcanhar é mais comum. Não mostram por quê.',
      ],
      cites: [CITE.rasenbergIncidence, CITE.douglasHarrisMenopause, CITE.guideline, CITE.hansen],
    },
    {
      h2: 'A menopausa causa fascite plantar?',
      keyFact: 'De 17\u00A0mulheres com dor no calcanhar na perimenopausa ou na pós-menopausa, 76% não tinham relacionado a dor à menopausa, e a maioria disse que o assunto não foi levantado quando procurou ajuda (Douglas-Harris e colegas, 2026).',
      paragraphs: [
        '**Ninguém sabe ainda.** Os autores de um estudo de 2026 focado em menopausa e dor no calcanhar escrevem que é incerto se existe uma relação de causa (Douglas-Harris e colegas, 2026). Esse estudo foi um conjunto de grupos focais com 17\u00A0mulheres, não uma medição de hormônios ou do tecido do calcanhar. Muitos sites apresentam a ligação como fato. A evidência ainda não sustenta isso.',
        'Veja o que se sabe e o que não se sabe:',
      ],
      table: {
        head: ['Pergunta', 'O que os estudos mostram'],
        rows: [
          ['A dor no calcanhar é mais comum em mulheres perto dos 50?', '**Sabido.** Pico aos 50\u00A0anos nas mulheres (Rasenberg, 2019)'],
          ['Os hormônios sexuais afetam a fáscia plantar?', '**Alguns sinais.** Ela fica mais solta perto da ovulação em mulheres jovens (Lee, 2018)'],
          ['A fáscia plantar muda na menopausa?', '**Não se sabe.** Nenhum estudo mediu'],
          ['Menos estrogênio causa dor no calcanhar?', '**Não se sabe.** Plausível, não comprovado'],
          ['A terapia hormonal alivia a dor no calcanhar?', '**Não se sabe.** Nenhum ensaio testou'],
        ],
      },
      after: [
        'A ideia dos hormônios é razoável. Em 15\u00A0mulheres jovens, a fáscia plantar estava mais solta perto da ovulação do que durante a menstruação, e o equilíbrio ficava um pouco menos firme (Lee e Petrofsky, 2018). Uma revisão de estudos de laboratório sugere que o estrogênio pode deixar os tendões menos rígidos, um efeito que o treino pode modificar (Hansen e Kjaer, 2014). E a dor musculoesquelética em geral é comum na transição da menopausa: uma revisão de 16\u00A0estudos concluiu que 71% das mulheres na perimenopausa relatavam esse tipo de dor (Lu e colegas, 2020).',
        'Mas nenhum desses estudos olhou para a fascite plantar em mulheres passando pela menopausa. Muitas mudanças acontecem na mesma idade, o que dificulta separar os hormônios de todo o resto. A próxima seção fala dessas outras mudanças, porque em algumas delas você pode trabalhar.',
      ],
      cites: [CITE.douglasHarrisMenopause, CITE.rasenbergIncidence, CITE.leePetrofskyFascia, CITE.hansenKjaerEstrogen, CITE.luMenopausePain],
    },
    {
      h2: 'O que mais muda aos 40 e 50 e pode sobrecarregar o calcanhar?',
      keyFact: 'Em um estudo de caso-controle, um tornozelo rígido veio com 23,3\u00A0vezes a chance de fascite plantar, e passar a maior parte do dia de trabalho em pé, com 3,6\u00A0vezes (Riddle e colegas, 2003).',
      paragraphs: [
        'A fascite plantar normalmente começa quando a carga sobre o calcanhar é maior do que ele consegue aguentar e se recuperar. Várias coisas que costumam mudar na meia-idade aumentam essa carga:',
        {
          list: [
            '**Peso.** Em uma revisão de 51\u00A0estudos, um IMC acima de 27 veio com 3,7\u00A0vezes a chance de fascite plantar, e a ligação foi mais forte em pessoas que não são atletas (van Leeuwen e colegas, 2016). O peso muitas vezes muda na meia-idade; [peso e fascite plantar](/pt/peso-e-fascite-plantar/) mostra o que se sabe.',
            '**Panturrilhas e tornozelos mais rígidos.** Em um estudo com 50\u00A0pessoas com fascite plantar e 100 sem, um tornozelo rígido foi o fator mais forte medido, com 23,3\u00A0vezes a chance (Riddle e colegas, 2003). Em 100\u00A0adultos sem problemas nos pés, pessoas perto dos 80\u00A0anos tinham tornozelos mais rígidos, pés mais chatos e músculos dos dedos mais fracos do que pessoas perto dos 20 (Scott e colegas, 2007).',
            '**Uma almofada do calcanhar que cede menos.** Em um estudo de raio-X com 70\u00A0pessoas com dor no calcanhar e 200 sem, a almofada do calcanhar perdeu elasticidade com a idade, e tinha perdido mais nas pessoas com dor no calcanhar (Prichasuk, 1994). Um coxim gorduroso mais fino causa um tipo próprio de dor no calcanhar, explicado em [síndrome do coxim gorduroso do calcanhar](/pt/sindrome-coxim-gorduroso-calcanhar/).',
            '**Uma mudança de atividade.** Começar um novo plano de caminhada ou corrida, um novo trabalho em pé ou um salto repentino nos exercícios pode aumentar a carga rapidamente. Uma revisão de 2026 lista os aumentos rápidos de atividade física entre os fatores que elevam o risco de lesões por sobrecarga, como a fascite plantar, em mulheres na meia-idade (Ansari e colegas, 2026).',
          ],
        },
        'Muitas horas em pé também contam: passar a maior parte do dia de trabalho em pé veio com 3,6\u00A0vezes a chance no mesmo estudo de caso-controle (Riddle e colegas, 2003). Os pés também tendem a ficar um pouco mais chatos com a idade; veja [pé chato piora com a idade?](/pt/pe-chato-piora-com-a-idade/).',
      ],
      cites: [CITE.vanLeeuwenBmi, CITE.riddle, CITE.scottAgeFoot, CITE.prichasukHeelPad, CITE.ansariMenopause, CITE.fatPadReview],
    },
    {
      h2: 'Quais exercícios ajudam a fascite plantar na menopausa?',
      paragraphs: [
        'Nenhum estudo de exercícios olhou só para mulheres na menopausa, então a melhor referência é a diretriz para dor no calcanhar em adultos em geral. O alongamento da fáscia plantar e da panturrilha recebe o grau mais alto da diretriz, **A**, e o trabalho de força na panturrilha recebe **B** (Koc e colegas, 2023). Estas são as mesmas doses iniciais do guia principal de [exercícios para fascite plantar](/pt/exercicios-fascite-plantar/).',
        'Faça o primeiro alongamento da fáscia plantar sentada na beira da cama, antes de ficar em pé: em um ensaio com 82\u00A0pessoas, alongar antes dos primeiros passos aliviou mais a dor da manhã do que só o alongamento da panturrilha (DiGiovanni e colegas, 2003). Em um ensaio com 48\u00A0pessoas, elevações de calcanhar lentas com uma toalha embaixo dos dedos aliviaram a dor mais rápido do que só o alongamento aos três meses, e em doze meses os dois grupos estavam iguais (Rathleff e colegas, 2015). Se algum exercício levar a dor no calcanhar a 6 de 10, pare por hoje.',
        'Na meia-idade, o trabalho de força tem um segundo motivo. A massa muscular e o equilíbrio tendem a diminuir depois da menopausa (Douglas-Harris e colegas, 2026), e o treino de força é um dos passos não hormonais que uma revisão de 2026 diz serem pouco usados (Ansari e colegas, 2026). Elevações de calcanhar e exercícios de equilíbrio são um começo pequeno e prático. [Elevação de calcanhar para fascite plantar](/pt/elevacao-de-calcanhar-fascite-plantar/) aprofunda o protocolo da elevação de calcanhar.',
      ],
      exercises: [
        {
          name: 'Alongamento da fáscia plantar',
          evidence: { level: 'strong', why: 'A diretriz de 2023 para dor no calcanhar dá ao alongamento o grau A, o seu mais alto.' },
          dose: '2\u00A0vezes de 30\u00A0segundos, cada pé',
          often: 'Na maioria dos dias em que você se exercita',
          feel: 'Um alongamento ao longo do arco',
          how: 'Sente-se e cruze o pé sobre o outro joelho. Puxe os dedos para trás até sentir o alongamento no arco, não na panturrilha. Faça o primeiro na beira da cama, antes de o pé tocar o chão. Se cruzar a perna for difícil, passe uma toalha em volta da parte da frente do pé e puxe com cuidado.',
          stop: 'Dor forte no calcanhar, ou dor que chegue a 6 de 10',
          image: 'Exercício: alongamento da fáscia plantar',
          media: 'fascia_stretch',
          caption: 'Alongamento da fáscia plantar: puxe os dedos para trás até sentir no arco',
          alt: 'Uma figura puxando para trás os dedos de um pé, com a sola do pé destacada',
        },
        {
          name: 'Alongamento de panturrilha',
          evidence: { level: 'strong', why: 'A diretriz de 2023 para dor no calcanhar dá ao alongamento o grau A, o seu mais alto.' },
          dose: '2\u00A0vezes de 30\u00A0segundos, cada perna',
          often: 'Na maioria dos dias em que você se exercita',
          feel: 'Um alongamento na panturrilha',
          how: 'Apoie as mãos na parede. Mantenha a perna de trás esticada, o calcanhar de trás no chão e o quadril para a frente.',
          stop: 'Dor na panturrilha que continua depois que você para',
          image: 'Exercício: alongamento de panturrilha',
          media: 'calf_stretch_straight',
          caption: 'Alongamento de panturrilha: perna de trás esticada, calcanhar no chão, quadril para a frente',
          alt: 'Uma figura apoiada na parede com a perna de trás esticada, com a panturrilha destacada',
        },
        {
          name: 'Alongamento do sóleo',
          evidence: { level: 'strong', why: 'A diretriz de 2023 para dor no calcanhar dá ao alongamento o grau A, o seu mais alto.' },
          dose: '2\u00A0vezes de 30\u00A0segundos, cada perna',
          often: 'Na maioria dos dias em que você se exercita',
          feel: 'Um alongamento perto do calcanhar',
          how: 'Fique na mesma posição na parede, mantenha o calcanhar de trás no chão e dobre o joelho de trás até sentir o alongamento mais embaixo, perto do calcanhar. O sóleo, o músculo mais profundo da panturrilha, só solta com o joelho dobrado.',
          stop: 'Dor na panturrilha que continua depois que você para',
          image: 'Exercício: alongamento do sóleo',
          media: 'calf_stretch_bent',
          caption: 'Alongamento do sóleo: calcanhar de trás no chão, dobre o joelho de trás até sentir perto do calcanhar',
          alt: 'Uma figura com um pé à frente e outro atrás e os joelhos dobrados, com a parte de baixo das panturrilhas destacada',
        },
        {
          name: 'Elevação de calcanhar sentada',
          evidence: { level: 'moderate', why: 'A diretriz de 2023 dá ao trabalho de força o grau B. Este passo não foi testado sozinho.' },
          dose: '3\u00A0séries de 10, os dois pés',
          often: '3\u00A0dias por semana, nunca dois seguidos',
          feel: 'Trabalho na parte de baixo da panturrilha',
          how: 'Sente-se com os pés apoiados no chão e suba empurrando pela parte da frente dos pés. As mãos sobre os joelhos aumentam a resistência. Com o joelho dobrado, o exercício trabalha principalmente o sóleo, o músculo mais profundo da panturrilha. É um primeiro passo suave antes das elevações em pé.',
          stop: 'Dor no calcanhar que chegue a 6 de 10, ou que fica pior na manhã seguinte',
          image: 'Exercício: elevação de calcanhar sentada',
          media: 'heel_raise_seated',
          caption: 'Elevação de calcanhar sentada: suba empurrando pela parte da frente dos pés',
          alt: 'Uma figura sentada levantando os dois calcanhares, com as panturrilhas destacadas',
        },
        {
          name: 'Elevação de calcanhar com toalha',
          evidence: { level: 'moderate', why: 'É a rotina de um ensaio com 48\u00A0pessoas, e a diretriz de 2023 dá ao trabalho de força o grau B.' },
          dose: '4\u00A0séries de 10, cada perna, com peso extra',
          often: 'Dias de força',
          feel: 'Trabalho pesado na panturrilha',
          how: 'Fique em um pé só sobre um degrau, com uma toalha enrolada embaixo dos dedos. Leve três segundos para subir, segure dois lá em cima e leve três para descer. Neste nível o Walkito acrescenta peso, como uma mochila. É a toalha que faz este exercício trabalhar a fáscia plantar, e não só a panturrilha. Segure um corrimão ou apoie-se na parede para se equilibrar.',
          stop: 'Dor no calcanhar que chegue a 6 de 10, ou que fica pior na manhã seguinte',
          image: 'Exercício: elevação de calcanhar com toalha',
          media: 'heel_raise_towel',
          caption: 'Elevação de calcanhar com toalha: três segundos subindo, dois lá em cima, três descendo',
          alt: 'Uma figura subindo na ponta do pé sobre um degrau com uma toalha enrolada, com as panturrilhas destacadas',
        },
        {
          name: 'Equilíbrio em uma perna',
          evidence: { level: 'early', why: 'Acréscimo do próprio Walkito. Não fazia parte dos programas testados para dor no calcanhar.' },
          dose: '3\u00A0vezes de 20\u00A0segundos, cada perna',
          often: 'Dias de equilíbrio',
          feel: 'Pequenas correções no pé e no tornozelo',
          how: 'Fique em um pé só ao lado de uma bancada e olhe para um ponto fixo. Deixe o pé balançar. É para balançar mesmo, porque esse balanço é o pé fazendo o trabalho de equilíbrio. Encoste de leve as pontas dos dedos na bancada se precisar.',
          stop: 'Dor no calcanhar que chegue a 6 de 10, ou se você se sentir insegura',
          image: 'Exercício: equilíbrio em uma perna',
          media: 'single_leg_hold',
          caption: 'Equilíbrio em uma perna: fique em um pé só e deixe ele fazer pequenas correções',
          alt: 'Uma figura se equilibrando em uma perna, com os músculos da parte de baixo da perna destacados',
        },
      ],
      cites: [CITE.guideline, CITE.digiovanni2003, CITE.rathleff, CITE.douglasHarrisMenopause, CITE.ansariMenopause],
    },
    {
      h2: 'A terapia hormonal ajuda na fascite plantar?',
      keyFact: 'Em 85\u00A0mulheres depois da menopausa, as ativas que faziam terapia hormonal tinham tendões de Aquiles mais finos do que as ativas que não faziam, sem efeito claro nas inativas (Cook e colegas, 2007). Nem este nem nenhum outro estudo mediu dor no calcanhar.',
      paragraphs: [
        '**Não existe ensaio de terapia hormonal para fascite plantar, então ninguém pode dizer se ela ajuda.** Procuramos e não encontramos nenhum. A terapia hormonal da menopausa (TH) é usada para os sintomas da menopausa. Ela não é um recurso reconhecido para dor no calcanhar.',
        'O que existe é indireto. Nos grupos focais de 2026, algumas mulheres disseram que perceberam menos dores nos pés durante a terapia hormonal (Douglas-Harris e colegas, 2026). Isso é um relato de poucas pessoas, não um resultado medido. Dois estudos pequenos sobre o tendão de Aquiles concluíram que mulheres ativas em terapia hormonal tinham tendões menores do que mulheres ativas sem ela: um com 85\u00A0mulheres (Cook e colegas, 2007) e um com 14\u00A0pares de gêmeas idênticas, em que a diferença só apareceu nos 5\u00A0pares fisicamente ativos (Finni e colegas, 2009). Tamanho de tendão não é dor, e o Aquiles não é a fáscia plantar.',
        'Uma revisão de 2026 observa que a terapia hormonal não serve para todas, por causa das contraindicações e do equilíbrio entre riscos e benefícios de cada pessoa (Ansari e colegas, 2026). Fazer ou não depende dos seus sintomas da menopausa e do seu histórico de saúde. **Essa é uma decisão para tomar com o seu médico.** Seja qual for a sua decisão, os alongamentos e o trabalho de força desta página continuam valendo.',
      ],
      cites: [CITE.douglasHarrisMenopause, CITE.cookHrtAchilles, CITE.finniHrtTwins, CITE.ansariMenopause],
    },
    {
      h2: 'Quanto tempo dura a fascite plantar na meia-idade?',
      paragraphs: [
        'Cerca de 90% das pessoas com fascite plantar melhoram com cuidado sem cirurgia, como alongamento e palmilhas, embora isso muitas vezes leve de 3 a 6\u00A0meses (Latt e colegas, 2020). Nenhum estudo olhou especificamente para a recuperação em mulheres passando pela menopausa.',
        'Para algumas pessoas dura mais. Em um acompanhamento de 174\u00A0pessoas, 54% não tinham sintomas na reavaliação, em média cerca de 9\u00A0anos depois do diagnóstico, e o risco de ainda ter o problema era maior nas mulheres e nas pessoas com dor nos dois calcanhares (Hansen e colegas, 2018). Isso é um motivo para começar os exercícios cedo e mantê-los, não para esperar o pior. [Quanto tempo dura a fascite plantar](/pt/quanto-tempo-dura-fascite-plantar/) traz a linha do tempo completa.',
        'Se você está aumentando a atividade na meia-idade, pela saúde ou pelo peso, aumente aos poucos em vez de parar: a diretriz observa que a fascite plantar normalmente começa depois de uma mudança na atividade com apoio do peso (Koc e colegas, 2023). [Caminhar com fascite plantar](/pt/caminhar-com-fascite-plantar/) explica como retomar a caminhada passo a passo.',
      ],
      cites: [CITE.latt, CITE.hansen, CITE.guideline],
    },
    {
      h2: 'Quando a dor no calcanhar ou no pé na meia-idade é outra coisa?',
      paragraphs: [
        'Dor embaixo do calcanhar que é pior nos primeiros passos da manhã e alivia conforme você anda é o padrão típico da fascite plantar. Outros padrões apontam para outras causas:',
        {
          list: [
            '**Dor profunda, parecida com um hematoma, no centro do calcanhar, pior descalça em piso duro:** pode ser o coxim gorduroso. Veja [síndrome do coxim gorduroso do calcanhar](/pt/sindrome-coxim-gorduroso-calcanhar/).',
            '**Um arco que vai caindo aos poucos, com dor ou inchaço na parte de dentro do tornozelo:** pode ser o tendão tibial posterior. Em uma pesquisa com 582\u00A0mulheres com mais de 40\u00A0anos, 3,3% tinham sinais iniciais desse problema e nenhuma tinha diagnóstico (Kohls-Gatzoulis e colegas, 2009). Vale fazer uma avaliação cedo.',
            '**Dor que aumenta com a atividade e dói quando você aperta os lados do calcanhar:** pode ser uma fratura por estresse. Veja [fascite plantar ou fratura por estresse](/pt/fascite-plantar-ou-fratura-por-estresse/).',
            '**Queimação, formigamento ou dormência, ou dor à noite:** mais provavelmente um problema de nervo. Veja [dor no calcanhar à noite](/pt/dor-no-calcanhar-a-noite/).',
            '**Os dois calcanhares doendo junto com articulações rígidas e inchadas em outras partes:** vale investigar uma doença inflamatória das articulações.',
          ],
        },
        'Se você usa um inibidor da aromatase depois de um câncer de mama, uma dor nova nas articulações, nos músculos ou nos pés é algo para contar à equipe que o prescreve. Uma revisão de 2026 lista o uso de inibidores da aromatase entre os fatores que aumentam o risco de lesões por sobrecarga na meia-idade (Ansari e colegas, 2026).',
      ],
      cites: [CITE.kohlsGatzoulisPrevalence, CITE.ansariMenopause],
    },
  ],
  faq: [
    {
      q: 'A menopausa pode causar fascite plantar?',
      cites: [CITE.rasenbergIncidence, CITE.douglasHarrisMenopause],
      a: 'Pode contribuir, mas nenhum estudo comprovou isso. A dor na sola do calcanhar é mais comum em mulheres perto dos 50\u00A0anos, quando a menopausa costuma acontecer, e em um estudo grande o pico nas mulheres foi cerca do dobro do pico nos homens. Os pesquisadores descrevem uma relação de causa como incerta, e nenhum estudo mediu a fáscia plantar ao longo da menopausa.',
    },
    {
      q: 'Por que a fascite plantar atinge o pico nas mulheres perto dos 50?',
      cites: [CITE.rasenbergIncidence, CITE.guideline, CITE.vanLeeuwenBmi, CITE.riddle],
      a: 'Ninguém sabe ao certo. Em registros holandeses, os casos novos em mulheres chegaram ao pico de 11,23 por 1.000\u00A0pacientes-ano aos 50\u00A0anos. As mudanças hormonais podem ter um papel, mas também coisas que costumam mudar na mesma idade: peso, panturrilhas e tornozelos mais rígidos, uma almofada do calcanhar menos elástica e atividades novas ou mais pesadas.',
    },
    {
      q: 'A perimenopausa pode causar dor no calcanhar?',
      cites: [CITE.luMenopausePain, CITE.douglasHarrisMenopause],
      a: 'Possivelmente, mas isso não foi mostrado especificamente para dor no calcanhar. Uma revisão de 16\u00A0estudos concluiu que 71% das mulheres na perimenopausa relatam dor musculoesquelética, mais do que as mulheres que ainda não chegaram à perimenopausa. Nenhum estudo olhou só para a fascite plantar na perimenopausa, então, se o seu calcanhar dói, valem as verificações e os exercícios de sempre para dor no calcanhar.',
    },
    {
      q: 'A terapia hormonal ajuda na fascite plantar?',
      cites: [CITE.douglasHarrisMenopause, CITE.cookHrtAchilles],
      a: 'Não se sabe. Nenhum ensaio testou a terapia hormonal para fascite plantar. Algumas mulheres em um estudo de grupos focais de 2026 disseram que perceberam menos dores nos pés durante a terapia hormonal, e estudos pequenos encontraram diferenças no tamanho do tendão de Aquiles, mas nenhum mediu dor no calcanhar. Se a terapia hormonal serve para você é uma decisão para tomar com o seu médico, com base nos seus sintomas e na sua saúde.',
    },
    {
      q: 'Qual é o melhor exercício para fascite plantar na menopausa?',
      cites: [CITE.guideline, CITE.rathleff],
      a: 'Os mesmos de qualquer idade: alongamentos da fáscia plantar e da panturrilha, que a diretriz de 2023 para dor no calcanhar classifica com grau A, e trabalho de força na panturrilha, com grau B. Elevações de calcanhar lentas com uma toalha embaixo dos dedos aliviaram a dor mais rápido do que só o alongamento em um ensaio com 48\u00A0pessoas. O trabalho de força também ajuda a manter músculo e equilíbrio, que tendem a diminuir depois da menopausa.',
    },
    {
      q: 'É fascite plantar ou só dor nos pés da menopausa?',
      cites: [CITE.guideline],
      a: 'A fascite plantar tem um padrão típico: dor embaixo do calcanhar que é pior nos primeiros passos da manhã ou depois de ficar sentada, e que alivia quando você anda. Dores gerais nos dois pés e em outras articulações são um padrão diferente. Se você não tem certeza, ou se várias articulações estão rígidas e inchadas, procure um profissional de saúde.',
    },
    {
      q: 'Ganhar peso na menopausa piora a fascite plantar?',
      cites: [CITE.vanLeeuwenBmi, CITE.hansen],
      a: 'Um peso mais alto está ligado à fascite plantar. Em uma revisão de 51\u00A0estudos, um IMC acima de 27 veio com 3,7\u00A0vezes a chance, principalmente em pessoas que não são atletas. Mas o peso é um fator entre vários. Em um acompanhamento longo de 174\u00A0pessoas, o IMC não previu quem ainda tinha dor no calcanhar anos depois.',
    },
    {
      q: 'A fascite plantar vai embora depois da menopausa?',
      cites: [CITE.latt, CITE.hansen],
      a: 'Nenhum estudo acompanhou a dor no calcanhar ao longo da menopausa, então não há um número. Para a fascite plantar em geral, cerca de 90% das pessoas melhoram com cuidado sem cirurgia, muitas vezes em 3 a 6\u00A0meses. Em um acompanhamento longo, o risco de ela durar era maior nas mulheres e nas pessoas com dor nos dois calcanhares.',
    },
  ],
  redFlags: {
    h2: 'Procure primeiro um profissional de saúde se',
    bullets: [
      'a dor começou depois de uma queda, um salto ou uma torção, ou você não consegue apoiar o peso no pé',
      'dói quando você aperta os lados do calcanhar, ou a dor continua aumentando com a atividade (possível fratura por estresse)',
      'um arco está caindo, ou a parte de dentro do tornozelo está dolorida ou inchada',
      'o calcanhar está inchado, vermelho ou quente, ou você está com febre',
      'a dor é pior à noite ou em repouso, ou vem com queimação, formigamento ou dormência',
      'os dois calcanhares doem junto com articulações rígidas ou inchadas em outras partes',
      'você usa um inibidor da aromatase e começou uma dor nova nas articulações ou nos pés: conte à equipe que o prescreve',
      'uma panturrilha está dolorida e inchada (possível coágulo): procure atendimento no mesmo dia',
    ],
  },
  program: {
    h2: 'Como transformar isso em um plano',
    text: 'O Walkito é um app de exercícios para o calcanhar e o pé. Ele não acompanha hormônios nem sintomas da menopausa e não dá orientações sobre terapia hormonal. Ele monta um plano com os alongamentos, o trabalho de força na panturrilha e os exercícios de equilíbrio desta página, começando pelas versões sentadas nos dias de dor.',
    more: [
      'Você escolhe 3, 5 ou 7\u00A0dias por semana e sessões de 3, 5 ou 10\u00A0minutos. Antes de cada sessão você dá uma nota para a dor no calcanhar de manhã, e o plano se ajusta a ela. O Walkito não faz diagnóstico.',
    ],
    cta: 'Comece com uma sessão de 3\u00A0minutos.',
  },
  related: ['heelPain', 'weightPf', 'heelFatPad'],
  crumb: 'Fascite plantar e menopausa',
  campaign: 'guide-plantar-fasciitis-menopause-pt',
};
