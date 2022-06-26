// Declarativas

function miFuncion(nombre){
    console.log("Hola ${nombre}");
}

// Expresión/Expresivas/Anonimas

var miFuncionExp = function(a, b){
    console.log(a + b);
}

// Llamado

miFuncion("Luis");
miFuncionExp(1,2);