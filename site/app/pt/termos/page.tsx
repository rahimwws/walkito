import type { Metadata } from 'next';

import { Footer } from '@/components/Footer';
import { JsonLd } from '@/components/JsonLd';
import { Masthead } from '@/components/Masthead';
import { Prose } from '@/components/Prose';
import { alternatesFor } from '@/lib/i18n';
import { SITE_NAME, SITE_URL, SUPPORT_EMAIL } from '@/lib/site';

/**
 * The Brazilian Portuguese Terms of Use. It mirrors `app/(en)/terms/page.tsx`
 * and must be updated whenever that page changes; where the two differ, the
 * English applies. The notes on what is deliberately left out (governing law,
 * prices) live on the English page.
 *
 * The app has no Portuguese catalogue yet, so in-app labels are given in the
 * app's English with a Portuguese gloss. iOS paths are iOS's own pt-BR labels.
 */
export const metadata: Metadata = {
  title: 'Termos de uso',
  description:
    'Termos de uso do Walkito: o que o app é e o que não é, a sua conta, assinaturas, convites, saúde e segurança.',
  alternates: alternatesFor('terms', 'pt'),
  openGraph: {
    locale: 'pt_BR',
    title: `Termos de uso | ${SITE_NAME}`,
    description: 'O que o app é, como funcionam os pagamentos e os limites do que ele afirma.',
    url: '/pt/termos/',
    images: ['/share/en.jpg'],
    type: 'website',
  },
};

const BREADCRUMBS = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Início', item: `${SITE_URL}/pt/` },
    { '@type': 'ListItem', position: 2, name: 'Termos de uso', item: `${SITE_URL}/pt/termos/` },
  ],
};

