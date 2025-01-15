/**
 * 템플릿 리터럴 타입
 */

type Color = "red" | "blue" | "green";

type Animal = "dog" | "cat" | "chicken";

// type ColoredAnimal = "red-dog" | "red-cat" | "red-chicken" | "blue-dog" | "blue-cat" | "blue-chicken";

type ColoredAnimal = `${Color}-${Animal}`;

let coloredAnimal: ColoredAnimal = "red-dog";
