let array = [
  { name: "Nika", age: 17, height: 180, gender: "Male" },
  { name: "Mariami", age: 17, height: 165, gender: "Female" },
  { name: "Dato", age: 17, height: 176, gender: "Male" },
];

for (let i = 0; i < array.length; i++) {
  let person = array[i];
  console.log(`Person: ${i + 1}`);
  console.log(`სახელი: ${person.name},`);
  console.log(`ასაკი: ${person.age},`);
  console.log(`სიმაღლე: ${person.height}cm`);
  console.log(`სიმაღლე: ${person.gender}`);
  console.log();
}
