let date = new Date();

let hourP = document.getElementById("hour");
let minsP = document.getElementById("mins");
let secondsP = document.getElementById("seconds");
function clock() {
  let hour = String(date.getHours()).padStart(2, "0");
  let mins = String(date.getMinutes()).padStart(2, "0");
  let sec = String(date.getSeconds()).padStart(2, "0");
  date = new Date();
  hourP.textContent = hour;
  minsP.textContent = mins;
  secondsP.textContent = sec;
  setTimeout(clock, 1000 - date.getMilliseconds());
}
clock();
