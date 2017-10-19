$(document).ready(function() {
  //1//
  class Insect {
    constructor(name, type, legs) {
      this.name = name;
      this.type = type;
      this.legs = legs;
  }
  getlegs() {
    console.log('Cześć, mam na imię ' + this.name);
  }
}

const sp = $('.info_spider');
const cen = $('.info_centipede');

sp.text(getlegs('Harry', 'Spider', 8));

// class Centipede extends Insect {
// }
//
// class Spider extends Centipede {
// }

//2//
// saySomething() => {
//
// }
});
