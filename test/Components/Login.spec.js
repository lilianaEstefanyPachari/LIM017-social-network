/* eslint-disable import/no-unresolved */
/* eslint-disable import/named */
import { login } from '../../src/Components/Login.js';
import { loginBtnHandler } from '../../src/DOMevents.js';
import { signInWithEmailAndPassword } from '../../src/lib/FirebaseUtils.js';

jest.mock('../../src/lib/FirebaseUtils.js');
jest.mock('../../src/DOMevents.js');
describe('testing login', () => {
  it('inicia sesión correctamente llamando al método signInWithEmailAndPassword', () => {
    document.body.innerHTML = '<div id="rootDiv"></div>';
    document.getElementById('rootDiv').innerHTML = login();
    document.getElementById('inputEmail').value = '';
    document.getElementById('inputPass').value = '';
    loginBtnHandler();
    const btnLogin = document.getElementById('loginBtn');
    btnLogin.dispatchEvent(new Event('click'));
    expect(document.getElementById('emptyInputEmail').innerText).toBe('*Coloque su correo electrónico');
    expect(document.getElementById('emptyInputPass').innerText).toBe('*Coloque su contraseña');
    console.log(signInWithEmailAndPassword.mock);
  });

<<<<<<< HEAD
  //  it('muestra la vista register', () => {
=======
  // fit('muestra la vista register', () => {
>>>>>>> 22f8f62990f356375899352a1280488180cafd26
  //     document.body.innerHTML = '<div id="rootDiv"></div>';
  //     document.getElementById('rootDiv').innerHTML = login();
  //     loginEvents();
  //     const btnBackRegister = document.getElementById('registerP');
  //     btnBackRegister.dispatchEvent(new Event('click'));
  //     expect(window.location.pathname).toEqual('/register');
  //   });
});
