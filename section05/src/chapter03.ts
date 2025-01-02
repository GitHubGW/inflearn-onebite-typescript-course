/**
 * 인터페이스 선언 합침
 */

interface Person {
  name: string;
}

interface Person {
  // name: "person";
  age: number;
}

interface Developer extends Person {
  name: "dev";
}

let person: Person = {
  name: "홍길동",
  age: 20,
};

let developer: Developer = {
  name: "dev",
  age: 20,
};

/**
 * 모듈 보강
 */

interface Lib {
  a: number;
  b: number;
}

interface Lib {
  c: string;
}

const lib: Lib = {
  a: 1,
  b: 2,
  c: "hello",
};
