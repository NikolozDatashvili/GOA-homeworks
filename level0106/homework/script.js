//<> exercise N1
//// მოცემულია სახელების მასივი. გამოიყენე forEach,
//// რათა მხოლოდ ის სახელები დაბეჭდო, რომელთა სიგრძეც 5-ზე მეტია.
let names = ["nika", "luka", "nuca", "daviti", "liza"];

let myFunc = (item) => {
  if (item.length > 5) {
    console.log(item);
  }
};
names.forEach(myFunc);

//<> exercise N2
//// მოცემულია რიცხვების მასივი. გამოიყენე forEach, რომ შეადგინო ახალი მასივი მხოლოდ ლუწი რიცხვებით.

let numbers = [12, 453, 21, 46, 65, 88, 43];
let evens = [];
let evenArrMaker = (num) => {
  if (num % 2 == 0) {
    evens.push(num);
  }
};

numbers.forEach(evenArrMaker);
console.log(evens);

//<> exercise N3
//// მოცემულია ობიექტი, სადაც გასაღებებია პროდუქტების სახელები და მნიშვნელობები - მათი ფასები.
//// დაბეჭდე მხოლოდ ის პროდუქტები, რომელთა ფასი 10-ზე მეტია. გამოიყენე for...in.

let marketItems = {
  dogFood: 14,
  chips: 5,
  soda: 3,
  water: 1,
  proteinPowder: 22,
  chocolateBar: 7,
  cap: 12,
};
let highPriced = {};
for (let item in marketItems) {
  if (marketItems[item] > 10) {
    highPriced[item] = marketItems[item];
  }
}

console.log(highPriced);

//<> exercise N4
//// მოცემულია ობიექტი სტუდენტის ქულებით. დაითვალე რამდენი
//// საგანი აქვს სტუდენტს ჩაჭრილი (ქულა < 51). გამოიყენე for...in.

let subjects = {
  compScience: 95,
  math: 78,
  biology: 44,
  english: 98,
  physics: 77,
  geography: 34,
};
let count = 0;
for (let subject in subjects) {
  if (subjects[subject] < 51) {
    count++;
  }
}
console.log(`students failed: ${count} subject(s)`);
