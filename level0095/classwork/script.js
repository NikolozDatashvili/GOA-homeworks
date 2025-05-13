// let load = document.getElementById("load");

// let count = 5;

// function loading() {
//   count++;

//   load.style.cssText = `
//   height: 50px;
//   background-color: red;
//   width: ${count}%
//   `;

//   if (count == 100) {
//     clearInterval(interval);
//   }
// }

// let interval = setInterval(loading, 10);

let div1 = document.getElementById("div1");
let op = 1;

div1.style.cssText = `
  width: 500px;
  height: 500px;
  background-color: red;
  opacity: ${op};
  cursor: pointer;
`;

function animation() {
  div1.removeEventListener("click", animation);

  let phase = "fadeOut";
  let op = 1;

  let interval = setInterval(() => {
    if (phase === "fadeOut") {
      op -= 0.05;
      if (op <= 0) {
        op = 0;
        phase = "wait";
        setTimeout(() => {
          phase = "fadeIn";
        }, 1000);
      }
    } else if (phase === "fadeIn") {
      op += 0.05;

      if (op >= 1) {
        op = 1;
        clearInterval(interval);
        div1.addEventListener("click", animation);
      }
    }

    div1.style.opacity = op;
  }, 50);
}

div1.addEventListener("click", animation);
