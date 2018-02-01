// PART 0: Create a function that returns a promise

const timeout = function(ms){
  return new Promise(function(resolve){
    setTimeout(function(){
      resolve();
    },ms);
  })
};

module.exports = timeout;