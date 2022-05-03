/*
                    ----- JS -----
    Usar expresiones regulares.

    
*/

//? Permite buscar por anticipado un patrón en una cadena, es util cuando deseas bucar varios patrones sobre la misma cadena

//! lookahead positivo => (?=...)
//! lookahead negativo => (?!...)

//? Lookahead
//? La sintaxis es: X(?=Y). Esto significa "buscar X, pero considerarlo una coincidencia solo si es seguido por Y". 
//? Puede haber cualquier patrón en X y Y.
//  \d+(?=€)
//   X (?=Y)
let str = "1 pavo cuesta 350€";
let response = str.match(/\d+(?=€)/);// 30, el número 1 es ignorado porque no está seguido de €
//console.log( response[0] ); 


let sampleWord = "8pass99";
let pwRegex = /(?=\w{5,})(?=\D+\d{2,})/; // Cambia esta línea
let r = sampleWord.match(pwRegex);
console.log(r);

