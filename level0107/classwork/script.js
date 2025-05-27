//<> exercise N1
//// გადმოგეცემათ array - ["Goa", "novatori", "step", "step"],
//// თქვენი დავალებაა გადაუყვეთ array-ს map ფუნქციით და იმ მნიშვნელობების ნაცვლად
//// რომელიც დიდი ასოთი იწყება ჩასვათ "Good", ხოლო პატარა ასოს შემთხვევაში "Bad".

let array = ["Goa", "novatori", "ItStep", "bitcamp"];

let filteredArr = array.map((academy) => {
  if (academy[0] == academy[0].toLowerCase()) {
    return (academy = "Bad");
  } else {
    return (academy = "Good");
  }
});

console.log(filteredArr);

//<> exercise N2
//// მოცემულია რიცხვების მასივი - [11, 3, 1, 5, 6, 2, 0, 13].
//// გამოიყენეთ filter(), რომ დატოვოთ მხოლოდ 5-ზე მეტი რიცხვები.

let numArr = [11, 3, 1, 5, 6, 2, 0, 13];
let newArr = numArr.filter((x) => x > 5);
console.log(newArr);

//<> exercise N3
//// მოცემულია სტრინგების მასივი. გამოიყენე reduce(), რომ მოახდინო მათში კონკატენაცია (შეერთება).

let stringsArr = ["hi", "ppo", "po", "ta", "mus"];

let concater = (prev, next) => {
  return prev + next;
};

let concatedStr = stringsArr.reduce(concater);

console.log(concatedStr);
