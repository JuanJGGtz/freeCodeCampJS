/*
                    ----- JS -----
    Usar expresiones regulares.

    ?
*/

//?       
//!             
//TODO-    /[A-Za-z0-9_]+/ -> /\w+/  para hacer coincidir ,letras y numeros, también incluye el caracter _

let longHand = /[A-Za-z0-9_]+/;
let shortHand = /\w+/;
let numbers = "21";
let varNames = "important_var";
console.log(longHand.test(numbers));
console.log(shortHand.test(numbers));
console.log(longHand.test(varNames));
console.log(shortHand.test(varNames));

//CONTAR EL NUMERO DE CARACTERES DE UNA CADENA
let quoteSample = "The five boxing wizards jump quickly.";
let alphabetRegexV2 = /\w/g; // Cambia esta línea
let result = quoteSample.match(alphabetRegexV2).length;


console.log(quoteSample.match(alphabetRegexV2)); 
console.log(result); 
console.log(quoteSample.length); 


//TODO - /[^A-Za-z0-9_]+/ -> /\W+/  para hacer coincidir ,caracteres que NO SON letras y numeros, también incluye el caracter _

let quoteSampleW = "The five boxing wizards jump quickly.";
let nonAlphabetRegex = /\W/g; // Agrupamos aquellos caracateres "." y "(Espacios en blanco)"
let result3 = quoteSampleW.match(nonAlphabetRegex).length;
console.log(result3);