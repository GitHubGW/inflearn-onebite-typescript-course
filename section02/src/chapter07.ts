/**
 * void
 */
const func1 = (): string => {
  return "string";
};

const func2 = (): void => {
  console.log("func2");
};

const func3 = (): undefined => {
  console.log("a");
};

let a: void;

// a = 1;
// a = "hello";
// a = true;
// a = () => {};
a = undefined;
// a = null; // strictNullChecks가 false일 때 가능

/**
 * never
 */
const func4 = (): never => {
  while (true) {}
};

const func5 = (): never => {
  throw new Error("error");
};

let anyVar: any;
let b: never;

// b = 1;
// b = "hello";
// b = true;
// b = () => {};
// b = undefined;
// b = null;
// b = anyVar;

let num1: number = 50;
let num2: 10 = 10;

num1 = num2;
num2 = num1;

let num3: number = Infinity;
let num4: 10 = 10;

num3 = num4;
num4 = num3;
