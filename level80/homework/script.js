//<> unshift
//// unshift-ის მაგალითი
let fruit = ["Banana", "Apple"];
// fruit.unshift("Pineapple");
// console.log(fruit);

/// მუშაობის მეთოდი
function unshiftMethod(fruit, elems) {
  //* გადავწიოთ მასივში მყოფი ელემენტები მარჯვნივ
  for (let i = fruit.length - 1; i >= 0; i--) {
    fruit[i + elems.length] = fruit[i];
  }
  //* ჩავსვათ გადმოცემული ელემენტები მასივის დასაწყისში
  for (let i = 0; i < elems.length; i++) {
    fruit[i] = elems[i];
  }
  return fruit;
}

console.log(unshiftMethod(fruit, ["Grape", "Avocado"]));

//<> shift-ის მაგალითი
//// shift მეთოდი აშორებს პირველ ელემენტს მასივიდან
let carBrands = ["BMW", "Lexus", "Toyota"];
// carBrands.shift();
// console.log(carBrands); ///კონსოლში გამოაქვს მასივი I ელემენტის გამოკლებით
// console.log(carBrands.shift()); /// კონსოლში გამოაქვს მასივის I ელემენტი
function shiftMethod(carBrands) {
  for (let i = 1; i < carBrands.length; i++) {
    //\ გადავწიოთ ყველა ელემენტი მარცხნივ რომ პირველი ელემენტი ამოვარდეს
    carBrands[i - 1] = carBrands[i];
  }
  //| ბოლო ელემენტი მოვაშოროთ მასივიდან
  carBrands.length = carBrands.length - 1;
  return carBrands;
}
console.log(shiftMethod(carBrands));

//<> splice
//// splice მეთოდი აშორებს/ამატებს ელემენტებს მასივში

let players = ["Messi", "Ronaldo", "Kvara"];
players.splice(0, 1, "Pele", "Neymar");
console.log(players);


function spliceMethodp(players){
   for(let i = )
}