//// exercise N1

function text() {
  console.log("გამარჯობა :)");
}

text();

/// exercise N2

function nameChange(name) {
  console.log("გამარჯობა " + name);
}

nameChange("Nika");

//\ exercise N3

function adder(num) {
  return num + 1;
}

console.log("The result is => " + adder(21));

//| exercise N4

function math(num1) {
  return -num1 + 1;
}
console.log(math(30));

//* exercise N5

function style(id) {
  let txt = document.getElementById(id);
  txt.style.backgroundColor = "teal";
  txt.style.color = "cornsilk";
  txt.style.fontSize = "2vw";
  txt.textContent = "New text";
}

style("txt1");
