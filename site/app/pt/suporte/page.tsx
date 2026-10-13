import type { Metadata } from 'next';

import { Footer } from '@/components/Footer';
import { Masthead } from '@/components/Masthead';
import { Prose } from '@/components/Prose';
import { CHROME, alternatesFor } from '@/lib/i18n';
import { SUPPORT_EMAIL } from '@/lib/site';

/**
 * The Brazilian Portuguese Support page. It mirrors `app/(en)/support/page.tsx`
 * and must be updated whenever that page changes; where the two differ, the
 * English applies.
 *
 * The app has no Portuguese catalogue yet, so in-app labels are given in the
 * app's English with a Portuguese gloss. iOS paths are iOS's own pt-BR labels.
 */
export const metadata: Metadata = {
  // The root template appends " | Walkito".
  title: 'Suporte',
  description:
    'Ajuda com o Walkito: notificações, app Saúde, compras, reembolsos e como excluir sua conta. Escreva para nós e uma pessoa responde.',
  alternates: alternatesFor('support', 'pt'),
};

const mail = <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>;

export default function SuportePt() {
  return (
    <>
      <Masthead lang="pt" />

      <Prose className="shell prose" kicker={{ label: CHROME.pt.navSupport, lang: 'pt' }}>
        <h1>Suporte</h1>

        <p className="updated">Algo estranho? Conte para a gente. Uma pessoa responde.</p>

        <p>
          Escreva para {mail}. Uma pessoa responde, normalmente em até 12 horas.
          Conte o que você estava fazendo e o que o app fez. Isso costuma bastar
          para entender o que aconteceu sem ficar trocando mensagens.
        </p>

        <h2>Login, e um celular novo</h2>
        <p>
          Na configuração você entra com a Apple, e para isso precisa de
          conexão uma vez. Depois, o uso diário funciona sem internet, e o que
          você registra é copiado para a sua conta sempre que houver conexão.
          Em um celular novo ou depois de reinstalar, entre com o mesmo ID Apple
          e o seu plano, os seus registros, os resultados dos testes e as
          sessões voltam.
        </p>

        <h2>O plano segue as datas, não a presença</h2>
        <p>
          Faltar dias não deixa você para trás, e não há nada para compensar. A
          semana segue as datas, então uma sessão perdida não passa para
          amanhã. Se você ficou um tempo fora, abra o app e continue a partir de
          hoje.
        </p>

        <h2>Notificações</h2>
        <p>
          No máximo uma por dia e cinco por semana, e nada depois das 21:30. Se
          você para de abrir as notificações, o app envia menos, e se continua
          sem abrir, ele as pausa por um mês. Você pode desativá-las de vez em
          Ajustes → Notificações → Walkito; se fizer isso, nada mais muda no
          app.
        </p>

        <h2>Dados de saúde</h2>
        <p>
          O Walkito lê do app Saúde da Apple os passos, a velocidade de
          caminhada, a assimetria ao caminhar, os lances de escada, a
          frequência cardíaca, a frequência cardíaca em repouso, a energia
          ativa, o sono e os exercícios, e grava lá as sessões que você
          termina. Tudo isso é opcional. Esses dados ficam no seu celular e
          nunca são enviados nem salvos na sua conta. Desative o que quiser em
          Ajustes → Apps → Saúde → Acesso a Dados e Dispositivos → Walkito, e as
          partes que usavam esses dados simplesmente deixam de aparecer. O plano
          continua funcionando.
        </p>

        <h2>A dor, e quando parar</h2>
        <p>
          O Walkito é um programa de exercícios. Ele não faz diagnóstico e não
          consegue dizer o que você tem. Se a dor for aguda, estiver piorando ou
          atrapalhando seu sono, procure um profissional de saúde.
        </p>

        <h2>Compras</h2>
        <p>
          O Walkito é pago com uma assinatura pela App Store, anual ou semanal.
          As duas são renovadas automaticamente, e a App Store mostra o preço na
          sua moeda antes de você comprar.
        </p>
        <ul>
          <li>
            <b>Gerencie ou cancele</b> a sua assinatura em Ajustes → [seu nome]
            → Assinaturas. Se você desativar a renovação pelo menos 24 horas
            antes do fim do período, não será cobrado de novo. Você mantém o
            acesso até o fim do período que já pagou.
          </li>
          <li>
            <b>Reembolsos</b> são feitos pela Apple. Use a página{' '}
            <a href="https://reportaproblem.apple.com">Relatar um Problema</a>{' '}
            da Apple. Não podemos processar reembolsos em nome da Apple.
          </li>
          <li>
            <b>Celular novo?</b> Entre com o mesmo ID Apple e toque em Restore
            purchases (Restaurar compras) no app. O seu plano volta com a sua
            conta.
          </li>
        </ul>

        <h2>Excluir a sua conta</h2>
        <p>
          No app, vá em <b>Profile → Delete account</b> (Perfil → Excluir
          conta). Isso apaga a sua conta no nosso servidor com tudo o que está
          salvo nela (seu plano, registros, resultados dos testes, sessões,
          e-mail e código de convite) e limpa o celular. Não dá para desfazer.
          Apagar só o app remove apenas a cópia que está no celular: a sua conta
          continua e volta quando você entrar de novo. Você também pode escrever
          para {mail} e nós excluímos para você.
        </p>

        <p className="updated">
          Esta é uma tradução. Se ela for diferente da{' '}
          <a href="/support/">versão em inglês</a>, vale a versão em inglês.
        </p>
      </Prose>

      <Footer lang="pt" page="support" />
    </>
  );
}
