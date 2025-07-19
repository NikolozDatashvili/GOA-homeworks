//<> exercise N1

class Product {
  constructor(price) {
    this._price = price;
  }
  get price() {
    return `Product price is: ${this._price}`;
  }
  set price(newPrice) {
    if (newPrice >= 0) {
      this._price = newPrice;
    } else {
      this._price = `Price can't be negative`;
    }
  }
}

let cannedFood = new Product(53);
console.log(cannedFood.price);
cannedFood.price = 90;
console.log(cannedFood.price);
cannedFood.price = -9;
console.log(cannedFood.price);

//<> exercise N2

class Rectangle {
  constructor(height, width) {
    this._height = height;
    this._width = width;
  }
  get area() {
    return `Area is: ${this._height * this._width}`;
  }
  set sizes({ width, height }) {
    this._height = height;
    this._width = width;
  }
}

let rect1 = new Rectangle(16, 24);
console.log(rect1.area);
rect1.sizes = { width: 5, height: 7 };

console.log(rect1.area);

//<> exercise N3

class User {
  constructor(fullName) {
    this._fullName = fullName;
  }
  get fullName() {
    this._fullName = this._fullName[0].toUpperCase() + this._fullName.slice(1);
    return `Full name: ${this._fullName}`;
  }
}
let nika = new User("nika");

console.log(nika.fullName);
//<> exercise N4

class MathHelper {
  static sum(a, b) {
    return a + b;
  }
}

console.log(`Sum is: ${MathHelper.sum(10, 3)}`);

//<> exercise N5

class Account {
  #balance;
  constructor(balance) {
    this.#balance = balance;
  }

  get balance() {
    return `Balance is: ${this.#balance}$`;
  }
  set balance(newBal) {
    this.#balance = newBal;
  }
}

let myAcc = new Account(170000);
console.log(myAcc.balance);
myAcc.balance = 180000;

console.log(myAcc.balance);
