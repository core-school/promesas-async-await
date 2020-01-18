// PART 1: THEN

// This was the same example as part 0, but now resolve has some call parameters
const timeoutHola = function(ms, name) {
  return new Promise(function(resolve) {
    setTimeout(function() {
      resolve(name);
    }, ms);
  });
};

timeoutHola(2000, "Juan").then(h => console.log(`Say ${h}`));
console.log("Espera 2 seg...");
