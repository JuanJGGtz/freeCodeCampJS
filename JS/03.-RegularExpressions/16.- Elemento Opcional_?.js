/*
                    ----- JS -----
    Usar expresiones regulares.

    
*/

//?       
//!       Para verificar la posible existencia de un caracter, "elemento opcional"  ?
//!   a? siempre debe de ir PRECEDIDO del caracter OPCIONAL 


let american = "color";
let british = "colour";
let rainbowRegex= /colou?r/; // <- Precedido de la U, entonces la u puede ir o no
console.log(rainbowRegex.test(american));
console.log(rainbowRegex.test(british));