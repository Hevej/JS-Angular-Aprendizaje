function* helloWorld() {
    if(true){
        yield 'Hello, ';
    }
    if (true) {
        yield 'World';
    }
};

const generatorHello = helloWorld();
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);

function* countThings() {
    const emojis = ['😊', '😂', '🤣'];
    for (let i = 0; i < emojis.length; i++){
        yield emojis[i]
    }
};

const generatorEmojis = countThings();

generatorEmojis.next();
generatorEmojis.next();
generatorEmojis.next();