function passVal() {
  /// მომხმარებლის მიერ შემოყვანილი პაროლი
  let password = document.getElementById("password").value;
  let chkBox = document.getElementById("checkbox");
  let email = document.getElementById("email").value;
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
  for (let i = 0; i < email.length; i++) {
    if (email[i] === " ") {
      //\ ამ statement-ის არ დაკმაყოფილების შემთხვევაში გამოჩნდება ტექსტი
      message.style.color = "#8b1c00";
      message.textContent = "Email mustn't contain spaces";
      return;
    }
  }
  //| ვალიდური სიმბოლოების ცვლადი
  const validChars =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-._";
  //* ვამოწმებთ პაროლში არსებულ სიმბოლოებს შეესაბამება
  //* თუ არა ვალიდურ სიმბოლოებს
  for (let i = 0; i < password.length; i++) {
    if (!validChars.includes(password[i])) {
      message.style.color = "#8b1c00";
      message.textContent =
        "Password must only contain numbers, letters, -, . or _ ";
      return;
    }
  }
  //// ცვლადი იმეილის ტიპისთვის
  let domain = "";
  //// at (@) სიმბოლოს
  let atFound = false;

  for (let i = 0; i < email.length; i++) {
    if (atFound) {
      domain += email[i]; //// @ სიმბოლოს შემდეგ ასოების მიღება domain-ის (იმეილის ტიპის) ფორმირებისთვის
    } else if (email[i] === "@") {
      atFound = true; //// სიმბოლო ნაპოვნია
    }
  }
  //// თუ @ სიმბოლო არ არის input-ში
  if (!atFound) {
    message.style.color = "#8b1c00";
    message.textContent = "Invalid email format";
    return;
  }
  //// chekbox-ის შემოწმება
  if (!chkBox.checked) {
    message.style.color = "#8b1c00";
    message.textContent = "Please check the box";
    return;
  }

  /// იმეილის ტიპის (domain-ის) შემოწმება
  if (domain !== "gmail.com" && domain !== "yahoo.com") {
    message.style.color = "#8b1c00";
    message.textContent = "Email must be Gmail or Yahoo";
    return;
  }

  //// თუ პაროლი და მეილი სწორია გამოიტანს ამ ტექსტს
  message.style.color = "#eee8a9";
  message.textContent = "Password and Email Saved";
  console.log("Validation passed, redirecting...");
  //* შემდეგ გვერდზე გადასვლის დილეი
  setTimeout(function () {
    window.location.href = "coders.html";
  }, 1000);
}

//<> რადიოს ღილაკები
let radBtn1 = document.getElementById("radBtn1");
let radBtn2 = document.getElementById("radBtn2");
let radBtn3 = document.getElementById("radBtn3");
//<> რადიოს ტექსტები
let radTxt1 = document.getElementById("radTxt1");
let radTxt2 = document.getElementById("radTxt2");
let radTxt3 = document.getElementById("radTxt3");

//\ I რადიოს დაკლიკების მერე თუ II-ს დავაჭერთ
//\ I დაუბრუნდება საწყის მდგომარეობას ანუ display none-ს
document.addEventListener("click", () => {
  radTxt1.style.display = "none";
  radTxt2.style.display = "none";
  radTxt3.style.display = "none";
  //| რადიოზე დაჭერისას გამოჩნდება ტექსტი
  if (radBtn1.checked) {
    radTxt1.style.display = "block";
  } else if (radBtn2.checked) {
    radTxt2.style.display = "block";
  } else if (radBtn3.checked) {
    radTxt3.style.display = "block";
  }
});
