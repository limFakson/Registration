const rform = document.getElementById('registerform');


const existingUsers = JSON.parse(localStorage.getItem('users')) || [];


rform.addEventListener('click', function(e) {
    //prevent emaildefault
    e.preventDefault();

    const name = document.getElementById("name").value;
    const message = document.getElementById('message');
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
    settingUsers.push(user);

    //set items inlocalstorage
    localStorage.setItem('user', JSON.stringify(settingUsers));

    //reload page
    window.location.href = "next.html"

});