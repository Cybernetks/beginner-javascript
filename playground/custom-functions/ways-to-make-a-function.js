// Functions are first class citizens

// Regular function
//
//function doctorize(firstName) {
//    return `Dr. ${firstName}`;
//}


// Anonymous function - not used like this but in other situation
//
//function (firstName) {
//    return `Dr. ${firstName}`;
//}


// Function Expression - storing the function as a value
// Different then regular than normal due to Hoisting (regular function exist even if you call it before the order in the file), variabled will be after made
// Hoisting puts functions at the top but not Function Expressions
//
//const doctorize = function (firstName) {
//    return `Dr. ${firstName}`;
//}


// Arrow Functions - has nuances in how to make them ( can be done in multiple ways)
// No own scope, Easy to one-line, are anonymous functions
//
//function inchToCM(inches) { // Regular function for example
//    return inches * 2.54
//}
//
//const inchToCM = function(inches) { // Anonymous function
//    return inches * 2.54
//}
//
//const inchToCM = (inches) => { // Arrow function v1
//    return inches * 2.54
//}
//
//const inchToCM = (inches) =>  inches * 2.54; // Arrow function v2 with implicit return ( no return keyword )
//
//const inchToCM = inches =>  inches * 2.54; // If there is only 1 parameter you can remove the ()
//
//function add (a, b = 3) {
//    const total = a + b;
//    return total;
//}
//
//const add = (a, b = 3) => a + b;
//
// returning an object in arrow function - Not perse more readable
//const makeABaby = (first, last) => ({name: `${first} ${last}`, age: 0});


// IIFE - Immediatly Invoked Function Expression
//(function() {
//    console.log('Running the IIFE')
//    return 'You are cool';
//})();
//
//(function(age) {
//    console.log('Running the IIFE')
//    return `You are cool and age ${age}`;
//})(18);


// Methods
// A function that lives in an object - Like log is a function living in console, so a method of console
const kenneth = {
    name: 'Kenneth',
    // Method
    sayHi: function() {
        console.log(`Hey ${this.name}`);
        return `Hey Kenneth`;
    },
    // short hand method
    yellHi() {
        console.log('HEY KENNETH');
    },
    // Arrow function
    wisperHi: () => console.log('hii Kenneth')
}


// Callback Function
// click callback
const button = document.querySelector('.clickMe');
button.addEventListener('click', kenneth.yellHi); // no () because we do not need to run it here, we tell the browser to use this
button.addEventListener('click', function() {console.log('Nice Job')}); // Can also use an anonymous function

// Timer callback
setTimeout(kenneth.wisperHi, 1000);
setTimeout(function() {console.log('Timer done!')}, 1000);