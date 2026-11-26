import type { Language } from '../i18n/language.service';
import type { Activity } from './lesson-types';
import type { LessonTheory, TheoryBlock } from './lesson-theory';
import { PART1_THEORY_BLOCKS } from './lesson-theory-blocks-part1';
import { PART2_THEORY_BLOCKS } from './lesson-theory-blocks-part2';
import { PART3_THEORY_BLOCKS } from './lesson-theory-blocks-part3';

export interface ResolvedActivityTheory {
  block: TheoryBlock;
  isBlockStart: boolean;
  blockIndex: number;
  totalBlocks: number;
}

const LESSON_1_5_BLOCKS: Record<Language, Record<number, TheoryBlock[]>> = {
  ru: {
    1: [
      {
        id: 'l01-b1',
        includeCoursebook: true,
        wbRange: [1, 4],
        title: 'Приветствия, прощания и польские буквы',
        summary: 'В польском языке чётко различают официальное обращение (Pan / Pani) и неформальное (ty). На письме важны диакритические знаки и сочетания букв (диграфы).',
        bullets: [
          'Официально: Dzień dobry (Добрый день), Do widzenia (До свидания), Jak się pan/pani nazywa?',
          'Неформально: Cześć (Привет / Пока), Jak się nazywasz?, A ty?',
          'Вежливая реакция на знакомство: Bardzo mi miło — Mnie również.',
          'Частые диграфы: sz (ш), cz (ч), rz / ż (ж), ch (х), dz / dź / dż.',
        ],
        table: {
          headers: ['Буква / сочетание', 'Произношение', 'Пример из урока'],
          rows: [
            ['ą / ę', 'носовые «он» / «эн»', 'dziękuję, się'],
            ['ć / ś / ź / ń', 'мягкие «ть» / «сь» / «зь» / «нь»', 'cześć, dzień, pani'],
            ['ł', 'как английское w', 'miło, słucham'],
            ['sz / cz / rz', 'твёрдые «ш» / «ч» / «ж»', 'proszę, cześć, przepraszam'],
          ],
        },
        examples: [
          { polish: 'Dzień dobry. Jestem Ewa Potocka.', translation: 'Добрый день. Я Эва Потоцка.' },
          { polish: 'Cześć, jestem Jan, a ty?', translation: 'Привет, я Ян, а ты?' },
        ],
      },
      {
        id: 'l01-b2',
        includeCoursebook: false,
        wbRange: [5, 11],
        title: 'Как представиться: Mam na imię / Nazywam się / Jestem',
        summary: 'Выбор конструкции зависит от того, называете ли вы только имя, имя и фамилию или роль.',
        bullets: [
          'Mam na imię… — только имя (On ma na imię Piotr).',
          'Nazywam się… — имя и фамилия или фамилия (Jak pani się nazywa? One nazywają się Grant).',
          'Jestem… — имя, национальность или роль (Jestem Joanna. Jestem Niemcem).',
        ],
        table: {
          headers: ['Лицо', 'być (быть)', 'nazywać się (зваться)', 'mieć na imię'],
          rows: [
            ['ja', 'jestem', 'nazywam się', 'mam na imię'],
            ['ty', 'jesteś', 'nazywasz się', 'masz na imię'],
            ['on / ona / pan / pani', 'jest', 'nazywa się', 'ma na imię'],
            ['oni / one', 'są', 'nazywają się', 'mają na imię'],
          ],
        },
        examples: [
          { polish: 'Jak się pan nazywa? — Nazywam się Thomas Fischer.', translation: 'Как вас зовут? — Меня зовут Томас Фишер.' },
          { polish: 'On ma na imię Piotr.', translation: 'Его зовут Пётр.' },
        ],
      },
      {
        id: 'l01-b3',
        includeCoursebook: false,
        wbRange: [12, 16],
        title: 'Числа 0–10 и фразы на уроке',
        summary: 'Запоминаем первые числительные для номеров телефонов и базовые фразы, чтобы попросить повторить или объяснить слово.',
        bullets: [
          'Числа 0–10: zero, jeden, dwa, trzy, cztery, pięć, sześć, siedem, osiem, dziewięć, dziesięć.',
          'Фразы на уроке: Co to znaczy? (Что это значит?), Nie rozumiem (Не понимаю), Proszę powtórzyć (Повторите, пожалуйста).',
          'Jak to jest po polsku? — Как это по-польски?',
        ],
        examples: [
          { polish: 'Przepraszam, nie rozumiem. Proszę powtórzyć.', translation: 'Извините, я не понимаю. Повторите, пожалуйста.' },
          { polish: 'Co to znaczy „sekretariat”?', translation: 'Что значит «sekretariat»?' },
        ],
      },
    ],
    2: [
      {
        id: 'l02-b1',
        includeCoursebook: true,
        wbRange: [1, 6],
        title: '«Co słychać?» и личные местоимения',
        summary: 'Спрашиваем, как дела у друзей и у официальных лиц, и используем личные местоимения единственного и множественного числа.',
        bullets: [
          'Неформально: Co słychać? / Co u ciebie? — Wszystko w porządku / Po staremu / Nic nowego.',
          'Официально: Co u pana / pani słychać? — Dziękuję, dobrze.',
          'Личные местоимения во множественном числе: oni (есть хотя бы один мужчина) и one (только женщины, дети или предметы).',
        ],
        table: {
          headers: ['Ед. число', 'Мн. число', 'Когда используем'],
          rows: [
            ['ja', 'my', 'я → мы'],
            ['ty', 'wy', 'ты → вы (неформ.)'],
            ['on / ona / ono', 'oni / one', 'oni = с мужчинами; one = женщины/вещи'],
            ['pan / pani', 'panowie / panie / państwo', 'вежливое обращение во мн. ч.'],
          ],
        },
        examples: [
          { polish: 'Cześć, co słychać? — Wszystko w porządku, a u ciebie?', translation: 'Привет, как дела? — Всё в порядке, а у тебя?' },
        ],
      },
      {
        id: 'l02-b2',
        includeCoursebook: false,
        wbRange: [7, 12],
        title: 'Спряжение глагола być и глаголов на -m, -sz',
        summary: 'Глаголы первой группы (czytać, mieszkać, pytać, znać, kochać, oglądać) в настоящем времени получают окончания -m, -sz, -Ø, -my, -cie, -ją.',
        table: {
          headers: ['Местоимение', 'być', 'czytać (-m, -sz)', 'mieszkać (-m, -sz)'],
          rows: [
            ['ja', 'jestem', 'czytam', 'mieszkam'],
            ['ty', 'jesteś', 'czytasz', 'mieszkasz'],
            ['on / ona / ono', 'jest', 'czyta', 'mieszka'],
            ['my', 'jesteśmy', 'czytamy', 'mieszkamy'],
            ['wy', 'jesteście', 'czytacie', 'mieszkacie'],
            ['oni / one', 'są', 'czytają', 'mieszkają'],
          ],
        },
        examples: [
          { polish: 'Gdzie mieszkasz? — Mieszkam w Krakowie.', translation: 'Где ты живёшь? — Я живу в Кракове.' },
          { polish: 'Oni czytają i mieszkają w Polsce.', translation: 'Они читают и живут в Польше.' },
        ],
      },
      {
        id: 'l02-b3',
        includeCoursebook: false,
        wbRange: [13, 18],
        title: 'Числа 11–29, цель (żeby) и причина (bo)',
        summary: 'Учим числа до 29, адреса и различаем союзы цели и причины.',
        bullets: [
          '11–19 оканчиваются на -naście: jedenaście, dwanaście, trzynaście, czternaście, piętnaście…',
          '20–29: dwadzieścia, dwadzieścia jeden, dwadzieścia dwa…',
          '„żeby + инфинитив” = зачем/чтобы (Uczę się polskiego, żeby studiować w Polsce).',
          '„bo + личная форма глагола” = потому что (Uczę się polskiego, bo lubię ten kraj).',
        ],
        examples: [
          { polish: 'Uczę się polskiego, żeby pracować w Warszawie, bo bardzo lubię to miasto.', translation: 'Я учу польский, чтобы работать в Варшаве, потому что мне очень нравится этот город.' },
        ],
      },
    ],
    3: [
      {
        id: 'l03-b1',
        includeCoursebook: true,
        wbRange: [1, 5],
        title: '«Kto to jest?» / «Co to jest?» и предметы в классе',
        summary: 'Спрашиваем о людях (Kto to jest?) и о предметах (Co to jest?). Универсальный ответ начинается с «To jest…».',
        bullets: [
          'Kto to jest? — о людях (To jest student, nauczycielka, koleżanka).',
          'Co to jest? — о предметах и животных (To jest książka, zeszyt, długopis, komórka).',
          'После «To jest…» существительное и прилагательное всегда стоят в именительном падеже (Mianownik).',
        ],
        examples: [
          { polish: 'Co to jest? — To jest komórka.', translation: 'Что это? — Это мобильный телефон.' },
          { polish: 'Kto to jest? — To jest nowy student.', translation: 'Кто это? — Это новый студент.' },
        ],
      },
      {
        id: 'l03-b2',
        includeCoursebook: false,
        wbRange: [6, 14],
        title: 'Три рода (ten, ta, to) и окончания прилагательных',
        summary: 'В польском языке род существительного определяется по его окончанию, а прилагательное и указательное слово согласуются с ним.',
        table: {
          headers: ['Род', 'Указ. слово', 'Вопрос', 'Существительное', 'Прилагательное', 'Пример'],
          rows: [
            ['Мужской (m)', 'ten', 'jaki?', 'согласная (иногда -a)', '-y / -i (после k, g)', 'ten nowy stół, polski klucz'],
            ['Женский (ż)', 'ta', 'jaka?', '-a (иногда -i)', '-a', 'ta nowa książka, czarna kawa'],
            ['Средний (n)', 'to', 'jakie?', '-o, -e, -ę, -um', '-e / -ie (после k, g)', 'to nowe okno, małe dziecko'],
          ],
        },
        bullets: [
          'После k и g в мужском роде пишем -i (polski, drogi), в среднем — -ie (polskie, drogie).',
          'После мягких согласных и c, cz, sz, rz, ż в среднем роде тоже -ie или -e (duże okno, tanie pióro).',
        ],
        examples: [
          { polish: 'Ten długopis jest żółty, ta torba jest fioletowa, to krzesło jest zielone.', translation: 'Эта ручка жёлтая, эта сумка фиолетовая, этот стул зелёный.' },
        ],
      },
    ],
    4: [
      {
        id: 'l04-b1',
        includeCoursebook: true,
        wbRange: [1, 6],
        title: 'Языки: mówić po polsku vs uczyć się języka polskiego',
        summary: 'Три частых глагола для темы языков требуют разных конструкций после себя.',
        table: {
          headers: ['Глагол', 'Конструкция', 'Пример'],
          rows: [
            ['mówić', 'po + наречие на -u', 'Mówię po polsku, po angielsku.'],
            ['znać', 'винительный падеж (кого? что?)', 'Znam język polski.'],
            ['uczyć się', 'родительный падеж (чего?)', 'Uczę się języka polskiego.'],
          ],
        },
        bullets: [
          'Различайте: uczyć kogoś (обучать кого-то) и uczyć się (учиться самому).',
          'Для связи мыслей: i (и), ale (но), bo (потому что).',
        ],
        examples: [
          { polish: 'Mówię trochę po polsku i uczę się języka polskiego, ale to jest trudne.', translation: 'Я немного говорю по-польски и учу польский язык, но это трудно.' },
        ],
      },
      {
        id: 'l04-b2',
        includeCoursebook: false,
        wbRange: [7, 15],
        title: 'Спряжение на -ę, -isz/-ysz и описание людей',
        summary: 'Глаголы второй группы (myśleć, mówić, lubić, uczyć się) имеют в 1-м лице окончание -ę, а во 2-м и 3-м — -isz / -ysz.',
        table: {
          headers: ['Местоимение', 'myśleć', 'mówić', 'uczyć się'],
          rows: [
            ['ja', 'myślę', 'mówię', 'uczę się'],
            ['ty', 'myślisz', 'mówisz', 'uczysz się'],
            ['on / ona', 'myśli', 'mówi', 'uczy się'],
            ['my', 'myślimy', 'mówimy', 'uczymy się'],
            ['wy', 'myślicie', 'mówicie', 'uczycie się'],
            ['oni / one', 'myślą', 'mówią', 'uczą się'],
          ],
        },
        examples: [
          { polish: 'Myślę, że nowy student jest bardzo wysoki i sympatyczny.', translation: 'Думаю, что новый студент очень высокий и симпатичный.' },
        ],
      },
    ],
    5: [
      {
        id: 'l05-b1',
        includeCoursebook: true,
        wbRange: [1, 7],
        title: 'Возраст (rok / lata / lat) и числа 20–100',
        summary: 'В польском языке форма слова «год» после числительного зависит от последней цифры возраста.',
        table: {
          headers: ['Число', 'Слово «год»', 'Пример'],
          rows: [
            ['1', 'rok', 'Mam jeden rok.'],
            ['2, 3, 4 (и 22–24, 32–34…)', 'lata', 'Mam 24 lata.'],
            ['5–21, 25–31… (и все -naście)', 'lat', 'Mam 14 lat. Mam 40 lat.'],
          ],
        },
        bullets: [
          'Десятки: 20 dwadzieścia, 30 trzydzieści, 40 czterdzieści, 50 pięćdziesiąt, 60 sześćdziesiąt, 70 siedemdziesiąt, 80 osiemdziesiąt, 90 dziewięćdziesiąt, 100 sto.',
        ],
        examples: [
          { polish: 'Ile masz lat? — Mam 24 lata, a mój brat ma 18 lat.', translation: 'Сколько тебе лет? — Мне 24 года, а моему брату 18 лет.' },
        ],
      },
      {
        id: 'l05-b2',
        includeCoursebook: false,
        wbRange: [8, 17],
        title: 'Творительный падеж (Narzędnik): профессии, национальности и интересы',
        summary: 'После глаголов być (когда называем профессию, национальность, роль) и interesować się (интересоваться чем-то) используем Narzędnik (kim? czym?).',
        table: {
          headers: ['Род', 'Прилагательное', 'Существительное', 'Пример'],
          rows: [
            ['Мужской / средний', '-ym / -im', '-em / -iem (после k, g)', 'dobrym studentem, Polakiem'],
            ['Женский', '-ą', '-ą', 'dobrą studentką, Polką, muzyką'],
          ],
        },
        bullets: [
          'Но после «To jest…» всегда остаётся именительный падеж: To jest dobry student (без -em).',
          'Чередование в основе: Polak → Polakiem, Niemiec → Niemcem, Anglik → Anglikiem.',
        ],
        examples: [
          { polish: 'Jestem nauczycielką i interesuję się muzyką.', translation: 'Я учительница и интересуюсь музыкой.' },
          { polish: 'Uwe jest biznesmenem, a Jonatan jest pracowitym studentem.', translation: 'Уве — бизнесмен, а Йонатан — трудолюбивый студент.' },
        ],
      },
    ],
  },
  pl: {
    1: [
      {
        id: 'l01-b1',
        includeCoursebook: true,
        wbRange: [1, 4],
        title: 'Powitania, pożegnania i polskie litery',
        summary: 'W języku polskim rozróżniamy zwroty oficjalne (Pan / Pani) i nieoficjalne (ty). Zwracaj uwagę na polskie znaki i dwuznaki.',
        bullets: [
          'Oficjalnie: Dzień dobry, Do widzenia, Jak się pan/pani nazywa?',
          'Nieoficjalnie: Cześć, Jak się nazywasz?, A ty?',
          'Reakcja na poznanie: Bardzo mi miło — Mnie również.',
        ],
        table: {
          headers: ['Litera / dwuznak', 'Wskazówka', 'Przykład'],
          rows: [
            ['ą / ę', 'samogłoski nosowe', 'dziękuję, się'],
            ['ć / ś / ź / ń', 'spółgłoski miękkie', 'cześć, dzień, pani'],
            ['sz / cz / rz', 'dwuznaki twarde', 'proszę, cześć, przepraszam'],
          ],
        },
        examples: [
          { polish: 'Dzień dobry. Jestem Ewa Potocka.', translation: 'Oficjalne powitanie i przedstawienie się.' },
          { polish: 'Cześć, jestem Jan, a ty?', translation: 'Nieoficjalne powitanie.' },
        ],
      },
      {
        id: 'l01-b2',
        includeCoursebook: false,
        wbRange: [5, 11],
        title: 'Przedstawianie się: Mam na imię / Nazywam się / Jestem',
        summary: 'Wybór formy zależy od tego, czy podajesz samo imię, imię i nazwisko, czy rolę.',
        bullets: [
          'Mam na imię… — tylko imię (On ma na imię Piotr).',
          'Nazywam się… — imię i nazwisko (Jak pani się nazywa? One nazywają się Grant).',
          'Jestem… — imię, narodowość lub zawód (Jestem Joanna. Jestem Niemcem).',
        ],
        examples: [
          { polish: 'Jak się pan nazywa? — Nazywam się Thomas Fischer.', translation: 'Pytanie o nazwisko w formie oficjalnej.' },
        ],
      },
      {
        id: 'l01-b3',
        includeCoursebook: false,
        wbRange: [12, 16],
        title: 'Liczby 0–10 i zwroty na lekcji',
        summary: 'Liczebniki 0–10 przydają się do numerów telefonów, a zwroty klasowe pomagają dopytać o znaczenie słowa.',
        bullets: [
          '0–10: zero, jeden, dwa, trzy, cztery, pięć, sześć, siedem, osiem, dziewięć, dziesięć.',
          'Co to znaczy? / Nie rozumiem. / Proszę powtórzyć.',
        ],
        examples: [
          { polish: 'Przepraszam, nie rozumiem. Proszę powtórzyć.', translation: 'Prośba o powtórzenie na zajęciach.' },
        ],
      },
    ],
    2: [
      {
        id: 'l02-b1',
        includeCoursebook: true,
        wbRange: [1, 6],
        title: '„Co słychać?” i zaimki osobowe',
        summary: 'Pytamy o samopoczucie w sytuacjach prywatnych i oficjalnych oraz używamy zaimków w liczbie pojedynczej i mnogiej.',
        bullets: [
          'Co słychać? / Co u ciebie? — Wszystko w porządku / Po staremu / Nic nowego.',
          'Liczba mnoga: oni (gdy w grupie jest mężczyzna) vs one (kobiety, dzieci, rzeczy).',
        ],
        examples: [
          { polish: 'Cześć, co słychać? — Wszystko w porządku, a u ciebie?', translation: 'Rozmowa nieoficjalna.' },
        ],
      },
      {
        id: 'l02-b2',
        includeCoursebook: false,
        wbRange: [7, 12],
        title: 'Odmiana czasownika być i czasowników na -m, -sz',
        summary: 'Czasowniki takie jak czytać, mieszkać, pytać, znać przyjmują końcówki -m, -sz, -Ø, -my, -cie, -ją.',
        table: {
          headers: ['Zaimek', 'być', 'czytać', 'mieszkać'],
          rows: [
            ['ja', 'jestem', 'czytam', 'mieszkam'],
            ['ty', 'jesteś', 'czytasz', 'mieszkasz'],
            ['on / ona / ono', 'jest', 'czyta', 'mieszka'],
            ['my', 'jesteśmy', 'czytamy', 'mieszkamy'],
            ['wy', 'jesteście', 'czytacie', 'mieszkacie'],
            ['oni / one', 'są', 'czytają', 'mieszkają'],
          ],
        },
        examples: [
          { polish: 'Gdzie mieszkasz? — Mieszkam w Krakowie.', translation: 'Pytanie o miejsce zamieszkania.' },
        ],
      },
      {
        id: 'l02-b3',
        includeCoursebook: false,
        wbRange: [13, 18],
        title: 'Liczby 11–29, „żeby” i „bo”',
        summary: 'Poznajemy liczby 11–29, adresy oraz spójniki celu i przyczyny.',
        bullets: [
          '„żeby + bezokolicznik” wyraża cel: Uczę się polskiego, żeby studiować w Polsce.',
          '„bo + czasownik osobowy” wyraża przyczynę: Uczę się polskiego, bo lubię ten kraj.',
        ],
        examples: [
          { polish: 'Uczę się polskiego, żeby studiować w Polsce, bo bardzo lubię ten kraj.', translation: 'Połączenie celu i przyczyny.' },
        ],
      },
    ],
    3: [
      {
        id: 'l03-b1',
        includeCoursebook: true,
        wbRange: [1, 5],
        title: '„Kto to jest?” / „Co to jest?” i przedmioty w klasie',
        summary: 'Pytamy o osoby (Kto to jest?) oraz przedmioty (Co to jest?). Odpowiedź „To jest…” łączy się z mianownikiem.',
        examples: [
          { polish: 'Co to jest? — To jest komórka.', translation: 'Pytanie o przedmiot.' },
          { polish: 'Kto to jest? — To jest nowy student.', translation: 'Pytanie o osobę.' },
        ],
      },
      {
        id: 'l03-b2',
        includeCoursebook: false,
        wbRange: [6, 14],
        title: 'Rodzaje gramatyczne (ten, ta, to) i przymiotniki',
        summary: 'Rodzaj rzeczownika rozpoznajemy po końcówce, a przymiotnik dopasowujemy do rzeczownika.',
        table: {
          headers: ['Rodzaj', 'Zaimek', 'Rzeczownik', 'Przymiotnik', 'Przykład'],
          rows: [
            ['Męski', 'ten', 'spółgłoska', '-y / -i (po k, g)', 'ten nowy stół'],
            ['Żeński', 'ta', '-a / -i', '-a', 'ta nowa książka'],
            ['Nijaki', 'to', '-o, -e, -ę, -um', '-e / -ie (po k, g)', 'to nowe okno'],
          ],
        },
        examples: [
          { polish: 'Ten długopis jest żółty, ta torba jest fioletowa, to krzesło jest zielone.', translation: 'Zgodność rodzaju i przymiotnika.' },
        ],
      },
    ],
    4: [
      {
        id: 'l04-b1',
        includeCoursebook: true,
        wbRange: [1, 6],
        title: 'Języki: mówić po polsku vs uczyć się języka polskiego',
        summary: 'Różne czasowniki wymagają różnych form po sobie.',
        table: {
          headers: ['Czasownik', 'Konstrukcja', 'Przykład'],
          rows: [
            ['mówić', 'po + -u', 'Mówię po polsku.'],
            ['znać', 'biernik', 'Znam język polski.'],
            ['uczyć się', 'dopełniacz', 'Uczę się języka polskiego.'],
          ],
        },
        examples: [
          { polish: 'Mówię trochę po polsku i uczę się języka polskiego, ale to jest trudne.', translation: 'Użycie spójników i, ale.' },
        ],
      },
      {
        id: 'l04-b2',
        includeCoursebook: false,
        wbRange: [7, 15],
        title: 'Koniugacja -ę, -isz/-ysz i opisywanie osób',
        summary: 'Czasowniki myśleć, mówić, lubić, uczyć się mają w 1. os. -ę, a w 2. i 3. os. -isz lub -ysz.',
        table: {
          headers: ['Osoba', 'myśleć', 'mówić', 'uczyć się'],
          rows: [
            ['ja', 'myślę', 'mówię', 'uczę się'],
            ['ty', 'myślisz', 'mówisz', 'uczysz się'],
            ['on / ona', 'myśli', 'mówi', 'uczy się'],
            ['my', 'myślimy', 'mówimy', 'uczymy się'],
            ['wy', 'myślicie', 'mówicie', 'uczycie się'],
            ['oni / one', 'myślą', 'mówią', 'uczą się'],
          ],
        },
        examples: [
          { polish: 'Myślę, że nowy student jest wysoki i sympatyczny.', translation: 'Opis osoby.' },
        ],
      },
    ],
    5: [
      {
        id: 'l05-b1',
        includeCoursebook: true,
        wbRange: [1, 7],
        title: 'Wiek (rok / lata / lat) i liczby 20–100',
        summary: 'Forma słowa rok zależy od ostatniej cyfry liczby.',
        table: {
          headers: ['Liczba', 'Forma', 'Przykład'],
          rows: [
            ['1', 'rok', 'Mam jeden rok.'],
            ['2, 3, 4 (oraz 22–24…)', 'lata', 'Mam 24 lata.'],
            ['5–21, 25–31…', 'lat', 'Mam 18 lat. Mam 40 lat.'],
          ],
        },
        examples: [
          { polish: 'Ile masz lat? — Mam 24 lata.', translation: 'Pytanie i odpowiedź o wiek.' },
        ],
      },
      {
        id: 'l05-b2',
        includeCoursebook: false,
        wbRange: [8, 17],
        title: 'Narzędnik (kim? czym?) po być i interesować się',
        summary: 'Zawód, narodowość i zainteresowania po być oraz interesować się wymagają narzędnika.',
        table: {
          headers: ['Rodzaj', 'Przymiotnik', 'Rzeczownik', 'Przykład'],
          rows: [
            ['Męski / nijaki', '-ym / -im', '-em / -iem', 'dobrym studentem, Polakiem'],
            ['Żeński', '-ą', '-ą', 'dobrą studentką, muzyką'],
          ],
        },
        examples: [
          { polish: 'Jestem nauczycielką i interesuję się muzyką.', translation: 'Zawód i zainteresowanie w narzędniku.' },
        ],
      },
    ],
  },
  en: {
    1: [
      {
        id: 'l01-b1',
        includeCoursebook: true,
        wbRange: [1, 4],
        title: 'Greetings, farewells, and Polish letters',
        summary: 'Polish distinguishes formal (Pan / Pani) and informal (ty) greetings. Pay close attention to diacritics and digraphs.',
        bullets: [
          'Formal: Dzień dobry (Hello / Good day), Do widzenia (Goodbye), Jak się pan/pani nazywa?',
          'Informal: Cześć (Hi / Bye), Jak się nazywasz?, A ty?',
          'Nice to meet you: Bardzo mi miło — Mnie również.',
        ],
        table: {
          headers: ['Letter / digraph', 'Sound hint', 'Lesson example'],
          rows: [
            ['ą / ę', 'nasal vowels', 'dziękuję, się'],
            ['ć / ś / ź / ń', 'soft consonants', 'cześć, dzień, pani'],
            ['ł', 'like English w', 'miło, słucham'],
            ['sz / cz / rz', 'hard sh / ch / zh', 'proszę, cześć, przepraszam'],
          ],
        },
        examples: [
          { polish: 'Dzień dobry. Jestem Ewa Potocka.', translation: 'Good day. I am Ewa Potocka.' },
          { polish: 'Cześć, jestem Jan, a ty?', translation: 'Hi, I am Jan, and you?' },
        ],
      },
      {
        id: 'l01-b2',
        includeCoursebook: false,
        wbRange: [5, 11],
        title: 'Introducing yourself: Mam na imię / Nazywam się / Jestem',
        summary: 'Pick the structure based on whether you give your first name, full/last name, or role.',
        bullets: [
          'Mam na imię… — first name only (On ma na imię Piotr).',
          'Nazywam się… — full name or surname (Jak pani się nazywa? One nazywają się Grant).',
          'Jestem… — name, nationality, or role (Jestem Joanna. Jestem Niemcem).',
        ],
        examples: [
          { polish: 'Jak się pan nazywa? — Nazywam się Thomas Fischer.', translation: 'What is your name? — My name is Thomas Fischer.' },
        ],
      },
      {
        id: 'l01-b3',
        includeCoursebook: false,
        wbRange: [12, 16],
        title: 'Numbers 0–10 and classroom phrases',
        summary: 'Learn the first numbers for phone numbers and essential phrases to ask for repetition or meaning.',
        bullets: [
          '0–10: zero, jeden, dwa, trzy, cztery, pięć, sześć, siedem, osiem, dziewięć, dziesięć.',
          'Co to znaczy? (What does it mean?), Nie rozumiem (I don’t understand), Proszę powtórzyć (Please repeat).',
        ],
        examples: [
          { polish: 'Przepraszam, nie rozumiem. Proszę powtórzyć.', translation: 'Excuse me, I don’t understand. Please repeat.' },
        ],
      },
    ],
    2: [
      {
        id: 'l02-b1',
        includeCoursebook: true,
        wbRange: [1, 6],
        title: '“Co słychać?” and personal pronouns',
        summary: 'Ask how people are doing in casual and polite contexts, and use singular and plural pronouns.',
        bullets: [
          'Informal: Co słychać? / Co u ciebie? — Wszystko w porządku / Po staremu / Nic nowego.',
          'Plural: oni (group with at least one man) vs one (women, children, or objects).',
        ],
        examples: [
          { polish: 'Cześć, co słychać? — Wszystko w porządku, a u ciebie?', translation: 'Hi, how are things? — All good, and you?' },
        ],
      },
      {
        id: 'l02-b2',
        includeCoursebook: false,
        wbRange: [7, 12],
        title: 'Conjugation of być and -m, -sz verbs',
        summary: 'Verbs like czytać, mieszkać, pytać, znać take endings -m, -sz, -Ø, -my, -cie, -ją.',
        table: {
          headers: ['Pronoun', 'być', 'czytać', 'mieszkać'],
          rows: [
            ['ja', 'jestem', 'czytam', 'mieszkam'],
            ['ty', 'jesteś', 'czytasz', 'mieszkasz'],
            ['on / ona / ono', 'jest', 'czyta', 'mieszka'],
            ['my', 'jesteśmy', 'czytamy', 'mieszkamy'],
            ['wy', 'jesteście', 'czytacie', 'mieszkacie'],
            ['oni / one', 'są', 'czytają', 'mieszkają'],
          ],
        },
        examples: [
          { polish: 'Gdzie mieszkasz? — Mieszkam w Krakowie.', translation: 'Where do you live? — I live in Kraków.' },
        ],
      },
      {
        id: 'l02-b3',
        includeCoursebook: false,
        wbRange: [13, 18],
        title: 'Numbers 11–29, purpose (żeby) and reason (bo)',
        summary: 'Practise numbers 11–29, addresses, and contrast purpose vs reason clauses.',
        bullets: [
          '“żeby + infinitive” expresses purpose: Uczę się polskiego, żeby studiować w Polsce.',
          '“bo + conjugated verb” expresses reason: Uczę się polskiego, bo lubię ten kraj.',
        ],
        examples: [
          { polish: 'Uczę się polskiego, żeby studiować w Polsce, bo bardzo lubię ten kraj.', translation: 'I am learning Polish to study in Poland because I really like this country.' },
        ],
      },
    ],
    3: [
      {
        id: 'l03-b1',
        includeCoursebook: true,
        wbRange: [1, 5],
        title: '“Kto to jest?” / “Co to jest?” and classroom objects',
        summary: 'Use “Kto to jest?” for people and “Co to jest?” for things. “To jest…” works with all genders in the nominative case.',
        examples: [
          { polish: 'Co to jest? — To jest komórka.', translation: 'What is this? — It’s a mobile phone.' },
          { polish: 'Kto to jest? — To jest nowy student.', translation: 'Who is that? — That’s the new student.' },
        ],
      },
      {
        id: 'l03-b2',
        includeCoursebook: false,
        wbRange: [6, 14],
        title: 'Three grammatical genders (ten, ta, to) & adjectives',
        summary: 'Noun endings signal gender, and demonstratives and adjectives match that gender.',
        table: {
          headers: ['Gender', 'This', 'Noun ending', 'Adjective ending', 'Example'],
          rows: [
            ['Masculine', 'ten', 'consonant', '-y / -i (after k, g)', 'ten nowy stół'],
            ['Feminine', 'ta', '-a / -i', '-a', 'ta nowa książka'],
            ['Neuter', 'to', '-o, -e, -ę, -um', '-e / -ie (after k, g)', 'to nowe okno'],
          ],
        },
        examples: [
          { polish: 'Ten długopis jest żółty, ta torba jest fioletowa, to krzesło jest zielone.', translation: 'This pen is yellow, this bag is purple, this chair is green.' },
        ],
      },
    ],
    4: [
      {
        id: 'l04-b1',
        includeCoursebook: true,
        wbRange: [1, 6],
        title: 'Languages: mówić po polsku vs uczyć się języka polskiego',
        summary: 'Different verbs about languages require different grammatical cases.',
        table: {
          headers: ['Verb', 'Pattern', 'Example'],
          rows: [
            ['mówić', 'po + adverb in -u', 'Mówię po polsku.'],
            ['znać', 'accusative', 'Znam język polski.'],
            ['uczyć się', 'genitive', 'Uczę się języka polskiego.'],
          ],
        },
        examples: [
          { polish: 'Mówię trochę po polsku i uczę się języka polskiego, ale to jest trudne.', translation: 'I speak a little Polish and I am learning Polish, but it is hard.' },
        ],
      },
      {
        id: 'l04-b2',
        includeCoursebook: false,
        wbRange: [7, 15],
        title: 'Conjugation -ę, -isz/-ysz and describing people',
        summary: 'Verbs like myśleć, mówić, lubić, uczyć się take -ę in 1st person and -isz/-ysz in 2nd and 3rd person.',
        table: {
          headers: ['Pronoun', 'myśleć', 'mówić', 'uczyć się'],
          rows: [
            ['ja', 'myślę', 'mówię', 'uczę się'],
            ['ty', 'myślisz', 'mówisz', 'uczysz się'],
            ['on / ona', 'myśli', 'mówi', 'uczy się'],
            ['my', 'myślimy', 'mówimy', 'uczymy się'],
            ['wy', 'myślicie', 'mówicie', 'uczycie się'],
            ['oni / one', 'myślą', 'mówią', 'uczą się'],
          ],
        },
        examples: [
          { polish: 'Myślę, że nowy student jest wysoki i sympatyczny.', translation: 'I think the new student is tall and friendly.' },
        ],
      },
    ],
    5: [
      {
        id: 'l05-b1',
        includeCoursebook: true,
        wbRange: [1, 7],
        title: 'Age (rok / lata / lat) and numbers 20–100',
        summary: 'The word for “years” changes depending on the last digit of your age.',
        table: {
          headers: ['Number', 'Word for year(s)', 'Example'],
          rows: [
            ['1', 'rok', 'Mam jeden rok.'],
            ['2, 3, 4 (and 22–24…)', 'lata', 'Mam 24 lata.'],
            ['5–21, 25–31…', 'lat', 'Mam 18 lat. Mam 40 lat.'],
          ],
        },
        examples: [
          { polish: 'Ile masz lat? — Mam 24 lata.', translation: 'How old are you? — I am 24.' },
        ],
      },
      {
        id: 'l05-b2',
        includeCoursebook: false,
        wbRange: [8, 17],
        title: 'Instrumental case (Narzędnik): professions, nationalities & interests',
        summary: 'After być (for professions, nationalities, roles) and interesować się, nouns and adjectives take the instrumental case.',
        table: {
          headers: ['Gender', 'Adjective', 'Noun', 'Example'],
          rows: [
            ['Masculine / Neuter', '-ym / -im', '-em / -iem', 'dobrym studentem, Polakiem'],
            ['Feminine', '-ą', '-ą', 'dobrą studentką, muzyką'],
          ],
        },
        examples: [
          { polish: 'Jestem nauczycielką i interesuję się muzyką.', translation: 'I am a teacher and I am interested in music.' },
        ],
      },
    ],
  },
};

