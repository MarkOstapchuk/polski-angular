import { ActivityKind, choice, Lesson, letterCloze, typed, typedExercise } from './lesson-types';
import { LESSON_06 } from './lessons/lesson-06';
import { LESSON_07 } from './lessons/lesson-07';
import { LESSON_08 } from './lessons/lesson-08';
import { LESSON_09 } from './lessons/lesson-09';
import { LESSON_10 } from './lessons/lesson-10';
import { LESSON_11 } from './lessons/lesson-11';
import { LESSON_12 } from './lessons/lesson-12';
import { LESSON_13 } from './lessons/lesson-13';
import { LESSON_14 } from './lessons/lesson-14';
import { LESSON_15 } from './lessons/lesson-15';
import { LESSON_16 } from './lessons/lesson-16';
import { LESSON_17 } from './lessons/lesson-17';
import { LESSON_18 } from './lessons/lesson-18';
import { LESSON_19 } from './lessons/lesson-19';
import { LESSON_20 } from './lessons/lesson-20';
import { LESSON_21 } from './lessons/lesson-21';
import { LESSON_22 } from './lessons/lesson-22';
import { LESSON_23 } from './lessons/lesson-23';
import { LESSON_24 } from './lessons/lesson-24';
import { LESSON_25 } from './lessons/lesson-25';
import { LESSON_26 } from './lessons/lesson-26';
import { LESSON_27 } from './lessons/part2-lesson-01';
import { LESSON_28 } from './lessons/part2-lesson-02';
import { LESSON_29 } from './lessons/part2-lesson-03';
import { LESSON_30 } from './lessons/part2-lesson-04';
import { LESSON_31 } from './lessons/part2-lesson-05';
import { LESSON_32 } from './lessons/part2-lesson-06';
import { LESSON_33 } from './lessons/part2-lesson-07';
import { LESSON_34 } from './lessons/part2-lesson-08';
import { LESSON_35 } from './lessons/part2-lesson-09';
import { LESSON_36 } from './lessons/part2-lesson-10';
import { LESSON_37 } from './lessons/part2-lesson-11';
import { LESSON_38 } from './lessons/part2-lesson-12';
import { LESSON_39 } from './lessons/part2-lesson-13';
import { LESSON_40 } from './lessons/part2-lesson-14';
import { LESSON_41 } from './lessons/part2-lesson-15';
import {
  LESSON_42, LESSON_43, LESSON_44, LESSON_45, LESSON_46, LESSON_47, LESSON_48, LESSON_49,
} from './lessons/part2-lesson-16-23';

export * from './lesson-types';

const l01PhraseEndings = ['znaczy?', 'pytanie.', 'mówi po polsku…?', 'rozumiem.', 'powtórzyć?'];
const l02QuestionEndings = ['a. pani', 'b. u ciebie', 'c. w porządku', 'd. słychać', 'e. staremu', 'f. nowego'];
const l02PronounVerbs = ['a. śpiewa', 'b. pytają', 'c. znacie', 'd. grają', 'e. kocham', 'f. mieszka', 'g. czytasz', 'h. nazywamy się', 'i. ogląda'];
const l03AdjectiveOptions = ['a. biały', 'b. białe', 'c. żółta', 'd. zielona', 'e. czarna', 'f. czerwone'];
const l03QuestionAnswers = ['a. Nie, to jest sekretarka.', 'b. To jest kubek.', 'c. To dziecko jest małe.', 'd. Tak, to jest nauczyciel.', 'e. To jest dziecko.', 'f. Tak, to jest kawa.', 'g. Ten nauczyciel jest miły.', 'h. Ta kawa jest czarna.'];
const l04QuestionAnswers = ['a. Tak, bardzo.', 'b. Tak, bardzo dobrze, jestem z Hiszpanii.', 'c. Bo chcę studiować w Krakowie.', 'd. Nic nowego.', 'e. Z Madrytu.', 'f. Nie wiem, ale myślę, że tak.'];
const l05QuestionAnswers = ['a. Prawie 18.', 'b. Bo mam egzamin.', 'c. Bardzo sympatyczna.', 'd. Gram w tenisa.', 'e. Grać w tenisa.', 'f. W Gdańsku.', 'g. Policjantem.', 'h. Bardzo profesjonalną.', 'i. Z Gdańska.', 'j. Pracowitym.'];

