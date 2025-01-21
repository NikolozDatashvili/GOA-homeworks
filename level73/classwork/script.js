// //<> exercise N1
// let car = {
//   brand: "BMW",
//   color: "Black",
//   year: "2003",
//   model: "M3 E46",
//   manufactured: "Japan",
// };

// console.log("Brand: " + car.brand);
// console.log("Year: " + car.year);
// console.log("Model: " + car.model);

//<> exercise N2

// let obj = {
//   row_0: [22, 4, 54, 36, 12],
//   row_1: [21, 1, 57, 39, 11],
// };

// for (let i = 0; i < obj["row_0"].length; i++) {
//   console.log(`Evens: ${obj["row_0"][i]}, Odds: ${obj["row_1"][i]}`);
// }

//<> exercise N3

function getObject(object) {
  let result = [];

  for (let i = 0; i < object.quantity; i++) {
    result.push(object.element);
  }
  return result;
}
let obj1 = {
  quantity: 5,
  element: "Random",
};

console.log(getObject(obj1));
