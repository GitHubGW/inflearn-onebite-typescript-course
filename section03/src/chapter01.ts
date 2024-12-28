/**
 * unknown 타입
 */
const unknownExam = () => {
  let unknownVar: unknown;
  let anyVar: any;
  let voidVar: void;
  let nullVar: null;
  let undefinedVar: undefined;
  let numVar: number = 10;
  let strVar: string = "hello";

  let neverFunc = () => {
    while (true) {}
  };
  let neverVar = neverFunc();

  unknownVar = 1;
  unknownVar = "hello";
  unknownVar = true;
  unknownVar = () => {};
  unknownVar = undefined;
  unknownVar = null;
  unknownVar = [];
  unknownVar = {};
  unknownVar = anyVar;
  unknownVar = voidVar;
  unknownVar = neverVar;
  unknownVar = undefinedVar;

  anyVar = unknownVar;
  voidVar = unknownVar;
  neverVar = unknownVar;
  nullVar = unknownVar;
  undefinedVar = unknownVar;
};

/**
 * never 타입
 */
const neverExam = () => {
  let neverVar = null as never;

  const neverFunc = (): never => {
    while (true) {}
  };

  let numVar: number = neverFunc();
  let numVar2: number = neverVar;

  let strVar: string = neverFunc();
  let undefinedVar: undefined = neverFunc();
  let nullVar: null = neverFunc();
  let numVar3: 10 = neverFunc();
  let strVar2: "hello" = neverFunc();
  let boolVar: true = neverFunc();
  let arrVar: [1, 2, 3] = neverFunc();
  let objVar: { a: 1 } = neverFunc();
  let funcVar: () => void = neverFunc();

  let never1: never = 10;
  let never2: never = "hello";
  let never3: never = true;
  let never4: never = () => {};
  let never5: never = undefined;
  let never6: never = null;
  let never7: never = [];
  let never8: never = {};
};

/**
 * void 타입
 */
const voidExam = () => {
  let voidVar: void;
  let undefinedVar: undefined;

  voidVar = undefinedVar;

  const voidFunc = (): void => {
    return undefined;
  };
};

/**
 * any 타입
 */
const anyExam = () => {
  let unknownVar: unknown;
  let anyVar: any;
  let undefinedVar: undefined;

  let neverVar: never;

  let neverFunc = () => {
    while (true) {}
  };
  let neverVar2 = neverFunc();

  anyVar = 1;
  anyVar = "hello";
  anyVar = true;
  anyVar = unknownVar;
  undefinedVar = anyVar;
  anyVar = neverVar2;
  neverVar = anyVar;
};
