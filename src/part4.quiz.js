
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
// juan y cristian
/*
adios1A
hola1A
adios1B
hola1B
adios2B
holaBB
adios2A
holaAA
*/
