function getArea(a, b = null, c = null) {
  if (b === null) {
    console.log("circle");
    return Math.PI * a * a;
  } else if (c === null) {
    console.log("rectangle");
    return a * b;
  }
  console.log("triangle");
  let s = (a + b + c) / 2;
  return Math.sqrt(s * (s - a) * (s - b) * (s - c));
}

console.log(getArea(10));
console.log(getArea(10, 90));
console.log(getArea(4, 5, 6));
