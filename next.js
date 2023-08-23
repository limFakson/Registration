document.getElementById('loginform').addEventListener('submit', (b) => {
    b.preventDefault();

    const formEmail = document.getElementById("loginemail").value;
    const lPassword = document.getElementById("loginpassword").value;
    const err = document.getElementById("msg");

    //call localstorage element
    const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
    // Find the user with the provided username/email and password
    const user = existingUsers.find(
        (user) => (user.email === formEmail) && user.password === lPassword);

    if (user) {
        // Redirect to the desired page after successful sign-in
        localStorage.setItem('authenticated', formEmail);
        localStorage.setItem('authenticated', lPassword);
        console.log('valid');
        window.location.href = 'index.html';
        alert("Congratulations on signing in")
    } else {
        //const errorMessage = document.getElementById('errorMessage');
        err.textContent = 'Invalid Email/Password.';
        console.log('invalid');
    }
});