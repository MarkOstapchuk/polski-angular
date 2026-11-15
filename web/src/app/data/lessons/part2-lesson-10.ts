import { ActivityKind, choice, Lesson, typed } from '../lesson-types';

const source = (exercise: number) => ({
  sourceExerciseId: `WB2-L10-E${String(exercise).padStart(2, '0')}`,
  sourceLabel: `Zeszyt ćwiczeń · część 2 · lekcja 10 · ćwiczenie ${exercise}`,
});
const activity = (exercise: number, title: string, instruction: string, items: ReturnType<typeof typed>[], kind = ActivityKind.Typed) => ({
  id: `p2-l10-e${String(exercise).padStart(2, '0')}`,
  ...source(exercise), kind, title, instruction, items,
});

export const LESSON_36: Lesson = {
  id: 36,
  title: 'Kocham cię, Polsko!',
  subtitle: 'Opisujemy dom, położenie i miejsca w Polsce',
  topic: 'Dom · miejscownik · miejsca i regiony',
  pages: 'Ćwiczenia 1–10 · podręcznik 66–71',
  color: 'coral',
  activities: [
    activity(1, 'W kuchni i w domu', 'Wpisz nazwę przedmiotu.', [
      typed('q1', 'Fartuch wisi na ___.', 'lodówce'), typed('q2', 'Na blacie stoją trzy ___.', 'butelki'),
      typed('q3', 'Szczotka do zamiatania stoi przy ___.', 'zmiotce'),
      typed('q4', 'Na podłodze stoją wiklinowe ___.', 'koszyki'),
      typed('q5', 'Przy kuchence stoi ___.', 'stołek'), typed('q6', 'Chochla wisi na ___.', 'krześle'),
      typed('q7', 'Naczynia stoją na półce w ___.', 'szafce'),
      typed('q8', 'Torba z zakupami stoi na ___.', 'parapecie'),
      typed('q9', 'Na stole leży ___.', 'obrus'), typed('q10', 'Jabłka leżą na ___.', 'talerzu'),
    ]),
    activity(2, 'Gdzie leżą rzeczy?', 'Uzupełnij zdania formą miejscownika.', [
      typed('q1', 'Deska do prasowania jest przy ___.', 'krześle'),
      typed('q2', 'Żelazko stoi na ___.', 'desce do prasowania'),
      typed('q3', 'Czapka wisi na ___.', 'lampie'), typed('q4', 'Piłka jest przy ___.', 'sofie'),
      typed('q5', 'Obraz wisi na ___.', 'ścianie'), typed('q6', 'Na podłodze leży ___.', 'dywan'),
      typed('q7', 'Jedna poduszka leży na ___.', 'fotelu'), typed('q8', 'Druga poduszka leży na ___.', 'podłodze'),
      typed('q9', 'Palma stoi w ___.', 'rogu'), typed('q10', 'Między fotelem a sofą stoi ___.', 'stolik kawowy'),
    ]),
    activity(3, 'Przyimki w, na, o', 'Wpisz właściwy przyimek.', [
      ...[
        ['___ mieszkaniu Javiera jest bałagan.', 'W'], ['___ tym zdaniu są dwa błędy.', 'W'],
        ['Spotkali się ___ obcokrajowcami.', 'z'], ['___ tamtym przedstawieniu grał Tadeusz Kantor.', 'W'],
        ['Pani Karina ma plamę ___ ubraniu.', 'na'], ['Pani Krystyna jest najlepsza ___ pakowaniu rzeczy.', 'w'],
        ['Negatywne artykuły ___ palaniu się w solarium.', 'o'], ['Proszę pomóc mi ___ szukaniu torebki.', 'w'],
        ['Nigdy ___ życiu nie chciałam pracować w szkole.', 'w'],
        ['Anonimowi alkoholicy uczą się mówić ___ swoim piciu.', 'o'],
        ['Kto jest ___ tym zdjęciu?', 'na'],
      ].map(([prompt, answer], i) => typed(`q${i + 1}`, prompt, answer)),
    ]),
    activity(4, 'Gdzie mieszkają tukany?', 'Uzupełnij zdania formami miejscownika.', [
      typed('q1', 'Tukany mieszkają ___ . (Ameryka Południowa)', 'w Ameryce Południowej'),
      typed('q2', 'Żyją też ___ . (Ameryka Środkowa)', 'w Ameryce Środkowej'),
      typed('q3', 'Można je spotkać ___ . (Meksyk)', 'w Meksyku'),
      typed('q4', 'Występują ___ . (Boliwia, Kolumbia, Paragwaj)', 'w Boliwii, Kolumbii i Paragwaju'),
      typed('q5', 'Nie mieszkają ___ . (Arktyka, Antarktyda)', 'w Arktyce ani na Antarktydzie'),
      typed('q6', 'Żyją ___ . (Wenezuela, północna Argentyna)', 'w Wenezueli i północnej Argentynie'),
      typed('q7', 'Nie spotkamy ich ___ . (Ameryka Północna, Europa)', 'w Ameryce Północnej ani w Europie'),
      typed('q8', 'Nie żyją też ___ . (Azja, Afryka, Australia)', 'w Azji, Afryce ani Australii'),
    ]),
    activity(5, 'Co pasuje do opisu pokoju?', 'Wybierz poprawną formę.', [
      choice('q1', 'Pokój ma tylko ___ okno.', 'jedno', ['jedna', 'jeden', 'jedno']),
      choice('q2', 'Jest tam balkon ___ na podwórko.', 'z widokiem', ['z widokiem', 'widoku', 'widokami']),
      choice('q3', 'Balkon jest ___ drzwi.', 'na wprost', ['prosto', 'na wprost', 'na wyprost']),
      choice('q4', '___ stoi stare metalowe łóżko.', 'W rogu', ['Na rogu', 'Do rogu', 'W rogu']),
      choice('q5', 'Na parapecie ___ dwa kaktusy.', 'stoją', ['stoją', 'leżą', 'siedzą']),
      choice('q6', 'Na ścianie nad łóżkiem ___ plakat.', 'wisi', ['zwisa', 'wisi', 'wiesza']),
      choice('q7', 'Szafy lepiej nie ___ .', 'otwierać', ['otwórz', 'otworzyć', 'otwierać']),
      choice('q8', 'Na szafie są kartony ___.', 'właściciela', ['właściciela', 'sąsiada', 'kolegi']),
      choice('q9', '___ pokoju leży dywan.', 'Na środku', ['Na środek', 'Na środku', 'W środę']),
      choice('q10', '___ łóżka stoi szafa.', 'Naprzeciwko', ['Na przeciwko', 'Naprzeciwko', 'Przeciw']),
    ], ActivityKind.Choice),
    activity(6, 'Co pasuje?', 'Wybierz właściwe dokończenie.', [
      choice('q1', 'W sypialni…', 'śpię', ['śpię', 'spaceruję', 'spóźniam się']),
      choice('q2', 'Drewniany znaczy…', 'z drewna', ['z drzwiami', 'z drewna', 'wśród drzew']),
      choice('q3', 'Przepiękny to…', 'bardzo ładny', ['dość ładny', 'nie za ładny', 'bardzo ładny']),
      choice('q4', 'Szlakiem pieszym nie wolno…', 'jeździć konno', ['spacerować', 'jeździć konno', 'wędrować']),
      choice('q5', 'Wyposażony to…', 'ze sprzętami AGD', ['ze sprzętami AGD', 'nowoczesny', 'z pełną lodówką']),
      choice('q6', 'Na zewnątrz znaczy…', 'poza domem', ['po domu', 'poza domem', 'w domu']),
      choice('q7', 'Wybrać się, czyli…', 'pojechać', ['zdecydować', 'wynająć', 'pojechać']),
      choice('q8', 'W karczmie można…', 'jeść i pić', ['gotować', 'jeść i pić', 'wynająć auto']),
    ], ActivityKind.Choice),
    activity(7, 'Oferta wypoczynku', 'Uzupełnij tekst słownictwem z oferty turystycznej.', [
      typed('q1', 'Pensjonat leży nad malowniczym ___.', 'jeziorem'),
      typed('q2', 'W pobliżu przebiega pieszy ___.', 'szlak'),
      typed('q3', 'W okolicy można zwiedzić ___.', 'zabytki'),
      typed('q4', 'W pobliżu znajdują się miejsca pamięci ___.', 'wojny'),
      typed('q5', 'Goście mieszkają w drewnianych ___.', 'domkach'),
      typed('q6', 'Każdy domek jest wyposażony w ___.', 'kominek'),
      typed('q7', 'Na terenie ośrodka jest miejsce na ___.', 'ognisko'),
      typed('q8', 'Działa tu ___ sprzętu sportowego.', 'wypożyczalnia'),
      typed('q9', 'Goście mogą korzystać z boiska i placu ___.', 'zabaw'),
      typed('q10', 'Dostępny jest ___ internet.', 'bezprzewodowy'),
    ]),
    activity(8, 'Regiony Polski', 'Zapisz nazwy regionów z nagrania.', [
      ...['Kaszuby', 'Suwalszczyzna', 'Tatry', 'Kazimierz Dolny', 'Bieszczady', 'Sudety'].map((x, i) => typed(`q${i + 1}`, `${i + 1}.`, x)),
    ]),
    activity(9, 'Zwracamy się do kogoś', 'Utwórz wołacz.', [
      ...[
        ['drogi tata', 'Drogi Tato!'], ['kochana żona', 'Kochana Żono!'], ['stary przyjaciel', 'Stary Przyjacielu!'],
        ['szanowny pan dyrektor', 'Szanowny Panie Dyrektorze!'], ['najdroższa babcia', 'Najdroższa Babciu!'],
        ['najukochańsza córeczka', 'Najukochańsza Córeczko!'], ['kochany dziadek', 'Kochany Dziadku!'],
        ['droga kuzynka', 'Droga Kuzynko!'], ['mój mały syneczek', 'Mój Mały Syneczku!'], ['pan generał', 'Panie Generale!'],
      ].map(([prompt, answer], i) => typed(`q${i + 1}`, prompt, answer)),
    ]),
    activity(10, 'List z wakacji', 'Uzupełnij list właściwymi formami.', [
      typed('q1', 'Tak jak obiecałam, ___ kartkę. (wysłać)', 'wysyłam'),
      typed('q2', 'Mieszkam na malutkim ___ Narodowym. (kemping)', 'kempingu'),
      typed('q3', 'Ośrodek jest nad ___. (jezioro)', 'jeziorem'),
      typed('q4', 'Codziennie pływam w ___ wodzie. (czysta)', 'czystej'),
      typed('q5', 'Odpoczywam blisko ___. (natura)', 'natury'),
      typed('q6', 'Chodzę po lesie i ___ grzyby. (zbierać)', 'zbieram'),
    ]),
  ],
};
