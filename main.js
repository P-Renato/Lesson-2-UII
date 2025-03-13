/*
For Today
- Event listeners: click, onmouseover, 


*/

/*
many things happens when interacting with a webpage
Something happens in the browserthat triggers on event

User events ***
Something happens when you:
- press a button
- submit a form

Browser events ***
Smething happens when:
- page content is done loading
- resize the window
- scroll
- an error occurs while loading a file/image

*/

/*
We can listen to events with events listeners ( addEventListener  method )
Event listeners are attached to a target
Any element can be a target
The document can also be a target
*/

// create function that we will pass to event listener
function myButtonWasClicked() {
    alert("click");
}

// Select the target
const myButton = document.querySelector("button") // myButton is the target


// Apply the function 
/*
addEventListener allows you to specify the event to listen for
(e.g. click, mouseover, keypress ets... ) AND the function to run when that event occurs 
*/
myButton.addEventListener("click", myButtonWasClicked) // It has to be "click" because that is the vent we want to trigger