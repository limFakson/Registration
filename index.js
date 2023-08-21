document.getElementById('loginLink').addEventListener('click', () => {
    window.location.href = 'next.html';
});
const Rform = document.querySelector('#registerform')
const Lform = document.getElementById('loginform')


Rform.addEventListener('submit', (e) => {
    const name = document.getElementById("name").value
    const email = document.getElementById("email").value
    const username = document.getElementById("username").value
    const password = document.getElementById("password").value
        //localstorage

    localStorage.setItem('name', name);
    localStorage.setItem('username', username);
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);

    //getItems from localstorage
    const Remail = localStorage.getItem('email');
    const Rpassword = localStorage.getItem('password');
});


Lform.addEventListener('submit', () => {
    preventdefault()
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