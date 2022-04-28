/*
                    ----- JS -----
    Usar expresiones regulares.

    ?
*/

//?       
//!             
//TODO-     Podemos bucsar una coincidencia al PRINCIPIO con el caracater caret [^]

let string = "E15020541A";
let regex = /^E/;
console.log('1.- Coincidencia /^E/ -> E15020541A :>> ', regex.test(string));

let string2 = "1E5020541A";
console.log('2.- Coincidencia /^E/ -> 1E5020541A :>> ', regex.test(string2));