function parseWorkbookNumber(sourceExerciseId: string): number | null {
  const match = /^(?:WB|WB2|H3)-L\d+-E(\d+)$/i.exec(sourceExerciseId);
  return match ? Number(match[1]) : null;
}

function matchesBlock(activity: Activity, block: TheoryBlock): boolean {
  if (block.exerciseIds?.includes(activity.sourceExerciseId)) return true;
  if (block.includeCoursebook && activity.sourceExerciseId.startsWith('CB-')) return true;
  if (block.wbRange) {
    const num = parseWorkbookNumber(activity.sourceExerciseId);
    if (num !== null && num >= block.wbRange[0] && num <= block.wbRange[1]) return true;
  }
  return false;
}

function buildFallbackBlocks(
  lessonId: number,
  activities: Activity[],
  theory: LessonTheory,
  overviewTitle: string,
  grammarTitle: string,
  practiceTitle: string,
): TheoryBlock[] {
  const total = activities.length;
  const firstEnd = Math.max(0, Math.ceil(total / 3) - 1);
  const secondEnd = Math.max(firstEnd + 1, Math.ceil((total * 2) / 3) - 1);

  const blocks: TheoryBlock[] = [
    {
      id: `l${lessonId}-overview`,
      exerciseIds: activities.slice(0, firstEnd + 1).map((a) => a.sourceExerciseId),
      title: overviewTitle,
      summary: theory.communication,
      bullets: theory.vocabulary ? [theory.vocabulary] : undefined,
    },
  ];

  if (secondEnd > firstEnd && secondEnd < total) {
    blocks.push({
      id: `l${lessonId}-grammar`,
      exerciseIds: activities.slice(firstEnd + 1, secondEnd + 1).map((a) => a.sourceExerciseId),
      title: grammarTitle,
      summary: theory.grammar,
    });
  }

  const tailSlice = activities.slice(Math.min(total, secondEnd + 1));
  if (tailSlice.length > 0) {
    blocks.push({
      id: `l${lessonId}-practice`,
      exerciseIds: tailSlice.map((a) => a.sourceExerciseId),
      title: practiceTitle,
      summary: theory.grammar,
      examples: theory.examples,
    });
  } else if (blocks.length === 1) {
    blocks[0].examples = theory.examples;
  } else {
    blocks[blocks.length - 1].examples = theory.examples;
  }

  return blocks;
}

