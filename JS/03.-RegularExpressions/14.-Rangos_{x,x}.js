/*
                    ----- JS -----
    Usar expresiones regulares.

    ?
*/

//?       
//!       Permite establecer un rango de insidencias en una cadena 
//!  {2 , 5} -> de 2 a 5 veces
//!  {2 ,} -> de 2 a infinito veces

//incida con toda la frase Oh no solo cuando tenga de 3 a 6 letras h.

let ohStr = "Ohhhh no";
let ohRegex = /Oh{3,6} no/; // Cambia esta línea
let result = ohRegex.test(ohStr);
console.log('result :>> ', result);