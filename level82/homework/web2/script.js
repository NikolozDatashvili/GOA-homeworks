let text = document.getElementById("txt");
let sub = document.getElementById("submit");
let timeInput = document.getElementById("time");
let messageInput = document.getElementById("message");

function output() {
  text.textContent = messageInput.value;
}

sub.addEventListener("click", function () {
  let time = parseInt(timeInput.value);
  if (!isNaN(time) && time > 0) {
    setTimeout(output, time);
  }
});
