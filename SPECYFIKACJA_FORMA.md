# FORMA | by Zuzia Fiks — specyfikacja produktu

**Wersja dokumentu:** 1.0 · **Data:** 10.11.2026 · **Status:** wymagania uzgodnione, wdrażane etapowo.

> Ten plik jest źródłem prawdy dla kolejnych etapów projektu. Implementacja obecnego prototypu NIE realizuje jeszcze wszystkich zapisanych poniżej wymagań. Szczegóły techniczne i nieuzgodnione zachowania ustalamy przy wdrażaniu modułów.

## 1. Wizja i role
- Prywatna, responsywna aplikacja internetowa/PWA FORMA | by Zuzia Fiks dla jednej trenerki i jej podopiecznych.
- Role `trainer` (Zuzia) i `client` (podopieczna); w ramach aktywnej współpracy podopieczna ma dostęp wyłącznie do swoich danych, Zuzia do danych wszystkich podopiecznych.
- Główny styl: **minimalistyczny luksus**, paleta `#FFFFFF` (biel), `#F0EBE5` (greige), `#C5B7A5` (szampański beż), `#252525` (grafit). Spokojna typografia, jasne tła, zaokrąglone karty.
- PWA instalowalna na iOS/Android; w pierwszej wersji bez offline i powiadomień push; jedna baza kodu na telefon/tablet/komputer.
- Na komputerze nawigacja boczna; na telefonie dolne menu + „Więcej”.

## 2. Start i nawigacja
### Panel Zuzi
- Menu główne: **Start, Podopieczne, Kalendarz, Biblioteka ćwiczeń, Biblioteka przepisów**.
- Start: w układzie komputerowym dwie kolumny: po lewej dzisiejsze treningi i oczekujące prośby kalendarzowe; po prawej powiadomienia; pod nimi kafelki podopiecznych. Na telefonie sekcje jedna pod drugą.
- Kafelek podopiecznej: imię i nazwisko, **data** najbliższego treningu oraz pojedyncza kropka przy nieprzeczytanych zmianach; bez liczby zaplanowanych treningów i bez licznika zmian. Wejście z kafelka otwiera panel klientki. Alternatywny wybór z listy rozwijanej. Sortowanie alfabetycznie lub według najbliższego treningu.
- Lista podopiecznych z filtrem „Aktywne / Zarchiwizowane / Wszystkie”, wyszukiwaniem i sortowaniem.
- Panel wybranej podopiecznej: **Profil, Plan treningowy, Dziennik treningowy, Dziennik progresu, Plan odżywiania, Plan domowy**; brak osobnej zakładki komunikacji.

### Panel podopiecznej
- Po zalogowaniu ekran **Start** podsumowujący najbliższy trening, podstawowy progres i plan domowy.
- Mobilny pasek: **Start | Kalendarz | Plan treningowy | Dziennik treningowy | Więcej**.
- „Więcej”: Profil, Dziennik progresu, Plan odżywiania, Plan domowy, Biblioteka ćwiczeń, Biblioteka przepisów.
- Pełna nawigacja desktopowa zawiera wszystkie powyższe sekcje.

## 3. Konta, logowanie i onboarding
- Tylko Zuzia zaprasza podopieczne: wpisuje imię, nazwisko, e-mail; system wysyła **techniczny e-mail aktywacyjny**. Bez otwartej rejestracji.
- W procesie zakładania konta: imię, nazwisko, e-mail, data urodzenia, ustawienie hasła.
- Login: e-mail + hasło; sesja utrzymuje się między wizytami; użytkownik może się wylogować; reset hasła technicznym e-mailem.
- **Brak e-maili z powiadomieniami** o treningach, kalendarzu, komentarzach, zmianach — wcześniej uzgodnione takie e-maile zostały cofnięte. E-maile techniczne do utworzenia konta/resetu hasła pozostają.
- Po aktywacji konta obowiązkowa, jednokrotna ankieta. Bez niej nie ma dostępu do reszty aplikacji.
- Ankieta uzupełnia odpowiednie pola profilu; potem Zuzia i podopieczna mogą aktualizować te pola, a pierwotna ankieta zostaje jako historyczny zapis.

