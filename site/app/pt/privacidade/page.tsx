import type { Metadata } from 'next';

import { Footer } from '@/components/Footer';
import { Masthead } from '@/components/Masthead';
import { Prose } from '@/components/Prose';
import { alternatesFor } from '@/lib/i18n';
import { SUPPORT_EMAIL } from '@/lib/site';

/**
 * The Brazilian Portuguese Privacy Policy. It mirrors
 * `app/(en)/privacy/page.tsx` and must be updated whenever that page changes;
 * where the two differ, the English applies. The notes on what each service
 * receives live on the English page.
 *
 * The app has no Portuguese catalogue yet, so in-app labels are given in the
 * app's English with a Portuguese gloss. iOS paths are iOS's own pt-BR labels.
 */
export const metadata: Metadata = {
  // The root template appends " | Walkito".
  title: 'Privacidade',
  description:
    'O que o Walkito coleta e por quê. Seu plano fica na sua conta; dados do app Saúde e do Health Connect ficam no celular. Sem anúncios nem rastreamento.',
  alternates: alternatesFor('privacy', 'pt'),
};

const mail = <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>;

export default function PrivacidadePt() {
  return (
    <>
      <Masthead lang="pt" />

      <Prose className="shell prose">
        <h1>Privacidade</h1>

        <p className="updated">Última atualização: 9 de outubro de 2026</p>
        <p className="updated">
          Esta é uma tradução. Se ela for diferente da{' '}
          <a href="/privacy/">versão em inglês</a>, vale a versão em inglês.
        </p>

        <h2>Em resumo</h2>
        <ul>
          <li>Você entra com a Apple no iPhone, ou com o Google no Android, quando configura o Walkito.</li>
          <li>
            O seu plano, as suas respostas, os seus registros de dor, os
            resultados dos seus testes e as sessões que você termina ficam
            salvos na sua conta, para voltarem em um celular novo ou depois que
            você reinstalar o app.
          </li>
          <li>
            <b>Os dados do app Saúde da Apple e do Health Connect ficam no seu celular e nunca são enviados.</b>
          </li>
          <li>
            Alguns serviços recebem dados para o app funcionar: Supabase (sua
            conta e seu plano), PostHog (análise de uso), RevenueCat (compras),
            Superwall (telas de assinatura), Expo (notificações, atualizações do
            app, relatórios de velocidade e de falhas), Apple (login, pagamentos
            e notificações), Google (login no Android) e Resend (e-mails).
          </li>
          <li>Sem anúncios, sem rastreamento publicitário, e nunca vendemos os seus dados.</li>
        </ul>

        <h2>A sua conta</h2>
        <p>
          Ao configurar o Walkito, você entra com a Apple. A Apple nos passa um
          identificador, o seu nome e o seu e-mail, ou um endereço de
          retransmissão privado se você escolher ocultar o seu. O identificador
          vira a sua conta no nosso servidor. O seu primeiro nome e o seu e-mail
          ficam guardados com a sua conta.
        </p>
        <p>
          No Android, a configuração faz você entrar com o Google. O Google,
          assim como a Apple, nos passa um identificador e o seu e-mail, e eles
          são usados da mesma forma.
        </p>
        <p>
          Se o Iniciar Sessão com a Apple não estiver disponível no seu
          aparelho, o app usa uma conta anônima. Entrar com e-mail e senha
          funciona só para contas que nós mesmos criamos, por exemplo para a
          revisão da App Store. Não existe cadastro por e-mail.
        </p>
        <p>
          Uma chave de login fica guardada nas Chaves (Keychain) do seu iPhone.
          Ela continua lá mesmo se você apagar o app, para que uma reinstalação
          encontre a sua conta de novo. Delete account (Excluir conta) remove
          essa chave.
        </p>

        <h2>O seu e-mail</h2>
        <p>
          Usamos o seu e-mail para responder quando você fala com o suporte,
          para reconhecer a sua conta nos nossos próprios relatórios e para
          enviar e-mails sobre o seu plano: lembretes, um resumo semanal, os
          resultados dos seus testes e, de vez em quando, uma oferta do Walkito
          Premium. Os e-mails são escritos a partir do seu próprio plano e usam
          o seu primeiro nome. Todo e-mail tem um link para cancelar a
          inscrição, e você também pode nos escrever. Nunca compartilhamos o seu
          endereço com ninguém para o marketing de outra empresa.
        </p>

        <h2>O que fica salvo na sua conta</h2>
        <p>
          Tudo é salvo primeiro no seu celular. Depois, em segundo plano, é
          copiado para a sua conta no nosso servidor, para voltar quando você
          entrar em um celular novo ou depois de reinstalar o app. Essa cópia
          contém:
        </p>
        <ul>
          <li>
            <b>As suas respostas e configurações:</b> qual pé e onde dói, o seu
            tipo de pé, a sua meta e o seu esporte, dias por semana, duração da
            sessão, horário do lembrete, o equipamento que você não tem e a sua
            data de início.
          </li>
          <li>
            <b>As suas metas</b> e o seu progresso em cada uma.
          </li>
          <li>
            <b>Os seus registros de dor:</b> cada nota de dor que você registra,
            quando registrou e onde doía, e se você fez o alongamento da manhã.
          </li>
          <li>
            <b>Os resultados dos seus testes:</b> elevações de panturrilha,
            sustentação do arco e equilíbrio, esquerda e direita.
          </li>
          <li>
            <b>As suas sessões:</b> o plano de cada semana, as sessões que você
            termina, quais exercícios você fez, pulou ou trocou, como foi a
            sessão, qualquer dor durante ela, e os exercícios que você marcou
            como impossíveis para você.
          </li>
          <li>
            <b>O seu uso do app:</b> quantas vezes você abriu o app por dia e
            por quanto tempo.
          </li>
        </ul>
        <p>
          Também usamos essa cópia para ver como o plano está sendo usado e se
          as pessoas alcançam as suas metas, para podermos melhorá-lo.
        </p>

        <h2>O que fica no seu celular</h2>
        <p>
          A idade, o sexo, o peso e o número do calçado que você informa na
          configuração, as suas preferências de aparência e de idioma do app,
          os vídeos de exercícios que você baixou, e todos os números do app
          Saúde da Apple ou do Health Connect. Eles ficam guardados só no
          armazenamento do próprio app no aparelho.
        </p>

        <h2>App Saúde da Apple (Apple Health)</h2>
        <p>
          Com a sua permissão, o Walkito lê contagem de passos, velocidade de
          caminhada, assimetria ao caminhar, lances de escada, frequência
          cardíaca em repouso, frequência cardíaca, energia ativa, análise do
          sono e exercícios. Ele grava as sessões que você termina no app Saúde
          como exercícios e minutos de atenção plena.
        </p>
        <p>
          Esses dados são lidos e resumidos no seu celular.{' '}
          <b>
            Eles nunca são enviados, nunca são salvos na sua conta e nunca são
            usados para publicidade, marketing ou mineração de dados.
          </b>{' '}
          Nunca os vendemos.
        </p>
        <p>
          Você pode retirar qualquer permissão a qualquer momento em Ajustes →
          Apps → Saúde → Acesso a Dados e Dispositivos → Walkito. O app continua
          funcionando, e as partes que dependiam desses dados deixam de
          aparecer.
        </p>

        <h2>Health Connect (Android)</h2>
        <p>
          No Android, com a sua permissão, o Walkito lê do Health Connect os
          passos, os andares subidos, a frequência cardíaca em repouso, a
          frequência cardíaca, as sessões de sono, as sessões de exercício, a
          distância e as calorias ativas queimadas. Ele grava as sessões que
          você termina como sessões de exercício.
        </p>
        <p>
          Usamos esses dados só para ajustar o seu plano: o quanto você se
          mexeu, dormiu e correu define a sessão do dia e as dicas que você vê.
          Eles são lidos e resumidos no seu celular.{' '}
          <b>
            Os dados do Health Connect nunca são enviados, nunca são vendidos,
            nunca são compartilhados com terceiros e nunca são usados para
            publicidade.
          </b>{' '}
          O uso que o Walkito faz das informações recebidas do Health Connect
          segue a Política de Permissões do Health Connect (Health Connect
          Permissions policy), incluindo os requisitos de Uso Limitado.
        </p>
        <p>
          Você pode retirar qualquer permissão a qualquer momento no app Health
          Connect, ou em Configurações do Android → Segurança e privacidade →
          Privacidade → Health Connect → Permissões de apps → Walkito. O app
          continua funcionando sem isso.
        </p>

        <h2>O que coletamos, como e por quê</h2>

        <h3>Supabase: sua conta e seu plano</h3>
        <p>
          <b>O quê:</b> a sua conta, o seu e-mail, tudo o que está listado em
          “O que fica salvo na sua conta”, o seu endereço de notificação (se
          você ativou as notificações), o seu código de convite e qual conta
          usou qual código. Os vídeos de exercícios são baixados do
          armazenamento do Supabase.
        </p>
        <p>
          <b>Por quê:</b> para manter a sua conta, trazer o seu plano de volta
          em um celular novo, responder pedidos de suporte, fazer os convites
          funcionarem e entregar os vídeos de exercícios.
        </p>

        <h3>PostHog: análise de uso</h3>
        <p>
          <b>O quê:</b> eventos que dizem que algo aconteceu no app, por
          exemplo, que uma etapa da configuração inicial foi mostrada, que uma
          sessão, um registro ou um teste foi concluído e se a sessão pareceu
          fácil, ok ou difícil, que uma meta foi alcançada, que uma
          configuração do plano foi alterada (não para o quê), ou que a tela de
          compra foi aberta. Também as telas que você visita, e as respostas a
          algumas perguntas da configuração inicial: onde você ouviu falar do
          Walkito, a sua meta, o seu esporte e o quanto você corre. A sua meta,
          ou o nome de uma meta que você alcançou, pode dar uma pista sobre a
          sua condição. O modelo do seu aparelho, as versões do iOS e do app, o
          idioma e o fuso horário vão junto, e o PostHog calcula uma
          localização aproximada (país e cidade) a partir do seu endereço IP. Os
          eventos ficam ligados a um ID aleatório, o mesmo que o RevenueCat
          usa. Depois que você entra na sua conta, o e-mail e o nome que a
          Apple ou o Google nos passaram são adicionados a ele, para podermos
          escrever para você se algo der errado.
        </p>
        <p>
          <b>Nunca enviado:</b> notas de dor, locais da dor, resultados de
          testes, leituras do app Saúde, idade ou peso. Nada da sua tela é
          gravado.
        </p>
        <p>
          <b>Por quê:</b> para ver onde as pessoas travam e melhorar o app.
        </p>

        <h3>RevenueCat: compras</h3>
        <p>
          <b>O quê:</b> um ID aleatório, o seu histórico de compras e
          assinaturas na App Store, o ID de análise acima, e onde você disse que
          ouviu falar do Walkito. No iPhone, também se você instalou o Walkito a
          partir de um anúncio de busca do Apple Ads e, se sim, qual campanha e
          qual termo de busca, a partir do AdServices da Apple. Isso não precisa
          de permissão de rastreamento e não usa nenhum identificador de
          publicidade.
        </p>
        <p>
          <b>Por quê:</b> para saber o que você comprou e liberar isso, e para
          ver quais canais levam a compras.
        </p>

        <h3>Expo: notificações, atualizações, velocidade e falhas</h3>
        <p>
          <b>O quê:</b> quanto tempo o app leva para abrir e para abrir cada
          tela, erros e relatórios de falhas, os mesmos eventos que o PostHog
          recebe, e o modelo do seu aparelho, as versões do iOS e do app, o
          idioma e um ID de instalação aleatório. As atualizações do app são
          baixadas do Expo. Quando alguém usa o seu código de convite, a
          notificação que avisa você passa pelo serviço de push do Expo. Os
          lembretes diários são agendados no seu celular e não passam por
          nenhum servidor.
        </p>
        <p>
          <b>Por quê:</b> para manter o app rápido e funcionando, mantê-lo
          atualizado e entregar as notificações de convite.
        </p>

        <h3>Superwall: telas de assinatura</h3>
        <p>
          <b>O quê:</b> o ID da sua conta, o seu primeiro nome, a meta e o
          esporte que você escolheu ao configurar o seu plano, o primeiro passo
          do seu plano, os dias e minutos que você escolheu, a data da sua
          próxima avaliação de progresso, o idioma do app, quais telas de
          assinatura você viu e no que tocou nelas, e se você já é assinante.
          Nunca a sua dor, as suas respostas sobre o seu corpo, nem nada do app
          Saúde ou do Health Connect.
        </p>
        <p>
          <b>Por quê:</b> para mostrar a tela de assinatura, direcioná-la a você
          e ao seu plano, e testar qual versão funciona melhor. Os pagamentos
          continuam passando pela Apple e pelo RevenueCat.
        </p>

        <h3>Resend: e-mails</h3>
        <p>
          <b>O quê:</b> o seu e-mail, o seu primeiro nome e o conteúdo de cada
          e-mail que enviamos, que é escrito a partir do seu plano.
        </p>
        <p>
          <b>Por quê:</b> para entregar esses e-mails e nos dizer se eles
          chegaram.
        </p>

        <h3>Apple: login, pagamentos e notificações</h3>
        <p>
          O Iniciar Sessão com a Apple compartilha o nome e o e-mail que você
          escolher. Os pagamentos são feitos pela Apple, e nunca vemos os dados
          do seu cartão. As notificações são entregues pelo serviço de
          notificações push da Apple.
        </p>

        <p>
          Todos os serviços acima recebem o seu endereço IP a cada solicitação,
          como qualquer servidor.
        </p>

        <h2>O que não fazemos</h2>
        <p>
          Sem publicidade, sem SDKs de anúncios ou de atribuição, e sem
          identificador de publicidade. Não rastreamos você em apps ou sites de
          outras empresas. Não vendemos os seus dados, e não compartilhamos nada
          do que você registra para uso de outras pessoas. Os serviços acima
          tratam esses dados só para nos prestar o serviço deles.
        </p>

        <h2>Por quanto tempo guardamos</h2>
        <ul>
          <li>
            <b>A sua conta e tudo o que está salvo nela:</b> até você excluir a
            sua conta.
          </li>
          <li>
            <b>Dados de análise, velocidade e falhas:</b> até 12 meses.
          </li>
          <li>
            <b>Registros de compra:</b> guardados pela Apple e pelo RevenueCat
            pelo tempo que as leis de cobrança, contabilidade e impostos
            exigirem.
          </li>
          <li>
            <b>O que está no seu celular:</b> até você excluir a sua conta ou o
            app.
          </li>
        </ul>

        <h2>Excluir a sua conta</h2>
        <p>
          No app, vá em <b>Profile → Delete account</b> (Perfil → Excluir
          conta). Isso apaga a sua conta no nosso servidor com tudo o que está
          salvo nela: as suas respostas e configurações, metas, registros de
          dor, resultados de testes, sessões, uso do app, e-mail, endereço de
          notificação e código de convite. Depois remove a chave de login e
          limpa o celular. Não dá para desfazer. Você também pode escrever para{' '}
          {mail} e nós excluímos para você.
        </p>
        <p>
          Apagar só o app remove apenas o que está no celular. A sua conta
          continua no nosso servidor e volta quando você entrar de novo.
        </p>
        <p>
          Delete account não remove os registros de compra no RevenueCat, os
          dados de análise no PostHog, nem os dados de velocidade e falhas que o
          Expo guarda. Para apagar esses dados, escreva para o mesmo endereço.
          Os exercícios e minutos de atenção plena que o Walkito gravou no app
          Saúde ficam lá até você apagá-los no app Saúde. Excluir a sua conta
          não cancela uma assinatura. Só a Apple pode fazer isso, em Ajustes →
          [seu nome] → Assinaturas.
        </p>

        <h2>Crianças</h2>
        <p>
          O Walkito não é para crianças com menos de 13 anos, e não coletamos
          dados delas de forma consciente. Se você acredita que uma criança com
          menos de 13 anos usou o app, escreva para {mail} e nós apagaremos os
          dados dela.
        </p>

        <h2>Os seus direitos</h2>
        <p>
          Se você está na UE ou no Reino Unido, a lei de proteção de dados dá a
          você direitos sobre os seus dados pessoais. Nos baseamos nestas bases
          legais:
        </p>
        <ul>
          <li>
            <b>Contrato:</b> a sua conta, o seu plano salvo, compras, convites e
            notificações, que precisamos para oferecer o app que você pediu.
          </li>
          <li>
            <b>Interesse legítimo:</b> dados de análise e de velocidade e
            falhas, para entender e melhorar o app. Você pode se opor a isso.
          </li>
          <li>
            <b>Consentimento:</b> o acesso ao app Saúde e ao Health Connect, que
            você pode retirar a qualquer momento nos Ajustes. Esses dados nunca
            saem do seu celular.
          </li>
        </ul>
        <p>
          Você pode pedir para acessar, corrigir, apagar ou receber uma cópia
          dos seus dados, e pode se opor ou pedir que limitemos a forma como os
          usamos. Escreva para {mail}. Você também pode reclamar com a
          autoridade de proteção de dados do seu país. Alguns dos serviços acima
          tratam dados fora do seu país, inclusive nos Estados Unidos, com as
          suas próprias salvaguardas para transferências internacionais.
        </p>

        <h2>Inscrições por e-mail no site</h2>
        <p>
          Se você se inscrever no site para receber as fichas de exercícios para
          imprimir e o plano inicial de 7 dias, guardamos o seu e-mail, o idioma
          em que você estava lendo, a página em que se inscreveu, e um registro
          da confirmação e de cada e-mail que enviamos.
        </p>
        <p>
          <b>Por quê:</b> para enviar as fichas e os sete e-mails diários que
          você pediu, e nada mais.
        </p>
        <p>
          <b>Operadores:</b> Resend (entrega os e-mails) e Supabase (guarda a
          inscrição). Os dois tratam os dados só para nos prestar o serviço
          deles.
        </p>
        <p>
          <b>Nenhuma conta é criada.</b> Uma inscrição no site não cria uma
          conta no app. Esses dados ficam separados de qualquer dado do app.
        </p>
        <p>
          <b>Cancelar a inscrição:</b> todo e-mail tem um link para cancelar a
          inscrição com um clique. Depois que você cancela, paramos de enviar e
          apagamos os seus dados em até 30 dias. Você também pode escrever para{' '}
          {mail}.
        </p>
        <p>
          <b>Sem cookies, sem rastreadores.</b> O site não define nenhum cookie
          e não carrega nenhum script de análise ou de rastreamento.
        </p>

        <h2 id="ai-assistants">Assistentes de IA (ChatGPT e Claude)</h2>
        <p>
          O Walkito pode ser usado dentro do ChatGPT e do Claude. Quando você pergunta lá, o assistente pode chamar uma das nossas ferramentas e enviar ao nosso servidor as configurações que escolheu: por exemplo a área que dói, os minutos por dia, os dias por semana, o equipamento e o lado e, se você os mencionou, a dor de hoje ou o resultado de um teste, que decidem o que é mostrado. O nosso servidor usa esses dados para montar os exercícios e o plano, e não guarda nada.
        </p>
        <ul>
          <li>Mensagens, nomes, e-mails, valores de dor e endereços IP não são guardados.</li>
          <li>De cada chamada só fica registrado o nome da ferramenta, o assistente (ChatGPT ou Claude), as configurações do plano (área, minutos, dias, equipamento, lado), quanto tempo levou e se funcionou.</li>
          <li>Um código de plano (WK-…) contém só as configurações do plano e qual assistente o criou, nada sobre você.</li>
          <li>O que você escreve no ChatGPT ou no Claude é tratado pela OpenAI ou pela Anthropic segundo as suas próprias políticas de privacidade.</li>
        </ul>

        <h2>Não é orientação médica</h2>
        <p>
          O Walkito é um programa de exercícios para dor no calcanhar e no pé.
          Ele não diagnostica nenhuma condição e não substitui um profissional
          de saúde.
        </p>

        <h2>Mudanças</h2>
        <p>
          Se o que coletamos mudar, atualizamos esta página e a data no topo.
        </p>

        <h2>Contato</h2>
        <p>
          Walkito
          <br />
          {mail}
        </p>
      </Prose>

      <Footer lang="pt" page="privacy" />
    </>
  );
}
