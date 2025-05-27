//<> exercise N1
//// Map-ის გამოყენებით გადაუყევით array-ის და
//// იმ შემთვხვევაში თუ array-ში აღმოჩნდება სტრინგი,
//// ჩაანაცველთ იგი true-თი, სხვა შემთხვევაში false.

let arrNum = [12, false, 98, "hi", true, "No"];

let stringCatcher = (elem) => {
  if (elem === String(elem)) {
    return true;
  } else {
    return false;
  }
};
let boolArr = arrNum.map(stringCatcher);
console.log(boolArr);

//<> exercise N2
//// Filter-ის გამოყენებით გადაუყევით array-ის სადაც გამოცდის
//// ქულები იქნება მოცემული და დააბრუნეთ მხოლოდ ის, რომელიბ 70-ზე მეტია.

let examResults = [100, 23, 55, 89, 12, 75, 96];
let graderFunc = (grade) => {
  if (grade > 70) return grade;
};

let filteredResults = examResults.filter(graderFunc);
console.log(filteredResults);

//<> exercise N3
//// შეეცადეთ Reduce-ის გამოყენებით დათვალოთ, თუ რამდენჯერ გვხვდება ესა-თუ-ის ელემენტი array-ში.

let elemArr = [12, 54, 35, "hi", 22, true, "hi", true, true, "hi", 22, "hi"];

/// acc არის ობიექტი, რომელიც ინახავს ელემენტების რაოდენობას,
/// curr არის მასივის მიმდინარე ელემენტი.
/// acc[curr] ნიშნავს ელემენტის რაოდენობას ობიექტში.

let elemCounter = (acc, curr) => {
  if (acc[curr]) {
    //| თუ ობიექტში ასეთი ელემენტი უკვე არსებობს,
    //| მისი რაოდენობა 1-ით იზრდება
    acc[curr]++;
  } else {
    //\ თუ ასეთი ელემენტი ჯერ არ არსებობს,
    //\ ობიექტში ჩაიწერება და მის მნიშვნელობა იქნება 1
    acc[curr] = 1;
  }

  return acc;
};

/// reduce-ის საშუალებით მასივი გარდაიქმნება ობიექტად,
/// რომელიც ითვლის რამდენჯერ გვხვდება თითოეული ელემენტი
let countMap = elemArr.reduce(elemCounter, {});
console.log(countMap);

//<> exercise N4
//// Reduce-ის გამოყენებით გამოითაველეთ მთელ array-ში მოცემული რიცხვების საშუალო არითმეტიკული

let numbers = [12, 453, 66, 87, 3, 675, 125];

let avarager = (prev, next) => {
  return (prev + next) / numbers.length;
};
let avarageOfNums = numbers.reduce(avarager);
console.log(`This is rounded avarage: ${avarageOfNums.toFixed(0)}`);
console.log(`This is avarge without floating part: ${parseInt(avarageOfNums)}`);
//! ხელით გაკეთებული ფუნცქიები:
console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
//<> manual_map
let manualMap = (arr, func) => {
  let result = [];
  for (let i of arr) {
    result.push(func(i));
  }
  return result;
};

let newArr = manualMap(arrNum, stringCatcher);
console.log(newArr);
//<> myFIlter

let myFIlter = (arr, condition) => {
  let result = [];
  for (let i of arr) {
    if (condition(i)) {
      result.push(i);
    }
  }
  return result;
};
let myFilterResults = myFIlter(examResults, graderFunc);
console.log(myFilterResults);
//<> myReduce

let myReduce = (arr, func, storeType) => {
  let acc = storeType;
  for (let i = 0; i < arr.length; i++) {
    acc = func(acc, arr[i], i, arr);
  }
  return acc;
};

let myReduceResult = myReduce(numbers, avarager, []);

console.log(`This is rounded avarage: ${myReduceResult.toFixed(0)}`);
console.log(
  `This is avarge without floating part: ${parseInt(myReduceResult)}`
);
