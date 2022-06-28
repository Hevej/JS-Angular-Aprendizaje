function crearContador(contador = 0) {
    return {
        incrementar: function() {
            contador += 1;
            return contador;
        },
        decrementar: function() {
            contador -= 1;
            return contador;
        },
        obtenerValor: function() {
            return contador;
        }
    };
}

const contador1 = crearContador(10);
const contador2 = crearContador(500);
const contador3 = crearContador();
contador1.incrementar();
contador1.incrementar();
contador1.decrementar();
console.log(contador1.obtenerValor());