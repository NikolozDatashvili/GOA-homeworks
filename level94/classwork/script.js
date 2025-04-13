function myFunc(element) {
  if (element.children.length === 0) {
    console.log("There is no text!");
  } else {
    for (let i = 0; i < element.children.length; i++) {
      console.log(element.children[i].textContent);
    }
  }
}
let myDiv = document.querySelector("div");
myFunc(myDiv);
