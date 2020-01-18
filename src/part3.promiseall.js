// PART 3: Chain promises with Promise.all

const timeout = require("./part1.1.timeout");

let a = Promise.all([timeout(30), timeout(5000), timeout(200)]).then(x =>
  console.log(x)
);
