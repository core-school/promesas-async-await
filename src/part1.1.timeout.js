// PART 1: Rewrite timeout as an arrow function

const timeout = ms => new Promise(resolve => setTimeout(resolve, ms));

module.exports = timeout;
