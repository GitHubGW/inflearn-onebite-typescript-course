/**
 * 맵드 타입 기반의 유틸리티 타입 1
 * - Parital, Required, Readonly
 */

/**
 * Partial<T>
 */
interface Post {
  title: string;
  tags: string[];
  content: string;
  thumbnailUrl?: string;
}

type PartialType<T> = {
  [key in keyof T]?: T[key];
};

const post1: Partial<Post> = {
  title: "제목",
};

const post2: PartialType<Post> = {
  title: "제목2",
};

/**
 * Required<T>
 */
type RequiredType<T> = {
  [key in keyof T]-?: T[key];
};

const thumbnailPost: Required<Post> = {
  title: "title",
  tags: ["ts"],
  content: "content",
  thumbnailUrl: "https://www.naver.com",
};

const thumbnailPost2: RequiredType<Post> = {
  title: "title",
  tags: ["ts"],
  content: "content",
  thumbnailUrl: "https://www.naver.com",
};

/**
 * ReadOnly<T>
 */
type ReadOnlyType<T> = {
  readonly [key in keyof T]: T[key];
};

const readOnlyPost: Readonly<Post> = {
  title: "title",
  tags: [],
  content: "content",
};

// readOnlyPost.title = "title2";
// readOnlyPost.content = "content2";

const readOnlyPost2: ReadOnlyType<Post> = {
  title: "title",
  tags: [],
  content: "content",
};

// readOnlyPost2.title = "title2";
// readOnlyPost2.content = "content2";
