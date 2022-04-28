/*
                    ----- JS -----
    Usar expresiones regulares.
    Banderas

Permite (i): Coincidir las diferencias de capitalización.

!  /patrón/i

*/

//?         BANDERAS : 
//!             [i]
//TODO-     Devueve TRUE|FALSE


//TODO-   Ejemplo #1:
let myString = "freeCodeCamp";
let fccRegex = /freecodecamp/i; // Cambia esta línea
let result = fccRegex.test(myString);
console.log('Ejemplo #1 :>> ',result);