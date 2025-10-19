// //<> Task 1
// new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Task 1 completed");
//   }, 2000);
// });

// //<> Task 2
// new Promise((resolve, reject) => {
//   reject("Task 2 failed");
// }).catch((error) => {
//   console.log(error);
// });
// //<> Task 3
// function multiply(num) {
//   new Promise((resolve, reject) => {
//     resolve(num);
//   })
//     .then((num) => {
//       return num * 2;
//     })
//     .then((num) => {
//       console.log(num);
//     });
// }
// multiply(5);
// //<> Task 4
// function task4() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       reject("Task 4 failed");
//     }, 2000);
//   });
// }
// task4().catch((error) => {
//   console.log(error);
// });
//<> Task 5
// function task5() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("First");
//     }, 2000);
//   });
// }
// task5().then((value) => {
//   console.log(value);
//   setTimeout(() => {
//     console.log("Second");
//   }, 1000);
// });
//<> Task 6

// function task6() {
//   return new Promise((resolve, reject) => {
//     let delay = 1000 + Math.random() * 4000;
//     setTimeout(() => {
//       resolve("Task 6 complete");
//     }, delay);
//   });
// }
// task6()
//<> Task 7

// function task7() {
//   return new Promise((resolve, reject) => {
//     let delay = 1000 + Math.random() * 2000;
//     setTimeout(() => {
//       resolve("First");
//     }, delay);
//   });
// }

// task7().then(() => {
//   let delay = 1000 + Math.random() * 2000;
//   setTimeout(() => {
//     console.log("Second");
//   }, delay);
// });

//<> task 8

// function task8() {
//   return new Promise((resolve, reject) => {
//     let delay = 1000 + Math.random() * 3000;
//     setTimeout(() => {
//       reject("Task 3 failed");
//     }, delay);
//   });
// }
// task8().catch((error) => {
//   console.log(error);
// });

//<> Task 9

// function task9() {
//   return new Promise((resolve, reject) => {
//     let delay = 1000 + Math.random() * 4000;
//     setTimeout(() => {
//       if (delay >= 3000) {
//         resolve("Task 1 complete");
//       } else {
//         resolve("Task 1 was quick");
//       }
//     }, delay);
//   });
// }
// task9().then((value) => {
//   console.log(value);
// });

//<> Task 10
function task10() {
  return new Promise((resolve, reject) => {
    let randomNum = Math.random();
    let delay = 1000 + randomNum * 3000;
    setTimeout(() => {
      if (randomNum < 0.3) {
        reject("Task 3 failed");
      } else {
        resolve("Task 3 complete");
      }
    }, delay);
  });
}
task10()
  .catch((value) => {
    console.log(value);
  })
  .catch((error) => {
    console.log(error);
  });
