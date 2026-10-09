import { CITE } from '@/lib/citations';
import type { Guide } from '../types';

/*
 * Italian version of `articles/ex-tibialis-raises.ts`, written around the
 * queries «tibialis raise» and «esercizi tibiale anteriore». Informal «tu».
 * Figures, doses, grades and qualifiers are identical to the English page.
 * The in-app name quoted is the Italian app title («Sollevamenti delle
 * punte»). No new citations.
 */

export const EX_TIBIALIS_RAISES_IT: Guide = {
  lang: 'it',
  page: 'exTibialisRaises',
  published: '2026-10-08',
  updated: '2026-10-08',
  title: 'Tibialis raise: esercizio per il tibiale anteriore',
  description:
    'Come fare i sollevamenti dell’avampiede (tibialis raise): tecnica, serie, ripetizioni, muscoli coinvolti, prove sulla periostite tibiale e progressioni.',
  h1: 'Sollevamenti dell’avampiede: come farli, cosa allenano e cosa dicono gli studi',
  lede:
    'Il sollevamento dell’avampiede (tibialis raise) è un esercizio con la schiena appoggiata al muro in cui alzi le dita verso lo stinco mentre i talloni restano a terra. Rinforza il tibiale anteriore, il muscolo che scende lungo il davanti della tibia e aiuta a sollevare il piede a ogni passo. L’esercizio è semplice e non richiede attrezzi, basta un muro.',
  takeaways: [
    'Il tibiale anteriore controlla la dorsiflessione, cioè solleva la parte anteriore del piede perché non strisci a terra quando cammini e corri.',
    'Gli atleti con sindrome da stress tibiale mediale (periostite tibiale) avevano una resistenza nei sollevamenti sulle punte più bassa dei controlli appaiati, il che indica un deficit di forza generale della gamba (Madeley e colleghi, 2007).',
    'Nessuno studio randomizzato ha testato i sollevamenti dell’avampiede da soli per un problema specifico del piede o della caviglia. L’esercizio è inserito nei programmi per ragionamento biomeccanico, non per prove dirette da studi.',
    'Walkito parte da 3\u00A0serie da 10, entrambi i piedi, con la schiena al muro.',
  ],
  toc: false,
  sections: [
    {
      h2: 'Quali muscoli lavorano nei sollevamenti dell’avampiede?',
      paragraphs: [
        'I sollevamenti dell’avampiede lavorano soprattutto sul tibiale anteriore, il muscolo sul davanti dello stinco. È responsabile della dorsiflessione, cioè del sollevare il piede verso lo stinco. A ogni passo, il tibiale anteriore alza le dita così il piede non tocca terra. Quando è debole, il piede può sbattere a terra dopo l’appoggio del tallone o inciampare sulle superfici irregolari.',
        'L’esercizio lavora anche sui piccoli muscoli estensori delle dita lungo il davanti della gamba. Non carica i muscoli del polpaccio sul retro della gamba, ed è per questo che si abbina ai [sollevamenti sulle punte](/it/esercizi/sollevamenti-sulle-punte/) per coprire entrambi i lati della gamba.',
      ],
    },
    {
      h2: 'Come si fa il sollevamento dell’avampiede?',
      paragraphs: [
        'Stai in piedi con la schiena appoggiata al muro. Porta i piedi in avanti di circa 30\u00A0cm dal muro (più o meno la lunghezza di un piede). Tieni i talloni a terra. Solleva la parte anteriore di entrambi i piedi più in alto che puoi, tirando le dita verso lo stinco. Fermati un attimo in alto. Scendi piano.',
        'Il muro sostiene il tuo peso così puoi concentrarti sulla contrazione dello stinco. Se scivoli via dal muro, i piedi sono troppo avanti.',
      ],
      exercises: [
        {
          name: 'Sollevamenti dell’avampiede (schiena al muro)',
          evidence: {
            level: 'early',
            why: 'Nessuno studio randomizzato ha testato i sollevamenti dell’avampiede da soli per un problema del piede o della tibia. Inseriti per l’equilibrio biomeccanico insieme al lavoro sul polpaccio.',
          },
          dose: 'Walkito parte da 3\u00A0serie da 10, entrambi i piedi',
          how: 'Schiena al muro, piedi un po’ in avanti. Solleva le dita verso lo stinco, i talloni restano giù. Scendi piano.',
          often: 'Giorni di forza',
          feel: 'Un bruciore lungo il davanti dello stinco',
          stop: 'Dolore acuto sull’osso della tibia, non solo fatica muscolare',
          media: 'tibialis_raise',
          caption: 'Sollevamenti dell’avampiede: alza le dita, tieni giù i talloni',
          alt: 'Una figura appoggiata al muro che solleva le dita di entrambi i piedi verso lo stinco, il davanti delle gambe evidenziato',
        },
      ],
    },
    {
      h2: 'I sollevamenti dell’avampiede aiutano la periostite tibiale?',
      keyFact: 'In uno studio caso-controllo del 2007, gli atleti con periostite tibiale avevano una resistenza nei sollevamenti sulle punte più bassa dei controlli appaiati, il che indica un deficit di forza generale della gamba, non di un singolo muscolo (Madeley e colleghi, 2007).',
      paragraphs: [
        'La periostite tibiale, il cui nome clinico è sindrome da stress tibiale mediale (MTSS), dà dolore lungo il bordo interno della tibia. Il tibiale anteriore sta sul davanti esterno dello stinco, non nel punto in cui di solito fa male la MTSS, quindi il legame è indiretto. Il ragionamento è che un tibiale anteriore più forte aiuta ad assorbire l’impatto quando corri e cammini, riducendo la tensione sullo stinco nel suo insieme.',
        'Uno studio caso-controllo del 2007 ha trovato che gli atleti con MTSS avevano una resistenza nei sollevamenti sulle punte più bassa dei controlli appaiati, il che indica un deficit di forza generale della gamba, non la debolezza di un singolo muscolo. Una revisione sistematica del 2013 ha esaminato il trattamento della MTSS già presente, non la prevenzione, e non ha trovato studi che mostrassero l’efficacia di esercizi di allungamento o di rinforzo, anche se nel complesso le prove dietro questa conclusione erano di bassa qualità.',
        'Onestamente, non abbiamo uno studio che abbia testato i sollevamenti dell’avampiede da soli per la periostite tibiale e mostrato che riducono i sintomi o le ricadute. L’esercizio è nei programmi perché ha senso dal punto di vista biomeccanico, non perché uno studio lo abbia dimostrato. Per questo la sua etichetta di evidenza è «iniziale». Per la pagina completa sulla periostite tibiale, vedi [esercizi per la periostite tibiale](/it/periostite-tibiale-esercizi/).',
      ],
      cites: [CITE.madeley, CITE.winters],
    },
    {
      h2: 'Serie, ripetizioni e come progredire',
      paragraphs: [
        'Walkito parte da 3\u00A0serie da 10, entrambi i piedi, con la schiena al muro. Per la maggior parte delle persone è un punto di partenza comodo. Se 10\u00A0ripetizioni ti sembrano facili senza nessuna fatica, sali a 15 o aggiungi una pausa di 2\u00A0secondi in alto.',
        'Per rendere l’esercizio più difficile, prova i sollevamenti dell’avampiede su una gamba: stessa posizione al muro, un piede alla volta. Un elastico passato sopra il piede aggiunge carico. Tenere un manubrio leggero sopra il dorso del piede è un’altra opzione, anche se scomoda. La progressione più semplice è fare più ripetizioni con un ritmo controllato.',
        'Nell’app questo esercizio si chiama «Sollevamenti delle punte». Il movimento è lo stesso: alzi le dita, i talloni restano giù.',
      ],
    },
    {
      h2: 'Sollevamenti dell’avampiede o sollevamenti sulle punte',
      paragraphs: [
        'I sollevamenti dell’avampiede e i [sollevamenti sulle punte](/it/esercizi/sollevamenti-sulle-punte/) sono movimenti opposti. Il sollevamento sulle punte spinge il piede verso il basso (flessione plantare). Il sollevamento dell’avampiede solleva il piede verso l’alto (dorsiflessione). I muscoli del polpaccio e il tibiale anteriore lavorano insieme per controllare ogni passo, assorbendo l’impatto all’appoggio e spingendo alla staccata.',
        'Rinforzare un lato senza l’altro può creare uno squilibrio. Chi corre e fa solo sollevamenti sulle punte può comunque avere dolore allo stinco, perché il tibiale anteriore non riesce a stare al passo con il polpaccio quando i chilometri sono tanti. Un programma equilibrato include entrambi.',
      ],
    },
    {
      h2: 'Quali sono gli errori più comuni nei sollevamenti dell’avampiede?',
      paragraphs: [
        'Piedi troppo lontani dal muro. Se i talloni scivolano in avanti, perdi il sostegno del muro e l’esercizio diventa una prova di equilibrio invece che un rinforzo dello stinco. Circa la lunghezza di un piede dal muro va bene per la maggior parte delle persone.',
        'Fare le ripetizioni di fretta. Una salita e una discesa lente e controllate fanno lavorare di più il muscolo rispetto a ripetizioni veloci. Due secondi su, un secondo fermo, due secondi giù è un buon ritmo.',
        'Confondere il bruciore muscolare con il dolore all’osso. Un bruciore lungo i muscoli sul davanti dello stinco è normale durante la serie. Un dolore acuto e localizzato sull’osso della tibia no, e potrebbe indicare una reazione da stress. Fermati e fallo controllare.',
      ],
    },
  ],
  faq: [
    {
      q: 'A cosa servono i tibialis raise?',
      a: 'I sollevamenti dell’avampiede rinforzano il muscolo che solleva la parte anteriore del piede. Di solito fanno parte dei programmi per la gamba insieme ai sollevamenti sulle punte, per la stabilità generale di stinco e caviglia. Possono aiutare chi sente lo stinco affaticato quando corre o cammina, anche se nessuno studio li ha testati da soli per un problema specifico.',
    },
    {
      q: 'I tibialis raise possono prevenire la periostite tibiale?',
      cites: [CITE.madeley, CITE.winters],
      a: 'Sono spesso inseriti nei programmi per la periostite tibiale per il ragionamento biomeccanico, non per prove da studi. Una revisione sistematica del 2013 ha esaminato il trattamento della MTSS, non la prevenzione, e non ha trovato studi che mostrassero l’efficacia degli esercizi di rinforzo, anche se le prove erano di bassa qualità. Nemmeno i sollevamenti dell’avampiede da soli sono stati testati per prevenire la periostite tibiale.',
    },
    {
      q: 'Ogni quanto fare i sollevamenti dell’avampiede?',
      a: 'Da due a quattro volte a settimana è un intervallo comune. Walkito li mette nei giorni di forza insieme al lavoro sul polpaccio. Visto che il carico è abbastanza basso rispetto a sollevamenti sulle punte pesanti o discese del tallone, il recupero di solito è veloce e l’esercizio si può fare in giorni consecutivi se non dà dolore.',
    },
    {
      q: 'Tibialis raise e sollevamenti delle punte sono la stessa cosa?',
      a: 'Sì. «Sollevamenti delle punte» e «tibialis raise» descrivono lo stesso movimento: sollevare la parte anteriore del piede mentre il tallone resta a terra. Nell’app Walkito si chiamano «Sollevamenti delle punte». Alcune fonti li chiamano anche «tib raise» o «sollevamenti del tibiale anteriore». Sono tutti lo stesso esercizio.',
    },
  ],
  redFlags: {
    h2: 'Rivolgiti prima a un professionista sanitario se',
    bullets: [
      'hai un dolore acuto e concentrato sull’osso della tibia invece di un indolenzimento muscolare diffuso',
      'il dolore cresce durante la corsa dopo che hai aumentato da poco i chilometri, il che può indicare una frattura da stress invece della fatica muscolare',
      'c’è gonfiore, arrossamento o calore sullo stinco',
      'fai fatica a sollevare la parte anteriore del piede (piede cadente)',
      'compaiono intorpidimento o formicolio nel piede o nella gamba',
    ],
  },
  program: {
    h2: 'Farlo come un piano',
    text: 'Walkito abbina i sollevamenti dell’avampiede ai sollevamenti sulle punte, al lavoro di equilibrio e agli esercizi per il piede in un piano costruito sul tuo livello attuale. Scegli 3, 5 o 7\u00A0giorni a settimana e sessioni da 3, 5 o 10\u00A0minuti.',
    more: [
      'Ogni 14\u00A0giorni, un breve test controlla resistenza del polpaccio, equilibrio e tenuta dell’arco. I sollevamenti dell’avampiede fanno parte dei giorni di forza. Walkito è un programma di esercizi. Non fa diagnosi.',
    ],
    cta: 'Inizia con 3\u00A0minuti al giorno.',
  },
  crumb: 'Sollevamenti dell’avampiede',
  campaign: 'ex-tibialis-raises-it',
};
