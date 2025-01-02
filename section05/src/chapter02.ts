/**
 * 인터페이스 확장
 */

interface Animal {
  name: string;
  color: string;
}

interface Dog extends Animal {
  name: "멍멍이";
  isBark: boolean;
}

interface Cat extends Animal {
  isScratch: boolean;
}

interface Chicken extends Animal {
  isFly: boolean;
}

let dog: Dog = {
  name: "멍멍이2",
  color: "검정",
  isBark: true,
};

interface DogCat extends Dog, Cat {}

let dogCat: DogCat = {
  name: "멍멍이",
  color: "검정",
  isBark: true,
  isScratch: false,
};
