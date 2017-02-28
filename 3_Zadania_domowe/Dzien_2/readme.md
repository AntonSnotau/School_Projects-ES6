# ES6 - zadania domowe

## Dzień 2
> Zadanie 1 wykonaj w pliku app.js

#### Zadanie 1

Stwórz super klasę o nazwie ```Insect```. Stwórz również dwie klasy, które będą dziedziczyły z klasy bazowej: ```Centipede``` oraz  ```Spider```.

W klasie bazowej ```Insect``` stwórz konstruktor, który będzie ustawiał imię owada oraz ilość jego nóg. (Wymyśl coś kreatywnego. Zamiast imienia możesz również ustawić typ lub podtyp owada, jeśli masz odwagę sprawdzić to w Wikipedii :) ).

Stwórz również metodę/metody ```getLegs()```, która wypisuje ile nóg ma dane zwierzę w następujący sposób:

```HTML
Cześć mam na imię lucy jestem stonogą i mam 20 nóg
Cześć mam na imię Majkel jestem pająkiem i mam 8 nóg
```


#### Zadanie 2

Stwórz funkcję ```saySomething()``` (Arrow function) i jako parametr przekaż jej następujący obiekt:

```JavaScript
let wally = {
    name: "Wally",
    age: 2,
    proffesion: "Naprawianie innych robotów"    
}
```
 Następnie za pomocą destrukturyzacji podstaw wszystkie 3 atrybuty obiektu pod takie same nazwy zmiennych. Następnie zwróć strin w postaci:

 ```HTML
 Cześć mam na imię Wally, mam 2 lata i moim zajęciem jest Naprawianie innych robotów".
 ```


### Zadanie 3

Stwórz funkcję ```sayHello```, której celem będzie wypisanie ```Hello``` dla wszystkich jej parametrów. Parametry powinny być stringami. Wykorzystaj Rest/Spread operator.

Spróbuj posłużyć się jedną z metod (```forEach```, ```map``` lub ```reduce```). Pamiętaj, że znasz oprócz słówka ```var``` jeszcze ```const``` i ```let```.


Przykładowe wywołania:

```JavaScript
sayHello("Ania", "Kasia", "Steve", "Bogumił");
```

Wynik w konsoli:

```HTML
Hello: Ania
Hello: Kasia
Hello: Steve
Hello: Bogumił
```
