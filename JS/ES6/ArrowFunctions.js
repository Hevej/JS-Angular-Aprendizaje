let name = 'oscar';
let age = 32;

obj = { name: name, age: age};

//ES6
obj2 = {name, age};
console.log(obj2);

//--/
const names =  [
    {name: 'Oscar', age: 32},
    {name: 'Yesica', age: 27}
]

let listOfName = names.map(function(item){
    console.log(item.name);
});

//ES6
let listOfNames = names.map(item => console.log(item.name));

//ES6 Arrow Function
const arrowFunction = (name, lastName) => {
    console.log(name, lastName);
}

listOfNames3('Luis', 'Pinto');

const listOfNames4 = name => {
    //...
}

const square = num => num * num;