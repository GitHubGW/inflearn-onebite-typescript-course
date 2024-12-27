/**
 * Enum
 */
enum Role {
  ADMIN,
  USER,
  GUEST,
}

enum Language {
  KOREAN = "ko",
  ENGLISH = "en",
  SPANISH = "es",
}

let user1 = {
  name: "kim",
  role: Role.ADMIN,
  language: Language.KOREAN,
};

let user2 = {
  name: "park",
  role: Role.USER,
  language: Language.ENGLISH,
};

let user3 = {
  name: "lee",
  role: Role.GUEST,
  language: Language.SPANISH,
};

console.log(user1, user2, user3);
