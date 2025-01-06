/**
 * 제네릭
 */

const func = <T>(value: T) => {
  return value;
};

let a = func(1);
let b = func("a");
let c = func(true);

console.log(a, b, c);

let arr = func<[number, number, number]>([1, 2, 3]);
