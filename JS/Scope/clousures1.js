function crearContador() {
    let contador = 0;
    return function incrementar() {
        contador = contador + 1;
        return contador;
    };
}

const contador1 = crearContador();
console.log(contador1());
console.log(contador1());
console.log(contador1());

//

function crearContador2() {
    let contador = 0;

    setTimeout(() => {
        contador += 20;
    }, 10);

    return function incrementar() {
        contador = contador + 1;
        return contador;
    };
}

const contador2 = crearContador2();
setTimeout(() => {
    console.log(contador2());
}, 50);
setTimeout(() => {
    console.log(contador2());
}, 100);
setTimeout(() => {
    console.log(contador2());
}, 100);
 