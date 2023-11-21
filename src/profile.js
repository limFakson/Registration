
const data = JSON.parse(localStorage.getItem('user'));
const username = data[0].username;


document.getElementById('demo').textContent = "Hello" + " " + username;

console.log(username);