/**
 * 인덱스드 엑세스 타입
 */

/**
 * 객체
 */

interface Post {
  title: string;
  content: string;
  author: {
    id: number;
    name: string;
    age: number;
  };
}

const post: Post = {
  title: "title",
  content: "content",
  author: { id: 1, name: "kim", age: 25 },
};

const printAuthorInfo = (author: Post["author"]) => {
  console.log(`${author.name}-${author.id}`);
};

printAuthorInfo(post.author);

/**
 * 배열
 */

type PostList = {
  title: string;
  content: string;
  author: {
    id: number;
    name: string;
    age: number;
  };
}[];

const postList: PostList = [];

const post2: PostList[0] = {
  title: "title",
  content: "content",
  author: { id: 1, name: "kim", age: 25 },
};

const printAuthorInfo2 = (author: PostList[number]["author"]) => {
  console.log(`${author.name}-${author.id}`);
};

/**
 * 튜플
 */

type Tuple = [number, string, boolean];

type Tup1 = Tuple[0];
type Tup2 = Tuple[1];
type Tup3 = Tuple[2];
// type Tup4 = Tuple[3];
type Tup5 = Tuple[number];
