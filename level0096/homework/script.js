//<> Exercise N1
//// Count Odd Numbers below n

function oddCount(n) {
  return n % 2 == 0 ? n / 2 : (n - 1) / 2;
}
//<> Exercise N2
//// Small enough? - Beginner
function smallEnough(a, limit) {
  for (let i = 0; i < a.length; i++) {
    if (a[i] > limit) {
      return false;
    }
  }
  return true;
}
//<> Exercise N3
//// Categorize New Member

function openOrSenior(data) {
  let res = [];
  for (let i = 0; i < data.length; i++) {
    data[i][0] >= 55 && data[i][1] > 7 ? res.push("Senior") : res.push("Open");
  }
  return res;
}

//<> Exercise N4
//// Printer Errors

function printerError(s) {
  let colors = "abcdefghijklm";
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    let found = false;
    for (let j = 0; j < colors.length; j++) {
      if (s[i] === colors[j]) {
        found = true;
        break;
      }
    }
    if (!found) {
      count++;
    }
  }
  return `${count}/${s.length}`;
}

//<> Exercise N5
//// Fake Binary

function fakeBin(x) {
  let str = "";
  for (let i = 0; i < x.length; i++) {
    let intX = parseInt(x[i]);
    intX >= 5 ? (str += "1") : (str += "0");
  }
  return str;
}
