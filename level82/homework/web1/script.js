let text = document.getElementById("txt"); /// ნაჩვენები ტექსტი
let start = document.getElementById("btn1"); /// დაწყება
let pause = document.getElementById("btn2"); /// გაჩერება
let userInput = document.getElementById("input1"); /// შემოტანის ველი
let label = document.getElementById("lab");
let lastDot = document.getElementById("dot");
let interval;
let dotInterval; //// წერტილის დამატების ფუნქციისთვის
let count = 0;
let userTime = 0;

function output() {
  if (count >= userTime) {
    //// როცა ეკრანზე გამოტანილი რიცხვი გაუტოლდება შეტანილ დროს
    //// ინტერვალი გაჩერდება. და დაეწერება "Time's up"
    clearInterval(interval);
    interval = null;
    /// dotAdd ფუნქციის ინტერვალი
    clearInterval(dotInterval);
    text.textContent = "Time's up";
    label.textContent = "Start again";
    return;
  }

  //<> ათვლა

  count++;
  //<> გამოაქვს რიცხვი
  text.textContent = count;
}
function dotAdd() {
  //// თუ lastDot კლასს გაწერილი აქვს css-ის hidden property
  //// მაშინ მას მოშორდება ეს property ე.ი გამოჩნდება
  if (lastDot.classList.contains("hidden")) {
    lastDot.classList.remove("hidden");
  } else {
    //// თუ არადა დაემატება ე.ი გაქრება
    lastDot.classList.add("hidden");
  }
}
start.addEventListener("click", function () {
  //\ თუ ინტერვალი არ უდრის არაფერს:
  if (!interval) {
    count = 0; //\ ათვლის ცვლადი ნულდება
    userTime = parseInt(userInput.value) / 1000; //\ გადააქცევს შემოტანილ დროს წამებში
    //| თუ ველი ცარიელია ან დრო ნაკლებია 0ზე ან მეტია 10ზე გამოიტანს შემდეგ მესიჯს
    if (isNaN(userTime) || userTime < 0 || userTime > 10) {
      alert("Enter a valid number (0 - 10000 ms)");
      label.textContent = "Enter a valid number in thousands (0 - 10000 ms)";
      return;
    }
    //| თუ მოწოდებული რიცხვი არ იქნება ათასეული
    if (userInput.value % 1000 != 0) {
      label.textContent = "Enter a valid number in thousands";
      return;
    }

    text.textContent = count;
    //\ ინტერვალი 1 წამი
    interval = setInterval(output, 1000);
    //| ჩავამატოთ ტექსტი და კოდი html ში
    label.innerHTML = 'Time is ticking..<span id="dot">.</span>';
    //// lastDot ელემენტს ახალ მნიშვნელობას ვაძლევთ
    lastDot = document.getElementById("dot");
    //\ ინტერვალი 0.6 წამი
    dotInterval = setInterval(dotAdd, 600);
  }
});

//<> გაჩერების ღილაკი
pause.addEventListener("click", function () {
  clearInterval(interval);
  clearInterval(dotInterval);
  interval = null;
  text.textContent = "Paused. Click start to continue";
});
