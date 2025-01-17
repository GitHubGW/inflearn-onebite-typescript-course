/**
 * 분산적인 조건부 타입
 */

type StringNumberSwitch<T> = T extends number ? string : number;

type A1 = StringNumberSwitch<number>;
type A2 = StringNumberSwitch<string>;
type A3 = StringNumberSwitch<number | string>;
type A4 = StringNumberSwitch<boolean | number | string>;

/**
 * 예제 1
 */

type Exclude<T, U> = T extends U ? never : T;

type B1 = Exclude<number, string>;
type B2 = Exclude<number, number>;
type B3 = Exclude<number | string | boolean, string>;

/**
 * 예제 2
 */

type Extract<T, U> = T extends U ? T : never;

type C1 = Extract<number | string | boolean, string>;

/**
 * 조건부 타입 분산 방지하기
 */

type NonDistributiveConditionalType<T> = [T] extends [number] ? string : number;

type D1 = NonDistributiveConditionalType<number | string>;
type D2 = NonDistributiveConditionalType<number | string | boolean>;
