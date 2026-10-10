import { CITE } from '@/lib/citations';
import type { Guide } from '../types';

/*
 * Italian version of `articles/ex-towel-heel-raise.ts`, written around the
 * queries «sollevamento tallone con asciugamano» and «protocollo Rathleff
 * fascite plantare». Informal «tu». Figures, doses, grades and qualifiers are
 * identical to the English page. Uses only existing CITE keys.
 */

export const EX_TOWEL_HEEL_RAISE_IT: Guide = {
  lang: 'it',
  page: 'exTowelHeelRaise',
  mainSource: CITE.rathleff,
  published: '2026-10-08',
  updated: '2026-10-08',
  title: 'Sollevamento sulle punte con asciugamano: metodo Rathleff',
  description:
    'Il sollevamento sulle punte con asciugamano del protocollo Rathleff per la fascite plantare: serie, ritmo, errori comuni, versioni più facili e difficili.',
  h1: 'Sollevamento sulle punte con asciugamano: il protocollo Rathleff ad alto carico, passo per passo',
  lede:
    'Il sollevamento sulle punte con asciugamano è un sollevamento del polpaccio su una gamba sola, su un gradino, con un asciugamano arrotolato sotto le dita. Viene da uno studio del 2015 su 48\u00A0persone con fascite plantare, in cui questo esercizio ha ridotto il dolore al tallone più in fretta del solo stretching nell’arco di tre mesi. È l’asciugamano a renderlo diverso da un normale sollevamento sulle punte: coinvolge la fascia plantare attraverso il meccanismo a verricello.',
  takeaways: [
    'In uno studio su 48\u00A0persone, i sollevamenti sulle punte con asciugamano e con carico hanno ottenuto un punteggio migliore di 29\u00A0punti nel Foot Function Index rispetto al solo stretching a tre mesi, anche se a dodici mesi i due gruppi erano pari (Rathleff e colleghi, 2015).',
    'La linea guida del 2023 sul dolore al tallone dà al lavoro di forza una B, un gradino sotto lo stretching con la A, e consiglia entrambi (Koc e colleghi, 2023).',
    'L’asciugamano sotto le dita le piega verso l’alto, attivando il meccanismo a verricello, così la fascia plantare si divide il carico con il polpaccio.',
    'Walkito parte da 3\u00A0serie da 12, ogni gamba, con un ritmo di 3\u00A0secondi su, 2\u00A0secondi in alto, 3\u00A0secondi giù.',
  ],
  toc: false,
  sections: [
    {
      h2: 'Cosa lavora il sollevamento sulle punte con asciugamano?',
      paragraphs: [
        'Il sollevamento sulle punte con asciugamano lavora su:',
        {
          list: [
            'Gastrocnemio e soleo (i due muscoli del polpaccio).',
            'Tendine d’Achille.',
            'Fascia plantare.',
          ],
        },
        'L’asciugamano arrotolato piega le dita verso l’alto quando sei in cima, e questo tira la fascia plantare attraverso il meccanismo a verricello. Senza asciugamano, l’esercizio allena soprattutto il polpaccio. Con l’asciugamano, **la fascia prende una parte del carico.**',
        'Per questo lo studio di Rathleff ha usato proprio l’asciugamano per la fascite plantare invece di un semplice sollevamento sulle punte. Lo scopo è caricare insieme la catena polpaccio-Achille-fascia. Se il dolore è nel tendine d’Achille e non sotto il piede, una [discesa eccentrica del tallone](/it/esercizi/discese-eccentriche-tallone/) senza asciugamano è un punto di partenza migliore.',
      ],
      cites: [CITE.rathleff],
    },
    {
      h2: 'Come si fa il sollevamento sulle punte con asciugamano?',
      paragraphs: [
        'Arrotola un piccolo asciugamano fino a farne un cilindro largo più o meno come il tuo pugno. Mettilo sul bordo di un gradino. Stai su un piede con tutte e cinque le dita sull’asciugamano e l’avampiede sul gradino. Tieniti a un muro o a un corrimano per l’equilibrio.',
        'Sali in tre secondi, spingendo sull’alluce. Tieni due secondi in alto. Scendi in tre secondi, lasciando il tallone un po’ sotto il livello del gradino. **Quel ritmo lento fa parte del protocollo.** Le ripetizioni veloci riducono il carico sul tendine e sulla fascia.',
        'Nello studio di Rathleff, i partecipanti aggiungevano peso con uno zaino quando il solo peso del corpo non bastava più a rendere dura l’ultima ripetizione. «12RM» vuol dire il carico più pesante con cui riesci a fare esattamente 12\u00A0ripetizioni controllate.',
      ],
      exercises: [
        {
          name: 'Sollevamento sulle punte con asciugamano',
          evidence: {
            level: 'strong',
            why: 'L’esercizio dell’unico studio randomizzato sui sollevamenti sulle punte per la fascite plantare (Rathleff 2015). Grado B nella linea guida.',
          },
          dose: 'Walkito parte da 3 x 12, ogni gamba. Protocollo dello studio: 3 x 12RM, fino a 5 x 8RM',
          how: 'Stai su un piede su un gradino, con un asciugamano arrotolato sotto le dita. Tre secondi su, due secondi in alto, tre secondi giù. Aggiungi peso quando l’ultima ripetizione non è più dura.',
          often: 'A giorni alterni nello studio. Walkito lo mette nei giorni di forza.',
          feel: 'Lavoro intenso nel polpaccio e una tensione sotto l’arco',
          stop: 'Il dolore arriva a 6/10 o più',
          media: 'heel_raise_towel',
          caption: 'Sollevamento sulle punte con asciugamano: tre secondi su, tieni, tre secondi giù',
          alt: 'Una figura su un gradino che sale sulle punte con un asciugamano arrotolato sotto il piede, con il polpaccio e l’arco evidenziati',
        },
      ],
      cites: [CITE.rathleff, CITE.guideline],
    },
    {
      h2: 'Serie, ripetizioni e la progressione di Rathleff',
      paragraphs: [
        'Lo studio ha aumentato il carico nel giro di circa tre mesi. Il ritmo è rimasto lo stesso dall’inizio alla fine: tre secondi su, due secondi in alto, tre secondi giù.',
      ],
      table: {
        caption: 'La progressione del sollevamento sulle punte con asciugamano di Rathleff 2015',
        head: ['Settimane', 'Serie x ripetizioni', 'Ritmo', 'Frequenza'],
        rows: [
          ['1-2', '3 x 12RM', '3\u00A0s su / 2\u00A0s in alto / 3\u00A0s giù', 'A giorni alterni'],
          ['3-4', '4 x 10RM', '3\u00A0s su / 2\u00A0s in alto / 3\u00A0s giù', 'A giorni alterni'],
          ['Dalla 5 in poi', '5 x 8RM', '3\u00A0s su / 2\u00A0s in alto / 3\u00A0s giù', 'A giorni alterni'],
        ],
      },
      cites: [CITE.rathleff],
    },
    {
      h2: 'Quali sono gli errori più comuni nel sollevamento sulle punte con asciugamano?',
      paragraphs: [
        '**Andare troppo veloce è l’errore più comune.** Una discesa di tre secondi tiene il polpaccio sotto tensione abbastanza a lungo da costruire forza. Rimbalzare su e giù lo trasforma in un esercizio cardio, non di forza.',
        'Se l’asciugamano scivola e ci restano sopra solo una o due dita, il carico sulla fascia si riduce. Tutte e cinque le dita devono stare sull’asciugamano. Se continua a scivolare, piegalo più spesso o usa un asciugamano da mani invece di un telo da bagno.',
        'Partire su una gamba quando i sollevamenti su due piedi sono ancora duri porta a una tecnica scadente e a compensazioni. Se per ora un sollevamento su una gamba sul gradino è troppo, inizia con i [sollevamenti sulle punte su due piedi](/it/esercizi/sollevamenti-sulle-punte/) a terra e costruisci da lì.',
      ],
    },
    {
      h2: 'Versioni più facili e più difficili',
      paragraphs: [
        'Se il sollevamento sulle punte con asciugamano completo sul gradino è troppo difficile, torna indietro lungo la catena del polpaccio:',
        {
          list: [
            'I [sollevamenti sulle punte da seduto](/it/esercizi/sollevamenti-sulle-punte/) sono il carico più basso.',
            'Poi vengono i sollevamenti in piedi su due piedi.',
            'Poi la tenuta sulle punte in alto.',
            'Poi il sollevamento con asciugamano su una gamba sul gradino.',
          ],
        },
        'Ogni gradino deve sembrarti gestibile per due sessioni prima di salire.',
        'Se il peso del corpo su una gamba è troppo facile, aggiungi carico. Lo studio di Rathleff usava uno zaino con libri o bottiglie d’acqua. In palestra puoi usare una macchina per i polpacci o un giubbotto zavorrato. Lo scopo è che l’ultima ripetizione di ogni serie sia davvero l’ultima che riesci a fare con una buona tecnica.',
      ],
    },
    {
      h2: 'Cosa dicono gli studi sul sollevamento sulle punte con asciugamano?',
      keyFact: 'In uno studio su 48\u00A0persone con fascite plantare confermata, i sollevamenti sulle punte con asciugamano avevano punteggi migliori nel Foot Function Index a tre mesi, ma a dodici mesi i risultati erano simili al solo stretching (Rathleff e colleghi, 2015).',
      paragraphs: [
        'Lo studio di Rathleff del 2015 è l’unico studio randomizzato che ha testato il sollevamento sulle punte con asciugamano proprio per la fascite plantare. In 48\u00A0persone con fascite plantare confermata da ecografia, il gruppo dei sollevamenti aveva 29\u00A0punti in meno (cioè meglio) nel Foot Function Index a tre mesi rispetto al gruppo del solo stretching. A dodici mesi, i due gruppi erano pari.',
        'La linea guida del 2023 sul dolore al tallone ha esaminato questo e altri studi e ha dato al lavoro di forza una **B** e allo stretching una **A**. Sono consigliati entrambi. La linea guida non indica in modo specifico la versione con asciugamano, ma è l’unico esercizio di forza testato in un suo studio sulla fascite plantare.',
        'Niente nelle prove dice che questo esercizio debba sostituire lo stretching. **L’approccio più solido è fare entrambe le cose:** un [allungamento della fascia plantare](/it/esercizi/stretching-fascia-plantare/) per la rigidità del mattino e il sollevamento con carico per costruire capacità. Per l’elenco completo degli esercizi e come si incastrano, vedi [esercizi per la fascite plantare](/it/esercizi-fascite-plantare/).',
      ],
      sourceNote:
        'Rathleff 2015: differenza nel FFI di 29\u00A0punti a 3\u00A0mesi (IC al 95%: 6-52, p = 0,016). A 12\u00A0mesi: 22 contro 16, nessuna differenza significativa.',
      cites: [CITE.rathleff, CITE.guideline],
    },
    {
      h2: 'Per chi è il sollevamento sulle punte con asciugamano?',
      paragraphs: [
        'Per chiunque abbia la fascite plantare e abbia abbastanza forza nel polpaccio per fare un sollevamento su una gamba su un gradino. Lo studio ha incluso adulti con dolore da almeno tre mesi che riuscivano a tollerare il carico.',
        'Se il dolore è recente e non riesci a stare comodamente su una gamba, parti più in basso nella scala: prima i sollevamenti da seduto o su due piedi. Se il dolore è nel tendine d’Achille e non nella fascia plantare, l’approccio con il carico è simile, ma l’asciugamano non si usa e il protocollo è diverso. Vedi [discese eccentriche del tallone](/it/esercizi/discese-eccentriche-tallone/) o [esercizi per la tendinite d’Achille](/it/tendinite-achille-esercizi/) per quella strada.',
      ],
      cites: [CITE.rathleff],
    },
  ],
  faq: [
    {
      q: 'A cosa serve l’asciugamano nel sollevamento sulle punte?',
      cites: [CITE.rathleff],
      a: 'L’asciugamano arrotolato va sotto tutte e cinque le dita, così si piegano verso l’alto quando sei in cima. Questo attiva il meccanismo a verricello, un collegamento tra l’alluce e la fascia plantare. Senza asciugamano, l’esercizio carica soprattutto il polpaccio. Con l’asciugamano, la fascia si divide il carico, ed è per questo che lo studio di Rathleff lo ha usato per la fascite plantare.',
    },
    {
      q: 'Quanti sollevamenti sulle punte con asciugamano devo fare?',
      cites: [CITE.rathleff],
      a: 'Lo studio di Rathleff partiva da 3\u00A0serie da 12\u00A0ripetizioni (con il carico più pesante gestibile per 12\u00A0ripetizioni), fino a 5\u00A0serie da 8\u00A0ripetizioni più pesanti verso la quinta settimana, a giorni alterni. Walkito parte da 3\u00A0serie da 12 per gamba e sale quando due sessioni a quel livello ti sono sembrate facili.',
    },
    {
      q: 'Posso fare il sollevamento sulle punte con asciugamano a terra invece che su un gradino?',
      a: 'Sì, ma perdi il movimento in più in basso, quando il tallone scende sotto il gradino. La versione a terra carica comunque polpaccio e fascia. È un punto di partenza ragionevole se il gradino ti sembra instabile o troppo intenso, e puoi passare al gradino più avanti.',
    },
    {
      q: 'Il sollevamento sulle punte con asciugamano deve fare male?',
      cites: [CITE.guideline],
      a: 'Il lavoro intenso nel polpaccio e una tensione sotto l’arco sono normali. Fermati per oggi se il dolore arriva a 6 su 10 o più, o se la mattina dopo è chiaramente peggiore del solito. Un leggero indolenzimento che passa entro un giorno è normale, soprattutto nelle prime due settimane.',
    },
    {
      q: 'Il sollevamento sulle punte con asciugamano è uguale alla discesa eccentrica del tallone?',
      cites: [CITE.rathleff, CITE.alfredson],
      a: 'No. Il sollevamento sulle punte con asciugamano include sia la salita sia la discesa e usa un asciugamano sotto le dita per caricare la fascia plantare. La discesa eccentrica del tallone si concentra solo sulla fase di discesa, senza asciugamano, ed è stata pensata per la tendinopatia d’Achille. Lavorano su problemi diversi con protocolli diversi.',
    },
  ],
  redFlags: {
    h2: 'Rivolgiti prima a un professionista sanitario se',
    bullets: [
      'il dolore è iniziato dopo uno schiocco improvviso o un infortunio invece di crescere piano piano',
      'non riesci a caricare il peso sul piede o zoppichi',
      'il tallone è arrossato, caldo o gonfio, o hai la febbre',
      'il dolore ti sveglia di notte o c’è anche quando non sei in piedi',
      'non è migliorato dopo diverse settimane di carico costante',
    ],
  },
  program: {
    h2: 'Farlo come un piano',
    text: 'Il sollevamento sulle punte con asciugamano è un gradino di una catena per il polpaccio che Walkito inserisce in un piano settimanale. La catena va dai sollevamenti sulle punte da seduto ai sollevamenti su due piedi, alla tenuta, al sollevamento con asciugamano, alle discese eccentriche del tallone, fino ai saltelli sulle punte. Ogni gradino si apre quando due sessioni al livello attuale ti sono sembrate facili.',
    more: [
      'Scegli 3, 5 o 7\u00A0giorni a settimana e sessioni da 3, 5 o 10\u00A0minuti. Ogni 14\u00A0giorni, un breve test controlla resistenza del polpaccio ed equilibrio. Walkito è un programma di esercizi, non uno strumento di diagnosi.',
    ],
    cta: 'Inizia con 3\u00A0minuti al giorno.',
  },
  crumb: 'Sollevamento sulle punte con asciugamano',
  campaign: 'ex-towel-heel-raise-it',
};
