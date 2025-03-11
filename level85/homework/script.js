// <> საიტის სტილის შესარჩევი ღილაკები
let tealSite = document.getElementById("teal");
let graySite = document.getElementById("gray");
let darkSite = document.getElementById("dark");

//// მანქანების სურათები
let bmwM5 = document.getElementById("bmwM5");
let bmwM3 = document.getElementById("bmwM3");
let lexusRc = document.getElementById("lexus");

/// ზოგადად ღილაკები (სტილის შესაცვლელად)
let buttons = document.getElementsByTagName("button");
//| სათაური
let title = document.getElementsByClassName("h2");

//\ საიტის უკანა ფონი
let body = document.body;

//* მანქანების ტექსტები
let m5Txt = document.getElementById("bmwM5Txt");
let m3Txt = document.getElementById("bmwM3Txt");
let lexusTxt = document.getElementById("lexusText");

//// პირველი თემა/სტილი
graySite.addEventListener("click", function () {
  body.style.backgroundColor = "#dfe0df";
  body.style.color = "#674833";
  //* ღილაკების სტილი
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].style.backgroundColor = "#805a40";
    buttons[i].style.color = "white";
  }
  //// სათაური

  for (let i = 0; i < title.length; i++) {
    title[i].style.display = "block";
    title[i].innerHTML = "LEXUS RC 350F";
  }
  //| სურათები

  lexusRc.style.display = "block";
  bmwM3.style.display = "none";
  bmwM5.style.display = "none";
  //\ ტექსტები
  m5Txt.style.display = "none";
  m3Txt.style.display = "none";
  lexusTxt.style.display = "block";
});

//// მეორე თემა/სტილი
tealSite.addEventListener("click", function () {
  body.style.backgroundColor = "#12899d";
  body.style.color = "cornsilk";
  //* ღილაკების სტილი
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].style.backgroundColor = "cornsilk";
    buttons[i].style.color = "#805a40";
  }
  /// სათაური
  for (let i = 0; i < title.length; i++) {
    title[i].style.display = "block";
    title[i].innerHTML = "BMW F80 M3";
  }

  //| სურათები
  lexusRc.style.display = "none";
  bmwM3.style.display = "block";
  bmwM5.style.display = "none";
  //\ ტექსტები
  m5Txt.style.display = "none";
  m3Txt.style.display = "block";
  lexusTxt.style.display = "none";
});

//// მესამე თემა/სტილი
darkSite.addEventListener("click", function () {
  body.style.backgroundColor = "#252a34";
  body.style.color = "#ff2e63";
  //* ღილაკების სტილი
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].style.backgroundColor = "#ff2e63";
    buttons[i].style.color = "white";
  }
  /// სათაური
  for (let i = 0; i < title.length; i++) {
    title[i].style.display = "block";
    title[i].innerHTML = "BMW F90 M5";
  }

  //| სურათები
  bmwM5.style.display = "block";
  lexusRc.style.display = "none";
  bmwM3.style.display = "none";
  //\ ტექსტები
  m5Txt.style.display = "block";
  m3Txt.style.display = "none";
  lexusTxt.style.display = "none";
});
