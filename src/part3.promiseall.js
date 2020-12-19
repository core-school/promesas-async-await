// PART 3: Chain promises with Promise.all

const timeout = require("./part1.1.timeout");

Promise.all([
  timeout(30).then(() => "A"),
  timeout(5000),
  timeout(200)
]).then(x => console.log(x));
