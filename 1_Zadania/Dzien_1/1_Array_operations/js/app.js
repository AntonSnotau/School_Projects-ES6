//1//

const randomize = (param1, param2, callback) => {

};

//2//

var animals = ['cat', 'shrimp', 'giraffe'];
const aniani = animals.map(item => console.log(item));

//3//

var years = [1995, 1856, 2014, 1987];
const newtab = years.map(item => console.log(2017-item));

//4//
let sum = 0;
years.map(item => sum += item);
console.log(sum);

let mn = 1;
years.map(item => mn *= item);
console.log(mn);
