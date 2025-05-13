//// exercise N1
function summary(a, b) {
  return a + b;
}

console.log("Summary result: " + summary(2, 3));

/// exercise N2

function greet(name) {
  return `Hello ` + name;
}

console.log(greet("Nika"));
//\ exercise N3
function randomNumber() {
  return Math.random();
}

console.log(randomNumber());

//| exercise N4

function multiply(a, b, c) {
  return a * b * c;
}

console.log("Multiplication result: " + multiply(12, 33, 4));

//* exercise N5

function greetWithDefault(name = "Stranger") {
  return "Hello, " + name + "!";
}

console.log(greetWithDefault());

//! exercise N6
function square(x) {
  return x ** 2;
}
console.log("The result of the function is: " + square(5));

//<> exercise N7

function capitalize(str) {
  return str[0].toUpperCase() + str.slice(1);
}

console.log(capitalize("hello"));

//// exercise N8

function sumArray() {
  const arr = [15, 23, 12, 65, 1];
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}
console.log("The sum of the array is: " + sumArray());

/// exercise N9

function add(a, b) {
  return a + b;
}

console.log("The summary is : " + add(2, 3));

function doubleAdd() {
  return add(add(2, 3), add(2, 3));
}

console.log("The summary is : " + doubleAdd());

//\ exercise N10

function isEven(number) {
  return number % 2 === 0;
}

console.log("IS EVEN => " + isEven(9));
