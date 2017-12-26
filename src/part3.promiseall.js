const timeout = require('./part1.1.timeout');

/* Part 2: Chain promises with Promise.all */
let a = Promise.all([timeout(30),timeout(10000),timeout(200)])
          .then(x => console.log(x));
