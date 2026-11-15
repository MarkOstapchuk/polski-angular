import { ActivityKind, choice, Lesson, typed } from '../lesson-types';

const source = (exercise: number) => ({
  sourceExerciseId: `WB2-L11-E${String(exercise).padStart(2, '0')}`,
  sourceLabel: `Zeszyt ćwiczeń · część 2 · lekcja 11 · ćwiczenie ${exercise}`,
});
const activity = (exercise: number, title: string, instruction: string, items: ReturnType<typeof typed>[], kind = ActivityKind.Typed) => ({
  id: `p2-l11-e${String(exercise).padStart(2, '0')}`,
  ...source(exercise), kind, title, instruction, items,
});

export const LESSON_37: Lesson = {
  id: 37,
  title: 'Wejść czy wyjść?',
  subtitle: 'Opowiadamy o drodze, kierunku i powtarzających się czynnościach',
  topic: 'Czasowniki ruchu · przedrostki · dokonaność i niedokonaność',
  pages: 'Ćwiczenia 1–15 · podręcznik 72–77',
  color: 'violet',
  activities: [
    activity(1, 'Dodaj przedrostek', 'Utwórz czasownik ruchu z podanym przedrostkiem.', [
      ...[
        ['do-', 'dochodzić'], ['w-', 'wchodzić'], ['wy-', 'wychodzić'], ['prze-', 'przechodzić'],
        ['roz-', 'rozchodzić się'], ['s-', 'schodzić'], ['pod-', 'podchodzić'], ['przy-', 'przychodzić'],
        ['ob-', 'obchodzić'], ['od-', 'odchodzić'], ['nad-', 'nadchodzić'],
      ].map(([prefix, answer], i) => typed(`q${i + 1}`, `${prefix} + chodzić`, answer)),
    ]),
    activity(2, 'Jaki to czasownik?', 'Dopasuj znaczenie do czasownika z „chodzić”.', [
      ...[
        ['do celu', 'dochodzić'], ['do środka, do domu', 'wchodzić'], ['z domu', 'wychodzić'],
        ['przez plac, przez ulicę', 'przechodzić'], ['ze spotkania do domów', 'rozchodzić się'],
        ['ze schodów', 'schodzić'], ['do stolika, do klienta', 'podchodzić'],
        ['na drugie piętro, pod górę', 'wchodzić'], ['do koleżanki, do babci', 'przychodzić'],
        ['wokół przeszkody lub drzewa', 'obchodzić'], ['od kogoś, od czegoś', 'odchodzić'], ['burza, wiosna', 'nadchodzić'],
      ].map(([prompt, answer], i) => typed(`q${i + 1}`, prompt, answer)),
    ]),
    activity(3, 'Który czasownik pasuje?', 'Wybierz aspekt zgodny z kontekstem.', [
      choice('q1', 'Czy ___ do mnie na moment? (przychodzić / przyjść)', 'przyjdziesz', ['przychodzisz', 'przyjdziesz']),
      choice('q2', 'On często ___ do nas.', 'przychodzi', ['przychodzi', 'przyjdzie']),
      choice('q3', 'Właśnie ___ z domu. (wychodzić / wyjść)', 'wychodzę', ['wychodzę', 'wyjdę']),
      choice('q4', 'Oni często ___ do nas, a dziś też ___.', 'przychodzą; przyjdą', ['przychodzą; przyjdą', 'przyjdą; przychodzą']),
      choice('q5', 'W tym roku wiosna ___.', 'nadchodzi', ['nadchodzi', 'nadejdzie']),
      choice('q6', 'Dziecko nie umie ___ po schodach.', 'schodzić', ['zejść', 'schodzić']),
      choice('q7', 'Czy mogłabyś ___ po schodach?', 'zejść', ['schodzić', 'zejść']),
      choice('q8', 'Nie wolno ___ przez ulicę na czerwonym świetle.', 'przechodzić', ['przechodzić', 'przejść']),
      choice('q9', 'Kiedy będzie zielone, ___ na drugą stronę.', 'przejdziecie', ['przechodzicie', 'przejdziecie']),
      choice('q10', 'Kiedy kelner wreszcie do nas ___?', 'podejdzie', ['podchodzi', 'podejdzie']),
    ], ActivityKind.Choice),
    activity(4, 'Co się dzieje po zajęciach?', 'Uzupełnij tekst czasownikami ruchu.', [
      ...[
        ['Studenci ___ z sali.', 'wychodzą'], ['Potem ___ do domów.', 'rozchodzą się'],
        ['Za chwilę wszyscy ___.', 'wyjdą'], ['Dziewczyny planują ___ na spacer.', 'pójść'],
        ['Najpierw ___ do biblioteki.', 'wejdą'], ['Później ___ na korytarz.', 'wyjdą'],
        ['___ przez hall.', 'Przejdą'], ['___ po schodach.', 'zejdą'],
        ['___ do znajomych.', 'podejdą'], ['___ ze szkoły.', 'wyjdą'],
        ['___ źle zaparkowane auto.', 'obejdą'], ['___ na drugą stronę ulicy.', 'przejdą'],
        ['___ do przystanku.', 'dojdą'], ['Chyba ___ burza.', 'nadchodzi'],
      ].map(([prompt, answer], i) => typed(`q${i + 1}`, prompt, answer)),
    ]),
    activity(5, 'Zmień czas', 'Przekształć relację o Javierze na czas przeszły.', [
      typed('q1', 'Javier wychodzi z sali.', 'Javier wyszedł z sali.'),
      typed('q2', 'Schodzi na parter.', 'Zszedł na parter.'),
      typed('q3', 'Wchodzi do sekretariatu.', 'Wszedł do sekretariatu.'),
      typed('q4', 'Wychodzi ze szkoły.', 'Wyszedł ze szkoły.'),
      typed('q5', 'Przechodzi przez skrzyżowanie.', 'Przeszedł przez skrzyżowanie.'),
      typed('q6', 'Obchodzi słup reklamowy.', 'Obszedł słup reklamowy.'),
      typed('q7', 'Podchodzi do kasy.', 'Podszedł do kasy.'),
      typed('q8', 'Wchodzi do sklepu.', 'Wszedł do sklepu.'),
      typed('q9', 'Wraca do domu.', 'Wrócił do domu.'),
    ]),
    activity(6, 'Dokąd poszli?', 'Uzupełnij relację w czasie przeszłym.', [
      typed('q1', 'Studenci ___ z sali. (wyjść)', 'wyszli'),
      typed('q2', 'Angela ___ na korytarz. (wyjść)', 'wyszła'),
      typed('q3', 'Znajomi ___ do nich. (podejść)', 'podeszli'),
      typed('q4', 'Dziewczyny ___ po schodach. (zejść)', 'zeszły'),
      typed('q5', '___ źle zaparkowany samochód. (obejść)', 'Obeszły'),
      typed('q6', '___ na drugą stronę ulicy. (przejść)', 'Przeszły'),
      typed('q7', '___ do przystanku. (dojść)', 'Doszły'),
      typed('q8', '___ do kiosku po gazety. (pójść)', 'Poszły'),
    ]),
    activity(7, 'Znaki i kierunki', 'Wpisz czasownik pasujący do znaku lub sytuacji.', [
      ...[
        ['WEJŚCIE', 'wchodzić'], ['WYJŚCIE', 'wychodzić'], ['PRZEJŚCIE', 'przechodzić'],
        ['WYJŚCIE AWARYJNE', 'wychodzić'], ['SCHODY W DÓŁ', 'schodzić'], ['PODEJŚCIE', 'podchodzić'],
        ['OBEJŚCIE', 'obchodzić'], ['NADCHODZĄCA BURZA', 'nadchodzić'],
      ].map(([prompt, answer], i) => typed(`q${i + 1}`, prompt, answer)),
    ]),
    activity(8, 'Komunikaty na znakach', 'Posłuchaj nagrań i dopasuj właściwą formę.', [
      ...[
        'Wejście', 'Przejścia nie ma', 'Zejście ze szlaku wzbronione', 'Wejście tylko dla personelu',
        'Przejście podziemne', 'Wyjście awaryjne', 'Dojście do ulicy', 'Uwaga! Strome podejście',
        'Przejście dla pieszych', 'Wyjście',
      ].map((x, i) => typed(`q${i + 1}`, `Nagranie ${i + 1}`, x)),
    ]),
    activity(9, 'Słownictwo podróżne', 'Dopasuj wyrażenie do znaczenia.', [
      typed('q1', 'ciekawe przeżycie, interesujące zdarzenie', 'przygoda'),
      typed('q2', 'zdążyć na czas', 'zdążyć'), typed('q3', 'przypuszczać, domyślić się', 'przewidzieć'),
      typed('q4', 'największy ruch turystyczny', 'szczyt sezonu'),
      typed('q5', 'spędzić noc poza domem', 'nocować'),
      typed('q6', 'jeśli zajdzie taka potrzeba', 'w razie czego'),
      typed('q7', 'być mokrym od deszczu', 'zmoknąć'),
      typed('q8', 'pokoje gościnne do wynajęcia', 'kwatery prywatne'),
    ]),
    activity(10, 'Słownictwo i sytuacje w podróży', 'Wpisz właściwe słowo.', [
      typed('q1', 'Trudna górska droga jest ___.', 'stromym szlakiem'),
      typed('q2', 'Zaplanowana wyprawa to ___.', 'przygoda'),
      typed('q3', 'Gdy zaczyna padać, możemy ___.', 'zmoknąć'),
      typed('q4', 'W sezonie trudno znaleźć wolne pokoje.', 'szczyt sezonu'),
    ]),
    activity(11, 'Co pasuje?', 'Dopasuj wyrażenie do objaśnienia.', [
      ...[
        ['przesadzić', 'przenieść roślinę do innej doniczki'], ['przygoda', 'ciekawe przeżycie'],
        ['stromy szlak', 'droga, która mocno opada lub wznosi się'], ['za taką kasę', 'za takie pieniądze'],
        ['zdążyć', 'zrobić coś na czas'], ['przewidzieć', 'domyślić się, co się wydarzy'],
        ['szczyt sezonu', 'okres największego ruchu'], ['nocować', 'spędzać gdzieś noc'],
        ['w razie czego', 'na wypadek jakiejś sytuacji'], ['zmoknąć', 'być mokrym od deszczu'],
        ['kwatery prywatne', 'pokoje gościnne do wynajęcia'],
      ].map(([prompt, answer], i) => typed(`q${i + 1}`, prompt, answer)),
    ]),
    activity(12, 'Zmień rodzaj', 'Zapisz formę w rodzaju wskazanym w tabeli.', [
      typed('q1', 'wyszedłem → ona', 'wyszła'), typed('q2', 'weszłam → on', 'wszedł'),
      typed('q3', 'podszedł → ona', 'podeszła'), typed('q4', 'odeszliście → wy, kobiety', 'odeszłyście'),
      typed('q5', 'przyszła → oni', 'przyszli'), typed('q6', 'obejrzał → ona', 'obejrzała'),
      typed('q7', 'zeszłaś → on', 'zszedł'), typed('q8', 'rozeszliśmy się → my, kobiety', 'rozeszłyśmy się'),
      typed('q9', 'przeszliście → wy, kobiety', 'przeszłyście'), typed('q10', 'nadeszła → one', 'nadeszły'),
      typed('q11', 'doszedłem → ona', 'doszła'),
    ]),
    activity(13, 'Czasowniki dokonane', 'Uzupełnij zdania odpowiednią formą.', [
      typed('q1', '___ wszystkie sklepy, ale nie było karmy. (obejść)', 'Obeszłam'),
      typed('q2', 'Po zajęciach ___ do mnie student. (podejść)', 'podszedł'),
      typed('q3', 'Huragan szybko ___ . (nadejść)', 'nadszedł'),
      typed('q4', 'Po koncercie ludzie ___ do domów. (rozejść się)', 'rozeszli się'),
      typed('q5', 'Jarek ___ na bok. (odejść)', 'odszedł'),
      typed('q6', '___ do apteki po tabletki. (wejść)', 'Weszłam'),
      typed('q7', '___ na dół, ale nikogo tam nie było. (zejść)', 'Zszedł'),
    ]),
    activity(14, 'Co nie pasuje?', 'Wybierz wyraz, który nie pasuje do znaczenia.', [
      choice('q1', 'do wniosku', 'podejść', ['podejść', 'dojść', 'dochodzić']),
      choice('q2', 'zostawić kogoś bliskiego', 'opuścić', ['opuścić', 'odejść od kogoś', 'dojść']),
      choice('q3', 'choroba', 'mija', ['przechodzi', 'mija', 'podchodzi']),
      choice('q4', 'grypę', 'przechodzić', ['mieć', 'przechodzić', 'obchodzić']),
      choice('q5', 'imieniny', 'obchodzić', ['świętować', 'obchodzić', 'podchodzić']),
      choice('q6', 'rozwieść się', 'rozejść się', ['rozstać się', 'rozejść się', 'obejść']),
      choice('q7', 'zbliża się północ', 'nadchodzi', ['podchodzi', 'nadchodzi', 'schodzi']),
      choice('q8', 'ominąć przeszkodę', 'obejść', ['obejść', 'okrążyć', 'przejść']),
      choice('q9', 'dotrzeć', 'dojść', ['dojść', 'dojechać', 'wyjść']),
      choice('q10', 'wracać do zdrowia', 'dochodzić do siebie', ['zdrowieć', 'dochodzić do siebie', 'podchodzić']),
    ], ActivityKind.Choice),
    activity(15, 'Wyrażenia z czasownikiem „wyjść”', 'Uzupełnij zdanie właściwym wyrażeniem.', [
      typed('q1', 'Andrzej ___ z wypadku, ale jego żona trafiła do szpitala.', 'wyszedł cało'),
      typed('q2', 'Po kilku latach ciężkiej pracy zainwestowali i ___ .', 'wyszli na swoje'),
      typed('q3', 'Kiedy ojciec usłyszał tę wiadomość, ___ .', 'wyszedł z siebie'),
      typed('q4', 'Nie przygotowałeś się do rozmowy i ___ przed szefem.', 'wyszedłeś na głupca'),
      typed('q5', 'Ona twierdzi, że ___ za głupca.', 'wyszła'),
    ]),
  ],
};
