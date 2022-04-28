/*
                    ----- JS -----
    Usar expresiones regulares.

    ?
*/

//?       
//!       Permite establecer un numero exacto de coincidencias {n}


let A4 = "haaaah";
let A3 = "haaah";
let A100 = "h" + "a".repeat(100) + "h";
let multipleHA = /ha{3}h/; // <---- solo 3 a
console.log(multipleHA.test(A4));
console.log(multipleHA.test(A3));
console.log(multipleHA.test(A100));
