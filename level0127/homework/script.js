// //// Task 1
// let func1 = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       reject("Promise failed");
//     }, 2000);
//   });
// };
// Promise.all([func1(), func1(), func1()]).catch((msg) => {
//   console.log(msg);
// });

// //<> Task 2

// let func2 = () => {
//   return new Promise((resolve, reject) => {
//     let randomErrors = [
//       "Internet error",
//       "Server not responding",
//       "Items not available",
//       "Not enough information",
//     ];
//     let randomSucces = [
//       "Enough information",
//       "Server restarted in time",
//       "Items are available",
//       "Log in successfully",
//     ];

//     if (Math.random() > 0.5) {
//       let randomSuccessIndex = Math.floor(Math.random() * randomSucces.length);
//       resolve(randomSucces[randomSuccessIndex]);
//     } else {
//       let randomErrorIndex = Math.floor(Math.random() * randomErrors.length);
//       reject(randomErrors[randomErrorIndex]);
//     }
//   });
// };
// Promise.all([func2(), func2(), func2()])
//   .then((success) => {
//     console.log(success);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// //// თუ reject-ის მიუხედავად მაინც გვინდა მისი და დანარჩენი ორის handling-ი
// Promise.allSettled([func2(), func2(), func2()])
//   .then((success) => {
//     console.log(success);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// //| Task 3

function func3(num1, num2) {
  return new Promise((resolve, reject) => {
    let randomDelay = 1000 + Math.random() * 3000;
    setTimeout(() => {
      resolve(num1 + num2);
    }, randomDelay);
  });
}

Promise.all([func3(12, 6), func3(1, 6), func3(42, 11)])
  .then((result) => {
    console.log(result);
    return result;
  })
  .then((nums) => {
    let sum = 0;
    for (let i of nums) {
      sum += i;
    }
    console.log(sum);
  });

//\ Task 4

// function func4() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       reject("Promise failed");
//     }, 2000);
//   });
// }

// Promise.race([func4(), func4(), func4()]).catch((msg) => {
//   console.log(msg);
// });

//* Task 5

// function func5() {
//   return new Promise((resolve, reject) => {
//     if (Math.random() > 0.5) {
//       resolve("Higher number");
//     } else {
//       setTimeout(() => {
//         resolve("Lower number");
//       }, 2000);
//     }
//   });
// }

// Promise.race([func5(), func5(), func5()]).then((msg) => {
//   console.log(msg);
// });
