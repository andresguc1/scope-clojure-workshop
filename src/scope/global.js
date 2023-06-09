// Variables

var a; // declaration
var b = 'b'; // declaration / asignation
b = 'bb'; // reasignacion
var a = 'aa'; // redeclaracion

// Global Scope
var fruit = 'Apple'; // global
console.log(fruit);

function bestFruit() {
    console.log(fruit);
}

bestFruit();

function countries () {
    country = 'colombia'; // global
    console.log(country);
}

countries();
console.log(country);
