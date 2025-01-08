/**
 * map, forEach 메서드 타입 정의하기
 */

/**
 * map
 */
const map = <T, U>(arr: T[], callbackFn: (item: T) => U) => {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    result.push(callbackFn(arr[i]));
  }

  return result;
};

const result1 = map([1, 2, 3], (item) => item * 2);
const result2 = map(["a", "b", "c"], (item) => parseInt(item));

/**
 * forEach
 */
const forEach = <T>(arr: T[], callbackFn: (item: T) => void) => {
  for (let i = 0; i < arr.length; i++) {
    callbackFn(arr[i]);
  }
};

const result3 = forEach([1, 2, 3], (item) => console.log(item.toFixed()));
const result4 = forEach(["a", "b", "c"], (item) => console.log(item.toUpperCase()));
