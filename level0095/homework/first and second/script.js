let btn = document.getElementById("divBtn");
let created = false;
let div;

btn.addEventListener("click", () => {
  if (!created) {
    div = document.createElement("div");
    div.classList.add("animatedBox");
    document.body.append(div);
    created = true;

    div.addEventListener("click", () => {
      let radius = 0;

      let interval1 = setInterval(() => {
        if (radius >= 50) {
          clearInterval(interval1);

          /// 0-დან 50-მდე
          let interval2 = setInterval(() => {
            if (radius <= 0) {
              clearInterval(interval2);
            } else {
              //// 2.5% ყოველ 50ms
              radius -= 2.5;
              div.style.borderRadius = radius + "%";
            }
          }, 50);
        } else {
          //// 2.5% ყოველ 50ms
          radius += 2.5;
          div.style.borderRadius = radius + "%";
        }
      }, 50);
    });
  }
});
