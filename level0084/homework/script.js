//<> find multiples of number

function findMultiples(integer, limit) {
  let arr = [];
  let n = 1;
  //// სანამ შემოტანილი რიცხვი ნაკლებია ლიმიტზე
  while (integer * n <= limit) {
    /// მასივში დაემატება ამ რიცხვის nზე ნამრავლი
    arr.push(integer * n);
    /// ყოველ იტერაციაზე n გაიზრდება
    n++;
  }
  return arr;
}

//<> Count of positives / sum of negatives

function countPositivesSumNegatives(input) {
  let count = 0;
  let sum = 0;
  //// თუ input ცარიელია ან უბრალოდ არ არსებობს
  if (input == null || input == false) {
    //// დააბრუნებს ცარიელ მასივს
    return [];
  }
  for (let i = 0; i < input.length; i++) {
    //// თუ ელემენტი ნულზე მეტია
    if (input[i] > 0) {
      //// ათვლა გაგრძელდება
      count++;
    } else if (input[i] < 0) {
      //// თუ ნაკლებია ჯამს დაემატება
      sum += input[i];
    }
  }
  return [count, sum];
}

//<> Pole Vault Starting Marks

function startingMark(bodyHeight) {
  //// m-ით გამოვსახავთ თუ რამდენად იცვლება დაწყების ნიშანი ადამიანის სიმაღლის მიხედვით
  let x = (10.67 - 9.45) / (1.83 - 1.52);
  //// 0 მეტრი სიმაღლის ადამიანისთვის. (ვთქვათ)
  let defMark = 9.45 - x * 1.52;
  //// დააუბრუნებს 100-ეულის სიზუსტით საწყისი ნიშნის დისტანციას
  return Math.round((x * bodyHeight + defMark) * 100) / 100;
}

//<> Check same case
//// Unicode-ის ცხრილის მიხედვით
///| uppercase => 65-90
///\ lowercase => 97-122
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
//<> Check same case
//// built-in მეთოდებით
function sameCase(a, b) {
  if (
    a.toUpperCase() === a.toLowerCase() ||
    b.toLowerCase() === b.toUpperCase()
  ) {
    return -1;
  } else if (
    (a === a.toLowerCase() && b === b.toLowerCase()) ||
    (a === a.toUpperCase() && b === b.toUpperCase())
  ) {
    return 1;
  } else {
    return 0;
  }
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
    result += str + "-";
  }
  return result.slice(0, -1);
}

