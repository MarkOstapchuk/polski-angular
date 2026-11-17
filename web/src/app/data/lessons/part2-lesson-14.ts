import { ActivityKind, choice, Lesson, typed } from '../lesson-types';

const source = (exercise: number) => ({
  sourceExerciseId: `WB2-L14-E${String(exercise).padStart(2, '0')}`,
  sourceLabel: `Zeszyt ćwiczeń · część 2 · lekcja 14 · ćwiczenie ${exercise}`,
});
const activity = (exercise: number, title: string, instruction: string, items: ReturnType<typeof typed>[], kind = ActivityKind.Typed, idSuffix = '') => ({
  id: `p2-l14-e${String(exercise).padStart(2, '0')}${idSuffix}`,
  ...source(exercise), kind, title, instruction,
  items: kind === ActivityKind.Match || kind === ActivityKind.Choice
    ? items.map((item) => choice(item.id, item.prompt, item.accepted, [...new Set(items.flatMap(({ accepted }) => accepted))]))
    : items,
});

export const LESSON_40: Lesson = {
  id: 40,
  title: 'Zaduszki',
  subtitle: 'Mówimy o pamięci, cmentarzu i dziełach sztuki',
  topic: 'Pamięć o zmarłych · kultura · zaimki osobowe i zwrotne',
  pages: 'Ćwiczenia 1–17 · podręcznik 92–99',
  color: 'blue',
  activities: [
    activity(1, 'Na cmentarzu', 'Wpisz nazwę miejsca, przedmiotu lub elementu pomnika.', [
      ...['cmentarz', 'znicz', 'wieniec', 'grób', 'krzyż', 'chryzantemy', 'pomnik', 'kaplica', 'anioł', 'rzeźba'].map((x, i) => typed(`q${i + 1}`, `Hasło ${i + 1}`, x)),
    ]),
    activity(2, 'Pamiętamy o zmarłych', 'Wybierz wyrażenie pasujące do czasownika lub rzeczownika.', [
      typed('q1', 'obchodzić', 'święto'), typed('q2', 'zapalać', 'znicze'),
      typed('q3', 'wstawiać kwiaty', 'do wazonu'), typed('q4', 'zamiatać', 'groby'),
      typed('q5', 'modlić się', 'za zmarłych'), typed('q6', 'pamiętać', 'o zmarłych'),
      typed('q7', 'wspominać', 'zmarłych'), typed('q8', 'dekorować', 'groby'),
      typed('q9', 'kultywować', 'tradycje'), typed('q10', 'uroczystość', 'religijna'),
      typed('q11', 'święto', 'Wszystkich Świętych'), typed('q12', 'miejsce', 'pamięci narodowej'),
      typed('q13', 'grób', 'rodzinny'), typed('q14', 'składać kwiaty', 'pod pomnikiem'),
    ], ActivityKind.Choice, '-choice'),
    activity(3, 'Cmentarz Salwatorski', 'Ułóż fragmenty w kolejności i zapisz tekst.', [
      typed('q1', 'Początek opisu', 'Cmentarz Salwatorski to niewielka, ale ważna nekropolia Krakowa.'),
      typed('q2', 'Położenie', 'Położona jest w malowniczym zakątku, niemal u stóp Kopca Kościuszki.'),
      typed('q3', 'Aleja i widok', 'Leży przy popularnej wśród Krakowian alei spacerowej, a z niej roztacza się panorama na miasto i okolice.'),
      typed('q4', 'Znani pochowani', 'Cmentarz jest miejscem spoczynku wielu krakowskich artystów, pisarzy i naukowców.'),
      typed('q5', 'Stanisław Lem', 'Wśród znanych nazwisk wyróżnia się Stanisław Lem, jeden z najbardziej znanych polskich pisarzy.'),
    ]),
    activity(4, 'Rzeźba Tadeusza Kantora', 'Posłuchaj dialogu i uzupełnij słowa.', [
      typed('q1', 'To ___ rzeźba.', 'jaka'), typed('q2', 'To ___ chłopiec z „Umarłej klasy”.', 'bosy'),
      typed('q3', 'Na pomniku widać ___ i postać chłopca.', 'krzyż'),
      typed('q4', 'To ___ Tadeusza Kantora.', 'dzieło'),
      typed('q5', 'Ta ___ nawiązuje do jego spektaklu.', 'kompozycja'),
      typed('q6', 'Był twórcą ___ Cricot 2.', 'Teatru'),
      typed('q7', 'Artysta ustawił rzeźbę na matki ___.', 'grobie'),
    ]),
    activity(5, 'Co nie pasuje?', 'Wybierz słowo o innym znaczeniu.', [
      choice('q1', 'wolno', 'warto', ['można', 'da się', 'warto']),
      choice('q2', 'zakazany', 'nakazany', ['zabroniony', 'nakazany', 'niedozwolony']),
      choice('q3', 'pozwolić', 'zwolnić', ['dać możliwość', 'zezwolić', 'zwolnić']),
      choice('q4', 'pasjonat', 'protektor', ['protektor', 'miłośnik', 'wielbiciel']),
      choice('q5', 'zjazd', 'przejazd', ['spotkanie', 'przejazd', 'zgromadzenie się']),
      choice('q6', 'niezwykły', 'nienadzwyczajny', ['niesamowity', 'niepowtarzalny', 'nienadzwyczajny']),
      choice('q7', 'zatłoczony', 'zajęty', ['zajęty', 'pełen ludzi', 'przepełniony']),
      choice('q8', 'ponury', 'poważny', ['przygnębiający', 'poważny', 'niewesoły']),
    ], ActivityKind.Choice),
    activity(6, 'Słownictwo o protestach', 'Uzupełnij zdania wyrazami z listy.', [
      typed('q1', 'Literaci walczyli z ___ cenzurą.', 'wszechobecną'),
      typed('q2', 'Myślą ___ tegorocznego seminarium jest walka z rakiem.', 'przewodnią'),
      typed('q3', 'Uczniowie przygotowali ___ sztuki Mrożka.', 'inscenizację'),
      typed('q4', 'Strajkom w kopalniach towarzyszyły ___ na ulicach.', 'demonstracje'),
      typed('q5', 'W czasach komunizmu ludzi męczyło ___ władz.', 'zakłamanie'),
      typed('q6', 'Pijany kierowca wjechał na kobietę — to był ___ widok.', 'straszny'),
      typed('q7', 'Manifestacja to ___ na życie w takich warunkach.', 'niezgoda'),
      typed('q8', 'Po ostatnich podwyżkach cen ludzie znów ___.', 'wyszli na ulicę'),
      typed('q9', 'Hasła wolnościowe miały ___ cały naród.', 'zagrzewać do walki'),
      typed('q10', '„___, ale nie pamiętam co.”', 'Coś mi to mówi'),
      typed('q11', 'Uczymy się do egzaminu, teraz ___ gramatykę historyczną.', 'mamy na tapecie'),
      typed('q12', 'W wielu krajach ludzie wciąż muszą walczyć o ___.', 'wolność słowa'),
    ]),
    activity(7, 'Przyimki w wyrażeniach', 'Uzupełnij zdanie właściwym przyimkiem.', [
      typed('q1', 'Niezgoda ___ rząd.', 'na'), typed('q2', 'Protest ___ podwyżkom.', 'wobec'),
      typed('q3', 'Wyreżyserowany ___ znanego artystę.', 'przez'),
      typed('q4', 'Brać udział ___ demonstracji.', 'w'),
      typed('q5', 'Zagrzewać ___ walki.', 'do'),
    ]),
    activity(8, 'Rzeczownik czy czasownik?', 'Podaj brakującą formę wyrazu.', [
      ...[
        ['czasownik: protestować', 'protest'], ['czasownik: rządzić', 'rząd'],
        ['czasownik: inscenizować', 'inscenizacja'], ['rzeczownik: demonstracja', 'demonstrować'],
        ['rzeczownik: manifestacja', 'manifestować'], ['rzeczownik: zakłamanie', 'kłamać'],
        ['rzeczownik: niezgoda', 'nie zgadzać się'], ['rzeczownik: niepokój', 'niepokoić się'],
        ['rzeczownik: dominacja', 'dominować'],
      ].map(([noun, verb], i) => typed(`q${i + 1}`, noun, verb)),
    ]),
    activity(9, 'Wspomnienia o historii', 'Uzupełnij wypowiedź słowami z nagrania.', [
      typed('q1', 'Prawdę ___, niewiele wiedziałem o polskiej historii.', 'mówiąc'),
      typed('q2', 'Nie interesowałem się ___ kraju.', 'przeszłością'),
      typed('q3', 'Uczyłem się języka ___ względu na rodzinę żony.', 'ze'),
      typed('q4', '___ dwa filmy o historii Polski.', 'Obejrzałem'),
      typed('q5', 'Zobaczyłem fragment peerelowskiej ___.', 'rzeczywistości'),
      typed('q6', 'Czarne momenty ___ grudnia 1970 roku.', 'z'),
      typed('q7', 'Bezwzględność władzy, która każe strzelać do ___.', 'robotników'),
      typed('q8', 'Zrozumiałem siłę, która tkwi w ___ ludzkiej.', 'solidarności'),
    ]),
    activity(10, 'O co protestuje społeczeństwo?', 'Wpisz rzeczownik w odpowiedniej formie.', [
      typed('q1', 'brak + wolność', 'brak wolności'), typed('q2', 'hipokryzja + władza', 'hipokryzja władzy'),
      typed('q3', 'ograniczanie + swobody', 'ograniczanie swobód'), typed('q4', 'cenzura', 'cenzura'),
      typed('q5', 'nieprzestrzeganie + prawo', 'nieprzestrzeganie prawa'),
      typed('q6', 'podwyżka + ceny', 'podwyżki cen'), typed('q7', 'puste półki', 'puste półki'),
    ]),
    activity(11, 'Zaimki po przyimkach', 'Wpisz właściwą formę zaimka.', [
      ...[
        ['Byli przeciwko tym decyzjom. → Byli przeciwko ___.', 'nim'],
        ['Stoję przy dziecku. → Stoję przy ___.', 'nim'],
        ['Według ojca powinna to zrobić. → Według ___ powinna to zrobić.', 'niego'],
        ['Zrobił to wbrew matce. → Zrobił to wbrew ___.', 'niej'],
        ['Będę tam przed tobą i Ewą. → Będę tam przed ___.', 'wami'],
        ['Zakochała się w Marcinie. → Zakochała się w ___.', 'nim'],
        ['To jest ode mnie i babci. → To jest od ___.', 'nas'],
        ['Zepsuło się przez Elę i Basię. → Zepsuło się przez ___.', 'nie'],
        ['Nie pójdę bez brata i siostry. → Nie pójdę bez ___.', 'nich'],
        ['Pójdziesz z Zosią i ze mną. → Pójdziesz z ___.', 'nami'],
      ].map(([prompt, answer], i) => typed(`q${i + 1}`, prompt, answer)),
    ]),
    activity(12, 'Popraw zaimki', 'Zamień błędną formę na poprawną.', [
      typed('q1', 'Bądź uprzejmy wobec ja.', 'Bądź uprzejmy wobec mnie.'),
      typed('q2', 'Poszliśmy bez jego.', 'Poszliśmy bez niego.'),
      typed('q3', 'To jest od tobie.', 'To jest od ciebie.'),
      typed('q4', 'Rozmawialiśmy o jej.', 'Rozmawialiśmy o niej.'),
      typed('q5', 'Według wami to prawda?', 'Według was to prawda?'),
      typed('q6', 'Zimno ciebie?', 'Zimno ci?'),
      typed('q7', 'Czy to dla im?', 'Czy to dla nich?'),
      typed('q8', 'Czekacie na nami?', 'Czekacie na nas?'),
    ]),
    activity(13, 'O tobie czy o sobie?', 'Uzupełnij zaimek zwrotny lub osobowy.', [
      ...[
        ['Ewa myślała ___ . (o Krysi)', 'o niej'], ['Krysia myślała o ___ . (o Krysi)', 'sobie'],
        ['Jurek i Dorota rozmawiali o ___ . (o Przemku)', 'nim'],
        ['Przemek i Beata rozmawiali o ___ . (o nich)', 'sobie'],
        ['Karol robił to dla ___ . (dla rodziców)', 'nich'],
        ['Karolina robiła to dla ___ . (dla Karoliny)', 'siebie'],
        ['Ania i Rysiek nie chcieli rozmawiać z ___ . (z Krysią)', 'nią'],
        ['Krystyna i Ania nie chciały rozmawiać ze ___ . (z sobą)', 'sobą'],
      ].map(([prompt, answer], i) => typed(`q${i + 1}`, prompt, answer)),
    ]),
    activity(14, 'Siebie czy sobie?', 'Uzupełnij zdanie właściwym zaimkiem.', [
      ...[
        ['Nie mogę ___ z tym poradzić.', 'sobie'], ['Nie rozmawiali ze ___.', 'sobą'],
        ['Oni byli szczerzy wobec ___.', 'siebie'], ['Dziadek zajmował się ___.', 'sobą'],
        ['Nie rób niczego wbrew ___.', 'sobie'], ['Robisz to dla mnie czy dla ___?', 'siebie'],
        ['Byli zakochani w ___.', 'sobie'], ['Jest skoncentrowany na ___.', 'sobie'],
      ].map(([prompt, answer], i) => typed(`q${i + 1}`, prompt, answer)),
    ]),
    activity(15, 'Wyrażenia z zaimkami', 'Dopasuj wyrażenie do znaczenia.', [
      typed('q1', 'brać coś na siebie', 'być za coś odpowiedzialnym'),
      typed('q2', 'wychodzić z siebie', 'bardzo się denerwować'),
      typed('q3', 'być targanym emocjami', 'silnie przeżywać uczucia'),
      typed('q4', 'czas pokaże', 'wszystko wyjaśni się z czasem'),
      typed('q5', 'inwigilować', 'szpiegować, śledzić'),
      typed('q6', 'mam wrażenie', 'wydaje mi się'),
      typed('q7', 'wyłącznie', 'jedynie, tylko'),
      typed('q8', 'dochodzi coś do mnie', 'zaczynam to rozumieć'),
      typed('q9', 'być skoncentrowanym na sobie', 'myśleć głównie o sobie'),
    ], ActivityKind.Match, '-match'),
    activity(16, 'Wypowiedź o wyjeździe', 'Posłuchaj nagrania i uzupełnij brakujące zaimki.', [
      ...['im', 'nimi', 'tobą', 'sobie', 'nami', 'siebie', 'ciebie', 'nas', 'mi', 'mnie', 'ciebie', 'mnie', 'ja', 'ciebie', 'mnie'].map((x, i) => typed(`q${i + 1}`, `Fragment nagrania ${i + 1}`, x)),
    ]),
    activity(17, 'Tryb rozkazujący', 'Wydaj polecenie w odpowiedniej osobie.', [
      typed('q1', 'kupić (ty)', 'Kup'), typed('q2', 'iść (my)', 'Chodźmy'),
      typed('q3', 'przynieść (wy)', 'Przynieście'), typed('q4', 'pozamiatać (ty)', 'Pozamiataj'),
      typed('q5', 'umyć (wy)', 'Umyjcie'), typed('q6', 'zapalić (on)', 'Niech on zapali'),
      typed('q7', 'położyć (ty)', 'Połóż'), typed('q8', 'pomodlić się (my)', 'Pomódlmy się'),
    ]),
  ],
};
