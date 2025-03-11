let sect1 = document.getElementById("first");
let sect2 = document.getElementById("second");
let sect3 = document.getElementById("third");

for (let i = 0; i < 9; i++) {
  sect1.innerHTML += "<div id='div1'></div>";
}
for (let i = 0; i < 9; i++) {
  sect2.innerHTML += "<div class='div2'></div>";
}
for (let i = 0; i < 9; i++) {
  sect3.innerHTML += "<div></div>";
}

let idDivs = document.querySelectorAll("#div1");
let classDivs = document.getElementsByClassName("div2");
let divs = document.getElementsByTagName("div");

for (let i = 0; i < divs.length; i++) {
  divs[i].style.backgroundColor = "#b696b1";
  divs[i].style.width = "9vw";
  divs[i].style.height = "9vw";
}

for (let i = 0; i < idDivs.length; i++) {
  idDivs[i].style.backgroundColor = "#f7bd3b";
  idDivs[i].style.width = "9vw";
  idDivs[i].style.height = "9vw";
}
for (let j = 0; j < classDivs.length; j++) {
  classDivs[j].style.backgroundColor = "#13a589";
  classDivs[j].style.width = "9vw";
  classDivs[j].style.height = "9vw";
}
