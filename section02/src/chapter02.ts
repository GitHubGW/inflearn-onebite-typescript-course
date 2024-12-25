/**
 * 배열
 */
let numArr: number[] = [1, 2, 3];
let strArr: string[] = ["hello", "world"];
let boolArr: Array<boolean> = [true, false];

let multiArr: (number | string)[] = [1, "hello"];

let doubleArr: number[][] = [
  [1, 2, 3],
  [4, 5, 6],
];

/**
 * 튜플
 */
let tup1: [number, number] = [1, 2];
tup1 = [3, 4];
// tup1 = [5];
// tup1 = [6, 7, 8];

let tup2: [number, string, boolean] = [1, "2", true];

const users: [string, number][] = [
  ["kim", 1],
  ["park", 2],
  ["lee", 3],
  // [4, "choi"],
];
