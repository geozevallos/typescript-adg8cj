// JS ES6 / js 2015 / JS moderno
var nombre = 'jorge';
let apellido = 'zevallos'; //accesible en el scope

// No sobreescribir
const url = 'https://stackblitz.com/';

// Funciones
let demo = function() {
  console.log('demo');
};

setTimeout(function() {
  console.log('tiempo despues');
}, 3000);

// Arrow function
let demoArrow = () => {
  console.log('AAA');
};

// Si es en una sola linea
let demo2Arrow = () => console.log('HOLA');

setTimeout(() => console.log('tiempo'), 3000);

// Con variables
let sumOne = function(a, b) {
  return a + b;
};

let sum = (a, b) => a + b;

// Pasar parámetros por defecto
let greet = function(name, gender = 'Mr') {
  console.log(name, gender);
};

greet('Jorge');

let names = function(name, ...allNames) {
  console.log(name), console.log(allNames);
};

names('Jorge', 'Juan', 'Pedro', 'Luis');

// Template literals
let fullName = 'Jorge Zevallos';

console.log(`El nombre es ${fullName}`);

// For of

let numbers = [1, 2, 3, 4, 5];

for (let number of numbers) {
  console.log(number);
}

// For in

let numbers = [1, 2, 3, 4, 5];

for (let number in numbers) {
  console.log(number, numbers[number]);
}
