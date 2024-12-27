/**
 * any
 */
let anyVar: any = 10;
anyVar = "hello";
anyVar = true;
anyVar = [];
anyVar = {};
anyVar = () => {};

anyVar.toUpperCase();
anyVar.toFixed(2);

let num: number = 10;
num = anyVar;

let num2: number = anyVar;

/**
 * unknown
 */
let unknownVar: unknown = 10;
unknownVar = "hello";
unknownVar = true;

// unknownVar.toUpperCase();
// unknownVar.toFixed(2);

// let num3: number = unknownVar;

if (typeof unknownVar === "number") {
  unknownVar.toFixed(2);
}
