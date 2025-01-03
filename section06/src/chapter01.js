/**
 * 자바스크립트의 클래스
 */

class Student {
  name;
  grade;
  age;

  constructor(name, grade, age) {
    this.name = name;
    this.grade = grade;
    this.age = age;
  }

  introduce() {
    console.log(`안녕하세요, ${this.age}살 ${this.grade} ${this.name}입니다.`);
  }

  study() {
    console.log(`${this.name}이 ${this.grade}를 공부합니다.`);
  }
}

const studentA = new Student("홍길동", "A+", 23);

console.log(studentA);
studentA.introduce();
studentA.study();

class StudentDeveloper extends Student {
  favoriteSkill;

  constructor(name, grade, age, favoriteSkill) {
    super(name, grade, age);
    this.favoriteSkill = favoriteSkill;
  }

  programming() {
    console.log(`${this.name}이 ${this.favoriteSkill}을 공부합니다.`);
  }
}

const studentDeveloperA = new StudentDeveloper("철수", "A+", 23, "JavaScript");

console.log("studentDeveloperA", studentDeveloperA);
studentDeveloperA.introduce();
studentDeveloperA.study();
studentDeveloperA.programming();
