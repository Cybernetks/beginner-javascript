const people = [
  { name: 'Wes', cool: true, country: 'Canada' },
  { name: 'Scott', cool: true, country: 'Merica' },
  { name: 'Snickers', cool: false, country: 'Dog Country' },
];

people.forEach((person, index) => {
  console.log(person.name);
});

// Console Methods
//console.table(people);
//console.count('key'); // keeps track of how often something is called based on they key
//console.group('Key'); // Groups all the console methods in 1 function
//console.groupEnd('Key') // Ends the group to determine where to stop catching

// Callstack, stack trace
// Use the go() function to see the callstack at work

// Grabbing Elements
// $0 in the console grabs the last element clicked in the Elements tab
// $1 is the second last clicked and so on
// $ is a short hand selector for 1 element: $('p') takes the first p element
// $$ is a short hand selector for all elements: $$('p') takes all p elements

// Breakpoints
// debugger; Will pause javascript from running and you can step from there if you have dev tools open
// Can also do this in the browser in the sources tab

// Scope
// Allows us to peer into the scope

// Network Requests
// In dev tools -> Network tab

// Break On Attribute
// Dev tools -> Elements -> Right click -> "Break on"
// Dev tools -> Sources -> Right hand side -> "Event Listeners Breakpoints" (and more options)

// Some Setup Code


function doctorize(name) {
  return `Dr. ${name}`;
}

function greet(name) {
  doesntExist();
  return `Hello ${name}`;
}

function go() {
  const name = doctorize(greet('Wes'));
  console.log(name);
}

const button = document.querySelector('.bigger');
button.addEventListener('click', function(e) {
  const newFontSize =
    parseFloat(getComputedStyle(e.currentTarget).fontSize) + 1;
  e.currentTarget.style.fontSize = `${newFontSize}px`;
});

// A Dad joke fetch
async function fetchDadJoke() {
  const res = await fetch('https://icanhazdadjoke.com/', {
    headers: {
      Accept: 'text/plain',
    },
  });
  const joke = await res.text();
  console.log(joke);
  return joke;
}
