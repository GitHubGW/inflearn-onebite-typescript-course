/**
 * 조건부 타입 기반의 유틸리티 타입
 * - Exclude, Extract, ReturnType
 */

/**
 * Exclude<T, U>
 */
type ExcludeType<T, U> = T extends U ? never : T;

type A1 = Exclude<string | boolean, boolean>;
type A2 = Exclude<string | number | boolean, string | number>;
type A3 = ExcludeType<string | number, number>;

/**
 * Extract<T, U>
 */
type ExtractType<T, U> = T extends U ? T : never;

type B1 = Extract<string, boolean>;
type B2 = Extract<string | boolean, boolean>;
type B3 = Extract<string | number | boolean, string>;
type B4 = Extract<string | number, string>;

/**
 * ReturnType<T>
 */
type ReturnType2<T extends (...args: any) => any> = T extends (...args: any) => infer R ? R : never;

// type ReturnType2<() => string extends (...args:any) => any> = () => string extends (...args: any) => string ? string : never

const funcA = () => {
  return "hello";
};

const funcB = () => {
  return 10;
};

const funcC = () => {
  return { name: "kim" };
};

type AA = typeof funcA;
type AA2 = typeof funcC;

type ReturnA = ReturnType<typeof funcA>;
type ReturnB = ReturnType<typeof funcB>;
type ReturnC = ReturnType<typeof funcC>;

type ReturnA2 = ReturnType2<typeof funcA>;
type ReturnB2 = ReturnType2<typeof funcB>;
type ReturnC2 = ReturnType2<typeof funcC>;
