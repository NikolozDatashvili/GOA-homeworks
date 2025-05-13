let input = prompt("Enter your text: ");
let nonValid = "1234567890!@#$%^&*()_+-=";

//* ტექსტის ვალიდურობა
let isValid = true;

//// გადავუყვეთ შემოტანილ ტექსტს
for (let i = 0; i < input.length; i++) {
  //// გადავუყვეთ არასასურველ სიმბოლოებს ტექსტს
  for (let j = 0; j < nonValid.length; j++) {
    //<> თუ სიმბოლოები დაემთხვა მაშინ გამოიტანს error-ს და
    //<> იმ ინდექსს (ებს) რომელზეც იყო არასასურველი სიმბოლო
    if (input[i] === nonValid[j]) {
      console.log(
        "ERROR: Invalid character found at index " + i + `(Symbol: ${input[i]})`
      );

      isValid = false; //| ტექსტის ვალიდურობა false
      break; //\ გავიდე შიდა ლუპიდან რომ შევამოწმოთ შემდეგი სიმბოლო
    }
  }
}

//// თუ ტექსტი ვალიდურია
if (isValid) {
  console.log("The text is valid.");
}
