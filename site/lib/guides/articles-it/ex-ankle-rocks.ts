import { CITE } from '@/lib/citations';
import type { Guide } from '../types';

/*
 * Italian version of `articles/ex-ankle-rocks.ts`, written around the
 * queries «esercizi mobilità caviglia» and «ginocchio oltre la punta del
 * piede». Informal «tu». Figures, doses, grades and qualifiers are
 * identical to the English page. No new citations.
 */

export const EX_ANKLE_ROCKS_IT: Guide = {
  lang: 'it',
  page: 'exAnkleRocks',
  published: '2026-10-08',
  updated: '2026-10-08',
  title: 'Mobilità della caviglia: ginocchio oltre le dita',
  description:
    'Come fare le oscillazioni della caviglia, l’esercizio con il ginocchio oltre le dita per la mobilità: tecnica, serie, perché conta e come misurarla.',
  h1: 'Oscillazioni della caviglia: come farle e perché la mobilità conta',
  lede:
    'Le oscillazioni della caviglia sono un esercizio in piedi in cui il ginocchio va in avanti oltre le dita mentre il tallone resta appoggiato a terra. Allenano la dorsiflessione della caviglia, cioè quanto si piega la caviglia quando il piede è a terra. In uno studio caso-controllo su 50\u00A0persone con fascite plantare e 100\u00A0controlli, una dorsiflessione ridotta era il fattore di rischio più forte in assoluto, con un odds ratio di 23,3.',
  takeaways: [
    'Una dorsiflessione della caviglia ridotta era il fattore di rischio indipendente più forte per la fascite plantare in uno studio caso-controllo appaiato, con un odds ratio di 23,3 (Riddle e colleghi, 2003).',
    'Le oscillazioni della caviglia allenano la dorsiflessione caricando la fine del movimento con il peso del corpo, a differenza di un allungamento passivo al muro.',
    'Il test ginocchio-muro misura quanto il ginocchio va oltre le dita con il tallone giù. Walkito include un esercizio ginocchio-muro (2\u00A0tenute da 30\u00A0secondi, ogni gamba).',
    'Walkito parte con le oscillazioni della caviglia da 2\u00A0serie da 15, ogni gamba.',
  ],
  toc: false,
  sections: [
    {
      h2: 'Come si fanno le oscillazioni della caviglia?',
      paragraphs: [
        'Mettiti a gambe divaricate, un piede avanti e uno indietro, con le mani su un muro o sullo stipite di una porta per l’equilibrio. Tenendo il tallone davanti appoggiato a terra, porta piano il ginocchio davanti in avanti oltre le dita. Lascia andare il ginocchio il più avanti possibile mentre il tallone resta giù. Poi torna indietro alla posizione di partenza. Questa è una ripetizione.',
        'Il movimento è lento e controllato. Non devi molleggiare. Ogni oscillazione dura circa due secondi in avanti e due secondi indietro. La gamba dietro serve solo per l’equilibrio. Tutto il lavoro della caviglia avviene nella gamba davanti.',
        'Tieni il piede davanti puntato dritto in avanti. Se il piede ruota verso l’esterno, la caviglia trova una scorciatoia e perdi proprio il movimento che vuoi allenare.',
      ],
      exercises: [
        {
          name: 'Oscillazioni della caviglia',
          evidence: {
            level: 'moderate',
            why: 'Lavora sulla dorsiflessione della caviglia, il fattore di rischio indipendente più forte per la fascite plantare in uno studio caso-controllo del 2003. Non testato come esercizio a sé in uno studio sulla fascite plantare.',
          },
          dose: 'Walkito parte da 2\u00A0serie da 15, ogni gamba',
          how: 'Gambe divaricate, mani al muro. Porta il ginocchio davanti in avanti oltre le dita, il tallone resta appoggiato. Lento, circa due secondi per direzione. Cambia gamba dopo ogni serie.',
          often: 'Sessioni di mobilità',
          feel: 'Un allungamento sul davanti della caviglia e una tensione nella parte bassa del polpaccio',
          stop: 'Il dolore arriva a 6/10',
          media: 'ankle_rocks',
          caption: 'Oscillazioni della caviglia: il ginocchio va avanti oltre le dita, il tallone resta appoggiato',
          alt: 'Una figura a gambe divaricate che porta il ginocchio davanti in avanti oltre le dita, la caviglia evidenziata',
        },
      ],
      cites: [CITE.riddle],
    },
    {
      h2: 'Perché la mobilità della caviglia conta per il dolore al tallone?',
      keyFact: 'In uno studio caso-controllo su 50\u00A0persone con fascite plantare e 100\u00A0controlli, una dorsiflessione della caviglia limitata era un fattore di rischio più forte dell’IMC o del tempo passato in piedi, con un odds ratio di 23,3 (Riddle e colleghi, 2003).',
      paragraphs: [
        'La dorsiflessione della caviglia è quanto il piede riesce a piegarsi verso l’alto, verso lo stinco, mentre il tallone resta a terra. Ogni passo che fai richiede un po’ di dorsiflessione. Quando la caviglia non si piega abbastanza, il corpo compensa. Il piede può ruotare verso l’interno, il polpaccio prende più tensione e la fascia plantare assorbe forze per cui non è fatta.',
        'Nello studio caso-controllo di Riddle del 2003, la dorsiflessione della caviglia ridotta era la variabile con l’effetto indipendente più grande, con un odds ratio di 23,3 per lo sviluppo della fascite plantare. Era più forte dell’IMC, del tempo passato in piedi o della distanza di corsa. In un’analisi separata, un polpaccio rigido, in particolare il gastrocnemio, era presente nel 52-60% di 254\u00A0persone con fascite plantare.',
        'Allungare il polpaccio in modo passivo (come nell’[allungamento del polpaccio](/it/esercizi/stretching-polpaccio/) e nell’[allungamento del soleo](/it/esercizi/allungamento-soleo/)) affronta un lato del problema: la lunghezza del muscolo. Le oscillazioni della caviglia affrontano l’altro lato: il controllo attivo a fine movimento. Portare il ginocchio oltre le dita con il peso del corpo insegna alla caviglia a usare il movimento che ha, non solo a raggiungerlo in modo passivo.',
      ],
      cites: [CITE.riddle, CITE.patelGastrocnemius],
    },
    {
      h2: 'Oscillazioni della caviglia o allungamento del polpaccio: che differenza c’è?',
      paragraphs: [
        'L’[allungamento del polpaccio](/it/esercizi/stretching-polpaccio/) è una tenuta passiva. Ti appoggi al muro e aspetti che il muscolo si allunghi. La gamba dietro è tesa, così lavori sul gastrocnemio. L’[allungamento del soleo](/it/esercizi/allungamento-soleo/) fa lo stesso con il ginocchio piegato.',
        'Le oscillazioni della caviglia sono un movimento attivo e ripetuto. Spingi il ginocchio in avanti, torni indietro, spingi di nuovo. Carichi la caviglia lungo tutto il movimento invece di stare fermo a fine corsa. Le oscillazioni allenano la capacità di usare la dorsiflessione sotto carico, che è proprio quello che servono camminare e correre.',
        'Sono utili tutti e due. L’allungamento apre il movimento. Le oscillazioni ti allenano a usarlo. La linea guida dà all’allungamento del polpaccio una A. Le oscillazioni della caviglia fanno parte del lavoro di mobilità che Walkito mette insieme a quegli allungamenti.',
      ],
      cites: [CITE.guideline],
    },
    {
      h2: 'Il test ginocchio-muro e il legame con l’esercizio',
      paragraphs: [
        'Il test ginocchio-muro, chiamato anche weight-bearing lunge test, è un modo semplice per misurare la dorsiflessione della caviglia. Ti metti di fronte a un muro, con un piede qualche centimetro indietro, e porti il ginocchio in avanti in affondo finché tocca il muro. Se il tallone si alza prima che il ginocchio arrivi al muro, avvicina il piede. Il tuo punteggio è la distanza tra l’alluce e il muro nel punto in cui il ginocchio tocca appena, con il tallone ancora appoggiato.',
        'Walkito include nell’app un esercizio ginocchio-muro (2\u00A0tenute da 30\u00A0secondi, ogni gamba). Seguire questa distanza nel corso delle settimane ti dice se il movimento della caviglia sta davvero migliorando. Un aumento di un centimetro o due in qualche settimana è significativo.',
        'Le oscillazioni della caviglia e l’esercizio ginocchio-muro lavorano sullo stesso movimento da angoli diversi. Le oscillazioni sono ripetizioni lungo il movimento. La tenuta ginocchio-muro è un carico prolungato a fine movimento. Aiutano entrambi. Walkito li mette nei giorni di mobilità.',
      ],
    },
    {
      h2: 'Quali sono gli errori più comuni nelle oscillazioni della caviglia?',
      paragraphs: [
        'Lasciare che il tallone si alzi. Il tallone deve restare appoggiato in ogni ripetizione. Se si alza, hai superato la fine del tuo movimento e l’esercizio perde senso. Oscilla solo fin dove il tallone te lo permette.',
        'Ruotare il piede verso l’esterno. Il piede deve puntare dritto in avanti. La rotazione esterna permette alla caviglia di aggirare il punto rigido. Tieni il secondo dito puntato verso il muro.',
        'Andare troppo veloce. Molleggiare o fare le ripetizioni di fretta non allena un movimento controllato. Due secondi in avanti, due secondi indietro. Lascia che la caviglia senta la fine del suo movimento a ogni ripetizione.',
        'Saltare la gamba dietro. Alcune persone provano a fare le oscillazioni su entrambe le gambe insieme, semplicemente accovacciandosi. Così il carico si divide e il movimento che la caviglia davanti deve fare si riduce. Usa le gambe divaricate così lavora una caviglia alla volta.',
      ],
    },
    {
      h2: 'Versioni più facili e più difficili',
      paragraphs: [
        'Se le oscillazioni in piedi sono troppo impegnative, prova da seduto. Siediti con il piede appoggiato a terra e fai scivolare il ginocchio in avanti oltre le dita. È lo stesso movimento con meno carico. Funziona bene dopo una riacutizzazione, quando gli esercizi in piedi sono troppo.',
        'Una versione più difficile è l’oscillazione con peso. Tieni un kettlebell o un libro pesante contro il petto mentre oscilli in avanti. Il peso in più spinge il ginocchio più avanti in dorsiflessione. Aggiungi peso solo quando le oscillazioni a corpo libero ti sembrano facili per due sessioni di fila.',
        'Per altro lavoro su caviglia e gamba, vedi i [sollevamenti dell’avampiede](/it/esercizi/sollevamenti-avampiede-muro/) (forza dello stinco) e l’[equilibrio su una gamba](/it/esercizi/equilibrio-su-una-gamba/) (stabilità della caviglia). Il programma completo è in [esercizi per la fascite plantare](/it/esercizi-fascite-plantare/).',
      ],
    },
  ],
  faq: [
    {
      q: 'Quante oscillazioni della caviglia bisogna fare?',
      a: 'Walkito parte da 2\u00A0serie da 15 per gamba. Sono 30\u00A0ripetizioni per gamba a sessione. Non esiste un protocollo pubblicato per le oscillazioni della caviglia nella fascite plantare in particolare, quindi questa dose viene dall’app. Aumenta le serie o aggiungi peso quando la dose attuale ti sembra facile per due sessioni.',
    },
    {
      q: 'Le oscillazioni della caviglia aiutano la fascite plantare?',
      cites: [CITE.riddle],
      a: 'Le oscillazioni della caviglia lavorano sulla dorsiflessione, che era il fattore di rischio indipendente più forte per la fascite plantare in uno studio caso-controllo (odds ratio 23,3). Nessuno studio ha testato le oscillazioni come esercizio a sé per la fascite plantare, ma migliorare il movimento su cui lavorano significa affrontare il singolo fattore di rischio biomeccanico più grande che la ricerca ha individuato.',
    },
    {
      q: 'Cos’è il test ginocchio-muro?',
      a: 'Una misura semplice della dorsiflessione della caviglia. Mettiti di fronte a un muro e porta il ginocchio in avanti finché lo tocca, con il tallone appoggiato. La distanza tra l’alluce e il muro è il tuo punteggio. Walkito lo include come esercizio (2\u00A0tenute da 30\u00A0secondi per gamba) per allenare il controllo a fine movimento.',
    },
    {
      q: 'Oscillazioni della caviglia e «knee over toes» sono la stessa cosa?',
      a: 'Sì. «Oscillazioni della caviglia», «knee over toes» e «oscillazioni in dorsiflessione» sono tutti nomi dello stesso movimento. Il ginocchio va in avanti oltre le dita mentre il tallone resta appoggiato. L’esercizio allena il movimento della caviglia che serve per camminare, accovacciarsi e correre.',
    },
    {
      q: 'Il ginocchio può andare oltre la punta del piede?',
      a: 'Sì. È proprio il senso dell’esercizio. L’idea che il ginocchio non debba mai superare le dita è un mito che non vale per il cammino normale né per il lavoro di mobilità della caviglia. A ogni passo il ginocchio va oltre le dita. Le oscillazioni della caviglia allenano quel movimento in modo controllato. Tieni il tallone appoggiato e fermati dove il movimento finisce in modo naturale.',
    },
  ],
  redFlags: {
    h2: 'Fermati e rivolgiti a un professionista sanitario se',
    bullets: [
      'senti un pizzicotto acuto sul davanti della caviglia che non passa tra una ripetizione e l’altra',
      'la caviglia si blocca o si incastra durante il movimento',
      'dopo le oscillazioni compare gonfiore sul davanti o ai lati della caviglia',
      'il dolore sale lungo lo stinco o scende nel piede',
      'la caviglia ha ceduto o si è fatta male di recente',
      'non è migliorata dopo diverse settimane di lavoro di mobilità costante',
    ],
  },
  program: {
    h2: 'Farlo come un piano',
    text: 'Walkito mette le oscillazioni della caviglia nei giorni di mobilità, insieme all’allungamento del polpaccio e del soleo. Scegli 3, 5 o 7\u00A0giorni a settimana e sessioni da 3, 5 o 10\u00A0minuti.',
    more: [
      'Un centimetro di miglioramento nel test ginocchio-muro in qualche settimana è significativo. Walkito è un programma di esercizi. Non fa diagnosi e non sostituisce un professionista sanitario.',
    ],
    cta: 'Inizia con 3\u00A0minuti al giorno.',
  },
  crumb: 'Oscillazioni della caviglia',
  campaign: 'ex-ankle-rocks-it',
};
