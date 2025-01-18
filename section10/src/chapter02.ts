/**
 * 맵드 타입 기반의 유틸리티 타입 2
 * - Pick, Omit, Record
 */

/**
 * Pick<T, K>
 */
interface Post {
  title: string;
  tags: string[];
  content: string;
  thumbnailUrl?: string;
}

type PickType<T, K extends keyof T> = {
  [key in K]: T[key];
};

type PickPost2 = Pick<Post, "title" | "content">;

const legacyPost: Pick<Post, "title" | "content"> = {
  title: "옛날 글",
  content: "옛날 컨텐츠",
};

const legacyPost2: PickType<Post, "title" | "content"> = {
  title: "옛날 글",
  content: "옛날 컨텐츠",
};

/**
 * Omit<T, K>
 */
type OmitType<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

type OmitPost2 = Omit<Post, "title">;

const noTitlePost: Pick<Post, "tags" | "content" | "thumbnailUrl"> = {
  tags: ["ts"],
  content: "옛날 컨텐츠",
  thumbnailUrl: "",
};

const noTitlePost2: Omit<Post, "title"> = {
  tags: ["ts"],
  content: "옛날 컨텐츠",
  thumbnailUrl: "",
};

/**
 * Record<K, V>
 */
type RecordType<K extends keyof any, V> = {
  [key in K]: V;
};

type ThumbnailLegacy = {
  large: {
    url: string;
    size: number;
  };
  medium: {
    url: string;
    size: number;
  };
  small: {
    url: string;
    size: number;
  };
};

type Thumbnail = Record<"large" | "medium" | "small", { url: string; size: number }>;

type User = Record<"username" | "email" | "country", string>;

type Animal = RecordType<"name" | "age", string>;
