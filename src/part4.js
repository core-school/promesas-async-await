
/* Part 4: Promise QUIZ */

function timeout(ms, letra) {
     return new Promise(function(resolve){
       console.log("adios1" + letra);
       setTimeout(function(){
         resolve();
         console.log("adios2" + letra);
       }, ms);
       console.log("hola1" + letra);
     });
 }
timeout(140, "A").then(o => console.log("holaAA"));
timeout(100, "B").then(o => console.log("holaBB"));
// Yaiza y Manu
/*
 - adios 1A *
 - hola 1A *
 - adios 1B
 - hola 1B
 - adios 2B
 - hola BB
 - adios 2A
 - hola AA
 */

// Carlos y Miguel
/*
 - adios 1A *
 - hola 1A *
 - adios 1B *
 - hola 1B *
 - hola BB
 - adios 2B
 - hola AA
 - adios 2A
 */

// Victor
/*
 - hola 1B
 - hola 1A
 - adios 2B
 - adios 2A
 - adios 1B
 - adios 1A
 - holaBB
 - holaAA
*/
