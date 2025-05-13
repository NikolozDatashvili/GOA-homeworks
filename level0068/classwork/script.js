while (true) {
  let input = prompt("Input 2 numbers or type exit to exit: ");

  if (input.toLowerCase() === "exit") {
    console.log("Thanks for participating");
    break;
  }
}
let numbers = input.split(" ");

let num1 = parseFloat(numbers[0]);
let num2 = parseFloat(numbers[1]);

let result = num1 * num2;
console.log(`Result: ${result}`);
