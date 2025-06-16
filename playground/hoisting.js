// HOISTING
// Acces function and variables before they have been created
// 2 things are hoisted: Function declarations and variable declarations
// Not recommended but some people do this because they first want to see what the file does AND then how it does it.



// Function hoisting
sayHi(); // Works since the function declaration is hoisted to the top of the file

function sayHi() {
    console.log('Hey!');
    console.log(add(10,2)); // Works because js re-arranges so it moves all to the top before running
}

function add(a, b) {
    return a + b;
}




// Variable hoisting
// var is hoisted, initialized but returns undefined
// let and const are Hoisted but not initialized and so throw a ReferenceError
console.log(age); // Will undefined - JS will hoist the variable but not the value setting
var age = 10;


// Arrow functions or a function expression wont be hoisted