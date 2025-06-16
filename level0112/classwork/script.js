let text = document.querySelector("p");
let img = document.querySelector("img");

class Car {
  constructor(brand, model, engineVol, year, text) {
    this.brand = brand;
    this.model = model;
    this.engineVol = engineVol;
    this.year = year;
    this.text = text;
  }

  infoShow() {
    let ulList = document.createElement("ul");

    let brandLi = document.createElement("li");
    brandLi.textContent = `Brand: ${this.brand}`;
    ulList.appendChild(brandLi);

    let modelLi = document.createElement("li");
    modelLi.textContent = `Model: ${this.model}`;
    ulList.appendChild(modelLi);

    let engineLi = document.createElement("li");
    engineLi.textContent = `Engine Volume: ${this.engineVol}L`;
    ulList.appendChild(engineLi);

    let yearLi = document.createElement("li");
    yearLi.textContent = `Year: ${this.year}`;
    ulList.appendChild(yearLi);

    let descriptionLi = document.createElement("li");
    descriptionLi.textContent = `Description: ${this.text}`;
    ulList.appendChild(descriptionLi);

    text.innerHTML = "";
    text.appendChild(ulList);
  }
}

let bmwText = `The 2003 BMW E46 3.0 (330i/330ci) features a 225 hp 3.0L inline-six engine, known for smooth power and balanced handling. Its timeless design and solid build make it a favorite among BMW enthusiasts.`;

let bmw = new Car("BMW", "E46", "3.0", "2003", bmwText);

img.addEventListener("click", () => {
  bmw.infoShow();
});
