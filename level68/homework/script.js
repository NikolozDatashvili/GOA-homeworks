// //<> exercise N1

// function txtCheck() {
//   let inputs = [];
//   let isUnique = true;
//   while (isUnique) {
//     let input = prompt("Please enter text: ");
//     for (let i = 0; i < inputs.length; i++) {
//       if (inputs[i] === input) {
//         isUnique = false;
//         break;
//       }
//     }
//     if (isUnique) {
//       inputs.push(input);
//     }
//   }
// }

// txtCheck();

//<> exercise N2

// function onlyZeroes(num) {
//   let numStr = num.toString();
//   while (true) {
//     let isOnlyZeroes = true;
//     for (let i = 1; i < numStr.length; i++) {
//       if (numStr[i] !== "0") {
//         isOnlyZeroes = false;
//         break;
//       }
//     }
//     if (isOnlyZeroes) {
//       break;
//     }
//     num++;
//     numStr = num.toString();
//   }
//   return num;
// }

// console.log(onlyZeroes(782));

//<> exercise N3

function passValidation() {
  let password = "HereWeAre";
  while (true) {
    let userInput = prompt("Please enter password: ");
    if (password !== userInput) {
      console.log("Please try again");
    } else {
      console.log("Password is correct");
      break;
    }
  }
}
passValidation();
