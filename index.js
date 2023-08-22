document.getElementById('loginLink').addEventListener('click', () => {
    window.location.href = 'next.html';
});
const Rform = document.getElementById('registerform');
const Lform = document.getElementById('loginform');
const message = document.getElementById('message');
const existingUsers = JSON.parse(localStorage.getItem('users')) || [];


Rform.addEventListener('submit', function(e) {
    //prevent emaildefault
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (password.length < 6) {
        message.textContent = "password must be nothing less than 6"
    } else {
        message.textContent = ""
    }
    //localstorage
    //creating user object
    const user = {
        email: email,
        name: name,
        password: password,
        username: username
    };
    //overwrite user
    existingUsers.push(user);

    //set items inlocalstorage
    localStorage.setItem('user', JSON.stringify(existingUsers));

    //reload page
    window.location.href = "index.html"

});


Lform.addEventListener('submit', function(e) {
    //prevent emailmdefault
    e.preventdefault();

    const Lemail = document.getElementById('Loginemail')
    const Lpassword = document.getElementById('Loginpassword')

    //tessting the inputed value

    const emailValid = Lemail.test(Remail.value);
    const passwordValid = Lpassword.test(Rpassword.value);

    //calling the action after test

    if (emailValid) {
        alert('Correct')
    } else {
        alert('Incorrect')
    }
})