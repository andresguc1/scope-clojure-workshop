'use strict';
PI = 3.1416;
console.log(pi)

// strict mode can  be added inside of a functions

function myFunction() {
    'use strict';
    return pi = 3.1416;
}

console.log(myFunction());