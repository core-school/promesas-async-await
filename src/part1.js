/* PART 1: A timeout as a promise */

// Example 1
const timeout = ms => new Promise(resolve => setTimeout(resolve, ms));

// Example 2
/*const timeout = function(ms){
  return new Promise(function(resolve){
    setTimeout(function(){
      resolve("hola");
  },ms);
  })
};*/


module.exports = timeout;
