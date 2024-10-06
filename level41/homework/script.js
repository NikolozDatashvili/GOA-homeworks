//// exercise N1
function changeColor() {
  let text = document.getElementById("text");
  text.style.backgroundColor = "green";
  text.style.color = "white";
  text.style.fontSize = "30px";
}

changeColor();

/// exercise N2

function adjustText() {
  let styledText = document.getElementById("styledText");
  styledText.style.fontSize = "30px";
  styledText.style.fontWeight = "bold";
  styledText.style.fontStyle = "italic";
}

adjustText();

//\ exercise N3
function divWidth() {
  let div = document.getElementById("div");
  div.style.width = "100px";
  div.style.height = "100px";
  div.style.backgroundColor = "red";
  div.style.fontSize = "30px";
}

divWidth();

//| exercise N4
function background() {
  let changeImage = document.getElementById("backgroundImage");
  changeImage.style.backgroundImage = "url(image1.png)";
}
background();

// ! exercise N5

function textAdd() {
  let adder = document.getElementById("textAppender");
  adder.innerText += " =>  ADDED TEXT";
  adder.style.fontSize = "30px";
}

textAdd();

// * exercise N6

let counter = 0;
function numberAdd() {
  let numInc = document.getElementById("increaseNumber");
  numInc.style.fontSize = "30px";

  numInc.innerText = +counter;
  counter++;
}
numberAdd();
//// exercise N7
function moveRight() {
  var div = document.getElementById("movable"); // Get the div
  div.style.left = div.offsetLeft + 20 + "px"; // Move it right by 20px
}
/// exercise N8

function textChange() {
  let txtChange = document.getElementById("contentContainer");
  txtChange.innerHTML = "TEXT HAS BEEN CHANGED";
}

textChange();
///| execise N9
function appearFunc() {
  let appear = document.getElementById("hiddenDiv");
  appear.style.display = "block";
}
