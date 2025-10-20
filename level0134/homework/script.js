//<> Task 1
const users = [
  { name: "Giga", age: 20, score: 50 },

  { name: "Tiko", age: 22, score: 90 },
  { name: "Nino", age: 25, score: 80 },
];

function topScorers(users, minScore) {
  let scoreArr = [];
  for (obj of users) {
    for (key in obj) {
      if (key == "score" && obj[key] >= minScore) {
        scoreArr.push(obj["name"]);
      }
    }
  }
  return scoreArr.sort();
}
console.log(topScorers(users, 35));

//<> Task 2

function flattenArray(arr) {
  let result = [];
  for (let i of arr) {
    if (Array.isArray(i)) {
      result = result.concat(flattenArray(i));
    } else {
      result.push(i);
    }
  }
  return result;
}
let arr1 = [1, [2, [3, 4], 5], 6];
console.log(flattenArray(arr1));
