let counter = require("./counter");
counter.inc();
counter.inc();
console.log("b.js: count after incs =", counter.get());
