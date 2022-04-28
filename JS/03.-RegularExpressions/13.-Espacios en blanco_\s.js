/*
                    ----- JS -----
    Usar expresiones regulares.

    ?
*/

//?       
//!       Permite aceptar los espacios en blanco tambien caracterres de retorno de carro, 
//!         tabulaciones, alimentación de formulario y saltos de línea. 
//TODO-   \s 

let whiteSpace = "Whitespace. Whitespace everywhere!"
let spaceRegex = /\s/g;
console.log(whiteSpace.match(spaceRegex));


//! Buscar todo excepto espacios en blanco con \S   donde la s es mayuscula
let sample = "Whitespace is important in separating words";
let countNonWhiteSpace = /\S/g; // Cambia esta línea
let resultado = sample.match(countNonWhiteSpace);
console.log(resultado);