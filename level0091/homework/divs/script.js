let cont = document.getElementById("container");
let prepend = true;
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
];
for (let i = 0; i < colorArr.length; i++) {
  let div = document.createElement("div");
  div.style.cssText = `
  background-color: ${colorArr[i]};
  width:90%;
  height: 300px;

  `;

  if (prepend) {
    cont.prepend(div);
  } else {
    cont.append(div);
  }
  prepend = !prepend;
}