export function resolveActivityTheory(
  lessonId: number,
  activities: Activity[],
  activeIndex: number,
  theory: LessonTheory | undefined,
  locale: Language,
  labels: { overviewTitle: string; grammarTitle: string; practiceTitle: string },
): ResolvedActivityTheory | null {
  if (!theory || !activities.length || activeIndex < 0 || activeIndex >= activities.length) return null;

  const ruDetailed = PART1_THEORY_BLOCKS[lessonId] ?? PART2_THEORY_BLOCKS[lessonId];
  const customBlocks = theory.blocks
    ?? LESSON_1_5_BLOCKS[locale]?.[lessonId]
    ?? PART3_THEORY_BLOCKS[locale]?.[lessonId]
    ?? (locale === 'ru' ? ruDetailed : undefined);

  let blocks: TheoryBlock[];
  if (customBlocks?.length) {
    blocks = customBlocks;
  } else {
    blocks = buildFallbackBlocks(lessonId, activities, theory, labels.overviewTitle, labels.grammarTitle, labels.practiceTitle);
    const referenceTables = (ruDetailed ?? []).map((b) => b.table).filter((t): t is NonNullable<typeof t> => !!t);
    if (referenceTables.length && blocks.length > 0) {
      const targetIdx = blocks.length > 1 ? 1 : 0;
      blocks[targetIdx] = { ...blocks[targetIdx], table: referenceTables[0] };
      if (referenceTables[1] && blocks.length > 2) {
        blocks[2] = { ...blocks[2], table: referenceTables[1] };
      }
    }
  }

  const currentActivity = activities[activeIndex];
  let matchedIndex = blocks.findIndex((b) => matchesBlock(currentActivity, b));
  if (matchedIndex < 0) matchedIndex = blocks.length - 1;

  const block = blocks[matchedIndex];
  const prevActivity = activeIndex > 0 ? activities[activeIndex - 1] : null;
  let prevBlockIndex = -1;
  if (prevActivity) {
    prevBlockIndex = blocks.findIndex((b) => matchesBlock(prevActivity, b));
    if (prevBlockIndex < 0) prevBlockIndex = blocks.length - 1;
  }

  return {
    block,
    isBlockStart: activeIndex === 0 || prevBlockIndex !== matchedIndex,
    blockIndex: matchedIndex,
    totalBlocks: blocks.length,
  };
}

export function getReferenceBlocksForLesson(
  lessonId: number,
  theory: LessonTheory,
  locale: Language,
): TheoryBlock[] {
  const ruDetailed = PART1_THEORY_BLOCKS[lessonId] ?? PART2_THEORY_BLOCKS[lessonId];
  const customBlocks = theory.blocks
    ?? LESSON_1_5_BLOCKS[locale]?.[lessonId]
    ?? PART3_THEORY_BLOCKS[locale]?.[lessonId]
    ?? (locale === 'ru' ? ruDetailed : undefined);

  if (customBlocks?.length) return customBlocks;

  const tables = (ruDetailed ?? [])
    .map((b) => b.table)
    .filter((t): t is NonNullable<typeof t> => !!t);
  return tables.map((table, idx) => ({
    id: `ref-l${lessonId}-t${idx + 1}`,
    title: table.headers[0] ?? '',
    summary: '',
    table,
  }));
}
