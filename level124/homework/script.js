let text1 = document.querySelector(".count-text");
let counter = 0;
text1.textContent = counter;
let minus = document.querySelector(".minus");
let plus = document.querySelector(".plus");
minus.addEventListener("click", () => {
  counter--;
  text1.textContent = counter;
});
plus.addEventListener("click", () => {
  counter++;
  text1.textContent = counter;
});
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