export default function TermosPt() {
  return (
    <>
      <JsonLd data={BREADCRUMBS} />
      <Masthead lang="pt" />

      <Prose className="shell prose">
        <h1>Termos de uso</h1>

        <p className="updated">Última atualização: 1 de outubro de 2026</p>
        <p className="updated">
          Esta é uma tradução. Se ela for diferente da{' '}
          <a href="/terms/">versão em inglês</a>, vale a versão em inglês.
        </p>

        <p className="lede">
          Estes termos regem o seu uso do app Walkito, que é operado pela
          Walkito (“nós”). Usar o app significa que você os aceita. Se não
          aceitar, pare de usá-lo e exclua a sua conta em Profile → Delete
          account (Perfil → Excluir conta).
        </p>

        <h2>O que é o Walkito</h2>
        <p>
          O Walkito é um programa de exercícios para dor no calcanhar e no pé.
          Ele monta o seu plano uma semana de cada vez em torno de metas que dá
          para medir, com sessões de 3, 5 ou 10 minutos, se ajusta a cada dia a
          partir do que você registra, e mede o seu progresso com testes físicos
          a cada 14 dias, e depois a cada 28 quando a sua primeira meta for
          alcançada.
        </p>
        <p>
          <b>Ele não é um dispositivo médico, um diagnóstico nem um tratamento.</b>{' '}
          Ele não consegue dizer o que há de errado com o seu pé, e nada nele
          substitui a orientação de um profissional de saúde que tenha examinado
          você.
        </p>

        <h2>Saúde e segurança</h2>
        <p>
          Exercício tem riscos, e você assume esses riscos. Você é responsável
          por decidir se uma sessão é adequada para você em cada dia, e por
          parar quando algo doer de um jeito que o app não tem como saber.
        </p>
        <p className="notice">
          Procure um profissional de saúde antes de começar, e pare e peça
          orientação, se a sua dor começou depois de uma lesão ou de uma queda,
          vem com dormência, formigamento, queimação, inchaço ou calor, acorda
          você à noite, ou se um arco caiu de repente na vida adulta.
        </p>

        <h2>Quem pode usar</h2>
        <p>
          Você precisa ter 13 anos ou mais. Se tiver menos de 18, use o Walkito
          com um dos pais ou um responsável que tenha lido estes termos.
        </p>

        <h2>A sua conta</h2>
        <p>
          Você entra com a Apple ao configurar o Walkito, e é nessa conta que o
          seu plano fica salvo. Entrar com e-mail e senha funciona só para
          contas que nós mesmos criamos; não existe cadastro por e-mail. Mantenha
          o seu celular e o seu ID Apple seguros, porque qualquer pessoa que os
          use pode usar a sua conta.
        </p>
        <p>
          O seu plano, as respostas, os registros, os resultados dos testes e as
          sessões ficam salvos no seu celular e são copiados para a sua conta.
          Entre com a mesma conta em um celular novo ou depois de reinstalar e
          eles voltam. As compras voltam com Restore purchases (Restaurar
          compras) no mesmo ID Apple.
        </p>

        <h2>A sua licença</h2>
        <p>
          Você recebe uma licença pessoal, não exclusiva e intransferível para
          usar o Walkito em aparelhos que você possui ou controla, para uso
          próprio e não comercial. Você não pode revender o acesso, redistribuir
          o programa, fazer engenharia reversa do app nem usar o conteúdo dele
          para criar um produto concorrente.
        </p>
        <p>
          O programa, o catálogo de exercícios, os textos e o software são
          nossos. Tudo o que você registra (os seus registros de dor, as suas
          sessões, o seu histórico) é seu. Fica salvo no seu aparelho e é
          copiado para a sua conta para poder ser restaurado.
        </p>

        <h2>Pagamentos</h2>
        <p>
          O Walkito é pago pela App Store. A Apple recebe o pagamento, guarda o
          recibo e mostra as opções, o preço e o prazo antes de você comprar.
          Esse é o preço que vale, e não qualquer valor citado em outro lugar.
          Hoje existem duas assinaturas, e as duas são renovadas
          automaticamente:
        </p>
        <ul>
          <li>
            <b>Uma assinatura anual</b>, cobrada uma vez por ano.
          </li>
          <li>
            <b>Uma assinatura semanal</b>, cobrada uma vez por semana.
          </li>
        </ul>

        <h3>Assinaturas</h3>
        <ul>
          <li>
            Uma assinatura é renovada automaticamente no fim de cada período, e
            o seu ID Apple é cobrado, a menos que você desative a renovação pelo
            menos 24 horas antes do fim do período.
          </li>
          <li>
            Gerencie ou cancele em <b>Ajustes → [seu nome] → Assinaturas</b>.
            Cancelar interrompe a próxima renovação; você mantém o acesso até o
            fim do período que já pagou.
          </li>
          <li>
            Se for oferecido um teste grátis ou um preço introdutório, ele passa
            para o preço normal quando terminar, a menos que você cancele pelo
            menos 24 horas antes do fim.
          </li>
          <li>
            Apagar o app ou a sua conta não cancela uma assinatura. Só a Apple
            pode fazer isso, na tela acima.
          </li>
        </ul>

        <h3>Reembolsos</h3>
        <p>
          Os reembolsos são feitos só pela Apple. Use{' '}
          <a href="https://reportaproblem.apple.com">reportaproblem.apple.com</a>.
          Não podemos fazer nem estornar uma cobrança em nome da Apple.
        </p>

        <h2>Convites</h2>
        <p>
          Você pode compartilhar o seu código de convite. Um amigo que usar o
          código ganha um desconto na assinatura anual. Depois que alguém usar o
          seu código, o mesmo desconto fica disponível para você se assinar o
          plano anual mais tarde. Compartilhar um código não dá tempo grátis nem
          qualquer outra recompensa.
        </p>
        <p>
          Cada pessoa pode usar um código, uma vez, e não o próprio. Os
          descontos de convite não têm valor em dinheiro.
        </p>
        <p>
          Podemos mudar ou encerrar o programa de convites a qualquer momento.
          Um desconto com o qual você já assinou continua sendo seu.
        </p>

        <h2>App Saúde da Apple (Apple Health)</h2>
        <p>
          Se você permitir, o Walkito lê contagem de passos, velocidade de
          caminhada, assimetria ao caminhar, lances de escada, frequência
          cardíaca em repouso, frequência cardíaca, energia ativa, análise do
          sono e exercícios, e grava as sessões que você termina como exercícios
          e minutos de atenção plena. Toda permissão é opcional e pode ser
          retirada a qualquer momento nos Ajustes. Os dados do app Saúde ficam
          no seu celular e nunca são enviados nem salvos na sua conta. Veja a{' '}
          <a href="/pt/privacidade/">página de privacidade</a> para saber o que
          sai do celular.
        </p>

        <h2>Mudanças</h2>
        <p>
          O programa e o app vão mudar: exercícios são revisados, o plano é
          ajustado, recursos vêm e vão. Também podemos mudar estes termos.
          Quando uma mudança for relevante, vamos avisar no app ou atualizando a
          data no topo desta página, e continuar usando o Walkito depois disso
          significa que você aceita a nova versão.
        </p>

        <h2>Como encerrar</h2>
        <p>
          Você pode parar a qualquer momento excluindo a sua conta em Profile →
          Delete account (Perfil → Excluir conta), o que remove o que você
          registrou do celular e do nosso servidor, e cancelando qualquer
          assinatura pela Apple como descrito acima. Apagar só o app remove
          apenas a cópia que está no celular. Podemos suspender o acesso se o
          app estiver sendo usado de um jeito que estes termos proíbem. Na
          prática, isso quer dizer revenda ou adulteração, e não algo que você
          faria usando o app normalmente.
        </p>

        <h2>O que não prometemos</h2>
        <p>
          O Walkito é oferecido no estado em que se encontra. Não prometemos que
          seguir o programa vai reduzir a sua dor, mudar o seu arco ou trazer
          qualquer resultado específico. A{' '}
          <a href="/science/" hrefLang="en">página de evidências</a> (em inglês)
          mostra o que a pesquisa que ele segue encontrou, incluindo onde essa
          evidência para.
        </p>
        <p>
          Não prometemos que o app vai funcionar sem interrupções ou sem erros,
          e não somos responsáveis por perdas indiretas ou consequentes, nem por
          lesões decorrentes de exercícios que você escolheu fazer. Nada aqui
          limita direitos que você tem pela lei de defesa do consumidor e que
          não podem ser limitados por acordo.
        </p>

        <h2>Contato</h2>
        <p>
          Walkito
          <br />
          <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>
        </p>
      </Prose>

      <Footer lang="pt" page="terms" />
    </>
  );
}