### Ankieta początkowa
- Cele i priorytetowe partie, doświadczenie, wcześniejsza aktywność, częstotliwość, ćwiczenia lubiane/nielubiane.
- Aktualna masa ciała i wzrost, kontuzje, ograniczenia, przeciwwskazania.
- Czy klientka jest w ciąży lub po ciąży; choroby/schorzenia; zalecenia lekarskie do uwzględnienia w treningach.
- Tryb pracy, średni sen, **poziom stresu 1–10**, **poziom energii 1–10**.
- Obawy związane z treningami i dodatkowe informacje.
- Formularz mieszany: single/multiple choice, skale i pola opisowe.
- Dane zdrowotne wymagają szczególnej ochrony i kontroli dostępu.

## 4. Profil podopiecznej
- Rozwijane sekcje: dane osobowe (w tym data urodzenia i automatyczny wiek), kontakt, start współpracy, liczba treningów tygodniowo; cele i priorytetowe partie; urazy i ograniczenia; waga i pomiary; dodatkowy opis; prywatne notatki Zuzi.
- Górne podsumowanie: imię/nazwisko, wiek, cel główny, masa początkowa i aktualna, data rozpoczęcia, liczba odbytych treningów, ostrzeżenie zdrowotne.
- Cele wielokrotnego wyboru: redukcja, budowa mięśni, modelowanie sylwetki, siła, kondycja, mobilność, ogólna sprawność, powrót po kontuzji, utrzymanie sylwetki, inne. Wybór celu głównego i opcjonalnie priorytetowych grup mięśniowych: pośladki, uda, plecy, brzuch, barki, ramiona, klatka, inne.
- Zuzia może edytować wszystkie dane; podopieczna m.in. kontakt, cele, urazy, ograniczenia, ćwiczenia powodujące dyskomfort i dodatkowe informacje. Notatki prywatne Zuzi nigdy nie są widoczne dla podopiecznej.
- Zmiany rejestrowane w historii audytu z datą, autorem i zmienionymi wartościami.

## 5. Kalendarz i rezerwacje
- Zuzia i podopieczna mogą inicjować rezerwacje; prośby klientki wymagają akceptacji Zuzi. **Oczekujące nowe rezerwacje nie zajmują jeszcze miejsca w kalendarzu**, są w sekcji oczekujących.
- Klientka widzi busy-sloty innych klientek i prywatne bloki Zuzi wyłącznie jako „Zajęte”, bez informacji osobowych; mimo to może poprosić o ten termin.
- Standardowo **60 minut**, tylko Zuzia może wydłużyć pojedynczą sesję.
- Seria rezerwacji: wybrany dzień i godzina + **4/8/12** wystąpień; akceptacja lub odrzucenie całej serii naraz, późniejsza edycja pojedynczych terminów.
- Prośby klientki o odwołanie/przełożenie tylko ≥24 h przed sesją; wymagają akceptacji Zuzi; do akceptacji pierwotny termin pozostaje zablokowany. Zuzia może anulować i przekładać bezpośrednio.
- Po zaakceptowanym anulowaniu termin znika z kalendarza, ale historia pozostaje zachowana.
- Kalendarz: tydzień, miesiąc i lista dnia. **Telefon:** domyślnie lista dni; **komputer:** domyślnie tydzień (dni w kolumnach, godziny wierszami).
- Kolory: zatwierdzone zielone, oczekujące anulowanie niebieskie, anulowane znikają.
- Zuzia dodaje przez kliknięcie godziny albo „+ Dodaj trening”; treningi utworzone przez Zuzię zatwierdzane od razu.
- Zuzia może przesuwać terminy na komputerze drag & drop; konieczne potwierdzenie ze starym/nowym terminem. Alternatywnie edycja formularzem także na telefonie.
- **Brak nakładających się zatwierdzonych treningów**; konflikt z prywatnym blokiem Zuzi generuje ostrzeżenie, ale Zuzia może mimo niego zatwierdzić trening.
- Powiązanie treningu w kalendarzu z planem i dziennikiem.
- Bez pakietów płatności/liczników wykupionych sesji.
- Status: **dla przeszłej sesji domyślnie „Odbyty”, możliwość oznaczenia „Nieodbyty”**; nie oznaczać przyszłych sesji jako odbytych. Wcześniejsze wymaganie ręcznego zatwierdzania statusu zostało zastąpione tą zasadą.

