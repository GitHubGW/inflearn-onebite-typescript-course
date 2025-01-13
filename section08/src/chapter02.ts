/**
 * keyof 연산자
 */

interface Person {
  name: string;
  age: number;
  location: string;
}

const getPropertyKey = (person: Person, key: keyof Person) => {
  return person[key];
};

const person: Person = {
  name: "kim",
  age: 25,
  location: "seoul",
};

const result = getPropertyKey(person, "name");

/**
 * typeof 연산자
 */

const person2 = {
  name: "kim",
  age: 25,
  location: "seoul",
};

type Person2 = typeof person2;

type KeyOfPerson2 = keyof Person2;

const getPropertyKey2 = (person: Person2, key: keyof typeof person2) => {
  return person[key];
};
