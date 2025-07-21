// Make a div
const myDiv = document.createElement('div');
// add a class of wrapper to it
myDiv.classList.add('wrapper');
// put it into the body
document.body.appendChild(myDiv);

// make an unordered list
const myList = `
<ul>
    <li>One</li>
    <li>Two</li>
    <li>Three</li>
</ul>
`;

// add three list items with the words "one, two, three" in them
// put that list into the above wrapper
myDiv.innerHTML = myList;

// create an image
const myImage = document.createElement('img');

// set the source to an image
myImage.src = 'https://picsum.photos/500';
// set the width to 250
myImage.style.width = '250px';
myImage.height = 250;
// add a class of cute
myImage.classList.add('cute');
// add an alt of Cute Puppy
myImage.alt = 'Cute Puppy';
// Append that image to the wrapper
myDiv.appendChild(myImage);

// with HTML string, make a div, with two paragraphs inside of it
// put this div before the unordered list from above
const newDiv = `
<div class="firstDiv">
    <p>First paragraph</p>
    <p>Second Paragraph</p>
</div>
`;

const ulElement = myDiv.querySelector('ul');
ulElement.insertAdjacentHTML('beforebegin', newDiv);


// add a class to the second paragraph called warning
const firstDiv = document.querySelector('.firstDiv');
firstDiv.children[1].classList.add('warning');
// remove the first paragraph
firstDiv.firstElementChild.remove();

// create a function called generatePlayerCard that takes in three arguments: name, age, and height
function generatePlayerCard(name, age, height) {
    console.log('Generating Player Card');
    return `
        <div class="playerCard">
            <h2>${name} — ${age}</h2>
            <p>They are ${height} and ${age} years old. In Dog years this person would be ${age * 7}. That would be an old dog!</p>
            <button class="delete" type="button">&times; Delete</button>
        </div>
    `;
}

// have that function return html that looks like this:
// <div class="playerCard">
//   <h2>NAME — AGE</h2>
//   <p>They are HEIGHT and AGE years old. In Dog years this person would be AGEINDOGYEARS. That would be a tall dog!</p>
// </div>

// make a new div with a class of cards
const cardsDiv = document.createElement('div');
cardsDiv.classList.add('cards');

// make 4 player cards using generatePlayerCard
let cardsHTML = generatePlayerCard('Kenneth', 37, 170);
cardsHTML +=  generatePlayerCard('Ilse', 37, 160);
cardsHTML +=  generatePlayerCard('Aiden', 6, 110);
cardsHTML +=  generatePlayerCard('Lewis', 2, 80);

// append those cards to the div
cardsDiv.innerHTML = cardsHTML;
// put the div into the DOM just before the wrapper element
myDiv.insertAdjacentElement('beforebegin', cardsDiv);
// Bonus, put a delete Button on each card so when you click it, the whole card is removed

// select all the buttons!
const buttons = document.querySelectorAll('.delete');
// make out delete function
function deleteCard(event) {
    const button = event.currentTarget;
    // button.parentElement.remove();
    button.closest('.playerCard').remove();
  }
// loop over them and attach a listener
buttons.forEach(button => button.addEventListener('click', deleteCard));
