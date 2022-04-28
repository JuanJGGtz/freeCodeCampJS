/*
                    ----- JS -----
    Usar expresiones regulares.

    ?
*/

//?       
//!             
//TODO-     Podemos bucsar una coincidencia al FINAL con el caracater de dolar [$]

//! VALIDDAR EL NUMERO DE CONTROL :
let string = "E5060541A";
let regex = /^E[0-9]*A$/g;
//let regex = /A$/;
console.log('1.- Coincidencia /A$/ -> E15020541A :>> ', regex.test(string));
let regex2 = /^E[0-9]*A$/g;

let string2 = "E12V";
console.log('2.- Coincidencia /A$/ -> E12V :>> ', regex2.test(string2));