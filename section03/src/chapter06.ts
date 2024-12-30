/**
 * 타입 좁히기
 */

type Person = {
  name: string;
  age: number;
};

const func = (value: number | string | Date | null | Person) => {
  if (typeof value === "number") {
    value.toFixed(2);
  } else if (typeof value === "string") {
    value.toUpperCase();
  } else if (value instanceof Date) {
    value.getDay();
  } else if (value && "name" in value) {
    value.name;
  }
};
