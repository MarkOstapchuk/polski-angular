import type { Language } from '../i18n/language.service';

export interface CheckpointQuestion {
  id: string;
  prompt: string;
  options: [string, string, string, string];
  correctIndex: number;
  explanation: Record<Language, string>;
}

export interface CheckpointTest {
  id: string;
  courseId: 'part-1' | 'part-2';
  afterLessonId: number;
  lessonRange: string;
  title: Record<Language, string>;
  description: Record<Language, string>;
  questions: CheckpointQuestion[];
}

export const CHECKPOINT_TESTS: CheckpointTest[] = [
  {
    id: 'test-1',
    courseId: 'part-1',
    afterLessonId: 6,
    lessonRange: '01–06',
    title: {
      pl: 'Test 1 · Lekcje 01–06',
      ru: 'Тест 1 · Уроки 01–06',
      en: 'Test 1 · Lessons 01–06',
    },
    description: {
      pl: 'Powitania, rodzaj gramatyczny, czas teraźniejszy i podstawowe zdania.',
      ru: 'Приветствия, грамматический род, настоящее время и базовые фразы.',
      en: 'Greetings, grammatical gender, present tense, and basic sentences.',
    },
    questions: [
      {
        id: 't1-q1',
        prompt: '___ słownik jest bardzo duży.',
        options: ['Ten', 'Ta', 'To', 'Te'],
        correctIndex: 0,
        explanation: {
          pl: '„Słownik” to rodzaj męski, dlatego używamy zaimka „ten”.',
          ru: '«Słownik» — мужского рода, поэтому используется «ten».',
          en: '“Słownik” is masculine, so we use “ten”.',
        },
      },
      {
        id: 't1-q2',
        prompt: 'Twoje krzesło nie jest ___.',
        options: ['nowy', 'nowe', 'nowa', 'nowo'],
        correctIndex: 1,
        explanation: {
          pl: '„Krzesło” ma rodzaj nijaki (-o), więc przymiotnik ma końcówkę -e: „nowe”.',
          ru: '«Krzesło» среднего рода (-o), поэтому прилагательное имеет окончание -e: «nowe».',
          en: '“Krzesło” is neuter (-o), so the adjective ends in -e: “nowe”.',
        },
      },
      {
        id: 't1-q3',
        prompt: 'Poproszę: zielona herbata i ___ wino.',
        options: ['biały', 'biała', 'białe', 'biało'],
        correctIndex: 2,
        explanation: {
          pl: '„Wino” jest rodzaju nijakiego -> „białe wino”.',
          ru: '«Wino» среднего рода -> «białe wino».',
          en: '“Wino” is neuter -> “białe wino”.',
        },
      },
      {
        id: 't1-q4',
        prompt: 'Karolina: Cześć Mami, czy ___ na komputerze?',
        options: ['gram', 'grasz', 'gra', 'gracie'],
        correctIndex: 1,
        explanation: {
          pl: 'Forma dla „ty” od czasownika „grać” to „grasz”.',
          ru: 'Форма для «ty» от глагола «grać» — «grasz».',
          en: 'The 2nd person singular (“ty”) form of “grać” is “grasz”.',
        },
      },
      {
        id: 't1-q5',
        prompt: 'Piotr bardzo interesuje się ___.',
        options: ['kino europejskie', 'kinem europejskim', 'kina europejskiego', 'kinu europejskiemu'],
        correctIndex: 1,
        explanation: {
          pl: 'Po czasowniku „interesować się” używamy narzędnika (kim? czym?): „kinem europejskim”.',
          ru: 'После «interesować się» используется творительный падеж: «kinem europejskim».',
          en: '“Interesować się” takes the instrumental case: “kinem europejskim”.',
        },
      },
      {
        id: 't1-q6',
        prompt: '— Czy wiesz, ___ jest? — Tak, to Angela.',
        options: ['co to', 'kto to', 'jaki to', 'czy to'],
        correctIndex: 1,
        explanation: {
          pl: 'O osobę pytamy „kto to jest?”.',
          ru: 'О человеке спрашиваем «kto to jest?».',
          en: 'To ask about a person, use “kto to jest?”.',
        },
      },
    ],
  },
  {
    id: 'test-2',
    courseId: 'part-1',
    afterLessonId: 11,
    lessonRange: '07–11',
    title: {
      pl: 'Test 2 · Lekcje 07–11',
      ru: 'Тест 2 · Уроки 07–11',
      en: 'Test 2 · Lessons 07–11',
    },
    description: {
      pl: 'Zakupy, restauracja, biernik, dopełniacz i zaimki dzierżawcze.',
      ru: 'Покупки, ресторан, винительный и родительный падежи, притяжательные местоимения.',
      en: 'Shopping, restaurants, accusative, genitive, and possessive pronouns.',
    },
    questions: [
      {
        id: 't2-q1',
        prompt: 'Mam ___ dentystę w centrum.',
        options: ['dobry', 'dobra', 'dobrego', 'dobrą'],
        correctIndex: 2,
        explanation: {
          pl: 'Biernik rodzaju męskiego żywotnego (kogo? co?): „dobrego dentystę”.',
          ru: 'Винительный падеж одушевлённого мужского рода: «dobrego dentystę».',
          en: 'Animate masculine accusative: “dobrego dentystę”.',
        },
      },
      {
        id: 't2-q2',
        prompt: 'Poproszę czarną kawę bez ___.',
        options: ['cukier', 'cukru', 'cukrem', 'cukrów'],
        correctIndex: 1,
        explanation: {
          pl: 'Po przyimku „bez” zawsze używamy dopełniacza: „bez cukru”.',
          ru: 'После предлога «bez» всегда идёт родительный падеж: «bez cukru».',
          en: 'The preposition “bez” always requires the genitive case: “bez cukru”.',
        },
      },
      {
        id: 't2-q3',
        prompt: 'Nie lubię ___ piwa.',
        options: ['ciepłe', 'ciepłego', 'ciepłej', 'ciepłym'],
        correctIndex: 1,
        explanation: {
          pl: 'Po przeczeniu „nie lubię” używamy dopełniacza: „ciepłego piwa”.',
          ru: 'После отрицания «nie lubię» используется родительный падеж: «ciepłego piwa».',
          en: 'Negated verbs like “nie lubię” take the genitive case: “ciepłego piwa”.',
        },
      },
      {
        id: 't2-q4',
        prompt: 'Poproszę dwie ___.',
        options: ['pomarańcze', 'pomarańcza', 'pomarańczy', 'pomarańczą'],
        correctIndex: 0,
        explanation: {
          pl: 'Po liczebniku „dwie” używamy mianownika liczby mnogiej: „dwie pomarańcze”.',
          ru: 'После числительного «dwie» используется именительный мн. ч.: «dwie pomarańcze».',
          en: 'After “dwie”, use the plural nominative/accusative: “dwie pomarańcze”.',
        },
      },
      {
        id: 't2-q5',
        prompt: '___ (wy) dziecko bardzo dobrze gra w tenisa.',
        options: ['Wasz', 'Wasza', 'Wasze', 'Wasi'],
        correctIndex: 2,
        explanation: {
          pl: '„Dziecko” jest rodzaju nijakiego, więc „wasze dziecko”.',
          ru: '«Dziecko» среднего рода, поэтому «wasze dziecko».',
          en: '“Dziecko” is neuter, so the possessive pronoun is “wasze”.',
        },
      },
      {
        id: 't2-q6',
        prompt: 'Muszę iść z ___ (ona) do supermarketu.',
        options: ['ona', 'jej', 'nią', 'niej'],
        correctIndex: 2,
        explanation: {
          pl: 'Po przyimku „z” używamy narzędnika: „z nią”.',
          ru: 'После предлога «z» используется творительный падеж: «z nią».',
          en: 'After “z”, use the instrumental form: “z nią”.',
        },
      },
    ],
  },
  {
    id: 'test-3',
    courseId: 'part-1',
    afterLessonId: 16,
    lessonRange: '12–16',
    title: {
      pl: 'Test 3 · Lekcje 12–16',
      ru: 'Тест 3 · Уроки 12–16',
      en: 'Test 3 · Lessons 12–16',
    },
    description: {
      pl: 'Czas przeszły i przyszły, chodzić/iść, jeździć/jechać, przysłówki i zaimki.',
      ru: 'Прошедшее и будущее время, глаголы движения, наречия и местоимения.',
      en: 'Past & future tense, motion verbs, adverbs, and pronouns.',
    },
    questions: [
      {
        id: 't3-q1',
        prompt: 'Trzy dni temu też ___ w parku.',
        options: ['jesteśmy', 'byliśmy', 'będziemy', 'byłem'],
        correctIndex: 1,
        explanation: {
          pl: '„Trzy dni temu” wskazuje na przeszłość (my): „byliśmy”.',
          ru: '«Trzy dni temu» указывает на прошлое (мы): «byliśmy».',
          en: '“Trzy dni temu” refers to the past (we): “byliśmy”.',
        },
      },
      {
        id: 't3-q2',
        prompt: 'Za tydzień też ___ imprezę?',
        options: ['robicie', 'robiliście', 'będziecie robić', 'zrobiliście'],
        correctIndex: 2,
        explanation: {
          pl: '„Za tydzień” oznacza przyszłość (wy): „będziecie robić”.',
          ru: '«Za tydzień» указывает на будущее (вы): «będziecie robić».',
          en: '“Za tydzień” refers to the future (you plural): “będziecie robić”.',
        },
      },
      {
        id: 't3-q3',
        prompt: 'Jest bardzo późno. Teraz musisz ___ taksówką!',
        options: ['jeździć', 'jechać', 'chodzić', 'iść'],
        correctIndex: 1,
        explanation: {
          pl: 'Jednorazowa podróż pojazdem teraz -> „jechać” (nie „jeździć”).',
          ru: 'Разовая поездка на транспорте сейчас -> «jechać» (а не «jeździć»).',
          en: 'A single trip by vehicle right now -> “jechać” (not “jeździć”).',
        },
      },
      {
        id: 't3-q4',
        prompt: 'Poproszę pięć ___ (banan).',
        options: ['banany', 'bananów', 'banana', 'bananami'],
        correctIndex: 1,
        explanation: {
          pl: 'Po liczebniku „pięć” używamy dopełniacza liczby mnogiej: „pięć bananów”.',
          ru: 'После числительного «pięć» идёт родительный падеж мн. ч.: «pięć bananów».',
          en: 'Numbers 5+ take the genitive plural: “pięć bananów”.',
        },
      },
      {
        id: 't3-q5',
        prompt: 'Gdzie one są? Czekamy na ___ już pół godziny!',
        options: ['nich', 'nie', 'nimi', 'im'],
        correctIndex: 1,
        explanation: {
          pl: 'Po „czekać na” używamy biernika; dla rodzaju niemęskoosobowego („one”) to „na nie”.',
          ru: 'После «czekać na» используется винительный падеж; для «one» это «na nie».',
          en: '“Czekać na” takes the accusative; for “one” (non-masculine personal), it is “na nie”.',
        },
      },
      {
        id: 't3-q6',
        prompt: 'Javier naprawdę ___ gra na gitarze.',
        options: ['piękny', 'piękna', 'pięknie', 'piękne'],
        correctIndex: 2,
        explanation: {
          pl: 'Czasownik „gra” opisujemy przysłówkiem (jak?): „pięknie”.',
          ru: 'Глагол «gra» описывается наречием (как?): «pięknie».',
          en: 'Verbs are modified by adverbs (how?): “pięknie”.',
        },
      },
    ],
  },
  {
    id: 'test-4',
    courseId: 'part-1',
    afterLessonId: 21,
    lessonRange: '17–21',
    title: {
      pl: 'Test 4 · Lekcje 17–21',
      ru: 'Тест 4 · Уроки 17–21',
      en: 'Test 4 · Lessons 17–21',
    },
    description: {
      pl: 'Miejscownik, daty, przyimki miejsca oraz aspekt czasownika.',
      ru: 'Предложный падеж, даты, предлоги места и вид глагола.',
      en: 'Locative case, dates, prepositions of place, and verb aspect.',
    },
    questions: [
      {
        id: 't4-q1',
        prompt: 'Szukałeś kluczy na ___ (nowy regał)?',
        options: ['nowy regał', 'nowym regale', 'nowego regału', 'nowym regałem'],
        correctIndex: 1,
        explanation: {
          pl: 'Na pytanie „gdzie?” po „na” odpowiada miejscownik: „na nowym regale”.',
          ru: 'На вопрос «gdzie?» после «na» отвечает предложный падеж: «na nowym regale».',
          en: 'Static location with “na” takes the locative case: “na nowym regale”.',
        },
      },
      {
        id: 't4-q2',
        prompt: 'Ona ma urodziny 06.05 — ___.',
        options: ['szósty maja', 'szóstym maju', 'szóstego maja', 'szósty maj'],
        correctIndex: 2,
        explanation: {
          pl: 'Kiedy? (data) — używamy dopełniacza: „szóstego maja”.',
          ru: 'Когда? (дата) — используется родительный падеж: «szóstego maja».',
          en: 'Dates answering “when?” use the genitive: “szóstego maja”.',
        },
      },
      {
        id: 't4-q3',
        prompt: 'Zapraszamy do ___ dziś wieczorem.',
        options: ['nam', 'nas', 'nami', 'my'],
        correctIndex: 1,
        explanation: {
          pl: 'Po przyimku „do” używamy dopełniacza: „do nas”.',
          ru: 'После предлога «do» используется родительный падеж: «do nas».',
          en: 'After “do”, use the genitive: “do nas”.',
        },
      },
      {
        id: 't4-q4',
        prompt: 'Kiedy był dzieckiem, nigdy nie ___ przed szóstą.',
        options: ['wstał', 'wstawał', 'wstanie', 'wstaje'],
        correctIndex: 1,
        explanation: {
          pl: 'Powtarzająca się czynność w przeszłości („nigdy”) wymaga aspektu niedokonanego: „wstawał”.',
          ru: 'Повторяющееся действие в прошлом («nigdy») требует несовершенного вида: «wstawał».',
          en: 'Repeated past actions (“nigdy”) require the imperfective aspect: “wstawał”.',
        },
      },
      {
        id: 't4-q5',
        prompt: 'Dwa razy ci o tym ___ (ja, r. m.).',
        options: ['mówiłem', 'powiedziałem', 'mówię', 'powiem'],
        correctIndex: 1,
        explanation: {
          pl: 'Konkretna liczba razy („dwa razy”) i zakończony fakt -> aspekt dokonany: „powiedziałem”.',
          ru: 'Конкретное количество раз («dwa razy») и завершённый факт -> совершенный вид: «powiedziałem».',
          en: 'A specific number of completed times (“dwa razy”) takes the perfective: “powiedziałem”.',
        },
      },
      {
        id: 't4-q6',
        prompt: 'Od dawna bardzo chciałem jechać ___.',
        options: ['do gór', 'w górach', 'w góry', 'na góry'],
        correctIndex: 2,
        explanation: {
          pl: 'Kierunek podróży w góry: „jechać w góry”.',
          ru: 'Направление поездки в горы: «jechać w góry».',
          en: 'Direction towards the mountains: “jechać w góry”.',
        },
      },
    ],
  },
  {
    id: 'test-5',
    courseId: 'part-1',
    afterLessonId: 26,
    lessonRange: '22–26',
    title: {
      pl: 'Test 5 · Lekcje 22–26',
      ru: 'Тест 5 · Уроки 22–26',
      en: 'Test 5 · Lessons 22–26',
    },
    description: {
      pl: 'Aspekt w czasie przyszłym, stopniowanie, zdrowie i tryb przypuszczający.',
      ru: 'Вид в будущем времени, степени сравнения, здоровье и сослагательное наклонение.',
      en: 'Future aspect, comparatives, health, and conditional mood.',
    },
    questions: [
      {
        id: 't5-q1',
        prompt: 'Myślę, że w lipcu ___ do Japonii na miesiąc.',
        options: ['jadę', 'pojadę', 'będę jeździć', 'jechałem'],
        correctIndex: 1,
        explanation: {
          pl: 'Jednorazowy plan wyjazdu w przyszłości -> czasownik dokonany „pojadę”.',
          ru: 'Разовая поездка в будущем -> глагол совершенного вида «pojadę».',
          en: 'A single planned trip in the future -> perfective “pojadę”.',
        },
      },
      {
        id: 't5-q2',
        prompt: 'Warszawa jest ___ niż Kraków.',
        options: ['droga', 'droższa', 'najdroższa', 'drożej'],
        correctIndex: 1,
        explanation: {
          pl: 'Porównanie dwóch rzeczy („niż”) wymaga stopnia wyższego: „droższa”.',
          ru: 'Сравнение («niż») требует сравнительной степени: «droższa».',
          en: 'Comparing two things (“niż”) uses the comparative: “droższa”.',
        },
      },
      {
        id: 't5-q3',
        prompt: 'Możesz iść ___? Zaraz się spóźnimy!',
        options: ['szybko', 'szybciej', 'najszybciej', 'szybszy'],
        correctIndex: 1,
        explanation: {
          pl: 'Stopień wyższy przysłówka „szybko” to „szybciej”.',
          ru: 'Сравнительная степень наречия «szybko» — «szybciej».',
          en: 'The comparative adverb of “szybko” is “szybciej”.',
        },
      },
      {
        id: 't5-q4',
        prompt: 'Boli ___ głowa i ma wysoką gorączkę.',
        options: ['mu', 'go', 'jego', 'niego'],
        correctIndex: 1,
        explanation: {
          pl: 'Czasownik „boleć” łączy się z biernikiem (kogo? co?): „boli go głowa”.',
          ru: 'Глагол «boleć» требует винительного падежа (кого?): «boli go głowa».',
          en: '“Boleć” takes the accusative: “boli go głowa”.',
        },
      },
      {
        id: 't5-q5',
        prompt: 'Przepraszam, czy pan ___ nam pomóc z tymi walizkami?',
        options: ['mógł', 'mógłby', 'możesz', 'mogliśmy'],
        correctIndex: 1,
        explanation: {
          pl: 'Uprzejma prośba do pana w trybie przypuszczającym: „czy pan mógłby”.',
          ru: 'Вежливая просьба в сослагательном наклонении: «czy pan mógłby».',
          en: 'A polite request in the conditional mood: “czy pan mógłby”.',
        },
      },
      {
        id: 't5-q6',
        prompt: 'Grzegorz, już późno! Naprawdę nie ___ tak długo siedzieć przy komputerze.',
        options: ['powinien', 'powinny', 'powinieneś', 'powinnaś'],
        correctIndex: 2,
        explanation: {
          pl: 'Zwracamy się bezpośrednio do mężczyzny („ty”): „nie powinieneś”.',
          ru: 'Обращение на «ты» к мужчине: «nie powinieneś».',
          en: 'Addressing a man directly (“ty”): “nie powinieneś”.',
        },
      },
    ],
  },
  {
    id: 'test-6',
    courseId: 'part-2',
    afterLessonId: 31,
    lessonRange: '01–05',
    title: {
      pl: 'Test 6 · Część 2 (Lekcje 01–05)',
      ru: 'Тест 6 · Часть 2 (Уроки 01–05)',
      en: 'Test 6 · Part 2 (Lessons 01–05)',
    },
    description: {
      pl: 'Narzędnik, dopełniacz, mianownik liczby mnogiej i rodzaj męskoosobowy.',
      ru: 'Творительный и родительный падежи, множественное число и лично-мужской род.',
      en: 'Instrumental, genitive, plural nominative, and masculine personal forms.',
    },
    questions: [
      {
        id: 't6-q1',
        prompt: 'Moja siostra została ___ w dużej firmie.',
        options: ['dyrektor', 'dyrektora', 'dyrektorem', 'dyrektorowi'],
        correctIndex: 2,
        explanation: {
          pl: 'Po czasowniku „zostać” (kim? czym?) używamy narzędnika: „dyrektorem”.',
          ru: 'После глагола «zostać» (кем? чем?) используется творительный падеж: «dyrektorem».',
          en: 'After “zostać”, use the instrumental case: “dyrektorem”.',
        },
      },
      {
        id: 't6-q2',
        prompt: 'W naszym mieście nie było wtedy dużych ___.',
        options: ['sklepy', 'sklepów', 'sklepom', 'sklepami'],
        correctIndex: 1,
        explanation: {
          pl: 'Konstrukcja „nie było” zawsze wymaga dopełniacza: „dużych sklepów”.',
          ru: 'Конструкция «nie było» всегда требует родительного падежа: «dużych sklepów».',
          en: '“Nie było” always requires the genitive case: “dużych sklepów”.',
        },
      },
      {
        id: 't6-q3',
        prompt: 'Ci młodzi ___ są bardzo sympatyczni.',
        options: ['studenty', 'studenci', 'studentów', 'studentami'],
        correctIndex: 1,
        explanation: {
          pl: 'Mianownik liczby mnogiej rodzaju męskoosobowego: „studenci”.',
          ru: 'Именительный падеж мн. ч. лично-мужского рода: «studenci».',
          en: 'Masculine personal plural nominative: “studenci”.',
        },
      },
      {
        id: 't6-q4',
        prompt: 'To jest kolega, ___ poznałem na kursie w Krakowie.',
        options: ['który', 'którego', 'któremu', 'którym'],
        correctIndex: 1,
        explanation: {
          pl: 'Czasownik „poznać” wymaga biernika (kogo?): „którego poznałem”.',
          ru: 'Глагол «poznać» требует винительного падежа (кого?): «którego poznałem».',
          en: '“Poznać” takes the accusative (whom?): “którego poznałem”.',
        },
      },
      {
        id: 't6-q5',
        prompt: 'Poszliśmy do kina, ___ obejrzeć nowy polski film.',
        options: ['żeby', 'ponieważ', 'dlatego', 'bo'],
        correctIndex: 0,
        explanation: {
          pl: 'Zdanie celowe z bezokolicznikiem budujemy za pomocą spójnika „żeby”.',
          ru: 'Придаточное цели с инфинитивом строится с помощью «żeby».',
          en: 'Purpose clauses with an infinitive use “żeby”.',
        },
      },
    ],
  },
  {
    id: 'test-7',
    courseId: 'part-2',
    afterLessonId: 36,
    lessonRange: '06–10',
    title: {
      pl: 'Test 7 · Część 2 (Lekcje 06–10)',
      ru: 'Тест 7 · Часть 2 (Уроки 06–10)',
      en: 'Test 7 · Part 2 (Lessons 06–10)',
    },
    description: {
      pl: 'Rzeczowniki odczasownikowe, biernik l. mn., tryb rozkazujący i miejscownik.',
      ru: 'Отглагольные существительные, винительный мн. ч., повелительное наклонение и предложный.',
      en: 'Verbal nouns, plural accusative, imperative mood, and locative.',
    },
    questions: [
      {
        id: 't7-q1',
        prompt: 'Przed wyjazdem nie ___ zabrać dokumentów!',
        options: ['zapomnisz', 'zapomnij', 'zapomniałeś', 'zapominać'],
        correctIndex: 1,
        explanation: {
          pl: 'Tryb rozkazujący od „zapomnieć” dla „ty” to „zapomnij”.',
          ru: 'Повелительное наклонение от «zapomnieć» для «ty» — «zapomnij».',
          en: 'The imperative of “zapomnieć” for “ty” is “zapomnij”.',
        },
      },
      {
        id: 't7-q2',
        prompt: '___ języka polskiego wymaga codziennej praktyki.',
        options: ['Czytać', 'Czytanie', 'Czytam', 'Czytający'],
        correctIndex: 1,
        explanation: {
          pl: 'Rzeczownik odczasownikowy (co?): „czytanie”.',
          ru: 'Отглагольное существительное (что?): «czytanie».',
          en: 'Verbal noun (what?): “czytanie”.',
        },
      },
      {
        id: 't7-q3',
        prompt: 'Bardzo lubię moich ___ z pracy.',
        options: ['koledzy', 'kolegów', 'kolegom', 'kolegami'],
        correctIndex: 1,
        explanation: {
          pl: 'Biernik liczby mnogiej rodzaju męskoosobowego ma formę równą dopełniaczowi: „kolegów”.',
          ru: 'Винительный падеж мн. ч. лично-мужского рода совпадает с родительным: «kolegów».',
          en: 'Masculine personal plural accusative matches the genitive: “kolegów”.',
        },
      },
      {
        id: 't7-q4',
        prompt: 'W czasie rozmowy kwalifikacyjnej ważne jest ___.',
        options: ['doświadczenie', 'doświadczenia', 'doświadczeniem', 'doświadczeniu'],
        correctIndex: 0,
        explanation: {
          pl: 'Podmiot zdania stoi w mianowniku: „ważne jest doświadczenie”.',
          ru: 'Подлежащее стоит в именительном падеже: «ważne jest doświadczenie».',
          en: 'The subject is in the nominative case: “doświadczenie”.',
        },
      },
      {
        id: 't7-q5',
        prompt: 'Mieszkam w pięknym, spokojnym ___ nad morzem.',
        options: ['miasto', 'miasta', 'mieście', 'miastem'],
        correctIndex: 2,
        explanation: {
          pl: 'Miejscownik od „miasto” z wymianą spółgłosek (st -> ści): „w mieście”.',
          ru: 'Предложный падеж от «miasto» с чередованием: «w mieście».',
          en: 'Locative of “miasto” with consonant alternation: “w mieście”.',
        },
      },
    ],
  },
  {
    id: 'test-8',
    courseId: 'part-2',
    afterLessonId: 42,
    lessonRange: '11–16',
    title: {
      pl: 'Test 8 · Część 2 (Lekcje 11–16)',
      ru: 'Тест 8 · Часть 2 (Уроки 11–16)',
      en: 'Test 8 · Part 2 (Lessons 11–16)',
    },
    description: {
      pl: 'Czasowniki ruchu z przedrostkami, celownik oraz święta i tradycje.',
      ru: 'Глаголы движения с приставками, дательный падеж, праздники и традиции.',
      en: 'Prefixed motion verbs, dative case, and Polish holidays.',
    },
    questions: [
      {
        id: 't8-q1',
        prompt: 'Gdy ___ do pokoju, wszyscy już siedzieli przy stole.',
        options: ['wyszedłem', 'wszedłem', 'przeszedłem', 'odszedłem'],
        correctIndex: 1,
        explanation: {
          pl: 'Ruch do środka (do pokoju) wyrażamy przedrostkiem w-: „wszedłem”.',
          ru: 'Движение внутрь (в комнату) выражается приставкой w-: «wszedłem».',
          en: 'Entering a room uses the prefix w-: “wszedłem”.',
        },
      },
      {
        id: 't8-q2',
        prompt: 'Chętnie pomogę ___ w przeprowadzce.',
        options: ['brat', 'brata', 'bratu', 'bratem'],
        correctIndex: 2,
        explanation: {
          pl: 'Czasownik „pomagać” łączy się z celownikiem (komu? czemu?): „bratu”.',
          ru: 'Глагол «pomagać» требует дательного падежа (кому?): «bratu».',
          en: '“Pomagać” takes the dative case (to whom?): “bratu”.',
        },
      },
      {
        id: 't8-q3',
        prompt: 'Wigilia Bożego Narodzenia w Polsce jest ___.',
        options: ['24 grudnia', '25 grudnia', '26 grudnia', '31 grudnia'],
        correctIndex: 0,
        explanation: {
          pl: 'Wigilia w Polsce obchodzona jest 24 grudnia.',
          ru: 'Сочельник (Wigilia) в Польше празднуется 24 grudnia (24 декабря).',
          en: 'Polish Christmas Eve (Wigilia) is celebrated on December 24.',
        },
      },
      {
        id: 't8-q4',
        prompt: 'Samochód właśnie ___ na parking przed budynkiem.',
        options: ['wjechał', 'wyjechał', 'przejechał', 'odjechał'],
        correctIndex: 0,
        explanation: {
          pl: 'Wjazd na teren parkingu to „wjechał na parking”.',
          ru: 'Въезд на парковку — «wjechał na parking».',
          en: 'Driving into a parking lot is “wjechał na parking”.',
        },
      },
      {
        id: 't8-q5',
        prompt: 'Dziękuję ___ za szybką odpowiedź!',
        options: ['ciebie', 'ci', 'tobą', 'ty'],
        correctIndex: 1,
        explanation: {
          pl: 'Po „dziękować” używamy celownika: „dziękuję ci”.',
          ru: 'После «dziękować» используется дательный падеж: «dziękuję ci».',
          en: '“Dziękować” takes the dative case: “dziękuję ci”.',
        },
      },
    ],
  },
  {
    id: 'test-9',
    courseId: 'part-2',
    afterLessonId: 49,
    lessonRange: '17–23',
    title: {
      pl: 'Test 9 · Część 2 (Lekcje 17–23)',
      ru: 'Тест 9 · Часть 2 (Уроки 17–23)',
      en: 'Test 9 · Part 2 (Lessons 17–23)',
    },
    description: {
      pl: 'Zdania warunkowe, strona bierna, rzeczowniki na -um i podsumowanie B1.',
      ru: 'Условные предложения, страдательный залог, слова на -um и итоги B1.',
      en: 'Conditionals, passive voice, -um nouns, and B1 summary.',
    },
    questions: [
      {
        id: 't9-q1',
        prompt: 'Gdybym ___ więcej wolnego czasu, nauczyłbym się grać na pianinie.',
        options: ['mam', 'miałem', 'miał', 'będę mieć'],
        correctIndex: 2,
        explanation: {
          pl: 'W trybie przypuszczającym po „gdybym” używamy formy bez końcówki osobowej: „miał”.',
          ru: 'В сослагательном наклонении после «gdybym» используется основа прошедшего времени: «miał».',
          en: 'After “gdybym”, use the past participle stem without personal ending: “miał”.',
        },
      },
      {
        id: 't9-q2',
        prompt: 'Ten znany obraz ___ w XIX wieku.',
        options: ['namalował', 'został namalowany', 'maluje się', 'namaluje'],
        correctIndex: 1,
        explanation: {
          pl: 'Strona bierna w czasie przeszłym dla czynności dokonanej: „został namalowany”.',
          ru: 'Страдательный залог в прошедшем времени: «został namalowany».',
          en: 'Past passive voice for a completed action: “został namalowany”.',
        },
      },
      {
        id: 't9-q3',
        prompt: 'W Krakowie zwiedziliśmy kilka ciekawych ___.',
        options: ['muzeum', 'muzea', 'muzeów', 'muzeami'],
        correctIndex: 2,
        explanation: {
          pl: 'Po „kilka” używamy dopełniacza liczby mnogiej: „muzeów”.',
          ru: 'После «kilka» используется родительный падеж мн. ч.: «muzeów».',
          en: 'After “kilka”, use the genitive plural: “muzeów”.',
        },
      },
      {
        id: 't9-q4',
        prompt: 'Jeśli jutro ___ ładna pogoda, pojedziemy nad jezioro.',
        options: ['była', 'będzie', 'byłaby', 'jest'],
        correctIndex: 1,
        explanation: {
          pl: 'Realny warunek w przyszłości po „jeśli” wyrażamy czasem przyszłym: „będzie”.',
          ru: 'Реальное условие в будущем после «jeśli» выражается будущим временем: «będzie».',
          en: 'Real future conditions after “jeśli” use the future tense: “będzie”.',
        },
      },
      {
        id: 't9-q5',
        prompt: 'Pamiętaj, żeby oszczędzać wodę — to ważne dla naszego ___.',
        options: ['środowisko', 'środowiska', 'środowisku', 'środowiskiem'],
        correctIndex: 1,
        explanation: {
          pl: 'Po przyimku „dla” używamy dopełniacza: „dla środowiska”.',
          ru: 'После предлога «dla» используется родительный падеж: «dla środowiska».',
          en: 'After “dla”, use the genitive case: “dla środowiska”.',
        },
      },
    ],
  },
];

