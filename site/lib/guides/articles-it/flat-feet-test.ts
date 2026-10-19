import { CITE } from '@/lib/citations';
import type { Guide } from '../types';

/*
 * Italian version of articles/flat-feet-test.ts (2026-10-18), written around
 * «test piede piatto», «come capire se hai il piede piatto». Informal «tu».
 * Figures, grades, doses, hedges and CITE keys are identical to the English
 * page after its fact-check. Same media ids. Exercise names follow it.ts
 * (esercizi-piede-piatto). "Clinician" is «professionista sanitario».
 */

export const FLAT_FEET_TEST_IT: Guide = {
  lang: 'it',
  page: 'flatFeetTest',
  mainSource: CITE.menzMunteanu,
  published: '2026-10-18',
  updated: '2026-10-18',
  title: 'Test del piede piatto a casa: 4 semplici controlli',
  description:
    'Come capire se hai il piede piatto a casa: impronta bagnata, da seduto e in piedi, punte e alluce, sollevamento su una gamba, e cosa può e non può dirti.',
  h1: 'Test del piede piatto a casa: 4 semplici controlli, e cosa possono e non possono dirti',
  lede:
    'Puoi controllare a casa se hai il piede piatto in circa cinque minuti: guarda l’impronta del piede bagnato, confronta l’arco da seduto e in piedi, sali sulle punte o solleva l’alluce per vedere se l’arco ricompare, e prova un sollevamento sulle punte su una gamba sola. L’impronta è il meno preciso dei quattro: in 95\u00A0anziani confrontati con le radiografie, il punteggio dell’impronta corrispondeva solo moderatamente alla vera altezza dell’arco (Menz e Munteanu, 2005). I controlli che contano di più sono se l’arco ricompare e se un lato si comporta in modo diverso dall’altro.',
  intro: [
    'Nessuno di questi controlli è una diagnosi, e un arco basso da solo di solito non è un problema. Questa pagina spiega come fare ogni controllo, quanto ci si può fidare secondo la ricerca, cosa misura invece un professionista sanitario e quali risultati sono un motivo per farti vedere il piede. Per capire cos’è il piede piatto e quando conta, parti da [piede piatto](/it/piede-piatto/).',
  ],
  takeaways: [
    'L’impronta bagnata è un’indicazione approssimativa. In 95\u00A0persone tra i 62 e i 94\u00A0anni, l’indice d’arco dell’impronta corrispondeva solo moderatamente all’altezza dell’arco in radiografia, mentre una misura con il righello dell’osso dell’arco corrispondeva bene (Menz e Munteanu, 2005).',
    'Il grasso sotto la pianta può riempire l’impronta: in 24\u00A0adulti con sovrappeso o obesità, l’indice d’arco dell’impronta aumentava con la percentuale di grasso corporeo (Wearing e colleghi, 2004).',
    'Se l’arco ricompare quando sei seduto, quando sali sulle punte o quando sollevi l’alluce, il piede piatto è flessibile, il tipo comune, quello analizzato negli studi sugli esercizi (Brijwasi e Borkar, 2023).',
    'Fatica a salire sulle punte su un piede solo, dolore dietro la caviglia interna e un arco che si abbassa sempre di più da un lato sono segni di disfunzione del tendine tibiale posteriore. In 582\u00A0donne sopra i 40\u00A0anni, il 3,3% aveva sintomi in fase iniziale (stadio I o II) e a nessuna era stata fatta la diagnosi (Kohls-Gatzoulis e colleghi, 2009).',
    'Anche le misure dei professionisti variano: quando due esaminatori inesperti hanno misurato il navicular drop, i loro risultati concordavano poco (Picciano e colleghi, 1993). In uno studio successivo su 86\u00A0giovani adulti, la stessa misura era molto ripetibile (Zuil-Escobar e colleghi, 2018).',
  ],
  toc: true,
  sections: [
    {
      h2: 'Come capire a casa se hai il piede piatto?',
      paragraphs: [
        '**Fai quattro controlli, in quest’ordine, a piedi nudi su un pavimento duro.** I primi due ti dicono quanto è basso il tuo arco. Gli ultimi due ti dicono se è flessibile e se il tendine che lo sostiene fa il suo lavoro. Ti servono un asciugamano, un po’ d’acqua, un foglio di carta da pacchi o un cartoncino e un muro a cui tenerti.',
        'Controlla sempre entrambi i piedi. Una differenza tra piede sinistro e destro dice più di ciascun piede preso da solo, perché nella maggior parte delle persone i piedi sono più o meno simili, e un solo piede piatto è uno dei segnali d’allarme elencati alla fine di questa pagina.',
      ],
      table: {
        caption: 'I quattro controlli a casa in breve',
        head: ['Controllo', 'Cosa guardi', 'Cosa può mostrare', 'Cosa non può mostrare'],
        rows: [
          ['Impronta bagnata', 'Quanta parte della pianta lascia l’impronta', 'Un arco basso, a grandi linee', 'L’altezza esatta dell’arco, o il dolore'],
          ['Da seduto e in piedi', 'L’arco con e senza il peso', 'Quanto si abbassa l’arco', 'Perché si abbassa'],
          ['Punte e alluce', 'Se l’arco ricompare', 'Flessibile o rigido', 'La causa di un piede rigido'],
          ['Sollevamento su una gamba', 'Salire sulle punte su un piede solo', 'Debolezza da un lato', 'Quale tendine è coinvolto'],
        ],
      },
      after: [
        'Scrivi cosa vedi, oppure fai una foto di ogni piede dal lato interno e da dietro. Ripetere gli stessi controlli tra qualche mese ti mostra se qualcosa è cambiato, e questo conta più di un singolo risultato.',
      ],
    },
    {
      h2: 'Come si fa il test dell’impronta bagnata, e quanto è preciso?',
      keyFact: 'In 95\u00A0persone tra i 62 e i 94\u00A0anni, l’indice d’arco dell’impronta corrispondeva solo moderatamente all’altezza dell’arco in radiografia (r = 0,52), contro r = 0,79 per una misura dell’altezza dell’osso dell’arco (Menz e Munteanu, 2005).',
      paragraphs: [
        '**Come si fa:** bagna la pianta di un piede, sali con tutto il peso su un foglio di carta da pacchi o su un cartoncino asciutto, resta in piedi normalmente per un secondo, poi scendi. Ripeti con l’altro piede. Guarda la parte centrale dell’impronta, quella tra il tallone e la base delle dita:',
        {
          list: [
            '**Una curva netta sul lato interno**, con la fascia centrale larga circa la metà della parte anteriore del piede o meno: un arco tipico.',
            '**Una fascia centrale larga con poca o nessuna curva**, così l’impronta sembra una ciabatta: un arco basso.',
            '**Si vedono solo il tallone e l’avampiede**, uniti da una fascia sottile o per niente: un arco alto. Vedi [piede cavo](/it/piede-cavo-esercizi/).',
          ],
        },
        '**Cosa può dirti:** più o meno quanta parte della pianta tocca terra. I ricercatori trasformano la stessa impronta in un numero, l’indice d’arco, confrontando il terzo centrale dell’impronta con l’impronta intera (Cavanagh e Rodgers, 1987).',
        '**Cosa non può dirti:** la vera altezza del tuo arco. In 95\u00A0persone tra i 62 e i 94\u00A0anni confrontate con le radiografie, l’indice dell’impronta corrispondeva solo moderatamente all’altezza dell’osso dell’arco (Menz e Munteanu, 2005). Uno studio del 1992 su 115\u00A0uomini ha trovato che l’impronta non permetteva di prevedere l’altezza dell’arco (Hawes e colleghi, 1992), mentre uno studio del 2009 su 91\u00A0giovani adulti ha trovato una corrispondenza da debole a moderata con le radiografie (Murley e colleghi, 2009). In 198\u00A0pazienti ambulatoriali, tre punteggi dell’impronta riconoscevano un piede piatto in radiografia con una precisione che gli autori definiscono discreta (Paecharoen e colleghi, 2023).',
        'Un motivo sono i tessuti molli. In un piccolo studio pilota su 24\u00A0adulti con sovrappeso o obesità, l’indice dell’impronta durante il cammino aumentava con la percentuale di grasso corporeo, quindi un’impronta più piena può voler dire più imbottitura sotto l’arco, non un arco più basso (Wearing e colleghi, 2004). L’impronta inoltre non dice niente sul dolore, che è ciò che decide se un piede piatto ha bisogno di attenzione.',
      ],
      cites: [CITE.menzMunteanu, CITE.cavanaghArchIndex, CITE.hawesFootprint, CITE.murleyArch, CITE.paecharoen, CITE.wearing],
    },
    {
      h2: 'L’arco sembra diverso da seduto e in piedi?',
      paragraphs: [
        '**Siediti su una sedia con i piedi appoggiati e rilassati, e guarda il lato interno di ogni piede.** Nota lo spazio sotto l’arco. Poi alzati con il peso su entrambi i piedi e guarda di nuovo, oppure fatti fare una foto di lato all’altezza del pavimento.',
        'Un certo abbassamento è normale: ogni arco scende un po’ sotto il tuo peso. Nei dati raccolti su 619\u00A0adulti sani, il piede medio a riposo era leggermente ruotato verso l’interno, una posizione che gli autori considerano normale (Redmond e colleghi, 2008). Quello che cerchi è un cambiamento grande, un arco che si vede bene quando sei seduto e sparisce quando sei in piedi.',
        '**Poi guarda da dietro.** Stai in piedi normalmente e chiedi a qualcuno di guardarti i talloni all’altezza del pavimento. Un tallone che si inclina verso l’esterno, con il malleolo interno che sporge verso l’interno, si accompagna a un arco basso. Se un tallone si inclina più dell’altro, prendine nota.',
        'Questo controllo ti dice quanto si abbassa l’arco, che è ciò che un professionista sanitario misura in modo più preciso come navicular drop (ne parliamo più sotto). Non ti dice perché: un piede lasso dalla nascita e un tendine che si sta indebolendo possono sembrare uguali da fermi. I due controlli successivi iniziano a distinguerli.',
      ],
      cites: [CITE.redmondFpi],
    },
    {
      h2: 'Come si fa il test del piede piatto flessibile?',
      keyFact: 'La coalizione tarsale, un ponte osseo o fibroso tra ossa del piede spesso legato a un piede piatto rigido e doloroso nei giovani adulti, è riportata in una quota tra l’1 e il 13% delle persone (Mehdi e colleghi, 2024).',
      paragraphs: [
        'Un piede piatto flessibile si appiattisce sotto il tuo peso ma ritrova l’arco quando il carico cambia. Due controlli rapidi lo mostrano:',
        {
          list: [
            '**Controllo sulle punte.** Stai in piedi tenendoti al muro e sali sugli avampiedi con entrambi i piedi. Guarda il lato interno di ogni piede, o i talloni da dietro. In un piede flessibile, mentre sali compare un arco e i talloni si inclinano leggermente verso l’interno.',
            '**Controllo dell’alluce (test di Jack).** Stai in piedi normalmente. Solleva l’alluce il più possibile, o fattelo sollevare da qualcuno, mentre il tallone resta giù. In un piede flessibile, l’arco si alza mentre l’alluce sale. Il test prende il nome da Jack, che lo ha descritto nel 1953 (Jack, 1953).',
          ],
        },
        '**Se l’arco ricompare, il piede piatto è flessibile.** È il tipo comune, ed è quello analizzato negli studi sugli esercizi: in 52\u00A0persone con piede piatto flessibile, sei settimane di piede corto, esercizi per caviglia e anca e allungamenti hanno migliorato due misure della forma dell’arco più che nel gruppo di controllo (Brijwasi e Borkar, 2023).',
        '**Se l’arco resta piatto e il piede sembra rigido**, il piede piatto potrebbe essere rigido. Una causa è la coalizione tarsale, un ponte di osso, cartilagine o tessuto fibroso tra due ossa del piede, che si trova spesso nei giovani adulti con un piede piatto rigido e doloroso (Mehdi e colleghi, 2024). Un piede piatto rigido richiede che un professionista sanitario ne trovi la causa prima che tu inizi qualsiasi programma di esercizi.',
        'Diciamolo chiaramente: non abbiamo trovato studi che abbiano misurato quanto siano affidabili negli adulti il controllo sulle punte o il test di Jack fatti a casa. Sono semplici da fare e di solito il risultato è chiaro, ma se il piede risulta rigido, prendilo come un motivo per farti controllare, non come una diagnosi.',
      ],
      cites: [CITE.jack1953, CITE.brijwasi, CITE.mehdiCoalition],
    },
    {
      h2: 'Cosa mostra il sollevamento sulle punte su una gamba sul piede piatto?',
      keyFact: 'In un’indagine su 582\u00A0donne sopra i 40\u00A0anni in Inghilterra, il 3,3% aveva una disfunzione del tendine tibiale posteriore in fase iniziale, e a nessuna era stata diagnosticata prima (Kohls-Gatzoulis e colleghi, 2009).',
      paragraphs: [
        'Il tibiale posteriore è il muscolo il cui tendine passa dietro il malleolo interno e sostiene l’arco. Quando il tendine si indebolisce, l’arco da quel lato può abbassarsi lentamente. È la disfunzione del tendine tibiale posteriore, un motivo comune per cui l’arco di un adulto si appiattisce con il tempo. Il quadro tipico è dolore sul lato interno della caviglia, un piede che si appiattisce e il tallone che ruota verso l’esterno (Deu e colleghi, 2022).',
        '**Come si fa:** stai su un piede accanto a un muro, con la punta delle dita sul muro solo per l’equilibrio. Sali il più in alto possibile sull’avampiede, poi scendi. Fanne qualcuno, poi cambia piede. Fai attenzione a tre cose:',
        {
          list: [
            'riesci a salire su un piede con la stessa facilità che sull’altro',
            'in cima al sollevamento il tallone ruota verso l’interno, allo stesso modo da entrambi i lati',
            'non hai dolore dietro o sotto il malleolo interno',
          ],
        },
        'Fatica a salire da un lato, un tallone che non ruota verso l’interno o dolore alla caviglia interna sono i segni che fanno pensare al tendine. Un professionista sanitario usa lo stesso movimento come controllo di screening, e il quadro completo è in [disfunzione del tendine tibiale posteriore](/it/disfunzione-tendine-tibiale-posteriore/).',
        'Questo controllo riguarda la forma e la sensazione tra un lato e l’altro di un singolo sollevamento, non quanti ne riesci a fare. Se vuoi un numero per la resistenza del polpaccio, con il ritmo usato nella ricerca e i numeri che raggiungono gli adulti sani, usa il [test del sollevamento sulle punte](/it/test-sollevamento-punte/).',
      ],
      cites: [CITE.deuTendinopathies, CITE.kohlsGatzoulisPrevalence, CITE.posteriorTibialReview],
    },
    {
      h2: 'Cosa misura un professionista sanitario per il piede piatto?',
      keyFact: 'In 619\u00A0adulti sani valutati con il Foot Posture Index, la media era +4 su una scala da -12 a +12, che gli autori definiscono leggermente pronata e normale (Redmond e colleghi, 2008).',
      paragraphs: [
        'Un professionista sanitario guarda le stesse cose che hai guardato tu, ma le valuta in modo standard. Le due misure più comuni:',
        {
          list: [
            '**Foot Posture Index (FPI).** Sei controlli del piede in piedi, ognuno con un punteggio da -2 a +2, tra cui l’angolo del tallone, la sporgenza della caviglia interna e la forma dell’arco. Il totale va da -12 (arco alto) a +12 (piatto). Nei dati raccolti su 619\u00A0adulti sani la media era +4, e gli autori considerano i punteggi sotto -3 o sopra +10 chiaramente fuori dall’intervallo normale (Redmond e colleghi, 2008).',
            '**Navicular drop.** Il professionista segna l’osso sul lato interno dell’arco (lo scafoide, o navicolare), ne misura l’altezza da seduto con il piede in una posizione standard, poi in piedi, e registra di quanto scende. Negli studi gli adulti sani hanno in media da 3,6 a 8,1\u00A0millimetri, e nessuna soglia per “troppo” è stata confermata (Nielsen e colleghi, 2009).',
          ],
        },
        '**Queste misure sono migliori dell’impronta, ma non perfette.** Negli anziani, una misura con il righello dell’altezza dell’osso dell’arco corrispondeva bene alle radiografie (r = 0,79), mentre l’FPI corrispondeva meno (r da 0,36 a 0,59), perché valuta tutto il piede e non solo l’arco (Menz e Munteanu, 2005). Il totale dell’FPI ha mostrato nel complesso un’affidabilità moderata, l’altezza del navicolare era la singola misura più affidabile negli adulti, e nessuna delle misure testate era abbastanza affidabile nei bambini piccoli (Evans e colleghi, 2003).',
        'L’esperienza conta. Quando due esaminatori inesperti hanno misurato il navicular drop in 15\u00A0persone, i loro risultati concordavano poco (Picciano e colleghi, 1993). In 86\u00A0giovani adulti di uno studio successivo, navicular drop e punteggi dell’impronta erano molto ripetibili (Zuil-Escobar e colleghi, 2018). Se il tuo arco viene seguito nel tempo, è utile che a misurarlo sia sempre la stessa persona.',
        'Se un professionista sospetta un piede rigido, una coalizione o un danno al tendine, può prescrivere una radiografia in carico, una TAC o una risonanza magnetica, che nessun controllo a casa può sostituire (Mehdi e colleghi, 2024).',
      ],
      sourceNote:
        'Menz e Munteanu 2005: r di Pearson rispetto all’altezza radiografica del navicolare, all’inclinazione del calcagno e all’angolo calcagno primo metatarso; indice d’arco r da 0,52 a 0,71, FPI r da 0,36 a 0,59. Picciano 1993: ICC tra esaminatori del navicular drop 0,57, dello stesso esaminatore 0,61 e 0,79. Zuil-Escobar 2018: ICC sopra 0,88.',
      cites: [CITE.redmondFpi, CITE.nielsenNavicular, CITE.menzMunteanu, CITE.evansFpiReliability, CITE.picciano, CITE.zuilEscobar, CITE.mehdiCoalition],
    },
    {
      h2: 'Cosa fare con il tuo risultato?',
      paragraphs: [
        'Metti insieme i quattro controlli:',
        {
          list: [
            '**Arco basso che ricompare sulle punte, nessun dolore, piedi uguali:** un piede piatto flessibile, una variante normale. Non serve fare niente. Gli esercizi sono facoltativi.',
            '**Arco basso che ricompare, con archi stanchi o doloranti dopo giornate lunghe:** gli esercizi per piede e caviglia sono un punto di partenza ragionevole. Vedi [esercizi per il piede piatto](/it/esercizi-piede-piatto/) per il programma completo.',
            '**Arco che resta piatto, un piede più piatto dell’altro o dolore alla caviglia interna:** rivolgiti a un professionista sanitario prima di iniziare gli esercizi. L’elenco qui sotto ha i dettagli.',
          ],
        },
        '**Cosa possono e non possono fare gli esercizi.** In 52\u00A0persone con piede piatto flessibile, sei settimane di piede corto, lavoro per caviglia e anca e allungamenti hanno migliorato la forma dell’arco più dei soli movimenti della caviglia su e giù (Brijwasi e Borkar, 2023). Una revisione del 2024 sull’allenamento del piede corto non ha trovato un cambiamento chiaro nella postura generale del piede, e un cambiamento in una misura dell’arco solo nei programmi più lunghi di sei settimane (Cheng e colleghi, 2024). Entrambi misuravano la forma, non il dolore.',
        'Le schede qui sotto sono un punto di partenza preso da [esercizi per il piede piatto](/it/esercizi-piede-piatto/), con le stesse dosi.',
      ],
      exercises: [
        {
          name: 'Piede corto, da seduto',
          evidence: { level: 'moderate', why: 'Parte del programma che ha migliorato la forma dell’arco in uno studio del 2023. Da solo, il piede corto ha risultati più deboli.' },
          dose: '3\u00A0serie da 8, tieni 5\u00A0secondi, ogni piede',
          often: 'Ogni sessione, finché è il tuo livello',
          feel: 'L’arco che si alza',
          how: 'Siediti con il piede appoggiato a terra. Tira l’avampiede verso il tallone così l’arco si alza, e tieni. Tieni il bordo esterno del piede a terra e alza l’arco, come a formare una piccola cupola sotto il piede. Non arricciare le dita. Arricciarle è l’errore più comune in questo esercizio.',
          stop: 'Un crampo nell’arco che non passa, o dolore alla caviglia interna',
          image: 'Esercizio: piede corto, da seduto',
          media: 'short_foot_seated',
          caption: 'Piede corto, da seduto: tira l’avampiede verso il tallone così l’arco si alza',
          alt: 'Una gamba di una persona seduta con il piede a terra, i muscoli dell’arco evidenziati mentre l’arco si alza',
        },
        {
          name: 'Sollevamento dell’alluce',
          evidence: { level: 'early', why: 'Un’aggiunta di Walkito. Non faceva parte del programma testato negli studi di questa pagina.' },
          dose: '3\u00A0serie da 8, tieni 5\u00A0secondi, ogni piede',
          often: 'Ogni sessione, finché è il tuo livello',
          feel: 'L’alluce che si muove da solo',
          how: 'Siediti con i piedi appoggiati. Solleva solo l’alluce e tieni. Le altre quattro dita restano ferme a terra. Questo esercizio insegna all’alluce a muoversi da solo, il primo interruttore dell’arco.',
          stop: 'Dolore alla base dell’alluce',
          image: 'Esercizio: sollevamento dell’alluce',
          media: 'big_toe_lift',
          caption: 'Sollevamento dell’alluce: alza solo l’alluce, le altre quattro dita restano giù',
          alt: 'Un piede a terra che solleva solo l’alluce, con l’arco evidenziato',
        },
        {
          name: 'Sollevamenti sulle punte su due piedi',
          evidence: { level: 'moderate', why: 'La linea guida del 2023 dà al lavoro di forza una B. Questo passaggio non è stato testato da solo.' },
          dose: '3\u00A0serie da 10, entrambi i piedi',
          often: 'Giorni di forza',
          feel: 'I polpacci che lavorano insieme',
          how: 'Stai su entrambi i piedi, sali dritto sopra gli alluci, poi scendi piano. I due piedi si dividono il carico mentre il polpaccio si scalda.',
          stop: 'Dolore dietro la caviglia interna, o un lato che non riesce a stare al passo',
          image: 'Esercizio: sollevamenti sulle punte su due piedi',
          media: 'heel_raise_double',
          caption: 'Sollevamenti sulle punte su due piedi: sali dritto sopra gli alluci, poi scendi piano',
          alt: 'Una figura in piedi che sale sulle punte di entrambi i piedi, con il polpaccio evidenziato',
        },
        {
          name: 'Inversione con elastico',
          evidence: { level: 'early', why: 'Un’aggiunta di Walkito. Non faceva parte del programma testato negli studi di questa pagina.' },
          dose: '3\u00A0serie da 12, ogni piede',
          often: 'Giorni di forza',
          feel: 'Lavoro lungo l’interno del piede e della caviglia',
          how: 'Siediti con un elastico intorno al piede e ruota il piede verso l’interno contro l’elastico. Muovi il piede, non la gamba. Il ginocchio resta fermo. Walkito aggiunge questo esercizio solo dopo sei sessioni di piede corto in piedi, così prima lavorano i muscoli dell’arco.',
          stop: 'Dolore dietro la caviglia interna che resta dopo la serie',
          image: 'Esercizio: inversione con elastico',
          media: 'band_inversion',
          caption: 'Inversione con elastico: ruota il piede verso l’interno contro l’elastico, il ginocchio resta fermo',
          alt: 'Una gamba con un elastico intorno al piede che ruota il piede verso l’interno, con la parte bassa della gamba evidenziata',
        },
      ],
      cites: [CITE.brijwasi, CITE.cheng, CITE.guideline],
    },
  ],
  faq: [
    {
      q: 'Come faccio a sapere se ho il piede piatto?',
      cites: [CITE.menzMunteanu, CITE.brijwasi],
      a: 'Guarda l’impronta del piede bagnato, poi confronta l’arco da seduto e in piedi. Un’impronta senza curva sul lato interno e un arco che sparisce quando sei in piedi fanno pensare a un arco basso. Poi sali sulle punte: se l’arco ricompare, il piede piatto è flessibile, il tipo comune. L’impronta da sola corrisponde solo moderatamente alla vera altezza dell’arco.',
    },
    {
      q: 'Il test dell’impronta bagnata è preciso?',
      cites: [CITE.menzMunteanu, CITE.hawesFootprint, CITE.wearing],
      a: 'Solo a grandi linee. In 95\u00A0anziani confrontati con le radiografie, il punteggio dell’impronta corrispondeva moderatamente all’altezza dell’arco, e uno studio del 1992 su 115\u00A0uomini ha trovato che l’impronta non permetteva di prevedere l’altezza dell’arco. Anche il grasso sotto la pianta può riempire l’impronta. Usalo come primo sguardo, non come diagnosi.',
    },
    {
      q: 'Cos’è il test del piede piatto flessibile?',
      cites: [CITE.jack1953],
      a: 'Controlla se l’arco ricompare. Sali sulle punte, oppure solleva l’alluce mentre il tallone resta giù (il test di Jack, descritto nel 1953). Se compare un arco, il piede piatto è flessibile. Se resta piatto e rigido, un professionista sanitario dovrebbe cercarne la causa. Non abbiamo trovato studi su quanto siano affidabili questi controlli fatti a casa.',
    },
    {
      q: 'Come faccio a sapere se il mio piede piatto è rigido?',
      cites: [CITE.mehdiCoalition],
      a: 'Un piede piatto rigido non ha arco quando sei seduto, quando sali sulle punte o quando sollevi l’alluce, e spesso lo senti rigido. Una causa è la coalizione tarsale, un ponte tra ossa del piede riportato in una quota tra l’1 e il 13% delle persone. Un piede piatto rigido che fa male richiede un professionista sanitario e di solito esami di imaging.',
    },
    {
      q: 'Si può avere il piede piatto da un lato solo?',
      cites: [CITE.deuTendinopathies, CITE.kohlsGatzoulisPrevalence],
      a: 'Sì, e vale la pena controllarlo. Un arco che si abbassa sempre di più da un lato, soprattutto con dolore dietro la caviglia interna o fatica a salire sulle punte su quel piede, è un segno tipico di disfunzione del tendine tibiale posteriore. In 582\u00A0donne sopra i 40\u00A0anni, il 3,3% ne aveva i primi segni e a nessuna era stata diagnosticata. Rivolgiti a un professionista sanitario.',
    },
    {
      q: 'Qual è un navicular drop normale?',
      cites: [CITE.nielsenNavicular, CITE.picciano],
      a: 'Negli studi gli adulti sani hanno in media da 3,6 a 8,1\u00A0millimetri di navicular drop, cioè di quanto scende l’osso dell’arco quando sei in piedi. Come soglia per “troppo” sono stati proposti 10, 13 o 15\u00A0millimetri, ma nessuna è confermata, e i risultati variano tra esaminatori, soprattutto se inesperti. È difficile misurarlo con precisione da solo.',
    },
    {
      q: 'Cos’è il Foot Posture Index?',
      cites: [CITE.redmondFpi, CITE.evansFpiReliability],
      a: 'È un controllo in sei parti che un professionista sanitario fa mentre sei in piedi, e dà a tallone, caviglia e arco un punteggio da -2 a +2 ciascuno, per un totale da -12 (arco alto) a +12 (piatto). In 619\u00A0adulti sani la media era +4, cioè normale. Nel complesso ha mostrato un’affidabilità moderata, e in uno studio nessuna misura della postura del piede era abbastanza affidabile nei bambini piccoli.',
    },
    {
      q: 'Il piede piatto va trattato se non fa male?',
      cites: [CITE.menz],
      a: 'Di solito no. Un piede piatto flessibile che non fa male e non ti limita in quello che fai è una variante normale. Il Framingham Foot Study, su circa 1.900\u00A0adulti, non ha trovato un legame tra piede piatto e dolore lombare. Dolore, rigidità o un cambiamento da un lato solo sono i motivi per farlo controllare.',
    },
    {
      q: 'Posso fare lo stesso test del piede piatto a mio figlio?',
      cites: [CITE.harrisPediatricFlatfoot, CITE.evansFpiReliability],
      a: 'I controlli sulle punte e dell’alluce funzionano anche nei bambini, ma la maggior parte dei bambini piccoli ha l’arco basso, che si forma con la crescita, e in uno studio le misure della postura del piede non erano abbastanza affidabili nei bambini piccoli. Un piede rigido, dolore o una zoppia sono motivi per andare dal medico. Altro in [piede piatto nei bambini](/it/piede-piatto-bambini/).',
    },
  ],
  redFlags: {
    h2: 'Rivolgiti prima a un professionista sanitario se',
    bullets: [
      'l’arco resta piatto quando sei seduto, quando sali sulle punte o quando sollevi l’alluce, e il piede è rigido',
      'un piede è diventato più piatto dell’altro nel corso dei mesi, o te ne accorgi all’improvviso',
      'hai dolore o gonfiore dietro o sotto il malleolo interno',
      'non riesci a salire sulle punte su un piede solo, o salire da quel lato fa male',
      'il piede piatto è comparso dopo una caduta, una storta o un trauma',
      'hai il diabete e il piede è caldo, arrossato o gonfio, o la sua forma sta cambiando',
      'senti intorpidimento, bruciore o formicolio nel piede',
      'il piede piatto di un bambino è rigido, fa male o si accompagna a una zoppia',
    ],
  },
  program: {
    h2: 'Come trasformarlo in un piano',
    text: 'Walkito è un’app di esercizi per il dolore al tallone e al piede, su iPhone e Android. Costruisce un piano dalle tue risposte, tra cui dove fa male e da che lato, e ripete un semplice test ogni 14\u00A0giorni: sollevamenti sulle punte, tenuta dell’arco, equilibrio su una gamba e confronto tra sinistra e destra.',
    more: [
      'Scegli 3, 5 o 7\u00A0giorni a settimana e sessioni da 3, 5 o 10\u00A0minuti. Prima di ogni sessione dai un voto a come senti i piedi, e il piano si adatta. Walkito non fa diagnosi, quindi fai controllare prima un piede piatto rigido, da un lato solo o doloroso.',
    ],
    cta: 'Inizia con una sessione da 3\u00A0minuti.',
  },
  related: ['hubFlatFeet', 'flatFeet', 'pttd'],
  crumb: 'Test del piede piatto',
  campaign: 'guide-flat-feet-test-it',
};
