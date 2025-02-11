function leapYear(year) {
  let leapYearCalc = (year % 4 == 0 && year % 100 !== 0) || year % 400 == 0;

  if (leapYearCalc) {
    return `${year} is a leap year`;
  } else {
    let nextLeap = year + 1;
    while (
      !((nextLeap % 4 == 0 && nextLeap % 100 !== 0) || nextLeap % 400 == 0)
    ) {
      nextLeap++;
    }
    return `${year} is not a leap year, closest leap year: ${nextLeap}`;
  }
}

console.log(leapYear(2000));
console.log(leapYear(2100));
console.log(leapYear(2500));
console.log(leapYear(2400));
console.log();
console.log();

//<> exercise N2

function sumOfNumber(num) {
  let sum = 0;
  let strNum = String(num);
  let strLen = strNum.length;
  if (strLen < 3) {
    return `Wrong input, add ${3 - strLen} digit(s)`;
  } else if (strLen > 3) {
    return `Wrong input, remove ${strLen - 3} digit(s)`;
  }
  for (let i = 0; i < strLen; i++) {
    sum += Number(strNum[i]);
  }

  return sum;
}
console.log(sumOfNumber(576));
console.log(sumOfNumber(5760));
console.log(sumOfNumber(5));

console.log();
console.log();
//<> without built in methods
function sumOfNumber2(num) {
  let strNum = num + "";
  let strLen = strNum.length;
  if (strLen < 3) {
    return `Wrong input, add ${3 - strLen} digit(s)`;
  } else if (strLen > 3) {
    return `Wrong input, remove ${strLen - 3} digit(s)`;
  }
  let sum = 0;
  for (let i = 0; i < strLen; i++) {
    sum += strNum[i] - "0";
  }

  return sum;
}
console.log(sumOfNumber2(576));
console.log(sumOfNumber2(5760));
console.log(sumOfNumber2(7));


