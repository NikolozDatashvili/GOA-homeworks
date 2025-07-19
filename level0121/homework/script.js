//<> exercise N1
//// Remove String Spaces
function noSpace(x) {
  let result = "";
  for (let char of x) {
    if (char != " ") {
      result += char;
    }
  }
  return result;
}

//<> exercise N2
//// Abbreviate a Two Word Name
function abbrevName(name) {
  let [first, last] = name.split(" ");
  return `${first[0].toUpperCase()}.${last[0].toUpperCase()}`;
}

//<> exercise N3
function doubleInteger(i) {
  return i * 2;
}

//<> exercise N4
//// Get the Middle Character
function getMiddle(s) {
  let res = "";
  if (s.length % 2 == 0) {
    res = s[Math.floor(s.length / 2) - 1] + s[Math.floor(s.length / 2)];
  } else {
    res = s[Math.floor(s.length / 2)];
  }
  return res;
}
