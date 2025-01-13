/**
 * 제네릭 인터페이스, 제네릭 타입 별칭
 */

interface KeyPair<K, V> {
  key: K;
  value: V;
}

let keyPair: KeyPair<string, number> = {
  key: "key",
  value: 1,
};

let keyPair2: KeyPair<boolean, string[]> = {
  key: true,
  value: ["value"],
};

/**
 * 인덱스 시그니처
 */

interface NumberMap {
  [key: string]: number;
}

interface Map<V> {
  [key: string]: V;
}

let stringMap: Map<string> = {
  key: "value",
};

let booleanMap: Map<boolean> = {
  key: true,
};

let numberMap: Map<number> = {
  key: 1,
};

/**
 * 제네릭 타입 별칭
 */

type Map2<V> = {
  [key: string]: V;
};

let stringMap2: Map2<string> = {
  key: "value",
};

let numberMap2: Map2<number> = {
  key: 1,
};

/**
 * 제네릭 인터페이스의 활용 예시
 */

interface Student {
  type: "student";
  school: string;
}

interface Developer {
  type: "developer";
  skill: string;
}

interface User<T> {
  name: string;
  profile: T;
}

const goToSchool = (user: User<Student>) => {
  console.log(`${user.name} is going to school.`);
};

const developerUser: User<Developer> = {
  name: "Bob",
  profile: {
    type: "developer",
    skill: "typescript",
  },
};

const studentUser: User<Student> = {
  name: "Alice",
  profile: {
    type: "student",
    school: "highschool",
  },
};

goToSchool(studentUser);
// goToSchool(developerUser);
