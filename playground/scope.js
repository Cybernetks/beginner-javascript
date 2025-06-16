// Global scope
// Any variable defined outside of a function, if, .... just in the general file
//const name = 'Kenneth';
//let second = 'Schabrechts';
//var age = 100; // var variables are also attached to window in console.
//
//function sayHi() { // The function is also in the global scope
//    console.log('Hi');
//}



// Function scope
// A variable defined in a function stays in a function unless returned into a new global variable
// If the variable in the function is not found it will look a level higher, which is global scope, this is why age works
//const age = 100;
//
//function go() {
//    const hair = 'blonde';
//    console.log(hair); // blonde
//    console.log(age); // 100 as it only finds the global scope age (if age is not defined in the function later on)
//    const age = 200; // shadow variable as there is also a global scope age
//    console.log(age); // 200 as it will find the function scope age
//}
//
//go();
//console.log(hair); // Uncaught ReferenceError as the variable only exists in the go function



// Block scope
// Is the scope in between {}, it keeps everything withing that scope
//if(1 === 1) {
//    const cool = true;
//}
//console.log(cool); // Won't work unless the cool variable is a var or if the var is declared above the blockscope:
//
//let equals;
//if(1 === 1) {
//    equals = true;
//}
//console.log(equals); // works because we update the global scope equals in a block scope
//
//function isCool(name) { // function scope
//    let cool;
//    if(name === 'kenneth') { // block scope
//        cool = true;
//    }
//    console.log(cool);
//    return cool;
//}
//
//for (var i = 0; i < 10; i++) { // Because this is a var the i will leak out. Use let so it's scoped to block scope!
//    console.log(i);
//}




// Scope lookup
//const dog = 'Rex';
//function logDog() {
//    console.log(dog);
//}
//
//function go() {
//    const dog = 'Faya';
//    logDog();
//}
//
//go(); // Logs 'Rex' because 'Faya' is scoped in go but the console log is in logDog which has no dog variable so it ups a level to the global scope
//// JS is Lexicaly scoped, it does not care where it's run but where it's defined




//  Best practices
// - Do not create global variables when possible
// - Function names are also in the global scope
// - A function defined in another function is perfectly fine but only availabe in that function - Function Scope & see Closure later
