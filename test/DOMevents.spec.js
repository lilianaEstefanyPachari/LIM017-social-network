const fs = require('fs');
document.body.innerHTML = fs.readFileSync('./src/index.html');

// importamos la funcion que vamos a testear
const { registerEvents } = require('../src/DOMevents.js');


// import { registerEvents } from '../src/DOMevents.js';
// import { login } from '../src/Components/Login.js'; 
describe('testing loginBtnHandler', () => {
xit('algo testeare', () => {
document.body.innerHTML = '<div id="rootDiv"></div>';
// document.getElementById('rootDiv').innerHTML = login();
// document.getElementById('inputEmail').value = 'myemail@gmail.com';
// document.getElementById('inputPass').value = '1234567';



});
});