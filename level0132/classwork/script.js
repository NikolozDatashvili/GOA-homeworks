let arr = [1, 2, 3, 4, 5];

localStorage.setItem("myArray", JSON.stringify(arr));

let savedArr = JSON.parse(localStorage.getItem("myArray"));

console.log(savedArr);
