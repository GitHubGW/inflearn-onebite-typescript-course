/**
 * 타입 단언
 */

type Person = {
  name: string;
  age: number;
};

let person = {} as Person;
person.name = "tom";
person.age = 10;

type Dog = {
  name: string;
  color: string;
};

let dog: Dog = {
  name: "dog",
  color: "black",
  breed: "bulldog",
};

let dog2 = {
  name: "dog",
  color: "black",
  breed: "bulldog",
  country: "korea",
} as Dog;

/**
 * 타입 단언의 규칙
 * - A as B
 * - A가 B의 슈퍼 타입이어야 함
 * - A가 B의 서브 타입이어야 함
 */

let num1 = 10 as never;
let num2 = 10 as unknown;
// let num3 = 10 as string;

let num4 = 10 as unknown as string;
let num5 = 10 as never as undefined as void as any as unknown as string;

/**
 * const 단언
 */

let num6 = 10 as const;

let cat = {
  name: "cat",
  color: "white",
} as const;

/**
 * Non Null 단언
 */

type Post = {
  title: string;
  author?: string;
};

let post: Post = {
  title: "게시글1",
  author: "tom",
};

const len: number = post.author!.length;
