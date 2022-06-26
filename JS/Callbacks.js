const operation = (numero1, numero2, op) => {
    return setTimeout(() => {
        console.log(op(numero1,numero2));
    }, 500);
}

operation(1, 3, (a,b) => a+b);
