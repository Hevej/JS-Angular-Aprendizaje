var a; //Declarando
var b = 'b'; //Declaramos / Asignamos
b = 'bb'; //Reasignación
var a = 'aa'; //Redeclaración

//Global Scope
var fruit = 'Apple'; //Global

function bestFruit() {
    console.log(fruit);
}

bestFruit();

function countries() {
    country = 'Colombia'; //Declaración global
    console.log(country);
}

countries();
console.log(country);