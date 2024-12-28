/**
 * 타입 추론
 */

let a = 1;
let b = "hello";
let c = {
  name: "dog",
  color: "black",
};
let { name, color } = c;

let [one, two, three] = [1, "hello", true];

const func = (message = "hello") => {
  return "hello";
};

let d;

d = 1;
d.toFixed(2);

d = "hello";
d.toUpperCase();

d = true;
d.valueOf();

let num1 = 10;
num1 = 20;
num1 = 30;

const num2 = 10;
const str2 = "hello";

let arr = [1, "hello", true];
