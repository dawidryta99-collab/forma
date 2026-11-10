# FORMA | by Zuzia Fiks — etap 1 (nawigacja i pulpit)

Prototyp aplikacji trenerki personalnej oparty na **Vercel + Supabase**. To aktualizacja dostarczonego `index.html`, nie niezależna demonstracja offline.

## Co jest dostępne w tej wersji
- Logowanie Supabase (e-mail/hasło), sesja między wizytami i reset hasła przez e-mail.
- Interfejs „minimalistyczny luksus”: biel, greige, szampański beż, grafit.
- Nawigacja boczna na komputerze i dolne menu na telefonie.
- Panel Zuzi: Start, kafelki podopiecznych, wyszukiwanie, otwieranie profilu, biblioteki, podgląd dotychczasowych planów i postępów.
- Panel klientki: Start z faktycznie zapisanymi pomiarami i sesjami, profil (podgląd), nawigacja, istniejące plany/dziennik/progres/biblioteki.
- Manifest PWA, ikony, sieciowy service worker bez buforowania offline.
- W kalendarzu, powiadomieniach, planie domowym i odżywianiu **oznaczone placeholdery** — tych funkcji jeszcze nie wdrożono.

## Czego jeszcze nie wolno uznawać za gotowe
- Bezpiecznego zapraszania podopiecznych e-mailem; tymczasowo nie pokazujemy starego formularza wymagającego ręcznego UUID.
- Rezerwacji oraz wiązania planu z zatwierdzonym treningiem. Aktualne planowanie i zapisywanie serii nadal używa starych tabel i reguł — to tylko funkcja odziedziczona po prototypie.
- Obowiązkowej ankiety, pełnej edycji profilu, rozbudowanego dziennika, archiwizacji, audytu, powiadomień i eksportu.
- Potwierdzonego bezpieczeństwa RLS i prywatnego Storage dla zdjęć.

**Nie wprowadzaj prawdziwych danych zdrowotnych ani zdjęć podopiecznych przed audytem RLS/Storage i dostosowaniem procesu obsługi danych.**

## Wdrożenie na Vercel
1. Zrób kopię obecnego repozytorium lub commit przywracania.
2. Skopiuj zawartość tego folderu do głównego katalogu repozytorium, **zachowując folder `api/`**. Nie nadpisuj istniejącej konfiguracji projektu Vercel, jeśli używa dodatkowych ustawień.
3. Vercel: Framework Preset **Other**; bez komendy build, z katalogu głównego repozytorium.
4. Utrzymaj dotychczasowe zmienne środowiskowe Vercel: `SUPABASE_URL`, `SUPABASE_PUBLISHABLE_KEY`. Plik `api/config.js` wystawia wyłącznie klucz **publiczny/publishable**. **Nie wkładaj service_role ani żadnych sekretów do frontendu ani tego API.**
5. Upewnij się, że w ustawieniach Supabase Auth dozwolony jest adres domeny Vercel jako redirect dla resetu hasła.
6. Opublikuj i testuj na osobnym wdrożeniu Preview, przed przepięciem produkcyjnej aplikacji.

**Uwaga:** lokalne otwarcie `index.html` metodą `file://` nie jest wspierane. Aplikacja potrzebuje działającego endpointu `/api/config` (Vercel lub lokalny emulator funkcji).

## Szybka lista testów etapu 1
1. **Trenerka:** zaloguj się → Start → kafelki z realną listą podopiecznych → wyszukaj i otwórz profil.
2. **Podopieczna:** zaloguj się → Start → Plan treningowy → Dziennik treningowy → Dziennik progresu; sprawdź czy widzi tylko swoje dane.
3. W obu rolach sprawdź Wyloguj → Zaloguj oraz „Nie pamiętasz hasła?”.
4. Na telefonie sprawdź dolny pasek nawigacji i „Więcej”; na komputerze menu boczne.
5. Upewnij się, że kalendarz i powiadomienia są oznaczone jako funkcje przyszłych etapów, a nie pokazują fikcyjnych terminów.
6. Sprawdź istniejące biblioteki i ich uprawnienia w Supabase; plan i serie wykonuj tylko na **danych testowych**.

## Specyfikacja
Pełne ustalenia i plan dalszego rozwoju: [`docs/SPECYFIKACJA_FORMA.md`](docs/SPECYFIKACJA_FORMA.md).
