//<> exercise N1

let people = new Map([
  ["Giorgi", 25],
  ["Nino", 30],
  ["Lasha", 22],
]);

people.set("Giorgi", 26);

people.delete("Nino");

console.log(people);
//<> exercise N2
let books = new Map([
  ["Harry Potter", "J.K. Rowling"],
  ["Maze Runner", "James Dashner"],
  ["The Hunger Games", "Suzanne Collins"],
]);
for (let [book, author] of books) {
  console.log(`${book} - ${author}`);
}

//<> exercise N3
class Student {
  constructor(name, grade) {
    this.name = name;
    this.grade = grade;
  }
}

let students = new Map();
students.set(101, new Student("Maka", "A"));
students.set(102, new Student("Davit", "B"));
students.set(103, new Student("Sopo", "A+"));

for (let [id, student] of students) {
  console.log(`ID: ${id}, Name: ${student.name}, Grade: ${student.grade}`);
}

//<> exercise N4
class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
}

let products = new Map();
products.set("p1", new Product("Laptop", 1500));
products.set("p2", new Product("Phone", 800));
products.set("p3", new Product("Tablet", 600));

for (let [key, product] of products) {
  console.log(`${product.name} price: $${product.price}`);
}

//<> exercise N5
let text = "apple banana apple orange banana apple";
let wordCount = new Map();

let words = text.split(" ");

for (let word of words) {
  if (wordCount.has(word)) {
    wordCount.set(word, wordCount.get(word) + 1);
  } else {
    wordCount.set(word, 1);
  }
}

for (let [word, count] of wordCount) {
  console.log(`${word}: ${count}`);
}
