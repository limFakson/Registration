const rform = document.getElementById('registerform');
const lform = document.getElementById('loginform');
const message = document.getElementById('message');
const existingUsers = JSON.parse(localStorage.getItem('users')) || [];


rform.addEventListener('submit', function(e) {
    //prevent emaildefault
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    //validation of password length
    if (password.length < 6) {
        message.textContent = "password must be nothing less than 6 words";
        return;
    };

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


lform.addEventListener('submit', (event) => {
    //prevent emaildefault
    event.preventdefault();

    const Lmeassge = document.getElementById("msg");
    const loginmain = document.getElementById("Loginemail").value;
    const Lpassword = document.getElementById("Loginpassword").value;

    //validation of password length
    if (Lpassword.length < 6) {
        Lmeassge.textContent = "password must be nothing less than 6 words";
        console.log('no working');
        return;
    };

    //test the inputed value

    //calling the action after test


});