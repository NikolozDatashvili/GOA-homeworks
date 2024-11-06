//\ darkmode switcher
let icon = document.getElementById("icon");
icon.onclick = function () {
  document.body.classList.toggle("dark-theme");
  if (document.body.classList.contains("dark-theme")) {
    icon.src = "images/sun.png";
  } else {
    icon.src = "images/moon.png";
  }
};
// <> first input
displayed = document.getElementById("dispTxt");
function txtAdd() {
  textInp = document.getElementById("txtAdder").value;

  displayed.textContent += " " + textInp;
}
/// second input
function colorChange() {
  colInput = document.getElementById("colChange").value;
  displayed.style.color = colInput;
}
//// third input
function sizeChange() {
  fontSizing = document.getElementById("fontSizer").value;
  displayed.style.fontSize = fontSizing;
}
