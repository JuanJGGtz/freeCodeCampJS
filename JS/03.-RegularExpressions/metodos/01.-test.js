/*
    Podemos encontrar palabras en una cadena utilizando expresiones regualres
    Ejemplo:
    "The dog chased the cat" Expresión regular -> /the/
                    ----- JS -----
    Usar expresiones regulares.
*/

//?         Método : 
//!             .test()
//TODO-     Devueve TRUE|FALSE


//TODO-   Ejemplo #1:
//! Cadena de texto
let testStr = "freeCodeCamp";
//! Expresion regular
let testRegex = /Code/;
//! Aplicar la Expresion regular a la Cadena de texto
testRegex.test(testStr)
//console.log('test #1 :>> ', testRegex.test(testStr));

//TODO-   Ejemplo #2:
let myString = "Hello, World!";
let myRegex = /Hello/;
let result = myRegex.test(myString); // Cambia esta línea
//console.log('test #2 :>> ', myRegex.test(myString));


//TODO-   Ejemplo #2: Búsqueda literal
//* Las busquedas deben ser literales,
//* no es lo mismo Kevin == kevin
let testStr2 = "Hello, my name is Kevin.";
let testRegex2 = /kevin/;
testRegex2.test(testStr2);
//console.log('test #3 :>> ', testRegex2.test(testStr2));


//TODO-   Ejemplo #4: Cadena literal con diferentes posibilidades | OR
//* Se puede buscar múltiples patrones usando operador OR: |

let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird|fish/; // Haciendo coíncidir cualquiera de los siguientes patrones [dog, cat, bird, o fish]
let resultor = petRegex.test(petString);
console.log('test #4 :>> ', resultor);