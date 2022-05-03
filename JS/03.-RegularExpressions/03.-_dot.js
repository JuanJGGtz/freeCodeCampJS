/*
                    ----- JS -----
    Usar expresiones regulares.
    Banderas

(.): Carácter de comodin
-> ./metodos/01.-test.js

*/

//?       
//!             [.]
//TODO-     Permite hacer coincidir UN PATRON con el siguiente o posterior caracter ejemplo /.un/ coincidiria -> run, sun, fun, pun, nun, y bun
//! Permite hacer coincidir UN PATRON con el siguiente o posterior caracter  
//! /.un/ coincidiria -> run, sun, fun, pun, nun, y bun



//TODO-   Ejemplo #1:

//TODO-   Ejemplo #2:
let humStr = "I'll hum a song";
let hugStr = "Bear hug";
let huRegex = /hu./;
console.log('humStr :>> ', huRegex.test(humStr));
console.log('hugStr :>> ', huRegex.test(hugStr));

console.log('object :>> ', hugStr.match(huRegex));
console.log('object :>> ', humStr.match(huRegex));
