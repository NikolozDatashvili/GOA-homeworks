//<> Exercise N1
function operation() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Operation sucsessful");
    }, 2000);
  });
}

operation().then((value) => console.log(value));
//<> Exercise N2

function failing() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("Something went wrong!");
    }, 3000);
  });
}
failing().catch((error) => console.log(error));

//<> Exercise N3

Promise.resolve("Step 1 done")
  .then((result) => result + " -> Step 2 done")
  .then((result) => result + " -> Step 3 done")
  .then((finalResult) => console.log(finalResult));
//<> Exercise N4
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

delay(2000)
  .then(() => {
    console.log("Hello");
    return delay(3000);
  })
  .then(() => {
    console.log("World");
  });

//<> Exercise N5
function getUser() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ name: "Soso", age: 20 });
    }, 2000);
  });
}

getUser().then((user) => {
  console.log(user.name);
});
