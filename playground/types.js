// STRINGS
const name = 'Kenneth'; // Single
const middle = "The legend"; // Double
const last = `Schabrechts`; // Backticks (most advantages to use)

const sentenceOne = 'She\'s so cool'; // escaping
const sentenceTwo = "She's so \"cool\"";
const sentenceThree = `She's so "cool"`;

const multiLine = 'Ohhhh \
\
yeah';

// Backticks allow space en new line
const multiLineTwo = `Ohhhh

    yeah`;

// Also no need to close and re-open string with variables and it processes what's in between the {}
const currentYear = new Date().getFullYear();
const hello = `hello my name is ${name}. Nice to meet you! I am ${currentYear - 1988} years old.`

const html = `
<div>
    <h2>${name}</h2>
    <p>${hello}</p>
</div>
`;

document.body.innerHTML = html;



// NUMBERS
// integer
const age = 37;
// float
const float = 100.5;

const a = 10;
const b = 20;

const smarties = 20;
const kids  = 3;
const smartiesPerKids = Math.floor(smarties / kids);
const smartiesForDad = smarties % kids;
console.log(`Each kid gets ${smartiesPerKids} and dad gets ${smartiesForDad}`);

// These are also Numbers
console.log(typeof NaN); // NaN - Not a Number - for when you do weird calculations like 10 / 'dog'
console.log(typeof Infinty); // When the nuber becomes too high to calculate like 10 ** 2000
// ** means to the power of

const floating = 0.1 + 0.2 // will return 0.300000004
// because of this Wes suggest to work in cents if working with money: 100 cents or 1.00 EUR for example



// OBJECTS
const person = {
    first: 'Kenneth',
    last: 'Schabrechts',
    age: 37,
};



// NULL AND UNDEFINED
let dog;
console.log(dog); // undefined (created the var but not set any value )

// NULL is a value of nothing
let somethingUndefined;
const somethingNull = null;

const cher = {
    first: 'cher',
}

const teller = {
    first: 'Raymond',
    last: 'Teller',
}
teller.first = 'Teller';
teller.last = null;

console.log(cher.last); //Undefined - created but not set
console.log(teller.last) // null - explicitly set



// BOOLEANS AND EQUALITY
let isDrawing = false;
const ofAge = age > 18; // Calculated value
console.log(ofAge); // true

console.log(age === 37); // true
console.log(age === 100); // false

// == checks value but not type: "10" == 10 -> true
// === checks value and type: "10" === 10 -> false