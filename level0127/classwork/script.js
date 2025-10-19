// //// Task 11
// function prom1(delay, promiseId) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(`Promise ${promiseId}`);
//     }, delay);
//   });
// }

// Promise.all([prom1(1000, "1"), prom1(2000, "2"), prom1(3000, "3")]).then(
//   (message) => {
//     console.log(message);
//   }
// );

// //// Task12

// const prom2 = () => {
//   return new Promise((resolve, reject) => {
//     let randomDelay = 1000 + Math.random() * 4000;
//     setTimeout(() => {
//       resolve(`Resolved in ${randomDelay}ms`);
//     }, randomDelay);
//   });
// };

// Promise.all([prom2(), prom2(), prom2()]).then((msg) => {
//   console.log(msg);
// });
//// Task 16

// const prom3 = (promId, delay) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(`Promise ${promId}`);
//     }, delay);
//   });
// };
// Promise.race([prom3(1, 1000), prom3(2, 2000), prom3(3, 3000)]).then(
//   (result) => {
//     console.log(result);
//   }
// );

// //// Task 17

// const task17 = () => {
//   return new Promise((resolve, reject) => {
//     let randomDelay = 1000 + Math.random() * 4000;
//     setTimeout(() => {
//       resolve(`Resolved in ${randomDelay}ms`);
//     }, randomDelay);
//   });
// };

// Promise.race([task17(), task17(), task17()]).then((msg) => {
//   console.log(msg);
// });

//// Task 18

const task18 = (text, delay) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(text);
    }, delay);
  });
};
Promise.race([
  task18("instant promise", 0),
  task18("afternoon", 1000),
  task18("evening", 2000),
]).then((msg) => {
  console.log(msg);
});
