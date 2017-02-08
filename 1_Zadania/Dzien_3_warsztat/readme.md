# Warsztat ES6 - kalkulatory

## Przygotowanie

Stwórz w pełni działające środowiko, które pozwoli Ci pisać korzystać z ES6.
Pamiętaj o:
- ```npm init```
- Zainstalowaniu odpowiednich modułów
- Ustawieniu Webpacka, plikiem wejściowym ma być `js/app.js`, wyjściowym `js/out.js`
Zanim cokolwiek zrobisz przeczytaj ten opis :)

## Zdolności matematyczne potrzebne do zrobienia tego warsztatu

Dodawanie liczb :)

## Na czym polega warsztat?

* **Rozeznanie.**
Jeśli otworzysz plik ```index.html``` zobaczysz, że mamy dwa (nieostylowane) kalkulatory. Pierwszy to kalkulator binarny. Drugi to kalkulator dziesiętny.
Kalkulator binarny jest już napisany, niestety dziesiętny jeszcze nie. Twoim zadaniem będzie:

    * Skonfiguruj WebPacka w taki sposób żeby generował style i dołączył do pliku HTML.
    * Połączenie wszystkich plików tak, żeby oba kalkulatory działały poprawnie.
    * Dokończenie kalkulatora dziesiętnego tak, aby dodawał liczby dziesiętne.


* **Zaplecze** W folderze js znajdziesz wszystkie potrzebne pliki. Plikiem wejściowym jest plik ```app.js```. To on zostaje przetworzony przez Webpack, który na jego podstawie tworzy plik ```out.js```. Plik ```out.js``` jest dodany do pliku ```index.html```.


## Jak powinny działać  kalkulatory?
Oba kalkulatory działają w podobny sposób. Możemy dodawać tylko dwie liczby. Po przepełnieniu następuje przeniesienie liczby

### Zasady dodawania liczb binarnych.
W dodawaniu liczb binarnych należy pamiętać o następujących zasadach:
* 0 + 0 = 0
* 0 + 1 = 1
* 1 + 0 = 1
* 1 + 1 = 10 czyli "0" zostawiamy, a  "1" przenosimy o jedną pozycję dalej.

Przykład:
```JavaScript
    Liczba1: 0 1 1 0 1
    Liczba2: 0 0 1 0 1
    Wynik:   1 0 0 1 0    
```


### Zasady dodawania liczb dziesiętnych.
W dodawaniu liczb dziesiętnych należy również pamiętać o przeniesieniu.

Zobacz przykłady przeniesienia:
* 5 + 5 = 10 czyli "0" zostawiamy, a  "1" przenosimy o jedną pozycję dalej.
* 5 + 6 = 11 czyli "1" zostawiamy, a  "1" przenosimy o jedną pozycję dalej.
* 7 + 7 = 14 czyli "4" zostawiamy, a  "1" przenosimy o jedną pozycję dalej.

Przykład:
```JavaScript
    Liczba1: 0 5 0 2 9
    Liczba2: 0 6 0 0 8
    Wynik:   1 1 0 3 7    
```
## Twoje zadanie

Twoim zadaniem jest napisanie kalkulatora dziesiętnego oraz połączenie wszyskich plików tak jak na schemacie poniżej.

![Schemat class](images/abstract_class.jpg)

 * kaklulator binarny został już napisany przez poprzedniego programistę. (Spójrz do pliku BinaryCalculator)
 * klasa abstrakcyjna również i to po niej dziedziczy kalkulator binarny. (Spójrz do pliku Calculator)
 * Twoje zadanie to napisanie kalkulatora dziesiętnego. Jakie powinien mieć metody? Spójrz na schemat wyżej.

Omówmy te metody od początku:
 * ```constructor()``` - jeśli zajrzymy do naszej klasy abstrakcyjnej (jeżeli nie pamiętasz czym jest klasa abstrakcyjna zajrzyj do slajdów z ES6) ```Calculator``` to widzimy, że coś już się w nim dzieje. Jak wiesz po stworzeniu obiektu automatycznie jest wywoływany właśnie konstruktor. Zatem wszystkie ustawienia początkowe możemy zainicjować tutaj. Omówmy go dokładnie:     
