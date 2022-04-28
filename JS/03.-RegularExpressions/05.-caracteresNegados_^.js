/*
                    ----- JS -----
    Usar expresiones regulares.

    [  ]
*/

//?       
//!             ^
//TODO-     Define un cunjunto de caracteres que no deseas coíncidir
//!             /[^auo]/gi -> No coincide a u y o
//! USAR (\) al usar un caracter como (]) en el regex -> /[^\]]/g donde ignoramos (])



//TODO-   Ejemplo #1:
let myString = 'sal del sol si su . / @ [ ! ] "';
let myReg1 =  /[^aeo]/ig; //! <-- Ten en cuenta que caracteres como ., !, [, @, / y el espacio en blanco coinciden;
console.log('No coincidir :>> ', myString.match(myReg1));
let myReg2 =  /[^aeo.!/[@"\] ]/ig; //! <-- Ten en cuenta que caracteres como (]) necesitan ir con (\)
console.log('No coincidir otros caracteres:>> ', myString.match(myReg2));


//? Crea una sola expresión regular que coincida con todos los caracteres que no son un número o una vocal. 
//? Recuerda incluir las banderas apropiadas en la expresión regular.

let quoteSample = "3 blind mice.";
let myRegex = /[^aeiou0-9]/ig; // Cambia esta línea
let result = quoteSample.match(myRegex); // Cambia esta línea
console.log(result);