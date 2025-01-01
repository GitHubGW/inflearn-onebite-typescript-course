/**
 * 사용자 정의 타입 가드
 */

type Dog = {
  name: string;
  isBark: boolean;
};

type Cat = {
  name: string;
  isScratch: boolean;
};

type Animal = Dog | Cat;

const isDog = (animal: Animal): animal is Dog => {
  return (animal as Dog).isBark !== undefined;
};

const isCat = (animal: Animal): animal is Cat => {
  return (animal as Cat).isScratch !== undefined;
};

const warning = (animal: Animal) => {
  if (isDog(animal)) {
    console.log("isDog(animal)", isDog(animal));

    animal;
  }
  if (isCat(animal)) {
    console.log("isCat(animal)", isCat(animal));

    animal;
  }
};

warning({ name: "멍멍이", isBark: true });
warning({ name: "야옹이", isScratch: true });
