const ageNum = document.getElementById("age");
const color = document.getElementById("color");
const body = document.body;
const text = document.querySelector(".btnDiv p");
const res = document.getElementById("res");
const toggle = document.getElementById("themeToggle");
const output = document.getElementById("calcOutput");
const buttons = document.querySelectorAll(".calcBtnDiv button");
const main = document.querySelector("main");

let expression = "";
let darkMode = false;

// Set initial theme
updateTheme();

// Age and color input logic
ageNum.addEventListener("change", () => {
  const age = Number(ageNum.value);

  if (!age) {
    body.style.backgroundColor = "";
    return;
  }

  if (age > 100) {
    body.style.backgroundColor = "#dc3545";
    text.textContent = `${age} years old is using computer. Amazing!`;
  } else if (age >= 18) {
    body.style.backgroundColor = "#198754";
    text.textContent = "You are of legal age";
  } else {
    body.style.backgroundColor = "#dc3545";
    text.textContent = "You are underage";
  }
});

// Reset inputs
res.addEventListener("click", () => {
  resetAll();
});

function resetAll() {
  ageNum.value = "";
  color.value = "";
  text.textContent = "Please enter color and age above";
  body.style.backgroundColor = "";
  expression = "";
  output.textContent = "";
}

// Color change
color.addEventListener("change", () => {
  body.style.backgroundColor = color.value;
});

// Calculator button logic
buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const value = btn.value;

    if (value === "=") {
      try {
        // Replace × and ÷ with * and / for evaluation
        const evalExpression = expression.replace(/×/g, "*").replace(/÷/g, "/");
        const result = eval(evalExpression);
        expression = Number.isInteger(result)
          ? result.toString()
          : result.toFixed(4).toString();
      } catch (e) {
        expression = "Error";
      }
    } else if (value === "C") {
      expression = "";
    } else if (value === "←") {
      expression = expression.slice(0, -1);
    } else {
      const displayValue = value === "*" ? "×" : value === "/" ? "÷" : value;
      expression += displayValue;
    }

    output.textContent = expression || "0";
  });
});

toggle.addEventListener("click", () => {
  darkMode = !darkMode;
  updateTheme();
});

function updateTheme() {
  if (darkMode) {
    document.documentElement.setAttribute("data-theme", "dark");
    toggle.textContent = "Light Mode";
  } else {
    document.documentElement.removeAttribute("data-theme");
    toggle.textContent = "Dark Mode";
  }
}
