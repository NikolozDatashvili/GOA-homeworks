// //<> exercise N1
// function bankConstruct(money, owner) {
//   this.money = money;
//   this.owner = owner;
//   this.moneyInsertion = moneyInsert;
//   this.moneyTakeOut = takeOut;
//   this.view = moneyView;
// }
// /// თანხის შეტანა
// function moneyInsert(amount) {
//   this.money += amount;
//   return this.money;
// }
// //// თანხის გამოტანა
// function takeOut(amount) {
//   if (this.money >= amount) {
//     this.money -= amount;
//     return this.money;
//   } else {
//     console.log("Insufficient funds!");
//     return this.money;
//   }
// }
// /// ბალანსის ჩვენება
// function moneyView() {
//   console.log(`Owner: ${this.owner}, Balance: ${this.money}$`);
// }

// let person1 = new bankConstruct(1500, "Nika");
// let person2 = new bankConstruct(500, "Gio");
// //<> ნიკა
// person1.moneyInsertion(500);
// person1.moneyTakeOut(700);
// person1.view();
// //<> გიო
// person2.moneyInsertion(200);
// person2.moneyTakeOut(800);
// person2.view();

//<> exercise N2

function animalConstruct(height, weight, typeByMeal) {
  this.height = height;
  this.weight = weight;
  this.typeByMeal = typeByMeal.toLowerCase();

  this.classify = function () {
    if (
      this.height > 180 &&
      this.weight > 200 &&
      this.typeByMeal === "carnivore"
    ) {
      console.log("Animal is a predator.");
    } else if (
      this.height < 180 &&
      this.weight < 200 &&
      this.typeByMeal === "herbivore"
    ) {
      console.log("Animal is prey.");
    } else {
      console.log("Animal is neither prey or predator");
    }
  };
}

let lion = new animalConstruct(205, 210, "Carnivore");
let bunny = new animalConstruct(20, 5, "Herbivore");
lion.classify();
bunny.classify();
