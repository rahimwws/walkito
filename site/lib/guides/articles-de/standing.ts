import { CITE } from '@/lib/citations';
import { PROGRAM } from '@/lib/site';

import type { Guide } from '../types';

/*
 * Translated from `articles/standing.ts`, written around the German queries
 * «Fußschmerzen vom Stehen», «Füße tun weh nach langem Stehen», «Schmerzen
 * Fußsohle Stehen». Informal «du». Numbers, doses and grades identical to
 * the English page.
 */

const or = (xs: readonly number[]) =>
  `${xs.slice(0, -1).join(', ')} oder ${xs[xs.length - 1]}`;
const DAYS = or(PROGRAM.daysPerWeek);
const MINUTES = or(PROGRAM.sessionMinutes);

export const STANDING_DE: Guide = {
  lang: 'de',
  page: 'standing',
  published: '2026-10-08',
  updated: '2026-10-08',
  title: 'Fußschmerzen vom Stehen: warum und was hilft',
  description:
    'Warum die Füße nach langem Stehen wehtun, was hilft (Wadendehnung, Krafttraining, Kompressionsstrümpfe) und wann du zu einer Fachperson gehen solltest.',
  h1: 'Warum tun meine Füße nach einem Tag im Stehen weh?',
  lede:
    'Am Ende einer langen Schicht tun deine Füße weh. Das Gewölbe schmerzt, die Ferse ist wund, und die Beine fühlen sich schwer an. Stundenlanges Stehen auf hartem Boden belastet immer wieder dieselben Gewebe, ohne die Pumpwirkung, die das Gehen deinen Waden und Venen gibt. Dehnen von Wade und Plantarfaszie und etwas Kraftaufbau in der Wade zielen auf die Gewebe, die am meisten aushalten müssen.',
  intro: [
    'Nicht jeder Fußschmerz vom Stehen ist eine Plantarfasziitis, aber beides überschneidet sich. Eine Fall-Kontroll-Studie von 2003 mit 50\u00A0Personen mit Plantarfasziitis und 100\u00A0passenden Kontrollen fand, dass Stehen über den größten Teil des Arbeitstags die Chance auf eine Plantarfasziitis um das 3,6-Fache erhöhte. Eine eingeschränkte Beweglichkeit im Sprunggelenk war ein noch stärkerer Risikofaktor, mit einer 23,3-fachen Chance. Die Übungen, die bei beidem helfen, sind weitgehend dieselben: Dehnungen für Wade und Plantarfaszie plus Krafttraining für die Wade.',
  ],
  toc: true,
  takeaways: [
    'Eine Übersichtsarbeit von 2015 zur arbeitsmedizinischen Forschung fand langes Stehen bei der Arbeit verbunden mit Beschwerden am Bewegungsapparat, Ermüdung und Beinschmerzen. Bodenmatten, Kompressionsstrümpfe und stützende Schuhe gehörten zu den Maßnahmen mit Belegen (Waters und Dick, 2015).',
    'Stehen über den größten Teil des Arbeitstags erhöhte die Chance auf eine Plantarfasziitis in einer Fall-Kontroll-Studie mit 50\u00A0Fällen und 100\u00A0Kontrollen um das 3,6-Fache. Eine eingeschränkte Beweglichkeit im Sprunggelenk erhöhte sie um das 23,3-Fache (Riddle und Kollegen, 2003).',
    'In einer Parallelgruppen-Studie mit 40\u00A0Sicherheitskräften, die zufällig normalen Socken oder einer von zwei Gruppen mit Kompressionsstrümpfen zugeteilt wurden, verhinderten Strümpfe mit 15-20\u00A0mmHg und mit 20-30\u00A0mmHg den Anstieg der Beschwerden in Fuß und Bein, der mit normalen Socken in 12-Stunden-Schichten im Stehen auftrat (Garcia und Kollegen, 2023).',
    'Die Leitlinie von 2023 zu Fersenschmerzen gibt dem Dehnen von Plantarfaszie und Wade ihre beste Bewertung, A, und Krafttraining ein B.',
  ],
  sections: [
    {
      h2: 'Warum tun die Füße nach einem Tag im Stehen weh?',
      keyFact: 'In einer Fall-Kontroll-Studie von 2003 erhöhte eine eingeschränkte Beweglichkeit im Sprunggelenk die Chance auf eine Plantarfasziitis um das 23,3-Fache, der stärkste gefundene Risikofaktor, und Stehen über den größten Teil des Arbeitstags um das 3,6-Fache (Riddle und Kollegen, 2003).',
      paragraphs: [
        'Die Füße tun vom Stehen weh, weil ruhiges Stehen Plantarfaszie, Wadenmuskeln und Ferse belastet, ohne ihnen eine Pause zu geben. Beim Gehen pumpt jeder Schritt Blut aus den Beinen nach oben. Im Stehen fällt diese Pumpe weg, das Blut sammelt sich in den Unterschenkeln, und die Gewebe unter dem Fuß tragen stundenlang dieselbe statische Last.',
        'Eine Übersichtsarbeit von 2015 zur arbeitsmedizinischen Forschung fand langes Stehen verbunden mit Kreuzschmerzen, Beinschmerzen, Beschwerden und Ermüdung in vielen Berufen, in denen man steht. Die Übersicht hielt auch fest, dass Belastung für Herz und Kreislauf und geschwollene Beine mit der Stehdauer zunehmen. Die Autoren forderten klarere Definitionen von „langem Stehen“ in künftigen Studien, weil die Grenze zwischen unbedenklicher und schädlicher Stehzeit von Mensch zu Mensch und von Beruf zu Beruf verschieden ist.',
        'Speziell zu Wade und Faszie fand eine Fall-Kontroll-Studie von 2003 zwei Risikofaktoren, die herausstachen. Eine eingeschränkte Beweglichkeit im Sprunggelenk, also eine verkürzte Wade, war der stärkste einzelne Vorhersagefaktor für Plantarfasziitis, mit einer 23,3-fachen Chance. Stehen über den größten Teil des Arbeitstags erhöhte die Chance um das 3,6-Fache. Beides hängt zusammen: Eine verkürzte Wade hält die Ferse in jeder Minute im Stehen unter mehr Spannung.',
      ],
      cites: [CITE.waters, CITE.riddle],
    },
    {
      h2: 'Welche Übungen helfen bei Fußschmerzen vom Stehen?',
      keyFact: 'Die Leitlinie von 2023 zu Fersenschmerzen bewertet das Dehnen von Plantarfaszie und Wade mit A, ihrer besten Bewertung, und Widerstands- und Krafttraining mit B (Koc und Kollegen, 2023).',
      paragraphs: [
        'Diese Übungen zielen auf die Wade, die Plantarfaszie und die kleinen Muskeln, die das Gewölbe stützen. Es sind die Startdosen von Walkito, keine Verordnung. Wenn dein Schmerz nahe der Ferse sitzt und dem Muster der Plantarfasziitis mit Schmerzen am Morgen folgt, findest du die ausführlichere Übungsliste unter [Übungen und Dehnungen bei Plantarfasziitis](/de/plantarfasziitis-uebungen/). [Wie diese Ratgeber entstehen](/de/ueber-walkito/).',
        'Die Leitlinie von 2023 zu Fersenschmerzen gibt dem Dehnen von Plantarfaszie und Wade ihre beste Bewertung, A. Widerstands- und Krafttraining bekommen ein B. Beide Bewertungen gelten speziell für Plantarfasziitis, nicht für allgemeine Ermüdung vom Stehen, aber die beteiligten Gewebe sind dieselben. Wenn eine Übung deinen Schmerz auf **6/10 oder mehr** bringt, hör für heute auf.',
      ],
      table: {
        head: ['Übung', 'Dosis', 'Wie oft', 'Was du spüren solltest', 'Hör auf, wenn'],
        rows: [
          ['Wadendehnung', '2-mal 30\u00A0Sekunden halten, jedes Bein', 'Die meisten Einheiten', 'Eine Dehnung in der Wade des gestreckten hinteren Beins', 'Der Schmerz 6/10 erreicht'],
          ['Soleusdehnung', '2-mal 30\u00A0Sekunden halten, jedes Bein', 'Die meisten Einheiten', 'Eine Dehnung tief in der Wade, nahe der Ferse', 'Der Schmerz 6/10 erreicht'],
          ['Plantarfaszien-Dehnung', '2-mal 30\u00A0Sekunden halten, jeder Fuß', 'Die meisten Einheiten', 'Eine Dehnung entlang des Gewölbes, nicht in der Wade', 'Der Schmerz 6/10 erreicht'],
          ['Fersenheben beidbeinig', '3\u00A0Sätze à 10, beide Füße', 'Krafttage', 'Die Waden arbeiten, beide Füße teilen sich die Last', 'Der Schmerz 6/10 erreicht'],
          ['Kurzer Fuß im Sitzen', '3\u00A0Sätze à 10, 5\u00A0Sekunden halten, jeder Fuß', 'Krafttage', 'Das Gewölbe hebt sich, die Zehen bleiben locker', 'Der Schmerz 6/10 erreicht'],
          ['Einbeinstand', '3-mal 30\u00A0Sekunden halten, jedes Bein', 'Gleichgewichtstage', 'Fuß und Sprunggelenk machen kleine Korrekturen', 'Der Schmerz 6/10 erreicht'],
          ['Fußrollen', '2\u00A0Minuten', 'Erholungstage', 'Fester Druck unter dem Fuß, nie ein Zusammenzucken', 'Der Schmerz 6/10 erreicht'],
        ],
      },
      exercises: [
        {
          name: 'Wadendehnung',
          evidence: {
            level: 'moderate',
            why: 'Die Leitlinie von 2023 zu Fersenschmerzen bewertet die Wadendehnung bei Plantarfasziitis mit A. Eine verkürzte Wade war in einer Fall-Kontroll-Studie von 2003 der stärkste Risikofaktor.',
          },
          dose: '2-mal 30\u00A0Sekunden halten, jedes Bein',
          often: 'Die meisten Einheiten',
          feel: 'Eine Dehnung in der Wade',
          how: 'Stütz die Hände an einer Wand ab. Das hintere Bein bleibt gestreckt, die Ferse unten und die Hüfte nach vorn. Eine verkürzte Wade zieht den ganzen Tag an der Ferse, deshalb zielt diese Dehnung auf den stärksten einzelnen Risikofaktor aus der Studie von 2003.',
          image: 'Übung: Wadendehnung',
          media: 'calf_stretch_straight',
          caption: 'Wadendehnung: hinteres Bein gestreckt, Ferse unten, Hüfte nach vorn',
          alt: 'Eine Figur lehnt sich an eine Wand, das hintere Bein gestreckt, die Wade ist hervorgehoben',
        },
        {
          name: 'Soleusdehnung',
          evidence: {
            level: 'moderate',
            why: 'Derselbe Mechanismus wie bei der Wadendehnung: Sie zielt auf die Beweglichkeit im Sprunggelenk, den stärksten Risikofaktor für Plantarfasziitis in der Studie von 2003.',
          },
          dose: '2-mal 30\u00A0Sekunden halten, jedes Bein',
          often: 'Die meisten Einheiten',
          feel: 'Eine Dehnung nahe der Ferse',
          how: 'Geh in dieselbe Position an der Wand und beug dann das hintere Knie, bis du die Dehnung tiefer spürst, nahe der Ferse. Der Soleus, der tiefere Wadenmuskel, lässt nur mit gebeugtem Knie los.',
          image: 'Übung: Soleusdehnung',
          media: 'calf_stretch_bent',
          caption: 'Soleusdehnung: Beug das hintere Knie, bis du die Dehnung nahe der Ferse spürst',
          alt: 'Eine Figur in der Dehnung an der Wand mit gebeugtem hinteren Knie, die untere Wade ist hervorgehoben',
        },
        {
          name: 'Plantarfaszien-Dehnung',
          evidence: {
            level: 'moderate',
            why: 'Die Leitlinie von 2023 zu Fersenschmerzen bewertet die Plantarfaszien-Dehnung bei Plantarfasziitis mit A.',
          },
          dose: '2-mal 30\u00A0Sekunden halten, jeder Fuß',
          often: 'Die meisten Einheiten',
          feel: 'Eine Dehnung entlang des Gewölbes',
          how: 'Setz dich hin und leg den Fuß über das andere Knie. Zieh die Zehen nach hinten, bis du die Dehnung entlang des Gewölbes spürst, nicht in der Wade. Wenn deine Ferse gleich am Morgen am schlimmsten ist, mach diese Dehnung, bevor dein Fuß den Boden berührt.',
          image: 'Übung: Plantarfaszien-Dehnung',
          media: 'fascia_stretch',
          caption: 'Plantarfaszien-Dehnung: Zieh die Zehen nach hinten, bis du es im Gewölbe spürst',
          alt: 'Eine Figur zieht die Zehen eines Fußes nach hinten, die Fußsohle ist hervorgehoben',
        },
        {
          name: 'Fersenheben beidbeinig',
          evidence: {
            level: 'moderate',
            why: 'Die Leitlinie von 2023 zu Fersenschmerzen bewertet Krafttraining bei Plantarfasziitis mit B. Nicht speziell bei Ermüdung vom Stehen getestet.',
          },
          dose: '3\u00A0Sätze à 10, beide Füße',
          often: 'Krafttage',
          feel: 'Die Waden arbeiten zusammen',
          how: 'Stell dich auf beide Füße, komm gerade über die großen Zehen hoch und senk dich langsam ab. Beide Füße teilen sich die Last, während die Wade Kraft aufbaut. Halt dich an einer Wand oder einem Geländer fest, wenn du Gleichgewicht brauchst.',
          image: 'Übung: Fersenheben beidbeinig',
          media: 'heel_raise_double',
          caption: 'Fersenheben: gerade über die großen Zehen hoch, dann langsam absenken',
          alt: 'Eine stehende Figur kommt auf die Zehen beider Füße, die Waden sind hervorgehoben',
        },
        {
          name: 'Kurzer Fuß im Sitzen',
          evidence: {
            level: 'early',
            why: 'Eine Übersichtsarbeit von 2024 fand, dass Kurzer-Fuß-Training die Gewölbeform veränderte, aber nicht den Schmerz. In einer Studie von 2023 war es Teil eines Programms, das die Gewölbemaße verbesserte.',
          },
          dose: '3\u00A0Sätze à 10, 5\u00A0Sekunden halten, jeder Fuß',
          often: 'Krafttage',
          feel: 'Das Gewölbe hebt sich, die Zehen bleiben locker',
          how: 'Setz dich hin, der Fuß steht flach auf dem Boden. Zieh den Fußballen Richtung Ferse, sodass sich das Gewölbe hebt, und halte. Roll die Zehen nicht ein. Der kurze Fuß trainiert den kleinen Muskel im Gewölbe, der es über einen langen Tag auf den Beinen oben hält.',
          image: 'Übung: Kurzer Fuß im Sitzen',
          media: 'short_foot_seated',
          caption: 'Kurzer Fuß: Zieh den Fußballen Richtung Ferse, sodass sich das Gewölbe hebt',
          alt: 'Ein Bein im Sitzen, der Fuß auf dem Boden, das Gewölbe ist beim Anheben hervorgehoben',
        },
        {
          name: 'Einbeinstand',
          evidence: {
            level: 'early',
            why: 'Keine Studie speziell zum Stehen. Allgemeines Gleichgewichtstraining für Fuß und Sprunggelenk.',
          },
          dose: '3-mal 30\u00A0Sekunden halten, jedes Bein',
          often: 'Gleichgewichtstage',
          feel: 'Kleine Korrekturen in Fuß und Sprunggelenk',
          how: 'Stell dich auf einen Fuß und schau auf einen festen Punkt. Lass den Fuß wackeln. Das Wackeln ist der Fuß, der das Gleichgewicht hält. Stell dich in die Nähe einer Wand, wenn du eine Absicherung brauchst.',
          image: 'Übung: Einbeinstand',
          media: 'single_leg_hold',
          caption: 'Einbeinstand: Stell dich auf einen Fuß und lass ihn kleine Korrekturen machen',
          alt: 'Eine Figur balanciert auf einem Bein, die Muskeln am Unterschenkel sind hervorgehoben',
        },
        {
          name: 'Fußrollen',
          evidence: {
            level: 'early',
            why: 'In den Studien auf dieser Seite nicht getestet. Für das Wohlgefühl zwischen den Einheiten.',
          },
          dose: '2\u00A0Minuten',
          often: 'Erholungstage',
          feel: 'Fester Druck unter dem Fuß',
          how: 'Setz dich hin und roll die Fußsohle langsam mit festem Druck über einen Massageball. Wenn du zusammenzuckst, nimm Druck raus. Rollen nach einer langen Schicht beruhigt das Gewebe und bringt etwas Erleichterung vor dem nächsten Tag.',
          image: 'Übung: Fußrollen',
          media: 'foot_roll',
          caption: 'Fußrollen: Roll die Sohle langsam mit festem Druck über einen Ball',
          alt: 'Eine sitzende Figur rollt die Sohle eines Fußes über einen Ball, die Fußsohle ist hervorgehoben',
        },
      ],
      cites: [CITE.guideline, CITE.riddle],
    },
    {
      h2: 'Helfen Einlagen oder stützende Schuhe bei Fußschmerzen vom Stehen?',
      paragraphs: [
        'Stützende Schuhe und Schuheinlagen werden bei Fußschmerzen vom Stehen oft empfohlen, und das hat eine gewisse Grundlage, aber die Belege sind dünner als beim Dehnen und Krafttraining. Die Leitlinie von 2023 zu Fersenschmerzen bewertet Einlagen allein mit **B dagegen** für die kurzfristige Schmerzlinderung, die Belege sprechen also eher dagegen, sie als alleinige Maßnahme zu nutzen. Einlagen in Kombination mit anderer Behandlung bekommen ein **C**.',
        'Was die arbeitsmedizinische Übersicht stützt, ist breiter: Bodenmatten, stützende Schuhe und die Möglichkeit, zwischen Sitzen und Stehen zu wechseln, stehen alle auf der Liste der Maßnahmen mit gewissen Belegen dafür, Beschwerden bei Arbeit im Stehen zu verringern. Keine davon hat eine einzelne große Studie im Rücken, so wie die Wadendehnung. Ein vernünftiger Weg: Trag stützende Schuhe, leg eine Matte hin, wenn dein Boden hart ist, und mach das Dehnen und Krafttraining für die Gewebe selbst.',
      ],
      cites: [CITE.guideline, CITE.waters],
    },
    {
      h2: 'Helfen Kompressionsstrümpfe bei Fußschmerzen vom Stehen?',
      keyFact: 'In einer Studie mit 40\u00A0Sicherheitskräften in 12-Stunden-Schichten im Stehen verhinderten Kompressionsstrümpfe mit 15-20\u00A0mmHg und mit 20-30\u00A0mmHg den Anstieg der Beschwerden in Fuß und Bein, der mit normalen Socken auftrat (Garcia und Kollegen, 2023).',
      paragraphs: [
        'Kompressionsstrümpfe haben eine der besser kontrollierten Studien speziell zu Beschwerden vom Stehen. In einer randomisierten Studie mit 40\u00A0Sicherheitskräften in Schichten von etwa 12\u00A0Stunden im Stehen, aufgeteilt in drei Gruppen, blieb in beiden Gruppen mit Kompressionsstrümpfen, 15-20\u00A0mmHg und 20-30\u00A0mmHg, der deutliche Anstieg von Beschwerden, Ermüdung und Schwellung in Fuß und Bein aus, den die Gruppe mit normalen Socken hatte. Viele Teilnehmer sagten, der Strumpf mit dem niedrigeren Druck sei leichter anzuziehen.',
        'Die Studie war klein, nur mit Männern und in einem einzigen Beruf. Aber sie ist eine der wenigen Maßnahmen gegen Beschwerden vom Stehen mit randomisiertem Design, und deshalb steht sie auf dieser Seite vor manchen bekannteren Ratschlägen. Kompressionsstrümpfe ersetzen weder Dehnen noch Krafttraining. Sie helfen, Schwellung und Ermüdung in den Griff zu bekommen, während Wade und Faszie trotzdem ihre eigene Aufmerksamkeit brauchen.',
      ],
      sourceNote:
        'Garcia und Kollegen (2023): Parallelgruppen-Design, 40\u00A0männliche Sicherheitskräfte, zufällig einer von drei Gruppen zugeteilt (normale Socken, 15-20\u00A0mmHg oder 20-30\u00A0mmHg), jede Bedingung von einer anderen Teilgruppe über eine ganze Arbeitsschicht getragen. Beschwerden, Ermüdung und Ödeme vor und nach der Schicht gemessen.',
      cites: [CITE.garcia],
    },
    {
      h2: 'Könnten Fußschmerzen vom Stehen eine Plantarfasziitis, ein Plattfuß oder etwas anderes sein?',
      paragraphs: [
        'Fußschmerzen vom Stehen können allgemeine Ermüdung sein, die mit Ruhe vergeht, oder der Anfang einer bestimmten Erkrankung. Die häufigste ist die Plantarfasziitis: ein stechender Schmerz nahe der Ferse, meist am schlimmsten bei den ersten Schritten nach einer Pause. Wenn deine Ferse morgens am meisten wehtut und dann wieder, nachdem du gesessen hast, deutet dieses Muster auf eine Plantarfasziitis hin, und die Übungen unter [Übungen und Dehnungen bei Plantarfasziitis](/de/plantarfasziitis-uebungen/) sind der ausführlichere Ratgeber.',
        'Wenn sich deine Gewölbe am Ende des Tages flach oder nach innen gekippt anfühlen, zielen die Übungen unter [Übungen bei Plattfuß und abgesunkenem Gewölbe](/de/plattfuss-uebungen/) auf die Muskeln, die das Gewölbe oben halten. Ein rigider Plattfuß, der auch flach bleibt, wenn der Fuß nicht auf dem Boden steht, ist eine Frage der Struktur und braucht eine medizinische Fachperson statt Übungen.',
        'Wenn der Schmerz am Schienbein entlang sitzt statt unter dem Fuß, deutet das auf ein Schienbeinkantensyndrom hin, und [Übungen beim Schienbeinkantensyndrom](/de/schienbeinkantensyndrom-uebungen/) fasst zusammen, was die Forschung dazu sagt. Schmerz hinten an der Ferse, in der Achillessehne, ist ein anderes Problem. Schmerz an der Innenseite des Sprunggelenks kann von der Sehne des Tibialis posterior kommen. Beides wird aus Sicht von Läuferinnen und Läufern in [Fersenschmerzen beim Laufen](/heel-pain-runners/) (auf Englisch) behandelt. Wenn der Schmerz hinten an der Ferse in der Achillessehne sitzt, lies [Übungen bei Achillessehnenentzündung](/de/achillessehnenentzuendung-uebungen/). Wenn du mehr Details zum Fersenheben selbst willst, lies [Wadenheben bei Plantarfasziitis](/de/wadenheben-plantarfasziitis/). Wenn du nicht sicher bist, woher der Schmerz kommt, geh zu einer medizinischen Fachperson, bevor du ihn mit Übungen belastest.',
      ],
    },
    {
      h2: 'Wie lange dauert es, bis sich die Füße in einer langen Schicht besser anfühlen?',
      paragraphs: [
        'Keine Studie beantwortet das direkt für Ermüdung der Füße vom Stehen. Allgemeine Schmerzen und Müdigkeit vom Stehen lassen meist nach ein oder zwei Tagen Ruhe nach. Wenn daraus eine Plantarfasziitis geworden ist, dauert es länger: Eine Übersicht der klinischen Belege berichtet, dass sich etwa 90\u00A0% der Menschen mit Plantarfasziitis mit nicht operativer Behandlung wie Dehnen und Schuheinlagen bessern, oft innerhalb von 3 bis 6\u00A0Monaten.',
        'Was du früher messen kannst, ist, ob die Übungen etwas verändern. Die Beweglichkeit der Wade kann sich nach ein paar Wochen täglichen Dehnens zu verändern beginnen. Wenn du Wadenausdauer und Gleichgewicht alle paar Wochen neu testest, hast du eine Zahl vor Augen statt einer Vermutung, ob es sich anders anfühlt. Die Übungen auf dieser Seite und die unter [Übungen bei Plantarfasziitis](/de/plantarfasziitis-uebungen/) betreffen dieselben Gewebe, wer sie gegen Beschwerden vom Stehen macht, deckt also auch den häufigsten Weg zur Plantarfasziitis ab.',
      ],
      cites: [CITE.latt],
    },
  ],
  faq: [
    {
      q: 'Warum tun meine Füße am Ende einer Schicht im Stehen mehr weh als am Anfang?',
      a: 'Plantarfaszie, Wadenmuskeln und Venen im Unterschenkel vertragen anhaltende, statische Belastung nur begrenzt, und diese Toleranz ist nach Stunden im Stehen aufgebraucht. Beim ruhigen Stehen sammelt die Schwerkraft das Blut in Füßen und Unterschenkeln, was zu den Schmerzen und der Schwellung beiträgt, die sich über eine Schicht aufbauen. Gehpausen helfen, weil die Wadenpumpe das Blut wieder nach oben bewegt.',
      cites: [CITE.waters],
    },
    {
      q: 'Sind Fußschmerzen vom langen Stehen dasselbe wie Plantarfasziitis?',
      a: 'Nicht immer. Allgemeine Schmerzen und Müdigkeit vom Stehen sind häufig und vergehen meist mit Ruhe. Plantarfasziitis ist eine bestimmte Erkrankung mit stechendem Fersenschmerz, oft am schlimmsten bei den ersten Schritten nach einer Pause. Stehen über den größten Teil des Arbeitstags ist ein unabhängiger Risikofaktor für eine Plantarfasziitis, mit einer 3,6-fachen Chance in einer Fall-Kontroll-Studie. Beides hängt also zusammen, ist aber nicht dasselbe.',
      cites: [CITE.riddle],
    },
    {
      q: 'Helfen Kompressionsstrümpfe bei Fußschmerzen vom Stehen?',
      a: 'In einer Studie mit 40\u00A0Sicherheitskräften in 12-Stunden-Schichten im Stehen, die zufällig normalen Socken oder einer von zwei Gruppen mit Kompressionsstrümpfen zugeteilt wurden, blieb mit 15-20\u00A0mmHg und mit 20-30\u00A0mmHg der Anstieg von Beschwerden, Ermüdung und Schwellung in Fuß und Bein aus, der mit normalen Socken auftrat. Das ist eine der wenigen Maßnahmen speziell gegen Beschwerden vom Stehen mit einer kontrollierten Studie, auch wenn die Studie klein war und nur Männer einschloss.',
      cites: [CITE.garcia],
    },
    {
      q: 'Ist es normal, dass die Füße nach einer 8- oder 12-Stunden-Schicht im Stehen wehtun?',
      a: 'Etwas Ermüdung und Schmerzen nach einer langen Schicht im Stehen sind häufig und passen zu dem, was die arbeitsmedizinische Forschung berichtet. Eine Übersichtsarbeit von 2015 fand langes Stehen in vielen Berufen verbunden mit Beschwerden am Bewegungsapparat und Ermüdung. Häufig heißt aber nicht, dass du es auf Dauer ignorieren solltest: Dieselbe Übersicht hält fest, dass Bodenmatten, Kompressionsstrümpfe und bessere Schuhe diese Folgen messbar verringern.',
      cites: [CITE.waters],
    },
    {
      q: 'Was sollte ich bei Fußschmerzen vom Stehen als Erstes ausprobieren?',
      a: 'Unter den Selbsthilfe-Optionen auf dieser Seite hat das Dehnen von Wade und Plantarfaszie die beste Bewertung (A) in der Leitlinie von 2023 zu Fersenschmerzen, speziell für Fersenschmerzen, und Kompressionsstrümpfe haben die stärkste kontrollierte Studie zu Beschwerden vom Stehen. Mit täglicher Wadendehnung anzufangen und in der nächsten langen Schicht Kompressionsstrümpfe auszuprobieren, deckt beides ab.',
      cites: [CITE.guideline, CITE.garcia],
    },
    {
      q: 'Wie lange am Stück stehen ist zu lange?',
      a: 'Eine einzelne getestete sichere Grenze gibt es nicht. Die arbeitsmedizinische Forschung findet, dass Beschwerden, Ermüdung und Schwellung zunehmen, je länger eine Schicht im Stehen dauert, am deutlichsten bei Schichten von 8 bis 12\u00A0Stunden. Wie gut es geht, hängt mehr von Bewegung ab als von einer Stundenzahl: Kurze Pausen im Sitzen oder Gehen etwa jede Stunde helfen, die statische Last auszugleichen, die das Stehen auf deine Füße bringt.',
      cites: [CITE.waters],
    },
    {
      q: 'Wie kann ich 10\u00A0Stunden stehen, ohne dass die Füße wehtun?',
      a: 'Es gibt keinen einzelnen Trick, der die Schmerzen in einer 10-Stunden-Schicht wegnimmt, aber die Kombination hilft am meisten: Trag gedämpfte, stützende Schuhe, leg auf hartem Boden eine Stehmatte hin, mach jede Stunde eine kurze Gehpause, damit der Kreislauf wieder in Gang kommt, und dehn täglich Wade und Plantarfaszie. Kompressionsstrümpfe verringerten in einer Studie mit Sicherheitskräften in langen Schichten Beschwerden und Schwellung.',
      cites: [CITE.garcia, CITE.waters],
    },
  ],
  redFlags: {
    h2: 'Geh zuerst zu einer medizinischen Fachperson, wenn',
    bullets: [
      'der Schmerz nach einer Verletzung oder einem Sturz angefangen hat',
      'du den Fuß nicht belasten kannst oder hinkst',
      'Taubheit, Kribbeln, Brennen, Schwellung oder Wärme dazukommen',
      'die Ferse oder der Fuß gerötet ist oder du Fieber hast oder dich krank fühlst',
      'der Schmerz dich nachts weckt',
      'der Schmerz stechend ist oder schlimmer wird, obwohl du die Belastung verringerst',
      'der Schmerz auf einen genauen Punkt begrenzt ist und bei Aktivität zunimmt, was eher zum Muster eines Ermüdungsbruchs passen kann als zu Ermüdung vom Stehen',
      'ein Bein oder ein Fuß plötzlich angeschwollen ist und wehtut, gerötet oder warm ist',
      'du Diabetes, weniger Gefühl in den Füßen oder eine schlechte Durchblutung hast',
      'der Schmerz nach mehreren Wochen mit weniger Belastung, besseren Schuhen und den Übungen auf dieser Seite nicht nachgelassen hat',
    ],
  },
  program: {
    h2: 'Als Plan umsetzen',
    text: `Du musst dir Reihenfolge, Dosis und den Zeitpunkt für die schwerere Variante nicht selbst überlegen. Walkito baut einen Plan, Woche für Woche, rund um ein Ziel. Wenn deine Fußschmerzen vom Stehen morgens am schlimmsten sind, ist das erste Ziel dasselbe wie bei Fersenschmerzen: Morgenschmerz bei oder unter 1/10 an ${PROGRAM.painFreeDays}\u00A0Tagen am Stück. Wenn deine Gewölbe auch flach sind, hat das Gewölbe sein eigenes Ziel und eigene Übungen.`,
    more: [
      `Du wählst ${DAYS} Tage pro Woche und Einheiten von ${MINUTES}\u00A0Minuten. Alle ${PROGRAM.testEveryDays}\u00A0Tage (alle ${PROGRAM.testEveryDaysAfterGoal}, sobald dein erstes Ziel erreicht ist) prüft ein kurzer Test Wadenausdauer, Gewölbehalten und Gleichgewicht, sodass du siehst, ob die Arbeit etwas bringt.`,
      'Walkito ist ein Übungsprogramm. Es stellt keine Diagnose und ersetzt keine medizinische Fachperson. Wenn der Schmerz stechend ist, schlimmer wird oder dich nachts wach hält, geh zuerst zu einer medizinischen Fachperson.',
    ],
    cta: `Fang mit ${PROGRAM.sessionMinutes[0]}\u00A0Minuten am Tag an.`,
  },
  crumb: 'Fußschmerzen vom Stehen',
  campaign: 'guide-standing-de',
};
