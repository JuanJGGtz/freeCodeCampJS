/*
                    ----- JS -----
    Usar expresiones regulares.

    +
*/

//?       
//!             +
//TODO-     Hace coincidir un grupo de caracteres seguidos 

let difficultSpelling = "Mississippi";
let myRegex = /s+/g; // Cambia esta línea
let result = difficultSpelling.match(myRegex);
console.log('result :>> ', difficultSpelling.match(myRegex));
console.log('result :>> ', result);