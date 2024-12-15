let add = document.getElementById("add");
let decrement = document.getElementById("decrement");
let display = document.getElementById("display");
let reset = document.getElementById("reset");
let toggleDisplay = document.getElementById("toggleDisplay");

let displayValue = 0;

//// რიცხვის გამოჩენის განახლების ფუნქცია
function updateDisplay() {
  if (displayValue === 101 || displayValue === -101) {
    alert("Can't go higher than 100 or lower than -100.");
  } else {
    display.textContent = displayValue;
  }
}

add.addEventListener("click", () => {
  if (displayValue <= 100) {
    displayValue++;
    updateDisplay();
  }
});

decrement.addEventListener("click", () => {
  if (displayValue >= -100) {
    displayValue--;
    updateDisplay();
  }
});

reset.addEventListener("click", () => {
  if (displayValue === 0) {
    alert("Cannot restart because the counter is already at 0.");
  } else {
    displayValue = 0;
    updateDisplay();
  }
});

toggleDisplay.addEventListener("click", () => {
  display.classList.toggle("hidden");
});
