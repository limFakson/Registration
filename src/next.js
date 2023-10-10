document.getElementById('loginform').addEventListener('submit', (b) =>{
    b.preventDefault();

    const formEmail = document.getElementById("loginemail");
    const lPassword = document.getElementById("loginpassword");
    const err = document.getElementById("msg");

    //get the details inputed
    const logindata = {
        email: formEmail.value,
        password: lPassword.value
    }

    //display inputed details
    console.log( JSON.stringify(logindata));
    
    //retrieve the data stored inside the localstorag
    const existingUsers = JSON.parse(localStorage.getItem('user'));
    console.log(existingUsers);

    const checkingdata = existingUsers.find(
        (user)=> user.email === logindata.email && user.password === logindata.password
    );

    if (checkingdata) {
        console.log('it' + " " + "valid");
        window.location.href = "profile.html"
    }else{
        console.log("wrong");
        err.textContent = "inputed details are wrong"
    }
});