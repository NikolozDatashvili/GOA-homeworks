// /// exrcise N1
// function myFunc(num) {
//   if (num % 2 == 0 && num > 10) {
//     console.log("Number is even and higher than 10");
//   } else if (num % 2 !== 0 && num < 5) {
//     console.log("Number is odd and lower than 5");
//   } else if (num > 20 || num < 5) {
//     console.log("Number is higher than 20 or lower than 5");
//   } else if (num < 10 && num > 5) {
//     console.log("Number isn't higher than 10 and lower than 5");
//   }
// }

// myFunc(12);
// myFunc(3);
// myFunc(24);
// myFunc(7);

// /// exercise N2

// function ageCheck() {
//   let age = prompt("შეიყვანეთ ასაკი: ");
//   let agreed = prompt("შეიყვანეთ true ან false: ");
//   while (agreed !== "true" && agreed !== "false") {
//     console.log("შეცდომაა. გთხოვთ, შეიყვანოთ მხოლოდ true ან false.");
//     agreed = prompt("შეიყვანეთ true ან false: ");
//   }
//   if (age >= 18) {
//     console.log("თქვენ სრულწლოვანი ხართ");
//   } else if (age < 18 && agreed == "true") {
//     console.log("თქვენ შეგიძლიათ გამოიყენოთ ეს სერვისი");
//   } else {
//     console.log("თქვენ ვერ გამოიყენებთ ამ სერვისს");
//   }
// }

// ageCheck();

//// BONUS

function triangleCheck(a, b, c) {
  if (a + b > c && a + c > b && b + c > a && a > 0 && b > 0 && c > 0) {
    console.log("ეს სამი გვერდი შეიძლება წარმოადგენდეს სამკუთხედს");
  } else {
    console.log("ეს სამი გვერდი არ შეიძლება წარმოადგენდეს სამკუთხედს");
  }
}
triangleCheck(4, 2, 3);
