let person = {
  name: "nika",
  age: 17,
  lastName: "datashvili",
  height: 180,
  hobby: "watching or playing football",
  aboutPerson: function () {
    let text = `My name is ${this.name} ${this.lastName}, i am ${this.age} years old, i spend my free time ${this.hobby}
`;
    return text;
  },
  heightChecker() {
    if (this.height > 175) {
      return `Your height ${this.height} is higher than Georgians avarage height`;
    }
  },
};

//! This keyword-ით ვწვდებით იმ კონკრეტული ობიექტის property-ის რომელშიც ვქმნით ფუნქციას/მეთოდს
console.log(person.aboutPerson());
console.log(person.heightChecker());
