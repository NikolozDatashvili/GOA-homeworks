document.getElementById("parent1").addEventListener("click", () => {
  console.log("parent1 clicked");
});
document.getElementById("btn1").addEventListener("click", () => {
  console.log("btn1 clicked");
});

document.getElementById("div1").addEventListener("click", () => {
  console.log("div1 clicked");
});
document.getElementById("div2").addEventListener("click", () => {
  console.log("div2 clicked");
});
document.getElementById("div3").addEventListener("click", () => {
  console.log("div3 clicked");
});

document.body.addEventListener("click", () => {
  console.log("body clicked");
});
document.getElementById("btn2").addEventListener("click", () => {
  console.log("btn2 clicked");
});

function logId() {
  console.log(this.id + " clicked");
}
document.getElementById("box1").addEventListener("click", logId);
document.getElementById("box2").addEventListener("click", logId);

document.getElementById("b1").addEventListener("click", () => {
  console.log("b1 clicked");
});
document.getElementById("b2").addEventListener("click", () => {
  console.log("b2 clicked");
});
document.getElementById("b3").addEventListener("click", () => {
  console.log("b3 clicked");
});

document.getElementById("cap1").addEventListener(
  "click",
  () => {
    console.log("cap1 capturing");
  },
  true
);
document.getElementById("cap2").addEventListener(
  "click",
  () => {
    console.log("cap2 capturing");
  },
  true
);

document.getElementById("capbox").addEventListener(
  "click",
  () => {
    console.log("capbox capturing");
  },
  true
);
document.getElementById("capbtn").addEventListener("click", () => {
  console.log("capbtn bubbling");
});

document.getElementById("c1").addEventListener(
  "click",
  () => {
    console.log("c1 capturing");
  },
  true
);
document.getElementById("c2").addEventListener(
  "click",
  () => {
    console.log("c2 capturing");
  },
  true
);
document.getElementById("c3").addEventListener(
  "click",
  () => {
    console.log("c3 capturing");
  },
  true
);

document.getElementById("both").addEventListener(
  "click",
  () => {
    console.log("capturing handler");
  },
  true
);
document.getElementById("both").addEventListener("click", () => {
  console.log("bubbling handler");
});

document.getElementById("wrap").addEventListener(
  "click",
  () => {
    console.log("wrap capturing");
  },
  true
);
document.getElementById("inside").addEventListener("click", () => {
  console.log("inside bubbling");
});
