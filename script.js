// script.js

// Cart Management
let cart = [];

function addToCart(item) {
    cart.push(item);
    console.log(item.name + " added to cart.");
}

function removeFromCart(itemId) {
    cart = cart.filter(item => item.id !== itemId);
    console.log("Item removed from cart.");
}

function displayCart() {
    console.log("Items in cart:", cart);
}

// Authentication
let users = [];

function register(username, password) {
    users.push({ username, password });
    console.log("User registered:", username);
}

function login(username, password) {
    const user = users.find(u => u.username === username && u.password === password);
    if (user) {
        console.log("Login successful for:", username);
    } else {
        console.log("Invalid credentials.");
    }
}

function logout(username) {
    console.log("User logged out:", username);
}

// Menu Filtering
const menuItems = [
    { id: 1, name: "Espresso", category: "Coffee" },
    { id: 2, name: "Cappuccino", category: "Coffee" },
    { id: 3, name: "Latte", category: "Coffee" },
    { id: 4, name: "Muffin", category: "Pastry" },
];

function filterMenu(category) {
    return menuItems.filter(item => item.category === category);
}

// Checkout
function checkout(paymentInfo) {
    console.log("Checkout initiated with payment information:", paymentInfo);
    // Payment processing logic here
}

// Admin Dashboard
function addProduct(product) {
    menuItems.push(product);
    console.log("Product added:", product);
}

function removeProduct(productId) {
    const index = menuItems.findIndex(item => item.id === productId);
    if (index !== -1) {
        menuItems.splice(index, 1);
        console.log("Product removed:", productId);
    }
}