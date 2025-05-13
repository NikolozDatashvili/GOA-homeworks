//<> exercise N1 (CarConstructor)

function carConstructor(brand, model, engineVol, year) {
  this.brand = brand;
  this.model = model;
  this.engineVol = engineVol + "L";
  this.year = year;
  this.fullInfo = fullInfo;
  function fullInfo() {
    if (year > 2016 && engineVol > 2) {
      console.log(`New and exellent ${brand}`);
    } else {
      console.log(`Old but gold ${brand}`);
    }
    return `(${this.brand}, ${this.model}, ${this.engineVol}, ${this.year})`;
  }
}

let rav4 = new carConstructor("Toyota", "Rav4", 2.5, 2017);
let e46 = new carConstructor("BMW", "M3 e46", "2.0", 2003);
let lexus = new carConstructor("Lexus", "ES 300H", 2.5, 2020);

console.log(rav4.fullInfo());
console.log();
console.log(e46.fullInfo());
console.log();
console.log(lexus.fullInfo());
console.log();

//<> exercise N2 (BookConstructor)

function bookConstructor(book, author, year, pages) {
  this.book = book;
  this.author = author;
  this.year = year;
  this.pages = pages;
  this.avaragePageRead = avaragePageRead;
  function avaragePageRead() {
    let result = this.pages / 7;
    return `Person should read about ${Math.round(
      result
    )} pages a day to finish ${book} in 7 days`;
  }
}

let sherlock = new bookConstructor(
  "Sherlock Holmes",
  "Arthur Conan Doyle",
  1887,
  1122
);

let mazeRunner = new bookConstructor(
  "The Maze Runner",
  "James Dashner",
  2009,
  372
);

console.log(sherlock.avaragePageRead());
console.log();
console.log(mazeRunner.avaragePageRead());
console.log();
//<> exercise N3

function sportsManCons(name, age, sport, dailyTrainTime) {
  this.name = name;
  this.age = age;
  this.sport = sport;
  this.dailyTrainTime = dailyTrainTime;
  this.goingPro = goingPro;

  function goingPro() {
    let result = dailyTrainTime + dailyTrainTime * (20 / 100);
    return `${name} will get better results in ${sport.toLowerCase()} if he trains for ${result.toFixed(
      1
    )} hours`;
  }
}

let yamal = new sportsManCons("Lamine", 17, "Football", 3);
let bolt = new sportsManCons("Usain", 18, "Sprinting", 5);

console.log(yamal.goingPro());
console.log();
console.log(bolt.goingPro());
