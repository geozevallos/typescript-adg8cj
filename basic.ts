// Tipos primitivos
let edad: number = 10;
let isDone: boolean = true;
let lastName: string = 'Zevallos'; // "", '', ``

let userName = 'Jorge123';

let genero: 'm' | 'f' = 'm';

let prueba;
prueba = 'Jijo';
prueba = 9;
prueba = [1, 23, 4];

let pruebaAny: any = true;
pruebaAny = 1;

let numbers: number[] = [1, 2, 3, 4];
let numberstwo: Array<number> = [55, 1];

let tuple: [number, string] = [1, 'a'];

const persona = {
  name: 'Jorge',
  lastName: 'Zevallos'
};

console.log(persona.name);

// enum
enum controles {
  up = 'w',
  left = 'a',
  right = 'd',
  down = 's'
}

// enum controles {
//   const up = 'w';
//   const left = 'a';
//   const right = 'd';
//   const down = 's';
// }

console.log(controles.up);

// Funciones
function sum(a: number, b: number): number {
  return a + b;
}

function print(): void {
  console.log('imprimir');
}

// Asignando Tipos
type gender = 'm' | 'f';

let sexo: gender = 'm';

// SOLID => Single responsability
class Printer {
  print(name: string, fullName: string): void {
    console.log(name, fullName);
    const element: HTMLElement = document.getElementById('app');

    element.innerHTML = `<h2>${name}<h2>`;
  }
}

interface Estudiante {
  name: string;
  lastName: string;
  printName(): void;
}

class Alumno extends Printer implements Estudiante {
  name: string;
  lastName: string;
  age: number;
  constructor(name: string, lastName: string, age: number) {
    super();
    this.name = name;
    this.lastName = lastName;
    this.printName();
  }

  printName() {
    this.print(this.name, this.lastName);
  }
}

class AlumnoDos extends Printer {
  constructor(
    public name: string,
    public lastname: string,
    public age: number
  ) {
    super();
    this.printName();
  }

  printName(): void {
    this.print(this.name, this.lastname);
  }
}
