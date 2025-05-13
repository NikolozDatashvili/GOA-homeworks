//<> exercise N1

function person(name, age, height, id) {
  this.name = name;
  this.age = age;
  this.height = height + "cm";
  this.id = id;
}

let person1 = new person("nika", 17, 178, "P1");
let person2 = new person("mari", 17, 167, "P2");
let person3 = new person("gio", 23, 187, "P3");

console.log(person1);
console.log(person2);
console.log(person3);

//<> exercise N2

function carConstruct(name, year, engine, hp, color, owner) {
  this.name = name;
  this.year = year;
  this.engine = engine + "L";
  this.hp = hp + "hp";
  this.color = color;
  this.owner = owner;
}

let car1 = new carConstruct("BMW", 2003, 2, 175, "black", person1);
let car2 = new carConstruct("Lexus", 2020, 3, 324, "silver", person2);
let car3 = new carConstruct("Toyota", 2017, 2.5, 286, "navy Blue", person3);

console.log(car1);
console.log(car2);
console.log(car3);
