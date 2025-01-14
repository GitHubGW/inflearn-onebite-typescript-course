/**
 * 타입 변수 응용하기 (1)
 */

const swap = <T, U>(a: T, b: U) => {
  return [b, a];
};

const [a, b] = swap("a", 2);

/**
 * 타입 변수 응용하기 (2)
 */

const returnFirstValue = <T>(data: [T, ...unknown[]]) => {
  return data[0];
};

const num = returnFirstValue([1, 2, 3]);
const str = returnFirstValue([1, "a", "b", "c"]);

/**
 * 타입 변수 응용하기 (3)
 */

const getLength = <T extends { length: number }>(data: T) => {
  return data.length;
};

let var1 = getLength([1, 2, 3]);
let var2 = getLength("12345");
let var3 = getLength({ length: 10 });
let var4 = getLength(10);
