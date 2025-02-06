function arrayToObject(arr) {
  let object = {};

  for (let i = 0; i < arr.length; i += 2) {
    /// ყოველ მეორე ინდექსზე მყოფ ელემენტს
    /// ჩასვამს key-ში ხოლო შემდეგ ელემენტს value-ში
    object[arr[i]] = arr[i + 1];
  }
  return object;
}

console.log(
  arrayToObject(["name", "Nika", "drives", "BMW", "Hobby", "Football"])
);

function arrayToObject2(keys, values) {
  let obj = {};
  for (let i = 0; i < keys.length; i++) {
    obj[keys[i]] = values[i];
  }

  return obj;
}

console.log(
  arrayToObject2(["name", "drives", "hobby"], ["nika", "bmw", "Football"])
);
