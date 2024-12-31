/**
 * 함수 타입의 호환성
 */

type A = () => number;
type B = () => 10;

let a: A = () => 50;
let b: B = () => 10;

a = b;
// b = a;

type C = (value: number) => void;
type D = (value: 10) => void;

let c: C = (value) => {};
let d: D = (value) => {};

// c = d;
d = c;

type Animal = {
  name: string;
};

type Dog = {
  name: string;
  color: string;
};

let animalFunc = (animal: Animal) => {
  console.log(animal.name);
};

let dogFunc = (dog: Dog) => {
  console.log(dog.name);
  console.log(dog.color);
};

// animalFunc = dogFunc;
dogFunc = animalFunc;

type Func1 = (a: number, b: number) => number;
type Func2 = (a: number) => number;

let func1: Func1 = (a, b) => a + b;
let func2: Func2 = (a) => a;

func1 = func2;
// func2 = func1;
