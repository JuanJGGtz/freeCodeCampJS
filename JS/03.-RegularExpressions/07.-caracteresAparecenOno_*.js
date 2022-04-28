/*
                    ----- JS -----
    Usar expresiones regulares.

    +
*/

//?       
//!             *
//TODO-     Hace coincidir un grupo de caracteres seguidos 

let soccerWord = "gooooooooal!";
let gPhrase = "gut feeling";
let oPhrase = "over the moon"; //! <- no existe cadena g segido de una o
let goRegex = /go*/;
console.log(soccerWord.match(goRegex));
console.log(gPhrase.match(goRegex));
console.log(oPhrase.match(goRegex));