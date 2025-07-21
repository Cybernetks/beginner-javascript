console.log('It works with strings');

// STRING INTO DOM
//const item = document.querySelector('.item');
//const width = 500;
//const src = `https://picsum.photos/${width}`;
//const description = `Picsum Photo`;
//const myHTML = `
//    <div class="wrapper">
//        <h1>Picsum Picture</h1>
//        <img src="${src}" alt="${description}" />
//    </div>
//`; // Downside: this is not an element but just a string, so no modifiers on this like myHTML.classList
//// You first need to dump it into the HTML and then re select it
//
//item.innerHTML = myHTML; // Input HTML right into the item
//console.log(item.innerHTML);
//
//const itemImage = document.querySelector('.wrapper img');
//
//itemImage.classList.add('round');



// TURN IT INTO A DOM ELEMENT FIRST TO MANIPULATE IT
const width = 500;
const src = `https://picsum.photos/${width}`;
const description = `Picsum Photo`;
const myHTML = `
    <div class="wrapper">
        <h1>Picsum Picture</h1>
        <img src="${src}" alt="${description}" />
    </div>
`;

// Turn a string into a DOM element
const myFragment = document.createRange().createContextualFragment(myHTML); // Not on the page yet but now it is a DOM element we can manipulate
console.log(myFragment.querySelector('img'));
console.log(myFragment);

document.body.appendChild(myFragment);


// PITFALLS:
// - HTML into an input when you want to render the input into HTML can mess up everything
// - XSS (Cross Site Scripting): When you input script tags into the input and it renders through this so you can potentially run scripts
// Security video follows on how to tackle this