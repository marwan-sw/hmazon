// Array to store cart items
let cartItems = [];

// Function to handle button clicks and add products to cart
document.querySelectorAll('.product-item button').forEach(button => {
    button.addEventListener('click', function() {
        const productName = this.previousElementSibling.textContent; // Get the product name

        // Add product to cart array
        cartItems.push(productName);

        // Update the cart display
        updateCart();
        alert(`${productName} has been added to your cart!`);
    });
});

// Function to update the cart display
function updateCart() {
    const cart = document.getElementById('cart');
    const cartItemsList = document.getElementById('cart-items');
    
    // Clear the current cart items
    cartItemsList.innerHTML = '';

    // Add each item in the cart to the cart display
    cartItems.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        cartItemsList.appendChild(li);
    });

    // Display the cart
    cart.style.display = 'block';
}

// Function to handle checkout button click
document.getElementById('checkout-btn').addEventListener('click', function() {
    alert('Proceeding to checkout...');
    cartItems = []; // Clear the cart after checkout
    updateCart();   // Refresh the cart display
});
