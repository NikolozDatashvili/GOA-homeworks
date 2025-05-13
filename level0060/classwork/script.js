//<> exercise N1
// function txtChange(){
//     let paragraphs = document.getElementsByClassName("par")

//     for (let i = 0; i < paragraphs.length; i++){
//         //// პარაგრაფის ტექსტი ჩანაცვლდება ღილაკზე დაჭერის მიხედვით
//         //// თუ წერია HI ჩაანაცვლებს Bye-ით და პირიქით
//         paragraphs[i].textContent = paragraphs[i].textContent === "Hi" ? "Bye": "Hi"

//     }
// }

//<> exercise N2
// let buttons = document.getElementsByClassName("btn")

// for (let i = 0; i < buttons.length; i++){
//     buttons[i].addEventListener("click",function(){
//         console.log(`button: ${i + 1}`)
//     })
// }

//<> exercise N3
function myFunc() {
  let divs = document.getElementsByClassName("divs");
  let def = 40;
  for (let i = 0; i < divs.length; i++) {
    divs[i].style.width = def + "px";
    def = def * 2;
  }
}

myFunc();
