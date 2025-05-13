// //<> exercise N1

function carConstruct(brand, model, year, engine) {
  this.brand = brand;
  this.model = model;
  this.year = year;
  this.engine = engine + "L";
}

let bmw = new carConstruct("BMW", "M3 e46", 2003, "2.0");
let lexus = new carConstruct("Lexus", "es 300h", 2020, 2.5);
let mustang = new carConstruct("Ford Mustang", "GT Fastback", 2024, "V8 5.0");

console.log(bmw);
console.log(lexus);
console.log(mustang);

//<> exercise N2
/// carnivore => ხორცის მჭამელი
/// herbivore => მცენარის მჭამელი
/// omnivore => ხორცის და მცენარის მჭამელი
function animalConstruct(name, carnivore, herbivore, omnivore) {
  this.name = name;
  this.carnivore = carnivore;
  this.herbivore = herbivore;
  this.omnivore = omnivore;
}

let lion = new animalConstruct("Lion", true, false, false);
let elephant = new animalConstruct("Elephant", false, true, false);
let bear = new animalConstruct("Bear", false, false, true);

console.log(lion);
console.log(elephant);
console.log(bear);

//<> exercise N3

function studentConstract(fullName, grade, birth, id) {
  this.fullName = fullName;
  this.grade = grade;
  this.birth = `year: ${birth.slice(0, 4)}, month: ${birth.slice(
    5,
    7
  )}, day: ${birth.slice(8, 10)}`;
  this.id = id;
}

let gio = new studentConstract(
  "Giorgi Kochorashvili",
  "12th",
  "2007 22 05",
  1455
);
let nika = new studentConstract(
  "Nikoloz Mekvabrishvili",
  "9th",
  "2010 12 09",
  1456
);
let nuca = new studentConstract(
  "Nuca Mirianashvili",
  "11th",
  "2008 05 11",
  1457
);

console.log(gio);
console.log(nika);
console.log(nuca);
