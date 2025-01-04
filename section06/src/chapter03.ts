/**
 * 접근 제어자
 */

class Employee {
  private name: string;
  public age: number;
  protected position: string;

  constructor(name: string, age: number, position: string) {
    this.name = name;
    this.age = age;
    this.position = position;
  }

  work() {
    console.log(`${this.name}: 일함`);
  }
}

class ExecutiveOfficer extends Employee {
  officeNumber: number;

  constructor(name: string, age: number, position: string, officeNumber: number) {
    super(name, age, position);
    this.officeNumber = officeNumber;
  }

  introduce() {
    console.log(this.position);
  }
}

const employeeA = new Employee("홍길동", 23, "개발자");

// employeeA.name = "김철수";
// employeeA.age = 25;
// employeeA.position = "디자이너";

/**
 * 예시
 */

class User {
  constructor(public name: string, private age: number, protected country: string) {}

  introduce() {
    console.log(`${this.name} ${this.age} ${this.country} 입니다`);
  }
}

const userA = new User("홍길동", 23, "한국");

console.log("userA", userA);
userA.introduce();
