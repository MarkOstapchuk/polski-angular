import type { Language } from '../i18n/language.service';
import type { TheoryBlock } from './lesson-theory';

/**
 * Concise inline theory blocks & grammar tables for Part 3 (Hurra!!! Po Polsku 3, Lessons 50–70).
 */
export const PART3_THEORY_BLOCKS: Record<Language, Record<number, TheoryBlock[]>> = {
  ru: {
    50: [
      {
        id: 'l50-b1',
        includeCoursebook: true,
        wbRange: [1, 20],
        title: 'Повторение B1: И. п. мн. ч., pluralia tantum, вид и чередования',
        summary: 'Перед экзаменом систематизируем формы мн. ч., вид глагола и частые чередования в основе.',
        table: {
          headers: ['Явление', 'Правило / окончания', 'Примеры'],
          rows: [
            ['Лично-муж. И. п. мн. ч.', '-i / -y / -owie / -e (+ чередования)', 'Polacy, studenci, koledzy, profesorowie'],
            ['Pluralia tantum', 'Только мн. ч., глагол/прил. неличн.-муж.', 'te drzwi, nowe okulary, udane wakacje'],
            ['Вид глагола', 'НВ: процесс/повтор · СВ: результат', 'uczyć się / nauczyć się, pisać / napisać'],
            ['Чередования', 'ó:o, ą:ę, e:Ø, k:c, t:ci, r:rz', 'błąd → błędy, student → studenci'],
          ],
        },
        bullets: [
          'Идиомы с „błąd”: być w błędzie, przyznać się do błędu, uczyć się na błędach, wprowadzać w błąd, wyprowadzać z błędu.',
        ],
        examples: [
          { polish: 'Nasi studenci długo się uczyli i zdali egzamin bez żadnego błędu.', translation: 'Наши студенты долго учились и сдали экзамен без единой ошибки.' },
        ],
      },
    ],
    51: [
      {
        id: 'l51-b1',
        includeCoursebook: true,
        wbRange: [1, 20],
        title: 'Обстоятельства образа действия, jak? vs jaki? и наклонения',
        summary: 'Различаем описание действия (наречие → jak?) и признака предмета (прилагательное → jaki?), а также повторяем советы и вежливые гипотезы.',
        table: {
          headers: ['Конструкция', 'Функция', 'Пример'],
          rows: [
            ['jak? → наречие / оборот', 'Как выполняется действие?', 'Mówię płynnie, po polsku, na pamięć, z łatwością.'],
            ['jaki? jaka? jakie? → прил.', 'Какой предмет / человек?', 'Ten egzamin jest trudny, ale sprawiedliwy.'],
            ['Tryb rozkazujący', 'Совет, инструкция', 'Powtórz słówka! Nie denerwuj się! Spróbujmy!'],
            ['Tryb przypuszczający', 'Вежливый совет, условие', 'Nauczyłbym się szybciej; warto by było poczytać.'],
          ],
        },
        bullets: [
          'Предлоги na, w, po, za + Biernik в частых выражениях: uczyć się na pamięć, grać w gry, iść po słownik, dziękować za pomoc.',
          'Идиомы: mieć to na końcu języka, łamać sobie język, siedzieć jak na szpilkach, mieć nerwy ze stali.',
        ],
        examples: [
          { polish: 'Jak zapamiętujesz słówka? Uczę się ich systematycznie i powtarzam na głos.', translation: 'Как ты запоминаешь слова? Я учу их систематически и повторяю вслух.' },
        ],
      },
    ],
    52: [
      {
        id: 'l52-b1',
        includeCoursebook: true,
        wbRange: [1, 20],
        title: 'Степени сравнения прилагательных и наречий',
        summary: 'Для описания внешности и сравнений используем синтетические, описательные и нерегулярные степени сравнения.',
        table: {
          headers: ['Исходная форма', 'Сравнительная', 'Превосходная'],
          rows: [
            ['ładny / wysoki', 'ładniejszy / wyższy', 'najładniejszy / najwyższy'],
            ['elegancki / stylowy', 'bardziej elegancki', 'najbardziej elegancki'],
            ['dobry / zły / duży / mały', 'lepszy / gorszy / większy / mniejszy', 'najlepszy / najgorszy / największy / najmniejszy'],
            ['dobrze / źle / dużo / mało', 'lepiej / gorzej / więcej / mniej', 'najlepiej / najgorzej / najwięcej / najmniej'],
          ],
        },
        bullets: [
          'Сравнения: wyższy niż brat (И. п.) = wyższy od brata (Р. п.); coraz ładniejszy; im częściej, tym lepiej.',
          'Идиомы: wyglądać jak milion dolarów, wyglądać kwitnąco, tryskać zdrowiem, wyglądać jak siedem nieszczęść.',
        ],
        examples: [
          { polish: 'W tej sukience wyglądasz jeszcze lepiej niż na zdjęciu!', translation: 'В этом платье ты выглядишь ещё лучше, чем на фото!' },
        ],
      },
    ],
    53: [
      {
        id: 'l53-b1',
        includeCoursebook: true,
        wbRange: [1, 20],
        title: 'Синтаксис числительных (2–4, 5+ и собирательные)',
        summary: 'Выбор падежа существительного и формы глагола зависит от числа и категории лично-мужского рода.',
        table: {
          headers: ['Числительное', 'Существительное', 'Глагол', 'Пример'],
          rows: [
            ['2, 3, 4 (неличн.-муж.)', 'И. п. мн. ч.', 'мн. ч.', 'Dwie nowe pralki działają.'],
            ['dwaj / trzej / czterej', 'И. п. мн. ч.', 'мн. ч. (л.-м.)', 'Trzej koledzy pracowali.'],
            ['dwóch / trzech / 5+ (все)', 'Р. п. мн. ч.', '3 л. ед. ч. ср. р.', 'Pięciu pracowników otrzymało premię.'],
            ['dwoje, troje, czworo', 'Р. п. мн. ч.', '3 л. ед. ч. ср. р.', 'Troje dzieci bawiło się w pokoju.'],
          ],
        },
        bullets: [
          'Идиомы: upiec dwie pieczenie na jednym ogniu, być w siódmym niebie, ni w pięć, ni w dziewięć, wtrącić swoje trzy grosze.',
        ],
        examples: [
          { polish: 'W ankiecie wzięło udział dwadzieścia pięć osób.', translation: 'В опросе приняли участие двадцать пять человек.' },
        ],
      },
    ],
    54: [
      {
        id: 'l54-b1',
        includeCoursebook: true,
        wbRange: [1, 20],
        title: 'Склонение количественных числительных (B, D, N) и выражения времени',
        summary: 'В рассказах о переезде и сроках числительные регулярно изменяются по падежам после предлогов.',
        table: {
          headers: ['И. п.', 'Р. п. (od, w ciągu)', 'Т. п. (przed, z)', 'Пример'],
          rows: [
            ['dwa / dwie', 'dwóch (dwu)', 'dwoma / dwiema', 'od dwóch lat, z dwiema koleżankami'],
            ['trzy / cztery', 'trzech / czterech', 'trzema / czterema', 'przed trzema laty, z czterema osobami'],
            ['pięć … dziesięć', 'pięciu … dziesięciu', 'pięcioma (pięciu)', 'od pięciu miesięcy, przed dziesięcioma laty'],
            ['dwadzieścia / sto', 'dwudziestu / stu', 'dwudziestoma / stoma', 'od dwudziestu lat, ze stu rodakami'],
          ],
        },
        bullets: [
          'Время: od + Р. п. (уже сколько времени), przed + Т. п. (назад), za + В. п. (через), przez + В. п. (в течение), w ciągu + Р. п. (за период).',
        ],
        examples: [
          { polish: 'Wyjechał za granicę przed pięcioma laty i od trzech lat mieszka w Krakowie.', translation: 'Он уехал за границу пять лет назад и уже три года живёт в Кракове.' },
        ],
      },
    ],
    55: [
      {
        id: 'l55-b1',
        includeCoursebook: true,
        wbRange: [1, 20],
        title: 'Повторение уроков 0–4: чек-лист грамматики',
        summary: 'Закрепляем все ключевые структуры первого блока Hurra 3 перед переходом к официальным темам.',
        bullets: [
          'И. п. мн. ч. (лично-мужской род), pluralia tantum и вид глагола (урок 0).',
          'jak? (наречие) vs jaki? (прилагательное), повелительное и сослагательное наклонения (урок 1).',
          'Степени сравнения прилагательных и наречий: niż + И. п., od + Р. п., im…, tym… (урок 2).',
          'Синтаксис числительных (5+ → Р. п. мн. ч. + глагол ед. ч. ср. р.) и их склонение в B, D, N (уроки 3–4).',
        ],
        examples: [
          { polish: 'Od pięciu lat mówię po polsku coraz lepiej niż na początku.', translation: 'За пять лет я говорю по-польски всё лучше, чем вначале.' },
        ],
      },
    ],
    56: [
      {
        id: 'l56-b1',
        includeCoursebook: true,
        wbRange: [1, 20],
        title: 'Чередование ę:ą, mieć + bezokolicznik и существительные на -ę',
        summary: 'Три ключевые темы для делового и официального общения в учреждениях.',
        table: {
          headers: ['Падеж', 'imię (тип -en-)', 'zwierzę (тип -ęt-)'],
          rows: [
            ['И. / В. ед. ч.', 'imię', 'zwierzę'],
            ['Р. / Д. / М. ед. ч.', 'imienia / imieniu', 'zwierzęcia / zwierzęciu'],
            ['Т. ед. ч.', 'imieniem', 'zwierzęciem'],
            ['И. / Р. мн. ч.', 'imiona / imion', 'zwierzęta / zwierząt'],
          ],
        },
        bullets: [
          'Чередование ą:ę: urząd → w urzędzie, błąd → bez błędu, święto → świąt, ręka → rąk.',
          'mieć + bezokolicznik выражает обязанность или план: Mam złożyć wniosek do piątku.',
        ],
        examples: [
          { polish: 'Mam podać w urzędzie swoje imię oraz imiona rodziców.', translation: 'Мне нужно указать в учреждении своё имя и имена родителей.' },
        ],
      },
    ],
    57: [
      {
        id: 'l57-b1',
        includeCoursebook: true,
        wbRange: [1, 20],
        title: 'Адъективное склонение существительных, имён и фамилий',
        summary: 'Существительные типа znajomy, имена на -y/-i и фамилии на -ski/-cki/-ska/-cka склоняются по типу прилагательных.',
        table: {
          headers: ['Падеж', 'znajomy / Jerzy / Kowalski', 'Kowalska', 'państwo Kowalscy'],
          rows: [
            ['Р. п.', 'znajomego / Jerzego / Kowalskiego', 'Kowalskiej', 'Kowalskich'],
            ['Д. п.', 'znajomemu / Jerzemu / Kowalskiemu', 'Kowalskiej', 'Kowalskim'],
            ['В. п.', 'znajomego / Jerzego / Kowalskiego', 'Kowalską', 'Kowalskich'],
            ['Т. / М. п.', 'znajomym / Jerzym / Kowalskim', 'Kowalską / Kowalskiej', 'Kowalskimi / Kowalskich'],
          ],
        },
        bullets: [
          'Так же склоняются: podróżny, chory, bezrobotny, księgowy, narzeczony, Antoni (Antoniego, Antonim).',
        ],
        examples: [
          { polish: 'Dziękuję panu Jerzemu Kowalskiemu i pani Annie Nowackiej za szybką naprawę.', translation: 'Спасибо пану Ежи Ковальскому и пани Анне Новацкой за быстрый ремонт.' },
        ],
      },
    ],
    58: [
      {
        id: 'l58-b1',
        includeCoursebook: true,
        wbRange: [1, 20],
        title: 'Склонение pieniądz и miesiąc; уверенность и сомнение',
        summary: 'Запоминаем особые формы мн. ч. (pieniędzy, miesięcy, pieniędzmi) и вводные слова для оценки вероятности.',
        table: {
          headers: ['Падеж', 'pieniądz (ед. / мн.)', 'miesiąc (ед. / мн.)'],
          rows: [
            ['И. п.', 'pieniądz / pieniądze', 'miesiąc / miesiące'],
            ['Р. п.', 'pieniądza / pieniędzy', 'miesiąca / miesięcy'],
            ['Д. п.', 'pieniądzowi / pieniądzom', 'miesiącowi / miesiącom'],
            ['Т. п.', 'pieniądzem / pieniędzmi', 'miesiącem / miesiącami'],
          ],
        },
        bullets: [
          'Уверенность: na pewno, bez wątpienia, jestem pewien/przekonany, że…',
          'Сомнение: chyba, może, prawdopodobnie, wątpię, żeby…, nie jestem pewien, czy…',
        ],
        examples: [
          { polish: 'Na pewno w tym miesiącu nie wydamy aż tylu pieniędzy.', translation: 'Наверняка в этом месяце мы не потратим столько денег.' },
        ],
      },
    ],
    59: [
      {
        id: 'l59-b1',
        includeCoursebook: true,
        wbRange: [1, 20],
        title: 'Условные предложения и отсутствие согласования времён',
        summary: 'Различаем реальное и гипотетическое условие, а в косвенной речи сохраняем исходное время.',
        table: {
          headers: ['Тип условия', 'Союз и формы глагола', 'Пример'],
          rows: [
            ['Реальное (наст./буд.)', 'jeżeli / jeśli + наст. или буд.', 'Jeżeli masz / będziesz mieć czas, zróbmy to.'],
            ['Нереальное / вежливое', 'gdyby + прош. основа (-bym/-byś/-by)', 'Gdybyś miał lepszą ofertę, przyjąłbyś ją?'],
            ['Без согласования времён', 'Powiedział, że + наст./буд./прош.', 'Powiedział, że szuka nowej pracy.'],
          ],
        },
        bullets: [
          'Идиомы: wziąć się do roboty, wyścig szczurów, bez pracy nie ma kołaczy, jaka praca, taka płaca.',
        ],
        examples: [
          { polish: 'Gdybym miał własną firmę, nie brałbym udziału w wyścigu szczurów.', translation: 'Если бы у меня была своя фирма, я бы не участвовал в крысиных бегах.' },
        ],
      },
    ],
    60: [
      {
        id: 'l60-b1',
        includeCoursebook: true,
        wbRange: [1, 20],
        title: 'Повторение уроков 6–9: чек-лист грамматики',
        summary: 'Систематизируем грамматику второго блока: от учреждений и услуг до финансов и экономики.',
        bullets: [
          'Чередование ę:ą (urząd → urzędu), mieć + bezokolicznik, существительные на -ę: imię/imiona, zwierzę/zwierzęta (урок 6).',
          'Адъективное склонение: znajomy, Jerzy, Kowalski / Kowalska / państwo Kowalscy (урок 7).',
          'pieniądz → pieniędzy / pieniędzmi; miesiąc → miesięcy; выражения уверенности и сомнения (урок 8).',
          'Условные предложения (jeżeli masz / będziesz mieć / gdybyś miał) и отсутствие согласования времён (урок 9).',
        ],
        examples: [
          { polish: 'Jeżeli zaoszczędzimy trochę pieniędzy, za kilka miesięcy zatrudnimy fachowca.', translation: 'Если мы сэкономим немного денег, через несколько месяцев наймём мастера.' },
        ],
      },
    ],
    61: [
      {
        id: 'l61-b1',
        includeCoursebook: true,
        wbRange: [1, 20],
        title: 'Склонение rząd и предложения с подлежащим в Р. п.',
        summary: 'Не путаем rząd «правительство» (без чередования) с rząd «ряд», и верно согласуем глагол при подлежащем в Р. п.',
        table: {
          headers: ['Конструкция', 'Форма сказуемого', 'Пример'],
          rows: [
            ['rząd (правительство)', 'ą сохраняется везде', 'rządu, rządowi, rządem, o rządzie, rządy, rządów'],
            ['dużo / mało / wielu / pięciu + Р. п.', '3 л. ед. ч. ср. р.', 'Wielu obywateli głosowało w wyborach.'],
            ['brakuje / ubywa / nie ma + Р. п.', '3 л. ед. ч. ср. р.', 'Zabrakło głosów; Nie było porozumienia.'],
          ],
        },
        bullets: [
          'Важность и безразличие: To ma ogromne znaczenie / To jest dla mnie kluczowe vs Jest mi to obojętne / Nie interesuje mnie to.',
        ],
        examples: [
          { polish: 'Większość posłów nie poparła projektu rządu.', translation: 'Большинство депутатов не поддержало проект правительства.' },
        ],
      },
    ],
    62: [
      {
        id: 'l62-b1',
        includeCoursebook: true,
        wbRange: [1, 20],
        title: 'Названия стран в Р. п. и существительные на -anin',
        summary: 'У существительных мужского рода на -anin суффикс -in есть только в единственном числе и выпадает во множественном.',
        table: {
          headers: ['Число / падеж', 'Amerykanin', 'Rosjanin / krakowianin'],
          rows: [
            ['И. п. ед. ч.', 'Amerykanin', 'Rosjanin'],
            ['Р. п. ед. ч.', 'Amerykanina', 'Rosjanina'],
            ['И. п. мн. ч.', 'Amerykanie', 'Rosjanie'],
            ['Р. п. мн. ч.', 'Amerykanów (-ów)', 'Rosjan / krakowian (-Ø!)'],
          ],
        },
        bullets: [
          'Страны в Р. п. (множественные): z Niemiec, z Włoch, z Czech, z Węgier, ze Stanów Zjednoczonych, z Chin.',
          'Идиомы: jakim prawem?, obejść prawo, być ponad prawem, zrobić coś na lewo.',
        ],
        examples: [
          { polish: 'W konferencji wzięło udział wielu Amerykanów, Rosjan oraz gości z Niemiec i Włoch.', translation: 'В конференции приняли участие многие американцы, россияне и гости из Германии и Италии.' },
        ],
      },
    ],
    63: [
      {
        id: 'l63-b1',
        includeCoursebook: true,
        wbRange: [1, 20],
        title: 'Косвенная речь (mowa zależna) и притяжательные местоимения',
        summary: 'Передаём утверждения, вопросы и просьбы без сдвига времён, и правильно выбираем возвратное swój.',
        table: {
          headers: ['Тип прямой речи', 'Союз в косвенной речи', 'Пример'],
          rows: [
            ['Утверждение', 'że', 'Powiedział, że widział cały wypadek.'],
            ['Общий вопрос', 'czy', 'Zapytał, czy wezwaliśmy karetkę.'],
            ['Специальный вопрос', 'gdzie / kiedy / kto / jak', 'Zapytał, gdzie to się wydarzyło.'],
            ['Просьба / приказ', 'żeby + прош. / безл.', 'Poprosił, żebym zadzwonił na 112.'],
          ],
        },
        bullets: [
          'swój / swoja / swoje относится к подлежащему предложения: Zabrałem swój dokument; Ona szukała swojej torby.',
          'его / её / их (jego, jej, ich) не склоняются: widziałem jego samochód, rozmawiałem z jej bratem.',
        ],
        examples: [
          { polish: 'Świadek powiedział, że na wszelki wypadek zapisał numer swojego auta.', translation: 'Свидетель сказал, что на всякий случай записал номер своей машины.' },
        ],
      },
    ],
    64: [
      {
        id: 'l64-b1',
        includeCoursebook: true,
        wbRange: [1, 20],
        title: 'Дательный падеж (Celownik) ед. и мн. ч. и выражение протеста',
        summary: 'Повторяем окончания дательного падежа и глаголы, связанные с заботой и вредом природе.',
        table: {
          headers: ['Род / число', 'Прилагательное', 'Существительное', 'Примеры'],
          rows: [
            ['Муж. ед. ч.', '-emu', '-owi (искл. -u)', 'klimatowi, panu, bratu, światu'],
            ['Сред. ед. ч.', '-emu', '-u', 'środowisku, dziecku, morzu'],
            ['Жен. ед. ч.', '-ej', '-e (черед.) / -i / -y', 'przyrodzie, rzece, ziemi, nocy'],
            ['Мн. ч. (все)', '-ym / -im', '-om', 'ludziom, zwierzętom, lasom'],
          ],
        },
        bullets: [
          'Глаголы с Д. п.: pomagać, szkodzić, zagrażać, przeciwstawiać się, przyglądać się, ufać, dziwić się.',
          'Одобрение / протест: Popieram ten pomysł vs Stanowczo protestuję przeciwko… / Nie zgadzam się na…',
        ],
        examples: [
          { polish: 'Zanieczyszczenie powietrza szkodzi ludziom, zwierzętom i całemu środowisku.', translation: 'Загрязнение воздуха вредит людям, животным и всей окружающей среде.' },
        ],
      },
    ],
    65: [
      {
        id: 'l65-b1',
        includeCoursebook: true,
        wbRange: [1, 20],
        title: 'Повторение уроков 11–14: чек-лист грамматики',
        summary: 'Закрепляем грамматику общественного и экологического блока перед заключительным разделом курса.',
        bullets: [
          'rząd → rządu / rządów и предложения с подлежащим в Р. п. + глагол ед. ч. ср. р. (урок 11).',
          'Страны в Р. п. (z Niemiec, z Włoch) и существительные на -anin (Amerykanie / Amerykanów, Rosjanie / Rosjan) (урок 12).',
          'Косвенная речь (że / czy / żeby) и притяжательные местоимения включая swój (урок 13).',
          'Дательный падеж ед. и мн. ч. (-owi/-u, -e/-i/-y, -om) и выражения одобрения/протеста (урок 14).',
        ],
        examples: [
          { polish: 'Zapytałem, czy nowy program pomoże mieszkańcom i środowisku.', translation: 'Я спросил, поможет ли новая программа жителям и окружающей среде.' },
        ],
      },
    ],
    66: [
      {
        id: 'l66-b1',
        includeCoursebook: true,
        wbRange: [1, 20],
        title: 'Отрицательные местоимения nikt, nic, żaden и звательный падеж',
        summary: 'В польском предложении с отрицательным местоимением глагол всегда стоит с частицей nie (двойное отрицание).',
        table: {
          headers: ['Падеж', 'nikt', 'nic', 'żaden / żadna / żadne'],
          rows: [
            ['И. п.', 'nikt', 'nic', 'żaden / żadna / żadne'],
            ['Р. п.', 'nikogo', 'niczego / nic', 'żadnego / żadnej'],
            ['Д. п.', 'nikomu', 'niczemu', 'żadnemu / żadnej'],
            ['Т. / М. п.', 'z nikim / o nikim', 'z niczym / o niczym', 'żadnym / żadną / o żadnym'],
          ],
        },
        bullets: [
          'Звательный падеж (Wołacz) в письмах и интервью: Szanowny Panie Redaktorze!, Droga Pani Anno!, Cześć, Marku / Kasiu!',
          'Идиомы: czwarta władza, ciągnąć kogoś za język, wiadomość z pierwszej ręki, owijać w bawełnę.',
        ],
        examples: [
          { polish: 'Nikt nie sprawdził żadnego źródła i nie zapytał nikogo z redakcji.', translation: 'Никто не проверил ни одного источника и не спросил никого из редакции.' },
        ],
      },
    ],
    67: [
      {
        id: 'l67-b1',
        includeCoursebook: true,
        wbRange: [1, 20],
        title: 'Склонение возвратного местоимения się и повелительное наклонение',
        summary: 'Возвратное местоимение się не имеет И. п., а в косвенных падежах выражает действие, направленное на самого субъекта.',
        table: {
          headers: ['Падеж', 'Форма', 'Типичный пример'],
          rows: [
            ['Р. п.', 'siebie / się', 'Nie znam samego siebie; boję się o siebie.'],
            ['Д. п.', 'sobie', 'Kupiłem sobie nową lampę; radzę sobie.'],
            ['В. п.', 'siebie / się', 'Patrzę na siebie w lustrze; ubieram się.'],
            ['Т. / М. п.', 'sobą / o sobie', 'Rozmawiamy ze sobą; nie mówi o sobie.'],
          ],
        },
        bullets: [
          'Повелительное наклонение для убеждения: Przejdźmy do rzeczy! Zaufaj mi! Nie daj się nabić w butelkę!',
        ],
        examples: [
          { polish: 'Przekonaj się sam i kup sobie coś naprawdę funkcjonalnego!', translation: 'Убедись сам и купи себе что-то действительно функциональное!' },
        ],
      },
    ],
    68: [
      {
        id: 'l68-b1',
        includeCoursebook: true,
        wbRange: [1, 20],
        title: 'Предложный падеж (Miejscownik) в рассказах о культуре',
        summary: 'Предложный падеж всегда употребляется с предлогом (o, w, na, po, przy) и обозначает тему, произведение или место события.',
        table: {
          headers: ['Предлог', 'Значение в контексте культуры', 'Примеры'],
          rows: [
            ['o + М. п.', 'Объект речи, тема произведения', 'film o miłości, książka o artyście, mówić o sztuce'],
            ['w + М. п.', 'Внутри произведения / здания', 'w tej powieści, w wierszu, w teatrze, w muzeum'],
            ['na + М. п.', 'Мероприятие, сцена', 'na wystawie, na koncercie, na scenie'],
            ['po / przy + М. п.', 'После события / в сопровождении', 'po premierze, po spektaklu, przy muzyce'],
          ],
        },
        bullets: [
          'Идиомы: widać rękę artysty, świecić pustkami, połknąć bakcyla, otworzyć drzwi do kariery.',
        ],
        examples: [
          { polish: 'Po premierze rozmawialiśmy o reżyserze, aktorach i niezwykłej muzyce w tym filmie.', translation: 'После премьеры мы говорили о режиссёре, актёрах и необычной музыке в этом фильме.' },
        ],
      },
    ],
    69: [
      {
        id: 'l69-b1',
        includeCoursebook: true,
        wbRange: [1, 20],
        title: 'Вопросительные местоимения jaki, który, czyj и условное наклонение',
        summary: 'Точно согласуем вопросительные местоимения по роду, числу и падежу, а гипотезы строим в условном наклонении.',
        table: {
          headers: ['Падеж', 'м. / ср. ед. ч.', 'ж. ед. ч.', 'мн. ч.'],
          rows: [
            ['И. п.', 'jaki / który / czyj', 'jaka / która / czyja', 'jacy/jakie, którzy/które, czyi/czyje'],
            ['Р. п.', 'jakiego / którego / czyjego', 'jakiej / której / czyjej', 'jakich / których / czyich'],
            ['Д. п.', 'jakiemu / któremu / czyjemu', 'jakiej / której / czyjej', 'jakim / którym / czyim'],
            ['Т. / М. п.', 'jakim / którym / czyim', 'jaką / którą / czyją (М. -ej)', 'jakimi / którymi / czyimi (М. -ich)'],
          ],
        },
        bullets: [
          'Гипотезы (tryb warunkowy): Co byś zrobił, gdyby…?; W którym kraju chciałbyś zamieszkać?',
          'Идиомы: mieć świętą cierpliwość, rzucić kamieniem jako pierwszy, wieża Babel, być alfą i omegą.',
        ],
        examples: [
          { polish: 'O której tradycji chciałbyś dowiedzieć się więcej i czyim zdaniem jest ona najważniejsza?', translation: 'О какой традиции ты хотел бы узнать больше и по чьему мнению она самая важная?' },
        ],
      },
    ],
    70: [
      {
        id: 'l70-b1',
        includeCoursebook: true,
        wbRange: [1, 20],
        title: 'Финальное повторение (уроки 16–19) и экзамен B1',
        summary: 'Сводим воедино грамматику заключительного блока и экзаменационные стратегии уровня B1.',
        bullets: [
          'Отрицательные местоимения nikt, nic, żaden с обязательным двойным отрицанием и звательный падеж (урок 16).',
          'Возвратное местоимение się (siebie, sobie, sobą) и повелительное наклонение (урок 17).',
          'Предложный падеж с o, w, na, po, przy для описания произведений и событий (урок 18).',
          'Склонение jaki, który, czyj и условное наклонение для гипотез (урок 19).',
        ],
        examples: [
          { polish: 'Szanowni Państwo, nikt nie ma wątpliwości, że po tym kursie poradzicie sobie na egzaminie!', translation: 'Уважаемые дамы и господа, никто не сомневается, что после этого курса вы справитесь на экзамене!' },
        ],
      },
    ],
  },

  en: {
    50: [
      {
        id: 'l50-b1',
        includeCoursebook: true,
        wbRange: [1, 20],
        title: 'B1 Review: Nominative Plural, Pluralia Tantum, Aspect & Alternations',
        summary: 'Before the B1 exam, we review plural forms, verbal aspect, and common stem alternations.',
        table: {
          headers: ['Feature', 'Rule / Endings', 'Examples'],
          rows: [
            ['Masc.-pers. Nom. pl.', '-i / -y / -owie / -e (+ alternations)', 'Polacy, studenci, koledzy, profesorowie'],
            ['Pluralia tantum', 'Plural only, non-masc.-pers. agreement', 'te drzwi, nowe okulary, udane wakacje'],
            ['Verbal aspect', 'Imperf.: process/habit · Perf.: result', 'uczyć się / nauczyć się, pisać / napisać'],
            ['Alternations', 'ó:o, ą:ę, e:Ø, k:c, t:ci, r:rz', 'błąd → błędy, student → studenci'],
          ],
        },
        bullets: [
          'Idioms with “błąd”: być w błędzie, przyznać się do błędu, uczyć się na błędach, wprowadzać w błąd, wyprowadzać z błędu.',
        ],
        examples: [
          { polish: 'Nasi studenci długo się uczyli i zdali egzamin bez żadnego błędu.', translation: 'Our students studied for a long time and passed the exam without a single mistake.' },
        ],
      },
    ],
    51: [
      {
        id: 'l51-b1',
        includeCoursebook: true,
        wbRange: [1, 20],
        title: 'Adverbials of Manner, jak? vs jaki?, and Moods',
        summary: 'Distinguish how an action is done (adverb → jak?) from what something is like (adjective → jaki?), and review advice and polite hypotheses.',
        table: {
          headers: ['Structure', 'Function', 'Example'],
          rows: [
            ['jak? → adverb / phrase', 'How is the action performed?', 'Mówię płynnie, po polsku, na pamięć, z łatwością.'],
            ['jaki? jaka? jakie? → adj.', 'What is the thing/person like?', 'Ten egzamin jest trudny, ale sprawiedliwy.'],
            ['Imperative mood', 'Advice, instruction', 'Powtórz słówka! Nie denerwuj się! Spróbujmy!'],
            ['Conditional mood', 'Polite advice, hypothesis', 'Nauczyłbym się szybciej; warto by było poczytać.'],
          ],
        },
        bullets: [
          'Prepositions na, w, po, za + Accusative: uczyć się na pamięć, grać w gry, iść po słownik, dziękować za pomoc.',
          'Idioms: mieć to na końcu języka, łamać sobie język, siedzieć jak na szpilkach, mieć nerwy ze stali.',
        ],
        examples: [
          { polish: 'Jak zapamiętujesz słówka? Uczę się ich systematycznie i powtarzam na głos.', translation: 'How do you memorise vocabulary? I study it systematically and repeat it aloud.' },
        ],
      },
    ],
    52: [
      {
        id: 'l52-b1',
        includeCoursebook: true,
        wbRange: [1, 20],
        title: 'Comparison of Adjectives and Adverbs',
        summary: 'Use synthetic, analytic, and irregular comparative and superlative forms to describe appearance and make comparisons.',
        table: {
          headers: ['Base Form', 'Comparative', 'Superlative'],
          rows: [
            ['ładny / wysoki', 'ładniejszy / wyższy', 'najładniejszy / najwyższy'],
            ['elegancki / stylowy', 'bardziej elegancki', 'najbardziej elegancki'],
            ['dobry / zły / duży / mały', 'lepszy / gorszy / większy / mniejszy', 'najlepszy / najgorszy / największy / najmniejszy'],
            ['dobrze / źle / dużo / mało', 'lepiej / gorzej / więcej / mniej', 'najlepiej / najgorzej / najwięcej / najmniej'],
          ],
        },
        bullets: [
          'Comparisons: wyższy niż brat (Nom.) = wyższy od brata (Gen.); coraz ładniejszy; im częściej, tym lepiej.',
          'Idioms: wyglądać jak milion dolarów, wyglądać kwitnąco, tryskać zdrowiem, wyglądać jak siedem nieszczęść.',
        ],
        examples: [
          { polish: 'W tej sukience wyglądasz jeszcze lepiej niż na zdjęciu!', translation: 'In this dress you look even better than in the photo!' },
        ],
      },
    ],
    53: [
      {
        id: 'l53-b1',
        includeCoursebook: true,
        wbRange: [1, 20],
        title: 'Syntax of Numerals (2–4, 5+, and Collective)',
        summary: 'Noun case and verb agreement depend on the numeral and whether the group is masculine-personal.',
        table: {
          headers: ['Numeral', 'Noun Case', 'Verb', 'Example'],
          rows: [
            ['2, 3, 4 (non-masc.-pers.)', 'Nom. pl.', 'Plural', 'Dwie nowe pralki działają.'],
            ['dwaj / trzej / czterej', 'Nom. pl.', 'Plural (m.-p.)', 'Trzej koledzy pracowali.'],
            ['dwóch / trzech / 5+ (all)', 'Gen. pl.', '3rd sg. neuter', 'Pięciu pracowników otrzymało premię.'],
            ['dwoje, troje, czworo', 'Gen. pl.', '3rd sg. neuter', 'Troje dzieci bawiło się w pokoju.'],
          ],
        },
        bullets: [
          'Idioms: upiec dwie pieczenie na jednym ogniu, być w siódmym niebie, ni w pięć, ni w dziewięć, wtrącić swoje trzy grosze.',
        ],
        examples: [
          { polish: 'W ankiecie wzięło udział dwadzieścia pięć osób.', translation: 'Twenty-five people took part in the survey.' },
        ],
      },
    ],
    54: [
      {
        id: 'l54-b1',
        includeCoursebook: true,
        wbRange: [1, 20],
        title: 'Cardinal Numeral Declension (Acc, Gen, Inst) & Time Expressions',
        summary: 'When talking about moving abroad and durations, numerals decline after prepositions.',
        table: {
          headers: ['Nominative', 'Genitive (od, w ciągu)', 'Instrumental (przed, z)', 'Example'],
          rows: [
            ['dwa / dwie', 'dwóch (dwu)', 'dwoma / dwiema', 'od dwóch lat, z dwiema koleżankami'],
            ['trzy / cztery', 'trzech / czterech', 'trzema / czterema', 'przed trzema laty, z czterema osobami'],
            ['pięć … dziesięć', 'pięciu … dziesięciu', 'pięcioma (pięciu)', 'od pięciu miesięcy, przed dziesięcioma laty'],
            ['dwadzieścia / sto', 'dwudziestu / stu', 'dwudziestoma / stoma', 'od dwudziestu lat, ze stu rodakami'],
          ],
        },
        bullets: [
          'Time phrases: od + Gen. (for/since), przed + Inst. (ago), za + Acc. (in), przez + Acc. (for/throughout), w ciągu + Gen. (within).',
        ],
        examples: [
          { polish: 'Wyjechał za granicę przed pięcioma laty i od trzech lat mieszka w Krakowie.', translation: 'He moved abroad five years ago and has lived in Kraków for three years.' },
        ],
      },
    ],
    55: [
      {
        id: 'l55-b1',
        includeCoursebook: true,
        wbRange: [1, 20],
        title: 'Review of Lessons 0–4: Grammar Checklist',
        summary: 'Consolidate all key structures from the first block of Hurra 3.',
        bullets: [
          'Nominative plural (masculine-personal), pluralia tantum, and verbal aspect (Lesson 0).',
          'jak? (adverb) vs jaki? (adjective), imperative, and conditional mood (Lesson 1).',
          'Comparison of adjectives and adverbs: niż + Nom., od + Gen., im…, tym… (Lesson 2).',
          'Numeral syntax (5+ → Gen. pl. + 3rd sg. neut. verb) and declension in Acc., Gen., Inst. (Lessons 3–4).',
        ],
        examples: [
          { polish: 'Od pięciu lat mówię po polsku coraz lepiej niż na początku.', translation: 'After five years I speak Polish better and better than at the start.' },
        ],
      },
    ],
    56: [
      {
        id: 'l56-b1',
        includeCoursebook: true,
        wbRange: [1, 20],
        title: 'ę:ą Alternation, mieć + Infinitive, and Neuter Nouns in -ę',
        summary: 'Three essential grammar points for formal errands and public offices.',
        table: {
          headers: ['Case', 'imię (-en- stem)', 'zwierzę (-ęt- stem)'],
          rows: [
            ['Nom. / Acc. sg.', 'imię', 'zwierzę'],
            ['Gen. / Dat. / Loc. sg.', 'imienia / imieniu', 'zwierzęcia / zwierzęciu'],
            ['Inst. sg.', 'imieniem', 'zwierzęciem'],
            ['Nom. / Gen. pl.', 'imiona / imion', 'zwierzęta / zwierząt'],
          ],
        },
        bullets: [
          'ą:ę alternation: urząd → w urzędzie, błąd → bez błędu, święto → świąt, ręka → rąk.',
          'mieć + infinitive expresses obligation, schedule, or instruction: Mam złożyć wniosek do piątku.',
        ],
        examples: [
          { polish: 'Mam podać w urzędzie swoje imię oraz imiona rodziców.', translation: 'I have to provide my first name and my parents’ names at the office.' },
        ],
      },
    ],
    57: [
      {
        id: 'l57-b1',
        includeCoursebook: true,
        wbRange: [1, 20],
        title: 'Adjectival Declension of Nouns, Names, and Surnames',
        summary: 'Nouns like znajomy, masculine names in -y/-i, and surnames in -ski/-cki/-ska/-cka take adjective endings.',
        table: {
          headers: ['Case', 'znajomy / Jerzy / Kowalski', 'Kowalska', 'państwo Kowalscy'],
          rows: [
            ['Genitive', 'znajomego / Jerzego / Kowalskiego', 'Kowalskiej', 'Kowalskich'],
            ['Dative', 'znajomemu / Jerzemu / Kowalskiemu', 'Kowalskiej', 'Kowalskim'],
            ['Accusative', 'znajomego / Jerzego / Kowalskiego', 'Kowalską', 'Kowalskich'],
            ['Inst. / Loc.', 'znajomym / Jerzym / Kowalskim', 'Kowalską / Kowalskiej', 'Kowalskimi / Kowalskich'],
          ],
        },
        bullets: [
          'Same pattern: podróżny, chory, bezrobotny, księgowy, narzeczony, Antoni (Antoniego, Antonim).',
        ],
        examples: [
          { polish: 'Dziękuję panu Jerzemu Kowalskiemu i pani Annie Nowackiej za szybką naprawę.', translation: 'Thank you to Mr Jerzy Kowalski and Ms Anna Nowacka for the quick repair.' },
        ],
      },
    ],
    58: [
      {
        id: 'l58-b1',
        includeCoursebook: true,
        wbRange: [1, 20],
        title: 'Declension of pieniądz & miesiąc; Certainty and Uncertainty',
        summary: 'Master the irregular plural forms (pieniędzy, miesięcy, pieniędzmi) and phrases for expressing doubt or confidence.',
        table: {
          headers: ['Case', 'pieniądz (sg. / pl.)', 'miesiąc (sg. / pl.)'],
          rows: [
            ['Nominative', 'pieniądz / pieniądze', 'miesiąc / miesiące'],
            ['Genitive', 'pieniądza / pieniędzy', 'miesiąca / miesięcy'],
            ['Dative', 'pieniądzowi / pieniądzom', 'miesiącowi / miesiącom'],
            ['Instrumental', 'pieniądzem / pieniędzmi', 'miesiącem / miesiącami'],
          ],
        },
        bullets: [
          'Certainty: na pewno, bez wątpienia, jestem pewien/przekonany, że…',
          'Uncertainty: chyba, może, prawdopodobnie, wątpię, żeby…, nie jestem pewien, czy…',
        ],
        examples: [
          { polish: 'Na pewno w tym miesiącu nie wydamy aż tylu pieniędzy.', translation: 'We definitely won’t spend that much money this month.' },
        ],
      },
    ],
    59: [
      {
        id: 'l59-b1',
        includeCoursebook: true,
        wbRange: [1, 20],
        title: 'Conditional Sentences & No Sequence of Tenses',
        summary: 'Contrast real vs hypothetical conditions, and keep the original tense in subordinate clauses.',
        table: {
          headers: ['Type', 'Conjunction & Verb Form', 'Example'],
          rows: [
            ['Real (pres./fut.)', 'jeżeli / jeśli + pres. or fut.', 'Jeżeli masz / będziesz mieć czas, zróbmy to.'],
            ['Unreal / polite', 'gdyby + past stem (-bym/-byś/-by)', 'Gdybyś miał lepszą ofertę, przyjąłbyś ją?'],
            ['No backshifting', 'Powiedział, że + pres./fut./past', 'Powiedział, że szuka nowej pracy.'],
          ],
        },
        bullets: [
          'Idioms: wziąć się do roboty, wyścig szczurów, bez pracy nie ma kołaczy, jaka praca, taka płaca.',
        ],
        examples: [
          { polish: 'Gdybym miał własną firmę, nie brałbym udziału w wyścigu szczurów.', translation: 'If I had my own company, I wouldn’t take part in the rat race.' },
        ],
      },
    ],
    60: [
      {
        id: 'l60-b1',
        includeCoursebook: true,
        wbRange: [1, 20],
        title: 'Review of Lessons 6–9: Grammar Checklist',
        summary: 'Consolidate grammar from the second block: public offices, services, finances, and economics.',
        bullets: [
          'ę:ą alternation (urząd → urzędu), mieć + infinitive, neuter nouns in -ę: imię/imiona, zwierzę/zwierzęta (Lesson 6).',
          'Adjectival declension: znajomy, Jerzy, Kowalski / Kowalska / państwo Kowalscy (Lesson 7).',
          'pieniądz → pieniędzy / pieniędzmi; miesiąc → miesięcy; certainty & uncertainty expressions (Lesson 8).',
          'Conditionals (jeżeli masz / będziesz mieć / gdybyś miał) and no tense backshifting (Lesson 9).',
        ],
        examples: [
          { polish: 'Jeżeli zaoszczędzimy trochę pieniędzy, za kilka miesięcy zatrudnimy fachowca.', translation: 'If we save some money, in a few months we will hire a specialist.' },
        ],
      },
    ],
    61: [
      {
        id: 'l61-b1',
        includeCoursebook: true,
        wbRange: [1, 20],
        title: 'Declension of rząd & Genitive-Subject Sentences',
        summary: 'Distinguish rząd “government” (no ą:ę change) from rząd “row”, and use 3rd sg. neuter verbs with Genitive subjects.',
        table: {
          headers: ['Structure', 'Form / Rule', 'Example'],
          rows: [
            ['rząd (government)', 'ą stays in all cases', 'rządu, rządowi, rządem, o rządzie, rządy, rządów'],
            ['dużo / mało / wielu / pięciu + Gen.', '3rd sg. neuter verb', 'Wielu obywateli głosowało w wyborach.'],
            ['brakuje / ubywa / nie ma + Gen.', '3rd sg. neuter verb', 'Zabrakło głosów; Nie było porozumienia.'],
          ],
        },
        bullets: [
          'Importance vs indifference: To ma ogromne znaczenie / To jest dla mnie kluczowe vs Jest mi to obojętne.',
        ],
        examples: [
          { polish: 'Większość posłów nie poparła projektu rządu.', translation: 'The majority of MPs did not support the government’s bill.' },
        ],
      },
    ],
    62: [
      {
        id: 'l62-b1',
        includeCoursebook: true,
        wbRange: [1, 20],
        title: 'Country Names in Genitive & Masculine Nouns in -anin',
        summary: 'Masculine nouns in -anin keep -in in the singular but drop it throughout the plural.',
        table: {
          headers: ['Number / Case', 'Amerykanin', 'Rosjanin / krakowianin'],
          rows: [
            ['Nom. sg.', 'Amerykanin', 'Rosjanin'],
            ['Gen. sg.', 'Amerykanina', 'Rosjanina'],
            ['Nom. pl.', 'Amerykanie', 'Rosjanie'],
            ['Gen. pl.', 'Amerykanów (-ów)', 'Rosjan / krakowian (-Ø!)'],
          ],
        },
        bullets: [
          'Plural country names in Genitive: z Niemiec, z Włoch, z Czech, z Węgier, ze Stanów Zjednoczonych, z Chin.',
          'Idioms: jakim prawem?, obejść prawo, być ponad prawem, zrobić coś na lewo.',
        ],
        examples: [
          { polish: 'W konferencji wzięło udział wielu Amerykanów, Rosjan oraz gości z Niemiec i Włoch.', translation: 'Many Americans, Russians, and guests from Germany and Italy took part in the conference.' },
        ],
      },
    ],
    63: [
      {
        id: 'l63-b1',
        includeCoursebook: true,
        wbRange: [1, 20],
        title: 'Reported Speech (mowa zależna) & Possessive Pronouns',
        summary: 'Report statements, questions, and requests without tense backshifting, and use reflexive swój accurately.',
        table: {
          headers: ['Direct Speech Type', 'Reported Conjunction', 'Example'],
          rows: [
            ['Statement', 'że', 'Powiedział, że widział cały wypadek.'],
            ['Yes/No question', 'czy', 'Zapytał, czy wezwaliśmy karetkę.'],
            ['Wh-question', 'gdzie / kiedy / kto / jak', 'Zapytał, gdzie to się wydarzyło.'],
            ['Request / command', 'żeby + past / inf.', 'Poprosił, żebym zadzwonił na 112.'],
          ],
        },
        bullets: [
          'swój / swoja / swoje refers to the clause subject: Zabrałem swój dokument; Ona szukała swojej torby.',
          'jego, jej, ich never decline: widziałem jego samochód, rozmawiałem z jej bratem.',
        ],
        examples: [
          { polish: 'Świadek powiedział, że na wszelki wypadek zapisał numer swojego auta.', translation: 'The witness said that just in case he wrote down his car’s number.' },
        ],
      },
    ],
    64: [
      {
        id: 'l64-b1',
        includeCoursebook: true,
        wbRange: [1, 20],
        title: 'Dative Case (Celownik) Singular & Plural and Expressing Protest',
        summary: 'Review Dative endings and verbs commonly used when talking about helping or harming nature.',
        table: {
          headers: ['Gender / Number', 'Adjective', 'Noun', 'Examples'],
          rows: [
            ['Masc. sg.', '-emu', '-owi (exc. -u)', 'klimatowi, panu, bratu, światu'],
            ['Neut. sg.', '-emu', '-u', 'środowisku, dziecku, morzu'],
            ['Fem. sg.', '-ej', '-e (alt.) / -i / -y', 'przyrodzie, rzece, ziemi, nocy'],
            ['Plural (all)', '-ym / -im', '-om', 'ludziom, zwierzętom, lasom'],
          ],
        },
        bullets: [
          'Dative verbs: pomagać, szkodzić, zagrażać, przeciwstawiać się, przyglądać się, ufać, dziwić się.',
          'Approval / protest: Popieram ten pomysł vs Stanowczo protestuję przeciwko… / Nie zgadzam się na…',
        ],
        examples: [
          { polish: 'Zanieczyszczenie powietrza szkodzi ludziom, zwierzętom i całemu środowisku.', translation: 'Air pollution harms people, animals, and the whole environment.' },
        ],
      },
    ],
    65: [
      {
        id: 'l65-b1',
        includeCoursebook: true,
        wbRange: [1, 20],
        title: 'Review of Lessons 11–14: Grammar Checklist',
        summary: 'Consolidate the civic, legal, and ecological block before the final section of the course.',
        bullets: [
          'rząd → rządu / rządów and Genitive-subject clauses with 3rd sg. neuter verbs (Lesson 11).',
          'Country names in Genitive (z Niemiec, z Włoch) and -anin nouns (Amerykanie/Amerykanów, Rosjanie/Rosjan) (Lesson 12).',
          'Reported speech (że / czy / żeby) and possessive pronouns including swój (Lesson 13).',
          'Dative singular & plural (-owi/-u, -e/-i/-y, -om) and expressions of approval/protest (Lesson 14).',
        ],
        examples: [
          { polish: 'Zapytałem, czy nowy program pomoże mieszkańcom i środowisku.', translation: 'I asked whether the new programme would help residents and the environment.' },
        ],
      },
    ],
    66: [
      {
        id: 'l66-b1',
        includeCoursebook: true,
        wbRange: [1, 20],
        title: 'Negative Pronouns nikt, nic, żaden & the Vocative Case',
        summary: 'Polish negative pronouns always require nie before the verb (mandatory double negation).',
        table: {
          headers: ['Case', 'nikt', 'nic', 'żaden / żadna / żadne'],
          rows: [
            ['Nominative', 'nikt', 'nic', 'żaden / żadna / żadne'],
            ['Genitive', 'nikogo', 'niczego / nic', 'żadnego / żadnej'],
            ['Dative', 'nikomu', 'niczemu', 'żadnemu / żadnej'],
            ['Inst. / Loc.', 'z nikim / o nikim', 'z niczym / o niczym', 'żadnym / żadną / o żadnym'],
          ],
        },
        bullets: [
          'Vocative in formal letters and interviews: Szanowny Panie Redaktorze!, Droga Pani Anno!, Cześć, Marku / Kasiu!',
          'Idioms: czwarta władza, ciągnąć kogoś za język, wiadomość z pierwszej ręki, owijać w bawełnę.',
        ],
        examples: [
          { polish: 'Nikt nie sprawdził żadnego źródła i nie zapytał nikogo z redakcji.', translation: 'Nobody checked any source or asked anyone in the newsroom.' },
        ],
      },
    ],
    67: [
      {
        id: 'l67-b1',
        includeCoursebook: true,
        wbRange: [1, 20],
        title: 'Declension of Reflexive się & the Imperative Mood',
        summary: 'The reflexive pronoun się has no Nominative and expresses actions directed back at the subject.',
        table: {
          headers: ['Case', 'Form', 'Typical Example'],
          rows: [
            ['Genitive', 'siebie / się', 'Nie znam samego siebie; boję się o siebie.'],
            ['Dative', 'sobie', 'Kupiłem sobie nową lampę; radzę sobie.'],
            ['Accusative', 'siebie / się', 'Patrzę na siebie w lustrze; ubieram się.'],
            ['Inst. / Loc.', 'sobą / o sobie', 'Rozmawiamy ze sobą; nie mówi o sobie.'],
          ],
        },
        bullets: [
          'Persuasive imperatives: Przejdźmy do rzeczy! Zaufaj mi! Nie daj się nabić w butelkę!',
        ],
        examples: [
          { polish: 'Przekonaj się sam i kup sobie coś naprawdę funkcjonalnego!', translation: 'See for yourself and buy yourself something truly functional!' },
        ],
      },
    ],
    68: [
      {
        id: 'l68-b1',
        includeCoursebook: true,
        wbRange: [1, 20],
        title: 'Locative Case (Miejscownik) When Talking About Culture',
        summary: 'Locative always follows a preposition (o, w, na, po, przy) to name the topic, work, or cultural setting.',
        table: {
          headers: ['Preposition', 'Cultural Usage', 'Examples'],
          rows: [
            ['o + Loc.', 'Topic or subject of a work', 'film o miłości, książka o artyście, mówić o sztuce'],
            ['w + Loc.', 'Inside a work or venue', 'w tej powieści, w wierszu, w teatrze, w muzeum'],
            ['na + Loc.', 'Event or stage', 'na wystawie, na koncercie, na scenie'],
            ['po / przy + Loc.', 'After an event / accompanied by', 'po premierze, po spektaklu, przy muzyce'],
          ],
        },
        bullets: [
          'Idioms: widać rękę artysty, świecić pustkami, połknąć bakcyla, otworzyć drzwi do kariery.',
        ],
        examples: [
          { polish: 'Po premierze rozmawialiśmy o reżyserze, aktorach i niezwykłej muzyce w tym filmie.', translation: 'After the premiere we talked about the director, the actors, and the extraordinary music in that film.' },
        ],
      },
    ],
    69: [
      {
        id: 'l69-b1',
        includeCoursebook: true,
        wbRange: [1, 20],
        title: 'Interrogative Pronouns jaki, który, czyj & the Conditional Mood',
        summary: 'Match interrogative pronouns to gender, number, and case, and use the conditional mood for hypotheses.',
        table: {
          headers: ['Case', 'Masc. / Neut. sg.', 'Fem. sg.', 'Plural'],
          rows: [
            ['Nominative', 'jaki / który / czyj', 'jaka / która / czyja', 'jacy/jakie, którzy/które, czyi/czyje'],
            ['Genitive', 'jakiego / którego / czyjego', 'jakiej / której / czyjej', 'jakich / których / czyich'],
            ['Dative', 'jakiemu / któremu / czyjemu', 'jakiej / której / czyjej', 'jakim / którym / czyim'],
            ['Inst. / Loc.', 'jakim / którym / czyim', 'jaką / którą / czyją (Loc. -ej)', 'jakimi / którymi / czyimi (Loc. -ich)'],
          ],
        },
        bullets: [
          'Hypotheses (conditional): Co byś zrobił, gdyby…?; W którym kraju chciałbyś zamieszkać?',
          'Idioms: mieć świętą cierpliwość, rzucić kamieniem jako pierwszy, wieża Babel, być alfą i omegą.',
        ],
        examples: [
          { polish: 'O której tradycji chciałbyś dowiedzieć się więcej i czyim zdaniem jest ona najważniejsza?', translation: 'Which tradition would you like to learn more about, and in whose opinion is it the most important?' },
        ],
      },
    ],
    70: [
      {
        id: 'l70-b1',
        includeCoursebook: true,
        wbRange: [1, 20],
        title: 'Final Review (Lessons 16–19) & B1 Exam Prep',
        summary: 'Pull together the grammar of the final block and B1 certificate exam strategies.',
        bullets: [
          'Negative pronouns nikt, nic, żaden with double negation and the Vocative case (Lesson 16).',
          'Reflexive pronoun się (siebie, sobie, sobą) and the imperative mood (Lesson 17).',
          'Locative with o, w, na, po, przy for cultural topics and venues (Lesson 18).',
          'Declension of jaki, który, czyj and the conditional mood for hypotheses (Lesson 19).',
        ],
        examples: [
          { polish: 'Szanowni Państwo, nikt nie ma wątpliwości, że po tym kursie poradzicie sobie na egzaminie!', translation: 'Ladies and Gentlemen, nobody doubts that after this course you will succeed on the exam!' },
        ],
      },
    ],
  },

  pl: {
    50: [
      {
        id: 'l50-b1',
        includeCoursebook: true,
        wbRange: [1, 20],
        title: 'Powtórzenie B1: Mianownik lm., pluralia tantum, aspekt i alternacje',
        summary: 'Przed egzaminem porządkujemy formy liczby mnogiej, aspekt czasownika oraz najczęstsze alternacje tematyczne.',
        table: {
          headers: ['Zagadnienie', 'Zasada / końcówki', 'Przykłady'],
          rows: [
            ['M. lm. męskoosobowy', '-i / -y / -owie / -e (+ alternacje)', 'Polacy, studenci, koledzy, profesorowie'],
            ['Pluralia tantum', 'Tylko lm., zgoda niemęskoosobowa', 'te drzwi, nowe okulary, udane wakacje'],
            ['Aspekt czasownika', 'Ndk.: proces/zwyczaj · Dk.: rezultat', 'uczyć się / nauczyć się, pisać / napisać'],
            ['Alternacje', 'ó:o, ą:ę, e:Ø, k:c, t:ci, r:rz', 'błąd → błędy, student → studenci'],
          ],
        },
        bullets: [
          'Idiomy ze słowem „błąd”: być w błędzie, przyznać się do błędu, uczyć się na błędach, wprowadzać w błąd, wyprowadzać z błędu.',
        ],
        examples: [
          { polish: 'Nasi studenci długo się uczyli i zdali egzamin bez żadnego błędu.', translation: 'Nasi studenci długo się uczyli i zdali egzamin bez żadnego błędu.' },
        ],
      },
    ],
    51: [
      {
        id: 'l51-b1',
        includeCoursebook: true,
        wbRange: [1, 20],
        title: 'Okoliczniki sposobu, jak? vs jaki? oraz tryby czasownika',
        summary: 'Rozróżniamy opis czynności (przysłówek → jak?) od cechy rzeczownika (przymiotnik → jaki?) oraz powtarzamy rady i hipotezy.',
        table: {
          headers: ['Konstrukcja', 'Funkcja', 'Przykład'],
          rows: [
            ['jak? → przysłówek / zwrot', 'W jaki sposób coś robimy?', 'Mówię płynnie, po polsku, na pamięć, z łatwością.'],
            ['jaki? jaka? jakie? → przym.', 'Jaka jest rzecz / osoba?', 'Ten egzamin jest trudny, ale sprawiedliwy.'],
            ['Tryb rozkazujący', 'Rada, polecenie', 'Powtórz słówka! Nie denerwuj się! Spróbujmy!'],
            ['Tryb przypuszczający', 'Uprzejma rada, warunek', 'Nauczyłbym się szybciej; warto by było poczytać.'],
          ],
        },
        bullets: [
          'Przyimki na, w, po, za + biernik: uczyć się na pamięć, grać w gry, iść po słownik, dziękować za pomoc.',
          'Idiomy: mieć to na końcu języka, łamać sobie język, siedzieć jak na szpilkach, mieć nerwy ze stali.',
        ],
        examples: [
          { polish: 'Jak zapamiętujesz słówka? Uczę się ich systematycznie i powtarzam na głos.', translation: 'Jak zapamiętujesz słówka? Uczę się ich systematycznie i powtarzam na głos.' },
        ],
      },
    ],
    52: [
      {
        id: 'l52-b1',
        includeCoursebook: true,
        wbRange: [1, 20],
        title: 'Stopniowanie przymiotników i przysłówków',
        summary: 'Przy opisie wyglądu i porównaniach stosujemy stopniowanie regularne, opisowe oraz nieregularne.',
        table: {
          headers: ['Stopień równy', 'Stopień wyższy', 'Stopień najwyższy'],
          rows: [
            ['ładny / wysoki', 'ładniejszy / wyższy', 'najładniejszy / najwyższy'],
            ['elegancki / stylowy', 'bardziej elegancki', 'najbardziej elegancki'],
            ['dobry / zły / duży / mały', 'lepszy / gorszy / większy / mniejszy', 'najlepszy / najgorszy / największy / najmniejszy'],
            ['dobrze / źle / dużo / mało', 'lepiej / gorzej / więcej / mniej', 'najlepiej / najgorzej / najwięcej / najmniej'],
          ],
        },
        bullets: [
          'Porównania: wyższy niż brat (M.) = wyższy od brata (D.); coraz ładniejszy; im częściej, tym lepiej.',
          'Idiomy: wyglądać jak milion dolarów, wyglądać kwitnąco, tryskać zdrowiem, wyglądać jak siedem nieszczęść.',
        ],
        examples: [
          { polish: 'W tej sukience wyglądasz jeszcze lepiej niż na zdjęciu!', translation: 'W tej sukience wyglądasz jeszcze lepiej niż na zdjęciu!' },
        ],
      },
    ],
    53: [
      {
        id: 'l53-b1',
        includeCoursebook: true,
        wbRange: [1, 20],
        title: 'Składnia liczebników (2–4, 5+ i zbiorowe)',
        summary: 'Przypadek rzeczownika i forma orzeczenia zależą od liczebnika oraz rodzaju męskoosobowego.',
        table: {
          headers: ['Liczebnik', 'Rzeczownik', 'Czasownik', 'Przykład'],
          rows: [
            ['2, 3, 4 (niemęskoos.)', 'M. lm.', 'lm.', 'Dwie nowe pralki działają.'],
            ['dwaj / trzej / czterej', 'M. lm.', 'lm. (mo.)', 'Trzej koledzy pracowali.'],
            ['dwóch / trzech / 5+ (wszystkie)', 'D. lm.', '3. os. lp. r. n.', 'Pięciu pracowników otrzymało premię.'],
            ['dwoje, troje, czworo', 'D. lm.', '3. os. lp. r. n.', 'Troje dzieci bawiło się w pokoju.'],
          ],
        },
        bullets: [
          'Idiomy: upiec dwie pieczenie na jednym ogniu, być w siódmym niebie, ni w pięć, ni w dziewięć, wtrącić swoje trzy grosze.',
        ],
        examples: [
          { polish: 'W ankiecie wzięło udział dwadzieścia pięć osób.', translation: 'W ankiecie wzięło udział dwadzieścia pięć osób.' },
        ],
      },
    ],
    54: [
      {
        id: 'l54-b1',
        includeCoursebook: true,
        wbRange: [1, 20],
        title: 'Odmiana liczebników głównych (B, D, N) i wyrażenia czasowe',
        summary: 'W opowiadaniach o emigracji i czasie pobytu liczebniki odmieniają się po przyimkach.',
        table: {
          headers: ['Mianownik', 'Dopełniacz (od, w ciągu)', 'Narzędnik (przed, z)', 'Przykład'],
          rows: [
            ['dwa / dwie', 'dwóch (dwu)', 'dwoma / dwiema', 'od dwóch lat, z dwiema koleżankami'],
            ['trzy / cztery', 'trzech / czterech', 'trzema / czterema', 'przed trzema laty, z czterema osobami'],
            ['pięć … dziesięć', 'pięciu … dziesięciu', 'pięcioma (pięciu)', 'od pięciu miesięcy, przed dziesięcioma laty'],
            ['dwadzieścia / sto', 'dwudziestu / stu', 'dwudziestoma / stoma', 'od dwudziestu lat, ze stu rodakami'],
          ],
        },
        bullets: [
          'Wyrażenia czasowe: od + D., przed + N., za + B., przez + B., w ciągu + D.',
        ],
        examples: [
          { polish: 'Wyjechał za granicę przed pięcioma laty i od trzech lat mieszka w Krakowie.', translation: 'Wyjechał za granicę przed pięcioma laty i od trzech lat mieszka w Krakowie.' },
        ],
      },
    ],
    55: [
      {
        id: 'l55-b1',
        includeCoursebook: true,
        wbRange: [1, 20],
        title: 'Powtórzenie lekcji 0–4: lista kontrolna',
        summary: 'Utrwalamy wszystkie kluczowe zagadnienia pierwszego bloku podręcznika Hurra 3.',
        bullets: [
          'Mianownik lm. (rodzaj męskoosobowy), pluralia tantum i aspekt (lekcja 0).',
          'jak? (przysłówek) vs jaki? (przymiotnik), tryb rozkazujący i przypuszczający (lekcja 1).',
          'Stopniowanie przymiotników i przysłówków: niż + M., od + D., im…, tym… (lekcja 2).',
          'Składnia liczebników (5+ → D. lm. + czasownik lp. r. n.) i odmiana w B, D, N (lekcje 3–4).',
        ],
        examples: [
          { polish: 'Od pięciu lat mówię po polsku coraz lepiej niż na początku.', translation: 'Od pięciu lat mówię po polsku coraz lepiej niż na początku.' },
        ],
      },
    ],
    56: [
      {
        id: 'l56-b1',
        includeCoursebook: true,
        wbRange: [1, 20],
        title: 'Alternacja ę:ą, mieć + bezokolicznik i rzeczowniki nijakie na -ę',
        summary: 'Trzy kluczowe zagadnienia przydatne podczas załatwiania spraw w urzędach.',
        table: {
          headers: ['Przypadek', 'imię (temat -en-)', 'zwierzę (temat -ęt-)'],
          rows: [
            ['M. / B. lp.', 'imię', 'zwierzę'],
            ['D. / C. / Ms. lp.', 'imienia / imieniu', 'zwierzęcia / zwierzęciu'],
            ['N. lp.', 'imieniem', 'zwierzęciem'],
            ['M. / D. lm.', 'imiona / imion', 'zwierzęta / zwierząt'],
          ],
        },
        bullets: [
          'Alternacja ą:ę: urząd → w urzędzie, błąd → bez błędu, święto → świąt, ręka → rąk.',
          'mieć + bezokolicznik wyraża obowiązek, plan lub polecenie: Mam złożyć wniosek do piątku.',
        ],
        examples: [
          { polish: 'Mam podać w urzędzie swoje imię oraz imiona rodziców.', translation: 'Mam podać w urzędzie swoje imię oraz imiona rodziców.' },
        ],
      },
    ],
    57: [
      {
        id: 'l57-b1',
        includeCoursebook: true,
        wbRange: [1, 20],
        title: 'Przymiotnikowa odmiana rzeczowników, imion i nazwisk',
        summary: 'Rzeczowniki typu znajomy, imiona na -y/-i oraz nazwiska na -ski/-cki/-ska/-cka odmieniają się jak przymiotniki.',
        table: {
          headers: ['Przypadek', 'znajomy / Jerzy / Kowalski', 'Kowalska', 'państwo Kowalscy'],
          rows: [
            ['Dopełniacz', 'znajomego / Jerzego / Kowalskiego', 'Kowalskiej', 'Kowalskich'],
            ['Celownik', 'znajomemu / Jerzemu / Kowalskiemu', 'Kowalskiej', 'Kowalskim'],
            ['Biernik', 'znajomego / Jerzego / Kowalskiego', 'Kowalską', 'Kowalskich'],
            ['N. / Ms.', 'znajomym / Jerzym / Kowalskim', 'Kowalską / Kowalskiej', 'Kowalskimi / Kowalskich'],
          ],
        },
        bullets: [
          'Tak samo odmieniają się: podróżny, chory, bezrobotny, księgowy, narzeczony, Antoni (Antoniego, Antonim).',
        ],
        examples: [
          { polish: 'Dziękuję panu Jerzemu Kowalskiemu i pani Annie Nowackiej za szybką naprawę.', translation: 'Dziękuję panu Jerzemu Kowalskiemu i pani Annie Nowackiej za szybką naprawę.' },
        ],
      },
    ],
    58: [
      {
        id: 'l58-b1',
        includeCoursebook: true,
        wbRange: [1, 20],
        title: 'Odmiana pieniądz i miesiąc; pewność i niepewność',
        summary: 'Utrwalamy nieregularne formy lm. (pieniędzy, miesięcy, pieniędzmi) oraz zwroty wyrażające pewność i wątpliwość.',
        table: {
          headers: ['Przypadek', 'pieniądz (lp. / lm.)', 'miesiąc (lp. / lm.)'],
          rows: [
            ['Mianownik', 'pieniądz / pieniądze', 'miesiąc / miesiące'],
            ['Dopełniacz', 'pieniądza / pieniędzy', 'miesiąca / miesięcy'],
            ['Celownik', 'pieniądzowi / pieniądzom', 'miesiącowi / miesiącom'],
            ['Narzędnik', 'pieniądzem / pieniędzmi', 'miesiącem / miesiącami'],
          ],
        },
        bullets: [
          'Pewność: na pewno, bez wątpienia, jestem pewien/przekonany, że…',
          'Niepewność: chyba, może, prawdopodobnie, wątpię, żeby…, nie jestem pewien, czy…',
        ],
        examples: [
          { polish: 'Na pewno w tym miesiącu nie wydamy aż tylu pieniędzy.', translation: 'Na pewno w tym miesiącu nie wydamy aż tylu pieniędzy.' },
        ],
      },
    ],
    59: [
      {
        id: 'l59-b1',
        includeCoursebook: true,
        wbRange: [1, 20],
        title: 'Zdania warunkowe i brak następstwa czasów',
        summary: 'Rozróżniamy warunek realny i nierzeczywisty, a w zdaniach podrzędnych zachowujemy czas z perspektywy mówiącego.',
        table: {
          headers: ['Typ', 'Spójnik i forma czasownika', 'Przykład'],
          rows: [
            ['Realny (ter./przysz.)', 'jeżeli / jeśli + ter. lub przysz.', 'Jeżeli masz / będziesz mieć czas, zróbmy to.'],
            ['Nierzeczywisty / uprzejmy', 'gdyby + temat przeszły (-bym/-byś/-by)', 'Gdybyś miał lepszą ofertę, przyjąłbyś ją?'],
            ['Brak następstwa czasów', 'Powiedział, że + ter./przysz./przesz.', 'Powiedział, że szuka nowej pracy.'],
          ],
        },
        bullets: [
          'Idiomy: wziąć się do roboty, wyścig szczurów, bez pracy nie ma kołaczy, jaka praca, taka płaca.',
        ],
        examples: [
          { polish: 'Gdybym miał własną firmę, nie brałbym udziału w wyścigu szczurów.', translation: 'Gdybym miał własną firmę, nie brałbym udziału w wyścigu szczurów.' },
        ],
      },
    ],
    60: [
      {
        id: 'l60-b1',
        includeCoursebook: true,
        wbRange: [1, 20],
        title: 'Powtórzenie lekcji 6–9: lista kontrolna',
        summary: 'Systematyzujemy gramatykę drugiego bloku: urzędy, usługi, finanse i ekonomia.',
        bullets: [
          'Alternacja ę:ą (urząd → urzędu), mieć + bezokolicznik, rzeczowniki na -ę: imię/imiona, zwierzę/zwierzęta (lekcja 6).',
          'Odmiana przymiotnikowa: znajomy, Jerzy, Kowalski / Kowalska / państwo Kowalscy (lekcja 7).',
          'pieniądz → pieniędzy / pieniędzmi; miesiąc → miesięcy; wyrażanie pewności i niepewności (lekcja 8).',
          'Zdania warunkowe (jeżeli masz / będziesz mieć / gdybyś miał) i brak następstwa czasów (lekcja 9).',
        ],
        examples: [
          { polish: 'Jeżeli zaoszczędzimy trochę pieniędzy, za kilka miesięcy zatrudnimy fachowca.', translation: 'Jeżeli zaoszczędzimy trochę pieniędzy, za kilka miesięcy zatrudnimy fachowca.' },
        ],
      },
    ],
    61: [
      {
        id: 'l61-b1',
        includeCoursebook: true,
        wbRange: [1, 20],
        title: 'Odmiana rzeczownika rząd i zdania z podmiotem w dopełniaczu',
        summary: 'Odróżniamy rząd „władza” (bez alternacji ą:ę) od rząd „szereg” i pamiętamy o orzeczeniu w 3. os. lp. r. nijakiego.',
        table: {
          headers: ['Konstrukcja', 'Zasada', 'Przykład'],
          rows: [
            ['rząd (władza)', 'ą zostaje w każdym przypadku', 'rządu, rządowi, rządem, o rządzie, rządy, rządów'],
            ['dużo / mało / wielu / pięciu + D.', 'czasownik w 3. os. lp. r. n.', 'Wielu obywateli głosowało w wyborach.'],
            ['brakuje / ubywa / nie ma + D.', 'czasownik w 3. os. lp. r. n.', 'Zabrakło głosów; Nie było porozumienia.'],
          ],
        },
        bullets: [
          'Ważność i obojętność: To ma ogromne znaczenie / To jest dla mnie kluczowe vs Jest mi to obojętne.',
        ],
        examples: [
          { polish: 'Większość posłów nie poparła projektu rządu.', translation: 'Większość posłów nie poparła projektu rządu.' },
        ],
      },
    ],
    62: [
      {
        id: 'l62-b1',
        includeCoursebook: true,
        wbRange: [1, 20],
        title: 'Nazwy państw w dopełniaczu i rzeczowniki na -anin',
        summary: 'W rzeczownikach męskich na -anin cząstka -in występuje tylko w liczbie pojedynczej, a w mnogiej znika.',
        table: {
          headers: ['Liczba / przypadek', 'Amerykanin', 'Rosjanin / krakowianin'],
          rows: [
            ['M. lp.', 'Amerykanin', 'Rosjanin'],
            ['D. lp.', 'Amerykanina', 'Rosjanina'],
            ['M. lm.', 'Amerykanie', 'Rosjanie'],
            ['D. lm.', 'Amerykanów (-ów)', 'Rosjan / krakowian (-Ø!)'],
          ],
        },
        bullets: [
          'Państwa w D. (liczba mnoga): z Niemiec, z Włoch, z Czech, z Węgier, ze Stanów Zjednoczonych, z Chin.',
          'Idiomy: jakim prawem?, obejść prawo, być ponad prawem, zrobić coś na lewo.',
        ],
        examples: [
          { polish: 'W konferencji wzięło udział wielu Amerykanów, Rosjan oraz gości z Niemiec i Włoch.', translation: 'W konferencji wzięło udział wielu Amerykanów, Rosjan oraz gości z Niemiec i Włoch.' },
        ],
      },
    ],
    63: [
      {
        id: 'l63-b1',
        includeCoursebook: true,
        wbRange: [1, 20],
        title: 'Mowa zależna i odmiana zaimków dzierżawczych',
        summary: 'Relacjonujemy twierdzenia, pytania i prośby bez przesunięcia czasów oraz poprawnie stosujemy zaimek zwrotny swój.',
        table: {
          headers: ['Typ wypowiedzi', 'Spójnik w mowie zależnej', 'Przykład'],
          rows: [
            ['Zdanie oznajmujące', 'że', 'Powiedział, że widział cały wypadek.'],
            ['Pytanie rozstrzygnięcia', 'czy', 'Zapytał, czy wezwaliśmy karetkę.'],
            ['Pytanie szczegółowe', 'gdzie / kiedy / kto / jak', 'Zapytał, gdzie to się wydarzyło.'],
            ['Prośba / polecenie', 'żeby + czas przesz. / bezok.', 'Poprosił, żebym zadzwonił na 112.'],
          ],
        },
        bullets: [
          'swój / swoja / swoje odnosi się do podmiotu zdania: Zabrałem swój dokument; Ona szukała swojej torby.',
          'jego, jej, ich są nieodmienne: widziałem jego samochód, rozmawiałem z jej bratem.',
        ],
        examples: [
          { polish: 'Świadek powiedział, że na wszelki wypadek zapisał numer swojego auta.', translation: 'Świadek powiedział, że na wszelki wypadek zapisał numer swojego auta.' },
        ],
      },
    ],
    64: [
      {
        id: 'l64-b1',
        includeCoursebook: true,
        wbRange: [1, 20],
        title: 'Celownik (komu? czemu?) lp. i lm. oraz wyrażanie protestu',
        summary: 'Powtarzamy końcówki celownika oraz czasowniki łączące się z celownikiem w tematach ekologicznych.',
        table: {
          headers: ['Rodzaj / liczba', 'Przymiotnik', 'Rzeczownik', 'Przykłady'],
          rows: [
            ['Męski lp.', '-emu', '-owi (wyj. -u)', 'klimatowi, panu, bratu, światu'],
            ['Nijaki lp.', '-emu', '-u', 'środowisku, dziecku, morzu'],
            ['Żeński lp.', '-ej', '-e (alt.) / -i / -y', 'przyrodzie, rzece, ziemi, nocy'],
            ['Liczba mnoga', '-ym / -im', '-om', 'ludziom, zwierzętom, lasom'],
          ],
        },
        bullets: [
          'Czasowniki z celownikiem: pomagać, szkodzić, zagrażać, przeciwstawiać się, przyglądać się, ufać, dziwić się.',
          'Aprobata / protest: Popieram ten pomysł vs Stanowczo protestuję przeciwko… / Nie zgadzam się na…',
        ],
        examples: [
          { polish: 'Zanieczyszczenie powietrza szkodzi ludziom, zwierzętom i całemu środowisku.', translation: 'Zanieczyszczenie powietrza szkodzi ludziom, zwierzętom i całemu środowisku.' },
        ],
      },
    ],
    65: [
      {
        id: 'l65-b1',
        includeCoursebook: true,
        wbRange: [1, 20],
        title: 'Powtórzenie lekcji 11–14: lista kontrolna',
        summary: 'Utrwalamy blok społeczny i ekologiczny przed ostatnią częścią kursu.',
        bullets: [
          'rząd → rządu / rządów i zdania z podmiotem w D. + orzeczenie w 3. os. lp. r. n. (lekcja 11).',
          'Nazwy państw w D. (z Niemiec, z Włoch) i rzeczowniki na -anin (Amerykanie/Amerykanów, Rosjanie/Rosjan) (lekcja 12).',
          'Mowa zależna (że / czy / żeby) i zaimki dzierżawcze, w tym swój (lekcja 13).',
          'Celownik lp. i lm. (-owi/-u, -e/-i/-y, -om) oraz wyrażanie aprobaty i protestu (lekcja 14).',
        ],
        examples: [
          { polish: 'Zapytałem, czy nowy program pomoże mieszkańcom i środowisku.', translation: 'Zapytałem, czy nowy program pomoże mieszkańcom i środowisku.' },
        ],
      },
    ],
    66: [
      {
        id: 'l66-b1',
        includeCoursebook: true,
        wbRange: [1, 20],
        title: 'Zaimki przeczące nikt, nic, żaden oraz wołacz',
        summary: 'W języku polskim zaimki przeczące wymagają podwójnego przeczenia z partykułą nie przed czasownikiem.',
        table: {
          headers: ['Przypadek', 'nikt', 'nic', 'żaden / żadna / żadne'],
          rows: [
            ['Mianownik', 'nikt', 'nic', 'żaden / żadna / żadne'],
            ['Dopełniacz', 'nikogo', 'niczego / nic', 'żadnego / żadnej'],
            ['Celownik', 'nikomu', 'niczemu', 'żadnemu / żadnej'],
            ['N. / Ms.', 'z nikim / o nikim', 'z niczym / o niczym', 'żadnym / żadną / o żadnym'],
          ],
        },
        bullets: [
          'Wołacz w listach oficjalnych i wywiadach: Szanowny Panie Redaktorze!, Droga Pani Anno!, Cześć, Marku / Kasiu!',
          'Idiomy: czwarta władza, ciągnąć kogoś za język, wiadomość z pierwszej ręki, owijać w bawełnę.',
        ],
        examples: [
          { polish: 'Nikt nie sprawdził żadnego źródła i nie zapytał nikogo z redakcji.', translation: 'Nikt nie sprawdził żadnego źródła i nie zapytał nikogo z redakcji.' },
        ],
      },
    ],
    67: [
      {
        id: 'l67-b1',
        includeCoursebook: true,
        wbRange: [1, 20],
        title: 'Odmiana zaimka zwrotnego się oraz tryb rozkazujący',
        summary: 'Zaimek zwrotny się nie ma mianownika, a w przypadkach zależnych wskazuje na podmiot zdania.',
        table: {
          headers: ['Przypadek', 'Forma', 'Typowy przykład'],
          rows: [
            ['Dopełniacz', 'siebie / się', 'Nie znam samego siebie; boję się o siebie.'],
            ['Celownik', 'sobie', 'Kupiłem sobie nową lampę; radzę sobie.'],
            ['Biernik', 'siebie / się', 'Patrzę na siebie w lustrze; ubieram się.'],
            ['N. / Ms.', 'sobą / o sobie', 'Rozmawiamy ze sobą; nie mówi o sobie.'],
          ],
        },
        bullets: [
          'Tryb rozkazujący w perswazji: Przejdźmy do rzeczy! Zaufaj mi! Nie daj się nabić w butelkę!',
        ],
        examples: [
          { polish: 'Przekonaj się sam i kup sobie coś naprawdę funkcjonalnego!', translation: 'Przekonaj się sam i kup sobie coś naprawdę funkcjonalnego!' },
        ],
      },
    ],
    68: [
      {
        id: 'l68-b1',
        includeCoursebook: true,
        wbRange: [1, 20],
        title: 'Miejscownik (o kim? o czym?) w rozmowach o kulturze',
        summary: 'Miejscownik zawsze występuje z przyimkiem (o, w, na, po, przy) i wskazuje temat, dzieło lub miejsce wydarzenia.',
        table: {
          headers: ['Przyimek', 'Zastosowanie w kulturze', 'Przykłady'],
          rows: [
            ['o + Ms.', 'Temat rozmowy lub dzieła', 'film o miłości, książka o artyście, mówić o sztuce'],
            ['w + Ms.', 'Wewnątrz utworu lub obiektu', 'w tej powieści, w wierszu, w teatrze, w muzeum'],
            ['na + Ms.', 'Wydarzenie lub scena', 'na wystawie, na koncercie, na scenie'],
            ['po / przy + Ms.', 'Po wydarzeniu / w towarzystwie', 'po premierze, po spektaklu, przy muzyce'],
          ],
        },
        bullets: [
          'Idiomy: widać rękę artysty, świecić pustkami, połknąć bakcyla, otworzyć drzwi do kariery.',
        ],
        examples: [
          { polish: 'Po premierze rozmawialiśmy o reżyserze, aktorach i niezwykłej muzyce w tym filmie.', translation: 'Po premierze rozmawialiśmy o reżyserze, aktorach i niezwykłej muzyce w tym filmie.' },
        ],
      },
    ],
    69: [
      {
        id: 'l69-b1',
        includeCoursebook: true,
        wbRange: [1, 20],
        title: 'Zaimki pytajne jaki, który, czyj oraz tryb warunkowy',
        summary: 'Dopasowujemy zaimki pytajne do rodzaju, liczby i przypadku, a hipotezy wyrażamy w trybie warunkowym.',
        table: {
          headers: ['Przypadek', 'r. m. / n. lp.', 'r. ż. lp.', 'liczba mnoga'],
          rows: [
            ['Mianownik', 'jaki / który / czyj', 'jaka / która / czyja', 'jacy/jakie, którzy/które, czyi/czyje'],
            ['Dopełniacz', 'jakiego / którego / czyjego', 'jakiej / której / czyjej', 'jakich / których / czyich'],
            ['Celownik', 'jakiemu / któremu / czyjemu', 'jakiej / której / czyjej', 'jakim / którym / czyim'],
            ['N. / Ms.', 'jakim / którym / czyim', 'jaką / którą / czyją (Ms. -ej)', 'jakimi / którymi / czyimi (Ms. -ich)'],
          ],
        },
        bullets: [
          'Hipotezy (tryb warunkowy): Co byś zrobił, gdyby…?; W którym kraju chciałbyś zamieszkać?',
          'Idiomy: mieć świętą cierpliwość, rzucić kamieniem jako pierwszy, wieża Babel, być alfą i omegą.',
        ],
        examples: [
          { polish: 'O której tradycji chciałbyś dowiedzieć się więcej i czyim zdaniem jest ona najważniejsza?', translation: 'O której tradycji chciałbyś dowiedzieć się więcej i czyim zdaniem jest ona najważniejsza?' },
        ],
      },
    ],
    70: [
      {
        id: 'l70-b1',
        includeCoursebook: true,
        wbRange: [1, 20],
        title: 'Powtórzenie końcowe (lekcje 16–19) i egzamin B1',
        summary: 'Łączymy gramatykę ostatniego działu z praktycznymi strategiami na egzamin certyfikatowy B1.',
        bullets: [
          'Zaimki przeczące nikt, nic, żaden z podwójnym przeczeniem oraz wołacz (lekcja 16).',
          'Zaimek zwrotny się (siebie, sobie, sobą) oraz tryb rozkazujący (lekcja 17).',
          'Miejscownik z przyimkami o, w, na, po, przy w opisach kultury (lekcja 18).',
          'Odmiana zaimków jaki, który, czyj oraz tryb warunkowy w hipotezach (lekcja 19).',
        ],
        examples: [
          { polish: 'Szanowni Państwo, nikt nie ma wątpliwości, że po tym kursie poradzicie sobie na egzaminie!', translation: 'Szanowni Państwo, nikt nie ma wątpliwości, że po tym kursie poradzicie sobie na egzaminie!' },
        ],
      },
    ],
  },
};
