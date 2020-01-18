// PART 1: Rewrite timeout as an arrow function

// const timeout = function(ms){
//     return new Promise(function(resolve){
//       setTimeout(function(){
//         resolve();
//       },ms);
//     });
//   };

const timeout = ms => new Promise(resolve => setTimeout(resolve, ms));

module.exports = timeout;
