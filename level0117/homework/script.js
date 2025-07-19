let iphone = {
  model: "12pro",
  year: 2023,
  screenHz: 120,
};

let honor = {
  model: "8xb",
  year: 2024,
  screenHz: 120,
};

let samsung = {
  model: "S24+",
  year: 2024,
  screenHz: 120,
};

class Phone {
  constructor(model, year, screenHz) {
    this.model = model;
    this.year = year;
    this.screenHz = screenHz;
  }
}

let iphone12 = new Phone("12pro", 2023, 120);
console.log(iphone12);
console.log(iphone);

let hi = prompt("enter name");
console.log(hi);
