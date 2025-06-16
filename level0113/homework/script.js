//<> exercise N1
console.log("exercise N1");

class Student {
  constructor(name, age) {
    this._name = name;
    this._age = age;
  }

  get name() {
    return `My name is ${this._name}`;
  }

  set name(newName) {
    this._name = newName;
  }
  get age() {
    return `I am ${this._age}`;
  }
  set age(newAge) {
    this._age = newAge;
  }
}

let student = new Student("Nika", 18);
console.log(student.age);
console.log(student.name);
student.age = 6;
student.name = "Nika";
student.age = 22;
student.name = "Gio";
console.log(student.age);
console.log(student.name);
console.log("<<--------------------------->>");
//<> exercise N2
console.log("exercise N2");
class Book {
  constructor(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
  }

  getTitle() {
    return `Title: ${this.title}`;
  }
  getAuthor() {
    return `Author: ${this.author}`;
  }
  getPages() {
    return `Pages: ${this.pages}`;
  }
  setTitle(newTitle) {
    this.title = newTitle;
  }
  setAuthor(newAuthor) {
    this.author = newAuthor;
  }
  setPages(newPages) {
    this.pages = newPages;
  }
}

let potter = new Book("Harry Potter and sorcerers stone", "J.K. Rowling", 544);

console.log(potter.getAuthor());
console.log(potter.getTitle());

console.log(potter.getPages());
console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
potter.setAuthor("James Dashner");
potter.setTitle("Maze runner");
potter.setPages(457);
console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
console.log(potter.getAuthor());
console.log(potter.getTitle());
console.log(potter.getPages());
console.log("<<--------------------------->>");
//<> exercise N3
console.log("exercise N3");
class Car {
  constructor(brand, model, year) {
    this.brand = brand;
    this.model = model;

    this.year = year;
  }
  getFullName() {
    return `Car is ${this.brand} ${this.model}`;
  }
  setYear(newYear) {
    this.year = newYear;
  }
}

let bmw = new Car("BMW", "E46", "2003");
console.log(bmw.getFullName());
console.log(`Old year is: ${bmw.year}`);
bmw.setYear(2005);
console.log(`New year is: ${bmw.year}`);
console.log("<<--------------------------->>");
//<> exercise N4
console.log("exercise N4");
class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
  getArea() {
    return this.width * this.height;
  }
  getPerimeter() {
    return (this.width + this.height) * 2;
  }
  setWidth(newWidth) {
    this.width = newWidth;
  }
  setHeight(newHeight) {
    this.height = newHeight;
  }
}

let rect = new Rectangle(12, 7);
console.log(`Area: ${rect.getArea()}; Perimeter: ${rect.getPerimeter()}`);

rect.setHeight(7);
rect.setWidth(18);

console.log(
  `New Area: ${rect.getArea()}; New Perimeter: ${rect.getPerimeter()}`
);
console.log("<<--------------------------->>");
//<> exercise N5
console.log("exercise N5");
class User {
  constructor(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
  }
  getUsername() {
    return `Your username is: ${this.username}`;
  }
  setUsername(newUser) {
    this.username = newUser;
  }
  getPassword() {
    return `Your password is: ${this.password}`;
  }
  setPassword(newPassword) {
    this.password = newPassword;
  }
  getEmail() {
    return `Your email is: ${this.email}`;
  }
  setEmail(newEmail) {
    this.email = newEmail;
  }
}

let nika = new User("Nika123", "Nika123@gmail.com", "******");
console.log(nika.getEmail());
console.log(nika.getUsername());
console.log(nika.getPassword());
console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
nika.setPassword("++++++++");
nika.setUsername("Nick2299");
nika.setEmail("nika@gmail.com");
console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
console.log(nika.getEmail());
console.log(nika.getUsername());
console.log(nika.getPassword());
