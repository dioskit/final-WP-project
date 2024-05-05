'use strict';
document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Retrieve input values
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;

    // Here you can perform authentication
    // For simplicity, let's just log the values
    console.log("Logging in with username:", username);
    console.log("Password:", password);
});

document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Retrieve input values
    const username = document.getElementById('signup-username').value;
    const password = document.getElementById('signup-password').value;

    // Here you can perform signup logic
    // For simplicity, let's just log the values
    console.log("Signing up with username:", username);
    console.log("Password:", password);
});