const rform = document.getElementById('registerform');


const settingUsers = JSON.parse(localStorage.getItem('users')) || [];


rform.addEventListener('submit', function(e) {
    //prevent emaildefault
    e.preventDefault();

    const message = document.getElementById('message');
    const email = document.getElementById("email").value;
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const passwordConfirm = document.getElementById("confirm").value;

    //validation of password length
    if (password.length < 6) {
        message.textContent = "password must be nothing less than 6 words";
        return;
    };
    if(password !== passwordConfirm) {
        message.textContent = "password not matching";
        return;
    };


    //localstorage
    //creating user object
    const user = {
        email: email,
        password: password,
        conpass: passwordConfirm,
        username: username
    };

    //overwrite user
    settingUsers.push(user);

    //set items inlocalstorage
    localStorage.setItem('user', JSON.stringify(settingUsers));

    //reload page
    window.location.href = "./src/next.html"

});