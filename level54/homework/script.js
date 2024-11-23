// /// exercise N1

// let num1 = prompt("Enter first number");
// let num2 = prompt("Enter first number");
// let operation = prompt("Enter operation - or +");
// let sum = "+";
// let sub = "-";
// let display = document.getElementById("txt");

// if (operation === sum) {
//   let summary = num1 + num2;
//   display.textContent = summary;
// } else if (operation === sub) {
//   substract = num1 - num2;
//   display.textContent = substract;
// }

//// exercise N2 (mini-calculator)

function calc() {
  let num1 = parseFloat(document.getElementById("firstNum").value);
  let num2 = parseFloat(document.getElementById("secondNum").value);
  let operation = document.getElementById("operation").value.trim();
  let display = document.getElementById("txt");
  let sub = "-";
  let sum = "+";
  let div = "/";
  let mult = "*";
  display.textContent = "Result: ";
  if (operation === sub) {
    let substract = num1 - num2;
    display.textContent += substract;
  } else if (operation === sum) {
    let summary = num1 + num2;
    display.textContent += summary;
  } else if (operation === div) {
    let division = num1 / num2;
    display.textContent += division;
  } else if (operation === mult) {
    let multiplication = num1 * num2;
    display.textContent += multiplication;
  }
}
