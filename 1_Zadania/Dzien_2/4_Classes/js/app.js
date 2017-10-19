class Vehicle {
  constructor(comunicationType) {
    this.communication = communicationType;
  }

  go() {
    console.log('moj pojazd ' + this.communication);
  }
}

const boat = new Vehicle('plynie');
boat.go();
const car = new Vehicle('jezdzi');
car.go();
const plane = new Vehicle('lata');
plane.go();

//1//
class Kaczka {
  constructor (type) {
    this.type = type;
  }
  kwacz() {
    console.log('kwa kwa');
  }
  plywaj() {
    console.log('płynę...');
  }
  wyswetl() {
    console.log('wygląda jak ' + this.type ' kaczka');
  }
}

const kaczucha = new Kaczka('zwykła');