export const LESSONS: Lesson[] = [
  {
    id: 1,
    title: 'Pierwszy dzień w szkole',
    subtitle: 'Poznajemy się i zaczynamy rozmawiać',
    topic: 'Powitania · imiona · pierwsze pytania',
    pages: 'Ćwiczenia 1–16 · strony 4–6',
    color: 'coral',
    activities: [
      {
        id: 'l01-letters', sourceExerciseId: 'WB-L01-E01', sourceLabel: 'Zeszyt ćwiczeń · ćwiczenie 1',
        kind: ActivityKind.LetterCloze, title: 'Uzupełnij brakujące litery',
        instruction: 'Wpisz brakujące litery. Po wpisaniu przejdziesz do następnego pola.',
        items: [
          { ...letterCloze('q1', 'a) Sekretarka', 'a) Sekretarka: Dzień dobry. Jestem Ewa Potocka.', ['a) Sekretarka: D', 'ie', ' dobr', '. Je', 'tem Ewa Potocka.'], ['z', 'ń', 'y', 's']), image: 1 },
          letterCloze('q2', 'a) Studentka', 'a) Studentka: Dzień dobry. Nazywam się Elena Sanchez.', ['a) Studentka: D', 'ień dobr', '. Na', '', '', 'am s', '', ' Elena Sanchez.'], ['z', 'y', 'z', 'y', 'w', 'i', 'ę']),
          letterCloze('q3', 'a) Sekretarka', 'a) Sekretarka: Bardzo mi miło.', ['a) Sekretarka: Bar', '', 'o m', ' m', '', 'o.'], ['d', 'z', 'i', 'i', 'ł']),
          letterCloze('q4', 'a) Studentka', 'a) Studentka: Miło mi.', ['a) Studentka: M', '', 'o mi.'], ['i', 'ł']),
          letterCloze('q5', 'b) Student', 'b) Student: Cześć, jestem Jan, a ty?', ['b) Student: C', '', 'ść, jest', 'm Jan, a t', '?'], ['z', 'e', 'e', 'y']),
          letterCloze('q6', 'b) Studentka', 'b) Studentka: Cześć, jestem Elena.', ['b) Studentka: C', '', 'ść, jes', 'em Elena.'], ['z', 'e', 't']),
          letterCloze('q7', 'b) Student', 'b) Student: Miło mi.', ['b) Student: M', '', 'o mi.'], ['i', 'ł']),
          letterCloze('q8', 'b) Studentka', 'b) Studentka: Mnie również.', ['b) Studentka: M', 'ie r', 'wn', 'e', '.'], ['n', 'ó', 'i', 'ż']),
        ],
      },
      {
        id: 'l01-dialogue-order', sourceExerciseId: 'WB-L01-E02', sourceLabel: 'Zeszyt ćwiczeń · ćwiczenie 2',
        kind: ActivityKind.Typed, title: 'Ułóż rozmowę z nagrania',
        instruction: 'Posłuchaj dialogu, a następnie zapisz cztery wypowiedzi we właściwej kolejności.',
        audioUrl: '/assets/telegram_audio/01_L01_cwiczenie2.mp3', audioLabel: 'Pierwsze spotkanie — dialog',
        items: [
          typed('q1', 'Wypowiedź 1 · Maria', 'Dzień dobry. Jestem Maria Benini.'),
          typed('q2', 'Wypowiedź 2 · Uwe', 'Dzień dobry. Nazywam się Uwe Stein.'),
          typed('q3', 'Wypowiedź 3 · Maria', 'Bardzo mi miło.'),
          typed('q4', 'Wypowiedź 4 · Uwe', 'Mnie również.'),
        ],
      },
      {
        id: 'l01-registration', sourceExerciseId: 'WB-L01-E04', sourceLabel: 'Zeszyt ćwiczeń · ćwiczenie 4',
        kind: ActivityKind.Typed, title: 'Wypełnij formularz ze słuchu',
        instruction: 'Posłuchaj dialogu w sekretariacie i uzupełnij dane oraz zwroty.',
        audioUrl: '/assets/telegram_audio/02_L01_cwiczenie4.mp3', audioLabel: 'Rozmowa w sekretariacie',
        items: [
          typed('q1', 'Imię studenta', 'Thomas'), typed('q2', 'Nazwisko studenta', 'Fischer'),
          typed('q3', 'Narodowość · pełna odpowiedź', 'Jestem Niemcem'),
          typed('q4', 'Adres · ulica i numer', 'ulica Studencka 3'),
          typed('q5', 'Numer telefonu', '607 44 32 89'),
          typed('q6', 'Odpowiedź na „dziękuję”', 'Proszę'),
          typed('q7', 'Przed „widzenia”', 'Do'),
        ],
      },
      {
        id: 'l01-forms',
        sourceExerciseId: 'WB-L01-E05',
        sourceLabel: 'Zeszyt ćwiczeń · ćwiczenie 5',
        kind: ActivityKind.Choice,
        title: 'Wybierz właściwą formę',
        instruction: 'Zwróć uwagę, czy zdanie mówi o imieniu, nazwisku czy tożsamości.',
        items: [
          choice('q1', 'Ewa ___ Brown.', 'nazywa się', ['jest', 'ma', 'nazywa się']),
          choice('q2', '___ Joanna.', ['Jestem', 'Nazywam się'], ['Jestem', 'Mam', 'Nazywam się']),
          choice('q3', 'One ___ Grant.', 'nazywają się', ['nazywają się', 'mają', 'są']),
          choice('q4', 'On ___ na imię Piotr.', 'ma', ['ma', 'jest', 'nazywa się']),
          choice('q5', 'Jak pani ___?', 'się nazywa', ['się nazywa', 'ma', 'jest']),
          choice('q6', 'Adam i Anna ___ Kowalscy.', 'nazywają się', ['mają', 'nazywają się', 'jesteście']),
          choice('q7', 'Czy ty ___ Mami?', 'jesteś', ['jesteś', 'masz', 'nazywasz']),
        ],
      },
      {
        id: 'l01-audio-cloze', sourceExerciseId: 'WB-L01-E06', sourceLabel: 'Zeszyt ćwiczeń · ćwiczenie 6',
        kind: ActivityKind.Typed, title: 'Uzupełnij po wysłuchaniu',
        instruction: 'Odtwórz scenkę i wpisz brakujące słowa.',
        audioUrl: '/assets/telegram_audio/03_L01_cwiczenie6.mp3', audioLabel: 'Wolne miejsce i kichnięcie',
        items: [
          typed('q1', 'Czy to miejsce jest ___?', 'wolne'), typed('q2', 'Tak, ___ wolne.', 'jest'),
          typed('q3', 'Na zdrowie! · brakujące słowo', 'na'), typed('q4', 'Proszę otworzyć ___!', 'okno'),
          typed('q5', '___ zamknąć drzwi!', 'proszę'),
        ],
      },
      {
        id: 'l01-dialogue-cloze', sourceExerciseId: 'WB-L01-E09', sourceLabel: 'Zeszyt ćwiczeń · ćwiczenie 9',
        kind: ActivityKind.Typed, title: 'Zwroty z dialogów',
        instruction: 'Posłuchaj i uzupełnij brakujące czasowniki oraz zwroty.',
        audioUrl: '/assets/telegram_audio/04_L01_cwiczenie9.mp3', audioLabel: 'Dialogi: prośby i wyjaśnienia',
        items: [
          typed('q1', 'Proszę ___ dialog.', 'napisać'), typed('q2', 'Proszę ___ „dziękuję”.', 'przeliterować'),
          typed('q3', 'Proszę ___ tekst.', 'przeczytać'), typed('q4', '___ powtórzyć „dziękuję”?', 'proszę'),
          typed('q5', 'Co to ___ „imię”?', 'znaczy'), typed('q6', 'Jak się ___ po niemiecku „dziękuję”?', 'mówi'),
          typed('q7', 'Proszę ___ „dziesięć”.', 'powtórzyć'), typed('q8', 'Nie ___ .', 'rozumiem'),
          typed('q9', 'Proszę ___ okno.', 'otworzyć'), typed('q10', 'Co ___ znaczy „otworzyć”?', 'to'),
        ],
      },
      {
        id: 'l01-phone-dictation', sourceExerciseId: 'WB-L01-E11', sourceLabel: 'Zeszyt ćwiczeń · ćwiczenie 11',
        kind: ActivityKind.Typed, title: 'Numery telefonów',
        instruction: 'Posłuchaj i wpisz numer każdej osoby. Możesz oddzielać cyfry spacjami.',
        audioUrl: '/assets/telegram_audio/05_L01_cwiczenie11.mp3', audioLabel: 'Cztery numery telefonów',
        items: [
          typed('q1', 'Joanna', '0607234599'), typed('q2', 'Ewa', '0504987710'),
          typed('q3', 'Janek', '0601381426'), typed('q4', 'Michał', '126363718'),
        ],
      },
      {
        id: 'l01-spelling',
        sourceExerciseId: 'WB-L01-E12',
        sourceLabel: 'Zeszyt ćwiczeń · ćwiczenie 12',
        kind: ActivityKind.Typed,
        title: 'Uzupełnij zwroty',
        instruction: 'Uzupełnij brakujące słowo. Zachowaj polskie znaki.',
        items: [
          typed('q1', 'Nie ___ . (I do not understand.)', 'rozumiem'),
          typed('q2', 'Proszę ___ . (to repeat)', 'powtórzyć'),
          typed('q3', 'Proszę ___ . (to spell)', 'przeliterować'),
          typed('q4', 'Nie ___ . (I do not know.)', 'wiem'),
          typed('q5', 'Nie ___ . (I do not remember.)', 'pamiętam'),
          typed('q6', 'Proszę ___ . (to read)', 'przeczytać'),
          typed('q7', 'Co to ___? (What does it mean?)', 'znaczy'),
        ],
      },
      {
        id: 'l01-word-dictation', sourceExerciseId: 'WB-L01-E14', sourceLabel: 'Zeszyt ćwiczeń · ćwiczenie 14',
        kind: ActivityKind.Typed, title: 'Siedem słów z nagrania',
        instruction: 'Posłuchaj lektora i zapisz każde usłyszane słowo.',
        audioUrl: '/assets/telegram_audio/06_L01_cwiczenie14.mp3', audioLabel: 'Dyktando słownictwa',
        items: [
          typed('q1', '1', 'bank'), typed('q2', '2', 'fotograf'), typed('q3', '3', 'plan'),
          typed('q4', '4', 'teatr'), typed('q5', '5', 'interesujący'), typed('q6', '6', 'aktor'),
          typed('q7', '7', 'restauracja'),
        ],
      },
      {
        id: 'l01-listening-pairs',
        sourceExerciseId: 'WB-L01-E15',
        sourceLabel: 'Zeszyt ćwiczeń · ćwiczenie 15',
        kind: ActivityKind.Choice,
        title: 'Słuchaj uważnie',
        instruction: 'Odtwórz nagranie, a potem zaznacz usłyszany wyraz w każdej parze.',
        audioUrl: '/assets/telegram_audio/07_L01_cwiczenie15.mp3',
        audioLabel: 'Nagranie do rozróżniania głosek',
        items: [
          choice('q1', '1. szyny / siny', 'szyny', ['szyny', 'siny']),
          choice('q2', '2. cenny / senny', 'cenny', ['cenny', 'senny']),
          choice('q3', '3. syna / cyna', 'cyna', ['syna', 'cyna']),
          choice('q4', '4. szyba / siwa', 'szyba', ['szyba', 'siwa']),
          choice('q5', '5. szklankach / sankach', 'szklankach', ['szklankach', 'sankach']),
          choice('q6', '6. czary / szary', 'szary', ['czary', 'szary']),
          choice('q7', '7. maczek / Maciek', 'maczek', ['maczek', 'Maciek']),
          choice('q8', '8. córka / kurka', 'kurka', ['córka', 'kurka']),
          choice('q9', '9. cała / ciała', 'cała', ['cała', 'ciała']),
          choice('q10', '10. czyta / cytat', 'czyta', ['czyta', 'cytat']),
          choice('q11', '11. czynnik / cynik', 'czynnik', ['czynnik', 'cynik']),
          choice('q12', '12. czarki / ciarki', 'ciarki', ['czarki', 'ciarki']),
          choice('q13', '13. pić / być', 'pić', ['pić', 'być']),
          choice('q14', '14. wić / wyć', 'wyć', ['wić', 'wyć']),
          choice('q15', '15. bić / być', 'bić', ['bić', 'być']),
          choice('q16', '16. szelka / żelka', 'żelka', ['szelka', 'żelka']),
        ],
      },
      {
        id: 'l01-cities',
        sourceExerciseId: 'WB-L01-E16',
        sourceLabel: 'Zeszyt ćwiczeń · ćwiczenie 16',
        kind: ActivityKind.Typed,
        title: 'Nazwy polskich miast',
        instruction: 'Posłuchaj i wpisz nazwy miast. Liczą się polskie znaki.',
        audioUrl: '/assets/telegram_audio/08_L01_cwiczenie16.mp3',
        audioLabel: 'Dyktando nazw miast',
        items: [
          typed('q1', '1', 'Warszawa'), typed('q2', '2', 'Łódź'),
          typed('q3', '3', 'Gdańsk'), typed('q4', '4', 'Kraków'),
          typed('q5', '5', 'Wrocław'), typed('q6', '6', 'Katowice'),
          typed('q7', '7', 'Opole'), typed('q8', '8', 'Poznań'),
          typed('q9', '9', 'Toruń'), typed('q10', '10', 'Olsztyn'),
          typed('q11', '11', 'Częstochowa'), typed('q12', '12', 'Lublin'),
          typed('q13', '13', 'Kielce'), typed('q14', '14', 'Rzeszów'),
          typed('q15', '15', 'Białystok'), typed('q16', '16', 'Szczecin'),
          typed('q17', '17', 'Bydgoszcz'), typed('q18', '18', 'Gorzów Wielkopolski'),
          typed('q19', '19', 'Zielona Góra'),
        ],
      },
      typedExercise(1, 3, 'Co pasuje?', 'Wybierz właściwe wyrażenie.', [
        ['1. dobry dzień / wieczór / noc', 'dobry wieczór'],
        ['2. do widzenia / razie / widzenia', 'do widzenia'],
        ['3. na widzenia / noc / razie', 'na razie'],
        ['4. dziękuję miło / bardzo / mi', 'dziękuję bardzo'],
        ['5. miło mi / bardzo / również', 'miło mi'],
      ]),
      typedExercise(1, 7, 'Uporządkuj zdania', 'Ułóż zdania z podanych wyrazów.', [
        ['gdzie / toaleta / jest / przepraszam', 'Przepraszam, gdzie jest toaleta?'],
        ['tam / i / kawa / cukier / są', ['Kawa i cukier są tam.', 'Cukier i kawa są tam.']],
        ['na / toaleta / jest / lewo / tam', 'Toaleta jest tam na lewo.'],
        ['pani / dziękuję / bardzo', ['Dziękuję pani bardzo.', 'Bardzo pani dziękuję.']],
      ]),
      {
        id: 'l01-exercise-8', sourceExerciseId: 'WB-L01-E08', sourceLabel: 'Zeszyt ćwiczeń · ćwiczenie 8',
        kind: ActivityKind.LetterCloze, title: 'Gdzie jest sekretariat?',
        instruction: 'Wpisz brakujące litery zgodnie z ilustracją.',
        items: [
          letterCloze('q1', '1 · na lewo', '1 · na lewo', ['1 · n', ' ', 'e', 'o'], ['a', 'l', 'w']),
          letterCloze('q2', '2 · tutaj', '2 · tutaj', ['2 · ', 'u', 'aj'], ['t', 't']),
          letterCloze('q3', '3 · tam', '3 · tam', ['3 · t', '', ''], ['a', 'm']),
          letterCloze('q4', '4 · na prawo', '4 · na prawo', ['4 · ', 'a ', 'r', '', 'o'], ['n', 'p', 'a', 'w']),
        ],
      },
      {
        id: 'l01-exercise-10-match', sourceExerciseId: 'WB-L01-E10', sourceLabel: 'Zeszyt ćwiczeń · ćwiczenie 10',
        kind: ActivityKind.Match, title: 'Połącz początki i zakończenia',
        instruction: 'Kliknij początek frazy, a potem pasujące zakończenie.',
        items: [
          choice('q1', 'Jak się…', 'mówi po polsku…?', l01PhraseEndings),
          choice('q2', 'Co to…', 'znaczy?', l01PhraseEndings),
          choice('q3', 'Proszę…', 'powtórzyć?', l01PhraseEndings),
          choice('q4', 'Nie…', 'rozumiem.', l01PhraseEndings),
          choice('q5', 'Mam…', 'pytanie.', l01PhraseEndings),
        ],
      },
      typedExercise(1, 13, 'Popraw zapis liczebników', 'Zapisz poprawnie każde słowo.', [
        ['1. sedem', 'siedem'], ['2. tszy', 'trzy'], ['3. szesc', 'sześć'], ['4. osem', 'osiem'],
        ['5. piec', 'pięć'], ['6. dziewiec', 'dziewięć'], ['7. ctery', 'cztery'], ['8. dziesiec', 'dziesięć'],
      ]),
    ],
  },
  {
    id: 2,
    title: 'Cześć, skąd jesteś?',
    subtitle: 'Pytamy o pochodzenie i ćwiczymy czasowniki',
    topic: 'Kraje · zaimki · czas teraźniejszy',
    pages: 'Ćwiczenia 1–18 · strony 7–10',
    color: 'blue',
    activities: [
      {
        id: 'l02-dialogue-order', sourceExerciseId: 'WB-L02-E02', sourceLabel: 'Zeszyt ćwiczeń · ćwiczenie 2',
        kind: ActivityKind.Typed, title: 'Ułóż dialog „Co u ciebie?”',
        instruction: 'Posłuchaj rozmowy i wpisz kolejne wypowiedzi w poprawnej kolejności.',
        audioUrl: '/assets/telegram_audio/09_L02_cwiczenie2.mp3', audioLabel: 'Rozmowa z nauczycielką',
        items: [
          typed('q1', 'Wypowiedź 1 · nauczycielka', 'Nauczycielka: Dzień dobry. Co słychać?'),
          typed('q2', 'Wypowiedź 2 · Angela', 'Angela: Dziękuję, wszystko dobrze.'),
          typed('q3', 'Wypowiedź 3 · nauczycielka', 'Nauczycielka: Mami, a co u ciebie?'),
          typed('q4', 'Wypowiedź 4 · Mami', 'Mami: U ciebie? U ciebie? Co to znaczy u ciebie?'),
          typed('q5', 'Wypowiedź 5 · nauczycielka', 'Nauczycielka: Co u ciebie to znaczy co słychać u ciebie? Czy wszystko dobrze?'),
          typed('q6', 'Wypowiedź 6 · Mami', 'Mami: Teraz rozumiem. Tak, wszystko dobrze.'),
        ],
      },
      {
        id: 'l02-formal-dialogue', sourceExerciseId: 'WB-L02-E04', sourceLabel: 'Zeszyt ćwiczeń · ćwiczenie 4',
        kind: ActivityKind.Typed, title: 'Oficjalny dialog',
        instruction: 'Uzupełnij rozmowę po odsłuchaniu. W jednym miejscu klucz podaje wariant niezgodny z formą grzecznościową; zaakceptujemy obie wersje.',
        audioUrl: '/assets/telegram_audio/10_L02_cwiczenie4.mp3', audioLabel: 'Pytanie o kraj i miejsce zamieszkania',
        items: [
          typed('q1', 'Mami i Tom, ___ dialog oficjalny.', 'proszę'),
          { ...typed('q2', 'Skąd pan ___?', 'jest'), accepted: ['jest', 'jesteś'], explanation: 'W kluczu zapisano „jesteś”, ale przy grzecznościowym „pan” poprawna forma to „jest”. Akceptujemy obie wersje ze względu na rozbieżność źródła.' },
          typed('q3', 'Ojej, ___. Skąd pan jest?', 'przepraszam'),
          typed('q4', 'Jestem ___ USA.', 'z'), typed('q5', '___ pan mieszka?', 'Gdzie'),
          typed('q6', 'Mieszkam ___ Nowym Jorku.', 'w'),
        ],
      },
      {
        id: 'l02-byc', sourceExerciseId: 'WB-L02-E07', sourceLabel: 'Zeszyt ćwiczeń · ćwiczenie 7',
        kind: ActivityKind.Typed, title: 'Odmień czasownik „być”',
        instruction: 'Wpisz właściwą formę. Zgoda podmiotu z czasownikiem jest ważna.',
        items: [
          typed('q1', 'Kawa i herbata ___ tutaj.', 'są'), typed('q2', 'Woda ___ tam.', 'jest'),
          typed('q3', 'Gdzie oni ___?', 'są'), typed('q4', 'Czy wy ___ w hotelu?', 'jesteście'),
          typed('q5', '(my) ___ tutaj!', 'jesteśmy'), typed('q6', '(ja) ___ z USA.', 'jestem'),
          typed('q7', 'Czy ty ___ Jonatan?', 'jesteś'), typed('q8', 'Czy pani ___ z Anglii?', 'jest'),
          typed('q9', 'Czy panowie ___ z Niemiec?', 'są'), typed('q10', 'Czy to dziecko ___ tam?', 'jest'),
        ],
      },
      {
        id: 'l02-czytac', sourceExerciseId: 'WB-L02-E09', sourceLabel: 'Zeszyt ćwiczeń · ćwiczenie 9',
        kind: ActivityKind.Typed, title: 'Odmień „czytać” przez osoby',
        instruction: 'Uzupełnij tabelę. Ta sama forma może pasować do kilku rodzajów gramatycznych.',
        items: [
          typed('q1', 'ja ___', 'czytam'), typed('q2', 'ty ___', 'czytasz'),
          typed('q3', 'on ___', 'czyta'), typed('q4', 'ona ___', 'czyta'),
          typed('q5', 'ono ___', 'czyta'), typed('q6', 'my ___', 'czytamy'),
          typed('q7', 'wy ___', 'czytacie'), typed('q8', 'oni ___', 'czytają'),
          typed('q9', 'one ___', 'czytają'),
        ],
      },
      {
        id: 'l02-numbers', sourceExerciseId: 'WB-L02-E13', sourceLabel: 'Zeszyt ćwiczeń · ćwiczenie 13',
        kind: ActivityKind.Typed, title: 'Dyktando liczebników',
        instruction: 'Odtwórz nagranie i zapisz wszystkie liczebniki słownie.',
        audioUrl: '/assets/telegram_audio/11_L02_cwiczenie13.mp3', audioLabel: 'Dziesięć liczebników',
        items: [
          typed('q1', '1', 'siedem'), typed('q2', '2', 'dwadzieścia'),
          typed('q3', '3', 'dwanaście'), typed('q4', '4', 'osiem'),
          typed('q5', '5', 'dwadzieścia trzy'), typed('q6', '6', 'cztery'),
          typed('q7', '7', 'czternaście'), typed('q8', '8', 'osiemnaście'),
          typed('q9', '9', 'trzy'), typed('q10', '10', 'dwadzieścia dziewięć'),
        ],
      },
      {
        id: 'l02-addresses', sourceExerciseId: 'WB-L02-E14', sourceLabel: 'Zeszyt ćwiczeń · ćwiczenie 14',
        kind: ActivityKind.Typed, title: 'Adresy z nagrania',
        instruction: 'Wpisz numer domu albo brakujące słowo. Zostaw spacje między grupami cyfr.',
        audioUrl: '/assets/telegram_audio/12_L02_cwiczenie14.mp3', audioLabel: 'Nazwy ulic i numery',
        items: [
          typed('q1', 'ul. Szpitalna', '15'), typed('q2', 'ul. Sienna', '17'),
          typed('q3', '___ Główny', 'Dworzec'), typed('q4', 'ul. Cicha', '14'),
          typed('q5', 'ul. Wrzesińska', '9'), typed('q6', 'ul. Duża', '19'),
          typed('q7', 'ul. Mała', '10'), typed('q8', 'ul. Żółkiewskiego', '13'),
          typed('q9', 'ul. Czarnieckiego', '6'),
        ],
      },
      {
        id: 'l02-rating-scale', sourceExerciseId: 'WB-L02-E17', sourceLabel: 'Zeszyt ćwiczeń · ćwiczenie 17',
        kind: ActivityKind.Typed, title: 'Oceny z dialogu',
        instruction: 'Posłuchaj, jak nauczyciel i studenci oceniają odpowiedzi. Uzupełnij skalę od +++ do --- .',
        audioUrl: '/assets/telegram_audio/13_L02_cwiczenie17.mp3', audioLabel: 'Siedem ocen',
        items: [
          { ...typed('q1', '+++', 'świetnie'), image: 1 }, { ...typed('q2', '++', 'bardzo dobrze'), image: 2 },
          { ...typed('q3', '+', 'dobrze'), image: 3 }, { ...typed('q4', '0', 'tak sobie'), image: 4 },
          { ...typed('q5', '−', 'źle'), image: 5 }, { ...typed('q6', '−−', 'bardzo źle'), image: 6 },
          { ...typed('q7', '−−−', 'fatalnie'), image: 7 },
        ],
      },
      typedExercise(2, 1, 'Uzupełnij dialog', 'Wpisz brakujące słowa z ramki: z, powtórzyć, nazywa, skąd, dzień, dziękuję.', [
        ['Studentka: ___ dobry.', 'Dzień'], ['Jak się pani ___?', 'nazywa'], ['Proszę ___.', 'powtórzyć'],
        ['___ pani jest?', 'Skąd'], ['Jestem ___ Hiszpanii.', 'z'], ['___ bardzo.', 'dziękuję'],
      ]),
      {
        id: 'l02-question-match', sourceExerciseId: 'WB-L02-E03', sourceLabel: 'Zeszyt ćwiczeń · ćwiczenie 3',
        kind: ActivityKind.Match, title: 'Co pasuje?',
        instruction: 'Wybierz początek pytania, a następnie pasujące zakończenie.',
        items: [
          choice('q1', '1. co', 'd. słychać', l02QuestionEndings),
          choice('q2', '2. po', 'e. staremu', l02QuestionEndings),
          choice('q3', '3. co', 'b. u ciebie', l02QuestionEndings),
          choice('q4', '4. nic', 'f. nowego', l02QuestionEndings),
          choice('q5', '5. co u', 'a. pani', l02QuestionEndings),
          choice('q6', '6. wszystko', 'c. w porządku', l02QuestionEndings),
        ],
      },
      typedExercise(2, 5, 'Podziel wyrazy i zapisz zdania', 'Wstaw wielkie litery, spacje i znaki przestankowe.', [
        ['cześćcostychaćdziękujedobrzeacouciebięwszystkowporządkudziękuję', 'Cześć, co słychać? Dziękuję, dobrze, a co u ciebie? Wszystko w porządku, dziękuję.'],
      ]),
      typedExercise(2, 6, 'Zaimki w liczbie mnogiej', 'Uzupełnij odpowiedni zaimek: oni, one, panowie, państwo lub panie.', [
        ['on + ___ → oni', 'on'], ['ona + ___ → oni', 'on'], ['ono + ___ → oni', 'on'],
        ['ona + ___ → one', 'ona'], ['ona + ___ → one', 'ono'], ['ono + ___ → one', 'ono'],
        ['ono + ___ → one', 'ona'], ['pan + ___ → panowie', 'pan'], ['pan + ___ → państwo', 'pani'],
        ['pani + ___ → panie', 'pani'], ['panowie + ___ → państwo', 'panie'],
      ]),
      typedExercise(2, 8, 'Zmień liczbę pojedynczą na mnogą', 'Przekształć zdania zgodnie z podanym zaimkiem.', [
        ['Ja jestem w szkole.', 'My jesteśmy w szkole.'], ['Pan jest w domu.', 'Panowie są w domu.'],
        ['Gdzie ty jesteś?', 'Gdzie wy jesteście?'], ['Skąd pani jest?', 'Skąd panie są?'],
        ['Ono jest tu.', 'One są tu.'], ['Ona jest tam.', 'One są tam.'],
        ['On jest w sekretariacie.', 'Oni są w sekretariacie.'],
      ]),
      {
        id: 'l02-exercise-10', sourceExerciseId: 'WB-L02-E10', sourceLabel: 'Zeszyt ćwiczeń · ćwiczenie 10',
        kind: ActivityKind.LetterCloze, title: 'Odmień czasownik „mieszkać”',
        instruction: 'Wpisz brakujące litery w formach czasownika.',
        items: [
          letterCloze('q1', 'on · mieszka', 'on · mieszka', ['on · mie', '', 'ka'], ['s', 'z']),
          letterCloze('q2', 'ty · mieszkasz', 'ty · mieszkasz', ['ty · mies', 'ka', '', ''], ['z', 's', 'z']),
          letterCloze('q3', 'oni/one · mieszkają', 'oni/one · mieszkają', ['oni/one · mi', 's', 'k', 'j', ''], ['e', 'z', 'a', 'ą']),
          letterCloze('q4', 'ja · mieszkam', 'ja · mieszkam', ['ja · mie', '', 'ka', ''], ['s', 'z', 'm']),
          letterCloze('q5', 'wy · mieszkacie', 'wy · mieszkacie', ['wy · ', 'ie', '', 'ka', '', '', ''], ['m', 's', 'z', 'c', 'i', 'e']),
          letterCloze('q6', 'my · mieszkamy', 'my · mieszkamy', ['my · m', 'esz', 'am', ''], ['i', 'k', 'y']),
        ],
      },
      typedExercise(2, 11, 'Czasowniki w zdaniach', 'Wpisz właściwą formę czasownika z nawiasu.', [
        ['Oni ___ (grać) w golfa.', 'grają'], ['___ (wy–mieć) telefon?', 'macie'],
        ['Nie ___ (my–rozumieć).', 'rozumiemy'], ['Gdzie państwo ___ (mieszkać)?', 'mieszkają'],
        ['Czy wy ___ (grać) w tenisa?', 'gracie'], ['Nie ___ (ja–rozumieć).', 'rozumiem'],
        ['One ___ (nazywać się) Nowak.', 'nazywają się'],
        ['Jak wy ___ (nazywać się)?', ['nazywacie się', 'się nazywacie']],
        ['Czy ty ___ (grać) na gitarze?', 'grasz'], ['Oni ___ (mieć) intensywny kurs polskiego.', 'mają'],
      ]),
      {
        id: 'l02-pronoun-verb-match', sourceExerciseId: 'WB-L02-E12', sourceLabel: 'Zeszyt ćwiczeń · ćwiczenie 12',
        kind: ActivityKind.Match, title: 'Zaimki i czasowniki', instruction: 'Połącz zaimek z pasującą formą czasownika.',
        items: [
          choice('q1', '1. ja', 'e. kocham', l02PronounVerbs), choice('q2', '2. ty', 'g. czytasz', l02PronounVerbs),
          choice('q3', '3. on', ['f. mieszka', 'i. ogląda'], l02PronounVerbs), choice('q4', '4. ona', 'a. śpiewa', l02PronounVerbs),
          choice('q5', '5. ono', ['i. ogląda', 'f. mieszka'], l02PronounVerbs), choice('q6', '6. my', 'h. nazywamy się', l02PronounVerbs),
          choice('q7', '7. wy', 'c. znacie', l02PronounVerbs), choice('q8', '8. oni', ['b. pytają', 'd. grają'], l02PronounVerbs),
          choice('q9', '9. one', ['d. grają', 'b. pytają'], l02PronounVerbs),
        ],
      },
      typedExercise(2, 15, '„Żeby” czy „bo”?', 'Wpisz właściwy spójnik.', [
        ['Angela jest w Krakowie, ___ uczyć się polskiego.', 'żeby'],
        ['Ona uczy się polskiego, ___ jej mama jest z Polski.', 'bo'],
        ['Mami uczy się polskiego, ___ studiować w Krakowie.', 'żeby'],
        ['Tom uczy się polskiego, ___ jego dziewczyna jest z Polski.', 'bo'],
        ['Julia uczy się hiszpańskiego, ___ to jej hobby.', 'bo'],
      ]),
      typedExercise(2, 16, 'ON czy ONA?', 'Wpisz brakujący odpowiednik rodzaju męskiego lub żeńskiego.', [
        ['pan → ___', 'pani'], ['student → ___', 'studentka'], ['nauczyciel → ___', 'nauczycielka'],
        ['chłopak → ___', 'dziewczyna'], ['kolega → ___', 'koleżanka'], ['syn → ___', 'córka'], ['mąż → ___', 'żona'],
      ]),
      typedExercise(2, 18, 'Ułóż pytania', 'Ułóż pytanie oficjalne lub nieoficjalne do każdej odpowiedzi.', [
        ['a) Mam na imię Anna.', ['Jak pani ma na imię?', 'Jak masz na imię?']],
        ['b) Nazywam się Rojek.', ['Jak pani się nazywa?', 'Jak się nazywasz?']],
        ['c) Jestem z Polski.', ['Skąd pani jest?', 'Skąd jesteś?']],
        ['d) Uczę się angielskiego, bo to moje hobby.', ['Dlaczego uczy się pani angielskiego?', 'Dlaczego uczysz się angielskiego?']],
        ['e) Tak, mam telefon.', ['Czy ma pani telefon?', 'Czy masz telefon?']],
        ['f) Mieszkam w Krakowie.', ['Gdzie pani mieszka?', 'Gdzie mieszkasz?']],
      ]),
    ],
  },
  {
    id: 3,
    title: 'Mami, kto to jest?',
    subtitle: 'Opisujemy osoby, rzeczy i kolory',
    topic: 'Rodzaj gramatyczny · przymiotniki · kolory',
    pages: 'Ćwiczenia 1–14 · strony 11–13',
    color: 'lime',
    activities: [
      {
        id: 'l03-dialogue-objects', sourceExerciseId: 'WB-L03-E01', sourceLabel: 'Zeszyt ćwiczeń · ćwiczenie 1',
        kind: ActivityKind.Typed, title: 'Co to jest? — dialog',
        instruction: 'Odtwórz nagranie i uzupełnij wypowiedzi o przedmiotach.',
        audioUrl: '/assets/telegram_audio/14_L03_cwiczenie1.mp3', audioLabel: 'Rozmowa o przedmiotach',
        items: [
          typed('q1', 'Mami', 'Mami: Co to jest?'), typed('q2', 'Angela', 'Angela: Nie wiem.'),
          typed('q3', 'Javier', 'Javier: Ja wiem, to jest książka.'),
          typed('q4', 'Mami', 'Mami: A co to jest?'),
          typed('q5', 'Javier', 'Javier: To? Nie pamiętam.'),
          typed('q6', 'Angela', 'Angela: Ja pamiętam, to jest kubek.'),
        ],
      },
      {
        id: 'l03-classroom-dialogue', sourceExerciseId: 'WB-L03-E02', sourceLabel: 'Zeszyt ćwiczeń · ćwiczenie 2',
        kind: ActivityKind.Typed, title: 'Przedmioty w klasie',
        instruction: 'Posłuchaj dialogu. Zapisz brakujące słowa i sprawdź polskie znaki.',
        audioUrl: '/assets/telegram_audio/15_L03_cwiczenie2.mp3', audioLabel: 'Nazwy rzeczy w sali',
        items: [
          typed('q1', 'Nauczycielka: ___ pamiętacie, co to jest?', 'Czy'),
          typed('q2', 'To jest ___ .', 'krzesło'), typed('q3', 'To jest ___ .', 'klucz'),
          typed('q4', 'To jest ___ CD.', 'płyta'),
        ],
      },
      {
        id: 'l03-gender', sourceExerciseId: 'WB-L03-E06', sourceLabel: 'Zeszyt ćwiczeń · ćwiczenie 6',
        kind: ActivityKind.Classify, title: 'Rodzaj gramatyczny',
        instruction: 'Przyporządkuj rzeczownik do rodzaju: on, ona albo ono.',
        items: [
          { id: 'q1', prompt: 'student', accepted: ['on'], options: ['on', 'ona', 'ono'] },
          { id: 'q2', prompt: 'herbata', accepted: ['ona'], options: ['on', 'ona', 'ono'] },
          { id: 'q3', prompt: 'miasto', accepted: ['ono'], options: ['on', 'ona', 'ono'] },
          { id: 'q4', prompt: 'komputer', accepted: ['on'], options: ['on', 'ona', 'ono'] },
          { id: 'q5', prompt: 'studentka', accepted: ['ona'], options: ['on', 'ona', 'ono'] },
          { id: 'q6', prompt: 'centrum', accepted: ['ono'], options: ['on', 'ona', 'ono'] },
          { id: 'q7', prompt: 'cukier', accepted: ['on'], options: ['on', 'ona', 'ono'] },
          { id: 'q8', prompt: 'fotografia', accepted: ['ona'], options: ['on', 'ona', 'ono'] },
          { id: 'q9', prompt: 'okno', accepted: ['ono'], options: ['on', 'ona', 'ono'] },
          { id: 'q10', prompt: 'nauczycielka', accepted: ['ona'], options: ['on', 'ona', 'ono'] },
          { id: 'q11', prompt: 'projekt', accepted: ['on'], options: ['on', 'ona', 'ono'] },
          { id: 'q12', prompt: 'muzyka', accepted: ['ona'], options: ['on', 'ona', 'ono'] },
        ],
      },
      {
        id: 'l03-correction', sourceExerciseId: 'WB-L03-E09', sourceLabel: 'Zeszyt ćwiczeń · ćwiczenie 9',
        kind: ActivityKind.Typed, title: 'Popraw zgodę w zdaniu',
        instruction: 'Przepisz zdanie w poprawnej formie. Zadbaj o końcówkę przymiotnika.',
        items: [
          typed('q1', 'To dziecko jest mały.', 'To dziecko jest małe.'),
          typed('q2', 'Czy ten film jest interesująca?', 'Czy ten film jest interesujący?'),
          typed('q3', 'Ten autobus jest nowe.', 'Ten autobus jest nowy.'),
          typed('q4', 'Ta kawa są dobra.', 'Ta kawa jest dobra.'),
          typed('q5', 'Czy ta kolega jest sympatyczny?', 'Czy ten kolega jest sympatyczny?'),
          typed('q6', 'To centrum jest duży.', 'To centrum jest duże.'),
        ],
      },
      {
        id: 'l03-colors', sourceExerciseId: 'WB-L03-E12', sourceLabel: 'Zeszyt ćwiczeń · ćwiczenie 12',
        kind: ActivityKind.Typed, title: 'Kolory i końcówki',
        instruction: 'Wpisz kolor zgodny z rodzajem rzeczownika.',
        items: [
          { ...typed('q1', 'Ta tablica jest ___ .', 'czarna'), image: 1 }, { ...typed('q2', 'To krzesło jest ___ .', 'zielone'), image: 2 },
          { ...typed('q3', 'Ten kubek jest ___ .', 'pomarańczowy'), image: 3 }, { ...typed('q4', 'Ten zeszyt jest ___ .', 'niebieski'), image: 4 },
          { ...typed('q5', 'Ta książka jest ___ .', 'czerwona'), image: 5 }, { ...typed('q6', 'Ta komórka jest ___ .', 'szara'), image: 6 },
          { ...typed('q7', 'Ta torba jest ___ .', 'fioletowa'), image: 7 }, { ...typed('q8', 'Ten długopis jest ___ .', 'żółty'), image: 8 },
        ],
      },
      {
        id: 'l03-colors-spelling', sourceExerciseId: 'WB-L03-E13', sourceLabel: 'Zeszyt ćwiczeń · ćwiczenie 13',
        kind: ActivityKind.Typed, title: 'Zapisz kolory poprawnie',
        instruction: 'Odtwórz nagranie i popraw zapis. Polskie znaki są częścią odpowiedzi.',
        audioUrl: '/assets/telegram_audio/16_L03_cwiczenie13.mp3', audioLabel: 'Dyktando nazw kolorów',
        items: [
          typed('q1', 'cerwony', 'czerwony'), typed('q2', 'nebeski', 'niebieski'),
          typed('q3', 'zelony', 'zielony'), typed('q4', 'fioletowi', 'fioletowy'),
          typed('q5', 'carny', 'czarny'), typed('q6', 'brazowy', 'brązowy'),
          typed('q7', 'zolty', 'żółty'), typed('q8', 'rozowy', 'różowy'),
          typed('q9', 'sary', 'szary'), typed('q10', 'bialy', 'biały'),
        ],
      },
      typedExercise(3, 3, 'Ułóż nazwy przedmiotów', 'Połącz początki i końcówki wyrazów.', [
        ['ze- + -szyt', 'zeszyt'], ['st- + -ół', 'stół'], ['segrega- + -tor', 'segregator'],
        ['klu- + -cz', 'klucz'], ['ołó- + -wek', 'ołówek'], ['komór- + -ka', 'komórka'],
      ]),
      typedExercise(3, 4, 'Co to jest?', 'Odpowiedz na pytania o przedmioty z ilustracji.', [
        ['1. Czy to jest okno?', 'Nie, to nie jest okno. To jest klucz.'],
        ['2. Czy to jest sekretarka?', 'Nie, to nie jest sekretarka. To jest nauczycielka.'],
        ['3. Czy to jest ołówek?', 'Nie, to nie jest ołówek. To jest gumka.'],
        ['4. Czy to jest długopis?', 'Tak, to jest długopis.'],
        ['5. Czy to jest zeszyt?', 'Nie, to nie jest zeszyt. To jest kubek.'],
        ['6. Czy to jest studentka?', 'Nie, to nie jest studentka. To jest student.'],
        ['7. Czy to jest dziecko?', 'Tak, to jest dziecko.'],
      ]),
      typedExercise(3, 5, 'Ułóż zdania', 'Ułóż zdania z podanych wyrazów.', [
        ['a) jest / co / to', 'Co to jest?'], ['b) jest / to / tak / Krakowa / mapa', 'Tak, to jest mapa Krakowa.'],
        ['c) pamiętam / nie / co / jest / to', 'Nie pamiętam, co to jest.'],
        ['d) wiem / nie / to / jest / kto', 'Nie wiem, kto to jest.'],
        ['e) nie / co / wiem / to / znaczy', 'Nie wiem, co to znaczy.'],
        ['f) to / czy / jest / torba', 'Czy to jest torba?'], ['g) tak / książka / jest / to', 'Tak, to jest książka.'],
        ['h) jest / student / to / nowy', 'To jest nowy student.'], ['i) nie / nie / klucz / jest / to', 'Nie, to nie jest klucz.'],
      ]),
      typedExercise(3, 7, 'Jaki? Jaka? Jakie?', 'Wpisz kategorię każdego przymiotnika.', [
        ['atrakcyjny', 'JAKI'], ['sympatyczny', 'JAKI'], ['inteligentny', 'JAKI'], ['zestresowany', 'JAKI'],
        ['aktywna', 'JAKA'], ['skomplikowana', 'JAKA'], ['energiczna', 'JAKA'], ['romantyczna', 'JAKA'],
        ['spontaniczne', 'JAKIE'], ['kreatywne', 'JAKIE'], ['ambitne', 'JAKIE'], ['fajne', 'JAKIE'],
      ]),
      typedExercise(3, 8, 'Przeciwieństwa', 'Wpisz wyraz o przeciwnym znaczeniu.', [
        ['nowy ≠ ___', 'stary'], ['mały ≠ ___', 'duży'], ['dobry ≠ ___', 'zły'],
      ]),
      typedExercise(3, 10, 'Jaki? Jaka? Jakie?', 'Uzupełnij wyrażenia właściwą formą przymiotnika.', [
        ['___ student (inteligentny)', 'inteligentny student'], ['___ aktorka (atrakcyjny)', 'atrakcyjna aktorka'],
        ['___ dziecko (mały)', 'małe dziecko'], ['___ kolega (sympatyczny)', 'sympatyczny kolega'],
        ['___ auto (stary)', 'stare auto'], ['___ torba (modny)', 'modna torba'],
        ['___ stół (duży)', 'duży stół'], ['___ słowo (skomplikowany)', 'skomplikowane słowo'],
      ]),
      {
        id: 'l03-noun-adjective-match', sourceExerciseId: 'WB-L03-E11', sourceLabel: 'Zeszyt ćwiczeń · ćwiczenie 11',
        kind: ActivityKind.Match, title: 'Połącz rzeczowniki z przymiotnikami', instruction: 'Połącz każdy rzeczownik z pasującym przymiotnikiem.',
        items: [
          choice('q1', '1. kawa', 'e. czarna', l03AdjectiveOptions), choice('q2', '2. herbata', 'd. zielona', l03AdjectiveOptions),
          choice('q3', '3. mleko', 'b. białe', l03AdjectiveOptions), choice('q4', '4. cukier', 'a. biały', l03AdjectiveOptions),
          choice('q5', '5. wino', 'f. czerwone', l03AdjectiveOptions), choice('q6', '6. papryka', 'c. żółta', l03AdjectiveOptions),
        ],
      },
      {
        id: 'l03-question-answer-match', sourceExerciseId: 'WB-L03-E14', sourceLabel: 'Zeszyt ćwiczeń · ćwiczenie 14',
        kind: ActivityKind.Match, title: 'Połącz pytania z odpowiedziami', instruction: 'Połącz każde pytanie z pasującą odpowiedzią.',
        items: [
          choice('q1', '1. Kto to jest?', 'e. To jest dziecko.', l03QuestionAnswers),
          choice('q2', '2. Czy to jest nauczycielka?', 'a. Nie, to jest sekretarka.', l03QuestionAnswers),
          choice('q3', '3. Jaka jest ta kawa?', 'h. Ta kawa jest czarna.', l03QuestionAnswers),
          choice('q4', '4. Jakie jest to dziecko?', 'c. To dziecko jest małe.', l03QuestionAnswers),
          choice('q5', '5. Czy to jest kawa?', 'f. Tak, to jest kawa.', l03QuestionAnswers),
          choice('q6', '6. Jaki jest ten nauczyciel?', 'g. Ten nauczyciel jest miły.', l03QuestionAnswers),
          choice('q7', '7. Czy to jest nauczyciel?', 'd. Tak, to jest nauczyciel.', l03QuestionAnswers),
          choice('q8', '8. Co to jest?', 'b. To jest kubek.', l03QuestionAnswers),
        ],
      },
    ],
  },
  {
    id: 4,
    title: 'Jaki jesteś?',
    subtitle: 'Mówimy o językach, nauce i cechach',
    topic: 'Języki · czasowniki · przymiotniki',
    pages: 'Ćwiczenia 1–15 · strony 14–17',
    color: 'violet',
    activities: [
      {
        id: 'l04-language-forms', sourceExerciseId: 'WB-L04-E04', sourceLabel: 'Zeszyt ćwiczeń · ćwiczenie 4',
        kind: ActivityKind.Choice, title: 'Jakiego języka użyć?',
        instruction: 'Wybierz formę odpowiednią po podanym czasowniku.',
        items: [
          choice('q1', 'Robert zna ___.', 'francuski', ['francuskiego', 'francuski', 'po francusku']),
          choice('q2', 'Andrea świetnie mówi po ___.', 'polsku', ['polski', 'polskie', 'polsku']),
          choice('q3', 'Pedro mówi po ___.', 'hiszpańsku', ['hiszpańsku', 'hiszpański', 'hiszpańskiego']),
          choice('q4', 'Kasia uczy się ___.', 'włoskiego', ['włoskiego', 'włoski', 'włosku']),
          choice('q5', 'Uwe nie mówi po ___.', 'rosyjsku', ['rosyjski', 'rosyjsku', 'rosyjskiego']),
          choice('q6', 'Oni znają bardzo dobrze ___.', 'niemiecki', ['niemiecki', 'niemieckim', 'niemiecku']),
          choice('q7', 'Mami nie mówi ___.', 'po chińsku', ['chiński', 'chińskiego', 'po chińsku']),
        ],
      },
      {
        id: 'l04-verbs', sourceExerciseId: 'WB-L04-E07', sourceLabel: 'Zeszyt ćwiczeń · ćwiczenie 7',
        kind: ActivityKind.Typed, title: 'Czasowniki w rozmowie',
        instruction: 'Wpisz odmieniony czasownik. Zwróć uwagę na osobę i liczbę.',
        items: [
          typed('q1', '(Ja) ___ się, że ty ___ tutaj. (cieszyć się, być)', 'cieszę się; jesteś'),
          typed('q2', 'Joost świetnie ___ na nartach. (jeździć)', 'jeździ'),
          typed('q3', 'Aneta ___ po niemiecku. (mówić)', 'mówi'),
          typed('q4', 'Oni ___ w kawiarni. (siedzieć)', 'siedzą'),
          typed('q5', 'Dziękuję, ale ja nie ___. (palić)', 'palę'),
          typed('q6', 'Javier ___ tango. (tańczyć)', 'tańczy'),
          typed('q7', 'Czy wy ___ na kurs? (chodzić)', 'chodzicie'),
          typed('q8', 'Julia ___ francuskiego. (uczyć się)', 'uczy się'),
          typed('q9', 'Co ty ___? (robić)', 'robisz'),
          typed('q10', 'Czy oni ___ spaghetti? (lubić)', 'lubią'),
        ],
      },
      {
        id: 'l04-class-dialogue', sourceExerciseId: 'WB-L04-E08', sourceLabel: 'Zeszyt ćwiczeń · ćwiczenie 8',
        kind: ActivityKind.Typed, title: 'Nauczyciel i student',
        instruction: 'Posłuchaj rozmowy i wpisz brakujące słowa. Zwróć uwagę na parę „uczyć / uczyć się”.',
        audioUrl: '/assets/telegram_audio/17_L04_cwiczenie8.mp3', audioLabel: 'Rozmowa o nauce języków',
        items: [
          typed('q1', '___ ty uczysz się języka angielskiego?', 'Czy'),
          typed('q2', 'Uczysz się ___ angielskiego?', 'języka'),
          typed('q3', 'Jestem ___. (nauczyciel, forma żeńska)', 'nauczycielka'),
          typed('q4', 'To ___, że ty uczysz angielskiego?', 'znaczy'),
          typed('q5', 'Jestem nauczycielem, ___ języka niemieckiego.', 'uczę'),
          typed('q6', 'Chodzę na ___ do Glossy.', 'kurs'),
        ],
      },
      {
        id: 'l04-adjectives', sourceExerciseId: 'WB-L04-E14', sourceLabel: 'Zeszyt ćwiczeń · ćwiczenie 14',
        kind: ActivityKind.Typed, title: 'Dopasuj przymiotnik do osoby',
        instruction: 'Uzupełnij zdanie formą zgodną z osobą lub rzeczownikiem.',
        items: [
          typed('q1', 'Ona ma dużo energii, jest ___.', 'energiczna'),
          typed('q2', 'Ona ma duży talent, jest ___.', 'utalentowana'),
          typed('q3', 'On jest nerwowy i szybko się złości — jest ___.', 'agresywny'),
          typed('q4', 'Ona ma duże ambicje, jest ___.', 'ambitna'),
          typed('q5', 'Ona lubi romantyczne filmy — jest ___.', 'romantyczna'),
          typed('q6', 'To dziecko jest ___, cały czas coś robi.', 'aktywne'),
          typed('q7', 'Ta modelka jest ___.', 'atrakcyjna'),
          typed('q8', 'Ten student jest ___ i szybko się uczy.', 'inteligentny'),
        ],
      },
      {
        id: 'l04-connectors', sourceExerciseId: 'WB-L04-E15', sourceLabel: 'Zeszyt ćwiczeń · ćwiczenie 15',
        kind: ActivityKind.Typed, title: 'Połącz zdania właściwym spójnikiem',
        instruction: 'Wpisz spójniki w kolejności. Jeśli są dwa, rozdziel je przecinkiem.',
        items: [
          typed('q1', 'Ona nie jest ___ szczupła, ___ wysoka, ___ jest bardzo ładna.', 'ani, ani, ale'),
          typed('q2', 'To dziecko jest utalentowane ___ kreatywne.', 'i'),
          typed('q3', 'Ola nie jest ___ energiczna, ___ wysportowana.', 'ani, ani'),
          typed('q4', 'Ta dziewczyna jest inteligentna ___ utalentowana, ___ leniwa.', 'i, ale'),
          typed('q5', 'To dziecko jest sympatyczne ___ wesołe.', 'i'),
          typed('q6', 'Elena to dobra studentka, ___ jest pracowita ___ inteligentna.', 'bo, i'),
          typed('q7', 'Ten kubek jest ładny, ___ brudny.', 'ale'),
          typed('q8', 'Ten chłopak nie jest ___ utalentowany, ___ pracowity.', 'ani, ani'),
          typed('q9', 'Ten długopis jest zły, ___ jest stary i nie pisze.', 'bo'),
        ],
      },
      typedExercise(4, 1, 'Co pasuje?', 'Uzupełnij dialog właściwymi formami.', [
        ['Javier: ___, Mami!', 'Cześć'], ['Mami: Co ___ u ciebie?', 'słychać'],
        ['Wszystko w ___. A u ___?', 'porządku; ciebie'], ['U ___ też dobrze.', 'mnie'],
        ['Czy ___, kto to jest?', 'wiesz'], ['To jest nowy ___ .', 'student'],
        ['Ciekawe, czy ___ w naszej grupie?', 'jesteś'],
      ]),
      typedExercise(4, 2, 'Uzupełnij dialog', 'Wpisz właściwe formy czasowników.', [
        ['Pierre: Nie ___! (rozumieć)', 'rozumiem'], ['Javier: Nie ___, jak mówimy „hola”. (pamiętać)', 'pamiętam'],
        ['Mami: No dobrze, ___ rację. (mieć)', 'masz'], ['Pierre: ___ Pierre i nie ___ po hiszpańsku.', 'jestem; mówię'],
        ['Javier: Ja ___ Javier i ___ z Argentyny, a to ___ Mami; ona ___ po japońsku.', 'mam; jestem; jest; mówi'],
        ['Javier: A ty ___ z Francji? (być)', 'jesteś'],
        ['Pierre: ___ w Paryżu. A wy, gdzie ___? (mieszkać)', 'mieszkam; mieszkacie'],
        ['Javier: Ja ___ w Buenos Aires. (mieszkać)', 'mieszkam'],
        ['Mami: Czy ty ___ w grupie A1? (być)', 'jesteś'], ['Pierre: To ___ moja nowa grupa. (być)', 'jest'],
        ['Mami: To ___ też nasza grupa! (być)', 'jest'],
      ]),
      typedExercise(4, 3, 'Języki', 'Wpisz przysłówek utworzony od nazwy języka.', [
        ['Jesús mówi po ___ (hiszpański).', 'hiszpańsku'], ['Joanna mówi po ___ (polski).', 'polsku'],
        ['Florence mówi po ___ (francuski).', 'francusku'], ['Chiara mówi po ___ (włoski).', 'włosku'],
        ['Shige mówi po ___ (japoński).', 'japońsku'], ['Emily mówi po ___ (angielski).', 'angielsku'],
        ['Jürgen mówi po ___ (niemiecki).', 'niemiecku'], ['Lisa mówi po ___ (szwedzki).', 'szwedzku'],
      ]),
      typedExercise(4, 5, 'Nazwy języków', 'Wpisz brakujące formy nazw języków.', [
        ['1. Joost: po ___; zna ___; dziewczyna jest z ___.', 'holendersku; polski; Polski'],
        ['2. Hajnalka: po ___; mówi też po ___; uczy się ___; Laura zna ___.', 'węgiersku; polsku; węgierskiego; węgierski'],
        ['3. Agnieszka: mówi po ___; Dorota zna ___.', 'rosyjsku; rosyjski'],
      ]),
      typedExercise(4, 6, 'Znać, uczyć się, mówić po', 'Wpisz formę nazwy języka odpowiednią po podanym czasowniku.', [
        ['angielski · znać', 'angielski'], ['angielski · uczyć się', 'angielskiego'], ['angielski · mówić po', 'angielsku'],
        ['niemiecki · znać', 'niemiecki'], ['niemiecki · uczyć się', 'niemieckiego'], ['niemiecki · mówić po', 'niemiecku'],
        ['portugalski · znać', 'portugalski'], ['portugalski · uczyć się', 'portugalskiego'], ['portugalski · mówić po', 'portugalsku'],
        ['japoński · znać', 'japoński'], ['japoński · uczyć się', 'japońskiego'], ['japoński · mówić po', 'japońsku'],
        ['polski · znać', 'polski'], ['polski · uczyć się', 'polskiego'], ['polski · mówić po', 'polsku'],
        ['hiszpański · znać', 'hiszpański'], ['hiszpański · uczyć się', 'hiszpańskiego'], ['hiszpański · mówić po', 'hiszpańsku'],
        ['włoski · znać', 'włoski'], ['włoski · uczyć się', 'włoskiego'], ['włoski · mówić po', 'włosku'],
        ['francuski · znać', 'francuski'], ['francuski · uczyć się', 'francuskiego'], ['francuski · mówić po', 'francusku'],
        ['rosyjski · znać', 'rosyjski'], ['rosyjski · uczyć się', 'rosyjskiego'], ['rosyjski · mówić po', 'rosyjsku'],
      ]),
      {
        id: 'l04-question-answer-match', sourceExerciseId: 'WB-L04-E09', sourceLabel: 'Zeszyt ćwiczeń · ćwiczenie 9',
        kind: ActivityKind.Match, title: 'Co pasuje?', instruction: 'Połącz każde pytanie z pasującą odpowiedzią.',
        items: [
          choice('q1', '1. Co u ciebie?', 'd. Nic nowego.', l04QuestionAnswers),
          choice('q2', '2. Czy lubisz pizzę?', 'a. Tak, bardzo.', l04QuestionAnswers),
          choice('q3', '3. Czy to jest nowy student?', 'f. Nie wiem, ale myślę, że tak.', l04QuestionAnswers),
          choice('q4', '4. Czy mówisz po hiszpańsku?', 'b. Tak, bardzo dobrze, jestem z Hiszpanii.', l04QuestionAnswers),
          choice('q5', '5. Skąd jesteś?', 'e. Z Madrytu.', l04QuestionAnswers),
          choice('q6', '6. Dlaczego uczysz się polskiego?', 'c. Bo chcę studiować w Krakowie.', l04QuestionAnswers),
        ],
      },
      typedExercise(4, 10, 'Jaki? Jaka? Jakie?', 'Uzupełnij zdania właściwym przymiotnikiem.', [
        ['Ona ma wysoką temperaturę, jest bardzo ___.', 'chora'], ['On lubi pracować, jest ___.', 'pracowity'],
        ['Nie jest ani niski, ani średniego wzrostu — jest ___.', 'wysoki'], ['To dziecko jest czyste, a tamto jest ___.', 'brudne'],
        ['Ten mężczyzna jest atrakcyjny, wysoki i ___.', 'przystojny'], ['To dziecko jest smutne, a tamto ___.', 'wesołe'],
        ['On jest gruby, a ona ___.', 'szczupła'], ['Nie jest wysoki ani niski — jest ___.', 'średniego wzrostu'],
        ['On lubi sport, jest ___.', 'wysportowany'], ['Ona nie lubi pracować, jest ___.', 'leniwy'],
      ]),
      typedExercise(4, 11, 'Przeciwieństwa', 'Wpisz brakujący wyraz lub wyrażenie.', [
        ['stary ≠ ___', 'młody'], ['szczupły ≠ ___', 'gruby'], ['wysoki ≠ ___', 'niski'],
        ['ani wysoki, ani niski = ___', 'średniego wzrostu'], ['zdrowy ≠ ___', 'chory'], ['ładny ≠ ___', 'brzydki'],
        ['przystojny ≠ ___', 'brzydki'], ['pracowity ≠ ___', 'leniwy'], ['smutny ≠ ___', 'wesoły'],
        ['czysty ≠ ___', 'brudny'], ['wypoczęty ≠ ___', 'zmęczony'], ['aktywny fizycznie = ___', 'wysportowany'],
      ]),
      typedExercise(4, 12, 'Utwórz przymiotniki', 'Połącz fragmenty wyrazów i wpisz pełne słowo.', [
        ['romant-', 'romantyczny'], ['ambi-', 'ambitny'], ['agresyw-', 'agresywny'],
        ['energ-', 'energiczny'], ['atrakcyj-', 'atrakcyjny'], ['zestresow-', 'zestresowany'], ['kreaty-', 'kreatywny'],
      ]),
      typedExercise(4, 13, 'Ułóż zdania', 'Ułóż poprawne zdania z podanych wyrazów.', [
        ['a) że / ty / myślę / pracowity / jesteś', 'Myślę, że ty jesteś pracowity.'],
        ['b) czy / wiem / on / nie / sympatyczny / jest', 'Nie wiem, czy on jest sympatyczny.'],
        ['c) wiem / czy / miła / jest / ona / nie', 'Nie wiem, czy ona jest miła.'],
        ['d) pewny / on / jest / że / energiczny / jestem', 'Jestem pewny, że on jest energiczny.'],
        ['e) ona / jestem / że / pewna / ambitna / jest', 'Jestem pewna, że ona jest ambitna.'],
      ]),
    ],
  },
  {
    id: 5,
    title: 'Jesteś instruktorem tanga?',
    subtitle: 'Opowiadamy o sobie, pracy i zainteresowaniach',
    topic: 'Liczebniki · zawody · przypadki',
    pages: 'Ćwiczenia 1–17 · strony 18–21',
    color: 'yellow',
    activities: [
      {
        id: 'l05-text-order', sourceExerciseId: 'WB-L05-E01', sourceLabel: 'Zeszyt ćwiczeń · ćwiczenie 1',
        kind: ActivityKind.Typed, title: 'Historia Mami ze słuchu',
        instruction: 'Uporządkuj historię, a potem posłuchaj nagrania. Wpisz cały tekst w poprawnej kolejności.',
        audioUrl: '/assets/telegram_audio/18_L05_cwiczenie1.mp3', audioLabel: 'Mami opowiada o sobie',
        items: [
          typed('q1', 'Cały tekst', 'To jest Mami Takada. Ona jest z Japonii. Mieszka w Tokio, ale teraz jest w Krakowie. Mami uczy się języka polskiego, bo chce studiować w Polsce. Mami jest młoda, szczupła i ładna. Ma 20 lat. Mami bardzo lubi słuchać muzyki.'),
        ],
      },
      {
        id: 'l05-phone-dictation', sourceExerciseId: 'WB-L05-E04', sourceLabel: 'Zeszyt ćwiczeń · ćwiczenie 4',
        kind: ActivityKind.Typed, title: 'Numery telefonów ze słuchu',
        instruction: 'Posłuchaj nagrania i zanotuj numery. Możesz oddzielać cyfry spacjami.',
        audioUrl: '/assets/telegram_audio/19_L05_cwiczenie4.mp3', audioLabel: 'Numery telefonów czterech osób',
        items: [
          typed('q1', 'Joanna', '40 25 36 72'), typed('q2', 'Ewa', '0 50 14 89 66'),
          typed('q3', 'Janek', '72 40 30 96'), typed('q4', 'Michał', '22 12 58 49'),
        ],
      },
      {
        id: 'l05-numbers', sourceExerciseId: 'WB-L05-E05', sourceLabel: 'Zeszyt ćwiczeń · ćwiczenie 5',
        kind: ActivityKind.Typed, title: 'Liczebniki z nagrania',
        instruction: 'Zapisz liczby słownie. Nie pomyl form na -naście i -dziesiąt.',
        audioUrl: '/assets/telegram_audio/20_L05_cwiczenie5.mp3', audioLabel: 'Dziesięć liczebników',
        items: [
          typed('q1', '1', 'siedemnaście'), typed('q2', '2', 'pięćdziesiąt'),
          typed('q3', '3', 'trzydzieści dwa'), typed('q4', '4', 'czterdzieści osiem'),
          typed('q5', '5', 'dwadzieścia trzy'), typed('q6', '6', 'sześćdziesiąt'),
          typed('q7', '7', 'szesnaście'), typed('q8', '8', 'siedemdziesiąt osiem'),
          typed('q9', '9', 'osiemdziesiąt dziewięć'), typed('q10', '10', 'dziewięćdziesiąt osiem'),
        ],
      },
      {
        id: 'l05-jobs', sourceExerciseId: 'WB-L05-E08', sourceLabel: 'Zeszyt ćwiczeń · ćwiczenie 8',
        kind: ActivityKind.Typed, title: 'Nazwy zawodów',
        instruction: 'Uzupełnij nazwy zawodów. Wpisuj całe słowo, nie same brakujące litery.',
        audioUrl: '/assets/telegram_audio/21_L05_cwiczenie8.mp3', audioLabel: 'Nazwy zawodów',
        items: [
          typed('q1', '1', 'kelner'), typed('q2', '2', 'nauczyciel'),
          typed('q3', '3', 'fotograf'), typed('q4', '4', 'informatyk'),
          typed('q5', '5', 'rolnik'), typed('q6', '6', 'muzyk'),
          typed('q7', '7', 'inżynier'), typed('q8', '8', 'policjant'),
          typed('q9', '9', 'kucharz'), typed('q10', '10', 'dentysta'),
          typed('q11', '11', 'tancerz'), typed('q12', '12', 'urzędnik'),
          typed('q13', '13', 'lekarz'), typed('q14', '14', 'biznesmen'),
          typed('q15', '15', 'dziennikarz'), typed('q16', '16', 'emeryt'),
          typed('q17', '17', 'aktor'),
        ],
      },
      {
        id: 'l05-inflection', sourceExerciseId: 'WB-L05-E11', sourceLabel: 'Zeszyt ćwiczeń · ćwiczenie 11',
        kind: ActivityKind.Typed, title: 'Przymiotnik i rzeczownik',
        instruction: 'Uzupełnij pełne wyrażenie w poprawnym przypadku.',
        items: [
          typed('q1', 'Julia jest bardzo ___ ___. (dobra córka)', 'dobrą córką'),
          typed('q2', 'Angela jest ___ ___. (wysoka kobieta)', 'wysoką kobietą'),
          typed('q3', 'Uwe jest ___ ___. (przystojny mężczyzna)', 'przystojnym mężczyzną'),
          typed('q4', 'Michał jest ___ ___. (małe dziecko)', 'małym dzieckiem'),
          typed('q5', 'Tomek jest ___ ___. (dobry tata)', 'dobrym tatą'),
          typed('q6', 'Aneta jest ___ ___. (kreatywna nauczycielka)', 'kreatywną nauczycielką'),
          typed('q7', 'Jonatan jest ___ ___. (inteligentny student)', 'inteligentnym studentem'),
          typed('q8', 'Toyota Prius jest ___ ___. (drogie auto)', 'drogim autem'),
          typed('q9', 'Tom jest ___ ___. (wysoki chłopak)', 'wysokim chłopakiem'),
          typed('q10', 'Mami jest ___ ___. (szczupła dziewczyna)', 'szczupłą dziewczyną'),
        ],
      },
      {
        id: 'l05-dialogue-cloze', sourceExerciseId: 'WB-L05-E14', sourceLabel: 'Zeszyt ćwiczeń · ćwiczenie 14',
        kind: ActivityKind.Typed, title: 'Dialog Paoli i Michaela',
        instruction: 'Posłuchaj i uzupełnij dialog właściwymi słowami.',
        audioUrl: '/assets/telegram_audio/22_L05_cwiczenie14.mp3', audioLabel: 'Rozmowa o zawodzie i zainteresowaniach',
        items: [
          typed('q1', 'Kim jesteś z ___?', 'zawodu'), typed('q2', 'Nie ___? Co to znaczy?', 'rozumiem'),
          typed('q3', 'Co to ___?', 'znaczy'), typed('q4', 'Chcę ___ lekarzem.', 'być'),
          typed('q5', '___ się interesujesz?', 'czym'), typed('q6', 'Interesuję się ___ naturalną.', 'medycyną'),
          typed('q7', 'Co lubisz ___ w weekendy?', 'robić'), typed('q8', 'Lubię ___ .', 'spacerować'),
          typed('q9', 'Lubię ___ muzyki.', 'słuchać'), typed('q10', 'Lubię ___ w tenisa.', 'grać'),
        ],
      },
      {
        id: 'l05-questions', sourceExerciseId: 'WB-L05-E15', sourceLabel: 'Zeszyt ćwiczeń · ćwiczenie 15',
        kind: ActivityKind.Typed, title: 'Zbuduj pytanie do odpowiedzi',
        instruction: 'Dobierz zaimek pytający i zachowaj poprawny szyk zdania.',
        items: [
          typed('q1', '___ to jest? Peter.', 'Kto'), typed('q2', '___ on jest? Z Anglii.', 'Skąd'),
          typed('q3', '___ ma lat? 20.', 'Ile'), typed('q4', '___ się nazywa? Smith.', 'Jak'),
          typed('q5', '___ mieszka? W Londynie.', 'Gdzie'), typed('q6', '___ jest studentem? Zdolnym i inteligentnym.', 'Jakim'),
          typed('q7', '___ on jest? Wysoki.', 'Jaki'), typed('q8', '___ on jest? Architektem.', 'Kim'),
          typed('q9', '___ w Krakowie? Uczy się polskiego.', 'Co robi'), typed('q10', '___? Bardzo lubi słuchać muzyki.', 'Co lubi robić'),
          typed('q11', '___ się interesuje? Architekturą.', 'Czym'), typed('q12', '___ uczy się polskiego? Bo chce pracować w Warszawie.', 'Dlaczego'),
        ],
      },
      typedExercise(5, 2, 'Ułóż pytania do tekstu', 'Ułóż pytania do tekstu o Mami.', [
        ['Odpowiedź: Mami Takada.', 'Kto to jest?'], ['Odpowiedź: Z Japonii.', 'Skąd ona jest?'],
        ['Odpowiedź: W Tokio.', 'Gdzie ona mieszka?'], ['Odpowiedź: Młoda, szczupła i ładna.', 'Jaka ona jest?'],
        ['Odpowiedź: 20 lat.', 'Ile ona ma lat?'], ['Odpowiedź: Tak, jest szczupła.', 'Czy ona jest szczupła?'],
        ['Odpowiedź: Słuchać muzyki.', 'Co ona lubi robić?'], ['Odpowiedź: Bo chce studiować w Polsce.', 'Dlaczego ona uczy się polskiego?'],
      ]),
      typedExercise(5, 3, 'Uzupełnij tekst o Manueli', 'Wpisz formy w pierwszej osobie liczby pojedynczej.', [
        ['(nazywać się)', 'Nazywam się'], ['(być)', 'jestem'], ['(mieszkać)', 'mieszkam'], ['Teraz (być)', 'jestem'],
        ['(uczyć się)', 'uczę się'], ['żeby (studiować)', 'studiować'], ['(mieć)', 'mam'], ['(być)', 'jestem'],
        ['(lubić)', 'lubię'], ['(grać)', 'gram'], ['(biegać)', 'biegam'],
      ]),
      {
        id: 'l05-numeral-endings', sourceExerciseId: 'WB-L05-E06', sourceLabel: 'Zeszyt ćwiczeń · ćwiczenie 6',
        kind: ActivityKind.Choice, title: 'Liczebniki', instruction: 'Wybierz pasującą końcówkę liczebnika.',
        items: [
          choice('q1', '1. pięć-', 'c. -dziesiąt', ['a. -naście', 'b. -dzieści', 'c. -dziesiąt']),
          choice('q2', '2. pięt-', 'a. -naście', ['a. -naście', 'b. -dzieści', 'c. -dziesiąt']),
          choice('q3', '3. sześć-', 'c. -dziesiąt', ['a. -naście', 'b. -dzieści', 'c. -dziesiąt']),
          choice('q4', '4. szes-', 'a. -naście', ['a. -naście', 'b. -dzieści', 'c. -dziesiąt']),
          choice('q5', '5. czter-', ['a. -naście', 'b. -dzieści'], ['a. -naście', 'b. -dzieści', 'c. -dziesiąt']),
          choice('q6', '6. dziewięt-', 'a. -naście', ['a. -naście', 'b. -dzieści', 'c. -dziesiąt']),
          choice('q7', '7. dziewięć-', 'c. -dziesiąt', ['a. -naście', 'b. -dzieści', 'c. -dziesiąt']),
        ],
      },
      typedExercise(5, 7, 'Lat czy lata?', 'Wpisz, czy liczba łączy się z „rok”, „lata” czy „lat”.', [
        ['1', 'rok'], ['7', 'lat'], ['8', 'lat'], ['13', 'lat'], ['42', 'lata'], ['51', 'lat'], ['64', 'lata'],
        ['22', 'lata'], ['40', 'lat'], ['14', 'lat'], ['104', 'lata'], ['101', 'lat'], ['17', 'lat'], ['12', 'lat'],
      ]),
      typedExercise(5, 9, 'Nazwy zawodów', 'Uzupełnij zdania nazwą zawodu.', [
        ['Angela Merkel to znany niemiecki ___.', 'polityk'], ['Cézanne to świetny francuski ___.', 'malarz'],
        ['Oprah Winfrey to popularna ___ telewizyjna.', 'dziennikarka'], ['Thomas Mann to doskonały niemiecki ___.', 'pisarz'],
        ['Sylwia uczy polskiego — jest dobrą ___.', 'nauczycielką'], ['Claudia Schiffer to atrakcyjna ___.', 'modelka'],
        ['Nigel Kennedy świetnie gra na skrzypcach — jest ___.', 'muzykiem'],
        ['Meryl Streep to doskonała ___ filmowa.', 'aktorka'], ['David Doubilet publikuje fotografie — jest ___.', 'fotografem'],
        ['Shelley to angielski ___ romantyczny.', 'poeta'],
      ]),
      typedExercise(5, 10, 'Co pasuje?', 'Wybierz właściwą formę narzędnika.', [
        ['Paweł jest ___ tatą. (dobry)', 'dobrym'], ['Magda jest ___ architektem. (zdolny)', 'zdolnym'],
        ['Łucja jest ___ dzieckiem. (zdrowa)', 'zdrowym'], ['Schumacher jest ___ kierowcą. (świetny)', 'świetnym'],
        ['Miłosz jest ___ poetą. (polski)', 'polskim'], ['Maria jest ___ fotografem. (utalentowana)', 'utalentowanym'],
        ['Javier jest ___ artystą. (spontaniczny)', 'spontanicznym'], ['Ewa jest ___ inżynierem. (dobry)', 'dobrym'],
      ]),
      typedExercise(5, 12, 'Czym oni się interesują?', 'Ułóż wypowiedź każdej osoby.', [
        ['1. sport, historia, współczesny teatr', 'Interesuję się sportem, historią, współczesnym teatrem.'],
        ['2. fotografia, moda, hiszpański film', 'Interesuję się fotografią, modą, hiszpańskim filmem.'],
        ['3. polityka, polskie kino', 'Interesuję się polityką, polskim kinem.'],
        ['4. ekonomia, polski folklor', 'Interesuję się ekonomią, polskim folklorem.'],
        ['5. psychologia, muzyka klasyczna', 'Interesuję się psychologią, muzyką klasyczną.'],
      ]),
      typedExercise(5, 13, 'Uzupełnij tekst o Julii', 'Wpisz odpowiednią formę wyrazu.', [
        ['Ona ma 11 ___ (lat).', 'lat'], ['Jest ___ (Polka).', 'Polką'], ['Mieszka ___ (Kraków).', 'w Krakowie'],
        ['Jest ___ (≠ gruby).', 'szczupła'], ['Jest ___ (wysportowana).', 'wysportowana'], ['Jest ___ (wesoła).', 'wesoła'],
        ['Jest ___ (sympatyczna dziewczyna).', 'sympatyczną dziewczyną'], ['Dobrze ___ po angielsku.', 'mówi'],
        ['Trochę po ___.', 'hiszpańsku'], ['Julia ___ śpiewać.', 'lubi'], ['Lubi ___ książki.', 'czytać'],
        ['Interesuje się ___ (muzyka).', 'muzyką'], ['Interesuje się ___ (sport).', 'sportem'],
      ]),
      {
        id: 'l05-question-answer-match', sourceExerciseId: 'WB-L05-E16', sourceLabel: 'Zeszyt ćwiczeń · ćwiczenie 16',
        kind: ActivityKind.Match, title: 'Połącz pytania z odpowiedziami', instruction: 'Połącz każde pytanie z pasującą odpowiedzią.',
        items: [
          choice('q1', '1. Co lubisz robić?', 'e. Grać w tenisa.', l05QuestionAnswers),
          choice('q2', '2. Gdzie mieszkasz?', 'f. W Gdańsku.', l05QuestionAnswers),
          choice('q3', '3. Ile masz lat?', 'a. Prawie 18.', l05QuestionAnswers),
          choice('q4', '4. Kim on jest?', 'g. Policjantem.', l05QuestionAnswers),
          choice('q5', '5. Dlaczego jesteś zdenerwowany?', 'b. Bo mam egzamin.', l05QuestionAnswers),
          choice('q6', '6. Jaką sekretarką jest Agnieszka?', 'h. Bardzo profesjonalną.', l05QuestionAnswers),
          choice('q7', '7. Skąd jest Ewa?', 'i. Z Gdańska.', l05QuestionAnswers),
          choice('q8', '8. Co robisz?', 'd. Gram w tenisa.', l05QuestionAnswers),
          choice('q9', '9. Jakim studentem jest Jonatan?', 'j. Pracowitym.', l05QuestionAnswers),
          choice('q10', '10. Jaka jest Dorota?', 'c. Bardzo sympatyczna.', l05QuestionAnswers),
        ],
      },
      typedExercise(5, 17, 'Narodowości i języki', 'Dla każdej osoby wpisz formy: ona jest, ona jest (narzędnik), on jest, on jest (narzędnik), mówią po, znają.', [
        ['1. Anglia · Angela i Jonatan', 'Angielka; Angielką; Anglik; Anglikiem; po angielsku; angielski'],
        ['2. Niemcy · Petra i Uwe', 'Niemka; Niemką; Niemiec; Niemcem; po niemiecku; niemiecki'],
        ['3. Francja · Adèle i Pierre', 'Francuzka; Francuzką; Francuz; Francuzem; po francusku; francuski'],
        ['4. Hiszpania · Manuela i Pedro', 'Hiszpanka; Hiszpanką; Hiszpan; Hiszpanem; po hiszpańsku; hiszpański'],
        ['5. Włochy · Maria i Paolo', 'Włoszka; Włoszką; Włoch; Włochem; po włosku; włoski'],
        ['6. Portugalia · Inês i Luis', 'Portugalka; Portugalką; Portugalczyk; Portugalczykiem; po portugalsku; portugalski'],
        ['7. USA · Wendy i Tom', 'Amerykanka; Amerykanką; Amerykanin; Amerykaninem; po angielsku; angielski'],
        ['8. Japonia · Ajako i Satoshi', 'Japonka; Japonką; Japończyk; Japończykiem; po japońsku; japoński'],
      ]),
    ],
  },
  LESSON_06, LESSON_07, LESSON_08, LESSON_09, LESSON_10, LESSON_11, LESSON_12,
  LESSON_13, LESSON_14, LESSON_15, LESSON_16, LESSON_17, LESSON_18,
  LESSON_19, LESSON_20, LESSON_21, LESSON_22, LESSON_23, LESSON_24, LESSON_25, LESSON_26,
  LESSON_27, LESSON_28, LESSON_29, LESSON_30, LESSON_31, LESSON_32, LESSON_33, LESSON_34, LESSON_35,
  LESSON_36, LESSON_37, LESSON_38, LESSON_39, LESSON_40, LESSON_41,
  LESSON_42, LESSON_43, LESSON_44, LESSON_45, LESSON_46, LESSON_47, LESSON_48, LESSON_49,
];

export function getLesson(id: number): Lesson | undefined {
  return LESSONS.find((lesson) => lesson.id === id);
}
