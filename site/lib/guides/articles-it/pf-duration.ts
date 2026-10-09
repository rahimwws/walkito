import { CITE } from '@/lib/citations';
import type { Guide } from '../types';

/*
 * ── Quanto dura la fascite plantare (IT) ──────────────────────────────
 *
 * Translated from `articles/pf-duration.ts` (2026-10-08), written around the
 * Italian queries «quanto dura la fascite plantare», «fascite plantare
 * cronica», «fascite plantare non passa». Informal «tu». Figures, grades,
 * intervals and qualifiers are identical to the English page; terminology
 * follows `lib/guides/it.ts`. No new citations.
 *
 * Pages that exist only in English keep their English path, marked
 * «(in inglese)».
 */

export const PF_DURATION_IT: Guide = {
  lang: 'it',
  page: 'pfDuration',
  mainSource: CITE.hansen,
  published: '2026-10-08',
  updated: '2026-10-08',
  title: 'Quanto dura la fascite plantare? Cosa dicono gli studi',
  description:
    'Quanto dura la fascite plantare, cosa rallenta il recupero, cosa fare se non migliora e come capire se la tua sta migliorando.',
  h1: 'Quanto dura la fascite plantare? Cosa dicono davvero gli studi',
  lede:
    'La risposta onesta è: dipende, e la maggior parte delle fonti sottovaluta quanto cambia da persona a persona. Una revisione del 2020 riporta che circa il 90% delle persone migliora con cure non chirurgiche come stretching e plantari. Un follow-up più lungo su 174\u00A0persone racconta una storia più sfumata: circa la metà non aveva più sintomi a cinque anni, e il 46% aveva ancora un po’ di dolore dopo in media dieci anni, anche se la maggior parte di loro riferiva solo sintomi lievi.',
  intro: [
    'La pagina degli [esercizi per la fascite plantare](/it/esercizi-fascite-plantare/) spiega gli esercizi, le prove e i gradi della linea guida. Questa pagina risponde alla domanda che viene dopo: quanto ci vuole, cosa allunga i tempi, e quali sono le opzioni se le cose non migliorano?',
  ],
  takeaways: [
    'Una revisione del 2020 riporta che circa il 90% dei casi di fascite plantare risponde a cure non chirurgiche, spesso nel giro di alcuni mesi (Latt e colleghi, 2020).',
    'Una coorte a lungo termine di 174\u00A0pazienti ha trovato che il rischio di avere ancora la fascite plantare era dell’80,5% a un anno, del 50,0% a cinque anni e del 45,6% a dieci anni dall’inizio dei sintomi (Hansen e colleghi, 2018).',
    'In quella coorte, i predittori significativi di un recupero più lento erano essere donna e avere dolore a entrambi i talloni. Indice di massa corporea, età, spessore della fascia e spina calcaneare non avevano un effetto significativo sulla prognosi (Hansen e colleghi, 2018).',
    'La linea guida del 2023 sul dolore al tallone dà allo stretching un grado **A** e al lavoro di forza una **B**. I tutori notturni per il dolore del mattino che non passa ricevono una **A**, e la laserterapia a bassa intensità o il dry needling da un professionista una **B** (Koc e colleghi, 2023).',
    'Il dolore del mattino su una scala da 0 a 10, segnato ogni giorno, è il modo più pratico per vedere se il recupero va nella direzione giusta.',
  ],
  toc: true,
  sections: [
    {
      h2: 'Quanto dura di solito la fascite plantare?',
      keyFact: 'In una coorte di 174\u00A0persone, il rischio di avere ancora sintomi di fascite plantare era dell’80,5% a un anno, e scendeva al 45,6% a dieci anni (Hansen e colleghi, 2018).',
      paragraphs: [
        'Non c’è un numero unico. I tempi dipendono da quanto tempo ce l’hai, da cosa fai per affrontarla e da alcuni fattori che non puoi controllare.',
        'Una revisione della letteratura del 2020 riporta che circa il 90% delle persone con fascite plantare migliora con cure non chirurgiche, di solito nel giro di tre-sei mesi (Latt e colleghi, 2020).',
        'Uno studio di coorte del 2018 dà la visione più lunga. Hansen e colleghi hanno seguito 174\u00A0pazienti con fascite plantare diagnosticata con ecografia per in media 9,7\u00A0anni dall’inizio dei sintomi. Al follow-up, il 54% non aveva più sintomi e il 46% aveva ancora un po’ di dolore.',
        'L’analisi di Kaplan-Meier ha mostrato che il rischio di avere ancora la fascite plantare era dell’80,5% a un anno, del 50,0% a cinque anni e del 45,6% a dieci anni. Tra chi non aveva più sintomi, la durata media dei sintomi era di 725\u00A0giorni, circa due anni (Hansen e colleghi, 2018).',
        'Questi numeri sembrano peggiori del solito «passa in qualche mese». Due cose spiegano la differenza. Primo, la coorte di Hansen era una popolazione inviata da altri medici: il 93% aveva ricevuto un’infiltrazione di cortisone, il che fa pensare a casi più difficili da gestire, non a persone il cui dolore si era calmato con lo stretching e scarpe migliori.',
        'Secondo, al follow-up i pazienti con sintomi riferivano in media solo un dolore lieve, con punteggi di circa 2-3 su 10 camminando. Quindi «ancora con sintomi a dieci anni» non vuol dire per forza «incapace di camminare». Per molti voleva dire un fastidio occasionale invece della fitta ai primi passi con cui avevano iniziato.',
      ],
      sourceNote:
        'Hansen 2018: rischio di fascite plantare secondo Kaplan-Meier: 80,5% (IC al 95%: 73,5-85,6) a 1\u00A0anno, 50,0% (42,4-57,1) a 5\u00A0anni, 45,6% (37,9-53,0) a 10\u00A0anni, 44,0% (35,9-51,8) a 15\u00A0anni. Durata media dei sintomi nel gruppo senza sintomi: 725\u00A0giorni (intervallo 41-4018). NRS nel gruppo con sintomi al follow-up: 0,7 a riposo, 1,8 camminando, 2,8 correndo, 2,1 alla pressione.',
      cites: [CITE.latt, CITE.hansen],
    },
    {
      h2: 'La fascite plantare passa da sola?',
      paragraphs: [
        'A volte. Alcune persone si svegliano una mattina e il dolore non c’è più, senza aver fatto niente di particolare. Ma «passa da sola» non è una previsione utile per una singola persona, perché non c’è modo di sapere in anticipo se fai parte di quel gruppo.',
        'Quello che le prove dicono è che fare qualcosa, allungare, rinforzare il polpaccio, portare scarpe con un buon sostegno, tende ad anticipare il miglioramento. Nello studio di Rathleff, 48\u00A0persone con fascite plantare sono state divise in due gruppi: uno faceva sollevamenti sulle punte con carico e un asciugamano sotto le dita, l’altro allungava la fascia plantare.',
        'Il gruppo dei sollevamenti è migliorato più in fretta a tre mesi. A un anno, i due gruppi erano più o meno pari (Rathleff e colleghi, 2015). Quindi gli esercizi non hanno dato un miglioramento finale più grande, ma lo hanno anticipato. Non si sa se sarebbe successo altrettanto in fretta senza nessuno dei due interventi.',
        'La linea guida del 2023 raccomanda stretching (grado A) e lavoro di forza (grado B) come prime cose da provare, insieme ai consigli sulle calzature. La linea guida non dice «aspetta e vedi». Dice «inizia con questi e tieni sotto controllo» (Koc e colleghi, 2023). Se il dolore è nella parte posteriore del tallone e non sotto, vedi invece [esercizi per la tendinite d’Achille](/it/tendinite-achille-esercizi/).',
      ],
      cites: [CITE.rathleff, CITE.guideline],
    },
    {
      h2: 'Cosa predice un recupero più lento?',
      keyFact: 'In una coorte di 174\u00A0persone, le donne arrivavano a non avere più sintomi a circa la metà della velocità degli uomini, e chi aveva dolore a entrambi i talloni a circa un terzo della velocità di chi lo aveva da un lato solo (Hansen e colleghi, 2018).',
      paragraphs: [
        'La coorte di Hansen del 2018 ha messo alla prova diversi fattori di partenza rispetto a quanto duravano i sintomi. Due sono risultati significativi.',
        '**Essere donna.** Per ogni 100\u00A0uomini che ogni anno arrivavano a non avere più sintomi, ci arrivavano solo 49\u00A0donne (hazard rate ratio 0,49, P minore di 0,01). Il motivo non è noto. Gli autori hanno elencato differenze ormonali, abitudini nelle calzature e fattori fisici come possibilità, senza prove per scegliere tra queste (Hansen e colleghi, 2018).',
        '**Dolore a entrambi i talloni.** Chi all’inizio aveva dolore a entrambi i talloni arrivava a non avere più sintomi a circa un terzo della velocità annua di chi aveva dolore da un lato solo (hazard rate ratio 0,33, P minore di 0,01).',
        'Gli autori hanno notato che il dolore a entrambi i lati potrebbe riflettere un problema infiammatorio non riconosciuto, perché il dolore nei punti di attacco tra tendine e osso su entrambi i lati è una caratteristica di alcune forme di artrite. Nessuno nella loro coorte aveva una diagnosi infiammatoria nota, ma non sono stati fatti esami del sangue specifici (Hansen e colleghi, 2018).',
        'Indice di massa corporea, età, fumo, lavoro fisicamente pesante, spessore della fascia all’ecografia e presenza di una spina calcaneare non avevano un effetto significativo sulla prognosi in quello studio. L’ultimo risultato sorprende molti: la spina calcaneare non faceva durare le cose né di più né di meno (P = 0,88). Anche studi precedenti non avevano trovato una correlazione tra spina calcaneare e sintomi.',
        'Se ti fanno male entrambi i talloni e la rigidità del mattino dura a lungo o sono coinvolte altre articolazioni, vale la pena dirlo a un professionista sanitario anche se gli esercizi stanno aiutando. Vedi [dolore al tallone al mattino](/it/dolore-tallone-al-mattino/) per sapere quando il dolore a entrambi i talloni è un campanello d’allarme.',
      ],
      sourceNote:
        'Hansen 2018, regressione di Cox: sesso femminile HRR 0,49 (IC al 95%: 0,30-0,80, P < 0,01), dolore bilaterale HRR 0,33 (0,15-0,72, P < 0,01). Indice di massa corporea (>25 contro ≤25): HRR 0,65 (0,40-1,06, P = 0,09). Età (>40 contro ≤40): HRR 1,93 (0,99-3,73, P = 0,05). Spina calcaneare: HRR 0,96 (0,56-1,63, P = 0,88).',
      cites: [CITE.hansen],
    },
    {
      h2: 'Cosa vuol dire fascite plantare «cronica»?',
      paragraphs: [
        'Non c’è una definizione unica condivisa. Alcune fonti chiamano cronica la fascite plantare che dura da più di tre mesi, altre usano sei mesi. La linea guida del 2023 non fissa un limite. Una revisione del 2020 definisce la fascite plantare cronica come «la causa più comune di dolore cronico al tallone negli adulti» senza indicare un limite in mesi (Latt e colleghi, 2020).',
        'Più dell’etichetta conta lo schema. Di solito fascite plantare cronica vuol dire che la fitta ai primi passi del mattino è diventata un dolore più sordo e più costante. Anche il tessuto cambia nel tempo: la parola «fascite» fa pensare a un’infiammazione, ma i casi cronici di solito vengono descritti come un processo degenerativo più che infiammatorio. Per questo le infiltrazioni di cortisone, che agiscono sull’infiammazione, spesso aiutano nel breve periodo ma non nel lungo.',
        'Se hai la fascite plantare da più di alcuni mesi e non sta chiaramente migliorando, la sezione più sotto spiega cosa raccomanda la linea guida.',
      ],
      cites: [CITE.latt, CITE.guideline],
    },
    {
      h2: 'Quali sono i traguardi realistici?',
      keyFact: 'Nello studio di Rathleff, il gruppo dei sollevamenti sulle punte aveva 29\u00A0punti in meno (cioè meglio) sul Foot Function Index rispetto al gruppo dello stretching a tre mesi, una differenza descritta come grande e misurabile (Rathleff e colleghi, 2015).',
      paragraphs: [
        'Nessuno studio dà dei tempi settimana per settimana validi per tutti, e un articolo che lo fa sta tirando a indovinare. Quello che le prove offrono sono alcuni punti di riferimento che la maggior parte delle persone riconoscerà.',
        '**Prime settimane.** Il dolore del mattino potrebbe non cambiare molto. Lo studio di Rathleff ha mostrato una differenza importante tra i gruppi a tre mesi, non a tre settimane. All’inizio il cambiamento principale è che gli esercizi diventano più facili e il polpaccio sembra meno rigido. Vale la pena accorgersene anche se il tallone fa ancora male.',
        '**Da uno a tre mesi.** Nello studio di Rathleff, il gruppo dei sollevamenti sulle punte aveva 29\u00A0punti in meno sul Foot Function Index rispetto al gruppo del solo stretching a tre mesi. È una differenza grande e misurabile. Molte persone iniziano a notare che il dolore del mattino è un po’ più basso più spesso che no, o che i primi passi sono rigidi invece che dolorosi (Rathleff e colleghi, 2015).',
        '**Da tre a sei mesi.** L’intervallo «spesso nel giro di tre-sei mesi» della revisione del 2020 mette qui il grosso del miglioramento per la maggior parte delle persone che fanno gli esercizi raccomandati e portano scarpe con un buon sostegno (Latt e colleghi, 2020).',
        '**Da sei mesi in poi.** La linea guida del 2023 suggerisce di valutare altre opzioni se diversi mesi di stretching, rinforzo e cambi di scarpe non sono bastati. La coorte di Hansen mostra che si può migliorare anche dopo un anno e oltre: la curva ha continuato a scendere piano fino al quinto anno, ma il ritmo del miglioramento rallenta. Se il dolore è fermo o in aumento, e non solo lento, vedi la sezione successiva.',
        'Il numero utile non è «quante settimane mancano alla fine» ma «il mio dolore del mattino è più basso questo mese rispetto al mese scorso?». Quella tendenza è il traguardo.',
      ],
      cites: [CITE.rathleff, CITE.latt, CITE.hansen],
    },
    {
      h2: 'Cosa puoi fare se la fascite plantare non migliora?',
      paragraphs: [
        'Se diversi mesi di stretching quotidiano, rinforzo del polpaccio e scarpe con un buon sostegno non hanno cambiato le cose, la linea guida del 2023 sul dolore al tallone elenca diverse altre opzioni con i loro gradi di evidenza. Sono descritte qui sotto in modo neutrale. Nessuna ha garanzie, e tutte richiedono un professionista sanitario.',
      ],
      table: {
        caption: 'Opzioni e gradi della linea guida del 2023 per il dolore sotto il tallone che non passa',
        head: ['Opzione', 'Grado', 'Cosa vuol dire in parole semplici'],
        rows: [
          ['Terapia manuale (mobilizzazione di articolazioni e tessuti molli)', '**A**', 'Il grado più alto della linea guida, da un professionista, per le rigidità di articolazioni e tessuti.'],
          ['Allungamento della fascia plantare e del polpaccio', '**A**', 'Il grado più alto della linea guida. Raccomandato come cuore delle cure conservative.'],
          ['Taping del piede (rigido o elastico)', '**A**', 'Grado più alto per dolore e funzionalità nel breve periodo, insieme ad altre cure.'],
          ['Tutori notturni per 1-3\u00A0mesi (dolore del mattino che non passa)', '**A**', 'Grado più alto per chi continua ad avere dolore ai primi passi. Vedi [dolore al tallone al mattino](/it/dolore-tallone-al-mattino/).'],
          ['Esercizi contro resistenza e di forza (es. sollevamenti sulle punte con carico)', '**B**', 'Secondo grado più alto. Ha anticipato il miglioramento in uno studio su 48\u00A0persone. Vedi [sollevamenti sulle punte per la fascite plantare](/it/sollevamenti-tallone-fascite-plantare/).'],
          ['Laserterapia a bassa intensità e dry needling (da un professionista)', '**B**', 'Secondo grado più alto. Si fanno entrambi in ambulatorio.'],
          ['Plantari da soli per ridurre il dolore nel breve periodo', '**B contro**', 'La linea guida **sconsiglia** i plantari come approccio a sé nel breve periodo.'],
          ['Plantari insieme ad altre cure', '**C**', 'Prove deboli. Possono aiutare come parte di un programma più ampio.'],
          ['Ultrasuoni terapeutici aggiunti allo stretching', '**A contro**', 'La linea guida li **sconsiglia**. Le prove non sostengono di aggiungerli allo stretching.'],
          ['Infiltrazione di corticosteroidi', 'Non valutata nella linea guida del 2023 per l’uso a lungo termine', 'Può ridurre il dolore nel breve periodo. La coorte di Hansen non ha mostrato benefici sulla prognosi a lungo termine dalle infiltrazioni, e la linea guida non le raccomanda come approccio a sé.'],
          ['Onde d’urto', 'Discusse, prove contrastanti', 'Alcuni studi riportano benefici nei casi che non passano. Le prove non sono abbastanza forti per un grado chiaro nella linea guida.'],
        ],
      },
      cites: [CITE.guideline, CITE.hansen, CITE.rathleff],
    },
    {
      h2: 'Quando andare da un professionista se la fascite plantare non migliora?',
      paragraphs: [
        'Lo schema della tabella qui sopra è chiaro: stretching e lavoro di forza hanno il sostegno più ampio. Le opzioni in ambulatorio (laser, dry needling, onde d’urto) hanno qualche prova ma vengono dopo l’esercizio nella classifica della linea guida. La chirurgia è riservata alla piccola percentuale di casi che non risponde a nient’altro, e la linea guida non le dà un ruolo di primo piano.',
        'Se fai gli esercizi con costanza da diversi mesi e il dolore del mattino non migliora, è un buon momento per rivolgerti a un professionista sanitario e parlare delle opzioni qui sopra. È anche un buon momento per verificare che la diagnosi sia giusta: vedi [dolore al tallone al mattino](/it/dolore-tallone-al-mattino/) per gli altri problemi con lo stesso schema.',
        'Per chi corre, i cambi di carico spesso fanno parte del quadro: [dolore al tallone nei runner](/heel-pain-runners/) (in inglese) e [piedi doloranti dopo una giornata in piedi](/it/dolore-piedi-stare-in-piedi/) affrontano questo aspetto.',
      ],
      cites: [CITE.guideline, CITE.hansen, CITE.rathleff],
    },
    {
      h2: 'Come fa il dolore del mattino a mostrarti i progressi?',
      paragraphs: [
        'Il dolore del mattino è il segnale quotidiano più affidabile di come sta il piede. Misura la stessa cosa (la rigidità ai primi passi), nelle stesse condizioni (appena sveglio, piede senza carico), più o meno alla stessa ora ogni giorno. Questo lo rende una linea di tendenza molto migliore di «come sentivo il piede durante il giorno», che cambia con l’attività, le scarpe e le superfici.',
        'Un punteggio quotidiano da 0 a 10 ai primi passi, seguito per settimane, mostra schemi che altrimenti non noteresti. Un punteggio che scende piano da 5 a 3 in un mese è un progresso vero, anche se qualche mattina fa ancora male. Un punteggio che sale di colpo la mattina dopo una lunga corsa o una giornata in piedi ti dice quale carico è stato eccessivo.',
        'Walkito ti chiede un punteggio del dolore del mattino prima di ogni sessione e lo usa per adattare gli esercizi del giorno. Il primo obiettivo per il dolore al tallone è un dolore del mattino a 1 su 10 o meno per 14\u00A0giorni di fila. Quando lo raggiungi, quell’obiettivo passa al mantenimento e il successivo (di solito forza del polpaccio o equilibrio) prende il suo posto. Quel passaggio, da «rendere più facili le mattine» a «costruire capacità», è il vero traguardo.',
      ],
      cites: [CITE.guideline],
    },
  ],
  faq: [
    {
      q: 'Quanto ci mette a passare la fascite plantare?',
      cites: [CITE.latt, CITE.hansen],
      a: 'Una revisione del 2020 riporta che circa il 90% delle persone migliora con cure non chirurgiche, spesso nel giro di alcuni mesi (Latt e colleghi, 2020). In una coorte di 174\u00A0pazienti, il 50% non aveva più sintomi a cinque anni e il 46% aveva ancora sintomi a dieci anni, anche se a quel punto la maggior parte aveva solo un dolore lieve (Hansen e colleghi, 2018). Il recupero si misura in mesi, non in settimane, e nessun programma può promettere dei tempi precisi.',
    },
    {
      q: 'La fascite plantare passa del tutto?',
      cites: [CITE.hansen],
      a: 'Per molte persone sì. Nella coorte di Hansen del 2018, il 54% non aveva più alcun sintomo dopo un follow-up medio di 9,7\u00A0anni. Tra chi era guarito, la durata media dei sintomi era di circa 725\u00A0giorni. Alcune persone avevano ancora un leggero fastidio occasionale ma segnavano 0 su tutte le scale del dolore. Il recupero era più lento per le donne e per chi aveva dolore a entrambi i talloni.',
    },
    {
      q: 'Perché la mia fascite plantare non migliora?',
      cites: [CITE.guideline],
      a: 'Ci sono diverse possibilità. Gli esercizi potrebbero non essere abbastanza costanti, le scarpe potrebbero non sostenere il piede, o il carico quotidiano sul piede (passi, ore in piedi, chilometri di corsa) potrebbe essere più di quanto il tessuto riesca a reggere. È anche possibile che la diagnosi non sia fascite plantare. Se stretching e rinforzo non hanno aiutato dopo diversi mesi, la linea guida del 2023 consiglia di parlare con un professionista sanitario di opzioni come tutori notturni, laserterapia o dry needling.',
    },
    {
      q: 'La spina calcaneare fa durare di più la fascite plantare?',
      cites: [CITE.hansen],
      a: 'Non secondo lo studio di Hansen del 2018. Avere una spina calcaneare all’inizio non cambiava in modo significativo quanto duravano i sintomi (P = 0,88). Molte persone hanno una spina calcaneare senza dolore, e molte con dolore non hanno la spina. La spina spesso c’è, ma di solito non è lei a causare i sintomi.',
    },
    {
      q: 'Camminare fa bene alla fascite plantare?',
      cites: [CITE.guideline],
      a: 'Camminare in modo moderato con scarpe che sostengono il piede in genere va bene, e la linea guida non dice di smettere di muoversi. Conta se la mattina dopo va peggio. Se il dolore ai primi passi la mattina dopo una camminata è chiaramente più alto del solito, quella camminata era più di quanto il piede potesse reggere. Riduci la distanza o il tempo invece di fermarti del tutto.',
    },
    {
      q: 'Quando andare dal medico se la fascite plantare non migliora?',
      a: 'Rivolgiti a un professionista sanitario se il dolore non migliora chiaramente dopo diversi mesi di stretching quotidiano e lavoro sul polpaccio, se peggiora invece di restare stabile, se ti fanno male entrambi i talloni e altre articolazioni sono rigide o gonfie, se c’è intorpidimento o formicolio, o se il dolore ti sveglia di notte. Questi schemi possono indicare un altro problema o richiedere opzioni oltre al solo esercizio.',
    },
    {
      q: 'La fascite plantare può tornare dopo essere passata?',
      cites: [CITE.hansen],
      a: 'Sì. Nella coorte di Hansen del 2018, il 32% del gruppo senza più sintomi aveva avuto almeno una ricaduta prima di arrivare a non avere sintomi in modo stabile. Lo schema miglioramento, ricaduta e nuovo miglioramento è comune. Continuare con una dose di mantenimento di lavoro sul polpaccio e stretching dopo che il dolore è passato è un modo per ridurre la probabilità che torni.',
    },
    {
      q: 'Quali sono i segnali che la fascite plantare sta guarendo?',
      cites: [CITE.rathleff],
      a: 'Il segnale più chiaro è meno dolore al mattino: i primi passi sono rigidi invece che dolorosi, e il fastidio passa più in fretta quando inizi a camminare. Molte persone notano questo cambiamento prima che il dolore sia del tutto sparito. Nello studio di Rathleff, chi faceva i sollevamenti sulle punte aveva punteggi misurabilmente migliori entro tre mesi, che è quando questo cambiamento spesso compare.',
    },
    {
      q: 'Cosa non fare se la fascite plantare non migliora?',
      cites: [CITE.guideline],
      a: 'Non smettere con gli esercizi appena il dolore del mattino si calma, e non inseguire una sola scorciatoia al posto delle basi. Un dolore che si calma prima che la fascia si sia adattata è un motivo comune per cui i sintomi tornano. Se il dolore resta fermo o peggiora per diversi mesi nonostante stretching, rinforzo e scarpe con un buon sostegno, serve un professionista sanitario, non un’attesa più lunga.',
    },
  ],
  redFlags: {
    h2: 'Rivolgiti prima a un professionista sanitario se',
    bullets: [
      'il dolore non è migliorato dopo diversi mesi di stretching e rinforzo costanti',
      'peggiora di settimana in settimana, e non resta solo stabile',
      'ti fanno male entrambi i talloni e la rigidità del mattino dura più di 30\u00A0minuti, o altre articolazioni sono rigide o gonfie',
      'il dolore è iniziato dopo un infortunio o una caduta',
      'non riesci a caricare il peso sul piede, o zoppichi',
      'stringere i lati del tallone riproduce il dolore',
      'si accompagna a intorpidimento, formicolio o bruciore',
      'il tallone è arrossato, caldo al tatto, o hai la febbre',
      'ti sveglia di notte o c’è anche a riposo',
      'hai il diabete, meno sensibilità ai piedi o una cattiva circolazione',
    ],
  },
  program: {
    h2: 'Farlo come un piano',
    text: 'Il recupero richiede tempo, e la parte più difficile è capire se quel tempo sta servendo. Walkito costruisce un piano una settimana alla volta intorno a un obiettivo. Per il dolore al tallone, il primo obiettivo è una mattina migliore: dolore a 1 su 10 o meno per 14\u00A0giorni di fila. Ogni mattina segni il dolore, e ogni 14\u00A0giorni un breve test controlla resistenza del polpaccio, tenuta dell’arco ed equilibrio, così vedi se i numeri cambiano.',
    more: [
      'Scegli 3, 5 o 7\u00A0giorni a settimana e sessioni da 3, 5 o 10\u00A0minuti. Quando hai raggiunto l’obiettivo del mattino, quell’obiettivo passa al mantenimento e il successivo prende il suo posto. Non c’è una data di fine fissa, perché il ritmo lo decide il piede.',
      'Walkito è un programma di esercizi. Non fa diagnosi e non sostituisce un professionista sanitario. Se il dolore non migliora dopo diversi mesi, rivolgiti a un professionista sanitario per verificare la diagnosi e parlare delle opzioni di questa pagina.',
    ],
    cta: 'Inizia con 3\u00A0minuti al giorno.',
  },
  crumb: 'Quanto dura la fascite plantare',
  campaign: 'guide-pf-duration-it',
};
