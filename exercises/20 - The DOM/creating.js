console.log('It works');

const myParagraph = document.createElement('p'); // Only creates, does not place on the page
myParagraph.textContent = 'I am a P';
myParagraph.classList.add('special');
console.log(myParagraph);

const myImage = document.createElement('img');
myImage.src = 'https://picsum.photos/200';
myImage.alt = 'Created image in JS';
console.log(myImage);

const myDiv = document.createElement('div');
myDiv.classList.add('wrapper');
console.log(myDiv);

//document.body.appendChild(myDiv); //body is a selector that lives on document
//myDiv.appendChild(myParagraph);
//myDiv.appendChild(myImage); // Doing it this way creates a reflow and thus repaints it all, so better to do the reverse: All into the div and then paint it on the DOM

myDiv.appendChild(myParagraph);
myDiv.appendChild(myImage);
document.body.appendChild(myDiv); //body is a selector that lives on document

// We need to add a heading to the top
const myHeading = document.createElement('h2');
myHeading.textContent = 'Cool Things';
myDiv.insertAdjacentElement('afterbegin', myHeading);


// Create a list with 5 items in it
const myList = document.createElement('ul');

for (let i = 1; i < 6; i++) {
    const myItem = document.createElement('li');
    myItem.textContent = 'Item ' + i;
    myList.appendChild(myItem);
}
document.body.appendChild(myList);