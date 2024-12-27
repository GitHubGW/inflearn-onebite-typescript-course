/**
 * 기본 타입간의 호환성
 */
let num1: number = 50;
let num2: 10 = 10;

num1 = num2;

/**
 * 객체 타입간의 호환성
 */
type Animal = {
  name: string;
  color: string;
};

type Dog = {
  name: string;
  color: string;
  breed: string;
};

let animal: Animal = { name: "기린", color: "yellow" };
let dog: Dog = { name: "돌돌이", color: "brown", breed: "진돗개" };

animal = dog;
dog = animal;

/**
 * 초과 프로퍼티 검사
 */
type Book = {
  name: string;
  price: number;
};

type ProgrammingBook = {
  name: string;
  price: number;
  skill: string;
};

let book: Book = { name: "책", price: 10000 };
let programmingBook: ProgrammingBook = { name: "책", price: 10000, skill: "typescript" };

book = programmingBook;
programmingBook = book;

let book2: Book = {
  name: "책",
  price: 10000,
  skill: "typescript",
};

let book3: Book = programmingBook;

const func = (book: Book) => {};

func(programmingBook);

const func2 = (programmingBook: ProgrammingBook) => {};

func2(book);

let programmingBook2 = { name: "책", price: 10000, skill: "typescript" };

book = programmingBook2;
