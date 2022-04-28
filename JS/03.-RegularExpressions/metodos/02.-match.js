/*
    Podemos encontrar palabras en una cadena utilizando expresiones regualres
    Ejemplo:
    "The dog chased the cat" Expresión regular -> /the/
                    ----- JS -----
    Usar expresiones regulares.
*/

//?         Método : 
//!             .match()
//TODO-     Extrae las coíncidencias encontradas



/**
 * BUSCAR UN PATRÓN
 */


//TODO-   Ejemplo #1:
"Hello, World!".match(/Hello/);
console.log('Ejemplo #1 :>> ', "Hello, World!".match(/Hello/));
//? [ 'Hello', index: 0, input: 'Hello, World!', groups: undefined ]


//TODO-   Ejemplo #2:
let ourStr = "Regular expressions";
let ourRegex = /expressions/;
ourStr.match(ourRegex);
console.log('Ejemplo #2 :>> ',  ourStr.match(ourRegex));
/*
Ejemplo #2 :>>  [
  'expressions',
  index: 8,
  input: 'Regular expressions',
  groups: undefined
]
*/

//! DIFERENCIAS ENTRE MATCH Y TEST como falso
//TODO-   Ejemplo #3:
console.log('MATCH :>> ', 'string'.match(/regex/));
//? NULL
console.log('TEST :>> ', /regex/.test('string'));
//? false

//TODO-   Ejemplo #4:
let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/; // Buscamos la palabra
let result = extractStr.match(codingRegex); // hacemos match sobre el string

/**
 * BUSCAR MÄS DE UN PATRÓN
 */