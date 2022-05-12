/**
 * Podemos remplazar el texto de una busqueda si encontramos una coincidencia con el metodo .replace
 * 
 * replace(expresion regular|patrón , cadena a remplazar)
 * 
 */

let str = "one two three";
let fixRegex = /(\w+)\s(\w+)\s(\w+)/; // Leemos un grupo de patrones, en este caso sepresentado por ( ) 
//dentro habrá de ir cualquier serie de letras almenos una, precedido de un salto de linea [\s]
let replaceText = "$3 $2 $1"; // Esta será la nueva estrutura de la cadena de remplazo accedemos a los grupos de camputa 1,2 y 3
let result = str.replace(fixRegex, replaceText);//remplazamos 
console.log('result :>> ', result);

let wrongText = "The sky is silver.";
let silverRegex = /silver/;
let nuevoResultado = wrongText.replace(silverRegex, "blue");

console.log('nuevoResultado :>> ', nuevoResultado);