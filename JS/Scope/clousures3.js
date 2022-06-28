const estilosPorDefecto = 'color: white;';
function crearImpresoraDeMensajes(tipo, estilos) {
    return function mensaje(str){
        console.log(`%c ${tipo}: ${str}`, estilosPorDefecto + estilos);
    };
}

const error = crearImpresoraDeMensajes('Error', 'background: red;');
const warning = crearImpresoraDeMensajes('Warning', 'background: yellow;');
error('Ha fallado la conexión');