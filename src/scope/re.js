// var

var firstName; // undefined
firstName = "Andres";
console.log(firstName); 

var lastName = "Andres" // decalration / asignation
lastName = 'Ana';       // re-asignation
console.log(lastName);

var secondName = 'David'; // declaration / asignation
var secondName = 'Ana';   // re decalration / reasignation
console.log(secondName);

// let
let fruit = 'Apple';
fruit ='Kiwi';
console.log(fruit);

// let fruit = 'Banana'; // Let don't allow re-declaration
// console.log(fruit);

//const
const animal = 'dog'; // declaration / asignation
// animal = 'cat'; // re-asignation not posible for constants
// const animal = 'snake'; // re-declaration it's not posible
console.log(animal);

// const exeption is for arrays

const vehicle = [];
vehicle.push("Tesla");
console.log(vehicle);

vehicle.pop();
console.log(vehicle);
