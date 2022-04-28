/*
                    ----- JS -----
    Usar expresiones regulares.

    ?
*/

//?       
//!             
//TODO-     Extraer la cadena más pequeña posible, utilizando ?

let text = "<h1>Winter is coming</h1>";
let myRegex = /<.*>/; //Extraemos el argumento más GRANDE posible que esté entre los caracteres "<" y ">"
let result = text.match(myRegex);
console.log('Coincidencia :>> ',result);

let myRegexCoincidenciaPerezosa = /<.*?>/; //Extraemos el argumento más PEQUEÑO posible que esté entre los caracteres "<" y ">"
console.log('Coincidencia perezosa :>> ',  text.match(myRegexCoincidenciaPerezosa));