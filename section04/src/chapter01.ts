/**
 * 함수 타입
 */

const func = (a: number, b: number) => {
  return a + b;
};

const func2 = (a: number, b?: number) => {
  console.log(a, b);
};

const getSum = (...rest: number[]) => {
  let sum = 0;

  rest.forEach((item) => {
    sum += item;
  });

  return sum;
};

getSum(1, 2);
getSum(1, 2, 3);