## 6. Plan treningowy
- Plan treningu powstaje **wyłącznie po zatwierdzeniu rezerwacji**. Bez niezależnych szkiców treningów. Początkowo widoczny jako „Trening — [data]”; Zuzia nadaje nazwę, synchronizowaną z kalendarzem.
- Tylko Zuzia wybiera ćwiczenia z biblioteki i edytuje zaplanowane serie/powtórzenia/ciężar/komentarze; wszystkie te wartości mają być uzupełnione przed treningiem.
- Podczas treningu Zuzia może zmieniać plan, dodawać/usuwać/zamieniać ćwiczenia; zapis natychmiast i audyt.
- **Bez kopiowania treningów i szablonów** — każdy trening planowany osobno.
- Widok rozwijanych tygodni; trenerka przegląda wszystkie, klientka widzi w planie tylko bieżący tydzień (także zaakceptowane jeszcze puste treningi). Przyszłe rezerwacje widzi w kalendarzu.
- W planie wyłącznie zaplanowane dane. Porównania z wykonaniem/historią są w dzienniku.
- Podczas doboru ćwiczenia trenerka widzi ocenę klientki oraz ostrzeżenia o przeciwwskazaniach/dyskomforcie, ale może świadomie wybrać takie ćwiczenie.

## 7. Dziennik treningowy
- Dla każdej serii zestawienie **Zaplanowane / Zrealizowane**; wykonanie domyślnie takie jak plan, jeśli nic nie zmieniono.
- Możliwość zmiany liczby wykonanych serii, powtórzeń i ciężarów bez odhaczania każdej serii; ćwiczenie można oznaczyć „Niewykonane”.
- Zuzia i podopieczna mogą edytować wykonanie, komentować cały trening i pojedyncze ćwiczenia; autosave i historia autor/data.
- Treningi w rozwijanych tygodniach; skrót: data, nazwa, status, liczba wykonanych ćwiczeń. W środku szczegóły i porównanie z poprzednimi treningami.
- Brak ocen „lubię/nie lubię” w dzienniku (oceny są w bibliotece).

## 8. Dziennik progresu
- Masa ciała: dowolnie wiele wpisów na tydzień obu stron; średnia tygodniowa, wykres, start vs obecnie.
- **7 stałych obwodów** w cm: talia, brzuch na wysokości pępka, biodra, klatka piersiowa, ramię, udo, łydka. Sugerowane co miesiąc; wpisy można częściej.
- Zdjęcia sylwetki: przód/bok/tył, datowane, sugerowane co miesiąc; porównanie dowolnych dwóch dat; prywatność trenerka + podopieczna; obie mogą dodawać.
- Siła: wykres ciężaru i powtórzeń na ćwiczenie, maksimum, pierwsza vs ostatnia sesja. **Bez odznak PR**.
- Proste statystyki: łączna liczba treningów, nieodbyte, zaplanowane przyszłe; bez procentów frekwencji i osobnych wykresów częstotliwości.
- **Bez modułu codziennego snu, stresu i energii** — pytania o sen/stres/energię występują w ankiecie początkowej.

## 9. Plan odżywiania
- Zuzia ręcznie ustala 3 wartości kcal/dzień: **redukcja / utrzymanie / budowa masy**. Wszystkie widoczne, jedna podświetlona zgodnie z celem głównym.
- Zakres białka w g/dzień; wskazówki opisowe dla białka, tłuszczów i węglowodanów — bez celów gramowych węglowodanów/tłuszczów.
- Suplementy dodawane ręcznie (nazwa, dawka, częstotliwość, uwagi). Bez biblioteki suplementów.
- Tylko Zuzia edytuje; podopieczna czyta. Autosave. Bez licznika kalorii, dziennika jedzenia czy sztywnego jadłospisu.

## 10. Plan domowy
- Niezależny od kalendarza; krótkie sesje stretching/mobilność/korekcja, **do 30 minut**, czas planowany ręcznie.
- Zuzia wybiera ćwiczenia z biblioteki, serie, powtórzenia, ciężary i uwagi. Może wskazać dni tygodnia lub częstotliwość tygodniową, planować do miesiąca naprzód i edytować w dowolnej chwili.
- Klientka widzi tylko najbliższy/bieżący tydzień; zwinięta lista, po rozwinięciu szczegóły. Może oznaczyć wykonanie i komentować ćwiczenia. Zuzia też komentuje.
- Historia treningów domowych według tygodni dla Zuzi. Zmiana planu nie nadpisuje historii wykonania.
- Kroki: Zuzia ustala dzienny cel i **tylko Zuzia wpisuje średnią dzienną z tygodnia**, odczytaną z telefonu klientki. Bez dziennych wpisów.
- Bez push/e-maili/przypomnień o treningach domowych.

