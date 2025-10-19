//// Task 1

// fetch("https://jsonplaceholder.typicode.com/posts/1")
//   .then((res) => res.json())
//   .then((data) => console.log(data));

///  Task 2

// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((res) => res.json())
//   .then((users) => {
//     let names = [];
//     let usersDiv = document.getElementById("users");
//     users.forEach((user) => {
//       names.push(user.name);
//       usersDiv.textContent += `
//       Name:  ${user.name},`;
//     });

//     console.log(names);
//   });

//|  Task 3

// fetch("https://jsonplaceholder.typicode.com/users/5")
//   .then((res) => res.json())
//   .then((user) => {
//     console.log(user.email);
//     let emailDiv = document.getElementById("email");
//     emailDiv.textContent = "Email: " + user.email;
//   }).then;

//\ Task 4
// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((res) => res.json())
//   .then((users) => {
//     let emailDiv = document.getElementById("task4Email");
//     let nameDiv = document.getElementById("task4Name");
//     users.forEach((user) => {
//       emailDiv.textContent += `

//       Email: ${user.email}`;
//       nameDiv.textContent += `

//       Name: ${user.name}`;
//     });
//   });
//\ Task 5
// btn.addEventListener("click", () => {
//   fetch("https://dog.ceo/api/breeds/image/random")
//     .then((res) => res.json())
//     .then((img) => {
//       let btn = document.getElementById("btn");
//       document.querySelector("img").src = img.message;
//     });
// });
