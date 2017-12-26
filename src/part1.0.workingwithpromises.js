/* PART 1: Running the timeout */
const timeout = require('./part1.1.timeout');

// Example 1
console.log('Ready....')
timeout(2000).then( () => console.log('Go!'));
