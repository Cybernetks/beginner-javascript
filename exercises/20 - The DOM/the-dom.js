//function init() {
//    const p = document.querySelector('p');
//    console.log(p);
//}
//
//// init will run when the DOM is loaded
//document.addEventListener('DOMContentLoaded', init);


//const p = document.querySelector('p'); // selects the first matching p element
//console.log(p);
//
//const divs = document.querySelectorAll('div'); // selects all div elements
//console.log(divs);
//
//const items = document.querySelectorAll('.item'); // selects all div elements
//console.log(items);
//
//const itemImages = document.querySelectorAll('.item img'); // selects all div elements
//console.log(itemImages);
//
//const item2 = document.querySelector('.item2');
//const item2Image = item2.querySelector('img');
//console.log(item2Image);
//
//const heading = document.querySelector('h2');
//console.log(heading.textContent); // Also will show the hidden span
//console.log(heading.innerText); // Is aware of the css and so only shows the heading text
//console.log(heading.innerHTML); // Shows the html inside the heading, including the span
//console.log(heading.outerHTML); // Shows the entire html starting at and including the h2 tag
//
//console.dir(heading); // Shows you all properties BUT firefox will always do this even with a .log when logging a DOM element
//heading.textContent = 'Kenneth is cool'; // Setter - Set the text xontent property on that element
//console.dir(heading.textContent); // This getter will make it so we only show the text
//
//
//
//
//const pizzaList = document.querySelector('.pizza');
//console.log(pizzaList.textContent);
////pizzaList.textContent = `${pizzaList.textContent} 🍕`; // Slow as it adds and rerenders it
//pizzaList.insertAdjacentText('beforeend', '🍕');



// CLASSES
const pic = document.querySelector('.nice');
pic.classList.add('open');
pic.classList.remove('cool');
pic.classList.add('round'); // Adds the round class

console.log(pic.classList);

function toggleRound() {
    pic.classList.toggle('round');
}

pic.addEventListener('click', toggleRound);



pic.alt = 'Random Picture'; // Setter
console.log(pic.alt); // Getter
console.log(pic.naturalWidth); // Getter but gives 0 since you need to wait for the pic to be loaded

pic.addEventListener('load', function(){
    console.log(pic.naturalWidth); // Gives the correct width because it's triggered after load event
});

console.log(pic.getAttribute('alt'));
pic.setAttribute('kenneth-is-cool', 'Sure is'); // Sets a new custom attribute with the value
// custom attributes are dangerous for when the standard wants to introduce the same.
// But if you want to use data attributes start the attribute with `data-` :
pic.setAttribute('data-source', 'picsum');
console.log(pic.dataset); // Get's the whole data- set
console.log(pic.dataset.name); // Get's a specific data- item