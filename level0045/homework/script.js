/// exercise N1

function time(a) {
  let second = a * 60;
  return second;
}

let minutes = 20;
console.log(
  "There is: " + time(minutes) + " second" + " in " + minutes + " minutes"
);
/// ეს ფუნცია არაა ვოიდი

//// exercise N2

function math(a, b, c) {
  return (a + b) * c;
}

console.log("The result is: " + math(12, 3, 0.6));
//// ეს ფუნცია არაა ვოიდი

//| exercise N3

function func(c, d) {
  return c > d;
}

console.log("c > d => " + func(5, 1));
console.log("c > d => " + func(1, 3));
//| ეს ფუნცია არაა ვოიდი

//\ exercise N4

function element(elem) {
  return elem;
}

console.log("Element: " + element(true));
//\ ეს ფუნცია არაა ვოიდი
//* exercise N5

function myFunc(id, str) {
  tag = document.getElementById(id);
  tag.style.height = "10vh";
  tag.style.backgroundColor = "teal";
  tag.style.color = "cornsilk";
  tag.style.fontSize = "2vw";
  tag.textContent = str;
}

myFunc("txt1", "THIS IS New text");
//* ეს ფუნცია ვოიდია
