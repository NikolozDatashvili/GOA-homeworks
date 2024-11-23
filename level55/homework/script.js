function passVal() {
  /// მომხმარებლის მიერ შემოყვანილი პაროლი
  let password = document.getElementById("password").value;

  //// ვალიდაციის მესიჯი
  let message = document.getElementById("message");
  //<> ამოწმებს არის თუ არა პაროლის სიგრძე 4-სა და 12-ს შორის
  if (password.length < 4 || password.length > 12) {
    //\ if-ის არ დაკმაყოფილების შემთხვევაში გამოჩნდება ტექსტი
    message.style.color = "#8b1c00";
    message.textContent = "Password mustn't be empty";
    return;
  }
  //| პაროლში space-ების შემოწმება
  for (let i = 0; i < password.length; i++) {
    if (password[i] === " ") {
      //\ ამ statement-ის არ დაკმაყოფილების შემთხვევაში გამოჩნდება ტექსტი
      message.style.color = "#8b1c00";
      message.textContent = "Password mustn't contain spaces";
      return;
    }
  }
  //| ვალიდური სიმბოლოების ცვლადი
  const validChars =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-._";
  //* ვამოწმებთ პაროლში არსებულ სიმბოლოებს შეესაბამება თუ არა
  //* ვალიდურ სიმბოლოებს
  for (let i = 0; i < password.length; i++) {
    if (!validChars.includes(password[i])) {
      message.style.color = "#8b1c00";
      message.textContent =
        "Password must only contain numbers, letters, -, . or _ ";
      return;
    }
  }
  //// თუ პაროლი სწორია გამოიტანს ამ ტექსტს
  message.style.color = "#eee8a9";
  message.textContent = "Password Saved";
}

/// შემთხვევითი პაროლის ფუნქცია
function generatePassword() {
  //// ვალიდური სიმბოლოები
  const allowedChars =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-._";
  //<> შემთხვევითი პაროლის შექმნა, სიგრძე (4-დან 12 სიმბოლომდე)
  const length = Math.floor(Math.random() * 9) + 4; //\ შემთხვევითი სიგრძე( 4-დან)
  let password = "";
  //| for loop პაროლის შესაქმნელად
  for (let i = 0; i < length; i++) {
    //* შემთხვევით ინდექსზე მყოფი სიმბოლოს შერჩება
    const randomIndex = Math.floor(Math.random() * allowedChars.length);
    //! პაროლში ამატებს სიმბოლოებს 12-მდე
    password += allowedChars[randomIndex];
  }
  //// შემთხვევით პაროლს გამოიტანს ინფუთში
  document.getElementById("password").value = password;
}
