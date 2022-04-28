/*
                    ----- JS -----
    Usar expresiones regulares.

    [  ]
*/

//?       
//!             [ ]
//TODO-     Permite definir un grupo de caracteres que deseas coincidir colocandolos entre corchetes
//!             /s[auo]l/ -> sal, sul, sol



//TODO-   Ejemplo #1:
let myString = 'sal del sol';
let myReg = /s[auo]l/g;
console.log('EJEMPLI #1 :>> ', myReg.test(myString) );
console.log('EJEMPLI #1 :>> ', myString.match(myReg) );

//MATCH entre rangos de letras, numeros 

//! LETRAS 

//TODO-   Ejemplo #2:
let myStringA = 'HOLA murcielago';
let stringReg = /[aeiou]/ig;
console.log('Vocales :>> ', myStringA.match(stringReg));


//TODO-   Ejemplo #3:
let myStringB = 'HOLA murcielago';
let stringRegRangos = /[a-d]/ig;
console.log('Rangos :>> ', myStringB.match(stringRegRangos));

//! NUMEROS

//TODO-   Ejemplo #4:
let numeros = '768452312sda3123987882';
let regex = /[0-3]/g;
console.log('Rangos Nuúmeros :>> ', numeros.match(regex));