## 11. Biblioteka ćwiczeń
- Zuzia tworzy/edytuje/usuwa ćwiczenia: nazwa, **wiele** grup mięśniowych (klatka, plecy, barki, biceps, triceps, pośladki, uda, łydki, brzuch, mobilność/rozciąganie, korekcyjne), technika, sprzęt, opcjonalny link do wideo. Bez własnego uploadu wideo.
- Podopieczna przegląda **całą** bibliotekę i może każdemu ćwiczeniu nadać jedną ocenę: **„Uwielbiam”, „Lubię”, „Nie lubię”** lub brak oceny.
- Wyszukiwarka po nazwie; filtry: grupy i wielokrotnie wybrane oceny klientki. Bez filtra sprzętu.
- Ocena danej klientki i zdrowotne ostrzeżenie widoczne przy dodawaniu do jej planu.
- Usunięcie lub zmiana ćwiczenia w bibliotece nie modyfikuje historycznych zapisów treningów (snapshot danych).

## 12. Biblioteka przepisów
- Zuzia tworzy, edytuje i usuwa przepisy; wszyscy aktywni klienci widzą je **od razu**, bez szkiców/publikacji.
- Nazwa, opcjonalne zdjęcie, składniki z ilością, opis przygotowania, liczba bazowych porcji, **ręcznie wpisane** kcal/białko/tłuszcz/węglowodany **na 1 porcję**.
- Klientka zmienia liczbę porcji → przeliczane proporcjonalnie gramatury składników, ale makra **na jedną porcję** bez zmian.
- Kategorie wielokrotnego wyboru: śniadanie, obiad, kolacja, przekąska, deser. Szukanie po nazwie; filtrowanie kategorii, kcal i białka; ulubione klientki.

## 13. Komunikacja i powiadomienia
- **Bez osobnej zakładki „Zalecenia i komunikacja”** i bez czatu; zwykły kontakt poza aplikacją. Komentarze do treningów/ćwiczeń pozostają.
- Kropki z nieprzeczytanymi nowościami działają w obie strony, na wszystkich zmianach drugiej strony: profile, wyniki, pomiary, komentarze, plany itd.
- Hierarchia kropki: kafelek podopiecznej → zakładka → trening/sekcja → ćwiczenie/konkretny komentarz; znika po obejrzeniu **konkretnej** nowości. Nadrzędne kropki pozostają, jeśli inne elementy są nieprzeczytane.
- Bez mailowych powiadomień i przypomnień (wyjątek: techniczny e-mail aktywacyjny i reset hasła).

## 14. Archiwizacja i usuwanie
- Zuzia może zarchiwizować podopieczną (dane i historia zachowane, aktywna lista nie pokazuje; po przywróceniu pełne uprawnienia) lub trwale usunąć konto i dane.
- Podopieczna zarchiwizowana może nadal logować się i **wyłącznie przeglądać** swoje dane, bez rezerwowania i edytowania.
- Archiwizacja **anuluje automatycznie wszystkie przyszłe rezerwacje**, zwalniając terminy; historia zostaje. Wymagane okno potwierdzenia z ostrzeżeniem.
- Trwałe usunięcie: ostrzeżenie i ręczny wpis `USUŃ` przed odblokowaniem przycisku, z uwzględnieniem wymogów prawnych dotyczących przechowywania danych.
- Historia zmian przez okres istnienia konta; Zuzia i podopieczna widzą ją w profilu i przy elementach, z wyłączeniem prywatnych notatek Zuzi, których treść i audyt są wyłącznie dla niej.

## 15. Eksport i kopie zapasowe
- Zuzia i podopieczna mogą pobierać dane klientki w PDF i CSV. Przy eksporcie wybór kategorii danych; zdjęcia jako osobne pliki w ZIP (nie w CSV). Eksport dostępny także klientce zarchiwizowanej.
- Na razie korzystamy wyłącznie z mechanizmów backupu dostępnych w wybranym planie Supabase; nie wdrażamy osobnego codziennego backupu. Przed użyciem danych rzeczywistych sprawdzić dostępność backupu bazy **i Storage** oraz odtwarzanie.

