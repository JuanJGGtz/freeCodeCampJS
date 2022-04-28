/*
                    ----- JS -----
    Usar expresiones regulares.
    Banderas

Permite (g): Coincidir todas las incidencias de un patrón, se combina con el método MATCH
-> ./metodos/02.-match.js

*/

//?         BANDERAS : 
//!             [g]
//TODO-     Devueve las coincidencias, sin ella, devuelve la primera coincidencia 


//TODO-   Ejemplo #1:
let str = "Hola a todos y a todas";
let strRegex = /a/g;
//console.log('Ejemplo TEST #1 :>> ', strRegex.test(str));
//console.log('Ejemplo MATCH #1 :>> ', str.match(strRegex));
//? "Hola a todos y a todas"
//? [ 'a', 'a', 'a', 'a' ]


//! APLICANDO LAS BANDERAS "g i"
//TODO-   Ejemplo #2:
let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /twinkle/gi; // Buscamos todas las coíncidencias sin importar la capitalización
let result = twinkleStar.match(starRegex); 
console.log('Ejemplo MATCH #2 :>> ',result);
//? [ 'Twinkle', 'twinkle' ]


