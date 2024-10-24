let name1 = document.getElementById("name");

let userInput = prompt("Please enter your name: ");

name1.textContent = userInput;
name1.style.textAlign = "right";

function myFunc() {
  let text = document.getElementById("txt1").value;
  let header2 = document.getElementById("h2");

  header2.textContent = " " + text;
}
