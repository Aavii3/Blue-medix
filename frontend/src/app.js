// Sample data for Users and Products
const users = [
    { id: 1, name: "Alice Johnson", role: "Admin" },
    { id: 2, name: "Bob Smith", role: "User" }
];

const products = [
    { id: 1, name: "Paracetamol", category: "Medicine" },
    { id: 2, name: "Hand Sanitizer", category: "Hygiene" }
];

// Function to display Users
function displayUsers() {
    const usersSection = document.getElementById("users");
    let userList = "<h2>Users</h2><ul>";
    users.forEach(user => {
        userList += `<li>${user.name} - ${user.role}</li>`;
    });
    userList += "</ul>";
    usersSection.innerHTML = userList;
}

// Function to display Products
function displayProducts() {
    const productsSection = document.getElementById("products");
    let productList = "<h2>Products</h2><ul>";
    products.forEach(product => {
        productList += `<li>${product.name} - ${product.category}</li>`;
    });
    productList += "</ul>";
    productsSection.innerHTML = productList;
}

// Call functions when the page loads
window.onload = function() {
    displayUsers();
    displayProducts();
};