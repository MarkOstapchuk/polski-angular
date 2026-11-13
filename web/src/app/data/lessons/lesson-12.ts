import { choice, Lesson, typed } from '../lesson-types';

export const LESSON_12: Lesson = {
  id: 12,
  title: 'Co robisz w poniedziałek o ósmej?',
  subtitle: 'Plany, godziny i codzienny rozkład dnia',
  topic: 'Zaproszenia · godziny · dzień Pawła',
  pages: 'Ćwiczenia 1–14 · strony 46–49',
  color: 'blue',
  activities: [
    {
      id: 'l12-dialogue-cloze', sourceExerciseId: 'WB-L12-E02', sourceLabel: 'Zeszyt ćwiczeń · ćwiczenie 2',
      kind: 'typed', title: 'Zaproszenie na wystawę',
      instruction: 'Uzupełnij dialog formami podanych słów. Zachowaj polskie znaki.',
      items: [
        typed('q1', 'Angela: Idziemy z ___ (Tom)', 'Tomem'),
        typed('q2', 'Angela: … i ___ (Javier) na wystawę fotografii.', 'Javierem'),
        typed('q3', 'Angela: Czy masz ochotę pójść z ___ (my)?', 'nami'),
        typed('q4', 'Mami: Oczywiście! ___ (ty / wiedzieć), że interesuję się…', 'Wiesz'),
        typed('q5', 'Mami: … interesuję się ___ (fotografia).', 'fotografią'),
        typed('q6', 'Mami: Kiedy ___ (wy / iść)?', 'idziecie'),
        typed('q7', 'Angela: Dziś po ___ (południe).', 'południu'),
        typed('q8', 'Mami: Czy Karolina ___ (móc) pójść z nami?', 'może'),
        typed('q9', 'Mami: Czy Karolina może pójść z ___ (my)?', 'nami'),
        typed('q10', 'Mami: A Uwe, co z ___ (on)?', 'nim'),
        typed('q11', 'Angela: Jak zwykle – ___ (on / mówić), że to dobry pomysł.', 'mówi'),
        typed('q12', 'Angela: … a potem nie ma ___ (czas).', 'czasu'),
        typed('q13', 'Mami: Gdzie się ___ (my / spotykać)?', 'spotykamy'),
      ],
    },
    {
      id: 'l12-where-going', sourceExerciseId: 'WB-L12-E04', sourceLabel: 'Zeszyt ćwiczeń · ćwiczenie 4',
      kind: 'choice', title: 'Dokąd idziemy?',
      instruction: 'Połącz miejsce z pasującym celem.',
      items: (() => {
        const o = ['na przedstawienie', 'na wystawę', 'na kawę i lody', 'na koncert muzyki klasycznej', 'na świetną imprezę', 'na drinka', 'na długi spacer', 'na dużą pizzę', 'na ciekawy wykład'];
        return [
          choice('q1', 'do mojego brata', 'na świetną imprezę', o),
          choice('q2', 'do parku Jordana', 'na długi spacer', o),
          choice('q3', 'na uniwersytet Jagielloński', 'na ciekawy wykład', o),
          choice('q4', 'do włoskiej restauracji', 'na dużą pizzę', o),
          choice('q5', 'do Teatru Bagatela', 'na przedstawienie', o),
          choice('q6', 'do małej kawiarni', 'na kawę i lody', o),
          choice('q7', 'do Muzeum Narodowego', 'na wystawę', o),
          choice('q8', 'do filharmonii', 'na koncert muzyki klasycznej', o),
          choice('q9', 'do nowego pubu', 'na drinka', o),
        ];
      })(),
    },
    {
      id: 'l12-what-fits', sourceExerciseId: 'WB-L12-E06', sourceLabel: 'Zeszyt ćwiczeń · ćwiczenie 6',
      kind: 'choice', title: 'Zaproszenie na koncert',
      instruction: 'Wybierz formę, która pasuje do dialogu.',
      items: [
        choice('q1', 'Leszek: Dzień dobry ___ Ewo.', 'pani', ['panią', 'pani']),
        choice('q2', 'Ewa: Dzień dobry panu, co u ciebie ___?', 'słychać', ['ciebie', 'słychać']),
        choice('q3', 'Leszek: Czy ma pani ___ pójść na koncert?', 'ochotę', ['ochoty', 'ochotę']),
        choice('q4', 'Leszek: … pójść ___ koncert?', 'na', ['na', 'do']),
        choice('q5', 'Ewa: ___ filharmonii? Bardzo chętnie. Kiedy?', 'Do', ['Na', 'Do']),
        choice('q6', 'Leszek: Mam bilety ___ jutro.', 'na', ['na', 'do']),
        choice('q7', 'Ewa: Niestety, jutro wieczorem nie ___.', 'mogę', ['może', 'mogę']),
        choice('q8', 'Ewa: Mam ważne ___ spotkanie.', 'rodzinne', ['rodzinne', 'rodzinny']),
        choice('q9', 'Ewa: To prawda, ale ___ raz dziękuję za zaproszenie.', 'jeszcze', ['jeszcze', 'już']),
      ],
    },
    {
      id: 'l12-clock-pictures', sourceExerciseId: 'WB-L12-E07', sourceLabel: 'Zeszyt ćwiczeń · ćwiczenie 7',
      kind: 'choice', title: 'Dopasuj dialog do ilustracji',
      instruction: 'Rysunki: 1 – zegarek cyfrowy, 2 – mały zegar ze wskazówkami, 3 – cyfrowy zegar stołowy.',
      items: [
        choice('q1', 'a) – Uwe, która godzina? – Dwudziesta pierwsza.', 'rysunek 3', ['rysunek 1', 'rysunek 2', 'rysunek 3']),
        choice('q2', 'b) – Angela, o której zwykle jesz lunch? – O pierwszej.', 'rysunek 2', ['rysunek 1', 'rysunek 2', 'rysunek 3']),
        choice('q3', 'c) – Przepraszam, o której jest spektakl? – O osiemnastej.', 'rysunek 1', ['rysunek 1', 'rysunek 2', 'rysunek 3']),
      ],
    },
    {
      id: 'l12-clocks', sourceExerciseId: 'WB-L12-E08', sourceLabel: 'Zeszyt ćwiczeń · ćwiczenie 8',
      kind: 'typed', title: 'O której godzinie?',
      instruction: 'Zapisz godzinę słowami, zgodnie z zegarem (I–V). Zachowaj polskie znaki.',
      items: [
        typed('q1', 'Zegar I · godzina ze „za” (np. za … druga)', 'za pięć pierwsza'),
        typed('q2', 'Zegar II · o której? (o …)', 'o pierwszej'),
        typed('q3', 'Zegar III · pięć … (po …)', 'pięć po pierwszej'),
        typed('q4', 'Zegar IV · o … (wpół do …)', 'o wpół do drugiej'),
        typed('q5', 'Zegar V · przedział czasu (od … do …)', 'od pierwszej do drugiej'),
      ],
    },
    {
      id: 'l12-time-match', sourceExerciseId: 'WB-L12-E09', sourceLabel: 'Zeszyt ćwiczeń · ćwiczenie 9',
      kind: 'choice', title: 'Godziny słowami i cyframi',
      instruction: 'Dopasuj zapis słowny do godziny.',
      items: (() => {
        const o = ['17:15', '6:30', '10:00', '13:45', '12:45', '15:15', '18:30', '12:00', '20:00', '8:45'];
        return [
          choice('q1', 'trzynasta czterdzieści pięć', '13:45', o),
          choice('q2', 'piętnasta piętnaście', '15:15', o),
          choice('q3', 'dwunasta', '12:00', o),
          choice('q4', 'za piętnaście dziewiąta', '8:45', o),
          choice('q5', 'dwudziesta', '20:00', o),
          choice('q6', 'za piętnaście pierwsza', '12:45', o),
          choice('q7', 'wpół do siódmej', '6:30', o),
          choice('q8', 'piętnaście po piątej', '17:15', o),
          choice('q9', 'osiemnasta trzydzieści', '18:30', o),
          choice('q10', 'dziesiąta', '10:00', o),
        ];
      })(),
    },
    {
      id: 'l12-pawel-day', sourceExerciseId: 'WB-L12-E12', sourceLabel: 'Zeszyt ćwiczeń · ćwiczenie 12',
      kind: 'typed', title: 'Dzień Pawła',
      instruction: 'Wpisz czasowniki w 3. osobie liczby pojedynczej (on).',
      items: [
        typed('q1', 'Paweł ___ (pić) mocną kawę.', 'pije'),
        typed('q2', '… i ___ (brać) prysznic.', 'bierze'),
        typed('q3', 'O 10:30 ___ (jeść) śniadanie', 'je'),
        typed('q4', '… i ___ (czytać) gazetę.', 'czyta'),
        typed('q5', 'Potem ___ (myć) zęby,', 'myje'),
        typed('q6', '… i ___ (ubierać) się.', 'ubiera się'),
        typed('q7', 'Zwykle ___ (jeździć) do szkoły tramwajem o 11:45.', 'jeździ'),
        typed('q8', '___ (przychodzić) do szkoły o 12:00.', 'Przychodzi', 'Zacznij wielką literą.'),
        typed('q9', 'Paweł ___ (uczyć) od 12:30 do 15:45.', 'uczy'),
        typed('q10', '___ (jeść) obiad o 16:00.', 'Je'),
        typed('q11', 'Później ___ (przygotowywać) lekcje od 17:15 do 20:30.', 'przygotowuje'),
        typed('q12', 'O 21:00 ___ (chodzić) na piwo ze znajomymi.', 'chodzi'),
        typed('q13', '___ (wracać) do domu o 23:30.', 'Wraca'),
        typed('q14', 'Od 24:00 do 1:00 ___ (sprawdzać) testy.', 'sprawdza'),
        typed('q15', 'Paweł ___ (chodzić) spać o 1:30.', 'chodzi'),
      ],
    },
    {
      id: 'l12-verb-phrases', sourceExerciseId: 'WB-L12-E13', sourceLabel: 'Zeszyt ćwiczeń · ćwiczenie 13',
      kind: 'choice', title: 'Czasownik i dopełnienie',
      instruction: 'Połącz czasownik z pasującym zwrotem.',
      items: (() => {
        const o = ['sałatkę', 'na nartach', 'z żoną', 'w brydża', 'na basen', 'z biura', 'zęby', 'film', 'rano'];
        return [
          choice('q1', 'wstawać', 'rano', o),
          choice('q2', 'rozmawiać', 'z żoną', o),
          choice('q3', 'wychodzić', 'z biura', o),
          choice('q4', 'myć', 'zęby', o),
          choice('q5', 'jeść', 'sałatkę', o),
          choice('q6', 'oglądać', 'film', o),
          choice('q7', 'chodzić', 'na basen', o),
          choice('q8', 'jeździć', 'na nartach', o),
          choice('q9', 'grać', 'w brydża', o),
        ];
      })(),
    },
    {
      id: 'l12-weekdays', sourceExerciseId: 'WB-L12-E14', sourceLabel: 'Zeszyt ćwiczeń · ćwiczenie 14',
      kind: 'typed', title: 'Jaki to dzień?',
      instruction: 'Ułóż litery w nazwę dnia tygodnia.',
      items: [
        typed('q1', 'DZIENIELA', 'niedziela'),
        typed('q2', 'NIEPOŁEKDZIA', 'poniedziałek'),
        typed('q3', 'TEKĄPI', 'piątek'),
        typed('q4', 'TEKWARCZ', 'czwartek'),
        typed('q5', 'KEROTW', 'wtorek'),
        typed('q6', 'BOSOTA', 'sobota'),
      ],
    },
  ],
};
