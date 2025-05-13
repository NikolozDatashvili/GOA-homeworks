//<> exercise N1
//// Exclusive "or" (xor) Logical Operator

function xor(a, b) {
  if (a === true && b === true) {
    return false;
  } else if (a === true || b === true) {
    return true;
  } else if (a === false && b === false) {
    return false;
  }
}

//<> exercise N2
//// Get Nth Even Number

function nthEven(n) {
  return (n - 1) * 2;
}

//<> exercise N3
//// Grasshopper - Terminal game combat function
function combat(health, damage) {
  if (health - damage >= 0) {
    return health - damage;
  } else {
    return 0;
  }
}
//<> exercise N4
//// What's the real floor?
function getRealFloor(n) {
  if (n >= 13) {
    return n - 2;
  } else if (n > 0) {
    return n - 1;
  } else {
    return n;
  }
}
//<> exercise N5
//// Name Shuffler
function nameShuffler(str) {
  let firstName = "";
  let lastName = "";
  let foundSpace = false;
  for (let i = 0; i < str.length; i++) {
    if (!foundSpace) {
      if (str[i] === " ") {
        foundSpace = true;
      } else {
        firstName += str[i];
      }
    } else {
      lastName += str[i];
    }
  }
  return lastName + " " + firstName;
}
