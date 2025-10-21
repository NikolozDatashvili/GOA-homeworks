// //<> Task 1
// const users = [
//   { name: "Giga", age: 20, score: 50 },

//   { name: "Tiko", age: 22, score: 90 },
//   { name: "Nino", age: 25, score: 80 },
// ];

// function topScorers(users, minScore) {
//   let scoreArr = [];
//   for (obj of users) {
//     for (key in obj) {
//       if (key == "score" && obj[key] >= minScore) {
//         scoreArr.push(obj["name"]);
//       }
//     }
//   }
//   return scoreArr.sort();
// }
// console.log(topScorers(users, 35));

// //<> Task 2

// function flattenArray(arr) {
//   let result = [];
//   for (let i of arr) {
//     if (Array.isArray(i)) {
//       result = result.concat(flattenArray(i));
//     } else {
//       result.push(i);
//     }
//   }
//   return result;
// }
// let arr1 = [1, [2, [3, 4], 5], 6];
// console.log(flattenArray(arr1));
//<> Task 3

const removFalsy = (obj) => {
  let newObj = {};
  for (key in obj) {
    if (
      obj[key] != 0 &&
      obj[key] != null &&
      obj[key] != undefined &&
      obj[key] != false
    ) {
      newObj[key] = obj[key];
    }
  }
  return newObj;
};
let obj1 = {
  name: "nika",
  hasPet: false,
  age: 18,
  hasCar: null,
  isHuman: undefined,
  yachtCount: 0,
};
console.log(removFalsy(obj1));
//<> Task 4

const filterEvenNums = (arr) => {
  let newArr = [];
  for (num of arr) {
    if (num % 2 == 0) {
      newArr.push(num);
    }
  }
  return newArr;
};
console.log(filterEvenNums([1, 2, 3, 4, 5]));
//<> Task 5

const reverseWords = (str) => {
  let wordArr = str.split(" ");
  let revString = "";
  for (let i = wordArr.length - 1; i >= 0; i--) {
    if (i == 0) {
      revString += wordArr[i];
    } else {
      revString += wordArr[i] + " ";
    }
  }
  return revString;
};

console.log(reverseWords("Hello world!"));
