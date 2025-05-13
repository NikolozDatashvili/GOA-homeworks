//<> ლოგოების ღილაკები
let jsBtn = document.getElementById("javascript");
let cssBtn = document.getElementById("css");
let htmlBtn = document.getElementById("html");
let reactBtn = document.getElementById("react");
//// ლოგოს სურათი
let img = document.getElementById("image");

//<> js-ის სურათი
jsBtn.addEventListener("click", () => {
  img.src = "images/js.png";
});
//<> css-ის სურათი
cssBtn.addEventListener("click", () => {
  img.src = "images/css.png";
});
//<> react-ის სურათი
reactBtn.addEventListener("click", () => {
  img.src = "images/react.png";
});
//<> html-ის სურათი
htmlBtn.addEventListener("click", () => {
  img.src = "images/html.png";
});

//// კალკულატორის დარესეტების ღილაკი
let tryAgain = document.getElementById("tryAgain");
tryAgain.style.display = "none";
//// კალკულატორის გამოჩენის ღილაკი
let calcBtn = document.getElementById("calcButton");
//// კალკულატორის div-ი
let calcDiv = document.getElementById("calcDiv");
//// კალკულატორის სათაური
let calcH = document.getElementById("calcH1");

calcBtn.addEventListener("click", () => {
  calcDiv.style.display = "flex";
  calcDiv.style.backgroundColor = "#151922";
  calcDiv.style.justifyContent = "center";
  calcDiv.style.alignItems = "center";
  calcDiv.style.flexDirection = "column";
  calcDiv.style.gap = "2vw";
  calcDiv.style.opacity = "0";
  calcBtn.style.display = "none";
  calcH.style.display = "block";
  repeaterDiv.style.display = "none";
  repeaterH.style.display = "none";
  repeaterBtn.style.display = "block";
  tryAgain2.style.display = "none";

  setTimeout(() => {
    calcDiv.style.opacity = "1";
    calcDiv.style.transition = "opacity 0.8s";
  }, 10);
});

let sumBtn = document.getElementById("calculateBtn");
let firstNum = document.getElementById("firstNum");
let secondNum = document.getElementById("secondNum");
let thirdNum = document.getElementById("thirdNum");
let operator = document.getElementById("operator");

sumBtn.addEventListener("click", () => {
  let num1 = parseInt(firstNum.value);
  let num2 = parseInt(secondNum.value);
  let num3 = parseInt(thirdNum.value);

  if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
    calcDiv.textContent = "Please enter valid numbers!";
    tryAgain.style.display = "block";
    return;
  }

  let sum = num1 + num2 + num3;
  tryAgain.style.display = "block";

  calcDiv.textContent = "Result is: " + sum;
});

function resetCalc() {
  firstNum.value = "";
  secondNum.value = "";
  thirdNum.value = "";

  calcDiv.innerHTML = "<label for=''>Enter three numbers: </label>";
  calcDiv.appendChild(firstNum);
  calcDiv.appendChild(secondNum);
  calcDiv.appendChild(thirdNum);
  calcDiv.appendChild(sumBtn);

  calcDiv.style.display = "none";
  tryAgain.style.display = "none";
  calcDiv.style.display = "flex";
}
tryAgain.addEventListener("click", resetCalc);
let repeaterH = document.getElementById("repeaterH2");
let repeaterDiv = document.getElementById("txtRepeaterDiv");
let repeaterBtn = document.getElementById("txtRepeater");

let repeatBtn = document.getElementById("repeatBtn");
repeaterBtn.addEventListener("click", () => {
  //// კალკულატორის გასაქრობად
  calcDiv.style.display = "none";
  calcH.style.display = "none";
  calcBtn.style.display = "block";

  //// repeater-ის გამოსაჩენად
  repeaterH.style.display = "block";
  repeaterDiv.style.display = "flex";
  repeaterDiv.style.justifyContent = "center";
  repeaterDiv.style.alignItems = "center";
  repeaterDiv.style.flexDirection = "column";
  repeaterDiv.style.opacity = "0";

  //// repeat ღილაკის გასაქრობად
  repeaterBtn.style.display = "none";
  tryAgain.style.display = "none";
  setTimeout(() => {
    repeaterDiv.style.opacity = "1";
    repeaterDiv.style.transition = "opacity 0.8s";
  }, 10);
});

let tryAgain2 = document.getElementById("repeaterTryAgain");

let numInput = document.getElementById("quantityInput");
let txtInput = document.getElementById("textInput");
repeatBtn.addEventListener("click", () => {
  console.log(txtInput.value === "");
  console.log(!(!isNaN(numInput.value) && !isNaN(parseFloat(numInput.value))));
  console.log(txtInput.value);
  console.log(numInput.value);
  txtInput = document.getElementById("textInput");
  if (
    txtInput.value === "" ||
    !(!isNaN(numInput.value) && !isNaN(parseFloat(numInput.value)))
  ) {
    repeaterDiv.textContent = "Please enter valid info!";
    tryAgain2.style.display = "block";
    return;
  }
  tryAgain2.style.display = "block";
  repeaterDiv.textContent = `Result: ${txtInput.value.repeat(numInput.value)}`;
});

tryAgain2.addEventListener("click", () => {
  tryAgain2.style.display = "none";
  txtInput.value = "";
  numInput.value = "";

  repeaterDiv.textContent = "";
  repeaterDiv.innerHTML = `<p>Enter Text</p>`;
  repeaterDiv.appendChild(txtInput);
  repeaterDiv.innerHTML += `<p>Enter repeat quantity</p>`;
  repeaterDiv.appendChild(numInput);
  repeaterDiv.appendChild(repeatBtn);
});
