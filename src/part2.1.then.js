/* Part 2: THEN */

const timeout = require('./part1.1.timeout');

//const v = timeout(2000).then(o=> console.log(v));
timeout(2000).then(() => console.log("holaAA"));
console.log("Espera 2 seg...");
