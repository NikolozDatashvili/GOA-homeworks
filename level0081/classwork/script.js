//<> DO I GET BONUS?
function bonusTime(salary, bonus) {
  if (bonus == true) {
    return `£${salary * 10}`;
  } else {
    return `£${salary}`;
  }
}
console.log(bonusTime(300, true));
console.log(bonusTime(550, false));

//<> TESTING 1-2-3

var number = function (array) {
  let result = [];

  for (let i = 0; i < array.length; i++) {
    result.push(`${i + 1}: ${array[i]}`);
  }
  return result;
};
console.log(number(["a", "b", "c"]));

//<> SUM MIXED ARRAYS

function sumMix(x) {
  let sum = 0;
  for (let i = 0; i < x.length; i++) {
    x[i] = Number(x[i]);
    sum += x[i];
  }
  return `SUM: ${sum}`;
}
console.log(sumMix(["18", 22, 14, "11"]));

//<> Highest profit wins
function minMax(arr) {
  let min = arr[0];
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
    if (arr[i] > max) {
      max = arr[i];
    }
  }

  return `Result: [Min:${min}, Max:${max}]`;
}
console.log(minMax([12, 3534, 65, 7, 2, 6363]));
