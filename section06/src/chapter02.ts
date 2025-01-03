/**
 * 타입스크립트의 클래스
 */

class Employee {
  name: string;
  age: number;
  position: string;

  constructor(name: string, age: number, position: string) {
    this.name = name;
    this.age = age;
    this.position = position;
  }

  work() {
    console.log("일함");
  }
}

const employeeA = new Employee("홍길동", 23, "개발자");

console.log(employeeA);

const employeeB: Employee = {
  name: "홍길동",
  age: 23,
  position: "개발자",
  work() {
    console.log("일함");
  },
};

class ExecutiveOfficer extends Employee {
  officeNumber: number;

  constructor(name: string, age: number, position: string, officeNumber: number) {
    super(name, age, position);
    this.officeNumber = officeNumber;
  }
}
