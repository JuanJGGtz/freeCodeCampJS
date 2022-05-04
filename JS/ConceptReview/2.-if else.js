// if...else es una sentencia condicional que ejecutará un bloque if... cuando una condicion 
// if sea VERDADERA si la condicion es FALSA ejecutará el bloque else...
//
//! Los siguientes valores son considerados FALSOS
//    falso
//    0 (cero)
//    -0 (cero negativo)
//    0n (BigInt cero)
//    "", '', ` `  (cadena vacía)
//    nulo
//    no definido
//    NaN (no es un número)

//Podemos utilizar multiples condiciones utilizando los operadores lógicos && (AND) y || (OR) teniendo en cuenta sus características
const edad = 18;

if (edad < 18) {
    console.log("Alice es menor de 18 anios.");
} else if (edad >= 18 && edad <= 21) {
    console.log("Alice tiene entre 18 y 21 anios de edad.");
} else {
    console.log("Alice tiene mas de 21 anios.");
}

//Operador ternario
//? condicion ? if condicion es verdadera : if condicion es falsa
const ciudadano = edad >= 18 ? "Puede votar" : "No puede votar";

console.log(ciudadano);