# ES6 - zadania domowe

## Dzień 1
> Zadania 1-3 wykonuj w pliku app.js

### Zadanie 1

Stwórz funkcję (Arrow function) o nazwie ```getNumbers```, która przyjmuje jako parametr tablicę z liczbami. Następnie mnoży każdy element tablicy przez dwa i zwraca wynik.

Spróbuj posłużyć się jedną z metod (```forEach```, ```map``` lub ```reduce```). Pamiętaj, że znasz oprócz słówka ```var``` jeszcze ```const``` i ```let```.

### Zadanie 2

Stwórz funkcję o nazwie ```Weather```, która będzie konstruktorem.  Stwórz obiekt na bazie tego konstruktora, któremu przekaż tablicę z 3 pomiarami temperatury w ciągu dnia. Rozszerz konstruktor ```Weather``` o metodę ```getAvgTemperature``` (dodaj ją do prototypu), której celem jest zwrócenie średniej temperatury dnia. Wstaw tą wartość do elementu o klasie ```avg```.

Spróbuj posłużyć się jedną z metod (```forEach```, ```map``` lub ```reduce```). Pamiętaj, że znasz oprócz słówka ```var``` jeszcze ```const``` i ```let```.

Przykładowe wywołania:

```JavaScript
var day1 = new Weather([-2, 4.4, 3]);
console.log( day1.getAvgTemperature());
```

### Zadanie 3

W pliku ```index.html```, jest  dodana biblioteka jQuery. Ustaw w pliku ```app.js``` event click na elementach button.
Po kliknięciu w przycisk ma się rozwijać paragraf znajdujący się poniżej.
Wewnątrz metody ```on``` użyj funkcji ze strzałką (Arrow functions).

Pamiętaj, że znasz oprócz słówka ```var``` jeszcze ```const``` i ```let```.
