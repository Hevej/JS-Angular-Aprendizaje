let lorem = "Neque porro quisquam est qui dolorem ipsum \n"
            + "quia dolor sit amet, consectetur, adipisci velit..";

//ES6
let lorem2 = `Neque porro quisquam est qui dolorem ipsum 
quia dolor sit amet, consectetur, adipisci velit..`;

console.log(lorem);
console.log(lorem2);

//--//

let person = {
    'name': 'oscar',
    'age': 32,
    'country': 'MX'
}

console.log(person.name, person.age, person.country);


//ES6
let {name, age, country} = person;
console.log(name, age, country);

//--//
let team1 = ['Oscar', 'Julian', 'Ricardo'];
let team2 = ['Valeria', 'Yesica', 'Camila'];

//ES6
let education = ['David', ...team1, ...team2];
console.log(education);

//--//
{
    var globalVar = "Global Var";
}

//ES6
{
    let globalLet = 'Global Let'
}

console.log(globalVar);
console.log(globalLet);