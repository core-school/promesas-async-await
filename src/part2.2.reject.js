// PART 2: Example 1: Resolve before console.log

const timeout = (ms) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
      console.log("Hola k ase");
      reject();
    }, ms);
  });

timeout(1000)
  .then(() => console.log("OK"))
  .catch((e) => console.log("ERROR",e));
