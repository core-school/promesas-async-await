// PART 2: Example 2: Reject after timeout

const timeout = ms =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Done!");
      resolve();
    }, ms);
    reject();
  });

timeout(1000)
  .then(() => console.log("OK"))
  .catch(e => console.log("ERROR"));
