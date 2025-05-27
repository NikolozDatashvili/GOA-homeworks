//// void-სა და return ფუნქციებს შორის განსხვავება არის ის, რომ
//// void ფუნქცია არ გვიბრუნებს ამიტომ მის შენახვას არანაირი აზრი არ აქვს
//// ეს ფუნქციები ასრულებენ რაღაც მოქმედებას მაგრამ არ ინახავენ მნიშვნელობას
//// return ფუნქცია კი გვიბრუნებს მნიშვნელობას ფუნცქიიდან გამომდინარე
//// რომელთა შენახვაც შეგვიძლია მომავალში გამოსაყენებლად

//// js-ში ჩაშენებული void ფუნქციის მაგალითი
//<> foreach
//* foreach-ი აბრუნებს undefined-ს  არაფერს მხოლოდ კონსოლში გამოაქვს
//* ელემენტს დამატებული თავისი თავი

let arr = [31, 124, "hi", "dag", true];

arr.forEach((el) => {
  console.log(el + el);
});
//// js-ში ჩაშენებული return ფუნქციის მაგალითი
/// map-ი გვიბრუნებს ახალ მასივს იგივე სიგრძით
let newArr = arr.map((el) => {
  return el + el;
});

console.log(newArr);
console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");

//<>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//<>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//<>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

//<> Exercise N8
const users = [
  { firstName: "Ana", lastName: "Kiknadze" },
  { firstName: "Giorgi", lastName: "Maisuradze" },
  { firstName: "Nino", lastName: "Kalandadze" },
];

let nameMerger = (user) => {
  return `${user.firstName} ${user.lastName}`;
};

let newUsers = users.map(nameMerger);
console.log(newUsers);

//<> Exercise N9
const cart = [
  { name: "Laptop", price: 1200, quantity: 1 },
  { name: "Mouse", price: 50, quantity: 2 },
  { name: "Keyboard", price: 80, quantity: 1 },
];

let totalCalc = cart.reduce((total, item) => {
  return total + item.price * item.quantity;
}, 0);

console.log(totalCalc);
