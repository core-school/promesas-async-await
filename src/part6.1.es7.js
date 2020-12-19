// PART 6: async await example
const timeout = require("./part1.1.timeout");

const saluda = async()=> {
  console.log("hola");
  await timeout(2000);
  return 33;
};

/*
let x = await saluda();
console.log("EL valor de retorno", x);
*/
saluda().then(x=>console.log("EL valor de retorno", x));