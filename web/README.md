# polski.

Interaktywny kurs języka polskiego zbudowany w Angularze. Pierwszy moduł obejmuje pięć lekcji, ćwiczenia pisemne i wyboru, klasyfikowanie form gramatycznych, nagrania, wynik lekcji oraz lokalnie zapisywane postępy.

## Uruchomienie

Projekt wymaga Node.js 22.22.3+, 24.15.0+ albo 26+. Zgodność wersji sprawdza się w [tabeli Angular](https://angular.dev/reference/versions).

```sh
nvm install
nvm use
npm install
npm start
```

Serwer deweloperski udostępnia aplikację pod `http://localhost:4200/`. W trybie deweloperskim service worker wyłączony. Produkcyjna kompilacja włącza cache aplikacji, danych lekcji i nagrań:

```sh
npm run build
npm run preview:pwa
```

PWA można zainstalować z menu przeglądarki. Na iOS użyj menu Udostępnij → Dodaj do ekranu początkowego. Po pierwszym pobraniu kursu aplikacja przechowuje interfejs, dane i odsłuchiwane nagrania na urządzeniu.

## Struktura

- `src/app/data/lesson-bank.ts` — сценарии интерактивных упражнений для первых пяти уроков.
- `src/app/pages/dashboard/` — путь курса и экран прогресса.
- `src/app/pages/lesson/` — проверка ответов, результаты и переход между заданиями.
- `src/app/services/progress.service.ts` — XP, серия занятий и локальное сохранение.
- `public/content/` — пять машиночитаемых JSONL-файлов workbook.
- `public/assets/telegram_audio/` — аудиозаписи, используемые в уроках 1–5.
- `ngsw-config.json`, `public/manifest.webmanifest` — кеширование и установка PWA.

Сейчас доступны пять подготовленных уроков. В банке заданий собраны интерактивные выборки упражнений из материалов; полные задания и ответы сохранены в JSONL для дальнейшего импорта и расширения курса. Прогресс пока хранится в `localStorage` на устройстве.