```JavaScript
//Podczas tworzenia obiektu możemy ustawic mu nazwę
this.name = selectorName;
//Znajdujemy również odpowiedni selektor
this.$selectorsName = $(selectorName);

//Tworzymy 3 tablice odpowiedzialne za:
this.firstNumberArray = []; // przechowywanie pierwszej liczby
this.secondNumberArray = []; // przechowywanie drugiej liczby
this.resultNumberArray = [0,0,0,0,0,0,0,0,0]; // przechowywanie wyniku

//Inicjalizujemy eventy - czyli start :)
this.initEvents();
```

 W klasie ```BinaryCalculator``` w konstruktorze jest jeszcze wywołana metoda``` getName()```, która wyświetla imię. Spróbuj w podobny sposób wyświetlić imie kalkulatora dziesiętnego.


 * ```initEvents()``` - to metoda, która ustawia event click, na każdym divie przetrzymującym cyfrę. W przypadku kalkulatora binarnego po kliknięciu w div od razu zmienia się ona na przeciwną, z 0 na 1 i na odwrót. Prosta sytuacja bo w systemie binarnym mamy tylko dwie liczby. Niestety nie możemy w ten sam sposób zmieniać cyfr w systemie dziesiętnym, gdyż byłoby to bardzo nie wygodne. (Np. gdyby ktoś chciał ustawić cyfrę 9 musiałby 9 razy klikać).
 Lepszym rozwiązaniem będzie pozwolenie użytkownikowi na wpisanie liczby z klawiatury. Spójrz na metodę ```initEvents()``` zaimplementowaną w klasie abstrakcyjnej. Co ona robi? Po kliknięciu w cyfrę wywołuje metodę ```changeNumber()``` -> przejdźmy zatem do tej metody.

 * ```changeNumber()``` - ta metoda jest również zdefiniowana w klasie abstrakcyjnej ```Calculator```, ale nic nie robi. Jeśli zajrzysz do niej, zauważysz informację, że należy ją zaimplementować w klasie dziedziczącej. W klasie ```BinaryCalculator``` jest już zaimplementowana i działa tak, że zwija lub rozwija dany element DOM z liczbą. Twoje zadanie to zaimplementowanie tej metody w kalkulatorze dziesiętnym tak, aby użytkownik mógł wpisać liczbę. Możesz się posłużyć atrybutem **contenteditable**. Nie wiesz jak działa? Użyj Google ;)

 Po wpisaniu liczby, nic się nie wydarzy, ponieważ musimy czekać na użytkownika. W związku z tym dobrze by było, gdyby to użytkownik mógł poinformować kalkulator, że już skończył wpisywać liczby i że chce je dodać.
 Ustawmy zatem event click na znaku dodawania (na plusie). A gdzie inicjujemy wszystkie eventy? Tak, oczywiście w klasie ```initEvents()```. Wróćmy zatem do niej.

 * ```initEvents()``` - jeszcze raz. Jesteśmy spowrotem w tej metodzie. Chcemy, aby event click był ustawiony, ale chcemy również przy kalkulatorze dziesiętnym dodać dodatkowy event click na znaku dodawania. Co musimy zrobić? Musimy rozszerzyć tą metodę. Pamiętasz jak wywołać metodę z klasy absrakcyjnej?

 Po rozszerzeniu dopisujemy nowy event, który po kliknięciu w plus wywoła metodę ```checkNumber()``` oraz ```updateResult()```.

 * ```checkNumber()``` - ta metoda jest już stworzona w klasie abstrakcyjnej. Jej zadanie to pozbieranie wartości (cyfr) z elementów DOM i wysłanie ich do metody ```add()```, a także jak zauważysz podstawienie wyniku, który zwróci metoda ``` add()``` pod tablicę ```this.resultNumberArray```.

 * ```add()``` - każdy kalkulator będzie mógł dodawać tylko dwie liczby. Liczby mogą być 8 cyfrowe. Spójrz na kalkulator binarny i na tej podstawie stwórz własny algorytm, który doda dwie liczby dziesiętne. Pamiętaj o przeniesieniu. Cały wynik jest zapisywany w tablicy. Tablica z wynikiem jest 9 cyfrowa. Dlaczego? Ponieważ w przypadku wpisania przez użytkownika samych cyfr 9 wynik będzie o jedną cyfrę większy. Spójrz:

 ```JavaScript
 Liczba1:  9 9 9 9 9 9 9 9
 Liczba2:  9 9 9 9 9 9 9 9
 Wynik:  1 9 9 9 9 9 9 9 8
 ```
 Po dodaniu dwóch liczb i zwróceniu poprawnego wyniku w formie tablicy. Zostaje on zapisany do ```this.resultNumberArray```. Natępnie jak pamiętasz metoda ```initEvents()``` po kliknięciu w plusa wywoływała dwie inne metody: ```checkNumber()``` - którą już omówiliśmy oraz ```updateResult()```. Przejdź zatem do niej.

 * ```updateResult() ```- zadaniem tej metody jest zaktualizowanie wyniku na stronie. Wynik mamy przechowywany w tablicy ```this.resultNumberArray```, więc na jej podstawie możemy wypełnić elementy DOM, określonymi wartościami.

## Dla chętnych

### Dodatkowe metody

* walidacja wprowadzanych przez użytkownika znaków do kalkulatora dziesiętnego.

 Zauważ, że w przypadku kalkulatora dziesiętnego użytkownik może wprowawadzić w miejsce gdzie powinna być liczba - cokolwiek. To nie jest pożądana sytuacja. Nasz kalkulator nie potrafi dodawać niczego innego poza liczbami dziesiętnymi.
 Stwórz metodę, która będzie informować użytkownika, że wpisuje zły znak. Pozówl mu wporawdzać tylko jedną cyfrę na jedno pole.

* tooltip, informujacy użytkownika, gdzie ma kliknąć po wpisaniu pierwszej cyfry, aby zobaczyć wynik

 Użytkownik po wpisaniu pierwszej liczby powinien od razu wiedzieć co zrobić dalej. Przydałby się niewielki tootltip np. nad znakiem dodawania mówiący użytkownikowi co ma zrobić.
 Stwórz metodę, wyświetlającą tooltip. Ustaw odpowiedni event. A może masz jakiś lepszy pomysł na zakomunikowanie użytkownikowi co ma zrobić?

### Inny kalkulator

A może kalkulator liczb szesntastkowych? :D , albo chociaż kalkulator dodający liczby w systemie trójkowym?
