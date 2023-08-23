const loginForm = document.getElementById('login-form');
const message = document.getElementById('message');
const registeredUsers = []; 
function registerUser(username, password) {
    registeredUsers.push({ username, password });
}

registerUser('KATESHIYA NIRAJ', '123456789');

loginForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const username = loginForm.username.value;
    const password = loginForm.password.value;
    const user = registeredUsers.find(user => user.username === username && user.password === password);

    if (user) {
        window.location.href = 'home.html';
    } else {
        message.textContent = 'Invalid credentials. Please try again.';
    }
});
