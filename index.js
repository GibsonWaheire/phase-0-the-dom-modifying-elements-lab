// Write your code here!
// 1. Remove the 'main#main' node from the DOM
const main = document.getElementById("main");
main.remove();

// 2. Creates a new <h1> element
const newHeader = document.createElement("h1");

// 3. Set an id on the new element
newHeader.id = "victory";

// 4. Set text content inside the <h1>
newHeader.textContent = "Gibson is the champion";

// 5. Append the new <h1> element to the body
document.body.append(newHeader);
