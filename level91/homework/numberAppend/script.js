let cont = document.getElementById("container");
let submit = document.getElementById("subBtn");
let input = document.getElementById("numInp");

let colorArr = [
  "teal",
  "purple",
  "yellow",
  "brown",
  "blue",
  "green",
  "cyan",
  "darkgray",
  "red",
  "orange",
];

submit.addEventListener("click", () => {
  let strInput = input.value.toString();

  let lastDigit = Number(strInput[strInput.length - 1]);
  let color = colorArr[lastDigit];

  let box = document.createElement("div");
  box.style.cssText = `
    width: 100px;
    height: 100px;
    display: inline-block;
    margin: 5px;
    color: white;
    font-size: 20px;
    text-align: center;
    line-height: 100px;
    font-weight: bold;
    background-color: ${color};
    position: relative;
  `;
  box.textContent = lastDigit;

  let circle = document.createElement("div");
  circle.style.cssText = `
    width: 30px;
    height: 30px;
    border-radius: 50%;
    position: absolute;
    bottom: 5px;
    right: 5px;
    background-color: ${input.value % 2 === 0 ? "navy" : "purple"};
  `;

  box.append(circle);

  if (input.value < 20) {
    cont.prepend(box);
  } else {
    cont.append(box);
  }
});
