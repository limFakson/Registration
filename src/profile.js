
const data = JSON.parse(localStorage.getItem('user'));
const username = data.username;


document.getElementById('demo').textContent = "Hello" + " " + 'username';

console.log(username);