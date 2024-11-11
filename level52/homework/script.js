/// area of rectangle (მართკუთხედი)
function countAreaRect(len, wid) {
  return "rectangle area is: " + len * wid;
}

console.log(countAreaRect(5, 3));

//// area of circle (წრე)
function countAreaCircle(radius) {
  let area = Math.PI * radius ** 2;
  return "Circle area is: " + area.toFixed(2);
}

console.log(countAreaCircle(2));
//// area of circle method 2 (წრე)
function countAreaCircle2(rad) {
  return "Circle area is: " + 3.14 * rad ** 2;
}

console.log(countAreaCircle2(5));

//<> are of triangle (სამკუთხედი)

function countAreaTri(a, b, c) {
  //// თუ if-ში მოცემული ყველა პრიობა დაკმაყოფილდება მაშინ
  //// ფუნქცია გამოიყენებს ჰერონის ფორმულა ფართობის გამოსათვლელად
  if (a + b > c && a + c > b && b + c > a) {
    let s = (a + b + c) / 2;

    /// Math.sqrt ამოიღებს კვადრატულ ფესვს ქვედა გამოსახულებიდან
    let area = Math.sqrt(s * (s - a) * (s - b) * (s - c)); /// ჰერონის ფორმულა
    return "Triangle area is: " + area;
  } else {
    return "Invalid triangle sides"; // Return error message if sides do not form a valid triangle
  }
}
console.log(countAreaTri(10, 9, 8));
