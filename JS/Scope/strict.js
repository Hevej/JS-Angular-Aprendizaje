//pi = 3.1416; // Hizo un hoisting y asigno var pi -> undefined, primero.
'use strict';
let pi = 3.1416; // Evita que se pueda hacer lo que escribi en la primera linea.
console.log(pi);

function myFunction() {
    'use srict'; // Se puede usar dentro de un entorno en especifico, como en una función.
    return pi = 3.1416;
}

console.log(myFunction());