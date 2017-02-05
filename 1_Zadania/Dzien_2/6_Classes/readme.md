# Klasy  &ndash; zadania

### Przygotowanie

> Stwórz w pełni działające środowiko, które pozwoli Ci pisać kod JavaScript w wersji 6.
>
> Pamiętaj o:
> - ```npm init```
> - Zainstalowaniu odpowiednich modułów
> - Ustawieniu Webpacka, plikiem  wyjściowym  ma być `js/out.js`

## Zadanie rozwiązywane z wykładowcą

### Różne rodzaje menu na stronie

Wyobraź sobie, że tworzysz serwis internetowy, na którym będą dwa rodzaje menu: poziome i pionowe.
Stwórz klasę abstrakcyjną np. ```MenuGenerator```, na bazie której będziemy tworzyć nowe rodzaje menu. Podczas tworzenia menu, do konstruktora przekaż typ menu oraz tablicę z elementami menu (Przykład wywołania niżej).

Stwórz również dwie metody w klasie bazowej:
* getType() - wypisującą typ menu
* showItems() - wypisującą elementy menu

Dodatkowo chcesz, aby menu pionowe mogło być animowane. Dodaj mu odpowiednią metodę, która będzie wypisywała w konsoli tekst "Animacja menu typu: vertical"

```JavaScript
let hMenuGenetator = new HorizontalMenuGenerator("horizontal", ['start', 'about']);
let vMenuGenetator = new VerticalMenuGenerator("vertical", ['home', 'contact']);
```


## Zadania do samodzielnego wykonania

### Zadanie 1 (~ 5min - 10min)

W pliku ```app.js``` stwórz klasę ```Kaczka```. Będzie to klasa abstrakcyjna, z której będą dziedziczyć inne kaczki. Stwórz wewnątrz tej klasy konstruktor i metody:

* konstruktor - którego zadaniem będzie ustawienie typu kaczki na "zwykła" np. this.type = "zwykla"
* kwacz() - wypisuje "kwa kwa"
* plywaj() - wypisuje "płynę...""
* wyswietl() - wypisuje "Wygląda jak zwykla kaczka". Skorzystaj z ustawienia type do wypisania typu kaczki.

Stwórz obiekt ```kaczucha```. Wywołaj dla niego wszystkie metody.

### Zadanie 2 (~ 5min - 10min)

Na bazie  klasy ```Kaczka``` stwórz kolejną o nazwie ```DzikaKaczka```. Nadpisz odpowiednio konstruktor, tak aby podczas wywoływania metody ```wyswietl()``` typ kaczki zmienił się na "dzika". Stwórz obiekt ```dzikaKaczucha```. Wywołaj dla niego wszystkie metody.

### Zadanie 3 (~ 5min - 10min)

Na bazie klasy ```Kaczka``` stwórz kolejną o nazwie ```KrzyzowkaKaczka```. Nadpisz odpowiednio konstruktor, tak aby podczas wywoływania metody ```wyswietl()``` typ kaczki zmienił się na "krzyżówka". Stwórz obiekt ```krzyzoKaczucha```. Wywołaj dla niego wszystkie metody.

### Zadanie 4 (~ 5min - 7min)

Stworzyłeś klasę ```Kaczka```. Mogą z niej dziedziczyć wszytkie kaczki. Twoim zadaniem teraz jest dodanie do odpowiedniej klasy  metody ```lec()```. Metoda ma wypisywać w konsoli tekst "Lecę".

### Zadanie 5 (~ 5min - 7min)
Na bazie  klasy ```Kaczka``` stwórz kolejną o nazwie ```GumowaKaczka```. Nadpisz odpowiednio konstruktor, tak aby podczas wywoływania metody ```wyswietl()``` typ kaczki zmienił się na "gumowa". Stwórz obiekt ```gumowaKaczucha```. Wywołaj dla niego wszystkie metody. Czy widzisz coś niepokojącego? ......Twoja gumowa kaczka potrafi latać!!
Nadpisz odpowiednio metodę ```lec()``` tak, aby po jej wywołaniu w przypadku gumowej kaczki wypisywał się w konsoli tekst "gumowe kaczki nie umieją latać "
