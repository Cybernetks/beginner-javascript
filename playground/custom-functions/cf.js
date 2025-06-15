console.log('Custom Functions!');

// Function definition
// Parameters scoped to the function body
function calculateBill(billAmount, taxRate = 1.21, tipRate = 0.15) {
    // This is the function body
    console.log('Running calculate bill!')

    return (billAmount * taxRate) + (billAmount * tipRate);
}

// Function call OR **Run**
const total = calculateBill(100);
console.log(`Your total is €${total}`);

const customTaxRate = 1.06;
console.log(`Your total is €${calculateBill(100, customTaxRate)}`);

// Setting undefined as taxRate will use the default value
console.log(`Your total is €${calculateBill(100, undefined, 0.10)}`);

console.log(`Your total is €${calculateBill(10 + 10 + 30 + 25)}`);

// If the parameter is empty in the call then it's undefined as the method will create the variable
function sayHiTo(firsName) {
    return `Hello ${firsName}`;
}

const greeting = sayHiTo('Kenneth');
console.log(greeting);


function doctorize(name) {
    return `Dr ${name}`;
}

function yell(name = 'Silly Goose') {
    return `HEY ${name.toUpperCase()}`;
}

console.log(yell(doctorize('Kenneth')))