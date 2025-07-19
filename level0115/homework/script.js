//<> exercise N1

class Temperature {
  constructor(celsius, farenheit) {
    this.farenheit = farenheit;
    this.celsius = celsius;
  }
  //// არგუმენტი უნდა იყოს ფარენჰეიტი
  set celsius(faren) {
    this._celsius = (faren - 32) * (9 / 5);
  }
  get celsius() {
    return this._celsius;
  }
  //// არგუმენტი უნდა იყოს ცელსიუსი
  set farenheit(cel) {
    this._farenheit = cel * (9 / 5) + 32;
  }
  get farenheit() {
    return this._farenheit;
  }
}

let temp = new Temperature(23, 53);
console.log(`Celsius: ${temp.celsius} Farenheit: ${temp.farenheit}`);

//<> exercise N2

class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  set width(width) {
    this._width = width;
  }
  set height(height) {
    this._height = height;
  }
  get area() {
    return this._height * this._width;
  }
}

let rect = new Rectangle(12, 7);

console.log(
  `Area: ${rect.area}; Width: ${rect._width}; Height: ${rect._height};`
);

//<> exercise N3
class User {
  constructor(first, last) {
    this._first = first;
    this._last = last;
  }

  set firstName(first) {
    this._first = first;
  }
  set lastName(last) {
    this._last = last;
  }
  get fullName() {
    return this._first + " " + this._last;
  }
}

let human = new User("Kobe", "Bryant");
console.log(`Greatest basketball player ever ${human.fullName}`);
human.firstName = "Lionel";
human.lastName = "Messi";
console.log(`Greatest football player ever ${human.fullName}`);
//<> exercise N4

class BankAccount {
  #balance;
  constructor(initialBalance = 0) {
    this.#balance = initialBalance > 0 ? initialBalance : 0;
  }
  get balance() {
    return this.#balance;
  }
  set balance(amount) {
    if (amount > 0) {
      this.#balance = amount;
    }
  }
}
let balance1 = new BankAccount(5126);
console.log(`Balance: ${balance1.balance}`);
balance1.balance = -15;
console.log(`Balance: ${balance1.balance}`);

//<> exercise N5
class Product {
  constructor(price = 0, discount = 0) {
    this.price = price;
    this.discount = discount;
  }
  set price(value) {
    this._price = value > 0 ? value : 0;
  }
  get price() {
    return this._price;
  }
  set discount(value) {
    this._discount = value >= 0 ? value : 0;
  }
  get discount() {
    return this._discount;
  }
  get finalPrice() {
    return this._price - this._discount;
  }
}

let prod1 = new Product();
