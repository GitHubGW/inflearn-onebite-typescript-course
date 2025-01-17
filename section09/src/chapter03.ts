/**
 * 조건부 타입 내에서 타입 추론하기 (infer)
 */

type FuncA = () => string;
type FuncB = () => number;

type ReturnType<T> = T extends () => infer R ? R : never;

type A1 = ReturnType<string>;
type A2 = ReturnType<FuncA>;
type B1 = ReturnType<FuncB>;
type C1 = ReturnType<number>;

/**
 * 예제 1
 */

type PromiseUnpack<T> = T extends Promise<infer R> ? R : never;

type PromiseA = PromiseUnpack<Promise<number>>;
type PromiseB = PromiseUnpack<Promise<string>>;

/**
 * 예제 2
 */

type Unpack<T> = T extends infer R ? R : never;

type U1 = Unpack<number>;
type U2 = Unpack<string>;
type U3 = Unpack<object>;
type U4 = Unpack<() => string>;
