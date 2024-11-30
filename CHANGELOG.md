![Banner](https://github.com/CiupagaPL/Tebowy_Dzien/blob/release/Github/banner.png)
# TEBOWY DZIEŃ

### Obecny Stan Skryptów
- [x] site.html
- [x] style.css
- [x] Script/window.js
- [ ] Script/variable.js
- [x] Script/transition.js
- [ ] Script/player.js
- [ ] Script/input.js
- [ ] Script/generator.js
- [ ] Script/default.js
- [ ] Script/boss.js
- [ ] Script/Scene/level.js
- [ ] Script/Scene/levelanimation.js
- [ ] Script/Scene/menu.js
- [ ] Script/Scene/menuanimation.js
> [!NOTE]
> Będę tu zamieszczał progress trwającego od pierwszej alphy przepisywania skryptów.

## Changelog Alpha 1.10

### Ogólny
- Naprawiłem Alpha 1.0 - 1 (#2),
- Naprawiłem Alpha 1.0 - 2 (#3),
- Naprawiłem Alpha 1.0 - 14 (#15),
- Naprawiłem Alpha 1.0 - 15 (#16),
- Naprawiłem Alpha 1.0 - 17 (#18).
> [!IMPORTANT]
> Resztę informacji zamieszczę w następnym patchu

### Techniczny
> [!IMPORTANT]
> Resztę informacji zamieszczę w następnym patchu

## Changelog Alpha 1.03

### Ogólny
- Naprawiłem krytyczną Alpha 1.0 - 12 (#13),
- Naprawiłem Alpha 1.0 - 5 (#6).

## Changelog: Alpha 1.02

### Ogólny
- Poprawiłem resztę błędów z poprzedniego patcha,
- Poprawiłem kilka sprite'ów,
- Przepisałem <i>transition.js</i> i skróciłem go o około połowę linijek kodu,
- Doszła dodatkowa funkcja resetująca w pełni poziom,
- Liczba funkcji w przejściach została zmiejszona,
- Naprawiłem Alpha 1.0 - 3 (#4),
- Naprawiłem Alpha 1.0 - 4 (#5),
- Naprawiłem Alpha 1.0 - 6 (#7),
- Naprawiłem Alpha 1.0 - 9 (#10),
- Naprawiłem Alpha 1.0 - 10 (#11),
- Naprawiłem Alpha 1.0 - 11 (#12).

## Changelog: Alpha 1.01

### Ogólny
- Naprawiłem Alpha 1.0 - 8 (#9) oraz początkowy błąd z brakiem spacji przy tutorialu,
- Przepisałem i znacznie skróciłem <i>window.js</i>.

## Changelog: Alpha 1.00

### Ogólny
- Naprawiłem odchylenie oświetlenia przy ramkach obiektów,
- Dodałem stopkę na dole ekranu,
- Dodałem link do stopki przenoszący do repozytorium,
- Poprawiłem błędy z css,
- Usunąłem tekst mówiący wcześniej o teście,
- Ulepszyłem animację migania tekstu na starcie,
- Dodałem animację dla tła w menu,
- Zmieniłem layout przycisków w menu,
- Naprawiłem niepoprawne kolizje myszy,
- Od teraz panele boczne na siebie reagują,
- Naprawiłem błąd animacji przy wyłączaniu sekcji planu,
- Naprawiłem zbugowane animacje obiektów na sekcjach,
- Od teraz między tymi samymi sekcjami przełącza się bez animacji,
- Dostosowałem i zmieniłem proporcję obiektów w menu,
- Dodałem tło za sekcją główną menu,
- Od teraz tytuł jest klikalny i przenosi do strony tebu,
- Od teraz poziomów jest 10, za to usunięte są rundy,
- Dodałem przycisk restartu,
- Usunąłem opcję zmaksymalizowania ekranu,
- Dodałem opcje wyłączenia tutorialu, opisu nauczycieli i efektów specjalnych,
- Od teraz po pauzie gracz nie będzie się sam poruszał,
- Dodałem animację dla tła w grze,
- Usunąłem animację chmurki i piorun,
- Zmodyfikowałem wygląd walki i jej mechanikę,
- Dodałem nowe sposoby poruszania z chmurką,
- Od teraz wysokość gracza dostosywuje się do postaci,
- Od teraz można podstakiwać za pomocą klawisza w,
- Dodałem pozostałych nauczycieli,
- Uzupełniłem opisy dla nowych nauczycieli,
- Zmieniłem przedział trudności poziomów,
- Naprawiłem proporcję chmurki,
- Oraz przerysowałem dużą większość sprite'ów.

### Techniczny
- Zmienione zostało wiele katalogów plików,
- Skrypty <i>scene0.js</i> i <i>animation0.js</i> zostały zintegrowane ze skryptami menu (obecnie <i>menu.js</i> i <i>menuanimation.js</i>),
- Usunięto atrybut <i>round</i>, zamiast niego dodano dwie możliwe sceny gry,
- Całkowicie usunięto <i>_lightning</i> oraz związane z nim dźwięki i kolizje,
- Dodano przycisk <i>_menuRestart</i> oraz funckję <i>transitionrestart</i> i napis <i>_menuRestartText</i>,
- Wszystkie nazwy funkcji przejść zapisane są prawidłowo z małych liter,
- Dodano dla <i>_keyState</i> atrybuty <i>top</i> i <i>bottom</i> oraz rozszerzono możliwości inputu,
- Rozszerzono keydown o inny system poruszania podczas bossa,
- Dodano dodatkowe obiekty dla tła: <i>_backgroundTop</i>, <i>_backgroundRight</i> i <i>_backgroundTopRight</i> oraz dodano im nowe tekstury,
- Rozszerzono <i>_bossTitle</i>, <i>_bossDescription</i> i <i>_boss</i> o nowych nauczycieli,
- Pozbyto się wielu niepotrzebnych atrybutów dla bossa,
- Dodano nowe ustawienia z numerami kolejno, podobnie nowe 2 poziomy,
- Zmodyfikowano nazwy selektorów poziomów na <i>_blueprint[...]</i>,
- Dodano atrybuty mówiący o tym czy gracz jest na chmurce oraz czy może się przemieszczać,
- Dodano <i>_playerCloud</i> oraz mocno zmodyfikowano <i>_cloud</i> (od teraz zwany <i>_bossCloud</i>),
- Dodano <i>_menuUI</i>; usunięto <i>_versionText</i>,
- Oraz dodano dużą ilość nowych sprite'ów.
> [!NOTE]
> Zmiany techniczne wypisywane będą co wersję (nie licząc patchy), będą one opisywać najważniejsze zmiany w skrypcie.
