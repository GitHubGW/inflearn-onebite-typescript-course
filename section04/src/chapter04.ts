/**
 * 함수 오버로딩
 */

function func(): void;
function func(a: number): void;
function func(a: number, b: number, c: number): void;

function func(a?: number, b?: number, c?: number) {
  if (!a && !b && !c) {
    console.log("a, b, c가 모두 없습니다.");
  } else if (a && !b && !c) {
    console.log("a만 있습니다.");
  } else {
    console.log("a, b, c가 있습니다.");
  }
}

func();
func(1);
func(1, 2, 3);

/**
 *
 */

type Func2 = {
  (a: number): number;
  (a: number, b: number): number;
  (a: number, b: number, c: number): number;
};

const func2: Func2 = (a: number, b?: number, c?: number) => {
  if (b && !c) {
    return a + b;
  } else if (b && c) {
    return a + b + c;
  } else {
    return a;
  }
};

const a1 = func2(1);
const a2 = func2(1, 2);
const a3 = func2(1, 2, 3);

console.log(a1, a2, a3);
