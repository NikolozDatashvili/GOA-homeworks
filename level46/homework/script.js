/// შევქმენი ცვლადი name1 და მივწვდი name id-ის მქონე
let name1 = document.getElementById("name");

/// შევქმენი მეორე ცვლადი რომ მომხმარებელმა
/// შემოიტანოს საკუთარი სახელი
let userInput = prompt("Please enter your name: ");

//// მომხმარებლის შემოტანილ სახელს(ტექსტს) გამომაქვს გვერდის მარჯვენა ზედა კუთხეში
name1.textContent = userInput;
name1.style.textAlign = "right";

//// ფონტის ზომა 100px
name1.style.fontSize = "100px";
name1.style.marginTop = "0";

///<> დამატების ფუნქცია
//// საწყისი ციფრი არის 0
let currentNum = 0;

function adder() {
  //// მივწვდი input ელემენტის მნიშვნელობას
  let inputNumber = document.getElementById("userInput").value;
  //<> მიმდინარე ნაჩვენებ რიცხვს დაკლიკებისას დაემატება შემოტანილი რიცხვი
  currentNum += Number(inputNumber);
  /// მივწვდი იმ ელემნტს რომელიც გვერდზე გამომაქვს რეზულტატებს
  /// როგორც კი რომელიმე ღილაკზე დავაკლიკებთ იმ წამსვე ახალ რეზულტატს გვაჩვენებს
  document.getElementById("displayNum").innerText = currentNum;
}

function substracter() {
  let inputNumber = document.getElementById("userInput").value;
  //<> მიმდინარე ნაჩვენებ რიცხვს გამოაკლდება შემოტანილი რიცხვი
  currentNum -= Number(inputNumber);

  document.getElementById("displayNum").innerText = currentNum;
}

function multiplier() {
  let inputNumber = document.getElementById("userInput").value;
  ///\ მიმდინარე ნაჩვენები რიცხვი გამრავლდება შემოტანილ რიცხვზე
  currentNum *= Number(inputNumber);

  document.getElementById("displayNum").innerText = currentNum;
}

function divider() {
  let inputNumber = document.getElementById("userInput").value;
  //<> მიმდინარე ნაჩვენები რიცხვი გაიყოფა შემოტანილ რიცხვზე
  currentNum /= Number(inputNumber);

  document.getElementById("displayNum").innerText = currentNum;
}
//// clearNum ფუნქცია აბრუნებს 0-ს და შლის ყველაფერს userInput-დან
function clearNum() {
  currentNum = 0;
  document.getElementById("displayNum").innerText = currentNum;
  document.getElementById("userInput").value = "";
}
