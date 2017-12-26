/* PART 1: A timeout as a promise */

// Example 1
const timeout = ms => new Promise((resolve,reject) => {
  setTimeout(() =>{
    resolve();
    console.log("Hola k ase");
  }, ms);
  //reject();
});

timeout(1000).then( () => console.log("OK")).catch(e=> console.log("ERROR"));



// Example 2
/*
const timeout2 = ms => new Promise((resolve,reject) => {
  setTimeout(()=> {
    console.log("Done!");
    resolve();
  }, ms);
  reject();
});

timeout2(1000).then( () => console.log("OK")).catch(e=> console.log("ERROR"));
*/
