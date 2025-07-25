console.log("Events exercise loaded");

const butts = document.querySelector(".butts");
const coolButton = document.querySelector(".cool");

// butts.addEventListener("click", function () { // This is an anonymous function
//   console.log("Butts got clicked!");
// });

function handleClick() {
  console.log("Butts got clicked again!");
}

const hooray = () => console.log("HOORAY!"); // This is an arrow function

butts.addEventListener("click", handleClick); // This is a named function
coolButton.addEventListener("click", handleClick); // This will also call the same function

butts.removeEventListener("click", handleClick); // This will remove the event listener, so clicking the button won't do anything anymore. Needs to be a named function to work.
butts.addEventListener("click", hooray); // Adding a new event listener with a different function


// Listen on multiple items
const buyButtons = document.querySelectorAll("button.buy");
console.log(buyButtons);

function buyItem() {
  console.log("You clicked a buy button!");
}

buyButtons.forEach(button => {
  button.addEventListener("click", buyItem);
});
