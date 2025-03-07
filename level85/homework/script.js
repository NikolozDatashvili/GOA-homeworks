let tealSite = document.getElementById("teal");
let graySite = document.getElementById("gray");
let darkSite = document.getElementById("dark");
let bmwM5 = document.getElementById("bmwM5");
let bmwM3 = document.getElementById("bmwM3");
let lexusRc = document.getElementById("lexus");
let buttons = document.getElementsByTagName("button");
let body = document.getElementsByTagName("body");

tealSite.addEventListener("click", function () {
  for (let i = 0; i < body.length; i++) {
    body[i].style.backgroundColor = "#12899d";
    body[i].style.color = "cornsilk";
  }
  for (let j = 0; j < buttons.length; j++) {
    buttons[j].style.backgroundColor = "cornsilk";
    buttons[j].style.color = "#805a40";
  }
  lexusRc.style.display = "none";
  bmwM3.style.display = "block";
  bmwM5.style.display = "none";
  bmwM3.style.width = "25vw";
});

graySite.addEventListener("click", function () {
  for (let i = 0; i < body.length; i++) {
    body[i].style.backgroundColor = "#dfe0df";
    body[i].style.color = "#674833";
  }
  for (let j = 0; j < buttons.length; j++) {
    buttons[j].style.backgroundColor = "#805a40";
    buttons[j].style.color = "white";
  }
  lexusRc.style.display = "block";
  bmwM3.style.display = "none";
  bmwM5.style.display = "none";
});

darkSite.addEventListener("click", function () {
  for (let i = 0; i < body.length; i++) {
    body[i].style.backgroundColor = "#252a34";
    body[i].style.color = "#ff2e63";
  }
  for (let j = 0; j < buttons.length; j++) {
    buttons[j].style.backgroundColor = "#ff2e63";
    buttons[j].style.color = "white";
  }
  bmwM5.style.display = "block";
  bmwM5.style.width = "25vw";
  lexusRc.style.display = "none";
  bmwM3.style.display = "none";
});
