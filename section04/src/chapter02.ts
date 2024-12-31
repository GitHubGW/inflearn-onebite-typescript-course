/**
 * 함수 타입 표현식
 */

type Operation = (a: number, b: number) => number;

const add: Operation = (a, b) => {
  return a + b;
};

const sub: Operation = (a, b) => {
  return a - b;
};

const mul: Operation = (a, b) => {
  return a * b;
};

const div: Operation = (a, b) => {
  return a / b;
};

/**
 * 호출 시그니처 (콜 시그니처)
 */

type Operation2 = {
  (a: number, b: number): number;
  (a: number, b: number, c: number): number;
  name: string;
};

const add2: Operation2 = (a, b) => {
  return a + b;
};

const sub2: Operation2 = (a, b) => {
  return a - b;
};

const mul2: Operation2 = (a, b) => {
  return a * b;
};

const div2: Operation2 = (a, b) => {
  return a / b;
};

add2(1, 2);
add2(1, 2, 3);
add2.name;
