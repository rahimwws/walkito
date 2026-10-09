import { CITE } from '@/lib/citations';
import type { Guide } from '../types';

/*
 * Italian version of `articles/ex-single-leg-balance.ts`, written around the
 * queries «equilibrio su una gamba» and «quanto tempo stare su una gamba».
 * Informal «tu». Figures, doses, grades and qualifiers are identical to the
 * English page. Citations as in English (springer, bellows).
 */

export const EX_SINGLE_LEG_BALANCE_IT: Guide = {
  lang: 'it',
  page: 'exSingleLegBalance',
  published: '2026-10-08',
  updated: '2026-10-08',
  title: 'Equilibrio su una gamba: come farlo e perché conta',
  description:
    'Come fare l’equilibrio su una gamba: tecnica, tempi normali per età, progressione a occhi chiusi, cosa misura ed errori comuni.',
  h1: 'Equilibrio su una gamba: come farlo, tempi normali e progressione a occhi chiusi',
  lede:
    'Stare su una gamba è uno dei test più semplici del controllo di caviglia e piede. Ed è anche un esercizio. Ogni secondo in cui tieni la posizione, i piccoli muscoli del piede e della caviglia lavorano per tenerti in piedi. Uno studio del 2007 su 549\u00A0adulti sani ha trovato che la capacità di stare su una gamba a occhi aperti e chiusi cala in modo costante con l’età, e una meta-analisi del 2018 ha trovato che l’allenamento dell’equilibrio riduceva del 46% il rischio di distorsione alla caviglia negli atleti.',
  takeaways: [
    'Gli adulti sani tra 18 e 39\u00A0anni restavano in media 43,3\u00A0secondi su una gamba a occhi aperti e 9,4\u00A0secondi a occhi chiusi. Tra 60 e 69\u00A0anni, la media a occhi aperti era di 26,9\u00A0secondi e quella a occhi chiusi scendeva a 2,8\u00A0secondi (Springer e colleghi, 2007).',
    'Una meta-analisi su 3.577\u00A0atleti ha trovato che l’allenamento dell’equilibrio riduceva del 46% il rischio di distorsione alla caviglia rispetto a nessun intervento (Bellows e Wong, 2018).',
    'L’obiettivo di equilibrio di Walkito è di 30\u00A0secondi su una gamba. Il test si fa ogni 14\u00A0giorni finché l’obiettivo di equilibrio è attivo.',
    'Chiudere gli occhi toglie la vista come fonte di informazioni per l’equilibrio, e così piede e caviglia devono lavorare di più. L’app include l’equilibrio a occhi chiusi come passaggio successivo dopo la tenuta a occhi aperti.',
  ],
  toc: false,
  sections: [
    {
      h2: 'Come si fa l’equilibrio su una gamba?',
      paragraphs: [
        'Mettiti vicino a un muro o a un piano di lavoro. Solleva un piede da terra piegando un po’ il ginocchio. Guarda un punto fisso davanti a te. Lascia che il piede d’appoggio oscilli. Quell’oscillazione è proprio il punto: i piccoli muscoli del piede e della caviglia stanno lavorando per tenerti in piedi.',
        'Tieni più a lungo che puoi, fino a 30\u00A0secondi, poi cambia lato. Tre tenute per lato è una dose comune. Se non riesci a stare più di qualche secondo, tieni la punta delle dita sul muro e aumenta un po’ alla volta.',
      ],
      exercises: [
        {
          name: 'Equilibrio su una gamba',
          evidence: {
            level: 'moderate',
            why: 'L’allenamento dell’equilibrio riduce il rischio di distorsione alla caviglia (meta-analisi di Bellows 2018). La stazione su una gamba è una misura clinica standard con dati normativi (Springer 2007).',
          },
          dose: 'Walkito parte da 3\u00A0tenute da 30\u00A0secondi, ogni lato',
          how: 'Stai su un piede vicino a un muro. Guarda un punto fisso. Lascia oscillare la caviglia. Tieni fino a 30\u00A0secondi.',
          often: 'Quasi tutte le sessioni',
          feel: 'Il piede e la caviglia che lavorano per restare fermi',
          stop: 'Dolore acuto nel piede o nella caviglia, non solo oscillazione',
          media: 'single_leg_hold',
          caption: 'Equilibrio su una gamba: lascia oscillare il piede, l’esercizio è quello',
          alt: 'Una figura in piedi su una gamba vicino a un muro, il piede e la caviglia evidenziati',
        },
      ],
      cites: [CITE.springer, CITE.bellows],
    },
    {
      h2: 'Quanto tempo dovresti riuscire a stare su una gamba?',
      paragraphs: [
        'Uno studio del 2007 ha testato 549\u00A0adulti sani di varie fasce d’età. I risultati danno un riferimento indicativo, non una soglia di promosso o bocciato.',
      ],
      table: {
        caption: 'Tempi medi di stazione su una gamba, occhi aperti e chiusi (Springer 2007)',
        head: ['Fascia d’età', 'Occhi aperti (secondi)', 'Occhi chiusi (secondi)'],
        rows: [
          ['18-39', '43,3', '9,4'],
          ['40-49', '40,3', '7,3'],
          ['50-59', '37,0', '4,8'],
          ['60-69', '26,9', '2,8'],
          ['70-79', '15,0', '2,0'],
          ['80-99', '6,2', '1,3'],
        ],
      },
      after: [
        'I numeri calano di colpo quando si chiudono gli occhi, soprattutto dopo i 50\u00A0anni. Per questo la versione a occhi chiusi è un test molto più sensibile del controllo di caviglia e piede. Ed è anche il motivo per cui l’app Walkito include una progressione a occhi chiusi dopo la tenuta a occhi aperti.',
        'Più che corrispondere a una tabella, conta se il tuo tempo migliora nel corso delle settimane e se i due lati sono più o meno pari. Una grande differenza tra le gambe può indicare un deficit di forza o di stabilità da un lato.',
      ],
      cites: [CITE.springer],
    },
    {
      h2: 'La progressione a occhi chiusi',
      paragraphs: [
        'Chiudere gli occhi toglie le informazioni visive che il cervello usa di solito per l’equilibrio. Così i propriocettori del piede e della caviglia, i sensori che rilevano posizione e movimento, devono fare più lavoro. È una versione più difficile dello stesso esercizio, non un esercizio diverso.',
        'Mettiti vicino a un muro per sicurezza. Chiudi gli occhi e tieni più a lungo che puoi. La maggior parte delle persone vede il proprio tempo scendere a una frazione di quello a occhi aperti. Con la pratica la differenza si riduce.',
        'L’app Walkito include l’equilibrio a occhi chiusi come esercizio a sé: 3\u00A0tenute da 20\u00A0secondi, entrambi i piedi (alternati). Si sblocca come progressione quando l’obiettivo di equilibrio a occhi aperti è solido.',
      ],
    },
    {
      h2: 'Perché l’equilibrio conta per il dolore al piede?',
      keyFact: 'Per le distorsioni alla caviglia, un’analisi combinata di 8\u00A0studi e 3.577\u00A0atleti ha trovato che l’allenamento dell’equilibrio abbassava del 46% il rischio di distorsione rispetto a nessun intervento (Bellows e Wong, 2018).',
      paragraphs: [
        'L’equilibrio non è separato dalla forza del piede. Quando stai su una gamba, i muscoli intrinseci del piede (i piccoli muscoli dentro il piede che sostengono l’arco), i muscoli del polpaccio, il tibiale anteriore e gli stabilizzatori dell’anca lavorano tutti insieme. Un deficit in un punto qualsiasi di questa catena costringe il piede a compensare.',
        'Per la fascite plantare e il piede piatto, l’allenamento dell’equilibrio compare nei programmi di esercizi insieme ad allungamenti e rinforzo, perché allena tutta la catena in una volta. Uno studio del 2023 su 52\u00A0persone con piede piatto flessibile ha trovato che un programma che univa esercizi del piede corto, lavoro sulla caviglia, rinforzo dell’anca, allungamenti ed equilibrio cambiava la forma dell’arco più di un gruppo di controllo. L’equilibrio non era isolato in quello studio, ma faceva parte del programma che ha funzionato.',
        'Per le distorsioni alla caviglia in particolare, una meta-analisi del 2018 su 8\u00A0studi e 3.577\u00A0atleti ha trovato che l’allenamento dell’equilibrio riduceva del 46% il rischio di distorsione alla caviglia rispetto a nessun intervento. È il risultato singolo più forte a favore dell’equilibrio in un programma per il piede.',
      ],
      cites: [CITE.bellows, CITE.brijwasi],
    },
    {
      h2: 'Quali sono gli errori più comuni nell’equilibrio su una gamba?',
      paragraphs: [
        'Guardare il pavimento. Gli occhi devono stare su un punto fisso all’altezza degli occhi. Guardare in basso sposta il peso in avanti e rende l’esercizio più facile, e così perde il suo scopo.',
        'Bloccare il ginocchio d’appoggio. Una leggera flessione tiene attivi i muscoli. Un ginocchio bloccato sposta il carico sull’articolazione invece che sui muscoli intorno.',
        'Cercare di non oscillare. L’oscillazione è l’esercizio. Le piccole correzioni che fa il piede per restare in piedi sono quelle che costruiscono propriocezione e controllo della caviglia. Aggrapparsi al pavimento con le dita arricciate o irrigidirsi per eliminare ogni movimento riduce l’effetto dell’allenamento.',
        'Stare troppo lontano dal muro. Devi essere abbastanza vicino da poterti tenere se perdi l’equilibrio, soprattutto nella versione a occhi chiusi. Prima di tutto la sicurezza.',
      ],
    },
    {
      h2: 'Versioni più facili e più difficili',
      paragraphs: [
        'Se non riesci a stare su una gamba per più di qualche secondo, tieni la punta delle dita su un muro e migliora poco a poco. Anche un tocco leggero dà al cervello un’informazione in più per l’equilibrio. Togli un dito alla volta man mano che migliori.',
        'Se 30\u00A0secondi su un pavimento duro ti sembrano facili, prova a stare su un asciugamano piegato o su un cuscino. La superficie morbida fa lavorare di più la caviglia a ogni oscillazione. L’app include un esercizio di equilibrio sul cuscino come progressione successiva.',
        'La progressione più difficile è l’equilibrio su una gamba a occhi chiusi su una superficie morbida. Toglie sia le informazioni visive sia un pavimento stabile, e lascia quasi tutto il lavoro a piede e caviglia.',
        'Per esercizi collegati che costruiscono la catena, vedi i [sollevamenti sulle punte](/it/esercizi/sollevamenti-sulle-punte/), i [sollevamenti dell’avampiede](/it/esercizi/sollevamenti-avampiede-muro/) e l’[esercizio del piede corto](/it/esercizi/piede-corto/).',
      ],
    },
  ],
  faq: [
    {
      q: 'Quanto tempo si dovrebbe riuscire a stare su una gamba?',
      cites: [CITE.springer],
      a: 'Uno studio normativo del 2007 su 549\u00A0adulti sani ha trovato che le persone tra 18 e 39\u00A0anni restavano in media 43,3\u00A0secondi a occhi aperti e 9,4\u00A0secondi a occhi chiusi. Tra 60 e 69\u00A0anni erano 26,9\u00A0secondi a occhi aperti e 2,8\u00A0secondi a occhi chiusi (Springer 2007). L’obiettivo di equilibrio di Walkito è di 30\u00A0secondi per lato.',
    },
    {
      q: 'L’equilibrio su una gamba aiuta contro le distorsioni alla caviglia?',
      cites: [CITE.bellows],
      a: 'Una meta-analisi del 2018 su 8\u00A0studi e 3.577\u00A0atleti ha trovato che l’allenamento dell’equilibrio riduceva del 46% il rischio di distorsione alla caviglia rispetto a nessun intervento (Bellows e Wong, 2018). La maggior parte dei programmi studiati includeva esercizi di equilibrio come la stazione su una gamba insieme ad altri allenamenti.',
    },
    {
      q: 'Perché stare su una gamba a occhi chiusi è più difficile?',
      cites: [CITE.springer],
      a: 'Per l’equilibrio il cervello usa insieme la vista, i segnali dell’orecchio interno e la propriocezione (i sensori nel piede e nella caviglia). Chiudere gli occhi toglie una delle tre fonti, e le altre due devono reggere più carico. Nei dati di Springer 2007, i tempi a occhi chiusi erano una frazione di quelli a occhi aperti a tutte le età.',
    },
    {
      q: 'Ogni quanto allenare l’equilibrio su una gamba?',
      a: 'Allenarlo ogni giorno va bene, perché il carico è basso. Walkito lo mette in quasi tutti i giorni di sessione. Anche pochi minuti di pratica al giorno possono migliorare i tempi nel giro di settimane. Conta la costanza, non la durata.',
    },
  ],
  redFlags: {
    h2: 'Rivolgiti prima a un professionista sanitario se',
    bullets: [
      'perdi spesso l’equilibrio o cadi senza che il terreno o le scarpe lo spieghino',
      'una caviglia cede più volte, soprattutto dopo una distorsione precedente',
      'hai intorpidimento, formicolio o perdita di sensibilità nel piede o nella gamba',
      'hai capogiri o una sensazione di giramento quando cambi posizione',
      'hai un cambiamento improvviso dell’equilibrio che non riesci a spiegarti',
    ],
  },
  program: {
    h2: 'Farlo come un piano',
    text: 'Walkito include l’equilibrio su una gamba e l’equilibrio a occhi chiusi in un piano insieme a sollevamenti sulle punte, allungamenti ed esercizi per il piede. L’obiettivo di equilibrio è di 30\u00A0secondi su ogni gamba. Ogni 14\u00A0giorni, un breve test controlla quanto riesci a tenere, e viene seguita anche la differenza tra i due lati.',
    more: [
      'Scegli 3, 5 o 7\u00A0giorni a settimana e sessioni da 3, 5 o 10\u00A0minuti. Quando raggiungi l’obiettivo di equilibrio, il test passa a ogni 28\u00A0giorni e al suo posto arriva un nuovo obiettivo. Walkito è un programma di esercizi. Non fa diagnosi.',
    ],
    cta: 'Inizia con 3\u00A0minuti al giorno.',
  },
  crumb: 'Equilibrio su una gamba',
  campaign: 'ex-single-leg-balance-it',
};
