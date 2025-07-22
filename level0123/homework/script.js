//<> exercise N1

function calculate(a, b, callBack) {
  return callBack(a, b);
}

let sum = (x, y) => x + y;
let mult = (x, y) => x * y;

console.log(calculate(12, 53, sum));
console.log(calculate(2, 53, mult));

//<> exercise N2

function mainFunc(arr, callBack) {
  return callBack(arr);
}
let sorter = (arr1) => {
  let newArr = [];
  for (i of arr1) {
    if (i > 10) {
      newArr.push(i);
    }
  }
  return newArr;
};
let mainArr = [12, 35, 3, 56, 4];
console.log(mainFunc(mainArr, sorter));

//<> exercise N3

function costumMap(arr, callBack) {
  return callBack(arr);
}

let multiplier = (arr) => {
  let newArr = [];
  arr.forEach((element) => {
    newArr.push(element * 2);
  });
  return newArr;
};

console.log(costumMap(mainArr, multiplier));

//<> exercise N4
function firstFunc(second) {
  setTimeout(() => {
    console.log("ნაბიჯი 1");
    second();
  }, 1000);
}

function secondFunc(third) {
  setTimeout(() => {
    console.log("ნაბიჯი 2");
    third();
  }, 1000);
}

function thirdFunc() {
  setTimeout(() => {
    console.log("ნაბიჯი 3");
  }, 1000);
}

firstFunc(() => secondFunc(thirdFunc));
