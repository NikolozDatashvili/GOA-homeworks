//<> find multiples of number

function findMultiples(integer, limit) {
  let arr = [];
  let n = 1;
  while (integer * n <= limit) {
    arr.push(integer * n);
    n++;
  }
  return arr;
}

//<> Count of positives / sum of negatives

function countPositivesSumNegatives(input) {
  let count = 0;
  let sum = 0;
  if (input == null || input == false) {
    return [];
  }
  for (let i = 0; i < input.length; i++) {
    if (input[i] > 0) {
      count++;
    } else if (input[i] < 0) {
      sum += input[i];
    }
  }
  return [count, sum];
}

//<> Pole Vault Starting Marks

function startingMark(bodyHeight) {
  let m = (10.67 - 9.45) / (1.83 - 1.52);
  let b = 9.45 - m * 1.52;
  return Math.round((m * bodyHeight + b) * 100) / 100;
}

//<> Check same case

function sameCase(a, b) {
  if (
    a < "A" ||
    (a > "Z" && a < "a") ||
    a > "z" ||
    b < "A" ||
    (b > "Z" && b < "a") ||
    b > "z"
  ) {
    return -1;
  }
  if (
    (a >= "A" && a <= "Z" && b >= "A" && b <= "Z") ||
    (a >= "a" && a <= "z" && b >= "a" && b <= "z")
  ) {
    return 1;
  }
  return 0;
}

//<> Mumbling

function accum(s) {
  let result = "";
  for (let i = 0; i < s.length; i++) {
    let ch = s[i];
    let str = ch.toUpperCase();
    for (let j = 0; j < i; j++) {
      str += ch.toLowerCase();
    }
    result += (i > 0 ? "-" : "") + str;
  }
  return result;
}
