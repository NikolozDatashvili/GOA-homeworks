let box = document.getElementById("box"); ///  მოძრავი ყუთი
let startBtn = document.getElementById("start-btn");
let stopBtn = document.getElementById("stop-btn");
let durationInput = document.getElementById("duration"); //// შემოტანის ველი

let animationInterval; //// ინტერვალის
let startTime;
let progress = 0;
let isAnimating = false; //// არის თუ არა მოქმედი ანიმაცია

function animateBox(currentTime) {
  if (!startTime) startTime = currentTime; // შევამოწმოთ თუ მომხმარებელმა შეიყვანა დრო
  let elapsed = currentTime - startTime;
  let duration = parseInt(durationInput.value) * 1000;
  progress = Math.min(elapsed / duration, 1);

  if (progress >= 1) {
    //<> ანიმაციის დასრულება
    isAnimating = false;
    box.style.left = "0px";
    box.style.top = "0px";
    return;
  }
  /// მოძრაობის რადიუსი
  let containerWidth = 450; // 500 - 50 (box width)
  let containerHeight = 450; // 500 - 50 (box height)

  let x, y;

  if (progress < 0.25) {
    //// მარჯვნივ გადაადგილება
    let stageProgress = progress / 0.25;
    x = stageProgress * containerWidth;
    y = 0;
  } else if (progress < 0.5) {
    //// ქვემოთ გადაადგილება
    let stageProgress = (progress - 0.25) / 0.25;
    x = containerWidth;
    y = stageProgress * containerHeight;
  } else if (progress < 0.75) {
    //// მარცხნივ გადაადგილება
    let stageProgress = (progress - 0.5) / 0.25;
    x = containerWidth - stageProgress * containerWidth;
    y = containerHeight;
  } else {
    //// ზემოთ გადაადგილება
    let stageProgress = (progress - 0.75) / 0.25;
    x = 0;
    y = containerHeight - stageProgress * containerHeight;
  }

  box.style.left = x + "px";
  box.style.top = y + "px";

  if (isAnimating) {
    requestAnimationFrame(animateBox);
  }
}

startBtn.addEventListener("click", () => {
  if (isAnimating) return;

  let duration = parseInt(durationInput.value);
  if (isNaN(duration) || duration <= 0) {
    alert("გთხოვთ შეიყვანოთ სწორი დრო!");
    return;
  }

  isAnimating = true;
  progress = 0;
  startTime = null;
  requestAnimationFrame(animateBox);
});

stopBtn.addEventListener("click", () => {
  isAnimating = false;
  box.style.left = "0px";
  box.style.top = "0px";
});
