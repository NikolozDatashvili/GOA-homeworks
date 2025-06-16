//<> exercise N1
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  introduce() {
    console.log(`My name is ${this.name} i am ${this.age} years old`);
  }
}

//<> exercise N2

class Calculator {
  constructor(a, b) {
    this.a = a;
    this.b = b;
  }
  add() {
    return this.a + this.b;
  }
  substract() {
    return this.a - this.b;
  }
  multiply() {
    return this.a * this.b;
  }
  divide() {
    if (this.b !== 0) {
      return this.a / this.b;
    } else {
      return "Error, can't divide a number by zero";
    }
  }
}
let nums = new Calculator(22, 55);
let nums1 = new Calculator(22, 0);

console.log(
  `Sum: ${nums.add()}; substraction: ${nums.substract()}; multiplication: ${nums.multiply()}; division: ${nums.divide()}`
);
console.log(
  `Sum: ${nums1.add()}; substraction: ${nums1.substract()}; multiplication: ${nums1.multiply()}; division: ${nums1.divide()}`
);

//<> exercise N3

class Book {
  constructor(author, title) {
    this.author = author;
    this.title = title;
  }
}

class Library {
  constructor() {
    this.books = [];
  }

  addBook(book) {
    this.books.push(book);
  }

  listBooks() {
    this.books.forEach((book) => {
      console.log(`${book.title} by ${book.author}`);
    });
  }
}
let potter = new Book("J.K. Rowling", "Harry Potter");
let mazeRunner = new Book("James Dashner", "Maze runner");

let library = new Library();

library.addBook(potter);
library.addBook(mazeRunner);
library.listBooks();

//<> exercise N4

class Animal {
  constructor(name) {
    this.name = name;
  }
  makeSound() {
    console.log(`${this.name} makes sound`);
  }
}
class Dog extends Animal {
  bark() {
    console.log(`${this.name} barks`);
  }
}

let dog = new Dog("Pango");

dog.bark();

//<> exercise N5

class User {
  constructor(username) {
    this.username = username;
  }
  login() {
    console.log(`${this.username} has been authorized`);
  }
}

class Admin extends User {
  deleteUser(user) {
    console.log(`${user} has been deleted`);
  }
}

let user1 = new User("PEPITO");
let admin1 = new Admin("Admin");
admin1.login();
user1.login();
admin1.deleteUser("PEPITO");
