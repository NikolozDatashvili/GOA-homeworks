function catMouse(x) {
  let distance = 0;

  for (let i = 1; i < x.length - 1; i++) {
    if (x[i] === ".") {
      distance++;
    }
  }

  if (distance <= 3) {
    return "Caught!";
  } else {
    return "Escaped!";
  }
}

console.log(catMouse("C.....m"));
console.log(catMouse("C...m"));
console.log(catMouse("C.m"));
console.log(catMouse("C........m"));
