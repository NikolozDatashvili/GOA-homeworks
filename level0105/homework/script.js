/// const-ში ინახება ცვლადი რომლის შეცვლაც არ გვჭირდება მომავალში
/// const-ი არის block scopped-ი ე.ი
/// მხოლოდ იმ block-ის შიგნით მუშაობს სადაც შეიქმნა
/// ამ შემთხვევაში elements მასივის შეცვლა არ გვჭირდება

//// capturing
function capturingFunction() {
  const elements = ["#child", "#parent", "#grandParent"];

  elements.forEach((selector) => {
    let element = document.querySelector(selector);

    element.addEventListener(
      "click",
      function () {
        console.log(`${element.id.toUpperCase()} - Capturing`);
      },
      true
    ); //<> true = capturing
  });
}

//// bubbling
function bubblingFunction() {
  let elements = ["#child1", "#parent1", "#grandParent1"];

  elements.forEach((selector) => {
    let element = document.querySelector(selector);

    element.addEventListener(
      "click",
      function () {
        console.log(`${element.id.toUpperCase()} - Bubbling`);
      },
      false
    ); //<> false = bubbling (default)
  });
}
bubblingFunction();
capturingFunction();

//// stopPropagation()

function propStoper() {
  let elements = ["#red", "#green", "#blue"];

  elements.forEach((selector) => {
    const element = document.querySelector(selector);

    element.addEventListener("click", function (event) {
      event.stopPropagation();
      console.log(`${element.id.toUpperCase()} - propagation stopped`);
    });
  });
}

propStoper();

//// username input
function func() {
  //// ვიყენებ let-ს რადგან მხოლოდ ამ ფუნქციის შიგნით მჭირდება ეს ცვლადი
  let userName = document.getElementById("username");
  alert(userName.value);
}

const text = document.getElementById("userText");
let output = document.getElementById("outputText");
text.addEventListener("input", () => {
  output.textContent = text.value;
});
