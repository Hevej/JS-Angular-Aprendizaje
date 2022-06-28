function fruits() {
    if (true) {
       var fruit1 = 'Apple';
       let fruit2 = 'Kiwi';
       const fruit3 = 'Banana';
       console.log(fruit2);
       console.log(fruit3);
    }
    console.log(fruit1); //Va a poder acceder
    //console.log(fruit2); //No va a poder acceder
    //console.log(fruit3); //No va a poder acceder
}

fruits();