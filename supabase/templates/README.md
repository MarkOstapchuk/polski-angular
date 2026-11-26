# Supabase Auth Email Templates (`polski.`)

Брендированные мультиязычные (`pl` / `ru` / `en`) HTML-шаблоны писем в дизайн-системе `polski.`.  
Язык письма определяется автоматически по `user_metadata.lang` (`{{ .Data.lang }}`), который передаётся при регистрации в `AuthService.signUp`. Если `lang` не задан (например, при старой регистрации или смене языка до обновления), используется польский (`pl`) по умолчанию.

---

## Куда вставлять в Supabase Dashboard

Откройте проект в **Supabase Dashboard** → **Authentication** → **Emails** (вкладка **Templates**).

Для каждого из 4 шаблонов скопируйте соответствующую строку **Subject** и целиком HTML из файла в поле **Message (HTML)**:

### 1. `Confirm signup` → `confirm-signup.html`
**Subject:**
```text
{{ if and .Data.lang (eq .Data.lang "ru") }}Подтвердите почту — polski.{{ else if and .Data.lang (eq .Data.lang "en") }}Confirm your email — polski.{{ else }}Potwierdź swój adres e-mail — polski.{{ end }}
```

### 2. `Reset password` → `recovery.html`
**Subject:**
```text
{{ if and .Data.lang (eq .Data.lang "ru") }}Восстановление пароля — polski.{{ else if and .Data.lang (eq .Data.lang "en") }}Reset your password — polski.{{ else }}Odzyskiwanie hasła — polski.{{ end }}
```

### 3. `Magic Link` → `magic-link.html`
**Subject:**
```text
{{ if and .Data.lang (eq .Data.lang "ru") }}Ссылка для входа в polski.{{ else if and .Data.lang (eq .Data.lang "en") }}Your sign-in link for polski.{{ else }}Link do logowania w polski.{{ end }}
```

### 4. `Change Email Address` → `email-change.html`
**Subject:**
```text
{{ if and .Data.lang (eq .Data.lang "ru") }}Подтвердите новый адрес — polski.{{ else if and .Data.lang (eq .Data.lang "en") }}Confirm your new email — polski.{{ else }}Potwierdź nowy adres e-mail — polski.{{ end }}
```

---

## Проверка URL-настроек в Supabase

Перейдите в **Authentication** → **URL Configuration** и убедитесь, что прописаны:
- **Site URL:** ваш продакшн-домен (например, `https://passolabs.tech`) — он подставляется в `{{ .SiteURL }}` в логотипе и футере письма.
- **Redirect URLs:** добавьте разрешённые адреса редиректа, включая `https://passolabs.tech/**` и `http://localhost:4200/**` (для локальной разработки), чтобы ссылки подтверждения и сброса пароля (`/auth?mode=reset`) открывались без ошибок.
