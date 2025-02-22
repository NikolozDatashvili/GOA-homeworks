let interval;
let alphabet = "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM";
let txt = document.getElementById("txt");
let startBtn = document.getElementById("start");
let pauseBtn = document.getElementById("pause");
let numbersRadio = document.getElementById("numbers");
let alphabetRadio = document.getElementById("alphabet");

function random() {
  if (numbersRadio.checked) {
    txt.textContent = Math.floor(Math.random() * 100);
  } else if (alphabetRadio.checked) {
    txt.textContent = alphabet[Math.floor(Math.random() * alphabet.length)];
  }
}

startBtn.addEventListener("click", function () {
  if (!interval) {
    random();
    interval = setInterval(random, 1000);
  }
});

pauseBtn.addEventListener("click", function () {
  clearInterval(interval);
  interval = null;
  txt.textContent = "Click start to continue";
});
