//Podemos hacer agrupaciones utilizando 
//! (   )

// encontraremos "Pumpkin" utilizando la siguente expresión regular /P(engu|umpk)in/

let myString = "Eleanor Roosevelt";
let myRegex = /(Eleanor|Franklin D.) Roosevelt/g; // Cambia esta línea
let result = myRegex.test(myString);
console.log('result :>> ', result);