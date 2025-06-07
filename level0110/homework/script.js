const box = document.getElementById("box");

function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function changeBoxStyle() {
  const radius = Math.floor(Math.random() * 100);
  box.style.borderRadius = radius + "%";
  box.style.backgroundColor = getRandomColor();
}

setInterval(changeBoxStyle, 5000);
