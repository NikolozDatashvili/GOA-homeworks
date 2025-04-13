let input = document.getElementById("userInp");
let par = document.getElementById("parent");
let sub = document.getElementById("sub");
let h1 = document.getElementById("h1");

sub.addEventListener("click", () => {
  let index = parseInt(input.value);

  if (index > par.children.length || index < 1) {
    alert("Invalid index");
    return;
  }

  for (let i = 0; i < par.children.length; i++) {
    par.children[i].style.backgroundColor = "black";
  }

  let target = par.children[index - 1];
  if (!isNaN(index)) {
    target.style.backgroundColor = "red";
  }

  if (target.hasChildNodes()) {
    h1.textContent = `Div ${index} has child`;
    console.log("This div has child");
  } else {
    h1.textContent = `Div ${index} doesn't have child`;
    console.log("This div doesn't have child");
  }
});
