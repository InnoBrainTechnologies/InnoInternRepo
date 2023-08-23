document.addEventListener('DOMContentLoaded', function () {
    const signupForm = document.getElementById('signup-form');
    const loginForm = document.getElementById('login-form');
    const message = document.getElementById('message');

    const registeredUsers = [];

    signupForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const username = document.getElementById('username').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirm-password').value;

        if (password !== confirmPassword) {
            message.textContent = "Passwords do not match.";
        } else {
            registeredUsers.push({ username, password });
            message.textContent = `Welcome, ${username}! You have successfully signed up.`;
        }
    });

    loginForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const username = loginForm.username.value;
        const password = loginForm.password.value;

        const user = registeredUsers.find(user => user.username === username && user.password === password);

        if (user) {
            message.textContent = `Welcome back, ${username}!`;
        } else {
            message.textContent = 'Invalid credentials. Please try again.';
        }
    });
});
