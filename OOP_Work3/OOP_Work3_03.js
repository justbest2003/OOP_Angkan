class Person {
  name = "";
  address = "";
  constructor(name, address) {
    this.name = name;
    this.address = address;
  }

  getName() {
    return this.name;
  }

  getAddress() {
    return this.address;
  }

  setAddress(address) {
    this.address = address;
  }

  toString() {
    return `Person[name = ${this.name}, address = ${this.address}]`;
  }
}

class Student extends Person {
  program = "";
  year = 0;
  fee = 0;
  constructor(name, address, program, year, fee) {
    super(name, address);
    this.program = program;
    this.year = year;
    this.fee = fee;
  }

  getProgram() {
    return this.program;
  }

  setProgram(program) {
    this.program = program;
  }

  getYear() {
    return this.year;
  }

  setYear(year) {
    this.year = year;
  }

  getFee() {
    return this.fee;
  }

  setFee(fee) {
    this.fee = fee;
  }

  toString() {
    return `Student[${super.toString()}, program = ${this.program}, year = ${
      this.year
    }, fee = ${this.fee}]`;
  }
}

class Staff extends Person {
  school = "";
  pay = 0;
  constructor(name, address, school, pay) {
    super(name, address);
    this.school = school;
    this.pay = pay;
  }

  getSchool() {
    return this.school;
  }

  setSchool(school) {
    this.school = school;
  }

  getPay() {
    return this.pay;
  }

  setPay(pay) {
    this.pay = pay;
  }

  toString() {
    return `Staff[${super.toString()}, school = ${this.school}, pay = ${
      this.pay
    }]`;
  }
}

const main = () => {
  const person1 = new Person("Kay", "Ban Kay");
  const person2 = new Person("Best", "Ban Best");
  const student1 = new Student(person1.name, person1.address, "SE", 65, 25000);
  const staff1 = new Staff(person2.name, person2.address, "NPRU", 11400);

  console.log(person1.toString());
  console.log(person2.toString());
  console.log(student1.toString());
  console.log(staff1.toString());
};

main();