//? La sentencia ** Switch **
//? Es una Instrucción de flujo de control
//? Prueba el VALOR DE UNA EXPRESION contra VARIOS CASOS

//! ESTRUCTURA
let expresion = 1;
switch (expresion) {
    case 1:
        //este código se ejecutará si el caso coincide con la expresión
        console.log('CASE 1 :>> ', expresion);
        break;
    case 1:
        //este código se ejecutará si el caso coincide con la expresión
        console.log('CASE 2 :>> ', expresion);
        break;
    case 3:
        //este código se ejecutará si el caso coincide con la expresión
        break;
    default:
        //este código se ejecutará si ninguno de los casos coincide con la expresión
        break;
}

//? Si multiples CASOS coinciden con la expresion se utilizará la primera expresion

//!Las sentencias de switch verificarán la igualdad estricta. En este ejemplo, 
//! desde "2" != 2, se ejecutará la cláusula default.
console.log('\n1.- Se verifica la IAGUALDAD ESTRICTA ("2" != 2) :>> ');
let strNum = "2";
switch (strNum) {
    case 2:
        console.log("Número 2 en una cadena");
        break;
    case "3":
        console.log("Número 3 en una cadena");
        break;
    default:
        console.log("Número no presente");
        break;
}



//! Si no se incluye la sentencia BRAKE la computadora continuará en los siguientes casos
console.log('\n2.- Si no se incluye la sentencia BRAKE la computadora continuará en los siguientes casos :>> ');
switch (2) {
    case 1:
        console.log("El numero 1 fue elegido");
    case 2:
        console.log("El numero 2 fue elegido");
    case 3:
        console.log("El numero 3 fue elegido");
    default:
        console.log("No se eligió ningún número");
}


//! La clausula DEFAULT se puede colocar antes de cualquier otro casoconst comida = "nuez";


console.log('\n3.- La clausula DEFAULT se puede colocar antes de cualquier otro caso:>> ');

const comida = "nuez";

switch (comida) {
    case "pastel":
        console.log("Me gusta el pastel");
        break;
    case "pizza":
        console.log("Me gusta la pizza");
        break;
    default:
        console.log("Me gustan todos los alimentos");
        break;
    case "helado":
        console.log("Me gusta el helado");
        break;
}


console.log('\n4.- Sentencias de alcance de bloque y switch:>> ');

const mandado = "Ir de Compras";
switch (mandado) {
    case "Ir al Dentista": {
        let mensaje = "Odio ir al dentista";
        console.log(mensaje);
        break;
    }
    case "Going Shopping": {
        let mensaje = "I love to shop";
        console.log(mensaje);
        break;
    }
    default: {
        console.log("Sin mandados");
        break;
    }
}