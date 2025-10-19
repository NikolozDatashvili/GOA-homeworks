//// localStorage გამოიყენება იმისათვის, რომ მომხმარებელმა
//// შეძლოს ინფორმაციის შენახვა მისსავე ბრაუზერში.
//// მოცულობა საშუალოდ 5-10MB-მდეა (ზუსტი ზომა ბრაუზერზეა დამოკიდებული).

const { use } = require("react");

//// localStorage ყველა მონაცემს ინახავს სტრინგის სახით.
//// ამიტომ თუ გვინდა მასივის ან ობიექტის შენახვა,
//// საჭიროა JSON.stringify() – ობიექტის სტრინგად გადაყვანა.

//// ხოლო თუ გვინდა რომ სტრინგად შენახული მონაცემი ისევ ობიექტად/მასივად გარდავქმნათ,
//// ვიყენებთ JSON.parse().

// /// Method 1
// //// ინახავს მონაცემს (key, value)
// localStorage.setItem("name", "Nika");
// //| აბრუნებს შენახულ მნიშვნელობას key-ის მიხედვით
// localStorage.getItem("name");
// //\ შლის მონაცემს key-ის მიხედვით
// localStorage.removeItem("name");
// //<> ასუფთავებს მთლიან localstorage-ს
// localStorage.clear();
// //* აბრუნებს key-ს ინდექსის მიხედვით key(index)
// localStorage.key(0);

localStorage.setItem("name", "Nika");

let name1 = localStorage.getItem("name");
console.log(name1);

window.onload = function () {
  const input1 = document.getElementById("input1");
  const input2 = document.getElementById("input2");

  if (localStorage.getItem("input1Value")) {
    input1.value = localStorage.getItem("input1Value");
  }

  if (localStorage.getItem("input2Value")) {
    input2.value = localStorage.getItem("input2Value");
  }
};

function saveData() {
  const input1 = document.getElementById("input1").value;
  const input2 = document.getElementById("input2").value;

  localStorage.setItem("input1Value", input1);
  localStorage.setItem("input2Value", input2);
}
