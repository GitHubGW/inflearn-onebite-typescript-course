/**
 * 대수 타입
 */

/**
 * 합집합 타입 (유니언 타입)
 */
let a: string | number | boolean;

a = "hello";
a = 123;
a = true;

let arr: (number | string | boolean)[] = [1, "hello", true];
let arr2: Array<number | string | boolean> = [1, "hello", true];

type Dog = {
  name: string;
  color: string;
};

type Person = {
  name: string;
  language: string;
};

type Union = Dog | Person;

let union1: Union = {
  name: "dog",
  color: "black",
};

let union2: Union = {
  name: "person",
  language: "english",
};

let union3: Union = {
  name: "person",
  color: "red",
  language: "english",
};

// let union4: Union = {
//   name: "person",
// };

/**
 * 교집합 타입 (인터섹션 타입)
 */
let variable: number & string;

// variable = 123;
// variable = "hello";

type Dog2 = {
  name: string;
  color: string;
};

type Person2 = {
  name: string;
  language: string;
};

type Intersection = Dog2 & Person2;

let intersection: Intersection = {
  name: "dog",
  color: "black",
  language: "english",
};
