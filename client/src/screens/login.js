// Get form element
const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", function (e) {
    e.preventDefault(); // Stop page reload

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    // Get registered users from localStorage
    const users = JSON.parse(localStorage.getItem("users")) || [];

    // Check if user exists
    const validUser = users.find(
        (user) => user.email === email && user.password === password
    );

    if (validUser) {
        alert("Login Successful!");

        // Save login session
        localStorage.setItem("loggedInUser", JSON.stringify(validUser));

        // Redirect to home page
        window.location.href = "index.html";
    } else {
        alert("Invalid Email or Password!");
    }
});
