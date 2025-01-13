/**
 * 프로미스
 */

const promise = new Promise<number>((resolve, reject) => {
  setTimeout(() => {
    // resolve(20);
    reject("error!");
  }, 3000);
});

promise
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });

/**
 * 프로미스를 반환하는 함수의 타입을 정의
 */

interface Post {
  id: number;
  title: string;
  content: string;
}

const fetchPost = () => {
  return new Promise<Post>((resolve, reject) => {
    setTimeout(() => {
      resolve({
        id: 1,
        title: "title",
        content: "content",
      });
    }, 3000);
  });
};

const result = fetchPost();

result.then((response) => {
  console.log(response);
});
