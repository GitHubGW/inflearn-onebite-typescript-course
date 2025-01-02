/**
 * 인터페이스
 */

interface Person {
  name: string;
  age: number;
  sayHi(): void;
  sayHi(text: string): void;
}

let person: Person = {
  name: "홍길동",
  age: 20,
  sayHi: (text?: string) => {
    console.log(text || "안녕하세요");
  },
};

person.name;
person.age;
person.sayHi();
person.sayHi("반갑습니다.");
