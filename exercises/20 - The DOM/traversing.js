console.log('It works with traversing');

const kenneth = document.querySelector('.kenneth');

// ELEMENTS
console.log(kenneth.children); // the em and the strong tag, all child elements
 console.log(kenneth.firstElementChild); // the em tag
 console.log(kenneth.lastElementChild); // the strong tag
 console.log(kenneth.previousElementSibling); // The element before it
 console.log(kenneth.nextElementSibling); // the element after (img in this case)
 console.log(kenneth.parentElement); // the element wrapper above it

// NODES
console.log(kenneth.childNodes); // 5 items (text, em tag, text, strong tag, text) // each node within the element
console.log(kenneth.firstChild); // Text: "I am Kenneth, I"
console.log(kenneth.lastChild); // Text: " that journey"
console.log(kenneth.previousSibling); // text "/n "
console.log(kenneth.nextSibling); // text "/n "
console.log(kenneth.parentNode); // The body


// Removing Elements
const pizza = document.querySelector('.pizza');
pizza.remove();

const p = document.createElement('p');
p.textContent = 'I will be removed';
document.body.appendChild(p);
p.remove();
console.log(p); // Still there, still exist in memory so you can still use it
document.body.appendChild(p);
