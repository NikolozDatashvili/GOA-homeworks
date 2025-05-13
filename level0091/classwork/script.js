let main = document.querySelector("main");

let size = 35;
let prepend = true;

for (let i = 1; i <= 10; i++) {
  let div = document.createElement("div");
  div.className = "box";
  div.style.width = size + "px";
  div.style.height = size + "px";

  if (prepend) {
    main.prepend(div);
  } else {
    main.append(div);
  }

  prepend = !prepend;
  size *= 1.2;
}
