let ol = document.querySelector("ol");
let goal = document.getElementById("goalBtn");
let userInp = document.getElementById("goalInp");
let clickCount = 0;
let body = document.querySelector("body");

goal.addEventListener("click", () => {
  if (userInp.value == "") {
    alert("Text mustn't be empty");
    return;
  }
  if (userInp.value.length < 5 || userInp.value.length > 15) {
    alert("Enter 5-15 characters");
    return;
  }
  let newGoal = document.createElement("li");
  clickCount++;
  newGoal.textContent = userInp.value;
  ol.append(newGoal);

  if (clickCount > 25) {
    ol.style.gridTemplateColumns = "1fr 1fr 1fr 1fr 1fr";
  } else if (clickCount > 15) {
    ol.style.display = "grid";

    ol.style.gridTemplateColumns = "1fr 1fr 1fr 1fr";
    ol.style.gap = "70px";
  }
});
