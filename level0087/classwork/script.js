let bmwBtn = document.getElementById("bmwBtn");
let lexusBtn = document.getElementById("lexusBtn");
let bmw = document.getElementById("bmwImg");
let lexus = document.getElementById("lexusImg");

bmwBtn.addEventListener("click", () => {
  bmw.style.display = "block";
  lexus.style.display = "none";
});

lexusBtn.addEventListener("click", () => {
  lexus.style.display = "block";
  bmw.style.display = "none";
});