export function getCheckpointTestById(id: string | null): CheckpointTest | null {
  if (!id) return null;
  return CHECKPOINT_TESTS.find((test) => test.id === id) ?? null;
}

export function getCheckpointAfterLesson(courseId: string, lessonId: number): CheckpointTest | null {
  return CHECKPOINT_TESTS.find((test) => test.courseId === courseId && test.afterLessonId === lessonId) ?? null;
}

export interface CheckpointScore {
  score: number;
  total: number;
}

const CHECKPOINT_STORAGE_KEY = 'polski-checkpoint-scores-v1';

export function readCheckpointScores(): Record<string, CheckpointScore> {
  try {
    if (typeof localStorage === 'undefined') return {};
    const raw = localStorage.getItem(CHECKPOINT_STORAGE_KEY);
    return raw ? (JSON.parse(raw) as Record<string, CheckpointScore>) : {};
  } catch {
    return {};
  }
}

export function saveCheckpointScore(testId: string, score: number, total: number): Record<string, CheckpointScore> {
  const current = readCheckpointScores();
  const prev = current[testId];
  const bestScore = prev ? Math.max(prev.score, score) : score;
  const next = { ...current, [testId]: { score: bestScore, total } };
  try {
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem(CHECKPOINT_STORAGE_KEY, JSON.stringify(next));
    }
  } catch {
    // Storage is optional.
  }
  return next;
}
