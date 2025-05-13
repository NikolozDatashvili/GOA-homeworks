/// exercise N1
function comparison(a, b) {
  if (a > b) {
    return "comparison: " + true;
  } else if (b > a) {
    return "comparison: " + false;
  } else {
    return "Numbers are equal";
  }
}
console.log(comparison(10, 10));

//// exercise N2

function compare(num1, num2, num3) {
  if (num1 > num3 && num3 > num2) {
    return "compare: " + true;
  } else {
    return "compare: " + false;
  }
}

console.log(compare(5, 3, 4));

//<> exercise N3
function strCheck(str1, str2) {
  if (str1[0] == str2[0] && str1[1] == str2[1]) {
    return "STR check is " + true;
  } else {
    return "STR check is " + false;
  }
}

console.log(strCheck("firetruck", "finland"));

//\ exercise N4

function checkInput(input) {
  //<> თუ სიგრძე გააჩნია ესეიგი სტრინგია
  if (input.length !== undefined) {
    return input.length;
    //// თუ input true მნიშვნელობისაა ესეიგი ბულეანია
  } else if (input === true) {
    return "boolean is: " + 1;
    //// თუ input false მნიშვნელობისაა ესეიგი ბულეანია
  } else if (input === false) {
    return "boolean is: " + 0;
    //| თუ რიცხვთან ოპერაციები სრულდება მაშინ ესეიგი რიცხვია
  } else if (input + 1 === input + 1) {
    return input > 100;
    //* სხვა ტიპის შემოტანის შემთხვევაში მაგ: სიის
  } else {
    return "Unsupported type";
  }
}
//<> STR CHECK
console.log(checkInput("firetruck"));
//// BOOL CHECK
console.log(checkInput(10 > 5));
//// BOOL CHECK
console.log(checkInput(10 < 2));
//| INT CHECK
console.log(checkInput(124));
//| INT CHECK
console.log(checkInput(24));
//* OTHER TYPE CHECK
console.log(checkInput([1, 2, 3]));
