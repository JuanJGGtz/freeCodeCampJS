/*
                    ----- JS -----
    Usar expresiones regulares.

    ?
*/

//?       
//!             
//TODO-    /[0-9]/ -> /\d/ Buscamos solo dígitos o números

//COntando cuántos digitos hay en una cadena de caracteres
let movieName = "2001: A Space Odyssey";
let numRegex = /\d/g; // Contamos todos los caracteres de la cadena movieName
let result = movieName.match(numRegex).length;
console.log(result);

//TODO-    /[^0-9]/ -> /\D/ Buscamos todos los caracteres que no sean numeros
let movieName2 = "2001: A Space Odyssey";
noNumRegex = /\D/g; // Contamos todos los caracteres que NO son NUMEROS
let result2 = movieName2.match(noNumRegex).length;
console.log(result2);