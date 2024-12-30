/**
 * 서로소 유니온 타입
 */

type Admin = {
  tag: "admin";
  name: string;
  kickCount: number;
};

type Member = {
  tag: "member";
  name: string;
  point: number;
};

type Guest = {
  tag: "guest";
  name: string;
  visitCount: number;
};

type User = Admin | Member | Guest;

const login = (user: User) => {
  if (user.tag === "admin") {
    user;
  } else if (user.tag === "member") {
    user;
  } else if (user.tag === "guest") {
    user;
  }
};

/**
 * 예시
 */

const loading: AsyncTask = {
  state: "loading",
};

const failed: AsyncTask = {
  state: "failed",
  error: { message: "에러 발생" },
};

const success: AsyncTask = {
  state: "success",
  response: { data: "데이터" },
};

type LoadingTask = {
  state: "loading";
};

type FailedTask = {
  state: "failed";
  error: { message: string };
};

type SuccessTask = {
  state: "success";
  response: { data: string };
};

type AsyncTask = LoadingTask | FailedTask | SuccessTask;

const processResult = (task: AsyncTask) => {
  if (task.state === "loading") {
    task;
  } else if (task.state === "failed") {
    task;
  } else if (task.state === "success") {
    task;
  }
};
