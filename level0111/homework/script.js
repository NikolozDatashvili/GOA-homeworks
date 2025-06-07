//<> exercise N1
/*
// მოცემულია მასივი, რომელიც შეიცავს რამდენიმე ფერს (მაგ. "red", "green", "blue"...).
// შენ უნდა გამოიყენო დესტრუქტურიზაცია, რათა:
// პირველი ელემენტი შეინახო ცვლადში firstColor,
// მეორე ელემენტი — ცვლადში secondColor,
// ხოლო დარჩენილი ყველა ელემენტი — ცვლადში otherColors როგორც მასივი.
*/
let colors = ["blue", "red", "green", "black", "purple"];

let [first, second, ...other] = colors;

console.log(first, second, other);
//<> exercise N2
/*
// ობიექტის დესტრუქტურიზაცია
// მოცემულია ობიექტი, რომელიც შეიცავს მომხმარებლის 
// შესახებ ინფორმაციას (მაგ. name, age, country).
// შენ უნდა დესტრუქტურიზაციით გამოყო ორი ველი — name და country, 
// და შეინახო ცალკე ცვლადებში ისე, რომ ამ ობიექტიდან არ გამოიყენო user.name ან user.country.
*/

let person = {
  persName: "nika",
  age: 17,
  country: "Georgia",
};

let { persName, country } = person;
console.log(`${persName}, ${country}`);

//<> exercise N3
/*
// მოცემულია წიგნის ობიექტი, სადაც ველები არის title და author.
// შენ უნდა დესტრუქტურიზაციით გამოიტანო ეს ველები, 
// მაგრამ შეინახო სხვა სახელის ცვლადებში — მაგალითად, bookTitle და bookAuthor.
 */

let book = {
  author: "J.K. Rowling",
  title: "Harry Potter and sorcerer's stone",
};
let { author: bookAuthor, title: bookTitle } = book;

console.log(`${bookAuthor}, ${bookTitle}`);
//<> exercise N4

/*
// მოცემულია ობიექტი, რომლის ერთ-ერთი ველი თვითონაც ობიექტია 
// (მაგ. address ობიექტი city და zip ველებით).
// შენ უნდა დესტრუქტურიზაციით გამოიტანო city ველი ისე, 
// რომ გზად არ მოგიწიოს person.address.city დაწერა.
*/

let house = {
  address: {
    city: "Tbilisi",
    zip: "0105",
  },
  owner: "nika",
};
let {
  address: { city },
} = house;

console.log(city);

//<> exercise N5

/*
// შექმენი ფუნქცია, რომელიც იღებს ობიექტს, მაგალითად { name: "Nino", age: 25 }.
// დავალება ის არის, რომ ამ ობიექტიდან ინფორმაცია დესტრუქტურიზაციით მიღო პირდაპირ ფუნქციის 
// არგუმენტში (არ გამოიყენო obj.name ან მსგავსი) და დაბეჭდო ტექსტი: "User: Nino, Age: 25".
*/

function getObj(obj) {
  let { name, age } = obj;
  return `User: ${name}, Age: ${age}`;
}

console.log(getObj({ name: "Nino", age: 25 }));
