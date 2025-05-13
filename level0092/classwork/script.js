// //<> exercise N1
// let input = prompt("Please enter number ");

// let output = input % 2 == 0 ? "two" : input;

// console.log(output);
// //<> exercise N2
// let input1 = prompt("Please enter number ");

// let output1 = input1 % 2 == 0 ? input1 * 8 : input1 * 9;

// console.log(output1);
//<> exercise N3
// function checkNum(num) {
//   let output2 = num > 0 ? "Positive" : "Negative";
//   return output2;
// }
// console.log(checkNum(15));
// console.log(checkNum(-15));

function func(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

console.log(func([12, 41, 54, 145, 12, "gsa"]));
