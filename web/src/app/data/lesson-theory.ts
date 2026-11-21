export type LessonTheoryId =
  | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13
  | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26
  | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 | 36 | 37 | 38 | 39
  | 40 | 41 | 42 | 43 | 44 | 45 | 46 | 47 | 48 | 49;

export interface TheoryTable {
  headers: string[];
  rows: string[][];
}

export interface TheoryBlock {
  id: string;
  includeCoursebook?: boolean;
  wbRange?: [number, number];
  exerciseIds?: string[];
  title: string;
  summary: string;
  bullets?: string[];
  table?: TheoryTable;
  examples?: Array<{ polish: string; translation: string }>;
}

export interface LessonTheory {
  coursebookPages: string;
  communication: string;
  vocabulary: string;
  grammar: string;
  examples: Array<{ polish: string; translation: string }>;
  blocks?: TheoryBlock[];
}

export const LESSON_THEORY: Record<LessonTheoryId, LessonTheory> = {
  1: {
    coursebookPages: '6–11',
    communication: 'Учимся здороваться, прощаться, представляться и спрашивать имя собеседника. Для официального общения используем вежливые формы, с друзьями — неформальные.',
    vocabulary: 'Dzień dobry — добрый день; cześć — привет/пока; proszę — пожалуйста; dziękuję — спасибо; przepraszam — извините; miło mi — приятно познакомиться. Повторяем польский алфавит и числа 0–10.',
    grammar: 'Для представления различаем конструкции: „Mam na imię…” (имя), „Nazywam się…” (имя и фамилия) и „Jestem…” (имя или роль). С новыми или старшими людьми используем вежливую форму Pan/Pani („Jak się pan/pani nazywa?”), с друзьями — ty („Jak się nazywasz?”). На этом этапе важно также различать польские диграфы (sz, cz, rz, ch) и буквы с диакритикой (ą, ę, ć, ł, ń, ó, ś, ź, ż).',
    examples: [
      { polish: 'Dzień dobry. Nazywam się Mami Takada.', translation: 'Добрый день. Меня зовут Мами Такада.' },
      { polish: 'Cześć! Mam na imię Tom.', translation: 'Привет! Меня зовут Том.' },
    ],
  },
  2: {
    coursebookPages: '12–19',
    communication: 'Представляемся подробнее: спрашиваем, откуда человек, где он живёт и как у него дела.',
    vocabulary: 'Страны и города, личные данные, занятия и увлечения; числа 11–29. pracować — работать, uczyć się — учиться, hobby — хобби, chcieć — хотеть.',
    grammar: 'Личные местоимения: ja, ty, on/ona/ono, my, wy, oni (мужчины/смешанная группа) / one (женщины/предметы), а также вежливые panowie, panie, państwo. Глагол być: jestem, jesteś, jest, jesteśmy, jesteście, są; глаголы на -m, -sz (czytać, mieszkać) имеют окончания -m, -sz, -Ø, -my, -cie, -ją. Для цели используем „żeby + bezokolicznik” („Uczę się, żeby studiować”), а для причины — „bo”; многие названия людей образуют пары рода: student/studentka, Polak/Polka.',
    examples: [
      { polish: 'Jestem z Japonii. Mieszkam w Tokio.', translation: 'Я из Японии. Я живу в Токио.' },
      { polish: 'Pracuję. A ty? Pracujesz?', translation: 'Я работаю. А ты? Ты работаешь?' },
      { polish: 'Uczę się polskiego, żeby studiować w Polsce, bo bardzo lubię ten kraj.', translation: 'Я учу польский, чтобы учиться в Польше, потому что мне очень нравится эта страна.' },
    ],
  },
  3: {
    coursebookPages: '20–27',
    communication: 'Учимся называть людей и предметы, спрашивать „кто это?“ и „что это?“, описывать вещи простыми прилагательными.',
    vocabulary: 'Предметы в классе, цвета и прилагательные: nowy — новый, stary — старый, dobry — хороший, zły — плохой, duży — большой, mały — маленький.',
    grammar: 'У существительных в именительном падеже (Mianownik: kto? co?) три рода: мужской (ten, jaki? — сущ. на согласную, прил. -y/-i), женский (ta, jaka? — сущ. на -a/-i, прил. -a) и средний (to, jakie? — сущ. на -o/-e/-ę/-um, прил. -e/-ie). Конструкция „To jest…” универсальна для всех родов: To jest nowy student, nowa książka, nowe mieszkanie.',
    examples: [
      { polish: 'Kto to jest? To jest student.', translation: 'Кто это? Это студент.' },
      { polish: 'Co to jest? To jest nowa książka.', translation: 'Что это? Это новая книга.' },
    ],
  },
  4: {
    coursebookPages: '28–33',
    communication: 'Представляем себя и других, описываем внешность и характер, говорим, что думаем.',
    vocabulary: 'Прилагательные для описания людей и выражения opinii: wysoki — высокий, ciekawy — интересный, tylko — только, trochę — немного, mieć rację — быть правым.',
    grammar: 'Глаголы спряжения -ę, -isz/-ysz: myślę — myślisz — myśli — myślimy — myślą; mówię — mówisz. О языках говорим: „mówić po polsku” (наречие po + -u), „znać język polski” (винительный), „uczyć się języka polskiego” (родительный); различаем „uczyć” (обучать кого-то) и „uczyć się” (учиться самому). Для связи предложений используем союзы i (и), ale (но), bo (потому что), а прилагательные согласуем по роду (wysoki student, wysoka studentka).',
    examples: [
      { polish: 'Myślę, że to jest nowy student.', translation: 'Думаю, что это новый студент.' },
      { polish: 'Jaki jesteś? Jestem wysoki.', translation: 'Какой ты? Я высокий.' },
      { polish: 'Mówię trochę po polsku i uczę się języka polskiego, ale to jest trudne.', translation: 'Я немного говорю по-польски и учу польский язык, но это трудно.' },
    ],
  },
  5: {
    coursebookPages: '34–39',
    communication: 'Говорим о профессии, возрасте, семье и интересах.',
    vocabulary: 'Названия профессий и членов семьи, увлечения и числа 20–100. Для возраста важны формы rok, lata и lat.',
    grammar: 'После być (профессия и национальность) и interesować się ставим творительный падеж (Narzędnik: kim? czym?): в мужском и среднем роде прил. -ym/-im, сущ. -em/-iem (dobrym studentem, Polakiem), в женском — -ą/-ą (dobrą studentką, Polką, muzyką). После „To jest…” остаётся именительный падеж. Возраст выражаем как „mieć + число + rok/lata/lat”: 1 rok, числа на 2–4 (кроме 12–14) — lata, остальные — lat.',
    examples: [
      { polish: 'Jestem nauczycielką. Interesuję się muzyką.', translation: 'Я учительница. Я интересуюсь музыкой.' },
      { polish: 'Mam 24 lata.', translation: 'Мне 24 года.' },
    ],
  },
  6: {
    coursebookPages: '40–45',
    communication: 'Рассказываем о свободном времени, спорте и том, чем занимаются близкие.',
    vocabulary: 'Основные глаголы занятий и спорта, названия членов семьи; выражения nudzić się — скучать и szukać — искать.',
    grammar: 'Три модели спряжения в настоящем времени: -m/-sz (mam — masz), -ę/-esz (piszę — piszesz; глаголы на -ować дают -uję/-ujesz: pracuję — pracujesz) и -ę/-isz/-ysz (lubię — lubisz). Притяжательные mój/moja/moje и twój/twoja/twoje согласуются с родом существительного. Обратите внимание на управление: „grać w + винительный” для спорта и игр (w tenisa), но „grać na + предложный” для инструментов и компьютера (na gitarze).',
    examples: [
      { polish: 'Co lubisz robić? Lubię czytać.', translation: 'Что ты любишь делать? Я люблю читать.' },
      { polish: 'To jest moja siostra i mój brat.', translation: 'Это моя сестра и мой брат.' },
    ],
  },
  7: {
    coursebookPages: '46–51',
    communication: 'Покупаем товары, спрашиваем цену, говорим о списке покупок и количестве денег.',
    vocabulary: 'Магазины, товары, деньги, цены и числа 100–1000; krótki — короткий, długi — длинный, drogi — дорогой, tani — дешёвый.',
    grammar: 'Прямое дополнение и существительные после „Proszę…” стоят в винительном падеже (Biernik: kogo? co?). У женских слов -a переходит в -ę, а прил. получает -ą (długa lista → długą listę); одушевлённые мужские слова совпадают с родительным (dobry brat → dobrego brata); неодушевлённые мужские и средние слова равны именительному (nowy telefon, dobre pióro). Цены: kosztuje (ед. ч.) / kosztują (мн. ч.) + 1 złoty, 2–4 złote, 5+ złotych.',
    examples: [
      { polish: 'Mam długą listę zakupów.', translation: 'У меня длинный список покупок.' },
      { polish: 'Kupuję tani chleb i widzę młodszego brata.', translation: 'Покупаю дешёвый хлеб и вижу младшего брата.' },
    ],
  },
  8: {
    coursebookPages: '52–57',
    communication: 'Говорим о еде, предпочтениях и составе блюд; спрашиваем, с чем едят или пьют.',
    vocabulary: 'Приёмы пищи, продукты, напитки и посуда. Полезные выражения: mieć ochotę na — хотеть чего-либо, chętnie — охотно.',
    grammar: 'После „z” (с чем?) используем творительный падеж: в ед. ч. -ym/-im + -em/-iem (м./ср.) и -ą + -ą (ж.), а во множественном числе прил. получает -ymi/-imi, сущ. — -ami (z dobrymi pomidorami). Важные глаголы: jeść (jem, jesz, …, jedzą), pić (piję, pijesz, …, piją) и „woleć + винительный niż + винительный” (wolę kawę niż herbatę). От продуктов часто образуются прилагательные на -owy (pomidor → pomidorowy).',
    examples: [
      { polish: 'Wolę herbatę niż kawę.', translation: 'Я предпочитаю чай кофе.' },
      { polish: 'Jem kanapkę z żółtym serem i pomidorami.', translation: 'Я ем бутерброд с жёлтым сыром и помидорами.' },
    ],
  },
  9: {
    coursebookPages: '58–63',
    communication: 'Покупаем продукты в супермаркете и называем фрукты, овощи и другие продукты.',
    vocabulary: 'Фрукты, овощи, рыба и описания продуктов: świeży — свежий, suszony — сушёный, miękki — мягкий, twardy — твёрдый.',
    grammar: 'У существительных не-мужского личного рода (one: неодушевлённые мужские, женские и средние) формы именительного и винительного падежей множественного числа совпадают (to są pomidory / kupuję pomidory). Прилагательные получают -e (-ie после k, g: świeże, słodkie), мужские и женские существительные — -y (banany, ryby), -i после k, g (ziemniaki, marchewki) или -e после мягких и c, cz, sz, rz, ż (owoce, pomarańcze), а средние — -a (jabłka, jajka).',
    examples: [
      { polish: 'To są świeże pomidory.', translation: 'Это свежие помидоры.' },
      { polish: 'Lubię świeże pomidory i słodkie jabłka.', translation: 'Я люблю свежие помидоры и сладкие яблоки.' },
    ],
  },
  10: {
    coursebookPages: '64–69',
    communication: 'Бронируем столик, заказываем блюда и напитки, говорим, что любим или не любим.',
    vocabulary: 'Кафе и ресторан, блюда и десерты; zamówienie — заказ, zamawiać — заказывать, uwielbiać — обожать.',
    grammar: 'После отрицания (nie jem, nie lubię) прямое дополнение переходит в родительный падеж (Dopełniacz): м./ср. род прил. -ego, сущ. -a/-u (dobrego sera, czerwonego wina); ж. род прил. -ej, сущ. -y/-i (zimnej wody, czarnej kawy). При заказе: „proszę + винительный”, но „dla mnie + именительный”. После z («с кем?») личные местоимения ставятся в творительный: ze mną, z tobą, z nim, z nią, z nami, z wami, z nimi.',
    examples: [
      { polish: 'Zamawiam kawę, ale nie zamawiam deseru.', translation: 'Я заказываю кофе, но не заказываю десерт.' },
      { polish: 'Idę do restauracji z nimi.', translation: 'Я иду в ресторан с ними.' },
    ],
  },
  11: {
    coursebookPages: '70–77',
    communication: 'Рассказываем о семье, спрашиваем, чей это предмет, и описываем повседневные привычки.',
    vocabulary: 'Родственники, семейное положение и частотность действий: zawsze — всегда, zwykle — обычно, często — часто, rzadko — редко, nigdy — никогда.',
    grammar: 'Притяжательные местоимения (czyj? czyja? czyje?) согласуются с предметом: mój/moja/moje, twój/twoja/twoje, nasz/nasza/nasze, wasz/wasza/wasze; формы jego, jej, ich не меняются по роду предмета. Наречия частотности (zawsze, zwykle, często, rzadko, nigdy) обычно стоят перед глаголом. Со словом „nigdy” в польском обязательно двойное отрицание: „nigdy nie + глагол”.',
    examples: [
      { polish: 'To jest moja rodzina. Mój brat często do mnie dzwoni.', translation: 'Это моя семья. Мой брат часто мне звонит.' },
      { polish: 'Ona nigdy nie pracuje w niedzielę.', translation: 'Она никогда не работает по воскресеньям.' },
    ],
  },
  12: {
    coursebookPages: '78–83',
    communication: 'Приглашаем куда-либо, договариваемся о встрече и говорим о расписании.',
    vocabulary: 'Дни недели и время; порядковые числительные от 1 до 24. godzina — час, kwadrans — четверть часа, umówić się — договориться о встрече.',
    grammar: 'Для точного времени используем „o + предложный падеж” порядковых числительных (o pierwszej, o drugiej), а в разговорной речи также kwadrans po…, za piętnaście… и „o wpół do + родительный” (o wpół do ósmej — 7:30). Дни недели: w poniedziałek, we wtorek. Различаем направление: „iść do + родительный” (помещения: do kina) и „iść na + винительный” (события: na koncert); приглашения: „Masz ochotę…?”, „Może pójdziemy…?”',
    examples: [
      { polish: 'Masz ochotę pójść do kina?', translation: 'Хочешь пойти в кино?' },
      { polish: 'Spotkajmy się w poniedziałek o ósmej.', translation: 'Давай встретимся в понедельник в восемь.' },
      { polish: 'W piątek o wpół do ósmej idę do kina, a w sobotę na koncert.', translation: 'В пятницу в половине восьмого я иду в кино, а в субботу на концерт.' },
    ],
  },
  13: {
    coursebookPages: '84–91',
    communication: 'Рассказываем, что делали раньше, как провели выходные и что произошло.',
    vocabulary: 'Свободное время, поездки, звонки и впечатления: mieć zasięg — иметь связь, odpisywać — отвечать на сообщение, pomagać — помогать.',
    grammar: 'В прошедшем времени к основе на -ł/-ła/-ło (ед. ч.) и -li (м.-лич.) / -ły (ост. мн. ч.) добавляются личные окончания: ja -em/-am, ty -eś/-aś, my -śmy, wy -ście (robiłem/robiłam, robiliśmy/robiłyśmy). Глаголы на -eć (mieć, rozumieć) меняют e на a везде, кроме формы на -li: miałem/miała, но mieli; rozumiałem, но rozumieli. Особые основы у jeść (jadłem/jadłam/jedli) и iść/pójść (szedłem/szłam, poszedłem/poszłam).',
    examples: [
      { polish: 'Wczoraj byłam w kinie i jadłam kolację.', translation: 'Вчера я была в кино и ужинала.' },
      { polish: 'Tom poszedł na spacer, a Mami pomagała Karolinie.', translation: 'Том пошёл на прогулку, а Мами помогала Каролине.' },
    ],
  },
  14: {
    coursebookPages: '92–97',
    communication: 'Спрашиваем дорогу, называем транспорт и объясняем, как пройти или проехать к месту.',
    vocabulary: 'Городские места и ориентиры: skrzyżowanie — перекрёсток, schody — лестница, światła — светофор, blisko — близко, daleko — далеко.',
    grammar: 'Пары iść/chodzić и jechać/jeździć различаются направленным единичным действием и привычным движением: idę teraz, chodzę codziennie; jadę dziś, jeżdżę do pracy. Транспорт указываем в творительном падеже: jechać samochodem, autobusem, taksówką. Личные местоимения в винительном/родительном падеже: widzę go, widzę ją, а после предлогов добавляется n- (czekam na niego, na nią, na nich; для акцента — jego).',
    examples: [
      { polish: 'Idę do kina, ale zwykle chodzę do teatru.', translation: 'Я иду в кино, но обычно хожу в театр.' },
      { polish: 'Dziś jadę tramwajem, a do pracy jeżdżę autobusem.', translation: 'Сегодня я еду на трамвае, а на работу езжу на автобусе.' },
    ],
  },
  15: {
    coursebookPages: '98–105',
    communication: 'Покупаем продукты на развес и в упаковках, обращаемся с просьбой и отправляем письма или открытки.',
    vocabulary: 'Меры и упаковки: plasterek — ломтик, kawałek — кусок, paczka — пачка, puszka — банка, karton — пакет/картонная упаковка. Глаголы bać się и szukać требуют родительного падежа.',
    grammar: 'Числительные 2, 3, 4 требуют именительного падежа множественного числа (dwa kartony), а 5 и более, dużo, mało — родительного множественного числа для существительных и прилагательных (pięć dużych kartonów, dużo jabłek). Родительный падеж нужен также после отрицания и глаголов bać się, szukać. Формы местоимений: nie ma mnie, szukam go, boję się jej, а после предлогов — do ciebie, do niego, do niej, do nich.',
    examples: [
      { polish: 'Poproszę dwa kartony soku i pięć jabłek.', translation: 'Дайте, пожалуйста, две упаковки сока и пять яблок.' },
      { polish: 'Szukam znaczków i nie mam koperty.', translation: 'Я ищу марки, и у меня нет конверта.' },
    ],
  },
  16: {
    coursebookPages: '106–111',
    communication: 'Говорим о погоде, временах года, планах на будущее и прогнозе.',
    vocabulary: 'Погода и сезоны: słonecznie — солнечно, pochmurno — облачно, wiatr — ветер, prognoza — прогноз, pora roku — время года.',
    grammar: 'Наречия часто образуются от прилагательных с помощью -o или -e/-ie: szybki → szybko, ładny → ładnie, dobry → dobrze. Времена года отвечают на pytanie kiedy? в творительном падеже (wiosną, latem, jesienią, zimą), а месяцы требуют w + местный падеж (w styczniu, w maju). Будущее время образуется от będę, będziesz... + инфинитив или форма на -ł/-ła (особенно będę mógł/mogła, będę chciał/chciała, będę musiał/musiała).',
    examples: [
      { polish: 'Jutro będzie zimno, ale będę pracować.', translation: 'Завтра будет холодно, но я буду работать.' },
      { polish: 'W weekend napiszę list.', translation: 'На выходных я напишу письмо.' },
    ],
  },
  17: {
    coursebookPages: '112–117',
    communication: 'Выражаем симпатию, мнение и эмоции, обсуждаем подарки и других людей.',
    vocabulary: 'Внешность, одежда, настроение и разговоры: podobać się — нравиться, plotkować — сплетничать, marudny — ворчливый.',
    grammar: 'Глагол lubić требует винительного падежа: lubię ten sweter. В конструкции podobać się предмет нравится — подлежащее в именительном падеже, а человек ставится в дательный: podoba mi się sweter; во множественном числе — podobają mi się buty. Личные местоимения склоняются по падежам (ja → mnie/mi, on → go/jemu/mu), а после предлогов в 3-м лице добавляется n-: z nim, o niej, dla niego.',
    examples: [
      { polish: 'Lubię tę bluzkę. Podoba mi się jej kolor.', translation: 'Мне нравится эта блузка. Мне нравится её цвет.' },
      { polish: 'Podobają mi się te spodnie.', translation: 'Мне нравятся эти брюки.' },
    ],
  },
  18: {
    coursebookPages: '118–123',
    communication: 'Описываем квартиру, комнаты, мебель и расположение предметов.',
    vocabulary: 'Комнаты и жильё: kuchnia — кухня, sypialnia — спальня, piętro — этаж, parter — первый этаж, strych — чердак, piwnica — подвал.',
    grammar: 'После предлогов w, na, przy, o и po используется местный падеж: w domu, na stole, przy oknie, o mieszkaniu; он же нужен после глаголов myśleć o, marzyć o, podróżować po. В единственном числе окончания: -e (с чередованиями t:ci, d:dzi, r:rz, ł:l — w szafie, na stole), -u после k, g, ch и мягких основ (w pokoju, w parku), а в женском роде также -i/-y (w kuchni); во множественном числе обычно -ach (o studentach).',
    examples: [
      { polish: 'Laptop leży na biurku, a książki są w szafie.', translation: 'Ноутбук лежит на письменном столе, а книги находятся в шкафу.' },
      { polish: 'Rozmawiamy o nowym mieszkaniu.', translation: 'Мы разговариваем о новой квартире.' },
    ],
  },
  19: {
    coursebookPages: '124–129',
    communication: 'Ищем квартиру, договариваемся об аренде и описываем, где находятся вещи.',
    vocabulary: 'Переезд и жильё: przeprowadzać się — переезжать, mieszkanie — квартира, zaspać — проспать, zdarzać się — случаться.',
    grammar: 'Статические предлоги места управляют тремя падежами: na, w, przy + местный (w pokoju, na stole); obok, koło, blisko, na wprost + родительный (obok domu); nad, pod, przed, za, między + творительный (pod stołem, za szafą). Положение предмета описываем глаголами stać, leżeć, wisieć.',
    examples: [
      { polish: 'Stół stoi przy oknie, a książka leży na stole.', translation: 'Стол стоит у окна, а книга лежит на столе.' },
      { polish: 'Szukam mieszkania obok centrum.', translation: 'Я ищу квартиру рядом с центром.' },
    ],
  },
  20: {
    coursebookPages: '130–135',
    communication: 'Планируем поездки по Польше, описываем направления и спрашиваем, как добраться.',
    vocabulary: 'Географические направления и достопримечательности: północ — север, południe — юг, granica — граница, zabytek — памятник архитектуры, wycieczka — экскурсия/поездка.',
    grammar: 'Предлог и падеж зависят от вопроса „где?“ (место) или „куда?“ (направление). Для городов, стран и зданий: w + местный → do + родительный (w Krakowie → do Krakowa); для островов и регионов: na + местный → na + винительный (na Mazurach → na Mazury); для моря и озёр: nad + творительный → nad + винительный (nad morzem → nad morze).',
    examples: [
      { polish: 'Jesteśmy w Krakowie, a jutro jedziemy do Warszawy.', translation: 'Мы в Кракове, а завтра едем в Варшаву.' },
      { polish: 'Hotel leży na północy Polski.', translation: 'Отель находится на севере Польши.' },
    ],
  },
  21: {
    coursebookPages: '136–143',
    communication: 'Говорим о датах, днях рождения и биографических событиях.',
    vocabulary: 'Даты и события жизни: urodziny — день рождения, imieniny — именины, obchodzić — отмечать, rok — год.',
    grammar: 'Видовые пары объединяют несовершенный глагол (процесс, привычка: robiłem) и совершенный (результат: zrobiłem) в прошедшем времени. Даты на вопрос kiedy? ставим в родительный падеж (piątego lipca), а годы — с предлогом w и местным падежом последнего порядкового числительного и слова roku (w tysiąc dziewięćset osiemdziesiątym dziewiątym roku).',
    examples: [
      { polish: 'Wczoraj pisałam list.', translation: 'Вчера я писала письмо (важен процесс).' },
      { polish: 'Wczoraj napisałam list.', translation: 'Вчера я написала письмо (есть результат).' },
    ],
  },
  22: {
    coursebookPages: '144–149',
    communication: 'Рассказываем о планах на выходные и договариваемся по телефону.',
    vocabulary: 'Планы и действия: zostawać — оставаться, zająć — занять, zejść — спуститься; учимся обсуждать, что сделать и чем заняться.',
    grammar: 'В будущем времени несовершенный вид (będę + инфинитив или -ł/-ła: będę czytać) выражает процесс или повторение, а совершенный — ожидаемый результат в одной форме (przeczytam, zrobię, zadzwonię; часто с приставкой). Глаголы движения образуют совершенное будущее особыми формами: iść → pójdę, jechać → pojadę, wyjść → wyjdę, wejść → wejdę.',
    examples: [
      { polish: 'W sobotę będę czytać książkę.', translation: 'В субботу я буду читать книгу.' },
      { polish: 'W niedzielę przeczytam ten artykuł.', translation: 'В воскресенье я прочитаю эту статью.' },
    ],
  },
  23: {
    coursebookPages: '150–157',
    communication: 'Покупаем одежду, описываем вещи, делаем комплименты и сравниваем варианты.',
    vocabulary: 'Одежда, ткани, цвета и узоры; nosić — носить, mieć na sobie — быть одетым во что-либо.',
    grammar: 'Прилагательные образуют степени сравнения с -szy/-ejszy и naj- (ładny → ładniejszy → najładniejszy), длинные — через bardziej/najbardziej, а частые исключения: dobry → lepszy, zły → gorszy, duży → większy, mały → mniejszy. Сравниваем через niż + именительный, od + родительный и ze + родительный (najgrubszy ze wszystkich). Одежда после nosić и mieć na sobie стоит в винительном падеже; различаем znać (+ винительный) и wiedzieć (о факте).',
    examples: [
      { polish: 'Ta sukienka jest ładniejsza niż tamta.', translation: 'Это платье красивее того.' },
      { polish: 'Mam na sobie czerwoną bluzkę.', translation: 'На мне красная блузка.' },
    ],
  },
  24: {
    coursebookPages: '158–165',
    communication: 'Общаемся у парикмахера и в фитнес-студии, одобряем или критикуем результат.',
    vocabulary: 'Внешность, части тела, стрижка и уход; pozwolić sobie na — позволить себе, strzyżenie — стрижка.',
    grammar: 'Наречия (отвечают на jak?, в отличие от прилагательных jaki?) образуют степени сравнения через -ej/-iej и naj-: szybko → szybciej → najszybciej. Важные исключения: dobrze → lepiej → najlepiej, źle → gorzej, dużo → więcej, mało → mniej. Некоторые части тела имеют неправильное множественное число: oko → oczy, ucho → uszy, ręka → ręce.',
    examples: [
      { polish: 'Tutaj jest drożej niż w Londynie.', translation: 'Здесь дороже, чем в Лондоне.' },
      { polish: 'Po tej fryzurze wyglądasz najlepiej.', translation: 'С этой причёской ты выглядишь лучше всего.' },
    ],
  },
  25: {
    coursebookPages: '166–171',
    communication: 'Обращаемся к врачу или стоматологу и даём советы.',
    vocabulary: 'Части тела, симптомы и лечение: boleć — болеть, zażywać — принимать лекарство, lekarz — врач, dentysta — стоматолог.',
    grammar: 'Для совета используем powinien + инфинитив, согласуя форму с лицом, родом и числом: powinienem/powinnam, powinieneś/powinnaś, powinien/powinna/powinno, powinniśmy/powinnyśmy, powinni/powinny. Глагол boleć согласуется по числу с тем, что болит, а человек стоит в винительном падеже: boli mnie głowa, bolą mnie zęby.',
    examples: [
      { polish: 'Powinieneś odpocząć. Powinnaś iść do lekarza.', translation: 'Тебе следует отдохнуть. Тебе следует пойти к врачу.' },
      { polish: 'Boli mnie głowa.', translation: 'У меня болит голова.' },
    ],
  },
  26: {
    coursebookPages: '172–177',
    communication: 'Просим об услуге, сообщаем о проблеме и подаём жалобу или рекламацию.',
    vocabulary: 'Службы и непредвиденные ситуации: wypadek — происшествие, kradzież — кража, pożar — пожар, naprawić — починить, reklamacja — рекламация.',
    grammar: 'Условное наклонение (tryb przypuszczający) смягчает просьбы и желания. К форме прошедшего времени добавляется частица -by с личным окончанием (-m, -ś, —, -śmy, -ście): mógłbym/mogłabym, mógłbyś/mogłabyś, mógłby pan/mogłaby pani, chcielibyśmy/chciałybyśmy. Для советов также используется powinien/powinna + инфинитив.',
    examples: [
      { polish: 'Czy mógłby pan mi pomóc?', translation: 'Не могли бы вы мне помочь?' },
      { polish: 'Chciałabym złożyć reklamację.', translation: 'Я хотела бы подать рекламацию.' },
    ],
  },
  27: {
    coursebookPages: '6–13',
    communication: 'Представляемся подробнее, рассказываем о внешности, характере, интересах, семье и мечтах.',
    vocabulary: 'Внешность, черты характера, семейное положение, увлечения и свободное время.',
    grammar: 'Творительный падеж (narzędnik: kim? czym?) образуется с окончаниями -em (м./ср. р.), -ą (ж. р.), -ami/-mi (мн. ч., напр. dziećmi), а у прилагательных — -ym/-im, -ą, -ymi/-imi. Он употребляется с глаголами interesować się, zajmować się, kierować, opiekować się (в отличие от prowadzić + винительный), после предлогов z/ze, przed, nad, pod, za, między, poza и для обозначения транспорта или инструмента. Личные местоимения: mną, tobą, nim, nią, nami, wami, nimi.',
    examples: [
      { polish: 'Interesuję się polskim kinem.', translation: 'Я интересуюсь польским кино.' },
      { polish: 'Jadę do pracy autobusem.', translation: 'Я еду на работу на автобусе.' },
    ],
  },
  28: {
    coursebookPages: '14–19',
    communication: 'Описываем необычные события и природные катаклизмы, рассказываем о семье и биографиях.',
    vocabulary: 'Катаклизмы, стихийные бедствия, семейные события и биографические факты.',
    grammar: 'Родительный падеж (dopełniacz: kogo? czego?) имеет окончания -a/-u (м./ср. р.), -y/-i (ж. р.) в ед. ч., -ów/-y/-i/нулевое во мн. ч. и -ego/-ej/-ych (-ich) у прилагательных. Он требуется после отрицания, предлогов do, od, z, bez, dla, obok, podczas и глаголов szukać, potrzebować, bać się, używać, słuchać. После количественных слов (dużo, mało, kilka, wiele; для муж.-личн. — kilku, wielu, dwóch, trzech) существительное ставится в род. п. мн. ч., а глагол — в 3-м л. ед. ч. ср. р. (jest, było, zginęło).',
    examples: [
      { polish: 'Nie mam czasu ani ochoty.', translation: 'У меня нет ни времени, ни желания.' },
      { polish: 'Boję się burzy.', translation: 'Я боюсь грозы.' },
    ],
  },
  29: {
    coursebookPages: '20–25',
    communication: 'Покупаем билеты в кино, уточняем расписание и сравниваем фильмы.',
    vocabulary: 'Кинотеатр, сеансы, билеты, жанры, рецензии и описание фильма.',
    grammar: 'Различаем статические предлоги места (gdzie?: w/na + местн. п.; przed/pod/nad/za/między + твор. п.) и динамические предлоги направления (dokąd?: do/na + род./вин. п.; skąd?: z/od + род. п.). Для времени начала и окончания используем o/po + местн. п. (o ósmej), przed + твор. п. (przed ósmą), na + вин. п. (na ósmą). Просьбы и распоряжения передаём через żeby + инфинитив или żeby + прошедшее время (żebym, żebyś, żeby, żebyśmy + -ł/-ła/-li), в отличие от że для сообщений; также повторяем местоимения в дательном падеже (mi, ci, mu, jej, nam, wam, im).',
    examples: [
      { polish: 'O której zaczyna się seans?', translation: 'Во сколько начинается сеанс?' },
      { polish: 'Mami poprosiła Angelę, żeby poszła z nią do kina.', translation: 'Мами попросила Ангелу пойти с ней в кино.' },
    ],
  },
  30: {
    coursebookPages: '26–31',
    communication: 'Даем определения, описываем людей и называем национальности, профессии и виды спорта.',
    vocabulary: 'Национальности, профессии, спорт, названия людей и предметов.',
    grammar: 'Именительный падеж множественного числа существительных: не-муж.-личн. род (one) принимает -y, -i (после k, g), -e (мягкая основа) или -a (ср. р.). Мужско-личный род (oni) образуется с помощью -i/-y со смягчением основы (t→ci, k→cy, g→dzy, r→rzy: student → studenci, Polak → Polacy), -owie (panowie, profesorowie) или -e (nauczyciele, lekarze); исключения: ludzie, bracia, księża, dzieci. С числительными 2–4 используем dwaj, trzej, czterej + им. п. мн. ч. и глагол во мн. ч. (dwaj studenci są) либо dwóch, trzech, czterech + род. п. мн. ч. и глагол в ед. ч. (dwóch studentów jest).',
    examples: [
      { polish: 'Polacy mieszkają w Polsce.', translation: 'Поляки живут в Польше.' },
      { polish: 'Dwaj lekarze pracują w szpitalu.', translation: 'Два врача работают в больнице.' },
    ],
  },
  31: {
    coursebookPages: '32–39',
    communication: 'Описываем характер и внешность, даем определения, формулируем и обосновываем мнение.',
    vocabulary: 'Черты характера, отношения, оценки и выражения собственного мнения.',
    grammar: 'Прилагательные и местоимения мужско-личного рода во мн. ч. получают окончание -i/-y со смягчением согласного основы (dobry → dobrzy, miły → mili, młody → młodzi, wysoki → wysocy, drogi → drodzy; ci, moi, nasi, wszyscy), тогда как не-муж.-личн. род имеет -e (dobre, te, moje). Субстантивированные прилагательные (znajomy, bezdomny) склоняются как прилагательные. В определениях используем относительные конструкции ktoś, kto / coś, co и człowiek, który (-a, -e, -zy), склоняя który и kto по падежам (kogo, komu, z kim, o którym).',
    examples: [
      { polish: 'To są bardzo zdolni studenci, którzy lubią się uczyć.', translation: 'Это очень способные студенты, которые любят учиться.' },
      { polish: 'Moi przyjaciele są cierpliwi.', translation: 'Мои друзья терпеливые.' },
    ],
  },
  32: {
    coursebookPages: '40–45',
    communication: 'Говорим об образовании, учебе, компьютере, опыте и планах.',
    vocabulary: 'Школа, университет, компьютер, интернет, предметы и образовательные степени.',
    grammar: 'Отглагольные существительные (rzeczowniki odczasownikowe) образуются с суффиксами -nie (-anie, -enie: czytać → czytanie, mówić → mówienie) или -cie (pić → picie, myć → mycie) и всегда относятся к среднему роду. После предлогов они склоняются как существительные на -e (do czytania, podczas pisania, przed jedzeniem, po przeczytaniu), а зависимое существительное после них ставится в родительном падеже (czytanie książek). Отрицание nie с такими существительными пишется слитно (niepalenie).',
    examples: [
      { polish: 'Lubię czytanie reportaży.', translation: 'Я люблю читать репортажи.' },
      { polish: 'Przed wysłaniem pliku sprawdź tekst.', translation: 'Перед отправкой файла проверь текст.' },
    ],
  },
  33: {
    coursebookPages: '46–51',
    communication: 'Проходим собеседование, говорим о работе и профессиональных трудностях, пишем резюме и письма.',
    vocabulary: 'Трудоустройство, должности, типы компаний и деловая переписка.',
    grammar: 'Закрепляем падежи и времена в контексте резюме и собеседования: szukać/potrzebować + род. п. (szukam pracy), pracować jako + им. п. или w + местн. п. (w firmie), interesować się/zajmować się + твор. п., wysłać CV + твор. п. (mailem). Для описания опыта и планов используем прошедшее и будущее время, а также образуем прилагательные от существительных с суффиксами -owy, -ny, -ący (stres → stresujący, odpowiedzialność → odpowiedzialny).',
    examples: [
      { polish: 'Mam doświadczenie w pracy z klientami.', translation: 'У меня есть опыт работы с клиентами.' },
      { polish: 'Czy mogę wysłać CV mailem?', translation: 'Можно отправить резюме по электронной почте?' },
    ],
  },
  34: {
    coursebookPages: '52–57',
    communication: 'Берем интервью, рассказываем о событиях, происхождении и воспоминаниях.',
    vocabulary: 'Происхождение, семья, путешествия и важные события.',
    grammar: 'В винительном падеже мн. ч. муж.-личн. род совпадает с родительным (znam dobrych aktorów), а не-муж.-личн. — с именительным (znam ciekawe historie); после предлогов движения и места различаем винительный (dokąd?) и местный (gdzie?) падежи. Возвратно-притяжательное местоимение swój/swoja/swoje/swoi указывает на принадлежность подлежащему (Alicja kocha swojego męża — своего, а не jej — чужого) и склоняется как mój. Также используем страдательные причастия на -ny/-ony/-ty (napisany, zrobiony, zamknięty), согласуя их с существительным.',
    examples: [
      { polish: 'Pamiętam swoich przyjaciół z dzieciństwa.', translation: 'Я помню своих друзей детства.' },
      { polish: 'Pamiętam tę historię.', translation: 'Я помню эту историю.' },
    ],
  },
  35: {
    coursebookPages: '58–65',
    communication: 'Даем инструкции, формулируем запреты и готовимся к путешествию.',
    vocabulary: 'Поездки, упаковка багажа, кемпинг, аэропорт и дорожные указатели.',
    grammar: 'Повелительное наклонение (tryb rozkazujący) для 2-го л. ед. ч. образуется от основы наст. вр. (I–II спр.: pisz!, chodź!, mów!, после группы согласных -ij/-yj: zamknij!, weź!; III спр. -am/-em: -j: czytaj!, kupuj!), во мн. ч. добавляется -my/-cie, а для 3-го лица используется niech + 3-е л. (niech pan/pani sprawdzi!). Для правил, советов и запретов применяются безличные конструкции с инфинитивом: trzeba, należy, powinno się, można, wolno, nie wolno, warto. Просьбы пересказываем с помощью żeby + прошедшее время.',
    examples: [
      { polish: 'Spakuj paszport i bilet.', translation: 'Положи в багаж паспорт и билет.' },
      { polish: 'Nie wolno tu palić.', translation: 'Здесь нельзя курить.' },
    ],
  },
  36: {
    coursebookPages: '66–71',
    communication: 'Спрашиваем информацию, узнаем о достопримечательностях Польши и пишем сообщения.',
    vocabulary: 'Города и туристические места, письма, электронные письма и SMS.',
    grammar: 'Местный падеж (miejscownik: o kim? o czym?, после w, na, o, po, przy) в ед. ч. имеет окончания -e со смягчением (k→c, g→dz, r→rz, t→ci, d→dzi, ł→l, ch→sz: w Polsce, w szafie), -u (м./ср. р. после k, g, ch и мягких основ: w Gdańsku, w domu) и -i/-y (ж. р. мягкой основы: w kuchni), во мн. ч. — -ach. Звательный падеж (wołacz) в ед. ч. у муж. р. обычно совпадает с местн. п. (panie profesorze, Piotrze, коллеги на -a: kolego!), у жен. р. принимает -o (Anno, Ewo), -u для уменьшительных (Ewciu, Kasiu) или -i (pani!), а во мн. ч. совпадает с именительным (Drodzy panowie!).',
    examples: [
      { polish: 'Co warto zobaczyć w Gdańsku?', translation: 'Что стоит посмотреть в Гданьске?' },
      { polish: 'Droga Anno, dziękuję za wiadomość.', translation: 'Дорогая Анна, спасибо за сообщение.' },
    ],
  },
  37: {
    coursebookPages: '72–77',
    communication: 'Рассказываем, куда и каким способом передвигаемся, используем устойчивые выражения.',
    vocabulary: 'Туризм, передвижение, направления и идиомы с глаголами движения (напр. с wyjść).',
    grammar: 'Различаем однонаправленные (iść, jechać, lecieć, płynąć) и многократные (chodzić, jeździć, latać, pływać) глаголы движения. Приставка (przy-, wy-, w-/we-, prze-, od-, do-, pod-, roz-) делает глаголы типа iść/jechać совершенными (przyjść, wyjść, wejść, wyjechać), а глаголы типа chodzić/jeździć — несовершенными (przychodzić, wychodzić, wchodzić, wyjeżdżać). Важно помнить нерегулярные формы прошедшего времени от iść и приставочных глаголов: szedł/szła/szli, poszedł/poszła, wszedł/weszła, wyszedł/wyszła.',
    examples: [
      { polish: 'Codziennie jeżdżę do pracy tramwajem.', translation: 'Каждый день я езжу на работу на трамвае.' },
      { polish: 'Wczoraj wyszliśmy z domu wcześnie.', translation: 'Вчера мы вышли из дома рано.' },
    ],
  },
  38: {
    coursebookPages: '78–83',
    communication: 'Спрашиваем дорогу, обсуждаем правила движения и выражаем недовольство.',
    vocabulary: 'Дорожное движение, транспорт, автозаправка и ориентиры.',
    grammar: 'Различаем многонаправленные (регулярные), однонаправленные (в процессе) и совершенные глаголы движения: chodzić / iść / pójść, jeździć / jechać / pojechać, pływać / płynąć / popłynąć, latać / lecieć / polecieć (в будущем: pojadę, popłynę, polecę или będę jeździć/pływać/latać). В транспорте используем приставочные глаголы с предлогами: wsiąść do (+ D.), wysiąść z (+ D.), przesiąść się na (+ B.), dojechać do (+ D.). Также различаем siadać (процесс), siedzieć (состояние) и usiąść / siąść (совершенный вид).',
    examples: [
      { polish: 'Jak dojadę na dworzec?', translation: 'Как мне доехать до вокзала?' },
      { polish: 'Proszę jechać prosto i skręcić w lewo.', translation: 'Езжайте прямо и поверните налево.' },
    ],
  },
  39: {
    coursebookPages: '84–91',
    communication: 'Говорим о сложных жизненных ситуациях, отношениях и о том, кому что нужно.',
    vocabulary: 'Жизненные события, трудности, отношения, волонтерство и реакции людей.',
    grammar: 'В дательном падеже единственного числа (komu? czemu?) существительные мужского рода получают окончание -owi (przyjacielowi, но кратко: bratu, panu, ojcu, psu), среднего — -u (dziecku, życiu), женского — -e с чередованиями (matce, kobiecie, Annie) или -i/-y (pani, Zofii, pracy). Прилагательные принимают окончания -emu (м./ср. р.) и -ej (ж. р.). Дательный падеж используется с глаголами (pomagać, ufać, dziękować, szkodzić, kibicować, zazdrościć, wierzyć), в безличных конструкциях состояния (jest mi zimno) и после предлогов dzięki, wbrew, przeciw(ko).',
    examples: [
      { polish: 'Przyjaciel pomógł mi w trudnej sytuacji.', translation: 'Друг помог мне в трудной ситуации.' },
      { polish: 'Dziecku jest zimno.', translation: 'Ребенку холодно.' },
    ],
  },
  40: {
    coursebookPages: '92–99',
    communication: 'Рассказываем о традициях Дня поминовения и событиях послевоенной истории Польши.',
    vocabulary: 'Польские традиции, кладбище, память, исторические события, общественные протесты и семейные воспоминания.',
    grammar: 'Возвратное местоимение się / siebie (без именительного падежа: Р./В. siebie/się, Д./П. sobie, Т. sobą) относится к подлежащему предложения в любом лице и числе (Adam myśli o sobie — о себе самом, но o nim — о другом человеке). В личных местоимениях после предлогов используются полные формы и формы с n- (o mnie, dla ciebie, do niego, z nią, o nich). Повторяем также предложные выражения (wobec, wbrew, ze względu na, podczas) и повелительное наклонение.',
    examples: [
      { polish: 'Wspominamy tych, którzy odeszli.', translation: 'Мы вспоминаем тех, кто ушел.' },
      { polish: 'Zadbaj o siebie.', translation: 'Позаботься о себе.' },
    ],
  },
  41: {
    coursebookPages: '100–105',
    communication: 'Рассказываем о праздничных традициях и истории, описываем, как отмечают праздники.',
    vocabulary: 'Польские праздники, обычаи, праздничные блюда, даты и сезонные выражения.',
    grammar: 'Для описания общих обычаев и прошлых событий используем безличные формы: 3-е лицо ед. ч. + się в настоящем, прошедшем и будущем времени (obchodzi się, obchodziło się, będzie się obchodzić), а также прошедшие безличные формы на -no / -to (zorganizowano, podpisano, zjedzono, wypito). Повторяем даты в родительном падеже (1 stycznia, w 2011 roku) и повелительное наклонение в рецептах (pokrój, dodaj, gotuj).',
    examples: [
      { polish: 'W Wigilię dzielimy się opłatkiem.', translation: 'В Сочельник мы делимся облаткой.' },
      { polish: 'W Polsce święta obchodzi się rodzinnie.', translation: 'В Польше праздники отмечают в кругу семьи.' },
    ],
  },
  42: {
    coursebookPages: '106–111',
    communication: 'Описываем приключения и последовательность событий во времени.',
    vocabulary: 'Приключения, парусный спорт, горы, воспоминания и выражения времени.',
    grammar: 'Связываем события во времени с помощью союзов и выражений: предшествование (zanim, przedtem, wcześniej, przed + Т.), одновременность (kiedy, gdy, podczas + Р., w czasie + Р., w międzyczasie, równocześnie) и следование (po tym jak, potem, następnie, w końcu, dopóki, po + П.). Отрабатываем прошедшее время глаголов на -ść/-źć с чередованиями (usiąść → usiadłem/usiedliśmy, upaść → upadłem, trząść się → trząsłem się/trzęsłam się/trzęśliśmy się) и повелительное наклонение.',
    examples: [
      { polish: 'Zanim wyszliśmy, sprawdziliśmy mapę.', translation: 'Перед тем как выйти, мы проверили карту.' },
      { polish: 'Kiedy wróciłam, wszyscy już spali.', translation: 'Когда я вернулась, все уже спали.' },
    ],
  },
  43: {
    coursebookPages: '112–119',
    communication: 'Рассказываем о польской истории, политике и обществе.',
    vocabulary: 'История, государство, общество и события прошлого.',
    grammar: 'В прошедшем времени несовершенный вид обозначает процесс или регулярность (często, zazwyczaj, dawniej, cały dzień), а совершенный — завершенное действие или результат (nagle, wreszcie, raz); помним супплетивные пары (mówić / powiedzieć, brać / wziąć, widzieć / zobaczyć). В повелительном наклонении для утвердительных просьб и приказов обычно выбираем совершенный вид (Przeczytaj!, Powiedz!), а после отрицания nie (запреты) — несовершенный вид (Nie mów!, Nie czytaj!).',
    examples: [
      { polish: 'Przeczytaj artykuł i opowiedz, co się wydarzyło.', translation: 'Прочитай статью и расскажи, что произошло.' },
      { polish: 'Kiedy mieszkał w Polsce, często odwiedzał muzea.', translation: 'Когда он жил в Польше, часто посещал музеи.' },
    ],
  },
  44: {
    coursebookPages: '120–125',
    communication: 'Говорим о планах на будущее, животных и природе.',
    vocabulary: 'Животные, домашние питомцы, природа и устойчивые выражения.',
    grammar: 'Существительные среднего рода на -ę типа zwierzę (kurczę, szczenię, imię) при склонении расширяют основу: в ед. ч. на -ci-/-ni- (zwierzęcia, zwierzęciu, zwierzęciem; imienia), а во мн. ч. на -t-/-n- (zwierzęta, Р. п. zwierząt, zwierzętom, zwierzętami; imiona, imion). Различаем местоимения wszyscy / wszystkie, każdy / każda / każde, cały / cała / całe и żaden / żadna / żadne (в том числе nie wszyscy, nie każdy). Повторяем также будущее время, даты и управление числительных (2–4 + И. п. мн. ч., 5+ + Р. п. мн. ч.).',
    examples: [
      { polish: 'Zaopiekuję się zwierzęciem sąsiadów.', translation: 'Я позабочусь о животных соседей.' },
      { polish: 'W przyszłym roku pojedziemy nad morze.', translation: 'В следующем году мы поедем к морю.' },
    ],
  },
  45: {
    coursebookPages: '126–131',
    communication: 'Обсуждаем экологию, привычки и возможные последствия наших решений.',
    vocabulary: 'Агротуризм, защита природы, фермерское хозяйство и экологические привычки.',
    grammar: 'Реальные условия строим с союзами jeżeli / jeśli …, to … (настоящее или будущее время). Для нереальных условий, гипотез, желаний и вежливых просьб используем условное наклонение (tryb warunkowy): форма 3-го лица прошедшего времени + частица -bym, -byś, -by, -byśmy, -byście, -by (chciałabym, mógłbyś, mielibyśmy). В придаточных условия частица by присоединяется к gdy-: gdyby…, to… (Gdybym wygrał, kupiłbym dom).',
    examples: [
      { polish: 'Jeżeli będziemy segregować śmieci, ograniczymy ich ilość.', translation: 'Если мы будем сортировать мусор, то сократим его количество.' },
      { polish: 'Chętnie mieszkałabym na wsi.', translation: 'Я бы с удовольствием жила в деревне.' },
    ],
  },
  46: {
    coursebookPages: '132–139',
    communication: 'Сравниваем товары, обсуждаем покупки и подаем рекламацию.',
    vocabulary: 'Бытовая техника, магазины, покупки, гарантия и возврат товара.',
    grammar: 'Строим сложноподчиненные предложения с союзными и вопросительными словами (który, co, gdzie, skąd, dlaczego, jak długo, ile, czy, że, żeby) и следим за падежным управлением глаголов (obejść się bez + Р., unikać + Р., troszczyć się o + В.). Частица byle / byleby выражает: 1) минимальное условие или пожелание (Byleby rachunek był czytelny, byle do wiosny), 2) безразличие или низкое качество (byle co, byle jaki, byle jak, byle gdzie, byle kto), а с отрицанием — высокую оценку (nie byle co, nie byle kto).',
    examples: [
      { polish: 'Chcę oddać blender, który zepsuł się po tygodniu.', translation: 'Я хочу вернуть блендер, который сломался через неделю.' },
      { polish: 'Byleby rachunek był czytelny.', translation: 'Главное, чтобы чек был разборчивым.' },
    ],
  },
  47: {
    coursebookPages: '140–145',
    communication: 'Обсуждаем кино и театр, выражаем эмоции и участвуем в дискуссии.',
    vocabulary: 'Фильмы, спектакли, актеры, интернет-пиратство, впечатления и эмоции.',
    grammar: 'Страдательные причастия образуются с суффиксами -ny (napisany, zagrany), -ony (zrobiony, wyreżyserowany, nagrodzony) и -ty (zajęty, przyjęty, pobity, otwarty) и согласуются с существительным в роде, числе и падеже (мн. ч. муж.-личн.: zaproszeni, nagrodzeni). В страдательном залоге być сочетается как с несовершенным, так и с совершенным видом (jest grany, był nagradzany), а zostać — только с совершенным видом для разового результата (został wyreżyserowany); исполнитель вводится через przez + В.',
    examples: [
      { polish: 'Ten film został wyreżyserowany przez znanego reżysera.', translation: 'Этот фильм был снят известным режиссером.' },
      { polish: 'Spektakl jest grany w każdy piątek.', translation: 'Спектакль идет каждую пятницу.' },
    ],
  },
  48: {
    coursebookPages: '146–151',
    communication: 'Говорим об искусстве и выставках, выражаем восхищение и критическое мнение.',
    vocabulary: 'Живопись, фотография, музеи, выставки и вернисажи.',
    grammar: 'Существительные среднего рода на -um (muzeum, akwarium, archiwum, centrum, liceum, stypendium) в единственном числе не склоняются — во всех падежах сохраняют форму -um (do muzeum, w muzeum, z muzeum), но согласованные прилагательные и местоимения склоняются (w nowym muzeum, do tego muzeum). Во множественном числе они отбрасывают -um и склоняются по среднему роду: muzea, Р. muzeów, Д. muzeom, Т. muzeami, П. w muzeach.',
    examples: [
      { polish: 'W muzeum oglądaliśmy niezwykłe akwarium.', translation: 'В музее мы смотрели на необычный аквариум.' },
      { polish: 'Ta wystawa zrobiła na mnie ogromne wrażenie.', translation: 'Эта выставка произвела на меня огромное впечатление.' },
    ],
  },
  49: {
    coursebookPages: '152–157',
    communication: 'Повторяем курс и знакомимся с форматом сертификационных экзаменов по польскому языку.',
    vocabulary: 'Экзаменационные инструкции, оценивание, правильность, беглость речи, идиомы и выражение мнения.',
    grammar: 'Систематизируем все 7 падежей (включая отглагольные существительные на -anie/-enie/-cie в заданиях: rozumienie, czytanie, pisanie, mówienie) и формы личных местоимений (mnie/mi, go/niego, jej/niej, ich/nich). Повторяем систему глагола (времена, вид, повелительное и условное наклонение, страдательный залог) и применяем ее в устных и письменных экзаменационных заданиях.',
    examples: [
      { polish: 'Proszę przeczytać tekst i odpowiedzieć na pytania.', translation: 'Пожалуйста, прочитайте текст и ответьте на вопросы.' },
      { polish: 'Moim zdaniem odpowiedź jest poprawna.', translation: 'По-моему, ответ правильный.' },
    ],
  },
};
