/**
 * 맵드 타입
 */

interface User {
  id: number;
  name: string;
  age: number;
}

type PartialUser = {
  [key in keyof User]?: User[key];
};

type BooleanUser = {
  [key in keyof User]: boolean;
};

type ReadOnlyUser = {
  readonly [key in keyof User]: User[key];
};

const getUser = (): ReadOnlyUser => {
  return {
    id: 1,
    name: "kim",
    age: 27,
  };
};

const user = getUser();

// user.id = 2;
// user.age = 10;

const updateUser = (user: PartialUser) => {
  return {
    ...user,
  };
};

updateUser({
  name: "bob",
});
