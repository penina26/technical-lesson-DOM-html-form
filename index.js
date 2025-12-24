// Write your code here!
// 1. Set up the starter data
const shoppingList = [
    { name: "Chicken Breast", price: 10.50 },
    { name: "Paparika", price: 3.20 },
    { name: "Chips", price: 6.50 },
    { name: "Eggs", price: 4.00 },
    { name: "Milk", price: 7.80 }
];

// 2. Define the function to display a single item
function displayCartItem(item) {
    // Select the cart list 
    const shoppingCart = document.querySelector("#cart");

    // Create the list item container
    const newItem = document.createElement("li");

    // Create the paragraphs for name and price
    const itemName = document.createElement("p");
    const itemPrice = document.createElement("p");

    // Assign the text content
    itemName.textContent = item.name;
    itemPrice.textContent = "$" + item.price;

    // Append paragraphs to the list item, and list item to the cart
    newItem.append(itemName, itemPrice);
    shoppingCart.append(newItem);
}

// 3. Loop through the initial list to display pre-existing items
shoppingList.forEach(item => {
    displayCartItem(item);
});

// 4. Handle Form Submission
const form = document.querySelector("#new-cart-item-form");

function handleSubmit(event) {
    // Prevent the page from refreshing
    event.preventDefault();

    // Get the values from the form inputs

    const newName = event.target.name.value;
    const newPrice = event.target.price.value;

    // Create the new item object
    const newItem = {
        name: newName,
        price: newPrice
    };

    // Add the new item to our data list
    shoppingList.push(newItem);

    // Update the DOM to show the new item immediately
    displayCartItem(newItem);

    // Clear the form inputs after submission
    event.target.reset();
}

// 5. Attach the event listener to the form
form.addEventListener("submit", handleSubmit);