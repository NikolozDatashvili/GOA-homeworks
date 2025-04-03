//<> exercise N1
//<> age check
// let userInput = prompt("Please enter your age: ");

// let output = userInput > 18 ? "You are legal" : "You are under 18";

// console.log(output);

//<> exercise N2

function numCompare(num1, num2) {
  let output =
    num1 > num2
      ? `${num1} > ${num2}`
      : num1 < num2
      ? `${num1} < ${num2}`
      : `Equal`;
  return output;
}
console.log(numCompare(1, 5));
console.log(numCompare(5, 5));
console.log(numCompare(11, 5));

//<>Fake Binary
function fakeBin(x) {
  let str = "";
  for (let i = 0; i < x.length; i++) {
    let intX = parseInt(x[i]);
    intX >= 5 ? (str += "1") : (str += "0");
  }
  return str;
}
