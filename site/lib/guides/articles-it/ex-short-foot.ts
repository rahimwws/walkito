import { CITE } from '@/lib/citations';
import type { Guide } from '../types';

/*
 * Italian version of `articles/ex-short-foot.ts`, written around the queries
 * «esercizio piede corto» and «esercizi arco plantare piede piatto».
 * Informal «tu». Figures, doses, grades and qualifiers are identical to the
 * English page. Citations as in English (mcKeon, gooding, lynn, jung).
 */

export const EX_SHORT_FOOT_IT: Guide = {
  lang: 'it',
  page: 'exShortFoot',
  published: '2026-10-08',
  updated: '2026-10-08',
  title: 'Esercizio del piede corto: come farlo e come progredire',
  description:
    'Come fare l’esercizio del piede corto per piede piatto e arco plantare: tecnica, serie, da seduto a in piedi, errori da evitare e cosa dicono gli studi.',
  h1: 'Esercizio del piede corto: come farlo, serie e progressione',
  lede:
    'L’esercizio del piede corto allena i piccoli muscoli dentro il piede a tenere alto l’arco senza arricciare le dita. Tiri l’avampiede verso il tallone così il piede si accorcia e l’arco si alza. Una revisione narrativa del 2015 lo ha chiamato la base dell’allenamento del «foot core», il «core» del piede, e compare nella maggior parte dei programmi per piede piatto e fascite plantare che lavorano sui muscoli intrinseci del piede.',
  takeaways: [
    'Uno studio del 2016 con risonanza magnetica su 8\u00A0atleti ha visto che il piede corto dava l’attivazione media più alta (fino al 34,9%) in tre dei quattro muscoli plantari intrinseci studiati, rispetto all’apertura delle dita, all’estensione dell’alluce e all’estensione delle dita dalla seconda alla quinta (Gooding e colleghi, 2016).',
    'Uno studio elettromiografico ha trovato che l’abduttore dell’alluce, il muscolo che sostiene l’interno dell’arco, era più di quattro volte più attivo durante il piede corto che durante la raccolta dell’asciugamano (Jung e colleghi, 2011).',
    'Una meta-analisi del 2024 sull’allenamento del piede corto nel piede piatto ha trovato che i programmi più lunghi di sei settimane miglioravano il navicular drop, mentre quelli più brevi non arrivavano alla significatività (Cheng e colleghi, 2024).',
    'Adulti sani che hanno fatto quattro settimane di piede corto hanno migliorato l’equilibrio dinamico più di un gruppo che ha fatto la raccolta dell’asciugamano per lo stesso periodo (Lynn e colleghi, 2012).',
  ],
  toc: false,
  sections: [
    {
      h2: 'Cos’è l’esercizio del piede corto?',
      paragraphs: [
        'L’esercizio del piede corto è una contrazione isometrica dei muscoli intrinseci del piede. Accorci la distanza tra avampiede e tallone tirandoli l’uno verso l’altro, e così l’arco si alza. Le dita restano piatte e rilassate per tutto il tempo. Una revisione del 2015 di McKeon e colleghi lo ha indicato come l’esercizio centrale del loro modello del «foot core», che paragona i muscoli intrinseci del piede ai muscoli profondi del core del tronco.',
        'Si chiama anche «doming» dell’arco o esercizio di accorciamento del piede. È diverso dalla raccolta dell’asciugamano o dalla flessione delle dita, perché quegli esercizi usano la flessione delle dita, che recluta i muscoli flessori lunghi delle dita che scendono dallo stinco. L’esercizio del piede corto serve a isolare i muscoli che stanno interamente dentro il piede.',
      ],
      cites: [CITE.mcKeon],
    },
    {
      h2: 'Come si fa l’esercizio del piede corto?',
      paragraphs: [
        'Siediti su una sedia con i piedi appoggiati a terra, scalzo. Metti il piede in modo che tallone, avampiede e tutte e cinque le dita poggino a terra. Senza arricciare né stringere le dita, prova a tirare l’avampiede indietro verso il tallone. L’arco si alza. Tieni la contrazione, poi lascia.',
        'Pensa a rendere il piede più corto e più alto, non più largo e più piatto. Le dita non devono premere a terra, sollevarsi o arricciarsi sotto. **Se vedi le dita che stringono, stai usando i muscoli sbagliati.** All’inizio metti un dito sotto l’arco, così senti quando si alza.',
      ],
      exercises: [
        {
          name: 'Piede corto, da seduto',
          evidence: { level: 'moderate', why: 'Parte del programma testato in uno studio randomizzato del 2023 sul piede piatto (Brijwasi 2023). Da solo, una meta-analisi del 2024 ha trovato risultati significativi solo dopo sei settimane.' },
          dose: 'Walkito parte da 3\u00A0serie da 10, tieni 5\u00A0secondi, ogni piede',
          how: 'Siediti con i piedi appoggiati a terra. Tira l’avampiede verso il tallone così l’arco si alza. Tieni le dita rilassate e piatte. Tieni cinque secondi, poi lascia.',
          often: 'Ogni sessione, finché è il tuo livello',
          feel: 'L’arco che si alza, con le dita rilassate',
          stop: 'Il dolore arriva a 6/10',
          media: 'short_foot_seated',
          caption: 'Piede corto, da seduto: tira l’avampiede verso il tallone così l’arco si alza',
          alt: 'Una figura seduta che contrae l’arco di un piede con le dita piatte a terra',
        },
      ],
      cites: [CITE.brijwasi, CITE.cheng],
    },
    {
      h2: 'Quali muscoli lavora l’esercizio del piede corto?',
      paragraphs: [
        'L’esercizio del piede corto lavora sui muscoli plantari intrinseci: abduttore dell’alluce, flessore breve delle dita, quadrato della pianta e abduttore del quinto dito. Questi muscoli stanno interamente dentro il piede e sostengono da sotto l’arco longitudinale mediale.',
        'Uno studio del 2016 con risonanza magnetica di Gooding e colleghi ha misurato l’attivazione muscolare dopo 40\u00A0ripetizioni di quattro diversi esercizi per il piede in 8\u00A0atleti universitari. Il piede corto ha dato l’attivazione media più alta in:',
        {
          list: [
            'Abduttore del quinto dito (34,9%).',
            'Abduttore dell’alluce (29,7%).',
            'Flessore breve delle dita (24,8%).',
          ],
        },
        'Uno studio elettromiografico precedente di Jung e colleghi (2011) ha trovato che l’attività dell’abduttore dell’alluce era più di quattro volte maggiore durante il piede corto che durante la raccolta dell’asciugamano.',
        'Per questo **il piede corto è considerato un esercizio migliore della raccolta dell’asciugamano per lavorare in modo specifico sui muscoli intrinseci.** La raccolta dell’asciugamano recluta i flessori lunghi delle dita, i muscoli estrinseci che vanno dallo stinco alle dita. Il piede corto tiene più tranquilli quei muscoli estrinseci.',
      ],
      cites: [CITE.gooding, CITE.jung],
    },
    {
      h2: 'Come passare da seduto a in piedi e poi su una gamba?',
      paragraphs: [
        'Quando le tenute del piede corto da seduto ti sembrano facili per due sessioni di fila, il passo successivo è in piedi su entrambi i piedi. La stessa contrazione ora deve reggere il peso del corpo. Poi il piede corto su una gamba aggiunge l’equilibrio e mostra eventuali differenze tra lato sinistro e destro.',
        'Ogni versione è lo stesso movimento. **Cambia solo il carico.** In piedi raddoppia il lavoro per i muscoli dell’arco. Su una gamba lo raddoppia più o meno di nuovo e aggiunge il bisogno di stabilizzare la caviglia.',
      ],
      exercises: [
        {
          name: 'Piede corto, in piedi',
          evidence: { level: 'moderate', why: 'Parte del programma testato in uno studio randomizzato del 2023 sul piede piatto (Brijwasi 2023). Non testato da solo.' },
          dose: 'Walkito parte da 3\u00A0serie da 10, tieni 5\u00A0secondi, entrambi i piedi',
          how: 'Stai in piedi con entrambi i piedi a terra. Tira l’avampiede di ogni piede verso il tallone così entrambi gli archi si alzano. Le dita restano piatte e lunghe. Si muove solo l’arco.',
          often: 'Ogni sessione, quando il piede corto da seduto ti sembra facile',
          feel: 'L’arco che lavora mentre porta il tuo peso',
          stop: 'Il dolore arriva a 6/10',
          media: 'short_foot_double',
          caption: 'Piede corto, in piedi: dita piatte e lunghe, si alza solo l’arco',
          alt: 'Una figura in piedi con entrambi gli archi ben alzati e le dita piatte',
        },
        {
          name: 'Piede corto, su una gamba',
          evidence: { level: 'moderate', why: 'Parte del programma testato in uno studio randomizzato del 2023 sul piede piatto (Brijwasi 2023). Non testato da solo.' },
          dose: 'Walkito parte da 3\u00A0serie da 10, tieni 5\u00A0secondi, ogni piede',
          how: 'Stai su un piede. Alza l’arco come prima. Tieni l’alluce che spinge piano a terra. Se l’alluce si alza, l’arco sta compensando invece di lavorare.',
          often: 'Ogni sessione, quando il piede corto in piedi ti sembra facile',
          feel: 'Più lavoro nell’arco, con l’alluce che spinge a terra',
          stop: 'Il dolore arriva a 6/10',
          media: 'short_foot_single',
          caption: 'Piede corto, su una gamba: alza l’arco e tieni l’alluce giù',
          alt: 'Una figura in piedi su un piede con l’arco alzato e l’alluce piatto',
        },
      ],
      cites: [CITE.brijwasi],
    },
    {
      h2: 'Quali errori rendono meno utile l’esercizio del piede corto?',
      paragraphs: [
        {
          list: [
            'L’errore più comune è arricciare le dita. Se le dita si flettono e stringono il pavimento, l’esercizio diventa una flessione delle dita e prendono il sopravvento i flessori estrinseci. **Tieni le dita lunghe e rilassate.** Ad alcune persone aiuta sollevare un attimo le dita, contrarre l’arco, poi riappoggiare le dita.',
            'Il secondo errore è spingere il piede verso l’esterno invece di accorciarlo. Il movimento deve andare dritto indietro, avampiede verso tallone, non da un lato all’altro.',
            'Il terzo è trattenere il respiro. Respira normalmente durante ogni tenuta.',
          ],
        },
        'Se non senti per niente l’arco che si alza, prova a mettere un dito o una penna sotto l’arco. Lo scopo è sentire l’arco che preme contro quell’oggetto. Possono servire diverse sessioni prima che il cervello impari ad attivare questi muscoli a comando. È un apprendimento normale.',
      ],
    },
    {
      h2: 'Cosa dicono gli studi sull’esercizio del piede corto?',
      keyFact: 'In uno studio del 2023 su 52\u00A0persone con piede piatto flessibile, un programma di sei settimane con piede corto, lavoro sulla caviglia, rinforzo dell’anca e allungamenti ha cambiato la forma dell’arco più che in un gruppo di controllo (Brijwasi e colleghi, 2023).',
      paragraphs: [
        'Le prove più forti vengono da programmi che uniscono il piede corto ad altri esercizi, non dal piede corto da solo. In uno studio del 2023 su 52\u00A0persone con piede piatto flessibile, Brijwasi e colleghi hanno testato un programma di sei settimane con:',
        {
          list: [
            'Piede corto.',
            'Lavoro sulla caviglia.',
            'Rinforzo dell’anca.',
            'Allungamenti.',
          ],
        },
        'Il programma ha cambiato due misure della forma dell’arco più che nel gruppo di controllo.',
        'Una meta-analisi del 2024 di Cheng e colleghi ha esaminato l’allenamento del piede corto da solo in più studi. Nel complesso, i risultati non mostravano un miglioramento significativo del navicular drop o del Foot Posture Index. Ma quando i revisori hanno limitato l’analisi ai programmi più lunghi di sei settimane, il navicular drop migliorava in modo significativo. La durata dell’allenamento conta.',
        'Per l’equilibrio, uno studio randomizzato del 2012 di Lynn e colleghi ha confrontato quattro settimane di piede corto con quattro settimane di raccolta dell’asciugamano in adulti sani. Il gruppo del piede corto ha migliorato l’equilibrio dinamico più del gruppo della raccolta dell’asciugamano.',
        'Nessuno di questi studi è grande. **Le prove sostengono il piede corto come parte di un programma più ampio di rinforzo del piede, soprattutto per piede piatto e dolore all’arco.** Non è una soluzione a sé, e non è stato testato da solo come trattamento principale per la fascite plantare. Per l’elenco completo degli esercizi, vedi [esercizi per il piede piatto](/it/esercizi-piede-piatto/) o [esercizi per la fascite plantare](/it/esercizi-fascite-plantare/).',
      ],
      cites: [CITE.brijwasi, CITE.cheng, CITE.lynn],
    },
  ],
  faq: [
    {
      q: 'Quanto ci vuole perché l’esercizio del piede corto funzioni?',
      cites: [CITE.cheng],
      a: 'Una meta-analisi del 2024 ha trovato che i programmi di piede corto più brevi di sei settimane non cambiavano in modo significativo l’altezza dell’arco, mentre quelli più lunghi di sei settimane miglioravano il navicular drop (Cheng 2024). Metti in conto almeno sei-otto settimane di pratica regolare prima di vedere cambiamenti misurabili.',
    },
    {
      q: 'Il piede corto è la stessa cosa del doming dell’arco?',
      a: 'Sì. Piede corto, «doming» dell’arco e «doming» del piede descrivono tutti lo stesso movimento: tirare l’avampiede verso il tallone per alzare l’arco senza flettere le dita. Il nome «piede corto» viene dal fatto che il piede diventa visibilmente più corto mentre l’arco si alza.',
    },
    {
      q: 'Si può fare il piede corto per la fascite plantare?',
      cites: [CITE.guideline],
      a: 'L’esercizio del piede corto non fa parte della principale linea guida sulla fascite plantare, che si concentra su allungamenti e sollevamenti sulle punte con carico. Ma rinforzare i muscoli intrinseci del piede può essere utile come parte di un programma più ampio. Vedi [esercizi per la fascite plantare](/it/esercizi-fascite-plantare/) per gli esercizi sostenuti dalla linea guida.',
    },
    {
      q: 'Il piede corto è meglio della raccolta dell’asciugamano?',
      cites: [CITE.jung, CITE.lynn],
      a: 'Per lavorare in modo specifico sui muscoli intrinseci del piede, sì. Gli studi elettromiografici mostrano che l’abduttore dell’alluce è più di quattro volte più attivo durante il piede corto che durante la raccolta dell’asciugamano (Jung 2011). Uno studio randomizzato a parte ha trovato che il gruppo del piede corto migliorava l’equilibrio più del gruppo della raccolta dell’asciugamano dopo quattro settimane (Lynn 2012). La raccolta dell’asciugamano resta utile come esercizio di partenza più semplice.',
    },
    {
      q: 'Quante serie e ripetizioni di piede corto fare?',
      cites: [CITE.brijwasi],
      a: 'Walkito parte da 3\u00A0serie da 10\u00A0ripetizioni, tenendo ognuna 5\u00A0secondi, per ogni piede. Lo studio del 2023 sul piede piatto usava valori simili. Aumenta la difficoltà passando da seduto a in piedi e poi su una gamba, invece di aggiungere ripetizioni.',
    },
  ],
  redFlags: {
    h2: 'Rivolgiti prima a un professionista sanitario se',
    bullets: [
      'il dolore all’arco è iniziato dopo un infortunio improvviso o uno schiocco, che può indicare una rottura della fascia plantare',
      'hai intorpidimento, formicolio o bruciore nel piede, che possono indicare un coinvolgimento dei nervi',
      'un piede è rigido e l’arco non si alza per niente quando sali sulle punte, cosa che può richiedere esami di imaging',
      'il dolore peggiora di settimana in settimana nonostante l’esercizio regolare',
    ],
  },
  program: {
    h2: 'Farlo come un piano',
    text: 'Walkito costruisce un piano che include l’esercizio del piede corto in una progressione a tre gradini: da seduto, in piedi, poi su una gamba. Ogni gradino si apre quando due sessioni al livello attuale ti sono sembrate facili. Scegli sessioni da 3, 5 o 10\u00A0minuti, e un test ogni 14\u00A0giorni controlla se il tempo di tenuta dell’arco sta migliorando.',
    cta: 'Inizia con 3\u00A0minuti al giorno.',
  },
  crumb: 'Esercizio del piede corto',
  campaign: 'ex-short-foot-it',
};