## 16. Etapy wdrożenia i kryteria testów

| Etap | Zakres | Test odbiorczy |
|---|---|---|
| 1 — fundament i UI | istniejące logowanie, nowe widoki Start, nawigacja, kafelki, profil read-only, biblioteki i stary dziennik | logowanie trenerki i podopiecznej; brak cudzych danych; poprawna nawigacja desktop/telefon |
| 2 — konta i profile | bezpieczne zaproszenia e-mail, obowiązkowa ankieta, data urodzenia, edycja profilu obu ról, role/RLS | zaproszenie, aktywacja, onboarding; brak eskalacji uprawnień |
| 3 — kalendarz | rezerwacje, akceptacje, konflikty, cykliczność, odwołania, prywatne bloki, powiadomienia kalendarzowe w aplikacji | komplet scenariuszy klientka/Zuzia i zasada 24 h |
| 4 — plany i dziennik | plan po rezerwacji, zaplanowane vs wykonane, autosave, tygodnie, komentarze, audyt | tworzenie treningu, edycja podczas zajęć, porównania wyników |
| 5 — progres i zalecenia | 7 pomiarów, zdjęcia/Storage, wykresy, odżywianie, domowy plan, kroki | obie role, widoczność i prywatność zdjęć |
| 6 — biblioteki i dodatki | pełne biblioteki, ulubione/oceny, kropki powiadomień, historia zmian, archiwum, eksport, finalizacja PWA | end-to-end i testy urządzeń |

## 17. Znane ograniczenia obecnego kodu (stan na etap 1)
- Istniejący kod łączy się z Supabase i obsługuje login/reset hasła. Wdrożenie i uprawnienia nie zostały jeszcze zweryfikowane testami z prawdziwą bazą w tej rozmowie.
- Baza nie ma na razie tabel kalendarza ani statusu archiwizacji. Wyświetlanie „brak terminu” jest świadome; nie jest to prawdziwe odczytywanie najbliższej rezerwacji.
- Formularz dodawania podopiecznej z poprzedniego prototypu oczekiwał UUID tworzonego ręcznie w Supabase; w etapie 1 zastąpiono go informacją o planowanym bezpiecznym procesie zaproszeń.
- Plan treningowy i zapis serii korzystają obecnie ze **starego modelu danych**, bez powiązania z zaakceptowaną rezerwacją. Nie należy traktować ich jako docelowej implementacji wymagań.
- System powiadomień, pełny audyt, archiwizacja, ankieta obowiązkowa i eksport nie są jeszcze aktywne.
- RLS/Storage, ochrona danych szczególnych kategorii, polityka retencji i zgodność prawna muszą być zweryfikowane **przed wprowadzeniem prawdziwych danych zdrowotnych lub zdjęć**.

## 18. Zasada pracy
1. Najpierw stabilny fragment, potem testy dla obu ról, potem kolejny fragment.
2. Każdy etap ma działać z bieżącym Supabase i Vercel bez niepotrzebnej utraty istniejących danych.
3. Migracje SQL przygotowujemy osobno; zawsze opisujemy skutki i ryzyka przed uruchomieniem.
4. Każda kolejna zaakceptowana decyzja użytkownika aktualizuje niniejszy dokument.

### Krytyczne uwagi bezpieczeństwa do etapu 2
- W starej strukturze kolumna `profiles.trainer_notes` znajduje się w tym samym wierszu co profil podopiecznej. Samo ukrycie pola w interfejsie **nie zapewnia prywatności**: uprawnienie `SELECT` do całego wiersza może ujawnić notatki przez API. Należy przenieść notatki do osobnej tabeli widocznej wyłącznie dla trenerki albo wdrożyć równoważną kontrolę dostępu na poziomie bazy. Do czasu poprawki **nie wpisywać tam żadnych poufnych notatek**.
- Przed użyciem prawdziwych danych zweryfikować, że wszystkie nowe endpointy, polityki `RLS` i uprawnienia w `Storage` nie pozwalają klientkom przeglądać danych innych podopiecznych, a archiwizacja daje faktycznie dostęp tylko do odczytu.
- Techniczne zaproszenia do kont powinny być obsługiwane przez bezpieczne API na serwerze, nigdy przez klucz `service_role` umieszczony w HTML lub wystawiany przez `/api/config`.
