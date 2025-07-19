// <> exercise N1
function createUserMap(users) {
  const userMap = new Map();

  users.forEach((user) => {
    userMap.set(user.name, user.age);
  });

  return userMap;
}

let users = [
  {
    name: "nika",
    age: 19,
  },
  {
    name: "gio",
    age: 29,
  },
  {
    name: "nia",
    age: 20,
  },
];
const result = createUserMap(users);

result.forEach((age, name) => {
  console.log(`${name}: ${age}`);
});

//<> exercise N2

//// მეთოდი I
let arr = [12, 554, 22, 12, 6, 5, 1, 5, 3, 3];
let mySet = [...new Set(arr)];
console.log(`uniques: ${mySet}`);

//// მეთოდი II
let mySet2 = Array.from(new Set(arr));
console.log(`uniques: ${mySet2}`);

//<> exercise N3
//// დაწერე ფუნქცია, რომელიც იღებს სიტყვების მასივს და აბრუნებს Map-ს,
//// სადაც key არის სიტყვა და value — რამდენჯერ მეორდება ის მასივში.
function sentenceMap(sentenceArr) {
  let myMap = new Map();

  for (let i = 0; i < sentenceArr.length; i++) {
    let word = sentenceArr[i];
    if (myMap.has(word)) {
      let count = myMap.get(word);
      myMap.set(word, count + 1);
    } else {
      myMap.set(word, 1);
    }
  }
  return myMap;
}
const words = [
  "apple",
  "banana",
  "cherry",
  "dragon",
  "elephant",
  "forest",
  "grape",
  "honey",
  "island",
  "jungle",
  "jungle",
  "grape",
  "grape",
];
console.log(sentenceMap(words));

//<> exercise N4
//// შექმენი ფუნქცია, რომელიც იღებს ობიექტების მასივს
//// (სადაც თითოეულ ობიექტს აქვს id) და აბრუნებს Set-ს უნიკალური id-ებით.

function idFilter(idObj) {
  let set1 = new Set();
  idObj.forEach((obj) => {
    set1.add(obj.id);
  });
  return set1;
}

let idObj = [
  {
    id: 1031,
  },
  {
    id: 1461,
  },
  {
    id: 1431,
  },
  {
    id: 1031,
  },
];

console.log(idFilter(idObj));
