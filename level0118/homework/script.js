//<> exercise N1
class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

class Dog extends Animal {
  get bark() {
    return `Woof! i am ${this.name}`;
  }
}

let pango = new Dog("pango", 3);
console.log(pango.bark);
//<> exercise N2
class Vehicle {
  constructor(brand, year) {
    this.brand = brand;
    this.year = year;
  }
}

class Car extends Vehicle {
  constructor(brand, model, year) {
    super(brand, year);
    this.model = model;
  }
  get info() {
    return `This is: ${this.brand} ${this.model} ${this.year}`;
  }
}

let bmw = new Car("BMW", "E46", 2003);
console.log(bmw.info);

//<> exercise N3

class Person {
  constructor(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
  }

  getFullName() {
    return `${this.firstname} ${this.lastname}`;
  }
}

class Student extends Person {
  constructor(firstname, lastname, grade) {
    super(firstname, lastname);
    this.grade = grade;
  }

  getFullInfo() {
    return `${this.getFullName()} ${this.grade}`;
  }
}

let nika = new Student("Nika", "Datashvili", 12);

console.log(nika.getFullInfo());

//<> exercise N4

class Shape {
  getArea() {
    return 0;
  }
}
class Rectangle extends Shape {
  constructor(width, height) {
    super();
    this.width = width;
    this.height = height;
  }

  getArea() {
    return this.width * this.height;
  }
}
let rect1 = new Rectangle(7, 8);
console.log(`Area: ${rect1.getArea()}`);

//<> exercise N5

class Employee {
  constructor(name, salary) {
    this.name = name;
    this.salary = salary;
  }
}
class Manager extends Employee {
  constructor(name, salary, department) {
    super(name, salary);
    this.department = department;
  }
  getEmpInfo() {
    return `My name is ${this.name}, i work at 
${this.department}, my salary is ${this.salary}$ in a week`;
  }
}

let employee = new Manager("nika", 1500, "G departament");

console.log(employee.getEmpInfo());
